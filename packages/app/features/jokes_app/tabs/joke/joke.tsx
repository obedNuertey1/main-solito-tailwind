import { View, Text, ImageBackground, Platform, Dimensions, ActivityIndicator } from 'react-native'
import {Stack} from 'expo-router';
import { useEffect, useState, useRef } from 'react'
import { createParam } from 'solito'
import { Image } from 'moti';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'solito/router';
import {Feather, Ionicons} from '@expo/vector-icons';
import useFetch from 'app/hooks/useFetch';
import { StyledComponent } from 'nativewind';
import useColor from 'app/hooks/useColor';
import Animated, {SlideInDown, Easing} from 'react-native-reanimated';
import ViewShot, {captureRef} from 'react-native-view-shot';
import * as MediaLibrary from 'expo-media-library';
import useTiming from 'app/hooks/useTiming';

const {useParam} = createParam<{id: endPointType}>();
const DeviceWidth = Dimensions.get("window").width - 40;

const jokeHeaderImages = {
  doctor: require('../../../../assets/images/doctorImage.png'),
  common: require('../../../../assets/images/common.png'),
  engineer: require('../../../../assets/images/engineerImage.png')
};

const Joke = () => {
  const [id] = useParam('id');
  const router = useRouter();

  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [saving, setSaving] = useState<boolean>(false);
  const imageRef = useRef<any>();
  const [startTimer, clearTimer] = useTiming(500);
  
  const onSaveImageAsync = async ()=>{
    try{
      setSaving(true);
      await startTimer();
      if(!isLoading){
        const localUri = await captureRef(imageRef, {format: "png", quality: 1});
        console.log(localUri);
        await MediaLibrary.saveToLibraryAsync(localUri);
        if(localUri){
          alert("Saved!");
        }
      }
      setSaving(false);
      clearTimer();
    }catch(e){
      console.log(e);
    }
  }

  const fetchConfig: fetchParams = {
    endpoint: id,
    query: {
      imageDimensions: {
        height: 1000,
        width: 1000
      }
    }
  }
  const {data, isLoading, refetch, rgb} = useFetch(fetchConfig);

  const imageUrl = (id === 'doctor')?jokeHeaderImages.doctor:(id === 'engineer')?jokeHeaderImages.engineer:(id === 'common')?jokeHeaderImages.common: "";
  return (
    <>
      <Stack.Screen
        options={{
          headerBackground(){
            return <Image source={imageUrl} width={100} height={100} resizeMode='contain' />
          },
          headerLeft() {
            return (
              <TouchableOpacity onPress={()=>{
                router.replace("/");
              }} className='bg-black opacity-50 rounded-[10px] p-1' >
                <View className='bg-black p-1.5 rounded-[10px]'>
                  <Feather name="arrow-left" size={20} color={"#fdfcdc"} />
                </View>
              </TouchableOpacity>
            );
          },
          headerTitle: "",
          headerRight(){
            return (
              <TouchableOpacity
                onPress={()=>{
                  if(status?.granted == false){
                    requestPermission();
                  }
                  onSaveImageAsync();
                }
              }
                className='bg-black opacity-50 rounded-[10px] p-1'
              >
                <View className='bg-black p-1.5 rounded-[10px]'>
                  <Ionicons name='save-outline' size={20} color={"#fdfcdc"} />
                </View>
              </TouchableOpacity>
            );
          }
        }}
      />
      <View className=' bg-gray-900 flex-[1] px-[20px] relative'>
      <View ref={imageRef} className='mt-[20px] rounded-[10px]'
              // @ts-ignore
              collapsable={false}
              >
          {
            (isLoading)?(
              <StyledComponent component={ImageBackground} source={require("app/assets/images/defaultJokeImage.png")} resizeMode='contain' imageStyle={{width: "100%", height: 500, borderRadius: 10, paddingHorizontal: 10, flexDirection: 'column'}} className='justify-center items-center flex-col shadow-inner'  >

              <View className=' flex items-center justify-center w-[90%] h-[500px] '>
                <View  className='bg-gray-800 opacity-75 p-3 w-20 h-20 rounded-full items-center justify-center'>
                  <ActivityIndicator className='text-center text-[30px] font-extrabold' animating={true} color={"#f97316"} size={50} />
                </View>
              </View>
            </StyledComponent>
            ):(
                <StyledComponent 
                component={ImageBackground} source={{uri: data[1]}} defaultSource={require("app/assets/images/defaultJokeImage.png")} imageStyle={{width: "100%", height: 500, borderRadius: 10, paddingHorizontal: 10, flexDirection: 'column'}} className=' justify-center items-center flex-col shadow-inner'  >
                  <View className=' flex items-center justify-center w-[90%] h-[500px] '>
                    <View  className='bg-gray-800 rounded-[10px] opacity-75 p-3'>
                      <Text style={{color: rgb}} className='text-center text-[30px] font-extrabold opacity-100'>{data[0]}</Text>
                    </View>
                  </View>
                </StyledComponent>
            )
          }
        </View>
          {/* Activates when processing image to storage */}
          {saving && 
          <View className='absolute w-screen h-[100%] z-20 flex justify-center items-center'>
            <Animated.View entering={SlideInDown.duration(500)} className='processing bg-black opacity-75 w-[26%] h-[6%] rounded-xl flex flex-row justify-center items-center gap-1 pb-[6px]'>
              <Text className='text-white font-semibold text-lg'>Saving</Text>
              <ActivityIndicator className='text-center text-[10px] font-extrabold' animating={true} color={"#ffffff"} size={30} />
            </Animated.View>
          </View>
          }
        <Animated.View entering={SlideInDown.delay(400).duration(1000)} style={{right: "5%", bottom: (Dimensions.get("screen").height * (3/100))}} className={"absolute"}>
          <TouchableOpacity role="button" disabled={isLoading ? true :false} style={{width: DeviceWidth }} className='bg-primary h-20 rounded-[10px] border-4 border-[#00afb9] justify-center items-center ' onPress={()=>{
            refetch()
          }}>
            <View style={{width: DeviceWidth - 16}} className='h-[64px] bg-gray-900 rounded-[10px] justify-between items-center flex-row px-5 border-8 border-orange-500'>
              <Text className='text-[28px] text-[#fdfcdc]'>Next</Text>
              <StyledComponent component={Feather} name='arrow-right' className='text-[#fdfcdc] text-4xl font-extrabold mt-1' />
            </View>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </>
  )
}

export default Joke;