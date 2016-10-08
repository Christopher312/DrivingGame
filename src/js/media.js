gm.media=function(t){"use strict";function e(t,e,i,s){var a=this.onStatusChange.bind(this);this.positionInterval=null,this.streamPosition=0,this.type="video"===e?"video":"audio",this.statusCallback=i,this.id="video"!==e?gm.audio.play(t,e,a,s):gm.video.play(t,a)}function i(t,e){gm.system._log("The media object ("+t+") you are trying to "+e+" has expired.")}function s(t,i,s,a){var o;return"string"!=typeof t?gm.system._log("A valid URL is required in order to play media."):("string"!=typeof i&&(a=s,s=i,i="video"),"function"!=typeof s&&(a=s,s=gm.system._optionalMethod),o=new e(t,i,s,a),N=d[o.id]=o,o.id)}function a(t){var e=d[t];return e?e.pause():void i(t,"pause")}function o(t){var e=d[t];return e?e.stop():void i(t,"stop")}function n(t,e){var s=d[t];return s?s.seek(e):void i(t,"seek")}function r(t,e,i,s){return gm.audio.getMediaPlayerList(t,e,i,s)}function u(t,e,i,s){return gm.audio.getMediaPlayerResultsNum(t,e,i,s)}function c(t,e,i){return gm.audio.setMetaData(t,e,i)}function p(t){var e,i;return t?(i=d[t],e=i?i.streamPosition:0):e=N?N.streamPosition:0,e/1e3}var N,E={UNKNOWN_FAILURE:-1,PLAYING:0,PAUSED:1,NOT_COMPLETED:2,INVALID_URL:3,CHANNEL_UNAVAILABLE:4,SOURCE_CHANGED:5,CONNECTING:6,BUFFERING:7,END_OF_FILE:8,JS_PAUSE:9,JS_STOP:10,JS_SEEK:11,NEEDS_PARK:12,BUFFERED:13,OUT_OF_SPACE:14,NO_CONNECTION:15,INVALID_INPUT:16},h=250,d={};return e.prototype.pause=function(){return gm[this.type].pause(this.id)},e.prototype.stop=function(){return gm[this.type].stop(this.id)},e.prototype.seek=function(t){return gm[this.type].seek(this.id,t)},e.prototype.startTracking=function(){function t(){this.streamPosition+=h,this.positionInterval=setTimeout(t.bind(this),h)}this.positionInterval||t.call(this)},e.prototype.pauseTracking=function(){clearInterval(this.positionInterval),this.positionInterval=null},e.prototype.stopTracking=function(){this.pauseTracking(),this.streamPosition=0},e.prototype.onStatusChange=function(t,e){switch("object"==typeof t&&(e=t,t=e.status),t){case E.UNKNOWN_FAILURE:case E.INVALID_URL:case E.CHANNEL_UNAVAILABLE:case E.END_OF_FILE:case E.JS_STOP:case E.NO_CONNECTION:case E.INVALID_INPUT:this.stopTracking(),delete d[this.id];break;case E.PLAYING:this.startTracking();break;case E.PAUSED:case E.BUFFERING:case E.NOT_COMPLETED:case E.JS_PAUSE:case E.NEEDS_PARK:case E.SOURCE_CHANGED:case E.CONNECTING:this.pauseTracking()}e&&!isNaN(e.length)&&(this.streamPosition=e.length),this.statusCallback(t,e)},{constants:E,play:s,pause:a,stop:o,seek:n,getMediaPlayerList:r,getMediaPlayerResultsNum:u,setMetaData:c,getStreamPosition:p}}();