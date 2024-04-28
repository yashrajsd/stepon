/* eslint-disable prettier/prettier */
import {View,Text} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import {BleManager} from 'react-native-ble-plx'
import {atob} from 'react-native-quick-base64';
import LottieView from 'lottie-react-native';

const bleManager = new BleManager();

const SERVICE_UUID = "4fafc201-1fb5-459e-8fcc-c5c9c331914b";
const STEP_DATA_CHAR_UUID = "beefcafe-36e1-4688-b7f5-00000000000b";
const DeviceConnection = ({deviceID,setDeviceID,stepCount,setStepCount,connectionStatus,setConnectionStatus}) => {

    const deviceRef = useRef(null);


    const connectToDevice = (device) => {
        return device
          .connect()
          .then((device) => {
            setDeviceID(device.id);
            setConnectionStatus("Connected");
            deviceRef.current = device;
            return device.discoverAllServicesAndCharacteristics();
          })
          .then((device) => {
            return device.services();
          })
          .then((services) => {
            let service = services.find((service) => service.uuid === SERVICE_UUID);
            return service.characteristics();
          })
          .then((characteristics) => {
            let stepDataCharacteristic = characteristics.find(
              (char) => char.uuid === STEP_DATA_CHAR_UUID
            );
            setStepDataChar(stepDataCharacteristic);
            stepDataCharacteristic.monitor((error, char) => {
              if (error) {
                console.error(error);
                return;
              }
              const rawStepData = atob(char.value);
              console.log("Received step data:", rawStepData);
              setStepCount(rawStepData);
            });
          })
          .catch((error) => {
            console.log(error);
            setConnectionStatus("Error in Connection");
          });
      };

    const searchAndConnectToDevice=()=>{
        bleManager.startDeviceScan(null,null,(error,device)=>{
            if(error){
                console.log(error);
                setConnectionStatus('Error occured! Restart the app');
                return;
            }
            if(device.name=='Step-semse'){
                bleManager.stopDeviceScan();
                setConnectionStatus('connectingDevice');
                connectToDevice(device)
            }
        })
    }

    useEffect(()=>{
        searchAndConnectToDevice();
    },[])


  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#431DAF'}}>
      <View style={{backgroundColor:'#9277FE',height:750,width:750,borderRadius:375,justifyContent:'center',alignItems:'center'}}>
            <View style={{backgroundColor:'#7C5CFF',height:580,width:580,borderRadius:290,justifyContent:'center',alignItems:'center'}}>
                <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#653FFF',height:380,width:380,borderRadius:190}}>
                    <LottieView
                      source={require('../../../assets/animations/searching.json')}
                      autoPlay
                      loop
                      style={{height:250,width:250}}
                    />
                    <Text style={{color:'white',fontWeight:'700'}}>
                      {connectionStatus}
                    </Text>
                </View>
            </View>
        </View>
    </View>
  )
}

export default DeviceConnection