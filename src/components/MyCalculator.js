import React, {useState} from 'react';
import './Calculator.css';
import MyRGBPanel from './MyRGBPanel';
import MyDisplay from './MyDisplay';
import MyButton from './MyButton';

function MyCalculator() {
    const [result, setResult]=useState("0");
    const handleclick =(value)=>{
        alert(value);
    }
    // 在這裡撰寫你的程式碼
    return (
        <div className='calculator'> 
           <MyDisplay />
           <MyButton buttonClicked={handleclick}/>
        </div>
    );
}

export default MyCalculator;