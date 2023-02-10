/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");





function Edit(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    columns
  } = attributes;
  const onChangeColumns = newColumns => {
    setAttributes({
      columns: newColumns
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: `has-${columns}-columns`
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Columns", "team-members"),
    min: 1,
    max: 6,
    onChange: onChangeColumns,
    value: columns
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    allowedBlocks: ['blocks-course/team-member'],
    template: [['blocks-course/team-member'], ['blocks-course/team-member'], ['blocks-course/team-member']]
    // templateLock="all"
    // templateLock="insert"
  }));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _team_member__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./team-member */ "./src/team-member/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/block.json");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('blocks-course/team-members', {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    columns
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: `has-${columns}-columns`
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/team-member/edit.js":
/*!*********************************!*\
  !*** ./src/team-member/edit.js ***!
  \*********************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/src/team-member/edit.js: 'import' and 'export' may only appear at the top level. (181:0)\n\n\u001b[0m \u001b[90m 179 |\u001b[39m }\u001b[0m\n\u001b[0m \u001b[90m 180 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 181 |\u001b[39m \u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m withNotices(\u001b[33mEdit\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     |\u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n    at instantiate (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/parser/lib/index.js:64:32)\n    at constructor (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/parser/lib/index.js:361:12)\n    at JSXParserMixin.raise (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/parser/lib/index.js:3251:19)\n    at JSXParserMixin.parseStatementContent (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/parser/lib/index.js:12641:18)\n    at JSXParserMixin.parseStatementLike (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/parser/lib/index.js:12535:17)\n    at JSXParserMixin.parseStatementListItem (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/parser/lib/index.js:12522:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/parser/lib/index.js:13106:61)\n    at JSXParserMixin.parseBlockBody (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/parser/lib/index.js:13099:10)\n    at JSXParserMixin.parseBlock (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/parser/lib/index.js:13087:10)\n    at JSXParserMixin.parseFunctionBody (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/parser/lib/index.js:11905:24)\n    at JSXParserMixin.parseFunctionBodyAndFinish (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/parser/lib/index.js:11891:10)\n    at /Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/parser/lib/index.js:13237:12\n    at JSXParserMixin.withSmartMixTopicForbiddingContext (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/parser/lib/index.js:12215:14)\n    at JSXParserMixin.parseFunction (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/parser/lib/index.js:13236:10)\n    at JSXParserMixin.parseFunctionStatement (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/parser/lib/index.js:12899:17)\n    at JSXParserMixin.parseStatementContent (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/parser/lib/index.js:12567:21)\n    at JSXParserMixin.parseStatementLike (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/parser/lib/index.js:12535:17)\n    at JSXParserMixin.parseModuleItem (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/parser/lib/index.js:12519:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/parser/lib/index.js:13106:36)\n    at JSXParserMixin.parseBlockBody (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/parser/lib/index.js:13099:10)\n    at JSXParserMixin.parseProgram (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/parser/lib/index.js:12433:10)\n    at JSXParserMixin.parseTopLevel (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/parser/lib/index.js:12423:25)\n    at JSXParserMixin.parse (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/parser/lib/index.js:14226:10)\n    at parse (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/parser/lib/index.js:14268:38)\n    at parser (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/core/lib/parser/index.js:41:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/core/lib/transformation/normalize-file.js:65:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/core/lib/transformation/index.js:21:50)\n    at run.next (<anonymous>)\n    at transform (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/@babel/core/lib/transform.js:22:41)\n    at transform.next (<anonymous>)\n    at step (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/gensync/index.js:261:32)\n    at /Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/imon/Sites/wp/Udemy/GutenbergBlocks2023/wp-content/plugins/blocks-course-team-members/node_modules/gensync/index.js:223:11)");

/***/ }),

/***/ "./src/team-member/index.js":
/*!**********************************!*\
  !*** ./src/team-member/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/team-member/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/team-member/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('blocks-course/team-member', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Team Member", "team-members"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("A team member item", "team-members"),
  icon: "admin-users",
  parent: ['blocks-course/team-members'],
  supports: {
    reusable: false,
    html: false
  },
  attributes: {
    name: {
      type: "string",
      source: "html",
      selector: "h4"
    },
    bio: {
      type: "string",
      source: "html",
      selector: "p"
    },
    id: {
      type: "number"
    },
    alt: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: 'alt',
      default: ''
    },
    url: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "src"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/team-member/save.js":
/*!*********************************!*\
  !*** ./src/team-member/save.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function Save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    name,
    bio,
    url,
    alt,
    id
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: url,
    alt: alt,
    className: id ? `wp-image-${id}` : null
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h4",
    value: name
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    value: bio
  }));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"blocks-course/team-members","version":"0.1.0","title":"Team Members","category":"media","icon":"groups","description":"A Team Members grid.","keywords":["Team","Members","Grid"],"supports":{"html":false},"textdomain":"team-members","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","attributes":{"columns":{"type":"number","default":2}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkblocks_course_team_members"] = self["webpackChunkblocks_course_team_members"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map