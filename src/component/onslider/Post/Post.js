import React, {Component}  from 'react';

import styled from 'styled-components';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


class Post extends Component {
    state = {
        date_1 : new Date(),
        date_2 : new Date(),

      }
    
    render(){
        return(
            <MainPost className="d-flex flex-column mx-auto text-right pt-1">
    
               <h3 className=" my-2">ابحث عن المكان المناسب لك</h3>
    
                <div className="d-flex flex-row-reverse">
                    <input type="text" placeholder="المدينة" className="form-control w-50 py-4"/>
                    <input type="text" placeholder="الفندوق" className="form-control w-50 py-4"/>
                    <DatePicker
                      showTimeSelect
                      selected={this.state.date_1}
                      onChange={date_1 => this.setState({date_1})}
                      timeFormat="HH:mm"
                      timeIntervals={15}
                      timeCaption="time"
                      dateFormat="MMMM d, yyyy h:mm aa"
                     className="form-control py-4"
                     placeholderText="تاريخ  بداية الرحلة..."
                      id="f"
                    />
                     <DatePicker
                      showTimeSelect
                      selected={this.state.date_2}
                      onChange={date_2 => this.setState({date_2})}
                      timeFormat="HH:mm"
                      timeIntervals={15}
                      timeCaption="time"
                      dateFormat="MMMM d, yyyy h:mm aa"
                     className="form-control py-4"
                     placeholderText="تاريخ نهاية الرحلة ..."
                      id="f"
                    />
                    <button className="btn btn-primary w-25 py-2">
                    <i class="fas fa-search mx-1"></i>
                    <span>بحث</span>
                    </button>
                </div>
    
            </MainPost>
    
    
        
    )
    }
       
}

export default Post;

const MainPost = styled.div`
background-color: rgba(250, 250, 250, 0.5);   
border-top: 8px solid rgb(13, 13, 241);
padding: 2rem;
`;