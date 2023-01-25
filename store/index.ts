import { createStore, combineReducers } from 'redux';
import { ChangeActiveTabReducer } from './changeActiveTab/reducer';

const rootReducer = combineReducers({
  changeActiveTab: ChangeActiveTabReducer,
})

export type RootState = ReturnType<typeof store.getState>
export const store = createStore(rootReducer);