import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';

const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

window.matchMedia = window.matchMedia
  || function () {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };

window.requestAnimationFrame = window.requestAnimationFrame
  || function (callback) {
    setTimeout(callback, 0);
  };