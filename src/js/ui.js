gm.ui=function(){"use strict";function t(t,e,n){return n=n||{},n.title||(n.title=gm.system.getAppConfig("FriendlyName")),gm.hmi.setFavorite(t,e,n)}function e(t,e,n){return gm.hmi.showAlert(t,e,n)}function n(t,e){return"function"!=typeof t&&(e=t,t=gm.system._optionalMethod),gm.hmi.setInteractionSelector(e,t)}return{setFavorite:t,showAlert:e,setInteractionSelector:n}}();