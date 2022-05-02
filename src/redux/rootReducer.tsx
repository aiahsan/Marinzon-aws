import {combineReducers} from "redux";
import * as User from './reducers/user/idnex';
import * as Loader from './reducers/loader/idnex';
import * as Message  from './reducers/messsage/idnex';
 import * as Services  from './reducers/Services/idnex';
 import * as Categories  from './reducers/Category/idnex';
 import * as ServiceItem  from './reducers/Item/idnex';
 import * as Booking  from './reducers/Booking/idnex';
 import * as BookingReview  from './reducers/BookingReview/idnex';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const rootReducer = combineReducers({
  User:User.userReducer,
  Loading:Loader.loadingReducer,
  Message:Message.messageReducer,
  Services:Services.ServicesReducer,
  Categories:Categories.CategoryReducer,
  ServiceItem:ServiceItem.ItemReducer,
  BookingReviews:BookingReview.BookingReviewReducer,
  Bookings:Booking.BookingReducer,
  Users:User.UsersReducer
 });

const persistConfig={
  key:'root',
  storage,
  whitelist:['User']
}

export default persistReducer(persistConfig,rootReducer )

export function* rootSaga() {

}
