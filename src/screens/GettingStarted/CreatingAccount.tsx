/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import LottieView from 'lottie-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../../App'

type HomeProps = NativeStackScreenProps<RootStackParamList,'CreatingAccount'>

const CreatingAccount = ({navigation}:HomeProps) => {
  const [loadingText, setLoadingText] = useState('Creating your account');
  const [creating, setCreating] = useState(false);
  const {phoneNumber,email,name,height,issue} = useContext(UserContext);

  useEffect(()=>{
    const registerUser=async()=>{
      try{
        const response = await axios.post('http://192.168.0.159:3002/api/userauth/register',{phoneNumber,email,height,name,issue},{
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if(response.status==200){
          if (response.status === 200) {
            setTimeout(() => {
              setCreating(true);
            }, 3000);
          }
        }
      }catch(error){
        console.error("Error occuered with msg:"+error);
      }
    }
    registerUser()
  },[email,phoneNumber,height,name,issue,navigation])

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((prevText) => {
        switch (prevText) {
          case 'Creating your account...':
            return 'Creating your account';
          case 'Creating your account':
            return 'Creating your account.';
          case 'Creating your account.':
            return 'Creating your account..';
          case 'Creating your account..':
            return 'Creating your account...';
          default:
            return 'Creating your account';
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleNavigation=()=>{
    if(creating){
      navigation.navigate('Otp')
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: '#FFFAE7', position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
        {!creating ? (
          <LottieView
            source={require(`../../../assets/animations/walkingbird.json`)}
            autoPlay
            loop
            style={{ height: 250, width: 250 }}
          />
        ) : (
          <LottieView
            source={require(`../../../assets/animations/done.json`)} // Update to the correct path for the 'done' animation
            autoPlay
            loop // Assuming 'done' animation is not supposed to loop
            style={{ height: 250, width: 250 }}
          />
        )}
        <TouchableOpacity style={{ width: '80%', position: 'absolute', bottom: 70, backgroundColor: '#0E0E0E', borderRadius: 5, padding: 25 }} onPress={handleNavigation}>
          <Text style={{ color: 'white', fontWeight: '800', textAlign: 'center' }}>{!creating ? (loadingText):('Continue')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreatingAccount;
