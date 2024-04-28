/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import Chat from './Sub Screens/Chat';
import NoSub from './Sub Screens/NoSub';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList2} from '../../App'
type ChatProps = NativeStackScreenProps<RootStackParamList2,'ChatAI'>

const ChatAI = ({navigation}:ChatProps) => {
    const [sub,setSub] = React.useState(false);

    return (
        <SafeAreaView>
            {!sub ? (<Chat navigation={navigation}/>):(<NoSub/>)}
        </SafeAreaView>
    )
}

export default ChatAI