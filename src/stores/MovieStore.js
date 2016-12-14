
var AppDispatcher = require('.././dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Properties = require('../utils/Properties');
var imdb = require('imdb-api');

var state = {};
// this is a private variable that stores the ajax response

var MovieStore = assign({}, EventEmitter.prototype, {
    getMovie: function () {
        return state;
    },
    emitChange: function () {
        //this emits a change from nodes EventEmitter, since we used object assign, it is part of this ;)
        this.emit('GET_MOVIE');
    },
    addChangeListener: function (cb) {
        // this sets a listener for the change emitter, the cb is obtained from the page
        this.on('GET_MOVIE', cb);
    },
    removeChangeListener: function (cb) {
        // this removes the change listener
        this.removeListener('GET_MOVIE', cb);
    }
});

AppDispatcher.register(function (payload) {
    var request = payload.action;
    var text = request.data;
    // the switch statement is to check if the relieved action is category
    switch (request.actionType) {
        case 'GET_MOVIE':
            imdb.get(text).then(function(data) {
                state = data;
                MovieStore.emitChange();
                console.log(state);
            });

    }

});

module.exports = MovieStore;

