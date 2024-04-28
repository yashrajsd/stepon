/* eslint-disable prettier/prettier */
import React, { useContext } from 'react'
import { View , StyleSheet ,Text,Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Alert} from 'react-native'

import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../../App'
import { UserContext } from '../../context/UserContext'

type HomeProps = NativeStackScreenProps<RootStackParamList,'SignUp'>

const UserInfo = ({navigation}:HomeProps) => {
  const {email,name,updateProfile} = useContext(UserContext);

  const handleContinue=()=>{

    if(!name || !email) return Alert.alert('Fill the required fields');
    navigation.navigate('HealthInfo');

  }

  return (
    <KeyboardAvoidingView style={{width:'100%',height:"100%"}} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.screen}>
        <View style={styles.sec1}>
          <View style={{backgroundColor:'#FFF3C7',padding:15,borderRadius:10}}>
            <Image 
              source={require('../../../assets/Images/information.png')}
              style={{height:45,width:45}}
            />
          </View>
          <Text style={{width:'70%'}}>
           Fill the given General information about you
          </Text>
        </View>
        <View style={styles.sec2}>
          <Text>
            Your Name
          </Text>
          <TextInput style={styles.input} onChange={(e)=>updateProfile(e.nativeEvent.text,'name')}>
            
          </TextInput>
        </View>
        <View style={styles.sec2}>
          <Text>
            Your Email address
          </Text>
          <TextInput style={styles.input} onChange={(e)=>{updateProfile(e.nativeEvent.text,'email')}}>
            
          </TextInput>
        </View>
        <View style={styles.sec1}>
          <View style={styles.checkbox}>

          </View>
          <Text>
            I would like to recieve newsletters and offers on given email
          </Text>
        </View>
        <TouchableOpacity onPress={handleContinue} style={{width:'100%'}}>
          <View style={{backgroundColor:'#0E0E0E',padding:25,borderRadius:10,width:'100%'}}>
            <Text style={{color:'white',textAlign:'center',fontWeight:'bold'}}>Continue</Text>
          </View>
          </TouchableOpacity>
    </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  screen:{
    height:'100%',
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start',
    backgroundColor:'#FFFAE7',
    padding:30
  },
  sec1:{
    width:'100%',
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'row',
    gap:20

  },
  sec2:{
    flex:1,
    width:'100%',
    justifyContent:'center',
    alignItems:'flex-start'
  },
  input:{
    borderBottomWidth:1,
    width:'100%'
  },
  checkbox:{
    width:20,
    height:20,
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'gray',
    borderRadius:5
  },
  scrollViewContainer:{
    flexGrow: 1,
  }
})

export default UserInfo