import React from 'react';
import './weather.css'

const weatherApi = {
    city:
      "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=",
    latLng:
      "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=",
    weather:
      "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/"
  };
  
  class WeatherApp extends React.Component {
    state = {
      settings: false,
      result: "loading",
      unit: "C",
      language: "🇩🇪"
    };
    ITL = translateStr => {
      if (this.state.result === "loading") {
        document.documentElement.style.setProperty(
          "--loading",
          '"' + translate[this.state.language]["loading"] + '"'
        );
      }
      return translate[this.state.language][translateStr];
    };
    setResult = res => {
      this.setState({ result: res });
    };
    toggleSettings = () => {
      this.setState({ settings: !this.state.settings });
    };
    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
    componentWillMount() {
      document.documentElement.style.setProperty(
        "--loading",
        '"' + this.ITL("loading") + '"'
      );
    }
    render() {
      return (
        <div className="weatherApp">
          <header>
            <div className="header-logo">
              <label htmlFor="header-toggle" className="header-nav-menu">
                ☰
              </label>
            </div>
            <input type="checkbox" id="header-toggle" />
            <div id="header-nav">
              <Search setResult={this.setResult}  search={this.ITL("city")} />
              <div className="header-nav-link">
                <Toggler
                  name="language"
                  checked={this.state.language}
                  labels={["🇺🇸", "🇩🇪", "🇨🇳"]}
                  handleChange={this.handleChange}
                />
                <Toggler
                  name="unit"
                  checked={this.state.unit}
                  labels={["C", "F"]}
                  handleChange={this.handleChange}
                />
              </div>
            </div>
          </header>
          <Weather
            data={this.state.result}
            ITL={this.ITL}
            unit={this.state.unit[0]}
          />
        </div>
      );
    }
  }
  
  const Spinner = () => {
    return (
      <div className="spinner">
        <span role="img" aria-label="loading" />
      </div>
    );
  };
  
  class Weather extends React.Component {
    calcUpdateTime = weatherDate => {
      const now = new Date();
      const dateWeather = new Date(weatherDate);
      const updateTime = new Date(now - dateWeather);
      return updateTime.getHours() * 60 + updateTime.getMinutes();
    };
    calcDate = applicableDate => {
      const localDate = new Date(applicableDate);
      return localDate.toLocaleDateString(navigator.language);
    };
    calcSunTime = sunTime => {
      const sun = new Date(sunTime);
      return sun.toLocaleTimeString(navigator.language);
    };
    calcForecastDay = applicableDate => {
      const foreDate = new Date(applicableDate);
      const days = [
        this.props.ITL("Sunday"),
        this.props.ITL("Monday"),
        this.props.ITL("Tuesday"),
        this.props.ITL("Wednesday"),
        this.props.ITL("Thursday"),
        this.props.ITL("Friday"),
        this.props.ITL("Saturday")
      ];
      return days[foreDate.getDay()];
    };
    getWeatherImage(abbr, width) {
      const host =
        "https://www.metaweather.com/static/img/weather/" + abbr + ".svg";
      return <img alt="" src={host} width={width + "px"} />;
    }
    convertUnit(temperature) {
      if (this.props.unit === "F") {
        return Math.round(temperature * 1.8 + 32);
      }
      return Math.round(temperature);
    }
    getGradientColor = temperature => {
      if (!temperature) {
        temperature = 30;
      }
      const tempColor = 30 + 240 * (30 - Math.round(temperature)) / 60;
      const style = {
        backgroundImage:
          "var(--bgImage),linear-gradient( hsl(" +
          [tempColor, "70%", "50%"] +
          ")  75%,white  )"
      };
      return style;
    };
    render() {
      const {
        created,
        the_temp,
        min_temp,
        max_temp,
        weather_state_abbr,
        weather_state_name,
        wind_direction_compass,
        wind_speed,
        air_pressure,
        humidity,
        predictability
      } = this.props.data.consolidated_weather
        ? this.props.data.consolidated_weather[0]
        : {};
      return (
        <div className="cast" style={this.getGradientColor(the_temp)}>
          {this.props.data === "loading" }
          {this.props.data.consolidated_weather && (
            <div className="today">
              <div>
                {this.props.ITL("updated")} {this.calcUpdateTime(created)}{" "}
                {this.props.ITL("updatedTime")}
              </div>
              <div className="time"> {this.calcDate(this.props.data.time)}</div>
              <div>
                <h1 className="city" data-text={this.props.data.title}>
                  {" "}
                  {this.props.data.title}{" "}
                </h1>
                {this.props.data.parent.title}
              </div>
              <div className="temperature">
                <h1>
                  {" "}
                  {this.convertUnit(the_temp)} °{this.props.unit}
                </h1>
                {this.convertUnit(max_temp)}°{this.props.unit} /{" "}
                {this.convertUnit(min_temp)}°{this.props.unit}
              </div>
              <div>{this.getWeatherImage(weather_state_abbr, 150)} </div>
              <div>
                <h1> {this.props.ITL(weather_state_name)} </h1>
              </div>
              <div className="details">
                <div>
                  Wind: {Math.round(wind_speed)} mph {wind_direction_compass}{" "}
                </div>
                <div>
                  {Math.round(air_pressure)} hPa {this.props.ITL("pressure")}
                </div>
                <div>
                  {humidity}% {this.props.ITL("humidity")}
                </div>
                <div>
                  {this.props.ITL("sunset")}{" "}
                  {this.calcSunTime(this.props.data.sun_rise)} /{" "}
                  {this.props.ITL("sundown")}{" "}
                  {this.calcSunTime(this.props.data.sun_set)}
                </div>
                <div>
                  {predictability}% {this.props.ITL("predict")}
                </div>
              </div>
            </div>
          )}
          <div className="fore">
            {this.props.data.consolidated_weather &&
              this.props.data.consolidated_weather.slice(1).map((item, key) => {
                return (
                  <div key={key}>
                    <div>{this.calcForecastDay(item.applicable_date)}</div>
                    <div>{this.calcDate(item.applicable_date)}</div>
                    <div>
                      {this.getWeatherImage(item.weather_state_abbr, 75)}{" "}
                    </div>
                    <div>
                      {this.convertUnit(item.the_temp)}° {this.props.unit}
                    </div>
                    <div>
                      {this.convertUnit(item.min_temp)}° {this.props.unit} /{" "}
                      {this.convertUnit(item.max_temp)}° {this.props.unit}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      );
    }
  }
  
  class Search extends React.Component {
    componentDidMount() {
      this.getLocation();
    }
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.getWeather(
            weatherApi.latLng +
              position.coords.latitude +
              "," +
              position.coords.longitude
          );
        });
      } else {
        alert("Couldn't get location, please enter a valid city name.");
      }
    }
  
     getImage(city) {
      fetch(
        "https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=pageimages&format=json&piprop=original&titles=" +
          city
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            alert("Network Error");
          }
        })
        .then(data => {
          let url =
            "https://upload.wikimedia.org/wikipedia/commons/b/bd/SunFromClouds.jpg";
          if (data.query.pages[Object.keys(data.query.pages)[0]].original) {
            url =
              data.query.pages[Object.keys(data.query.pages)[0]].original.source;
          }
          document.documentElement.style.setProperty(
            "--bgImage",
            "url('" + url + "')"
          );
        })
        .catch(error => alert(error));
    }
  
    async getWeather(url) {
      this.props.setResult("loading");
      await fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            alert("Network Error");
          }
        })
        .then(data => {
          if (data[0]) {
            this.getWeather(weatherApi.weather + data[0].woeid);
          }
          else if (data.consolidated_weather) {
            this.getImage(data.title);
            this.props.setResult(data);
          }
        else {
          alert ("City not found.")
        }
        })
        .catch(error => alert(error));
    }
    handleInput = e => {
      this.setState({ cityQuery: e.target.value });
    };
    handleSubmit = e => {
      this.getWeather(weatherApi.city + this.state.cityQuery);
      e.preventDefault();
    };
    render() {
      return (
        <form className="header-search" onSubmit={this.handleSubmit}>
          <input
            className="header-search-input"
            placeholder={this.props.search}
            onChange={this.handleInput}
          />
        </form>
      );
    }
  }
  
  const Toggler = props => {
    const { name, checked, labels, handleChange } = props;
    const width = 100 / labels.length + "%";
    const style = {
      left: 100 / labels.length * labels.findIndex(lbl => lbl === checked) + "%",
      width: width
    };
    return (
      <div className={"toggle " + name}>
        {labels.map((item, key) => {
          return (
            <label key={key} style={{ width: width }} htmlFor={item}>
              <input
                onChange={handleChange}
                type="radio"
                id={item}
                name={name}
                value={item}
                checked={checked === item}
              />
              <div className="toggleLabel"> {item} </div>
            </label>
          );
        })}
        <div className="toggler" style={style} />
      </div>
    );
  };
  
  const translate = {
    "🇩🇪": {
      loading: "Ladevorgang",
      weather: "Wetter",
      city: "Stadt suchen",
      sunset: "Sonnenaufgang",
      sundown: "Sonnenuntergang",
      updated: "aktualisiert vor",
      updatedTime: "Minuten",
      pressure: "Luftdruck",
      humidity: "Luftfeuchtigkeit",
      predict: "Vorhersagegüte",
      Snow: "Schnee",
      Sleet: "Schneeregen",
      Hail: "Hagel",
      Thunder: "Gewitter",
      "Heavy Rain": "Starker Regen",
      "Light Rain": "Leichter Regen",
      Showers: "Regenschauer",
      "Heavy Cloud": "Stark bewölkt",
      "Light Cloud": "Leicht bewölkt",
      Clear: "Wolkenlos",
      Sunday: "Sonntag",
      Monday: "Montag",
      Tuesday: "Dienstag",
      Wednesday: "Mittwoch",
      Thursday: "Donnerstag",
      Friday: "Freitag",
      Saturday: "Samstag"
    },
    "🇺🇸": {
      loading: "Loading",
      weather: "Weather",
      city: "Enter city",
      sunset: "sunset",
      sundown: "sunrise",
      updated: "updated",
      updatedTime: "minutes ago",
      pressure: "air pressure",
      humidity: "humidity",
      predict: "predictability",
      Snow: "Snow",
      Sleet: "Sleet",
      Hail: "Hail",
      Thunder: "Thunderstorm",
      "Heavy Rain": "Heavy Rain",
      "Light Rain": "Light Rain",
      Showers: "Showers",
      "Heavy Cloud": "Heavy Cloud",
      "Light Cloud": "Light Cloud",
      Clear: "Clear",
      Sunday: "Sunday",
      Monday: "Monday",
      Tuesday: "Tuesday",
      Wednesday: "Wednesday",
      Thursday: "Thursday",
      Friday: "Friday",
      Saturday: "Saturday"
    },
    "🇨🇳": {
      loading: "充电",
      weather: "天气",
      city: "搜索城市",
      sunset: "夕阳",
      sundown: "日出",
      updated: "更新",
      updatedTime: "分钟前",
      pressure: "气压",
      humidity: "湿度",
      predict: "可预测性",
      Snow: "雪",
      Sleet: "雨夹雪",
      Hail: "雹暴",
      Thunder: "雷雨",
      "Heavy Rain": "大雨",
      "Light Rain": "小雨",
      Showers: "暴雨",
      "Heavy Cloud": "重云",
      "Light Cloud": "轻云",
      Clear: "清除",
      Sunday: "星期天",
      Monday: "星期一",
      Tuesday: "星期二",
      Wednesday: "星期三",
      Thursday: "星期四",
      Friday: "星期五",
      Saturday: "星期六"
    }
  };
  
  export default WeatherApp;
  