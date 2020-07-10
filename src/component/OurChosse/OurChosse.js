import React, {Component}  from 'react';
import styled from 'styled-components';
import axios from 'axios';
import StarRating from '../starr/star';

class OurChosse extends Component {

    state = {
        ourChosses : [],
    };

    componentDidMount(){
        axios.get('data.json')
        //.then(re => console.log(re.data.Trips))
        .then(re => this.setState({ourChosses : re.data.ourChosse }) )
        .catch(error => console.log(error))
    };

    render(){
        const Hotles_list = this.state.ourChosses.map(item =>{
            return(
                <div className="mx-auto col-12 col-lg-6 my-3" key={item.id}>
                <Im className="img-container mx-auto">
                     <img src={item.img} alt="Avatar" className="image" />
                     <div className="te">
                        <h2 className="text-primary m-3"> {item.name} </h2>
                        <h3 className="text-primary m-3">{item.city} </h3>
                        <h5 className="text-dark m-3">{item.title}</h5>
                        <StarRating/>

                   </div>
                </Im>
         </div>
            )
        })

        
        return(
            <Main>

              <div className="container ">
                <div className="d-flex flex-column">

                    <div>
                        <p className="text-blue">من مختارتنا</p>
                    </div>

                    <div className="row justify-content-between">
                        {Hotles_list}
                    </div>
              </div>
            </div>

            </Main>
            
        )
    }
    
}

export default OurChosse;

const Main = styled.div`
padding : 3rem 0;
margun : auto;
background-color: #f3f3f3;


`;
const Im = styled.div`
position: relative;
width:  500px;
height: 250px;
cursor: pointer;
background-color: #fff;
transition : all 0.5s linear;
border-color : transparent;


&:hover{
  transform: scale(1.05);
  box-shadow : 0px 5px 5px 0px rgba(0,0,0,0.5);

}

.image {
    display: block;
    width: 50%;
    height: 100%;
    clip-path: polygon(0 0, 100% 0, 64% 100%, 0 100%);
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