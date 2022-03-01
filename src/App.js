import react, {useState, useEffect} from "react";
import './App.css';
import {Routes, Link, Route} from "react-router-dom";
import {Home, Search, SideBar} from "./components";
import axios from "axios";

function App() {
  const API_KEY = "AIzaSyDmHVhDZrw5RDZrmI1P3NjoTHBDHY3mJSo";
  const mainLink = "https://www.googleapis.com/youtube/v3";
  // const trendingLink = `https://youtube.googleapis.com/youtube/v3/videos&part=snippet&contentDetails&statistics&chart=mostPopular&maxResults=2&key=${API_KEY}`;

  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("computer");
  const [trendingVideos, SetTrendingVideos] = useState("");

  const youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
  });

  const trendingSection = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/videos"
  });

  const functionOne = async () => { 
    const response = await youtube.get("search", {
    params: {
      part: "snippet",
      maxResults: 50,
      key: "AIzaSyDmHVhDZrw5RDZrmI1P3NjoTHBDHY3mJSo",
      q: searchTerm,
      locate: "india"
    }
  });
  // console.log(response.data.items);
  setVideos(response.data.items);
  }

  const functionTwo = async () => {
     const res = await trendingSection.get("", {
      params: {
        part: [
          "snippet,contentDetails,statistics"
        ],
        chart: "mostPopular",
        maxResults: 50,
        key: "AIzaSyDmHVhDZrw5RDZrmI1P3NjoTHBDHY3mJSo"
      }
    });
    console.log(res.data);
    SetTrendingVideos(res.data.items);
  }

  useEffect(() => {

    functionOne();
    functionTwo();
    
  }, [searchTerm]);

if(!videos) return "loading..";

//  videos.items.map((item) => {
//    console.log(item.etag);
//  });

   

  return (
   <>
   <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
   <SideBar />

   <Routes>
     <Route path="/" element={<Home videos={videos} />} exact />
   </Routes>
   
   </>
  );
}

export default App;
