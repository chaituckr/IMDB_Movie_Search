import React from 'react';
import { render } from 'react-dom'


var ErrorPage = React.createClass({

    render: function() {
        return(
            <div className="container">
                <div className="jumbotron">
                    <h1 className="well">404 - Page Not Found :(</h1>
                </div>
            </div>
        )
    }
});

module.exports = ErrorPage;
