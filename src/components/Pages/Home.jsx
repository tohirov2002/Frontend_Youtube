import React, { useEffect, useState } from "react";
// import Dude from "../../assets/Images/Dude.svg";n
import Com from "../../assets/Images/Com.svg";
import Com1 from "../../assets/Images/Com1.svg";
import Com2 from "../../assets/Images/Com2.svg";
import Com3 from "../../assets/Images/Com3.svg";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

const Home = () => {

  console.log(window.scrollX);
  const [data, setData] = useState([]);
  const { id } = useParams();
  const url = 'https://youtube-v31.p.rapidapi.com/videos?part=snippet,statistics&id='+id;
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
          setData(result.items)
        } catch (error) {
          console.error(error);
        }
      }
      useEffect(()=> {
        FechData();
      },[id])
  return (
    <section className="w-[100%] pl-[50px] pr-8 mb-8 pt-[100px] h-[100%] pb-[30px]">
    {
      data.slice(0,1).map((info,index)=> {
        return(
          <div key={index} className="site-section ">
          <ReactPlayer  height={'500px'} width={'100%'} className={'player'}  url={`https://www.youtube.com/watch?v=${id}`} controls  />
          <h2 className="title text-[36px] text-[#192646] mt-[15px] dark:text-white">
           {info.snippet.title}
          </h2>
          <div className="flex items-center justify-between mt-[10px]">
            <span className="views text-[#C2C2C2] text-[16px]">123k views</span>
            <div className="flex items-center justify-center">
              <img src={Com} alt="com" />
              <span className="pr-[25px]"></span>
              <img src={Com1} alt="com1" />
              <span className="pr-[25px]"></span>
              <img src={Com2} alt="com2" />
              <span className="pr-[25px]"></span>
              <img className="com3 pr-[25px]" src={Com3} alt="com3" />
            </div>
          </div>
          <div className="mt-[36px] pl-[20px]">
            <h2 className="text1 text-[26px] dark:text-white">{info.snippet.channelTitle}</h2>
            <p className="text3 text-[#C2C2C2] ">Published on 14 Jun 2019</p>
        
          </div>
        </div> 
        )
      })
    }

    </section>
  );
};

export default Home;
