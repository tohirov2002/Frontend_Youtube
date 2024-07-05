import React, { useState } from 'react'
import Img7 from "../../assets/Images/img7.svg";
import Shape from "../../assets/Images/Shape.svg"
import { GiHamburgerMenu } from "react-icons/gi";
import {AiOutlineCloseCircle,AiOutlineFire} from "react-icons/ai"
import {MdOutlineSubscriptions} from "react-icons/md"
import { LibraryAdd } from "@mui/icons-material";
import { VscHistory } from "react-icons/vsc";
import {AiFillStar,AiOutlineHeart} from "react-icons/ai"
import {BsStopwatch} from "react-icons/bs"
import { SiYoutubemusic } from "react-icons/si";

const HamLeft = () => {
    const [counter,setCounter] = useState(true);

    const handleclick = () => {
        setCounter(pase => !pase)
    }
  return (
  <>
  <div className='dark:bg-black'>
  <div className='sticky top-0 hamleft w-[70px] pl-2 '>
         <div className='flex items-center justify-start flex-col pt-[25px] gap-5 '>
         <GiHamburgerMenu onClick={handleclick} className='w-[30px] h-[30px] dark:fill-white'/>
          <img className='w-[30px] h-[30px]' src={Img7} alt="Home" />
          <AiOutlineFire  className="w-[30px] h-[30px] fill-[#898989] hover:fill-red-500 dark:hover:fill-red-500 dark:fill-[#898989]"/>
          <MdOutlineSubscriptions className="w-[30px] h-[30px] fill-[#898989] hover:fill-red-500 dark:hover:fill-red-500 dark:fill-[#898989]"/>
          {/* <LibraryAdd className=" w-[30px] h-[30px] fill-[#898989] hover:fill-red-500 dark:hover:fill-red-500 dark:fill-[#898989]"/> */}
         </div>
  </div>
  <div className={`${counter ? 'activ' : ''}`}>
  <div className="hige cursor-pointer pl-[50px] pt-[35px] w-[300px] dark:bg-black">
    <div className="flex items-center mb-4 pt-3">
        <img src={Shape} alt="youtube" />
        <AiOutlineCloseCircle onClick={handleclick} className='text-blue-500 w-[20px] h-[20px] ml-[40px]'/>
    </div>
    <div className="flex items-center ">
            <img src={Img7} alt="Home" />
            <h1 className="text-[#FF0000] pl-[25px] text-[16px]">Home</h1>
          </div>
          <div className="flex items-center mt-[10px]">
           <AiOutlineFire  className="w-[22px] h-[22px] fill-[#898989] hover:fill-red-500 dark:hover:fill-red-500 dark:fill-[#898989]"/>
            <h1 className="hover:text-[#FF0000] text-[#898989] pl-[25px] text-[16px]">
              Trending
            </h1>
          </div>
          <div className="flex items-center mt-[10px]">
          <MdOutlineSubscriptions className="w-[22px] h-[22px] fill-[#898989] hover:fill-red-500 dark:hover:fill-red-500 dark:fill-[#898989]"/>
            <h1 className="hover:text-[#FF0000] text-[#898989] pl-[25px] text-[16px]">
              Subscriptions
            </h1>
          </div>
          <div className="flex items-center mt-[25px]">
             <LibraryAdd className=" w-[22px] h-[22px] fill-[#898989] hover:fill-red-500 dark:hover:fill-red-500 dark:fill-[#898989]"/>
            <h1 className="hover:text-[#FF0000] text-[#898989] pl-[25px] text-[16px]">
              Library
            </h1>
          </div>
          <div className="flex items-center mt-[10px]">
            <VscHistory className="w-[22px] h-[22px] fill-[#898989] hover:fill-red-500 dark:hover:fill-red-500 dark:fill-[#898989]"/>
            <h1 className="hover:text-[#FF0000] text-[#898989] pl-[25px] text-[16px]">
              History
            </h1>
          </div>
          <div className="flex items-center mt-[10px]">
          <BsStopwatch className="w-[22px] h-[22px] fill-[#898989] hover:fill-red-500 dark:hover:fill-red-500 dark:fill-[#898989]"/>
            <h1 className="hover:text-[#FF0000] text-[#898989] pl-[25px] text-[16px]">
              Watch later
            </h1>
          </div>
          <div className="flex items-center mt-[10px]">
            <AiFillStar className="w-[22px] h-[22px] fill-[#898989] hover:fill-red-500 dark:hover:fill-red-500 dark:fill-[#898989]"/>
            <h1 className="hover:text-[#FF0000] text-[#898989] pl-[25px] text-[16px]">
              Favourites
            </h1>
          </div>
          <div className="flex items-center mt-[10px]">
            <AiOutlineHeart className="w-[22px] h-[22px] fill-[#898989] hover:fill-red-500 dark:hover:fill-red-500 dark:fill-[#898989]"/>
            <h1 className="hover:text-[#FF0000] text-[#898989] pl-[25px] text-[16px]">
              Liked videos
            </h1>
          </div>
          <div className="flex items-center mt-[10px]">
            <SiYoutubemusic className="w-[22px] h-[22px] fill-[#898989] hover:fill-red-500 dark:hover:fill-red-500 dark:fill-[#898989]"/>
            <h1 className="hover:text-[#FF0000] text-[#898989] pl-[25px] text-[16px]">
              Music
            </h1>
          </div>
        </div>
  </div>
  </div>
  </>
  )
}

export default HamLeft