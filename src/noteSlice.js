import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
// const asyncHTMLFetch = createAsyncThunk(
//     'englishNote/crawling',
//     async(url) => {
//         const resp = await fetch("https://translate.google.co.kr/?hl=ko");
//         console.log(resp);

//     }
// );

const noteSlice = createSlice({
    name : 'englishNote',
    initialState : {
        words : [
            {eng : 'appeal', kor : '관심을 끌다, 매력이 있는'},
            {eng : 'vote', kor : '투표'}
        ]
    },
    reducers : {
        addWord : (state, eng, kor) =>{
            let temp = state.words;
            temp.push({eng : eng, kor : kor});
            state.words = temp;
        }
    }
});

export default noteSlice;;
// export { asyncHTMLFetch };