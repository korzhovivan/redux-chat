import  React, {useState} from 'react';
import edit_img from './../img/edit.png'

export default function Message({textMessage}){

    const [dateTime, setDateTime] = useState(new Date());

    return(
        
        <div>
            <p>
                <img src={edit_img}/>
                <span className='text-message'>{textMessage}</span>
                <span className='time-message'>
                    {`${dateTime.getHours()}
                    :
                    ${dateTime.getMinutes() < 10 ? '0' + dateTime.getMinutes() : dateTime.getMinutes() }`}
                    </span>
            </p>
        </div>
    )
        
}
