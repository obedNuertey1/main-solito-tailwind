import { Platform } from "react-native";

// ############# Please do not change code below this line ##############
const API_URL = (Platform.OS !== 'web')?process.env.EXPO_API_URL:process.env.NEXT_PUBLIC_API_URL;
const API_KEY = (Platform.OS !== 'web')?process.env.EXPO_API_KEY:process.env.NEXT_PUBLIC_API_KEY;
const JELLO_API = (Platform.OS !== 'web')?process.env.EXPO_JELLO_API:process.env.NEXT_PUBLIC_JELLO_API;

export {
	API_URL,
	API_KEY,
	JELLO_API,
};