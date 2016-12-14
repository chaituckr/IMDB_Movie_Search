
import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';

var Header = require('../HeaderComponent/Header');
var Footer = require('../FooterComponent/Footer');

var Display = React.createClass({

    componentWillMount: function(){
        hashHistory.push('/home');
    },

    render: function() {

        return(
            <div className="container">
                <Header/>
                <div style={{marginTop: "-20px"}}>
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
});

module.exports = Display;