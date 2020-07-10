import React from 'react';
import {Btncontainer} from '../Buttons/Buttons';

function TopBar(){
    return(
        <div className="row bg-primary ">
            <div className="col-10 text-center mx-auto mt-0 py-2 px-0 d-flex flex-md-row flex-column-reverse  justify-content-around ">

                <div className="d-inline-flex  text-light">
                <div>
                     <i class="fab fa-facebook fa-2x m-2"></i>
                     <i class="fab fa-twitter fa-2x m-2"></i>
                     <i class="fab fa-youtube fa-2x m-2"></i>
                  </div>
                  <Btncontainer top>تسجيل الدخول</Btncontainer>
                  <Btncontainer top>تسجيل جديد</Btncontainer>
                </div>

                <div className="d-inline-flex ">
                    <div className="text-normal m-auto"><i class="fas fa-envelope fa-1x m-2"></i>yassser@gmail.com</div>
                    <div className="text-normal m-auto"><i class="fas fa-phone-alt fa-1x m-2"></i>+200 545 789 311</div>
                </div>
            </div>
        </div>
    )
}

export default TopBar;
