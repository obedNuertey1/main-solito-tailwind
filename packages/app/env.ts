import { Platform } from "react-native";

// ############# Please do not change code below this line ##############
const X_RAPIDAPI_KEY = (Platform.OS !== 'web')?process.env.EXPO_X_RAPIDAPI_KEY:process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY;
const X_RAPIDAPI_HOST = (Platform.OS !== 'web')?process.env.EXPO_X_RAPIDAPI_HOST:process.env.NEXT_PUBLIC_X_RAPIDAPI_HOST;
const RANDOM_IMAGE_HOSTNAME = (Platform.OS !== 'web')?process.env.EXPO_RANDOM_IMAGE_HOSTNAME:process.env.NEXT_PUBLIC_RANDOM_IMAGE_HOSTNAME;
const ACTUAL_RANDOM_IMAGE_HOSTNAME = (Platform.OS !== 'web')?process.env.EXPO_ACTUAL_RANDOM_IMAGE_HOSTNAME:process.env.NEXT_PUBLIC_ACTUAL_RANDOM_IMAGE_HOSTNAME;

export {
	X_RAPIDAPI_KEY,
	X_RAPIDAPI_HOST,
	RANDOM_IMAGE_HOSTNAME,
	ACTUAL_RANDOM_IMAGE_HOSTNAME,
};