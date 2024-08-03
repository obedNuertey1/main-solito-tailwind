type imageDimensions = {
    width: number,
    height: number
}

type params = any;

type endPointType = "common" | "doctor" | "engineer";

type fetchParams = {
    endpoint: endPointType | undefined;
    query?: {
        imageDimensions?: imageDimensions,
        params?: params
    }
}

type crossPlatformImage = {
    uri: string;
    width: number | string;
    height: number | string;
    alt: string;
    options?: any;
    imageStyles?: any
}

type useColorProps = {
    text: string | undefined;
}

type colorOutput = `rgb(${number}, ${number}, ${number})`;

type useColorOutput = [colorOutput, ()=>void];