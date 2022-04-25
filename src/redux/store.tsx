import {createStore,applyMiddleware } from 'redux';
import {persistStore} from 'redux-persist';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk'

export const store=createStore(rootReducer,applyMiddleware(thunk));
export const perssistor=persistStore(store);

const myStore={store,perssistor}
export default myStore;
