/* eslint-disable prettier/prettier */
import React from 'react'
import {View,Text,Image} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const DisplayCard = () => {
  return (
    <View style={{width:'100%',paddingHorizontal:20,marginTop:20,marginBottom:30}}>
        <View style={{width:'100%',height:300,backgroundColor:'white',borderRadius:8,position:'relative',overflow:'hidden'}}>
            <View style={{position:'relative'}}>
                <Image
                source={require('../../../../assets/Images/bg1.jpg')}
                style={{height:'100%',width:'100%',resizeMode:'cover'}}
                />
                <Image
                    source={require('../../../../assets/Images/trophy.png')}
                    style={{position:'absolute',right:0,top:15}}
                />
            </View>
            <View style={{position:'absolute',width:'100%',bottom:0}}>
                <LinearGradient colors={[
                    'rgba(25, 25, 25, 0)',  
                    'rgba(25, 25, 25, 1)',
                    'rgba(25, 25, 25, 1)'
                    ]}
                >
                    <View style={{height:220,position:'relative'}}>
                        <View style={{position:'absolute',bottom:0,paddingHorizontal:10}}>
                            <Text style={{color:'white',fontWeight:'700',fontSize:25}}>Join Capture Events</Text>
                            <Text style={{color:'white',marginTop:10,width:'60%'}}>Capture events mostly start in morning or in evening for a period of 1-2 hours</Text>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </View>
    </View>
  )
}

export default DisplayCard