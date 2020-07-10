import React, {Component}  from 'react';
import {ProuductConsumer} from '../context/contextApi';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StarRating from './star';

class Product_Item extends Component {

  render(){
    

    const {id, title, img, price, inCart} = this.props.product;
    
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProuductConsumer>
            {(value) => (
               
          <div className="img-container p-5" onClick={()=>value.handleDelails(id)}>
          <NavLink to="/Details">
            <img src={img} alt="productImg" className="card-img-top "/>
          </NavLink>

          {/*Butto on img*/}
          <button 
           className="cart-btn" 
           disabled={inCart ? true : false} 
           onClick={()=>{
             value.addToCart(id);
             value.openModal(id);
             }}>
            {inCart ? (<p className="text-capitalize mb-0" disabled>{" "} inCart</p>) : (<i className="fas fa-cart-plus" />)}
          </button>
        </div>

            )}
             
          
          </ProuductConsumer>

          {/* Cart Footer*/}
          <div className="card-footer d-flex justify-content-between">
            <p className="mb-0 align-self-center">{title}</p>
            <h5 className="mb-0 text-blue font-italic">{price}<span className="mr-1">$</span></h5>
          </div>
          <div className="card-footer m-0 p-0"><StarRating/></div>
        </div>
      </ProductWrapper>
      
      
    );
  }
 
}

export default Product_Item;

Product_Item.prototypes ={
  Product_Item:PropTypes.shape({
    id     : PropTypes.number,
    img    : PropTypes.string,
    title  : PropTypes.string,
    price  : PropTypes.number,
    inCart : PropTypes.bool,

  }).isRequired
}

const ProductWrapper = styled.div`
.card{
  border-color : transparent;
  transition : all 0.7s linear;
}
.card-footer{
  background : transparent;
  border-top : transparent;
  transition : all 0.7s linear;
}
&:hover{
  .card{
    border 0.04rem solid rgba(0, 0, 0, 0.2);
    box-shadow : 2px 2px 5px 0px rgba(0,0,0,0.2);
  }
  .card-footer{
    background : rgb(247, 247,247)
  }
}

.img-container{
  position : relative;
  overflow : hidden;
}
.card-img-top{
  transition : all 0.7s linear;
  width: 180px;
  height: 150px;
}
.img-container:hover .card-img-top{
  transform : scale(1.2)
}

.cart-btn{
  position : absolute;
  bottom : 0;
  right : 0;
  padding : 0.2rem 0.4rem;
  background : var(--lightBlue);
  color : var(--mainWhite);
  font-size : 1.4rem;
  border-radius : 0.5rem 0 0 0;
  border : none;
  transform : translate(100%, 100%);
  transition : all 0.7s linear;
  outline  :none;
}

.img-container:hover .cart-btn{
  transform : translate(0,0);
}

.cart-btn:hover{
  color : var(--mainBlue);
  cursor : pointer;
}
`;