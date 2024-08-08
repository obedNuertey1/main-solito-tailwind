import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import Animated, {SlideInDown} from 'react-native-reanimated';

const DeviceWidth = Dimensions.get("window").width - 40;

const JokeImageButton = ({isLoading, refetch, label, icon}) => {

    return (
      <>
        <Animated.View entering={SlideInDown.delay(400).duration(1000)} style={{right: "5%", bottom: (Dimensions.get("screen").height * (3/100))}} className={"absolute"}>
            <TouchableOpacity role="button" disabled={isLoading ? true :false} style={{width: DeviceWidth }} className='bg-primary h-20 rounded-[10px] border-4 border-[#00afb9] justify-center items-center ' onPress={()=>{
              refetch()
            }}>
              <View style={{width: DeviceWidth - 16}} className='h-[64px] bg-gray-900 rounded-[10px] justify-between items-center flex-row px-5 border-8 border-orange-500'>
                <Text className='text-[28px] text-[#fdfcdc]'>{label}</Text>
                {icon}
              </View>
            </TouchableOpacity>
          </Animated.View>
      </>
    )
}

export default JokeImageButton;