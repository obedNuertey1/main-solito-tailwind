import { View, Text, ActivityIndicator } from 'react-native'
import Animated, {SlideInDown} from 'react-native-reanimated';

const SavingSpinner = ({saving, label})=>{
    return (
      <>
        {saving && 
            <View className='absolute w-screen h-[100%] z-20 flex justify-center items-center'>
              <Animated.View entering={SlideInDown.duration(500)} className='processing bg-black opacity-75 w-[26%] h-[6%] rounded-xl flex flex-row justify-center items-center gap-1 pb-[6px]'>
                <Text className='text-white font-semibold text-lg'>{label}</Text>
                <ActivityIndicator className='text-center text-[10px] font-extrabold' animating={true} color={"#ffffff"} size={30} />
              </Animated.View>
            </View>
            }
      </>
    );
}

export default SavingSpinner;