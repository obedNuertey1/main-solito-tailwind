import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
// import React from 'react'
import {Stack} from 'expo-router';
import {useRouter} from 'solito/router';
import { Image } from 'moti';
import { StyledComponent } from 'nativewind';
import useTiming from 'app/hooks/useTiming';
import Animated, {SlideInLeft, Easing, useSharedValue, useAnimatedStyle, withSpring, withDelay} from 'react-native-reanimated';
import React, {useEffect} from 'react';

const Jokes = () => {
    const router = useRouter();
    const [startTimer, clearTimer] = useTiming(500);
    const firstJokeCategory = useSharedValue(0);
    const secondJokeCategory = useSharedValue(0);
    const thirdJokeCategory = useSharedValue(0);
    const jokeImageSharedVal = useSharedValue(1);
    const jokeImageOpacity = useSharedValue(0);

    const jokeImageSharedValStyle = useAnimatedStyle(()=>({
        transform: [{scale: jokeImageSharedVal.value}],
        opacity: jokeImageOpacity.value
    }))

    const firstAnim = useAnimatedStyle(()=>({
        transform: [{scale: firstJokeCategory.value}]
    }))

    const secondAnim = useAnimatedStyle(()=>({
        transform: [{scale:secondJokeCategory.value}]
    }))

    const thirdAnim = useAnimatedStyle(()=>({
        transform: [{scale:thirdJokeCategory.value}]
    }))

    useEffect(()=>{
        firstJokeCategory.value = withSpring(1, {
            duration: 700
        }, ()=>{
            secondJokeCategory.value = withSpring(1, {
                duration: 700
            }, ()=>{
                thirdJokeCategory.value = withSpring(1, {
                    duration: 700
                })
            })
        })

        jokeImageSharedVal.value = withDelay(700*3, withSpring(0.4, {
            duration: 500
        }))
        jokeImageOpacity.value = withDelay(700*3, withSpring(1, {
            duration: 500
        }))

        return ()=>{
            firstJokeCategory.value = 0;
            secondJokeCategory.value = 0;
            thirdJokeCategory.value = 0;
            jokeImageOpacity.value = 0;
            jokeImageSharedVal.value = 1;
        };
    },[firstJokeCategory])

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
            <View className='object-cover w-screen mt-[20%]'>
                <StyledComponent component={Animated.Image} source={require('../../../assets/images/jokes-header-image.png')} className='w-screen -mt-6 -mb-14' style={[jokeImageSharedValStyle]} />
            </View>
            <View className="flex-[1] flex-col justify-center items-center px-[40px] gap-4">
                <Animated.View style={[firstAnim]}>
                    <TouchableOpacity onPress={async()=>{
                        await startTimer();
                        router.push('/joke/doctor');
                        clearTimer();
                    }}>
                        <View className='border-[10px] rounded-[10px] w-60 h-24 border-[#0081a7] flex items-center justify-center bg-primary'>
                            <View className='rounded-[10px] w-[224px] h-20 bg-secondary-lighter flex items-center justify-center'>
                                <StyledComponent component={ImageBackground} source={require('../../../assets/images/doctorImage.png')} className='w-[100%] h-[100%] scale-75'></StyledComponent>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={[secondAnim]}>
                    <TouchableOpacity onPress={
                        async()=>{
                            await startTimer();
                            router.push('/joke/engineer');
                            clearTimer();
                        }
                    }>
                        <View className='border-[10px] rounded-[10px] w-60 h-24 p-3 border-[#0081a7] flex items-center justify-center bg-primary'>
                            <View className='rounded-[10px] w-[224px] h-20 bg-secondary-lighter flex items-center justify-center'>
                                <StyledComponent component={ImageBackground} source={require('../../../assets/images/engineerImage.png')} className='w-[100%] h-[100%] scale-75 flex justify-center items-center'>
                                <Text className='text-amber-400 text-5xl shadow-sm font-extrabold bg-secondary-lighter rounded-[10px]'>Engineer</Text>
                                </StyledComponent>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={[thirdAnim]}>
                    <TouchableOpacity onPress={
                        async()=>{
                            await startTimer();
                            router.push('/joke/common');
                            clearTimer();
                        }
                    }>
                        <View className='border-[10px] rounded-[10px] w-60 h-24 p-3 border-[#0081a7] flex items-center justify-center bg-primary'>
                            <View className='rounded-[10px] w-[224px] h-20 bg-secondary-lighter flex items-center justify-center'>
                                <StyledComponent component={ImageBackground} source={require('../../../assets/images/common.png')} className='w-[100%] h-[100%] scale-75 flex justify-center items-center'><Text className='text-amber-400 text-5xl shadow-sm font-extrabold bg-secondary-lighter rounded-[10px]'>Common</Text></StyledComponent>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
    </>
  )
}

export default Jokes;