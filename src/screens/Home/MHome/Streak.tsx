/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import {View,Text} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
const Streak = ({user}) => {

    const [streak,setStreak] = useState(user.streak);

  return (
    <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
        <View style={{backgroundColor:'#5B0EFF',width:'90%',height:230,justifyContent:'center',alignItems:'center',borderRadius:6}}>
        <LinearGradient
            useAngle={true}
            angle={180}
            angleCenter={{ x: 0.5, y: 0.5 }}
            colors={[
              'rgba(217, 217, 217, 0.6)',
              'rgba(255, 255, 255, 0)',
            ]}
            style={{height:'80%',width:'85%',borderRadius:4,justifyContent:'center',alignItems:'center',gap:10}}
        >
            <Text style={{color:'white',fontWeight:'800',fontSize:40}}>{streak} Days</Text>
            <Text style={{color:'white',fontWeight:'500',fontSize:20}}>Streak</Text>
        </LinearGradient>
        </View>
    </View>
  )
}

export default Streak