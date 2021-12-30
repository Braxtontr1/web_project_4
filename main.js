/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Card = /*#__PURE__*/function () {
  function Card(_ref, cardSelector) {
    var data = _ref.data,
        handleClick = _ref.handleClick;

    _classCallCheck(this, Card);

    this._title = data.title;
    this._image = data.image;
    this._cardSelector = cardSelector;
    this._handleClick = handleClick;
  }

  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(this._cardSelector).content.querySelector('.destination').cloneNode(true);
      return cardElement;
    }
  }, {
    key: "_handleLike",
    value: function _handleLike() {
      this._likeButton.classList.toggle('destination__like-button_active');
    }
  }, {
    key: "_handleDelete",
    value: function _handleDelete() {
      this._element.remove();

      this._element = null;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      this._likeButton.addEventListener('click', function () {
        return _this._handleLike();
      });

      this._element.querySelector('.destination__image').addEventListener('click', function () {
        return _this._handleClick({
          title: _this._title,
          image: _this._image
        });
      });

      this._element.querySelector('.destination__delete-button').addEventListener('click', function () {
        return _this._handleDelete();
      });
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      this._element = this._getTemplate();
      this._likeButton = this._element.querySelector('.destination__like-button');

      var cardElementImage = this._element.querySelector('.destination__image');

      this._setEventListeners();

      this._element.querySelector('.destination__title').textContent = this._title;
      cardElementImage.src = this._image;
      cardElementImage.alt = this._title;
      return this._element;
    }
  }]);

  return Card;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(settings, formEl) {
    _classCallCheck(this, FormValidator);

    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._form = formEl;
  }

  _createClass(FormValidator, [{
    key: "_addErrorMessage",
    value: function _addErrorMessage(inputEl) {
      var errorEl = this._form.querySelector("#".concat(inputEl.id, "-error"));

      inputEl.classList.add(this._inputErrorClass);
      errorEl.innerText = inputEl.validationMessage;
      errorEl.classList.add(this._errorClass);
    }
  }, {
    key: "_removeErrorMessage",
    value: function _removeErrorMessage(inputEl) {
      var errorEl = this._form.querySelector("#".concat(inputEl.id, "-error"));

      inputEl.classList.remove(this._inputErrorClass);
      errorEl.innerText = '';
      errorEl.classList.remove(this._errorClass);
    }
  }, {
    key: "_isValid",
    value: function _isValid(inputEl) {
      return inputEl.validity.valid;
    }
  }, {
    key: "_checkFormValidity",
    value: function _checkFormValidity() {
      var _this = this;

      return this._inputList.every(function (inputEl) {
        return _this._isValid(inputEl);
      });
    }
  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(inputEl) {
      if (!this._isValid(inputEl)) {
        this._addErrorMessage(inputEl);
      } else {
        this._removeErrorMessage(inputEl);
      }
    }
  }, {
    key: "_disableButton",
    value: function _disableButton() {
      this._buttonEl.classList.add(this._inactiveButtonClass);

      this._buttonEl.disabled = true;
    }
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState() {
      if (this._checkFormValidity()) {
        this._buttonEl.classList.remove(this._inactiveButtonClass);

        this._buttonEl.disabled = false;
      } else {
        this._disableButton();
      }
    }
  }, {
    key: "_setupEventListeners",
    value: function _setupEventListeners() {
      var _this2 = this;

      this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
      this._buttonEl = this._form.querySelector(this._submitButtonSelector);

      this._inputList.forEach(function (inputEl) {
        inputEl.addEventListener('input', function () {
          _this2._checkInputValidity(inputEl);

          _this2._toggleButtonState(_this2._inputList);
        });
      });
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._form.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });

      this._setupEventListeners(this._form);
    }
  }, {
    key: "resetValidation",
    value: function resetValidation() {
      var _this3 = this;

      this._toggleButtonState();

      this._inputList.forEach(function (inputEl) {
        _this3._removeErrorMessage(inputEl);
      });
    }
  }]);

  return FormValidator;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormValidator);

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Popup = /*#__PURE__*/function () {
  function Popup(popupElement) {
    _classCallCheck(this, Popup);

    this._popupElement = popupElement;
    this._handleEscapeClose = this._handleEscapeClose.bind(this);
  }

  _createClass(Popup, [{
    key: "_handleEscapeClose",
    value: function _handleEscapeClose(evt) {
      if (evt.key === 'Escape') {
        this.close();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;

      this._popupElement.querySelector(".modal__close-button").addEventListener('click', function () {
        _this.close();
      });

      this._popupElement.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('modal_open')) {
          _this.close();
        }
      });
    }
  }, {
    key: "open",
    value: function open() {
      this._popupElement.classList.add('modal_open');

      document.addEventListener('keydown', this._handleEscapeClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._popupElement.classList.remove('modal_open');

      document.removeEventListener('keydown', this._handleEscapeClose);
    }
  }]);

  return Popup;
}();



/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupWithForm": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);

  var _super = _createSuper(PopupWithForm);

  function PopupWithForm(_ref) {
    var _this;

    var handleFormSubmission = _ref.handleFormSubmission,
        popupElement = _ref.popupElement;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupElement);
    _this._handleFormSubmission = handleFormSubmission;
    _this._formElement = _this._popupElement.querySelector('.form');
    return _this;
  }

  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var formValues = {};
      this._inputElements = Array.from(this._formElement.elements);

      this._inputElements.forEach(function (input) {
        formValues[input.name] = input.value;
      });

      return formValues;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);

      this._popupElement.addEventListener('submit', function (evt) {
        evt.preventDefault();

        _this2._handleFormSubmission(_this2._getInputValues());

        _this2.close();
      });
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);

      this._formElement.reset();
    }
  }]);

  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupWithImage": () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage(popupElement) {
    var _this;

    _classCallCheck(this, PopupWithImage);

    _this = _super.call(this, popupElement);
    _this._imageElement = _this._popupElement.querySelector('.modal__image');
    _this._imageElementTitle = _this._popupElement.querySelector('.modal__image-title');
    return _this;
  }

  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(data) {
      this._imageElement.src = data.image;
      this._imageElement.alt = data.title;
      this._imageElementTitle.textContent = data.title;

      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);

  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var items = _ref.items,
        renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  _createClass(Section, [{
    key: "addItem",
    value: function addItem(element) {
      this._container.append(element);
    }
  }, {
    key: "prependItem",
    value: function prependItem(element) {
      this._container.prepend(element);
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this = this;

      this._renderedItems.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }]);

  return Section;
}();



/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfo)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var userNameSelector = _ref.userNameSelector,
        userJobSelector = _ref.userJobSelector;

    _classCallCheck(this, UserInfo);

    this._userName = userNameSelector;
    this._userJob = userJobSelector;
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._userName.textContent,
        job: this._userJob.textContent
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var name = _ref2.name,
          job = _ref2.job;
      this._userName.textContent = name;
      this._userJob.textContent = job;
    }
  }]);

  return UserInfo;
}();



/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialCards": () => (/* binding */ initialCards),
/* harmony export */   "formSettings": () => (/* binding */ formSettings),
/* harmony export */   "elements": () => (/* binding */ elements)
/* harmony export */ });
/* harmony import */ var _images_zion_canyon_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/zion-canyon.jpg */ "./src/images/zion-canyon.jpg");
/* harmony import */ var _images_Yosemite_valley_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/Yosemite-valley.jpg */ "./src/images/Yosemite-valley.jpg");
/* harmony import */ var _images_telluride_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/telluride.jpg */ "./src/images/telluride.jpg");
/* harmony import */ var _images_yellowstone_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/yellowstone.jpg */ "./src/images/yellowstone.jpg");
/* harmony import */ var _images_bass_harbor_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/bass-harbor.jpg */ "./src/images/bass-harbor.jpg");
/* harmony import */ var _images_big_bend_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/big-bend.jpg */ "./src/images/big-bend.jpg");






