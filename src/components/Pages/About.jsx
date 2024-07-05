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
import Img from "../../assets/Images/img.svg";
import Img1 from "../../assets/Images/img1.svg";
import Img2 from "../../assets/Images/img2.svg";
import Img3 from "../../assets/Images/img3.svg";
import Img4 from "../../assets/Images/img4.svg";
import Img5 from "../../assets/Images/img5.svg";
import Img6 from "../../assets/Images/img6.svg";
import Img7 from "../../assets/Images/img7.svg";
import Img8 from "../../assets/Images/img8.svg";
import Img9 from "../../assets/Images/img9.svg";
import Img10 from "../../assets/Images/img10.svg";
import Logo from "../../assets/Images/Black.svg";
import {AiOutlineCloseCircle,AiOutlineBell} from "react-icons/ai"
import { Link } from "react-router-dom";
import {FaSun} from "react-icons/fa"
import {BsFillMoonFill} from "react-icons/bs"

const About = () => {

  const sliderRef = useRef(null);
  const [data, setData] = useState();
  const [theme,setTheme] = useState("light")

  const FechData = async () => {
    const respons = await axios.get(
      "https://6409e510d16b1f3ed6e05c98.mockapi.io/hackers"
    );
    setData(respons.data);
  };
  useEffect(() => {
    FechData();
    if(theme === "dark") {
      document.documentElement.classList.add("dark")
   } else {
    document.documentElement.classList.remove("dark")
   }
  }, [theme]);
  const [counter,setCounter] = useState(true);

  const handleclick = () => {
      setCounter(pase => !pase)
  }
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
   }
  return (
    <>
      <div className="dark:bg-black fixed top-0 bg-white overflow-hidden w-[100%] h-[100v] pt-[20px] pb-[10px]  pl-5 mb-8">
        <div>
          <div className="flex items-center justify-between">
            <GiHamburgerMenu onClick={handleclick} className="hamBtn1 w-[30px] h-[30px] dark:fill-white"/>
            <div className={`${counter ? 'activ' : ''} hero-active`}>
  <div className="hige cursor-pointer pl-[50px] mt-[35px] w-[300px]">
    <div className="flex items-center mb-4 pt-3">
        <img src={Vedio} alt="youtube" />
        <AiOutlineCloseCircle onClick={handleclick} className='text-blue-500 w-[20px] h-[20px] ml-[40px]'/>
    </div>
          <div className="flex items-center">
            <img src={Img7} alt="Home" />
            <h1 className="text-[#FF0000] pl-[25px] text-[16px]">Home</h1>
          </div>
          <div className="flex items-center mt-[10px] ">
            <img src={Img8} alt="Home" />
            <h1 className="hover:text-[#FF0000] text-[#898989] pl-[25px] text-[16px]">
              Trending
            </h1>
          </div>
          <div className="flex items-center mt-[10px]">
            <img src={Img3} alt="Home" />
            <h1 className="hover:text-[#FF0000] text-[#898989] pl-[25px] text-[16px]">
              Subscriptions
            </h1>
          </div>
          <div className="flex items-center mt-[25px]">
            <img src={Img1} alt="Home" />
            <h1 className="hover:text-[#FF0000] text-[#898989] pl-[25px] text-[16px]">
              Library
            </h1>
          </div>
          <div className="flex items-center mt-[10px]">
            <img src={Img4} alt="Home" />
            <h1 className="hover:text-[#FF0000] text-[#898989] pl-[25px] text-[16px]">
              History
            </h1>
          </div>
          <div className="flex items-center mt-[10px]">
            <img src={Img9} alt="Home" />
            <h1 className="hover:text-[#FF0000] text-[#898989] pl-[25px] text-[16px]">
              Watch later
            </h1>
          </div>
          <div className="flex items-center mt-[10px]">
            <img src={Img10} alt="Home" />
            <h1 className="hover:text-[#FF0000] text-[#898989] pl-[25px] text-[16px]">
              Favourites{" "}
            </h1>
          </div>
          <div className="flex items-center mt-[10px]">
            <img src={Img2} alt="Home" />
            <h1 className="hover:text-[#FF0000] text-[#898989] pl-[25px] text-[16px]">
              Liked videos
            </h1>
          </div>
          <div className="flex items-center mt-[10px]">
            <img src={Img6} alt="Home" />
            <h1 className="hover:text-[#FF0000] text-[#898989] pl-[25px] text-[16px]">
              Music
            </h1>
          </div>
          <div className="flex items-center mt-[10px]">
            <img src={Img5} alt="Home" />
            <h1 className="hover:text-[#FF0000] text-[#898989] pl-[25px] text-[16px]">
              Games
            </h1>
          </div>
          <div className="flex items-center mt-[10px]">
            <img src={Img} alt="Home" />
            <h1 className="hover:text-[#FF0000] text-[#898989] pl-[25px] text-[16px]">
              Show more
            </h1>
          </div>
        </div>
  </div>
              <Link to={'/main'}><img className="h-[35px] pr-[20px] pl-3" src={Logo} alt="Logo" /></Link>
            <form className="w-[100%]">
              <div className="input-logo ">
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
            <div className="hero flex items-center justify-between ">
            <button onClick={handleThemeSwitch} className="pr-3">{theme !== "dark" ?<FaSun className="sun w-[30px] h-[23px]"/> : <BsFillMoonFill className="moon w-[30px] h-[23px]"/>}</button>
              <img className="hero-top pr-[20px]" src={Vedio} alt="Nuqta" />
              <div className="bell"><AiOutlineBell className="w-[25px] h-[27px] mr-4 dark:fill-[#898989]"/></div>
              <img
                className="hero-right pr-[150px]"
                src={Userpick}
                alt="Userpick"
              />
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 bg-white hero-bottom">
          <div className=" flex items-center justify-around">
            <img className="w-[30px] h-[30px]" src={Img7} alt="Home" />
            <img className="w-[30px] h-[30px]" src={Img8} alt="Home" />
            <img className="w-[30px] h-[30px]" src={Img3} alt="Home" />
            <img className="w-[30px] h-[30px]" src={Img1} alt="Home" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
