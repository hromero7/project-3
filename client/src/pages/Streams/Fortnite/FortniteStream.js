import React, { useEffect, useState } from "react";
import { getStreams } from "../../../utils/API";
import "../styleStream.css"


const FortniteStream = () => {
  const [streams, setStreams] = useState([]);
  useEffect(() => {
    getStreams(33214).then(({ data }) => {
      console.log(data);
      setStreams(data);
    });
  }, []);
  return (
    <>
      <div className="row">
        {streams.map((item) => {
        const url = item.thumbnail_url.replace(/{width}/, 500).replace(/{height}/, 500)
          return <div class="card stream-card col-md-3 col-sm-6">
            <img src={url} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p class="card-text">
                Currently Viewed By - {item.viewer_count}
              </p>
              <a href={`https://www.twitch.tv/${item.user_name}`} target="_blank" class="btn btn-primary">
                Watch Live Stream
              </a>
            </div>
            
          </div>
        })}
      </div>
    </>
  );
};
export default FortniteStream;