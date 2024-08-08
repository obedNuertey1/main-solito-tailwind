import { StyledComponent } from 'nativewind';
import { View, Text, ImageBackground, ActivityIndicator } from 'react-native'

const JokeImage = ({imageRef, isLoading, data, rgb}) => {

    return (
      <>
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
      </>
    );
}

export default JokeImage;