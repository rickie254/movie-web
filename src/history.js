// Our own history object so we can redirect on action creators
// We use normal router because of this and pass it our history object
import  createBrowserHistory  from './history.js';
import  createHistory from './history.js';
export default createBrowserHistory();

// src/history.js


const history = createHistory();