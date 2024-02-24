import React from 'react'
import { IoKeyOutline } from "react-icons/io5";
import { IoIosUnlock } from "react-icons/io";
import { FaFingerprint } from "react-icons/fa";

const Card = (props) => {
  return (
    <div style={{ backgroundColor:"#fffcfa"}} className='Card mt-5 drop-shadow-md h-72 w-64 rounded-2xl flex flex-nowrap justify-center '>
        <div className=' mt-5 w-full flex justify-evenly flex-col content-evenly m-1  mx-3'>
            <div style={{color:"#4a3623"}} className='  h-2/6 w-full flex justify-center items-center text-5xl ' > {props.icon}</div>
            <div className=' h-1/6 font-semibold text-lg w-full flex justify-center items-center ' >{props.title}</div>
            <div className='  h-3/6 w-full flex justify-center items-center ' >{props.content}</div>
        </div>
    </div>
  )
}

export default Card