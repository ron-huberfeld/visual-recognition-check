(this["webpackJsonp@ibm-watson/visual-recognition-code-pattern"]=this["webpackJsonp@ibm-watson/visual-recognition-code-pattern"]||[]).push([[0],{14:function(e){e.exports=JSON.parse('{"b":"** CovItOut **","a":"Using IBM\'s Watson Visual Recognition service which uses deep learning algorithms to analyze images for scenes, objects, text, and other subjects."}')},17:function(e,t,a){},23:function(e){e.exports=JSON.parse('[{"url":"/images/classify/small/r-pic22.jpg","alt":"pic1"},{"url":"/images/classify/small/r-pic16.jpg","alt":"pic2"},{"url":"/images/classify/small/r-pic12.jpg","alt":"pic3"}]')},27:function(e,t,a){e.exports=a(37)},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(18),c=a.n(o),r=(a(17),function(e){Object(n.useEffect)((function(){var t=document.createElement("script");return t.src=e,t.async=!0,document.body.appendChild(t),function(){document.body.removeChild(t)}}),[e])}),l=a(42),s=function(e){var t=e.description,a=e.links,n=e.title;return i.a.createElement(l.b,{className:"header"},i.a.createElement("div",{className:"title-container"},i.a.createElement("h3",{className:"header-title"},n),i.a.createElement("p",null,t)),i.a.createElement("div",{className:"link-container"},i.a.createElement("div",{className:"link-wrapper"},a.map((function(e){return e})))))};s.defaultProps={description:"",links:[],title:""};var m=s,u=a(13),d=a.n(u),p=a(20),f=a(3),g=function(e){var t=e.images,a=e.onClick;return t.map((function(e,t){return i.a.createElement("div",{key:t,className:"image-picker--section__tile"},i.a.createElement(l.a,{id:"tile-".concat(t),handleClick:function(){a(t)}},i.a.createElement("img",{className:"image-picker--section__image",src:e.url,alt:e.alt})))}))},_=function(e){var t=e.loadingMessage;return i.a.createElement("span",{className:"loader"},i.a.createElement("div",{className:"loader-container"},i.a.createElement("div",{className:"loader-dots"}),t?i.a.createElement("div",{className:"loader-message"},i.a.createElement("p",{className:"ibm-type-a"},t)):null))};_.defaultProps={loadingMessage:null};var v=_,E=a(25),b=a(22),h=a.n(b),k=function(e){var t=e.onUpload;return i.a.createElement("div",{className:"image-picker--section__tile"},i.a.createElement(l.a,{id:"123",handleClick:function(){}},i.a.createElement(E.a,{multiple:!1,onDrop:function(e){t(e)}},(function(e){var t=e.getRootProps,a=e.getInputProps;return i.a.createElement("div",Object.assign({},t(),{className:"upload-image"}),i.a.createElement("input",a()),i.a.createElement(h.a,null),i.a.createElement("p",{className:"upload-text"},"Select or drag an image"))}))))},w=(a(36),function(e){var t=e.locationData;return i.a.createElement(i.a.Fragment,null,t?t.map((function(e,t){var a=e.location.left,n=e.location.top,o=e.location.width,c=e.location.height,r="mask"===e.object?"green":"red";return i.a.createElement("span",{className:"face-mark2",key:t},i.a.createElement("div",{className:"face-mark3",style:{backgroundSize:"contain",position:"absolute",borderColor:r,height:"".concat(c,"px"),width:"".concat(o,"px"),top:"".concat(n,"px"),left:"".concat(a,"px")}}))})):null)}),y=function(e){var t=e.showLoader,a=e.viewerImage,n=e.pickerImages,o=e.onSelectTile,c=e.onUpload,r=e.locationData;return i.a.createElement("div",{className:"main-image-picker__container"},i.a.createElement("div",{className:"main-image-picker"},i.a.createElement("div",null,i.a.createElement("img",{className:"main-image-picker__image",src:a,alt:"main"}),t?i.a.createElement(v,null):null,t?null:i.a.createElement(w,{locationData:r}))),i.a.createElement("div",{className:"image-selection__container"},i.a.createElement("div",{className:"image-picker__tiles"},i.a.createElement(g,{images:n,onClick:function(e){o(e)}}),i.a.createElement(k,{onUpload:function(e){c(e)}}))))};y.defaultProps={viewerType:"image"};var N=y,C=function(e){var t=e.images,a=e.onSubmitImage,o=e.handleUnsupportedFormats,c=e.isClassifying,r=e.results,s="";t[0]&&t[0].url&&(s=t[0].url);var m=Object(n.useState)(s),u=Object(f.a)(m,2),d=u[0],p=u[1];return i.a.createElement(l.b,{className:"input-container"},i.a.createElement(N,{showLoader:c,viewerImage:d,pickerImages:t,onSelectTile:function(e){!function(e){var n=t[e].url;a({image_file:n}),p(n)}(e)},onUpload:function(e){!function(e){var t=e[0];if(["image/gif","image/png","image/jpg","image/jpeg"].includes(t.type)){var n=new FileReader;n.onabort=function(){return console.log("file reading was aborted")},n.onerror=function(){return console.log("file reading has failed")},n.onload=function(){var e=n.result;p(e),a({image_data:e})},n.readAsDataURL(t)}else o()}(e)},locationData:r}))},W=a(40),j=function(e){var t=e.caption,a=e.children,o=e.className,c=e.hideAfterFirstDisplay,r=e.hideCloseButton,l=e.iconDescription,s=e.kind,m=e.lowContrast,u=e.onCloseButtonClick,d=e.role,p=e.subtitle,g=e.timeout,_=e.title,v=Object(n.useState)(),E=Object(f.a)(v,2),b=E[0],h=E[1],k=Object(n.useState)(!1),w=Object(f.a)(k,2),y=w[0],N=w[1];return Object(n.useEffect)((function(){h(Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15))}),[]),Object(n.useEffect)((function(){var e=document.querySelector(".custom-toast-".concat(b));e&&(e.className+="enter")}),[b]),Object(n.useEffect)((function(){c&&void 0!==typeof window&&void 0!==typeof window.localStorage&&"true"===window.localStorage.getItem("notificationHasBeenSeen")&&N(!0)}),[c]),y?null:i.a.createElement(W.a,{caption:t,className:"custom-toast-".concat(b," ").concat(o),hideCloseButton:r,iconDescription:l,kind:s,lowContrast:m,onCloseButtonClick:function(){c&&void 0!==typeof window&&void 0!==typeof window.localStorage&&window.localStorage.setItem("notificationHasBeenSeen","true"),u()},role:d,subtitle:p,timeout:g,title:_},a)};j.defaultProps={caption:"",children:null,className:"",hideAfterFirstDisplay:!0,hideCloseButton:!1,iconDescription:"closes notification",kind:"error",lowContrast:!1,onCloseButtonClick:function(){},role:"alert",subtitle:"",timeout:0,title:""};var B=j,S=a(23),D=function(){var e=Object(n.useState)(!1),t=Object(f.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)([]),r=Object(f.a)(c,2),l=r[0],s=r[1],m=Object(n.useState)(null),u=Object(f.a)(m,2),g=u[0],_=u[1],v=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(!0),fetch("/api/classify",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.error?_(e.error):s(e.result.images[0].objects.collections[0].objects)})).catch((function(e){_({title:e.message,description:e.message})})).finally((function(){return o(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i.a.createElement("div",{className:"service-container"},i.a.createElement(B,{kind:"info",subtitle:"This system is for demonstration purposes only and is not intended to process Personal Data. No Personal Data is to be entered into this system as it may not have the necessary controls in place to meet the requirements of the General Data Protection Regulation (EU) 2016/679."}),g&&i.a.createElement(B,{kind:"error",title:g.title,subtitle:g.description,hideAfterFirstDisplay:!1,timeout:5e3,onCloseButtonClick:function(){return _(null)}}),i.a.createElement(C,{onSubmitImage:function(e){v(e)},isClassifying:a,images:S,handleUnsupportedFormats:function(){_({title:"Invalid file format:",description:"Only JPGs, PNGs, and GIFs are supported"})},results:l}))},O=a(14),I=a(41),F=a(38),P=a(15),A=a.n(P),U=a(11),x=a.n(U),R=a(24),J=a.n(R),T=[i.a.createElement(I.a,{className:"link getting-started",key:"distance-link",target:"_blank",rel:"noopener noreferrer",href:"https://cloud.ibm.com/apidocs/visual-recognition"},i.a.createElement(F.a,{className:"link-button",kind:"tertiary",renderIcon:x.a},"Social Distance"),i.a.createElement(J.a,{className:"link-icon"})),i.a.createElement(I.a,{className:"link getting-started",key:"events-link",target:"_blank",rel:"noopener noreferrer",href:"https://cloud.ibm.com/registration?target=%2Fcatalog%2Fservices%2Fvisual-recognition%3FhideTours%3Dtrue%26cm_mmc%3D-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmc%3D-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmca1%3D000000OF%26cm_mmca2%3D10000409&_ga=2.158846578.918027017.1572271296-1405764752.1539884377&_gac=1.250083700.1571850605.Cj0KCQjw3JXtBRC8ARIsAEBHg4m4g1PSkKQRoI6YUe4A-6ysul0ziiWU0DVbqlbWAQpq3721u-bxkd0aAkV3EALw_wcB&cm_mc_uid=83381689395615475202389&cm_mc_sid_50200000=82214471572470185115&cm_mc_sid_52640000=21949701572470185117&cm_mmc=Earned-_-Watson%20Core%20-%20Platform-_-WW_WW-_-intercom&cm_mmca1=000000OF&cm_mmca2=10000409"},i.a.createElement(F.a,{className:"link-button",kind:"tertiary",renderIcon:x.a},"Spread Estimation"),i.a.createElement(A.a,{className:"link-icon"})),i.a.createElement(I.a,{className:"link getting-started",key:"events-link",target:"_blank",rel:"noopener noreferrer",href:"https://cloud.ibm.com/registration?target=%2Fcatalog%2Fservices%2Fvisual-recognition%3FhideTours%3Dtrue%26cm_mmc%3D-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmc%3D-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmca1%3D000000OF%26cm_mmca2%3D10000409&_ga=2.158846578.918027017.1572271296-1405764752.1539884377&_gac=1.250083700.1571850605.Cj0KCQjw3JXtBRC8ARIsAEBHg4m4g1PSkKQRoI6YUe4A-6ysul0ziiWU0DVbqlbWAQpq3721u-bxkd0aAkV3EALw_wcB&cm_mc_uid=83381689395615475202389&cm_mc_sid_50200000=82214471572470185115&cm_mc_sid_52640000=21949701572470185117&cm_mmc=Earned-_-Watson%20Core%20-%20Platform-_-WW_WW-_-intercom&cm_mmca1=000000OF&cm_mmca2=10000409"},i.a.createElement(F.a,{className:"link-button",kind:"tertiary",renderIcon:x.a},"Events Log"),i.a.createElement(A.a,{className:"link-icon"}))],q=function(){return r("https://cdn.jsdelivr.net/gh/watson-developer-cloud/watson-developer-cloud.github.io@master/analytics.js"),i.a.createElement("div",{className:"app-container"},i.a.createElement(m,{description:O.a,links:T,title:O.b}),i.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.97b13bdd.chunk.js.map