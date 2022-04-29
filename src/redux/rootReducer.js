import { combineReducers } from 'redux';

import * as User from './reducer/user';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const rootReducer = combineReducers({
  Tokken: User.tokken,
  User: User.userReducer,
  Language: User.language,
});

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['Tokken', 'User'],
// };

// export default persistReducer(persistConfig, rootReducer);

// export function* rootSaga() {}
