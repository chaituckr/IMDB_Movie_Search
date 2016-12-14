var AppDispatcher = require('../dispatcher/AppDispatcher');

var Action = {
    getData: function (data) {
        AppDispatcher.handleViewAction({
            source: 'Source',
            actionType: "GET_MOVIE",
            data: data
        });
    }
};

module.exports = Action;