var initialCards = [{
  title: "Yosemite Valley",
  image: _images_Yosemite_valley_jpg__WEBPACK_IMPORTED_MODULE_1__
}, {
  title: "Zion Canyon",
  image: _images_zion_canyon_jpg__WEBPACK_IMPORTED_MODULE_0__
}, {
  title: "Telluride",
  image: _images_telluride_jpg__WEBPACK_IMPORTED_MODULE_2__
}, {
  title: "Yellowstone",
  image: _images_yellowstone_jpg__WEBPACK_IMPORTED_MODULE_3__
}, {
  title: "Bass Harbor",
  image: _images_bass_harbor_jpg__WEBPACK_IMPORTED_MODULE_4__
}, {
  title: "Big Bend",
  image: _images_big_bend_jpg__WEBPACK_IMPORTED_MODULE_5__
}];
var formSettings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible"
};
var elements = {
  imagePopup: document.querySelector(".modal_type_image"),
  formPopupAdd: document.querySelector(".modal_type_add-card"),
  profileEditButton: document.querySelector(".profile__button button"),
  addCardButton: document.querySelector(".profile__card-button")
};

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/Yosemite-valley.jpg":
/*!****************************************!*\
  !*** ./src/images/Yosemite-valley.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae4bc3b182bd0b2c248d.jpg";

/***/ }),

/***/ "./src/images/bass-harbor.jpg":
/*!************************************!*\
  !*** ./src/images/bass-harbor.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27f69eb874ccb9ea970e.jpg";

/***/ }),

/***/ "./src/images/big-bend.jpg":
/*!*********************************!*\
  !*** ./src/images/big-bend.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2646dbdd37a5c1776796.jpg";

/***/ }),

/***/ "./src/images/telluride.jpg":
/*!**********************************!*\
  !*** ./src/images/telluride.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16aaf342253764dc7a8e.jpg";

/***/ }),

/***/ "./src/images/yellowstone.jpg":
/*!************************************!*\
  !*** ./src/images/yellowstone.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "451fc9dbfeface473f12.jpg";

/***/ }),

/***/ "./src/images/zion-canyon.jpg":
/*!************************************!*\
  !*** ./src/images/zion-canyon.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ac5508ee90e2c257e875.jpg";

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
/************************************************************************/
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");








var editModal = document.querySelector('.modal_type_edit-profile');
var editForm = editModal.querySelector('.form');
var addModal = document.querySelector('.modal_type_add-card');
var addForm = addModal.querySelector('.form');
var editModalButton = document.querySelector('.profile__button');
var addModalButton = document.querySelector('.profile__card-button');
var profileName = document.querySelector('.profile__name');
var profileTitle = document.querySelector('.profile__about-me');
var modalNameInput = document.querySelector('.form__input_type_name');
var modalDescriptionInput = document.querySelector('.form__input_type_description'); //functions

function createCard(item) {
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
    data: item,
    handleClick: function handleClick(data) {
      return cardImagePreview.open(data);
    }
  }, '#destination-template');
  var cardElement = card.generateCard();
  return cardElement;
} // class instances for Popups


var addCardPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__.PopupWithForm({
  popupElement: addModal,
  handleFormSubmission: function handleFormSubmission(item) {
    renderInitialCards.prependItem(createCard(item));
  }
});
var userdata = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
  userNameSelector: profileName,
  userJobSelector: profileTitle
});
var editFormPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__.PopupWithForm({
  handleFormSubmission: function handleFormSubmission(_ref) {
    var name = _ref.name,
        job = _ref.job;
    userdata.setUserInfo({
      name: name,
      job: job
    });
    console.log(name, job);
  },
  popupElement: editModal
});
var cardImagePreview = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_6__.PopupWithImage(_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.elements.imagePopup);
var renderInitialCards = new _components_Section_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
  items: _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.initialCards,
  renderer: function renderer(item) {
    renderInitialCards.addItem(createCard(item));
  }
}, ".destinations");
addModalButton.addEventListener('click', function () {
  addFormValidator.resetValidation();
  addCardPopup.open();
});
editModalButton.addEventListener('click', function () {
  var getData = userdata.getUserInfo();
  modalNameInput.value = getData.name;
  modalDescriptionInput.value = getData.job;
  editFormValidator.resetValidation();
  editFormPopup.open();
}); // class instances and initializations for validation

var editFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.formSettings, editForm);
editFormValidator.enableValidation();
var addFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.formSettings, addForm);
addFormValidator.enableValidation();
renderInitialCards.renderItems(); //class initializations for open and closing popups

