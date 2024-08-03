import { useEffect, useState } from 'react'
import axios from 'axios';
import {X_RAPIDAPI_KEY, X_RAPIDAPI_HOST, ACTUAL_RANDOM_IMAGE_HOSTNAME} from 'app/env';
import useColor from './useColor';

const useFetch = ({endpoint, query}:fetchParams) => {
    const [data, setData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);
    const [rgb, setRgb] = useColor();

    const {width, height}:any = query?.imageDimensions;
    const options = {
    method: 'GET',
    url: `https://${X_RAPIDAPI_HOST}/${endpoint}`,
    headers: {
        'x-rapidapi-key': X_RAPIDAPI_KEY,
        'x-rapidapi-host': X_RAPIDAPI_HOST
    },
    params: {...query}
    };

    const fetchData = async () =>{
        setIsLoading(true);
        try{
            const response = await fetch(`https://${ACTUAL_RANDOM_IMAGE_HOSTNAME}/${width}/${height}.jpg`);
            if (!response.ok) {
                console.log("An error occurred");
                return;
            }
            const jokeResponse = await axios.request(options);
            setData([jokeResponse.data.data, response.url])
            setRgb();
            setIsLoading(false);
        }catch(e){
            setError(e);
            console.log("An error occured", e.message)
        }finally {
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        fetchData();
        return ()=>{}
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return {data, isLoading, error, refetch, rgb};
}

export default useFetch;