/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView, ScrollView, TextInput, View, TouchableOpacity,Alert } from 'react-native';
import CustomDropdown from '../../components/CustomDropdown';
import { Image, Text } from 'react-native-elements';
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../../App'
import { UserContext } from '../../context/UserContext';

const healthIssuesCuredByWalking = [
  "Obesity", "High blood pressure", "Type 2 diabetes", "Heart disease", "Stroke", "Depression", "Anxiety",
  "Osteoporosis", "Joint pain", "Back pain", "Arthritis", "Insomnia", "Digestive problems", "Low immune system",
  "Breathing Issues", "Low Energy Level", "High stress",
];


type HomeProps = NativeStackScreenProps<RootStackParamList,'HealthInfo'>


const HealthInfo = ({ navigation }:HomeProps) => {
  const {height,issue,updateProfile} = useContext(UserContext);
  const [h,setH] = useState(0);

  const handleContinue=()=>{
    if(!height || !issue)return Alert.alert('Fill the fields my nigga');
    navigation.navigate('CreatingAccount');
  }

  return (
    <KeyboardAvoidingView style={{flex:1,backgroundColor:'#FFFAE7',paddingTop:30,paddingBottom:30}}>
      <ScrollView contentContainerStyle={{flex:1}}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center',gap:100}}>

          <View style={{flex:1,justifyContent:'center',alignItems:'center',width:'100%'}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',gap:20,alignItems:'center', width:'80%'}}>
            <View style={{backgroundColor:'#FFF3C7',borderRadius:10}}>
              <Image
                source={require('../../../assets/Images/scale.png')}
                style={{height:60,width:60}}
              />
            </View>
            <Text style={{color:'#6B6651',fontSize:16}}>
              What is your height?
            </Text>
          </View>
          <TextInput placeholder='Your Height ( in CM )' value={`${h} cm`} style={{width:'80%',borderBottomWidth:1,marginTop:20}} keyboardType='numeric' onChangeText={(text) => {
    // Remove non-numeric characters from the input
    const numericValue = text.replace(/[^0-9]/g, '');
    setH(numericValue);
    updateProfile(h,'height');
  }}/>
          
          </View>

          <View style={{flex:1,justifyContent:'center',alignItems:'center',width:'100%'}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',gap:20,alignItems:'center', width:'80%'}}>
            <View style={{backgroundColor:'#FFF3C7',borderRadius:10,padding:10}}>
              <Image
                source={require('../../../assets/Images/medkit.png')}
                style={{height:40,width:40}}
              />
            </View>
            <Text style={{color:'#6B6651',fontSize:16}}>
              What is your height?
            </Text>
            
          </View>
          <CustomDropdown list={healthIssuesCuredByWalking} updateProfile={updateProfile}/>
          </View>
          <TouchableOpacity onPress={handleContinue} style={{width:'80%'}}>
          <View style={{backgroundColor:'#0E0E0E',padding:25,borderRadius:10,width:'100%'}}>
            <Text style={{color:'white',textAlign:'center',fontWeight:'bold'}}>Continue</Text>
          </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};


export default HealthInfo;
