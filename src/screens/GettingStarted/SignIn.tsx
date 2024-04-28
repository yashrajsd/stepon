/* eslint-disable prettier/prettier */
import LottieView from 'lottie-react-native'
import React, { useContext, useState } from 'react'
import {KeyboardAvoidingView,TouchableOpacity, ScrollView, View,Text, TextInput, StyleSheet} from 'react-native'
import { UserContext } from '../../context/UserContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const SignIn = ({navigation}:HomeProps) => {

    const {updateProfile,phoneNumber} = useContext(UserContext);
    const [error,setError] =useState('');

    const handleNumber =(text:string)=>{
        updateProfile(text,'number');
    }


  return (
    <KeyboardAvoidingView style={{flex:1,backgroundColor:'#5243FE'}}>
        <ScrollView contentContainerStyle={{flex:1}}>
            <View style={{position:'absolute',backgroundColor:'#6254FF',height:800,width:800,borderRadius:400,alignSelf:'center'}}>

            </View>
            <View style={{flexDirection:'column',flex:1,justifyContent:'center',alignItems:'center'}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <LottieView
                    source={require('../../../assets/animations/signin.json')}
                    autoPlay
                    loop
                    style={{height:200,width:200}}
                />
                <Text style={{color:'white',fontWeight:'800'}}>Enter your registered Mobile Number</Text>
            </View>
            <View style={{width:'80%'}}>
            <TextInput
              placeholder='Enter Number'
              style={[styles.input, error ? styles.error : null]}
              keyboardType='numeric'
              maxLength={10}
              onChangeText={handleNumber}
              placeholderTextColor={'#ABA5A5'}
            />
            {/* <Text style={{color:'red',marginTop:10}}>{error}</Text> */}
          </View>
          <TouchableOpacity onPress={()=>{navigation.navigate('Otp')}} style={{width:'80%'}}>
            <View style={{ backgroundColor: 'white', padding: 25, borderRadius: 10 }}>
              <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'regular' }}>Sign In</Text>
            </View>
          </TouchableOpacity>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor:'#303030',
        width:'100%',
        color:'white',
        borderRadius:7,
        fontSize:15,
        height:60,
        paddingHorizontal:20,
        marginTop:30,
        marginBottom:20
      },
      error: {
        borderBottomColor: 'red',
      },
})

export default SignIn