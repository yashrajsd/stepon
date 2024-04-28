/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import axios from 'axios';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { Alert } from 'react-native';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const SignUP = ({ navigation }: HomeProps) => {
  const { updateProfile, phoneNumber,signIn } = useContext(UserContext);
  const [error, setError] = useState<string>('');

  const handleNumber = (text: string) => {
    if (error) setError('');
    updateProfile(text, 'number');
  };

  const handleNumCheck = async () => {

    if (!phoneNumber || phoneNumber.length < 10) {
      Alert.alert('Enter valid number');
      return;
    }

    try {
      const response = await axios.post('http://192.168.0.159:3002/api/userauth/checknum', { phoneNumber }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        navigation.navigate('UserInfo');
      }
      else if(response.status==400){
        if(signIn){
          navigation.navigate('Otp');
          return 
        }
        const errorData = response.data;
        Alert.alert(errorData.msg || 'Something went wrong');
      }
      else {
        const errorData = response.data;
        Alert.alert(errorData.msg || 'Something went wrong');
      }
    } catch (error) {
      setError('User already exists' || 'An error occurred');
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.sec1}>
        <Image
          source={require('../../../assets/Images/lady.png')}
          style={{ resizeMode: 'contain', position: 'relative', bottom: 20 }}
        />
      </View>
      <View style={styles.sec2}>
        <View style={styles.sec2c1}>
          <View style={styles.imgcontainer}>
            <Image
              source={require('../../../assets/Images/signupPage.png')}
              style={{ width: 50, height: 50 }}
            />
          </View>
          <Text>
            Create a new account{'\n'}with your mobile number
          </Text>
        </View>
        <View style={{ flex: 1, gap: 30 }}>
          <View>
            <TextInput
              placeholder='Enter Number'
              style={[styles.input, error ? styles.error : null]}
              keyboardType='numeric'
              maxLength={10}
              onChangeText={handleNumber}
            />
            <Text style={{color:'red',marginTop:10}}>{error}</Text>
          </View>
          <TouchableOpacity onPress={handleNumCheck}>
            <View style={{ backgroundColor: '#0E0E0E', padding: 25, borderRadius: 10 }}>
              <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Create Account</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#FFFAE7',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgcontainer: {
    backgroundColor: '#FFF3C7',
    padding: 10,
    borderRadius: 10,
  },
  sec1: {
    height: '40%',
    position: 'relative',
  },
  sec2: {
    height: '60%',
    width: '100%',
    padding: 20,
    backgroundColor: '#FFFAE7',
  },
  sec2c1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  error: {
    borderBottomColor: 'red',
  },
});

export default SignUP;
