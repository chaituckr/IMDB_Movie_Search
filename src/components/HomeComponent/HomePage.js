import React from 'react';
import { render } from 'react-dom'
var imdb = require('imdb-api');
var Properties = require('../../utils/Properties');
var Action = require('../../actions/Action');
var MovieStore = require('../../stores/MovieStore');
var SearchBox = require('../SearchComponent/Search');

/*function debounce(fn, delay) {  //This function can be used to autopopulate data while typing in searchbox
    var timer = null;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
}*/

var HomePage = React.createClass({

    getInitialState: function(){
        return{
            movie:{}
        }
    },

    searchWithText: function() {
        var movie;
        var text =  document.getElementById("searchBox").value;
        Action.getData(text);
    },

    onChange: function(){
        this.setState({movie: MovieStore.getMovie()});
    },

    componentWillMount: function() {
        MovieStore.addChangeListener(this.onChange);
        //this.searchWithText = debounce(this.searchWithText,300);
    },

    componentWillUnmount: function() {
        MovieStore.removeChangeListener(this.onChange);
    },

    render: function() {
        var movie = this.state.movie;
        console.log(movie);
        var actorLinks = [];
        if(movie.actors !== undefined){
            var actors = movie.actors.split(',');
            for(var i=0;i< actors.length; i++){
                actorLinks.push(<span className="act"><a href="#/details">{actors[i]}</a></span>);
            }
        }else{
            actorLinks.push(<span> </span>);
        }

        return(
            <div>
                <div className="jumbotron jumbo">
                    <div className="input-group">
                        <input id="searchBox" type="text" className="form-control" placeholder="Search for Movie"  />
                        <span className="input-group-addon" onClick={this.searchWithText}><span className="glyphicon glyphicon-search"> </span></span>
                    </div>

                    <div className="well">
                        <table className="table">
                            <tbody>
                                <tr><td rowSpan="6"><img id="poster" src={movie.poster}/></td><td id="title">{movie.title}</td></tr>
                                <tr><td id="actor">{actorLinks}</td></tr>
                                <tr><td>{movie.director}</td></tr>
                                <tr><td>{movie.genres}</td></tr>
                                <tr><td>{movie.rating}</td></tr>
                                <tr><td>{movie.awards}</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = HomePage;