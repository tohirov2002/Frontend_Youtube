import Slider from "react-slick";
import "swiper/css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Gusse from "../../assets/Images/Gusse.png";
import Vedio from "../../assets/Images/Shape.svg";
import Shape from "../../assets/Images/Shape1.svg";
import Shape1 from "../../assets/Images/Shape2.svg";
import Userpick from "../../assets/Images/Userpic.png";
import { AiOutlineSearch } from "react-icons/ai";
import Left from "../../assets/Images/Left.svg";
import Right from "../../assets/Images/Right.svg";
import Siveper from "../Svepir/Siveper";
import Siveper1 from "../Svepir/Siveper1";
import { GiHamburgerMenu } from "react-icons/gi";
import Img1 from "../../assets/Images/img1.svg";
import Img3 from "../../assets/Images/img3.svg";
import Img7 from "../../assets/Images/img7.svg";
import Img8 from "../../assets/Images/img8.svg";
import Logo from "../../assets/Images/Black.svg";
import { Link } from "react-router-dom";
import {FaSun} from "react-icons/fa"
import {BsFillMoonFill} from "react-icons/bs"
import {AiOutlineBell} from "react-icons/ai"
import {AiOutlineFire} from "react-icons/ai"
import {MdOutlineSubscriptions} from "react-icons/md"
import { LibraryAdd } from "@mui/icons-material";
const Sidebar1 = () => {
  const sliderRef = useRef(null);
  const [data, setData] = useState([]);
  const [theme,setTheme] = useState("light")

  const url = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=RDZiQo7nAkQHU&part=snippet&maxResults=50';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'df2774d9f1msh3dd2bd555bce9f5p109700jsnafc81e0bef68',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
      const FechData = async () => {
        try {
          const response = await fetch(url,options)
          const result = await response.json()
          console.log(result.items);
          setData(result.items.reverse())
        } catch (error) {
          console.error(error);
        }
      }
      useEffect(()=> {
        if(theme === "dark") {
          document.documentElement.classList.add("dark")
       } else {
        document.documentElement.classList.remove("dark")
       }
        FechData();
      },[theme])
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1368,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1074,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  function next() {
    sliderRef.current.slickNext();
    setCurrentIndex((prev) => prev + 1);
  }
  function previous() {
    console.log(sliderRef.current);
    sliderRef.current.slickPrev();
    setCurrentIndex((prev) => prev - 1);
  }
   const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
   }

  return (
    <>
      <div className="dark:bg-black w-[100%] h-[100v] overflow-hidden pl-4 pt-[20px]">
        <div>
          <div className=" flex items-center justify-between">
            <form className="w-[100%]">
              <div className="input-logo">
                <img className="site-logo pr-[30px]" src={Logo} alt="Logo" />
                <div className="relative max-w-[700px] pr-3">
                  <input
                    className="dark:bg-[#78717180] rounded-xl bg-[#EBEBEB] border-none pl-4 pt-2 pb-2 w-[100%] max-w-[700px]"
                    type="text"
                    placeholder="Search"
                  />
                  <AiOutlineSearch className="text-xl absolute top-[10px] right-[20px]" />
                </div>
              </div>
            </form>
            <div className="hero flex items-center justify-between pr-[50px]">
             <button onClick={handleThemeSwitch} className="pr-3">{theme !== "dark" ?<FaSun className="sun w-[30px] h-[23px]"/> : <BsFillMoonFill className="moon w-[30px] h-[23px]"/>}</button>
              <img className="hero-top pr-[20px]" src={Vedio} alt="Nuqta" />
              <div className="bell"><AiOutlineBell className="w-[25px] h-[27px] mr-4 dark:fill-[#898989]"/></div>
              <img
                className="hero-right pr-[60px]"
                src={Userpick}
                alt="Userpick"
              />
            </div>
          </div>
          <div className="mt-[20px] ">
            <div className="gusse flex items-center mb-[px]">
              <img className="w-[35px] h-[35px]" src={Gusse} alt="dollie" />
              <h2 className="pl-[10px] text-[#19202C] text-xl dark:text-white">Dollie Blair</h2>
            </div>
            <div className="hero-section flex items-center justify-end pr-[100px] mb-5">
              <button className="button button-prev" onClick={previous}>
                <img  src={Left} alt="left" />
              </button>
              <button className="button" onClick={next}>
                <img className="pl-[10px]" src={Right} alt="right" />
              </button>
            </div>
            <Slider  ref={sliderRef} {...settings}>
              {data.map((info, index) => {
                return (
                  <Link key={index} to={`/main/${info?.snippet?.resourceId?.videoId}`}>
                     <div className="main-hero" >
                        <img className="hero-img w-[250px] h-[150px] rounded-xl object-cover" src={info.snippet.thumbnails.default.url} alt="logo" />
                        <h1 className="mt-[7px] max-w-[200px] dark:text-white">{info.snippet.title}</h1>
                        <p className="max-w-[200px] text-[#C2C2C2]">{info.snippet.channelTitle}</p>
                     </div>
                    </Link>
                );
              })}
            </Slider>
          </div>
          <div>
            <Siveper />
          </div>
          <div>
            <Siveper1 />
          </div>
        </div>
        <div className="fixed bottom-0 bg-white hero-bottom dark:bg-black">
          <div className=" flex items-center justify-around">
            <img className="w-[30px] h-[30px]" src={Img7} alt="Home" />
            <AiOutlineFire  className="w-[30px] h-[30px] fill-[#898989] hover:fill-red-500 dark:hover:fill-red-500 dark:fill-[#898989]"/>
          <MdOutlineSubscriptions className="w-[30px] h-[30px] fill-[#898989] hover:fill-red-500 dark:hover:fill-red-500 dark:fill-[#898989]"/>
          <LibraryAdd className=" w-[30px] h-[30px] fill-[#898989] hover:fill-red-500 dark:hover:fill-red-500 dark:fill-[#898989]"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar1;
