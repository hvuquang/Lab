import "./App.css";
import React, { useState, useEffect } from "react";
import Video from "./components/Video";
import Axios from "./components/axios";
import axios from "axios";

function App() {
  const videosArray = [];
  const [videos, setVideos] = useState(videosArray)

  useEffect(() => {
      async function fetchData() {
        // const res = await axios.get("http://localhost:9000/v2/get")
        // .catch(function (error) {
        //   if (error.response) {
        //     // The request was made and the server responded with a status code
        //     // that falls out of the range of 2xx
        //     console.log(error.response.data);
        //     console.log(error.response.status);
        //     console.log(error.response.headers);
        //   } else if (error.request) {
        //     // The request was made but no response was received
        //     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        //     // http.ClientRequest in node.js
        //     console.log(error.request);
        //   } else {
        //     // Something happened in setting up the request that triggered an Error
        //     console.log('Error', error.message);
        //   }
          // setVideos(res.data)
          // return res
        // });
          axios.get("http://localhost:9000/v2/get")
          .then(res => {
            const video = res.data
            setVideos(video)
          })
          .catch(error => console.log(error))
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
