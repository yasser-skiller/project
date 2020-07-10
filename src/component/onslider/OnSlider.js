import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import m from '../religious-2262799_1920.jpg';
import mm from '../img/istockphoto-688494594-1024x1024.jpg';
import mmm from '../img/istockphoto-482206266-1024x1024.jpg';
import styled from 'styled-components';
import Post from './Post/Post'



function OnSlider(){
    return(
        <Im className="img-container bg-dark">
            <img src={mm} alt="Avatar" className="image" />
            <div class="overlay">
                <div className="icon">

                    <div>
                        <i class="fas fa-plane fa-3x mt-5"></i>
                        <p className="mt-3">طيران</p>
                    </div>

                    <div>
                        <i class="fas fa-hotel fa-3x mt-5"></i>
                        <p className="mt-3">فنادق</p>
                    </div>

                    <div>
                        <i class="fas fa-bus fa-3x mt-5"></i>
                        <p className="mt-3">مواصلات</p>
                    </div>

                    <div>
                        <i class="fas fa-suitcase-rolling fa-3x mt-5"></i>
                         <p className="mt-3">عروض رحلات</p>
                    </div>

                     <div>
                         <i class="fas fa-globe-americas fa-3x mt-5"></i>
                         <p className="mt-3">عروض سياحية </p>
                        </div>
                </div>

                 <Post/>

                                 
             </div>
        </Im>

        

        


    )
}

export default OnSlider;




const Im = styled.div`
position: relative;
//width:300px;
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
    background-color: rgb(0, 0, 0,0.4);
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