cardImagePreview.setEventListeners();
editFormPopup.setEventListeners();
addCardPopup.setEventListeners();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQTtBQUNGLHNCQUdHQyxZQUhILEVBR2lCO0FBQUEsUUFGYkMsSUFFYSxRQUZiQSxJQUVhO0FBQUEsUUFEYkMsV0FDYSxRQURiQSxXQUNhOztBQUFBOztBQUNiLFNBQUtDLE1BQUwsR0FBY0YsSUFBSSxDQUFDRyxLQUFuQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0osSUFBSSxDQUFDSyxLQUFuQjtBQUVBLFNBQUtDLGFBQUwsR0FBcUJQLFlBQXJCO0FBQ0EsU0FBS1EsWUFBTCxHQUFvQk4sV0FBcEI7QUFFSDs7OztXQUVELHdCQUFlO0FBQ1gsVUFBTU8sV0FBVyxHQUNiQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBS0osYUFBNUIsRUFDQ0ssT0FERCxDQUNTRCxhQURULENBQ3VCLGNBRHZCLEVBQ3VDRSxTQUR2QyxDQUNpRCxJQURqRCxDQURKO0FBR0EsYUFBT0osV0FBUDtBQUNIOzs7V0FFRCx1QkFBYztBQUNWLFdBQUtLLFdBQUwsQ0FBaUJDLFNBQWpCLENBQTJCQyxNQUEzQixDQUFrQyxpQ0FBbEM7QUFDSDs7O1dBRUQseUJBQWdCO0FBQ1osV0FBS0MsUUFBTCxDQUFjQyxNQUFkOztBQUNBLFdBQUtELFFBQUwsR0FBZ0IsSUFBaEI7QUFDSDs7O1dBRUQsOEJBQXFCO0FBQUE7O0FBRWpCLFdBQUtILFdBQUwsQ0FBaUJLLGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQztBQUFBLGVBQU0sS0FBSSxDQUFDQyxXQUFMLEVBQU47QUFBQSxPQUEzQzs7QUFFQSxXQUFLSCxRQUFMLENBQWNOLGFBQWQsQ0FBNEIscUJBQTVCLEVBQW1EUSxnQkFBbkQsQ0FBb0UsT0FBcEUsRUFBNkU7QUFBQSxlQUFNLEtBQUksQ0FBQ1gsWUFBTCxDQUFrQjtBQUNqR0osVUFBQUEsS0FBSyxFQUFFLEtBQUksQ0FBQ0QsTUFEcUY7QUFFakdHLFVBQUFBLEtBQUssRUFBRSxLQUFJLENBQUNEO0FBRnFGLFNBQWxCLENBQU47QUFBQSxPQUE3RTs7QUFLQSxXQUFLWSxRQUFMLENBQWNOLGFBQWQsQ0FBNEIsNkJBQTVCLEVBQTJEUSxnQkFBM0QsQ0FBNEUsT0FBNUUsRUFBcUY7QUFBQSxlQUFNLEtBQUksQ0FBQ0UsYUFBTCxFQUFOO0FBQUEsT0FBckY7QUFDSDs7O1dBRUQsd0JBQWU7QUFDWCxXQUFLSixRQUFMLEdBQWdCLEtBQUtLLFlBQUwsRUFBaEI7QUFDQSxXQUFLUixXQUFMLEdBQW1CLEtBQUtHLFFBQUwsQ0FBY04sYUFBZCxDQUE0QiwyQkFBNUIsQ0FBbkI7O0FBQ0EsVUFBTVksZ0JBQWdCLEdBQUcsS0FBS04sUUFBTCxDQUFjTixhQUFkLENBQTRCLHFCQUE1QixDQUF6Qjs7QUFFQSxXQUFLYSxrQkFBTDs7QUFFQSxXQUFLUCxRQUFMLENBQWNOLGFBQWQsQ0FBNEIscUJBQTVCLEVBQW1EYyxXQUFuRCxHQUFpRSxLQUFLdEIsTUFBdEU7QUFFQW9CLE1BQUFBLGdCQUFnQixDQUFDRyxHQUFqQixHQUF1QixLQUFLckIsTUFBNUI7QUFDQWtCLE1BQUFBLGdCQUFnQixDQUFDSSxHQUFqQixHQUF1QixLQUFLeEIsTUFBNUI7QUFFQSxhQUFPLEtBQUtjLFFBQVo7QUFDSDs7Ozs7O0FBR0wsaUVBQWVsQixJQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3pETTZCO0FBQ0YseUJBQVlDLFFBQVosRUFBc0JDLE1BQXRCLEVBQThCO0FBQUE7O0FBQzFCLFNBQUtDLGNBQUwsR0FBc0JGLFFBQVEsQ0FBQ0csYUFBL0I7QUFDQSxTQUFLQyxxQkFBTCxHQUE2QkosUUFBUSxDQUFDSyxvQkFBdEM7QUFDQSxTQUFLQyxvQkFBTCxHQUE0Qk4sUUFBUSxDQUFDTyxtQkFBckM7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QlIsUUFBUSxDQUFDUyxlQUFqQztBQUNBLFNBQUtDLFdBQUwsR0FBbUJWLFFBQVEsQ0FBQ1csVUFBNUI7QUFFQSxTQUFLQyxLQUFMLEdBQWFYLE1BQWI7QUFDSDs7OztXQUVELDBCQUFpQlksT0FBakIsRUFBMEI7QUFDdEIsVUFBTUMsT0FBTyxHQUFHLEtBQUtGLEtBQUwsQ0FBVzlCLGFBQVgsWUFBNkIrQixPQUFPLENBQUNFLEVBQXJDLFlBQWhCOztBQUNBRixNQUFBQSxPQUFPLENBQUMzQixTQUFSLENBQWtCOEIsR0FBbEIsQ0FBc0IsS0FBS1IsZ0JBQTNCO0FBQ0FNLE1BQUFBLE9BQU8sQ0FBQ0csU0FBUixHQUFvQkosT0FBTyxDQUFDSyxpQkFBNUI7QUFDQUosTUFBQUEsT0FBTyxDQUFDNUIsU0FBUixDQUFrQjhCLEdBQWxCLENBQXNCLEtBQUtOLFdBQTNCO0FBQ0g7OztXQUVELDZCQUFvQkcsT0FBcEIsRUFBNkI7QUFDekIsVUFBTUMsT0FBTyxHQUFHLEtBQUtGLEtBQUwsQ0FBVzlCLGFBQVgsWUFBNkIrQixPQUFPLENBQUNFLEVBQXJDLFlBQWhCOztBQUNBRixNQUFBQSxPQUFPLENBQUMzQixTQUFSLENBQWtCRyxNQUFsQixDQUF5QixLQUFLbUIsZ0JBQTlCO0FBQ0FNLE1BQUFBLE9BQU8sQ0FBQ0csU0FBUixHQUFvQixFQUFwQjtBQUNBSCxNQUFBQSxPQUFPLENBQUM1QixTQUFSLENBQWtCRyxNQUFsQixDQUF5QixLQUFLcUIsV0FBOUI7QUFDSDs7O1dBRUQsa0JBQVNHLE9BQVQsRUFBa0I7QUFDZCxhQUFPQSxPQUFPLENBQUNNLFFBQVIsQ0FBaUJDLEtBQXhCO0FBQ0g7OztXQUVELDhCQUFxQjtBQUFBOztBQUNqQixhQUFPLEtBQUtDLFVBQUwsQ0FBZ0JDLEtBQWhCLENBQXNCLFVBQUFULE9BQU87QUFBQSxlQUFJLEtBQUksQ0FBQ1UsUUFBTCxDQUFjVixPQUFkLENBQUo7QUFBQSxPQUE3QixDQUFQO0FBQ0g7OztXQUVELDZCQUFvQkEsT0FBcEIsRUFBNkI7QUFDekIsVUFBSSxDQUFDLEtBQUtVLFFBQUwsQ0FBY1YsT0FBZCxDQUFMLEVBQTZCO0FBQ3pCLGFBQUtXLGdCQUFMLENBQXNCWCxPQUF0QjtBQUNILE9BRkQsTUFFTztBQUNILGFBQUtZLG1CQUFMLENBQXlCWixPQUF6QjtBQUNIO0FBQ0o7OztXQUVELDBCQUFpQjtBQUNiLFdBQUthLFNBQUwsQ0FBZXhDLFNBQWYsQ0FBeUI4QixHQUF6QixDQUE2QixLQUFLVixvQkFBbEM7O0FBQ0EsV0FBS29CLFNBQUwsQ0FBZUMsUUFBZixHQUEwQixJQUExQjtBQUNIOzs7V0FFRCw4QkFBcUI7QUFDakIsVUFBSSxLQUFLQyxrQkFBTCxFQUFKLEVBQStCO0FBQzNCLGFBQUtGLFNBQUwsQ0FBZXhDLFNBQWYsQ0FBeUJHLE1BQXpCLENBQWdDLEtBQUtpQixvQkFBckM7O0FBQ0EsYUFBS29CLFNBQUwsQ0FBZUMsUUFBZixHQUEwQixLQUExQjtBQUNILE9BSEQsTUFHTztBQUNILGFBQUtFLGNBQUw7QUFDSDtBQUNKOzs7V0FFRCxnQ0FBdUI7QUFBQTs7QUFDbkIsV0FBS1IsVUFBTCxHQUFrQlMsS0FBSyxDQUFDQyxJQUFOLENBQVcsS0FBS25CLEtBQUwsQ0FBV29CLGdCQUFYLENBQTRCLEtBQUs5QixjQUFqQyxDQUFYLENBQWxCO0FBQ0EsV0FBS3dCLFNBQUwsR0FBaUIsS0FBS2QsS0FBTCxDQUFXOUIsYUFBWCxDQUF5QixLQUFLc0IscUJBQTlCLENBQWpCOztBQUVBLFdBQUtpQixVQUFMLENBQWdCWSxPQUFoQixDQUF3QixVQUFDcEIsT0FBRCxFQUFhO0FBQ2pDQSxRQUFBQSxPQUFPLENBQUN2QixnQkFBUixDQUF5QixPQUF6QixFQUFrQyxZQUFNO0FBQ3BDLGdCQUFJLENBQUM0QyxtQkFBTCxDQUF5QnJCLE9BQXpCOztBQUNBLGdCQUFJLENBQUNzQixrQkFBTCxDQUF3QixNQUFJLENBQUNkLFVBQTdCO0FBQ0gsU0FIRDtBQUlILE9BTEQ7QUFNSDs7O1dBR0QsNEJBQW1CO0FBQ2YsV0FBS1QsS0FBTCxDQUFXdEIsZ0JBQVgsQ0FBNEIsUUFBNUIsRUFBc0MsVUFBQzhDLEdBQUQsRUFBUztBQUMzQ0EsUUFBQUEsR0FBRyxDQUFDQyxjQUFKO0FBQ0gsT0FGRDs7QUFHQSxXQUFLQyxvQkFBTCxDQUEwQixLQUFLMUIsS0FBL0I7QUFDSDs7O1dBRUQsMkJBQWtCO0FBQUE7O0FBQ2QsV0FBS3VCLGtCQUFMOztBQUVBLFdBQUtkLFVBQUwsQ0FBZ0JZLE9BQWhCLENBQXdCLFVBQUNwQixPQUFELEVBQWE7QUFDakMsY0FBSSxDQUFDWSxtQkFBTCxDQUF5QlosT0FBekI7QUFDSCxPQUZEO0FBSUg7Ozs7OztBQU1MLGlFQUFlZCxhQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3hGcUJ3QztBQUNqQixpQkFBWUMsWUFBWixFQUEwQjtBQUFBOztBQUN0QixTQUFLQyxhQUFMLEdBQXFCRCxZQUFyQjtBQUNBLFNBQUtFLGtCQUFMLEdBQTBCLEtBQUtBLGtCQUFMLENBQXdCQyxJQUF4QixDQUE2QixJQUE3QixDQUExQjtBQUNIOzs7O1dBRUQsNEJBQW1CUCxHQUFuQixFQUF3QjtBQUNwQixVQUFJQSxHQUFHLENBQUNRLEdBQUosS0FBWSxRQUFoQixFQUEwQjtBQUN0QixhQUFLQyxLQUFMO0FBQ0g7QUFDSjs7O1dBRUQsNkJBQW9CO0FBQUE7O0FBQ2hCLFdBQUtKLGFBQUwsQ0FBbUIzRCxhQUFuQixDQUFpQyxzQkFBakMsRUFBeURRLGdCQUF6RCxDQUEwRSxPQUExRSxFQUFtRixZQUFNO0FBQ3JGLGFBQUksQ0FBQ3VELEtBQUw7QUFDSCxPQUZEOztBQUlBLFdBQUtKLGFBQUwsQ0FBbUJuRCxnQkFBbkIsQ0FBb0MsT0FBcEMsRUFBNkMsVUFBQzhDLEdBQUQsRUFBUztBQUNsRCxZQUFJQSxHQUFHLENBQUNVLE1BQUosQ0FBVzVELFNBQVgsQ0FBcUI2RCxRQUFyQixDQUE4QixZQUE5QixDQUFKLEVBQWlEO0FBQzdDLGVBQUksQ0FBQ0YsS0FBTDtBQUNIO0FBQ0osT0FKRDtBQUtIOzs7V0FFRCxnQkFBTztBQUNILFdBQUtKLGFBQUwsQ0FBbUJ2RCxTQUFuQixDQUE2QjhCLEdBQTdCLENBQWlDLFlBQWpDOztBQUNBbkMsTUFBQUEsUUFBUSxDQUFDUyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxLQUFLb0Qsa0JBQTFDO0FBQ0g7OztXQUVELGlCQUFRO0FBQ0osV0FBS0QsYUFBTCxDQUFtQnZELFNBQW5CLENBQTZCRyxNQUE3QixDQUFvQyxZQUFwQzs7QUFDQVIsTUFBQUEsUUFBUSxDQUFDbUUsbUJBQVQsQ0FBNkIsU0FBN0IsRUFBd0MsS0FBS04sa0JBQTdDO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNMO0FBR08sSUFBTU8sYUFBYjtBQUFBOztBQUFBOztBQUNJLCtCQUdHO0FBQUE7O0FBQUEsUUFGQ0Msb0JBRUQsUUFGQ0Esb0JBRUQ7QUFBQSxRQURDVixZQUNELFFBRENBLFlBQ0Q7O0FBQUE7O0FBQ0MsOEJBQU1BLFlBQU47QUFHQSxVQUFLVyxxQkFBTCxHQUE2QkQsb0JBQTdCO0FBQ0EsVUFBS0UsWUFBTCxHQUFvQixNQUFLWCxhQUFMLENBQW1CM0QsYUFBbkIsQ0FBaUMsT0FBakMsQ0FBcEI7QUFMRDtBQU1GOztBQVZMO0FBQUE7QUFBQSxXQWFJLDJCQUFrQjtBQUVkLFVBQU11RSxVQUFVLEdBQUcsRUFBbkI7QUFFQSxXQUFLQyxjQUFMLEdBQXNCeEIsS0FBSyxDQUFDQyxJQUFOLENBQVcsS0FBS3FCLFlBQUwsQ0FBa0JHLFFBQTdCLENBQXRCOztBQUNBLFdBQUtELGNBQUwsQ0FBb0JyQixPQUFwQixDQUE0QixVQUFDdUIsS0FBRCxFQUFXO0FBQ25DSCxRQUFBQSxVQUFVLENBQUNHLEtBQUssQ0FBQ0MsSUFBUCxDQUFWLEdBQXlCRCxLQUFLLENBQUNFLEtBQS9CO0FBQ0gsT0FGRDs7QUFJQSxhQUFPTCxVQUFQO0FBQ0g7QUF2Qkw7QUFBQTtBQUFBLFdBeUJJLDZCQUFvQjtBQUFBOztBQUNoQjs7QUFHQSxXQUFLWixhQUFMLENBQW1CbkQsZ0JBQW5CLENBQW9DLFFBQXBDLEVBQThDLFVBQUM4QyxHQUFELEVBQVM7QUFDbkRBLFFBQUFBLEdBQUcsQ0FBQ0MsY0FBSjs7QUFDQSxjQUFJLENBQUNjLHFCQUFMLENBQTJCLE1BQUksQ0FBQ1EsZUFBTCxFQUEzQjs7QUFDQSxjQUFJLENBQUNkLEtBQUw7QUFDSCxPQUpEO0FBS0g7QUFsQ0w7QUFBQTtBQUFBLFdBb0NJLGlCQUFRO0FBQ0o7O0FBQ0EsV0FBS08sWUFBTCxDQUFrQlEsS0FBbEI7QUFFSDtBQXhDTDs7QUFBQTtBQUFBLEVBQW1DckIsaURBQW5DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBRU8sSUFBTXNCLGNBQWI7QUFBQTs7QUFBQTs7QUFDSSwwQkFBWXJCLFlBQVosRUFBMEI7QUFBQTs7QUFBQTs7QUFDdEIsOEJBQU1BLFlBQU47QUFFQSxVQUFLc0IsYUFBTCxHQUFxQixNQUFLckIsYUFBTCxDQUFtQjNELGFBQW5CLENBQWlDLGVBQWpDLENBQXJCO0FBQ0EsVUFBS2lGLGtCQUFMLEdBQTBCLE1BQUt0QixhQUFMLENBQW1CM0QsYUFBbkIsQ0FBaUMscUJBQWpDLENBQTFCO0FBSnNCO0FBS3pCOztBQU5MO0FBQUE7QUFBQSxXQVFJLGNBQUtWLElBQUwsRUFBVztBQUNQLFdBQUswRixhQUFMLENBQW1CakUsR0FBbkIsR0FBeUJ6QixJQUFJLENBQUNLLEtBQTlCO0FBQ0EsV0FBS3FGLGFBQUwsQ0FBbUJoRSxHQUFuQixHQUF5QjFCLElBQUksQ0FBQ0csS0FBOUI7QUFDQSxXQUFLd0Ysa0JBQUwsQ0FBd0JuRSxXQUF4QixHQUFzQ3hCLElBQUksQ0FBQ0csS0FBM0M7O0FBQ0E7QUFDSDtBQWJMOztBQUFBO0FBQUEsRUFBb0NnRSxpREFBcEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDRnFCeUI7QUFDbkIseUJBR0dDLGlCQUhILEVBR3NCO0FBQUEsUUFGcEJDLEtBRW9CLFFBRnBCQSxLQUVvQjtBQUFBLFFBRHBCQyxRQUNvQixRQURwQkEsUUFDb0I7O0FBQUE7O0FBQ3BCLFNBQUtDLGNBQUwsR0FBc0JGLEtBQXRCO0FBQ0EsU0FBS0csU0FBTCxHQUFpQkYsUUFBakI7QUFDQSxTQUFLRyxVQUFMLEdBQWtCekYsUUFBUSxDQUFDQyxhQUFULENBQXVCbUYsaUJBQXZCLENBQWxCO0FBQ0Q7Ozs7V0FFRCxpQkFBUU0sT0FBUixFQUFpQjtBQUNmLFdBQUtELFVBQUwsQ0FBZ0JFLE1BQWhCLENBQXVCRCxPQUF2QjtBQUNEOzs7V0FFRCxxQkFBWUEsT0FBWixFQUFxQjtBQUNuQixXQUFLRCxVQUFMLENBQWdCRyxPQUFoQixDQUF3QkYsT0FBeEI7QUFDRDs7O1dBRUQsdUJBQWM7QUFBQTs7QUFFWixXQUFLSCxjQUFMLENBQW9CbkMsT0FBcEIsQ0FBNEIsVUFBQXlDLElBQUksRUFBSTtBQUNsQyxhQUFJLENBQUNMLFNBQUwsQ0FBZUssSUFBZjtBQUNELE9BRkQ7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN2QmtCQztBQUNqQiwwQkFHRztBQUFBLFFBRkNDLGdCQUVELFFBRkNBLGdCQUVEO0FBQUEsUUFEQ0MsZUFDRCxRQURDQSxlQUNEOztBQUFBOztBQUNDLFNBQUtDLFNBQUwsR0FBaUJGLGdCQUFqQjtBQUNBLFNBQUtHLFFBQUwsR0FBZ0JGLGVBQWhCO0FBQ0g7Ozs7V0FFRCx1QkFBYztBQUVWLGFBQU87QUFDSHBCLFFBQUFBLElBQUksRUFBRSxLQUFLcUIsU0FBTCxDQUFlbEYsV0FEbEI7QUFFSG9GLFFBQUFBLEdBQUcsRUFBRSxLQUFLRCxRQUFMLENBQWNuRjtBQUZoQixPQUFQO0FBS0g7OztXQUVELDRCQUtBO0FBQUEsVUFKSTZELElBSUosU0FKSUEsSUFJSjtBQUFBLFVBSEl1QixHQUdKLFNBSElBLEdBR0o7QUFFSSxXQUFLRixTQUFMLENBQWVsRixXQUFmLEdBQTZCNkQsSUFBN0I7QUFDQSxXQUFLc0IsUUFBTCxDQUFjbkYsV0FBZCxHQUE0Qm9GLEdBQTVCO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTU8sWUFBWSxHQUFHLENBQUM7QUFDckJoSCxFQUFBQSxLQUFLLEVBQUUsaUJBRGM7QUFFckJFLEVBQUFBLEtBQUssRUFBRXlHLHdEQUFjQTtBQUZBLENBQUQsRUFJeEI7QUFDSTNHLEVBQUFBLEtBQUssRUFBRSxhQURYO0FBRUlFLEVBQUFBLEtBQUssRUFBRXdHLG9EQUFVQTtBQUZyQixDQUp3QixFQVF4QjtBQUNJMUcsRUFBQUEsS0FBSyxFQUFFLFdBRFg7QUFFSUUsRUFBQUEsS0FBSyxFQUFFMEcsa0RBQVNBO0FBRnBCLENBUndCLEVBWXhCO0FBQ0k1RyxFQUFBQSxLQUFLLEVBQUUsYUFEWDtBQUVJRSxFQUFBQSxLQUFLLEVBQUUyRyxvREFBV0E7QUFGdEIsQ0Fad0IsRUFnQnhCO0FBQ0k3RyxFQUFBQSxLQUFLLEVBQUUsYUFEWDtBQUVJRSxFQUFBQSxLQUFLLEVBQUU0RyxvREFBVUE7QUFGckIsQ0FoQndCLEVBb0J4QjtBQUNJOUcsRUFBQUEsS0FBSyxFQUFFLFVBRFg7QUFFSUUsRUFBQUEsS0FBSyxFQUFFNkcsaURBQU9BO0FBRmxCLENBcEJ3QixDQUFyQjtBQTBCQSxJQUFNRSxZQUFZLEdBQUc7QUFDeEJDLEVBQUFBLFlBQVksRUFBRSxPQURVO0FBRXhCdEYsRUFBQUEsYUFBYSxFQUFFLGNBRlM7QUFHeEJFLEVBQUFBLG9CQUFvQixFQUFFLGVBSEU7QUFJeEJFLEVBQUFBLG1CQUFtQixFQUFFLHVCQUpHO0FBS3hCRSxFQUFBQSxlQUFlLEVBQUUsd0JBTE87QUFNeEJFLEVBQUFBLFVBQVUsRUFBRTtBQU5ZLENBQXJCO0FBU0EsSUFBTTRDLFFBQVEsR0FBRztBQUNwQm1DLEVBQUFBLFVBQVUsRUFBRTdHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FEUTtBQUVwQjZHLEVBQUFBLFlBQVksRUFBRTlHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixzQkFBdkIsQ0FGTTtBQUdwQjhHLEVBQUFBLGlCQUFpQixFQUFFL0csUUFBUSxDQUFDQyxhQUFULENBQXVCLHlCQUF2QixDQUhDO0FBSXBCK0csRUFBQUEsYUFBYSxFQUFFaEgsUUFBUSxDQUFDQyxhQUFULENBQXVCLHVCQUF2QjtBQUpLLENBQWpCOzs7Ozs7Ozs7OztBQzFDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUdBLElBQU1nSCxTQUFTLEdBQUdqSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsMEJBQXZCLENBQWxCO0FBQ0EsSUFBTWlILFFBQVEsR0FBR0QsU0FBUyxDQUFDaEgsYUFBVixDQUF3QixPQUF4QixDQUFqQjtBQUNBLElBQU1rSCxRQUFRLEdBQUduSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsc0JBQXZCLENBQWpCO0FBQ0EsSUFBTW1ILE9BQU8sR0FBR0QsUUFBUSxDQUFDbEgsYUFBVCxDQUF1QixPQUF2QixDQUFoQjtBQUVBLElBQU1vSCxlQUFlLEdBQUdySCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQXhCO0FBQ0EsSUFBTXFILGNBQWMsR0FBR3RILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBdkI7QUFHQSxJQUFNc0gsV0FBVyxHQUFHdkgsUUFBUSxDQUFDQyxhQUFULENBQXVCLGdCQUF2QixDQUFwQjtBQUNBLElBQU11SCxZQUFZLEdBQUd4SCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQXJCO0FBQ0EsSUFBTXdILGNBQWMsR0FBR3pILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix3QkFBdkIsQ0FBdkI7QUFDQSxJQUFNeUgscUJBQXFCLEdBQUcxSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsK0JBQXZCLENBQTlCLEVBR0E7O0FBRUEsU0FBUzBILFVBQVQsQ0FBb0I5QixJQUFwQixFQUEwQjtBQUN0QixNQUFNK0IsSUFBSSxHQUFHLElBQUl2SSwyREFBSixDQUFTO0FBQ2xCRSxJQUFBQSxJQUFJLEVBQUVzRyxJQURZO0FBRWxCckcsSUFBQUEsV0FBVyxFQUFFLHFCQUFDRCxJQUFEO0FBQUEsYUFBVXNJLGdCQUFnQixDQUFDQyxJQUFqQixDQUFzQnZJLElBQXRCLENBQVY7QUFBQTtBQUZLLEdBQVQsRUFHVix1QkFIVSxDQUFiO0FBSUEsTUFBTVEsV0FBVyxHQUFHNkgsSUFBSSxDQUFDRyxZQUFMLEVBQXBCO0FBQ0EsU0FBT2hJLFdBQVA7QUFDSCxFQUVEOzs7QUFFQSxJQUFNaUksWUFBWSxHQUFHLElBQUk1RCx1RUFBSixDQUFrQjtBQUNuQ1QsRUFBQUEsWUFBWSxFQUFFd0QsUUFEcUI7QUFFbkM5QyxFQUFBQSxvQkFBb0IsRUFBRSw4QkFBQ3dCLElBQUQsRUFBVTtBQUM1Qm9DLElBQUFBLGtCQUFrQixDQUFDQyxXQUFuQixDQUErQlAsVUFBVSxDQUFDOUIsSUFBRCxDQUF6QztBQUNIO0FBSmtDLENBQWxCLENBQXJCO0FBUUEsSUFBTXNDLFFBQVEsR0FBRyxJQUFJckMsK0RBQUosQ0FBYTtBQUMxQkMsRUFBQUEsZ0JBQWdCLEVBQUV3QixXQURRO0FBRTFCdkIsRUFBQUEsZUFBZSxFQUFFd0I7QUFGUyxDQUFiLENBQWpCO0FBS0EsSUFBTVksYUFBYSxHQUFHLElBQUloRSx1RUFBSixDQUFrQjtBQUNwQ0MsRUFBQUEsb0JBQW9CLEVBQUUsb0NBR2hCO0FBQUEsUUFGRk8sSUFFRSxRQUZGQSxJQUVFO0FBQUEsUUFERnVCLEdBQ0UsUUFERkEsR0FDRTtBQUNGZ0MsSUFBQUEsUUFBUSxDQUFDRSxXQUFULENBQXFCO0FBQ2pCekQsTUFBQUEsSUFBSSxFQUFKQSxJQURpQjtBQUVqQnVCLE1BQUFBLEdBQUcsRUFBSEE7QUFGaUIsS0FBckI7QUFLQW1DLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZM0QsSUFBWixFQUFrQnVCLEdBQWxCO0FBQ0gsR0FYbUM7QUFZcEN4QyxFQUFBQSxZQUFZLEVBQUVzRDtBQVpzQixDQUFsQixDQUF0QjtBQWlCQSxJQUFNWSxnQkFBZ0IsR0FBRyxJQUFJN0MseUVBQUosQ0FBbUJOLG9FQUFuQixDQUF6QjtBQUVBLElBQU11RCxrQkFBa0IsR0FBRyxJQUFJOUMsOERBQUosQ0FBWTtBQUNuQ0UsRUFBQUEsS0FBSyxFQUFFcUIsNkRBRDRCO0FBRW5DcEIsRUFBQUEsUUFBUSxFQUFFLGtCQUFDTyxJQUFELEVBQVU7QUFFaEJvQyxJQUFBQSxrQkFBa0IsQ0FBQ08sT0FBbkIsQ0FBMkJiLFVBQVUsQ0FBQzlCLElBQUQsQ0FBckM7QUFFSDtBQU5rQyxDQUFaLEVBT3hCLGVBUHdCLENBQTNCO0FBV0F5QixjQUFjLENBQUM3RyxnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxZQUFNO0FBQzNDZ0ksRUFBQUEsZ0JBQWdCLENBQUNDLGVBQWpCO0FBQ0FWLEVBQUFBLFlBQVksQ0FBQ0YsSUFBYjtBQUNILENBSEQ7QUFLQVQsZUFBZSxDQUFDNUcsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLFlBQU07QUFDNUMsTUFBTWtJLE9BQU8sR0FBR1IsUUFBUSxDQUFDUyxXQUFULEVBQWhCO0FBQ0FuQixFQUFBQSxjQUFjLENBQUM1QyxLQUFmLEdBQXVCOEQsT0FBTyxDQUFDL0QsSUFBL0I7QUFDQThDLEVBQUFBLHFCQUFxQixDQUFDN0MsS0FBdEIsR0FBOEI4RCxPQUFPLENBQUN4QyxHQUF0QztBQUNBMEMsRUFBQUEsaUJBQWlCLENBQUNILGVBQWxCO0FBQ0FOLEVBQUFBLGFBQWEsQ0FBQ04sSUFBZDtBQUVILENBUEQsR0FXQTs7QUFDQSxJQUFNZSxpQkFBaUIsR0FBRyxJQUFJM0gsb0VBQUosQ0FBa0J5Riw2REFBbEIsRUFBZ0NPLFFBQWhDLENBQTFCO0FBQ0EyQixpQkFBaUIsQ0FBQ0MsZ0JBQWxCO0FBRUEsSUFBTUwsZ0JBQWdCLEdBQUcsSUFBSXZILG9FQUFKLENBQWtCeUYsNkRBQWxCLEVBQWdDUyxPQUFoQyxDQUF6QjtBQUNBcUIsZ0JBQWdCLENBQUNLLGdCQUFqQjtBQUVBYixrQkFBa0IsQ0FBQ2MsV0FBbkIsSUFJQTs7QUFFQWxCLGdCQUFnQixDQUFDbUIsaUJBQWpCO0FBRUFaLGFBQWEsQ0FBQ1ksaUJBQWQ7QUFFQWhCLFlBQVksQ0FBQ2dCLGlCQUFiLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8teS8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLXkvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovLy15Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLXkvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovLy15Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLXkvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovLy15Ly4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vLXkvLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy15Ly4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8teS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8teS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vLXkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8teS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy15L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLXkvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vLXkvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2FyZCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICBoYW5kbGVDbGlja1xyXG4gICAgfSwgY2FyZFNlbGVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSBkYXRhLnRpdGxlO1xyXG4gICAgICAgIHRoaXMuX2ltYWdlID0gZGF0YS5pbWFnZTtcclxuXHJcbiAgICAgICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUNsaWNrID0gaGFuZGxlQ2xpY2s7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIF9nZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKVxyXG4gICAgICAgICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKCcuZGVzdGluYXRpb24nKS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGNhcmRFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIF9oYW5kbGVMaWtlKCkge1xyXG4gICAgICAgIHRoaXMuX2xpa2VCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnZGVzdGluYXRpb25fX2xpa2UtYnV0dG9uX2FjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIF9oYW5kbGVEZWxldGUoKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX2xpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9oYW5kbGVMaWtlKCkpO1xyXG5cclxuICAgICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXN0aW5hdGlvbl9faW1hZ2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuX2hhbmRsZUNsaWNrKHtcclxuICAgICAgICAgICAgdGl0bGU6IHRoaXMuX3RpdGxlLFxyXG4gICAgICAgICAgICBpbWFnZTogdGhpcy5faW1hZ2VcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmRlc3RpbmF0aW9uX19kZWxldGUtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9oYW5kbGVEZWxldGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVDYXJkKCkge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuX2xpa2VCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXN0aW5hdGlvbl9fbGlrZS1idXR0b24nKTtcclxuICAgICAgICBjb25zdCBjYXJkRWxlbWVudEltYWdlID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzdGluYXRpb25fX2ltYWdlJyk7XHJcblxyXG4gICAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmRlc3RpbmF0aW9uX190aXRsZScpLnRleHRDb250ZW50ID0gdGhpcy5fdGl0bGU7XHJcblxyXG4gICAgICAgIGNhcmRFbGVtZW50SW1hZ2Uuc3JjID0gdGhpcy5faW1hZ2U7XHJcbiAgICAgICAgY2FyZEVsZW1lbnRJbWFnZS5hbHQgPSB0aGlzLl90aXRsZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7IiwiY2xhc3MgRm9ybVZhbGlkYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybUVsKSB7XHJcbiAgICAgICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IHNldHRpbmdzLmlucHV0U2VsZWN0b3I7XHJcbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcclxuICAgICAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcztcclxuICAgICAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBzZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3M7XHJcbiAgICAgICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XHJcblxyXG4gICAgICAgIHRoaXMuX2Zvcm0gPSBmb3JtRWw7XHJcbiAgICB9XHJcblxyXG4gICAgX2FkZEVycm9yTWVzc2FnZShpbnB1dEVsKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JFbCA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbC5pZH0tZXJyb3JgKTtcclxuICAgICAgICBpbnB1dEVsLmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgICAgICBlcnJvckVsLmlubmVyVGV4dCA9IGlucHV0RWwudmFsaWRhdGlvbk1lc3NhZ2U7XHJcbiAgICAgICAgZXJyb3JFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW1vdmVFcnJvck1lc3NhZ2UoaW5wdXRFbCkge1xyXG4gICAgICAgIGNvbnN0IGVycm9yRWwgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9LWVycm9yYCk7XHJcbiAgICAgICAgaW5wdXRFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICAgICAgZXJyb3JFbC5pbm5lclRleHQgPSAnJztcclxuICAgICAgICBlcnJvckVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgX2lzVmFsaWQoaW5wdXRFbCkge1xyXG4gICAgICAgIHJldHVybiBpbnB1dEVsLnZhbGlkaXR5LnZhbGlkO1xyXG4gICAgfVxyXG5cclxuICAgIF9jaGVja0Zvcm1WYWxpZGl0eSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5wdXRMaXN0LmV2ZXJ5KGlucHV0RWwgPT4gdGhpcy5faXNWYWxpZChpbnB1dEVsKSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc1ZhbGlkKGlucHV0RWwpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZEVycm9yTWVzc2FnZShpbnB1dEVsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVFcnJvck1lc3NhZ2UoaW5wdXRFbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9kaXNhYmxlQnV0dG9uKCkge1xyXG4gICAgICAgIHRoaXMuX2J1dHRvbkVsLmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICAgICAgdGhpcy5fYnV0dG9uRWwuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIF90b2dnbGVCdXR0b25TdGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fY2hlY2tGb3JtVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9idXR0b25FbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICAgICAgICB0aGlzLl9idXR0b25FbC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Rpc2FibGVCdXR0b24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX3NldHVwRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcikpO1xyXG4gICAgICAgIHRoaXMuX2J1dHRvbkVsID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWwpID0+IHtcclxuICAgICAgICAgICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKHRoaXMuX2lucHV0TGlzdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBlbmFibGVWYWxpZGF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2dCkgPT4ge1xyXG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9zZXR1cEV2ZW50TGlzdGVuZXJzKHRoaXMuX2Zvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0VmFsaWRhdGlvbigpIHtcclxuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVFcnJvck1lc3NhZ2UoaW5wdXRFbClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0b3I7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xyXG4gICAgY29uc3RydWN0b3IocG9wdXBFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBFbGVtZW50ID0gcG9wdXBFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUVzY2FwZUNsb3NlID0gdGhpcy5faGFuZGxlRXNjYXBlQ2xvc2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBfaGFuZGxlRXNjYXBlQ2xvc2UoZXZ0KSB7XHJcbiAgICAgICAgaWYgKGV2dC5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Nsb3NlLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWxfb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCkge1xyXG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbF9vcGVuJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUVzY2FwZUNsb3NlKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxfb3BlbicpO1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NhcGVDbG9zZSk7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgaGFuZGxlRm9ybVN1Ym1pc3Npb24sXHJcbiAgICAgICAgcG9wdXBFbGVtZW50XHJcbiAgICB9KSB7XHJcbiAgICAgICAgc3VwZXIocG9wdXBFbGVtZW50KTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXNzaW9uID0gaGFuZGxlRm9ybVN1Ym1pc3Npb247XHJcbiAgICAgICAgdGhpcy5fZm9ybUVsZW1lbnQgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgX2dldElucHV0VmFsdWVzKCkge1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtVmFsdWVzID0ge307XHJcblxyXG4gICAgICAgIHRoaXMuX2lucHV0RWxlbWVudHMgPSBBcnJheS5mcm9tKHRoaXMuX2Zvcm1FbGVtZW50LmVsZW1lbnRzKTtcclxuICAgICAgICB0aGlzLl9pbnB1dEVsZW1lbnRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1WYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZvcm1WYWx1ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWlzc2lvbih0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5fZm9ybUVsZW1lbnQucmVzZXQoKTtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcHVwRWxlbWVudCkge1xyXG4gICAgICAgIHN1cGVyKHBvcHVwRWxlbWVudCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2ltYWdlRWxlbWVudCA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2ltYWdlJyk7XHJcbiAgICAgICAgdGhpcy5faW1hZ2VFbGVtZW50VGl0bGUgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19pbWFnZS10aXRsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX2ltYWdlRWxlbWVudC5zcmMgPSBkYXRhLmltYWdlO1xyXG4gICAgICAgIHRoaXMuX2ltYWdlRWxlbWVudC5hbHQgPSBkYXRhLnRpdGxlO1xyXG4gICAgICAgIHRoaXMuX2ltYWdlRWxlbWVudFRpdGxlLnRleHRDb250ZW50ID0gZGF0YS50aXRsZTtcclxuICAgICAgICBzdXBlci5vcGVuKCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcclxuICBjb25zdHJ1Y3Rvcih7XHJcbiAgICBpdGVtcyxcclxuICAgIHJlbmRlcmVyXHJcbiAgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX3JlbmRlcmVkSXRlbXMgPSBpdGVtcztcclxuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIGFkZEl0ZW0oZWxlbWVudCkge1xyXG4gICAgdGhpcy5fY29udGFpbmVyLmFwcGVuZChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHByZXBlbmRJdGVtKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVySXRlbXMoKSB7XHJcblxyXG4gICAgdGhpcy5fcmVuZGVyZWRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlcihpdGVtKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcclxuICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICB1c2VyTmFtZVNlbGVjdG9yLFxyXG4gICAgICAgIHVzZXJKb2JTZWxlY3RvclxyXG4gICAgfSkge1xyXG4gICAgICAgIHRoaXMuX3VzZXJOYW1lID0gdXNlck5hbWVTZWxlY3RvcjtcclxuICAgICAgICB0aGlzLl91c2VySm9iID0gdXNlckpvYlNlbGVjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJJbmZvKCkge1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLl91c2VyTmFtZS50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgam9iOiB0aGlzLl91c2VySm9iLnRleHRDb250ZW50LFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXNlckluZm8oe1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgam9iXHJcbiAgICB9KVxyXG5cclxuICAgIHtcclxuXHJcbiAgICAgICAgdGhpcy5fdXNlck5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX3VzZXJKb2IudGV4dENvbnRlbnQgPSBqb2I7XHJcbiAgICB9XHJcblxyXG5cclxufSIsImltcG9ydCB6aW9uQ2FueW9uIGZyb20gXCIuLi9pbWFnZXMvemlvbi1jYW55b24uanBnXCI7XHJcbmltcG9ydCB5b3NlbWl0ZVZhbGxleSBmcm9tIFwiLi4vaW1hZ2VzL1lvc2VtaXRlLXZhbGxleS5qcGdcIjtcclxuaW1wb3J0IHRlbGx1cmlkZSBmcm9tIFwiLi4vaW1hZ2VzL3RlbGx1cmlkZS5qcGdcIjtcclxuaW1wb3J0IHllbGxvd3N0b25lIGZyb20gXCIuLi9pbWFnZXMveWVsbG93c3RvbmUuanBnXCI7XHJcbmltcG9ydCBiYXNzSGFyYm9yIGZyb20gXCIuLi9pbWFnZXMvYmFzcy1oYXJib3IuanBnXCI7XHJcbmltcG9ydCBiaWdCZW5kIGZyb20gXCIuLi9pbWFnZXMvYmlnLWJlbmQuanBnXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gW3tcclxuICAgICAgICB0aXRsZTogXCJZb3NlbWl0ZSBWYWxsZXlcIixcclxuICAgICAgICBpbWFnZTogeW9zZW1pdGVWYWxsZXlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiWmlvbiBDYW55b25cIixcclxuICAgICAgICBpbWFnZTogemlvbkNhbnlvblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJUZWxsdXJpZGVcIixcclxuICAgICAgICBpbWFnZTogdGVsbHVyaWRlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlllbGxvd3N0b25lXCIsXHJcbiAgICAgICAgaW1hZ2U6IHllbGxvd3N0b25lXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkJhc3MgSGFyYm9yXCIsXHJcbiAgICAgICAgaW1hZ2U6IGJhc3NIYXJib3JcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQmlnIEJlbmRcIixcclxuICAgICAgICBpbWFnZTogYmlnQmVuZFxyXG4gICAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1TZXR0aW5ncyA9IHtcclxuICAgIGZvcm1TZWxlY3RvcjogXCIuZm9ybVwiLFxyXG4gICAgaW5wdXRTZWxlY3RvcjogXCIuZm9ybV9faW5wdXRcIixcclxuICAgIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5mb3JtX19idXR0b25cIixcclxuICAgIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwiZm9ybV9fYnV0dG9uX2Rpc2FibGVkXCIsXHJcbiAgICBpbnB1dEVycm9yQ2xhc3M6IFwiZm9ybV9faW5wdXRfdHlwZV9lcnJvclwiLFxyXG4gICAgZXJyb3JDbGFzczogXCJmb3JtX19lcnJvcl92aXNpYmxlXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlbGVtZW50cyA9IHtcclxuICAgIGltYWdlUG9wdXA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfdHlwZV9pbWFnZVwiKSxcclxuICAgIGZvcm1Qb3B1cEFkZDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF90eXBlX2FkZC1jYXJkXCIpLFxyXG4gICAgcHJvZmlsZUVkaXRCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYnV0dG9uIGJ1dHRvblwiKSxcclxuICAgIGFkZENhcmRCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fY2FyZC1idXR0b25cIiksXHJcblxyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgZWxlbWVudHMsXHJcbiAgICBmb3JtU2V0dGluZ3MsXHJcbiAgICBpbml0aWFsQ2FyZHNcclxufSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzLmpzXCI7XHJcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBQb3B1cFdpdGhGb3JtXHJcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgUG9wdXBXaXRoSW1hZ2VcclxufSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcclxuXHJcblxyXG5jb25zdCBlZGl0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfdHlwZV9lZGl0LXByb2ZpbGUnKTtcclxuY29uc3QgZWRpdEZvcm0gPSBlZGl0TW9kYWwucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcclxuY29uc3QgYWRkTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfdHlwZV9hZGQtY2FyZCcpO1xyXG5jb25zdCBhZGRGb3JtID0gYWRkTW9kYWwucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcclxuXHJcbmNvbnN0IGVkaXRNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19idXR0b24nKTtcclxuY29uc3QgYWRkTW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fY2FyZC1idXR0b24nKTtcclxuXHJcblxyXG5jb25zdCBwcm9maWxlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19uYW1lJyk7XHJcbmNvbnN0IHByb2ZpbGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19hYm91dC1tZScpO1xyXG5jb25zdCBtb2RhbE5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19pbnB1dF90eXBlX25hbWUnKTtcclxuY29uc3QgbW9kYWxEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2lucHV0X3R5cGVfZGVzY3JpcHRpb24nKTtcclxuXHJcblxyXG4vL2Z1bmN0aW9uc1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZChpdGVtKSB7XHJcbiAgICBjb25zdCBjYXJkID0gbmV3IENhcmQoe1xyXG4gICAgICAgIGRhdGE6IGl0ZW0sXHJcbiAgICAgICAgaGFuZGxlQ2xpY2s6IChkYXRhKSA9PiBjYXJkSW1hZ2VQcmV2aWV3Lm9wZW4oZGF0YSlcclxuICAgIH0sICcjZGVzdGluYXRpb24tdGVtcGxhdGUnKTtcclxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY2FyZC5nZW5lcmF0ZUNhcmQoKTtcclxuICAgIHJldHVybiBjYXJkRWxlbWVudDtcclxufVxyXG5cclxuLy8gY2xhc3MgaW5zdGFuY2VzIGZvciBQb3B1cHNcclxuXHJcbmNvbnN0IGFkZENhcmRQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcclxuICAgIHBvcHVwRWxlbWVudDogYWRkTW9kYWwsXHJcbiAgICBoYW5kbGVGb3JtU3VibWlzc2lvbjogKGl0ZW0pID0+IHtcclxuICAgICAgICByZW5kZXJJbml0aWFsQ2FyZHMucHJlcGVuZEl0ZW0oY3JlYXRlQ2FyZChpdGVtKSk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbmNvbnN0IHVzZXJkYXRhID0gbmV3IFVzZXJJbmZvKHtcclxuICAgIHVzZXJOYW1lU2VsZWN0b3I6IHByb2ZpbGVOYW1lLFxyXG4gICAgdXNlckpvYlNlbGVjdG9yOiBwcm9maWxlVGl0bGVcclxufSk7XHJcblxyXG5jb25zdCBlZGl0Rm9ybVBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xyXG4gICAgaGFuZGxlRm9ybVN1Ym1pc3Npb246ICh7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBqb2JcclxuICAgIH0pID0+IHtcclxuICAgICAgICB1c2VyZGF0YS5zZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIGpvYlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhuYW1lLCBqb2IpXHJcbiAgICB9LFxyXG4gICAgcG9wdXBFbGVtZW50OiBlZGl0TW9kYWwsXHJcblxyXG59KTtcclxuXHJcblxyXG5jb25zdCBjYXJkSW1hZ2VQcmV2aWV3ID0gbmV3IFBvcHVwV2l0aEltYWdlKGVsZW1lbnRzLmltYWdlUG9wdXApO1xyXG5cclxuY29uc3QgcmVuZGVySW5pdGlhbENhcmRzID0gbmV3IFNlY3Rpb24oe1xyXG4gICAgaXRlbXM6IGluaXRpYWxDYXJkcyxcclxuICAgIHJlbmRlcmVyOiAoaXRlbSkgPT4ge1xyXG5cclxuICAgICAgICByZW5kZXJJbml0aWFsQ2FyZHMuYWRkSXRlbShjcmVhdGVDYXJkKGl0ZW0pKTtcclxuXHJcbiAgICB9XHJcbn0sIFwiLmRlc3RpbmF0aW9uc1wiKTtcclxuXHJcblxyXG5cclxuYWRkTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBhZGRGb3JtVmFsaWRhdG9yLnJlc2V0VmFsaWRhdGlvbigpO1xyXG4gICAgYWRkQ2FyZFBvcHVwLm9wZW4oKTtcclxufSk7XHJcblxyXG5lZGl0TW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBnZXREYXRhID0gdXNlcmRhdGEuZ2V0VXNlckluZm8oKTtcclxuICAgIG1vZGFsTmFtZUlucHV0LnZhbHVlID0gZ2V0RGF0YS5uYW1lO1xyXG4gICAgbW9kYWxEZXNjcmlwdGlvbklucHV0LnZhbHVlID0gZ2V0RGF0YS5qb2I7XHJcbiAgICBlZGl0Rm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcclxuICAgIGVkaXRGb3JtUG9wdXAub3BlbigpO1xyXG5cclxufSk7XHJcblxyXG5cclxuXHJcbi8vIGNsYXNzIGluc3RhbmNlcyBhbmQgaW5pdGlhbGl6YXRpb25zIGZvciB2YWxpZGF0aW9uXHJcbmNvbnN0IGVkaXRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoZm9ybVNldHRpbmdzLCBlZGl0Rm9ybSk7XHJcbmVkaXRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbmNvbnN0IGFkZEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihmb3JtU2V0dGluZ3MsIGFkZEZvcm0pO1xyXG5hZGRGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbnJlbmRlckluaXRpYWxDYXJkcy5yZW5kZXJJdGVtcygpO1xyXG5cclxuXHJcblxyXG4vL2NsYXNzIGluaXRpYWxpemF0aW9ucyBmb3Igb3BlbiBhbmQgY2xvc2luZyBwb3B1cHNcclxuXHJcbmNhcmRJbWFnZVByZXZpZXcuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmVkaXRGb3JtUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmFkZENhcmRQb3B1cC5zZXRFdmVudExpc3RlbmVycygpOyJdLCJuYW1lcyI6WyJDYXJkIiwiY2FyZFNlbGVjdG9yIiwiZGF0YSIsImhhbmRsZUNsaWNrIiwiX3RpdGxlIiwidGl0bGUiLCJfaW1hZ2UiLCJpbWFnZSIsIl9jYXJkU2VsZWN0b3IiLCJfaGFuZGxlQ2xpY2siLCJjYXJkRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfbGlrZUJ1dHRvbiIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIl9lbGVtZW50IiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9oYW5kbGVMaWtlIiwiX2hhbmRsZURlbGV0ZSIsIl9nZXRUZW1wbGF0ZSIsImNhcmRFbGVtZW50SW1hZ2UiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJ0ZXh0Q29udGVudCIsInNyYyIsImFsdCIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm1FbCIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtIiwiaW5wdXRFbCIsImVycm9yRWwiLCJpZCIsImFkZCIsImlubmVyVGV4dCIsInZhbGlkYXRpb25NZXNzYWdlIiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9pbnB1dExpc3QiLCJldmVyeSIsIl9pc1ZhbGlkIiwiX2FkZEVycm9yTWVzc2FnZSIsIl9yZW1vdmVFcnJvck1lc3NhZ2UiLCJfYnV0dG9uRWwiLCJkaXNhYmxlZCIsIl9jaGVja0Zvcm1WYWxpZGl0eSIsIl9kaXNhYmxlQnV0dG9uIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3RvZ2dsZUJ1dHRvblN0YXRlIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJfc2V0dXBFdmVudExpc3RlbmVycyIsIlBvcHVwIiwicG9wdXBFbGVtZW50IiwiX3BvcHVwRWxlbWVudCIsIl9oYW5kbGVFc2NhcGVDbG9zZSIsImJpbmQiLCJrZXkiLCJjbG9zZSIsInRhcmdldCIsImNvbnRhaW5zIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlBvcHVwV2l0aEZvcm0iLCJoYW5kbGVGb3JtU3VibWlzc2lvbiIsIl9oYW5kbGVGb3JtU3VibWlzc2lvbiIsIl9mb3JtRWxlbWVudCIsImZvcm1WYWx1ZXMiLCJfaW5wdXRFbGVtZW50cyIsImVsZW1lbnRzIiwiaW5wdXQiLCJuYW1lIiwidmFsdWUiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJyZXNldCIsIlBvcHVwV2l0aEltYWdlIiwiX2ltYWdlRWxlbWVudCIsIl9pbWFnZUVsZW1lbnRUaXRsZSIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfcmVuZGVyZWRJdGVtcyIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJlbGVtZW50IiwiYXBwZW5kIiwicHJlcGVuZCIsIml0ZW0iLCJVc2VySW5mbyIsInVzZXJOYW1lU2VsZWN0b3IiLCJ1c2VySm9iU2VsZWN0b3IiLCJfdXNlck5hbWUiLCJfdXNlckpvYiIsImpvYiIsInppb25DYW55b24iLCJ5b3NlbWl0ZVZhbGxleSIsInRlbGx1cmlkZSIsInllbGxvd3N0b25lIiwiYmFzc0hhcmJvciIsImJpZ0JlbmQiLCJpbml0aWFsQ2FyZHMiLCJmb3JtU2V0dGluZ3MiLCJmb3JtU2VsZWN0b3IiLCJpbWFnZVBvcHVwIiwiZm9ybVBvcHVwQWRkIiwicHJvZmlsZUVkaXRCdXR0b24iLCJhZGRDYXJkQnV0dG9uIiwiZWRpdE1vZGFsIiwiZWRpdEZvcm0iLCJhZGRNb2RhbCIsImFkZEZvcm0iLCJlZGl0TW9kYWxCdXR0b24iLCJhZGRNb2RhbEJ1dHRvbiIsInByb2ZpbGVOYW1lIiwicHJvZmlsZVRpdGxlIiwibW9kYWxOYW1lSW5wdXQiLCJtb2RhbERlc2NyaXB0aW9uSW5wdXQiLCJjcmVhdGVDYXJkIiwiY2FyZCIsImNhcmRJbWFnZVByZXZpZXciLCJvcGVuIiwiZ2VuZXJhdGVDYXJkIiwiYWRkQ2FyZFBvcHVwIiwicmVuZGVySW5pdGlhbENhcmRzIiwicHJlcGVuZEl0ZW0iLCJ1c2VyZGF0YSIsImVkaXRGb3JtUG9wdXAiLCJzZXRVc2VySW5mbyIsImNvbnNvbGUiLCJsb2ciLCJhZGRJdGVtIiwiYWRkRm9ybVZhbGlkYXRvciIsInJlc2V0VmFsaWRhdGlvbiIsImdldERhdGEiLCJnZXRVc2VySW5mbyIsImVkaXRGb3JtVmFsaWRhdG9yIiwiZW5hYmxlVmFsaWRhdGlvbiIsInJlbmRlckl0ZW1zIiwic2V0RXZlbnRMaXN0ZW5lcnMiXSwic291cmNlUm9vdCI6IiJ9