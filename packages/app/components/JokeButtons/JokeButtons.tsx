import useTiming from 'app/hooks/useTiming';
import Animated, {Easing, useSharedValue, useAnimatedStyle, withSpring, withDelay, withTiming} from 'react-native-reanimated';
import { useRouter } from 'solito/router';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
import { StyledComponent } from 'nativewind';

const {width} = Dimensions.get('screen');

const JokeButtons = ({jokeImageOpacity, jokeImageSharedVal}) => {
    const router = useRouter();
    const [startTimer, clearTimer] = useTiming(1300);
    const firstJokeCategory = useSharedValue(0);
    const secondJokeCategory = useSharedValue(0);
    const thirdJokeCategory = useSharedValue(0);
    
    // Translate onPress
    const firstTranslate = useSharedValue(0);
    const firstTranslateStyle = useAnimatedStyle(()=>({
        transform: [{translateX: firstTranslate.value}]
    }));

    const secondTranslate = useSharedValue(0);
    const secondTranslateStyle = useAnimatedStyle(()=>({
        transform: [{translateX: secondTranslate.value}]
    }));

    const thirdTranslate = useSharedValue(0);
    const thirdTranslateStyle = useAnimatedStyle(()=>({
        transform: [{translateX: thirdTranslate.value}]
    }));

    const firstAnim = useAnimatedStyle(()=>({
        transform: [{scale: firstJokeCategory.value}]
    }))

    const secondAnim = useAnimatedStyle(()=>({
        transform: [{scale:secondJokeCategory.value}]
    }))

    const thirdAnim = useAnimatedStyle(()=>({
        transform: [{scale:thirdJokeCategory.value}]
    }))

    useFocusEffect(
        useCallback(()=>{
            firstJokeCategory.value = 0;
            secondJokeCategory.value = 0;
            thirdJokeCategory.value = 0;
            jokeImageOpacity.value = 0;
            jokeImageSharedVal.value = 1;
            firstTranslate.value = 0;
            secondTranslate.value = 0;
            thirdTranslate.value = 0;

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
            return ()=>{}
        },[])
    )

    return (
        <View className="flex-[1] flex-col justify-center items-center px-[40px] gap-4">
            <Animated.View style={[firstAnim, firstTranslateStyle]}>
                    <TouchableOpacity onPress={async()=>{
                        secondTranslate.value = withTiming(width, {duration: 500, easing: Easing.in(Easing.ease)})
                        thirdTranslate.value = withTiming(-width, {duration: 500}, ()=>{
                            jokeImageOpacity.value = withSpring(0, {duration: 300});
                            jokeImageSharedVal.value = withSpring(1, {duration: 300});
                        })

                        await startTimer();
                        router.push('/joke/doctor');
                        clearTimer();
                    }}>
                        <View className='border-[10px] rounded-[10px] w-60 h-24 border-[#0081a7] flex items-center justify-center bg-primary'>
                            <View className='rounded-[10px] w-[224px] h-20 bg-secondary-lighter flex items-center justify-center'>
                                <StyledComponent component={ImageBackground} source={require('../../assets/images/doctorImage.png')} className='w-[100%] h-[100%] scale-75'></StyledComponent>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={[secondAnim, secondTranslateStyle]}>
                    <TouchableOpacity onPress={
                        async()=>{
                            firstTranslate.value = withTiming(width, {duration: 500, easing: Easing.in(Easing.ease)})
                        thirdTranslate.value = withTiming(-width, {duration: 500}, ()=>{
                            jokeImageOpacity.value = withSpring(0, {duration: 300});
                            jokeImageSharedVal.value = withSpring(1, {duration: 300});
                        })
                            await startTimer();
                            router.push('/joke/engineer');
                            clearTimer();
                        }
                    }>
                        <View className='border-[10px] rounded-[10px] w-60 h-24 p-3 border-[#0081a7] flex items-center justify-center bg-primary'>
                            <View className='rounded-[10px] w-[224px] h-20 bg-secondary-lighter flex items-center justify-center'>
                                <StyledComponent component={ImageBackground} source={require('../../assets/images/engineerImage.png')} className='w-[100%] h-[100%] scale-75 flex justify-center items-center'>
                                <Text className='text-amber-400 text-5xl shadow-sm font-extrabold bg-secondary-lighter rounded-[10px]'>Engineer</Text>
                                </StyledComponent>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={[thirdAnim, thirdTranslateStyle]}>
                    <TouchableOpacity onPress={
                        async()=>{
                            firstTranslate.value = withTiming(width, {duration: 500, easing: Easing.in(Easing.ease)})
                        secondTranslate.value = withTiming(-width, {duration: 500}, ()=>{
                            jokeImageOpacity.value = withSpring(0, {duration: 300});
                            jokeImageSharedVal.value = withSpring(1, {duration: 300});
                        })
                            await startTimer();
                            router.push('/joke/common');
                            clearTimer();
                        }
                    }>
                        <View className='border-[10px] rounded-[10px] w-60 h-24 p-3 border-[#0081a7] flex items-center justify-center bg-primary'>
                            <View className='rounded-[10px] w-[224px] h-20 bg-secondary-lighter flex items-center justify-center'>
                                <StyledComponent component={ImageBackground} source={require('../../assets/images/common.png')} className='w-[100%] h-[100%] scale-75 flex justify-center items-center'><Text className='text-amber-400 text-5xl shadow-sm font-extrabold bg-secondary-lighter rounded-[10px]'>Common</Text></StyledComponent>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Animated.View>
        </View>
    );
}

export default JokeButtons;