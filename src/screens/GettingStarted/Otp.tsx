/* eslint-disable prettier/prettier */
import axios, { Axios } from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { View,Text, StyleSheet, Image, TextInput,Alert, TouchableOpacity } from 'react-native'
import { UserContext } from '../../context/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../../App'

type HomeProps = NativeStackScreenProps<RootStackParamList,'GetStarted'>

const Otp = ({navigation}:HomeProps) => {
    const [otp, setOtp] = useState(['','','','']);
    const refs = [useRef<TextInput>(null), useRef<TextInput>(null), useRef<TextInput>(null), useRef<TextInput>(null)];
    const {phoneNumber} = useContext(UserContext);
    
    const handleOtpChange = (index: number, value: string) => {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
  
    if (value && index < 3 && refs[index + 1].current) {
      refs[index + 1].current.focus();
    }
  };

  useEffect(()=>{
    const getOtp=async()=>{
      try {
        const reponse = await axios.post('http://192.168.0.159:3002/api/userauth/verify',{phoneNumber},{
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if(reponse.status!=200){
          const errorData = reponse.data;
          Alert.alert(errorData.msg || 'Something went wrong');
          return navigation.navigate('HealthInfo')
        }
      } catch (error) {
        console.error("Error occuered with message: "+error);
      }
    }

    getOtp();
  },[phoneNumber,navigation])

  const otpCheck=async()=>{
    var mainotp ='';
    for(var i=0;i<4;i++){
      mainotp+=otp[i];
    }

    try {

      const response = await axios.post('http://192.168.0.159:3002/api/userauth/otpcheck',{phoneNumber,otp: parseInt(mainotp)},{
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if(response.status==200){
        navigation.navigate('GetStarted');
      }
      AsyncStorage.setItem("token",response.data.data);
      AsyncStorage.setItem("isLogged",JSON.stringify(true));
    } catch (error) {
      console.error("Error occuered with msg: "+error);
    }

  }

    
  return (
    <View style={styles.screen}>
        <View style={styles.sec1}>
            <Image
                source={require('../../../assets/Images/otp.png')}
                style={{height:'100%',resizeMode:'contain'}}
            />
        </View> 
        <View style={styles.sec2}>
            <Text style={styles.text}>Enter <Text style={{fontWeight:'bold'}}>4 digit otp</Text> sent on your mobile number</Text>
            <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={refs[index]}
          style={styles.input}
          maxLength={1}
          keyboardType="numeric"
          value={digit}
          onChangeText={(value) => handleOtpChange(index, value)}
        />
      ))}
    </View>
          <TouchableOpacity style={{backgroundColor:'#0E0E0E',padding:25,borderRadius:10,width:'80%'}} onPress={otpCheck}>
            <Text style={{color:'white',textAlign:'center',fontWeight:'bold'}}>Create Account</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    screen:{
        height:'100%',
        flex:1,
        flexDirection:'column',
        backgroundColor:'#FFFAE7'
    },
    sec1:{
        height:'60%',
    },
    sec2:{
        height:'40%',
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center'
    },
    text:{
        textAlign:'center',
        marginTop:20,
        width:'80%',
        fontWeight:'normal',
        fontSize:15,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        width:'80%',
        marginTop:20,
        marginBottom:20
      },
      input: {
        width: 50,
        height: 50,
        textAlign: 'center',
        fontSize: 20,
        borderRadius:6,
        backgroundColor:'#FFF2C0',
      },
})

export default Otp