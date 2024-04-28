/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

// navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../../App'

type HomeProps = NativeStackScreenProps<RootStackParamList,'GetStarted'>

function GetStarted({navigation}:HomeProps) {
  return (
    <View style={styles.screenStart}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/Images/walkingman.png')}
          style={{width: '100%', height: 300, resizeMode: 'contain'}}
        />
        <Image
          source={require('../../../assets/Images/cloudleft.png')}
          style={{width: '50%', resizeMode: 'contain', position: 'absolute', zIndex: -1}}
        />
        <Image
          source={require('../../../assets/Images/cloudright.png')}
          style = {{position:'absolute',right:0,bottom:0}}
        />
      </View>
      <View>
        {/* <Text style={styles.mainText}>Step On</Text> */}
        <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/Images/stepon.png')}
          style={{width:130,resizeMode:'contain'}}
        />
        </View>
        <Text style={styles.subText}>
          Take your step and get started{'\n'} with the journey
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
        <View style={styles.getStartedBTN} >
          <Text style={styles.getStartedText} >
            Get Started <Image
            source={require('../../../assets/Images/arrow.png')}
            style={{width:40,resizeMode:'contain'}}
            />
          </Text>
        </View>
        </TouchableOpacity>
        <Text>Already have an account? <TouchableOpacity onPress={()=>{navigation.navigate('SignIn')}}><Text style={styles.signIn}>sign in</Text></TouchableOpacity></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenStart: {
    backgroundColor: '#FFFAE7',
    height: '100%',
  },
  imageContainer: {
    position: 'relative',
    marginBottom:50
  },
  logoContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:'center',
    marginBottom:25
  }
  ,
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'boruna',
    textAlign: 'center'
  },
  subText: {
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStartedBTN: {
    backgroundColor: '#0E0E0E',
    padding: 20,
    width: 300,
    borderRadius: 8,
  },
  getStartedText: {
    color: '#D3D3D3',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:18,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    gap:20
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    width:'100%',
    position:'absolute',
    bottom:50,

  },
  signIn:{
    fontWeight:'bold',
  }
});

export default GetStarted;
