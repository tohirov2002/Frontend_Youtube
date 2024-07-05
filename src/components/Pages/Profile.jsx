import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
const Profile = () => {
  const [data, setData] = useState([]);

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

  return (
    <section className="site-left w-[600px]  pt-5 ">
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-[#19202C] text-[36px] pl-[20px] dark:text-white">Next</h1>
          <p className="pr-[80px] text-[ #19202C] text-[16px] dark:text-white">Autoplay</p>
        </div>
        {data.map((info, index) => {
          return (
            <Link key={index} to={`/main/${info?.snippet?.resourceId?.videoId}`}>
              <div className="pl-[20px] pr-5 main-hero" >
                <img
                  className="hero-img w-[360px] h-[150px] rounded-xl object-cover mt-5"
                  src={info.snippet.thumbnails.default.url}
                  alt="logo"
                />
                <h1 className="mt-[7px] max-w-[200px] dark:text-white">{info.snippet.title}</h1>
                <p className="main-text max-w-[200px] text-[#C2C2C2]">
                  {info.snippet.channelTitle}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Profile;
