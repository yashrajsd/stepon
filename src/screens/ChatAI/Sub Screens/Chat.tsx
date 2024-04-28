/* eslint-disable prettier/prettier */
import LottieView from 'lottie-react-native';
import React from 'react';
import {View,TextInput,TouchableOpacity,Text,ScrollView,KeyboardAvoidingView, Image} from 'react-native';




const Chat = ({navigation}) => {


  return (
    <View style={{width:'100%',height:'100%',backgroundColor:'#141414'}}>
        <KeyboardAvoidingView style={{height:'10%'}}>
            <ScrollView contentContainerStyle={{height:'100%'}}>
            <View style={{height:'100%',width:'100%',backgroundColor:'#1C1C1C',justifyContent:'space-between',paddingHorizontal:10,flexDirection:'row'}}>
          <View style={{flexDirection:'row',alignItems:'center',height:'100%',gap:10}}>
            <TouchableOpacity onPress={()=>{navigation.navigate('MainHome')}} style={{backgroundColor:'#2A2A2A',paddingHorizontal:10,borderRadius:5,height:45,justifyContent:'center'}}>
              <Text style={{color:'white',fontSize:20}}>{'<'}</Text>
            </TouchableOpacity>
            <View>
              <View style={{height:45,width:45,backgroundColor:'#2A2A2A',borderRadius:7,position:'relative'}}>
                <LottieView
                  source={require('../../../../assets/animations/assistant.json')}
                  autoPlay
                  loop
                  style={{height:45,width:45,position:'absolute',bottom:0}}
                />
              </View>
            </View>
            <View>
              <Text style={{color:"white",fontWeight:'800'}}>Yashraj</Text>
              <Text style={{color:"white",fontSize:12}}>Personal Assistant</Text>
            </View>
          </View>
          <View style={{height:"100%",justifyContent:'center',flexDirection:'row',alignItems:'center',gap:10}}>
            <View style={{borderRadius:6,height:40,width:40,backgroundColor:'#FF6F6F',justifyContent:'center',alignItems:'center'}}>
              <Image
                source={require('../../../../assets/icons/report.png')}
                style={{height:25,width:25}}
              />
            </View>
            <View style={{borderRadius:6,height:40,width:40,backgroundColor:'#FFFFFF',justifyContent:'center',alignItems:'center'}}>
              <Image
                  source={require('../../../../assets/icons/edit.png')}
                  style={{height:25,width:25}}
                />
            </View>
          </View>
        </View>
            </ScrollView>
        </KeyboardAvoidingView>
        <View style={{height:'78%'}}>
          <KeyboardAvoidingView style={{flex:1}}>
          <ScrollView contentContainerStyle={{flex:1}}>
            <View style={{height:'100%',width:"100%",flexDirection:'column-reverse'}}>
              
            </View>
          </ScrollView>
          </KeyboardAvoidingView>
        </View>
        <View style={{height:'12%',paddingHorizontal:15,flexDirection:'row',justifyContent:'space-between'}}>
          <TextInput
            placeholder='Chat with Assistant'
            style={{backgroundColor:'#202020',fontWeight:'600',width:'78%',paddingHorizontal:20,height:70,borderRadius:12}}
            placeholderTextColor={'#5F5F5F'}
          
          />
          <TouchableOpacity style={{height:70,width:'20%',backgroundColor:'#B5E4FF',borderRadius:12,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontWeight:'800',color:'#00000'}}>Send</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Chat