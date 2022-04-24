import 'core-js/stable';
import 'regenerator-runtime/runtime'

import Login from './modules/Login';

const register = new Login('.register-form');
const login = new Login('.login-form');
register.init();
login.init();

// import './assets/css/style.css';
