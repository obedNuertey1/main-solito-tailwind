import { View } from 'react-native'
import {Stack} from 'expo-router';
import { useState, useRef } from 'react'
import { createParam } from 'solito'
import { Image } from 'moti';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'solito/router';
import {Feather, Ionicons} from '@expo/vector-icons';
import useFetch from 'app/hooks/useFetch';
import { StyledComponent } from 'nativewind';
import {captureRef} from 'react-native-view-shot';
import * as MediaLibrary from 'expo-media-library';
import useTiming from 'app/hooks/useTiming';
import JokeImage from 'app/components/JokeImage/JokeImage';
import SavingSpinner from 'app/components/SavingSpinner/SavingSpinner';
import JokeImageButton from 'app/components/JokeImageButton/JokeImageButton';

const {useParam} = createParam<{id: endPointType}>();

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
          <JokeImage data={data} imageRef={imageRef} isLoading={isLoading} rgb={rgb} />
          <SavingSpinner saving={saving} label={"Saving"} />
          <JokeImageButton isLoading={isLoading} refetch={refetch} label={"Next"} icon={<StyledComponent component={Feather} name='arrow-right' className='text-[#fdfcdc] text-4xl font-extrabold mt-1' />} />
      </View>
    </>
  )
}

export default Joke;