import { createAction } from 'redux-actions';
import types from './types';

const appLoaded = createAction(types.APP_LOADED);

module.exports = {
  appLoaded,
};
