/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import {View,Text} from 'react-native'
const Level = ({user}) => {

    const [level,setLevel] = useState(user.level.at);
    const [goal,setGoal] = useState(user.level.xp.goal);
    const [xp,setXP] = useState(user.level.xp.at);
    
  return (
    <View style={{width:'100%',justifyContent:'center',alignItems:'center',marginVertical:30}}>
        <View style={{flexDirection:'row',width:'90%',justifyContent:'space-between'}}>
        <View style={{width:'25%',justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:"white",fontWeight:'800',fontSize:20}}>
                Level
            </Text>
            <Text style={{color:"white",fontWeight:'900',fontSize:48}}>
                {level}
            </Text>
        </View>
        <View style={{height:'100%',borderLeftWidth:1,borderColor:'#3B3B3B'}}/>
        <View style={{width:'70%',justifyContent:'center',alignItems:'center'}}>
            <View>
            <Text style={{color:"white",fontWeight:'bold',fontSize:18}}>
                {xp}/{goal} xp
            </Text>
            <Text style={{color:"white"}}>
                Complete daily tasks to gain xp
            </Text>
            </View>
        </View>
        </View>
    </View>
  )
}

export default Level