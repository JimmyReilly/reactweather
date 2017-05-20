var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    // Called by react automatically
    getInitialState: function(){
        return { 
            isLoading: false
         }
    },
    handleSearch: function(location){
        // This gets lost in scope
        var that = this;

        // debugger; This sets a break point
        this.setState({isLoading: true});

        openWeatherMap.getTemp(location).then(function(temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(errorMessage) {
            that.setState({
                isLoading: false
            });
            alert(errorMessage);
        });
    },
    render: function(){
        var {isLoading, temp, location} = this.state;

        function renderMessage() {
            if (isLoading){
                return <h3 className="text-center">Fetching weather...</h3>;
            }
            else if(temp && location){
                return <WeatherMessage temp={temp} location={location} />;
            }   
        }

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;