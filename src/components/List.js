import { Link } from 'react-router-dom';
import uuid from "react-uuid";
import './list.css';
import noteSlice from '../noteSlice';
import { useSelector, useDispatch } from 'react-redux';
import { asyncHTMLFetch } from '../noteSlice';


export default function List(){
    const testArray = [{id : 1, 'eng' : 'achivement', 'kor' : '성취, 달성dddddddddddddddd'}, {'id' : 2, 'eng' : 'appeal', 'kor' : '관심을 끌다'}]
    const englishBlocks = [];

    const dispath = useDispatch();
    

    for(let i = 0; i < testArray.length; i++){
        englishBlocks.push(
            <div className='englishBlock' key={uuid()}>
                <button className='speaker' onClick={async ()=>{
                    
                }}></button>
                <span className='english'>
                    <div className='overBlock' onMouseOver={event=>{
                        if(event.currentTarget.innerHTML.length * 4 > 100){
                            event.currentTarget.style.marginLeft = "-"+event.currentTarget.innerHTML.length * 4 + "px";
                        }
                    }} onMouseOut={event=>{
                        event.currentTarget.style.marginLeft = "0px";
                    }}>
                        {testArray[i].eng}
                    </div>
                </span>
                <span className='hangul'>
                <div className='overBlock' onMouseOver={event=>{
                        if(event.currentTarget.innerHTML.length * 4 > 100){
                            event.currentTarget.style.marginLeft = "-"+event.currentTarget.innerHTML.length * 4 + "px";
                        }
                    }} onMouseOut={event=>{
                        event.currentTarget.style.marginLeft = "0px";
                    }}>
                        {testArray[i].kor}
                    </div>
                </span>
            </div>

        );
    }

    

    return <div id='listDiv'>
        <header id='listHeader'>
            총단어 { 0 + "/" + 0}
            <input type="text" name='search' id='search'/>
        </header>
        <nav id='listNav'>
            <Link to="/add" className='linkBtn'>단어 <span>추가</span></Link>
            <Link to="" className='linkBtn'>단어 <span>학습</span></Link>
            <Link to="" className='linkBtn'>단어 <span>편집</span></Link>
        </nav>
        { englishBlocks }

    </div>
}