import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../assets/Images/Black.svg";
import Img7 from "../../assets/Images/img7.svg";
import Gusse from "../../assets/Images/Gusse.png";
import Nora from "../../assets/Images/nora.png";
import Belle from "../../assets/Images/belle.png";
import Cortez from "../../assets/Images/Cortez.png";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { VscHistory } from "react-icons/vsc";
import { Games, LibraryAdd } from "@mui/icons-material";
import {AiFillStar,AiOutlineFire,AiOutlineHeart} from "react-icons/ai"
import {BsStopwatch} from "react-icons/bs"

const Sidebar = () => {
  return (
    <div className="sticky top-0 sidebar w-[400px] h-[100vh] dark:bg-black">
      <div className=" container pt-6">
        <div className="flex items-center justify-between">
          <GiHamburgerMenu className="w-[30px] h-[30px] ml-[50px] dark:fill-white"/>
          <img className="pr-[50px]" src={Logo} alt="Logo" />
        </div>
        <div className="cursor-pointer pl-[50px] mt-[35px]">
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
       
        <div className="flex items-center pl-[40px] mt-[7px]">
        <div className="max-w-[250px]">
          <div>
            <Accordion sx={{boxShadow : "none"}}>
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                // aria-controls="panel1a-content"
                // id="panel1a-header"
                
              >
                <Typography  >Subscriptions</Typography >
              </AccordionSummary >
              <AccordionDetails >
                <Typography>
                <div className=" cursor-pointer flex items-center mt-[1px]">
            <img className="w-[30] h-[30px]" src={Gusse} alt="gussie" />
            <h2 className="text-[#898989] text-[16px] pl-[15px]">
              Gussie Singleton
            </h2>
          </div>
          <div className="cursor-pointer flex items-center mt-[15px]">
            <img className="w-[30] h-[30px]" src={Nora} alt="gussie" />
            <h2 className="text-[#898989] text-[16px] pl-[15px]">
              Nora Francis
            </h2>
          </div>
          <div className="cursor-pointer flex items-center mt-[15px]">
            <img className="w-[30] h-[30px]" src={Belle} alt="gussie" />
            <h2 className="text-[#898989] text-[16px] pl-[15px]">
              Belle Briggs
            </h2>
          </div>
          <div className="cursor-pointer flex items-center mt-[15px]">
            <img className="w-[30] h-[30px]" src={Cortez} alt="gussie" />
            <h2 className="text-[#898989] text-[16px] pl-[15px]">
              Eunice Cortez
            </h2>
          </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
