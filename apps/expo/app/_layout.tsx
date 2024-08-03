import {Provider} from 'app/provider';
import {Stack} from 'expo-router';


export default function Root(){
    return (
        <Provider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{headerShown: false, title:""}} />
            </Stack>
        </Provider>
    )
}