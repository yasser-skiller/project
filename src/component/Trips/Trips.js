import React, {Component}  from 'react';
import styled from 'styled-components';
import axios from 'axios';



class Trips extends Component {

    state = {
        Tripes : [],
    };

    componentDidMount(){
        axios.get('data.json')
        //.then(re => console.log(re.data.Trips))
        .then(re => this.setState({Tripes : re.data.Trips }) )
        .catch(error => console.log(error))
    };

    render(){
        const Trips_list = this.state.Tripes.map(item =>{
            return(
                <div className="mx-auto col-md-6 col-lg-3 my-3" key={item.id}>
                         <Im className="img-container mx-auto">
                         <img src={item.img} alt="Avatar" className="image" />
                             <div class="overlay">
                                 <div class="t mb-5">
                                     <div>
                                        <p>{item.title}</p>
                                        <p>{item.time}</p>
                                     </div>
                                     <div className="price">{item.price} ريال </div>
                                 </div>
                             </div>
                         </Im>
                  </div>
            )
        })

        
        return(
            <div className="container">
                <div className="d-flex flex-column">

                    <div>
                        <p className="text-blue">عروض سياحية</p>
                    </div>

                    <div className="row justify-content-between mx-auto">
                        {Trips_list}
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
    box-shadow : 5px 5px 5px 0px rgba(0,0,0,0.4);
    transform: scale(1.05);
}

.image {
    display: block;
    width: 100%;
    height: 100%;
  }

.overlay {
    position: absolute;
    top: 73%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    height: 25%;
    width: 100%;
    text-align: center;
    background-color: rgb(0, 0, 0,0.3);
  }

  .t {
    color: white;
    font-size: ;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
  }
  .price{
    font-size: 1.2rem;
    width: 35%;
    height: 50%;
    background-color: #1b1818;
    padding: 0;
  }
`;