parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"zttq":[function(require,module,exports) {
"use strict";function e(e,t,o){e.fillStyle="#000",e.strokeStyle="#0f0"}function t(e,t,o){e.fillRect(0,0,t,o);var r=e.strokeStyle;e.strokeStyle="#777",e.beginPath(),e.moveTo(0,o/2),e.lineTo(t,o/2),e.stroke(),e.strokeStyle=r}function o(e,t,o,r){e.beginPath();for(var l=0;l<t.length;l++){var s=l*(1*o/t.length),i=t[l]/128*r/2;0===l?e.moveTo(s,i):e.lineTo(s,i)}e.stroke()}Object.defineProperty(exports,"__esModule",{value:!0}),exports._initCvs=e,exports._primer=t,exports._drawRawOsc=o;
},{}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Oscilloscope=n,exports.MediaStreamOscilloscope=a,exports.createAudioContext=r,exports.getUserMedia=s;var t=i(require("./tools/canvas_tools"));function e(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return e=function(){return t},t}function i(t){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var i=e();if(i&&i.has(t))return i.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var s=r?Object.getOwnPropertyDescriptor(t,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=t[a]}return n.default=t,i&&i.set(t,n),n}function n(e,i,n){var r=this,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2048,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;this.actx=e,this.FFT=s,this.cvs=n,this.init=o||t._initCvs,this.primer=c||t._primer,this.paused=!1,this.anl=this.actx.createAnalyser(),this.ctx=e,this.src=i,this.dest=a,this.anl.fftSize=this.FFT,this.src.connect(this.anl),this.dest&&this.anl.connect(this.dest);var u=this.cvs,l=u.width,d=void 0===l?300:l,h=u.height,v=void 0===h?150:h;this.WIDTH=d,this.HEIGHT=v,this.u8ar=new Uint8Array(this.FFT),this.cctx=this.cvs.getContext("2d"),this.init(this.cctx,this.WIDTH,this.HEIGHT),this.draw=function(){r.paused||requestAnimationFrame(r.draw),r.cctx.clearRect(0,0,r.WIDTH,r.HEIGHT),r.primer(r.cctx,r.WIDTH,r.HEIGHT),r.anl.getByteTimeDomainData(r.u8ar),t._drawRawOsc(r.cctx,r.u8ar,r.WIDTH,r.HEIGHT)},this.start=function(){r.paused=!1,r.draw()},this.pause=function(){r.paused=!0},this.reset=function(){r.paused=!0,requestAnimationFrame(function(){r.u8ar=new Uint8Array(r.FFT).fill(0),r.cctx.clearRect(0,0,r.WIDTH,r.HEIGHT),r.primer(r.cctx,r.WIDTH,r.HEIGHT),t._drawRawOsc(r.cctx,r.u8ar,r.WIDTH,r.HEIGHT)})}}function r(){return new(window.AudioContext||window.webkitAudioContext)}function a(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2048,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,c=r(),u=c.createMediaStreamSource(t);return new n(c,u,e,i,a,s,o)}function s(t){return new Promise(function(e){navigator&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia(t).then(e).catch(function(){return e(null)}):navigator.getUserMedia?navigator.getUserMedia(t,e,function(){return e(null)}):navigator.webkitGetUserMedia?navigator.webkitGetUserMedia(t,e,function(){return e(null)}):navigator.mozGetUserMedia?navigator.mozGetUserMedia(t,e,function(){return e(null)}):e(null)})}
},{"./tools/canvas_tools":"zttq"}]},{},["Focm"], "_osc")
//# sourceMappingURL=/index.js.map