import React,{createRef, useState} from 'react'
import {createStore} from 'redux'
import './chat.css'
import Message from './Message';

import messageReducer from './../redux/reducer';
import { addMessage } from './../redux/actions';


export default function Chat(){

    //Input`s changes
    const [inputValue, setInputValue] = useState('')
    
    function InputChange(e){
        return (e) => {
            setInputValue(e.target.value)
        }
    }
    // DIV with messages ref
    const mess = createRef()
    
    //Messages store
    const MessagesStore = createStore(messageReducer, [])

    const [messages, setMessages] = useState({arr:[]})

    const handlerSendBtn = () => {
        return () => {
            MessagesStore.dispatch(addMessage(inputValue))
        }
    }
    MessagesStore.subscribe(()=>{
   
        setMessages({arr: MessagesStore.getState().arr})
        
    })
    

    return(
        <div className='chat'>
            <div ref={mess} className='messages'>
                {messages.arr.map((mes, key)=>{
                    return <Message key={key} textMessage={mes}/>
                })}
            </div>
            <div className="input-group">
                <input placeholder={'Write a message...'} value={inputValue} onChange={InputChange()}/>
                <button onClick={handlerSendBtn()}>Send</button>
            </div>
            
        </div>
    )
}