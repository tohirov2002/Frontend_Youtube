import Slider from "react-slick";
import 'swiper/css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Gusse from "../../assets/Images/Gusse.png";
import Vedio from "../../assets/Images/Shape.svg"
import Shape from "../../assets/Images/Shape1.svg"
import Shape1 from "../../assets/Images/Shape2.svg"
import Userpick from "../../assets/Images/Userpic.png"
import {AiOutlineSearch} from "react-icons/ai"
import Left from "../../assets/Images/Left.svg"
import Right from "../../assets/Images/Right.svg"
import { Link } from "react-router-dom";
const Siveper = () => {
    const sliderRef = useRef(null)
  const [data,setData] =  useState([]);
  // const [currentIndex, setCurrentIndex] = useState(0)

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
        FechData();
      },[])
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1255,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 921,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
 function next() {
    sliderRef.current.slickNext()
    setCurrentIndex(prev=> prev+1)
  }
  function previous() {
    console.log(sliderRef.current)
    sliderRef.current.slickPrev()
    setCurrentIndex(prev=> prev-1)
  }
  return (
    <>
    <div className=" mt-[20px] ">
        <div className="flex items-center">
        </div>
        <div className="hero-section flex items-center justify-end pr-[100px] mb-5">
          <button className="button" onClick={previous} >
            <img src={Left} alt="left" />
          </button>
          <button className="button" onClick={next} >
          <img className="pl-[10px]" src={Right} alt="right" />
          </button>
        </div>
        <Slider ref={sliderRef}  {...settings}>
              {
                data?.map((info,index) => {
                  return(
                    <Link key={index} to={`/main/${info?.snippet?.resourceId?.videoId}`}>
                    <div className="main-hero" >
                       <img className="hero-img w-[300px] h-[200px] rounded-xl object-cover" src={info.snippet.thumbnails.default.url} alt="logo" />
                       <h1 className="mt-[7px] max-w-[200px] dark:text-white">{info.snippet.title}</h1>
                       <p className="max-w-[200px] text-[#C2C2C2]">{info.snippet.channelTitle}</p>
                    </div>
                   </Link>
                  )
                })
              }
              
        </Slider>
       
      </div>
    </>
  )
}

export default Siveper