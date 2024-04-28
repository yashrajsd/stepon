/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {ScrollView,TextInput,View,SafeAreaView,KeyboardAvoidingView,Image,TouchableOpacity} from 'react-native';
import { Text  } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const users = [
  {
    id: '2fdt4',
    name: 'Yashraj Deshmukh',
    steps: 34232,
    rank: 1,
  },
  {
    id: '23fe2',
    name: 'Ramesh Chaudhary',
    steps: 23424,
    rank: 2,
  },
  {
    id: 'rfd5s',
    name: 'Anita Sharma',
    steps: 18000,
    rank: 3,
  },
  {
    id: 'k9s3d',
    name: 'Suresh Patel',
    steps: 15000,
    rank: 4,
  },
  {
    id: 'p0e1s',
    name: 'Priya Singh',
    steps: 12000,
    rank: 5,
  },
  {
    id: 'qfr76',
    name: 'Rajesh Gupta',
    steps: 10000,
    rank: 6,
  },
  {
    id: 'w3e4d',
    name: 'Neeraj Mehta',
    steps: 8000,
    rank: 7,
  },
  {
    id: 'v5g7h',
    name: 'Kavita Jain',
    steps: 6000,
    rank: 8,
  },
  {
    id: 't2e4f',
    name: 'Vijay Kumar',
    steps: 4000,
    rank: 9,
  },
  {
    id: 'b9r8s',
    name: 'Aruna Gupta',
    steps: 2000,
    rank: 10,
  },
];



const LeaderBoard = ({navigation}) => {

  const [userRank,setUserRank] = useState(null);
  

  useEffect(()=>{
    const getLeaderBoard=async()=>{
      const token = await AsyncStorage.getItem('token');
      const response = await axios.get(`http://192.168.0.159:3002/userRank/${token}`)
      if(response.status==200){
        setUserRank(response.data);
        
      }
    }
    getLeaderBoard();
  },[])

  return (
    <KeyboardAvoidingView style={{flex:1,backgroundColor:'rgb(25,25,25)'}}>
      <ScrollView style={{flex:1}}>
        <View style={{minHeight:300,position:'relative'}}>
          <SafeAreaView style={{position:'absolute',zIndex:20,paddingHorizontal:15}}>
          <TouchableOpacity onPress={()=>{navigation.pop()}}>
          <Text style={{color:"white",fontWeight:'800',fontSize:40}}>
            {"<"}
          </Text>
          </TouchableOpacity>
          </SafeAreaView>
          <Image
            source={require('../../../assets/Images/ldbanner.jpg')}
            style={{height:300,resizeMode:'cover',width:"100%",}}
          />
          <LinearGradient
            useAngle={true}
            angle={0}
            angleCenter={{ x: 0.5, y: 0.5 }}
            colors={[
              'rgba(25, 25, 25, 1)',
              'rgba(25, 25, 25, 0)',
            ]}
            style={{position:'absolute',height:300,width:'100%',zIndex:10}}
        >
          <View style={{height:'100%',width:'100%',position:'relative',zIndex:40}}>
          <Text style={{fontWeight:'800',color:'white',position:'absolute',bottom:0,fontSize:28,paddingHorizontal:'5%'}}>
            Leaderboard
          </Text>
          </View>
        </LinearGradient>
        </View>
        <View style={{paddingHorizontal:'5%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:25}}>
          <View style={{flexDirection:'row',alignItems:'center',gap:15}}>
            <View style={{height:60,width:60,backgroundColor:'#4F4F4F',borderRadius:6}}>

            </View>
            <Text
              style={{color:'white',fontWeight:'700',fontSize:15}}
            >
              {users[0].name}
            </Text>
          </View>
          <View>
          <Text style={{color:'white',fontWeight:'800',fontSize:20}}>
            
          </Text>
          </View>
        </View>
        <View style={{padding:'5%'}}>
          <View style={{backgroundColor:'#5768FF',height:500,width:'100%',borderRadius:6}}>
            <View style={{alignItems:'center',position:'relative',height:'80%',justifyContent:'center'}}>
              <Text style={{position:'absolute',top:10,right:20,color:'white',fontWeight:'800',fontSize:25}}>
                {users[0].rank}st
              </Text>
            <View>
              <View style={{height:300,width:300,backgroundColor:'#766AFF',borderRadius:150,justifyContent:"center",alignItems:'center',borderWidth:1,borderColor:'#4A4A4A'}}>
                <View style={{height:200,width:200,backgroundColor:'#4F40F8',borderRadius:100,borderWidth:1,borderColor:'#4A4A4A'}}>

                </View>
              </View>
            </View>
            </View>
            <View style={{gap:5,paddingHorizontal:'5%'}}>
              <Text style={{color:'white',fontWeight:'800',fontSize:28}}>{users[0].name}</Text>
              <Text style={{color:'white',fontSize:20}}>{users[0].steps} Steps Walked</Text>
            </View>
          </View>
        </View>
        <View>
          {
            users.slice(1,3).map((user)=>{
              return(
                <View>
                  <View style={{paddingHorizontal:'5%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:25}}>
                  <View style={{flexDirection:'row',alignItems:'center',gap:15}}>
                    <View style={{height:60,width:60,backgroundColor:'#4F4F4F',borderRadius:3}}>
                      
                    </View>
                    <Text
                      style={{color:'white',fontWeight:'700',fontSize:15}}
                    >
                      {user.name}
                    </Text>
                  </View>
                  <View>
                  <Text style={{color:'white',fontWeight:'800',fontSize:20}}>
                    {user.rank==2 ? (`${user.rank}nd`):(`${user.rank}rd`)}
                  </Text>
                  </View>
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <View style={{borderWidth:0.5,width:'90%',borderColor:'#4A4A4A'}}/>
                </View>  
                </View>
              )
            })
          }
        </View>
        <View style={{padding:'5%'}}>
          <TextInput
            placeholder='Search Users'
            style={{fontWeight:'700',color:'white',fontSize:18,width:'100%',backgroundColor:'#2F2F2F',padding:20,borderRadius:7}}
            placeholderTextColor={'#4F4F4F'}
          
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default LeaderBoard