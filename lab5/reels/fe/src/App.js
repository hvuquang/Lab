import "./App.css";
import React, { useState, useEffect } from "react";
import Video from "./components/Video";
import Axios from "./components/axios";
import axios from "axios";

function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
      async function fetchData() {
        const res = await axios.get("http://localhost:9000/v2/get")
          setVideos(res.data)
          console.log(res.data)
          return res
          // axios.get("http://localhost:9000/v2/get")
          // .then(res => {
          //   const video = res.data
          //   setVideos(video)
          // })
          // .catch(error => console.log(error))
      }
      fetchData()
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, shares, messages }) => (
            <Video
              key={url}
              url={url}
              channel={channel}
              description={description}
              song={song}
              shares={shares}
              likes={likes}
              messages={messages}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
