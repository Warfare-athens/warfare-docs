import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";






const Footer = () => {
  return (
    <div className=' footer1 h-96 w-full bg-slate-900'>
        <div className=' h-20 w-full flex flex-wrap justify-center items-center border-t-2 border-neutral-300 bg-white text-black font-medium text-xl text-center'>
            Designed by ATHENS
        </div>
        <div className=' footer2 flex justify-around flex-wrap'>


            <div  className=' mt-5 dw h-64 w-64 flex flex-nowrap justify-center '>
            <div className=' mt-5 w-full flex justify-evenly flex-col content-evenly m-1 text-white mx-3'>
            <div className='  h-2/6 w-full flex justify-center items-center text-6xl ' > <FaMapMarkerAlt /> </div>
            <div className=' h-1/6 font-semibold text-lg w-full flex justify-center items-center ' > INDIA </div>
            <div className=' h-1/6 font-semibold text-xl w-full flex justify-center  items-center gap-4' > <ImFacebook2 /> <FaInstagram/> <FaWhatsapp /> <FaTelegram />
            </div>
            </div>
            </div>


            <div  className=' mt-5 dw h-64 w-64 text-gray-300 leading-relaxed flex flex-col justify-evenly items-center '>
                <div> 
                    <span className=' text-yellow-50 text-lg mb-5 '>Contact us for</span>
                    <ul class="flex flex-col justify-center gap-1 mt-5 list-none mb-5 underline ">
                    <li>Security</li>
                    <li>Privacy</li>
                    <li>Blog</li>
                    <li>Support</li>
                    </ul>
                </div>
            </div>


            <div  className=' mt-5 dw h-64 w-64 text-gray-400 leading-relaxed flex flex-col justify-evenly items-center '>
                <div> 
                    <span className='text-yellow-50 text-lg mb-5 '>For business</span>
                    <ul class="flex flex-col justify-center gap-1 mt-5 list-none mb-5 underline ">
                    <li>Business support</li>
                    <li>Business products</li>
                    <li>Business partners</li>
                    <li>Affiliates</li>
                    </ul>
                </div>
            </div>
            <div  className=' mt-5 dw h-64 w-64 text-gray-400 leading-relaxed flex flex-col justify-evenly items-center '>
                <div> 
                    <span className='text-yellow-50 text-lg mb-5 '>For partners</span>
                    <ul class="flex flex-col justify-center gap-1 mt-5 list-none mb-5 underline ">
                    <li>Security</li>
                    <li>Mobile Carriers</li>
                    <li>Affiliates</li>
                    <li>Support</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer