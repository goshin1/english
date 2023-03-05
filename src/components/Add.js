import './add.css';
import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import axios from 'axios';

export default function Add(){
    axios.defaults.withCredentials = true;
    const url = 'https://openapi.naver.com/v1/papago/n2mt';
    const [data, setData] = useState([]);
    console.log(process.env.REACT_APP_PAPAGO_ID);
    console.log(process.env.REACT_APP_PAPAGO_PSW);
    const onTrans= async () =>{

        try{
            axios.post(url, {
                form: {'source':'ko', 'target':'en', 'text':'test'},
                headers : {
                    'Access-Control-Allow-Origin': "*",
                    'Content-Type': 'application/xml; charset=utf-8',
                    'X-Naver-Client-Id' : process.env.REACT_APP_ID,
                    'X-Naver-Client-Secret': process.env.REACT_APP_PAPAGO_PSW 
                },
                withCredentials : true,
                credentials: 'same-origin',
            });
        }catch(error){
            console.log(error);
        }


        // const response = axios(url, {
        //     method : 'POST',
        // mode : 'no-cors',
        // form: {'source':'ko', 'target':'en', 'text':'test'},
        // headers : {
        //     'Access-Control-Allow-Origin': true,
        //     'Content-Type': 'application/xml; charset=utf-8',
        //     'X-Naver-Client-Id' : 'HuZGFbBJcZG0iOuOFz2U',
        //     'X-Naver-Client-Secret': 'ANo9xUe1rs'
        // },
        // withCredentials : true,
        // credentials: 'same-origin',
        // });
        // setData(response.data);
        // console.log(data);
    }

    return <div id='addDiv'>
        <p>
            <input type='text' name='searchWord' placeholder='word'/>
            <button id='wSearch' onClick={onTrans}></button>
        </p>
        <p><input type='text' name='mean' placeholder='mean' /></p>
        <div id='searchRes'>
            sdas
        </div>
    </div>
}

//https://developers.naver.com/docs/papago/papago-nmt-example-code.md#node-js
//https://junhyunny.github.io/information/react/react-proxy/

// "{"form":{"source":"ko","target":"en","text":"test"},
// "headers":{"Access-Control-Allow-Origin":true,"Content-Type":"application/xml; charset=utf-8",
// "X-Naver-Client-Id":"HuZGFbBJcZG0iOuOFz2U","X-Naver-Client-Secret":"ANo9xUe1rs"},
// "withCredentials":true,"credentials":"same-origin"}"