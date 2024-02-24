import React from 'react'
import Card from './Card.jsx'
import { IoKeyOutline } from "react-icons/io5";
import { IoIosUnlock } from "react-icons/io";
import { FaFingerprint } from "react-icons/fa";

const Page2 = () => {
  return (<>
  <div className='page-2 h-screen ' style={{ backgroundColor:"#fff1e5"  , paddingLeft: "7%", paddingRight: "7%"}}>
    <div className=' max-h-screen py-20 h-32 flex justify-center ' >
        <div className=' py-18 font-bold text-4xl '> What makes a Password Strong ? </div>
    </div>

    <div className=' py-10 flex flex-wrap items-centre justify-evenly'>
       <Card className=" card1 pt-3" icon={<IoKeyOutline/>} title={"Long"} content={"The longer a password, the more secure it is. A strong password should be at least 10 characters long."} />
       <Card className=" card2 pt-3" icon={<IoIosUnlock/>}  title={"Complex"} content={"Strong passwords use a combination of letters, numbers, cases, and symbols to form an unpredictable."} />
       <Card className=" card3" icon={<FaFingerprint/>} title={"Unique"} content={"A strong password should be unique to each account to reduce vulnerability in the event of a hack."} />
    </div>
    </div>
</>
  )
}

export default Page2