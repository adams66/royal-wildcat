import  Key from "../../../key/key.json";
import { register } from 'swiper/element/bundle';
import './header.css'

register();


function HomeHeader(props){

    return(

        <div className="row row m-2 m-md-3 m-lg-3 mt-5">
            <div className="col">
            <swiper-container>
  <swiper-slide></swiper-slide>
  <swiper-slide></swiper-slide>
  <swiper-slide></swiper-slide>
</swiper-container>

            </div>

        </div>

    );
}

export default HomeHeader;