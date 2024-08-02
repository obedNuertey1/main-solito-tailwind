import {ExpoConfig, ConfigContext} from 'expo/config';

export default ({config}: ConfigContext): ExpoConfig => { 
    
    return{
    ...config,
    "name": "main-solito-nativewind",
    "slug": "main-solito-nativewind",
    // "version": "1.0.0",
    // "scheme": "solito-nativewind",
    // "platforms": ["ios", "android"],
    "orientation": "portrait",
    "ios": {
      "bundleIdentifier": "com.solito.nativewind",
      supportsTablet: true
    },
    android: {
        adaptiveIcon: {
            // foregroundImage: './assets/adaptive-icon.png',
            backgroundColor: '#fdfcdc'
        }
    },
    // web: {
    //     favicon: "./assets/favicon.png"
    // },
    icon: "../../packages/app/assets/images/logo.png",
    splash: {
      image: "../../packages/app/assets/images/logo.png",
      resizeMode: "contain",
      backgroundColor: "#1f2937"
    },
    assetBundlePatterns: [
        "**/*"
    ],
}
}