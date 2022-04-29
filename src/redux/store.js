 
import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware } from 'redux';
import * as User from './reducers/user/idnex';
import * as Loader from './reducers/loader/idnex';
import * as Message  from './reducers/messsage/idnex';
 import * as Services  from './reducers/Services/idnex';
 import * as Categories  from './reducers/Category/idnex';
 import * as ServiceItem  from './reducers/Item/idnex';
 import * as Booking  from './reducers/Booking/idnex';
 import * as CurrentBooking  from './reducers/Currentbooking/idnex';

 import * as BookingReview  from './reducers/BookingReview/idnex'; import { combineReducers } from 'redux';
import thunk from 'redux-thunk'
 
 const rootReducer = combineReducers({
    User:User.userReducer,
    Loading:Loader.loadingReducer,
    Message:Message.messageReducer,
    Services:Services.ServicesReducer,
    Categories:Categories.CategoryReducer,
    ServiceItem:ServiceItem.ItemReducer,
    BookingReviews:BookingReview.BookingReviewReducer,
    Bookings:Booking.BookingReducer,
    Users:User.UsersReducer,
    Language: User.language,
    CurrentBooking:CurrentBooking.CurrentBookingReducer

   });

const makeConfiguredStore = (reducer) =>
    createStore(reducer ,applyMiddleware(thunk));


const makeStore = () => {

    const isServer = typeof window === 'undefined';

    if (isServer) {
        
        return makeConfiguredStore(rootReducer);

    } else {

        // we need it only on client side
        const {persistStore, persistReducer} = require('redux-persist');
        const storage = require('redux-persist/lib/storage').default;

        const persistConfig = {
            key: 'duchess',
            whitelist: [ 'User','CurrentBooking'], // make sure it does not clash with server keys
            storage
        };

        const persistedReducer = persistReducer(persistConfig, rootReducer);
        const store = makeConfiguredStore(persistedReducer);

        store.__persistor = persistStore(store); // Nasty hack

        return store;
    }
};

export const wrapper = createWrapper(makeStore);