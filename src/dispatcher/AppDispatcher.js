import {Dispatcher} from 'flux';
import assign from 'object-assign';

var AppDispatcher = assign(new Dispatcher(), {

    handleViewAction(action) {
        this.dispatch({
            source: "SourceName",
            action: action
        });
    }
});

module.exports = AppDispatcher;