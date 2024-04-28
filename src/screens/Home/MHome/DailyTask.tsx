/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {View,Text, TouchableOpacity, Alert} from 'react-native';

// const tasks=[
//     {
//         task:"Take 3000 steps",
//         complete:true,
//         type:'count'
//     },
//     {
//         task:"Find a temple/mosque",
//         complete:true,
//         type:'media' 
//     },
//     {
//         task:"Find a river ",
//         complete:false,
//         type:'media'
//     }
// ]

const DailyTask = ({user}) => {
    const [tasks,setTasks] =useState(null);
    const [joined,setJoined] = useState(false);
    const [loader,setLoader] = useState(0);
    const [loading,setLoading] = useState(true);


    useEffect(()=>{
        
        const getTaskData=async()=>{
            // const taskData = await AsyncStorage.getItem('tasks');
            // if(!taskData){
                try{
                    const token = await AsyncStorage.getItem('token');
                    const response = await axios.get(`http://192.168.0.159:3002/api/getTaskData/${token}`);
                    if (response.status === 200) {
                    console.log(response.data); 
                    await AsyncStorage.setItem('tasks', JSON.stringify(response.data));
                    setTasks(response.data.userTasks); 
                    setJoined(true);
                    }
                    
                }catch(error){
                    console.log(error);
                }
                setLoading(false);
            // }
            // else{
            //     console.log(taskData)
            //     setTasks(JSON.parse(taskData));
            //     console.log(JSON.parse(taskData))
            //     setJoined(true);
            //     setLoading(false);
            //     console.log(tasks);
            //     Alert.alert('Worked Hurray!');
            // }
        }
        getTaskData();
    },[])

    // useEffect(()=>{

    //     const loaderLength = () => {
        
    //     const countComplete = tasks.filter(obj => obj.complete).length;
    //     const totalTasks = tasks.length;
      
    //     if (totalTasks !== 0) {
    //       const length = (countComplete / totalTasks) * 100;
    //       setLoader(length);  
    //     } else {
    //       setLoader(0); 
    //     }
    //   }
    //   loaderLength();
    // },[tasks])

    const handleJoinTask=async()=>{
       try{
        Alert.alert('working')
        const token = await AsyncStorage.getItem('token');
        const response = await axios.post('http://192.168.0.159:3002/joinTask',{token},{
            headers:{
                'Content-Type':'application/json'
            }
        })
        if(response.status==200){
            const token = await AsyncStorage.getItem('token');
            const responseData = await axios.get(`http://192.168.0.159:3002/api/getTaskData/${token}`);
            if (response.status === 200) {
                console.log(responseData.data); 
                await AsyncStorage.setItem('tasks', JSON.stringify(response.data));
                setTasks(response.data.userTasks); 
                setJoined(true);
            }
            else{
                Alert.alert('Error Occuered Try Again')
            }
        }
       }catch(error){
        console.log(error)
       }
    }


    

    const JoinUser=()=>(
        <View style={{width:'100%',alignItems:'center',gap:15}}>
            <View style={{backgroundColor:'#262626',flexDirection:'row',justifyContent:'space-between',width:'90%',height:100,borderRadius:6,alignItems:'center',padding:25}}>
                <Text style={{color:'white'}}>
                    <Text style={{fontWeight:'800',fontSize:22}}>4 new</Text> Task Available
                </Text>
                <TouchableOpacity onPress={handleJoinTask}>
                    <Text style={{color:'#5CFFF5',fontWeight:'800',fontSize:18}}>Join</Text>
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'#FFEF9C',width:'90%',padding:15,borderRadius:6}}>
                <Text style={{color:'black',fontSize:11,textAlign:'center'}}>
                    Once joined you need complete all tasks else loose 1 level
                </Text>
            </View>
        </View>
    )

    

    const TaskDisplay = () => (
        <View style={{ width: '90%'}}>
          <View style={{ borderTopWidth: 1, borderColor: '#4D4D4D' }} />
          <View style={{ width: '100%', gap: 10, marginVertical: 20,backgroundColor:'#6254FF',minHeight:270,justifyContent:'center',alignItems:'center',borderRadius:20,paddingVertical:30}}>
            {tasks && tasks.map((task, index) => { // Check if tasks is not null before mapping
              return (
                // <View style={{ flexDirection: 'row', justifyContent: "space-between" }} key={index}>
                //   <Text style={{ color: '#FFFFFF', fontSize: 18, maxWidth: '80%' }}>
                //     {task.actualTask}
                //   </Text>
                //   <View style={{ width: 21, height: 21, backgroundColor: '#D9D9D9', borderRadius: 21 }}></View>
                // </View>
                <TouchableOpacity key={index} style={{width:'90%',backgroundColor:`${task.completed ? ('#8B89FF'):('rgba(139,137,255,0.38)')}`,borderRadius:25,paddingVertical:20,paddingHorizontal:15,flexDirection:'row',justifyContent:'space-between',paddingVertical:25}}>
                    <View style={{flexDirection:'row',alignItems:'center',gap:20}}>
                        <View style={{height:20,width:20,borderRadius:10,backgroundColor:`${task.completed ?('#5CFFD8'):('#383838')}`}}>

                        </View>
                        <Text style={{fontWeight:700,color:'white',fontSize:15}}>{task.actualTask}</Text>
                    </View>
                    <Text style={{color:'white'}}>
                        250xp
                    </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          {/* <View style={{ width: '100%', backgroundColor: '#D9D9D9', height: 40, borderRadius: 6, marginBottom: 15 }}>
            <View style={{ width: `${loader}%`, height: '100%', backgroundColor: '#54DE93', borderRadius: 6 }}></View>
          </View> */}
          <View style={{ width: '100%', padding: 10, borderRadius: 6, marginBottom:5,backgroundColor:'#FFEF9C' }}>
            <Text style={{ color: 'black', fontSize: 11, textAlign: 'center' }}>
              Complete the above tasks or else lose 1 level
            </Text>
          </View>
        </View>
      );
      

    if(loading){
        return(
            <View>
                <Text>Loading Data..</Text>
            </View>
        )
    }

  return (
    <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
        {joined ? (<TaskDisplay/>):(<JoinUser/>)}
    </View>
  )
}

export default DailyTask