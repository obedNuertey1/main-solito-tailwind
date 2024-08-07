import { View } from 'react-native'
import {Stack} from 'expo-router';
import { Image } from 'moti';
import { StyledComponent } from 'nativewind';
import Animated, {useSharedValue, useAnimatedStyle, withSpring, withDelay} from 'react-native-reanimated';
import {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import JokeButtons from 'app/components/JokeButtons/JokeButtons';
import JokeHeaderImage from 'app/components/JokeHeaderImage/JokeHeaderImage';

export default function Jokes(){
    const jokeImageSharedVal = useSharedValue(1);
    const jokeImageOpacity = useSharedValue(0);
    

    const jokeImageSharedValStyle = useAnimatedStyle(()=>({
        transform: [{scale: jokeImageSharedVal.value}],
        opacity: jokeImageOpacity.value
    }))


    useFocusEffect(
        useCallback(()=>{
            jokeImageOpacity.value = 0;
            jokeImageSharedVal.value = 1;
    
            jokeImageSharedVal.value = withDelay(700*3, withSpring(0.4, {
                duration: 500
            }))
            jokeImageOpacity.value = withDelay(700*3, withSpring(1, {
                duration: 500
            }))
            return ()=>{}
        },[])
    )

  return (
    <>
        <Stack.Screen 
        options={{
            headerTitle: "",
            headerTransparent: true,
            headerBackground: ()=>(
                <Image source={require("../../../assets/images/image1.png")} style={{width: '100%', height: '100%'}} />
            )
        }}
        />
        <View className='flex-[1] bg-gray-800'>
            <JokeHeaderImage jokeImageSharedValStyle={jokeImageSharedValStyle} />
            <JokeButtons jokeImageOpacity={jokeImageOpacity} jokeImageSharedVal={jokeImageSharedVal} />
        </View>
    </>
  )
}
