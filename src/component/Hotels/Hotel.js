import React, {Component}  from 'react';
import styled from 'styled-components';
import axios from 'axios';


class Trips extends Component {

    state = {
        Hotles : [],
    };

    componentDidMount(){
        axios.get('data.json')
        //.then(re => console.log(re.data.Hotles))
        .then(re => this.setState({Hotles : re.data.Hotel }) )
        .catch(error => console.log(error))
    };

    render(){

      const Hotles_list = this.state.Hotles.map(item =>{
        return(
          <div className="mx-auto col-md-6 col-lg-3 my-3" key={item.id}>
          <Im className="img-container mx-auto">
               <img src={item.img} alt="Avatar" className="image" />
                 <div class="t mb-5">
                     <div className="price">{item.price} ريال </div>
                 </div>
 
               <div className="foot">
                  <p>{item.title}</p>
                  <p>{item.time_Day}  <span> {item.time_neight}</span></p>
             </div>
          </Im>
        </div>
        )
      })
        
        return(
            <div className="container">
                <div className="d-flex flex-column">

                    <div>
                        <p className="text-blue">عروض الفنادق</p>
                    </div>

                    <div className="row justify-content-between mx-auto">
                      {Hotles_list}
                  
                    </div>
              </div>
            </div>
        )
    }
    
}

export default Trips;


const Im = styled.div`
position: relative;
width:300px;
height: 250px;
cursor: pointer;
transition : all 0.5s linear;
border-color : transparent;


&:hover{
  transform: scale(1.05);
}

.image {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 0 45% 0 0 ;
  }



  .t {
    color: white;
    font-size: 20px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
  }
  .price{
    position: absolute;
    top: 10%;
    left: -5%;
    width: 35%;
    height: 18%;
    background-color: #004ab9;
    border-radius: 40% 0 0 0 ;
    padding:  10px;
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