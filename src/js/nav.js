gm.nav=function(t){"use strict";function n(t,n){var e,i=Object.keys(t||{}),o=Object.keys(n||{});if(i.length!==o.length)return!1;for(var u=0,r=i.length;u<r;u++)if(e=i[u],t[e]!==n[e])return!1;return!0}function e(t,e){function i(e){var i=n(e,s);i||(s=e,t(e))}o(i,e)}function i(t,n){function i(){o(),d=setTimeout(i,m)}var o=e.bind(null,t,n);i()}function o(t,n,e){function i(n){n.latitude&&e&&(n.latitude=g(n.latitude)),n.longitude&&e&&(n.longitude=g(n.longitude)),t(n)}return"boolean"==typeof n&&(e=n||!1),e=e||!1,gm.navigation.getDestination(i,n)}function u(t,n,e,i){return"object"==typeof n&&(i=e||!1,e=n),"boolean"==typeof n&&(e=t,i=n,t=gm.util.noop(),n=gm.util.noop()),i=i||!1,e.latitude&&i&&(e.latitude=a(e.latitude)),e.longitude&&i&&(e.longitude=a(e.longitude)),gm.navigation.setDestination(t,n,e)}function r(t){for(;t<-180;)t+=360;for(;t>180;)t-=360;return t}function a(t){return String(Math.floor(36e5*r(t)))}function g(t){return t/36e5}function l(n){s=t,clearTimeout(d)}function f(t,n,e,i){function o(t,n){function e(e){e&&(n=n.map(function(t){return gm.util.extend(t,u)})),t(n)}return gm.info?void(gm.util.getGpsMaskingSupport()?gm.util.requestGpsMaskingState(e):t(n)):e(!0)}var u={startLat:9999999999,startLong:9999999999},r=o.bind(null,t);return gm.navigation.getManeuverList(r,n,e,i)}function c(t,n,e){return gm.navigation.getWaypoint(t,n,e)}var s,d,m=1e4;return{watchDestination:i,getDestination:o,setDestination:u,clearDestination:l,getManeuverList:f,getWaypoint:c}}();