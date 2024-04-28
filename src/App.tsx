/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {  UserInfoProvider } from './context/UserContext';
import GetStarted from './screens/GettingStarted/GetStarted';
import SignUP from './screens/GettingStarted/SignUP';
import Otp from './screens/GettingStarted/Otp';
import UserInfo from './screens/GettingStarted/UserInfo';
import HealthInfo from './screens/GettingStarted/HealthInfo';
import CreatingAccount from './screens/GettingStarted/CreatingAccount';
import MainHome from './screens/Home/MainHome';
import SignIn from './screens/GettingStarted/SignIn';
import ChatAI from './screens/ChatAI/ChatAI';
import { SafeAreaView,View } from 'react-native';
import LottieView from 'lottie-react-native';
import LeaderBoard from './screens/Leaderboard/LeaderBoard';
import Subscription from './screens/Subscription/Subscription';
import axios from 'axios'
import StartLoad from './screens/Starting/StartLoad';
import VideoTask from './screens/VideoTask/VideoTask';
import ImageTask from './screens/ImageTask/ImageTask';
import StepTask from './screens/StepTask/StepTask';


export type RootStackParamList = {
  GetStarted: undefined;
  SignUp: undefined;
  Otp: undefined;
  UserInfo: undefined;
  HealthInfo: undefined;
  CreatingAccount: undefined;
  SignIn: undefined;
};

export type RootStackParamList2 = {
  MainHome: undefined;
  ChatAI: undefined;
  LeaderBoard:undefined;
  Subscription:undefined;
  VideoTask:undefined;
  ImageTask:undefined;
  StepTask:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Stack2 = createNativeStackNavigator<RootStackParamList2>();

const LoginNav = () => (
  <Stack.Navigator initialRouteName="GetStarted">
    <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
    <Stack.Screen name="SignUp" component={SignUP} options={{ headerShown: false }} />
    <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} />
    <Stack.Screen name="UserInfo" component={UserInfo} options={{ headerShown: false }} />
    <Stack.Screen name="HealthInfo" component={HealthInfo} options={{ headerShown: false }} />
    <Stack.Screen name="CreatingAccount" component={CreatingAccount} options={{ headerShown: false }} />
    <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const MainApp = () => (
  <Stack2.Navigator initialRouteName="MainHome">
    <Stack2.Screen
      name="MainHome"
      component={MainHome}
      options={{
        headerShown: false,
     
      }}
    />
    <Stack2.Screen
      name="VideoTask"
      component={VideoTask}
      options={{
        headerShown:false
      }}
    />
    {/* <Stack2.Screen
      name="ImageTask"
      component={ImageTask}
      options={{
        headerShown:false
      }}
    /> */}
    <Stack2.Screen
      name="StepTask"
      component={StepTask}
      options={{
        headerShown:false
      }}
    />
    <Stack2.Screen
      name="ChatAI"
      component={ChatAI}
      options={{
        headerShown: false,
     
      }}
    />
    <Stack2.Screen
      name="LeaderBoard"
      component={LeaderBoard}
      options={{
        headerShown: false,
  
      }}
    />
    <Stack2.Screen
      name="Subscription"
      component={Subscription}
      options={{
        headerShown: false,
      }}
    />
  </Stack2.Navigator>
);


function App(): JSX.Element {
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if(token){
        const data = await AsyncStorage.getItem('isLogged');
      const streakData = await AsyncStorage.getItem('streak');
      if(streakData){
        const storedDate = new Date(JSON.parse(streakData))
        const today = new Date();
        // console.log('todaysDate'+today);
        // console.log(storedDate);
        if (
          storedDate.getFullYear() !== today.getFullYear() ||
          storedDate.getMonth() !== today.getMonth() ||
          storedDate.getDate() !== today.getDate()
        ){
          axios.post('http://192.168.0.159:3002/streak',{token},{
            headers:{
              'Content-Type':'application/json'
            }
          })
        }
      }else{
        const response = await axios.post('http://192.168.0.159:3002/streak',{token},{
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if(response.status==200){
          const time = new Date(); 
          const timeString = JSON.stringify(time);
          await AsyncStorage.setItem('streakData',timeString);
        }
      }
      setIsLogged(Boolean(data));
      } 
      const timer = setTimeout(() => {
        setLoading(false); 
    }, 2000); 

    return () => clearTimeout(timer);
    };
    getToken();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {/* <View style={{height:'100%',width:"100%",backgroundColor:'#1A1919',justifyContent:'center',alignItems:'center'}}>
          <LottieView
            source={require('../assets/animations/loading.json')}
            autoPlay
            loop
            style={{height:400,width:400}}
          />
        </View> */}
        <StartLoad/>
      </SafeAreaView>
    );
  }

  return (
    <UserInfoProvider>
      <NavigationContainer>
        <SafeAreaView style={{flex:1,backgroundColor:"#1A1919"}}>
        {isLogged ? <MainApp /> : <LoginNav />}
        </SafeAreaView>
      </NavigationContainer>
    </UserInfoProvider>
  );
}

export default App;
