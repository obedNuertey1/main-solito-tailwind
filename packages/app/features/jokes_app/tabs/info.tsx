import { View, Text } from 'react-native';
import {Stack} from 'expo-router';
import {FontAwesome} from '@expo/vector-icons'

const info = () => {
  return (
    <>
        <Stack.Screen
            options={{
                headerTitle: "",
                headerTransparent: true,
                headerStyle: {
                  backgroundColor: '#fdfcdc'
                }
            }}
        />
        <View className='flex-[1] bg-[#1f2937] items-center justify-center px-4'>
          <View className='bg-[#fdfcdc] rounded-lg items-center justify-center flex-col w-2/3 p-3'>
            <View>
              <FontAwesome name={"info-circle"} color={"#00afb9"} size={42} />
            </View>
            <Text className='text-center text-2xl font-semibold text-[#1f2937]'>This application generates random image from the internet and random joke from an api source which can be be saved on the <Text className='underline italic'>device</Text></Text>
          </View>
        </View>
    </>
  )
}

export default info