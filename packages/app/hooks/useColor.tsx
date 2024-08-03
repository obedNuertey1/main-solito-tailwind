import React, {useState} from 'react';

const useColor = ():useColorOutput => {
    const [red, setRed] = useState<number>(0);
    const [green, setGreen] = useState<number>(0);
    const [blue, setBlue] = useState<number>(0);

    // useEffect(()=>{
    //     // define the range in which a color can be obtained
    //     let [max, min] = [100, 220];
    //     setRed(Math.floor((Math.random() * ((max+1) - min)) + min));
    //     setGreen(Math.floor((Math.random() * ((max+1) - min)) + min));
    //     setBlue(Math.floor((Math.random() * ((max+1) - min)) + min));

    //     return ()=>{

    //     }
    // },[text])

    const set_rgb = ()=>{
        let [max, min] = [100, 220];

        setRed(Math.floor((Math.random() * ((max+1) - min)) + min));
        setGreen(Math.floor((Math.random() * ((max+1) - min)) + min));
        setBlue(Math.floor((Math.random() * ((max+1) - min)) + min));
    }

    const rgb:colorOutput = `rgb(${red}, ${green}, ${blue})`;

    return [rgb, set_rgb];
}

export default useColor;