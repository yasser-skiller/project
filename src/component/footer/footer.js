import React, {Component}  from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png';


class Footer extends Component {

    render(){

        
        return(
            <div className="mt-5 bg-dark text-light ">

                    <div className="d-flex flex-row justify-content-center ">

                    <div className="mx-auto col-4  my-5 text-center">
                        <p>للتواصل معنا</p>
                        <div className="d-flex text-center justify-content-center">
                          <i class="fab fa-facebook mx-2 fa-2x"></i>
                          <i class="fab fa-twitter mx-2 fa-2x"></i>
                          <i class="fab fa-youtube mx-2 fa-2x"></i>
                        </div>
                 
                  </div>

                    

                  <Im className="mx-auto col-4  text-center my-5">
                      <li>رحلات ترفهية</li>
                      <li>رحلات سفاري</li>
                      <li>مناطق أثرية</li>
                  </Im>

                  <div className="mx-auto col-4  my-5 text-center">
                     <img src={logo}  alt="logo" className="bg-white" style={{width:'100px'}}/>
                  </div>

                  
              </div>
            </div>
        )
    }
    
}

export default Footer;


const Im = styled.div`
cursor: pointer;
direction: rtl;
float : right;

.image {
    display: block;
    width: 50%;
    height: 100%;
    //transform: skewX(-5deg);
}
.te {
    position: absolute;
    top: 5%;
    left: 45%;
    display: block;
    width: 50%;
    height: 100%;
    text-align: right;


}

`;


