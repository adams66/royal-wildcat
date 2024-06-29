
import { register } from 'swiper/element/bundle';


import './header.css'

register();


function HomeHeader(props){

    return(

        <div className="row m-3 m-md-4 round">
            <div className="col round">
            <swiper-container>
  <swiper-slide><video autoPlay   playsinline         role="video"
  src="https://homebase.dal-10.com/slider/video.mp4" muted></video></swiper-slide>
  <swiper-slide><video autoPlay   playsinline         role="video"
  src="https://homebase.dal-10.com/slider/video.mp4" muted></video></swiper-slide>
  <swiper-slide><video autoPlay   playsinline         role="video"
  src="https://homebase.dal-10.com/slider/video.mp4" muted></video></swiper-slide>
</swiper-container>

            </div>

        </div>

    );
}

export default HomeHeader;