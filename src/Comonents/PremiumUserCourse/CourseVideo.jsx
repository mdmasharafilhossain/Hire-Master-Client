import YouTube from "react-youtube";


const CourseVideo = () => {
    const opts = {
        height: '200',
        width: '400',
        playerVars: {
          autoplay: 1,
        },
      };
    
      const _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      };
    
      return (
        <div>
          <YouTube videoId="ARHuIMuh59eYL7uv" opts={opts} onReady={_onReady} />
        </div>
      );
};

export default CourseVideo;