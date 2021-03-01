import React,{useCallback, useState} from 'react'
import './chat.css'
import Message from './Message';

import { addMessage } from './../redux/actions';
import { useDispatch, useSelector } from 'react-redux';


export default function Chat(){

    const dispatch = useDispatch()

    //States
    const [inputValue, setInputValue] = useState('')
    //const [messages, setMessages] = useState([])

    //Handlers
    function handlInputChange(e){
        setInputValue(e.target.value)
    }
    const handlSendBtn = () => {
        dispatch(addMessage(inputValue))
    }
   
    // MessagesStore.subscribe(()=>{
    //     setMessages(MessagesStore.getState().arr)
    // })

    const messages = useSelector(state => state.arr)
    

    return(
        <div className='chat'>
            <div className='messages'>
                {messages.map((mes, key)=>{
                    return <Message key={key} textMessage={mes}/>
                })}
            </div>
            <div className="input-group">
                <input placeholder={'Write a message...'} value={inputValue} onChange={handlInputChange}/>
                <button onClick={handlSendBtn}>Send</button>
            </div>
            
        </div>
    )
}