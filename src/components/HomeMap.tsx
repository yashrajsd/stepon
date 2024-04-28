/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HomeMap = ({steps}) => {


  return (
    <View style={{ padding: 15, marginTop: 10 }}>
      <View
        style={{
          backgroundColor: 'white',
          height: 600,
          width: '100%',
          borderRadius: 8,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Image
          source={require('../../assets/Images/map.jpg')}
          style={{ height: '100%', width: '100%', resizeMode: 'cover' }}
        />

        <View style={{ position: 'absolute', width: '100%', bottom: 0 }}>
          <LinearGradient
            useAngle={true}
            angle={0}
            angleCenter={{ x: 0.5, y: 0.5 }}
            colors={[
              'rgba(25, 25, 25, 1)',
              'rgba(25, 25, 25, 0.85)',
              'rgba(25, 25, 25, 0.5)',
            ]}
          >
            <View style={{ height: 600, position: 'relative', width: '100%' }}>
              <View style={{ position: 'absolute', bottom: 0, width: '100%', paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                  <View style={{ height: 30, width: 30, backgroundColor: '#44FF6D', borderRadius: 15 }}>
                    
                  </View>
                  <Text style={{ color: '#F6F6F6' }}>
                    <Text style={{ fontSize: 30, fontWeight: '700' }}>{steps} Steps </Text>
                    Walked today
                  </Text>
                </View>
                <TouchableOpacity style={{ width: '100%' }}>
                  <View style={{ backgroundColor: '#FFFFFF', paddingVertical: 20, borderRadius: 8, width: '100%', marginTop: 20 }}>
                    <Text style={{ color: '#000000', textAlign: 'center', fontWeight: 'regular', fontSize: 17 }}>Continue</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default HomeMap;

