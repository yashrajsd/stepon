/* eslint-disable prettier/prettier */
import LottieView from 'lottie-react-native';
import React, {  useEffect, useState } from 'react';
import { View, ScrollView, Text,TouchableOpacity,PermissionsAndroid,Alert } from 'react-native';
import { Image } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeMap from '../../components/HomeMap';
import DisplayCard from './MHome/DisplayCard';
import HomeNavSec from './MHome/HomeNavSec';
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList2} from '../../App'
import Streak from './MHome/Streak';
import Level from './MHome/Level';
import DailyTask from './MHome/DailyTask';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import DeviceConnection from '../Device/DeviceConnection';

type MainHomeProps = NativeStackScreenProps<RootStackParamList2,'MainHome'>

const MainHome = ({navigation}:MainHomeProps) => {

  const [user,setUser] = useState(null);
  const [steps,setSteps] = useState(0);
  const [deviceID, setDeviceID] = useState(null);
  const [stepCount,setStepCount] = useState(0);
  const [connectionStatus,setConnectionStatus] = useState("connected")

  useEffect(()=>{
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          {
            title: 'Location Permission',
            message: 'Allow the app to access your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
    
        console.log('Permission Result:', granted);
        Alert.alert(granted)
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted');
        } else {
          console.log('Location permission denied or not requested');
        }
      } catch (error) {
        console.error('Error requesting location permission:', error);
      }
    };
    
    
    requestLocationPermission();
},[]);

  const fetchUserData = async (token) => {
    try {
      const response = await axios.get(`http://192.168.0.159:3002/api/getUser/${token}`);
      const userData = response.data;
      setUser(userData)
      setSteps(userData.steps)
      console.log('User Data:', userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(()=>{
    const getToken = async()=>{
      const token = await AsyncStorage.getItem('token');
      fetchUserData(token);
    }
    getToken()
  },[])

  if(!user){
    return(
        <View style={{height:'100%',width:"100%",backgroundColor:'#1A1919',justifyContent:'center',alignItems:'center'}}>
          <LottieView
            source={require('../../../assets/animations/loading.json')}
            autoPlay
            loop
            style={{height:400,width:400}}
          />
        </View>
    )
  }

  if(connectionStatus!=='connected'){
    return <DeviceConnection deviceID={deviceID} setDeviceID={setDeviceID} stepCount={stepCount}  setStepCount={setStepCount} connectionStatus={connectionStatus}  setConnectionStatus={setConnectionStatus}/>
  }

  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'#1A1919' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} scrollEnabled>
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,marginTop:20}}>
          <View style={{flexDirection:'row',gap:10}}>
            <View>
              <View style={{width:40,height:40,backgroundColor:'#4B9EDA',borderRadius:20,overflow:'hidden'}}>
              <LottieView
                source={require(`../../../assets/animations/profile.json`)} // Update to the correct path for the 'done' animation
                autoPlay
                loop // Assuming 'done' animation is not supposed to loop
                style={{ height: 40, width: 40,position:'relative',top:3 }}
              />
              </View>
            </View>
            <View>
              <Text style={{color:'white',fontWeight:'800',fontFamily:'Poppins SemiBold'}}>
                {user.name}
              </Text>
              <Text style={{color:'white'}}>
                {user.subscriptionPlan} Account
              </Text>
            </View>
          </View>
          <View style={{flexDirection:'row',gap:10}}>
            <View style={{backgroundColor:'#363535',justifyContent:'center',alignItems:'center',padding:8,borderRadius:6}}>
              <Image
                source={require('../../../assets/icons/bellicon.png')}
                style={{height:25,width:20,resizeMode:'contain'}}
              />
            </View>
            <TouchableOpacity style={{backgroundColor:'#363535',justifyContent:'center',alignItems:'center',padding:8,borderRadius:6}} onPress={()=>navigation.navigate('ChatAI')}>
              <Image
                source={require('../../../assets/icons/chat.png')}
                style={{height:25,width:25}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <HomeMap steps={steps}/>
        </View>
        <View style={{borderBottomWidth:2,borderBottomColor:'#3F3F3F',marginHorizontal:20,marginVertical:20}}/>
        <HomeNavSec navigation={navigation}/>
        <Streak user={user}/>
        <Level user={user}/>
        <DailyTask user={user}/>
        <View>
          <DisplayCard/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};



export default MainHome;
