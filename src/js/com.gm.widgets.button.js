!function(){var t={};this.tmpl=function e(i,s){var n=/\W/.test(i)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+i.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):t[i]=t[i]||e(document.getElementById(i).innerHTML);return s?n(s):n}}(),window.gm=window.gm||{},gm.widgets=gm.widgets||{},gm.widgets.templates=[],gm.widgets.templates[0]='<script type="text/html" id="gm_widget_base_template" style="display:none;"><div id="<%=id%>"><p><%=label%></p></div></script>',gm.widgets.templates[1]='<script type="text/html" id="gm_widget_button_template" style="display:none;"><button class="gm_widget_button" id="<%=id%>" tabindex="0" <%= ( disabled ? "disabled = \'disabled\'" : "" ) %>><%=label%></button></script>',gm.widgets.templates[2]='<script type="text/html" id="gm_widget_popup_template" style="display:none;"><div id="<%=id%>" class="gm_widget_popup hidden" ><div class="gm_widget_popup_header"><div class="gm_widget_popup_title"></div><div class="gm_widget_popup_close_container"></div></div><div class="gm_widget_popup_description"></div><div class="gm_widget_popup_buttons"></div></div></script>',gm.widgets.templateOptionsHash={gm_widget_base_template:["id","label"],gm_widget_button_template:["id","label","disabled"],gm_widget_popup_template:["id"]},gm.widgets.TemplateParams=function(){var t=function(t,e){for(var i=gm.widgets.templateOptionsHash[t]||[],s=0,n=i.length,a={};s<n;s++)a[i[s]]=e[i[s]]||"";return a};return{getTemplateData:t}}(),function(){for(var t=0,e=gm.widgets.templates,i=e.length;t<i;t++)document.head.innerHTML+=gm.widgets.templates[t]}(),gm.widgets.IDGenerator=function(){var t=0,e=function(){t++},i=function(){return"gm_widget_autogen_"+t},s=function(){return e(),i()};return{getId:s}}(),gm.widgets.util={trimString:function(t){var e=t.replace(/^\s+|\s+$/g,"");return e},isInList:function(t,e){for(var i=0,s=t.length;i<s;i++)if(String(t[i])===String(e))return!0;return!1},isInName:function(t,e){var i=gm.widgets.util.trimString(t),s=i.split(" "),n=gm.widgets.util.isInList(s,e);return n},modClassName:function(t,e,i){var s=gm.widgets.util.trimString(t),n=(s.split(" "),""===s),a=gm.widgets.util.isInName(s,e);switch(i){case"add":a||(n?s=e:s+=" "+e);break;case"remove":a&&(s=s.replace(e,""))}return gm.widgets.util.trimString(s)}},gm.widgets.ElTapHandler=gm.widgets.ElTapHandler||function(t){var e,i,s=this,n=30;this.el=t.el,this.elementId=t.elementId,this.callBack=t.callBack,this.disabled=t.disabled,this.events={};var a=function(){e=null,i=null},l=function(){s.events={}},d=function(){s.events.click||s.events.touchstart&&s.events.touchend?(l(),a(),"function"==typeof s.callBack&&s.callBack.apply(null)):(l(),a())},o=function(t){t.preventDefault(),t.stopPropagation(),s.events.click="click",d()},r=function(t){e=t.touches[0].clientX,i=t.touches[0].clientY,l(),s.events.touchstart="touchstart",t.preventDefault(),t.stopPropagation()},p=function(t){var o,r,p=!1;o=t.changedTouches[0].clientX,r=t.changedTouches[0].clientY,p=Math.abs(o-e)<=n&&Math.abs(r-i)<=n,s.events.touchstart&&p?(s.events.touchend="touchend",d()):(l(),a()),t.preventDefault(),t.stopPropagation()},g=function(){s.el.removeEventListener("touchstart",r,!1),s.el.removeEventListener("touchend",p,!1),s.el.removeEventListener("click",o,!1)},m=function(){s.el.addEventListener("touchstart",r,!1),s.el.addEventListener("touchend",p,!1),s.el.addEventListener("click",o,!1)};this.start=function(){this.disabled=!1,l(),a(),g(),m()},this.stop=function(){l(),a(),this.disabled=!0,g()},this.disabled||this.start()},gm.widgets.Base=gm.widgets.Base||function(t){this.id=gm.widgets.IDGenerator.getId(),this.parentElement=t&&t.parentElement?t.parentElement:document.getElementsByTagName("body")[0],this.templateId="gm_widget_base_template",this.defaultLabel="",this.value=t&&t.hasOwnProperty("value")&&"function"!=typeof t.value?t.value:null,this.disabled=!(!t||!t.hasOwnProperty("disabled")||t.disabled!==!0&&"true"!==t.disabled),this.label=t&&t.label?t.label:this.defaultLabel,this.element=null,this.callBack=t&&t.callBack&&"function"==typeof t.callBack?t.callBack:null,this.templateOptions=gm.widgets.TemplateParams.getTemplateData(this.templateId,this)},gm.widgets.Base.prototype.render=function(t){if(this.hasRendered())console.log("The item "+this.id+" has already been rendered");else{var e,i=this.templateOptions,s=document.createElement("div");s.innerHTML=tmpl(this.templateId,i),e=s.firstChild.cloneNode(!0),this.disabled&&e.className.indexOf("disabled")<0&&(""===e.className?e.className="disabled":e.className+=" disabled"),this.parentElement.appendChild(e),this.element=document.getElementById(this.id)}"function"==typeof t&&t.apply(null)},gm.widgets.Base.prototype.hasRendered=function(){return Boolean(document.getElementById(this.id))},gm.widgets.Base.prototype.attachEventHandles=function(){},gm.widgets.Base.prototype.detachEventHandles=function(){},gm.widgets.Base.prototype.setValue=function(t){var e="function"!=typeof t;e&&(this.value=t)},gm.widgets.Base.prototype.getValue=function(){return this.value},gm.widgets.Base.prototype.disable=function(){this.disabled=!0,this.hasRendered()&&(""===this.element.className?this.element.className="disabled":this.element.className.indexOf("disabled")===-1&&(this.element.className+=" disabled"),this.detachEventHandles())},gm.widgets.Base.prototype.enable=function(){if(this.disabled=!1,this.hasRendered()){var t=this.element.className,e="";e=t.replace("disabled",""),e=gm.widgets.util.trimString(e),this.element.className=e,this.attachEventHandles()}},gm.widgets.Base.prototype.destroy=function(){this.hasRendered()&&this.parentElement.removeChild(this.element),this.detachEventHandles()},gm.widgets.Button=gm.widgets.Button||function(t){var e=this;this.id=gm.widgets.IDGenerator.getId(),this.parentElement=t&&t.parentElement?t.parentElement:document.getElementsByTagName("body")[0],this.templateId="gm_widget_button_template",this.defaultLabel="",this.value=t&&t.hasOwnProperty("value")&&"function"!=typeof t.value?t.value:null,this.disabled=!(!t||!t.hasOwnProperty("disabled")||t.disabled!==!0&&"true"!==t.disabled),this.label=t&&t.hasOwnProperty("label")?t.label:" ",this.element=null,this.callBack=t&&t.callBack&&"function"==typeof t.callBack?t.callBack:null,this.templateOptions=gm.widgets.TemplateParams.getTemplateData(this.templateId,this),this.width=t&&t.width&&t.width>0?Number(t.width):"",this.height=t&&t.height&&t.height>0?Number(t.height):"",this.uiEventManager={};var i=function(){"function"==typeof e.callBack&&e.callBack.apply(null)};this.render=function(t){gm.widgets.Button.prototype.render.apply(e),this.uiEventManager=new gm.widgets.ElTapHandler({el:this.element,elementId:this.id,callBack:i,disabled:this.disabled}),""!==e.width&&(e.element.style.width=e.width+"px"),""!==e.height&&(e.element.style.height=e.height+"px"),"function"==typeof t&&t.apply(null)},this.disable=function(){gm.widgets.Button.prototype.disable.apply(e),this.hasRendered()&&this.element.setAttribute("disabled","disabled")},this.enable=function(){gm.widgets.Button.prototype.enable.apply(e),this.hasRendered()&&this.element.getAttribute("disabled")&&this.element.removeAttribute("disabled")}},gm.widgets.Button.prototype=Object.create(gm.widgets.Base.prototype),gm.widgets.Button.prototype.constructor=gm.widgets.Button,gm.widgets.Button.prototype.attachEventHandles=function(){this.hasRendered()&&this.uiEventManager.start()},gm.widgets.Button.prototype.detachEventHandles=function(){this.hasRendered()&&this.uiEventManager.stop()};