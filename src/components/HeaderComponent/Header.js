'use strict';

var React = require('react');

var Header = React.createClass({
    render: function () {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header company">
                            <span>IMDB</span>
                        </div>
                    </div>
                </nav>

            </div>
        );
    }
});


module.exports = Header;