import {useRef, useCallback} from 'react';

const useTiming = (ms: number)=>{
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    
    const startTimer = ()=>(new Promise((res)=>{
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(res, ms);
    }));

    const clearTimer = useCallback(()=>{
        if(timeoutRef.current){
            console.log(timeoutRef.current);
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    }, []);

    return [startTimer, clearTimer] as const;
}

export default useTiming;