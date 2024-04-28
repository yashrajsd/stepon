/* eslint-disable prettier/prettier */
import React from 'react';
import {View,Image,Text, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList2} from '../../../App'

type HomeNavProps = NativeStackScreenProps<RootStackParamList2,'MainHome'>

const HomeNavSec = ({navigation}:HomeNavProps) => {

  return (
    <View style={{width:'100%',padding:20}}>
        <View style={{backgroundColor:'#252525',height:90,borderRadius:9,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:15}}>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',gap:10}}>
                <Image
                    source={require('../../../../assets/icons/capturepoint.png')}
                    style={{height:27,width:27}}
                />
                <Text style={{color:'#FFFFFF',fontSize:12}}>Capture Point</Text>
            </TouchableOpacity>
            <View style={{height:'80%',borderLeftWidth:1,borderColor:'#3B3B3B'}}/>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',gap:10}} onPress={()=>{navigation.navigate('LeaderBoard')}}>
                <Image
                        source={require('../../../../assets/icons/leaderboard.png')}
                        style={{height:27,width:27}}
                />
                <Text style={{color:'#FFFFFF',fontSize:12}}>
                    Leaderboard
                </Text>
            </TouchableOpacity>
            <View style={{height:'80%',borderLeftWidth:1,borderColor:'#3B3B3B'}}/>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',gap:10}} onPress={()=>{navigation.navigate('Subscription')}}>
                <Image
                        source={require('../../../../assets/icons/crown.png')}
                        style={{height:27,width:27}}
                />
                <Text style={{color:'#FFFFFF',fontSize:12}}>
                    Subscription
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default HomeNavSec