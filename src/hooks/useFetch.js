import { useEffect, useState } from 'react';

export default function useFetch(url){
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then(res => {
            return res;
        })
        .then(data => {
            setData(data);
        })
    }, [url]);

    return data;
}