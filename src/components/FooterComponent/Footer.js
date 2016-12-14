'use strict';

var React = require('react');

var Footer = React.createClass({
    render: function () {
        return (
            <div>
                <footer>
                    with <span className="glyphicon glyphicon-heart"> </span>from CKR.
                </footer>
            </div>
        );
    }
});


module.exports = Footer;
