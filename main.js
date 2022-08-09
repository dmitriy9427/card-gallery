(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_handleEscClose",(function(e){"Escape"===e.key&&r.close()})),t(this,"_handleByOverlayClose",(function(e){e.target.classList.contains("popup_opened")&&r.close()})),this._popup=document.querySelector(e)}var r,o;return r=n,(o=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose),document.addEventListener("click",this._handleByOverlayClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose),document.removeEventListener("click",this._handleByOverlayClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(){return e.close()}))}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(){return i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=a(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},i.apply(this,arguments)}function a(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function u(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return s(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(p,e);var t,n,r,a,f=(r=p,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(r);if(a){var n=l(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u(this,e)});function p(e,t){var n,r,o,i,a=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),i=function(){return n._formValues={},n._formInputs.forEach((function(e){return n._formValues[e.name]=e.value})),n._formValues},(o="_getInputValues")in(r=s(n=f.call(this,e)))?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,n._handleFormSubmit=a,n._form=n._popup.querySelector(".popup__form"),n._formInputs=n._form.querySelectorAll(".popup__input"),n._saveBtn=n._form.querySelector(".popup__save-btn"),n}return t=p,(n=[{key:"changeSubmitHandler",value:function(e){this._handleFormSubmit=e}},{key:"close",value:function(){i(l(p.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e){this._saveBtn.textContent=e?"Сохранение...":"Сохранить"}},{key:"setEventListeners",value:function(){var e=this;i(l(p.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),p}(n);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=_(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function _(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function b(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=document.querySelector(".popup__open-image"),t._name=document.querySelector(".popup__image-caption"),t}return t=a,(n=[{key:"open",value:function(e,t){h(m(a.prototype),"open",this).call(this),this._image.src=e,this._image.alt=t,this._name.textContent=t,console.log(this._image.src)}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(n);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=S(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function S(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function E(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"setFormSubmitHandler",value:function(e){this._handleFormSubmit=e}},{key:"setEventListeners",value:function(){var e=this;w(L(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit()}))}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(n),C={submitButtonSelector:".button",formSelector:".popup__form",inputSelector:".popup__input",errorClass:".error-message",errorVisibleClass:"error-message_visible",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error"};function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t,n,r,o,i){var a=r.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._alt=t.name,this._likes=t.likes,this._id=t._id,this._userId=t.userId,this._ownerId=t.ownerId,this._cardsTemplate=n,this._handleCardClick=a,this._handleDeleteClick=o,this._handleLikeClick=i}var t,n;return t=e,n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardsTemplate).content.querySelector(".elements__item").cloneNode(!0)}},{key:"isLiked",value:function(){var e=this,t=this._likes.find((function(t){return t._id===e._userId}));return t}},{key:"setLikes",value:function(e){this._likes=e,this._likeNumber.textContent=this._likes.length,this.isLiked()?this.__addLikeCard():this._removeLikeCard()}},{key:"__addLikeCard",value:function(){this._cardsLikeBtn.classList.add("elements__like-btn_active")}},{key:"_removeLikeCard",value:function(){this._cardsLikeBtn.classList.remove("elements__like-btn_active")}},{key:"generateCard",value:function(){return this._card=this._getTemplate(),this._setEventListeners(),this._card.querySelector(".elements__title").textContent=this._name,this._cardsImg.src=this._link,this._cardsImg.alt=this._name,this.setLikes(this._likes),this._ownerId!==this._userId&&(this._card.querySelector(".elements__delete-btn").style.display="none"),this._card}},{key:"deleteCard",value:function(){this._card.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._cardsImg=this._card.querySelector(".elements__img"),this._likeNumber=this._card.querySelector(".elements__numberoflikes"),this._cardsDeleteBtn=this._card.querySelector(".elements__delete-btn"),this._cardsLikeBtn=this._card.querySelector(".elements__like-btn"),this._cardsDeleteBtn.addEventListener("click",(function(){e._handleDeleteClick(e._id)})),this._cardsLikeBtn.addEventListener("click",(function(){e._handleLikeClick(e._id)})),this._cardsImg.addEventListener("click",this._handleCardClick)}}],n&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),q(this,"resetValidation",(function(){r._disableSubmitButton(),r._inputList.forEach((function(e){r._hideInputError(e)}))})),q(this,"_showInputError",(function(e,t){var n=r._settings,o=n.inputErrorClass,i=n.errorVisibleClass,a=r._form.querySelector("#error-".concat(e.id));e.classList.add(o),a.classList.add(i),a.textContent=t})),q(this,"_hideInputError",(function(e){var t=r._settings,n=t.inputErrorClass,o=t.errorVisibleClass,i=r._form.querySelector("#error-".concat(e.id));e.classList.remove(n),i.classList.remove(o),i.textContent=""})),q(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),q(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),q(this,"_disableSubmitButton",(function(){var e=r._settings.inactiveButtonClass;r._buttonElement.classList.add(e),r._buttonElement.disabled=!0})),q(this,"_enableSubmitButton",(function(){var e=r._settings.inactiveButtonClass;r._buttonElement.classList.remove(e),r._buttonElement.disabled=!1})),q(this,"_toggleButtonState",(function(){r._hasInvalidInput()?r._disableSubmitButton():r._enableSubmitButton()})),this._form=n,this._settings=t,this._inputList=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),this._buttonElement=this._form.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialCards=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=function(){function e(t){var n=t.nameInputSelector,r=t.jobInputSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._job=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._job.textContent}}},{key:"setUserInfo",value:function(e,t,n){this._name.textContent=e,this._job.textContent=t,this._avatar.src="".concat(n)}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=r,this._baseUrl=n}var t,n;return t=e,(n=[{key:"_checkReponse",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkReponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkReponse)}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._checkReponse)}},{key:"addNewCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._checkReponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkReponse)}},{key:"putLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkReponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkReponse)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkReponse)}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-47",headers:{authorization:"713e9fcb-7164-40b1-8a98-089d93e7cbcd","content-type":"application/json"}});function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var N,H=document.querySelector(".profile__edit-btn"),J=document.querySelector(".profile__add-btn"),M=document.querySelector(".profile__edit"),z=document.querySelector(".popup__input_type_name"),$=document.querySelector(".popup__input_type_job"),G=document.querySelector(".popup__form-profile"),K=document.querySelector(".popup__form_type_update-avatar"),Q=document.querySelector(".popup__form_add-cards");Promise.all([A.getProfile(),A.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ee.setUserInfo(o.name,o.about,o.avatar),N=o._id,i.reverse().forEach((function(e){oe(e,0,re)}))})).catch(console.log);var W=new B(C,G),X=new B(C,Q),Y=new B(C,K);W.enableValidation(),X.enableValidation(),Y.enableValidation();var Z=new f(".popup_type_add-cards",{handleFormSubmit:function(e){Z.renderLoading(!0),A.addNewCard(e.cardName,e.cardLink).then((function(e){oe(e,0,re),Z.close()})).catch(console.log).finally((function(){Z.renderLoading(!1)}))}}),ee=new V({nameInputSelector:".profile__title",jobInputSelector:".profile__subtitle",avatarSelector:".profile__image"}),te=new f(".popup_type_profile-edit",{handleFormSubmit:function(e){te.renderLoading(!0),A.editProfile(e.name,e.job).then((function(e){ee.setUserInfo(e.name,e.about,e.avatar),te.close()})).catch(console.log).finally((function(){te.renderLoading(!1)}))}}),ne=new f(".popup_type_update-avatar",{handleFormSubmit:function(e){ne.renderLoading(!0),A.changeAvatar(e.avatar).then((function(e){ee.setUserInfo(e.name,e.about,e.avatar),ne.close()})).catch(console.log).finally((function(){ne.renderLoading(!1)}))}}),re=new U({items:[],renderer:function(e){oe(e,0,re)}},".elements__items");function oe(e,t,n){var r=new I({name:e.name,link:e.link,likes:e.likes,_id:e._id,userId:N,ownerId:e.owner._id},".template",{handleCardClick:function(){return ie.open(e.link,e.name)}},(function(e){ae.open(),ae.setFormSubmitHandler((function(){console.log(e),A.deleteCard(e).then((function(e){console.log("res",e),r.deleteCard(),ae.close()})).catch(console.log)}))}),(function(e){r.isLiked()?A.deleteLike(e).then((function(e){r.setLikes(e.likes)})).catch(console.log):A.putLike(e).then((function(e){r.setLikes(e.likes)})).catch(console.log)})),o=r.generateCard();n.addItem(o)}var ie=new v(".popup_type_image"),ae=new j(".popup_type_confirmation");Z.setEventListeners(),te.setEventListeners(),ie.setEventListeners(),ae.setEventListeners(),ne.setEventListeners(),M.addEventListener("click",(function(){ne.open(),Y.resetValidation()})),H.addEventListener("click",(function(){te.open();var e=ee.getUserInfo();z.value=e.name,$.value=e.about})),J.addEventListener("click",(function(){Z.open(),X.resetValidation()}))})();