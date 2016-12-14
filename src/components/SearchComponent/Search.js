'use strict';

var React = require('react');
var imdb = require('imdb-api');

function debounce(fn, delay) {
    var timer = null;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
}

var SearchBox = React.createClass({

    searchWithText: function() {
        var movie;
        var text =  document.getElementById("searchBox").value;
        imdb.get(text).then(function(data) {
            console.log(data);
        });
    },

    componentWillMount: function() {
        this.searchWithText = debounce(this.searchWithText,300);
    },

    render: function(){
        return(
            <div>
                <div className="input-group">
                    <input id="searchBox" type="text" className="form-control" placeholder="Search for Movie"  onChange={this.searchWithText}/>
                    <span className="input-group-addon"><span className="glyphicon glyphicon-search"> </span></span>
                </div>
            </div>
        );
    }
});

module.exports = SearchBox;