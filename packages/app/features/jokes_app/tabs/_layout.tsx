import { View, Text } from 'react-native'
import React from 'react';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import {Tabs} from 'expo-router';

/**
 * 0081a7 - colder - color1 deep
 * 00afb9 - cold - color1 light
 * f07167 - warm - color2 light
 * fed9b7 - warmer - color2 lighter
 * fdfcdc - warmest - color2 lightest -> text color
 */

const Layout = () => {
  return (
    <Tabs
    screenOptions={
        {
            tabBarStyle: {
                backgroundColor: "#00afb9",
                height: 60,
                paddingHorizontal: 4
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#fdfcdc',
            tabBarInactiveTintColor: '#fdfcdc'
        }
    } 
    >
        <Tabs.Screen name="index" 
            options={{
                tabBarIcon: ({color})=>{
                    return <Ionicons name="happy-outline" size={28} color={color} />
                },
                tabBarActiveBackgroundColor: '#f07167',
                tabBarItemStyle: {
                    width: '50%',
                    height: '75%',
                    marginVertical: '2%',
                    marginHorizontal: '10%',
                    borderRadius: 6,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }
                

            }}
        />
        <Tabs.Screen name="info" 
            options={{
                tabBarIcon: ({color}) => {
                    return <View><Ionicons name="information-circle-outline" size={28} color={color} /></View>
                },
                tabBarActiveBackgroundColor: '#f07167',
                tabBarItemStyle: {
                    width: '50%',
                    height: '75%',
                    marginVertical: '2%',
                    marginHorizontal: '10%',
                    borderRadius: 6,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            }}
        />
    </Tabs>
  )
}

export default Layout