import { Link } from 'react-router-dom';
import logoExtend from '../imgs/englishnoteLogoExtend.png';
import "./login.css"

export default function Login(){
    return <form id='loginForm'>
        <img id='logo' src={logoExtend}/>
        <input type="text" name="id" placeholder='Id'/>
        <input type="password" name="psw" placeholder='Password' onMouseDown={(event)=>{
            event.currentTarget.type = "text";
        }} onMouseUp={event=>{
            event.currentTarget.type = "password";
        }}/>
        <Link to="/list" id='loginBtn'>로그인</Link>
        <Link to="/sign" id='signBtn'>회원가입</Link>
    </form>
}