/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	//1
	var shuzhu = new Array(1, 2, 3, 4, 5);
	var max = Math.max.apply(null, shuzhu);
	console.log(max);

	//2
	var arr1 = new Array("1", "2", "3"),
	    arr2 = new Array("4", "5", "6"),
	    big = {};
	big = Array.prototype.push.apply(arr1, arr2);
	console.log(big);
	console.log(arr1);
	console.log(arr2);

	//3
	// function six (){
	//   "use strict";

	var test = function () {
	  function test(one, two) {
	    _classCallCheck(this, test);

	    this.one = one;
	    this.two = two;
	  }

	  _createClass(test, [{
	    key: "showtime",
	    value: function showtime() {
	      return this.one;
	    }
	  }]);

	  return test;
	}();

	var abc = function abc() {
	  return arguments.length <= 0 ? undefined : arguments[0];
	};
	console.log('the srgs[0] is ' + abc(1, 2, 3, 4));
	var testman = new test(1, 100);
	console.log(testman.showtime());
	// }
	// six();

	//4
	var arr = ['apple', 'orange', 'pear'];
	console.log("found:", arr.indexOf("orange"));

	var arr2 = [{ "name": "apple", "count": 2 }, { "name": "orange", "count": 5 }, { "name": "pear", "count": 3 }, { "name": "orange", "count": 16 }];
	var arrx = [];
	for (var man in arr2) {
	  arrx[man] = arr2[man];
	  console.log('the arrx are:', arrx);
	}
	var fulltone = arr2.filter(function (item) {
	  return item.name === 'apple';
	});
	console.log('the new one is', fulltone);

	var arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
	arr3.forEach(function (item, index) {
	  console.log('the num' + index, ' is', item);
	});
	arr2.forEach(function (item, index) {
	  console.log('the arr2: num' + index, ' is', item);
	});

	//5
	console.log('function length is', function (a, b) {}.length);
	var aa = function aa() {
	  for (var _len = arguments.length, arr = Array(_len), _key = 0; _key < _len; _key++) {
	    arr[_key] = arguments[_key];
	  }

	  var crew = arr;
	  return crew;
	};
	console.log('argument is', aa(1, 2, 3, 4, 5, 6, 7));
	var bb = aa(1, 2, 3, 4, 5, 6);
	console.log('num3 argument is', bb[2]);

	var newarr = new Set();
	newarr.add(1);
	newarr.add(2);
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
	  for (var _iterator = newarr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	    var _bb = _step.value;

	    console.log('set is', _bb);
	  }
	} catch (err) {
	  _didIteratorError = true;
	  _iteratorError = err;
	} finally {
	  try {
	    if (!_iteratorNormalCompletion && _iterator.return) {
	      _iterator.return();
	    }
	  } finally {
	    if (_didIteratorError) {
	      throw _iteratorError;
	    }
	  }
	}

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
	  for (var _iterator2 = newarr.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	    var bbs = _step2.value;

	    console.log('entry set is', bbs);
	  }
	} catch (err) {
	  _didIteratorError2 = true;
	  _iteratorError2 = err;
	} finally {
	  try {
	    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	      _iterator2.return();
	    }
	  } finally {
	    if (_didIteratorError2) {
	      throw _iteratorError2;
	    }
	  }
	}

	var shuzhu2 = Array.from(new Set([1, 2, 2, 2, 3, 4, 5, 6, 7]));
	for (var _aa in shuzhu2) {
	  console.log('let set is', shuzhu2[_aa]);
	}

	var team = ['a', 'b', 'c'];
	var nexter = team[Symbol.iterator](); //数组自带遍历
	console.log('next is', nexter.next());
	console.log('next is', nexter.next().value);
	console.log('next is', nexter.next());
	console.log('next is', nexter.next());

	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
	  for (var _iterator3 = team[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	    var cc = _step3.value;

	    console.log('use of to do:', cc);
	  }
	} catch (err) {
	  _didIteratorError3 = true;
	  _iteratorError3 = err;
	} finally {
	  try {
	    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	      _iterator3.return();
	    }
	  } finally {
	    if (_didIteratorError3) {
	      throw _iteratorError3;
	    }
	  }
	}

/***/ }
/******/ ]);