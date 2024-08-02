import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
// import React from 'react'
import {Stack} from 'expo-router';
import {useRouter} from 'solito/router';
import { Image } from 'moti';
import { StyledComponent } from 'nativewind';
import useTiming from 'app/hooks/useTiming';
import Animated, {SlideInLeft, Easing} from 'react-native-reanimated'

const Jokes = () => {
    const router = useRouter();
    const [startTimer, clearTimer] = useTiming(500);

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
                <StyledComponent component={Image} source={require('../../../assets/images/jokes-header-image.png')} className='w-screen scale-[0.4] -mt-6 -mb-14' />
            </View>
            <View className="flex-[1] flex-col justify-center items-center px-[40px] gap-4">
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
            </View>
        </View>
    </>
  )
}

export default Jokes;