import React from 'react';

const VideoDetails = ({ video }) => {

    if (!video) {
        return <div>Loading....</div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <h5><strong>{video.snippet.title}</strong></h5>
                <hr />
                <span><strong>Published By: </strong>{video.snippet.channelTitle}</span>                
                <p><span><strong>Description: </strong></span>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetails;