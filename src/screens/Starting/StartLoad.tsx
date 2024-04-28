/* eslint-disable prettier/prettier */
import React,{useEffect} from 'react';
import {View} from 'react-native'
import { Image } from 'react-native-elements';
const StartLoad = () => {

    

  return (
    <View style={{backgroundColor:'#431DAF',height:'100%',width:'100%',overflow:'hidden',justifyContent:'center',alignItems:'center'}}>
        <View style={{backgroundColor:'#9277FE',height:750,width:750,borderRadius:375,justifyContent:'center',alignItems:'center'}}>
            <View style={{backgroundColor:'#7C5CFF',height:580,width:580,borderRadius:290,justifyContent:'center',alignItems:'center'}}>
                <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#653FFF',height:380,width:380,borderRadius:190}}>
                    <Image
                        source={require('../../../assets/Images/logo.png')}
                        style={{height:35,width:200}}
                    />
                </View>
            </View>
        </View>
    </View>
  )
}

export default StartLoad