import React, {Component}  from 'react';
import TopBar from './component/TopBar/TopBar'
import NavBar from './component/NavBar/NavBar';
import Slider from './component/slider/slider'
import Trips from './component/Trips/Trips';
import Hotel from './component/Hotels/Hotel';
import Add from './component/add/Add';
import OurChosse from './component/OurChosse/OurChosse';
import Footer from './component/footer/footer';
import Map from './component/map/map';
import WeatherApp from './component/weather/weather/weather';
import './App.css';


class App extends Component {

  render(){
    
    return (
      <React.Fragment>
        <TopBar />
        <NavBar/>
        <Slider/>
        <Trips />
        <Hotel />
        <Add />
        <OurChosse/>
        <Map/>
        <WeatherApp/>
        <Footer/>
      </React.Fragment>
      
    );
  }
 
}

export default (App);
