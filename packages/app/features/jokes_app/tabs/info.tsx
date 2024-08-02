import { View, Text } from 'react-native';
import React from 'react';
import {Stack} from 'expo-router';

const info = () => {
  return (
    <>
        <Stack.Screen
            options={{
                headerTitle: "",
                headerTransparent: true,
                
            }}
        />
        <View className='flex-[1] items-center justify-center'>
        <Text>info</Text>
        </View>
    </>
  )
}

export default info