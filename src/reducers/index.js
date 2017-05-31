import { combineReducers } from 'redux';

import feed from './feed';
import messages from './messages';

export default combineReducers({
  feed,
  messages,
});