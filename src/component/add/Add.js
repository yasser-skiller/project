import React, {Component}  from 'react';
import styled from 'styled-components';
import axios from 'axios';
import im_1 from '../img/cairo.jpg';
import im_2 from '../img/statue-of-liberty-1210001_1920.jpg';


class Trips extends Component {

    state = {
        Tripes : [],
    };

    componentDidMount(){
        axios.get('data.json')
        .then(re => console.log(re.data.Trips))
        //.then(re => this.setState({Tripes : re.data.Trips }) )
        .catch(error => console.log(error))
    };

    render(){

        
        return(
            <div className="container">

                    <div className="row justify-content-around">

                    <div className="mx-auto col-lg-5 my-3 col-md-7">
                         <Im className="img-container mx-auto">
                              <img src={im_1} alt="Avatar" className="image" />
                                <div class="t mb-5">
                                    <div className="price">مساحة إعلانية</div>
                                </div>
                         </Im>
                  </div>

                  <div className="mx-auto  col-lg-5 my-3 col-md-7">
                         <Im className="img-container mx-auto">
                              <img src={im_2} alt="Avatar" className="image" />
                                <div class="t mb-5">
                                  <div className="price">مساحة إعلانية</div>
                                </div>
                         </Im>
                  </div>

                  
              </div>
            </div>
        )
    }
    
}

export default Trips;


const Im = styled.div`
position: relative;
width: 500px;
height: 150px;
cursor: pointer;


.image {
    display: block;
    width: 100%;
    height: 100%;
  }



  .t {
    color: white;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
  }
  .price{
    position: absolute;
    top: 5%;
    left: 80%;
  }
  .foot{
    float: right;
    justify-content: right;
    padding: 8px 10px;
    background-color: #fff;
    position: relative;
    top: -19%;
    left: 0%;
    width: 100%;
    height: 35%;
    border-bottom: 4px solid #8bc34a;
    text-align: right;

    
  }
`;