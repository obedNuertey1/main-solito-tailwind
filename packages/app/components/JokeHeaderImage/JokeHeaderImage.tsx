import { StyledComponent } from 'nativewind';
import { View } from 'react-native'
import Animated from 'react-native-reanimated';

const JokeHeaderImage = ({jokeImageSharedValStyle}) => {
    return (
        <View className='object-cover w-screen mt-[20%]'>
            <StyledComponent component={Animated.Image} source={require('../../assets/images/jokes-header-image.png')} className='w-screen -mt-6 -mb-14' style={[jokeImageSharedValStyle]} />
        </View>
    );
};

export default JokeHeaderImage;