import { createStore } from 'redux';
import RepoReducer from './reducers/Reducer';

function configureStore() {
    return createStore(
        RepoReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}

export default configureStore;