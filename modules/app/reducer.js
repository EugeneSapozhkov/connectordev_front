import { handleActions } from 'redux-actions';
import types from './types';

const initialState = {
  isLoaded: false,
};

const appReducer = handleActions(
  {
    [types.APP_LOADED]: state => ({
      ...state,
        isLoaded: true,
    }),
  },

  initialState,
);

export default appReducer;
