import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import m from '../img/photos_صورة_عالية_الوضوح_للكعبة_20170830261656.jpg';
import mm from '../img/download (4).jpg';
import mmm from '../img/images (1).jpg';
import styled from 'styled-components';
import Post from '../onslider/Post/Post'
import './Pro.css'



function Slider(){
    return(
      <Carousel>


        <Carousel.Item>
        <Im className="img-container bg-dark">
            <img src={m} alt="Avatar" className="image" />
            <div class="overlay">
                <div className="icon ">

                    <div className=" mx-auto my-2">
                        <i class="fas fa-plane fa-2x"></i>
                        <h6 className="mt-3">طيران</h6>
                    </div>

                    <div className=" mx-auto my-2">
                        <i class="fas fa-hotel fa-2x "></i>
                        <h6 className="mt-3">فنادق</h6>
                    </div>

                    <div className=" mx-auto my-2">
                        <i class="fas fa-bus fa-2x "></i>
                        <h6 className="mt-3">مواصلات</h6>
                    </div>

                    <div className=" mx-auto my-2">
                        <i class="fas fa-suitcase-rolling fa-2x "></i>
                         <h6 className="mt-3">عروض رحلات</h6>
                    </div>

                     <div className=" mx-auto my-2">
                         <i class="fas fa-globe-americas fa-2x "></i>
                         <h6 className="mt-3">عروض سياحية </h6>
                        </div>
                </div>

                 <Post/>

                                 
             </div>
        </Im>
        </Carousel.Item>

      </Carousel>
    )
}

export default Slider;


const Im = styled.div`
position: relative;
height: 350px;
cursor: pointer;

.image {
    display: block;
    width: 100%;
    height: 100%;
  }

.overlay {
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    height: 100%;
    width: 100%;
    text-align: center;
    background-color: rgb(0, 0, 0,0.2);
    display: flex;
    flex-direction: column;
    //justify-content: space-around;

}
.icon{
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    color: white;
}

  
`;