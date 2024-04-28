/* eslint-disable prettier/prettier */
import LottieView from 'lottie-react-native'
import React from 'react'
import {ScrollView, View,TouchableOpacity,SafeAreaView,Text} from 'react-native'
import { Image } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'


const subscription=[{
  animation:'../../../assets/animations/freeplan.json',
  plan:'Free Plan',
  active:true,
  price:{
    amount:0,
    type:''
  },
  available:'Lifetime Available'
},{
  animation:'../../../assets/animations/freeplan.json',
  plan:'Weekly Plan',
  active:false,
  price:{
    amount:20,
    type:'/Week'
  },
  available:'Lifetime Available'
},{
  animation:'../../../assets/animations/freeplan.json',
  plan:'Monthly Plan',
  active:false,
  price:{
    amount:54,
    type:'/Month'
  },
  available:'Lifetime Available'
}
]

const Subscription = ({navigation}) => {

  return (
    <ScrollView style={{flex:1,backgroundColor:'#1A1919'}}>
      {/* <View style={{flex:1, gap:20,justifyContent:'center',alignItems:'center'}}>
      <View style={{minHeight:300,position:'relative',width:'100%'}}>
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
            Subscription
          </Text>
          </View>
        </LinearGradient>
        </View>
        {
          subscription.map((plan)=>{
            return(
              <View style={{width:'90%',minHeight:250,paddingHorizontal:10,paddingVertical:20,backgroundColor:'#4D49F7',borderRadius:8}}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <LottieView
              source={require('../../../assets/animations/freeplan.json')}
              loop
              autoPlay
              style={{height:200,width:200}}
            />
            <Text style={{color:'white',fontWeight:'700',fontSize:25}}>
              {plan.plan}
            </Text>
            <View style={{paddingVertical:5,backgroundColor:'#DCFFEA',marginTop:10,paddingHorizontal:20,borderRadius:100}}>
              <Text style={{color:'#3BFF89',fontWeight:'600',fontSize:15}}>
                {plan.active ? ('Currently Active'):('Upgrade')}
              </Text>
            </View>
            <Text style={{color:'white',fontWeight:'800',marginTop:20,fontSize:20}}>Price</Text>
            <Text style={{color:'white',fontWeight:'800',fontSize:70}}>
              {plan.price.amount}$<Text style={{fontSize:22}}>{plan.price.type}</Text>
            </Text>
            <View style={{width:'80%',backgroundColor:'#6270EA',marginTop:20,marginBottom:40,padding:20,borderRadius:5,justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:'white',fontWeight:'800'}}>{plan.available}</Text>
            </View>
          </View>
        </View>
            )
          })
        }    
      </View> */}
      <View style={{flex:1}}>
      <View style={{minHeight:300,position:'relative',width:'100%'}}>
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
      </View>
    </ScrollView>
  )
}

export default Subscription