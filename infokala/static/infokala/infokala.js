(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var $, MainViewModel, ko;

$ = require('jquery');

ko = require('knockout');

MainViewModel = require('./main_view_model.coffee');

ko.applyBindings(new MainViewModel);



},{"./main_view_model.coffee":4,"jquery":2,"knockout":3}],2:[function(require,module,exports){
(function (global){
;__browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
; browserify_shim__define__module__export__(typeof jQuery != "undefined" ? jQuery : window.jQuery);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
/*!
 * Knockout JavaScript library v3.2.0
 * (c) Steven Sanderson - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function() {(function(p){var s=this||(0,eval)("this"),v=s.document,L=s.navigator,w=s.jQuery,D=s.JSON;(function(p){"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?p(module.exports||exports,require):"function"===typeof define&&define.amd?define(["exports","require"],p):p(s.ko={})})(function(M,N){function H(a,d){return null===a||typeof a in R?a===d:!1}function S(a,d){var c;return function(){c||(c=setTimeout(function(){c=p;a()},d))}}function T(a,d){var c;return function(){clearTimeout(c);
c=setTimeout(a,d)}}function I(b,d,c,e){a.d[b]={init:function(b,h,k,f,m){var l,q;a.s(function(){var f=a.a.c(h()),k=!c!==!f,z=!q;if(z||d||k!==l)z&&a.Y.la()&&(q=a.a.ia(a.f.childNodes(b),!0)),k?(z||a.f.T(b,a.a.ia(q)),a.Ca(e?e(m,f):m,b)):a.f.ja(b),l=k},null,{o:b});return{controlsDescendantBindings:!0}}};a.h.ha[b]=!1;a.f.Q[b]=!0}var a="undefined"!==typeof M?M:{};a.b=function(b,d){for(var c=b.split("."),e=a,g=0;g<c.length-1;g++)e=e[c[g]];e[c[c.length-1]]=d};a.A=function(a,d,c){a[d]=c};a.version="3.2.0";
a.b("version",a.version);a.a=function(){function b(a,b){for(var c in a)a.hasOwnProperty(c)&&b(c,a[c])}function d(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function c(a,b){a.__proto__=b;return a}var e={__proto__:[]}instanceof Array,g={},h={};g[L&&/Firefox\/2/i.test(L.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];g.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");b(g,function(a,b){if(b.length)for(var c=
0,d=b.length;c<d;c++)h[b[c]]=a});var k={propertychange:!0},f=v&&function(){for(var a=3,b=v.createElement("div"),c=b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",c[0];);return 4<a?a:p}();return{vb:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],u:function(a,b){for(var c=0,d=a.length;c<d;c++)b(a[c],c)},m:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,b);for(var c=0,d=a.length;c<d;c++)if(a[c]===
b)return c;return-1},qb:function(a,b,c){for(var d=0,f=a.length;d<f;d++)if(b.call(c,a[d],d))return a[d];return null},ua:function(m,b){var c=a.a.m(m,b);0<c?m.splice(c,1):0===c&&m.shift()},rb:function(m){m=m||[];for(var b=[],c=0,d=m.length;c<d;c++)0>a.a.m(b,m[c])&&b.push(m[c]);return b},Da:function(a,b){a=a||[];for(var c=[],d=0,f=a.length;d<f;d++)c.push(b(a[d],d));return c},ta:function(a,b){a=a||[];for(var c=[],d=0,f=a.length;d<f;d++)b(a[d],d)&&c.push(a[d]);return c},ga:function(a,b){if(b instanceof
Array)a.push.apply(a,b);else for(var c=0,d=b.length;c<d;c++)a.push(b[c]);return a},ea:function(b,c,d){var f=a.a.m(a.a.Xa(b),c);0>f?d&&b.push(c):d||b.splice(f,1)},xa:e,extend:d,za:c,Aa:e?c:d,G:b,na:function(a,b){if(!a)return a;var c={},d;for(d in a)a.hasOwnProperty(d)&&(c[d]=b(a[d],d,a));return c},Ka:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},oc:function(b){b=a.a.S(b);for(var c=v.createElement("div"),d=0,f=b.length;d<f;d++)c.appendChild(a.R(b[d]));return c},ia:function(b,c){for(var d=
0,f=b.length,e=[];d<f;d++){var k=b[d].cloneNode(!0);e.push(c?a.R(k):k)}return e},T:function(b,c){a.a.Ka(b);if(c)for(var d=0,f=c.length;d<f;d++)b.appendChild(c[d])},Lb:function(b,c){var d=b.nodeType?[b]:b;if(0<d.length){for(var f=d[0],e=f.parentNode,k=0,g=c.length;k<g;k++)e.insertBefore(c[k],f);k=0;for(g=d.length;k<g;k++)a.removeNode(d[k])}},ka:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==b;)a.shift();if(1<a.length){var c=a[0],d=a[a.length-1];for(a.length=
0;c!==d;)if(a.push(c),c=c.nextSibling,!c)return;a.push(d)}}return a},Nb:function(a,b){7>f?a.setAttribute("selected",b):a.selected=b},cb:function(a){return null===a||a===p?"":a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},vc:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===b},cc:function(a,b){if(a===b)return!0;if(11===a.nodeType)return!1;if(b.contains)return b.contains(3===a.nodeType?a.parentNode:a);if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&
16);for(;a&&a!=b;)a=a.parentNode;return!!a},Ja:function(b){return a.a.cc(b,b.ownerDocument.documentElement)},ob:function(b){return!!a.a.qb(b,a.a.Ja)},t:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},n:function(b,c,d){var e=f&&k[c];if(!e&&w)w(b).bind(c,d);else if(e||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var g=function(a){d.call(b,a)},h="on"+c;b.attachEvent(h,g);a.a.w.da(b,function(){b.detachEvent(h,g)})}else throw Error("Browser doesn't support addEventListener or attachEvent");
else b.addEventListener(c,d,!1)},oa:function(b,c){if(!b||!b.nodeType)throw Error("element must be a DOM node when calling triggerEvent");var d;"input"===a.a.t(b)&&b.type&&"click"==c.toLowerCase()?(d=b.type,d="checkbox"==d||"radio"==d):d=!1;if(w&&!d)w(b).trigger(c);else if("function"==typeof v.createEvent)if("function"==typeof b.dispatchEvent)d=v.createEvent(h[c]||"HTMLEvents"),d.initEvent(c,!0,!0,s,0,0,0,0,0,!1,!1,!1,!1,0,b),b.dispatchEvent(d);else throw Error("The supplied element doesn't support dispatchEvent");
else if(d&&b.click)b.click();else if("undefined"!=typeof b.fireEvent)b.fireEvent("on"+c);else throw Error("Browser doesn't support triggering events");},c:function(b){return a.C(b)?b():b},Xa:function(b){return a.C(b)?b.v():b},Ba:function(b,c,d){if(c){var f=/\S+/g,e=b.className.match(f)||[];a.a.u(c.match(f),function(b){a.a.ea(e,b,d)});b.className=e.join(" ")}},bb:function(b,c){var d=a.a.c(c);if(null===d||d===p)d="";var f=a.f.firstChild(b);!f||3!=f.nodeType||a.f.nextSibling(f)?a.f.T(b,[b.ownerDocument.createTextNode(d)]):
f.data=d;a.a.fc(b)},Mb:function(a,b){a.name=b;if(7>=f)try{a.mergeAttributes(v.createElement("<input name='"+a.name+"'/>"),!1)}catch(c){}},fc:function(a){9<=f&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},dc:function(a){if(f){var b=a.style.width;a.style.width=0;a.style.width=b}},sc:function(b,c){b=a.a.c(b);c=a.a.c(c);for(var d=[],f=b;f<=c;f++)d.push(f);return d},S:function(a){for(var b=[],c=0,d=a.length;c<d;c++)b.push(a[c]);return b},yc:6===f,zc:7===f,L:f,xb:function(b,c){for(var d=
a.a.S(b.getElementsByTagName("input")).concat(a.a.S(b.getElementsByTagName("textarea"))),f="string"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},e=[],k=d.length-1;0<=k;k--)f(d[k])&&e.push(d[k]);return e},pc:function(b){return"string"==typeof b&&(b=a.a.cb(b))?D&&D.parse?D.parse(b):(new Function("return "+b))():null},eb:function(b,c,d){if(!D||!D.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
return D.stringify(a.a.c(b),c,d)},qc:function(c,d,f){f=f||{};var e=f.params||{},k=f.includeFields||this.vb,g=c;if("object"==typeof c&&"form"===a.a.t(c))for(var g=c.action,h=k.length-1;0<=h;h--)for(var r=a.a.xb(c,k[h]),E=r.length-1;0<=E;E--)e[r[E].name]=r[E].value;d=a.a.c(d);var y=v.createElement("form");y.style.display="none";y.action=g;y.method="post";for(var p in d)c=v.createElement("input"),c.type="hidden",c.name=p,c.value=a.a.eb(a.a.c(d[p])),y.appendChild(c);b(e,function(a,b){var c=v.createElement("input");
c.type="hidden";c.name=a;c.value=b;y.appendChild(c)});v.body.appendChild(y);f.submitter?f.submitter(y):y.submit();setTimeout(function(){y.parentNode.removeChild(y)},0)}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.u);a.b("utils.arrayFirst",a.a.qb);a.b("utils.arrayFilter",a.a.ta);a.b("utils.arrayGetDistinctValues",a.a.rb);a.b("utils.arrayIndexOf",a.a.m);a.b("utils.arrayMap",a.a.Da);a.b("utils.arrayPushAll",a.a.ga);a.b("utils.arrayRemoveItem",a.a.ua);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",
a.a.vb);a.b("utils.getFormFields",a.a.xb);a.b("utils.peekObservable",a.a.Xa);a.b("utils.postJson",a.a.qc);a.b("utils.parseJson",a.a.pc);a.b("utils.registerEventHandler",a.a.n);a.b("utils.stringifyJson",a.a.eb);a.b("utils.range",a.a.sc);a.b("utils.toggleDomNodeCssClass",a.a.Ba);a.b("utils.triggerEvent",a.a.oa);a.b("utils.unwrapObservable",a.a.c);a.b("utils.objectForEach",a.a.G);a.b("utils.addOrRemoveItem",a.a.ea);a.b("unwrap",a.a.c);Function.prototype.bind||(Function.prototype.bind=function(a){var d=
this,c=Array.prototype.slice.call(arguments);a=c.shift();return function(){return d.apply(a,c.concat(Array.prototype.slice.call(arguments)))}});a.a.e=new function(){function a(b,h){var k=b[c];if(!k||"null"===k||!e[k]){if(!h)return p;k=b[c]="ko"+d++;e[k]={}}return e[k]}var d=0,c="__ko__"+(new Date).getTime(),e={};return{get:function(c,d){var e=a(c,!1);return e===p?p:e[d]},set:function(c,d,e){if(e!==p||a(c,!1)!==p)a(c,!0)[d]=e},clear:function(a){var b=a[c];return b?(delete e[b],a[c]=null,!0):!1},F:function(){return d++ +
c}}};a.b("utils.domData",a.a.e);a.b("utils.domData.clear",a.a.e.clear);a.a.w=new function(){function b(b,d){var f=a.a.e.get(b,c);f===p&&d&&(f=[],a.a.e.set(b,c,f));return f}function d(c){var e=b(c,!1);if(e)for(var e=e.slice(0),f=0;f<e.length;f++)e[f](c);a.a.e.clear(c);a.a.w.cleanExternalData(c);if(g[c.nodeType])for(e=c.firstChild;c=e;)e=c.nextSibling,8===c.nodeType&&d(c)}var c=a.a.e.F(),e={1:!0,8:!0,9:!0},g={1:!0,9:!0};return{da:function(a,c){if("function"!=typeof c)throw Error("Callback must be a function");
b(a,!0).push(c)},Kb:function(d,e){var f=b(d,!1);f&&(a.a.ua(f,e),0==f.length&&a.a.e.set(d,c,p))},R:function(b){if(e[b.nodeType]&&(d(b),g[b.nodeType])){var c=[];a.a.ga(c,b.getElementsByTagName("*"));for(var f=0,m=c.length;f<m;f++)d(c[f])}return b},removeNode:function(b){a.R(b);b.parentNode&&b.parentNode.removeChild(b)},cleanExternalData:function(a){w&&"function"==typeof w.cleanData&&w.cleanData([a])}}};a.R=a.a.w.R;a.removeNode=a.a.w.removeNode;a.b("cleanNode",a.R);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",
a.a.w);a.b("utils.domNodeDisposal.addDisposeCallback",a.a.w.da);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.w.Kb);(function(){a.a.ba=function(b){var d;if(w)if(w.parseHTML)d=w.parseHTML(b)||[];else{if((d=w.clean([b]))&&d[0]){for(b=d[0];b.parentNode&&11!==b.parentNode.nodeType;)b=b.parentNode;b.parentNode&&b.parentNode.removeChild(b)}}else{var c=a.a.cb(b).toLowerCase();d=v.createElement("div");c=c.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!c.indexOf("<tr")&&[2,"<table><tbody>",
"</tbody></table>"]||(!c.indexOf("<td")||!c.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""];b="ignored<div>"+c[1]+b+c[2]+"</div>";for("function"==typeof s.innerShiv?d.appendChild(s.innerShiv(b)):d.innerHTML=b;c[0]--;)d=d.lastChild;d=a.a.S(d.lastChild.childNodes)}return d};a.a.$a=function(b,d){a.a.Ka(b);d=a.a.c(d);if(null!==d&&d!==p)if("string"!=typeof d&&(d=d.toString()),w)w(b).html(d);else for(var c=a.a.ba(d),e=0;e<c.length;e++)b.appendChild(c[e])}})();a.b("utils.parseHtmlFragment",
a.a.ba);a.b("utils.setHtml",a.a.$a);a.D=function(){function b(c,d){if(c)if(8==c.nodeType){var g=a.D.Gb(c.nodeValue);null!=g&&d.push({bc:c,mc:g})}else if(1==c.nodeType)for(var g=0,h=c.childNodes,k=h.length;g<k;g++)b(h[g],d)}var d={};return{Ua:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);d[b]=a;return"\x3c!--[ko_memo:"+
b+"]--\x3e"},Rb:function(a,b){var g=d[a];if(g===p)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");try{return g.apply(null,b||[]),!0}finally{delete d[a]}},Sb:function(c,d){var g=[];b(c,g);for(var h=0,k=g.length;h<k;h++){var f=g[h].bc,m=[f];d&&a.a.ga(m,d);a.D.Rb(g[h].mc,m);f.nodeValue="";f.parentNode&&f.parentNode.removeChild(f)}},Gb:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.D);a.b("memoization.memoize",a.D.Ua);
a.b("memoization.unmemoize",a.D.Rb);a.b("memoization.parseMemoText",a.D.Gb);a.b("memoization.unmemoizeDomNodeAndDescendants",a.D.Sb);a.La={throttle:function(b,d){b.throttleEvaluation=d;var c=null;return a.j({read:b,write:function(a){clearTimeout(c);c=setTimeout(function(){b(a)},d)}})},rateLimit:function(a,d){var c,e,g;"number"==typeof d?c=d:(c=d.timeout,e=d.method);g="notifyWhenChangesStop"==e?T:S;a.Ta(function(a){return g(a,c)})},notify:function(a,d){a.equalityComparer="always"==d?null:H}};var R=
{undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.La);a.Pb=function(b,d,c){this.target=b;this.wa=d;this.ac=c;this.Cb=!1;a.A(this,"dispose",this.K)};a.Pb.prototype.K=function(){this.Cb=!0;this.ac()};a.P=function(){a.a.Aa(this,a.P.fn);this.M={}};var G="change",A={U:function(b,d,c){var e=this;c=c||G;var g=new a.Pb(e,d?b.bind(d):b,function(){a.a.ua(e.M[c],g);e.nb&&e.nb()});e.va&&e.va(c);e.M[c]||(e.M[c]=[]);e.M[c].push(g);return g},notifySubscribers:function(b,d){d=d||G;if(this.Ab(d))try{a.k.Ea();
for(var c=this.M[d].slice(0),e=0,g;g=c[e];++e)g.Cb||g.wa(b)}finally{a.k.end()}},Ta:function(b){var d=this,c=a.C(d),e,g,h;d.qa||(d.qa=d.notifySubscribers,d.notifySubscribers=function(a,b){b&&b!==G?"beforeChange"===b?d.kb(a):d.qa(a,b):d.lb(a)});var k=b(function(){c&&h===d&&(h=d());e=!1;d.Pa(g,h)&&d.qa(g=h)});d.lb=function(a){e=!0;h=a;k()};d.kb=function(a){e||(g=a,d.qa(a,"beforeChange"))}},Ab:function(a){return this.M[a]&&this.M[a].length},yb:function(){var b=0;a.a.G(this.M,function(a,c){b+=c.length});
return b},Pa:function(a,d){return!this.equalityComparer||!this.equalityComparer(a,d)},extend:function(b){var d=this;b&&a.a.G(b,function(b,e){var g=a.La[b];"function"==typeof g&&(d=g(d,e)||d)});return d}};a.A(A,"subscribe",A.U);a.A(A,"extend",A.extend);a.A(A,"getSubscriptionsCount",A.yb);a.a.xa&&a.a.za(A,Function.prototype);a.P.fn=A;a.Db=function(a){return null!=a&&"function"==typeof a.U&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.P);a.b("isSubscribable",a.Db);a.Y=a.k=function(){function b(a){c.push(e);
e=a}function d(){e=c.pop()}var c=[],e,g=0;return{Ea:b,end:d,Jb:function(b){if(e){if(!a.Db(b))throw Error("Only subscribable things can act as dependencies");e.wa(b,b.Vb||(b.Vb=++g))}},B:function(a,c,f){try{return b(),a.apply(c,f||[])}finally{d()}},la:function(){if(e)return e.s.la()},ma:function(){if(e)return e.ma}}}();a.b("computedContext",a.Y);a.b("computedContext.getDependenciesCount",a.Y.la);a.b("computedContext.isInitial",a.Y.ma);a.b("computedContext.isSleeping",a.Y.Ac);a.p=function(b){function d(){if(0<
arguments.length)return d.Pa(c,arguments[0])&&(d.X(),c=arguments[0],d.W()),this;a.k.Jb(d);return c}var c=b;a.P.call(d);a.a.Aa(d,a.p.fn);d.v=function(){return c};d.W=function(){d.notifySubscribers(c)};d.X=function(){d.notifySubscribers(c,"beforeChange")};a.A(d,"peek",d.v);a.A(d,"valueHasMutated",d.W);a.A(d,"valueWillMutate",d.X);return d};a.p.fn={equalityComparer:H};var F=a.p.rc="__ko_proto__";a.p.fn[F]=a.p;a.a.xa&&a.a.za(a.p.fn,a.P.fn);a.Ma=function(b,d){return null===b||b===p||b[F]===p?!1:b[F]===
d?!0:a.Ma(b[F],d)};a.C=function(b){return a.Ma(b,a.p)};a.Ra=function(b){return"function"==typeof b&&b[F]===a.p||"function"==typeof b&&b[F]===a.j&&b.hc?!0:!1};a.b("observable",a.p);a.b("isObservable",a.C);a.b("isWriteableObservable",a.Ra);a.b("isWritableObservable",a.Ra);a.aa=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");b=a.p(b);a.a.Aa(b,a.aa.fn);return b.extend({trackArrayChanges:!0})};
a.aa.fn={remove:function(b){for(var d=this.v(),c=[],e="function"!=typeof b||a.C(b)?function(a){return a===b}:b,g=0;g<d.length;g++){var h=d[g];e(h)&&(0===c.length&&this.X(),c.push(h),d.splice(g,1),g--)}c.length&&this.W();return c},removeAll:function(b){if(b===p){var d=this.v(),c=d.slice(0);this.X();d.splice(0,d.length);this.W();return c}return b?this.remove(function(c){return 0<=a.a.m(b,c)}):[]},destroy:function(b){var d=this.v(),c="function"!=typeof b||a.C(b)?function(a){return a===b}:b;this.X();
for(var e=d.length-1;0<=e;e--)c(d[e])&&(d[e]._destroy=!0);this.W()},destroyAll:function(b){return b===p?this.destroy(function(){return!0}):b?this.destroy(function(d){return 0<=a.a.m(b,d)}):[]},indexOf:function(b){var d=this();return a.a.m(d,b)},replace:function(a,d){var c=this.indexOf(a);0<=c&&(this.X(),this.v()[c]=d,this.W())}};a.a.u("pop push reverse shift sort splice unshift".split(" "),function(b){a.aa.fn[b]=function(){var a=this.v();this.X();this.sb(a,b,arguments);a=a[b].apply(a,arguments);this.W();
return a}});a.a.u(["slice"],function(b){a.aa.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.a.xa&&a.a.za(a.aa.fn,a.p.fn);a.b("observableArray",a.aa);var J="arrayChange";a.La.trackArrayChanges=function(b){function d(){if(!c){c=!0;var d=b.notifySubscribers;b.notifySubscribers=function(a,b){b&&b!==G||++g;return d.apply(this,arguments)};var f=[].concat(b.v()||[]);e=null;b.U(function(c){c=[].concat(c||[]);if(b.Ab(J)){var d;if(!e||1<g)e=a.a.Fa(f,c,{sparse:!0});d=e;d.length&&b.notifySubscribers(d,
J)}f=c;e=null;g=0})}}if(!b.sb){var c=!1,e=null,g=0,h=b.U;b.U=b.subscribe=function(a,b,c){c===J&&d();return h.apply(this,arguments)};b.sb=function(b,d,m){function l(a,b,c){return q[q.length]={status:a,value:b,index:c}}if(c&&!g){var q=[],h=b.length,t=m.length,z=0;switch(d){case "push":z=h;case "unshift":for(d=0;d<t;d++)l("added",m[d],z+d);break;case "pop":z=h-1;case "shift":h&&l("deleted",b[z],z);break;case "splice":d=Math.min(Math.max(0,0>m[0]?h+m[0]:m[0]),h);for(var h=1===t?h:Math.min(d+(m[1]||0),
h),t=d+t-2,z=Math.max(h,t),u=[],r=[],E=2;d<z;++d,++E)d<h&&r.push(l("deleted",b[d],d)),d<t&&u.push(l("added",m[E],d));a.a.wb(r,u);break;default:return}e=q}}}};a.s=a.j=function(b,d,c){function e(){a.a.G(v,function(a,b){b.K()});v={}}function g(){e();C=0;u=!0;n=!1}function h(){var a=f.throttleEvaluation;a&&0<=a?(clearTimeout(P),P=setTimeout(k,a)):f.ib?f.ib():k()}function k(b){if(t){if(E)throw Error("A 'pure' computed must not be called recursively");}else if(!u){if(w&&w()){if(!z){s();return}}else z=!1;
t=!0;if(y)try{var c={};a.k.Ea({wa:function(a,b){c[b]||(c[b]=1,++C)},s:f,ma:p});C=0;q=r.call(d)}finally{a.k.end(),t=!1}else try{var e=v,m=C;a.k.Ea({wa:function(a,b){u||(m&&e[b]?(v[b]=e[b],++C,delete e[b],--m):v[b]||(v[b]=a.U(h),++C))},s:f,ma:E?p:!C});v={};C=0;try{var l=d?r.call(d):r()}finally{a.k.end(),m&&a.a.G(e,function(a,b){b.K()}),n=!1}f.Pa(q,l)&&(f.notifySubscribers(q,"beforeChange"),q=l,!0!==b&&f.notifySubscribers(q))}finally{t=!1}C||s()}}function f(){if(0<arguments.length){if("function"===typeof O)O.apply(d,
arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");return this}a.k.Jb(f);n&&k(!0);return q}function m(){n&&!C&&k(!0);return q}function l(){return n||0<C}var q,n=!0,t=!1,z=!1,u=!1,r=b,E=!1,y=!1;r&&"object"==typeof r?(c=r,r=c.read):(c=c||{},r||(r=c.read));if("function"!=typeof r)throw Error("Pass a function that returns the value of the ko.computed");var O=c.write,x=c.disposeWhenNodeIsRemoved||
c.o||null,B=c.disposeWhen||c.Ia,w=B,s=g,v={},C=0,P=null;d||(d=c.owner);a.P.call(f);a.a.Aa(f,a.j.fn);f.v=m;f.la=function(){return C};f.hc="function"===typeof c.write;f.K=function(){s()};f.Z=l;var A=f.Ta;f.Ta=function(a){A.call(f,a);f.ib=function(){f.kb(q);n=!0;f.lb(f)}};c.pure?(y=E=!0,f.va=function(){y&&(y=!1,k(!0))},f.nb=function(){f.yb()||(e(),y=n=!0)}):c.deferEvaluation&&(f.va=function(){m();delete f.va});a.A(f,"peek",f.v);a.A(f,"dispose",f.K);a.A(f,"isActive",f.Z);a.A(f,"getDependenciesCount",
f.la);x&&(z=!0,x.nodeType&&(w=function(){return!a.a.Ja(x)||B&&B()}));y||c.deferEvaluation||k();x&&l()&&x.nodeType&&(s=function(){a.a.w.Kb(x,s);g()},a.a.w.da(x,s));return f};a.jc=function(b){return a.Ma(b,a.j)};A=a.p.rc;a.j[A]=a.p;a.j.fn={equalityComparer:H};a.j.fn[A]=a.j;a.a.xa&&a.a.za(a.j.fn,a.P.fn);a.b("dependentObservable",a.j);a.b("computed",a.j);a.b("isComputed",a.jc);a.Ib=function(b,d){if("function"===typeof b)return a.s(b,d,{pure:!0});b=a.a.extend({},b);b.pure=!0;return a.s(b,d)};a.b("pureComputed",
a.Ib);(function(){function b(a,g,h){h=h||new c;a=g(a);if("object"!=typeof a||null===a||a===p||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a;var k=a instanceof Array?[]:{};h.save(a,k);d(a,function(c){var d=g(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":k[c]=d;break;case "object":case "undefined":var l=h.get(d);k[c]=l!==p?l:b(d,g,h)}});return k}function d(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==
typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function c(){this.keys=[];this.hb=[]}a.Qb=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c,function(b){for(var c=0;a.C(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.Qb(b);return a.a.eb(b,c,d)};c.prototype={save:function(b,c){var d=a.a.m(this.keys,b);0<=d?this.hb[d]=c:(this.keys.push(b),this.hb.push(c))},get:function(b){b=a.a.m(this.keys,b);return 0<=b?this.hb[b]:p}}})();
a.b("toJS",a.Qb);a.b("toJSON",a.toJSON);(function(){a.i={q:function(b){switch(a.a.t(b)){case "option":return!0===b.__ko__hasDomDataOptionValue__?a.a.e.get(b,a.d.options.Va):7>=a.a.L?b.getAttributeNode("value")&&b.getAttributeNode("value").specified?b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.i.q(b.options[b.selectedIndex]):p;default:return b.value}},ca:function(b,d,c){switch(a.a.t(b)){case "option":switch(typeof d){case "string":a.a.e.set(b,a.d.options.Va,p);"__ko__hasDomDataOptionValue__"in
b&&delete b.__ko__hasDomDataOptionValue__;b.value=d;break;default:a.a.e.set(b,a.d.options.Va,d),b.__ko__hasDomDataOptionValue__=!0,b.value="number"===typeof d?d:""}break;case "select":if(""===d||null===d)d=p;for(var e=-1,g=0,h=b.options.length,k;g<h;++g)if(k=a.i.q(b.options[g]),k==d||""==k&&d===p){e=g;break}if(c||0<=e||d===p&&1<b.size)b.selectedIndex=e;break;default:if(null===d||d===p)d="";b.value=d}}}})();a.b("selectExtensions",a.i);a.b("selectExtensions.readValue",a.i.q);a.b("selectExtensions.writeValue",
a.i.ca);a.h=function(){function b(b){b=a.a.cb(b);123===b.charCodeAt(0)&&(b=b.slice(1,-1));var c=[],d=b.match(e),k,n,t=0;if(d){d.push(",");for(var z=0,u;u=d[z];++z){var r=u.charCodeAt(0);if(44===r){if(0>=t){k&&c.push(n?{key:k,value:n.join("")}:{unknown:k});k=n=t=0;continue}}else if(58===r){if(!n)continue}else if(47===r&&z&&1<u.length)(r=d[z-1].match(g))&&!h[r[0]]&&(b=b.substr(b.indexOf(u)+1),d=b.match(e),d.push(","),z=-1,u="/");else if(40===r||123===r||91===r)++t;else if(41===r||125===r||93===r)--t;
else if(!k&&!n){k=34===r||39===r?u.slice(1,-1):u;continue}n?n.push(u):n=[u]}}return c}var d=["true","false","null","undefined"],c=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,e=RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]","g"),g=/[\])"'A-Za-z0-9_$]+$/,h={"in":1,"return":1,"typeof":1},k={};return{ha:[],V:k,Wa:b,ya:function(f,m){function e(b,m){var f;if(!z){var u=a.getBindingHandler(b);if(u&&u.preprocess&&
!(m=u.preprocess(m,b,e)))return;if(u=k[b])f=m,0<=a.a.m(d,f)?f=!1:(u=f.match(c),f=null===u?!1:u[1]?"Object("+u[1]+")"+u[2]:f),u=f;u&&h.push("'"+b+"':function(_z){"+f+"=_z}")}t&&(m="function(){return "+m+" }");g.push("'"+b+"':"+m)}m=m||{};var g=[],h=[],t=m.valueAccessors,z=m.bindingParams,u="string"===typeof f?b(f):f;a.a.u(u,function(a){e(a.key||a.unknown,a.value)});h.length&&e("_ko_property_writers","{"+h.join(",")+" }");return g.join(",")},lc:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==
b)return!0;return!1},pa:function(b,c,d,e,k){if(b&&a.C(b))!a.Ra(b)||k&&b.v()===e||b(e);else if((b=c.get("_ko_property_writers"))&&b[d])b[d](e)}}}();a.b("expressionRewriting",a.h);a.b("expressionRewriting.bindingRewriteValidators",a.h.ha);a.b("expressionRewriting.parseObjectLiteral",a.h.Wa);a.b("expressionRewriting.preProcessBindings",a.h.ya);a.b("expressionRewriting._twoWayBindings",a.h.V);a.b("jsonExpressionRewriting",a.h);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.h.ya);(function(){function b(a){return 8==
a.nodeType&&h.test(g?a.text:a.nodeValue)}function d(a){return 8==a.nodeType&&k.test(g?a.text:a.nodeValue)}function c(a,c){for(var f=a,e=1,k=[];f=f.nextSibling;){if(d(f)&&(e--,0===e))return k;k.push(f);b(f)&&e++}if(!c)throw Error("Cannot find closing comment tag to match: "+a.nodeValue);return null}function e(a,b){var d=c(a,b);return d?0<d.length?d[d.length-1].nextSibling:a.nextSibling:null}var g=v&&"\x3c!--test--\x3e"===v.createComment("test").text,h=g?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,
k=g?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,f={ul:!0,ol:!0};a.f={Q:{},childNodes:function(a){return b(a)?c(a):a.childNodes},ja:function(c){if(b(c)){c=a.f.childNodes(c);for(var d=0,f=c.length;d<f;d++)a.removeNode(c[d])}else a.a.Ka(c)},T:function(c,d){if(b(c)){a.f.ja(c);for(var f=c.nextSibling,e=0,k=d.length;e<k;e++)f.parentNode.insertBefore(d[e],f)}else a.a.T(c,d)},Hb:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},Bb:function(c,
d,f){f?b(c)?c.parentNode.insertBefore(d,f.nextSibling):f.nextSibling?c.insertBefore(d,f.nextSibling):c.appendChild(d):a.f.Hb(c,d)},firstChild:function(a){return b(a)?!a.nextSibling||d(a.nextSibling)?null:a.nextSibling:a.firstChild},nextSibling:function(a){b(a)&&(a=e(a));return a.nextSibling&&d(a.nextSibling)?null:a.nextSibling},gc:b,xc:function(a){return(a=(g?a.text:a.nodeValue).match(h))?a[1]:null},Fb:function(c){if(f[a.a.t(c)]){var k=c.firstChild;if(k){do if(1===k.nodeType){var g;g=k.firstChild;
var h=null;if(g){do if(h)h.push(g);else if(b(g)){var t=e(g,!0);t?g=t:h=[g]}else d(g)&&(h=[g]);while(g=g.nextSibling)}if(g=h)for(h=k.nextSibling,t=0;t<g.length;t++)h?c.insertBefore(g[t],h):c.appendChild(g[t])}while(k=k.nextSibling)}}}}})();a.b("virtualElements",a.f);a.b("virtualElements.allowedBindings",a.f.Q);a.b("virtualElements.emptyNode",a.f.ja);a.b("virtualElements.insertAfter",a.f.Bb);a.b("virtualElements.prepend",a.f.Hb);a.b("virtualElements.setDomNodeChildren",a.f.T);(function(){a.J=function(){this.Yb=
{}};a.a.extend(a.J.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=b.getAttribute("data-bind")||a.g.getComponentNameForNode(b);case 8:return a.f.gc(b);default:return!1}},getBindings:function(b,d){var c=this.getBindingsString(b,d),c=c?this.parseBindingsString(c,d,b):null;return a.g.mb(c,b,d,!1)},getBindingAccessors:function(b,d){var c=this.getBindingsString(b,d),c=c?this.parseBindingsString(c,d,b,{valueAccessors:!0}):null;return a.g.mb(c,b,d,!0)},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");
case 8:return a.f.xc(b);default:return null}},parseBindingsString:function(b,d,c,e){try{var g=this.Yb,h=b+(e&&e.valueAccessors||""),k;if(!(k=g[h])){var f,m="with($context){with($data||{}){return{"+a.h.ya(b,e)+"}}}";f=new Function("$context","$element",m);k=g[h]=f}return k(d,c)}catch(l){throw l.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+l.message,l;}}});a.J.instance=new a.J})();a.b("bindingProvider",a.J);(function(){function b(a){return function(){return a}}function d(a){return a()}
function c(b){return a.a.na(a.k.B(b),function(a,c){return function(){return b()[c]}})}function e(a,b){return c(this.getBindings.bind(this,a,b))}function g(b,c,d){var f,e=a.f.firstChild(c),k=a.J.instance,g=k.preprocessNode;if(g){for(;f=e;)e=a.f.nextSibling(f),g.call(k,f);e=a.f.firstChild(c)}for(;f=e;)e=a.f.nextSibling(f),h(b,f,d)}function h(b,c,d){var e=!0,k=1===c.nodeType;k&&a.f.Fb(c);if(k&&d||a.J.instance.nodeHasBindings(c))e=f(c,null,b,d).shouldBindDescendants;e&&!l[a.a.t(c)]&&g(b,c,!k)}function k(b){var c=
[],d={},f=[];a.a.G(b,function y(e){if(!d[e]){var k=a.getBindingHandler(e);k&&(k.after&&(f.push(e),a.a.u(k.after,function(c){if(b[c]){if(-1!==a.a.m(f,c))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+f.join(", "));y(c)}}),f.length--),c.push({key:e,zb:k}));d[e]=!0}});return c}function f(b,c,f,g){var m=a.a.e.get(b,q);if(!c){if(m)throw Error("You cannot apply bindings multiple times to the same element.");a.a.e.set(b,q,!0)}!m&&g&&a.Ob(b,f);var l;if(c&&"function"!==
typeof c)l=c;else{var h=a.J.instance,n=h.getBindingAccessors||e,s=a.j(function(){(l=c?c(f,b):n.call(h,b,f))&&f.I&&f.I();return l},null,{o:b});l&&s.Z()||(s=null)}var v;if(l){var w=s?function(a){return function(){return d(s()[a])}}:function(a){return l[a]},A=function(){return a.a.na(s?s():l,d)};A.get=function(a){return l[a]&&d(w(a))};A.has=function(a){return a in l};g=k(l);a.a.u(g,function(c){var d=c.zb.init,e=c.zb.update,k=c.key;if(8===b.nodeType&&!a.f.Q[k])throw Error("The binding '"+k+"' cannot be used with virtual elements");
try{"function"==typeof d&&a.k.B(function(){var a=d(b,w(k),A,f.$data,f);if(a&&a.controlsDescendantBindings){if(v!==p)throw Error("Multiple bindings ("+v+" and "+k+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");v=k}}),"function"==typeof e&&a.j(function(){e(b,w(k),A,f.$data,f)},null,{o:b})}catch(g){throw g.message='Unable to process binding "'+k+": "+l[k]+'"\nMessage: '+g.message,g;}})}return{shouldBindDescendants:v===p}}
function m(b){return b&&b instanceof a.N?b:new a.N(b)}a.d={};var l={script:!0};a.getBindingHandler=function(b){return a.d[b]};a.N=function(b,c,d,f){var e=this,k="function"==typeof b&&!a.C(b),g,m=a.j(function(){var g=k?b():b,l=a.a.c(g);c?(c.I&&c.I(),a.a.extend(e,c),m&&(e.I=m)):(e.$parents=[],e.$root=l,e.ko=a);e.$rawData=g;e.$data=l;d&&(e[d]=l);f&&f(e,c,l);return e.$data},null,{Ia:function(){return g&&!a.a.ob(g)},o:!0});m.Z()&&(e.I=m,m.equalityComparer=null,g=[],m.Tb=function(b){g.push(b);a.a.w.da(b,
function(b){a.a.ua(g,b);g.length||(m.K(),e.I=m=p)})})};a.N.prototype.createChildContext=function(b,c,d){return new a.N(b,this,c,function(a,b){a.$parentContext=b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);d&&d(a)})};a.N.prototype.extend=function(b){return new a.N(this.I||this.$data,this,null,function(c,d){c.$rawData=d.$rawData;a.a.extend(c,"function"==typeof b?b():b)})};var q=a.a.e.F(),n=a.a.e.F();a.Ob=function(b,c){if(2==arguments.length)a.a.e.set(b,n,c),
c.I&&c.I.Tb(b);else return a.a.e.get(b,n)};a.ra=function(b,c,d){1===b.nodeType&&a.f.Fb(b);return f(b,c,m(d),!0)};a.Wb=function(d,f,e){e=m(e);return a.ra(d,"function"===typeof f?c(f.bind(null,e,d)):a.a.na(f,b),e)};a.Ca=function(a,b){1!==b.nodeType&&8!==b.nodeType||g(m(a),b,!0)};a.pb=function(a,b){!w&&s.jQuery&&(w=s.jQuery);if(b&&1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");b=b||s.document.body;h(m(a),
b,!0)};a.Ha=function(b){switch(b.nodeType){case 1:case 8:var c=a.Ob(b);if(c)return c;if(b.parentNode)return a.Ha(b.parentNode)}return p};a.$b=function(b){return(b=a.Ha(b))?b.$data:p};a.b("bindingHandlers",a.d);a.b("applyBindings",a.pb);a.b("applyBindingsToDescendants",a.Ca);a.b("applyBindingAccessorsToNode",a.ra);a.b("applyBindingsToNode",a.Wb);a.b("contextFor",a.Ha);a.b("dataFor",a.$b)})();(function(b){function d(d,f){var e=g.hasOwnProperty(d)?g[d]:b,l;e||(e=g[d]=new a.P,c(d,function(a){h[d]=a;delete g[d];
l?e.notifySubscribers(a):setTimeout(function(){e.notifySubscribers(a)},0)}),l=!0);e.U(f)}function c(a,b){e("getConfig",[a],function(c){c?e("loadComponent",[a,c],function(a){b(a)}):b(null)})}function e(c,d,g,l){l||(l=a.g.loaders.slice(0));var h=l.shift();if(h){var n=h[c];if(n){var t=!1;if(n.apply(h,d.concat(function(a){t?g(null):null!==a?g(a):e(c,d,g,l)}))!==b&&(t=!0,!h.suppressLoaderExceptions))throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
}else e(c,d,g,l)}else g(null)}var g={},h={};a.g={get:function(a,c){var e=h.hasOwnProperty(a)?h[a]:b;e?setTimeout(function(){c(e)},0):d(a,c)},tb:function(a){delete h[a]},jb:e};a.g.loaders=[];a.b("components",a.g);a.b("components.get",a.g.get);a.b("components.clearCachedDefinition",a.g.tb)})();(function(){function b(b,c,d,e){function k(){0===--u&&e(h)}var h={},u=2,r=d.template;d=d.viewModel;r?g(c,r,function(c){a.g.jb("loadTemplate",[b,c],function(a){h.template=a;k()})}):k();d?g(c,d,function(c){a.g.jb("loadViewModel",
[b,c],function(a){h[f]=a;k()})}):k()}function d(a,b,c){if("function"===typeof b)c(function(a){return new b(a)});else if("function"===typeof b[f])c(b[f]);else if("instance"in b){var e=b.instance;c(function(){return e})}else"viewModel"in b?d(a,b.viewModel,c):a("Unknown viewModel value: "+b)}function c(b){switch(a.a.t(b)){case "script":return a.a.ba(b.text);case "textarea":return a.a.ba(b.value);case "template":if(e(b.content))return a.a.ia(b.content.childNodes)}return a.a.ia(b.childNodes)}function e(a){return s.DocumentFragment?
a instanceof DocumentFragment:a&&11===a.nodeType}function g(a,b,c){"string"===typeof b.require?N||s.require?(N||s.require)([b.require],c):a("Uses require, but no AMD loader is present"):c(b)}function h(a){return function(b){throw Error("Component '"+a+"': "+b);}}var k={};a.g.tc=function(b,c){if(!c)throw Error("Invalid configuration for "+b);if(a.g.Qa(b))throw Error("Component "+b+" is already registered");k[b]=c};a.g.Qa=function(a){return a in k};a.g.wc=function(b){delete k[b];a.g.tb(b)};a.g.ub={getConfig:function(a,
b){b(k.hasOwnProperty(a)?k[a]:null)},loadComponent:function(a,c,d){var e=h(a);g(e,c,function(c){b(a,e,c,d)})},loadTemplate:function(b,d,f){b=h(b);if("string"===typeof d)f(a.a.ba(d));else if(d instanceof Array)f(d);else if(e(d))f(a.a.S(d.childNodes));else if(d.element)if(d=d.element,s.HTMLElement?d instanceof HTMLElement:d&&d.tagName&&1===d.nodeType)f(c(d));else if("string"===typeof d){var k=v.getElementById(d);k?f(c(k)):b("Cannot find element with ID "+d)}else b("Unknown element type: "+d);else b("Unknown template value: "+
d)},loadViewModel:function(a,b,c){d(h(a),b,c)}};var f="createViewModel";a.b("components.register",a.g.tc);a.b("components.isRegistered",a.g.Qa);a.b("components.unregister",a.g.wc);a.b("components.defaultLoader",a.g.ub);a.g.loaders.push(a.g.ub);a.g.Ub=k})();(function(){function b(b,e){var g=b.getAttribute("params");if(g){var g=d.parseBindingsString(g,e,b,{valueAccessors:!0,bindingParams:!0}),g=a.a.na(g,function(d){return a.s(d,null,{o:b})}),h=a.a.na(g,function(d){return d.Z()?a.s(function(){return a.a.c(d())},
null,{o:b}):d.v()});h.hasOwnProperty("$raw")||(h.$raw=g);return h}return{$raw:{}}}a.g.getComponentNameForNode=function(b){b=a.a.t(b);return a.g.Qa(b)&&b};a.g.mb=function(c,d,g,h){if(1===d.nodeType){var k=a.g.getComponentNameForNode(d);if(k){c=c||{};if(c.component)throw Error('Cannot use the "component" binding on a custom element matching a component');var f={name:k,params:b(d,g)};c.component=h?function(){return f}:f}}return c};var d=new a.J;9>a.a.L&&(a.g.register=function(a){return function(b){v.createElement(b);
return a.apply(this,arguments)}}(a.g.register),v.createDocumentFragment=function(b){return function(){var d=b(),g=a.g.Ub,h;for(h in g)g.hasOwnProperty(h)&&d.createElement(h);return d}}(v.createDocumentFragment))})();(function(){var b=0;a.d.component={init:function(d,c,e,g,h){function k(){var a=f&&f.dispose;"function"===typeof a&&a.call(f);m=null}var f,m;a.a.w.da(d,k);a.s(function(){var e=a.a.c(c()),g,n;"string"===typeof e?g=e:(g=a.a.c(e.name),n=a.a.c(e.params));if(!g)throw Error("No component name specified");
var t=m=++b;a.g.get(g,function(b){if(m===t){k();if(!b)throw Error("Unknown component '"+g+"'");var c=b.template;if(!c)throw Error("Component '"+g+"' has no template");c=a.a.ia(c);a.f.T(d,c);var c=n,e=b.createViewModel;b=e?e.call(b,c,{element:d}):c;c=h.createChildContext(b);f=b;a.Ca(c,d)}})},null,{o:d});return{controlsDescendantBindings:!0}}};a.f.Q.component=!0})();var Q={"class":"className","for":"htmlFor"};a.d.attr={update:function(b,d){var c=a.a.c(d())||{};a.a.G(c,function(c,d){d=a.a.c(d);var h=
!1===d||null===d||d===p;h&&b.removeAttribute(c);8>=a.a.L&&c in Q?(c=Q[c],h?b.removeAttribute(c):b[c]=d):h||b.setAttribute(c,d.toString());"name"===c&&a.a.Mb(b,h?"":d.toString())})}};(function(){a.d.checked={after:["value","attr"],init:function(b,d,c){function e(){var e=b.checked,k=q?h():e;if(!a.Y.ma()&&(!f||e)){var g=a.k.B(d);m?l!==k?(e&&(a.a.ea(g,k,!0),a.a.ea(g,l,!1)),l=k):a.a.ea(g,k,e):a.h.pa(g,c,"checked",k,!0)}}function g(){var c=a.a.c(d());b.checked=m?0<=a.a.m(c,h()):k?c:h()===c}var h=a.Ib(function(){return c.has("checkedValue")?
a.a.c(c.get("checkedValue")):c.has("value")?a.a.c(c.get("value")):b.value}),k="checkbox"==b.type,f="radio"==b.type;if(k||f){var m=k&&a.a.c(d())instanceof Array,l=m?h():p,q=f||m;f&&!b.name&&a.d.uniqueName.init(b,function(){return!0});a.s(e,null,{o:b});a.a.n(b,"click",e);a.s(g,null,{o:b})}}};a.h.V.checked=!0;a.d.checkedValue={update:function(b,d){b.value=a.a.c(d())}}})();a.d.css={update:function(b,d){var c=a.a.c(d());"object"==typeof c?a.a.G(c,function(c,d){d=a.a.c(d);a.a.Ba(b,c,d)}):(c=String(c||""),
a.a.Ba(b,b.__ko__cssValue,!1),b.__ko__cssValue=c,a.a.Ba(b,c,!0))}};a.d.enable={update:function(b,d){var c=a.a.c(d());c&&b.disabled?b.removeAttribute("disabled"):c||b.disabled||(b.disabled=!0)}};a.d.disable={update:function(b,d){a.d.enable.update(b,function(){return!a.a.c(d())})}};a.d.event={init:function(b,d,c,e,g){var h=d()||{};a.a.G(h,function(k){"string"==typeof k&&a.a.n(b,k,function(b){var h,l=d()[k];if(l){try{var q=a.a.S(arguments);e=g.$data;q.unshift(e);h=l.apply(e,q)}finally{!0!==h&&(b.preventDefault?
b.preventDefault():b.returnValue=!1)}!1===c.get(k+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};a.d.foreach={Eb:function(b){return function(){var d=b(),c=a.a.Xa(d);if(!c||"number"==typeof c.length)return{foreach:d,templateEngine:a.O.Oa};a.a.c(d);return{foreach:c.data,as:c.as,includeDestroyed:c.includeDestroyed,afterAdd:c.afterAdd,beforeRemove:c.beforeRemove,afterRender:c.afterRender,beforeMove:c.beforeMove,afterMove:c.afterMove,templateEngine:a.O.Oa}}},init:function(b,
d){return a.d.template.init(b,a.d.foreach.Eb(d))},update:function(b,d,c,e,g){return a.d.template.update(b,a.d.foreach.Eb(d),c,e,g)}};a.h.ha.foreach=!1;a.f.Q.foreach=!0;a.d.hasfocus={init:function(b,d,c){function e(e){b.__ko_hasfocusUpdating=!0;var f=b.ownerDocument;if("activeElement"in f){var g;try{g=f.activeElement}catch(h){g=f.body}e=g===b}f=d();a.h.pa(f,c,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var g=e.bind(null,!0),h=e.bind(null,!1);a.a.n(b,"focus",g);a.a.n(b,"focusin",
g);a.a.n(b,"blur",h);a.a.n(b,"focusout",h)},update:function(b,d){var c=!!a.a.c(d());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===c||(c?b.focus():b.blur(),a.k.B(a.a.oa,null,[b,c?"focusin":"focusout"]))}};a.h.V.hasfocus=!0;a.d.hasFocus=a.d.hasfocus;a.h.V.hasFocus=!0;a.d.html={init:function(){return{controlsDescendantBindings:!0}},update:function(b,d){a.a.$a(b,d())}};I("if");I("ifnot",!1,!0);I("with",!0,!1,function(a,d){return a.createChildContext(d)});var K={};a.d.options={init:function(b){if("select"!==
a.a.t(b))throw Error("options binding applies only to SELECT elements");for(;0<b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,d,c){function e(){return a.a.ta(b.options,function(a){return a.selected})}function g(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c}function h(c,d){if(q.length){var e=0<=a.a.m(q,a.i.q(d[0]));a.a.Nb(d[0],e);n&&!e&&a.k.B(a.a.oa,null,[b,"change"])}}var k=0!=b.length&&b.multiple?b.scrollTop:null,f=a.a.c(d()),m=c.get("optionsIncludeDestroyed");
d={};var l,q;q=b.multiple?a.a.Da(e(),a.i.q):0<=b.selectedIndex?[a.i.q(b.options[b.selectedIndex])]:[];f&&("undefined"==typeof f.length&&(f=[f]),l=a.a.ta(f,function(b){return m||b===p||null===b||!a.a.c(b._destroy)}),c.has("optionsCaption")&&(f=a.a.c(c.get("optionsCaption")),null!==f&&f!==p&&l.unshift(K)));var n=!1;d.beforeRemove=function(a){b.removeChild(a)};f=h;c.has("optionsAfterRender")&&(f=function(b,d){h(0,d);a.k.B(c.get("optionsAfterRender"),null,[d[0],b!==K?b:p])});a.a.Za(b,l,function(d,e,f){f.length&&
(q=f[0].selected?[a.i.q(f[0])]:[],n=!0);e=b.ownerDocument.createElement("option");d===K?(a.a.bb(e,c.get("optionsCaption")),a.i.ca(e,p)):(f=g(d,c.get("optionsValue"),d),a.i.ca(e,a.a.c(f)),d=g(d,c.get("optionsText"),f),a.a.bb(e,d));return[e]},d,f);a.k.B(function(){c.get("valueAllowUnset")&&c.has("value")?a.i.ca(b,a.a.c(c.get("value")),!0):(b.multiple?q.length&&e().length<q.length:q.length&&0<=b.selectedIndex?a.i.q(b.options[b.selectedIndex])!==q[0]:q.length||0<=b.selectedIndex)&&a.a.oa(b,"change")});
a.a.dc(b);k&&20<Math.abs(k-b.scrollTop)&&(b.scrollTop=k)}};a.d.options.Va=a.a.e.F();a.d.selectedOptions={after:["options","foreach"],init:function(b,d,c){a.a.n(b,"change",function(){var e=d(),g=[];a.a.u(b.getElementsByTagName("option"),function(b){b.selected&&g.push(a.i.q(b))});a.h.pa(e,c,"selectedOptions",g)})},update:function(b,d){if("select"!=a.a.t(b))throw Error("values binding applies only to SELECT elements");var c=a.a.c(d());c&&"number"==typeof c.length&&a.a.u(b.getElementsByTagName("option"),
function(b){var d=0<=a.a.m(c,a.i.q(b));a.a.Nb(b,d)})}};a.h.V.selectedOptions=!0;a.d.style={update:function(b,d){var c=a.a.c(d()||{});a.a.G(c,function(c,d){d=a.a.c(d);if(null===d||d===p||!1===d)d="";b.style[c]=d})}};a.d.submit={init:function(b,d,c,e,g){if("function"!=typeof d())throw Error("The value for a submit binding must be a function");a.a.n(b,"submit",function(a){var c,e=d();try{c=e.call(g.$data,b)}finally{!0!==c&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}})}};a.d.text={init:function(){return{controlsDescendantBindings:!0}},
update:function(b,d){a.a.bb(b,d())}};a.f.Q.text=!0;(function(){if(s&&s.navigator)var b=function(a){if(a)return parseFloat(a[1])},d=s.opera&&s.opera.version&&parseInt(s.opera.version()),c=s.navigator.userAgent,e=b(c.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),g=b(c.match(/Firefox\/([^ ]*)/));if(10>a.a.L)var h=a.a.e.F(),k=a.a.e.F(),f=function(b){var c=this.activeElement;(c=c&&a.a.e.get(c,k))&&c(b)},m=function(b,c){var d=b.ownerDocument;a.a.e.get(d,h)||(a.a.e.set(d,h,!0),a.a.n(d,"selectionchange",
f));a.a.e.set(b,k,c)};a.d.textInput={init:function(b,c,f){function k(c,d){a.a.n(b,c,d)}function h(){var d=a.a.c(c());if(null===d||d===p)d="";v!==p&&d===v?setTimeout(h,4):b.value!==d&&(s=d,b.value=d)}function u(){y||(v=b.value,y=setTimeout(r,4))}function r(){clearTimeout(y);v=y=p;var d=b.value;s!==d&&(s=d,a.h.pa(c(),f,"textInput",d))}var s=b.value,y,v;10>a.a.L?(k("propertychange",function(a){"value"===a.propertyName&&r()}),8==a.a.L&&(k("keyup",r),k("keydown",r)),8<=a.a.L&&(m(b,r),k("dragend",u))):
(k("input",r),5>e&&"textarea"===a.a.t(b)?(k("keydown",u),k("paste",u),k("cut",u)):11>d?k("keydown",u):4>g&&(k("DOMAutoComplete",r),k("dragdrop",r),k("drop",r)));k("change",r);a.s(h,null,{o:b})}};a.h.V.textInput=!0;a.d.textinput={preprocess:function(a,b,c){c("textInput",a)}}})();a.d.uniqueName={init:function(b,d){if(d()){var c="ko_unique_"+ ++a.d.uniqueName.Zb;a.a.Mb(b,c)}}};a.d.uniqueName.Zb=0;a.d.value={after:["options","foreach"],init:function(b,d,c){if("input"!=b.tagName.toLowerCase()||"checkbox"!=
b.type&&"radio"!=b.type){var e=["change"],g=c.get("valueUpdate"),h=!1,k=null;g&&("string"==typeof g&&(g=[g]),a.a.ga(e,g),e=a.a.rb(e));var f=function(){k=null;h=!1;var e=d(),f=a.i.q(b);a.h.pa(e,c,"value",f)};!a.a.L||"input"!=b.tagName.toLowerCase()||"text"!=b.type||"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||-1!=a.a.m(e,"propertychange")||(a.a.n(b,"propertychange",function(){h=!0}),a.a.n(b,"focus",function(){h=!1}),a.a.n(b,"blur",function(){h&&f()}));a.a.u(e,function(c){var d=f;a.a.vc(c,
"after")&&(d=function(){k=a.i.q(b);setTimeout(f,0)},c=c.substring(5));a.a.n(b,c,d)});var m=function(){var e=a.a.c(d()),f=a.i.q(b);if(null!==k&&e===k)setTimeout(m,0);else if(e!==f)if("select"===a.a.t(b)){var g=c.get("valueAllowUnset"),f=function(){a.i.ca(b,e,g)};f();g||e===a.i.q(b)?setTimeout(f,0):a.k.B(a.a.oa,null,[b,"change"])}else a.i.ca(b,e)};a.s(m,null,{o:b})}else a.ra(b,{checkedValue:d})},update:function(){}};a.h.V.value=!0;a.d.visible={update:function(b,d){var c=a.a.c(d()),e="none"!=b.style.display;
c&&!e?b.style.display="":!c&&e&&(b.style.display="none")}};(function(b){a.d[b]={init:function(d,c,e,g,h){return a.d.event.init.call(this,d,function(){var a={};a[b]=c();return a},e,g,h)}}})("click");a.H=function(){};a.H.prototype.renderTemplateSource=function(){throw Error("Override renderTemplateSource");};a.H.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock");};a.H.prototype.makeTemplateSource=function(b,d){if("string"==typeof b){d=d||v;var c=
d.getElementById(b);if(!c)throw Error("Cannot find template with ID "+b);return new a.r.l(c)}if(1==b.nodeType||8==b.nodeType)return new a.r.fa(b);throw Error("Unknown template type: "+b);};a.H.prototype.renderTemplate=function(a,d,c,e){a=this.makeTemplateSource(a,e);return this.renderTemplateSource(a,d,c)};a.H.prototype.isTemplateRewritten=function(a,d){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,d).data("isRewritten")};a.H.prototype.rewriteTemplate=function(a,d,c){a=this.makeTemplateSource(a,
c);d=d(a.text());a.text(d);a.data("isRewritten",!0)};a.b("templateEngine",a.H);a.fb=function(){function b(b,c,d,k){b=a.h.Wa(b);for(var f=a.h.ha,m=0;m<b.length;m++){var l=b[m].key;if(f.hasOwnProperty(l)){var q=f[l];if("function"===typeof q){if(l=q(b[m].value))throw Error(l);}else if(!q)throw Error("This template engine does not support the '"+l+"' binding within its templates");}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.h.ya(b,{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+
"')";return k.createJavaScriptEvaluatorBlock(d)+c}var d=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,c=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return{ec:function(b,c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.fb.nc(b,c)},d)},nc:function(a,g){return a.replace(d,function(a,c,d,e,l){return b(l,c,d,g)}).replace(c,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",g)})},Xb:function(b,c){return a.D.Ua(function(d,
k){var f=d.nextSibling;f&&f.nodeName.toLowerCase()===c&&a.ra(f,b,k)})}}}();a.b("__tr_ambtns",a.fb.Xb);(function(){a.r={};a.r.l=function(a){this.l=a};a.r.l.prototype.text=function(){var b=a.a.t(this.l),b="script"===b?"text":"textarea"===b?"value":"innerHTML";if(0==arguments.length)return this.l[b];var d=arguments[0];"innerHTML"===b?a.a.$a(this.l,d):this.l[b]=d};var b=a.a.e.F()+"_";a.r.l.prototype.data=function(c){if(1===arguments.length)return a.a.e.get(this.l,b+c);a.a.e.set(this.l,b+c,arguments[1])};
var d=a.a.e.F();a.r.fa=function(a){this.l=a};a.r.fa.prototype=new a.r.l;a.r.fa.prototype.text=function(){if(0==arguments.length){var b=a.a.e.get(this.l,d)||{};b.gb===p&&b.Ga&&(b.gb=b.Ga.innerHTML);return b.gb}a.a.e.set(this.l,d,{gb:arguments[0]})};a.r.l.prototype.nodes=function(){if(0==arguments.length)return(a.a.e.get(this.l,d)||{}).Ga;a.a.e.set(this.l,d,{Ga:arguments[0]})};a.b("templateSources",a.r);a.b("templateSources.domElement",a.r.l);a.b("templateSources.anonymousTemplate",a.r.fa)})();(function(){function b(b,
c,d){var e;for(c=a.f.nextSibling(c);b&&(e=b)!==c;)b=a.f.nextSibling(e),d(e,b)}function d(c,d){if(c.length){var e=c[0],g=c[c.length-1],h=e.parentNode,n=a.J.instance,t=n.preprocessNode;if(t){b(e,g,function(a,b){var c=a.previousSibling,d=t.call(n,a);d&&(a===e&&(e=d[0]||b),a===g&&(g=d[d.length-1]||c))});c.length=0;if(!e)return;e===g?c.push(e):(c.push(e,g),a.a.ka(c,h))}b(e,g,function(b){1!==b.nodeType&&8!==b.nodeType||a.pb(d,b)});b(e,g,function(b){1!==b.nodeType&&8!==b.nodeType||a.D.Sb(b,[d])});a.a.ka(c,
h)}}function c(a){return a.nodeType?a:0<a.length?a[0]:null}function e(b,e,h,l,q){q=q||{};var n=b&&c(b),n=n&&n.ownerDocument,t=q.templateEngine||g;a.fb.ec(h,t,n);h=t.renderTemplate(h,l,q,n);if("number"!=typeof h.length||0<h.length&&"number"!=typeof h[0].nodeType)throw Error("Template engine must return an array of DOM nodes");n=!1;switch(e){case "replaceChildren":a.f.T(b,h);n=!0;break;case "replaceNode":a.a.Lb(b,h);n=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+
e);}n&&(d(h,l),q.afterRender&&a.k.B(q.afterRender,null,[h,l.$data]));return h}var g;a.ab=function(b){if(b!=p&&!(b instanceof a.H))throw Error("templateEngine must inherit from ko.templateEngine");g=b};a.Ya=function(b,d,h,l,q){h=h||{};if((h.templateEngine||g)==p)throw Error("Set a template engine before calling renderTemplate");q=q||"replaceChildren";if(l){var n=c(l);return a.j(function(){var g=d&&d instanceof a.N?d:new a.N(a.a.c(d)),p=a.C(b)?b():"function"===typeof b?b(g.$data,g):b,g=e(l,q,p,g,h);
"replaceNode"==q&&(l=g,n=c(l))},null,{Ia:function(){return!n||!a.a.Ja(n)},o:n&&"replaceNode"==q?n.parentNode:n})}return a.D.Ua(function(c){a.Ya(b,d,h,c,"replaceNode")})};a.uc=function(b,c,g,h,q){function n(a,b){d(b,s);g.afterRender&&g.afterRender(b,a)}function t(c,d){s=q.createChildContext(c,g.as,function(a){a.$index=d});var f=a.C(b)?b():"function"===typeof b?b(c,s):b;return e(null,"ignoreTargetNode",f,s,g)}var s;return a.j(function(){var b=a.a.c(c)||[];"undefined"==typeof b.length&&(b=[b]);b=a.a.ta(b,
function(b){return g.includeDestroyed||b===p||null===b||!a.a.c(b._destroy)});a.k.B(a.a.Za,null,[h,b,t,g,n])},null,{o:h})};var h=a.a.e.F();a.d.template={init:function(b,c){var d=a.a.c(c());"string"==typeof d||d.name?a.f.ja(b):(d=a.f.childNodes(b),d=a.a.oc(d),(new a.r.fa(b)).nodes(d));return{controlsDescendantBindings:!0}},update:function(b,c,d,e,g){var n=c(),t;c=a.a.c(n);d=!0;e=null;"string"==typeof c?c={}:(n=c.name,"if"in c&&(d=a.a.c(c["if"])),d&&"ifnot"in c&&(d=!a.a.c(c.ifnot)),t=a.a.c(c.data));
"foreach"in c?e=a.uc(n||b,d&&c.foreach||[],c,b,g):d?(g="data"in c?g.createChildContext(t,c.as):g,e=a.Ya(n||b,g,c,b)):a.f.ja(b);g=e;(t=a.a.e.get(b,h))&&"function"==typeof t.K&&t.K();a.a.e.set(b,h,g&&g.Z()?g:p)}};a.h.ha.template=function(b){b=a.h.Wa(b);return 1==b.length&&b[0].unknown||a.h.lc(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};a.f.Q.template=!0})();a.b("setTemplateEngine",a.ab);a.b("renderTemplate",a.Ya);a.a.wb=function(a,d,c){if(a.length&&
d.length){var e,g,h,k,f;for(e=g=0;(!c||e<c)&&(k=a[g]);++g){for(h=0;f=d[h];++h)if(k.value===f.value){k.moved=f.index;f.moved=k.index;d.splice(h,1);e=h=0;break}e+=h}}};a.a.Fa=function(){function b(b,c,e,g,h){var k=Math.min,f=Math.max,m=[],l,q=b.length,n,p=c.length,s=p-q||1,u=q+p+1,r,v,w;for(l=0;l<=q;l++)for(v=r,m.push(r=[]),w=k(p,l+s),n=f(0,l-1);n<=w;n++)r[n]=n?l?b[l-1]===c[n-1]?v[n-1]:k(v[n]||u,r[n-1]||u)+1:n+1:l+1;k=[];f=[];s=[];l=q;for(n=p;l||n;)p=m[l][n]-1,n&&p===m[l][n-1]?f.push(k[k.length]={status:e,
value:c[--n],index:n}):l&&p===m[l-1][n]?s.push(k[k.length]={status:g,value:b[--l],index:l}):(--n,--l,h.sparse||k.push({status:"retained",value:c[n]}));a.a.wb(f,s,10*q);return k.reverse()}return function(a,c,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};a=a||[];c=c||[];return a.length<=c.length?b(a,c,"added","deleted",e):b(c,a,"deleted","added",e)}}();a.b("utils.compareArrays",a.a.Fa);(function(){function b(b,d,g,h,k){var f=[],m=a.j(function(){var l=d(g,k,a.a.ka(f,b))||[];0<f.length&&(a.a.Lb(f,
l),h&&a.k.B(h,null,[g,l,k]));f.length=0;a.a.ga(f,l)},null,{o:b,Ia:function(){return!a.a.ob(f)}});return{$:f,j:m.Z()?m:p}}var d=a.a.e.F();a.a.Za=function(c,e,g,h,k){function f(b,d){x=q[d];r!==d&&(A[b]=x);x.Na(r++);a.a.ka(x.$,c);s.push(x);w.push(x)}function m(b,c){if(b)for(var d=0,e=c.length;d<e;d++)c[d]&&a.a.u(c[d].$,function(a){b(a,d,c[d].sa)})}e=e||[];h=h||{};var l=a.a.e.get(c,d)===p,q=a.a.e.get(c,d)||[],n=a.a.Da(q,function(a){return a.sa}),t=a.a.Fa(n,e,h.dontLimitMoves),s=[],u=0,r=0,v=[],w=[];e=
[];for(var A=[],n=[],x,B=0,D,F;D=t[B];B++)switch(F=D.moved,D.status){case "deleted":F===p&&(x=q[u],x.j&&x.j.K(),v.push.apply(v,a.a.ka(x.$,c)),h.beforeRemove&&(e[B]=x,w.push(x)));u++;break;case "retained":f(B,u++);break;case "added":F!==p?f(B,F):(x={sa:D.value,Na:a.p(r++)},s.push(x),w.push(x),l||(n[B]=x))}m(h.beforeMove,A);a.a.u(v,h.beforeRemove?a.R:a.removeNode);for(var B=0,l=a.f.firstChild(c),G;x=w[B];B++){x.$||a.a.extend(x,b(c,g,x.sa,k,x.Na));for(u=0;t=x.$[u];l=t.nextSibling,G=t,u++)t!==l&&a.f.Bb(c,
t,G);!x.ic&&k&&(k(x.sa,x.$,x.Na),x.ic=!0)}m(h.beforeRemove,e);m(h.afterMove,A);m(h.afterAdd,n);a.a.e.set(c,d,s)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.Za);a.O=function(){this.allowTemplateRewriting=!1};a.O.prototype=new a.H;a.O.prototype.renderTemplateSource=function(b){var d=(9>a.a.L?0:b.nodes)?b.nodes():null;if(d)return a.a.S(d.cloneNode(!0).childNodes);b=b.text();return a.a.ba(b)};a.O.Oa=new a.O;a.ab(a.O.Oa);a.b("nativeTemplateEngine",a.O);(function(){a.Sa=function(){var a=this.kc=
function(){if(!w||!w.tmpl)return 0;try{if(0<=w.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,e,g){g=g||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var h=b.data("precompiled");h||(h=b.text()||"",h=w.template(null,"{{ko_with $item.koBindingContext}}"+h+"{{/ko_with}}"),b.data("precompiled",h));b=[e.$data];e=w.extend({koBindingContext:e},g.templateOptions);e=w.tmpl(h,
b,e);e.appendTo(v.createElement("div"));w.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"};this.addTemplate=function(a,b){v.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(w.tmpl.tag.ko_code={open:"__.push($1 || '');"},w.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.Sa.prototype=new a.H;var b=new a.Sa;0<b.kc&&a.ab(b);a.b("jqueryTmplTemplateEngine",a.Sa)})()})})();})();

},{}],4:[function(require,module,exports){
var MainViewModel, Promise, getConfig, getMessages, ko, _ref;

Promise = require('bluebird');

ko = require('knockout');

_ref = require('./message_service.coffee'), getMessages = _ref.getMessages, getConfig = _ref.getConfig;

module.exports = MainViewModel = (function() {
  function MainViewModel() {
    this.messages = ko.observableArray([]);
    Promise.all([getConfig(), getMessages()]).spread((function(_this) {
      return function(config, messages) {
        _this.messageTypes = config.messageTypes;
        return _this.refresh(messages);
      };
    })(this));
  }

  MainViewModel.prototype.refresh = function() {
    return getMessages().then((function(_this) {
      return function(newMessages) {
        var message, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = newMessages.length; _i < _len; _i++) {
          message = newMessages[_i];
          _results.push(_this.messages.push(message));
        }
        return _results;
      };
    })(this));
  };

  return MainViewModel;

})();



},{"./message_service.coffee":5,"bluebird":8,"knockout":3}],5:[function(require,module,exports){
var $, Promise, apiUrl;

$ = require('jquery');

Promise = require('bluebird');

apiUrl = "/api/v1/events/test";

exports.getConfig = function() {
  return Promise.resolve($.getJSON("" + apiUrl + "/config"));
};

exports.getMessages = function() {
  return Promise.resolve($.getJSON("" + apiUrl + "/messages"));
};



},{"bluebird":8,"jquery":2}],6:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise) {
var SomePromiseArray = Promise._SomePromiseArray;
function Promise$_Any(promises) {
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    if (promise.isRejected()) {
        return promise;
    }
    ret.setHowMany(1);
    ret.setUnwrap();
    ret.init();
    return promise;
}

Promise.any = function Promise$Any(promises) {
    return Promise$_Any(promises);
};

Promise.prototype.any = function Promise$any() {
    return Promise$_Any(this);
};

};

},{}],7:[function(require,module,exports){
(function (process){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var schedule = require("./schedule.js");
var Queue = require("./queue.js");
var errorObj = require("./util.js").errorObj;
var tryCatch1 = require("./util.js").tryCatch1;
var _process = typeof process !== "undefined" ? process : void 0;

function Async() {
    this._isTickUsed = false;
    this._schedule = schedule;
    this._length = 0;
    this._lateBuffer = new Queue(16);
    this._functionBuffer = new Queue(65536);
    var self = this;
    this.consumeFunctionBuffer = function Async$consumeFunctionBuffer() {
        self._consumeFunctionBuffer();
    };
}

Async.prototype.haveItemsQueued = function Async$haveItemsQueued() {
    return this._length > 0;
};

Async.prototype.invokeLater = function Async$invokeLater(fn, receiver, arg) {
    if (_process !== void 0 &&
        _process.domain != null &&
        !fn.domain) {
        fn = _process.domain.bind(fn);
    }
    this._lateBuffer.push(fn, receiver, arg);
    this._queueTick();
};

Async.prototype.invoke = function Async$invoke(fn, receiver, arg) {
    if (_process !== void 0 &&
        _process.domain != null &&
        !fn.domain) {
        fn = _process.domain.bind(fn);
    }
    var functionBuffer = this._functionBuffer;
    functionBuffer.push(fn, receiver, arg);
    this._length = functionBuffer.length();
    this._queueTick();
};

Async.prototype._consumeFunctionBuffer =
function Async$_consumeFunctionBuffer() {
    var functionBuffer = this._functionBuffer;
    while (functionBuffer.length() > 0) {
        var fn = functionBuffer.shift();
        var receiver = functionBuffer.shift();
        var arg = functionBuffer.shift();
        fn.call(receiver, arg);
    }
    this._reset();
    this._consumeLateBuffer();
};

Async.prototype._consumeLateBuffer = function Async$_consumeLateBuffer() {
    var buffer = this._lateBuffer;
    while(buffer.length() > 0) {
        var fn = buffer.shift();
        var receiver = buffer.shift();
        var arg = buffer.shift();
        var res = tryCatch1(fn, receiver, arg);
        if (res === errorObj) {
            this._queueTick();
            if (fn.domain != null) {
                fn.domain.emit("error", res.e);
            } else {
                throw res.e;
            }
        }
    }
};

Async.prototype._queueTick = function Async$_queue() {
    if (!this._isTickUsed) {
        this._schedule(this.consumeFunctionBuffer);
        this._isTickUsed = true;
    }
};

Async.prototype._reset = function Async$_reset() {
    this._isTickUsed = false;
    this._length = 0;
};

module.exports = new Async();

}).call(this,require('_process'))
},{"./queue.js":30,"./schedule.js":33,"./util.js":40,"_process":41}],8:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var Promise = require("./promise.js")();
module.exports = Promise;
},{"./promise.js":25}],9:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var cr = Object.create;
if (cr) {
    var callerCache = cr(null);
    var getterCache = cr(null);
    callerCache[" size"] = getterCache[" size"] = 0;
}

module.exports = function(Promise) {
var util = require("./util.js");
var canEvaluate = util.canEvaluate;
var isIdentifier = util.isIdentifier;

function makeMethodCaller (methodName) {
    return new Function("obj", "                                             \n\
        'use strict'                                                         \n\
        var len = this.length;                                               \n\
        switch(len) {                                                        \n\
            case 1: return obj.methodName(this[0]);                          \n\
            case 2: return obj.methodName(this[0], this[1]);                 \n\
            case 3: return obj.methodName(this[0], this[1], this[2]);        \n\
            case 0: return obj.methodName();                                 \n\
            default: return obj.methodName.apply(obj, this);                 \n\
        }                                                                    \n\
        ".replace(/methodName/g, methodName));
}

function makeGetter (propertyName) {
    return new Function("obj", "                                             \n\
        'use strict';                                                        \n\
        return obj.propertyName;                                             \n\
        ".replace("propertyName", propertyName));
}

function getCompiled(name, compiler, cache) {
    var ret = cache[name];
    if (typeof ret !== "function") {
        if (!isIdentifier(name)) {
            return null;
        }
        ret = compiler(name);
        cache[name] = ret;
        cache[" size"]++;
        if (cache[" size"] > 512) {
            var keys = Object.keys(cache);
            for (var i = 0; i < 256; ++i) delete cache[keys[i]];
            cache[" size"] = keys.length - 256;
        }
    }
    return ret;
}

function getMethodCaller(name) {
    return getCompiled(name, makeMethodCaller, callerCache);
}

function getGetter(name) {
    return getCompiled(name, makeGetter, getterCache);
}

function caller(obj) {
    return obj[this.pop()].apply(obj, this);
}
Promise.prototype.call = function Promise$call(methodName) {
    var $_len = arguments.length;var args = new Array($_len - 1); for(var $_i = 1; $_i < $_len; ++$_i) {args[$_i - 1] = arguments[$_i];}
    if (canEvaluate) {
        var maybeCaller = getMethodCaller(methodName);
        if (maybeCaller !== null) {
            return this._then(maybeCaller, void 0, void 0, args, void 0);
        }
    }
    args.push(methodName);
    return this._then(caller, void 0, void 0, args, void 0);
};

function namedGetter(obj) {
    return obj[this];
}
function indexedGetter(obj) {
    return obj[this];
}
Promise.prototype.get = function Promise$get(propertyName) {
    var isIndex = (typeof propertyName === "number");
    var getter;
    if (!isIndex) {
        if (canEvaluate) {
            var maybeGetter = getGetter(propertyName);
            getter = maybeGetter !== null ? maybeGetter : namedGetter;
        } else {
            getter = namedGetter;
        }
    } else {
        getter = indexedGetter;
    }
    return this._then(getter, void 0, void 0, propertyName, void 0);
};
};

},{"./util.js":40}],10:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL) {
var errors = require("./errors.js");
var canAttach = errors.canAttach;
var async = require("./async.js");
var CancellationError = errors.CancellationError;

Promise.prototype._cancel = function Promise$_cancel(reason) {
    if (!this.isCancellable()) return this;
    var parent;
    var promiseToReject = this;
    while ((parent = promiseToReject._cancellationParent) !== void 0 &&
        parent.isCancellable()) {
        promiseToReject = parent;
    }
    promiseToReject._attachExtraTrace(reason);
    promiseToReject._rejectUnchecked(reason);
};

Promise.prototype.cancel = function Promise$cancel(reason) {
    if (!this.isCancellable()) return this;
    reason = reason !== void 0
        ? (canAttach(reason) ? reason : new Error(reason + ""))
        : new CancellationError();
    async.invokeLater(this._cancel, this, reason);
    return this;
};

Promise.prototype.cancellable = function Promise$cancellable() {
    if (this._cancellable()) return this;
    this._setCancellable();
    this._cancellationParent = void 0;
    return this;
};

Promise.prototype.uncancellable = function Promise$uncancellable() {
    var ret = new Promise(INTERNAL);
    ret._propagateFrom(this, 2 | 4);
    ret._follow(this);
    ret._unsetCancellable();
    return ret;
};

Promise.prototype.fork =
function Promise$fork(didFulfill, didReject, didProgress) {
    var ret = this._then(didFulfill, didReject, didProgress,
                         void 0, void 0);

    ret._setCancellable();
    ret._cancellationParent = void 0;
    return ret;
};
};

},{"./async.js":7,"./errors.js":15}],11:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function() {
var inherits = require("./util.js").inherits;
var defineProperty = require("./es5.js").defineProperty;

var rignore = new RegExp(
    "\\b(?:[a-zA-Z0-9.]+\\$_\\w+|" +
    "tryCatch(?:1|2|3|4|Apply)|new \\w*PromiseArray|" +
    "\\w*PromiseArray\\.\\w*PromiseArray|" +
    "setTimeout|CatchFilter\\$_\\w+|makeNodePromisified|processImmediate|" +
    "process._tickCallback|nextTick|Async\\$\\w+)\\b"
);

var rtraceline = null;
var formatStack = null;

function formatNonError(obj) {
    var str;
    if (typeof obj === "function") {
        str = "[function " +
            (obj.name || "anonymous") +
            "]";
    } else {
        str = obj.toString();
        var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
        if (ruselessToString.test(str)) {
            try {
                var newStr = JSON.stringify(obj);
                str = newStr;
            }
            catch(e) {

            }
        }
        if (str.length === 0) {
            str = "(empty array)";
        }
    }
    return ("(<" + snip(str) + ">, no stack trace)");
}

function snip(str) {
    var maxChars = 41;
    if (str.length < maxChars) {
        return str;
    }
    return str.substr(0, maxChars - 3) + "...";
}

function CapturedTrace(ignoreUntil, isTopLevel) {
    this.captureStackTrace(CapturedTrace, isTopLevel);

}
inherits(CapturedTrace, Error);

CapturedTrace.prototype.captureStackTrace =
function CapturedTrace$captureStackTrace(ignoreUntil, isTopLevel) {
    captureStackTrace(this, ignoreUntil, isTopLevel);
};

CapturedTrace.possiblyUnhandledRejection =
function CapturedTrace$PossiblyUnhandledRejection(reason) {
    if (typeof console === "object") {
        var message;
        if (typeof reason === "object" || typeof reason === "function") {
            var stack = reason.stack;
            message = "Possibly unhandled " + formatStack(stack, reason);
        } else {
            message = "Possibly unhandled " + String(reason);
        }
        if (typeof console.error === "function" ||
            typeof console.error === "object") {
            console.error(message);
        } else if (typeof console.log === "function" ||
            typeof console.log === "object") {
            console.log(message);
        }
    }
};

CapturedTrace.combine = function CapturedTrace$Combine(current, prev) {
    var curLast = current.length - 1;
    for (var i = prev.length - 1; i >= 0; --i) {
        var line = prev[i];
        if (current[curLast] === line) {
            current.pop();
            curLast--;
        } else {
            break;
        }
    }

    current.push("From previous event:");
    var lines = current.concat(prev);

    var ret = [];

    for (var i = 0, len = lines.length; i < len; ++i) {

        if (((rignore.test(lines[i]) && rtraceline.test(lines[i])) ||
            (i > 0 && !rtraceline.test(lines[i])) &&
            lines[i] !== "From previous event:")
       ) {
            continue;
        }
        ret.push(lines[i]);
    }
    return ret;
};

CapturedTrace.protectErrorMessageNewlines = function(stack) {
    for (var i = 0; i < stack.length; ++i) {
        if (rtraceline.test(stack[i])) {
            break;
        }
    }

    if (i <= 1) return;

    var errorMessageLines = [];
    for (var j = 0; j < i; ++j) {
        errorMessageLines.push(stack.shift());
    }
    stack.unshift(errorMessageLines.join("\u0002\u0000\u0001"));
};

CapturedTrace.isSupported = function CapturedTrace$IsSupported() {
    return typeof captureStackTrace === "function";
};

var captureStackTrace = (function stackDetection() {
    if (typeof Error.stackTraceLimit === "number" &&
        typeof Error.captureStackTrace === "function") {
        rtraceline = /^\s*at\s*/;
        formatStack = function(stack, error) {
            if (typeof stack === "string") return stack;

            if (error.name !== void 0 &&
                error.message !== void 0) {
                return error.name + ". " + error.message;
            }
            return formatNonError(error);


        };
        var captureStackTrace = Error.captureStackTrace;
        return function CapturedTrace$_captureStackTrace(
            receiver, ignoreUntil) {
            captureStackTrace(receiver, ignoreUntil);
        };
    }
    var err = new Error();

    if (typeof err.stack === "string" &&
        typeof "".startsWith === "function" &&
        (err.stack.startsWith("stackDetection@")) &&
        stackDetection.name === "stackDetection") {

        defineProperty(Error, "stackTraceLimit", {
            writable: true,
            enumerable: false,
            configurable: false,
            value: 25
        });
        rtraceline = /@/;
        var rline = /[@\n]/;

        formatStack = function(stack, error) {
            if (typeof stack === "string") {
                return (error.name + ". " + error.message + "\n" + stack);
            }

            if (error.name !== void 0 &&
                error.message !== void 0) {
                return error.name + ". " + error.message;
            }
            return formatNonError(error);
        };

        return function captureStackTrace(o) {
            var stack = new Error().stack;
            var split = stack.split(rline);
            var len = split.length;
            var ret = "";
            for (var i = 0; i < len; i += 2) {
                ret += split[i];
                ret += "@";
                ret += split[i + 1];
                ret += "\n";
            }
            o.stack = ret;
        };
    } else {
        formatStack = function(stack, error) {
            if (typeof stack === "string") return stack;

            if ((typeof error === "object" ||
                typeof error === "function") &&
                error.name !== void 0 &&
                error.message !== void 0) {
                return error.name + ". " + error.message;
            }
            return formatNonError(error);
        };

        return null;
    }
})();

return CapturedTrace;
};

},{"./es5.js":17,"./util.js":40}],12:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(NEXT_FILTER) {
var util = require("./util.js");
var errors = require("./errors.js");
var tryCatch1 = util.tryCatch1;
var errorObj = util.errorObj;
var keys = require("./es5.js").keys;
var TypeError = errors.TypeError;

function CatchFilter(instances, callback, promise) {
    this._instances = instances;
    this._callback = callback;
    this._promise = promise;
}

function CatchFilter$_safePredicate(predicate, e) {
    var safeObject = {};
    var retfilter = tryCatch1(predicate, safeObject, e);

    if (retfilter === errorObj) return retfilter;

    var safeKeys = keys(safeObject);
    if (safeKeys.length) {
        errorObj.e = new TypeError(
            "Catch filter must inherit from Error "
          + "or be a simple predicate function");
        return errorObj;
    }
    return retfilter;
}

CatchFilter.prototype.doFilter = function CatchFilter$_doFilter(e) {
    var cb = this._callback;
    var promise = this._promise;
    var boundTo = promise._boundTo;
    for (var i = 0, len = this._instances.length; i < len; ++i) {
        var item = this._instances[i];
        var itemIsErrorType = item === Error ||
            (item != null && item.prototype instanceof Error);

        if (itemIsErrorType && e instanceof item) {
            var ret = tryCatch1(cb, boundTo, e);
            if (ret === errorObj) {
                NEXT_FILTER.e = ret.e;
                return NEXT_FILTER;
            }
            return ret;
        } else if (typeof item === "function" && !itemIsErrorType) {
            var shouldHandle = CatchFilter$_safePredicate(item, e);
            if (shouldHandle === errorObj) {
                var trace = errors.canAttach(errorObj.e)
                    ? errorObj.e
                    : new Error(errorObj.e + "");
                this._promise._attachExtraTrace(trace);
                e = errorObj.e;
                break;
            } else if (shouldHandle) {
                var ret = tryCatch1(cb, boundTo, e);
                if (ret === errorObj) {
                    NEXT_FILTER.e = ret.e;
                    return NEXT_FILTER;
                }
                return ret;
            }
        }
    }
    NEXT_FILTER.e = e;
    return NEXT_FILTER;
};

return CatchFilter;
};

},{"./errors.js":15,"./es5.js":17,"./util.js":40}],13:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var util = require("./util.js");
var isPrimitive = util.isPrimitive;
var wrapsPrimitiveReceiver = util.wrapsPrimitiveReceiver;

module.exports = function(Promise) {
var returner = function Promise$_returner() {
    return this;
};
var thrower = function Promise$_thrower() {
    throw this;
};

var wrapper = function Promise$_wrapper(value, action) {
    if (action === 1) {
        return function Promise$_thrower() {
            throw value;
        };
    } else if (action === 2) {
        return function Promise$_returner() {
            return value;
        };
    }
};


Promise.prototype["return"] =
Promise.prototype.thenReturn =
function Promise$thenReturn(value) {
    if (wrapsPrimitiveReceiver && isPrimitive(value)) {
        return this._then(
            wrapper(value, 2),
            void 0,
            void 0,
            void 0,
            void 0
       );
    }
    return this._then(returner, void 0, void 0, value, void 0);
};

Promise.prototype["throw"] =
Promise.prototype.thenThrow =
function Promise$thenThrow(reason) {
    if (wrapsPrimitiveReceiver && isPrimitive(reason)) {
        return this._then(
            wrapper(reason, 1),
            void 0,
            void 0,
            void 0,
            void 0
       );
    }
    return this._then(thrower, void 0, void 0, reason, void 0);
};
};

},{"./util.js":40}],14:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseReduce = Promise.reduce;

Promise.prototype.each = function Promise$each(fn) {
    return PromiseReduce(this, fn, null, INTERNAL);
};

Promise.each = function Promise$Each(promises, fn) {
    return PromiseReduce(promises, fn, null, INTERNAL);
};
};

},{}],15:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var Objectfreeze = require("./es5.js").freeze;
var util = require("./util.js");
var inherits = util.inherits;
var notEnumerableProp = util.notEnumerableProp;

function markAsOriginatingFromRejection(e) {
    try {
        notEnumerableProp(e, "isOperational", true);
    }
    catch(ignore) {}
}

function originatesFromRejection(e) {
    if (e == null) return false;
    return ((e instanceof OperationalError) ||
        e["isOperational"] === true);
}

function isError(obj) {
    return obj instanceof Error;
}

function canAttach(obj) {
    return isError(obj);
}

function subError(nameProperty, defaultMessage) {
    function SubError(message) {
        if (!(this instanceof SubError)) return new SubError(message);
        this.message = typeof message === "string" ? message : defaultMessage;
        this.name = nameProperty;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
    inherits(SubError, Error);
    return SubError;
}

var _TypeError, _RangeError;
var CancellationError = subError("CancellationError", "cancellation error");
var TimeoutError = subError("TimeoutError", "timeout error");
var AggregateError = subError("AggregateError", "aggregate error");
try {
    _TypeError = TypeError;
    _RangeError = RangeError;
} catch(e) {
    _TypeError = subError("TypeError", "type error");
    _RangeError = subError("RangeError", "range error");
}

var methods = ("join pop push shift unshift slice filter forEach some " +
    "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");

for (var i = 0; i < methods.length; ++i) {
    if (typeof Array.prototype[methods[i]] === "function") {
        AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
    }
}

AggregateError.prototype.length = 0;
AggregateError.prototype["isOperational"] = true;
var level = 0;
AggregateError.prototype.toString = function() {
    var indent = Array(level * 4 + 1).join(" ");
    var ret = "\n" + indent + "AggregateError of:" + "\n";
    level++;
    indent = Array(level * 4 + 1).join(" ");
    for (var i = 0; i < this.length; ++i) {
        var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
        var lines = str.split("\n");
        for (var j = 0; j < lines.length; ++j) {
            lines[j] = indent + lines[j];
        }
        str = lines.join("\n");
        ret += str + "\n";
    }
    level--;
    return ret;
};

function OperationalError(message) {
    this.name = "OperationalError";
    this.message = message;
    this.cause = message;
    this["isOperational"] = true;

    if (message instanceof Error) {
        this.message = message.message;
        this.stack = message.stack;
    } else if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    }

}
inherits(OperationalError, Error);

var key = "__BluebirdErrorTypes__";
var errorTypes = Error[key];
if (!errorTypes) {
    errorTypes = Objectfreeze({
        CancellationError: CancellationError,
        TimeoutError: TimeoutError,
        OperationalError: OperationalError,
        RejectionError: OperationalError,
        AggregateError: AggregateError
    });
    notEnumerableProp(Error, key, errorTypes);
}

module.exports = {
    Error: Error,
    TypeError: _TypeError,
    RangeError: _RangeError,
    CancellationError: errorTypes.CancellationError,
    OperationalError: errorTypes.OperationalError,
    TimeoutError: errorTypes.TimeoutError,
    AggregateError: errorTypes.AggregateError,
    originatesFromRejection: originatesFromRejection,
    markAsOriginatingFromRejection: markAsOriginatingFromRejection,
    canAttach: canAttach
};

},{"./es5.js":17,"./util.js":40}],16:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise) {
var TypeError = require('./errors.js').TypeError;

function apiRejection(msg) {
    var error = new TypeError(msg);
    var ret = Promise.rejected(error);
    var parent = ret._peekContext();
    if (parent != null) {
        parent._attachExtraTrace(error);
    }
    return ret;
}

return apiRejection;
};

},{"./errors.js":15}],17:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
var isES5 = (function(){
    "use strict";
    return this === void 0;
})();

if (isES5) {
    module.exports = {
        freeze: Object.freeze,
        defineProperty: Object.defineProperty,
        keys: Object.keys,
        getPrototypeOf: Object.getPrototypeOf,
        isArray: Array.isArray,
        isES5: isES5
    };
} else {
    var has = {}.hasOwnProperty;
    var str = {}.toString;
    var proto = {}.constructor.prototype;

    var ObjectKeys = function ObjectKeys(o) {
        var ret = [];
        for (var key in o) {
            if (has.call(o, key)) {
                ret.push(key);
            }
        }
        return ret;
    }

    var ObjectDefineProperty = function ObjectDefineProperty(o, key, desc) {
        o[key] = desc.value;
        return o;
    }

    var ObjectFreeze = function ObjectFreeze(obj) {
        return obj;
    }

    var ObjectGetPrototypeOf = function ObjectGetPrototypeOf(obj) {
        try {
            return Object(obj).constructor.prototype;
        }
        catch (e) {
            return proto;
        }
    }

    var ArrayIsArray = function ArrayIsArray(obj) {
        try {
            return str.call(obj) === "[object Array]";
        }
        catch(e) {
            return false;
        }
    }

    module.exports = {
        isArray: ArrayIsArray,
        keys: ObjectKeys,
        defineProperty: ObjectDefineProperty,
        freeze: ObjectFreeze,
        getPrototypeOf: ObjectGetPrototypeOf,
        isES5: isES5
    };
}

},{}],18:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseMap = Promise.map;

Promise.prototype.filter = function Promise$filter(fn, options) {
    return PromiseMap(this, fn, options, INTERNAL);
};

Promise.filter = function Promise$Filter(promises, fn, options) {
    return PromiseMap(promises, fn, options, INTERNAL);
};
};

},{}],19:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, NEXT_FILTER, cast) {
var util = require("./util.js");
var wrapsPrimitiveReceiver = util.wrapsPrimitiveReceiver;
var isPrimitive = util.isPrimitive;
var thrower = util.thrower;

function returnThis() {
    return this;
}
function throwThis() {
    throw this;
}
function return$(r) {
    return function Promise$_returner() {
        return r;
    };
}
function throw$(r) {
    return function Promise$_thrower() {
        throw r;
    };
}
function promisedFinally(ret, reasonOrValue, isFulfilled) {
    var then;
    if (wrapsPrimitiveReceiver && isPrimitive(reasonOrValue)) {
        then = isFulfilled ? return$(reasonOrValue) : throw$(reasonOrValue);
    } else {
        then = isFulfilled ? returnThis : throwThis;
    }
    return ret._then(then, thrower, void 0, reasonOrValue, void 0);
}

function finallyHandler(reasonOrValue) {
    var promise = this.promise;
    var handler = this.handler;

    var ret = promise._isBound()
                    ? handler.call(promise._boundTo)
                    : handler();

    if (ret !== void 0) {
        var maybePromise = cast(ret, void 0);
        if (maybePromise instanceof Promise) {
            return promisedFinally(maybePromise, reasonOrValue,
                                    promise.isFulfilled());
        }
    }

    if (promise.isRejected()) {
        NEXT_FILTER.e = reasonOrValue;
        return NEXT_FILTER;
    } else {
        return reasonOrValue;
    }
}

function tapHandler(value) {
    var promise = this.promise;
    var handler = this.handler;

    var ret = promise._isBound()
                    ? handler.call(promise._boundTo, value)
                    : handler(value);

    if (ret !== void 0) {
        var maybePromise = cast(ret, void 0);
        if (maybePromise instanceof Promise) {
            return promisedFinally(maybePromise, value, true);
        }
    }
    return value;
}

Promise.prototype._passThroughHandler =
function Promise$_passThroughHandler(handler, isFinally) {
    if (typeof handler !== "function") return this.then();

    var promiseAndHandler = {
        promise: this,
        handler: handler
    };

    return this._then(
            isFinally ? finallyHandler : tapHandler,
            isFinally ? finallyHandler : void 0, void 0,
            promiseAndHandler, void 0);
};

Promise.prototype.lastly =
Promise.prototype["finally"] = function Promise$finally(handler) {
    return this._passThroughHandler(handler, true);
};

Promise.prototype.tap = function Promise$tap(handler) {
    return this._passThroughHandler(handler, false);
};
};

},{"./util.js":40}],20:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, apiRejection, INTERNAL, cast) {
var errors = require("./errors.js");
var TypeError = errors.TypeError;
var deprecated = require("./util.js").deprecated;
var util = require("./util.js");
var errorObj = util.errorObj;
var tryCatch1 = util.tryCatch1;
var yieldHandlers = [];

function promiseFromYieldHandler(value, yieldHandlers) {
    var _errorObj = errorObj;
    var _Promise = Promise;
    var len = yieldHandlers.length;
    for (var i = 0; i < len; ++i) {
        var result = tryCatch1(yieldHandlers[i], void 0, value);
        if (result === _errorObj) {
            return _Promise.reject(_errorObj.e);
        }
        var maybePromise = cast(result, promiseFromYieldHandler);
        if (maybePromise instanceof _Promise) return maybePromise;
    }
    return null;
}

function PromiseSpawn(generatorFunction, receiver, yieldHandler) {
    var promise = this._promise = new Promise(INTERNAL);
    promise._setTrace(void 0);
    this._generatorFunction = generatorFunction;
    this._receiver = receiver;
    this._generator = void 0;
    this._yieldHandlers = typeof yieldHandler === "function"
        ? [yieldHandler].concat(yieldHandlers)
        : yieldHandlers;
}

PromiseSpawn.prototype.promise = function PromiseSpawn$promise() {
    return this._promise;
};

PromiseSpawn.prototype._run = function PromiseSpawn$_run() {
    this._generator = this._generatorFunction.call(this._receiver);
    this._receiver =
        this._generatorFunction = void 0;
    this._next(void 0);
};

PromiseSpawn.prototype._continue = function PromiseSpawn$_continue(result) {
    if (result === errorObj) {
        this._generator = void 0;
        var trace = errors.canAttach(result.e)
            ? result.e : new Error(result.e + "");
        this._promise._attachExtraTrace(trace);
        this._promise._reject(result.e, trace);
        return;
    }

    var value = result.value;
    if (result.done === true) {
        this._generator = void 0;
        if (!this._promise._tryFollow(value)) {
            this._promise._fulfill(value);
        }
    } else {
        var maybePromise = cast(value, void 0);
        if (!(maybePromise instanceof Promise)) {
            maybePromise =
                promiseFromYieldHandler(maybePromise, this._yieldHandlers);
            if (maybePromise === null) {
                this._throw(new TypeError("A value was yielded that could not be treated as a promise"));
                return;
            }
        }
        maybePromise._then(
            this._next,
            this._throw,
            void 0,
            this,
            null
       );
    }
};

PromiseSpawn.prototype._throw = function PromiseSpawn$_throw(reason) {
    if (errors.canAttach(reason))
        this._promise._attachExtraTrace(reason);
    this._continue(
        tryCatch1(this._generator["throw"], this._generator, reason)
   );
};

PromiseSpawn.prototype._next = function PromiseSpawn$_next(value) {
    this._continue(
        tryCatch1(this._generator.next, this._generator, value)
   );
};

Promise.coroutine =
function Promise$Coroutine(generatorFunction, options) {
    if (typeof generatorFunction !== "function") {
        throw new TypeError("generatorFunction must be a function");
    }
    var yieldHandler = Object(options).yieldHandler;
    var PromiseSpawn$ = PromiseSpawn;
    return function () {
        var generator = generatorFunction.apply(this, arguments);
        var spawn = new PromiseSpawn$(void 0, void 0, yieldHandler);
        spawn._generator = generator;
        spawn._next(void 0);
        return spawn.promise();
    };
};

Promise.coroutine.addYieldHandler = function(fn) {
    if (typeof fn !== "function") throw new TypeError("fn must be a function");
    yieldHandlers.push(fn);
};

Promise.spawn = function Promise$Spawn(generatorFunction) {
    deprecated("Promise.spawn is deprecated. Use Promise.coroutine instead.");
    if (typeof generatorFunction !== "function") {
        return apiRejection("generatorFunction must be a function");
    }
    var spawn = new PromiseSpawn(generatorFunction, this);
    var ret = spawn.promise();
    spawn._run(Promise.spawn);
    return ret;
};
};

},{"./errors.js":15,"./util.js":40}],21:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports =
function(Promise, PromiseArray, cast, INTERNAL) {
var util = require("./util.js");
var canEvaluate = util.canEvaluate;
var tryCatch1 = util.tryCatch1;
var errorObj = util.errorObj;


if (canEvaluate) {
    var thenCallback = function(i) {
        return new Function("value", "holder", "                             \n\
            'use strict';                                                    \n\
            holder.pIndex = value;                                           \n\
            holder.checkFulfillment(this);                                   \n\
            ".replace(/Index/g, i));
    };

    var caller = function(count) {
        var values = [];
        for (var i = 1; i <= count; ++i) values.push("holder.p" + i);
        return new Function("holder", "                                      \n\
            'use strict';                                                    \n\
            var callback = holder.fn;                                        \n\
            return callback(values);                                         \n\
            ".replace(/values/g, values.join(", ")));
    };
    var thenCallbacks = [];
    var callers = [void 0];
    for (var i = 1; i <= 5; ++i) {
        thenCallbacks.push(thenCallback(i));
        callers.push(caller(i));
    }

    var Holder = function(total, fn) {
        this.p1 = this.p2 = this.p3 = this.p4 = this.p5 = null;
        this.fn = fn;
        this.total = total;
        this.now = 0;
    };

    Holder.prototype.callers = callers;
    Holder.prototype.checkFulfillment = function(promise) {
        var now = this.now;
        now++;
        var total = this.total;
        if (now >= total) {
            var handler = this.callers[total];
            var ret = tryCatch1(handler, void 0, this);
            if (ret === errorObj) {
                promise._rejectUnchecked(ret.e);
            } else if (!promise._tryFollow(ret)) {
                promise._fulfillUnchecked(ret);
            }
        } else {
            this.now = now;
        }
    };
}




Promise.join = function Promise$Join() {
    var last = arguments.length - 1;
    var fn;
    if (last > 0 && typeof arguments[last] === "function") {
        fn = arguments[last];
        if (last < 6 && canEvaluate) {
            var ret = new Promise(INTERNAL);
            ret._setTrace(void 0);
            var holder = new Holder(last, fn);
            var reject = ret._reject;
            var callbacks = thenCallbacks;
            for (var i = 0; i < last; ++i) {
                var maybePromise = cast(arguments[i], void 0);
                if (maybePromise instanceof Promise) {
                    if (maybePromise.isPending()) {
                        maybePromise._then(callbacks[i], reject,
                                           void 0, ret, holder);
                    } else if (maybePromise.isFulfilled()) {
                        callbacks[i].call(ret,
                                          maybePromise._settledValue, holder);
                    } else {
                        ret._reject(maybePromise._settledValue);
                        maybePromise._unsetRejectionIsUnhandled();
                    }
                } else {
                    callbacks[i].call(ret, maybePromise, holder);
                }
            }
            return ret;
        }
    }
    var $_len = arguments.length;var args = new Array($_len); for(var $_i = 0; $_i < $_len; ++$_i) {args[$_i] = arguments[$_i];}
    var ret = new PromiseArray(args).promise();
    return fn !== void 0 ? ret.spread(fn) : ret;
};

};

},{"./util.js":40}],22:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, PromiseArray, apiRejection, cast, INTERNAL) {
var util = require("./util.js");
var tryCatch3 = util.tryCatch3;
var errorObj = util.errorObj;
var PENDING = {};
var EMPTY_ARRAY = [];

function MappingPromiseArray(promises, fn, limit, _filter) {
    this.constructor$(promises);
    this._callback = fn;
    this._preservedValues = _filter === INTERNAL
        ? new Array(this.length())
        : null;
    this._limit = limit;
    this._inFlight = 0;
    this._queue = limit >= 1 ? [] : EMPTY_ARRAY;
    this._init$(void 0, -2);
}
util.inherits(MappingPromiseArray, PromiseArray);

MappingPromiseArray.prototype._init = function MappingPromiseArray$_init() {};

MappingPromiseArray.prototype._promiseFulfilled =
function MappingPromiseArray$_promiseFulfilled(value, index) {
    var values = this._values;
    if (values === null) return;

    var length = this.length();
    var preservedValues = this._preservedValues;
    var limit = this._limit;
    if (values[index] === PENDING) {
        values[index] = value;
        if (limit >= 1) {
            this._inFlight--;
            this._drainQueue();
            if (this._isResolved()) return;
        }
    } else {
        if (limit >= 1 && this._inFlight >= limit) {
            values[index] = value;
            this._queue.push(index);
            return;
        }
        if (preservedValues !== null) preservedValues[index] = value;

        var callback = this._callback;
        var receiver = this._promise._boundTo;
        var ret = tryCatch3(callback, receiver, value, index, length);
        if (ret === errorObj) return this._reject(ret.e);

        var maybePromise = cast(ret, void 0);
        if (maybePromise instanceof Promise) {
            if (maybePromise.isPending()) {
                if (limit >= 1) this._inFlight++;
                values[index] = PENDING;
                return maybePromise._proxyPromiseArray(this, index);
            } else if (maybePromise.isFulfilled()) {
                ret = maybePromise.value();
            } else {
                maybePromise._unsetRejectionIsUnhandled();
                return this._reject(maybePromise.reason());
            }
        }
        values[index] = ret;
    }
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= length) {
        if (preservedValues !== null) {
            this._filter(values, preservedValues);
        } else {
            this._resolve(values);
        }

    }
};

MappingPromiseArray.prototype._drainQueue =
function MappingPromiseArray$_drainQueue() {
    var queue = this._queue;
    var limit = this._limit;
    var values = this._values;
    while (queue.length > 0 && this._inFlight < limit) {
        var index = queue.pop();
        this._promiseFulfilled(values[index], index);
    }
};

MappingPromiseArray.prototype._filter =
function MappingPromiseArray$_filter(booleans, values) {
    var len = values.length;
    var ret = new Array(len);
    var j = 0;
    for (var i = 0; i < len; ++i) {
        if (booleans[i]) ret[j++] = values[i];
    }
    ret.length = j;
    this._resolve(ret);
};

MappingPromiseArray.prototype.preservedValues =
function MappingPromiseArray$preserveValues() {
    return this._preservedValues;
};

function map(promises, fn, options, _filter) {
    var limit = typeof options === "object" && options !== null
        ? options.concurrency
        : 0;
    limit = typeof limit === "number" &&
        isFinite(limit) && limit >= 1 ? limit : 0;
    return new MappingPromiseArray(promises, fn, limit, _filter);
}

Promise.prototype.map = function Promise$map(fn, options) {
    if (typeof fn !== "function") return apiRejection("fn must be a function");

    return map(this, fn, options, null).promise();
};

Promise.map = function Promise$Map(promises, fn, options, _filter) {
    if (typeof fn !== "function") return apiRejection("fn must be a function");
    return map(promises, fn, options, _filter).promise();
};


};

},{"./util.js":40}],23:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise) {
var util = require("./util.js");
var async = require("./async.js");
var tryCatch2 = util.tryCatch2;
var tryCatch1 = util.tryCatch1;
var errorObj = util.errorObj;

function thrower(r) {
    throw r;
}

function Promise$_spreadAdapter(val, receiver) {
    if (!util.isArray(val)) return Promise$_successAdapter(val, receiver);
    var ret = util.tryCatchApply(this, [null].concat(val), receiver);
    if (ret === errorObj) {
        async.invokeLater(thrower, void 0, ret.e);
    }
}

function Promise$_successAdapter(val, receiver) {
    var nodeback = this;
    var ret = val === void 0
        ? tryCatch1(nodeback, receiver, null)
        : tryCatch2(nodeback, receiver, null, val);
    if (ret === errorObj) {
        async.invokeLater(thrower, void 0, ret.e);
    }
}
function Promise$_errorAdapter(reason, receiver) {
    var nodeback = this;
    var ret = tryCatch1(nodeback, receiver, reason);
    if (ret === errorObj) {
        async.invokeLater(thrower, void 0, ret.e);
    }
}

Promise.prototype.nodeify = function Promise$nodeify(nodeback, options) {
    if (typeof nodeback == "function") {
        var adapter = Promise$_successAdapter;
        if (options !== void 0 && Object(options).spread) {
            adapter = Promise$_spreadAdapter;
        }
        this._then(
            adapter,
            Promise$_errorAdapter,
            void 0,
            nodeback,
            this._boundTo
        );
    }
    return this;
};
};

},{"./async.js":7,"./util.js":40}],24:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, PromiseArray) {
var util = require("./util.js");
var async = require("./async.js");
var errors = require("./errors.js");
var tryCatch1 = util.tryCatch1;
var errorObj = util.errorObj;

Promise.prototype.progressed = function Promise$progressed(handler) {
    return this._then(void 0, void 0, handler, void 0, void 0);
};

Promise.prototype._progress = function Promise$_progress(progressValue) {
    if (this._isFollowingOrFulfilledOrRejected()) return;
    this._progressUnchecked(progressValue);

};

Promise.prototype._clearFirstHandlerData$Base =
Promise.prototype._clearFirstHandlerData;
Promise.prototype._clearFirstHandlerData =
function Promise$_clearFirstHandlerData() {
    this._clearFirstHandlerData$Base();
    this._progressHandler0 = void 0;
};

Promise.prototype._progressHandlerAt =
function Promise$_progressHandlerAt(index) {
    return index === 0
        ? this._progressHandler0
        : this[(index << 2) + index - 5 + 2];
};

Promise.prototype._doProgressWith =
function Promise$_doProgressWith(progression) {
    var progressValue = progression.value;
    var handler = progression.handler;
    var promise = progression.promise;
    var receiver = progression.receiver;

    var ret = tryCatch1(handler, receiver, progressValue);
    if (ret === errorObj) {
        if (ret.e != null &&
            ret.e.name !== "StopProgressPropagation") {
            var trace = errors.canAttach(ret.e)
                ? ret.e : new Error(ret.e + "");
            promise._attachExtraTrace(trace);
            promise._progress(ret.e);
        }
    } else if (ret instanceof Promise) {
        ret._then(promise._progress, null, null, promise, void 0);
    } else {
        promise._progress(ret);
    }
};


Promise.prototype._progressUnchecked =
function Promise$_progressUnchecked(progressValue) {
    if (!this.isPending()) return;
    var len = this._length();
    var progress = this._progress;
    for (var i = 0; i < len; i++) {
        var handler = this._progressHandlerAt(i);
        var promise = this._promiseAt(i);
        if (!(promise instanceof Promise)) {
            var receiver = this._receiverAt(i);
            if (typeof handler === "function") {
                handler.call(receiver, progressValue, promise);
            } else if (receiver instanceof Promise && receiver._isProxied()) {
                receiver._progressUnchecked(progressValue);
            } else if (receiver instanceof PromiseArray) {
                receiver._promiseProgressed(progressValue, promise);
            }
            continue;
        }

        if (typeof handler === "function") {
            async.invoke(this._doProgressWith, this, {
                handler: handler,
                promise: promise,
                receiver: this._receiverAt(i),
                value: progressValue
            });
        } else {
            async.invoke(progress, promise, progressValue);
        }
    }
};
};

},{"./async.js":7,"./errors.js":15,"./util.js":40}],25:[function(require,module,exports){
(function (process){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var old;
if (typeof Promise !== "undefined") old = Promise;
function noConflict(bluebird) {
    try { if (Promise === bluebird) Promise = old; }
    catch (e) {}
    return bluebird;
}
module.exports = function() {
var util = require("./util.js");
var async = require("./async.js");
var errors = require("./errors.js");

var INTERNAL = function(){};
var APPLY = {};
var NEXT_FILTER = {e: null};

var cast = require("./thenables.js")(Promise, INTERNAL);
var PromiseArray = require("./promise_array.js")(Promise, INTERNAL, cast);
var CapturedTrace = require("./captured_trace.js")();
var CatchFilter = require("./catch_filter.js")(NEXT_FILTER);
var PromiseResolver = require("./promise_resolver.js");

var isArray = util.isArray;

var errorObj = util.errorObj;
var tryCatch1 = util.tryCatch1;
var tryCatch2 = util.tryCatch2;
var tryCatchApply = util.tryCatchApply;
var RangeError = errors.RangeError;
var TypeError = errors.TypeError;
var CancellationError = errors.CancellationError;
var TimeoutError = errors.TimeoutError;
var OperationalError = errors.OperationalError;
var originatesFromRejection = errors.originatesFromRejection;
var markAsOriginatingFromRejection = errors.markAsOriginatingFromRejection;
var canAttach = errors.canAttach;
var thrower = util.thrower;
var apiRejection = require("./errors_api_rejection")(Promise);


var makeSelfResolutionError = function Promise$_makeSelfResolutionError() {
    return new TypeError("circular promise resolution chain");
};

function Promise(resolver) {
    if (typeof resolver !== "function") {
        throw new TypeError("the promise constructor requires a resolver function");
    }
    if (this.constructor !== Promise) {
        throw new TypeError("the promise constructor cannot be invoked directly");
    }
    this._bitField = 0;
    this._fulfillmentHandler0 = void 0;
    this._rejectionHandler0 = void 0;
    this._promise0 = void 0;
    this._receiver0 = void 0;
    this._settledValue = void 0;
    this._boundTo = void 0;
    if (resolver !== INTERNAL) this._resolveFromResolver(resolver);
}

function returnFirstElement(elements) {
    return elements[0];
}

Promise.prototype.bind = function Promise$bind(thisArg) {
    var maybePromise = cast(thisArg, void 0);
    var ret = new Promise(INTERNAL);
    if (maybePromise instanceof Promise) {
        var binder = maybePromise.then(function(thisArg) {
            ret._setBoundTo(thisArg);
        });
        var p = Promise.all([this, binder]).then(returnFirstElement);
        ret._follow(p);
    } else {
        ret._follow(this);
        ret._setBoundTo(thisArg);
    }
    ret._propagateFrom(this, 2 | 1);
    return ret;
};

Promise.prototype.toString = function Promise$toString() {
    return "[object Promise]";
};

Promise.prototype.caught = Promise.prototype["catch"] =
function Promise$catch(fn) {
    var len = arguments.length;
    if (len > 1) {
        var catchInstances = new Array(len - 1),
            j = 0, i;
        for (i = 0; i < len - 1; ++i) {
            var item = arguments[i];
            if (typeof item === "function") {
                catchInstances[j++] = item;
            } else {
                var catchFilterTypeError =
                    new TypeError(
                        "A catch filter must be an error constructor "
                        + "or a filter function");

                this._attachExtraTrace(catchFilterTypeError);
                return Promise.reject(catchFilterTypeError);
            }
        }
        catchInstances.length = j;
        fn = arguments[i];

        this._resetTrace();
        var catchFilter = new CatchFilter(catchInstances, fn, this);
        return this._then(void 0, catchFilter.doFilter, void 0,
            catchFilter, void 0);
    }
    return this._then(void 0, fn, void 0, void 0, void 0);
};

function reflect() {
    return new Promise.PromiseInspection(this);
}

Promise.prototype.reflect = function Promise$reflect() {
    return this._then(reflect, reflect, void 0, this, void 0);
};

Promise.prototype.then =
function Promise$then(didFulfill, didReject, didProgress) {
    return this._then(didFulfill, didReject, didProgress,
        void 0, void 0);
};


Promise.prototype.done =
function Promise$done(didFulfill, didReject, didProgress) {
    var promise = this._then(didFulfill, didReject, didProgress,
        void 0, void 0);
    promise._setIsFinal();
};

Promise.prototype.spread = function Promise$spread(didFulfill, didReject) {
    return this._then(didFulfill, didReject, void 0,
        APPLY, void 0);
};

Promise.prototype.isCancellable = function Promise$isCancellable() {
    return !this.isResolved() &&
        this._cancellable();
};

Promise.prototype.toJSON = function Promise$toJSON() {
    var ret = {
        isFulfilled: false,
        isRejected: false,
        fulfillmentValue: void 0,
        rejectionReason: void 0
    };
    if (this.isFulfilled()) {
        ret.fulfillmentValue = this._settledValue;
        ret.isFulfilled = true;
    } else if (this.isRejected()) {
        ret.rejectionReason = this._settledValue;
        ret.isRejected = true;
    }
    return ret;
};

Promise.prototype.all = function Promise$all() {
    return new PromiseArray(this).promise();
};


Promise.is = function Promise$Is(val) {
    return val instanceof Promise;
};

Promise.all = function Promise$All(promises) {
    return new PromiseArray(promises).promise();
};

Promise.prototype.error = function Promise$_error(fn) {
    return this.caught(originatesFromRejection, fn);
};

Promise.prototype._resolveFromSyncValue =
function Promise$_resolveFromSyncValue(value) {
    if (value === errorObj) {
        this._cleanValues();
        this._setRejected();
        this._settledValue = value.e;
        this._ensurePossibleRejectionHandled();
    } else {
        var maybePromise = cast(value, void 0);
        if (maybePromise instanceof Promise) {
            this._follow(maybePromise);
        } else {
            this._cleanValues();
            this._setFulfilled();
            this._settledValue = value;
        }
    }
};

Promise.method = function Promise$_Method(fn) {
    if (typeof fn !== "function") {
        throw new TypeError("fn must be a function");
    }
    return function Promise$_method() {
        var value;
        switch(arguments.length) {
        case 0: value = tryCatch1(fn, this, void 0); break;
        case 1: value = tryCatch1(fn, this, arguments[0]); break;
        case 2: value = tryCatch2(fn, this, arguments[0], arguments[1]); break;
        default:
            var $_len = arguments.length;var args = new Array($_len); for(var $_i = 0; $_i < $_len; ++$_i) {args[$_i] = arguments[$_i];}
            value = tryCatchApply(fn, args, this); break;
        }
        var ret = new Promise(INTERNAL);
        ret._setTrace(void 0);
        ret._resolveFromSyncValue(value);
        return ret;
    };
};

Promise.attempt = Promise["try"] = function Promise$_Try(fn, args, ctx) {
    if (typeof fn !== "function") {
        return apiRejection("fn must be a function");
    }
    var value = isArray(args)
        ? tryCatchApply(fn, args, ctx)
        : tryCatch1(fn, ctx, args);

    var ret = new Promise(INTERNAL);
    ret._setTrace(void 0);
    ret._resolveFromSyncValue(value);
    return ret;
};

Promise.defer = Promise.pending = function Promise$Defer() {
    var promise = new Promise(INTERNAL);
    promise._setTrace(void 0);
    return new PromiseResolver(promise);
};

Promise.bind = function Promise$Bind(thisArg) {
    var maybePromise = cast(thisArg, void 0);
    var ret = new Promise(INTERNAL);
    ret._setTrace(void 0);

    if (maybePromise instanceof Promise) {
        var p = maybePromise.then(function(thisArg) {
            ret._setBoundTo(thisArg);
        });
        ret._follow(p);
    } else {
        ret._setBoundTo(thisArg);
        ret._setFulfilled();
    }
    return ret;
};

Promise.cast = function Promise$_Cast(obj) {
    var ret = cast(obj, void 0);
    if (!(ret instanceof Promise)) {
        var val = ret;
        ret = new Promise(INTERNAL);
        ret._setTrace(void 0);
        ret._setFulfilled();
        ret._cleanValues();
        ret._settledValue = val;
    }
    return ret;
};

Promise.resolve = Promise.fulfilled = Promise.cast;

Promise.reject = Promise.rejected = function Promise$Reject(reason) {
    var ret = new Promise(INTERNAL);
    ret._setTrace(void 0);
    markAsOriginatingFromRejection(reason);
    ret._cleanValues();
    ret._setRejected();
    ret._settledValue = reason;
    if (!canAttach(reason)) {
        var trace = new Error(reason + "");
        ret._setCarriedStackTrace(trace);
    }
    ret._ensurePossibleRejectionHandled();
    return ret;
};

Promise.onPossiblyUnhandledRejection =
function Promise$OnPossiblyUnhandledRejection(fn) {
        CapturedTrace.possiblyUnhandledRejection = typeof fn === "function"
                                                    ? fn : void 0;
};

var unhandledRejectionHandled;
Promise.onUnhandledRejectionHandled =
function Promise$onUnhandledRejectionHandled(fn) {
    unhandledRejectionHandled = typeof fn === "function" ? fn : void 0;
};

var debugging = false || !!(
    typeof process !== "undefined" &&
    typeof process.execPath === "string" &&
    typeof process.env === "object" &&
    (process.env["BLUEBIRD_DEBUG"] ||
        process.env["NODE_ENV"] === "development")
);


Promise.longStackTraces = function Promise$LongStackTraces() {
    if (async.haveItemsQueued() &&
        debugging === false
   ) {
        throw new Error("cannot enable long stack traces after promises have been created");
    }
    debugging = CapturedTrace.isSupported();
};

Promise.hasLongStackTraces = function Promise$HasLongStackTraces() {
    return debugging && CapturedTrace.isSupported();
};

Promise.prototype._then =
function Promise$_then(
    didFulfill,
    didReject,
    didProgress,
    receiver,
    internalData
) {
    var haveInternalData = internalData !== void 0;
    var ret = haveInternalData ? internalData : new Promise(INTERNAL);

    if (!haveInternalData) {
        if (debugging) {
            var haveSameContext = this._peekContext() === this._traceParent;
            ret._traceParent = haveSameContext ? this._traceParent : this;
        }
        ret._propagateFrom(this, 7);
    }

    var callbackIndex =
        this._addCallbacks(didFulfill, didReject, didProgress, ret, receiver);

    if (this.isResolved()) {
        async.invoke(this._queueSettleAt, this, callbackIndex);
    }

    return ret;
};

Promise.prototype._length = function Promise$_length() {
    return this._bitField & 262143;
};

Promise.prototype._isFollowingOrFulfilledOrRejected =
function Promise$_isFollowingOrFulfilledOrRejected() {
    return (this._bitField & 939524096) > 0;
};

Promise.prototype._isFollowing = function Promise$_isFollowing() {
    return (this._bitField & 536870912) === 536870912;
};

Promise.prototype._setLength = function Promise$_setLength(len) {
    this._bitField = (this._bitField & -262144) |
        (len & 262143);
};

Promise.prototype._setFulfilled = function Promise$_setFulfilled() {
    this._bitField = this._bitField | 268435456;
};

Promise.prototype._setRejected = function Promise$_setRejected() {
    this._bitField = this._bitField | 134217728;
};

Promise.prototype._setFollowing = function Promise$_setFollowing() {
    this._bitField = this._bitField | 536870912;
};

Promise.prototype._setIsFinal = function Promise$_setIsFinal() {
    this._bitField = this._bitField | 33554432;
};

Promise.prototype._isFinal = function Promise$_isFinal() {
    return (this._bitField & 33554432) > 0;
};

Promise.prototype._cancellable = function Promise$_cancellable() {
    return (this._bitField & 67108864) > 0;
};

Promise.prototype._setCancellable = function Promise$_setCancellable() {
    this._bitField = this._bitField | 67108864;
};

Promise.prototype._unsetCancellable = function Promise$_unsetCancellable() {
    this._bitField = this._bitField & (~67108864);
};

Promise.prototype._setRejectionIsUnhandled =
function Promise$_setRejectionIsUnhandled() {
    this._bitField = this._bitField | 2097152;
};

Promise.prototype._unsetRejectionIsUnhandled =
function Promise$_unsetRejectionIsUnhandled() {
    this._bitField = this._bitField & (~2097152);
    if (this._isUnhandledRejectionNotified()) {
        this._unsetUnhandledRejectionIsNotified();
        this._notifyUnhandledRejectionIsHandled();
    }
};

Promise.prototype._isRejectionUnhandled =
function Promise$_isRejectionUnhandled() {
    return (this._bitField & 2097152) > 0;
};

Promise.prototype._setUnhandledRejectionIsNotified =
function Promise$_setUnhandledRejectionIsNotified() {
    this._bitField = this._bitField | 524288;
};

Promise.prototype._unsetUnhandledRejectionIsNotified =
function Promise$_unsetUnhandledRejectionIsNotified() {
    this._bitField = this._bitField & (~524288);
};

Promise.prototype._isUnhandledRejectionNotified =
function Promise$_isUnhandledRejectionNotified() {
    return (this._bitField & 524288) > 0;
};

Promise.prototype._setCarriedStackTrace =
function Promise$_setCarriedStackTrace(capturedTrace) {
    this._bitField = this._bitField | 1048576;
    this._fulfillmentHandler0 = capturedTrace;
};

Promise.prototype._unsetCarriedStackTrace =
function Promise$_unsetCarriedStackTrace() {
    this._bitField = this._bitField & (~1048576);
    this._fulfillmentHandler0 = void 0;
};

Promise.prototype._isCarryingStackTrace =
function Promise$_isCarryingStackTrace() {
    return (this._bitField & 1048576) > 0;
};

Promise.prototype._getCarriedStackTrace =
function Promise$_getCarriedStackTrace() {
    return this._isCarryingStackTrace()
        ? this._fulfillmentHandler0
        : void 0;
};

Promise.prototype._receiverAt = function Promise$_receiverAt(index) {
    var ret = index === 0
        ? this._receiver0
        : this[(index << 2) + index - 5 + 4];
    if (this._isBound() && ret === void 0) {
        return this._boundTo;
    }
    return ret;
};

Promise.prototype._promiseAt = function Promise$_promiseAt(index) {
    return index === 0
        ? this._promise0
        : this[(index << 2) + index - 5 + 3];
};

Promise.prototype._fulfillmentHandlerAt =
function Promise$_fulfillmentHandlerAt(index) {
    return index === 0
        ? this._fulfillmentHandler0
        : this[(index << 2) + index - 5 + 0];
};

Promise.prototype._rejectionHandlerAt =
function Promise$_rejectionHandlerAt(index) {
    return index === 0
        ? this._rejectionHandler0
        : this[(index << 2) + index - 5 + 1];
};

Promise.prototype._addCallbacks = function Promise$_addCallbacks(
    fulfill,
    reject,
    progress,
    promise,
    receiver
) {
    var index = this._length();

    if (index >= 262143 - 5) {
        index = 0;
        this._setLength(0);
    }

    if (index === 0) {
        this._promise0 = promise;
        if (receiver !== void 0) this._receiver0 = receiver;
        if (typeof fulfill === "function" && !this._isCarryingStackTrace())
            this._fulfillmentHandler0 = fulfill;
        if (typeof reject === "function") this._rejectionHandler0 = reject;
        if (typeof progress === "function") this._progressHandler0 = progress;
    } else {
        var base = (index << 2) + index - 5;
        this[base + 3] = promise;
        this[base + 4] = receiver;
        this[base + 0] = typeof fulfill === "function"
                                            ? fulfill : void 0;
        this[base + 1] = typeof reject === "function"
                                            ? reject : void 0;
        this[base + 2] = typeof progress === "function"
                                            ? progress : void 0;
    }
    this._setLength(index + 1);
    return index;
};

Promise.prototype._setProxyHandlers =
function Promise$_setProxyHandlers(receiver, promiseSlotValue) {
    var index = this._length();

    if (index >= 262143 - 5) {
        index = 0;
        this._setLength(0);
    }
    if (index === 0) {
        this._promise0 = promiseSlotValue;
        this._receiver0 = receiver;
    } else {
        var base = (index << 2) + index - 5;
        this[base + 3] = promiseSlotValue;
        this[base + 4] = receiver;
        this[base + 0] =
        this[base + 1] =
        this[base + 2] = void 0;
    }
    this._setLength(index + 1);
};

Promise.prototype._proxyPromiseArray =
function Promise$_proxyPromiseArray(promiseArray, index) {
    this._setProxyHandlers(promiseArray, index);
};

Promise.prototype._proxyPromise = function Promise$_proxyPromise(promise) {
    promise._setProxied();
    this._setProxyHandlers(promise, -15);
};

Promise.prototype._setBoundTo = function Promise$_setBoundTo(obj) {
    if (obj !== void 0) {
        this._bitField = this._bitField | 8388608;
        this._boundTo = obj;
    } else {
        this._bitField = this._bitField & (~8388608);
    }
};

Promise.prototype._isBound = function Promise$_isBound() {
    return (this._bitField & 8388608) === 8388608;
};

Promise.prototype._resolveFromResolver =
function Promise$_resolveFromResolver(resolver) {
    var promise = this;
    this._setTrace(void 0);
    this._pushContext();

    function Promise$_resolver(val) {
        if (promise._tryFollow(val)) {
            return;
        }
        promise._fulfill(val);
    }
    function Promise$_rejecter(val) {
        var trace = canAttach(val) ? val : new Error(val + "");
        promise._attachExtraTrace(trace);
        markAsOriginatingFromRejection(val);
        promise._reject(val, trace === val ? void 0 : trace);
    }
    var r = tryCatch2(resolver, void 0, Promise$_resolver, Promise$_rejecter);
    this._popContext();

    if (r !== void 0 && r === errorObj) {
        var e = r.e;
        var trace = canAttach(e) ? e : new Error(e + "");
        promise._reject(e, trace);
    }
};

Promise.prototype._spreadSlowCase =
function Promise$_spreadSlowCase(targetFn, promise, values, boundTo) {
    var promiseForAll = new PromiseArray(values).promise();
    var promise2 = promiseForAll._then(function() {
        return targetFn.apply(boundTo, arguments);
    }, void 0, void 0, APPLY, void 0);
    promise._follow(promise2);
};

Promise.prototype._callSpread =
function Promise$_callSpread(handler, promise, value) {
    var boundTo = this._boundTo;
    if (isArray(value)) {
        for (var i = 0, len = value.length; i < len; ++i) {
            if (cast(value[i], void 0) instanceof Promise) {
                this._spreadSlowCase(handler, promise, value, boundTo);
                return;
            }
        }
    }
    promise._pushContext();
    return tryCatchApply(handler, value, boundTo);
};

Promise.prototype._callHandler =
function Promise$_callHandler(
    handler, receiver, promise, value) {
    var x;
    if (receiver === APPLY && !this.isRejected()) {
        x = this._callSpread(handler, promise, value);
    } else {
        promise._pushContext();
        x = tryCatch1(handler, receiver, value);
    }
    promise._popContext();
    return x;
};

Promise.prototype._settlePromiseFromHandler =
function Promise$_settlePromiseFromHandler(
    handler, receiver, value, promise
) {
    if (!(promise instanceof Promise)) {
        handler.call(receiver, value, promise);
        return;
    }
    var x = this._callHandler(handler, receiver, promise, value);
    if (promise._isFollowing()) return;

    if (x === errorObj || x === promise || x === NEXT_FILTER) {
        var err = x === promise
                    ? makeSelfResolutionError()
                    : x.e;
        var trace = canAttach(err) ? err : new Error(err + "");
        if (x !== NEXT_FILTER) promise._attachExtraTrace(trace);
        promise._rejectUnchecked(err, trace);
    } else {
        var castValue = cast(x, promise);
        if (castValue instanceof Promise) {
            if (castValue.isRejected() &&
                !castValue._isCarryingStackTrace() &&
                !canAttach(castValue._settledValue)) {
                var trace = new Error(castValue._settledValue + "");
                promise._attachExtraTrace(trace);
                castValue._setCarriedStackTrace(trace);
            }
            promise._follow(castValue);
            promise._propagateFrom(castValue, 1);
        } else {
            promise._fulfillUnchecked(x);
        }
    }
};

Promise.prototype._follow =
function Promise$_follow(promise) {
    this._setFollowing();

    if (promise.isPending()) {
        this._propagateFrom(promise, 1);
        promise._proxyPromise(this);
    } else if (promise.isFulfilled()) {
        this._fulfillUnchecked(promise._settledValue);
    } else {
        this._rejectUnchecked(promise._settledValue,
            promise._getCarriedStackTrace());
    }

    if (promise._isRejectionUnhandled()) promise._unsetRejectionIsUnhandled();

    if (debugging &&
        promise._traceParent == null) {
        promise._traceParent = this;
    }
};

Promise.prototype._tryFollow =
function Promise$_tryFollow(value) {
    if (this._isFollowingOrFulfilledOrRejected() ||
        value === this) {
        return false;
    }
    var maybePromise = cast(value, void 0);
    if (!(maybePromise instanceof Promise)) {
        return false;
    }
    this._follow(maybePromise);
    return true;
};

Promise.prototype._resetTrace = function Promise$_resetTrace() {
    if (debugging) {
        this._trace = new CapturedTrace(this._peekContext() === void 0);
    }
};

Promise.prototype._setTrace = function Promise$_setTrace(parent) {
    if (debugging) {
        var context = this._peekContext();
        this._traceParent = context;
        var isTopLevel = context === void 0;
        if (parent !== void 0 &&
            parent._traceParent === context) {
            this._trace = parent._trace;
        } else {
            this._trace = new CapturedTrace(isTopLevel);
        }
    }
    return this;
};

Promise.prototype._attachExtraTrace =
function Promise$_attachExtraTrace(error) {
    if (debugging) {
        var promise = this;
        var stack = error.stack;
        stack = typeof stack === "string" ? stack.split("\n") : [];
        CapturedTrace.protectErrorMessageNewlines(stack);
        var headerLineCount = 1;
        var combinedTraces = 1;
        while(promise != null &&
            promise._trace != null) {
            stack = CapturedTrace.combine(
                stack,
                promise._trace.stack.split("\n")
            );
            promise = promise._traceParent;
            combinedTraces++;
        }

        var stackTraceLimit = Error.stackTraceLimit || 10;
        var max = (stackTraceLimit + headerLineCount) * combinedTraces;
        var len = stack.length;
        if (len > max) {
            stack.length = max;
        }

        if (len > 0)
            stack[0] = stack[0].split("\u0002\u0000\u0001").join("\n");

        if (stack.length <= headerLineCount) {
            error.stack = "(No stack trace)";
        } else {
            error.stack = stack.join("\n");
        }
    }
};

Promise.prototype._cleanValues = function Promise$_cleanValues() {
    if (this._cancellable()) {
        this._cancellationParent = void 0;
    }
};

Promise.prototype._propagateFrom =
function Promise$_propagateFrom(parent, flags) {
    if ((flags & 1) > 0 && parent._cancellable()) {
        this._setCancellable();
        this._cancellationParent = parent;
    }
    if ((flags & 4) > 0) {
        this._setBoundTo(parent._boundTo);
    }
    if ((flags & 2) > 0) {
        this._setTrace(parent);
    }
};

Promise.prototype._fulfill = function Promise$_fulfill(value) {
    if (this._isFollowingOrFulfilledOrRejected()) return;
    this._fulfillUnchecked(value);
};

Promise.prototype._reject =
function Promise$_reject(reason, carriedStackTrace) {
    if (this._isFollowingOrFulfilledOrRejected()) return;
    this._rejectUnchecked(reason, carriedStackTrace);
};

Promise.prototype._settlePromiseAt = function Promise$_settlePromiseAt(index) {
    var handler = this.isFulfilled()
        ? this._fulfillmentHandlerAt(index)
        : this._rejectionHandlerAt(index);

    var value = this._settledValue;
    var receiver = this._receiverAt(index);
    var promise = this._promiseAt(index);

    if (typeof handler === "function") {
        this._settlePromiseFromHandler(handler, receiver, value, promise);
    } else {
        var done = false;
        var isFulfilled = this.isFulfilled();
        if (receiver !== void 0) {
            if (receiver instanceof Promise &&
                receiver._isProxied()) {
                receiver._unsetProxied();

                if (isFulfilled) receiver._fulfillUnchecked(value);
                else receiver._rejectUnchecked(value,
                    this._getCarriedStackTrace());
                done = true;
            } else if (receiver instanceof PromiseArray) {
                if (isFulfilled) receiver._promiseFulfilled(value, promise);
                else receiver._promiseRejected(value, promise);
                done = true;
            }
        }

        if (!done) {
            if (isFulfilled) promise._fulfill(value);
            else promise._reject(value, this._getCarriedStackTrace());
        }
    }

    if (index >= 4) {
        this._queueGC();
    }
};

Promise.prototype._isProxied = function Promise$_isProxied() {
    return (this._bitField & 4194304) === 4194304;
};

Promise.prototype._setProxied = function Promise$_setProxied() {
    this._bitField = this._bitField | 4194304;
};

Promise.prototype._unsetProxied = function Promise$_unsetProxied() {
    this._bitField = this._bitField & (~4194304);
};

Promise.prototype._isGcQueued = function Promise$_isGcQueued() {
    return (this._bitField & -1073741824) === -1073741824;
};

Promise.prototype._setGcQueued = function Promise$_setGcQueued() {
    this._bitField = this._bitField | -1073741824;
};

Promise.prototype._unsetGcQueued = function Promise$_unsetGcQueued() {
    this._bitField = this._bitField & (~-1073741824);
};

Promise.prototype._queueGC = function Promise$_queueGC() {
    if (this._isGcQueued()) return;
    this._setGcQueued();
    async.invokeLater(this._gc, this, void 0);
};

Promise.prototype._gc = function Promise$gc() {
    var len = this._length() * 5 - 5;
    for (var i = 0; i < len; i++) {
        delete this[i];
    }
    this._clearFirstHandlerData();
    this._setLength(0);
    this._unsetGcQueued();
};

Promise.prototype._clearFirstHandlerData =
function Promise$_clearFirstHandlerData() {
    this._fulfillmentHandler0 = void 0;
    this._rejectionHandler0 = void 0;
    this._promise0 = void 0;
    this._receiver0 = void 0;
};

Promise.prototype._queueSettleAt = function Promise$_queueSettleAt(index) {
    if (this._isRejectionUnhandled()) this._unsetRejectionIsUnhandled();
    async.invoke(this._settlePromiseAt, this, index);
};

Promise.prototype._fulfillUnchecked =
function Promise$_fulfillUnchecked(value) {
    if (!this.isPending()) return;
    if (value === this) {
        var err = makeSelfResolutionError();
        this._attachExtraTrace(err);
        return this._rejectUnchecked(err, void 0);
    }
    this._cleanValues();
    this._setFulfilled();
    this._settledValue = value;
    var len = this._length();

    if (len > 0) {
        async.invoke(this._settlePromises, this, len);
    }
};

Promise.prototype._rejectUncheckedCheckError =
function Promise$_rejectUncheckedCheckError(reason) {
    var trace = canAttach(reason) ? reason : new Error(reason + "");
    this._rejectUnchecked(reason, trace === reason ? void 0 : trace);
};

Promise.prototype._rejectUnchecked =
function Promise$_rejectUnchecked(reason, trace) {
    if (!this.isPending()) return;
    if (reason === this) {
        var err = makeSelfResolutionError();
        this._attachExtraTrace(err);
        return this._rejectUnchecked(err);
    }
    this._cleanValues();
    this._setRejected();
    this._settledValue = reason;

    if (this._isFinal()) {
        async.invokeLater(thrower, void 0, trace === void 0 ? reason : trace);
        return;
    }
    var len = this._length();

    if (trace !== void 0) this._setCarriedStackTrace(trace);

    if (len > 0) {
        async.invoke(this._rejectPromises, this, null);
    } else {
        this._ensurePossibleRejectionHandled();
    }
};

Promise.prototype._rejectPromises = function Promise$_rejectPromises() {
    this._settlePromises();
    this._unsetCarriedStackTrace();
};

Promise.prototype._settlePromises = function Promise$_settlePromises() {
    var len = this._length();
    for (var i = 0; i < len; i++) {
        this._settlePromiseAt(i);
    }
};

Promise.prototype._ensurePossibleRejectionHandled =
function Promise$_ensurePossibleRejectionHandled() {
    this._setRejectionIsUnhandled();
    if (CapturedTrace.possiblyUnhandledRejection !== void 0) {
        async.invokeLater(this._notifyUnhandledRejection, this, void 0);
    }
};

Promise.prototype._notifyUnhandledRejectionIsHandled =
function Promise$_notifyUnhandledRejectionIsHandled() {
    if (typeof unhandledRejectionHandled === "function") {
        async.invokeLater(unhandledRejectionHandled, void 0, this);
    }
};

Promise.prototype._notifyUnhandledRejection =
function Promise$_notifyUnhandledRejection() {
    if (this._isRejectionUnhandled()) {
        var reason = this._settledValue;
        var trace = this._getCarriedStackTrace();

        this._setUnhandledRejectionIsNotified();

        if (trace !== void 0) {
            this._unsetCarriedStackTrace();
            reason = trace;
        }
        if (typeof CapturedTrace.possiblyUnhandledRejection === "function") {
            CapturedTrace.possiblyUnhandledRejection(reason, this);
        }
    }
};

var contextStack = [];
Promise.prototype._peekContext = function Promise$_peekContext() {
    var lastIndex = contextStack.length - 1;
    if (lastIndex >= 0) {
        return contextStack[lastIndex];
    }
    return void 0;

};

Promise.prototype._pushContext = function Promise$_pushContext() {
    if (!debugging) return;
    contextStack.push(this);
};

Promise.prototype._popContext = function Promise$_popContext() {
    if (!debugging) return;
    contextStack.pop();
};

Promise.noConflict = function Promise$NoConflict() {
    return noConflict(Promise);
};

Promise.setScheduler = function(fn) {
    if (typeof fn !== "function") throw new TypeError("fn must be a function");
    async._schedule = fn;
};

if (!CapturedTrace.isSupported()) {
    Promise.longStackTraces = function(){};
    debugging = false;
}

Promise._makeSelfResolutionError = makeSelfResolutionError;
require("./finally.js")(Promise, NEXT_FILTER, cast);
require("./direct_resolve.js")(Promise);
require("./synchronous_inspection.js")(Promise);
require("./join.js")(Promise, PromiseArray, cast, INTERNAL);
Promise.RangeError = RangeError;
Promise.CancellationError = CancellationError;
Promise.TimeoutError = TimeoutError;
Promise.TypeError = TypeError;
Promise.OperationalError = OperationalError;
Promise.RejectionError = OperationalError;
Promise.AggregateError = errors.AggregateError;

util.toFastProperties(Promise);
util.toFastProperties(Promise.prototype);
Promise.Promise = Promise;
require('./timers.js')(Promise,INTERNAL,cast);
require('./race.js')(Promise,INTERNAL,cast);
require('./call_get.js')(Promise);
require('./generators.js')(Promise,apiRejection,INTERNAL,cast);
require('./map.js')(Promise,PromiseArray,apiRejection,cast,INTERNAL);
require('./nodeify.js')(Promise);
require('./promisify.js')(Promise,INTERNAL);
require('./props.js')(Promise,PromiseArray,cast);
require('./reduce.js')(Promise,PromiseArray,apiRejection,cast,INTERNAL);
require('./settle.js')(Promise,PromiseArray);
require('./some.js')(Promise,PromiseArray,apiRejection);
require('./progress.js')(Promise,PromiseArray);
require('./cancel.js')(Promise,INTERNAL);
require('./filter.js')(Promise,INTERNAL);
require('./any.js')(Promise,PromiseArray);
require('./each.js')(Promise,INTERNAL);
require('./using.js')(Promise,apiRejection,cast);

Promise.prototype = Promise.prototype;
return Promise;

};

}).call(this,require('_process'))
},{"./any.js":6,"./async.js":7,"./call_get.js":9,"./cancel.js":10,"./captured_trace.js":11,"./catch_filter.js":12,"./direct_resolve.js":13,"./each.js":14,"./errors.js":15,"./errors_api_rejection":16,"./filter.js":18,"./finally.js":19,"./generators.js":20,"./join.js":21,"./map.js":22,"./nodeify.js":23,"./progress.js":24,"./promise_array.js":26,"./promise_resolver.js":27,"./promisify.js":28,"./props.js":29,"./race.js":31,"./reduce.js":32,"./settle.js":34,"./some.js":35,"./synchronous_inspection.js":36,"./thenables.js":37,"./timers.js":38,"./using.js":39,"./util.js":40,"_process":41}],26:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL, cast) {
var canAttach = require("./errors.js").canAttach;
var util = require("./util.js");
var isArray = util.isArray;

function toResolutionValue(val) {
    switch(val) {
    case -1: return void 0;
    case -2: return [];
    case -3: return {};
    }
}

function PromiseArray(values) {
    var promise = this._promise = new Promise(INTERNAL);
    var parent = void 0;
    if (values instanceof Promise) {
        parent = values;
        promise._propagateFrom(parent, 1 | 4);
    }
    promise._setTrace(parent);
    this._values = values;
    this._length = 0;
    this._totalResolved = 0;
    this._init(void 0, -2);
}
PromiseArray.prototype.length = function PromiseArray$length() {
    return this._length;
};

PromiseArray.prototype.promise = function PromiseArray$promise() {
    return this._promise;
};

PromiseArray.prototype._init =
function PromiseArray$_init(_, resolveValueIfEmpty) {
    var values = cast(this._values, void 0);
    if (values instanceof Promise) {
        this._values = values;
        values._setBoundTo(this._promise._boundTo);
        if (values.isFulfilled()) {
            values = values._settledValue;
            if (!isArray(values)) {
                var err = new Promise.TypeError("expecting an array, a promise or a thenable");
                this.__hardReject__(err);
                return;
            }
        } else if (values.isPending()) {
            values._then(
                PromiseArray$_init,
                this._reject,
                void 0,
                this,
                resolveValueIfEmpty
           );
            return;
        } else {
            values._unsetRejectionIsUnhandled();
            this._reject(values._settledValue);
            return;
        }
    } else if (!isArray(values)) {
        var err = new Promise.TypeError("expecting an array, a promise or a thenable");
        this.__hardReject__(err);
        return;
    }

    if (values.length === 0) {
        if (resolveValueIfEmpty === -5) {
            this._resolveEmptyArray();
        }
        else {
            this._resolve(toResolutionValue(resolveValueIfEmpty));
        }
        return;
    }
    var len = this.getActualLength(values.length);
    var newLen = len;
    var newValues = this.shouldCopyValues() ? new Array(len) : this._values;
    var isDirectScanNeeded = false;
    for (var i = 0; i < len; ++i) {
        var maybePromise = cast(values[i], void 0);
        if (maybePromise instanceof Promise) {
            if (maybePromise.isPending()) {
                maybePromise._proxyPromiseArray(this, i);
            } else {
                maybePromise._unsetRejectionIsUnhandled();
                isDirectScanNeeded = true;
            }
        } else {
            isDirectScanNeeded = true;
        }
        newValues[i] = maybePromise;
    }
    this._values = newValues;
    this._length = newLen;
    if (isDirectScanNeeded) {
        this._scanDirectValues(len);
    }
};

PromiseArray.prototype._settlePromiseAt =
function PromiseArray$_settlePromiseAt(index) {
    var value = this._values[index];
    if (!(value instanceof Promise)) {
        this._promiseFulfilled(value, index);
    } else if (value.isFulfilled()) {
        this._promiseFulfilled(value._settledValue, index);
    } else if (value.isRejected()) {
        this._promiseRejected(value._settledValue, index);
    }
};

PromiseArray.prototype._scanDirectValues =
function PromiseArray$_scanDirectValues(len) {
    for (var i = 0; i < len; ++i) {
        if (this._isResolved()) {
            break;
        }
        this._settlePromiseAt(i);
    }
};

PromiseArray.prototype._isResolved = function PromiseArray$_isResolved() {
    return this._values === null;
};

PromiseArray.prototype._resolve = function PromiseArray$_resolve(value) {
    this._values = null;
    this._promise._fulfill(value);
};

PromiseArray.prototype.__hardReject__ =
PromiseArray.prototype._reject = function PromiseArray$_reject(reason) {
    this._values = null;
    var trace = canAttach(reason) ? reason : new Error(reason + "");
    this._promise._attachExtraTrace(trace);
    this._promise._reject(reason, trace);
};

PromiseArray.prototype._promiseProgressed =
function PromiseArray$_promiseProgressed(progressValue, index) {
    if (this._isResolved()) return;
    this._promise._progress({
        index: index,
        value: progressValue
    });
};


PromiseArray.prototype._promiseFulfilled =
function PromiseArray$_promiseFulfilled(value, index) {
    if (this._isResolved()) return;
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
    }
};

PromiseArray.prototype._promiseRejected =
function PromiseArray$_promiseRejected(reason, index) {
    if (this._isResolved()) return;
    this._totalResolved++;
    this._reject(reason);
};

PromiseArray.prototype.shouldCopyValues =
function PromiseArray$_shouldCopyValues() {
    return true;
};

PromiseArray.prototype.getActualLength =
function PromiseArray$getActualLength(len) {
    return len;
};

return PromiseArray;
};

},{"./errors.js":15,"./util.js":40}],27:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var util = require("./util.js");
var maybeWrapAsError = util.maybeWrapAsError;
var errors = require("./errors.js");
var TimeoutError = errors.TimeoutError;
var OperationalError = errors.OperationalError;
var async = require("./async.js");
var haveGetters = util.haveGetters;
var es5 = require("./es5.js");

function isUntypedError(obj) {
    return obj instanceof Error &&
        es5.getPrototypeOf(obj) === Error.prototype;
}

function wrapAsOperationalError(obj) {
    var ret;
    if (isUntypedError(obj)) {
        ret = new OperationalError(obj);
    } else {
        ret = obj;
    }
    errors.markAsOriginatingFromRejection(ret);
    return ret;
}

function nodebackForPromise(promise) {
    function PromiseResolver$_callback(err, value) {
        if (promise === null) return;

        if (err) {
            var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
            promise._attachExtraTrace(wrapped);
            promise._reject(wrapped);
        } else if (arguments.length > 2) {
            var $_len = arguments.length;var args = new Array($_len - 1); for(var $_i = 1; $_i < $_len; ++$_i) {args[$_i - 1] = arguments[$_i];}
            promise._fulfill(args);
        } else {
            promise._fulfill(value);
        }

        promise = null;
    }
    return PromiseResolver$_callback;
}


var PromiseResolver;
if (!haveGetters) {
    PromiseResolver = function PromiseResolver(promise) {
        this.promise = promise;
        this.asCallback = nodebackForPromise(promise);
        this.callback = this.asCallback;
    };
}
else {
    PromiseResolver = function PromiseResolver(promise) {
        this.promise = promise;
    };
}
if (haveGetters) {
    var prop = {
        get: function() {
            return nodebackForPromise(this.promise);
        }
    };
    es5.defineProperty(PromiseResolver.prototype, "asCallback", prop);
    es5.defineProperty(PromiseResolver.prototype, "callback", prop);
}

PromiseResolver._nodebackForPromise = nodebackForPromise;

PromiseResolver.prototype.toString = function PromiseResolver$toString() {
    return "[object PromiseResolver]";
};

PromiseResolver.prototype.resolve =
PromiseResolver.prototype.fulfill = function PromiseResolver$resolve(value) {
    if (!(this instanceof PromiseResolver)) {
        throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");
    }

    var promise = this.promise;
    if (promise._tryFollow(value)) {
        return;
    }
    async.invoke(promise._fulfill, promise, value);
};

PromiseResolver.prototype.reject = function PromiseResolver$reject(reason) {
    if (!(this instanceof PromiseResolver)) {
        throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");
    }

    var promise = this.promise;
    errors.markAsOriginatingFromRejection(reason);
    var trace = errors.canAttach(reason) ? reason : new Error(reason + "");
    promise._attachExtraTrace(trace);
    async.invoke(promise._reject, promise, reason);
    if (trace !== reason) {
        async.invoke(this._setCarriedStackTrace, this, trace);
    }
};

PromiseResolver.prototype.progress =
function PromiseResolver$progress(value) {
    if (!(this instanceof PromiseResolver)) {
        throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");
    }
    async.invoke(this.promise._progress, this.promise, value);
};

PromiseResolver.prototype.cancel = function PromiseResolver$cancel() {
    async.invoke(this.promise.cancel, this.promise, void 0);
};

PromiseResolver.prototype.timeout = function PromiseResolver$timeout() {
    this.reject(new TimeoutError("timeout"));
};

PromiseResolver.prototype.isResolved = function PromiseResolver$isResolved() {
    return this.promise.isResolved();
};

PromiseResolver.prototype.toJSON = function PromiseResolver$toJSON() {
    return this.promise.toJSON();
};

PromiseResolver.prototype._setCarriedStackTrace =
function PromiseResolver$_setCarriedStackTrace(trace) {
    if (this.promise.isRejected()) {
        this.promise._setCarriedStackTrace(trace);
    }
};

module.exports = PromiseResolver;

},{"./async.js":7,"./errors.js":15,"./es5.js":17,"./util.js":40}],28:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL) {
var THIS = {};
var util = require("./util.js");
var nodebackForPromise = require("./promise_resolver.js")
    ._nodebackForPromise;
var withAppended = util.withAppended;
var maybeWrapAsError = util.maybeWrapAsError;
var canEvaluate = util.canEvaluate;
var TypeError = require("./errors").TypeError;
var defaultSuffix = "Async";
var defaultFilter = function(name, func) {
    return util.isIdentifier(name) &&
        name.charAt(0) !== "_" &&
        !util.isClass(func);
};
var defaultPromisified = {__isPromisified__: true};


function escapeIdentRegex(str) {
    return str.replace(/([$])/, "\\$");
}

function isPromisified(fn) {
    try {
        return fn.__isPromisified__ === true;
    }
    catch (e) {
        return false;
    }
}

function hasPromisified(obj, key, suffix) {
    var val = util.getDataPropertyOrDefault(obj, key + suffix,
                                            defaultPromisified);
    return val ? isPromisified(val) : false;
}
function checkValid(ret, suffix, suffixRegexp) {
    for (var i = 0; i < ret.length; i += 2) {
        var key = ret[i];
        if (suffixRegexp.test(key)) {
            var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
            for (var j = 0; j < ret.length; j += 2) {
                if (ret[j] === keyWithoutAsyncSuffix) {
                    throw new TypeError("Cannot promisify an API " +
                        "that has normal methods with '"+suffix+"'-suffix");
                }
            }
        }
    }
}

function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
    var keys = util.inheritedDataKeys(obj);
    var ret = [];
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var value = obj[key];
        if (typeof value === "function" &&
            !isPromisified(value) &&
            !hasPromisified(obj, key, suffix) &&
            filter(key, value, obj)) {
            ret.push(key, value);
        }
    }
    checkValid(ret, suffix, suffixRegexp);
    return ret;
}

function switchCaseArgumentOrder(likelyArgumentCount) {
    var ret = [likelyArgumentCount];
    var min = Math.max(0, likelyArgumentCount - 1 - 5);
    for(var i = likelyArgumentCount - 1; i >= min; --i) {
        if (i === likelyArgumentCount) continue;
        ret.push(i);
    }
    for(var i = likelyArgumentCount + 1; i <= 5; ++i) {
        ret.push(i);
    }
    return ret;
}

function argumentSequence(argumentCount) {
    return util.filledRange(argumentCount, "arguments[", "]");
}

function parameterDeclaration(parameterCount) {
    return util.filledRange(parameterCount, "_arg", "");
}

function parameterCount(fn) {
    if (typeof fn.length === "number") {
        return Math.max(Math.min(fn.length, 1023 + 1), 0);
    }
    return 0;
}

function generatePropertyAccess(key) {
    if (util.isIdentifier(key)) {
        return "." + key;
    }
    else return "['" + key.replace(/(['\\])/g, "\\$1") + "']";
}

function makeNodePromisifiedEval(callback, receiver, originalName, fn, suffix) {
    var newParameterCount = Math.max(0, parameterCount(fn) - 1);
    var argumentOrder = switchCaseArgumentOrder(newParameterCount);
    var callbackName =
        (typeof originalName === "string" && util.isIdentifier(originalName)
            ? originalName + suffix
            : "promisified");

    function generateCallForArgumentCount(count) {
        var args = argumentSequence(count).join(", ");
        var comma = count > 0 ? ", " : "";
        var ret;
        if (typeof callback === "string") {
            ret = "                                                          \n\
                this.method({{args}}, fn);                                   \n\
                break;                                                       \n\
            ".replace(".method", generatePropertyAccess(callback));
        } else if (receiver === THIS) {
            ret =  "                                                         \n\
                callback.call(this, {{args}}, fn);                           \n\
                break;                                                       \n\
            ";
        } else if (receiver !== void 0) {
            ret =  "                                                         \n\
                callback.call(receiver, {{args}}, fn);                       \n\
                break;                                                       \n\
            ";
        } else {
            ret =  "                                                         \n\
                callback({{args}}, fn);                                      \n\
                break;                                                       \n\
            ";
        }
        return ret.replace("{{args}}", args).replace(", ", comma);
    }

    function generateArgumentSwitchCase() {
        var ret = "";
        for(var i = 0; i < argumentOrder.length; ++i) {
            ret += "case " + argumentOrder[i] +":" +
                generateCallForArgumentCount(argumentOrder[i]);
        }
        var codeForCall;
        if (typeof callback === "string") {
            codeForCall = "                                                  \n\
                this.property.apply(this, args);                             \n\
            "
                .replace(".property", generatePropertyAccess(callback));
        } else if (receiver === THIS) {
            codeForCall = "                                                  \n\
                callback.apply(this, args);                                  \n\
            ";
        } else {
            codeForCall = "                                                  \n\
                callback.apply(receiver, args);                              \n\
            ";
        }

        ret += "                                                             \n\
        default:                                                             \n\
            var args = new Array(len + 1);                                   \n\
            var i = 0;                                                       \n\
            for (var i = 0; i < len; ++i) {                                  \n\
               args[i] = arguments[i];                                       \n\
            }                                                                \n\
            args[i] = fn;                                                    \n\
            [CodeForCall]                                                    \n\
            break;                                                           \n\
        ".replace("[CodeForCall]", codeForCall);
        return ret;
    }

    return new Function("Promise",
                        "callback",
                        "receiver",
                        "withAppended",
                        "maybeWrapAsError",
                        "nodebackForPromise",
                        "INTERNAL","                                         \n\
        var ret = function FunctionName(Parameters) {                        \n\
            'use strict';                                                    \n\
            var len = arguments.length;                                      \n\
            var promise = new Promise(INTERNAL);                             \n\
            promise._setTrace(void 0);                                       \n\
            var fn = nodebackForPromise(promise);                            \n\
            try {                                                            \n\
                switch(len) {                                                \n\
                    [CodeForSwitchCase]                                      \n\
                }                                                            \n\
            } catch (e) {                                                    \n\
                var wrapped = maybeWrapAsError(e);                           \n\
                promise._attachExtraTrace(wrapped);                          \n\
                promise._reject(wrapped);                                    \n\
            }                                                                \n\
            return promise;                                                  \n\
        };                                                                   \n\
        ret.__isPromisified__ = true;                                        \n\
        return ret;                                                          \n\
        "
        .replace("FunctionName", callbackName)
        .replace("Parameters", parameterDeclaration(newParameterCount))
        .replace("[CodeForSwitchCase]", generateArgumentSwitchCase()))(
            Promise,
            callback,
            receiver,
            withAppended,
            maybeWrapAsError,
            nodebackForPromise,
            INTERNAL
        );
}

function makeNodePromisifiedClosure(callback, receiver) {
    function promisified() {
        var _receiver = receiver;
        if (receiver === THIS) _receiver = this;
        if (typeof callback === "string") {
            callback = _receiver[callback];
        }
        var promise = new Promise(INTERNAL);
        promise._setTrace(void 0);
        var fn = nodebackForPromise(promise);
        try {
            callback.apply(_receiver, withAppended(arguments, fn));
        } catch(e) {
            var wrapped = maybeWrapAsError(e);
            promise._attachExtraTrace(wrapped);
            promise._reject(wrapped);
        }
        return promise;
    }
    promisified.__isPromisified__ = true;
    return promisified;
}

var makeNodePromisified = canEvaluate
    ? makeNodePromisifiedEval
    : makeNodePromisifiedClosure;

function promisifyAll(obj, suffix, filter, promisifier) {
    var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
    var methods =
        promisifiableMethods(obj, suffix, suffixRegexp, filter);

    for (var i = 0, len = methods.length; i < len; i+= 2) {
        var key = methods[i];
        var fn = methods[i+1];
        var promisifiedKey = key + suffix;
        obj[promisifiedKey] = promisifier === makeNodePromisified
                ? makeNodePromisified(key, THIS, key, fn, suffix)
                : promisifier(fn);
    }
    util.toFastProperties(obj);
    return obj;
}

function promisify(callback, receiver) {
    return makeNodePromisified(callback, receiver, void 0, callback);
}

Promise.promisify = function Promise$Promisify(fn, receiver) {
    if (typeof fn !== "function") {
        throw new TypeError("fn must be a function");
    }
    if (isPromisified(fn)) {
        return fn;
    }
    return promisify(fn, arguments.length < 2 ? THIS : receiver);
};

Promise.promisifyAll = function Promise$PromisifyAll(target, options) {
    if (typeof target !== "function" && typeof target !== "object") {
        throw new TypeError("the target of promisifyAll must be an object or a function");
    }
    options = Object(options);
    var suffix = options.suffix;
    if (typeof suffix !== "string") suffix = defaultSuffix;
    var filter = options.filter;
    if (typeof filter !== "function") filter = defaultFilter;
    var promisifier = options.promisifier;
    if (typeof promisifier !== "function") promisifier = makeNodePromisified;

    if (!util.isIdentifier(suffix)) {
        throw new RangeError("suffix must be a valid identifier");
    }

    var keys = util.inheritedDataKeys(target, {includeHidden: true});
    for (var i = 0; i < keys.length; ++i) {
        var value = target[keys[i]];
        if (keys[i] !== "constructor" &&
            util.isClass(value)) {
            promisifyAll(value.prototype, suffix, filter, promisifier);
            promisifyAll(value, suffix, filter, promisifier);
        }
    }

    return promisifyAll(target, suffix, filter, promisifier);
};
};


},{"./errors":15,"./promise_resolver.js":27,"./util.js":40}],29:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, PromiseArray, cast) {
var util = require("./util.js");
var apiRejection = require("./errors_api_rejection")(Promise);
var isObject = util.isObject;
var es5 = require("./es5.js");

function PropertiesPromiseArray(obj) {
    var keys = es5.keys(obj);
    var len = keys.length;
    var values = new Array(len * 2);
    for (var i = 0; i < len; ++i) {
        var key = keys[i];
        values[i] = obj[key];
        values[i + len] = key;
    }
    this.constructor$(values);
}
util.inherits(PropertiesPromiseArray, PromiseArray);

PropertiesPromiseArray.prototype._init =
function PropertiesPromiseArray$_init() {
    this._init$(void 0, -3) ;
};

PropertiesPromiseArray.prototype._promiseFulfilled =
function PropertiesPromiseArray$_promiseFulfilled(value, index) {
    if (this._isResolved()) return;
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        var val = {};
        var keyOffset = this.length();
        for (var i = 0, len = this.length(); i < len; ++i) {
            val[this._values[i + keyOffset]] = this._values[i];
        }
        this._resolve(val);
    }
};

PropertiesPromiseArray.prototype._promiseProgressed =
function PropertiesPromiseArray$_promiseProgressed(value, index) {
    if (this._isResolved()) return;

    this._promise._progress({
        key: this._values[index + this.length()],
        value: value
    });
};

PropertiesPromiseArray.prototype.shouldCopyValues =
function PropertiesPromiseArray$_shouldCopyValues() {
    return false;
};

PropertiesPromiseArray.prototype.getActualLength =
function PropertiesPromiseArray$getActualLength(len) {
    return len >> 1;
};

function Promise$_Props(promises) {
    var ret;
    var castValue = cast(promises, void 0);

    if (!isObject(castValue)) {
        return apiRejection("cannot await properties of a non-object");
    } else if (castValue instanceof Promise) {
        ret = castValue._then(Promise.props, void 0, void 0, void 0, void 0);
    } else {
        ret = new PropertiesPromiseArray(castValue).promise();
    }

    if (castValue instanceof Promise) {
        ret._propagateFrom(castValue, 4);
    }
    return ret;
}

Promise.prototype.props = function Promise$props() {
    return Promise$_Props(this);
};

Promise.props = function Promise$Props(promises) {
    return Promise$_Props(promises);
};
};

},{"./errors_api_rejection":16,"./es5.js":17,"./util.js":40}],30:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
function arrayCopy(src, srcIndex, dst, dstIndex, len) {
    for (var j = 0; j < len; ++j) {
        dst[j + dstIndex] = src[j + srcIndex];
    }
}

function Queue(capacity) {
    this._capacity = capacity;
    this._length = 0;
    this._front = 0;
    this._makeCapacity();
}

Queue.prototype._willBeOverCapacity =
function Queue$_willBeOverCapacity(size) {
    return this._capacity < size;
};

Queue.prototype._pushOne = function Queue$_pushOne(arg) {
    var length = this.length();
    this._checkCapacity(length + 1);
    var i = (this._front + length) & (this._capacity - 1);
    this[i] = arg;
    this._length = length + 1;
};

Queue.prototype.push = function Queue$push(fn, receiver, arg) {
    var length = this.length() + 3;
    if (this._willBeOverCapacity(length)) {
        this._pushOne(fn);
        this._pushOne(receiver);
        this._pushOne(arg);
        return;
    }
    var j = this._front + length - 3;
    this._checkCapacity(length);
    var wrapMask = this._capacity - 1;
    this[(j + 0) & wrapMask] = fn;
    this[(j + 1) & wrapMask] = receiver;
    this[(j + 2) & wrapMask] = arg;
    this._length = length;
};

Queue.prototype.shift = function Queue$shift() {
    var front = this._front,
        ret = this[front];

    this[front] = void 0;
    this._front = (front + 1) & (this._capacity - 1);
    this._length--;
    return ret;
};

Queue.prototype.length = function Queue$length() {
    return this._length;
};

Queue.prototype._makeCapacity = function Queue$_makeCapacity() {
    var len = this._capacity;
    for (var i = 0; i < len; ++i) {
        this[i] = void 0;
    }
};

Queue.prototype._checkCapacity = function Queue$_checkCapacity(size) {
    if (this._capacity < size) {
        this._resizeTo(this._capacity << 3);
    }
};

Queue.prototype._resizeTo = function Queue$_resizeTo(capacity) {
    var oldFront = this._front;
    var oldCapacity = this._capacity;
    var oldQueue = new Array(oldCapacity);
    var length = this.length();

    arrayCopy(this, 0, oldQueue, 0, oldCapacity);
    this._capacity = capacity;
    this._makeCapacity();
    this._front = 0;
    if (oldFront + length <= oldCapacity) {
        arrayCopy(oldQueue, oldFront, this, 0, length);
    } else {        var lengthBeforeWrapping =
            length - ((oldFront + length) & (oldCapacity - 1));

        arrayCopy(oldQueue, oldFront, this, 0, lengthBeforeWrapping);
        arrayCopy(oldQueue, 0, this, lengthBeforeWrapping,
                    length - lengthBeforeWrapping);
    }
};

module.exports = Queue;

},{}],31:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL, cast) {
var apiRejection = require("./errors_api_rejection.js")(Promise);
var isArray = require("./util.js").isArray;

var raceLater = function Promise$_raceLater(promise) {
    return promise.then(function(array) {
        return Promise$_Race(array, promise);
    });
};

var hasOwn = {}.hasOwnProperty;
function Promise$_Race(promises, parent) {
    var maybePromise = cast(promises, void 0);

    if (maybePromise instanceof Promise) {
        return raceLater(maybePromise);
    } else if (!isArray(promises)) {
        return apiRejection("expecting an array, a promise or a thenable");
    }

    var ret = new Promise(INTERNAL);
    if (parent !== void 0) {
        ret._propagateFrom(parent, 7);
    } else {
        ret._setTrace(void 0);
    }
    var fulfill = ret._fulfill;
    var reject = ret._reject;
    for (var i = 0, len = promises.length; i < len; ++i) {
        var val = promises[i];

        if (val === void 0 && !(hasOwn.call(promises, i))) {
            continue;
        }

        Promise.cast(val)._then(fulfill, reject, void 0, ret, null);
    }
    return ret;
}

Promise.race = function Promise$Race(promises) {
    return Promise$_Race(promises, void 0);
};

Promise.prototype.race = function Promise$race() {
    return Promise$_Race(this, void 0);
};

};

},{"./errors_api_rejection.js":16,"./util.js":40}],32:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, PromiseArray, apiRejection, cast, INTERNAL) {
var util = require("./util.js");
var tryCatch4 = util.tryCatch4;
var tryCatch3 = util.tryCatch3;
var errorObj = util.errorObj;
function ReductionPromiseArray(promises, fn, accum, _each) {
    this.constructor$(promises);
    this._preservedValues = _each === INTERNAL ? [] : null;
    this._zerothIsAccum = (accum === void 0);
    this._gotAccum = false;
    this._reducingIndex = (this._zerothIsAccum ? 1 : 0);
    this._valuesPhase = undefined;

    var maybePromise = cast(accum, void 0);
    var rejected = false;
    var isPromise = maybePromise instanceof Promise;
    if (isPromise) {
        if (maybePromise.isPending()) {
            maybePromise._proxyPromiseArray(this, -1);
        } else if (maybePromise.isFulfilled()) {
            accum = maybePromise.value();
            this._gotAccum = true;
        } else {
            maybePromise._unsetRejectionIsUnhandled();
            this._reject(maybePromise.reason());
            rejected = true;
        }
    }
    if (!(isPromise || this._zerothIsAccum)) this._gotAccum = true;
    this._callback = fn;
    this._accum = accum;
    if (!rejected) this._init$(void 0, -5);
}
util.inherits(ReductionPromiseArray, PromiseArray);

ReductionPromiseArray.prototype._init =
function ReductionPromiseArray$_init() {};

ReductionPromiseArray.prototype._resolveEmptyArray =
function ReductionPromiseArray$_resolveEmptyArray() {
    if (this._gotAccum || this._zerothIsAccum) {
        this._resolve(this._preservedValues !== null
                        ? [] : this._accum);
    }
};

ReductionPromiseArray.prototype._promiseFulfilled =
function ReductionPromiseArray$_promiseFulfilled(value, index) {
    var values = this._values;
    if (values === null) return;
    var length = this.length();
    var preservedValues = this._preservedValues;
    var isEach = preservedValues !== null;
    var gotAccum = this._gotAccum;
    var valuesPhase = this._valuesPhase;
    var valuesPhaseIndex;
    if (!valuesPhase) {
        valuesPhase = this._valuesPhase = Array(length);
        for (valuesPhaseIndex=0; valuesPhaseIndex<length; ++valuesPhaseIndex) {
            valuesPhase[valuesPhaseIndex] = 0;
        }
    }
    valuesPhaseIndex = valuesPhase[index];

    if (index === 0 && this._zerothIsAccum) {
        if (!gotAccum) {
            this._accum = value;
            this._gotAccum = gotAccum = true;
        }
        valuesPhase[index] = ((valuesPhaseIndex === 0)
            ? 1 : 2);
    } else if (index === -1) {
        if (!gotAccum) {
            this._accum = value;
            this._gotAccum = gotAccum = true;
        }
    } else {
        if (valuesPhaseIndex === 0) {
            valuesPhase[index] = 1;
        }
        else {
            valuesPhase[index] = 2;
            if (gotAccum) {
                this._accum = value;
            }
        }
    }
    if (!gotAccum) return;

    var callback = this._callback;
    var receiver = this._promise._boundTo;
    var ret;

    for (var i = this._reducingIndex; i < length; ++i) {
        valuesPhaseIndex = valuesPhase[i];
        if (valuesPhaseIndex === 2) {
            this._reducingIndex = i + 1;
            continue;
        }
        if (valuesPhaseIndex !== 1) return;

        value = values[i];
        if (value instanceof Promise) {
            if (value.isFulfilled()) {
                value = value._settledValue;
            } else if (value.isPending()) {
                return;
            } else {
                value._unsetRejectionIsUnhandled();
                return this._reject(value.reason());
            }
        }

        if (isEach) {
            preservedValues.push(value);
            ret = tryCatch3(callback, receiver, value, i, length);
        }
        else {
            ret = tryCatch4(callback, receiver, this._accum, value, i, length);
        }

        if (ret === errorObj) return this._reject(ret.e);

        var maybePromise = cast(ret, void 0);
        if (maybePromise instanceof Promise) {
            if (maybePromise.isPending()) {
                valuesPhase[i] = 4;
                return maybePromise._proxyPromiseArray(this, i);
            } else if (maybePromise.isFulfilled()) {
                ret = maybePromise.value();
            } else {
                maybePromise._unsetRejectionIsUnhandled();
                return this._reject(maybePromise.reason());
            }
        }

        this._reducingIndex = i + 1;
        this._accum = ret;
    }

    if (this._reducingIndex < length) return;
    this._resolve(isEach ? preservedValues : this._accum);
};

function reduce(promises, fn, initialValue, _each) {
    if (typeof fn !== "function") return apiRejection("fn must be a function");
    var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
    return array.promise();
}

Promise.prototype.reduce = function Promise$reduce(fn, initialValue) {
    return reduce(this, fn, initialValue, null);
};

Promise.reduce = function Promise$Reduce(promises, fn, initialValue, _each) {
    return reduce(promises, fn, initialValue, _each);
};
};

},{"./util.js":40}],33:[function(require,module,exports){
(function (process){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var schedule;
var _MutationObserver;
if (typeof process === "object" && typeof process.version === "string") {
    schedule = function Promise$_Scheduler(fn) {
        process.nextTick(fn);
    };
}
else if ((typeof MutationObserver !== "undefined" &&
         (_MutationObserver = MutationObserver)) ||
         (typeof WebKitMutationObserver !== "undefined" &&
         (_MutationObserver = WebKitMutationObserver))) {
    schedule = (function() {
        var div = document.createElement("div");
        var queuedFn = void 0;
        var observer = new _MutationObserver(
            function Promise$_Scheduler() {
                var fn = queuedFn;
                queuedFn = void 0;
                fn();
            }
       );
        observer.observe(div, {
            attributes: true
        });
        return function Promise$_Scheduler(fn) {
            queuedFn = fn;
            div.classList.toggle("foo");
        };

    })();
}
else if (typeof setTimeout !== "undefined") {
    schedule = function Promise$_Scheduler(fn) {
        setTimeout(fn, 0);
    };
}
else throw new Error("no async scheduler available");
module.exports = schedule;

}).call(this,require('_process'))
},{"_process":41}],34:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports =
    function(Promise, PromiseArray) {
var PromiseInspection = Promise.PromiseInspection;
var util = require("./util.js");

function SettledPromiseArray(values) {
    this.constructor$(values);
}
util.inherits(SettledPromiseArray, PromiseArray);

SettledPromiseArray.prototype._promiseResolved =
function SettledPromiseArray$_promiseResolved(index, inspection) {
    this._values[index] = inspection;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
    }
};

SettledPromiseArray.prototype._promiseFulfilled =
function SettledPromiseArray$_promiseFulfilled(value, index) {
    if (this._isResolved()) return;
    var ret = new PromiseInspection();
    ret._bitField = 268435456;
    ret._settledValue = value;
    this._promiseResolved(index, ret);
};
SettledPromiseArray.prototype._promiseRejected =
function SettledPromiseArray$_promiseRejected(reason, index) {
    if (this._isResolved()) return;
    var ret = new PromiseInspection();
    ret._bitField = 134217728;
    ret._settledValue = reason;
    this._promiseResolved(index, ret);
};

Promise.settle = function Promise$Settle(promises) {
    return new SettledPromiseArray(promises).promise();
};

Promise.prototype.settle = function Promise$settle() {
    return new SettledPromiseArray(this).promise();
};
};

},{"./util.js":40}],35:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports =
function(Promise, PromiseArray, apiRejection) {
var util = require("./util.js");
var RangeError = require("./errors.js").RangeError;
var AggregateError = require("./errors.js").AggregateError;
var isArray = util.isArray;


function SomePromiseArray(values) {
    this.constructor$(values);
    this._howMany = 0;
    this._unwrap = false;
    this._initialized = false;
}
util.inherits(SomePromiseArray, PromiseArray);

SomePromiseArray.prototype._init = function SomePromiseArray$_init() {
    if (!this._initialized) {
        return;
    }
    if (this._howMany === 0) {
        this._resolve([]);
        return;
    }
    this._init$(void 0, -5);
    var isArrayResolved = isArray(this._values);
    if (!this._isResolved() &&
        isArrayResolved &&
        this._howMany > this._canPossiblyFulfill()) {
        this._reject(this._getRangeError(this.length()));
    }
};

SomePromiseArray.prototype.init = function SomePromiseArray$init() {
    this._initialized = true;
    this._init();
};

SomePromiseArray.prototype.setUnwrap = function SomePromiseArray$setUnwrap() {
    this._unwrap = true;
};

SomePromiseArray.prototype.howMany = function SomePromiseArray$howMany() {
    return this._howMany;
};

SomePromiseArray.prototype.setHowMany =
function SomePromiseArray$setHowMany(count) {
    if (this._isResolved()) return;
    this._howMany = count;
};

SomePromiseArray.prototype._promiseFulfilled =
function SomePromiseArray$_promiseFulfilled(value) {
    if (this._isResolved()) return;
    this._addFulfilled(value);
    if (this._fulfilled() === this.howMany()) {
        this._values.length = this.howMany();
        if (this.howMany() === 1 && this._unwrap) {
            this._resolve(this._values[0]);
        } else {
            this._resolve(this._values);
        }
    }

};
SomePromiseArray.prototype._promiseRejected =
function SomePromiseArray$_promiseRejected(reason) {
    if (this._isResolved()) return;
    this._addRejected(reason);
    if (this.howMany() > this._canPossiblyFulfill()) {
        var e = new AggregateError();
        for (var i = this.length(); i < this._values.length; ++i) {
            e.push(this._values[i]);
        }
        this._reject(e);
    }
};

SomePromiseArray.prototype._fulfilled = function SomePromiseArray$_fulfilled() {
    return this._totalResolved;
};

SomePromiseArray.prototype._rejected = function SomePromiseArray$_rejected() {
    return this._values.length - this.length();
};

SomePromiseArray.prototype._addRejected =
function SomePromiseArray$_addRejected(reason) {
    this._values.push(reason);
};

SomePromiseArray.prototype._addFulfilled =
function SomePromiseArray$_addFulfilled(value) {
    this._values[this._totalResolved++] = value;
};

SomePromiseArray.prototype._canPossiblyFulfill =
function SomePromiseArray$_canPossiblyFulfill() {
    return this.length() - this._rejected();
};

SomePromiseArray.prototype._getRangeError =
function SomePromiseArray$_getRangeError(count) {
    var message = "Input array must contain at least " +
            this._howMany + " items but contains only " + count + " items";
    return new RangeError(message);
};

SomePromiseArray.prototype._resolveEmptyArray =
function SomePromiseArray$_resolveEmptyArray() {
    this._reject(this._getRangeError(0));
};

function Promise$_Some(promises, howMany) {
    if ((howMany | 0) !== howMany || howMany < 0) {
        return apiRejection("expecting a positive integer");
    }
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    if (promise.isRejected()) {
        return promise;
    }
    ret.setHowMany(howMany);
    ret.init();
    return promise;
}

Promise.some = function Promise$Some(promises, howMany) {
    return Promise$_Some(promises, howMany);
};

Promise.prototype.some = function Promise$some(howMany) {
    return Promise$_Some(this, howMany);
};

Promise._SomePromiseArray = SomePromiseArray;
};

},{"./errors.js":15,"./util.js":40}],36:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise) {
function PromiseInspection(promise) {
    if (promise !== void 0) {
        this._bitField = promise._bitField;
        this._settledValue = promise.isResolved()
            ? promise._settledValue
            : void 0;
    }
    else {
        this._bitField = 0;
        this._settledValue = void 0;
    }
}

PromiseInspection.prototype.isFulfilled =
Promise.prototype.isFulfilled = function Promise$isFulfilled() {
    return (this._bitField & 268435456) > 0;
};

PromiseInspection.prototype.isRejected =
Promise.prototype.isRejected = function Promise$isRejected() {
    return (this._bitField & 134217728) > 0;
};

PromiseInspection.prototype.isPending =
Promise.prototype.isPending = function Promise$isPending() {
    return (this._bitField & 402653184) === 0;
};

PromiseInspection.prototype.value =
Promise.prototype.value = function Promise$value() {
    if (!this.isFulfilled()) {
        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise");
    }
    return this._settledValue;
};

PromiseInspection.prototype.error =
PromiseInspection.prototype.reason =
Promise.prototype.reason = function Promise$reason() {
    if (!this.isRejected()) {
        throw new TypeError("cannot get rejection reason of a non-rejected promise");
    }
    return this._settledValue;
};

PromiseInspection.prototype.isResolved =
Promise.prototype.isResolved = function Promise$isResolved() {
    return (this._bitField & 402653184) > 0;
};

Promise.PromiseInspection = PromiseInspection;
};

},{}],37:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function(Promise, INTERNAL) {
var util = require("./util.js");
var canAttach = require("./errors.js").canAttach;
var errorObj = util.errorObj;
var isObject = util.isObject;

function getThen(obj) {
    try {
        return obj.then;
    }
    catch(e) {
        errorObj.e = e;
        return errorObj;
    }
}

function Promise$_Cast(obj, originalPromise) {
    if (isObject(obj)) {
        if (obj instanceof Promise) {
            return obj;
        }
        else if (isAnyBluebirdPromise(obj)) {
            var ret = new Promise(INTERNAL);
            ret._setTrace(void 0);
            obj._then(
                ret._fulfillUnchecked,
                ret._rejectUncheckedCheckError,
                ret._progressUnchecked,
                ret,
                null
            );
            ret._setFollowing();
            return ret;
        }
        var then = getThen(obj);
        if (then === errorObj) {
            if (originalPromise !== void 0 && canAttach(then.e)) {
                originalPromise._attachExtraTrace(then.e);
            }
            return Promise.reject(then.e);
        } else if (typeof then === "function") {
            return Promise$_doThenable(obj, then, originalPromise);
        }
    }
    return obj;
}

var hasProp = {}.hasOwnProperty;
function isAnyBluebirdPromise(obj) {
    return hasProp.call(obj, "_promise0");
}

function Promise$_doThenable(x, then, originalPromise) {
    var resolver = Promise.defer();
    var called = false;
    try {
        then.call(
            x,
            Promise$_resolveFromThenable,
            Promise$_rejectFromThenable,
            Promise$_progressFromThenable
        );
    } catch(e) {
        if (!called) {
            called = true;
            var trace = canAttach(e) ? e : new Error(e + "");
            if (originalPromise !== void 0) {
                originalPromise._attachExtraTrace(trace);
            }
            resolver.promise._reject(e, trace);
        }
    }
    return resolver.promise;

    function Promise$_resolveFromThenable(y) {
        if (called) return;
        called = true;

        if (x === y) {
            var e = Promise._makeSelfResolutionError();
            if (originalPromise !== void 0) {
                originalPromise._attachExtraTrace(e);
            }
            resolver.promise._reject(e, void 0);
            return;
        }
        resolver.resolve(y);
    }

    function Promise$_rejectFromThenable(r) {
        if (called) return;
        called = true;
        var trace = canAttach(r) ? r : new Error(r + "");
        if (originalPromise !== void 0) {
            originalPromise._attachExtraTrace(trace);
        }
        resolver.promise._reject(r, trace);
    }

    function Promise$_progressFromThenable(v) {
        if (called) return;
        var promise = resolver.promise;
        if (typeof promise._progress === "function") {
            promise._progress(v);
        }
    }
}

return Promise$_Cast;
};

},{"./errors.js":15,"./util.js":40}],38:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var _setTimeout = function(fn, ms) {
    var len = arguments.length;
    var arg0 = arguments[2];
    var arg1 = arguments[3];
    var arg2 = len >= 5 ? arguments[4] : void 0;
    setTimeout(function() {
        fn(arg0, arg1, arg2);
    }, ms|0);
};

module.exports = function(Promise, INTERNAL, cast) {
var util = require("./util.js");
var errors = require("./errors.js");
var apiRejection = require("./errors_api_rejection")(Promise);
var TimeoutError = Promise.TimeoutError;

var afterTimeout = function Promise$_afterTimeout(promise, message, ms) {
    if (!promise.isPending()) return;
    if (typeof message !== "string") {
        message = "operation timed out after" + " " + ms + " ms"
    }
    var err = new TimeoutError(message);
    errors.markAsOriginatingFromRejection(err);
    promise._attachExtraTrace(err);
    promise._cancel(err);
};

var afterDelay = function Promise$_afterDelay(value, promise) {
    promise._fulfill(value);
};

var delay = Promise.delay = function Promise$Delay(value, ms) {
    if (ms === void 0) {
        ms = value;
        value = void 0;
    }
    ms = +ms;
    var maybePromise = cast(value, void 0);
    var promise = new Promise(INTERNAL);

    if (maybePromise instanceof Promise) {
        promise._propagateFrom(maybePromise, 7);
        promise._follow(maybePromise);
        return promise.then(function(value) {
            return Promise.delay(value, ms);
        });
    } else {
        promise._setTrace(void 0);
        _setTimeout(afterDelay, ms, value, promise);
    }
    return promise;
};

Promise.prototype.delay = function Promise$delay(ms) {
    return delay(this, ms);
};

Promise.prototype.timeout = function Promise$timeout(ms, message) {
    ms = +ms;

    var ret = new Promise(INTERNAL);
    ret._propagateFrom(this, 7);
    ret._follow(this);
    _setTimeout(afterTimeout, ms, ret, message, ms);
    return ret.cancellable();
};

};

},{"./errors.js":15,"./errors_api_rejection":16,"./util.js":40}],39:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
module.exports = function (Promise, apiRejection, cast) {
    var TypeError = require("./errors.js").TypeError;
    var inherits = require("./util.js").inherits;
    var PromiseInspection = Promise.PromiseInspection;

    function inspectionMapper(inspections) {
        var len = inspections.length;
        for (var i = 0; i < len; ++i) {
            var inspection = inspections[i];
            if (inspection.isRejected()) {
                return Promise.reject(inspection.error());
            }
            inspections[i] = inspection.value();
        }
        return inspections;
    }

    function thrower(e) {
        setTimeout(function(){throw e;}, 0);
    }

    function castPreservingDisposable(thenable) {
        var maybePromise = cast(thenable, void 0);
        if (maybePromise !== thenable &&
            typeof thenable._isDisposable === "function" &&
            typeof thenable._getDisposer === "function" &&
            thenable._isDisposable()) {
            maybePromise._setDisposable(thenable._getDisposer());
        }
        return maybePromise;
    }
    function dispose(resources, inspection) {
        var i = 0;
        var len = resources.length;
        var ret = Promise.defer();
        function iterator() {
            if (i >= len) return ret.resolve();
            var maybePromise = castPreservingDisposable(resources[i++]);
            if (maybePromise instanceof Promise &&
                maybePromise._isDisposable()) {
                try {
                    maybePromise = cast(maybePromise._getDisposer()
                                        .tryDispose(inspection), void 0);
                } catch (e) {
                    return thrower(e);
                }
                if (maybePromise instanceof Promise) {
                    return maybePromise._then(iterator, thrower,
                                              null, null, null);
                }
            }
            iterator();
        }
        iterator();
        return ret.promise;
    }

    function disposerSuccess(value) {
        var inspection = new PromiseInspection();
        inspection._settledValue = value;
        inspection._bitField = 268435456;
        return dispose(this, inspection).thenReturn(value);
    }

    function disposerFail(reason) {
        var inspection = new PromiseInspection();
        inspection._settledValue = reason;
        inspection._bitField = 134217728;
        return dispose(this, inspection).thenThrow(reason);
    }

    function Disposer(data, promise) {
        this._data = data;
        this._promise = promise;
    }

    Disposer.prototype.data = function Disposer$data() {
        return this._data;
    };

    Disposer.prototype.promise = function Disposer$promise() {
        return this._promise;
    };

    Disposer.prototype.resource = function Disposer$resource() {
        if (this.promise().isFulfilled()) {
            return this.promise().value();
        }
        return null;
    };

    Disposer.prototype.tryDispose = function(inspection) {
        var resource = this.resource();
        var ret = resource !== null
            ? this.doDispose(resource, inspection) : null;
        this._promise._unsetDisposable();
        this._data = this._promise = null;
        return ret;
    };

    Disposer.isDisposer = function Disposer$isDisposer(d) {
        return (d != null &&
                typeof d.resource === "function" &&
                typeof d.tryDispose === "function");
    };

    function FunctionDisposer(fn, promise) {
        this.constructor$(fn, promise);
    }
    inherits(FunctionDisposer, Disposer);

    FunctionDisposer.prototype.doDispose = function (resource, inspection) {
        var fn = this.data();
        return fn.call(resource, resource, inspection);
    };

    Promise.using = function Promise$using() {
        var len = arguments.length;
        if (len < 2) return apiRejection(
                        "you must pass at least 2 arguments to Promise.using");
        var fn = arguments[len - 1];
        if (typeof fn !== "function") return apiRejection("fn must be a function");
        len--;
        var resources = new Array(len);
        for (var i = 0; i < len; ++i) {
            var resource = arguments[i];
            if (Disposer.isDisposer(resource)) {
                var disposer = resource;
                resource = resource.promise();
                resource._setDisposable(disposer);
            }
            resources[i] = resource;
        }

        return Promise.settle(resources)
            .then(inspectionMapper)
            .spread(fn)
            ._then(disposerSuccess, disposerFail, void 0, resources, void 0);
    };

    Promise.prototype._setDisposable =
    function Promise$_setDisposable(disposer) {
        this._bitField = this._bitField | 262144;
        this._disposer = disposer;
    };

    Promise.prototype._isDisposable = function Promise$_isDisposable() {
        return (this._bitField & 262144) > 0;
    };

    Promise.prototype._getDisposer = function Promise$_getDisposer() {
        return this._disposer;
    };

    Promise.prototype._unsetDisposable = function Promise$_unsetDisposable() {
        this._bitField = this._bitField & (~262144);
        this._disposer = void 0;
    };

    Promise.prototype.disposer = function Promise$disposer(fn) {
        if (typeof fn === "function") {
            return new FunctionDisposer(fn, this);
        }
        throw new TypeError();
    };

};

},{"./errors.js":15,"./util.js":40}],40:[function(require,module,exports){
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
"use strict";
var es5 = require("./es5.js");
var haveGetters = (function(){
    try {
        var o = {};
        es5.defineProperty(o, "f", {
            get: function () {
                return 3;
            }
        });
        return o.f === 3;
    }
    catch (e) {
        return false;
    }

})();
var canEvaluate = typeof navigator == "undefined";
var errorObj = {e: {}};
function tryCatch1(fn, receiver, arg) {
    try { return fn.call(receiver, arg); }
    catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

function tryCatch2(fn, receiver, arg, arg2) {
    try { return fn.call(receiver, arg, arg2); }
    catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

function tryCatch3(fn, receiver, arg, arg2, arg3) {
    try { return fn.call(receiver, arg, arg2, arg3); }
    catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

function tryCatch4(fn, receiver, arg, arg2, arg3, arg4) {
    try { return fn.call(receiver, arg, arg2, arg3, arg4); }
    catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

function tryCatchApply(fn, args, receiver) {
    try { return fn.apply(receiver, args); }
    catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

var inherits = function(Child, Parent) {
    var hasProp = {}.hasOwnProperty;

    function T() {
        this.constructor = Child;
        this.constructor$ = Parent;
        for (var propertyName in Parent.prototype) {
            if (hasProp.call(Parent.prototype, propertyName) &&
                propertyName.charAt(propertyName.length-1) !== "$"
           ) {
                this[propertyName + "$"] = Parent.prototype[propertyName];
            }
        }
    }
    T.prototype = Parent.prototype;
    Child.prototype = new T();
    return Child.prototype;
};

function asString(val) {
    return typeof val === "string" ? val : ("" + val);
}

function isPrimitive(val) {
    return val == null || val === true || val === false ||
        typeof val === "string" || typeof val === "number";

}

function isObject(value) {
    return !isPrimitive(value);
}

function maybeWrapAsError(maybeError) {
    if (!isPrimitive(maybeError)) return maybeError;

    return new Error(asString(maybeError));
}

function withAppended(target, appendee) {
    var len = target.length;
    var ret = new Array(len + 1);
    var i;
    for (i = 0; i < len; ++i) {
        ret[i] = target[i];
    }
    ret[i] = appendee;
    return ret;
}

function getDataPropertyOrDefault(obj, key, defaultValue) {
    if (es5.isES5) {
        var desc = Object.getOwnPropertyDescriptor(obj, key);
        if (desc != null) {
            return desc.get == null && desc.set == null
                    ? desc.value
                    : defaultValue;
        }
    } else {
        return {}.hasOwnProperty.call(obj, key) ? obj[key] : void 0;
    }
}

function notEnumerableProp(obj, name, value) {
    if (isPrimitive(obj)) return obj;
    var descriptor = {
        value: value,
        configurable: true,
        enumerable: false,
        writable: true
    };
    es5.defineProperty(obj, name, descriptor);
    return obj;
}


var wrapsPrimitiveReceiver = (function() {
    return this !== "string";
}).call("string");

function thrower(r) {
    throw r;
}

var inheritedDataKeys = (function() {
    if (es5.isES5) {
        return function(obj, opts) {
            var ret = [];
            var visitedKeys = Object.create(null);
            var getKeys = Object(opts).includeHidden
                ? Object.getOwnPropertyNames
                : Object.keys;
            while (obj != null) {
                var keys;
                try {
                    keys = getKeys(obj);
                } catch (e) {
                    return ret;
                }
                for (var i = 0; i < keys.length; ++i) {
                    var key = keys[i];
                    if (visitedKeys[key]) continue;
                    visitedKeys[key] = true;
                    var desc = Object.getOwnPropertyDescriptor(obj, key);
                    if (desc != null && desc.get == null && desc.set == null) {
                        ret.push(key);
                    }
                }
                obj = es5.getPrototypeOf(obj);
            }
            return ret;
        };
    } else {
        return function(obj) {
            var ret = [];
            /*jshint forin:false */
            for (var key in obj) {
                ret.push(key);
            }
            return ret;
        };
    }

})();

function isClass(fn) {
    try {
        if (typeof fn === "function") {
            var keys = es5.keys(fn.prototype);
            return keys.length > 0 &&
                   !(keys.length === 1 && keys[0] === "constructor");
        }
        return false;
    } catch (e) {
        return false;
    }
}

function toFastProperties(obj) {
    /*jshint -W027*/
    function f() {}
    f.prototype = obj;
    return f;
    eval(obj);
}

var rident = /^[a-z$_][a-z$_0-9]*$/i;
function isIdentifier(str) {
    return rident.test(str);
}

function filledRange(count, prefix, suffix) {
    var ret = new Array(count);
    for(var i = 0; i < count; ++i) {
        ret[i] = prefix + i + suffix;
    }
    return ret;
}

var ret = {
    isClass: isClass,
    isIdentifier: isIdentifier,
    inheritedDataKeys: inheritedDataKeys,
    getDataPropertyOrDefault: getDataPropertyOrDefault,
    thrower: thrower,
    isArray: es5.isArray,
    haveGetters: haveGetters,
    notEnumerableProp: notEnumerableProp,
    isPrimitive: isPrimitive,
    isObject: isObject,
    canEvaluate: canEvaluate,
    errorObj: errorObj,
    tryCatch1: tryCatch1,
    tryCatch2: tryCatch2,
    tryCatch3: tryCatch3,
    tryCatch4: tryCatch4,
    tryCatchApply: tryCatchApply,
    inherits: inherits,
    withAppended: withAppended,
    asString: asString,
    maybeWrapAsError: maybeWrapAsError,
    wrapsPrimitiveReceiver: wrapsPrimitiveReceiver,
    toFastProperties: toFastProperties,
    filledRange: filledRange
};

module.exports = ret;

},{"./es5.js":17}],41:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamFwc3UvSG9iYnkvaW5mb2thbGEvaW5mb2thbGEvc3RhdGljX3NyYy9pbmZva2FsYS9pbmZva2FsYS5jb2ZmZWUiLCIvVXNlcnMvamFwc3UvSG9iYnkvaW5mb2thbGEvYm93ZXJfY29tcG9uZW50cy9qcXVlcnkvZGlzdC9qcXVlcnkubWluLmpzIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL2Jvd2VyX2NvbXBvbmVudHMva25vY2tvdXQvZGlzdC9rbm9ja291dC5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9pbmZva2FsYS9zdGF0aWNfc3JjL2luZm9rYWxhL21haW5fdmlld19tb2RlbC5jb2ZmZWUiLCIvVXNlcnMvamFwc3UvSG9iYnkvaW5mb2thbGEvaW5mb2thbGEvc3RhdGljX3NyYy9pbmZva2FsYS9tZXNzYWdlX3NlcnZpY2UuY29mZmVlIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL2FueS5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9hc3luYy5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9ibHVlYmlyZC5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9jYWxsX2dldC5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9jYW5jZWwuanMiLCIvVXNlcnMvamFwc3UvSG9iYnkvaW5mb2thbGEvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vY2FwdHVyZWRfdHJhY2UuanMiLCIvVXNlcnMvamFwc3UvSG9iYnkvaW5mb2thbGEvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vY2F0Y2hfZmlsdGVyLmpzIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL2RpcmVjdF9yZXNvbHZlLmpzIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL2VhY2guanMiLCIvVXNlcnMvamFwc3UvSG9iYnkvaW5mb2thbGEvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vZXJyb3JzLmpzIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL2Vycm9yc19hcGlfcmVqZWN0aW9uLmpzIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL2VzNS5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9maWx0ZXIuanMiLCIvVXNlcnMvamFwc3UvSG9iYnkvaW5mb2thbGEvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vZmluYWxseS5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9nZW5lcmF0b3JzLmpzIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL2pvaW4uanMiLCIvVXNlcnMvamFwc3UvSG9iYnkvaW5mb2thbGEvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vbWFwLmpzIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL25vZGVpZnkuanMiLCIvVXNlcnMvamFwc3UvSG9iYnkvaW5mb2thbGEvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vcHJvZ3Jlc3MuanMiLCIvVXNlcnMvamFwc3UvSG9iYnkvaW5mb2thbGEvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vcHJvbWlzZS5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9wcm9taXNlX2FycmF5LmpzIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3Byb21pc2VfcmVzb2x2ZXIuanMiLCIvVXNlcnMvamFwc3UvSG9iYnkvaW5mb2thbGEvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vcHJvbWlzaWZ5LmpzIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3Byb3BzLmpzIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3F1ZXVlLmpzIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3JhY2UuanMiLCIvVXNlcnMvamFwc3UvSG9iYnkvaW5mb2thbGEvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vcmVkdWNlLmpzIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3NjaGVkdWxlLmpzIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3NldHRsZS5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9zb21lLmpzIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3N5bmNocm9ub3VzX2luc3BlY3Rpb24uanMiLCIvVXNlcnMvamFwc3UvSG9iYnkvaW5mb2thbGEvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vdGhlbmFibGVzLmpzIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3RpbWVycy5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi91c2luZy5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi91dGlsLmpzIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFBLG9CQUFBOztBQUFBLENBQUEsR0FBSSxPQUFBLENBQVEsUUFBUixDQUFKLENBQUE7O0FBQUEsRUFDQSxHQUFLLE9BQUEsQ0FBUSxVQUFSLENBREwsQ0FBQTs7QUFBQSxhQUdBLEdBQWdCLE9BQUEsQ0FBUSwwQkFBUixDQUhoQixDQUFBOztBQUFBLEVBS0UsQ0FBQyxhQUFILENBQWlCLEdBQUEsQ0FBQSxhQUFqQixDQUxBLENBQUE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9HQSxJQUFBLHdEQUFBOztBQUFBLE9BQUEsR0FBVSxPQUFBLENBQVEsVUFBUixDQUFWLENBQUE7O0FBQUEsRUFDQSxHQUFLLE9BQUEsQ0FBUSxVQUFSLENBREwsQ0FBQTs7QUFBQSxPQUcyQixPQUFBLENBQVEsMEJBQVIsQ0FBM0IsRUFBQyxtQkFBQSxXQUFELEVBQWMsaUJBQUEsU0FIZCxDQUFBOztBQUFBLE1BS00sQ0FBQyxPQUFQLEdBQXVCO0FBQ1IsRUFBQSx1QkFBQSxHQUFBO0FBQ1gsSUFBQSxJQUFDLENBQUEsUUFBRCxHQUFZLEVBQUUsQ0FBQyxlQUFILENBQW1CLEVBQW5CLENBQVosQ0FBQTtBQUFBLElBRUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxDQUFDLFNBQUEsQ0FBQSxDQUFELEVBQWMsV0FBQSxDQUFBLENBQWQsQ0FBWixDQUF5QyxDQUFDLE1BQTFDLENBQWlELENBQUEsU0FBQSxLQUFBLEdBQUE7YUFBQSxTQUFDLE1BQUQsRUFBUyxRQUFULEdBQUE7QUFDL0MsUUFBQSxLQUFDLENBQUEsWUFBRCxHQUFnQixNQUFNLENBQUMsWUFBdkIsQ0FBQTtlQUNBLEtBQUMsQ0FBQSxPQUFELENBQVMsUUFBVCxFQUYrQztNQUFBLEVBQUE7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQWpELENBRkEsQ0FEVztFQUFBLENBQWI7O0FBQUEsMEJBT0EsT0FBQSxHQUFTLFNBQUEsR0FBQTtXQUFHLFdBQUEsQ0FBQSxDQUFhLENBQUMsSUFBZCxDQUFtQixDQUFBLFNBQUEsS0FBQSxHQUFBO2FBQUEsU0FBQyxXQUFELEdBQUE7QUFDN0IsWUFBQSwyQkFBQTtBQUFBO2FBQUEsa0RBQUE7b0NBQUE7QUFBQSx3QkFBQSxLQUFDLENBQUEsUUFBUSxDQUFDLElBQVYsQ0FBZSxPQUFmLEVBQUEsQ0FBQTtBQUFBO3dCQUQ2QjtNQUFBLEVBQUE7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQW5CLEVBQUg7RUFBQSxDQVBULENBQUE7O3VCQUFBOztJQU5GLENBQUE7Ozs7O0FDQUEsSUFBQSxrQkFBQTs7QUFBQSxDQUFBLEdBQUksT0FBQSxDQUFRLFFBQVIsQ0FBSixDQUFBOztBQUFBLE9BQ0EsR0FBVSxPQUFBLENBQVEsVUFBUixDQURWLENBQUE7O0FBQUEsTUFHQSxHQUFTLHFCQUhULENBQUE7O0FBQUEsT0FLTyxDQUFDLFNBQVIsR0FBb0IsU0FBQSxHQUFBO1NBQUcsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxFQUFBLEdBQUcsTUFBSCxHQUFVLFNBQXBCLENBQWhCLEVBQUg7QUFBQSxDQUxwQixDQUFBOztBQUFBLE9BTU8sQ0FBQyxXQUFSLEdBQXNCLFNBQUEsR0FBQTtTQUFHLE9BQU8sQ0FBQyxPQUFSLENBQWdCLENBQUMsQ0FBQyxPQUFGLENBQVUsRUFBQSxHQUFHLE1BQUgsR0FBVSxXQUFwQixDQUFoQixFQUFIO0FBQUEsQ0FOdEIsQ0FBQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM09BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaGtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4VUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkID0gcmVxdWlyZSAnanF1ZXJ5J1xua28gPSByZXF1aXJlICdrbm9ja291dCdcblxuTWFpblZpZXdNb2RlbCA9IHJlcXVpcmUgJy4vbWFpbl92aWV3X21vZGVsLmNvZmZlZSdcblxua28uYXBwbHlCaW5kaW5ncyBuZXcgTWFpblZpZXdNb2RlbFxuIiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xuO19fYnJvd3NlcmlmeV9zaGltX3JlcXVpcmVfXz1yZXF1aXJlOyhmdW5jdGlvbiBicm93c2VyaWZ5U2hpbShtb2R1bGUsIGV4cG9ydHMsIHJlcXVpcmUsIGRlZmluZSwgYnJvd3NlcmlmeV9zaGltX19kZWZpbmVfX21vZHVsZV9fZXhwb3J0X18pIHtcbi8qISBqUXVlcnkgdjIuMS4xIHwgKGMpIDIwMDUsIDIwMTQgalF1ZXJ5IEZvdW5kYXRpb24sIEluYy4gfCBqcXVlcnkub3JnL2xpY2Vuc2UgKi9cbiFmdW5jdGlvbihhLGIpe1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1hLmRvY3VtZW50P2IoYSwhMCk6ZnVuY3Rpb24oYSl7aWYoIWEuZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtyZXR1cm4gYihhKX06YihhKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcyxmdW5jdGlvbihhLGIpe3ZhciBjPVtdLGQ9Yy5zbGljZSxlPWMuY29uY2F0LGY9Yy5wdXNoLGc9Yy5pbmRleE9mLGg9e30saT1oLnRvU3RyaW5nLGo9aC5oYXNPd25Qcm9wZXJ0eSxrPXt9LGw9YS5kb2N1bWVudCxtPVwiMi4xLjFcIixuPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBuLmZuLmluaXQoYSxiKX0sbz0vXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2cscD0vXi1tcy0vLHE9Ly0oW1xcZGEtel0pL2dpLHI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi50b1VwcGVyQ2FzZSgpfTtuLmZuPW4ucHJvdG90eXBlPXtqcXVlcnk6bSxjb25zdHJ1Y3RvcjpuLHNlbGVjdG9yOlwiXCIsbGVuZ3RoOjAsdG9BcnJheTpmdW5jdGlvbigpe3JldHVybiBkLmNhbGwodGhpcyl9LGdldDpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YT8wPmE/dGhpc1thK3RoaXMubGVuZ3RoXTp0aGlzW2FdOmQuY2FsbCh0aGlzKX0scHVzaFN0YWNrOmZ1bmN0aW9uKGEpe3ZhciBiPW4ubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLGEpO3JldHVybiBiLnByZXZPYmplY3Q9dGhpcyxiLmNvbnRleHQ9dGhpcy5jb250ZXh0LGJ9LGVhY2g6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbi5lYWNoKHRoaXMsYSxiKX0sbWFwOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayhuLm1hcCh0aGlzLGZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuY2FsbChiLGMsYil9KSl9LHNsaWNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGQuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sZmlyc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgwKX0sbGFzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKC0xKX0sZXE6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5sZW5ndGgsYz0rYSsoMD5hP2I6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGM+PTAmJmI+Yz9bdGhpc1tjXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKG51bGwpfSxwdXNoOmYsc29ydDpjLnNvcnQsc3BsaWNlOmMuc3BsaWNlfSxuLmV4dGVuZD1uLmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBhLGIsYyxkLGUsZixnPWFyZ3VtZW50c1swXXx8e30saD0xLGk9YXJndW1lbnRzLmxlbmd0aCxqPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIGcmJihqPWcsZz1hcmd1bWVudHNbaF18fHt9LGgrKyksXCJvYmplY3RcIj09dHlwZW9mIGd8fG4uaXNGdW5jdGlvbihnKXx8KGc9e30pLGg9PT1pJiYoZz10aGlzLGgtLSk7aT5oO2grKylpZihudWxsIT0oYT1hcmd1bWVudHNbaF0pKWZvcihiIGluIGEpYz1nW2JdLGQ9YVtiXSxnIT09ZCYmKGomJmQmJihuLmlzUGxhaW5PYmplY3QoZCl8fChlPW4uaXNBcnJheShkKSkpPyhlPyhlPSExLGY9YyYmbi5pc0FycmF5KGMpP2M6W10pOmY9YyYmbi5pc1BsYWluT2JqZWN0KGMpP2M6e30sZ1tiXT1uLmV4dGVuZChqLGYsZCkpOnZvaWQgMCE9PWQmJihnW2JdPWQpKTtyZXR1cm4gZ30sbi5leHRlbmQoe2V4cGFuZG86XCJqUXVlcnlcIisobStNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cXEQvZyxcIlwiKSxpc1JlYWR5OiEwLGVycm9yOmZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihhKX0sbm9vcDpmdW5jdGlvbigpe30saXNGdW5jdGlvbjpmdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT1uLnR5cGUoYSl9LGlzQXJyYXk6QXJyYXkuaXNBcnJheSxpc1dpbmRvdzpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YSYmYT09PWEud2luZG93fSxpc051bWVyaWM6ZnVuY3Rpb24oYSl7cmV0dXJuIW4uaXNBcnJheShhKSYmYS1wYXJzZUZsb2F0KGEpPj0wfSxpc1BsYWluT2JqZWN0OmZ1bmN0aW9uKGEpe3JldHVyblwib2JqZWN0XCIhPT1uLnR5cGUoYSl8fGEubm9kZVR5cGV8fG4uaXNXaW5kb3coYSk/ITE6YS5jb25zdHJ1Y3RvciYmIWouY2FsbChhLmNvbnN0cnVjdG9yLnByb3RvdHlwZSxcImlzUHJvdG90eXBlT2ZcIik/ITE6ITB9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oYSl7dmFyIGI7Zm9yKGIgaW4gYSlyZXR1cm4hMTtyZXR1cm4hMH0sdHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9hK1wiXCI6XCJvYmplY3RcIj09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGE/aFtpLmNhbGwoYSldfHxcIm9iamVjdFwiOnR5cGVvZiBhfSxnbG9iYWxFdmFsOmZ1bmN0aW9uKGEpe3ZhciBiLGM9ZXZhbDthPW4udHJpbShhKSxhJiYoMT09PWEuaW5kZXhPZihcInVzZSBzdHJpY3RcIik/KGI9bC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpLGIudGV4dD1hLGwuaGVhZC5hcHBlbmRDaGlsZChiKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpKTpjKGEpKX0sY2FtZWxDYXNlOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UocCxcIm1zLVwiKS5yZXBsYWNlKHEscil9LG5vZGVOYW1lOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWIudG9Mb3dlckNhc2UoKX0sZWFjaDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZT0wLGY9YS5sZW5ndGgsZz1zKGEpO2lmKGMpe2lmKGcpe2Zvcig7Zj5lO2UrKylpZihkPWIuYXBwbHkoYVtlXSxjKSxkPT09ITEpYnJlYWt9ZWxzZSBmb3IoZSBpbiBhKWlmKGQ9Yi5hcHBseShhW2VdLGMpLGQ9PT0hMSlicmVha31lbHNlIGlmKGcpe2Zvcig7Zj5lO2UrKylpZihkPWIuY2FsbChhW2VdLGUsYVtlXSksZD09PSExKWJyZWFrfWVsc2UgZm9yKGUgaW4gYSlpZihkPWIuY2FsbChhW2VdLGUsYVtlXSksZD09PSExKWJyZWFrO3JldHVybiBhfSx0cmltOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6KGErXCJcIikucmVwbGFjZShvLFwiXCIpfSxtYWtlQXJyYXk6ZnVuY3Rpb24oYSxiKXt2YXIgYz1ifHxbXTtyZXR1cm4gbnVsbCE9YSYmKHMoT2JqZWN0KGEpKT9uLm1lcmdlKGMsXCJzdHJpbmdcIj09dHlwZW9mIGE/W2FdOmEpOmYuY2FsbChjLGEpKSxjfSxpbkFycmF5OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbnVsbD09Yj8tMTpnLmNhbGwoYixhLGMpfSxtZXJnZTpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0rYi5sZW5ndGgsZD0wLGU9YS5sZW5ndGg7Yz5kO2QrKylhW2UrK109YltkXTtyZXR1cm4gYS5sZW5ndGg9ZSxhfSxncmVwOmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQsZT1bXSxmPTAsZz1hLmxlbmd0aCxoPSFjO2c+ZjtmKyspZD0hYihhW2ZdLGYpLGQhPT1oJiZlLnB1c2goYVtmXSk7cmV0dXJuIGV9LG1hcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZj0wLGc9YS5sZW5ndGgsaD1zKGEpLGk9W107aWYoaClmb3IoO2c+ZjtmKyspZD1iKGFbZl0sZixjKSxudWxsIT1kJiZpLnB1c2goZCk7ZWxzZSBmb3IoZiBpbiBhKWQ9YihhW2ZdLGYsYyksbnVsbCE9ZCYmaS5wdXNoKGQpO3JldHVybiBlLmFwcGx5KFtdLGkpfSxndWlkOjEscHJveHk6ZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGY7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGImJihjPWFbYl0sYj1hLGE9Yyksbi5pc0Z1bmN0aW9uKGEpPyhlPWQuY2FsbChhcmd1bWVudHMsMiksZj1mdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGJ8fHRoaXMsZS5jb25jYXQoZC5jYWxsKGFyZ3VtZW50cykpKX0sZi5ndWlkPWEuZ3VpZD1hLmd1aWR8fG4uZ3VpZCsrLGYpOnZvaWQgMH0sbm93OkRhdGUubm93LHN1cHBvcnQ6a30pLG4uZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3JcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtoW1wiW29iamVjdCBcIitiK1wiXVwiXT1iLnRvTG93ZXJDYXNlKCl9KTtmdW5jdGlvbiBzKGEpe3ZhciBiPWEubGVuZ3RoLGM9bi50eXBlKGEpO3JldHVyblwiZnVuY3Rpb25cIj09PWN8fG4uaXNXaW5kb3coYSk/ITE6MT09PWEubm9kZVR5cGUmJmI/ITA6XCJhcnJheVwiPT09Y3x8MD09PWJ8fFwibnVtYmVyXCI9PXR5cGVvZiBiJiZiPjAmJmItMSBpbiBhfXZhciB0PWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGksaixrLGwsbSxuLG8scCxxLHIscyx0LHU9XCJzaXp6bGVcIistbmV3IERhdGUsdj1hLmRvY3VtZW50LHc9MCx4PTAseT1nYigpLHo9Z2IoKSxBPWdiKCksQj1mdW5jdGlvbihhLGIpe3JldHVybiBhPT09YiYmKGw9ITApLDB9LEM9XCJ1bmRlZmluZWRcIixEPTE8PDMxLEU9e30uaGFzT3duUHJvcGVydHksRj1bXSxHPUYucG9wLEg9Ri5wdXNoLEk9Ri5wdXNoLEo9Ri5zbGljZSxLPUYuaW5kZXhPZnx8ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPTAsYz10aGlzLmxlbmd0aDtjPmI7YisrKWlmKHRoaXNbYl09PT1hKXJldHVybiBiO3JldHVybi0xfSxMPVwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixNPVwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixOPVwiKD86XFxcXFxcXFwufFtcXFxcdy1dfFteXFxcXHgwMC1cXFxceGEwXSkrXCIsTz1OLnJlcGxhY2UoXCJ3XCIsXCJ3I1wiKSxQPVwiXFxcXFtcIitNK1wiKihcIitOK1wiKSg/OlwiK00rXCIqKFsqXiR8IX5dPz0pXCIrTStcIiooPzonKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCJ8KFwiK08rXCIpKXwpXCIrTStcIipcXFxcXVwiLFE9XCI6KFwiK04rXCIpKD86XFxcXCgoKCcoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcIil8KCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiK1ArXCIpKil8LiopXFxcXCl8KVwiLFI9bmV3IFJlZ0V4cChcIl5cIitNK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitNK1wiKyRcIixcImdcIiksUz1uZXcgUmVnRXhwKFwiXlwiK00rXCIqLFwiK00rXCIqXCIpLFQ9bmV3IFJlZ0V4cChcIl5cIitNK1wiKihbPit+XXxcIitNK1wiKVwiK00rXCIqXCIpLFU9bmV3IFJlZ0V4cChcIj1cIitNK1wiKihbXlxcXFxdJ1xcXCJdKj8pXCIrTStcIipcXFxcXVwiLFwiZ1wiKSxWPW5ldyBSZWdFeHAoUSksVz1uZXcgUmVnRXhwKFwiXlwiK08rXCIkXCIpLFg9e0lEOm5ldyBSZWdFeHAoXCJeIyhcIitOK1wiKVwiKSxDTEFTUzpuZXcgUmVnRXhwKFwiXlxcXFwuKFwiK04rXCIpXCIpLFRBRzpuZXcgUmVnRXhwKFwiXihcIitOLnJlcGxhY2UoXCJ3XCIsXCJ3KlwiKStcIilcIiksQVRUUjpuZXcgUmVnRXhwKFwiXlwiK1ApLFBTRVVETzpuZXcgUmVnRXhwKFwiXlwiK1EpLENISUxEOm5ldyBSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiK00rXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIitNK1wiKig/OihbKy1dfClcIitNK1wiKihcXFxcZCspfCkpXCIrTStcIipcXFxcKXwpXCIsXCJpXCIpLGJvb2w6bmV3IFJlZ0V4cChcIl4oPzpcIitMK1wiKSRcIixcImlcIiksbmVlZHNDb250ZXh0Om5ldyBSZWdFeHAoXCJeXCIrTStcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrTStcIiooKD86LVxcXFxkKT9cXFxcZCopXCIrTStcIipcXFxcKXwpKD89W14tXXwkKVwiLFwiaVwiKX0sWT0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFo9L15oXFxkJC9pLCQ9L15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxfPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLGFiPS9bK35dLyxiYj0vJ3xcXFxcL2csY2I9bmV3IFJlZ0V4cChcIlxcXFxcXFxcKFtcXFxcZGEtZl17MSw2fVwiK00rXCI/fChcIitNK1wiKXwuKVwiLFwiaWdcIiksZGI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVwiMHhcIitiLTY1NTM2O3JldHVybiBkIT09ZHx8Yz9iOjA+ZD9TdHJpbmcuZnJvbUNoYXJDb2RlKGQrNjU1MzYpOlN0cmluZy5mcm9tQ2hhckNvZGUoZD4+MTB8NTUyOTYsMTAyMyZkfDU2MzIwKX07dHJ5e0kuYXBwbHkoRj1KLmNhbGwodi5jaGlsZE5vZGVzKSx2LmNoaWxkTm9kZXMpLEZbdi5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGV9Y2F0Y2goZWIpe0k9e2FwcGx5OkYubGVuZ3RoP2Z1bmN0aW9uKGEsYil7SC5hcHBseShhLEouY2FsbChiKSl9OmZ1bmN0aW9uKGEsYil7dmFyIGM9YS5sZW5ndGgsZD0wO3doaWxlKGFbYysrXT1iW2QrK10pO2EubGVuZ3RoPWMtMX19fWZ1bmN0aW9uIGZiKGEsYixkLGUpe3ZhciBmLGgsaixrLGwsbyxyLHMsdyx4O2lmKChiP2Iub3duZXJEb2N1bWVudHx8Yjp2KSE9PW4mJm0oYiksYj1ifHxuLGQ9ZHx8W10sIWF8fFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiBkO2lmKDEhPT0oaz1iLm5vZGVUeXBlKSYmOSE9PWspcmV0dXJuW107aWYocCYmIWUpe2lmKGY9Xy5leGVjKGEpKWlmKGo9ZlsxXSl7aWYoOT09PWspe2lmKGg9Yi5nZXRFbGVtZW50QnlJZChqKSwhaHx8IWgucGFyZW50Tm9kZSlyZXR1cm4gZDtpZihoLmlkPT09ailyZXR1cm4gZC5wdXNoKGgpLGR9ZWxzZSBpZihiLm93bmVyRG9jdW1lbnQmJihoPWIub3duZXJEb2N1bWVudC5nZXRFbGVtZW50QnlJZChqKSkmJnQoYixoKSYmaC5pZD09PWopcmV0dXJuIGQucHVzaChoKSxkfWVsc2V7aWYoZlsyXSlyZXR1cm4gSS5hcHBseShkLGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSkpLGQ7aWYoKGo9ZlszXSkmJmMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXJldHVybiBJLmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGopKSxkfWlmKGMucXNhJiYoIXF8fCFxLnRlc3QoYSkpKXtpZihzPXI9dSx3PWIseD05PT09ayYmYSwxPT09ayYmXCJvYmplY3RcIiE9PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7bz1nKGEpLChyPWIuZ2V0QXR0cmlidXRlKFwiaWRcIikpP3M9ci5yZXBsYWNlKGJiLFwiXFxcXCQmXCIpOmIuc2V0QXR0cmlidXRlKFwiaWRcIixzKSxzPVwiW2lkPSdcIitzK1wiJ10gXCIsbD1vLmxlbmd0aDt3aGlsZShsLS0pb1tsXT1zK3FiKG9bbF0pO3c9YWIudGVzdChhKSYmb2IoYi5wYXJlbnROb2RlKXx8Yix4PW8uam9pbihcIixcIil9aWYoeCl0cnl7cmV0dXJuIEkuYXBwbHkoZCx3LnF1ZXJ5U2VsZWN0b3JBbGwoeCkpLGR9Y2F0Y2goeSl7fWZpbmFsbHl7cnx8Yi5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKX19fXJldHVybiBpKGEucmVwbGFjZShSLFwiJDFcIiksYixkLGUpfWZ1bmN0aW9uIGdiKCl7dmFyIGE9W107ZnVuY3Rpb24gYihjLGUpe3JldHVybiBhLnB1c2goYytcIiBcIik+ZC5jYWNoZUxlbmd0aCYmZGVsZXRlIGJbYS5zaGlmdCgpXSxiW2MrXCIgXCJdPWV9cmV0dXJuIGJ9ZnVuY3Rpb24gaGIoYSl7cmV0dXJuIGFbdV09ITAsYX1mdW5jdGlvbiBpYihhKXt2YXIgYj1uLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dHJ5e3JldHVybiEhYShiKX1jYXRjaChjKXtyZXR1cm4hMX1maW5hbGx5e2IucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpLGI9bnVsbH19ZnVuY3Rpb24gamIoYSxiKXt2YXIgYz1hLnNwbGl0KFwifFwiKSxlPWEubGVuZ3RoO3doaWxlKGUtLSlkLmF0dHJIYW5kbGVbY1tlXV09Yn1mdW5jdGlvbiBrYihhLGIpe3ZhciBjPWImJmEsZD1jJiYxPT09YS5ub2RlVHlwZSYmMT09PWIubm9kZVR5cGUmJih+Yi5zb3VyY2VJbmRleHx8RCktKH5hLnNvdXJjZUluZGV4fHxEKTtpZihkKXJldHVybiBkO2lmKGMpd2hpbGUoYz1jLm5leHRTaWJsaW5nKWlmKGM9PT1iKXJldHVybi0xO3JldHVybiBhPzE6LTF9ZnVuY3Rpb24gbGIoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1jJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBtYihhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihcImlucHV0XCI9PT1jfHxcImJ1dHRvblwiPT09YykmJmIudHlwZT09PWF9fWZ1bmN0aW9uIG5iKGEpe3JldHVybiBoYihmdW5jdGlvbihiKXtyZXR1cm4gYj0rYixoYihmdW5jdGlvbihjLGQpe3ZhciBlLGY9YShbXSxjLmxlbmd0aCxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSljW2U9ZltnXV0mJihjW2VdPSEoZFtlXT1jW2VdKSl9KX0pfWZ1bmN0aW9uIG9iKGEpe3JldHVybiBhJiZ0eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZSE9PUMmJmF9Yz1mYi5zdXBwb3J0PXt9LGY9ZmIuaXNYTUw9ZnVuY3Rpb24oYSl7dmFyIGI9YSYmKGEub3duZXJEb2N1bWVudHx8YSkuZG9jdW1lbnRFbGVtZW50O3JldHVybiBiP1wiSFRNTFwiIT09Yi5ub2RlTmFtZTohMX0sbT1mYi5zZXREb2N1bWVudD1mdW5jdGlvbihhKXt2YXIgYixlPWE/YS5vd25lckRvY3VtZW50fHxhOnYsZz1lLmRlZmF1bHRWaWV3O3JldHVybiBlIT09biYmOT09PWUubm9kZVR5cGUmJmUuZG9jdW1lbnRFbGVtZW50PyhuPWUsbz1lLmRvY3VtZW50RWxlbWVudCxwPSFmKGUpLGcmJmchPT1nLnRvcCYmKGcuYWRkRXZlbnRMaXN0ZW5lcj9nLmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIixmdW5jdGlvbigpe20oKX0sITEpOmcuYXR0YWNoRXZlbnQmJmcuYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLGZ1bmN0aW9uKCl7bSgpfSkpLGMuYXR0cmlidXRlcz1pYihmdW5jdGlvbihhKXtyZXR1cm4gYS5jbGFzc05hbWU9XCJpXCIsIWEuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpfSksYy5nZXRFbGVtZW50c0J5VGFnTmFtZT1pYihmdW5jdGlvbihhKXtyZXR1cm4gYS5hcHBlbmRDaGlsZChlLmNyZWF0ZUNvbW1lbnQoXCJcIikpLCFhLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGh9KSxjLmdldEVsZW1lbnRzQnlDbGFzc05hbWU9JC50ZXN0KGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSkmJmliKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxkaXYgY2xhc3M9J2EnPjwvZGl2PjxkaXYgY2xhc3M9J2EgaSc+PC9kaXY+XCIsYS5maXJzdENoaWxkLmNsYXNzTmFtZT1cImlcIiwyPT09YS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaVwiKS5sZW5ndGh9KSxjLmdldEJ5SWQ9aWIoZnVuY3Rpb24oYSl7cmV0dXJuIG8uYXBwZW5kQ2hpbGQoYSkuaWQ9dSwhZS5nZXRFbGVtZW50c0J5TmFtZXx8IWUuZ2V0RWxlbWVudHNCeU5hbWUodSkubGVuZ3RofSksYy5nZXRCeUlkPyhkLmZpbmQuSUQ9ZnVuY3Rpb24oYSxiKXtpZih0eXBlb2YgYi5nZXRFbGVtZW50QnlJZCE9PUMmJnApe3ZhciBjPWIuZ2V0RWxlbWVudEJ5SWQoYSk7cmV0dXJuIGMmJmMucGFyZW50Tm9kZT9bY106W119fSxkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoY2IsZGIpO3JldHVybiBmdW5jdGlvbihhKXtyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PWJ9fSk6KGRlbGV0ZSBkLmZpbmQuSUQsZC5maWx0ZXIuSUQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKGNiLGRiKTtyZXR1cm4gZnVuY3Rpb24oYSl7dmFyIGM9dHlwZW9mIGEuZ2V0QXR0cmlidXRlTm9kZSE9PUMmJmEuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO3JldHVybiBjJiZjLnZhbHVlPT09Yn19KSxkLmZpbmQuVEFHPWMuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdHlwZW9mIGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUhPT1DP2IuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSk6dm9pZCAwfTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT0wLGY9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKTtpZihcIipcIj09PWEpe3doaWxlKGM9ZltlKytdKTE9PT1jLm5vZGVUeXBlJiZkLnB1c2goYyk7cmV0dXJuIGR9cmV0dXJuIGZ9LGQuZmluZC5DTEFTUz1jLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmZ1bmN0aW9uKGEsYil7cmV0dXJuIHR5cGVvZiBiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUhPT1DJiZwP2IuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShhKTp2b2lkIDB9LHI9W10scT1bXSwoYy5xc2E9JC50ZXN0KGUucXVlcnlTZWxlY3RvckFsbCkpJiYoaWIoZnVuY3Rpb24oYSl7YS5pbm5lckhUTUw9XCI8c2VsZWN0IG1zYWxsb3djbGlwPScnPjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCIsYS5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djbGlwXj0nJ11cIikubGVuZ3RoJiZxLnB1c2goXCJbKl4kXT1cIitNK1wiKig/OicnfFxcXCJcXFwiKVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc2VsZWN0ZWRdXCIpLmxlbmd0aHx8cS5wdXNoKFwiXFxcXFtcIitNK1wiKig/OnZhbHVlfFwiK0wrXCIpXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aHx8cS5wdXNoKFwiOmNoZWNrZWRcIil9KSxpYihmdW5jdGlvbihhKXt2YXIgYj1lLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtiLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImhpZGRlblwiKSxhLmFwcGVuZENoaWxkKGIpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIkRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoJiZxLnB1c2goXCJuYW1lXCIrTStcIipbKl4kfCF+XT89XCIpLGEucXVlcnlTZWxlY3RvckFsbChcIjplbmFibGVkXCIpLmxlbmd0aHx8cS5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpLHEucHVzaChcIiwuKjpcIil9KSksKGMubWF0Y2hlc1NlbGVjdG9yPSQudGVzdChzPW8ubWF0Y2hlc3x8by53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fG8ubW96TWF0Y2hlc1NlbGVjdG9yfHxvLm9NYXRjaGVzU2VsZWN0b3J8fG8ubXNNYXRjaGVzU2VsZWN0b3IpKSYmaWIoZnVuY3Rpb24oYSl7Yy5kaXNjb25uZWN0ZWRNYXRjaD1zLmNhbGwoYSxcImRpdlwiKSxzLmNhbGwoYSxcIltzIT0nJ106eFwiKSxyLnB1c2goXCIhPVwiLFEpfSkscT1xLmxlbmd0aCYmbmV3IFJlZ0V4cChxLmpvaW4oXCJ8XCIpKSxyPXIubGVuZ3RoJiZuZXcgUmVnRXhwKHIuam9pbihcInxcIikpLGI9JC50ZXN0KG8uY29tcGFyZURvY3VtZW50UG9zaXRpb24pLHQ9Ynx8JC50ZXN0KG8uY29udGFpbnMpP2Z1bmN0aW9uKGEsYil7dmFyIGM9OT09PWEubm9kZVR5cGU/YS5kb2N1bWVudEVsZW1lbnQ6YSxkPWImJmIucGFyZW50Tm9kZTtyZXR1cm4gYT09PWR8fCEoIWR8fDEhPT1kLm5vZGVUeXBlfHwhKGMuY29udGFpbnM/Yy5jb250YWlucyhkKTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiYxNiZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGQpKSl9OmZ1bmN0aW9uKGEsYil7aWYoYil3aGlsZShiPWIucGFyZW50Tm9kZSlpZihiPT09YSlyZXR1cm4hMDtyZXR1cm4hMX0sQj1iP2Z1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgZD0hYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbi0hYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtyZXR1cm4gZD9kOihkPShhLm93bmVyRG9jdW1lbnR8fGEpPT09KGIub3duZXJEb2N1bWVudHx8Yik/YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKToxLDEmZHx8IWMuc29ydERldGFjaGVkJiZiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGEpPT09ZD9hPT09ZXx8YS5vd25lckRvY3VtZW50PT09diYmdCh2LGEpPy0xOmI9PT1lfHxiLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYik/MTprP0suY2FsbChrLGEpLUsuY2FsbChrLGIpOjA6NCZkPy0xOjEpfTpmdW5jdGlvbihhLGIpe2lmKGE9PT1iKXJldHVybiBsPSEwLDA7dmFyIGMsZD0wLGY9YS5wYXJlbnROb2RlLGc9Yi5wYXJlbnROb2RlLGg9W2FdLGk9W2JdO2lmKCFmfHwhZylyZXR1cm4gYT09PWU/LTE6Yj09PWU/MTpmPy0xOmc/MTprP0suY2FsbChrLGEpLUsuY2FsbChrLGIpOjA7aWYoZj09PWcpcmV0dXJuIGtiKGEsYik7Yz1hO3doaWxlKGM9Yy5wYXJlbnROb2RlKWgudW5zaGlmdChjKTtjPWI7d2hpbGUoYz1jLnBhcmVudE5vZGUpaS51bnNoaWZ0KGMpO3doaWxlKGhbZF09PT1pW2RdKWQrKztyZXR1cm4gZD9rYihoW2RdLGlbZF0pOmhbZF09PT12Py0xOmlbZF09PT12PzE6MH0sZSk6bn0sZmIubWF0Y2hlcz1mdW5jdGlvbihhLGIpe3JldHVybiBmYihhLG51bGwsbnVsbCxiKX0sZmIubWF0Y2hlc1NlbGVjdG9yPWZ1bmN0aW9uKGEsYil7aWYoKGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpLGI9Yi5yZXBsYWNlKFUsXCI9JyQxJ11cIiksISghYy5tYXRjaGVzU2VsZWN0b3J8fCFwfHxyJiZyLnRlc3QoYil8fHEmJnEudGVzdChiKSkpdHJ5e3ZhciBkPXMuY2FsbChhLGIpO2lmKGR8fGMuZGlzY29ubmVjdGVkTWF0Y2h8fGEuZG9jdW1lbnQmJjExIT09YS5kb2N1bWVudC5ub2RlVHlwZSlyZXR1cm4gZH1jYXRjaChlKXt9cmV0dXJuIGZiKGIsbixudWxsLFthXSkubGVuZ3RoPjB9LGZiLmNvbnRhaW5zPWZ1bmN0aW9uKGEsYil7cmV0dXJuKGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpLHQoYSxiKX0sZmIuYXR0cj1mdW5jdGlvbihhLGIpeyhhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKTt2YXIgZT1kLmF0dHJIYW5kbGVbYi50b0xvd2VyQ2FzZSgpXSxmPWUmJkUuY2FsbChkLmF0dHJIYW5kbGUsYi50b0xvd2VyQ2FzZSgpKT9lKGEsYiwhcCk6dm9pZCAwO3JldHVybiB2b2lkIDAhPT1mP2Y6Yy5hdHRyaWJ1dGVzfHwhcD9hLmdldEF0dHJpYnV0ZShiKTooZj1hLmdldEF0dHJpYnV0ZU5vZGUoYikpJiZmLnNwZWNpZmllZD9mLnZhbHVlOm51bGx9LGZiLmVycm9yPWZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiK2EpfSxmYi51bmlxdWVTb3J0PWZ1bmN0aW9uKGEpe3ZhciBiLGQ9W10sZT0wLGY9MDtpZihsPSFjLmRldGVjdER1cGxpY2F0ZXMsaz0hYy5zb3J0U3RhYmxlJiZhLnNsaWNlKDApLGEuc29ydChCKSxsKXt3aGlsZShiPWFbZisrXSliPT09YVtmXSYmKGU9ZC5wdXNoKGYpKTt3aGlsZShlLS0pYS5zcGxpY2UoZFtlXSwxKX1yZXR1cm4gaz1udWxsLGF9LGU9ZmIuZ2V0VGV4dD1mdW5jdGlvbihhKXt2YXIgYixjPVwiXCIsZD0wLGY9YS5ub2RlVHlwZTtpZihmKXtpZigxPT09Znx8OT09PWZ8fDExPT09Zil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEudGV4dENvbnRlbnQpcmV0dXJuIGEudGV4dENvbnRlbnQ7Zm9yKGE9YS5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKWMrPWUoYSl9ZWxzZSBpZigzPT09Znx8ND09PWYpcmV0dXJuIGEubm9kZVZhbHVlfWVsc2Ugd2hpbGUoYj1hW2QrK10pYys9ZShiKTtyZXR1cm4gY30sZD1mYi5zZWxlY3RvcnM9e2NhY2hlTGVuZ3RoOjUwLGNyZWF0ZVBzZXVkbzpoYixtYXRjaDpYLGF0dHJIYW5kbGU6e30sZmluZDp7fSxyZWxhdGl2ZTp7XCI+XCI6e2RpcjpcInBhcmVudE5vZGVcIixmaXJzdDohMH0sXCIgXCI6e2RpcjpcInBhcmVudE5vZGVcIn0sXCIrXCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wiLGZpcnN0OiEwfSxcIn5cIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCJ9fSxwcmVGaWx0ZXI6e0FUVFI6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV09YVsxXS5yZXBsYWNlKGNiLGRiKSxhWzNdPShhWzNdfHxhWzRdfHxhWzVdfHxcIlwiKS5yZXBsYWNlKGNiLGRiKSxcIn49XCI9PT1hWzJdJiYoYVszXT1cIiBcIithWzNdK1wiIFwiKSxhLnNsaWNlKDAsNCl9LENISUxEOmZ1bmN0aW9uKGEpe3JldHVybiBhWzFdPWFbMV0udG9Mb3dlckNhc2UoKSxcIm50aFwiPT09YVsxXS5zbGljZSgwLDMpPyhhWzNdfHxmYi5lcnJvcihhWzBdKSxhWzRdPSsoYVs0XT9hWzVdKyhhWzZdfHwxKToyKihcImV2ZW5cIj09PWFbM118fFwib2RkXCI9PT1hWzNdKSksYVs1XT0rKGFbN10rYVs4XXx8XCJvZGRcIj09PWFbM10pKTphWzNdJiZmYi5lcnJvcihhWzBdKSxhfSxQU0VVRE86ZnVuY3Rpb24oYSl7dmFyIGIsYz0hYVs2XSYmYVsyXTtyZXR1cm4gWC5DSElMRC50ZXN0KGFbMF0pP251bGw6KGFbM10/YVsyXT1hWzRdfHxhWzVdfHxcIlwiOmMmJlYudGVzdChjKSYmKGI9ZyhjLCEwKSkmJihiPWMuaW5kZXhPZihcIilcIixjLmxlbmd0aC1iKS1jLmxlbmd0aCkmJihhWzBdPWFbMF0uc2xpY2UoMCxiKSxhWzJdPWMuc2xpY2UoMCxiKSksYS5zbGljZSgwLDMpKX19LGZpbHRlcjp7VEFHOmZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShjYixkYikudG9Mb3dlckNhc2UoKTtyZXR1cm5cIipcIj09PWE/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oYSl7cmV0dXJuIGEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWJ9fSxDTEFTUzpmdW5jdGlvbihhKXt2YXIgYj15W2ErXCIgXCJdO3JldHVybiBifHwoYj1uZXcgUmVnRXhwKFwiKF58XCIrTStcIilcIithK1wiKFwiK00rXCJ8JClcIikpJiZ5KGEsZnVuY3Rpb24oYSl7cmV0dXJuIGIudGVzdChcInN0cmluZ1wiPT10eXBlb2YgYS5jbGFzc05hbWUmJmEuY2xhc3NOYW1lfHx0eXBlb2YgYS5nZXRBdHRyaWJ1dGUhPT1DJiZhLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKX0pfSxBVFRSOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZCl7dmFyIGU9ZmIuYXR0cihkLGEpO3JldHVybiBudWxsPT1lP1wiIT1cIj09PWI6Yj8oZSs9XCJcIixcIj1cIj09PWI/ZT09PWM6XCIhPVwiPT09Yj9lIT09YzpcIl49XCI9PT1iP2MmJjA9PT1lLmluZGV4T2YoYyk6XCIqPVwiPT09Yj9jJiZlLmluZGV4T2YoYyk+LTE6XCIkPVwiPT09Yj9jJiZlLnNsaWNlKC1jLmxlbmd0aCk9PT1jOlwifj1cIj09PWI/KFwiIFwiK2UrXCIgXCIpLmluZGV4T2YoYyk+LTE6XCJ8PVwiPT09Yj9lPT09Y3x8ZS5zbGljZSgwLGMubGVuZ3RoKzEpPT09YytcIi1cIjohMSk6ITB9fSxDSElMRDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPVwibnRoXCIhPT1hLnNsaWNlKDAsMyksZz1cImxhc3RcIiE9PWEuc2xpY2UoLTQpLGg9XCJvZi10eXBlXCI9PT1iO3JldHVybiAxPT09ZCYmMD09PWU/ZnVuY3Rpb24oYSl7cmV0dXJuISFhLnBhcmVudE5vZGV9OmZ1bmN0aW9uKGIsYyxpKXt2YXIgaixrLGwsbSxuLG8scD1mIT09Zz9cIm5leHRTaWJsaW5nXCI6XCJwcmV2aW91c1NpYmxpbmdcIixxPWIucGFyZW50Tm9kZSxyPWgmJmIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxzPSFpJiYhaDtpZihxKXtpZihmKXt3aGlsZShwKXtsPWI7d2hpbGUobD1sW3BdKWlmKGg/bC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09cjoxPT09bC5ub2RlVHlwZSlyZXR1cm4hMTtvPXA9XCJvbmx5XCI9PT1hJiYhbyYmXCJuZXh0U2libGluZ1wifXJldHVybiEwfWlmKG89W2c/cS5maXJzdENoaWxkOnEubGFzdENoaWxkXSxnJiZzKXtrPXFbdV18fChxW3VdPXt9KSxqPWtbYV18fFtdLG49alswXT09PXcmJmpbMV0sbT1qWzBdPT09dyYmalsyXSxsPW4mJnEuY2hpbGROb2Rlc1tuXTt3aGlsZShsPSsrbiYmbCYmbFtwXXx8KG09bj0wKXx8by5wb3AoKSlpZigxPT09bC5ub2RlVHlwZSYmKyttJiZsPT09Yil7a1thXT1bdyxuLG1dO2JyZWFrfX1lbHNlIGlmKHMmJihqPShiW3VdfHwoYlt1XT17fSkpW2FdKSYmalswXT09PXcpbT1qWzFdO2Vsc2Ugd2hpbGUobD0rK24mJmwmJmxbcF18fChtPW49MCl8fG8ucG9wKCkpaWYoKGg/bC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09cjoxPT09bC5ub2RlVHlwZSkmJisrbSYmKHMmJigobFt1XXx8KGxbdV09e30pKVthXT1bdyxtXSksbD09PWIpKWJyZWFrO3JldHVybiBtLT1lLG09PT1kfHxtJWQ9PT0wJiZtL2Q+PTB9fX0sUFNFVURPOmZ1bmN0aW9uKGEsYil7dmFyIGMsZT1kLnBzZXVkb3NbYV18fGQuc2V0RmlsdGVyc1thLnRvTG93ZXJDYXNlKCldfHxmYi5lcnJvcihcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIrYSk7cmV0dXJuIGVbdV0/ZShiKTplLmxlbmd0aD4xPyhjPVthLGEsXCJcIixiXSxkLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkoYS50b0xvd2VyQ2FzZSgpKT9oYihmdW5jdGlvbihhLGMpe3ZhciBkLGY9ZShhLGIpLGc9Zi5sZW5ndGg7d2hpbGUoZy0tKWQ9Sy5jYWxsKGEsZltnXSksYVtkXT0hKGNbZF09ZltnXSl9KTpmdW5jdGlvbihhKXtyZXR1cm4gZShhLDAsYyl9KTplfX0scHNldWRvczp7bm90OmhiKGZ1bmN0aW9uKGEpe3ZhciBiPVtdLGM9W10sZD1oKGEucmVwbGFjZShSLFwiJDFcIikpO3JldHVybiBkW3VdP2hiKGZ1bmN0aW9uKGEsYixjLGUpe3ZhciBmLGc9ZChhLG51bGwsZSxbXSksaD1hLmxlbmd0aDt3aGlsZShoLS0pKGY9Z1toXSkmJihhW2hdPSEoYltoXT1mKSl9KTpmdW5jdGlvbihhLGUsZil7cmV0dXJuIGJbMF09YSxkKGIsbnVsbCxmLGMpLCFjLnBvcCgpfX0pLGhhczpoYihmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIGZiKGEsYikubGVuZ3RoPjB9fSksY29udGFpbnM6aGIoZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybihiLnRleHRDb250ZW50fHxiLmlubmVyVGV4dHx8ZShiKSkuaW5kZXhPZihhKT4tMX19KSxsYW5nOmhiKGZ1bmN0aW9uKGEpe3JldHVybiBXLnRlc3QoYXx8XCJcIil8fGZiLmVycm9yKFwidW5zdXBwb3J0ZWQgbGFuZzogXCIrYSksYT1hLnJlcGxhY2UoY2IsZGIpLnRvTG93ZXJDYXNlKCksZnVuY3Rpb24oYil7dmFyIGM7ZG8gaWYoYz1wP2IubGFuZzpiLmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpfHxiLmdldEF0dHJpYnV0ZShcImxhbmdcIikpcmV0dXJuIGM9Yy50b0xvd2VyQ2FzZSgpLGM9PT1hfHwwPT09Yy5pbmRleE9mKGErXCItXCIpO3doaWxlKChiPWIucGFyZW50Tm9kZSkmJjE9PT1iLm5vZGVUeXBlKTtyZXR1cm4hMX19KSx0YXJnZXQ6ZnVuY3Rpb24oYil7dmFyIGM9YS5sb2NhdGlvbiYmYS5sb2NhdGlvbi5oYXNoO3JldHVybiBjJiZjLnNsaWNlKDEpPT09Yi5pZH0scm9vdDpmdW5jdGlvbihhKXtyZXR1cm4gYT09PW99LGZvY3VzOmZ1bmN0aW9uKGEpe3JldHVybiBhPT09bi5hY3RpdmVFbGVtZW50JiYoIW4uaGFzRm9jdXN8fG4uaGFzRm9jdXMoKSkmJiEhKGEudHlwZXx8YS5ocmVmfHx+YS50YWJJbmRleCl9LGVuYWJsZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuZGlzYWJsZWQ9PT0hMX0sZGlzYWJsZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuZGlzYWJsZWQ9PT0hMH0sY2hlY2tlZDpmdW5jdGlvbihhKXt2YXIgYj1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YiYmISFhLmNoZWNrZWR8fFwib3B0aW9uXCI9PT1iJiYhIWEuc2VsZWN0ZWR9LHNlbGVjdGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLnBhcmVudE5vZGUmJmEucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LGEuc2VsZWN0ZWQ9PT0hMH0sZW1wdHk6ZnVuY3Rpb24oYSl7Zm9yKGE9YS5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKWlmKGEubm9kZVR5cGU8NilyZXR1cm4hMTtyZXR1cm4hMH0scGFyZW50OmZ1bmN0aW9uKGEpe3JldHVybiFkLnBzZXVkb3MuZW1wdHkoYSl9LGhlYWRlcjpmdW5jdGlvbihhKXtyZXR1cm4gWi50ZXN0KGEubm9kZU5hbWUpfSxpbnB1dDpmdW5jdGlvbihhKXtyZXR1cm4gWS50ZXN0KGEubm9kZU5hbWUpfSxidXR0b246ZnVuY3Rpb24oYSl7dmFyIGI9YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWImJlwiYnV0dG9uXCI9PT1hLnR5cGV8fFwiYnV0dG9uXCI9PT1ifSx0ZXh0OmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVyblwiaW5wdXRcIj09PWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmXCJ0ZXh0XCI9PT1hLnR5cGUmJihudWxsPT0oYj1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpfHxcInRleHRcIj09PWIudG9Mb3dlckNhc2UoKSl9LGZpcnN0Om5iKGZ1bmN0aW9uKCl7cmV0dXJuWzBdfSksbGFzdDpuYihmdW5jdGlvbihhLGIpe3JldHVybltiLTFdfSksZXE6bmIoZnVuY3Rpb24oYSxiLGMpe3JldHVyblswPmM/YytiOmNdfSksZXZlbjpuYihmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wO2I+YztjKz0yKWEucHVzaChjKTtyZXR1cm4gYX0pLG9kZDpuYihmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0xO2I+YztjKz0yKWEucHVzaChjKTtyZXR1cm4gYX0pLGx0Om5iKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9MD5jP2MrYjpjOy0tZD49MDspYS5wdXNoKGQpO3JldHVybiBhfSksZ3Q6bmIoZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD0wPmM/YytiOmM7KytkPGI7KWEucHVzaChkKTtyZXR1cm4gYX0pfX0sZC5wc2V1ZG9zLm50aD1kLnBzZXVkb3MuZXE7Zm9yKGIgaW57cmFkaW86ITAsY2hlY2tib3g6ITAsZmlsZTohMCxwYXNzd29yZDohMCxpbWFnZTohMH0pZC5wc2V1ZG9zW2JdPWxiKGIpO2ZvcihiIGlue3N1Ym1pdDohMCxyZXNldDohMH0pZC5wc2V1ZG9zW2JdPW1iKGIpO2Z1bmN0aW9uIHBiKCl7fXBiLnByb3RvdHlwZT1kLmZpbHRlcnM9ZC5wc2V1ZG9zLGQuc2V0RmlsdGVycz1uZXcgcGIsZz1mYi50b2tlbml6ZT1mdW5jdGlvbihhLGIpe3ZhciBjLGUsZixnLGgsaSxqLGs9elthK1wiIFwiXTtpZihrKXJldHVybiBiPzA6ay5zbGljZSgwKTtoPWEsaT1bXSxqPWQucHJlRmlsdGVyO3doaWxlKGgpeyghY3x8KGU9Uy5leGVjKGgpKSkmJihlJiYoaD1oLnNsaWNlKGVbMF0ubGVuZ3RoKXx8aCksaS5wdXNoKGY9W10pKSxjPSExLChlPVQuZXhlYyhoKSkmJihjPWUuc2hpZnQoKSxmLnB1c2goe3ZhbHVlOmMsdHlwZTplWzBdLnJlcGxhY2UoUixcIiBcIil9KSxoPWguc2xpY2UoYy5sZW5ndGgpKTtmb3IoZyBpbiBkLmZpbHRlcikhKGU9WFtnXS5leGVjKGgpKXx8altnXSYmIShlPWpbZ10oZSkpfHwoYz1lLnNoaWZ0KCksZi5wdXNoKHt2YWx1ZTpjLHR5cGU6ZyxtYXRjaGVzOmV9KSxoPWguc2xpY2UoYy5sZW5ndGgpKTtpZighYylicmVha31yZXR1cm4gYj9oLmxlbmd0aDpoP2ZiLmVycm9yKGEpOnooYSxpKS5zbGljZSgwKX07ZnVuY3Rpb24gcWIoYSl7Zm9yKHZhciBiPTAsYz1hLmxlbmd0aCxkPVwiXCI7Yz5iO2IrKylkKz1hW2JdLnZhbHVlO3JldHVybiBkfWZ1bmN0aW9uIHJiKGEsYixjKXt2YXIgZD1iLmRpcixlPWMmJlwicGFyZW50Tm9kZVwiPT09ZCxmPXgrKztyZXR1cm4gYi5maXJzdD9mdW5jdGlvbihiLGMsZil7d2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxlKXJldHVybiBhKGIsYyxmKX06ZnVuY3Rpb24oYixjLGcpe3ZhciBoLGksaj1bdyxmXTtpZihnKXt3aGlsZShiPWJbZF0paWYoKDE9PT1iLm5vZGVUeXBlfHxlKSYmYShiLGMsZykpcmV0dXJuITB9ZWxzZSB3aGlsZShiPWJbZF0paWYoMT09PWIubm9kZVR5cGV8fGUpe2lmKGk9Ylt1XXx8KGJbdV09e30pLChoPWlbZF0pJiZoWzBdPT09dyYmaFsxXT09PWYpcmV0dXJuIGpbMl09aFsyXTtpZihpW2RdPWosalsyXT1hKGIsYyxnKSlyZXR1cm4hMH19fWZ1bmN0aW9uIHNiKGEpe3JldHVybiBhLmxlbmd0aD4xP2Z1bmN0aW9uKGIsYyxkKXt2YXIgZT1hLmxlbmd0aDt3aGlsZShlLS0paWYoIWFbZV0oYixjLGQpKXJldHVybiExO3JldHVybiEwfTphWzBdfWZ1bmN0aW9uIHRiKGEsYixjKXtmb3IodmFyIGQ9MCxlPWIubGVuZ3RoO2U+ZDtkKyspZmIoYSxiW2RdLGMpO3JldHVybiBjfWZ1bmN0aW9uIHViKGEsYixjLGQsZSl7Zm9yKHZhciBmLGc9W10saD0wLGk9YS5sZW5ndGgsaj1udWxsIT1iO2k+aDtoKyspKGY9YVtoXSkmJighY3x8YyhmLGQsZSkpJiYoZy5wdXNoKGYpLGomJmIucHVzaChoKSk7cmV0dXJuIGd9ZnVuY3Rpb24gdmIoYSxiLGMsZCxlLGYpe3JldHVybiBkJiYhZFt1XSYmKGQ9dmIoZCkpLGUmJiFlW3VdJiYoZT12YihlLGYpKSxoYihmdW5jdGlvbihmLGcsaCxpKXt2YXIgaixrLGwsbT1bXSxuPVtdLG89Zy5sZW5ndGgscD1mfHx0YihifHxcIipcIixoLm5vZGVUeXBlP1toXTpoLFtdKSxxPSFhfHwhZiYmYj9wOnViKHAsbSxhLGgsaSkscj1jP2V8fChmP2E6b3x8ZCk/W106ZzpxO2lmKGMmJmMocSxyLGgsaSksZCl7aj11YihyLG4pLGQoaixbXSxoLGkpLGs9ai5sZW5ndGg7d2hpbGUoay0tKShsPWpba10pJiYocltuW2tdXT0hKHFbbltrXV09bCkpfWlmKGYpe2lmKGV8fGEpe2lmKGUpe2o9W10saz1yLmxlbmd0aDt3aGlsZShrLS0pKGw9cltrXSkmJmoucHVzaChxW2tdPWwpO2UobnVsbCxyPVtdLGosaSl9az1yLmxlbmd0aDt3aGlsZShrLS0pKGw9cltrXSkmJihqPWU/Sy5jYWxsKGYsbCk6bVtrXSk+LTEmJihmW2pdPSEoZ1tqXT1sKSl9fWVsc2Ugcj11YihyPT09Zz9yLnNwbGljZShvLHIubGVuZ3RoKTpyKSxlP2UobnVsbCxnLHIsaSk6SS5hcHBseShnLHIpfSl9ZnVuY3Rpb24gd2IoYSl7Zm9yKHZhciBiLGMsZSxmPWEubGVuZ3RoLGc9ZC5yZWxhdGl2ZVthWzBdLnR5cGVdLGg9Z3x8ZC5yZWxhdGl2ZVtcIiBcIl0saT1nPzE6MCxrPXJiKGZ1bmN0aW9uKGEpe3JldHVybiBhPT09Yn0saCwhMCksbD1yYihmdW5jdGlvbihhKXtyZXR1cm4gSy5jYWxsKGIsYSk+LTF9LGgsITApLG09W2Z1bmN0aW9uKGEsYyxkKXtyZXR1cm4hZyYmKGR8fGMhPT1qKXx8KChiPWMpLm5vZGVUeXBlP2soYSxjLGQpOmwoYSxjLGQpKX1dO2Y+aTtpKyspaWYoYz1kLnJlbGF0aXZlW2FbaV0udHlwZV0pbT1bcmIoc2IobSksYyldO2Vsc2V7aWYoYz1kLmZpbHRlclthW2ldLnR5cGVdLmFwcGx5KG51bGwsYVtpXS5tYXRjaGVzKSxjW3VdKXtmb3IoZT0rK2k7Zj5lO2UrKylpZihkLnJlbGF0aXZlW2FbZV0udHlwZV0pYnJlYWs7cmV0dXJuIHZiKGk+MSYmc2IobSksaT4xJiZxYihhLnNsaWNlKDAsaS0xKS5jb25jYXQoe3ZhbHVlOlwiIFwiPT09YVtpLTJdLnR5cGU/XCIqXCI6XCJcIn0pKS5yZXBsYWNlKFIsXCIkMVwiKSxjLGU+aSYmd2IoYS5zbGljZShpLGUpKSxmPmUmJndiKGE9YS5zbGljZShlKSksZj5lJiZxYihhKSl9bS5wdXNoKGMpfXJldHVybiBzYihtKX1mdW5jdGlvbiB4YihhLGIpe3ZhciBjPWIubGVuZ3RoPjAsZT1hLmxlbmd0aD4wLGY9ZnVuY3Rpb24oZixnLGgsaSxrKXt2YXIgbCxtLG8scD0wLHE9XCIwXCIscj1mJiZbXSxzPVtdLHQ9aix1PWZ8fGUmJmQuZmluZC5UQUcoXCIqXCIsayksdj13Kz1udWxsPT10PzE6TWF0aC5yYW5kb20oKXx8LjEseD11Lmxlbmd0aDtmb3IoayYmKGo9ZyE9PW4mJmcpO3EhPT14JiZudWxsIT0obD11W3FdKTtxKyspe2lmKGUmJmwpe209MDt3aGlsZShvPWFbbSsrXSlpZihvKGwsZyxoKSl7aS5wdXNoKGwpO2JyZWFrfWsmJih3PXYpfWMmJigobD0hbyYmbCkmJnAtLSxmJiZyLnB1c2gobCkpfWlmKHArPXEsYyYmcSE9PXApe209MDt3aGlsZShvPWJbbSsrXSlvKHIscyxnLGgpO2lmKGYpe2lmKHA+MCl3aGlsZShxLS0pcltxXXx8c1txXXx8KHNbcV09Ry5jYWxsKGkpKTtzPXViKHMpfUkuYXBwbHkoaSxzKSxrJiYhZiYmcy5sZW5ndGg+MCYmcCtiLmxlbmd0aD4xJiZmYi51bmlxdWVTb3J0KGkpfXJldHVybiBrJiYodz12LGo9dCkscn07cmV0dXJuIGM/aGIoZik6Zn1yZXR1cm4gaD1mYi5jb21waWxlPWZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPVtdLGY9QVthK1wiIFwiXTtpZighZil7Ynx8KGI9ZyhhKSksYz1iLmxlbmd0aDt3aGlsZShjLS0pZj13YihiW2NdKSxmW3VdP2QucHVzaChmKTplLnB1c2goZik7Zj1BKGEseGIoZSxkKSksZi5zZWxlY3Rvcj1hfXJldHVybiBmfSxpPWZiLnNlbGVjdD1mdW5jdGlvbihhLGIsZSxmKXt2YXIgaSxqLGssbCxtLG49XCJmdW5jdGlvblwiPT10eXBlb2YgYSYmYSxvPSFmJiZnKGE9bi5zZWxlY3Rvcnx8YSk7aWYoZT1lfHxbXSwxPT09by5sZW5ndGgpe2lmKGo9b1swXT1vWzBdLnNsaWNlKDApLGoubGVuZ3RoPjImJlwiSURcIj09PShrPWpbMF0pLnR5cGUmJmMuZ2V0QnlJZCYmOT09PWIubm9kZVR5cGUmJnAmJmQucmVsYXRpdmVbalsxXS50eXBlXSl7aWYoYj0oZC5maW5kLklEKGsubWF0Y2hlc1swXS5yZXBsYWNlKGNiLGRiKSxiKXx8W10pWzBdLCFiKXJldHVybiBlO24mJihiPWIucGFyZW50Tm9kZSksYT1hLnNsaWNlKGouc2hpZnQoKS52YWx1ZS5sZW5ndGgpfWk9WC5uZWVkc0NvbnRleHQudGVzdChhKT8wOmoubGVuZ3RoO3doaWxlKGktLSl7aWYoaz1qW2ldLGQucmVsYXRpdmVbbD1rLnR5cGVdKWJyZWFrO2lmKChtPWQuZmluZFtsXSkmJihmPW0oay5tYXRjaGVzWzBdLnJlcGxhY2UoY2IsZGIpLGFiLnRlc3QoalswXS50eXBlKSYmb2IoYi5wYXJlbnROb2RlKXx8YikpKXtpZihqLnNwbGljZShpLDEpLGE9Zi5sZW5ndGgmJnFiKGopLCFhKXJldHVybiBJLmFwcGx5KGUsZiksZTticmVha319fXJldHVybihufHxoKGEsbykpKGYsYiwhcCxlLGFiLnRlc3QoYSkmJm9iKGIucGFyZW50Tm9kZSl8fGIpLGV9LGMuc29ydFN0YWJsZT11LnNwbGl0KFwiXCIpLnNvcnQoQikuam9pbihcIlwiKT09PXUsYy5kZXRlY3REdXBsaWNhdGVzPSEhbCxtKCksYy5zb3J0RGV0YWNoZWQ9aWIoZnVuY3Rpb24oYSl7cmV0dXJuIDEmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihuLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpfSksaWIoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGEgaHJlZj0nIyc+PC9hPlwiLFwiI1wiPT09YS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcImhyZWZcIil9KXx8amIoXCJ0eXBlfGhyZWZ8aGVpZ2h0fHdpZHRoXCIsZnVuY3Rpb24oYSxiLGMpe3JldHVybiBjP3ZvaWQgMDphLmdldEF0dHJpYnV0ZShiLFwidHlwZVwiPT09Yi50b0xvd2VyQ2FzZSgpPzE6Mil9KSxjLmF0dHJpYnV0ZXMmJmliKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxpbnB1dC8+XCIsYS5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIiksXCJcIj09PWEuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKX0pfHxqYihcInZhbHVlXCIsZnVuY3Rpb24oYSxiLGMpe3JldHVybiBjfHxcImlucHV0XCIhPT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk/dm9pZCAwOmEuZGVmYXVsdFZhbHVlfSksaWIoZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWEuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIil9KXx8amIoTCxmdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIGM/dm9pZCAwOmFbYl09PT0hMD9iLnRvTG93ZXJDYXNlKCk6KGQ9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmZC5zcGVjaWZpZWQ/ZC52YWx1ZTpudWxsfSksZmJ9KGEpO24uZmluZD10LG4uZXhwcj10LnNlbGVjdG9ycyxuLmV4cHJbXCI6XCJdPW4uZXhwci5wc2V1ZG9zLG4udW5pcXVlPXQudW5pcXVlU29ydCxuLnRleHQ9dC5nZXRUZXh0LG4uaXNYTUxEb2M9dC5pc1hNTCxuLmNvbnRhaW5zPXQuY29udGFpbnM7dmFyIHU9bi5leHByLm1hdGNoLm5lZWRzQ29udGV4dCx2PS9ePChcXHcrKVxccypcXC8/Pig/OjxcXC9cXDE+fCkkLyx3PS9eLlteOiNcXFtcXC4sXSokLztmdW5jdGlvbiB4KGEsYixjKXtpZihuLmlzRnVuY3Rpb24oYikpcmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEsZCl7cmV0dXJuISFiLmNhbGwoYSxkLGEpIT09Y30pO2lmKGIubm9kZVR5cGUpcmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBhPT09YiE9PWN9KTtpZihcInN0cmluZ1wiPT10eXBlb2YgYil7aWYody50ZXN0KGIpKXJldHVybiBuLmZpbHRlcihiLGEsYyk7Yj1uLmZpbHRlcihiLGEpfXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gZy5jYWxsKGIsYSk+PTAhPT1jfSl9bi5maWx0ZXI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWJbMF07cmV0dXJuIGMmJihhPVwiOm5vdChcIithK1wiKVwiKSwxPT09Yi5sZW5ndGgmJjE9PT1kLm5vZGVUeXBlP24uZmluZC5tYXRjaGVzU2VsZWN0b3IoZCxhKT9bZF06W106bi5maW5kLm1hdGNoZXMoYSxuLmdyZXAoYixmdW5jdGlvbihhKXtyZXR1cm4gMT09PWEubm9kZVR5cGV9KSl9LG4uZm4uZXh0ZW5kKHtmaW5kOmZ1bmN0aW9uKGEpe3ZhciBiLGM9dGhpcy5sZW5ndGgsZD1bXSxlPXRoaXM7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIHRoaXMucHVzaFN0YWNrKG4oYSkuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKGI9MDtjPmI7YisrKWlmKG4uY29udGFpbnMoZVtiXSx0aGlzKSlyZXR1cm4hMH0pKTtmb3IoYj0wO2M+YjtiKyspbi5maW5kKGEsZVtiXSxkKTtyZXR1cm4gZD10aGlzLnB1c2hTdGFjayhjPjE/bi51bmlxdWUoZCk6ZCksZC5zZWxlY3Rvcj10aGlzLnNlbGVjdG9yP3RoaXMuc2VsZWN0b3IrXCIgXCIrYTphLGR9LGZpbHRlcjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soeCh0aGlzLGF8fFtdLCExKSl9LG5vdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soeCh0aGlzLGF8fFtdLCEwKSl9LGlzOmZ1bmN0aW9uKGEpe3JldHVybiEheCh0aGlzLFwic3RyaW5nXCI9PXR5cGVvZiBhJiZ1LnRlc3QoYSk/bihhKTphfHxbXSwhMSkubGVuZ3RofX0pO3ZhciB5LHo9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKikpJC8sQT1uLmZuLmluaXQ9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkO2lmKCFhKXJldHVybiB0aGlzO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhKXtpZihjPVwiPFwiPT09YVswXSYmXCI+XCI9PT1hW2EubGVuZ3RoLTFdJiZhLmxlbmd0aD49Mz9bbnVsbCxhLG51bGxdOnouZXhlYyhhKSwhY3x8IWNbMV0mJmIpcmV0dXJuIWJ8fGIuanF1ZXJ5PyhifHx5KS5maW5kKGEpOnRoaXMuY29uc3RydWN0b3IoYikuZmluZChhKTtpZihjWzFdKXtpZihiPWIgaW5zdGFuY2VvZiBuP2JbMF06YixuLm1lcmdlKHRoaXMsbi5wYXJzZUhUTUwoY1sxXSxiJiZiLm5vZGVUeXBlP2Iub3duZXJEb2N1bWVudHx8YjpsLCEwKSksdi50ZXN0KGNbMV0pJiZuLmlzUGxhaW5PYmplY3QoYikpZm9yKGMgaW4gYiluLmlzRnVuY3Rpb24odGhpc1tjXSk/dGhpc1tjXShiW2NdKTp0aGlzLmF0dHIoYyxiW2NdKTtyZXR1cm4gdGhpc31yZXR1cm4gZD1sLmdldEVsZW1lbnRCeUlkKGNbMl0pLGQmJmQucGFyZW50Tm9kZSYmKHRoaXMubGVuZ3RoPTEsdGhpc1swXT1kKSx0aGlzLmNvbnRleHQ9bCx0aGlzLnNlbGVjdG9yPWEsdGhpc31yZXR1cm4gYS5ub2RlVHlwZT8odGhpcy5jb250ZXh0PXRoaXNbMF09YSx0aGlzLmxlbmd0aD0xLHRoaXMpOm4uaXNGdW5jdGlvbihhKT9cInVuZGVmaW5lZFwiIT10eXBlb2YgeS5yZWFkeT95LnJlYWR5KGEpOmEobik6KHZvaWQgMCE9PWEuc2VsZWN0b3ImJih0aGlzLnNlbGVjdG9yPWEuc2VsZWN0b3IsdGhpcy5jb250ZXh0PWEuY29udGV4dCksbi5tYWtlQXJyYXkoYSx0aGlzKSl9O0EucHJvdG90eXBlPW4uZm4seT1uKGwpO3ZhciBCPS9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLEM9e2NoaWxkcmVuOiEwLGNvbnRlbnRzOiEwLG5leHQ6ITAscHJldjohMH07bi5leHRlbmQoe2RpcjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9W10sZT12b2lkIDAhPT1jO3doaWxlKChhPWFbYl0pJiY5IT09YS5ub2RlVHlwZSlpZigxPT09YS5ub2RlVHlwZSl7aWYoZSYmbihhKS5pcyhjKSlicmVhaztkLnB1c2goYSl9cmV0dXJuIGR9LHNpYmxpbmc6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9W107YTthPWEubmV4dFNpYmxpbmcpMT09PWEubm9kZVR5cGUmJmEhPT1iJiZjLnB1c2goYSk7cmV0dXJuIGN9fSksbi5mbi5leHRlbmQoe2hhczpmdW5jdGlvbihhKXt2YXIgYj1uKGEsdGhpcyksYz1iLmxlbmd0aDtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodmFyIGE9MDtjPmE7YSsrKWlmKG4uY29udGFpbnModGhpcyxiW2FdKSlyZXR1cm4hMH0pfSxjbG9zZXN0OmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjLGQ9MCxlPXRoaXMubGVuZ3RoLGY9W10sZz11LnRlc3QoYSl8fFwic3RyaW5nXCIhPXR5cGVvZiBhP24oYSxifHx0aGlzLmNvbnRleHQpOjA7ZT5kO2QrKylmb3IoYz10aGlzW2RdO2MmJmMhPT1iO2M9Yy5wYXJlbnROb2RlKWlmKGMubm9kZVR5cGU8MTEmJihnP2cuaW5kZXgoYyk+LTE6MT09PWMubm9kZVR5cGUmJm4uZmluZC5tYXRjaGVzU2VsZWN0b3IoYyxhKSkpe2YucHVzaChjKTticmVha31yZXR1cm4gdGhpcy5wdXNoU3RhY2soZi5sZW5ndGg+MT9uLnVuaXF1ZShmKTpmKX0saW5kZXg6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/XCJzdHJpbmdcIj09dHlwZW9mIGE/Zy5jYWxsKG4oYSksdGhpc1swXSk6Zy5jYWxsKHRoaXMsYS5qcXVlcnk/YVswXTphKTp0aGlzWzBdJiZ0aGlzWzBdLnBhcmVudE5vZGU/dGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGg6LTF9LGFkZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLnB1c2hTdGFjayhuLnVuaXF1ZShuLm1lcmdlKHRoaXMuZ2V0KCksbihhLGIpKSkpfSxhZGRCYWNrOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmFkZChudWxsPT1hP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGEpKX19KTtmdW5jdGlvbiBEKGEsYil7d2hpbGUoKGE9YVtiXSkmJjEhPT1hLm5vZGVUeXBlKTtyZXR1cm4gYX1uLmVhY2goe3BhcmVudDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJjExIT09Yi5ub2RlVHlwZT9iOm51bGx9LHBhcmVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZGlyKGEsXCJwYXJlbnROb2RlXCIpfSxwYXJlbnRzVW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLmRpcihhLFwicGFyZW50Tm9kZVwiLGMpfSxuZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBEKGEsXCJuZXh0U2libGluZ1wiKX0scHJldjpmdW5jdGlvbihhKXtyZXR1cm4gRChhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0QWxsOmZ1bmN0aW9uKGEpe3JldHVybiBuLmRpcihhLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZGlyKGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG4uZGlyKGEsXCJuZXh0U2libGluZ1wiLGMpfSxwcmV2VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLmRpcihhLFwicHJldmlvdXNTaWJsaW5nXCIsYyl9LHNpYmxpbmdzOmZ1bmN0aW9uKGEpe3JldHVybiBuLnNpYmxpbmcoKGEucGFyZW50Tm9kZXx8e30pLmZpcnN0Q2hpbGQsYSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGEpe3JldHVybiBuLnNpYmxpbmcoYS5maXJzdENoaWxkKX0sY29udGVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuY29udGVudERvY3VtZW50fHxuLm1lcmdlKFtdLGEuY2hpbGROb2Rlcyl9fSxmdW5jdGlvbihhLGIpe24uZm5bYV09ZnVuY3Rpb24oYyxkKXt2YXIgZT1uLm1hcCh0aGlzLGIsYyk7cmV0dXJuXCJVbnRpbFwiIT09YS5zbGljZSgtNSkmJihkPWMpLGQmJlwic3RyaW5nXCI9PXR5cGVvZiBkJiYoZT1uLmZpbHRlcihkLGUpKSx0aGlzLmxlbmd0aD4xJiYoQ1thXXx8bi51bmlxdWUoZSksQi50ZXN0KGEpJiZlLnJldmVyc2UoKSksdGhpcy5wdXNoU3RhY2soZSl9fSk7dmFyIEU9L1xcUysvZyxGPXt9O2Z1bmN0aW9uIEcoYSl7dmFyIGI9RlthXT17fTtyZXR1cm4gbi5lYWNoKGEubWF0Y2goRSl8fFtdLGZ1bmN0aW9uKGEsYyl7YltjXT0hMH0pLGJ9bi5DYWxsYmFja3M9ZnVuY3Rpb24oYSl7YT1cInN0cmluZ1wiPT10eXBlb2YgYT9GW2FdfHxHKGEpOm4uZXh0ZW5kKHt9LGEpO3ZhciBiLGMsZCxlLGYsZyxoPVtdLGk9IWEub25jZSYmW10saj1mdW5jdGlvbihsKXtmb3IoYj1hLm1lbW9yeSYmbCxjPSEwLGc9ZXx8MCxlPTAsZj1oLmxlbmd0aCxkPSEwO2gmJmY+ZztnKyspaWYoaFtnXS5hcHBseShsWzBdLGxbMV0pPT09ITEmJmEuc3RvcE9uRmFsc2Upe2I9ITE7YnJlYWt9ZD0hMSxoJiYoaT9pLmxlbmd0aCYmaihpLnNoaWZ0KCkpOmI/aD1bXTprLmRpc2FibGUoKSl9LGs9e2FkZDpmdW5jdGlvbigpe2lmKGgpe3ZhciBjPWgubGVuZ3RoOyFmdW5jdGlvbiBnKGIpe24uZWFjaChiLGZ1bmN0aW9uKGIsYyl7dmFyIGQ9bi50eXBlKGMpO1wiZnVuY3Rpb25cIj09PWQ/YS51bmlxdWUmJmsuaGFzKGMpfHxoLnB1c2goYyk6YyYmYy5sZW5ndGgmJlwic3RyaW5nXCIhPT1kJiZnKGMpfSl9KGFyZ3VtZW50cyksZD9mPWgubGVuZ3RoOmImJihlPWMsaihiKSl9cmV0dXJuIHRoaXN9LHJlbW92ZTpmdW5jdGlvbigpe3JldHVybiBoJiZuLmVhY2goYXJndW1lbnRzLGZ1bmN0aW9uKGEsYil7dmFyIGM7d2hpbGUoKGM9bi5pbkFycmF5KGIsaCxjKSk+LTEpaC5zcGxpY2UoYywxKSxkJiYoZj49YyYmZi0tLGc+PWMmJmctLSl9KSx0aGlzfSxoYXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/bi5pbkFycmF5KGEsaCk+LTE6ISghaHx8IWgubGVuZ3RoKX0sZW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gaD1bXSxmPTAsdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBoPWk9Yj12b2lkIDAsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4haH0sbG9jazpmdW5jdGlvbigpe3JldHVybiBpPXZvaWQgMCxifHxrLmRpc2FibGUoKSx0aGlzfSxsb2NrZWQ6ZnVuY3Rpb24oKXtyZXR1cm4haX0sZmlyZVdpdGg6ZnVuY3Rpb24oYSxiKXtyZXR1cm4haHx8YyYmIWl8fChiPWJ8fFtdLGI9W2EsYi5zbGljZT9iLnNsaWNlKCk6Yl0sZD9pLnB1c2goYik6aihiKSksdGhpc30sZmlyZTpmdW5jdGlvbigpe3JldHVybiBrLmZpcmVXaXRoKHRoaXMsYXJndW1lbnRzKSx0aGlzfSxmaXJlZDpmdW5jdGlvbigpe3JldHVybiEhY319O3JldHVybiBrfSxuLmV4dGVuZCh7RGVmZXJyZWQ6ZnVuY3Rpb24oYSl7dmFyIGI9W1tcInJlc29sdmVcIixcImRvbmVcIixuLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFwicmVzb2x2ZWRcIl0sW1wicmVqZWN0XCIsXCJmYWlsXCIsbi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcInJlamVjdGVkXCJdLFtcIm5vdGlmeVwiLFwicHJvZ3Jlc3NcIixuLkNhbGxiYWNrcyhcIm1lbW9yeVwiKV1dLGM9XCJwZW5kaW5nXCIsZD17c3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gY30sYWx3YXlzOmZ1bmN0aW9uKCl7cmV0dXJuIGUuZG9uZShhcmd1bWVudHMpLmZhaWwoYXJndW1lbnRzKSx0aGlzfSx0aGVuOmZ1bmN0aW9uKCl7dmFyIGE9YXJndW1lbnRzO3JldHVybiBuLkRlZmVycmVkKGZ1bmN0aW9uKGMpe24uZWFjaChiLGZ1bmN0aW9uKGIsZil7dmFyIGc9bi5pc0Z1bmN0aW9uKGFbYl0pJiZhW2JdO2VbZlsxXV0oZnVuY3Rpb24oKXt2YXIgYT1nJiZnLmFwcGx5KHRoaXMsYXJndW1lbnRzKTthJiZuLmlzRnVuY3Rpb24oYS5wcm9taXNlKT9hLnByb21pc2UoKS5kb25lKGMucmVzb2x2ZSkuZmFpbChjLnJlamVjdCkucHJvZ3Jlc3MoYy5ub3RpZnkpOmNbZlswXStcIldpdGhcIl0odGhpcz09PWQ/Yy5wcm9taXNlKCk6dGhpcyxnP1thXTphcmd1bWVudHMpfSl9KSxhPW51bGx9KS5wcm9taXNlKCl9LHByb21pc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/bi5leHRlbmQoYSxkKTpkfX0sZT17fTtyZXR1cm4gZC5waXBlPWQudGhlbixuLmVhY2goYixmdW5jdGlvbihhLGYpe3ZhciBnPWZbMl0saD1mWzNdO2RbZlsxXV09Zy5hZGQsaCYmZy5hZGQoZnVuY3Rpb24oKXtjPWh9LGJbMV5hXVsyXS5kaXNhYmxlLGJbMl1bMl0ubG9jayksZVtmWzBdXT1mdW5jdGlvbigpe3JldHVybiBlW2ZbMF0rXCJXaXRoXCJdKHRoaXM9PT1lP2Q6dGhpcyxhcmd1bWVudHMpLHRoaXN9LGVbZlswXStcIldpdGhcIl09Zy5maXJlV2l0aH0pLGQucHJvbWlzZShlKSxhJiZhLmNhbGwoZSxlKSxlfSx3aGVuOmZ1bmN0aW9uKGEpe3ZhciBiPTAsYz1kLmNhbGwoYXJndW1lbnRzKSxlPWMubGVuZ3RoLGY9MSE9PWV8fGEmJm4uaXNGdW5jdGlvbihhLnByb21pc2UpP2U6MCxnPTE9PT1mP2E6bi5EZWZlcnJlZCgpLGg9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBmdW5jdGlvbihlKXtiW2FdPXRoaXMsY1thXT1hcmd1bWVudHMubGVuZ3RoPjE/ZC5jYWxsKGFyZ3VtZW50cyk6ZSxjPT09aT9nLm5vdGlmeVdpdGgoYixjKTotLWZ8fGcucmVzb2x2ZVdpdGgoYixjKX19LGksaixrO2lmKGU+MSlmb3IoaT1uZXcgQXJyYXkoZSksaj1uZXcgQXJyYXkoZSksaz1uZXcgQXJyYXkoZSk7ZT5iO2IrKyljW2JdJiZuLmlzRnVuY3Rpb24oY1tiXS5wcm9taXNlKT9jW2JdLnByb21pc2UoKS5kb25lKGgoYixrLGMpKS5mYWlsKGcucmVqZWN0KS5wcm9ncmVzcyhoKGIsaixpKSk6LS1mO3JldHVybiBmfHxnLnJlc29sdmVXaXRoKGssYyksZy5wcm9taXNlKCl9fSk7dmFyIEg7bi5mbi5yZWFkeT1mdW5jdGlvbihhKXtyZXR1cm4gbi5yZWFkeS5wcm9taXNlKCkuZG9uZShhKSx0aGlzfSxuLmV4dGVuZCh7aXNSZWFkeTohMSxyZWFkeVdhaXQ6MSxob2xkUmVhZHk6ZnVuY3Rpb24oYSl7YT9uLnJlYWR5V2FpdCsrOm4ucmVhZHkoITApfSxyZWFkeTpmdW5jdGlvbihhKXsoYT09PSEwPy0tbi5yZWFkeVdhaXQ6bi5pc1JlYWR5KXx8KG4uaXNSZWFkeT0hMCxhIT09ITAmJi0tbi5yZWFkeVdhaXQ+MHx8KEgucmVzb2x2ZVdpdGgobCxbbl0pLG4uZm4udHJpZ2dlckhhbmRsZXImJihuKGwpLnRyaWdnZXJIYW5kbGVyKFwicmVhZHlcIiksbihsKS5vZmYoXCJyZWFkeVwiKSkpKX19KTtmdW5jdGlvbiBJKCl7bC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEksITEpLGEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixJLCExKSxuLnJlYWR5KCl9bi5yZWFkeS5wcm9taXNlPWZ1bmN0aW9uKGIpe3JldHVybiBIfHwoSD1uLkRlZmVycmVkKCksXCJjb21wbGV0ZVwiPT09bC5yZWFkeVN0YXRlP3NldFRpbWVvdXQobi5yZWFkeSk6KGwuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixJLCExKSxhLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsSSwhMSkpKSxILnByb21pc2UoYil9LG4ucmVhZHkucHJvbWlzZSgpO3ZhciBKPW4uYWNjZXNzPWZ1bmN0aW9uKGEsYixjLGQsZSxmLGcpe3ZhciBoPTAsaT1hLmxlbmd0aCxqPW51bGw9PWM7aWYoXCJvYmplY3RcIj09PW4udHlwZShjKSl7ZT0hMDtmb3IoaCBpbiBjKW4uYWNjZXNzKGEsYixoLGNbaF0sITAsZixnKX1lbHNlIGlmKHZvaWQgMCE9PWQmJihlPSEwLG4uaXNGdW5jdGlvbihkKXx8KGc9ITApLGomJihnPyhiLmNhbGwoYSxkKSxiPW51bGwpOihqPWIsYj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGouY2FsbChuKGEpLGMpfSkpLGIpKWZvcig7aT5oO2grKyliKGFbaF0sYyxnP2Q6ZC5jYWxsKGFbaF0saCxiKGFbaF0sYykpKTtyZXR1cm4gZT9hOmo/Yi5jYWxsKGEpOmk/YihhWzBdLGMpOmZ9O24uYWNjZXB0RGF0YT1mdW5jdGlvbihhKXtyZXR1cm4gMT09PWEubm9kZVR5cGV8fDk9PT1hLm5vZGVUeXBlfHwhK2Eubm9kZVR5cGV9O2Z1bmN0aW9uIEsoKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5jYWNoZT17fSwwLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm57fX19KSx0aGlzLmV4cGFuZG89bi5leHBhbmRvK01hdGgucmFuZG9tKCl9Sy51aWQ9MSxLLmFjY2VwdHM9bi5hY2NlcHREYXRhLEsucHJvdG90eXBlPXtrZXk6ZnVuY3Rpb24oYSl7aWYoIUsuYWNjZXB0cyhhKSlyZXR1cm4gMDt2YXIgYj17fSxjPWFbdGhpcy5leHBhbmRvXTtpZighYyl7Yz1LLnVpZCsrO3RyeXtiW3RoaXMuZXhwYW5kb109e3ZhbHVlOmN9LE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGEsYil9Y2F0Y2goZCl7Ylt0aGlzLmV4cGFuZG9dPWMsbi5leHRlbmQoYSxiKX19cmV0dXJuIHRoaXMuY2FjaGVbY118fCh0aGlzLmNhY2hlW2NdPXt9KSxjfSxzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU9dGhpcy5rZXkoYSksZj10aGlzLmNhY2hlW2VdO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKWZbYl09YztlbHNlIGlmKG4uaXNFbXB0eU9iamVjdChmKSluLmV4dGVuZCh0aGlzLmNhY2hlW2VdLGIpO2Vsc2UgZm9yKGQgaW4gYilmW2RdPWJbZF07cmV0dXJuIGZ9LGdldDpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuY2FjaGVbdGhpcy5rZXkoYSldO3JldHVybiB2b2lkIDA9PT1iP2M6Y1tiXX0sYWNjZXNzOmZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gdm9pZCAwPT09Ynx8YiYmXCJzdHJpbmdcIj09dHlwZW9mIGImJnZvaWQgMD09PWM/KGQ9dGhpcy5nZXQoYSxiKSx2b2lkIDAhPT1kP2Q6dGhpcy5nZXQoYSxuLmNhbWVsQ2FzZShiKSkpOih0aGlzLnNldChhLGIsYyksdm9pZCAwIT09Yz9jOmIpfSxyZW1vdmU6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj10aGlzLmtleShhKSxnPXRoaXMuY2FjaGVbZl07aWYodm9pZCAwPT09Yil0aGlzLmNhY2hlW2ZdPXt9O2Vsc2V7bi5pc0FycmF5KGIpP2Q9Yi5jb25jYXQoYi5tYXAobi5jYW1lbENhc2UpKTooZT1uLmNhbWVsQ2FzZShiKSxiIGluIGc/ZD1bYixlXTooZD1lLGQ9ZCBpbiBnP1tkXTpkLm1hdGNoKEUpfHxbXSkpLGM9ZC5sZW5ndGg7d2hpbGUoYy0tKWRlbGV0ZSBnW2RbY11dfX0saGFzRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4hbi5pc0VtcHR5T2JqZWN0KHRoaXMuY2FjaGVbYVt0aGlzLmV4cGFuZG9dXXx8e30pfSxkaXNjYXJkOmZ1bmN0aW9uKGEpe2FbdGhpcy5leHBhbmRvXSYmZGVsZXRlIHRoaXMuY2FjaGVbYVt0aGlzLmV4cGFuZG9dXX19O3ZhciBMPW5ldyBLLE09bmV3IEssTj0vXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sTz0vKFtBLVpdKS9nO2Z1bmN0aW9uIFAoYSxiLGMpe3ZhciBkO2lmKHZvaWQgMD09PWMmJjE9PT1hLm5vZGVUeXBlKWlmKGQ9XCJkYXRhLVwiK2IucmVwbGFjZShPLFwiLSQxXCIpLnRvTG93ZXJDYXNlKCksYz1hLmdldEF0dHJpYnV0ZShkKSxcInN0cmluZ1wiPT10eXBlb2YgYyl7dHJ5e2M9XCJ0cnVlXCI9PT1jPyEwOlwiZmFsc2VcIj09PWM/ITE6XCJudWxsXCI9PT1jP251bGw6K2MrXCJcIj09PWM/K2M6Ti50ZXN0KGMpP24ucGFyc2VKU09OKGMpOmN9Y2F0Y2goZSl7fU0uc2V0KGEsYixjKX1lbHNlIGM9dm9pZCAwO3JldHVybiBjfW4uZXh0ZW5kKHtoYXNEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiBNLmhhc0RhdGEoYSl8fEwuaGFzRGF0YShhKX0sZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIE0uYWNjZXNzKGEsYixjKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe00ucmVtb3ZlKGEsYilcbn0sX2RhdGE6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBMLmFjY2VzcyhhLGIsYyl9LF9yZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7TC5yZW1vdmUoYSxiKX19KSxuLmZuLmV4dGVuZCh7ZGF0YTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPXRoaXNbMF0sZz1mJiZmLmF0dHJpYnV0ZXM7aWYodm9pZCAwPT09YSl7aWYodGhpcy5sZW5ndGgmJihlPU0uZ2V0KGYpLDE9PT1mLm5vZGVUeXBlJiYhTC5nZXQoZixcImhhc0RhdGFBdHRyc1wiKSkpe2M9Zy5sZW5ndGg7d2hpbGUoYy0tKWdbY10mJihkPWdbY10ubmFtZSwwPT09ZC5pbmRleE9mKFwiZGF0YS1cIikmJihkPW4uY2FtZWxDYXNlKGQuc2xpY2UoNSkpLFAoZixkLGVbZF0pKSk7TC5zZXQoZixcImhhc0RhdGFBdHRyc1wiLCEwKX1yZXR1cm4gZX1yZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgYT90aGlzLmVhY2goZnVuY3Rpb24oKXtNLnNldCh0aGlzLGEpfSk6Sih0aGlzLGZ1bmN0aW9uKGIpe3ZhciBjLGQ9bi5jYW1lbENhc2UoYSk7aWYoZiYmdm9pZCAwPT09Yil7aWYoYz1NLmdldChmLGEpLHZvaWQgMCE9PWMpcmV0dXJuIGM7aWYoYz1NLmdldChmLGQpLHZvaWQgMCE9PWMpcmV0dXJuIGM7aWYoYz1QKGYsZCx2b2lkIDApLHZvaWQgMCE9PWMpcmV0dXJuIGN9ZWxzZSB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1NLmdldCh0aGlzLGQpO00uc2V0KHRoaXMsZCxiKSwtMSE9PWEuaW5kZXhPZihcIi1cIikmJnZvaWQgMCE9PWMmJk0uc2V0KHRoaXMsYSxiKX0pfSxudWxsLGIsYXJndW1lbnRzLmxlbmd0aD4xLG51bGwsITApfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtNLnJlbW92ZSh0aGlzLGEpfSl9fSksbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gYT8oYj0oYnx8XCJmeFwiKStcInF1ZXVlXCIsZD1MLmdldChhLGIpLGMmJighZHx8bi5pc0FycmF5KGMpP2Q9TC5hY2Nlc3MoYSxiLG4ubWFrZUFycmF5KGMpKTpkLnB1c2goYykpLGR8fFtdKTp2b2lkIDB9LGRlcXVldWU6ZnVuY3Rpb24oYSxiKXtiPWJ8fFwiZnhcIjt2YXIgYz1uLnF1ZXVlKGEsYiksZD1jLmxlbmd0aCxlPWMuc2hpZnQoKSxmPW4uX3F1ZXVlSG9va3MoYSxiKSxnPWZ1bmN0aW9uKCl7bi5kZXF1ZXVlKGEsYil9O1wiaW5wcm9ncmVzc1wiPT09ZSYmKGU9Yy5zaGlmdCgpLGQtLSksZSYmKFwiZnhcIj09PWImJmMudW5zaGlmdChcImlucHJvZ3Jlc3NcIiksZGVsZXRlIGYuc3RvcCxlLmNhbGwoYSxnLGYpKSwhZCYmZiYmZi5lbXB0eS5maXJlKCl9LF9xdWV1ZUhvb2tzOmZ1bmN0aW9uKGEsYil7dmFyIGM9YitcInF1ZXVlSG9va3NcIjtyZXR1cm4gTC5nZXQoYSxjKXx8TC5hY2Nlc3MoYSxjLHtlbXB0eTpuLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbigpe0wucmVtb3ZlKGEsW2IrXCJxdWV1ZVwiLGNdKX0pfSl9fSksbi5mbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGEsYil7dmFyIGM9MjtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPVwiZnhcIixjLS0pLGFyZ3VtZW50cy5sZW5ndGg8Yz9uLnF1ZXVlKHRoaXNbMF0sYSk6dm9pZCAwPT09Yj90aGlzOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPW4ucXVldWUodGhpcyxhLGIpO24uX3F1ZXVlSG9va3ModGhpcyxhKSxcImZ4XCI9PT1hJiZcImlucHJvZ3Jlc3NcIiE9PWNbMF0mJm4uZGVxdWV1ZSh0aGlzLGEpfSl9LGRlcXVldWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24uZGVxdWV1ZSh0aGlzLGEpfSl9LGNsZWFyUXVldWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucXVldWUoYXx8XCJmeFwiLFtdKX0scHJvbWlzZTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MSxlPW4uRGVmZXJyZWQoKSxmPXRoaXMsZz10aGlzLmxlbmd0aCxoPWZ1bmN0aW9uKCl7LS1kfHxlLnJlc29sdmVXaXRoKGYsW2ZdKX07XCJzdHJpbmdcIiE9dHlwZW9mIGEmJihiPWEsYT12b2lkIDApLGE9YXx8XCJmeFwiO3doaWxlKGctLSljPUwuZ2V0KGZbZ10sYStcInF1ZXVlSG9va3NcIiksYyYmYy5lbXB0eSYmKGQrKyxjLmVtcHR5LmFkZChoKSk7cmV0dXJuIGgoKSxlLnByb21pc2UoYil9fSk7dmFyIFE9L1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8uc291cmNlLFI9W1wiVG9wXCIsXCJSaWdodFwiLFwiQm90dG9tXCIsXCJMZWZ0XCJdLFM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1ifHxhLFwibm9uZVwiPT09bi5jc3MoYSxcImRpc3BsYXlcIil8fCFuLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKX0sVD0vXig/OmNoZWNrYm94fHJhZGlvKSQvaTshZnVuY3Rpb24oKXt2YXIgYT1sLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxiPWEuYXBwZW5kQ2hpbGQobC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxjPWwuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Muc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksYy5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJjaGVja2VkXCIpLGMuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKSxiLmFwcGVuZENoaWxkKGMpLGsuY2hlY2tDbG9uZT1iLmNsb25lTm9kZSghMCkuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuY2hlY2tlZCxiLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIixrLm5vQ2xvbmVDaGVja2VkPSEhYi5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWV9KCk7dmFyIFU9XCJ1bmRlZmluZWRcIjtrLmZvY3VzaW5CdWJibGVzPVwib25mb2N1c2luXCJpbiBhO3ZhciBWPS9ea2V5LyxXPS9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudSl8Y2xpY2svLFg9L14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvLFk9L14oW14uXSopKD86XFwuKC4rKXwpJC87ZnVuY3Rpb24gWigpe3JldHVybiEwfWZ1bmN0aW9uICQoKXtyZXR1cm4hMX1mdW5jdGlvbiBfKCl7dHJ5e3JldHVybiBsLmFjdGl2ZUVsZW1lbnR9Y2F0Y2goYSl7fX1uLmV2ZW50PXtnbG9iYWw6e30sYWRkOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxvLHAscSxyPUwuZ2V0KGEpO2lmKHIpe2MuaGFuZGxlciYmKGY9YyxjPWYuaGFuZGxlcixlPWYuc2VsZWN0b3IpLGMuZ3VpZHx8KGMuZ3VpZD1uLmd1aWQrKyksKGk9ci5ldmVudHMpfHwoaT1yLmV2ZW50cz17fSksKGc9ci5oYW5kbGUpfHwoZz1yLmhhbmRsZT1mdW5jdGlvbihiKXtyZXR1cm4gdHlwZW9mIG4hPT1VJiZuLmV2ZW50LnRyaWdnZXJlZCE9PWIudHlwZT9uLmV2ZW50LmRpc3BhdGNoLmFwcGx5KGEsYXJndW1lbnRzKTp2b2lkIDB9KSxiPShifHxcIlwiKS5tYXRjaChFKXx8W1wiXCJdLGo9Yi5sZW5ndGg7d2hpbGUoai0tKWg9WS5leGVjKGJbal0pfHxbXSxvPXE9aFsxXSxwPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG8mJihsPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30sbz0oZT9sLmRlbGVnYXRlVHlwZTpsLmJpbmRUeXBlKXx8byxsPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30saz1uLmV4dGVuZCh7dHlwZTpvLG9yaWdUeXBlOnEsZGF0YTpkLGhhbmRsZXI6YyxndWlkOmMuZ3VpZCxzZWxlY3RvcjplLG5lZWRzQ29udGV4dDplJiZuLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoZSksbmFtZXNwYWNlOnAuam9pbihcIi5cIil9LGYpLChtPWlbb10pfHwobT1pW29dPVtdLG0uZGVsZWdhdGVDb3VudD0wLGwuc2V0dXAmJmwuc2V0dXAuY2FsbChhLGQscCxnKSE9PSExfHxhLmFkZEV2ZW50TGlzdGVuZXImJmEuYWRkRXZlbnRMaXN0ZW5lcihvLGcsITEpKSxsLmFkZCYmKGwuYWRkLmNhbGwoYSxrKSxrLmhhbmRsZXIuZ3VpZHx8KGsuaGFuZGxlci5ndWlkPWMuZ3VpZCkpLGU/bS5zcGxpY2UobS5kZWxlZ2F0ZUNvdW50KyssMCxrKTptLnB1c2goayksbi5ldmVudC5nbG9iYWxbb109ITApfX0scmVtb3ZlOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxvLHAscSxyPUwuaGFzRGF0YShhKSYmTC5nZXQoYSk7aWYociYmKGk9ci5ldmVudHMpKXtiPShifHxcIlwiKS5tYXRjaChFKXx8W1wiXCJdLGo9Yi5sZW5ndGg7d2hpbGUoai0tKWlmKGg9WS5leGVjKGJbal0pfHxbXSxvPXE9aFsxXSxwPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG8pe2w9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxvPShkP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxvLG09aVtvXXx8W10saD1oWzJdJiZuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrcC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksZz1mPW0ubGVuZ3RoO3doaWxlKGYtLSlrPW1bZl0sIWUmJnEhPT1rLm9yaWdUeXBlfHxjJiZjLmd1aWQhPT1rLmd1aWR8fGgmJiFoLnRlc3Qoay5uYW1lc3BhY2UpfHxkJiZkIT09ay5zZWxlY3RvciYmKFwiKipcIiE9PWR8fCFrLnNlbGVjdG9yKXx8KG0uc3BsaWNlKGYsMSksay5zZWxlY3RvciYmbS5kZWxlZ2F0ZUNvdW50LS0sbC5yZW1vdmUmJmwucmVtb3ZlLmNhbGwoYSxrKSk7ZyYmIW0ubGVuZ3RoJiYobC50ZWFyZG93biYmbC50ZWFyZG93bi5jYWxsKGEscCxyLmhhbmRsZSkhPT0hMXx8bi5yZW1vdmVFdmVudChhLG8sci5oYW5kbGUpLGRlbGV0ZSBpW29dKX1lbHNlIGZvcihvIGluIGkpbi5ldmVudC5yZW1vdmUoYSxvK2Jbal0sYyxkLCEwKTtuLmlzRW1wdHlPYmplY3QoaSkmJihkZWxldGUgci5oYW5kbGUsTC5yZW1vdmUoYSxcImV2ZW50c1wiKSl9fSx0cmlnZ2VyOmZ1bmN0aW9uKGIsYyxkLGUpe3ZhciBmLGcsaCxpLGssbSxvLHA9W2R8fGxdLHE9ai5jYWxsKGIsXCJ0eXBlXCIpP2IudHlwZTpiLHI9ai5jYWxsKGIsXCJuYW1lc3BhY2VcIik/Yi5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpOltdO2lmKGc9aD1kPWR8fGwsMyE9PWQubm9kZVR5cGUmJjghPT1kLm5vZGVUeXBlJiYhWC50ZXN0KHErbi5ldmVudC50cmlnZ2VyZWQpJiYocS5pbmRleE9mKFwiLlwiKT49MCYmKHI9cS5zcGxpdChcIi5cIikscT1yLnNoaWZ0KCksci5zb3J0KCkpLGs9cS5pbmRleE9mKFwiOlwiKTwwJiZcIm9uXCIrcSxiPWJbbi5leHBhbmRvXT9iOm5ldyBuLkV2ZW50KHEsXCJvYmplY3RcIj09dHlwZW9mIGImJmIpLGIuaXNUcmlnZ2VyPWU/MjozLGIubmFtZXNwYWNlPXIuam9pbihcIi5cIiksYi5uYW1lc3BhY2VfcmU9Yi5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Iuam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsYi5yZXN1bHQ9dm9pZCAwLGIudGFyZ2V0fHwoYi50YXJnZXQ9ZCksYz1udWxsPT1jP1tiXTpuLm1ha2VBcnJheShjLFtiXSksbz1uLmV2ZW50LnNwZWNpYWxbcV18fHt9LGV8fCFvLnRyaWdnZXJ8fG8udHJpZ2dlci5hcHBseShkLGMpIT09ITEpKXtpZighZSYmIW8ubm9CdWJibGUmJiFuLmlzV2luZG93KGQpKXtmb3IoaT1vLmRlbGVnYXRlVHlwZXx8cSxYLnRlc3QoaStxKXx8KGc9Zy5wYXJlbnROb2RlKTtnO2c9Zy5wYXJlbnROb2RlKXAucHVzaChnKSxoPWc7aD09PShkLm93bmVyRG9jdW1lbnR8fGwpJiZwLnB1c2goaC5kZWZhdWx0Vmlld3x8aC5wYXJlbnRXaW5kb3d8fGEpfWY9MDt3aGlsZSgoZz1wW2YrK10pJiYhYi5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWIudHlwZT1mPjE/aTpvLmJpbmRUeXBlfHxxLG09KEwuZ2V0KGcsXCJldmVudHNcIil8fHt9KVtiLnR5cGVdJiZMLmdldChnLFwiaGFuZGxlXCIpLG0mJm0uYXBwbHkoZyxjKSxtPWsmJmdba10sbSYmbS5hcHBseSYmbi5hY2NlcHREYXRhKGcpJiYoYi5yZXN1bHQ9bS5hcHBseShnLGMpLGIucmVzdWx0PT09ITEmJmIucHJldmVudERlZmF1bHQoKSk7cmV0dXJuIGIudHlwZT1xLGV8fGIuaXNEZWZhdWx0UHJldmVudGVkKCl8fG8uX2RlZmF1bHQmJm8uX2RlZmF1bHQuYXBwbHkocC5wb3AoKSxjKSE9PSExfHwhbi5hY2NlcHREYXRhKGQpfHxrJiZuLmlzRnVuY3Rpb24oZFtxXSkmJiFuLmlzV2luZG93KGQpJiYoaD1kW2tdLGgmJihkW2tdPW51bGwpLG4uZXZlbnQudHJpZ2dlcmVkPXEsZFtxXSgpLG4uZXZlbnQudHJpZ2dlcmVkPXZvaWQgMCxoJiYoZFtrXT1oKSksYi5yZXN1bHR9fSxkaXNwYXRjaDpmdW5jdGlvbihhKXthPW4uZXZlbnQuZml4KGEpO3ZhciBiLGMsZSxmLGcsaD1bXSxpPWQuY2FsbChhcmd1bWVudHMpLGo9KEwuZ2V0KHRoaXMsXCJldmVudHNcIil8fHt9KVthLnR5cGVdfHxbXSxrPW4uZXZlbnQuc3BlY2lhbFthLnR5cGVdfHx7fTtpZihpWzBdPWEsYS5kZWxlZ2F0ZVRhcmdldD10aGlzLCFrLnByZURpc3BhdGNofHxrLnByZURpc3BhdGNoLmNhbGwodGhpcyxhKSE9PSExKXtoPW4uZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLGEsaiksYj0wO3doaWxlKChmPWhbYisrXSkmJiFhLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe2EuY3VycmVudFRhcmdldD1mLmVsZW0sYz0wO3doaWxlKChnPWYuaGFuZGxlcnNbYysrXSkmJiFhLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpKCFhLm5hbWVzcGFjZV9yZXx8YS5uYW1lc3BhY2VfcmUudGVzdChnLm5hbWVzcGFjZSkpJiYoYS5oYW5kbGVPYmo9ZyxhLmRhdGE9Zy5kYXRhLGU9KChuLmV2ZW50LnNwZWNpYWxbZy5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fGcuaGFuZGxlcikuYXBwbHkoZi5lbGVtLGkpLHZvaWQgMCE9PWUmJihhLnJlc3VsdD1lKT09PSExJiYoYS5wcmV2ZW50RGVmYXVsdCgpLGEuc3RvcFByb3BhZ2F0aW9uKCkpKX1yZXR1cm4gay5wb3N0RGlzcGF0Y2gmJmsucG9zdERpc3BhdGNoLmNhbGwodGhpcyxhKSxhLnJlc3VsdH19LGhhbmRsZXJzOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGYsZz1bXSxoPWIuZGVsZWdhdGVDb3VudCxpPWEudGFyZ2V0O2lmKGgmJmkubm9kZVR5cGUmJighYS5idXR0b258fFwiY2xpY2tcIiE9PWEudHlwZSkpZm9yKDtpIT09dGhpcztpPWkucGFyZW50Tm9kZXx8dGhpcylpZihpLmRpc2FibGVkIT09ITB8fFwiY2xpY2tcIiE9PWEudHlwZSl7Zm9yKGQ9W10sYz0wO2g+YztjKyspZj1iW2NdLGU9Zi5zZWxlY3RvcitcIiBcIix2b2lkIDA9PT1kW2VdJiYoZFtlXT1mLm5lZWRzQ29udGV4dD9uKGUsdGhpcykuaW5kZXgoaSk+PTA6bi5maW5kKGUsdGhpcyxudWxsLFtpXSkubGVuZ3RoKSxkW2VdJiZkLnB1c2goZik7ZC5sZW5ndGgmJmcucHVzaCh7ZWxlbTppLGhhbmRsZXJzOmR9KX1yZXR1cm4gaDxiLmxlbmd0aCYmZy5wdXNoKHtlbGVtOnRoaXMsaGFuZGxlcnM6Yi5zbGljZShoKX0pLGd9LHByb3BzOlwiYWx0S2V5IGJ1YmJsZXMgY2FuY2VsYWJsZSBjdHJsS2V5IGN1cnJlbnRUYXJnZXQgZXZlbnRQaGFzZSBtZXRhS2V5IHJlbGF0ZWRUYXJnZXQgc2hpZnRLZXkgdGFyZ2V0IHRpbWVTdGFtcCB2aWV3IHdoaWNoXCIuc3BsaXQoXCIgXCIpLGZpeEhvb2tzOnt9LGtleUhvb2tzOntwcm9wczpcImNoYXIgY2hhckNvZGUga2V5IGtleUNvZGVcIi5zcGxpdChcIiBcIiksZmlsdGVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIG51bGw9PWEud2hpY2gmJihhLndoaWNoPW51bGwhPWIuY2hhckNvZGU/Yi5jaGFyQ29kZTpiLmtleUNvZGUpLGF9fSxtb3VzZUhvb2tzOntwcm9wczpcImJ1dHRvbiBidXR0b25zIGNsaWVudFggY2xpZW50WSBvZmZzZXRYIG9mZnNldFkgcGFnZVggcGFnZVkgc2NyZWVuWCBzY3JlZW5ZIHRvRWxlbWVudFwiLnNwbGl0KFwiIFwiKSxmaWx0ZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj1iLmJ1dHRvbjtyZXR1cm4gbnVsbD09YS5wYWdlWCYmbnVsbCE9Yi5jbGllbnRYJiYoYz1hLnRhcmdldC5vd25lckRvY3VtZW50fHxsLGQ9Yy5kb2N1bWVudEVsZW1lbnQsZT1jLmJvZHksYS5wYWdlWD1iLmNsaWVudFgrKGQmJmQuc2Nyb2xsTGVmdHx8ZSYmZS5zY3JvbGxMZWZ0fHwwKS0oZCYmZC5jbGllbnRMZWZ0fHxlJiZlLmNsaWVudExlZnR8fDApLGEucGFnZVk9Yi5jbGllbnRZKyhkJiZkLnNjcm9sbFRvcHx8ZSYmZS5zY3JvbGxUb3B8fDApLShkJiZkLmNsaWVudFRvcHx8ZSYmZS5jbGllbnRUb3B8fDApKSxhLndoaWNofHx2b2lkIDA9PT1mfHwoYS53aGljaD0xJmY/MToyJmY/Mzo0JmY/MjowKSxhfX0sZml4OmZ1bmN0aW9uKGEpe2lmKGFbbi5leHBhbmRvXSlyZXR1cm4gYTt2YXIgYixjLGQsZT1hLnR5cGUsZj1hLGc9dGhpcy5maXhIb29rc1tlXTtnfHwodGhpcy5maXhIb29rc1tlXT1nPVcudGVzdChlKT90aGlzLm1vdXNlSG9va3M6Vi50ZXN0KGUpP3RoaXMua2V5SG9va3M6e30pLGQ9Zy5wcm9wcz90aGlzLnByb3BzLmNvbmNhdChnLnByb3BzKTp0aGlzLnByb3BzLGE9bmV3IG4uRXZlbnQoZiksYj1kLmxlbmd0aDt3aGlsZShiLS0pYz1kW2JdLGFbY109ZltjXTtyZXR1cm4gYS50YXJnZXR8fChhLnRhcmdldD1sKSwzPT09YS50YXJnZXQubm9kZVR5cGUmJihhLnRhcmdldD1hLnRhcmdldC5wYXJlbnROb2RlKSxnLmZpbHRlcj9nLmZpbHRlcihhLGYpOmF9LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxmb2N1czp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzIT09XygpJiZ0aGlzLmZvY3VzPyh0aGlzLmZvY3VzKCksITEpOnZvaWQgMH0sZGVsZWdhdGVUeXBlOlwiZm9jdXNpblwifSxibHVyOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXM9PT1fKCkmJnRoaXMuYmx1cj8odGhpcy5ibHVyKCksITEpOnZvaWQgMH0sZGVsZWdhdGVUeXBlOlwiZm9jdXNvdXRcIn0sY2xpY2s6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm5cImNoZWNrYm94XCI9PT10aGlzLnR5cGUmJnRoaXMuY2xpY2smJm4ubm9kZU5hbWUodGhpcyxcImlucHV0XCIpPyh0aGlzLmNsaWNrKCksITEpOnZvaWQgMH0sX2RlZmF1bHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG4ubm9kZU5hbWUoYS50YXJnZXQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oYSl7dm9pZCAwIT09YS5yZXN1bHQmJmEub3JpZ2luYWxFdmVudCYmKGEub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1hLnJlc3VsdCl9fX0sc2ltdWxhdGU6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9bi5leHRlbmQobmV3IG4uRXZlbnQsYyx7dHlwZTphLGlzU2ltdWxhdGVkOiEwLG9yaWdpbmFsRXZlbnQ6e319KTtkP24uZXZlbnQudHJpZ2dlcihlLG51bGwsYik6bi5ldmVudC5kaXNwYXRjaC5jYWxsKGIsZSksZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSYmYy5wcmV2ZW50RGVmYXVsdCgpfX0sbi5yZW1vdmVFdmVudD1mdW5jdGlvbihhLGIsYyl7YS5yZW1vdmVFdmVudExpc3RlbmVyJiZhLnJlbW92ZUV2ZW50TGlzdGVuZXIoYixjLCExKX0sbi5FdmVudD1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzIGluc3RhbmNlb2Ygbi5FdmVudD8oYSYmYS50eXBlPyh0aGlzLm9yaWdpbmFsRXZlbnQ9YSx0aGlzLnR5cGU9YS50eXBlLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPWEuZGVmYXVsdFByZXZlbnRlZHx8dm9pZCAwPT09YS5kZWZhdWx0UHJldmVudGVkJiZhLnJldHVyblZhbHVlPT09ITE/WjokKTp0aGlzLnR5cGU9YSxiJiZuLmV4dGVuZCh0aGlzLGIpLHRoaXMudGltZVN0YW1wPWEmJmEudGltZVN0YW1wfHxuLm5vdygpLHZvaWQodGhpc1tuLmV4cGFuZG9dPSEwKSk6bmV3IG4uRXZlbnQoYSxiKX0sbi5FdmVudC5wcm90b3R5cGU9e2lzRGVmYXVsdFByZXZlbnRlZDokLGlzUHJvcGFnYXRpb25TdG9wcGVkOiQsaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6JCxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1aLGEmJmEucHJldmVudERlZmF1bHQmJmEucHJldmVudERlZmF1bHQoKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9WixhJiZhLnN0b3BQcm9wYWdhdGlvbiYmYS5zdG9wUHJvcGFnYXRpb24oKX0sc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9WixhJiZhLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiYmYS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0sbi5lYWNoKHttb3VzZWVudGVyOlwibW91c2VvdmVyXCIsbW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIscG9pbnRlcmVudGVyOlwicG9pbnRlcm92ZXJcIixwb2ludGVybGVhdmU6XCJwb2ludGVyb3V0XCJ9LGZ1bmN0aW9uKGEsYil7bi5ldmVudC5zcGVjaWFsW2FdPXtkZWxlZ2F0ZVR5cGU6YixiaW5kVHlwZTpiLGhhbmRsZTpmdW5jdGlvbihhKXt2YXIgYyxkPXRoaXMsZT1hLnJlbGF0ZWRUYXJnZXQsZj1hLmhhbmRsZU9iajtyZXR1cm4oIWV8fGUhPT1kJiYhbi5jb250YWlucyhkLGUpKSYmKGEudHlwZT1mLm9yaWdUeXBlLGM9Zi5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxhLnR5cGU9YiksY319fSksay5mb2N1c2luQnViYmxlc3x8bi5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oYSxiKXt2YXIgYz1mdW5jdGlvbihhKXtuLmV2ZW50LnNpbXVsYXRlKGIsYS50YXJnZXQsbi5ldmVudC5maXgoYSksITApfTtuLmV2ZW50LnNwZWNpYWxbYl09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9TC5hY2Nlc3MoZCxiKTtlfHxkLmFkZEV2ZW50TGlzdGVuZXIoYSxjLCEwKSxMLmFjY2VzcyhkLGIsKGV8fDApKzEpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3ZhciBkPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxlPUwuYWNjZXNzKGQsYiktMTtlP0wuYWNjZXNzKGQsYixlKTooZC5yZW1vdmVFdmVudExpc3RlbmVyKGEsYywhMCksTC5yZW1vdmUoZCxiKSl9fX0pLG4uZm4uZXh0ZW5kKHtvbjpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGc7aWYoXCJvYmplY3RcIj09dHlwZW9mIGEpe1wic3RyaW5nXCIhPXR5cGVvZiBiJiYoYz1jfHxiLGI9dm9pZCAwKTtmb3IoZyBpbiBhKXRoaXMub24oZyxiLGMsYVtnXSxlKTtyZXR1cm4gdGhpc31pZihudWxsPT1jJiZudWxsPT1kPyhkPWIsYz1iPXZvaWQgMCk6bnVsbD09ZCYmKFwic3RyaW5nXCI9PXR5cGVvZiBiPyhkPWMsYz12b2lkIDApOihkPWMsYz1iLGI9dm9pZCAwKSksZD09PSExKWQ9JDtlbHNlIGlmKCFkKXJldHVybiB0aGlzO3JldHVybiAxPT09ZSYmKGY9ZCxkPWZ1bmN0aW9uKGEpe3JldHVybiBuKCkub2ZmKGEpLGYuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxkLmd1aWQ9Zi5ndWlkfHwoZi5ndWlkPW4uZ3VpZCsrKSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC5hZGQodGhpcyxhLGQsYyxiKX0pfSxvbmU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMub24oYSxiLGMsZCwxKX0sb2ZmOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlO2lmKGEmJmEucHJldmVudERlZmF1bHQmJmEuaGFuZGxlT2JqKXJldHVybiBkPWEuaGFuZGxlT2JqLG4oYS5kZWxlZ2F0ZVRhcmdldCkub2ZmKGQubmFtZXNwYWNlP2Qub3JpZ1R5cGUrXCIuXCIrZC5uYW1lc3BhY2U6ZC5vcmlnVHlwZSxkLnNlbGVjdG9yLGQuaGFuZGxlciksdGhpcztpZihcIm9iamVjdFwiPT10eXBlb2YgYSl7Zm9yKGUgaW4gYSl0aGlzLm9mZihlLGIsYVtlXSk7cmV0dXJuIHRoaXN9cmV0dXJuKGI9PT0hMXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYikmJihjPWIsYj12b2lkIDApLGM9PT0hMSYmKGM9JCksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC5yZW1vdmUodGhpcyxhLGMsYil9KX0sdHJpZ2dlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LnRyaWdnZXIoYSxiLHRoaXMpfSl9LHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpc1swXTtyZXR1cm4gYz9uLmV2ZW50LnRyaWdnZXIoYSxiLGMsITApOnZvaWQgMH19KTt2YXIgYWI9LzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW1xcdzpdKylbXj5dKilcXC8+L2dpLGJiPS88KFtcXHc6XSspLyxjYj0vPHwmIz9cXHcrOy8sZGI9LzwoPzpzY3JpcHR8c3R5bGV8bGluaykvaSxlYj0vY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLGZiPS9eJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2ksZ2I9L150cnVlXFwvKC4qKS8saGI9L15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nLGliPXtvcHRpb246WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0sdGhlYWQ6WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSxjb2w6WzIsXCI8dGFibGU+PGNvbGdyb3VwPlwiLFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLHRkOlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sX2RlZmF1bHQ6WzAsXCJcIixcIlwiXX07aWIub3B0Z3JvdXA9aWIub3B0aW9uLGliLnRib2R5PWliLnRmb290PWliLmNvbGdyb3VwPWliLmNhcHRpb249aWIudGhlYWQsaWIudGg9aWIudGQ7ZnVuY3Rpb24gamIoYSxiKXtyZXR1cm4gbi5ub2RlTmFtZShhLFwidGFibGVcIikmJm4ubm9kZU5hbWUoMTEhPT1iLm5vZGVUeXBlP2I6Yi5maXJzdENoaWxkLFwidHJcIik/YS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRib2R5XCIpWzBdfHxhLmFwcGVuZENoaWxkKGEub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIikpOmF9ZnVuY3Rpb24ga2IoYSl7cmV0dXJuIGEudHlwZT0obnVsbCE9PWEuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSkrXCIvXCIrYS50eXBlLGF9ZnVuY3Rpb24gbGIoYSl7dmFyIGI9Z2IuZXhlYyhhLnR5cGUpO3JldHVybiBiP2EudHlwZT1iWzFdOmEucmVtb3ZlQXR0cmlidXRlKFwidHlwZVwiKSxhfWZ1bmN0aW9uIG1iKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtkPmM7YysrKUwuc2V0KGFbY10sXCJnbG9iYWxFdmFsXCIsIWJ8fEwuZ2V0KGJbY10sXCJnbG9iYWxFdmFsXCIpKX1mdW5jdGlvbiBuYihhLGIpe3ZhciBjLGQsZSxmLGcsaCxpLGo7aWYoMT09PWIubm9kZVR5cGUpe2lmKEwuaGFzRGF0YShhKSYmKGY9TC5hY2Nlc3MoYSksZz1MLnNldChiLGYpLGo9Zi5ldmVudHMpKXtkZWxldGUgZy5oYW5kbGUsZy5ldmVudHM9e307Zm9yKGUgaW4gailmb3IoYz0wLGQ9altlXS5sZW5ndGg7ZD5jO2MrKyluLmV2ZW50LmFkZChiLGUsaltlXVtjXSl9TS5oYXNEYXRhKGEpJiYoaD1NLmFjY2VzcyhhKSxpPW4uZXh0ZW5kKHt9LGgpLE0uc2V0KGIsaSkpfX1mdW5jdGlvbiBvYihhLGIpe3ZhciBjPWEuZ2V0RWxlbWVudHNCeVRhZ05hbWU/YS5nZXRFbGVtZW50c0J5VGFnTmFtZShifHxcIipcIik6YS5xdWVyeVNlbGVjdG9yQWxsP2EucXVlcnlTZWxlY3RvckFsbChifHxcIipcIik6W107cmV0dXJuIHZvaWQgMD09PWJ8fGImJm4ubm9kZU5hbWUoYSxiKT9uLm1lcmdlKFthXSxjKTpjfWZ1bmN0aW9uIHBiKGEsYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1wiaW5wdXRcIj09PWMmJlQudGVzdChhLnR5cGUpP2IuY2hlY2tlZD1hLmNoZWNrZWQ6KFwiaW5wdXRcIj09PWN8fFwidGV4dGFyZWFcIj09PWMpJiYoYi5kZWZhdWx0VmFsdWU9YS5kZWZhdWx0VmFsdWUpfW4uZXh0ZW5kKHtjbG9uZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNsb25lTm9kZSghMCksaT1uLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKTtpZighKGsubm9DbG9uZUNoZWNrZWR8fDEhPT1hLm5vZGVUeXBlJiYxMSE9PWEubm9kZVR5cGV8fG4uaXNYTUxEb2MoYSkpKWZvcihnPW9iKGgpLGY9b2IoYSksZD0wLGU9Zi5sZW5ndGg7ZT5kO2QrKylwYihmW2RdLGdbZF0pO2lmKGIpaWYoYylmb3IoZj1mfHxvYihhKSxnPWd8fG9iKGgpLGQ9MCxlPWYubGVuZ3RoO2U+ZDtkKyspbmIoZltkXSxnW2RdKTtlbHNlIG5iKGEsaCk7cmV0dXJuIGc9b2IoaCxcInNjcmlwdFwiKSxnLmxlbmd0aD4wJiZtYihnLCFpJiZvYihhLFwic2NyaXB0XCIpKSxofSxidWlsZEZyYWdtZW50OmZ1bmN0aW9uKGEsYixjLGQpe2Zvcih2YXIgZSxmLGcsaCxpLGosaz1iLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxsPVtdLG09MCxvPWEubGVuZ3RoO28+bTttKyspaWYoZT1hW21dLGV8fDA9PT1lKWlmKFwib2JqZWN0XCI9PT1uLnR5cGUoZSkpbi5tZXJnZShsLGUubm9kZVR5cGU/W2VdOmUpO2Vsc2UgaWYoY2IudGVzdChlKSl7Zj1mfHxrLmFwcGVuZENoaWxkKGIuY3JlYXRlRWxlbWVudChcImRpdlwiKSksZz0oYmIuZXhlYyhlKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksaD1pYltnXXx8aWIuX2RlZmF1bHQsZi5pbm5lckhUTUw9aFsxXStlLnJlcGxhY2UoYWIsXCI8JDE+PC8kMj5cIikraFsyXSxqPWhbMF07d2hpbGUoai0tKWY9Zi5sYXN0Q2hpbGQ7bi5tZXJnZShsLGYuY2hpbGROb2RlcyksZj1rLmZpcnN0Q2hpbGQsZi50ZXh0Q29udGVudD1cIlwifWVsc2UgbC5wdXNoKGIuY3JlYXRlVGV4dE5vZGUoZSkpO2sudGV4dENvbnRlbnQ9XCJcIixtPTA7d2hpbGUoZT1sW20rK10paWYoKCFkfHwtMT09PW4uaW5BcnJheShlLGQpKSYmKGk9bi5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSksZj1vYihrLmFwcGVuZENoaWxkKGUpLFwic2NyaXB0XCIpLGkmJm1iKGYpLGMpKXtqPTA7d2hpbGUoZT1mW2orK10pZmIudGVzdChlLnR5cGV8fFwiXCIpJiZjLnB1c2goZSl9cmV0dXJuIGt9LGNsZWFuRGF0YTpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkLGUsZj1uLmV2ZW50LnNwZWNpYWwsZz0wO3ZvaWQgMCE9PShjPWFbZ10pO2crKyl7aWYobi5hY2NlcHREYXRhKGMpJiYoZT1jW0wuZXhwYW5kb10sZSYmKGI9TC5jYWNoZVtlXSkpKXtpZihiLmV2ZW50cylmb3IoZCBpbiBiLmV2ZW50cylmW2RdP24uZXZlbnQucmVtb3ZlKGMsZCk6bi5yZW1vdmVFdmVudChjLGQsYi5oYW5kbGUpO0wuY2FjaGVbZV0mJmRlbGV0ZSBMLmNhY2hlW2VdfWRlbGV0ZSBNLmNhY2hlW2NbTS5leHBhbmRvXV19fX0pLG4uZm4uZXh0ZW5kKHt0ZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBKKHRoaXMsZnVuY3Rpb24oYSl7cmV0dXJuIHZvaWQgMD09PWE/bi50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7KDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKSYmKHRoaXMudGV4dENvbnRlbnQ9YSl9KX0sbnVsbCxhLGFyZ3VtZW50cy5sZW5ndGgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPWpiKHRoaXMsYSk7Yi5hcHBlbmRDaGlsZChhKX19KX0scHJlcGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9amIodGhpcyxhKTtiLmluc2VydEJlZm9yZShhLGIuZmlyc3RDaGlsZCl9fSl9LGJlZm9yZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzKX0pfSxhZnRlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzLm5leHRTaWJsaW5nKX0pfSxyZW1vdmU6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGMsZD1hP24uZmlsdGVyKGEsdGhpcyk6dGhpcyxlPTA7bnVsbCE9KGM9ZFtlXSk7ZSsrKWJ8fDEhPT1jLm5vZGVUeXBlfHxuLmNsZWFuRGF0YShvYihjKSksYy5wYXJlbnROb2RlJiYoYiYmbi5jb250YWlucyhjLm93bmVyRG9jdW1lbnQsYykmJm1iKG9iKGMsXCJzY3JpcHRcIikpLGMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjKSk7cmV0dXJuIHRoaXN9LGVtcHR5OmZ1bmN0aW9uKCl7Zm9yKHZhciBhLGI9MDtudWxsIT0oYT10aGlzW2JdKTtiKyspMT09PWEubm9kZVR5cGUmJihuLmNsZWFuRGF0YShvYihhLCExKSksYS50ZXh0Q29udGVudD1cIlwiKTtyZXR1cm4gdGhpc30sY2xvbmU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1udWxsPT1hPyExOmEsYj1udWxsPT1iP2E6Yix0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiBuLmNsb25lKHRoaXMsYSxiKX0pfSxodG1sOmZ1bmN0aW9uKGEpe3JldHVybiBKKHRoaXMsZnVuY3Rpb24oYSl7dmFyIGI9dGhpc1swXXx8e30sYz0wLGQ9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09YSYmMT09PWIubm9kZVR5cGUpcmV0dXJuIGIuaW5uZXJIVE1MO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiYhZGIudGVzdChhKSYmIWliWyhiYi5leGVjKGEpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2E9YS5yZXBsYWNlKGFiLFwiPCQxPjwvJDI+XCIpO3RyeXtmb3IoO2Q+YztjKyspYj10aGlzW2NdfHx7fSwxPT09Yi5ub2RlVHlwZSYmKG4uY2xlYW5EYXRhKG9iKGIsITEpKSxiLmlubmVySFRNTD1hKTtiPTB9Y2F0Y2goZSl7fX1iJiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGEpfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIGE9YXJndW1lbnRzWzBdO3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihiKXthPXRoaXMucGFyZW50Tm9kZSxuLmNsZWFuRGF0YShvYih0aGlzKSksYSYmYS5yZXBsYWNlQ2hpbGQoYix0aGlzKX0pLGEmJihhLmxlbmd0aHx8YS5ub2RlVHlwZSk/dGhpczp0aGlzLnJlbW92ZSgpfSxkZXRhY2g6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucmVtb3ZlKGEsITApfSxkb21NYW5pcDpmdW5jdGlvbihhLGIpe2E9ZS5hcHBseShbXSxhKTt2YXIgYyxkLGYsZyxoLGksaj0wLGw9dGhpcy5sZW5ndGgsbT10aGlzLG89bC0xLHA9YVswXSxxPW4uaXNGdW5jdGlvbihwKTtpZihxfHxsPjEmJlwic3RyaW5nXCI9PXR5cGVvZiBwJiYhay5jaGVja0Nsb25lJiZlYi50ZXN0KHApKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYyl7dmFyIGQ9bS5lcShjKTtxJiYoYVswXT1wLmNhbGwodGhpcyxjLGQuaHRtbCgpKSksZC5kb21NYW5pcChhLGIpfSk7aWYobCYmKGM9bi5idWlsZEZyYWdtZW50KGEsdGhpc1swXS5vd25lckRvY3VtZW50LCExLHRoaXMpLGQ9Yy5maXJzdENoaWxkLDE9PT1jLmNoaWxkTm9kZXMubGVuZ3RoJiYoYz1kKSxkKSl7Zm9yKGY9bi5tYXAob2IoYyxcInNjcmlwdFwiKSxrYiksZz1mLmxlbmd0aDtsPmo7aisrKWg9YyxqIT09byYmKGg9bi5jbG9uZShoLCEwLCEwKSxnJiZuLm1lcmdlKGYsb2IoaCxcInNjcmlwdFwiKSkpLGIuY2FsbCh0aGlzW2pdLGgsaik7aWYoZylmb3IoaT1mW2YubGVuZ3RoLTFdLm93bmVyRG9jdW1lbnQsbi5tYXAoZixsYiksaj0wO2c+ajtqKyspaD1mW2pdLGZiLnRlc3QoaC50eXBlfHxcIlwiKSYmIUwuYWNjZXNzKGgsXCJnbG9iYWxFdmFsXCIpJiZuLmNvbnRhaW5zKGksaCkmJihoLnNyYz9uLl9ldmFsVXJsJiZuLl9ldmFsVXJsKGguc3JjKTpuLmdsb2JhbEV2YWwoaC50ZXh0Q29udGVudC5yZXBsYWNlKGhiLFwiXCIpKSl9cmV0dXJuIHRoaXN9fSksbi5lYWNoKHthcHBlbmRUbzpcImFwcGVuZFwiLHByZXBlbmRUbzpcInByZXBlbmRcIixpbnNlcnRCZWZvcmU6XCJiZWZvcmVcIixpbnNlcnRBZnRlcjpcImFmdGVyXCIscmVwbGFjZUFsbDpcInJlcGxhY2VXaXRoXCJ9LGZ1bmN0aW9uKGEsYil7bi5mblthXT1mdW5jdGlvbihhKXtmb3IodmFyIGMsZD1bXSxlPW4oYSksZz1lLmxlbmd0aC0xLGg9MDtnPj1oO2grKyljPWg9PT1nP3RoaXM6dGhpcy5jbG9uZSghMCksbihlW2hdKVtiXShjKSxmLmFwcGx5KGQsYy5nZXQoKSk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGQpfX0pO3ZhciBxYixyYj17fTtmdW5jdGlvbiBzYihiLGMpe3ZhciBkLGU9bihjLmNyZWF0ZUVsZW1lbnQoYikpLmFwcGVuZFRvKGMuYm9keSksZj1hLmdldERlZmF1bHRDb21wdXRlZFN0eWxlJiYoZD1hLmdldERlZmF1bHRDb21wdXRlZFN0eWxlKGVbMF0pKT9kLmRpc3BsYXk6bi5jc3MoZVswXSxcImRpc3BsYXlcIik7cmV0dXJuIGUuZGV0YWNoKCksZn1mdW5jdGlvbiB0YihhKXt2YXIgYj1sLGM9cmJbYV07cmV0dXJuIGN8fChjPXNiKGEsYiksXCJub25lXCIhPT1jJiZjfHwocWI9KHFifHxuKFwiPGlmcmFtZSBmcmFtZWJvcmRlcj0nMCcgd2lkdGg9JzAnIGhlaWdodD0nMCcvPlwiKSkuYXBwZW5kVG8oYi5kb2N1bWVudEVsZW1lbnQpLGI9cWJbMF0uY29udGVudERvY3VtZW50LGIud3JpdGUoKSxiLmNsb3NlKCksYz1zYihhLGIpLHFiLmRldGFjaCgpKSxyYlthXT1jKSxjfXZhciB1Yj0vXm1hcmdpbi8sdmI9bmV3IFJlZ0V4cChcIl4oXCIrUStcIikoPyFweClbYS16JV0rJFwiLFwiaVwiKSx3Yj1mdW5jdGlvbihhKXtyZXR1cm4gYS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoYSxudWxsKX07ZnVuY3Rpb24geGIoYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5zdHlsZTtyZXR1cm4gYz1jfHx3YihhKSxjJiYoZz1jLmdldFByb3BlcnR5VmFsdWUoYil8fGNbYl0pLGMmJihcIlwiIT09Z3x8bi5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSl8fChnPW4uc3R5bGUoYSxiKSksdmIudGVzdChnKSYmdWIudGVzdChiKSYmKGQ9aC53aWR0aCxlPWgubWluV2lkdGgsZj1oLm1heFdpZHRoLGgubWluV2lkdGg9aC5tYXhXaWR0aD1oLndpZHRoPWcsZz1jLndpZHRoLGgud2lkdGg9ZCxoLm1pbldpZHRoPWUsaC5tYXhXaWR0aD1mKSksdm9pZCAwIT09Zz9nK1wiXCI6Z31mdW5jdGlvbiB5YihhLGIpe3JldHVybntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYSgpP3ZvaWQgZGVsZXRlIHRoaXMuZ2V0Oih0aGlzLmdldD1iKS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX0hZnVuY3Rpb24oKXt2YXIgYixjLGQ9bC5kb2N1bWVudEVsZW1lbnQsZT1sLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZj1sLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYoZi5zdHlsZSl7Zi5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cImNvbnRlbnQtYm94XCIsZi5jbG9uZU5vZGUoITApLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCIsay5jbGVhckNsb25lU3R5bGU9XCJjb250ZW50LWJveFwiPT09Zi5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCxlLnN0eWxlLmNzc1RleHQ9XCJib3JkZXI6MDt3aWR0aDowO2hlaWdodDowO3RvcDowO2xlZnQ6LTk5OTlweDttYXJnaW4tdG9wOjFweDtwb3NpdGlvbjphYnNvbHV0ZVwiLGUuYXBwZW5kQ2hpbGQoZik7ZnVuY3Rpb24gZygpe2Yuc3R5bGUuY3NzVGV4dD1cIi13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmJsb2NrO21hcmdpbi10b3A6MSU7dG9wOjElO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7d2lkdGg6NHB4O3Bvc2l0aW9uOmFic29sdXRlXCIsZi5pbm5lckhUTUw9XCJcIixkLmFwcGVuZENoaWxkKGUpO3ZhciBnPWEuZ2V0Q29tcHV0ZWRTdHlsZShmLG51bGwpO2I9XCIxJVwiIT09Zy50b3AsYz1cIjRweFwiPT09Zy53aWR0aCxkLnJlbW92ZUNoaWxkKGUpfWEuZ2V0Q29tcHV0ZWRTdHlsZSYmbi5leHRlbmQoayx7cGl4ZWxQb3NpdGlvbjpmdW5jdGlvbigpe3JldHVybiBnKCksYn0sYm94U2l6aW5nUmVsaWFibGU6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09YyYmZygpLGN9LHJlbGlhYmxlTWFyZ2luUmlnaHQ6ZnVuY3Rpb24oKXt2YXIgYixjPWYuYXBwZW5kQ2hpbGQobC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtyZXR1cm4gYy5zdHlsZS5jc3NUZXh0PWYuc3R5bGUuY3NzVGV4dD1cIi13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDstbW96LWJveC1zaXppbmc6Y29udGVudC1ib3g7Ym94LXNpemluZzpjb250ZW50LWJveDtkaXNwbGF5OmJsb2NrO21hcmdpbjowO2JvcmRlcjowO3BhZGRpbmc6MFwiLGMuc3R5bGUubWFyZ2luUmlnaHQ9Yy5zdHlsZS53aWR0aD1cIjBcIixmLnN0eWxlLndpZHRoPVwiMXB4XCIsZC5hcHBlbmRDaGlsZChlKSxiPSFwYXJzZUZsb2F0KGEuZ2V0Q29tcHV0ZWRTdHlsZShjLG51bGwpLm1hcmdpblJpZ2h0KSxkLnJlbW92ZUNoaWxkKGUpLGJ9fSl9fSgpLG4uc3dhcD1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGc9e307Zm9yKGYgaW4gYilnW2ZdPWEuc3R5bGVbZl0sYS5zdHlsZVtmXT1iW2ZdO2U9Yy5hcHBseShhLGR8fFtdKTtmb3IoZiBpbiBiKWEuc3R5bGVbZl09Z1tmXTtyZXR1cm4gZX07dmFyIHpiPS9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxBYj1uZXcgUmVnRXhwKFwiXihcIitRK1wiKSguKikkXCIsXCJpXCIpLEJiPW5ldyBSZWdFeHAoXCJeKFsrLV0pPShcIitRK1wiKVwiLFwiaVwiKSxDYj17cG9zaXRpb246XCJhYnNvbHV0ZVwiLHZpc2liaWxpdHk6XCJoaWRkZW5cIixkaXNwbGF5OlwiYmxvY2tcIn0sRGI9e2xldHRlclNwYWNpbmc6XCIwXCIsZm9udFdlaWdodDpcIjQwMFwifSxFYj1bXCJXZWJraXRcIixcIk9cIixcIk1velwiLFwibXNcIl07ZnVuY3Rpb24gRmIoYSxiKXtpZihiIGluIGEpcmV0dXJuIGI7dmFyIGM9YlswXS50b1VwcGVyQ2FzZSgpK2Iuc2xpY2UoMSksZD1iLGU9RWIubGVuZ3RoO3doaWxlKGUtLSlpZihiPUViW2VdK2MsYiBpbiBhKXJldHVybiBiO3JldHVybiBkfWZ1bmN0aW9uIEdiKGEsYixjKXt2YXIgZD1BYi5leGVjKGIpO3JldHVybiBkP01hdGgubWF4KDAsZFsxXS0oY3x8MCkpKyhkWzJdfHxcInB4XCIpOmJ9ZnVuY3Rpb24gSGIoYSxiLGMsZCxlKXtmb3IodmFyIGY9Yz09PShkP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpPzQ6XCJ3aWR0aFwiPT09Yj8xOjAsZz0wOzQ+ZjtmKz0yKVwibWFyZ2luXCI9PT1jJiYoZys9bi5jc3MoYSxjK1JbZl0sITAsZSkpLGQ/KFwiY29udGVudFwiPT09YyYmKGctPW4uY3NzKGEsXCJwYWRkaW5nXCIrUltmXSwhMCxlKSksXCJtYXJnaW5cIiE9PWMmJihnLT1uLmNzcyhhLFwiYm9yZGVyXCIrUltmXStcIldpZHRoXCIsITAsZSkpKTooZys9bi5jc3MoYSxcInBhZGRpbmdcIitSW2ZdLCEwLGUpLFwicGFkZGluZ1wiIT09YyYmKGcrPW4uY3NzKGEsXCJib3JkZXJcIitSW2ZdK1wiV2lkdGhcIiwhMCxlKSkpO3JldHVybiBnfWZ1bmN0aW9uIEliKGEsYixjKXt2YXIgZD0hMCxlPVwid2lkdGhcIj09PWI/YS5vZmZzZXRXaWR0aDphLm9mZnNldEhlaWdodCxmPXdiKGEpLGc9XCJib3JkZXItYm94XCI9PT1uLmNzcyhhLFwiYm94U2l6aW5nXCIsITEsZik7aWYoMD49ZXx8bnVsbD09ZSl7aWYoZT14YihhLGIsZiksKDA+ZXx8bnVsbD09ZSkmJihlPWEuc3R5bGVbYl0pLHZiLnRlc3QoZSkpcmV0dXJuIGU7ZD1nJiYoay5ib3hTaXppbmdSZWxpYWJsZSgpfHxlPT09YS5zdHlsZVtiXSksZT1wYXJzZUZsb2F0KGUpfHwwfXJldHVybiBlK0hiKGEsYixjfHwoZz9cImJvcmRlclwiOlwiY29udGVudFwiKSxkLGYpK1wicHhcIn1mdW5jdGlvbiBKYihhLGIpe2Zvcih2YXIgYyxkLGUsZj1bXSxnPTAsaD1hLmxlbmd0aDtoPmc7ZysrKWQ9YVtnXSxkLnN0eWxlJiYoZltnXT1MLmdldChkLFwib2xkZGlzcGxheVwiKSxjPWQuc3R5bGUuZGlzcGxheSxiPyhmW2ddfHxcIm5vbmVcIiE9PWN8fChkLnN0eWxlLmRpc3BsYXk9XCJcIiksXCJcIj09PWQuc3R5bGUuZGlzcGxheSYmUyhkKSYmKGZbZ109TC5hY2Nlc3MoZCxcIm9sZGRpc3BsYXlcIix0YihkLm5vZGVOYW1lKSkpKTooZT1TKGQpLFwibm9uZVwiPT09YyYmZXx8TC5zZXQoZCxcIm9sZGRpc3BsYXlcIixlP2M6bi5jc3MoZCxcImRpc3BsYXlcIikpKSk7Zm9yKGc9MDtoPmc7ZysrKWQ9YVtnXSxkLnN0eWxlJiYoYiYmXCJub25lXCIhPT1kLnN0eWxlLmRpc3BsYXkmJlwiXCIhPT1kLnN0eWxlLmRpc3BsYXl8fChkLnN0eWxlLmRpc3BsYXk9Yj9mW2ddfHxcIlwiOlwibm9uZVwiKSk7cmV0dXJuIGF9bi5leHRlbmQoe2Nzc0hvb2tzOntvcGFjaXR5OntnZXQ6ZnVuY3Rpb24oYSxiKXtpZihiKXt2YXIgYz14YihhLFwib3BhY2l0eVwiKTtyZXR1cm5cIlwiPT09Yz9cIjFcIjpjfX19fSxjc3NOdW1iZXI6e2NvbHVtbkNvdW50OiEwLGZpbGxPcGFjaXR5OiEwLGZsZXhHcm93OiEwLGZsZXhTaHJpbms6ITAsZm9udFdlaWdodDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITB9LGNzc1Byb3BzOntcImZsb2F0XCI6XCJjc3NGbG9hdFwifSxzdHlsZTpmdW5jdGlvbihhLGIsYyxkKXtpZihhJiYzIT09YS5ub2RlVHlwZSYmOCE9PWEubm9kZVR5cGUmJmEuc3R5bGUpe3ZhciBlLGYsZyxoPW4uY2FtZWxDYXNlKGIpLGk9YS5zdHlsZTtyZXR1cm4gYj1uLmNzc1Byb3BzW2hdfHwobi5jc3NQcm9wc1toXT1GYihpLGgpKSxnPW4uY3NzSG9va3NbYl18fG4uY3NzSG9va3NbaF0sdm9pZCAwPT09Yz9nJiZcImdldFwiaW4gZyYmdm9pZCAwIT09KGU9Zy5nZXQoYSwhMSxkKSk/ZTppW2JdOihmPXR5cGVvZiBjLFwic3RyaW5nXCI9PT1mJiYoZT1CYi5leGVjKGMpKSYmKGM9KGVbMV0rMSkqZVsyXStwYXJzZUZsb2F0KG4uY3NzKGEsYikpLGY9XCJudW1iZXJcIiksbnVsbCE9YyYmYz09PWMmJihcIm51bWJlclwiIT09Znx8bi5jc3NOdW1iZXJbaF18fChjKz1cInB4XCIpLGsuY2xlYXJDbG9uZVN0eWxlfHxcIlwiIT09Y3x8MCE9PWIuaW5kZXhPZihcImJhY2tncm91bmRcIil8fChpW2JdPVwiaW5oZXJpdFwiKSxnJiZcInNldFwiaW4gZyYmdm9pZCAwPT09KGM9Zy5zZXQoYSxjLGQpKXx8KGlbYl09YykpLHZvaWQgMCl9fSxjc3M6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGUsZixnLGg9bi5jYW1lbENhc2UoYik7cmV0dXJuIGI9bi5jc3NQcm9wc1toXXx8KG4uY3NzUHJvcHNbaF09RmIoYS5zdHlsZSxoKSksZz1uLmNzc0hvb2tzW2JdfHxuLmNzc0hvb2tzW2hdLGcmJlwiZ2V0XCJpbiBnJiYoZT1nLmdldChhLCEwLGMpKSx2b2lkIDA9PT1lJiYoZT14YihhLGIsZCkpLFwibm9ybWFsXCI9PT1lJiZiIGluIERiJiYoZT1EYltiXSksXCJcIj09PWN8fGM/KGY9cGFyc2VGbG9hdChlKSxjPT09ITB8fG4uaXNOdW1lcmljKGYpP2Z8fDA6ZSk6ZX19KSxuLmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihhLGIpe24uY3NzSG9va3NbYl09e2dldDpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGM/emIudGVzdChuLmNzcyhhLFwiZGlzcGxheVwiKSkmJjA9PT1hLm9mZnNldFdpZHRoP24uc3dhcChhLENiLGZ1bmN0aW9uKCl7cmV0dXJuIEliKGEsYixkKX0pOkliKGEsYixkKTp2b2lkIDB9LHNldDpmdW5jdGlvbihhLGMsZCl7dmFyIGU9ZCYmd2IoYSk7cmV0dXJuIEdiKGEsYyxkP0hiKGEsYixkLFwiYm9yZGVyLWJveFwiPT09bi5jc3MoYSxcImJveFNpemluZ1wiLCExLGUpLGUpOjApfX19KSxuLmNzc0hvb2tzLm1hcmdpblJpZ2h0PXliKGsucmVsaWFibGVNYXJnaW5SaWdodCxmdW5jdGlvbihhLGIpe3JldHVybiBiP24uc3dhcChhLHtkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCJ9LHhiLFthLFwibWFyZ2luUmlnaHRcIl0pOnZvaWQgMH0pLG4uZWFjaCh7bWFyZ2luOlwiXCIscGFkZGluZzpcIlwiLGJvcmRlcjpcIldpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7bi5jc3NIb29rc1thK2JdPXtleHBhbmQ6ZnVuY3Rpb24oYyl7Zm9yKHZhciBkPTAsZT17fSxmPVwic3RyaW5nXCI9PXR5cGVvZiBjP2Muc3BsaXQoXCIgXCIpOltjXTs0PmQ7ZCsrKWVbYStSW2RdK2JdPWZbZF18fGZbZC0yXXx8ZlswXTtyZXR1cm4gZX19LHViLnRlc3QoYSl8fChuLmNzc0hvb2tzW2ErYl0uc2V0PUdiKX0pLG4uZm4uZXh0ZW5kKHtjc3M6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gSih0aGlzLGZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9e30sZz0wO2lmKG4uaXNBcnJheShiKSl7Zm9yKGQ9d2IoYSksZT1iLmxlbmd0aDtlPmc7ZysrKWZbYltnXV09bi5jc3MoYSxiW2ddLCExLGQpO3JldHVybiBmfXJldHVybiB2b2lkIDAhPT1jP24uc3R5bGUoYSxiLGMpOm4uY3NzKGEsYil9LGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxzaG93OmZ1bmN0aW9uKCl7cmV0dXJuIEpiKHRoaXMsITApfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIEpiKHRoaXMpfSx0b2dnbGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBhP2E/dGhpcy5zaG93KCk6dGhpcy5oaWRlKCk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7Uyh0aGlzKT9uKHRoaXMpLnNob3coKTpuKHRoaXMpLmhpZGUoKX0pfX0pO2Z1bmN0aW9uIEtiKGEsYixjLGQsZSl7cmV0dXJuIG5ldyBLYi5wcm90b3R5cGUuaW5pdChhLGIsYyxkLGUpfW4uVHdlZW49S2IsS2IucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpLYixpbml0OmZ1bmN0aW9uKGEsYixjLGQsZSxmKXt0aGlzLmVsZW09YSx0aGlzLnByb3A9Yyx0aGlzLmVhc2luZz1lfHxcInN3aW5nXCIsdGhpcy5vcHRpb25zPWIsdGhpcy5zdGFydD10aGlzLm5vdz10aGlzLmN1cigpLHRoaXMuZW5kPWQsdGhpcy51bml0PWZ8fChuLmNzc051bWJlcltjXT9cIlwiOlwicHhcIil9LGN1cjpmdW5jdGlvbigpe3ZhciBhPUtiLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiBhJiZhLmdldD9hLmdldCh0aGlzKTpLYi5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpfSxydW46ZnVuY3Rpb24oYSl7dmFyIGIsYz1LYi5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gdGhpcy5wb3M9Yj10aGlzLm9wdGlvbnMuZHVyYXRpb24/bi5lYXNpbmdbdGhpcy5lYXNpbmddKGEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKmEsMCwxLHRoaXMub3B0aW9ucy5kdXJhdGlvbik6YSx0aGlzLm5vdz0odGhpcy5lbmQtdGhpcy5zdGFydCkqYit0aGlzLnN0YXJ0LHRoaXMub3B0aW9ucy5zdGVwJiZ0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSx0aGlzLm5vdyx0aGlzKSxjJiZjLnNldD9jLnNldCh0aGlzKTpLYi5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpLHRoaXN9fSxLYi5wcm90b3R5cGUuaW5pdC5wcm90b3R5cGU9S2IucHJvdG90eXBlLEtiLnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gbnVsbD09YS5lbGVtW2EucHJvcF18fGEuZWxlbS5zdHlsZSYmbnVsbCE9YS5lbGVtLnN0eWxlW2EucHJvcF0/KGI9bi5jc3MoYS5lbGVtLGEucHJvcCxcIlwiKSxiJiZcImF1dG9cIiE9PWI/YjowKTphLmVsZW1bYS5wcm9wXX0sc2V0OmZ1bmN0aW9uKGEpe24uZnguc3RlcFthLnByb3BdP24uZnguc3RlcFthLnByb3BdKGEpOmEuZWxlbS5zdHlsZSYmKG51bGwhPWEuZWxlbS5zdHlsZVtuLmNzc1Byb3BzW2EucHJvcF1dfHxuLmNzc0hvb2tzW2EucHJvcF0pP24uc3R5bGUoYS5lbGVtLGEucHJvcCxhLm5vdythLnVuaXQpOmEuZWxlbVthLnByb3BdPWEubm93fX19LEtiLnByb3BIb29rcy5zY3JvbGxUb3A9S2IucHJvcEhvb2tzLnNjcm9sbExlZnQ9e3NldDpmdW5jdGlvbihhKXthLmVsZW0ubm9kZVR5cGUmJmEuZWxlbS5wYXJlbnROb2RlJiYoYS5lbGVtW2EucHJvcF09YS5ub3cpfX0sbi5lYXNpbmc9e2xpbmVhcjpmdW5jdGlvbihhKXtyZXR1cm4gYX0sc3dpbmc6ZnVuY3Rpb24oYSl7cmV0dXJuLjUtTWF0aC5jb3MoYSpNYXRoLlBJKS8yfX0sbi5meD1LYi5wcm90b3R5cGUuaW5pdCxuLmZ4LnN0ZXA9e307dmFyIExiLE1iLE5iPS9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxPYj1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIitRK1wiKShbYS16JV0qKSRcIixcImlcIiksUGI9L3F1ZXVlSG9va3MkLyxRYj1bVmJdLFJiPXtcIipcIjpbZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmNyZWF0ZVR3ZWVuKGEsYiksZD1jLmN1cigpLGU9T2IuZXhlYyhiKSxmPWUmJmVbM118fChuLmNzc051bWJlclthXT9cIlwiOlwicHhcIiksZz0obi5jc3NOdW1iZXJbYV18fFwicHhcIiE9PWYmJitkKSYmT2IuZXhlYyhuLmNzcyhjLmVsZW0sYSkpLGg9MSxpPTIwO2lmKGcmJmdbM10hPT1mKXtmPWZ8fGdbM10sZT1lfHxbXSxnPStkfHwxO2RvIGg9aHx8XCIuNVwiLGcvPWgsbi5zdHlsZShjLmVsZW0sYSxnK2YpO3doaWxlKGghPT0oaD1jLmN1cigpL2QpJiYxIT09aCYmLS1pKX1yZXR1cm4gZSYmKGc9Yy5zdGFydD0rZ3x8K2R8fDAsYy51bml0PWYsYy5lbmQ9ZVsxXT9nKyhlWzFdKzEpKmVbMl06K2VbMl0pLGN9XX07ZnVuY3Rpb24gU2IoKXtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe0xiPXZvaWQgMH0pLExiPW4ubm93KCl9ZnVuY3Rpb24gVGIoYSxiKXt2YXIgYyxkPTAsZT17aGVpZ2h0OmF9O2ZvcihiPWI/MTowOzQ+ZDtkKz0yLWIpYz1SW2RdLGVbXCJtYXJnaW5cIitjXT1lW1wicGFkZGluZ1wiK2NdPWE7cmV0dXJuIGImJihlLm9wYWNpdHk9ZS53aWR0aD1hKSxlfWZ1bmN0aW9uIFViKGEsYixjKXtmb3IodmFyIGQsZT0oUmJbYl18fFtdKS5jb25jYXQoUmJbXCIqXCJdKSxmPTAsZz1lLmxlbmd0aDtnPmY7ZisrKWlmKGQ9ZVtmXS5jYWxsKGMsYixhKSlyZXR1cm4gZH1mdW5jdGlvbiBWYihhLGIsYyl7dmFyIGQsZSxmLGcsaCxpLGosayxsPXRoaXMsbT17fSxvPWEuc3R5bGUscD1hLm5vZGVUeXBlJiZTKGEpLHE9TC5nZXQoYSxcImZ4c2hvd1wiKTtjLnF1ZXVlfHwoaD1uLl9xdWV1ZUhvb2tzKGEsXCJmeFwiKSxudWxsPT1oLnVucXVldWVkJiYoaC51bnF1ZXVlZD0wLGk9aC5lbXB0eS5maXJlLGguZW1wdHkuZmlyZT1mdW5jdGlvbigpe2gudW5xdWV1ZWR8fGkoKX0pLGgudW5xdWV1ZWQrKyxsLmFsd2F5cyhmdW5jdGlvbigpe2wuYWx3YXlzKGZ1bmN0aW9uKCl7aC51bnF1ZXVlZC0tLG4ucXVldWUoYSxcImZ4XCIpLmxlbmd0aHx8aC5lbXB0eS5maXJlKCl9KX0pKSwxPT09YS5ub2RlVHlwZSYmKFwiaGVpZ2h0XCJpbiBifHxcIndpZHRoXCJpbiBiKSYmKGMub3ZlcmZsb3c9W28ub3ZlcmZsb3csby5vdmVyZmxvd1gsby5vdmVyZmxvd1ldLGo9bi5jc3MoYSxcImRpc3BsYXlcIiksaz1cIm5vbmVcIj09PWo/TC5nZXQoYSxcIm9sZGRpc3BsYXlcIil8fHRiKGEubm9kZU5hbWUpOmosXCJpbmxpbmVcIj09PWsmJlwibm9uZVwiPT09bi5jc3MoYSxcImZsb2F0XCIpJiYoby5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpKSxjLm92ZXJmbG93JiYoby5vdmVyZmxvdz1cImhpZGRlblwiLGwuYWx3YXlzKGZ1bmN0aW9uKCl7by5vdmVyZmxvdz1jLm92ZXJmbG93WzBdLG8ub3ZlcmZsb3dYPWMub3ZlcmZsb3dbMV0sby5vdmVyZmxvd1k9Yy5vdmVyZmxvd1syXX0pKTtmb3IoZCBpbiBiKWlmKGU9YltkXSxOYi5leGVjKGUpKXtpZihkZWxldGUgYltkXSxmPWZ8fFwidG9nZ2xlXCI9PT1lLGU9PT0ocD9cImhpZGVcIjpcInNob3dcIikpe2lmKFwic2hvd1wiIT09ZXx8IXF8fHZvaWQgMD09PXFbZF0pY29udGludWU7cD0hMH1tW2RdPXEmJnFbZF18fG4uc3R5bGUoYSxkKX1lbHNlIGo9dm9pZCAwO2lmKG4uaXNFbXB0eU9iamVjdChtKSlcImlubGluZVwiPT09KFwibm9uZVwiPT09aj90YihhLm5vZGVOYW1lKTpqKSYmKG8uZGlzcGxheT1qKTtlbHNle3E/XCJoaWRkZW5cImluIHEmJihwPXEuaGlkZGVuKTpxPUwuYWNjZXNzKGEsXCJmeHNob3dcIix7fSksZiYmKHEuaGlkZGVuPSFwKSxwP24oYSkuc2hvdygpOmwuZG9uZShmdW5jdGlvbigpe24oYSkuaGlkZSgpfSksbC5kb25lKGZ1bmN0aW9uKCl7dmFyIGI7TC5yZW1vdmUoYSxcImZ4c2hvd1wiKTtmb3IoYiBpbiBtKW4uc3R5bGUoYSxiLG1bYl0pfSk7Zm9yKGQgaW4gbSlnPVViKHA/cVtkXTowLGQsbCksZCBpbiBxfHwocVtkXT1nLnN0YXJ0LHAmJihnLmVuZD1nLnN0YXJ0LGcuc3RhcnQ9XCJ3aWR0aFwiPT09ZHx8XCJoZWlnaHRcIj09PWQ/MTowKSl9fWZ1bmN0aW9uIFdiKGEsYil7dmFyIGMsZCxlLGYsZztmb3IoYyBpbiBhKWlmKGQ9bi5jYW1lbENhc2UoYyksZT1iW2RdLGY9YVtjXSxuLmlzQXJyYXkoZikmJihlPWZbMV0sZj1hW2NdPWZbMF0pLGMhPT1kJiYoYVtkXT1mLGRlbGV0ZSBhW2NdKSxnPW4uY3NzSG9va3NbZF0sZyYmXCJleHBhbmRcImluIGcpe2Y9Zy5leHBhbmQoZiksZGVsZXRlIGFbZF07Zm9yKGMgaW4gZiljIGluIGF8fChhW2NdPWZbY10sYltjXT1lKX1lbHNlIGJbZF09ZX1mdW5jdGlvbiBYYihhLGIsYyl7dmFyIGQsZSxmPTAsZz1RYi5sZW5ndGgsaD1uLkRlZmVycmVkKCkuYWx3YXlzKGZ1bmN0aW9uKCl7ZGVsZXRlIGkuZWxlbX0pLGk9ZnVuY3Rpb24oKXtpZihlKXJldHVybiExO2Zvcih2YXIgYj1MYnx8U2IoKSxjPU1hdGgubWF4KDAsai5zdGFydFRpbWUrai5kdXJhdGlvbi1iKSxkPWMvai5kdXJhdGlvbnx8MCxmPTEtZCxnPTAsaT1qLnR3ZWVucy5sZW5ndGg7aT5nO2crKylqLnR3ZWVuc1tnXS5ydW4oZik7cmV0dXJuIGgubm90aWZ5V2l0aChhLFtqLGYsY10pLDE+ZiYmaT9jOihoLnJlc29sdmVXaXRoKGEsW2pdKSwhMSl9LGo9aC5wcm9taXNlKHtlbGVtOmEscHJvcHM6bi5leHRlbmQoe30sYiksb3B0czpuLmV4dGVuZCghMCx7c3BlY2lhbEVhc2luZzp7fX0sYyksb3JpZ2luYWxQcm9wZXJ0aWVzOmIsb3JpZ2luYWxPcHRpb25zOmMsc3RhcnRUaW1lOkxifHxTYigpLGR1cmF0aW9uOmMuZHVyYXRpb24sdHdlZW5zOltdLGNyZWF0ZVR3ZWVuOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9bi5Ud2VlbihhLGoub3B0cyxiLGMsai5vcHRzLnNwZWNpYWxFYXNpbmdbYl18fGoub3B0cy5lYXNpbmcpO3JldHVybiBqLnR3ZWVucy5wdXNoKGQpLGR9LHN0b3A6ZnVuY3Rpb24oYil7dmFyIGM9MCxkPWI/ai50d2VlbnMubGVuZ3RoOjA7aWYoZSlyZXR1cm4gdGhpcztmb3IoZT0hMDtkPmM7YysrKWoudHdlZW5zW2NdLnJ1bigxKTtyZXR1cm4gYj9oLnJlc29sdmVXaXRoKGEsW2osYl0pOmgucmVqZWN0V2l0aChhLFtqLGJdKSx0aGlzfX0pLGs9ai5wcm9wcztmb3IoV2IoayxqLm9wdHMuc3BlY2lhbEVhc2luZyk7Zz5mO2YrKylpZihkPVFiW2ZdLmNhbGwoaixhLGssai5vcHRzKSlyZXR1cm4gZDtyZXR1cm4gbi5tYXAoayxVYixqKSxuLmlzRnVuY3Rpb24oai5vcHRzLnN0YXJ0KSYmai5vcHRzLnN0YXJ0LmNhbGwoYSxqKSxuLmZ4LnRpbWVyKG4uZXh0ZW5kKGkse2VsZW06YSxhbmltOmoscXVldWU6ai5vcHRzLnF1ZXVlfSkpLGoucHJvZ3Jlc3Moai5vcHRzLnByb2dyZXNzKS5kb25lKGoub3B0cy5kb25lLGoub3B0cy5jb21wbGV0ZSkuZmFpbChqLm9wdHMuZmFpbCkuYWx3YXlzKGoub3B0cy5hbHdheXMpfW4uQW5pbWF0aW9uPW4uZXh0ZW5kKFhiLHt0d2VlbmVyOmZ1bmN0aW9uKGEsYil7bi5pc0Z1bmN0aW9uKGEpPyhiPWEsYT1bXCIqXCJdKTphPWEuc3BsaXQoXCIgXCIpO2Zvcih2YXIgYyxkPTAsZT1hLmxlbmd0aDtlPmQ7ZCsrKWM9YVtkXSxSYltjXT1SYltjXXx8W10sUmJbY10udW5zaGlmdChiKX0scHJlZmlsdGVyOmZ1bmN0aW9uKGEsYil7Yj9RYi51bnNoaWZ0KGEpOlFiLnB1c2goYSl9fSksbi5zcGVlZD1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YSYmXCJvYmplY3RcIj09dHlwZW9mIGE/bi5leHRlbmQoe30sYSk6e2NvbXBsZXRlOmN8fCFjJiZifHxuLmlzRnVuY3Rpb24oYSkmJmEsZHVyYXRpb246YSxlYXNpbmc6YyYmYnx8YiYmIW4uaXNGdW5jdGlvbihiKSYmYn07cmV0dXJuIGQuZHVyYXRpb249bi5meC5vZmY/MDpcIm51bWJlclwiPT10eXBlb2YgZC5kdXJhdGlvbj9kLmR1cmF0aW9uOmQuZHVyYXRpb24gaW4gbi5meC5zcGVlZHM/bi5meC5zcGVlZHNbZC5kdXJhdGlvbl06bi5meC5zcGVlZHMuX2RlZmF1bHQsKG51bGw9PWQucXVldWV8fGQucXVldWU9PT0hMCkmJihkLnF1ZXVlPVwiZnhcIiksZC5vbGQ9ZC5jb21wbGV0ZSxkLmNvbXBsZXRlPWZ1bmN0aW9uKCl7bi5pc0Z1bmN0aW9uKGQub2xkKSYmZC5vbGQuY2FsbCh0aGlzKSxkLnF1ZXVlJiZuLmRlcXVldWUodGhpcyxkLnF1ZXVlKX0sZH0sbi5mbi5leHRlbmQoe2ZhZGVUbzpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5maWx0ZXIoUykuY3NzKFwib3BhY2l0eVwiLDApLnNob3coKS5lbmQoKS5hbmltYXRlKHtvcGFjaXR5OmJ9LGEsYyxkKX0sYW5pbWF0ZTpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1uLmlzRW1wdHlPYmplY3QoYSksZj1uLnNwZWVkKGIsYyxkKSxnPWZ1bmN0aW9uKCl7dmFyIGI9WGIodGhpcyxuLmV4dGVuZCh7fSxhKSxmKTsoZXx8TC5nZXQodGhpcyxcImZpbmlzaFwiKSkmJmIuc3RvcCghMCl9O3JldHVybiBnLmZpbmlzaD1nLGV8fGYucXVldWU9PT0hMT90aGlzLmVhY2goZyk6dGhpcy5xdWV1ZShmLnF1ZXVlLGcpfSxzdG9wOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1mdW5jdGlvbihhKXt2YXIgYj1hLnN0b3A7ZGVsZXRlIGEuc3RvcCxiKGMpfTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgYSYmKGM9YixiPWEsYT12b2lkIDApLGImJmEhPT0hMSYmdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiPSEwLGU9bnVsbCE9YSYmYStcInF1ZXVlSG9va3NcIixmPW4udGltZXJzLGc9TC5nZXQodGhpcyk7aWYoZSlnW2VdJiZnW2VdLnN0b3AmJmQoZ1tlXSk7ZWxzZSBmb3IoZSBpbiBnKWdbZV0mJmdbZV0uc3RvcCYmUGIudGVzdChlKSYmZChnW2VdKTtmb3IoZT1mLmxlbmd0aDtlLS07KWZbZV0uZWxlbSE9PXRoaXN8fG51bGwhPWEmJmZbZV0ucXVldWUhPT1hfHwoZltlXS5hbmltLnN0b3AoYyksYj0hMSxmLnNwbGljZShlLDEpKTsoYnx8IWMpJiZuLmRlcXVldWUodGhpcyxhKX0pfSxmaW5pc2g6ZnVuY3Rpb24oYSl7cmV0dXJuIGEhPT0hMSYmKGE9YXx8XCJmeFwiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYixjPUwuZ2V0KHRoaXMpLGQ9Y1thK1wicXVldWVcIl0sZT1jW2ErXCJxdWV1ZUhvb2tzXCJdLGY9bi50aW1lcnMsZz1kP2QubGVuZ3RoOjA7Zm9yKGMuZmluaXNoPSEwLG4ucXVldWUodGhpcyxhLFtdKSxlJiZlLnN0b3AmJmUuc3RvcC5jYWxsKHRoaXMsITApLGI9Zi5sZW5ndGg7Yi0tOylmW2JdLmVsZW09PT10aGlzJiZmW2JdLnF1ZXVlPT09YSYmKGZbYl0uYW5pbS5zdG9wKCEwKSxmLnNwbGljZShiLDEpKTtmb3IoYj0wO2c+YjtiKyspZFtiXSYmZFtiXS5maW5pc2gmJmRbYl0uZmluaXNoLmNhbGwodGhpcyk7ZGVsZXRlIGMuZmluaXNofSl9fSksbi5lYWNoKFtcInRvZ2dsZVwiLFwic2hvd1wiLFwiaGlkZVwiXSxmdW5jdGlvbihhLGIpe3ZhciBjPW4uZm5bYl07bi5mbltiXT1mdW5jdGlvbihhLGQsZSl7cmV0dXJuIG51bGw9PWF8fFwiYm9vbGVhblwiPT10eXBlb2YgYT9jLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp0aGlzLmFuaW1hdGUoVGIoYiwhMCksYSxkLGUpfX0pLG4uZWFjaCh7c2xpZGVEb3duOlRiKFwic2hvd1wiKSxzbGlkZVVwOlRiKFwiaGlkZVwiKSxzbGlkZVRvZ2dsZTpUYihcInRvZ2dsZVwiKSxmYWRlSW46e29wYWNpdHk6XCJzaG93XCJ9LGZhZGVPdXQ6e29wYWNpdHk6XCJoaWRlXCJ9LGZhZGVUb2dnbGU6e29wYWNpdHk6XCJ0b2dnbGVcIn19LGZ1bmN0aW9uKGEsYil7bi5mblthXT1mdW5jdGlvbihhLGMsZCl7cmV0dXJuIHRoaXMuYW5pbWF0ZShiLGEsYyxkKX19KSxuLnRpbWVycz1bXSxuLmZ4LnRpY2s9ZnVuY3Rpb24oKXt2YXIgYSxiPTAsYz1uLnRpbWVycztmb3IoTGI9bi5ub3coKTtiPGMubGVuZ3RoO2IrKylhPWNbYl0sYSgpfHxjW2JdIT09YXx8Yy5zcGxpY2UoYi0tLDEpO2MubGVuZ3RofHxuLmZ4LnN0b3AoKSxMYj12b2lkIDB9LG4uZngudGltZXI9ZnVuY3Rpb24oYSl7bi50aW1lcnMucHVzaChhKSxhKCk/bi5meC5zdGFydCgpOm4udGltZXJzLnBvcCgpfSxuLmZ4LmludGVydmFsPTEzLG4uZnguc3RhcnQ9ZnVuY3Rpb24oKXtNYnx8KE1iPXNldEludGVydmFsKG4uZngudGljayxuLmZ4LmludGVydmFsKSl9LG4uZnguc3RvcD1mdW5jdGlvbigpe2NsZWFySW50ZXJ2YWwoTWIpLE1iPW51bGx9LG4uZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LG4uZm4uZGVsYXk9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1uLmZ4P24uZnguc3BlZWRzW2FdfHxhOmEsYj1ifHxcImZ4XCIsdGhpcy5xdWV1ZShiLGZ1bmN0aW9uKGIsYyl7dmFyIGQ9c2V0VGltZW91dChiLGEpO2Muc3RvcD1mdW5jdGlvbigpe2NsZWFyVGltZW91dChkKX19KX0sZnVuY3Rpb24oKXt2YXIgYT1sLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxiPWwuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSxjPWIuYXBwZW5kQ2hpbGQobC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKTthLnR5cGU9XCJjaGVja2JveFwiLGsuY2hlY2tPbj1cIlwiIT09YS52YWx1ZSxrLm9wdFNlbGVjdGVkPWMuc2VsZWN0ZWQsYi5kaXNhYmxlZD0hMCxrLm9wdERpc2FibGVkPSFjLmRpc2FibGVkLGE9bC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYS52YWx1ZT1cInRcIixhLnR5cGU9XCJyYWRpb1wiLGsucmFkaW9WYWx1ZT1cInRcIj09PWEudmFsdWV9KCk7dmFyIFliLFpiLCRiPW4uZXhwci5hdHRySGFuZGxlO24uZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIEoodGhpcyxuLmF0dHIsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24ucmVtb3ZlQXR0cih0aGlzLGEpfSl9fSksbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLm5vZGVUeXBlO2lmKGEmJjMhPT1mJiY4IT09ZiYmMiE9PWYpcmV0dXJuIHR5cGVvZiBhLmdldEF0dHJpYnV0ZT09PVU/bi5wcm9wKGEsYixjKTooMT09PWYmJm4uaXNYTUxEb2MoYSl8fChiPWIudG9Mb3dlckNhc2UoKSxkPW4uYXR0ckhvb2tzW2JdfHwobi5leHByLm1hdGNoLmJvb2wudGVzdChiKT9aYjpZYikpLHZvaWQgMD09PWM/ZCYmXCJnZXRcImluIGQmJm51bGwhPT0oZT1kLmdldChhLGIpKT9lOihlPW4uZmluZC5hdHRyKGEsYiksbnVsbD09ZT92b2lkIDA6ZSk6bnVsbCE9PWM/ZCYmXCJzZXRcImluIGQmJnZvaWQgMCE9PShlPWQuc2V0KGEsYyxiKSk/ZTooYS5zZXRBdHRyaWJ1dGUoYixjK1wiXCIpLGMpOnZvaWQgbi5yZW1vdmVBdHRyKGEsYikpXG59LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9MCxmPWImJmIubWF0Y2goRSk7aWYoZiYmMT09PWEubm9kZVR5cGUpd2hpbGUoYz1mW2UrK10pZD1uLnByb3BGaXhbY118fGMsbi5leHByLm1hdGNoLmJvb2wudGVzdChjKSYmKGFbZF09ITEpLGEucmVtb3ZlQXR0cmlidXRlKGMpfSxhdHRySG9va3M6e3R5cGU6e3NldDpmdW5jdGlvbihhLGIpe2lmKCFrLnJhZGlvVmFsdWUmJlwicmFkaW9cIj09PWImJm4ubm9kZU5hbWUoYSxcImlucHV0XCIpKXt2YXIgYz1hLnZhbHVlO3JldHVybiBhLnNldEF0dHJpYnV0ZShcInR5cGVcIixiKSxjJiYoYS52YWx1ZT1jKSxifX19fX0pLFpiPXtzZXQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBiPT09ITE/bi5yZW1vdmVBdHRyKGEsYyk6YS5zZXRBdHRyaWJ1dGUoYyxjKSxjfX0sbi5lYWNoKG4uZXhwci5tYXRjaC5ib29sLnNvdXJjZS5tYXRjaCgvXFx3Ky9nKSxmdW5jdGlvbihhLGIpe3ZhciBjPSRiW2JdfHxuLmZpbmQuYXR0cjskYltiXT1mdW5jdGlvbihhLGIsZCl7dmFyIGUsZjtyZXR1cm4gZHx8KGY9JGJbYl0sJGJbYl09ZSxlPW51bGwhPWMoYSxiLGQpP2IudG9Mb3dlckNhc2UoKTpudWxsLCRiW2JdPWYpLGV9fSk7dmFyIF9iPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2k7bi5mbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gSih0aGlzLG4ucHJvcCxhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXNbbi5wcm9wRml4W2FdfHxhXX0pfX0pLG4uZXh0ZW5kKHtwcm9wRml4OntcImZvclwiOlwiaHRtbEZvclwiLFwiY2xhc3NcIjpcImNsYXNzTmFtZVwifSxwcm9wOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZz1hLm5vZGVUeXBlO2lmKGEmJjMhPT1nJiY4IT09ZyYmMiE9PWcpcmV0dXJuIGY9MSE9PWd8fCFuLmlzWE1MRG9jKGEpLGYmJihiPW4ucHJvcEZpeFtiXXx8YixlPW4ucHJvcEhvb2tzW2JdKSx2b2lkIDAhPT1jP2UmJlwic2V0XCJpbiBlJiZ2b2lkIDAhPT0oZD1lLnNldChhLGMsYikpP2Q6YVtiXT1jOmUmJlwiZ2V0XCJpbiBlJiZudWxsIT09KGQ9ZS5nZXQoYSxiKSk/ZDphW2JdfSxwcm9wSG9va3M6e3RhYkluZGV4OntnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuaGFzQXR0cmlidXRlKFwidGFiaW5kZXhcIil8fF9iLnRlc3QoYS5ub2RlTmFtZSl8fGEuaHJlZj9hLnRhYkluZGV4Oi0xfX19fSksay5vcHRTZWxlY3RlZHx8KG4ucHJvcEhvb2tzLnNlbGVjdGVkPXtnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiZiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LG51bGx9fSksbi5lYWNoKFtcInRhYkluZGV4XCIsXCJyZWFkT25seVwiLFwibWF4TGVuZ3RoXCIsXCJjZWxsU3BhY2luZ1wiLFwiY2VsbFBhZGRpbmdcIixcInJvd1NwYW5cIixcImNvbFNwYW5cIixcInVzZU1hcFwiLFwiZnJhbWVCb3JkZXJcIixcImNvbnRlbnRFZGl0YWJsZVwiXSxmdW5jdGlvbigpe24ucHJvcEZpeFt0aGlzLnRvTG93ZXJDYXNlKCldPXRoaXN9KTt2YXIgYWM9L1tcXHRcXHJcXG5cXGZdL2c7bi5mbi5leHRlbmQoe2FkZENsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoPVwic3RyaW5nXCI9PXR5cGVvZiBhJiZhLGk9MCxqPXRoaXMubGVuZ3RoO2lmKG4uaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykuYWRkQ2xhc3MoYS5jYWxsKHRoaXMsYix0aGlzLmNsYXNzTmFtZSkpfSk7aWYoaClmb3IoYj0oYXx8XCJcIikubWF0Y2goRSl8fFtdO2o+aTtpKyspaWYoYz10aGlzW2ldLGQ9MT09PWMubm9kZVR5cGUmJihjLmNsYXNzTmFtZT8oXCIgXCIrYy5jbGFzc05hbWUrXCIgXCIpLnJlcGxhY2UoYWMsXCIgXCIpOlwiIFwiKSl7Zj0wO3doaWxlKGU9YltmKytdKWQuaW5kZXhPZihcIiBcIitlK1wiIFwiKTwwJiYoZCs9ZStcIiBcIik7Zz1uLnRyaW0oZCksYy5jbGFzc05hbWUhPT1nJiYoYy5jbGFzc05hbWU9Zyl9cmV0dXJuIHRoaXN9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoPTA9PT1hcmd1bWVudHMubGVuZ3RofHxcInN0cmluZ1wiPT10eXBlb2YgYSYmYSxpPTAsaj10aGlzLmxlbmd0aDtpZihuLmlzRnVuY3Rpb24oYSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLnJlbW92ZUNsYXNzKGEuY2FsbCh0aGlzLGIsdGhpcy5jbGFzc05hbWUpKX0pO2lmKGgpZm9yKGI9KGF8fFwiXCIpLm1hdGNoKEUpfHxbXTtqPmk7aSsrKWlmKGM9dGhpc1tpXSxkPTE9PT1jLm5vZGVUeXBlJiYoYy5jbGFzc05hbWU/KFwiIFwiK2MuY2xhc3NOYW1lK1wiIFwiKS5yZXBsYWNlKGFjLFwiIFwiKTpcIlwiKSl7Zj0wO3doaWxlKGU9YltmKytdKXdoaWxlKGQuaW5kZXhPZihcIiBcIitlK1wiIFwiKT49MClkPWQucmVwbGFjZShcIiBcIitlK1wiIFwiLFwiIFwiKTtnPWE/bi50cmltKGQpOlwiXCIsYy5jbGFzc05hbWUhPT1nJiYoYy5jbGFzc05hbWU9Zyl9cmV0dXJuIHRoaXN9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGEsYil7dmFyIGM9dHlwZW9mIGE7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBiJiZcInN0cmluZ1wiPT09Yz9iP3RoaXMuYWRkQ2xhc3MoYSk6dGhpcy5yZW1vdmVDbGFzcyhhKTp0aGlzLmVhY2gobi5pc0Z1bmN0aW9uKGEpP2Z1bmN0aW9uKGMpe24odGhpcykudG9nZ2xlQ2xhc3MoYS5jYWxsKHRoaXMsYyx0aGlzLmNsYXNzTmFtZSxiKSxiKX06ZnVuY3Rpb24oKXtpZihcInN0cmluZ1wiPT09Yyl7dmFyIGIsZD0wLGU9bih0aGlzKSxmPWEubWF0Y2goRSl8fFtdO3doaWxlKGI9ZltkKytdKWUuaGFzQ2xhc3MoYik/ZS5yZW1vdmVDbGFzcyhiKTplLmFkZENsYXNzKGIpfWVsc2UoYz09PVV8fFwiYm9vbGVhblwiPT09YykmJih0aGlzLmNsYXNzTmFtZSYmTC5zZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIix0aGlzLmNsYXNzTmFtZSksdGhpcy5jbGFzc05hbWU9dGhpcy5jbGFzc05hbWV8fGE9PT0hMT9cIlwiOkwuZ2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIpfHxcIlwiKX0pfSxoYXNDbGFzczpmdW5jdGlvbihhKXtmb3IodmFyIGI9XCIgXCIrYStcIiBcIixjPTAsZD10aGlzLmxlbmd0aDtkPmM7YysrKWlmKDE9PT10aGlzW2NdLm5vZGVUeXBlJiYoXCIgXCIrdGhpc1tjXS5jbGFzc05hbWUrXCIgXCIpLnJlcGxhY2UoYWMsXCIgXCIpLmluZGV4T2YoYik+PTApcmV0dXJuITA7cmV0dXJuITF9fSk7dmFyIGJjPS9cXHIvZztuLmZuLmV4dGVuZCh7dmFsOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlPXRoaXNbMF07e2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGQ9bi5pc0Z1bmN0aW9uKGEpLHRoaXMuZWFjaChmdW5jdGlvbihjKXt2YXIgZTsxPT09dGhpcy5ub2RlVHlwZSYmKGU9ZD9hLmNhbGwodGhpcyxjLG4odGhpcykudmFsKCkpOmEsbnVsbD09ZT9lPVwiXCI6XCJudW1iZXJcIj09dHlwZW9mIGU/ZSs9XCJcIjpuLmlzQXJyYXkoZSkmJihlPW4ubWFwKGUsZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjphK1wiXCJ9KSksYj1uLnZhbEhvb2tzW3RoaXMudHlwZV18fG4udmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcInNldFwiaW4gYiYmdm9pZCAwIT09Yi5zZXQodGhpcyxlLFwidmFsdWVcIil8fCh0aGlzLnZhbHVlPWUpKX0pO2lmKGUpcmV0dXJuIGI9bi52YWxIb29rc1tlLnR5cGVdfHxuLnZhbEhvb2tzW2Uubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJnZXRcImluIGImJnZvaWQgMCE9PShjPWIuZ2V0KGUsXCJ2YWx1ZVwiKSk/YzooYz1lLnZhbHVlLFwic3RyaW5nXCI9PXR5cGVvZiBjP2MucmVwbGFjZShiYyxcIlwiKTpudWxsPT1jP1wiXCI6Yyl9fX0pLG4uZXh0ZW5kKHt2YWxIb29rczp7b3B0aW9uOntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9bi5maW5kLmF0dHIoYSxcInZhbHVlXCIpO3JldHVybiBudWxsIT1iP2I6bi50cmltKG4udGV4dChhKSl9fSxzZWxlY3Q6e2dldDpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkPWEub3B0aW9ucyxlPWEuc2VsZWN0ZWRJbmRleCxmPVwic2VsZWN0LW9uZVwiPT09YS50eXBlfHwwPmUsZz1mP251bGw6W10saD1mP2UrMTpkLmxlbmd0aCxpPTA+ZT9oOmY/ZTowO2g+aTtpKyspaWYoYz1kW2ldLCEoIWMuc2VsZWN0ZWQmJmkhPT1lfHwoay5vcHREaXNhYmxlZD9jLmRpc2FibGVkOm51bGwhPT1jLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpKXx8Yy5wYXJlbnROb2RlLmRpc2FibGVkJiZuLm5vZGVOYW1lKGMucGFyZW50Tm9kZSxcIm9wdGdyb3VwXCIpKSl7aWYoYj1uKGMpLnZhbCgpLGYpcmV0dXJuIGI7Zy5wdXNoKGIpfXJldHVybiBnfSxzZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9YS5vcHRpb25zLGY9bi5tYWtlQXJyYXkoYiksZz1lLmxlbmd0aDt3aGlsZShnLS0pZD1lW2ddLChkLnNlbGVjdGVkPW4uaW5BcnJheShkLnZhbHVlLGYpPj0wKSYmKGM9ITApO3JldHVybiBjfHwoYS5zZWxlY3RlZEluZGV4PS0xKSxmfX19fSksbi5lYWNoKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSxmdW5jdGlvbigpe24udmFsSG9va3NbdGhpc109e3NldDpmdW5jdGlvbihhLGIpe3JldHVybiBuLmlzQXJyYXkoYik/YS5jaGVja2VkPW4uaW5BcnJheShuKGEpLnZhbCgpLGIpPj0wOnZvaWQgMH19LGsuY2hlY2tPbnx8KG4udmFsSG9va3NbdGhpc10uZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT09YS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKT9cIm9uXCI6YS52YWx1ZX0pfSksbi5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IGxvYWQgcmVzaXplIHNjcm9sbCB1bmxvYWQgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBlcnJvciBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe24uZm5bYl09ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4wP3RoaXMub24oYixudWxsLGEsYyk6dGhpcy50cmlnZ2VyKGIpfX0pLG4uZm4uZXh0ZW5kKHtob3ZlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm1vdXNlZW50ZXIoYSkubW91c2VsZWF2ZShifHxhKX0sYmluZDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMub24oYSxudWxsLGIsYyl9LHVuYmluZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm9mZihhLG51bGwsYil9LGRlbGVnYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLm9uKGIsYSxjLGQpfSx1bmRlbGVnYXRlOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gMT09PWFyZ3VtZW50cy5sZW5ndGg/dGhpcy5vZmYoYSxcIioqXCIpOnRoaXMub2ZmKGIsYXx8XCIqKlwiLGMpfX0pO3ZhciBjYz1uLm5vdygpLGRjPS9cXD8vO24ucGFyc2VKU09OPWZ1bmN0aW9uKGEpe3JldHVybiBKU09OLnBhcnNlKGErXCJcIil9LG4ucGFyc2VYTUw9ZnVuY3Rpb24oYSl7dmFyIGIsYztpZighYXx8XCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIG51bGw7dHJ5e2M9bmV3IERPTVBhcnNlcixiPWMucGFyc2VGcm9tU3RyaW5nKGEsXCJ0ZXh0L3htbFwiKX1jYXRjaChkKXtiPXZvaWQgMH1yZXR1cm4oIWJ8fGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGgpJiZuLmVycm9yKFwiSW52YWxpZCBYTUw6IFwiK2EpLGJ9O3ZhciBlYyxmYyxnYz0vIy4qJC8saGM9LyhbPyZdKV89W14mXSovLGljPS9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKSQvZ20samM9L14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8sa2M9L14oPzpHRVR8SEVBRCkkLyxsYz0vXlxcL1xcLy8sbWM9L14oW1xcdy4rLV0rOikoPzpcXC9cXC8oPzpbXlxcLz8jXSpAfCkoW15cXC8/IzpdKikoPzo6KFxcZCspfCl8KS8sbmM9e30sb2M9e30scGM9XCIqL1wiLmNvbmNhdChcIipcIik7dHJ5e2ZjPWxvY2F0aW9uLmhyZWZ9Y2F0Y2gocWMpe2ZjPWwuY3JlYXRlRWxlbWVudChcImFcIiksZmMuaHJlZj1cIlwiLGZjPWZjLmhyZWZ9ZWM9bWMuZXhlYyhmYy50b0xvd2VyQ2FzZSgpKXx8W107ZnVuY3Rpb24gcmMoYSl7cmV0dXJuIGZ1bmN0aW9uKGIsYyl7XCJzdHJpbmdcIiE9dHlwZW9mIGImJihjPWIsYj1cIipcIik7dmFyIGQsZT0wLGY9Yi50b0xvd2VyQ2FzZSgpLm1hdGNoKEUpfHxbXTtpZihuLmlzRnVuY3Rpb24oYykpd2hpbGUoZD1mW2UrK10pXCIrXCI9PT1kWzBdPyhkPWQuc2xpY2UoMSl8fFwiKlwiLChhW2RdPWFbZF18fFtdKS51bnNoaWZ0KGMpKTooYVtkXT1hW2RdfHxbXSkucHVzaChjKX19ZnVuY3Rpb24gc2MoYSxiLGMsZCl7dmFyIGU9e30sZj1hPT09b2M7ZnVuY3Rpb24gZyhoKXt2YXIgaTtyZXR1cm4gZVtoXT0hMCxuLmVhY2goYVtoXXx8W10sZnVuY3Rpb24oYSxoKXt2YXIgaj1oKGIsYyxkKTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2Yganx8Znx8ZVtqXT9mPyEoaT1qKTp2b2lkIDA6KGIuZGF0YVR5cGVzLnVuc2hpZnQoaiksZyhqKSwhMSl9KSxpfXJldHVybiBnKGIuZGF0YVR5cGVzWzBdKXx8IWVbXCIqXCJdJiZnKFwiKlwiKX1mdW5jdGlvbiB0YyhhLGIpe3ZhciBjLGQsZT1uLmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9uc3x8e307Zm9yKGMgaW4gYil2b2lkIDAhPT1iW2NdJiYoKGVbY10/YTpkfHwoZD17fSkpW2NdPWJbY10pO3JldHVybiBkJiZuLmV4dGVuZCghMCxhLGQpLGF9ZnVuY3Rpb24gdWMoYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5jb250ZW50cyxpPWEuZGF0YVR5cGVzO3doaWxlKFwiKlwiPT09aVswXSlpLnNoaWZ0KCksdm9pZCAwPT09ZCYmKGQ9YS5taW1lVHlwZXx8Yi5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKSk7aWYoZClmb3IoZSBpbiBoKWlmKGhbZV0mJmhbZV0udGVzdChkKSl7aS51bnNoaWZ0KGUpO2JyZWFrfWlmKGlbMF1pbiBjKWY9aVswXTtlbHNle2ZvcihlIGluIGMpe2lmKCFpWzBdfHxhLmNvbnZlcnRlcnNbZStcIiBcIitpWzBdXSl7Zj1lO2JyZWFrfWd8fChnPWUpfWY9Znx8Z31yZXR1cm4gZj8oZiE9PWlbMF0mJmkudW5zaGlmdChmKSxjW2ZdKTp2b2lkIDB9ZnVuY3Rpb24gdmMoYSxiLGMsZCl7dmFyIGUsZixnLGgsaSxqPXt9LGs9YS5kYXRhVHlwZXMuc2xpY2UoKTtpZihrWzFdKWZvcihnIGluIGEuY29udmVydGVycylqW2cudG9Mb3dlckNhc2UoKV09YS5jb252ZXJ0ZXJzW2ddO2Y9ay5zaGlmdCgpO3doaWxlKGYpaWYoYS5yZXNwb25zZUZpZWxkc1tmXSYmKGNbYS5yZXNwb25zZUZpZWxkc1tmXV09YiksIWkmJmQmJmEuZGF0YUZpbHRlciYmKGI9YS5kYXRhRmlsdGVyKGIsYS5kYXRhVHlwZSkpLGk9ZixmPWsuc2hpZnQoKSlpZihcIipcIj09PWYpZj1pO2Vsc2UgaWYoXCIqXCIhPT1pJiZpIT09Zil7aWYoZz1qW2krXCIgXCIrZl18fGpbXCIqIFwiK2ZdLCFnKWZvcihlIGluIGopaWYoaD1lLnNwbGl0KFwiIFwiKSxoWzFdPT09ZiYmKGc9altpK1wiIFwiK2hbMF1dfHxqW1wiKiBcIitoWzBdXSkpe2c9PT0hMD9nPWpbZV06altlXSE9PSEwJiYoZj1oWzBdLGsudW5zaGlmdChoWzFdKSk7YnJlYWt9aWYoZyE9PSEwKWlmKGcmJmFbXCJ0aHJvd3NcIl0pYj1nKGIpO2Vsc2UgdHJ5e2I9ZyhiKX1jYXRjaChsKXtyZXR1cm57c3RhdGU6XCJwYXJzZXJlcnJvclwiLGVycm9yOmc/bDpcIk5vIGNvbnZlcnNpb24gZnJvbSBcIitpK1wiIHRvIFwiK2Z9fX1yZXR1cm57c3RhdGU6XCJzdWNjZXNzXCIsZGF0YTpifX1uLmV4dGVuZCh7YWN0aXZlOjAsbGFzdE1vZGlmaWVkOnt9LGV0YWc6e30sYWpheFNldHRpbmdzOnt1cmw6ZmMsdHlwZTpcIkdFVFwiLGlzTG9jYWw6amMudGVzdChlY1sxXSksZ2xvYmFsOiEwLHByb2Nlc3NEYXRhOiEwLGFzeW5jOiEwLGNvbnRlbnRUeXBlOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsYWNjZXB0czp7XCIqXCI6cGMsdGV4dDpcInRleHQvcGxhaW5cIixodG1sOlwidGV4dC9odG1sXCIseG1sOlwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIn0sY29udGVudHM6e3htbDoveG1sLyxodG1sOi9odG1sLyxqc29uOi9qc29uL30scmVzcG9uc2VGaWVsZHM6e3htbDpcInJlc3BvbnNlWE1MXCIsdGV4dDpcInJlc3BvbnNlVGV4dFwiLGpzb246XCJyZXNwb25zZUpTT05cIn0sY29udmVydGVyczp7XCIqIHRleHRcIjpTdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOm4ucGFyc2VKU09OLFwidGV4dCB4bWxcIjpuLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj90Yyh0YyhhLG4uYWpheFNldHRpbmdzKSxiKTp0YyhuLmFqYXhTZXR0aW5ncyxhKX0sYWpheFByZWZpbHRlcjpyYyhuYyksYWpheFRyYW5zcG9ydDpyYyhvYyksYWpheDpmdW5jdGlvbihhLGIpe1wib2JqZWN0XCI9PXR5cGVvZiBhJiYoYj1hLGE9dm9pZCAwKSxiPWJ8fHt9O3ZhciBjLGQsZSxmLGcsaCxpLGosaz1uLmFqYXhTZXR1cCh7fSxiKSxsPWsuY29udGV4dHx8ayxtPWsuY29udGV4dCYmKGwubm9kZVR5cGV8fGwuanF1ZXJ5KT9uKGwpOm4uZXZlbnQsbz1uLkRlZmVycmVkKCkscD1uLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHE9ay5zdGF0dXNDb2RlfHx7fSxyPXt9LHM9e30sdD0wLHU9XCJjYW5jZWxlZFwiLHY9e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihhKXt2YXIgYjtpZigyPT09dCl7aWYoIWYpe2Y9e307d2hpbGUoYj1pYy5leGVjKGUpKWZbYlsxXS50b0xvd2VyQ2FzZSgpXT1iWzJdfWI9ZlthLnRvTG93ZXJDYXNlKCldfXJldHVybiBudWxsPT1iP251bGw6Yn0sZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOmZ1bmN0aW9uKCl7cmV0dXJuIDI9PT10P2U6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihhLGIpe3ZhciBjPWEudG9Mb3dlckNhc2UoKTtyZXR1cm4gdHx8KGE9c1tjXT1zW2NdfHxhLHJbYV09YiksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gdHx8KGsubWltZVR5cGU9YSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihhKXt2YXIgYjtpZihhKWlmKDI+dClmb3IoYiBpbiBhKXFbYl09W3FbYl0sYVtiXV07ZWxzZSB2LmFsd2F5cyhhW3Yuc3RhdHVzXSk7cmV0dXJuIHRoaXN9LGFib3J0OmZ1bmN0aW9uKGEpe3ZhciBiPWF8fHU7cmV0dXJuIGMmJmMuYWJvcnQoYikseCgwLGIpLHRoaXN9fTtpZihvLnByb21pc2UodikuY29tcGxldGU9cC5hZGQsdi5zdWNjZXNzPXYuZG9uZSx2LmVycm9yPXYuZmFpbCxrLnVybD0oKGF8fGsudXJsfHxmYykrXCJcIikucmVwbGFjZShnYyxcIlwiKS5yZXBsYWNlKGxjLGVjWzFdK1wiLy9cIiksay50eXBlPWIubWV0aG9kfHxiLnR5cGV8fGsubWV0aG9kfHxrLnR5cGUsay5kYXRhVHlwZXM9bi50cmltKGsuZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKEUpfHxbXCJcIl0sbnVsbD09ay5jcm9zc0RvbWFpbiYmKGg9bWMuZXhlYyhrLnVybC50b0xvd2VyQ2FzZSgpKSxrLmNyb3NzRG9tYWluPSEoIWh8fGhbMV09PT1lY1sxXSYmaFsyXT09PWVjWzJdJiYoaFszXXx8KFwiaHR0cDpcIj09PWhbMV0/XCI4MFwiOlwiNDQzXCIpKT09PShlY1szXXx8KFwiaHR0cDpcIj09PWVjWzFdP1wiODBcIjpcIjQ0M1wiKSkpKSxrLmRhdGEmJmsucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiBrLmRhdGEmJihrLmRhdGE9bi5wYXJhbShrLmRhdGEsay50cmFkaXRpb25hbCkpLHNjKG5jLGssYix2KSwyPT09dClyZXR1cm4gdjtpPWsuZ2xvYmFsLGkmJjA9PT1uLmFjdGl2ZSsrJiZuLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIiksay50eXBlPWsudHlwZS50b1VwcGVyQ2FzZSgpLGsuaGFzQ29udGVudD0ha2MudGVzdChrLnR5cGUpLGQ9ay51cmwsay5oYXNDb250ZW50fHwoay5kYXRhJiYoZD1rLnVybCs9KGRjLnRlc3QoZCk/XCImXCI6XCI/XCIpK2suZGF0YSxkZWxldGUgay5kYXRhKSxrLmNhY2hlPT09ITEmJihrLnVybD1oYy50ZXN0KGQpP2QucmVwbGFjZShoYyxcIiQxXz1cIitjYysrKTpkKyhkYy50ZXN0KGQpP1wiJlwiOlwiP1wiKStcIl89XCIrY2MrKykpLGsuaWZNb2RpZmllZCYmKG4ubGFzdE1vZGlmaWVkW2RdJiZ2LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLG4ubGFzdE1vZGlmaWVkW2RdKSxuLmV0YWdbZF0mJnYuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixuLmV0YWdbZF0pKSwoay5kYXRhJiZrLmhhc0NvbnRlbnQmJmsuY29udGVudFR5cGUhPT0hMXx8Yi5jb250ZW50VHlwZSkmJnYuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLGsuY29udGVudFR5cGUpLHYuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLGsuZGF0YVR5cGVzWzBdJiZrLmFjY2VwdHNbay5kYXRhVHlwZXNbMF1dP2suYWNjZXB0c1trLmRhdGFUeXBlc1swXV0rKFwiKlwiIT09ay5kYXRhVHlwZXNbMF0/XCIsIFwiK3BjK1wiOyBxPTAuMDFcIjpcIlwiKTprLmFjY2VwdHNbXCIqXCJdKTtmb3IoaiBpbiBrLmhlYWRlcnMpdi5zZXRSZXF1ZXN0SGVhZGVyKGosay5oZWFkZXJzW2pdKTtpZihrLmJlZm9yZVNlbmQmJihrLmJlZm9yZVNlbmQuY2FsbChsLHYsayk9PT0hMXx8Mj09PXQpKXJldHVybiB2LmFib3J0KCk7dT1cImFib3J0XCI7Zm9yKGogaW57c3VjY2VzczoxLGVycm9yOjEsY29tcGxldGU6MX0pdltqXShrW2pdKTtpZihjPXNjKG9jLGssYix2KSl7di5yZWFkeVN0YXRlPTEsaSYmbS50cmlnZ2VyKFwiYWpheFNlbmRcIixbdixrXSksay5hc3luYyYmay50aW1lb3V0PjAmJihnPXNldFRpbWVvdXQoZnVuY3Rpb24oKXt2LmFib3J0KFwidGltZW91dFwiKX0say50aW1lb3V0KSk7dHJ5e3Q9MSxjLnNlbmQocix4KX1jYXRjaCh3KXtpZighKDI+dCkpdGhyb3cgdzt4KC0xLHcpfX1lbHNlIHgoLTEsXCJObyBUcmFuc3BvcnRcIik7ZnVuY3Rpb24geChhLGIsZixoKXt2YXIgaixyLHMsdSx3LHg9YjsyIT09dCYmKHQ9MixnJiZjbGVhclRpbWVvdXQoZyksYz12b2lkIDAsZT1ofHxcIlwiLHYucmVhZHlTdGF0ZT1hPjA/NDowLGo9YT49MjAwJiYzMDA+YXx8MzA0PT09YSxmJiYodT11YyhrLHYsZikpLHU9dmMoayx1LHYsaiksaj8oay5pZk1vZGlmaWVkJiYodz12LmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSx3JiYobi5sYXN0TW9kaWZpZWRbZF09dyksdz12LmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSx3JiYobi5ldGFnW2RdPXcpKSwyMDQ9PT1hfHxcIkhFQURcIj09PWsudHlwZT94PVwibm9jb250ZW50XCI6MzA0PT09YT94PVwibm90bW9kaWZpZWRcIjooeD11LnN0YXRlLHI9dS5kYXRhLHM9dS5lcnJvcixqPSFzKSk6KHM9eCwoYXx8IXgpJiYoeD1cImVycm9yXCIsMD5hJiYoYT0wKSkpLHYuc3RhdHVzPWEsdi5zdGF0dXNUZXh0PShifHx4KStcIlwiLGo/by5yZXNvbHZlV2l0aChsLFtyLHgsdl0pOm8ucmVqZWN0V2l0aChsLFt2LHgsc10pLHYuc3RhdHVzQ29kZShxKSxxPXZvaWQgMCxpJiZtLnRyaWdnZXIoaj9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbdixrLGo/cjpzXSkscC5maXJlV2l0aChsLFt2LHhdKSxpJiYobS50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW3Ysa10pLC0tbi5hY3RpdmV8fG4uZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIHZ9LGdldEpTT046ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLmdldChhLGIsYyxcImpzb25cIil9LGdldFNjcmlwdDpmdW5jdGlvbihhLGIpe3JldHVybiBuLmdldChhLHZvaWQgMCxiLFwic2NyaXB0XCIpfX0pLG4uZWFjaChbXCJnZXRcIixcInBvc3RcIl0sZnVuY3Rpb24oYSxiKXtuW2JdPWZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBuLmlzRnVuY3Rpb24oYykmJihlPWV8fGQsZD1jLGM9dm9pZCAwKSxuLmFqYXgoe3VybDphLHR5cGU6YixkYXRhVHlwZTplLGRhdGE6YyxzdWNjZXNzOmR9KX19KSxuLmVhY2goW1wiYWpheFN0YXJ0XCIsXCJhamF4U3RvcFwiLFwiYWpheENvbXBsZXRlXCIsXCJhamF4RXJyb3JcIixcImFqYXhTdWNjZXNzXCIsXCJhamF4U2VuZFwiXSxmdW5jdGlvbihhLGIpe24uZm5bYl09ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMub24oYixhKX19KSxuLl9ldmFsVXJsPWZ1bmN0aW9uKGEpe3JldHVybiBuLmFqYXgoe3VybDphLHR5cGU6XCJHRVRcIixkYXRhVHlwZTpcInNjcmlwdFwiLGFzeW5jOiExLGdsb2JhbDohMSxcInRocm93c1wiOiEwfSl9LG4uZm4uZXh0ZW5kKHt3cmFwQWxsOmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiBuLmlzRnVuY3Rpb24oYSk/dGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykud3JhcEFsbChhLmNhbGwodGhpcyxiKSl9KToodGhpc1swXSYmKGI9bihhLHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUoITApLHRoaXNbMF0ucGFyZW50Tm9kZSYmYi5pbnNlcnRCZWZvcmUodGhpc1swXSksYi5tYXAoZnVuY3Rpb24oKXt2YXIgYT10aGlzO3doaWxlKGEuZmlyc3RFbGVtZW50Q2hpbGQpYT1hLmZpcnN0RWxlbWVudENoaWxkO3JldHVybiBhfSkuYXBwZW5kKHRoaXMpKSx0aGlzKX0sd3JhcElubmVyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2gobi5pc0Z1bmN0aW9uKGEpP2Z1bmN0aW9uKGIpe24odGhpcykud3JhcElubmVyKGEuY2FsbCh0aGlzLGIpKX06ZnVuY3Rpb24oKXt2YXIgYj1uKHRoaXMpLGM9Yi5jb250ZW50cygpO2MubGVuZ3RoP2Mud3JhcEFsbChhKTpiLmFwcGVuZChhKX0pfSx3cmFwOmZ1bmN0aW9uKGEpe3ZhciBiPW4uaXNGdW5jdGlvbihhKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe24odGhpcykud3JhcEFsbChiP2EuY2FsbCh0aGlzLGMpOmEpfSl9LHVud3JhcDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnBhcmVudCgpLmVhY2goZnVuY3Rpb24oKXtuLm5vZGVOYW1lKHRoaXMsXCJib2R5XCIpfHxuKHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyl9KS5lbmQoKX19KSxuLmV4cHIuZmlsdGVycy5oaWRkZW49ZnVuY3Rpb24oYSl7cmV0dXJuIGEub2Zmc2V0V2lkdGg8PTAmJmEub2Zmc2V0SGVpZ2h0PD0wfSxuLmV4cHIuZmlsdGVycy52aXNpYmxlPWZ1bmN0aW9uKGEpe3JldHVybiFuLmV4cHIuZmlsdGVycy5oaWRkZW4oYSl9O3ZhciB3Yz0vJTIwL2cseGM9L1xcW1xcXSQvLHljPS9cXHI/XFxuL2csemM9L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLEFjPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtmdW5jdGlvbiBCYyhhLGIsYyxkKXt2YXIgZTtpZihuLmlzQXJyYXkoYikpbi5lYWNoKGIsZnVuY3Rpb24oYixlKXtjfHx4Yy50ZXN0KGEpP2QoYSxlKTpCYyhhK1wiW1wiKyhcIm9iamVjdFwiPT10eXBlb2YgZT9iOlwiXCIpK1wiXVwiLGUsYyxkKX0pO2Vsc2UgaWYoY3x8XCJvYmplY3RcIiE9PW4udHlwZShiKSlkKGEsYik7ZWxzZSBmb3IoZSBpbiBiKUJjKGErXCJbXCIrZStcIl1cIixiW2VdLGMsZCl9bi5wYXJhbT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1mdW5jdGlvbihhLGIpe2I9bi5pc0Z1bmN0aW9uKGIpP2IoKTpudWxsPT1iP1wiXCI6YixkW2QubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoYSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGIpfTtpZih2b2lkIDA9PT1iJiYoYj1uLmFqYXhTZXR0aW5ncyYmbi5hamF4U2V0dGluZ3MudHJhZGl0aW9uYWwpLG4uaXNBcnJheShhKXx8YS5qcXVlcnkmJiFuLmlzUGxhaW5PYmplY3QoYSkpbi5lYWNoKGEsZnVuY3Rpb24oKXtlKHRoaXMubmFtZSx0aGlzLnZhbHVlKX0pO2Vsc2UgZm9yKGMgaW4gYSlCYyhjLGFbY10sYixlKTtyZXR1cm4gZC5qb2luKFwiJlwiKS5yZXBsYWNlKHdjLFwiK1wiKX0sbi5mbi5leHRlbmQoe3NlcmlhbGl6ZTpmdW5jdGlvbigpe3JldHVybiBuLnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSl9LHNlcmlhbGl6ZUFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGE9bi5wcm9wKHRoaXMsXCJlbGVtZW50c1wiKTtyZXR1cm4gYT9uLm1ha2VBcnJheShhKTp0aGlzfSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy50eXBlO3JldHVybiB0aGlzLm5hbWUmJiFuKHRoaXMpLmlzKFwiOmRpc2FibGVkXCIpJiZBYy50ZXN0KHRoaXMubm9kZU5hbWUpJiYhemMudGVzdChhKSYmKHRoaXMuY2hlY2tlZHx8IVQudGVzdChhKSl9KS5tYXAoZnVuY3Rpb24oYSxiKXt2YXIgYz1uKHRoaXMpLnZhbCgpO3JldHVybiBudWxsPT1jP251bGw6bi5pc0FycmF5KGMpP24ubWFwKGMsZnVuY3Rpb24oYSl7cmV0dXJue25hbWU6Yi5uYW1lLHZhbHVlOmEucmVwbGFjZSh5YyxcIlxcclxcblwiKX19KTp7bmFtZTpiLm5hbWUsdmFsdWU6Yy5yZXBsYWNlKHljLFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pLG4uYWpheFNldHRpbmdzLnhocj1mdW5jdGlvbigpe3RyeXtyZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0fWNhdGNoKGEpe319O3ZhciBDYz0wLERjPXt9LEVjPXswOjIwMCwxMjIzOjIwNH0sRmM9bi5hamF4U2V0dGluZ3MueGhyKCk7YS5BY3RpdmVYT2JqZWN0JiZuKGEpLm9uKFwidW5sb2FkXCIsZnVuY3Rpb24oKXtmb3IodmFyIGEgaW4gRGMpRGNbYV0oKX0pLGsuY29ycz0hIUZjJiZcIndpdGhDcmVkZW50aWFsc1wiaW4gRmMsay5hamF4PUZjPSEhRmMsbi5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiBrLmNvcnN8fEZjJiYhYS5jcm9zc0RvbWFpbj97c2VuZDpmdW5jdGlvbihjLGQpe3ZhciBlLGY9YS54aHIoKSxnPSsrQ2M7aWYoZi5vcGVuKGEudHlwZSxhLnVybCxhLmFzeW5jLGEudXNlcm5hbWUsYS5wYXNzd29yZCksYS54aHJGaWVsZHMpZm9yKGUgaW4gYS54aHJGaWVsZHMpZltlXT1hLnhockZpZWxkc1tlXTthLm1pbWVUeXBlJiZmLm92ZXJyaWRlTWltZVR5cGUmJmYub3ZlcnJpZGVNaW1lVHlwZShhLm1pbWVUeXBlKSxhLmNyb3NzRG9tYWlufHxjW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXXx8KGNbXCJYLVJlcXVlc3RlZC1XaXRoXCJdPVwiWE1MSHR0cFJlcXVlc3RcIik7Zm9yKGUgaW4gYylmLnNldFJlcXVlc3RIZWFkZXIoZSxjW2VdKTtiPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe2ImJihkZWxldGUgRGNbZ10sYj1mLm9ubG9hZD1mLm9uZXJyb3I9bnVsbCxcImFib3J0XCI9PT1hP2YuYWJvcnQoKTpcImVycm9yXCI9PT1hP2QoZi5zdGF0dXMsZi5zdGF0dXNUZXh0KTpkKEVjW2Yuc3RhdHVzXXx8Zi5zdGF0dXMsZi5zdGF0dXNUZXh0LFwic3RyaW5nXCI9PXR5cGVvZiBmLnJlc3BvbnNlVGV4dD97dGV4dDpmLnJlc3BvbnNlVGV4dH06dm9pZCAwLGYuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpKX19LGYub25sb2FkPWIoKSxmLm9uZXJyb3I9YihcImVycm9yXCIpLGI9RGNbZ109YihcImFib3J0XCIpO3RyeXtmLnNlbmQoYS5oYXNDb250ZW50JiZhLmRhdGF8fG51bGwpfWNhdGNoKGgpe2lmKGIpdGhyb3cgaH19LGFib3J0OmZ1bmN0aW9uKCl7YiYmYigpfX06dm9pZCAwfSksbi5hamF4U2V0dXAoe2FjY2VwdHM6e3NjcmlwdDpcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJ9LGNvbnRlbnRzOntzY3JpcHQ6Lyg/OmphdmF8ZWNtYSlzY3JpcHQvfSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZ2xvYmFsRXZhbChhKSxhfX19KSxuLmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIixmdW5jdGlvbihhKXt2b2lkIDA9PT1hLmNhY2hlJiYoYS5jYWNoZT0hMSksYS5jcm9zc0RvbWFpbiYmKGEudHlwZT1cIkdFVFwiKX0pLG4uYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe2lmKGEuY3Jvc3NEb21haW4pe3ZhciBiLGM7cmV0dXJue3NlbmQ6ZnVuY3Rpb24oZCxlKXtiPW4oXCI8c2NyaXB0PlwiKS5wcm9wKHthc3luYzohMCxjaGFyc2V0OmEuc2NyaXB0Q2hhcnNldCxzcmM6YS51cmx9KS5vbihcImxvYWQgZXJyb3JcIixjPWZ1bmN0aW9uKGEpe2IucmVtb3ZlKCksYz1udWxsLGEmJmUoXCJlcnJvclwiPT09YS50eXBlPzQwNDoyMDAsYS50eXBlKX0pLGwuaGVhZC5hcHBlbmRDaGlsZChiWzBdKX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKCl9fX19KTt2YXIgR2M9W10sSGM9Lyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztuLmFqYXhTZXR1cCh7anNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgYT1HYy5wb3AoKXx8bi5leHBhbmRvK1wiX1wiK2NjKys7cmV0dXJuIHRoaXNbYV09ITAsYX19KSxuLmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsZnVuY3Rpb24oYixjLGQpe3ZhciBlLGYsZyxoPWIuanNvbnAhPT0hMSYmKEhjLnRlc3QoYi51cmwpP1widXJsXCI6XCJzdHJpbmdcIj09dHlwZW9mIGIuZGF0YSYmIShiLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiZIYy50ZXN0KGIuZGF0YSkmJlwiZGF0YVwiKTtyZXR1cm4gaHx8XCJqc29ucFwiPT09Yi5kYXRhVHlwZXNbMF0/KGU9Yi5qc29ucENhbGxiYWNrPW4uaXNGdW5jdGlvbihiLmpzb25wQ2FsbGJhY2spP2IuanNvbnBDYWxsYmFjaygpOmIuanNvbnBDYWxsYmFjayxoP2JbaF09YltoXS5yZXBsYWNlKEhjLFwiJDFcIitlKTpiLmpzb25wIT09ITEmJihiLnVybCs9KGRjLnRlc3QoYi51cmwpP1wiJlwiOlwiP1wiKStiLmpzb25wK1wiPVwiK2UpLGIuY29udmVydGVyc1tcInNjcmlwdCBqc29uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIGd8fG4uZXJyb3IoZStcIiB3YXMgbm90IGNhbGxlZFwiKSxnWzBdfSxiLmRhdGFUeXBlc1swXT1cImpzb25cIixmPWFbZV0sYVtlXT1mdW5jdGlvbigpe2c9YXJndW1lbnRzfSxkLmFsd2F5cyhmdW5jdGlvbigpe2FbZV09ZixiW2VdJiYoYi5qc29ucENhbGxiYWNrPWMuanNvbnBDYWxsYmFjayxHYy5wdXNoKGUpKSxnJiZuLmlzRnVuY3Rpb24oZikmJmYoZ1swXSksZz1mPXZvaWQgMH0pLFwic2NyaXB0XCIpOnZvaWQgMH0pLG4ucGFyc2VIVE1MPWZ1bmN0aW9uKGEsYixjKXtpZighYXx8XCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIG51bGw7XCJib29sZWFuXCI9PXR5cGVvZiBiJiYoYz1iLGI9ITEpLGI9Ynx8bDt2YXIgZD12LmV4ZWMoYSksZT0hYyYmW107cmV0dXJuIGQ/W2IuY3JlYXRlRWxlbWVudChkWzFdKV06KGQ9bi5idWlsZEZyYWdtZW50KFthXSxiLGUpLGUmJmUubGVuZ3RoJiZuKGUpLnJlbW92ZSgpLG4ubWVyZ2UoW10sZC5jaGlsZE5vZGVzKSl9O3ZhciBJYz1uLmZuLmxvYWQ7bi5mbi5sb2FkPWZ1bmN0aW9uKGEsYixjKXtpZihcInN0cmluZ1wiIT10eXBlb2YgYSYmSWMpcmV0dXJuIEljLmFwcGx5KHRoaXMsYXJndW1lbnRzKTt2YXIgZCxlLGYsZz10aGlzLGg9YS5pbmRleE9mKFwiIFwiKTtyZXR1cm4gaD49MCYmKGQ9bi50cmltKGEuc2xpY2UoaCkpLGE9YS5zbGljZSgwLGgpKSxuLmlzRnVuY3Rpb24oYik/KGM9YixiPXZvaWQgMCk6YiYmXCJvYmplY3RcIj09dHlwZW9mIGImJihlPVwiUE9TVFwiKSxnLmxlbmd0aD4wJiZuLmFqYXgoe3VybDphLHR5cGU6ZSxkYXRhVHlwZTpcImh0bWxcIixkYXRhOmJ9KS5kb25lKGZ1bmN0aW9uKGEpe2Y9YXJndW1lbnRzLGcuaHRtbChkP24oXCI8ZGl2PlwiKS5hcHBlbmQobi5wYXJzZUhUTUwoYSkpLmZpbmQoZCk6YSl9KS5jb21wbGV0ZShjJiZmdW5jdGlvbihhLGIpe2cuZWFjaChjLGZ8fFthLnJlc3BvbnNlVGV4dCxiLGFdKX0pLHRoaXN9LG4uZXhwci5maWx0ZXJzLmFuaW1hdGVkPWZ1bmN0aW9uKGEpe3JldHVybiBuLmdyZXAobi50aW1lcnMsZnVuY3Rpb24oYil7cmV0dXJuIGE9PT1iLmVsZW19KS5sZW5ndGh9O3ZhciBKYz1hLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtmdW5jdGlvbiBLYyhhKXtyZXR1cm4gbi5pc1dpbmRvdyhhKT9hOjk9PT1hLm5vZGVUeXBlJiZhLmRlZmF1bHRWaWV3fW4ub2Zmc2V0PXtzZXRPZmZzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGgsaSxqLGs9bi5jc3MoYSxcInBvc2l0aW9uXCIpLGw9bihhKSxtPXt9O1wic3RhdGljXCI9PT1rJiYoYS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpLGg9bC5vZmZzZXQoKSxmPW4uY3NzKGEsXCJ0b3BcIiksaT1uLmNzcyhhLFwibGVmdFwiKSxqPShcImFic29sdXRlXCI9PT1rfHxcImZpeGVkXCI9PT1rKSYmKGYraSkuaW5kZXhPZihcImF1dG9cIik+LTEsaj8oZD1sLnBvc2l0aW9uKCksZz1kLnRvcCxlPWQubGVmdCk6KGc9cGFyc2VGbG9hdChmKXx8MCxlPXBhcnNlRmxvYXQoaSl8fDApLG4uaXNGdW5jdGlvbihiKSYmKGI9Yi5jYWxsKGEsYyxoKSksbnVsbCE9Yi50b3AmJihtLnRvcD1iLnRvcC1oLnRvcCtnKSxudWxsIT1iLmxlZnQmJihtLmxlZnQ9Yi5sZWZ0LWgubGVmdCtlKSxcInVzaW5nXCJpbiBiP2IudXNpbmcuY2FsbChhLG0pOmwuY3NzKG0pfX0sbi5mbi5leHRlbmQoe29mZnNldDpmdW5jdGlvbihhKXtpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiB2b2lkIDA9PT1hP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24ub2Zmc2V0LnNldE9mZnNldCh0aGlzLGEsYil9KTt2YXIgYixjLGQ9dGhpc1swXSxlPXt0b3A6MCxsZWZ0OjB9LGY9ZCYmZC5vd25lckRvY3VtZW50O2lmKGYpcmV0dXJuIGI9Zi5kb2N1bWVudEVsZW1lbnQsbi5jb250YWlucyhiLGQpPyh0eXBlb2YgZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QhPT1VJiYoZT1kLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKSxjPUtjKGYpLHt0b3A6ZS50b3ArYy5wYWdlWU9mZnNldC1iLmNsaWVudFRvcCxsZWZ0OmUubGVmdCtjLnBhZ2VYT2Zmc2V0LWIuY2xpZW50TGVmdH0pOmV9LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpc1swXSl7dmFyIGEsYixjPXRoaXNbMF0sZD17dG9wOjAsbGVmdDowfTtyZXR1cm5cImZpeGVkXCI9PT1uLmNzcyhjLFwicG9zaXRpb25cIik/Yj1jLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOihhPXRoaXMub2Zmc2V0UGFyZW50KCksYj10aGlzLm9mZnNldCgpLG4ubm9kZU5hbWUoYVswXSxcImh0bWxcIil8fChkPWEub2Zmc2V0KCkpLGQudG9wKz1uLmNzcyhhWzBdLFwiYm9yZGVyVG9wV2lkdGhcIiwhMCksZC5sZWZ0Kz1uLmNzcyhhWzBdLFwiYm9yZGVyTGVmdFdpZHRoXCIsITApKSx7dG9wOmIudG9wLWQudG9wLW4uY3NzKGMsXCJtYXJnaW5Ub3BcIiwhMCksbGVmdDpiLmxlZnQtZC5sZWZ0LW4uY3NzKGMsXCJtYXJnaW5MZWZ0XCIsITApfX19LG9mZnNldFBhcmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBhPXRoaXMub2Zmc2V0UGFyZW50fHxKYzt3aGlsZShhJiYhbi5ub2RlTmFtZShhLFwiaHRtbFwiKSYmXCJzdGF0aWNcIj09PW4uY3NzKGEsXCJwb3NpdGlvblwiKSlhPWEub2Zmc2V0UGFyZW50O3JldHVybiBhfHxKY30pfX0pLG4uZWFjaCh7c2Nyb2xsTGVmdDpcInBhZ2VYT2Zmc2V0XCIsc2Nyb2xsVG9wOlwicGFnZVlPZmZzZXRcIn0sZnVuY3Rpb24oYixjKXt2YXIgZD1cInBhZ2VZT2Zmc2V0XCI9PT1jO24uZm5bYl09ZnVuY3Rpb24oZSl7cmV0dXJuIEoodGhpcyxmdW5jdGlvbihiLGUsZil7dmFyIGc9S2MoYik7cmV0dXJuIHZvaWQgMD09PWY/Zz9nW2NdOmJbZV06dm9pZChnP2cuc2Nyb2xsVG8oZD9hLnBhZ2VYT2Zmc2V0OmYsZD9mOmEucGFnZVlPZmZzZXQpOmJbZV09Zil9LGIsZSxhcmd1bWVudHMubGVuZ3RoLG51bGwpfX0pLG4uZWFjaChbXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oYSxiKXtuLmNzc0hvb2tzW2JdPXliKGsucGl4ZWxQb3NpdGlvbixmdW5jdGlvbihhLGMpe3JldHVybiBjPyhjPXhiKGEsYiksdmIudGVzdChjKT9uKGEpLnBvc2l0aW9uKClbYl0rXCJweFwiOmMpOnZvaWQgMH0pfSksbi5lYWNoKHtIZWlnaHQ6XCJoZWlnaHRcIixXaWR0aDpcIndpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7bi5lYWNoKHtwYWRkaW5nOlwiaW5uZXJcIithLGNvbnRlbnQ6YixcIlwiOlwib3V0ZXJcIithfSxmdW5jdGlvbihjLGQpe24uZm5bZF09ZnVuY3Rpb24oZCxlKXt2YXIgZj1hcmd1bWVudHMubGVuZ3RoJiYoY3x8XCJib29sZWFuXCIhPXR5cGVvZiBkKSxnPWN8fChkPT09ITB8fGU9PT0hMD9cIm1hcmdpblwiOlwiYm9yZGVyXCIpO3JldHVybiBKKHRoaXMsZnVuY3Rpb24oYixjLGQpe3ZhciBlO3JldHVybiBuLmlzV2luZG93KGIpP2IuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50XCIrYV06OT09PWIubm9kZVR5cGU/KGU9Yi5kb2N1bWVudEVsZW1lbnQsTWF0aC5tYXgoYi5ib2R5W1wic2Nyb2xsXCIrYV0sZVtcInNjcm9sbFwiK2FdLGIuYm9keVtcIm9mZnNldFwiK2FdLGVbXCJvZmZzZXRcIithXSxlW1wiY2xpZW50XCIrYV0pKTp2b2lkIDA9PT1kP24uY3NzKGIsYyxnKTpuLnN0eWxlKGIsYyxkLGcpfSxiLGY/ZDp2b2lkIDAsZixudWxsKX19KX0pLG4uZm4uc2l6ZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmxlbmd0aH0sbi5mbi5hbmRTZWxmPW4uZm4uYWRkQmFjayxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIG59KTt2YXIgTGM9YS5qUXVlcnksTWM9YS4kO3JldHVybiBuLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oYil7cmV0dXJuIGEuJD09PW4mJihhLiQ9TWMpLGImJmEualF1ZXJ5PT09biYmKGEualF1ZXJ5PUxjKSxufSx0eXBlb2YgYj09PVUmJihhLmpRdWVyeT1hLiQ9biksbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9anF1ZXJ5Lm1pbi5tYXBcbjsgYnJvd3NlcmlmeV9zaGltX19kZWZpbmVfX21vZHVsZV9fZXhwb3J0X18odHlwZW9mIGpRdWVyeSAhPSBcInVuZGVmaW5lZFwiID8galF1ZXJ5IDogd2luZG93LmpRdWVyeSk7XG5cbn0pLmNhbGwoZ2xvYmFsLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGZ1bmN0aW9uIGRlZmluZUV4cG9ydChleCkgeyBtb2R1bGUuZXhwb3J0cyA9IGV4OyB9KTtcblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIiwiLyohXG4gKiBLbm9ja291dCBKYXZhU2NyaXB0IGxpYnJhcnkgdjMuMi4wXG4gKiAoYykgU3RldmVuIFNhbmRlcnNvbiAtIGh0dHA6Ly9rbm9ja291dGpzLmNvbS9cbiAqIExpY2Vuc2U6IE1JVCAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXG4gKi9cblxuKGZ1bmN0aW9uKCkgeyhmdW5jdGlvbihwKXt2YXIgcz10aGlzfHwoMCxldmFsKShcInRoaXNcIiksdj1zLmRvY3VtZW50LEw9cy5uYXZpZ2F0b3Isdz1zLmpRdWVyeSxEPXMuSlNPTjsoZnVuY3Rpb24ocCl7XCJmdW5jdGlvblwiPT09dHlwZW9mIHJlcXVpcmUmJlwib2JqZWN0XCI9PT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09PXR5cGVvZiBtb2R1bGU/cChtb2R1bGUuZXhwb3J0c3x8ZXhwb3J0cyxyZXF1aXJlKTpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJleHBvcnRzXCIsXCJyZXF1aXJlXCJdLHApOnAocy5rbz17fSl9KShmdW5jdGlvbihNLE4pe2Z1bmN0aW9uIEgoYSxkKXtyZXR1cm4gbnVsbD09PWF8fHR5cGVvZiBhIGluIFI/YT09PWQ6ITF9ZnVuY3Rpb24gUyhhLGQpe3ZhciBjO3JldHVybiBmdW5jdGlvbigpe2N8fChjPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtjPXA7YSgpfSxkKSl9fWZ1bmN0aW9uIFQoYSxkKXt2YXIgYztyZXR1cm4gZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQoYyk7XG5jPXNldFRpbWVvdXQoYSxkKX19ZnVuY3Rpb24gSShiLGQsYyxlKXthLmRbYl09e2luaXQ6ZnVuY3Rpb24oYixoLGssZixtKXt2YXIgbCxxO2EucyhmdW5jdGlvbigpe3ZhciBmPWEuYS5jKGgoKSksaz0hYyE9PSFmLHo9IXE7aWYoenx8ZHx8ayE9PWwpeiYmYS5ZLmxhKCkmJihxPWEuYS5pYShhLmYuY2hpbGROb2RlcyhiKSwhMCkpLGs/KHp8fGEuZi5UKGIsYS5hLmlhKHEpKSxhLkNhKGU/ZShtLGYpOm0sYikpOmEuZi5qYShiKSxsPWt9LG51bGwse286Yn0pO3JldHVybntjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5nczohMH19fTthLmguaGFbYl09ITE7YS5mLlFbYl09ITB9dmFyIGE9XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBNP006e307YS5iPWZ1bmN0aW9uKGIsZCl7Zm9yKHZhciBjPWIuc3BsaXQoXCIuXCIpLGU9YSxnPTA7ZzxjLmxlbmd0aC0xO2crKyllPWVbY1tnXV07ZVtjW2MubGVuZ3RoLTFdXT1kfTthLkE9ZnVuY3Rpb24oYSxkLGMpe2FbZF09Y307YS52ZXJzaW9uPVwiMy4yLjBcIjtcbmEuYihcInZlcnNpb25cIixhLnZlcnNpb24pO2EuYT1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYSxiKXtmb3IodmFyIGMgaW4gYSlhLmhhc093blByb3BlcnR5KGMpJiZiKGMsYVtjXSl9ZnVuY3Rpb24gZChhLGIpe2lmKGIpZm9yKHZhciBjIGluIGIpYi5oYXNPd25Qcm9wZXJ0eShjKSYmKGFbY109YltjXSk7cmV0dXJuIGF9ZnVuY3Rpb24gYyhhLGIpe2EuX19wcm90b19fPWI7cmV0dXJuIGF9dmFyIGU9e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5LGc9e30saD17fTtnW0wmJi9GaXJlZm94XFwvMi9pLnRlc3QoTC51c2VyQWdlbnQpP1wiS2V5Ym9hcmRFdmVudFwiOlwiVUlFdmVudHNcIl09W1wia2V5dXBcIixcImtleWRvd25cIixcImtleXByZXNzXCJdO2cuTW91c2VFdmVudHM9XCJjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZVwiLnNwbGl0KFwiIFwiKTtiKGcsZnVuY3Rpb24oYSxiKXtpZihiLmxlbmd0aClmb3IodmFyIGM9XG4wLGQ9Yi5sZW5ndGg7YzxkO2MrKyloW2JbY11dPWF9KTt2YXIgaz17cHJvcGVydHljaGFuZ2U6ITB9LGY9diYmZnVuY3Rpb24oKXtmb3IodmFyIGE9MyxiPXYuY3JlYXRlRWxlbWVudChcImRpdlwiKSxjPWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpXCIpO2IuaW5uZXJIVE1MPVwiXFx4M2MhLS1baWYgZ3QgSUUgXCIrICsrYStcIl0+PGk+PC9pPjwhW2VuZGlmXS0tXFx4M2VcIixjWzBdOyk7cmV0dXJuIDQ8YT9hOnB9KCk7cmV0dXJue3ZiOltcImF1dGhlbnRpY2l0eV90b2tlblwiLC9eX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4oXy4qKT8kL10sdTpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7YzxkO2MrKyliKGFbY10sYyl9LG06ZnVuY3Rpb24oYSxiKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZilyZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChhLGIpO2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7YzxkO2MrKylpZihhW2NdPT09XG5iKXJldHVybiBjO3JldHVybi0xfSxxYjpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTAsZj1hLmxlbmd0aDtkPGY7ZCsrKWlmKGIuY2FsbChjLGFbZF0sZCkpcmV0dXJuIGFbZF07cmV0dXJuIG51bGx9LHVhOmZ1bmN0aW9uKG0sYil7dmFyIGM9YS5hLm0obSxiKTswPGM/bS5zcGxpY2UoYywxKTowPT09YyYmbS5zaGlmdCgpfSxyYjpmdW5jdGlvbihtKXttPW18fFtdO2Zvcih2YXIgYj1bXSxjPTAsZD1tLmxlbmd0aDtjPGQ7YysrKTA+YS5hLm0oYixtW2NdKSYmYi5wdXNoKG1bY10pO3JldHVybiBifSxEYTpmdW5jdGlvbihhLGIpe2E9YXx8W107Zm9yKHZhciBjPVtdLGQ9MCxmPWEubGVuZ3RoO2Q8ZjtkKyspYy5wdXNoKGIoYVtkXSxkKSk7cmV0dXJuIGN9LHRhOmZ1bmN0aW9uKGEsYil7YT1hfHxbXTtmb3IodmFyIGM9W10sZD0wLGY9YS5sZW5ndGg7ZDxmO2QrKyliKGFbZF0sZCkmJmMucHVzaChhW2RdKTtyZXR1cm4gY30sZ2E6ZnVuY3Rpb24oYSxiKXtpZihiIGluc3RhbmNlb2ZcbkFycmF5KWEucHVzaC5hcHBseShhLGIpO2Vsc2UgZm9yKHZhciBjPTAsZD1iLmxlbmd0aDtjPGQ7YysrKWEucHVzaChiW2NdKTtyZXR1cm4gYX0sZWE6ZnVuY3Rpb24oYixjLGQpe3ZhciBmPWEuYS5tKGEuYS5YYShiKSxjKTswPmY/ZCYmYi5wdXNoKGMpOmR8fGIuc3BsaWNlKGYsMSl9LHhhOmUsZXh0ZW5kOmQsemE6YyxBYTplP2M6ZCxHOmIsbmE6ZnVuY3Rpb24oYSxiKXtpZighYSlyZXR1cm4gYTt2YXIgYz17fSxkO2ZvcihkIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShkKSYmKGNbZF09YihhW2RdLGQsYSkpO3JldHVybiBjfSxLYTpmdW5jdGlvbihiKXtmb3IoO2IuZmlyc3RDaGlsZDspYS5yZW1vdmVOb2RlKGIuZmlyc3RDaGlsZCl9LG9jOmZ1bmN0aW9uKGIpe2I9YS5hLlMoYik7Zm9yKHZhciBjPXYuY3JlYXRlRWxlbWVudChcImRpdlwiKSxkPTAsZj1iLmxlbmd0aDtkPGY7ZCsrKWMuYXBwZW5kQ2hpbGQoYS5SKGJbZF0pKTtyZXR1cm4gY30saWE6ZnVuY3Rpb24oYixjKXtmb3IodmFyIGQ9XG4wLGY9Yi5sZW5ndGgsZT1bXTtkPGY7ZCsrKXt2YXIgaz1iW2RdLmNsb25lTm9kZSghMCk7ZS5wdXNoKGM/YS5SKGspOmspfXJldHVybiBlfSxUOmZ1bmN0aW9uKGIsYyl7YS5hLkthKGIpO2lmKGMpZm9yKHZhciBkPTAsZj1jLmxlbmd0aDtkPGY7ZCsrKWIuYXBwZW5kQ2hpbGQoY1tkXSl9LExiOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9Yi5ub2RlVHlwZT9bYl06YjtpZigwPGQubGVuZ3RoKXtmb3IodmFyIGY9ZFswXSxlPWYucGFyZW50Tm9kZSxrPTAsZz1jLmxlbmd0aDtrPGc7aysrKWUuaW5zZXJ0QmVmb3JlKGNba10sZik7az0wO2ZvcihnPWQubGVuZ3RoO2s8ZztrKyspYS5yZW1vdmVOb2RlKGRba10pfX0sa2E6ZnVuY3Rpb24oYSxiKXtpZihhLmxlbmd0aCl7Zm9yKGI9OD09PWIubm9kZVR5cGUmJmIucGFyZW50Tm9kZXx8YjthLmxlbmd0aCYmYVswXS5wYXJlbnROb2RlIT09YjspYS5zaGlmdCgpO2lmKDE8YS5sZW5ndGgpe3ZhciBjPWFbMF0sZD1hW2EubGVuZ3RoLTFdO2ZvcihhLmxlbmd0aD1cbjA7YyE9PWQ7KWlmKGEucHVzaChjKSxjPWMubmV4dFNpYmxpbmcsIWMpcmV0dXJuO2EucHVzaChkKX19cmV0dXJuIGF9LE5iOmZ1bmN0aW9uKGEsYil7Nz5mP2Euc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIixiKTphLnNlbGVjdGVkPWJ9LGNiOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT09YXx8YT09PXA/XCJcIjphLnRyaW0/YS50cmltKCk6YS50b1N0cmluZygpLnJlcGxhY2UoL15bXFxzXFx4YTBdK3xbXFxzXFx4YTBdKyQvZyxcIlwiKX0sdmM6ZnVuY3Rpb24oYSxiKXthPWF8fFwiXCI7cmV0dXJuIGIubGVuZ3RoPmEubGVuZ3RoPyExOmEuc3Vic3RyaW5nKDAsYi5sZW5ndGgpPT09Yn0sY2M6ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4hMDtpZigxMT09PWEubm9kZVR5cGUpcmV0dXJuITE7aWYoYi5jb250YWlucylyZXR1cm4gYi5jb250YWlucygzPT09YS5ub2RlVHlwZT9hLnBhcmVudE5vZGU6YSk7aWYoYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbilyZXR1cm4gMTY9PShiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGEpJlxuMTYpO2Zvcig7YSYmYSE9YjspYT1hLnBhcmVudE5vZGU7cmV0dXJuISFhfSxKYTpmdW5jdGlvbihiKXtyZXR1cm4gYS5hLmNjKGIsYi5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCl9LG9iOmZ1bmN0aW9uKGIpe3JldHVybiEhYS5hLnFiKGIsYS5hLkphKX0sdDpmdW5jdGlvbihhKXtyZXR1cm4gYSYmYS50YWdOYW1lJiZhLnRhZ05hbWUudG9Mb3dlckNhc2UoKX0sbjpmdW5jdGlvbihiLGMsZCl7dmFyIGU9ZiYma1tjXTtpZighZSYmdyl3KGIpLmJpbmQoYyxkKTtlbHNlIGlmKGV8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIGIuYWRkRXZlbnRMaXN0ZW5lcilpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5hdHRhY2hFdmVudCl7dmFyIGc9ZnVuY3Rpb24oYSl7ZC5jYWxsKGIsYSl9LGg9XCJvblwiK2M7Yi5hdHRhY2hFdmVudChoLGcpO2EuYS53LmRhKGIsZnVuY3Rpb24oKXtiLmRldGFjaEV2ZW50KGgsZyl9KX1lbHNlIHRocm93IEVycm9yKFwiQnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgYWRkRXZlbnRMaXN0ZW5lciBvciBhdHRhY2hFdmVudFwiKTtcbmVsc2UgYi5hZGRFdmVudExpc3RlbmVyKGMsZCwhMSl9LG9hOmZ1bmN0aW9uKGIsYyl7aWYoIWJ8fCFiLm5vZGVUeXBlKXRocm93IEVycm9yKFwiZWxlbWVudCBtdXN0IGJlIGEgRE9NIG5vZGUgd2hlbiBjYWxsaW5nIHRyaWdnZXJFdmVudFwiKTt2YXIgZDtcImlucHV0XCI9PT1hLmEudChiKSYmYi50eXBlJiZcImNsaWNrXCI9PWMudG9Mb3dlckNhc2UoKT8oZD1iLnR5cGUsZD1cImNoZWNrYm94XCI9PWR8fFwicmFkaW9cIj09ZCk6ZD0hMTtpZih3JiYhZCl3KGIpLnRyaWdnZXIoYyk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB2LmNyZWF0ZUV2ZW50KWlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGIuZGlzcGF0Y2hFdmVudClkPXYuY3JlYXRlRXZlbnQoaFtjXXx8XCJIVE1MRXZlbnRzXCIpLGQuaW5pdEV2ZW50KGMsITAsITAscywwLDAsMCwwLDAsITEsITEsITEsITEsMCxiKSxiLmRpc3BhdGNoRXZlbnQoZCk7ZWxzZSB0aHJvdyBFcnJvcihcIlRoZSBzdXBwbGllZCBlbGVtZW50IGRvZXNuJ3Qgc3VwcG9ydCBkaXNwYXRjaEV2ZW50XCIpO1xuZWxzZSBpZihkJiZiLmNsaWNrKWIuY2xpY2soKTtlbHNlIGlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmZpcmVFdmVudCliLmZpcmVFdmVudChcIm9uXCIrYyk7ZWxzZSB0aHJvdyBFcnJvcihcIkJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHRyaWdnZXJpbmcgZXZlbnRzXCIpO30sYzpmdW5jdGlvbihiKXtyZXR1cm4gYS5DKGIpP2IoKTpifSxYYTpmdW5jdGlvbihiKXtyZXR1cm4gYS5DKGIpP2IudigpOmJ9LEJhOmZ1bmN0aW9uKGIsYyxkKXtpZihjKXt2YXIgZj0vXFxTKy9nLGU9Yi5jbGFzc05hbWUubWF0Y2goZil8fFtdO2EuYS51KGMubWF0Y2goZiksZnVuY3Rpb24oYil7YS5hLmVhKGUsYixkKX0pO2IuY2xhc3NOYW1lPWUuam9pbihcIiBcIil9fSxiYjpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5jKGMpO2lmKG51bGw9PT1kfHxkPT09cClkPVwiXCI7dmFyIGY9YS5mLmZpcnN0Q2hpbGQoYik7IWZ8fDMhPWYubm9kZVR5cGV8fGEuZi5uZXh0U2libGluZyhmKT9hLmYuVChiLFtiLm93bmVyRG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZCldKTpcbmYuZGF0YT1kO2EuYS5mYyhiKX0sTWI6ZnVuY3Rpb24oYSxiKXthLm5hbWU9YjtpZig3Pj1mKXRyeXthLm1lcmdlQXR0cmlidXRlcyh2LmNyZWF0ZUVsZW1lbnQoXCI8aW5wdXQgbmFtZT0nXCIrYS5uYW1lK1wiJy8+XCIpLCExKX1jYXRjaChjKXt9fSxmYzpmdW5jdGlvbihhKXs5PD1mJiYoYT0xPT1hLm5vZGVUeXBlP2E6YS5wYXJlbnROb2RlLGEuc3R5bGUmJihhLnN0eWxlLnpvb209YS5zdHlsZS56b29tKSl9LGRjOmZ1bmN0aW9uKGEpe2lmKGYpe3ZhciBiPWEuc3R5bGUud2lkdGg7YS5zdHlsZS53aWR0aD0wO2Euc3R5bGUud2lkdGg9Yn19LHNjOmZ1bmN0aW9uKGIsYyl7Yj1hLmEuYyhiKTtjPWEuYS5jKGMpO2Zvcih2YXIgZD1bXSxmPWI7Zjw9YztmKyspZC5wdXNoKGYpO3JldHVybiBkfSxTOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1bXSxjPTAsZD1hLmxlbmd0aDtjPGQ7YysrKWIucHVzaChhW2NdKTtyZXR1cm4gYn0seWM6Nj09PWYsemM6Nz09PWYsTDpmLHhiOmZ1bmN0aW9uKGIsYyl7Zm9yKHZhciBkPVxuYS5hLlMoYi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpKS5jb25jYXQoYS5hLlMoYi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRleHRhcmVhXCIpKSksZj1cInN0cmluZ1wiPT10eXBlb2YgYz9mdW5jdGlvbihhKXtyZXR1cm4gYS5uYW1lPT09Y306ZnVuY3Rpb24oYSl7cmV0dXJuIGMudGVzdChhLm5hbWUpfSxlPVtdLGs9ZC5sZW5ndGgtMTswPD1rO2stLSlmKGRba10pJiZlLnB1c2goZFtrXSk7cmV0dXJuIGV9LHBjOmZ1bmN0aW9uKGIpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBiJiYoYj1hLmEuY2IoYikpP0QmJkQucGFyc2U/RC5wYXJzZShiKToobmV3IEZ1bmN0aW9uKFwicmV0dXJuIFwiK2IpKSgpOm51bGx9LGViOmZ1bmN0aW9uKGIsYyxkKXtpZighRHx8IUQuc3RyaW5naWZ5KXRocm93IEVycm9yKFwiQ2Fubm90IGZpbmQgSlNPTi5zdHJpbmdpZnkoKS4gU29tZSBicm93c2VycyAoZS5nLiwgSUUgPCA4KSBkb24ndCBzdXBwb3J0IGl0IG5hdGl2ZWx5LCBidXQgeW91IGNhbiBvdmVyY29tZSB0aGlzIGJ5IGFkZGluZyBhIHNjcmlwdCByZWZlcmVuY2UgdG8ganNvbjIuanMsIGRvd25sb2FkYWJsZSBmcm9tIGh0dHA6Ly93d3cuanNvbi5vcmcvanNvbjIuanNcIik7XG5yZXR1cm4gRC5zdHJpbmdpZnkoYS5hLmMoYiksYyxkKX0scWM6ZnVuY3Rpb24oYyxkLGYpe2Y9Znx8e307dmFyIGU9Zi5wYXJhbXN8fHt9LGs9Zi5pbmNsdWRlRmllbGRzfHx0aGlzLnZiLGc9YztpZihcIm9iamVjdFwiPT10eXBlb2YgYyYmXCJmb3JtXCI9PT1hLmEudChjKSlmb3IodmFyIGc9Yy5hY3Rpb24saD1rLmxlbmd0aC0xOzA8PWg7aC0tKWZvcih2YXIgcj1hLmEueGIoYyxrW2hdKSxFPXIubGVuZ3RoLTE7MDw9RTtFLS0pZVtyW0VdLm5hbWVdPXJbRV0udmFsdWU7ZD1hLmEuYyhkKTt2YXIgeT12LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO3kuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjt5LmFjdGlvbj1nO3kubWV0aG9kPVwicG9zdFwiO2Zvcih2YXIgcCBpbiBkKWM9di5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYy50eXBlPVwiaGlkZGVuXCIsYy5uYW1lPXAsYy52YWx1ZT1hLmEuZWIoYS5hLmMoZFtwXSkpLHkuYXBwZW5kQ2hpbGQoYyk7YihlLGZ1bmN0aW9uKGEsYil7dmFyIGM9di5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5jLnR5cGU9XCJoaWRkZW5cIjtjLm5hbWU9YTtjLnZhbHVlPWI7eS5hcHBlbmRDaGlsZChjKX0pO3YuYm9keS5hcHBlbmRDaGlsZCh5KTtmLnN1Ym1pdHRlcj9mLnN1Ym1pdHRlcih5KTp5LnN1Ym1pdCgpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXt5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeSl9LDApfX19KCk7YS5iKFwidXRpbHNcIixhLmEpO2EuYihcInV0aWxzLmFycmF5Rm9yRWFjaFwiLGEuYS51KTthLmIoXCJ1dGlscy5hcnJheUZpcnN0XCIsYS5hLnFiKTthLmIoXCJ1dGlscy5hcnJheUZpbHRlclwiLGEuYS50YSk7YS5iKFwidXRpbHMuYXJyYXlHZXREaXN0aW5jdFZhbHVlc1wiLGEuYS5yYik7YS5iKFwidXRpbHMuYXJyYXlJbmRleE9mXCIsYS5hLm0pO2EuYihcInV0aWxzLmFycmF5TWFwXCIsYS5hLkRhKTthLmIoXCJ1dGlscy5hcnJheVB1c2hBbGxcIixhLmEuZ2EpO2EuYihcInV0aWxzLmFycmF5UmVtb3ZlSXRlbVwiLGEuYS51YSk7YS5iKFwidXRpbHMuZXh0ZW5kXCIsYS5hLmV4dGVuZCk7YS5iKFwidXRpbHMuZmllbGRzSW5jbHVkZWRXaXRoSnNvblBvc3RcIixcbmEuYS52Yik7YS5iKFwidXRpbHMuZ2V0Rm9ybUZpZWxkc1wiLGEuYS54Yik7YS5iKFwidXRpbHMucGVla09ic2VydmFibGVcIixhLmEuWGEpO2EuYihcInV0aWxzLnBvc3RKc29uXCIsYS5hLnFjKTthLmIoXCJ1dGlscy5wYXJzZUpzb25cIixhLmEucGMpO2EuYihcInV0aWxzLnJlZ2lzdGVyRXZlbnRIYW5kbGVyXCIsYS5hLm4pO2EuYihcInV0aWxzLnN0cmluZ2lmeUpzb25cIixhLmEuZWIpO2EuYihcInV0aWxzLnJhbmdlXCIsYS5hLnNjKTthLmIoXCJ1dGlscy50b2dnbGVEb21Ob2RlQ3NzQ2xhc3NcIixhLmEuQmEpO2EuYihcInV0aWxzLnRyaWdnZXJFdmVudFwiLGEuYS5vYSk7YS5iKFwidXRpbHMudW53cmFwT2JzZXJ2YWJsZVwiLGEuYS5jKTthLmIoXCJ1dGlscy5vYmplY3RGb3JFYWNoXCIsYS5hLkcpO2EuYihcInV0aWxzLmFkZE9yUmVtb3ZlSXRlbVwiLGEuYS5lYSk7YS5iKFwidW53cmFwXCIsYS5hLmMpO0Z1bmN0aW9uLnByb3RvdHlwZS5iaW5kfHwoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQ9ZnVuY3Rpb24oYSl7dmFyIGQ9XG50aGlzLGM9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTthPWMuc2hpZnQoKTtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZC5hcHBseShhLGMuY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKX19KTthLmEuZT1uZXcgZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGIsaCl7dmFyIGs9YltjXTtpZigha3x8XCJudWxsXCI9PT1rfHwhZVtrXSl7aWYoIWgpcmV0dXJuIHA7az1iW2NdPVwia29cIitkKys7ZVtrXT17fX1yZXR1cm4gZVtrXX12YXIgZD0wLGM9XCJfX2tvX19cIisobmV3IERhdGUpLmdldFRpbWUoKSxlPXt9O3JldHVybntnZXQ6ZnVuY3Rpb24oYyxkKXt2YXIgZT1hKGMsITEpO3JldHVybiBlPT09cD9wOmVbZF19LHNldDpmdW5jdGlvbihjLGQsZSl7aWYoZSE9PXB8fGEoYywhMSkhPT1wKWEoYywhMClbZF09ZX0sY2xlYXI6ZnVuY3Rpb24oYSl7dmFyIGI9YVtjXTtyZXR1cm4gYj8oZGVsZXRlIGVbYl0sYVtjXT1udWxsLCEwKTohMX0sRjpmdW5jdGlvbigpe3JldHVybiBkKysgK1xuY319fTthLmIoXCJ1dGlscy5kb21EYXRhXCIsYS5hLmUpO2EuYihcInV0aWxzLmRvbURhdGEuY2xlYXJcIixhLmEuZS5jbGVhcik7YS5hLnc9bmV3IGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGQpe3ZhciBmPWEuYS5lLmdldChiLGMpO2Y9PT1wJiZkJiYoZj1bXSxhLmEuZS5zZXQoYixjLGYpKTtyZXR1cm4gZn1mdW5jdGlvbiBkKGMpe3ZhciBlPWIoYywhMSk7aWYoZSlmb3IodmFyIGU9ZS5zbGljZSgwKSxmPTA7ZjxlLmxlbmd0aDtmKyspZVtmXShjKTthLmEuZS5jbGVhcihjKTthLmEudy5jbGVhbkV4dGVybmFsRGF0YShjKTtpZihnW2Mubm9kZVR5cGVdKWZvcihlPWMuZmlyc3RDaGlsZDtjPWU7KWU9Yy5uZXh0U2libGluZyw4PT09Yy5ub2RlVHlwZSYmZChjKX12YXIgYz1hLmEuZS5GKCksZT17MTohMCw4OiEwLDk6ITB9LGc9ezE6ITAsOTohMH07cmV0dXJue2RhOmZ1bmN0aW9uKGEsYyl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgYyl0aHJvdyBFcnJvcihcIkNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbmIoYSwhMCkucHVzaChjKX0sS2I6ZnVuY3Rpb24oZCxlKXt2YXIgZj1iKGQsITEpO2YmJihhLmEudWEoZixlKSwwPT1mLmxlbmd0aCYmYS5hLmUuc2V0KGQsYyxwKSl9LFI6ZnVuY3Rpb24oYil7aWYoZVtiLm5vZGVUeXBlXSYmKGQoYiksZ1tiLm5vZGVUeXBlXSkpe3ZhciBjPVtdO2EuYS5nYShjLGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpKTtmb3IodmFyIGY9MCxtPWMubGVuZ3RoO2Y8bTtmKyspZChjW2ZdKX1yZXR1cm4gYn0scmVtb3ZlTm9kZTpmdW5jdGlvbihiKXthLlIoYik7Yi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYil9LGNsZWFuRXh0ZXJuYWxEYXRhOmZ1bmN0aW9uKGEpe3cmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHcuY2xlYW5EYXRhJiZ3LmNsZWFuRGF0YShbYV0pfX19O2EuUj1hLmEudy5SO2EucmVtb3ZlTm9kZT1hLmEudy5yZW1vdmVOb2RlO2EuYihcImNsZWFuTm9kZVwiLGEuUik7YS5iKFwicmVtb3ZlTm9kZVwiLGEucmVtb3ZlTm9kZSk7YS5iKFwidXRpbHMuZG9tTm9kZURpc3Bvc2FsXCIsXG5hLmEudyk7YS5iKFwidXRpbHMuZG9tTm9kZURpc3Bvc2FsLmFkZERpc3Bvc2VDYWxsYmFja1wiLGEuYS53LmRhKTthLmIoXCJ1dGlscy5kb21Ob2RlRGlzcG9zYWwucmVtb3ZlRGlzcG9zZUNhbGxiYWNrXCIsYS5hLncuS2IpOyhmdW5jdGlvbigpe2EuYS5iYT1mdW5jdGlvbihiKXt2YXIgZDtpZih3KWlmKHcucGFyc2VIVE1MKWQ9dy5wYXJzZUhUTUwoYil8fFtdO2Vsc2V7aWYoKGQ9dy5jbGVhbihbYl0pKSYmZFswXSl7Zm9yKGI9ZFswXTtiLnBhcmVudE5vZGUmJjExIT09Yi5wYXJlbnROb2RlLm5vZGVUeXBlOyliPWIucGFyZW50Tm9kZTtiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKX19ZWxzZXt2YXIgYz1hLmEuY2IoYikudG9Mb3dlckNhc2UoKTtkPXYuY3JlYXRlRWxlbWVudChcImRpdlwiKTtjPWMubWF0Y2goL148KHRoZWFkfHRib2R5fHRmb290KS8pJiZbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdfHwhYy5pbmRleE9mKFwiPHRyXCIpJiZbMixcIjx0YWJsZT48dGJvZHk+XCIsXG5cIjwvdGJvZHk+PC90YWJsZT5cIl18fCghYy5pbmRleE9mKFwiPHRkXCIpfHwhYy5pbmRleE9mKFwiPHRoXCIpKSYmWzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXXx8WzAsXCJcIixcIlwiXTtiPVwiaWdub3JlZDxkaXY+XCIrY1sxXStiK2NbMl0rXCI8L2Rpdj5cIjtmb3IoXCJmdW5jdGlvblwiPT10eXBlb2Ygcy5pbm5lclNoaXY/ZC5hcHBlbmRDaGlsZChzLmlubmVyU2hpdihiKSk6ZC5pbm5lckhUTUw9YjtjWzBdLS07KWQ9ZC5sYXN0Q2hpbGQ7ZD1hLmEuUyhkLmxhc3RDaGlsZC5jaGlsZE5vZGVzKX1yZXR1cm4gZH07YS5hLiRhPWZ1bmN0aW9uKGIsZCl7YS5hLkthKGIpO2Q9YS5hLmMoZCk7aWYobnVsbCE9PWQmJmQhPT1wKWlmKFwic3RyaW5nXCIhPXR5cGVvZiBkJiYoZD1kLnRvU3RyaW5nKCkpLHcpdyhiKS5odG1sKGQpO2Vsc2UgZm9yKHZhciBjPWEuYS5iYShkKSxlPTA7ZTxjLmxlbmd0aDtlKyspYi5hcHBlbmRDaGlsZChjW2VdKX19KSgpO2EuYihcInV0aWxzLnBhcnNlSHRtbEZyYWdtZW50XCIsXG5hLmEuYmEpO2EuYihcInV0aWxzLnNldEh0bWxcIixhLmEuJGEpO2EuRD1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYyxkKXtpZihjKWlmKDg9PWMubm9kZVR5cGUpe3ZhciBnPWEuRC5HYihjLm5vZGVWYWx1ZSk7bnVsbCE9ZyYmZC5wdXNoKHtiYzpjLG1jOmd9KX1lbHNlIGlmKDE9PWMubm9kZVR5cGUpZm9yKHZhciBnPTAsaD1jLmNoaWxkTm9kZXMsaz1oLmxlbmd0aDtnPGs7ZysrKWIoaFtnXSxkKX12YXIgZD17fTtyZXR1cm57VWE6ZnVuY3Rpb24oYSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgYSl0aHJvdyBFcnJvcihcIllvdSBjYW4gb25seSBwYXNzIGEgZnVuY3Rpb24gdG8ga28ubWVtb2l6YXRpb24ubWVtb2l6ZSgpXCIpO3ZhciBiPSg0Mjk0OTY3Mjk2KigxK01hdGgucmFuZG9tKCkpfDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSkrKDQyOTQ5NjcyOTYqKDErTWF0aC5yYW5kb20oKSl8MCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtkW2JdPWE7cmV0dXJuXCJcXHgzYyEtLVtrb19tZW1vOlwiK1xuYitcIl0tLVxceDNlXCJ9LFJiOmZ1bmN0aW9uKGEsYil7dmFyIGc9ZFthXTtpZihnPT09cCl0aHJvdyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYW55IG1lbW8gd2l0aCBJRCBcIithK1wiLiBQZXJoYXBzIGl0J3MgYWxyZWFkeSBiZWVuIHVubWVtb2l6ZWQuXCIpO3RyeXtyZXR1cm4gZy5hcHBseShudWxsLGJ8fFtdKSwhMH1maW5hbGx5e2RlbGV0ZSBkW2FdfX0sU2I6ZnVuY3Rpb24oYyxkKXt2YXIgZz1bXTtiKGMsZyk7Zm9yKHZhciBoPTAsaz1nLmxlbmd0aDtoPGs7aCsrKXt2YXIgZj1nW2hdLmJjLG09W2ZdO2QmJmEuYS5nYShtLGQpO2EuRC5SYihnW2hdLm1jLG0pO2Yubm9kZVZhbHVlPVwiXCI7Zi5wYXJlbnROb2RlJiZmLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZil9fSxHYjpmdW5jdGlvbihhKXtyZXR1cm4oYT1hLm1hdGNoKC9eXFxba29fbWVtb1xcOiguKj8pXFxdJC8pKT9hWzFdOm51bGx9fX0oKTthLmIoXCJtZW1vaXphdGlvblwiLGEuRCk7YS5iKFwibWVtb2l6YXRpb24ubWVtb2l6ZVwiLGEuRC5VYSk7XG5hLmIoXCJtZW1vaXphdGlvbi51bm1lbW9pemVcIixhLkQuUmIpO2EuYihcIm1lbW9pemF0aW9uLnBhcnNlTWVtb1RleHRcIixhLkQuR2IpO2EuYihcIm1lbW9pemF0aW9uLnVubWVtb2l6ZURvbU5vZGVBbmREZXNjZW5kYW50c1wiLGEuRC5TYik7YS5MYT17dGhyb3R0bGU6ZnVuY3Rpb24oYixkKXtiLnRocm90dGxlRXZhbHVhdGlvbj1kO3ZhciBjPW51bGw7cmV0dXJuIGEuaih7cmVhZDpiLHdyaXRlOmZ1bmN0aW9uKGEpe2NsZWFyVGltZW91dChjKTtjPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtiKGEpfSxkKX19KX0scmF0ZUxpbWl0OmZ1bmN0aW9uKGEsZCl7dmFyIGMsZSxnO1wibnVtYmVyXCI9PXR5cGVvZiBkP2M9ZDooYz1kLnRpbWVvdXQsZT1kLm1ldGhvZCk7Zz1cIm5vdGlmeVdoZW5DaGFuZ2VzU3RvcFwiPT1lP1Q6UzthLlRhKGZ1bmN0aW9uKGEpe3JldHVybiBnKGEsYyl9KX0sbm90aWZ5OmZ1bmN0aW9uKGEsZCl7YS5lcXVhbGl0eUNvbXBhcmVyPVwiYWx3YXlzXCI9PWQ/bnVsbDpIfX07dmFyIFI9XG57dW5kZWZpbmVkOjEsXCJib29sZWFuXCI6MSxudW1iZXI6MSxzdHJpbmc6MX07YS5iKFwiZXh0ZW5kZXJzXCIsYS5MYSk7YS5QYj1mdW5jdGlvbihiLGQsYyl7dGhpcy50YXJnZXQ9Yjt0aGlzLndhPWQ7dGhpcy5hYz1jO3RoaXMuQ2I9ITE7YS5BKHRoaXMsXCJkaXNwb3NlXCIsdGhpcy5LKX07YS5QYi5wcm90b3R5cGUuSz1mdW5jdGlvbigpe3RoaXMuQ2I9ITA7dGhpcy5hYygpfTthLlA9ZnVuY3Rpb24oKXthLmEuQWEodGhpcyxhLlAuZm4pO3RoaXMuTT17fX07dmFyIEc9XCJjaGFuZ2VcIixBPXtVOmZ1bmN0aW9uKGIsZCxjKXt2YXIgZT10aGlzO2M9Y3x8Rzt2YXIgZz1uZXcgYS5QYihlLGQ/Yi5iaW5kKGQpOmIsZnVuY3Rpb24oKXthLmEudWEoZS5NW2NdLGcpO2UubmImJmUubmIoKX0pO2UudmEmJmUudmEoYyk7ZS5NW2NdfHwoZS5NW2NdPVtdKTtlLk1bY10ucHVzaChnKTtyZXR1cm4gZ30sbm90aWZ5U3Vic2NyaWJlcnM6ZnVuY3Rpb24oYixkKXtkPWR8fEc7aWYodGhpcy5BYihkKSl0cnl7YS5rLkVhKCk7XG5mb3IodmFyIGM9dGhpcy5NW2RdLnNsaWNlKDApLGU9MCxnO2c9Y1tlXTsrK2UpZy5DYnx8Zy53YShiKX1maW5hbGx5e2Euay5lbmQoKX19LFRhOmZ1bmN0aW9uKGIpe3ZhciBkPXRoaXMsYz1hLkMoZCksZSxnLGg7ZC5xYXx8KGQucWE9ZC5ub3RpZnlTdWJzY3JpYmVycyxkLm5vdGlmeVN1YnNjcmliZXJzPWZ1bmN0aW9uKGEsYil7YiYmYiE9PUc/XCJiZWZvcmVDaGFuZ2VcIj09PWI/ZC5rYihhKTpkLnFhKGEsYik6ZC5sYihhKX0pO3ZhciBrPWIoZnVuY3Rpb24oKXtjJiZoPT09ZCYmKGg9ZCgpKTtlPSExO2QuUGEoZyxoKSYmZC5xYShnPWgpfSk7ZC5sYj1mdW5jdGlvbihhKXtlPSEwO2g9YTtrKCl9O2Qua2I9ZnVuY3Rpb24oYSl7ZXx8KGc9YSxkLnFhKGEsXCJiZWZvcmVDaGFuZ2VcIikpfX0sQWI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuTVthXSYmdGhpcy5NW2FdLmxlbmd0aH0seWI6ZnVuY3Rpb24oKXt2YXIgYj0wO2EuYS5HKHRoaXMuTSxmdW5jdGlvbihhLGMpe2IrPWMubGVuZ3RofSk7XG5yZXR1cm4gYn0sUGE6ZnVuY3Rpb24oYSxkKXtyZXR1cm4hdGhpcy5lcXVhbGl0eUNvbXBhcmVyfHwhdGhpcy5lcXVhbGl0eUNvbXBhcmVyKGEsZCl9LGV4dGVuZDpmdW5jdGlvbihiKXt2YXIgZD10aGlzO2ImJmEuYS5HKGIsZnVuY3Rpb24oYixlKXt2YXIgZz1hLkxhW2JdO1wiZnVuY3Rpb25cIj09dHlwZW9mIGcmJihkPWcoZCxlKXx8ZCl9KTtyZXR1cm4gZH19O2EuQShBLFwic3Vic2NyaWJlXCIsQS5VKTthLkEoQSxcImV4dGVuZFwiLEEuZXh0ZW5kKTthLkEoQSxcImdldFN1YnNjcmlwdGlvbnNDb3VudFwiLEEueWIpO2EuYS54YSYmYS5hLnphKEEsRnVuY3Rpb24ucHJvdG90eXBlKTthLlAuZm49QTthLkRiPWZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLlUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGEubm90aWZ5U3Vic2NyaWJlcnN9O2EuYihcInN1YnNjcmliYWJsZVwiLGEuUCk7YS5iKFwiaXNTdWJzY3JpYmFibGVcIixhLkRiKTthLlk9YS5rPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihhKXtjLnB1c2goZSk7XG5lPWF9ZnVuY3Rpb24gZCgpe2U9Yy5wb3AoKX12YXIgYz1bXSxlLGc9MDtyZXR1cm57RWE6YixlbmQ6ZCxKYjpmdW5jdGlvbihiKXtpZihlKXtpZighYS5EYihiKSl0aHJvdyBFcnJvcihcIk9ubHkgc3Vic2NyaWJhYmxlIHRoaW5ncyBjYW4gYWN0IGFzIGRlcGVuZGVuY2llc1wiKTtlLndhKGIsYi5WYnx8KGIuVmI9KytnKSl9fSxCOmZ1bmN0aW9uKGEsYyxmKXt0cnl7cmV0dXJuIGIoKSxhLmFwcGx5KGMsZnx8W10pfWZpbmFsbHl7ZCgpfX0sbGE6ZnVuY3Rpb24oKXtpZihlKXJldHVybiBlLnMubGEoKX0sbWE6ZnVuY3Rpb24oKXtpZihlKXJldHVybiBlLm1hfX19KCk7YS5iKFwiY29tcHV0ZWRDb250ZXh0XCIsYS5ZKTthLmIoXCJjb21wdXRlZENvbnRleHQuZ2V0RGVwZW5kZW5jaWVzQ291bnRcIixhLlkubGEpO2EuYihcImNvbXB1dGVkQ29udGV4dC5pc0luaXRpYWxcIixhLlkubWEpO2EuYihcImNvbXB1dGVkQ29udGV4dC5pc1NsZWVwaW5nXCIsYS5ZLkFjKTthLnA9ZnVuY3Rpb24oYil7ZnVuY3Rpb24gZCgpe2lmKDA8XG5hcmd1bWVudHMubGVuZ3RoKXJldHVybiBkLlBhKGMsYXJndW1lbnRzWzBdKSYmKGQuWCgpLGM9YXJndW1lbnRzWzBdLGQuVygpKSx0aGlzO2Euay5KYihkKTtyZXR1cm4gY312YXIgYz1iO2EuUC5jYWxsKGQpO2EuYS5BYShkLGEucC5mbik7ZC52PWZ1bmN0aW9uKCl7cmV0dXJuIGN9O2QuVz1mdW5jdGlvbigpe2Qubm90aWZ5U3Vic2NyaWJlcnMoYyl9O2QuWD1mdW5jdGlvbigpe2Qubm90aWZ5U3Vic2NyaWJlcnMoYyxcImJlZm9yZUNoYW5nZVwiKX07YS5BKGQsXCJwZWVrXCIsZC52KTthLkEoZCxcInZhbHVlSGFzTXV0YXRlZFwiLGQuVyk7YS5BKGQsXCJ2YWx1ZVdpbGxNdXRhdGVcIixkLlgpO3JldHVybiBkfTthLnAuZm49e2VxdWFsaXR5Q29tcGFyZXI6SH07dmFyIEY9YS5wLnJjPVwiX19rb19wcm90b19fXCI7YS5wLmZuW0ZdPWEucDthLmEueGEmJmEuYS56YShhLnAuZm4sYS5QLmZuKTthLk1hPWZ1bmN0aW9uKGIsZCl7cmV0dXJuIG51bGw9PT1ifHxiPT09cHx8YltGXT09PXA/ITE6YltGXT09PVxuZD8hMDphLk1hKGJbRl0sZCl9O2EuQz1mdW5jdGlvbihiKXtyZXR1cm4gYS5NYShiLGEucCl9O2EuUmE9ZnVuY3Rpb24oYil7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgYiYmYltGXT09PWEucHx8XCJmdW5jdGlvblwiPT10eXBlb2YgYiYmYltGXT09PWEuaiYmYi5oYz8hMDohMX07YS5iKFwib2JzZXJ2YWJsZVwiLGEucCk7YS5iKFwiaXNPYnNlcnZhYmxlXCIsYS5DKTthLmIoXCJpc1dyaXRlYWJsZU9ic2VydmFibGVcIixhLlJhKTthLmIoXCJpc1dyaXRhYmxlT2JzZXJ2YWJsZVwiLGEuUmEpO2EuYWE9ZnVuY3Rpb24oYil7Yj1ifHxbXTtpZihcIm9iamVjdFwiIT10eXBlb2YgYnx8IShcImxlbmd0aFwiaW4gYikpdGhyb3cgRXJyb3IoXCJUaGUgYXJndW1lbnQgcGFzc2VkIHdoZW4gaW5pdGlhbGl6aW5nIGFuIG9ic2VydmFibGUgYXJyYXkgbXVzdCBiZSBhbiBhcnJheSwgb3IgbnVsbCwgb3IgdW5kZWZpbmVkLlwiKTtiPWEucChiKTthLmEuQWEoYixhLmFhLmZuKTtyZXR1cm4gYi5leHRlbmQoe3RyYWNrQXJyYXlDaGFuZ2VzOiEwfSl9O1xuYS5hYS5mbj17cmVtb3ZlOmZ1bmN0aW9uKGIpe2Zvcih2YXIgZD10aGlzLnYoKSxjPVtdLGU9XCJmdW5jdGlvblwiIT10eXBlb2YgYnx8YS5DKGIpP2Z1bmN0aW9uKGEpe3JldHVybiBhPT09Yn06YixnPTA7ZzxkLmxlbmd0aDtnKyspe3ZhciBoPWRbZ107ZShoKSYmKDA9PT1jLmxlbmd0aCYmdGhpcy5YKCksYy5wdXNoKGgpLGQuc3BsaWNlKGcsMSksZy0tKX1jLmxlbmd0aCYmdGhpcy5XKCk7cmV0dXJuIGN9LHJlbW92ZUFsbDpmdW5jdGlvbihiKXtpZihiPT09cCl7dmFyIGQ9dGhpcy52KCksYz1kLnNsaWNlKDApO3RoaXMuWCgpO2Quc3BsaWNlKDAsZC5sZW5ndGgpO3RoaXMuVygpO3JldHVybiBjfXJldHVybiBiP3RoaXMucmVtb3ZlKGZ1bmN0aW9uKGMpe3JldHVybiAwPD1hLmEubShiLGMpfSk6W119LGRlc3Ryb3k6ZnVuY3Rpb24oYil7dmFyIGQ9dGhpcy52KCksYz1cImZ1bmN0aW9uXCIhPXR5cGVvZiBifHxhLkMoYik/ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1ifTpiO3RoaXMuWCgpO1xuZm9yKHZhciBlPWQubGVuZ3RoLTE7MDw9ZTtlLS0pYyhkW2VdKSYmKGRbZV0uX2Rlc3Ryb3k9ITApO3RoaXMuVygpfSxkZXN0cm95QWxsOmZ1bmN0aW9uKGIpe3JldHVybiBiPT09cD90aGlzLmRlc3Ryb3koZnVuY3Rpb24oKXtyZXR1cm4hMH0pOmI/dGhpcy5kZXN0cm95KGZ1bmN0aW9uKGQpe3JldHVybiAwPD1hLmEubShiLGQpfSk6W119LGluZGV4T2Y6ZnVuY3Rpb24oYil7dmFyIGQ9dGhpcygpO3JldHVybiBhLmEubShkLGIpfSxyZXBsYWNlOmZ1bmN0aW9uKGEsZCl7dmFyIGM9dGhpcy5pbmRleE9mKGEpOzA8PWMmJih0aGlzLlgoKSx0aGlzLnYoKVtjXT1kLHRoaXMuVygpKX19O2EuYS51KFwicG9wIHB1c2ggcmV2ZXJzZSBzaGlmdCBzb3J0IHNwbGljZSB1bnNoaWZ0XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGIpe2EuYWEuZm5bYl09ZnVuY3Rpb24oKXt2YXIgYT10aGlzLnYoKTt0aGlzLlgoKTt0aGlzLnNiKGEsYixhcmd1bWVudHMpO2E9YVtiXS5hcHBseShhLGFyZ3VtZW50cyk7dGhpcy5XKCk7XG5yZXR1cm4gYX19KTthLmEudShbXCJzbGljZVwiXSxmdW5jdGlvbihiKXthLmFhLmZuW2JdPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcygpO3JldHVybiBhW2JdLmFwcGx5KGEsYXJndW1lbnRzKX19KTthLmEueGEmJmEuYS56YShhLmFhLmZuLGEucC5mbik7YS5iKFwib2JzZXJ2YWJsZUFycmF5XCIsYS5hYSk7dmFyIEo9XCJhcnJheUNoYW5nZVwiO2EuTGEudHJhY2tBcnJheUNoYW5nZXM9ZnVuY3Rpb24oYil7ZnVuY3Rpb24gZCgpe2lmKCFjKXtjPSEwO3ZhciBkPWIubm90aWZ5U3Vic2NyaWJlcnM7Yi5ub3RpZnlTdWJzY3JpYmVycz1mdW5jdGlvbihhLGIpe2ImJmIhPT1HfHwrK2c7cmV0dXJuIGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfTt2YXIgZj1bXS5jb25jYXQoYi52KCl8fFtdKTtlPW51bGw7Yi5VKGZ1bmN0aW9uKGMpe2M9W10uY29uY2F0KGN8fFtdKTtpZihiLkFiKEopKXt2YXIgZDtpZighZXx8MTxnKWU9YS5hLkZhKGYsYyx7c3BhcnNlOiEwfSk7ZD1lO2QubGVuZ3RoJiZiLm5vdGlmeVN1YnNjcmliZXJzKGQsXG5KKX1mPWM7ZT1udWxsO2c9MH0pfX1pZighYi5zYil7dmFyIGM9ITEsZT1udWxsLGc9MCxoPWIuVTtiLlU9Yi5zdWJzY3JpYmU9ZnVuY3Rpb24oYSxiLGMpe2M9PT1KJiZkKCk7cmV0dXJuIGguYXBwbHkodGhpcyxhcmd1bWVudHMpfTtiLnNiPWZ1bmN0aW9uKGIsZCxtKXtmdW5jdGlvbiBsKGEsYixjKXtyZXR1cm4gcVtxLmxlbmd0aF09e3N0YXR1czphLHZhbHVlOmIsaW5kZXg6Y319aWYoYyYmIWcpe3ZhciBxPVtdLGg9Yi5sZW5ndGgsdD1tLmxlbmd0aCx6PTA7c3dpdGNoKGQpe2Nhc2UgXCJwdXNoXCI6ej1oO2Nhc2UgXCJ1bnNoaWZ0XCI6Zm9yKGQ9MDtkPHQ7ZCsrKWwoXCJhZGRlZFwiLG1bZF0seitkKTticmVhaztjYXNlIFwicG9wXCI6ej1oLTE7Y2FzZSBcInNoaWZ0XCI6aCYmbChcImRlbGV0ZWRcIixiW3pdLHopO2JyZWFrO2Nhc2UgXCJzcGxpY2VcIjpkPU1hdGgubWluKE1hdGgubWF4KDAsMD5tWzBdP2grbVswXTptWzBdKSxoKTtmb3IodmFyIGg9MT09PXQ/aDpNYXRoLm1pbihkKyhtWzFdfHwwKSxcbmgpLHQ9ZCt0LTIsej1NYXRoLm1heChoLHQpLHU9W10scj1bXSxFPTI7ZDx6OysrZCwrK0UpZDxoJiZyLnB1c2gobChcImRlbGV0ZWRcIixiW2RdLGQpKSxkPHQmJnUucHVzaChsKFwiYWRkZWRcIixtW0VdLGQpKTthLmEud2Iocix1KTticmVhaztkZWZhdWx0OnJldHVybn1lPXF9fX19O2Eucz1hLmo9ZnVuY3Rpb24oYixkLGMpe2Z1bmN0aW9uIGUoKXthLmEuRyh2LGZ1bmN0aW9uKGEsYil7Yi5LKCl9KTt2PXt9fWZ1bmN0aW9uIGcoKXtlKCk7Qz0wO3U9ITA7bj0hMX1mdW5jdGlvbiBoKCl7dmFyIGE9Zi50aHJvdHRsZUV2YWx1YXRpb247YSYmMDw9YT8oY2xlYXJUaW1lb3V0KFApLFA9c2V0VGltZW91dChrLGEpKTpmLmliP2YuaWIoKTprKCl9ZnVuY3Rpb24gayhiKXtpZih0KXtpZihFKXRocm93IEVycm9yKFwiQSAncHVyZScgY29tcHV0ZWQgbXVzdCBub3QgYmUgY2FsbGVkIHJlY3Vyc2l2ZWx5XCIpO31lbHNlIGlmKCF1KXtpZih3JiZ3KCkpe2lmKCF6KXtzKCk7cmV0dXJufX1lbHNlIHo9ITE7XG50PSEwO2lmKHkpdHJ5e3ZhciBjPXt9O2Euay5FYSh7d2E6ZnVuY3Rpb24oYSxiKXtjW2JdfHwoY1tiXT0xLCsrQyl9LHM6ZixtYTpwfSk7Qz0wO3E9ci5jYWxsKGQpfWZpbmFsbHl7YS5rLmVuZCgpLHQ9ITF9ZWxzZSB0cnl7dmFyIGU9dixtPUM7YS5rLkVhKHt3YTpmdW5jdGlvbihhLGIpe3V8fChtJiZlW2JdPyh2W2JdPWVbYl0sKytDLGRlbGV0ZSBlW2JdLC0tbSk6dltiXXx8KHZbYl09YS5VKGgpLCsrQykpfSxzOmYsbWE6RT9wOiFDfSk7dj17fTtDPTA7dHJ5e3ZhciBsPWQ/ci5jYWxsKGQpOnIoKX1maW5hbGx5e2Euay5lbmQoKSxtJiZhLmEuRyhlLGZ1bmN0aW9uKGEsYil7Yi5LKCl9KSxuPSExfWYuUGEocSxsKSYmKGYubm90aWZ5U3Vic2NyaWJlcnMocSxcImJlZm9yZUNoYW5nZVwiKSxxPWwsITAhPT1iJiZmLm5vdGlmeVN1YnNjcmliZXJzKHEpKX1maW5hbGx5e3Q9ITF9Q3x8cygpfX1mdW5jdGlvbiBmKCl7aWYoMDxhcmd1bWVudHMubGVuZ3RoKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgTylPLmFwcGx5KGQsXG5hcmd1bWVudHMpO2Vsc2UgdGhyb3cgRXJyb3IoXCJDYW5ub3Qgd3JpdGUgYSB2YWx1ZSB0byBhIGtvLmNvbXB1dGVkIHVubGVzcyB5b3Ugc3BlY2lmeSBhICd3cml0ZScgb3B0aW9uLiBJZiB5b3Ugd2lzaCB0byByZWFkIHRoZSBjdXJyZW50IHZhbHVlLCBkb24ndCBwYXNzIGFueSBwYXJhbWV0ZXJzLlwiKTtyZXR1cm4gdGhpc31hLmsuSmIoZik7biYmayghMCk7cmV0dXJuIHF9ZnVuY3Rpb24gbSgpe24mJiFDJiZrKCEwKTtyZXR1cm4gcX1mdW5jdGlvbiBsKCl7cmV0dXJuIG58fDA8Q312YXIgcSxuPSEwLHQ9ITEsej0hMSx1PSExLHI9YixFPSExLHk9ITE7ciYmXCJvYmplY3RcIj09dHlwZW9mIHI/KGM9cixyPWMucmVhZCk6KGM9Y3x8e30scnx8KHI9Yy5yZWFkKSk7aWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygcil0aHJvdyBFcnJvcihcIlBhc3MgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBrby5jb21wdXRlZFwiKTt2YXIgTz1jLndyaXRlLHg9Yy5kaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWR8fFxuYy5vfHxudWxsLEI9Yy5kaXNwb3NlV2hlbnx8Yy5JYSx3PUIscz1nLHY9e30sQz0wLFA9bnVsbDtkfHwoZD1jLm93bmVyKTthLlAuY2FsbChmKTthLmEuQWEoZixhLmouZm4pO2Yudj1tO2YubGE9ZnVuY3Rpb24oKXtyZXR1cm4gQ307Zi5oYz1cImZ1bmN0aW9uXCI9PT10eXBlb2YgYy53cml0ZTtmLks9ZnVuY3Rpb24oKXtzKCl9O2YuWj1sO3ZhciBBPWYuVGE7Zi5UYT1mdW5jdGlvbihhKXtBLmNhbGwoZixhKTtmLmliPWZ1bmN0aW9uKCl7Zi5rYihxKTtuPSEwO2YubGIoZil9fTtjLnB1cmU/KHk9RT0hMCxmLnZhPWZ1bmN0aW9uKCl7eSYmKHk9ITEsayghMCkpfSxmLm5iPWZ1bmN0aW9uKCl7Zi55YigpfHwoZSgpLHk9bj0hMCl9KTpjLmRlZmVyRXZhbHVhdGlvbiYmKGYudmE9ZnVuY3Rpb24oKXttKCk7ZGVsZXRlIGYudmF9KTthLkEoZixcInBlZWtcIixmLnYpO2EuQShmLFwiZGlzcG9zZVwiLGYuSyk7YS5BKGYsXCJpc0FjdGl2ZVwiLGYuWik7YS5BKGYsXCJnZXREZXBlbmRlbmNpZXNDb3VudFwiLFxuZi5sYSk7eCYmKHo9ITAseC5ub2RlVHlwZSYmKHc9ZnVuY3Rpb24oKXtyZXR1cm4hYS5hLkphKHgpfHxCJiZCKCl9KSk7eXx8Yy5kZWZlckV2YWx1YXRpb258fGsoKTt4JiZsKCkmJngubm9kZVR5cGUmJihzPWZ1bmN0aW9uKCl7YS5hLncuS2IoeCxzKTtnKCl9LGEuYS53LmRhKHgscykpO3JldHVybiBmfTthLmpjPWZ1bmN0aW9uKGIpe3JldHVybiBhLk1hKGIsYS5qKX07QT1hLnAucmM7YS5qW0FdPWEucDthLmouZm49e2VxdWFsaXR5Q29tcGFyZXI6SH07YS5qLmZuW0FdPWEuajthLmEueGEmJmEuYS56YShhLmouZm4sYS5QLmZuKTthLmIoXCJkZXBlbmRlbnRPYnNlcnZhYmxlXCIsYS5qKTthLmIoXCJjb21wdXRlZFwiLGEuaik7YS5iKFwiaXNDb21wdXRlZFwiLGEuamMpO2EuSWI9ZnVuY3Rpb24oYixkKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYilyZXR1cm4gYS5zKGIsZCx7cHVyZTohMH0pO2I9YS5hLmV4dGVuZCh7fSxiKTtiLnB1cmU9ITA7cmV0dXJuIGEucyhiLGQpfTthLmIoXCJwdXJlQ29tcHV0ZWRcIixcbmEuSWIpOyhmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYSxnLGgpe2g9aHx8bmV3IGM7YT1nKGEpO2lmKFwib2JqZWN0XCIhPXR5cGVvZiBhfHxudWxsPT09YXx8YT09PXB8fGEgaW5zdGFuY2VvZiBEYXRlfHxhIGluc3RhbmNlb2YgU3RyaW5nfHxhIGluc3RhbmNlb2YgTnVtYmVyfHxhIGluc3RhbmNlb2YgQm9vbGVhbilyZXR1cm4gYTt2YXIgaz1hIGluc3RhbmNlb2YgQXJyYXk/W106e307aC5zYXZlKGEsayk7ZChhLGZ1bmN0aW9uKGMpe3ZhciBkPWcoYVtjXSk7c3dpdGNoKHR5cGVvZiBkKXtjYXNlIFwiYm9vbGVhblwiOmNhc2UgXCJudW1iZXJcIjpjYXNlIFwic3RyaW5nXCI6Y2FzZSBcImZ1bmN0aW9uXCI6a1tjXT1kO2JyZWFrO2Nhc2UgXCJvYmplY3RcIjpjYXNlIFwidW5kZWZpbmVkXCI6dmFyIGw9aC5nZXQoZCk7a1tjXT1sIT09cD9sOmIoZCxnLGgpfX0pO3JldHVybiBrfWZ1bmN0aW9uIGQoYSxiKXtpZihhIGluc3RhbmNlb2YgQXJyYXkpe2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKWIoYyk7XCJmdW5jdGlvblwiPT1cbnR5cGVvZiBhLnRvSlNPTiYmYihcInRvSlNPTlwiKX1lbHNlIGZvcihjIGluIGEpYihjKX1mdW5jdGlvbiBjKCl7dGhpcy5rZXlzPVtdO3RoaXMuaGI9W119YS5RYj1mdW5jdGlvbihjKXtpZigwPT1hcmd1bWVudHMubGVuZ3RoKXRocm93IEVycm9yKFwiV2hlbiBjYWxsaW5nIGtvLnRvSlMsIHBhc3MgdGhlIG9iamVjdCB5b3Ugd2FudCB0byBjb252ZXJ0LlwiKTtyZXR1cm4gYihjLGZ1bmN0aW9uKGIpe2Zvcih2YXIgYz0wO2EuQyhiKSYmMTA+YztjKyspYj1iKCk7cmV0dXJuIGJ9KX07YS50b0pTT049ZnVuY3Rpb24oYixjLGQpe2I9YS5RYihiKTtyZXR1cm4gYS5hLmViKGIsYyxkKX07Yy5wcm90b3R5cGU9e3NhdmU6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEubSh0aGlzLmtleXMsYik7MDw9ZD90aGlzLmhiW2RdPWM6KHRoaXMua2V5cy5wdXNoKGIpLHRoaXMuaGIucHVzaChjKSl9LGdldDpmdW5jdGlvbihiKXtiPWEuYS5tKHRoaXMua2V5cyxiKTtyZXR1cm4gMDw9Yj90aGlzLmhiW2JdOnB9fX0pKCk7XG5hLmIoXCJ0b0pTXCIsYS5RYik7YS5iKFwidG9KU09OXCIsYS50b0pTT04pOyhmdW5jdGlvbigpe2EuaT17cTpmdW5jdGlvbihiKXtzd2l0Y2goYS5hLnQoYikpe2Nhc2UgXCJvcHRpb25cIjpyZXR1cm4hMD09PWIuX19rb19faGFzRG9tRGF0YU9wdGlvblZhbHVlX18/YS5hLmUuZ2V0KGIsYS5kLm9wdGlvbnMuVmEpOjc+PWEuYS5MP2IuZ2V0QXR0cmlidXRlTm9kZShcInZhbHVlXCIpJiZiLmdldEF0dHJpYnV0ZU5vZGUoXCJ2YWx1ZVwiKS5zcGVjaWZpZWQ/Yi52YWx1ZTpiLnRleHQ6Yi52YWx1ZTtjYXNlIFwic2VsZWN0XCI6cmV0dXJuIDA8PWIuc2VsZWN0ZWRJbmRleD9hLmkucShiLm9wdGlvbnNbYi5zZWxlY3RlZEluZGV4XSk6cDtkZWZhdWx0OnJldHVybiBiLnZhbHVlfX0sY2E6ZnVuY3Rpb24oYixkLGMpe3N3aXRjaChhLmEudChiKSl7Y2FzZSBcIm9wdGlvblwiOnN3aXRjaCh0eXBlb2YgZCl7Y2FzZSBcInN0cmluZ1wiOmEuYS5lLnNldChiLGEuZC5vcHRpb25zLlZhLHApO1wiX19rb19faGFzRG9tRGF0YU9wdGlvblZhbHVlX19cImluXG5iJiZkZWxldGUgYi5fX2tvX19oYXNEb21EYXRhT3B0aW9uVmFsdWVfXztiLnZhbHVlPWQ7YnJlYWs7ZGVmYXVsdDphLmEuZS5zZXQoYixhLmQub3B0aW9ucy5WYSxkKSxiLl9fa29fX2hhc0RvbURhdGFPcHRpb25WYWx1ZV9fPSEwLGIudmFsdWU9XCJudW1iZXJcIj09PXR5cGVvZiBkP2Q6XCJcIn1icmVhaztjYXNlIFwic2VsZWN0XCI6aWYoXCJcIj09PWR8fG51bGw9PT1kKWQ9cDtmb3IodmFyIGU9LTEsZz0wLGg9Yi5vcHRpb25zLmxlbmd0aCxrO2c8aDsrK2cpaWYoaz1hLmkucShiLm9wdGlvbnNbZ10pLGs9PWR8fFwiXCI9PWsmJmQ9PT1wKXtlPWc7YnJlYWt9aWYoY3x8MDw9ZXx8ZD09PXAmJjE8Yi5zaXplKWIuc2VsZWN0ZWRJbmRleD1lO2JyZWFrO2RlZmF1bHQ6aWYobnVsbD09PWR8fGQ9PT1wKWQ9XCJcIjtiLnZhbHVlPWR9fX19KSgpO2EuYihcInNlbGVjdEV4dGVuc2lvbnNcIixhLmkpO2EuYihcInNlbGVjdEV4dGVuc2lvbnMucmVhZFZhbHVlXCIsYS5pLnEpO2EuYihcInNlbGVjdEV4dGVuc2lvbnMud3JpdGVWYWx1ZVwiLFxuYS5pLmNhKTthLmg9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIpe2I9YS5hLmNiKGIpOzEyMz09PWIuY2hhckNvZGVBdCgwKSYmKGI9Yi5zbGljZSgxLC0xKSk7dmFyIGM9W10sZD1iLm1hdGNoKGUpLGssbix0PTA7aWYoZCl7ZC5wdXNoKFwiLFwiKTtmb3IodmFyIHo9MCx1O3U9ZFt6XTsrK3ope3ZhciByPXUuY2hhckNvZGVBdCgwKTtpZig0ND09PXIpe2lmKDA+PXQpe2smJmMucHVzaChuP3trZXk6ayx2YWx1ZTpuLmpvaW4oXCJcIil9Ont1bmtub3duOmt9KTtrPW49dD0wO2NvbnRpbnVlfX1lbHNlIGlmKDU4PT09cil7aWYoIW4pY29udGludWV9ZWxzZSBpZig0Nz09PXImJnomJjE8dS5sZW5ndGgpKHI9ZFt6LTFdLm1hdGNoKGcpKSYmIWhbclswXV0mJihiPWIuc3Vic3RyKGIuaW5kZXhPZih1KSsxKSxkPWIubWF0Y2goZSksZC5wdXNoKFwiLFwiKSx6PS0xLHU9XCIvXCIpO2Vsc2UgaWYoNDA9PT1yfHwxMjM9PT1yfHw5MT09PXIpKyt0O2Vsc2UgaWYoNDE9PT1yfHwxMjU9PT1yfHw5Mz09PXIpLS10O1xuZWxzZSBpZighayYmIW4pe2s9MzQ9PT1yfHwzOT09PXI/dS5zbGljZSgxLC0xKTp1O2NvbnRpbnVlfW4/bi5wdXNoKHUpOm49W3VdfX1yZXR1cm4gY312YXIgZD1bXCJ0cnVlXCIsXCJmYWxzZVwiLFwibnVsbFwiLFwidW5kZWZpbmVkXCJdLGM9L14oPzpbJF9hLXpdWyRcXHddKnwoLispKFxcLlxccypbJF9hLXpdWyRcXHddKnxcXFsuK1xcXSkpJC9pLGU9UmVnRXhwKFwiXFxcIig/OlteXFxcIlxcXFxcXFxcXXxcXFxcXFxcXC4pKlxcXCJ8Jyg/OlteJ1xcXFxcXFxcXXxcXFxcXFxcXC4pKid8Lyg/OlteL1xcXFxcXFxcXXxcXFxcXFxcXC4pKi93KnxbXlxcXFxzOiwvXVteLFxcXCIne30oKS86W1xcXFxdXSpbXlxcXFxzLFxcXCIne30oKS86W1xcXFxdXXxbXlxcXFxzXVwiLFwiZ1wiKSxnPS9bXFxdKVwiJ0EtWmEtejAtOV8kXSskLyxoPXtcImluXCI6MSxcInJldHVyblwiOjEsXCJ0eXBlb2ZcIjoxfSxrPXt9O3JldHVybntoYTpbXSxWOmssV2E6Yix5YTpmdW5jdGlvbihmLG0pe2Z1bmN0aW9uIGUoYixtKXt2YXIgZjtpZigheil7dmFyIHU9YS5nZXRCaW5kaW5nSGFuZGxlcihiKTtpZih1JiZ1LnByZXByb2Nlc3MmJlxuIShtPXUucHJlcHJvY2VzcyhtLGIsZSkpKXJldHVybjtpZih1PWtbYl0pZj1tLDA8PWEuYS5tKGQsZik/Zj0hMToodT1mLm1hdGNoKGMpLGY9bnVsbD09PXU/ITE6dVsxXT9cIk9iamVjdChcIit1WzFdK1wiKVwiK3VbMl06ZiksdT1mO3UmJmgucHVzaChcIidcIitiK1wiJzpmdW5jdGlvbihfeil7XCIrZitcIj1fen1cIil9dCYmKG09XCJmdW5jdGlvbigpe3JldHVybiBcIittK1wiIH1cIik7Zy5wdXNoKFwiJ1wiK2IrXCInOlwiK20pfW09bXx8e307dmFyIGc9W10saD1bXSx0PW0udmFsdWVBY2Nlc3NvcnMsej1tLmJpbmRpbmdQYXJhbXMsdT1cInN0cmluZ1wiPT09dHlwZW9mIGY/YihmKTpmO2EuYS51KHUsZnVuY3Rpb24oYSl7ZShhLmtleXx8YS51bmtub3duLGEudmFsdWUpfSk7aC5sZW5ndGgmJmUoXCJfa29fcHJvcGVydHlfd3JpdGVyc1wiLFwie1wiK2guam9pbihcIixcIikrXCIgfVwiKTtyZXR1cm4gZy5qb2luKFwiLFwiKX0sbGM6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKylpZihhW2NdLmtleT09XG5iKXJldHVybiEwO3JldHVybiExfSxwYTpmdW5jdGlvbihiLGMsZCxlLGspe2lmKGImJmEuQyhiKSkhYS5SYShiKXx8ayYmYi52KCk9PT1lfHxiKGUpO2Vsc2UgaWYoKGI9Yy5nZXQoXCJfa29fcHJvcGVydHlfd3JpdGVyc1wiKSkmJmJbZF0pYltkXShlKX19fSgpO2EuYihcImV4cHJlc3Npb25SZXdyaXRpbmdcIixhLmgpO2EuYihcImV4cHJlc3Npb25SZXdyaXRpbmcuYmluZGluZ1Jld3JpdGVWYWxpZGF0b3JzXCIsYS5oLmhhKTthLmIoXCJleHByZXNzaW9uUmV3cml0aW5nLnBhcnNlT2JqZWN0TGl0ZXJhbFwiLGEuaC5XYSk7YS5iKFwiZXhwcmVzc2lvblJld3JpdGluZy5wcmVQcm9jZXNzQmluZGluZ3NcIixhLmgueWEpO2EuYihcImV4cHJlc3Npb25SZXdyaXRpbmcuX3R3b1dheUJpbmRpbmdzXCIsYS5oLlYpO2EuYihcImpzb25FeHByZXNzaW9uUmV3cml0aW5nXCIsYS5oKTthLmIoXCJqc29uRXhwcmVzc2lvblJld3JpdGluZy5pbnNlcnRQcm9wZXJ0eUFjY2Vzc29yc0ludG9Kc29uXCIsYS5oLnlhKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGEpe3JldHVybiA4PT1cbmEubm9kZVR5cGUmJmgudGVzdChnP2EudGV4dDphLm5vZGVWYWx1ZSl9ZnVuY3Rpb24gZChhKXtyZXR1cm4gOD09YS5ub2RlVHlwZSYmay50ZXN0KGc/YS50ZXh0OmEubm9kZVZhbHVlKX1mdW5jdGlvbiBjKGEsYyl7Zm9yKHZhciBmPWEsZT0xLGs9W107Zj1mLm5leHRTaWJsaW5nOyl7aWYoZChmKSYmKGUtLSwwPT09ZSkpcmV0dXJuIGs7ay5wdXNoKGYpO2IoZikmJmUrK31pZighYyl0aHJvdyBFcnJvcihcIkNhbm5vdCBmaW5kIGNsb3NpbmcgY29tbWVudCB0YWcgdG8gbWF0Y2g6IFwiK2Eubm9kZVZhbHVlKTtyZXR1cm4gbnVsbH1mdW5jdGlvbiBlKGEsYil7dmFyIGQ9YyhhLGIpO3JldHVybiBkPzA8ZC5sZW5ndGg/ZFtkLmxlbmd0aC0xXS5uZXh0U2libGluZzphLm5leHRTaWJsaW5nOm51bGx9dmFyIGc9diYmXCJcXHgzYyEtLXRlc3QtLVxceDNlXCI9PT12LmNyZWF0ZUNvbW1lbnQoXCJ0ZXN0XCIpLnRleHQsaD1nPy9eXFx4M2MhLS1cXHMqa28oPzpcXHMrKFtcXHNcXFNdKykpP1xccyotLVxceDNlJC86L15cXHMqa28oPzpcXHMrKFtcXHNcXFNdKykpP1xccyokLyxcbms9Zz8vXlxceDNjIS0tXFxzKlxcL2tvXFxzKi0tXFx4M2UkLzovXlxccypcXC9rb1xccyokLyxmPXt1bDohMCxvbDohMH07YS5mPXtROnt9LGNoaWxkTm9kZXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGIoYSk/YyhhKTphLmNoaWxkTm9kZXN9LGphOmZ1bmN0aW9uKGMpe2lmKGIoYykpe2M9YS5mLmNoaWxkTm9kZXMoYyk7Zm9yKHZhciBkPTAsZj1jLmxlbmd0aDtkPGY7ZCsrKWEucmVtb3ZlTm9kZShjW2RdKX1lbHNlIGEuYS5LYShjKX0sVDpmdW5jdGlvbihjLGQpe2lmKGIoYykpe2EuZi5qYShjKTtmb3IodmFyIGY9Yy5uZXh0U2libGluZyxlPTAsaz1kLmxlbmd0aDtlPGs7ZSsrKWYucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZFtlXSxmKX1lbHNlIGEuYS5UKGMsZCl9LEhiOmZ1bmN0aW9uKGEsYyl7YihhKT9hLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGMsYS5uZXh0U2libGluZyk6YS5maXJzdENoaWxkP2EuaW5zZXJ0QmVmb3JlKGMsYS5maXJzdENoaWxkKTphLmFwcGVuZENoaWxkKGMpfSxCYjpmdW5jdGlvbihjLFxuZCxmKXtmP2IoYyk/Yy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkLGYubmV4dFNpYmxpbmcpOmYubmV4dFNpYmxpbmc/Yy5pbnNlcnRCZWZvcmUoZCxmLm5leHRTaWJsaW5nKTpjLmFwcGVuZENoaWxkKGQpOmEuZi5IYihjLGQpfSxmaXJzdENoaWxkOmZ1bmN0aW9uKGEpe3JldHVybiBiKGEpPyFhLm5leHRTaWJsaW5nfHxkKGEubmV4dFNpYmxpbmcpP251bGw6YS5uZXh0U2libGluZzphLmZpcnN0Q2hpbGR9LG5leHRTaWJsaW5nOmZ1bmN0aW9uKGEpe2IoYSkmJihhPWUoYSkpO3JldHVybiBhLm5leHRTaWJsaW5nJiZkKGEubmV4dFNpYmxpbmcpP251bGw6YS5uZXh0U2libGluZ30sZ2M6Yix4YzpmdW5jdGlvbihhKXtyZXR1cm4oYT0oZz9hLnRleHQ6YS5ub2RlVmFsdWUpLm1hdGNoKGgpKT9hWzFdOm51bGx9LEZiOmZ1bmN0aW9uKGMpe2lmKGZbYS5hLnQoYyldKXt2YXIgaz1jLmZpcnN0Q2hpbGQ7aWYoayl7ZG8gaWYoMT09PWsubm9kZVR5cGUpe3ZhciBnO2c9ay5maXJzdENoaWxkO1xudmFyIGg9bnVsbDtpZihnKXtkbyBpZihoKWgucHVzaChnKTtlbHNlIGlmKGIoZykpe3ZhciB0PWUoZywhMCk7dD9nPXQ6aD1bZ119ZWxzZSBkKGcpJiYoaD1bZ10pO3doaWxlKGc9Zy5uZXh0U2libGluZyl9aWYoZz1oKWZvcihoPWsubmV4dFNpYmxpbmcsdD0wO3Q8Zy5sZW5ndGg7dCsrKWg/Yy5pbnNlcnRCZWZvcmUoZ1t0XSxoKTpjLmFwcGVuZENoaWxkKGdbdF0pfXdoaWxlKGs9ay5uZXh0U2libGluZyl9fX19fSkoKTthLmIoXCJ2aXJ0dWFsRWxlbWVudHNcIixhLmYpO2EuYihcInZpcnR1YWxFbGVtZW50cy5hbGxvd2VkQmluZGluZ3NcIixhLmYuUSk7YS5iKFwidmlydHVhbEVsZW1lbnRzLmVtcHR5Tm9kZVwiLGEuZi5qYSk7YS5iKFwidmlydHVhbEVsZW1lbnRzLmluc2VydEFmdGVyXCIsYS5mLkJiKTthLmIoXCJ2aXJ0dWFsRWxlbWVudHMucHJlcGVuZFwiLGEuZi5IYik7YS5iKFwidmlydHVhbEVsZW1lbnRzLnNldERvbU5vZGVDaGlsZHJlblwiLGEuZi5UKTsoZnVuY3Rpb24oKXthLko9ZnVuY3Rpb24oKXt0aGlzLlliPVxue319O2EuYS5leHRlbmQoYS5KLnByb3RvdHlwZSx7bm9kZUhhc0JpbmRpbmdzOmZ1bmN0aW9uKGIpe3N3aXRjaChiLm5vZGVUeXBlKXtjYXNlIDE6cmV0dXJuIG51bGwhPWIuZ2V0QXR0cmlidXRlKFwiZGF0YS1iaW5kXCIpfHxhLmcuZ2V0Q29tcG9uZW50TmFtZUZvck5vZGUoYik7Y2FzZSA4OnJldHVybiBhLmYuZ2MoYik7ZGVmYXVsdDpyZXR1cm4hMX19LGdldEJpbmRpbmdzOmZ1bmN0aW9uKGIsZCl7dmFyIGM9dGhpcy5nZXRCaW5kaW5nc1N0cmluZyhiLGQpLGM9Yz90aGlzLnBhcnNlQmluZGluZ3NTdHJpbmcoYyxkLGIpOm51bGw7cmV0dXJuIGEuZy5tYihjLGIsZCwhMSl9LGdldEJpbmRpbmdBY2Nlc3NvcnM6ZnVuY3Rpb24oYixkKXt2YXIgYz10aGlzLmdldEJpbmRpbmdzU3RyaW5nKGIsZCksYz1jP3RoaXMucGFyc2VCaW5kaW5nc1N0cmluZyhjLGQsYix7dmFsdWVBY2Nlc3NvcnM6ITB9KTpudWxsO3JldHVybiBhLmcubWIoYyxiLGQsITApfSxnZXRCaW5kaW5nc1N0cmluZzpmdW5jdGlvbihiKXtzd2l0Y2goYi5ub2RlVHlwZSl7Y2FzZSAxOnJldHVybiBiLmdldEF0dHJpYnV0ZShcImRhdGEtYmluZFwiKTtcbmNhc2UgODpyZXR1cm4gYS5mLnhjKGIpO2RlZmF1bHQ6cmV0dXJuIG51bGx9fSxwYXJzZUJpbmRpbmdzU3RyaW5nOmZ1bmN0aW9uKGIsZCxjLGUpe3RyeXt2YXIgZz10aGlzLlliLGg9YisoZSYmZS52YWx1ZUFjY2Vzc29yc3x8XCJcIiksaztpZighKGs9Z1toXSkpe3ZhciBmLG09XCJ3aXRoKCRjb250ZXh0KXt3aXRoKCRkYXRhfHx7fSl7cmV0dXJue1wiK2EuaC55YShiLGUpK1wifX19XCI7Zj1uZXcgRnVuY3Rpb24oXCIkY29udGV4dFwiLFwiJGVsZW1lbnRcIixtKTtrPWdbaF09Zn1yZXR1cm4gayhkLGMpfWNhdGNoKGwpe3Rocm93IGwubWVzc2FnZT1cIlVuYWJsZSB0byBwYXJzZSBiaW5kaW5ncy5cXG5CaW5kaW5ncyB2YWx1ZTogXCIrYitcIlxcbk1lc3NhZ2U6IFwiK2wubWVzc2FnZSxsO319fSk7YS5KLmluc3RhbmNlPW5ldyBhLkp9KSgpO2EuYihcImJpbmRpbmdQcm92aWRlclwiLGEuSik7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihhKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYX19ZnVuY3Rpb24gZChhKXtyZXR1cm4gYSgpfVxuZnVuY3Rpb24gYyhiKXtyZXR1cm4gYS5hLm5hKGEuay5CKGIpLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGIoKVtjXX19KX1mdW5jdGlvbiBlKGEsYil7cmV0dXJuIGModGhpcy5nZXRCaW5kaW5ncy5iaW5kKHRoaXMsYSxiKSl9ZnVuY3Rpb24gZyhiLGMsZCl7dmFyIGYsZT1hLmYuZmlyc3RDaGlsZChjKSxrPWEuSi5pbnN0YW5jZSxnPWsucHJlcHJvY2Vzc05vZGU7aWYoZyl7Zm9yKDtmPWU7KWU9YS5mLm5leHRTaWJsaW5nKGYpLGcuY2FsbChrLGYpO2U9YS5mLmZpcnN0Q2hpbGQoYyl9Zm9yKDtmPWU7KWU9YS5mLm5leHRTaWJsaW5nKGYpLGgoYixmLGQpfWZ1bmN0aW9uIGgoYixjLGQpe3ZhciBlPSEwLGs9MT09PWMubm9kZVR5cGU7ayYmYS5mLkZiKGMpO2lmKGsmJmR8fGEuSi5pbnN0YW5jZS5ub2RlSGFzQmluZGluZ3MoYykpZT1mKGMsbnVsbCxiLGQpLnNob3VsZEJpbmREZXNjZW5kYW50cztlJiYhbFthLmEudChjKV0mJmcoYixjLCFrKX1mdW5jdGlvbiBrKGIpe3ZhciBjPVxuW10sZD17fSxmPVtdO2EuYS5HKGIsZnVuY3Rpb24geShlKXtpZighZFtlXSl7dmFyIGs9YS5nZXRCaW5kaW5nSGFuZGxlcihlKTtrJiYoay5hZnRlciYmKGYucHVzaChlKSxhLmEudShrLmFmdGVyLGZ1bmN0aW9uKGMpe2lmKGJbY10pe2lmKC0xIT09YS5hLm0oZixjKSl0aHJvdyBFcnJvcihcIkNhbm5vdCBjb21iaW5lIHRoZSBmb2xsb3dpbmcgYmluZGluZ3MsIGJlY2F1c2UgdGhleSBoYXZlIGEgY3ljbGljIGRlcGVuZGVuY3k6IFwiK2Yuam9pbihcIiwgXCIpKTt5KGMpfX0pLGYubGVuZ3RoLS0pLGMucHVzaCh7a2V5OmUsemI6a30pKTtkW2VdPSEwfX0pO3JldHVybiBjfWZ1bmN0aW9uIGYoYixjLGYsZyl7dmFyIG09YS5hLmUuZ2V0KGIscSk7aWYoIWMpe2lmKG0pdGhyb3cgRXJyb3IoXCJZb3UgY2Fubm90IGFwcGx5IGJpbmRpbmdzIG11bHRpcGxlIHRpbWVzIHRvIHRoZSBzYW1lIGVsZW1lbnQuXCIpO2EuYS5lLnNldChiLHEsITApfSFtJiZnJiZhLk9iKGIsZik7dmFyIGw7aWYoYyYmXCJmdW5jdGlvblwiIT09XG50eXBlb2YgYylsPWM7ZWxzZXt2YXIgaD1hLkouaW5zdGFuY2Usbj1oLmdldEJpbmRpbmdBY2Nlc3NvcnN8fGUscz1hLmooZnVuY3Rpb24oKXsobD1jP2MoZixiKTpuLmNhbGwoaCxiLGYpKSYmZi5JJiZmLkkoKTtyZXR1cm4gbH0sbnVsbCx7bzpifSk7bCYmcy5aKCl8fChzPW51bGwpfXZhciB2O2lmKGwpe3ZhciB3PXM/ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGQocygpW2FdKX19OmZ1bmN0aW9uKGEpe3JldHVybiBsW2FdfSxBPWZ1bmN0aW9uKCl7cmV0dXJuIGEuYS5uYShzP3MoKTpsLGQpfTtBLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gbFthXSYmZCh3KGEpKX07QS5oYXM9ZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW4gbH07Zz1rKGwpO2EuYS51KGcsZnVuY3Rpb24oYyl7dmFyIGQ9Yy56Yi5pbml0LGU9Yy56Yi51cGRhdGUsaz1jLmtleTtpZig4PT09Yi5ub2RlVHlwZSYmIWEuZi5RW2tdKXRocm93IEVycm9yKFwiVGhlIGJpbmRpbmcgJ1wiK2srXCInIGNhbm5vdCBiZSB1c2VkIHdpdGggdmlydHVhbCBlbGVtZW50c1wiKTtcbnRyeXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkJiZhLmsuQihmdW5jdGlvbigpe3ZhciBhPWQoYix3KGspLEEsZi4kZGF0YSxmKTtpZihhJiZhLmNvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzKXtpZih2IT09cCl0aHJvdyBFcnJvcihcIk11bHRpcGxlIGJpbmRpbmdzIChcIit2K1wiIGFuZCBcIitrK1wiKSBhcmUgdHJ5aW5nIHRvIGNvbnRyb2wgZGVzY2VuZGFudCBiaW5kaW5ncyBvZiB0aGUgc2FtZSBlbGVtZW50LiBZb3UgY2Fubm90IHVzZSB0aGVzZSBiaW5kaW5ncyB0b2dldGhlciBvbiB0aGUgc2FtZSBlbGVtZW50LlwiKTt2PWt9fSksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmYS5qKGZ1bmN0aW9uKCl7ZShiLHcoayksQSxmLiRkYXRhLGYpfSxudWxsLHtvOmJ9KX1jYXRjaChnKXt0aHJvdyBnLm1lc3NhZ2U9J1VuYWJsZSB0byBwcm9jZXNzIGJpbmRpbmcgXCInK2srXCI6IFwiK2xba10rJ1wiXFxuTWVzc2FnZTogJytnLm1lc3NhZ2UsZzt9fSl9cmV0dXJue3Nob3VsZEJpbmREZXNjZW5kYW50czp2PT09cH19XG5mdW5jdGlvbiBtKGIpe3JldHVybiBiJiZiIGluc3RhbmNlb2YgYS5OP2I6bmV3IGEuTihiKX1hLmQ9e307dmFyIGw9e3NjcmlwdDohMH07YS5nZXRCaW5kaW5nSGFuZGxlcj1mdW5jdGlvbihiKXtyZXR1cm4gYS5kW2JdfTthLk49ZnVuY3Rpb24oYixjLGQsZil7dmFyIGU9dGhpcyxrPVwiZnVuY3Rpb25cIj09dHlwZW9mIGImJiFhLkMoYiksZyxtPWEuaihmdW5jdGlvbigpe3ZhciBnPWs/YigpOmIsbD1hLmEuYyhnKTtjPyhjLkkmJmMuSSgpLGEuYS5leHRlbmQoZSxjKSxtJiYoZS5JPW0pKTooZS4kcGFyZW50cz1bXSxlLiRyb290PWwsZS5rbz1hKTtlLiRyYXdEYXRhPWc7ZS4kZGF0YT1sO2QmJihlW2RdPWwpO2YmJmYoZSxjLGwpO3JldHVybiBlLiRkYXRhfSxudWxsLHtJYTpmdW5jdGlvbigpe3JldHVybiBnJiYhYS5hLm9iKGcpfSxvOiEwfSk7bS5aKCkmJihlLkk9bSxtLmVxdWFsaXR5Q29tcGFyZXI9bnVsbCxnPVtdLG0uVGI9ZnVuY3Rpb24oYil7Zy5wdXNoKGIpO2EuYS53LmRhKGIsXG5mdW5jdGlvbihiKXthLmEudWEoZyxiKTtnLmxlbmd0aHx8KG0uSygpLGUuST1tPXApfSl9KX07YS5OLnByb3RvdHlwZS5jcmVhdGVDaGlsZENvbnRleHQ9ZnVuY3Rpb24oYixjLGQpe3JldHVybiBuZXcgYS5OKGIsdGhpcyxjLGZ1bmN0aW9uKGEsYil7YS4kcGFyZW50Q29udGV4dD1iO2EuJHBhcmVudD1iLiRkYXRhO2EuJHBhcmVudHM9KGIuJHBhcmVudHN8fFtdKS5zbGljZSgwKTthLiRwYXJlbnRzLnVuc2hpZnQoYS4kcGFyZW50KTtkJiZkKGEpfSl9O2EuTi5wcm90b3R5cGUuZXh0ZW5kPWZ1bmN0aW9uKGIpe3JldHVybiBuZXcgYS5OKHRoaXMuSXx8dGhpcy4kZGF0YSx0aGlzLG51bGwsZnVuY3Rpb24oYyxkKXtjLiRyYXdEYXRhPWQuJHJhd0RhdGE7YS5hLmV4dGVuZChjLFwiZnVuY3Rpb25cIj09dHlwZW9mIGI/YigpOmIpfSl9O3ZhciBxPWEuYS5lLkYoKSxuPWEuYS5lLkYoKTthLk9iPWZ1bmN0aW9uKGIsYyl7aWYoMj09YXJndW1lbnRzLmxlbmd0aClhLmEuZS5zZXQoYixuLGMpLFxuYy5JJiZjLkkuVGIoYik7ZWxzZSByZXR1cm4gYS5hLmUuZ2V0KGIsbil9O2EucmE9ZnVuY3Rpb24oYixjLGQpezE9PT1iLm5vZGVUeXBlJiZhLmYuRmIoYik7cmV0dXJuIGYoYixjLG0oZCksITApfTthLldiPWZ1bmN0aW9uKGQsZixlKXtlPW0oZSk7cmV0dXJuIGEucmEoZCxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZj9jKGYuYmluZChudWxsLGUsZCkpOmEuYS5uYShmLGIpLGUpfTthLkNhPWZ1bmN0aW9uKGEsYil7MSE9PWIubm9kZVR5cGUmJjghPT1iLm5vZGVUeXBlfHxnKG0oYSksYiwhMCl9O2EucGI9ZnVuY3Rpb24oYSxiKXshdyYmcy5qUXVlcnkmJih3PXMualF1ZXJ5KTtpZihiJiYxIT09Yi5ub2RlVHlwZSYmOCE9PWIubm9kZVR5cGUpdGhyb3cgRXJyb3IoXCJrby5hcHBseUJpbmRpbmdzOiBmaXJzdCBwYXJhbWV0ZXIgc2hvdWxkIGJlIHlvdXIgdmlldyBtb2RlbDsgc2Vjb25kIHBhcmFtZXRlciBzaG91bGQgYmUgYSBET00gbm9kZVwiKTtiPWJ8fHMuZG9jdW1lbnQuYm9keTtoKG0oYSksXG5iLCEwKX07YS5IYT1mdW5jdGlvbihiKXtzd2l0Y2goYi5ub2RlVHlwZSl7Y2FzZSAxOmNhc2UgODp2YXIgYz1hLk9iKGIpO2lmKGMpcmV0dXJuIGM7aWYoYi5wYXJlbnROb2RlKXJldHVybiBhLkhhKGIucGFyZW50Tm9kZSl9cmV0dXJuIHB9O2EuJGI9ZnVuY3Rpb24oYil7cmV0dXJuKGI9YS5IYShiKSk/Yi4kZGF0YTpwfTthLmIoXCJiaW5kaW5nSGFuZGxlcnNcIixhLmQpO2EuYihcImFwcGx5QmluZGluZ3NcIixhLnBiKTthLmIoXCJhcHBseUJpbmRpbmdzVG9EZXNjZW5kYW50c1wiLGEuQ2EpO2EuYihcImFwcGx5QmluZGluZ0FjY2Vzc29yc1RvTm9kZVwiLGEucmEpO2EuYihcImFwcGx5QmluZGluZ3NUb05vZGVcIixhLldiKTthLmIoXCJjb250ZXh0Rm9yXCIsYS5IYSk7YS5iKFwiZGF0YUZvclwiLGEuJGIpfSkoKTsoZnVuY3Rpb24oYil7ZnVuY3Rpb24gZChkLGYpe3ZhciBlPWcuaGFzT3duUHJvcGVydHkoZCk/Z1tkXTpiLGw7ZXx8KGU9Z1tkXT1uZXcgYS5QLGMoZCxmdW5jdGlvbihhKXtoW2RdPWE7ZGVsZXRlIGdbZF07XG5sP2Uubm90aWZ5U3Vic2NyaWJlcnMoYSk6c2V0VGltZW91dChmdW5jdGlvbigpe2Uubm90aWZ5U3Vic2NyaWJlcnMoYSl9LDApfSksbD0hMCk7ZS5VKGYpfWZ1bmN0aW9uIGMoYSxiKXtlKFwiZ2V0Q29uZmlnXCIsW2FdLGZ1bmN0aW9uKGMpe2M/ZShcImxvYWRDb21wb25lbnRcIixbYSxjXSxmdW5jdGlvbihhKXtiKGEpfSk6YihudWxsKX0pfWZ1bmN0aW9uIGUoYyxkLGcsbCl7bHx8KGw9YS5nLmxvYWRlcnMuc2xpY2UoMCkpO3ZhciBoPWwuc2hpZnQoKTtpZihoKXt2YXIgbj1oW2NdO2lmKG4pe3ZhciB0PSExO2lmKG4uYXBwbHkoaCxkLmNvbmNhdChmdW5jdGlvbihhKXt0P2cobnVsbCk6bnVsbCE9PWE/ZyhhKTplKGMsZCxnLGwpfSkpIT09YiYmKHQ9ITAsIWguc3VwcHJlc3NMb2FkZXJFeGNlcHRpb25zKSl0aHJvdyBFcnJvcihcIkNvbXBvbmVudCBsb2FkZXJzIG11c3Qgc3VwcGx5IHZhbHVlcyBieSBpbnZva2luZyB0aGUgY2FsbGJhY2ssIG5vdCBieSByZXR1cm5pbmcgdmFsdWVzIHN5bmNocm9ub3VzbHkuXCIpO1xufWVsc2UgZShjLGQsZyxsKX1lbHNlIGcobnVsbCl9dmFyIGc9e30saD17fTthLmc9e2dldDpmdW5jdGlvbihhLGMpe3ZhciBlPWguaGFzT3duUHJvcGVydHkoYSk/aFthXTpiO2U/c2V0VGltZW91dChmdW5jdGlvbigpe2MoZSl9LDApOmQoYSxjKX0sdGI6ZnVuY3Rpb24oYSl7ZGVsZXRlIGhbYV19LGpiOmV9O2EuZy5sb2FkZXJzPVtdO2EuYihcImNvbXBvbmVudHNcIixhLmcpO2EuYihcImNvbXBvbmVudHMuZ2V0XCIsYS5nLmdldCk7YS5iKFwiY29tcG9uZW50cy5jbGVhckNhY2hlZERlZmluaXRpb25cIixhLmcudGIpfSkoKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsYyxkLGUpe2Z1bmN0aW9uIGsoKXswPT09LS11JiZlKGgpfXZhciBoPXt9LHU9MixyPWQudGVtcGxhdGU7ZD1kLnZpZXdNb2RlbDtyP2coYyxyLGZ1bmN0aW9uKGMpe2EuZy5qYihcImxvYWRUZW1wbGF0ZVwiLFtiLGNdLGZ1bmN0aW9uKGEpe2gudGVtcGxhdGU9YTtrKCl9KX0pOmsoKTtkP2coYyxkLGZ1bmN0aW9uKGMpe2EuZy5qYihcImxvYWRWaWV3TW9kZWxcIixcbltiLGNdLGZ1bmN0aW9uKGEpe2hbZl09YTtrKCl9KX0pOmsoKX1mdW5jdGlvbiBkKGEsYixjKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYiljKGZ1bmN0aW9uKGEpe3JldHVybiBuZXcgYihhKX0pO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGJbZl0pYyhiW2ZdKTtlbHNlIGlmKFwiaW5zdGFuY2VcImluIGIpe3ZhciBlPWIuaW5zdGFuY2U7YyhmdW5jdGlvbigpe3JldHVybiBlfSl9ZWxzZVwidmlld01vZGVsXCJpbiBiP2QoYSxiLnZpZXdNb2RlbCxjKTphKFwiVW5rbm93biB2aWV3TW9kZWwgdmFsdWU6IFwiK2IpfWZ1bmN0aW9uIGMoYil7c3dpdGNoKGEuYS50KGIpKXtjYXNlIFwic2NyaXB0XCI6cmV0dXJuIGEuYS5iYShiLnRleHQpO2Nhc2UgXCJ0ZXh0YXJlYVwiOnJldHVybiBhLmEuYmEoYi52YWx1ZSk7Y2FzZSBcInRlbXBsYXRlXCI6aWYoZShiLmNvbnRlbnQpKXJldHVybiBhLmEuaWEoYi5jb250ZW50LmNoaWxkTm9kZXMpfXJldHVybiBhLmEuaWEoYi5jaGlsZE5vZGVzKX1mdW5jdGlvbiBlKGEpe3JldHVybiBzLkRvY3VtZW50RnJhZ21lbnQ/XG5hIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudDphJiYxMT09PWEubm9kZVR5cGV9ZnVuY3Rpb24gZyhhLGIsYyl7XCJzdHJpbmdcIj09PXR5cGVvZiBiLnJlcXVpcmU/Tnx8cy5yZXF1aXJlPyhOfHxzLnJlcXVpcmUpKFtiLnJlcXVpcmVdLGMpOmEoXCJVc2VzIHJlcXVpcmUsIGJ1dCBubyBBTUQgbG9hZGVyIGlzIHByZXNlbnRcIik6YyhiKX1mdW5jdGlvbiBoKGEpe3JldHVybiBmdW5jdGlvbihiKXt0aHJvdyBFcnJvcihcIkNvbXBvbmVudCAnXCIrYStcIic6IFwiK2IpO319dmFyIGs9e307YS5nLnRjPWZ1bmN0aW9uKGIsYyl7aWYoIWMpdGhyb3cgRXJyb3IoXCJJbnZhbGlkIGNvbmZpZ3VyYXRpb24gZm9yIFwiK2IpO2lmKGEuZy5RYShiKSl0aHJvdyBFcnJvcihcIkNvbXBvbmVudCBcIitiK1wiIGlzIGFscmVhZHkgcmVnaXN0ZXJlZFwiKTtrW2JdPWN9O2EuZy5RYT1mdW5jdGlvbihhKXtyZXR1cm4gYSBpbiBrfTthLmcud2M9ZnVuY3Rpb24oYil7ZGVsZXRlIGtbYl07YS5nLnRiKGIpfTthLmcudWI9e2dldENvbmZpZzpmdW5jdGlvbihhLFxuYil7YihrLmhhc093blByb3BlcnR5KGEpP2tbYV06bnVsbCl9LGxvYWRDb21wb25lbnQ6ZnVuY3Rpb24oYSxjLGQpe3ZhciBlPWgoYSk7ZyhlLGMsZnVuY3Rpb24oYyl7YihhLGUsYyxkKX0pfSxsb2FkVGVtcGxhdGU6ZnVuY3Rpb24oYixkLGYpe2I9aChiKTtpZihcInN0cmluZ1wiPT09dHlwZW9mIGQpZihhLmEuYmEoZCkpO2Vsc2UgaWYoZCBpbnN0YW5jZW9mIEFycmF5KWYoZCk7ZWxzZSBpZihlKGQpKWYoYS5hLlMoZC5jaGlsZE5vZGVzKSk7ZWxzZSBpZihkLmVsZW1lbnQpaWYoZD1kLmVsZW1lbnQscy5IVE1MRWxlbWVudD9kIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ6ZCYmZC50YWdOYW1lJiYxPT09ZC5ub2RlVHlwZSlmKGMoZCkpO2Vsc2UgaWYoXCJzdHJpbmdcIj09PXR5cGVvZiBkKXt2YXIgaz12LmdldEVsZW1lbnRCeUlkKGQpO2s/ZihjKGspKTpiKFwiQ2Fubm90IGZpbmQgZWxlbWVudCB3aXRoIElEIFwiK2QpfWVsc2UgYihcIlVua25vd24gZWxlbWVudCB0eXBlOiBcIitkKTtlbHNlIGIoXCJVbmtub3duIHRlbXBsYXRlIHZhbHVlOiBcIitcbmQpfSxsb2FkVmlld01vZGVsOmZ1bmN0aW9uKGEsYixjKXtkKGgoYSksYixjKX19O3ZhciBmPVwiY3JlYXRlVmlld01vZGVsXCI7YS5iKFwiY29tcG9uZW50cy5yZWdpc3RlclwiLGEuZy50Yyk7YS5iKFwiY29tcG9uZW50cy5pc1JlZ2lzdGVyZWRcIixhLmcuUWEpO2EuYihcImNvbXBvbmVudHMudW5yZWdpc3RlclwiLGEuZy53Yyk7YS5iKFwiY29tcG9uZW50cy5kZWZhdWx0TG9hZGVyXCIsYS5nLnViKTthLmcubG9hZGVycy5wdXNoKGEuZy51Yik7YS5nLlViPWt9KSgpOyhmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixlKXt2YXIgZz1iLmdldEF0dHJpYnV0ZShcInBhcmFtc1wiKTtpZihnKXt2YXIgZz1kLnBhcnNlQmluZGluZ3NTdHJpbmcoZyxlLGIse3ZhbHVlQWNjZXNzb3JzOiEwLGJpbmRpbmdQYXJhbXM6ITB9KSxnPWEuYS5uYShnLGZ1bmN0aW9uKGQpe3JldHVybiBhLnMoZCxudWxsLHtvOmJ9KX0pLGg9YS5hLm5hKGcsZnVuY3Rpb24oZCl7cmV0dXJuIGQuWigpP2EucyhmdW5jdGlvbigpe3JldHVybiBhLmEuYyhkKCkpfSxcbm51bGwse286Yn0pOmQudigpfSk7aC5oYXNPd25Qcm9wZXJ0eShcIiRyYXdcIil8fChoLiRyYXc9Zyk7cmV0dXJuIGh9cmV0dXJueyRyYXc6e319fWEuZy5nZXRDb21wb25lbnROYW1lRm9yTm9kZT1mdW5jdGlvbihiKXtiPWEuYS50KGIpO3JldHVybiBhLmcuUWEoYikmJmJ9O2EuZy5tYj1mdW5jdGlvbihjLGQsZyxoKXtpZigxPT09ZC5ub2RlVHlwZSl7dmFyIGs9YS5nLmdldENvbXBvbmVudE5hbWVGb3JOb2RlKGQpO2lmKGspe2M9Y3x8e307aWYoYy5jb21wb25lbnQpdGhyb3cgRXJyb3IoJ0Nhbm5vdCB1c2UgdGhlIFwiY29tcG9uZW50XCIgYmluZGluZyBvbiBhIGN1c3RvbSBlbGVtZW50IG1hdGNoaW5nIGEgY29tcG9uZW50Jyk7dmFyIGY9e25hbWU6ayxwYXJhbXM6YihkLGcpfTtjLmNvbXBvbmVudD1oP2Z1bmN0aW9uKCl7cmV0dXJuIGZ9OmZ9fXJldHVybiBjfTt2YXIgZD1uZXcgYS5KOzk+YS5hLkwmJihhLmcucmVnaXN0ZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3YuY3JlYXRlRWxlbWVudChiKTtcbnJldHVybiBhLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19KGEuZy5yZWdpc3Rlciksdi5jcmVhdGVEb2N1bWVudEZyYWdtZW50PWZ1bmN0aW9uKGIpe3JldHVybiBmdW5jdGlvbigpe3ZhciBkPWIoKSxnPWEuZy5VYixoO2ZvcihoIGluIGcpZy5oYXNPd25Qcm9wZXJ0eShoKSYmZC5jcmVhdGVFbGVtZW50KGgpO3JldHVybiBkfX0odi5jcmVhdGVEb2N1bWVudEZyYWdtZW50KSl9KSgpOyhmdW5jdGlvbigpe3ZhciBiPTA7YS5kLmNvbXBvbmVudD17aW5pdDpmdW5jdGlvbihkLGMsZSxnLGgpe2Z1bmN0aW9uIGsoKXt2YXIgYT1mJiZmLmRpc3Bvc2U7XCJmdW5jdGlvblwiPT09dHlwZW9mIGEmJmEuY2FsbChmKTttPW51bGx9dmFyIGYsbTthLmEudy5kYShkLGspO2EucyhmdW5jdGlvbigpe3ZhciBlPWEuYS5jKGMoKSksZyxuO1wic3RyaW5nXCI9PT10eXBlb2YgZT9nPWU6KGc9YS5hLmMoZS5uYW1lKSxuPWEuYS5jKGUucGFyYW1zKSk7aWYoIWcpdGhyb3cgRXJyb3IoXCJObyBjb21wb25lbnQgbmFtZSBzcGVjaWZpZWRcIik7XG52YXIgdD1tPSsrYjthLmcuZ2V0KGcsZnVuY3Rpb24oYil7aWYobT09PXQpe2soKTtpZighYil0aHJvdyBFcnJvcihcIlVua25vd24gY29tcG9uZW50ICdcIitnK1wiJ1wiKTt2YXIgYz1iLnRlbXBsYXRlO2lmKCFjKXRocm93IEVycm9yKFwiQ29tcG9uZW50ICdcIitnK1wiJyBoYXMgbm8gdGVtcGxhdGVcIik7Yz1hLmEuaWEoYyk7YS5mLlQoZCxjKTt2YXIgYz1uLGU9Yi5jcmVhdGVWaWV3TW9kZWw7Yj1lP2UuY2FsbChiLGMse2VsZW1lbnQ6ZH0pOmM7Yz1oLmNyZWF0ZUNoaWxkQ29udGV4dChiKTtmPWI7YS5DYShjLGQpfX0pfSxudWxsLHtvOmR9KTtyZXR1cm57Y29udHJvbHNEZXNjZW5kYW50QmluZGluZ3M6ITB9fX07YS5mLlEuY29tcG9uZW50PSEwfSkoKTt2YXIgUT17XCJjbGFzc1wiOlwiY2xhc3NOYW1lXCIsXCJmb3JcIjpcImh0bWxGb3JcIn07YS5kLmF0dHI9e3VwZGF0ZTpmdW5jdGlvbihiLGQpe3ZhciBjPWEuYS5jKGQoKSl8fHt9O2EuYS5HKGMsZnVuY3Rpb24oYyxkKXtkPWEuYS5jKGQpO3ZhciBoPVxuITE9PT1kfHxudWxsPT09ZHx8ZD09PXA7aCYmYi5yZW1vdmVBdHRyaWJ1dGUoYyk7OD49YS5hLkwmJmMgaW4gUT8oYz1RW2NdLGg/Yi5yZW1vdmVBdHRyaWJ1dGUoYyk6YltjXT1kKTpofHxiLnNldEF0dHJpYnV0ZShjLGQudG9TdHJpbmcoKSk7XCJuYW1lXCI9PT1jJiZhLmEuTWIoYixoP1wiXCI6ZC50b1N0cmluZygpKX0pfX07KGZ1bmN0aW9uKCl7YS5kLmNoZWNrZWQ9e2FmdGVyOltcInZhbHVlXCIsXCJhdHRyXCJdLGluaXQ6ZnVuY3Rpb24oYixkLGMpe2Z1bmN0aW9uIGUoKXt2YXIgZT1iLmNoZWNrZWQsaz1xP2goKTplO2lmKCFhLlkubWEoKSYmKCFmfHxlKSl7dmFyIGc9YS5rLkIoZCk7bT9sIT09az8oZSYmKGEuYS5lYShnLGssITApLGEuYS5lYShnLGwsITEpKSxsPWspOmEuYS5lYShnLGssZSk6YS5oLnBhKGcsYyxcImNoZWNrZWRcIixrLCEwKX19ZnVuY3Rpb24gZygpe3ZhciBjPWEuYS5jKGQoKSk7Yi5jaGVja2VkPW0/MDw9YS5hLm0oYyxoKCkpOms/YzpoKCk9PT1jfXZhciBoPWEuSWIoZnVuY3Rpb24oKXtyZXR1cm4gYy5oYXMoXCJjaGVja2VkVmFsdWVcIik/XG5hLmEuYyhjLmdldChcImNoZWNrZWRWYWx1ZVwiKSk6Yy5oYXMoXCJ2YWx1ZVwiKT9hLmEuYyhjLmdldChcInZhbHVlXCIpKTpiLnZhbHVlfSksaz1cImNoZWNrYm94XCI9PWIudHlwZSxmPVwicmFkaW9cIj09Yi50eXBlO2lmKGt8fGYpe3ZhciBtPWsmJmEuYS5jKGQoKSlpbnN0YW5jZW9mIEFycmF5LGw9bT9oKCk6cCxxPWZ8fG07ZiYmIWIubmFtZSYmYS5kLnVuaXF1ZU5hbWUuaW5pdChiLGZ1bmN0aW9uKCl7cmV0dXJuITB9KTthLnMoZSxudWxsLHtvOmJ9KTthLmEubihiLFwiY2xpY2tcIixlKTthLnMoZyxudWxsLHtvOmJ9KX19fTthLmguVi5jaGVja2VkPSEwO2EuZC5jaGVja2VkVmFsdWU9e3VwZGF0ZTpmdW5jdGlvbihiLGQpe2IudmFsdWU9YS5hLmMoZCgpKX19fSkoKTthLmQuY3NzPXt1cGRhdGU6ZnVuY3Rpb24oYixkKXt2YXIgYz1hLmEuYyhkKCkpO1wib2JqZWN0XCI9PXR5cGVvZiBjP2EuYS5HKGMsZnVuY3Rpb24oYyxkKXtkPWEuYS5jKGQpO2EuYS5CYShiLGMsZCl9KTooYz1TdHJpbmcoY3x8XCJcIiksXG5hLmEuQmEoYixiLl9fa29fX2Nzc1ZhbHVlLCExKSxiLl9fa29fX2Nzc1ZhbHVlPWMsYS5hLkJhKGIsYywhMCkpfX07YS5kLmVuYWJsZT17dXBkYXRlOmZ1bmN0aW9uKGIsZCl7dmFyIGM9YS5hLmMoZCgpKTtjJiZiLmRpc2FibGVkP2IucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik6Y3x8Yi5kaXNhYmxlZHx8KGIuZGlzYWJsZWQ9ITApfX07YS5kLmRpc2FibGU9e3VwZGF0ZTpmdW5jdGlvbihiLGQpe2EuZC5lbmFibGUudXBkYXRlKGIsZnVuY3Rpb24oKXtyZXR1cm4hYS5hLmMoZCgpKX0pfX07YS5kLmV2ZW50PXtpbml0OmZ1bmN0aW9uKGIsZCxjLGUsZyl7dmFyIGg9ZCgpfHx7fTthLmEuRyhoLGZ1bmN0aW9uKGspe1wic3RyaW5nXCI9PXR5cGVvZiBrJiZhLmEubihiLGssZnVuY3Rpb24oYil7dmFyIGgsbD1kKClba107aWYobCl7dHJ5e3ZhciBxPWEuYS5TKGFyZ3VtZW50cyk7ZT1nLiRkYXRhO3EudW5zaGlmdChlKTtoPWwuYXBwbHkoZSxxKX1maW5hbGx5eyEwIT09aCYmKGIucHJldmVudERlZmF1bHQ/XG5iLnByZXZlbnREZWZhdWx0KCk6Yi5yZXR1cm5WYWx1ZT0hMSl9ITE9PT1jLmdldChrK1wiQnViYmxlXCIpJiYoYi5jYW5jZWxCdWJibGU9ITAsYi5zdG9wUHJvcGFnYXRpb24mJmIuc3RvcFByb3BhZ2F0aW9uKCkpfX0pfSl9fTthLmQuZm9yZWFjaD17RWI6ZnVuY3Rpb24oYil7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGQ9YigpLGM9YS5hLlhhKGQpO2lmKCFjfHxcIm51bWJlclwiPT10eXBlb2YgYy5sZW5ndGgpcmV0dXJue2ZvcmVhY2g6ZCx0ZW1wbGF0ZUVuZ2luZTphLk8uT2F9O2EuYS5jKGQpO3JldHVybntmb3JlYWNoOmMuZGF0YSxhczpjLmFzLGluY2x1ZGVEZXN0cm95ZWQ6Yy5pbmNsdWRlRGVzdHJveWVkLGFmdGVyQWRkOmMuYWZ0ZXJBZGQsYmVmb3JlUmVtb3ZlOmMuYmVmb3JlUmVtb3ZlLGFmdGVyUmVuZGVyOmMuYWZ0ZXJSZW5kZXIsYmVmb3JlTW92ZTpjLmJlZm9yZU1vdmUsYWZ0ZXJNb3ZlOmMuYWZ0ZXJNb3ZlLHRlbXBsYXRlRW5naW5lOmEuTy5PYX19fSxpbml0OmZ1bmN0aW9uKGIsXG5kKXtyZXR1cm4gYS5kLnRlbXBsYXRlLmluaXQoYixhLmQuZm9yZWFjaC5FYihkKSl9LHVwZGF0ZTpmdW5jdGlvbihiLGQsYyxlLGcpe3JldHVybiBhLmQudGVtcGxhdGUudXBkYXRlKGIsYS5kLmZvcmVhY2guRWIoZCksYyxlLGcpfX07YS5oLmhhLmZvcmVhY2g9ITE7YS5mLlEuZm9yZWFjaD0hMDthLmQuaGFzZm9jdXM9e2luaXQ6ZnVuY3Rpb24oYixkLGMpe2Z1bmN0aW9uIGUoZSl7Yi5fX2tvX2hhc2ZvY3VzVXBkYXRpbmc9ITA7dmFyIGY9Yi5vd25lckRvY3VtZW50O2lmKFwiYWN0aXZlRWxlbWVudFwiaW4gZil7dmFyIGc7dHJ5e2c9Zi5hY3RpdmVFbGVtZW50fWNhdGNoKGgpe2c9Zi5ib2R5fWU9Zz09PWJ9Zj1kKCk7YS5oLnBhKGYsYyxcImhhc2ZvY3VzXCIsZSwhMCk7Yi5fX2tvX2hhc2ZvY3VzTGFzdFZhbHVlPWU7Yi5fX2tvX2hhc2ZvY3VzVXBkYXRpbmc9ITF9dmFyIGc9ZS5iaW5kKG51bGwsITApLGg9ZS5iaW5kKG51bGwsITEpO2EuYS5uKGIsXCJmb2N1c1wiLGcpO2EuYS5uKGIsXCJmb2N1c2luXCIsXG5nKTthLmEubihiLFwiYmx1clwiLGgpO2EuYS5uKGIsXCJmb2N1c291dFwiLGgpfSx1cGRhdGU6ZnVuY3Rpb24oYixkKXt2YXIgYz0hIWEuYS5jKGQoKSk7Yi5fX2tvX2hhc2ZvY3VzVXBkYXRpbmd8fGIuX19rb19oYXNmb2N1c0xhc3RWYWx1ZT09PWN8fChjP2IuZm9jdXMoKTpiLmJsdXIoKSxhLmsuQihhLmEub2EsbnVsbCxbYixjP1wiZm9jdXNpblwiOlwiZm9jdXNvdXRcIl0pKX19O2EuaC5WLmhhc2ZvY3VzPSEwO2EuZC5oYXNGb2N1cz1hLmQuaGFzZm9jdXM7YS5oLlYuaGFzRm9jdXM9ITA7YS5kLmh0bWw9e2luaXQ6ZnVuY3Rpb24oKXtyZXR1cm57Y29udHJvbHNEZXNjZW5kYW50QmluZGluZ3M6ITB9fSx1cGRhdGU6ZnVuY3Rpb24oYixkKXthLmEuJGEoYixkKCkpfX07SShcImlmXCIpO0koXCJpZm5vdFwiLCExLCEwKTtJKFwid2l0aFwiLCEwLCExLGZ1bmN0aW9uKGEsZCl7cmV0dXJuIGEuY3JlYXRlQ2hpbGRDb250ZXh0KGQpfSk7dmFyIEs9e307YS5kLm9wdGlvbnM9e2luaXQ6ZnVuY3Rpb24oYil7aWYoXCJzZWxlY3RcIiE9PVxuYS5hLnQoYikpdGhyb3cgRXJyb3IoXCJvcHRpb25zIGJpbmRpbmcgYXBwbGllcyBvbmx5IHRvIFNFTEVDVCBlbGVtZW50c1wiKTtmb3IoOzA8Yi5sZW5ndGg7KWIucmVtb3ZlKDApO3JldHVybntjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5nczohMH19LHVwZGF0ZTpmdW5jdGlvbihiLGQsYyl7ZnVuY3Rpb24gZSgpe3JldHVybiBhLmEudGEoYi5vcHRpb25zLGZ1bmN0aW9uKGEpe3JldHVybiBhLnNlbGVjdGVkfSl9ZnVuY3Rpb24gZyhhLGIsYyl7dmFyIGQ9dHlwZW9mIGI7cmV0dXJuXCJmdW5jdGlvblwiPT1kP2IoYSk6XCJzdHJpbmdcIj09ZD9hW2JdOmN9ZnVuY3Rpb24gaChjLGQpe2lmKHEubGVuZ3RoKXt2YXIgZT0wPD1hLmEubShxLGEuaS5xKGRbMF0pKTthLmEuTmIoZFswXSxlKTtuJiYhZSYmYS5rLkIoYS5hLm9hLG51bGwsW2IsXCJjaGFuZ2VcIl0pfX12YXIgaz0wIT1iLmxlbmd0aCYmYi5tdWx0aXBsZT9iLnNjcm9sbFRvcDpudWxsLGY9YS5hLmMoZCgpKSxtPWMuZ2V0KFwib3B0aW9uc0luY2x1ZGVEZXN0cm95ZWRcIik7XG5kPXt9O3ZhciBsLHE7cT1iLm11bHRpcGxlP2EuYS5EYShlKCksYS5pLnEpOjA8PWIuc2VsZWN0ZWRJbmRleD9bYS5pLnEoYi5vcHRpb25zW2Iuc2VsZWN0ZWRJbmRleF0pXTpbXTtmJiYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGYubGVuZ3RoJiYoZj1bZl0pLGw9YS5hLnRhKGYsZnVuY3Rpb24oYil7cmV0dXJuIG18fGI9PT1wfHxudWxsPT09Ynx8IWEuYS5jKGIuX2Rlc3Ryb3kpfSksYy5oYXMoXCJvcHRpb25zQ2FwdGlvblwiKSYmKGY9YS5hLmMoYy5nZXQoXCJvcHRpb25zQ2FwdGlvblwiKSksbnVsbCE9PWYmJmYhPT1wJiZsLnVuc2hpZnQoSykpKTt2YXIgbj0hMTtkLmJlZm9yZVJlbW92ZT1mdW5jdGlvbihhKXtiLnJlbW92ZUNoaWxkKGEpfTtmPWg7Yy5oYXMoXCJvcHRpb25zQWZ0ZXJSZW5kZXJcIikmJihmPWZ1bmN0aW9uKGIsZCl7aCgwLGQpO2Euay5CKGMuZ2V0KFwib3B0aW9uc0FmdGVyUmVuZGVyXCIpLG51bGwsW2RbMF0sYiE9PUs/YjpwXSl9KTthLmEuWmEoYixsLGZ1bmN0aW9uKGQsZSxmKXtmLmxlbmd0aCYmXG4ocT1mWzBdLnNlbGVjdGVkP1thLmkucShmWzBdKV06W10sbj0hMCk7ZT1iLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtkPT09Sz8oYS5hLmJiKGUsYy5nZXQoXCJvcHRpb25zQ2FwdGlvblwiKSksYS5pLmNhKGUscCkpOihmPWcoZCxjLmdldChcIm9wdGlvbnNWYWx1ZVwiKSxkKSxhLmkuY2EoZSxhLmEuYyhmKSksZD1nKGQsYy5nZXQoXCJvcHRpb25zVGV4dFwiKSxmKSxhLmEuYmIoZSxkKSk7cmV0dXJuW2VdfSxkLGYpO2Euay5CKGZ1bmN0aW9uKCl7Yy5nZXQoXCJ2YWx1ZUFsbG93VW5zZXRcIikmJmMuaGFzKFwidmFsdWVcIik/YS5pLmNhKGIsYS5hLmMoYy5nZXQoXCJ2YWx1ZVwiKSksITApOihiLm11bHRpcGxlP3EubGVuZ3RoJiZlKCkubGVuZ3RoPHEubGVuZ3RoOnEubGVuZ3RoJiYwPD1iLnNlbGVjdGVkSW5kZXg/YS5pLnEoYi5vcHRpb25zW2Iuc2VsZWN0ZWRJbmRleF0pIT09cVswXTpxLmxlbmd0aHx8MDw9Yi5zZWxlY3RlZEluZGV4KSYmYS5hLm9hKGIsXCJjaGFuZ2VcIil9KTtcbmEuYS5kYyhiKTtrJiYyMDxNYXRoLmFicyhrLWIuc2Nyb2xsVG9wKSYmKGIuc2Nyb2xsVG9wPWspfX07YS5kLm9wdGlvbnMuVmE9YS5hLmUuRigpO2EuZC5zZWxlY3RlZE9wdGlvbnM9e2FmdGVyOltcIm9wdGlvbnNcIixcImZvcmVhY2hcIl0saW5pdDpmdW5jdGlvbihiLGQsYyl7YS5hLm4oYixcImNoYW5nZVwiLGZ1bmN0aW9uKCl7dmFyIGU9ZCgpLGc9W107YS5hLnUoYi5nZXRFbGVtZW50c0J5VGFnTmFtZShcIm9wdGlvblwiKSxmdW5jdGlvbihiKXtiLnNlbGVjdGVkJiZnLnB1c2goYS5pLnEoYikpfSk7YS5oLnBhKGUsYyxcInNlbGVjdGVkT3B0aW9uc1wiLGcpfSl9LHVwZGF0ZTpmdW5jdGlvbihiLGQpe2lmKFwic2VsZWN0XCIhPWEuYS50KGIpKXRocm93IEVycm9yKFwidmFsdWVzIGJpbmRpbmcgYXBwbGllcyBvbmx5IHRvIFNFTEVDVCBlbGVtZW50c1wiKTt2YXIgYz1hLmEuYyhkKCkpO2MmJlwibnVtYmVyXCI9PXR5cGVvZiBjLmxlbmd0aCYmYS5hLnUoYi5nZXRFbGVtZW50c0J5VGFnTmFtZShcIm9wdGlvblwiKSxcbmZ1bmN0aW9uKGIpe3ZhciBkPTA8PWEuYS5tKGMsYS5pLnEoYikpO2EuYS5OYihiLGQpfSl9fTthLmguVi5zZWxlY3RlZE9wdGlvbnM9ITA7YS5kLnN0eWxlPXt1cGRhdGU6ZnVuY3Rpb24oYixkKXt2YXIgYz1hLmEuYyhkKCl8fHt9KTthLmEuRyhjLGZ1bmN0aW9uKGMsZCl7ZD1hLmEuYyhkKTtpZihudWxsPT09ZHx8ZD09PXB8fCExPT09ZClkPVwiXCI7Yi5zdHlsZVtjXT1kfSl9fTthLmQuc3VibWl0PXtpbml0OmZ1bmN0aW9uKGIsZCxjLGUsZyl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZCgpKXRocm93IEVycm9yKFwiVGhlIHZhbHVlIGZvciBhIHN1Ym1pdCBiaW5kaW5nIG11c3QgYmUgYSBmdW5jdGlvblwiKTthLmEubihiLFwic3VibWl0XCIsZnVuY3Rpb24oYSl7dmFyIGMsZT1kKCk7dHJ5e2M9ZS5jYWxsKGcuJGRhdGEsYil9ZmluYWxseXshMCE9PWMmJihhLnByZXZlbnREZWZhdWx0P2EucHJldmVudERlZmF1bHQoKTphLnJldHVyblZhbHVlPSExKX19KX19O2EuZC50ZXh0PXtpbml0OmZ1bmN0aW9uKCl7cmV0dXJue2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzOiEwfX0sXG51cGRhdGU6ZnVuY3Rpb24oYixkKXthLmEuYmIoYixkKCkpfX07YS5mLlEudGV4dD0hMDsoZnVuY3Rpb24oKXtpZihzJiZzLm5hdmlnYXRvcil2YXIgYj1mdW5jdGlvbihhKXtpZihhKXJldHVybiBwYXJzZUZsb2F0KGFbMV0pfSxkPXMub3BlcmEmJnMub3BlcmEudmVyc2lvbiYmcGFyc2VJbnQocy5vcGVyYS52ZXJzaW9uKCkpLGM9cy5uYXZpZ2F0b3IudXNlckFnZW50LGU9YihjLm1hdGNoKC9eKD86KD8hY2hyb21lKS4pKnZlcnNpb25cXC8oW14gXSopIHNhZmFyaS9pKSksZz1iKGMubWF0Y2goL0ZpcmVmb3hcXC8oW14gXSopLykpO2lmKDEwPmEuYS5MKXZhciBoPWEuYS5lLkYoKSxrPWEuYS5lLkYoKSxmPWZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMuYWN0aXZlRWxlbWVudDsoYz1jJiZhLmEuZS5nZXQoYyxrKSkmJmMoYil9LG09ZnVuY3Rpb24oYixjKXt2YXIgZD1iLm93bmVyRG9jdW1lbnQ7YS5hLmUuZ2V0KGQsaCl8fChhLmEuZS5zZXQoZCxoLCEwKSxhLmEubihkLFwic2VsZWN0aW9uY2hhbmdlXCIsXG5mKSk7YS5hLmUuc2V0KGIsayxjKX07YS5kLnRleHRJbnB1dD17aW5pdDpmdW5jdGlvbihiLGMsZil7ZnVuY3Rpb24gayhjLGQpe2EuYS5uKGIsYyxkKX1mdW5jdGlvbiBoKCl7dmFyIGQ9YS5hLmMoYygpKTtpZihudWxsPT09ZHx8ZD09PXApZD1cIlwiO3YhPT1wJiZkPT09dj9zZXRUaW1lb3V0KGgsNCk6Yi52YWx1ZSE9PWQmJihzPWQsYi52YWx1ZT1kKX1mdW5jdGlvbiB1KCl7eXx8KHY9Yi52YWx1ZSx5PXNldFRpbWVvdXQociw0KSl9ZnVuY3Rpb24gcigpe2NsZWFyVGltZW91dCh5KTt2PXk9cDt2YXIgZD1iLnZhbHVlO3MhPT1kJiYocz1kLGEuaC5wYShjKCksZixcInRleHRJbnB1dFwiLGQpKX12YXIgcz1iLnZhbHVlLHksdjsxMD5hLmEuTD8oayhcInByb3BlcnR5Y2hhbmdlXCIsZnVuY3Rpb24oYSl7XCJ2YWx1ZVwiPT09YS5wcm9wZXJ0eU5hbWUmJnIoKX0pLDg9PWEuYS5MJiYoayhcImtleXVwXCIsciksayhcImtleWRvd25cIixyKSksODw9YS5hLkwmJihtKGIsciksayhcImRyYWdlbmRcIix1KSkpOlxuKGsoXCJpbnB1dFwiLHIpLDU+ZSYmXCJ0ZXh0YXJlYVwiPT09YS5hLnQoYik/KGsoXCJrZXlkb3duXCIsdSksayhcInBhc3RlXCIsdSksayhcImN1dFwiLHUpKToxMT5kP2soXCJrZXlkb3duXCIsdSk6ND5nJiYoayhcIkRPTUF1dG9Db21wbGV0ZVwiLHIpLGsoXCJkcmFnZHJvcFwiLHIpLGsoXCJkcm9wXCIscikpKTtrKFwiY2hhbmdlXCIscik7YS5zKGgsbnVsbCx7bzpifSl9fTthLmguVi50ZXh0SW5wdXQ9ITA7YS5kLnRleHRpbnB1dD17cHJlcHJvY2VzczpmdW5jdGlvbihhLGIsYyl7YyhcInRleHRJbnB1dFwiLGEpfX19KSgpO2EuZC51bmlxdWVOYW1lPXtpbml0OmZ1bmN0aW9uKGIsZCl7aWYoZCgpKXt2YXIgYz1cImtvX3VuaXF1ZV9cIisgKythLmQudW5pcXVlTmFtZS5aYjthLmEuTWIoYixjKX19fTthLmQudW5pcXVlTmFtZS5aYj0wO2EuZC52YWx1ZT17YWZ0ZXI6W1wib3B0aW9uc1wiLFwiZm9yZWFjaFwiXSxpbml0OmZ1bmN0aW9uKGIsZCxjKXtpZihcImlucHV0XCIhPWIudGFnTmFtZS50b0xvd2VyQ2FzZSgpfHxcImNoZWNrYm94XCIhPVxuYi50eXBlJiZcInJhZGlvXCIhPWIudHlwZSl7dmFyIGU9W1wiY2hhbmdlXCJdLGc9Yy5nZXQoXCJ2YWx1ZVVwZGF0ZVwiKSxoPSExLGs9bnVsbDtnJiYoXCJzdHJpbmdcIj09dHlwZW9mIGcmJihnPVtnXSksYS5hLmdhKGUsZyksZT1hLmEucmIoZSkpO3ZhciBmPWZ1bmN0aW9uKCl7az1udWxsO2g9ITE7dmFyIGU9ZCgpLGY9YS5pLnEoYik7YS5oLnBhKGUsYyxcInZhbHVlXCIsZil9OyFhLmEuTHx8XCJpbnB1dFwiIT1iLnRhZ05hbWUudG9Mb3dlckNhc2UoKXx8XCJ0ZXh0XCIhPWIudHlwZXx8XCJvZmZcIj09Yi5hdXRvY29tcGxldGV8fGIuZm9ybSYmXCJvZmZcIj09Yi5mb3JtLmF1dG9jb21wbGV0ZXx8LTEhPWEuYS5tKGUsXCJwcm9wZXJ0eWNoYW5nZVwiKXx8KGEuYS5uKGIsXCJwcm9wZXJ0eWNoYW5nZVwiLGZ1bmN0aW9uKCl7aD0hMH0pLGEuYS5uKGIsXCJmb2N1c1wiLGZ1bmN0aW9uKCl7aD0hMX0pLGEuYS5uKGIsXCJibHVyXCIsZnVuY3Rpb24oKXtoJiZmKCl9KSk7YS5hLnUoZSxmdW5jdGlvbihjKXt2YXIgZD1mO2EuYS52YyhjLFxuXCJhZnRlclwiKSYmKGQ9ZnVuY3Rpb24oKXtrPWEuaS5xKGIpO3NldFRpbWVvdXQoZiwwKX0sYz1jLnN1YnN0cmluZyg1KSk7YS5hLm4oYixjLGQpfSk7dmFyIG09ZnVuY3Rpb24oKXt2YXIgZT1hLmEuYyhkKCkpLGY9YS5pLnEoYik7aWYobnVsbCE9PWsmJmU9PT1rKXNldFRpbWVvdXQobSwwKTtlbHNlIGlmKGUhPT1mKWlmKFwic2VsZWN0XCI9PT1hLmEudChiKSl7dmFyIGc9Yy5nZXQoXCJ2YWx1ZUFsbG93VW5zZXRcIiksZj1mdW5jdGlvbigpe2EuaS5jYShiLGUsZyl9O2YoKTtnfHxlPT09YS5pLnEoYik/c2V0VGltZW91dChmLDApOmEuay5CKGEuYS5vYSxudWxsLFtiLFwiY2hhbmdlXCJdKX1lbHNlIGEuaS5jYShiLGUpfTthLnMobSxudWxsLHtvOmJ9KX1lbHNlIGEucmEoYix7Y2hlY2tlZFZhbHVlOmR9KX0sdXBkYXRlOmZ1bmN0aW9uKCl7fX07YS5oLlYudmFsdWU9ITA7YS5kLnZpc2libGU9e3VwZGF0ZTpmdW5jdGlvbihiLGQpe3ZhciBjPWEuYS5jKGQoKSksZT1cIm5vbmVcIiE9Yi5zdHlsZS5kaXNwbGF5O1xuYyYmIWU/Yi5zdHlsZS5kaXNwbGF5PVwiXCI6IWMmJmUmJihiLnN0eWxlLmRpc3BsYXk9XCJub25lXCIpfX07KGZ1bmN0aW9uKGIpe2EuZFtiXT17aW5pdDpmdW5jdGlvbihkLGMsZSxnLGgpe3JldHVybiBhLmQuZXZlbnQuaW5pdC5jYWxsKHRoaXMsZCxmdW5jdGlvbigpe3ZhciBhPXt9O2FbYl09YygpO3JldHVybiBhfSxlLGcsaCl9fX0pKFwiY2xpY2tcIik7YS5IPWZ1bmN0aW9uKCl7fTthLkgucHJvdG90eXBlLnJlbmRlclRlbXBsYXRlU291cmNlPWZ1bmN0aW9uKCl7dGhyb3cgRXJyb3IoXCJPdmVycmlkZSByZW5kZXJUZW1wbGF0ZVNvdXJjZVwiKTt9O2EuSC5wcm90b3R5cGUuY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrPWZ1bmN0aW9uKCl7dGhyb3cgRXJyb3IoXCJPdmVycmlkZSBjcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2tcIik7fTthLkgucHJvdG90eXBlLm1ha2VUZW1wbGF0ZVNvdXJjZT1mdW5jdGlvbihiLGQpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKXtkPWR8fHY7dmFyIGM9XG5kLmdldEVsZW1lbnRCeUlkKGIpO2lmKCFjKXRocm93IEVycm9yKFwiQ2Fubm90IGZpbmQgdGVtcGxhdGUgd2l0aCBJRCBcIitiKTtyZXR1cm4gbmV3IGEuci5sKGMpfWlmKDE9PWIubm9kZVR5cGV8fDg9PWIubm9kZVR5cGUpcmV0dXJuIG5ldyBhLnIuZmEoYik7dGhyb3cgRXJyb3IoXCJVbmtub3duIHRlbXBsYXRlIHR5cGU6IFwiK2IpO307YS5ILnByb3RvdHlwZS5yZW5kZXJUZW1wbGF0ZT1mdW5jdGlvbihhLGQsYyxlKXthPXRoaXMubWFrZVRlbXBsYXRlU291cmNlKGEsZSk7cmV0dXJuIHRoaXMucmVuZGVyVGVtcGxhdGVTb3VyY2UoYSxkLGMpfTthLkgucHJvdG90eXBlLmlzVGVtcGxhdGVSZXdyaXR0ZW49ZnVuY3Rpb24oYSxkKXtyZXR1cm4hMT09PXRoaXMuYWxsb3dUZW1wbGF0ZVJld3JpdGluZz8hMDp0aGlzLm1ha2VUZW1wbGF0ZVNvdXJjZShhLGQpLmRhdGEoXCJpc1Jld3JpdHRlblwiKX07YS5ILnByb3RvdHlwZS5yZXdyaXRlVGVtcGxhdGU9ZnVuY3Rpb24oYSxkLGMpe2E9dGhpcy5tYWtlVGVtcGxhdGVTb3VyY2UoYSxcbmMpO2Q9ZChhLnRleHQoKSk7YS50ZXh0KGQpO2EuZGF0YShcImlzUmV3cml0dGVuXCIsITApfTthLmIoXCJ0ZW1wbGF0ZUVuZ2luZVwiLGEuSCk7YS5mYj1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixjLGQsayl7Yj1hLmguV2EoYik7Zm9yKHZhciBmPWEuaC5oYSxtPTA7bTxiLmxlbmd0aDttKyspe3ZhciBsPWJbbV0ua2V5O2lmKGYuaGFzT3duUHJvcGVydHkobCkpe3ZhciBxPWZbbF07aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIHEpe2lmKGw9cShiW21dLnZhbHVlKSl0aHJvdyBFcnJvcihsKTt9ZWxzZSBpZighcSl0aHJvdyBFcnJvcihcIlRoaXMgdGVtcGxhdGUgZW5naW5lIGRvZXMgbm90IHN1cHBvcnQgdGhlICdcIitsK1wiJyBiaW5kaW5nIHdpdGhpbiBpdHMgdGVtcGxhdGVzXCIpO319ZD1cImtvLl9fdHJfYW1idG5zKGZ1bmN0aW9uKCRjb250ZXh0LCRlbGVtZW50KXtyZXR1cm4oZnVuY3Rpb24oKXtyZXR1cm57IFwiK2EuaC55YShiLHt2YWx1ZUFjY2Vzc29yczohMH0pK1wiIH0gfSkoKX0sJ1wiK2QudG9Mb3dlckNhc2UoKStcblwiJylcIjtyZXR1cm4gay5jcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2soZCkrY312YXIgZD0vKDwoW2Etel0rXFxkKikoPzpcXHMrKD8hZGF0YS1iaW5kXFxzKj1cXHMqKVthLXowLTlcXC1dKyg/Oj0oPzpcXFwiW15cXFwiXSpcXFwifFxcJ1teXFwnXSpcXCcpKT8pKlxccyspZGF0YS1iaW5kXFxzKj1cXHMqKFtcIiddKShbXFxzXFxTXSo/KVxcMy9naSxjPS9cXHgzYyEtLVxccyprb1xcYlxccyooW1xcc1xcU10qPylcXHMqLS1cXHgzZS9nO3JldHVybntlYzpmdW5jdGlvbihiLGMsZCl7Yy5pc1RlbXBsYXRlUmV3cml0dGVuKGIsZCl8fGMucmV3cml0ZVRlbXBsYXRlKGIsZnVuY3Rpb24oYil7cmV0dXJuIGEuZmIubmMoYixjKX0sZCl9LG5jOmZ1bmN0aW9uKGEsZyl7cmV0dXJuIGEucmVwbGFjZShkLGZ1bmN0aW9uKGEsYyxkLGUsbCl7cmV0dXJuIGIobCxjLGQsZyl9KS5yZXBsYWNlKGMsZnVuY3Rpb24oYSxjKXtyZXR1cm4gYihjLFwiXFx4M2MhLS0ga28gLS1cXHgzZVwiLFwiI2NvbW1lbnRcIixnKX0pfSxYYjpmdW5jdGlvbihiLGMpe3JldHVybiBhLkQuVWEoZnVuY3Rpb24oZCxcbmspe3ZhciBmPWQubmV4dFNpYmxpbmc7ZiYmZi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09YyYmYS5yYShmLGIsayl9KX19fSgpO2EuYihcIl9fdHJfYW1idG5zXCIsYS5mYi5YYik7KGZ1bmN0aW9uKCl7YS5yPXt9O2Euci5sPWZ1bmN0aW9uKGEpe3RoaXMubD1hfTthLnIubC5wcm90b3R5cGUudGV4dD1mdW5jdGlvbigpe3ZhciBiPWEuYS50KHRoaXMubCksYj1cInNjcmlwdFwiPT09Yj9cInRleHRcIjpcInRleHRhcmVhXCI9PT1iP1widmFsdWVcIjpcImlubmVySFRNTFwiO2lmKDA9PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMubFtiXTt2YXIgZD1hcmd1bWVudHNbMF07XCJpbm5lckhUTUxcIj09PWI/YS5hLiRhKHRoaXMubCxkKTp0aGlzLmxbYl09ZH07dmFyIGI9YS5hLmUuRigpK1wiX1wiO2Euci5sLnByb3RvdHlwZS5kYXRhPWZ1bmN0aW9uKGMpe2lmKDE9PT1hcmd1bWVudHMubGVuZ3RoKXJldHVybiBhLmEuZS5nZXQodGhpcy5sLGIrYyk7YS5hLmUuc2V0KHRoaXMubCxiK2MsYXJndW1lbnRzWzFdKX07XG52YXIgZD1hLmEuZS5GKCk7YS5yLmZhPWZ1bmN0aW9uKGEpe3RoaXMubD1hfTthLnIuZmEucHJvdG90eXBlPW5ldyBhLnIubDthLnIuZmEucHJvdG90eXBlLnRleHQ9ZnVuY3Rpb24oKXtpZigwPT1hcmd1bWVudHMubGVuZ3RoKXt2YXIgYj1hLmEuZS5nZXQodGhpcy5sLGQpfHx7fTtiLmdiPT09cCYmYi5HYSYmKGIuZ2I9Yi5HYS5pbm5lckhUTUwpO3JldHVybiBiLmdifWEuYS5lLnNldCh0aGlzLmwsZCx7Z2I6YXJndW1lbnRzWzBdfSl9O2Euci5sLnByb3RvdHlwZS5ub2Rlcz1mdW5jdGlvbigpe2lmKDA9PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuKGEuYS5lLmdldCh0aGlzLmwsZCl8fHt9KS5HYTthLmEuZS5zZXQodGhpcy5sLGQse0dhOmFyZ3VtZW50c1swXX0pfTthLmIoXCJ0ZW1wbGF0ZVNvdXJjZXNcIixhLnIpO2EuYihcInRlbXBsYXRlU291cmNlcy5kb21FbGVtZW50XCIsYS5yLmwpO2EuYihcInRlbXBsYXRlU291cmNlcy5hbm9ueW1vdXNUZW1wbGF0ZVwiLGEuci5mYSl9KSgpOyhmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixcbmMsZCl7dmFyIGU7Zm9yKGM9YS5mLm5leHRTaWJsaW5nKGMpO2ImJihlPWIpIT09YzspYj1hLmYubmV4dFNpYmxpbmcoZSksZChlLGIpfWZ1bmN0aW9uIGQoYyxkKXtpZihjLmxlbmd0aCl7dmFyIGU9Y1swXSxnPWNbYy5sZW5ndGgtMV0saD1lLnBhcmVudE5vZGUsbj1hLkouaW5zdGFuY2UsdD1uLnByZXByb2Nlc3NOb2RlO2lmKHQpe2IoZSxnLGZ1bmN0aW9uKGEsYil7dmFyIGM9YS5wcmV2aW91c1NpYmxpbmcsZD10LmNhbGwobixhKTtkJiYoYT09PWUmJihlPWRbMF18fGIpLGE9PT1nJiYoZz1kW2QubGVuZ3RoLTFdfHxjKSl9KTtjLmxlbmd0aD0wO2lmKCFlKXJldHVybjtlPT09Zz9jLnB1c2goZSk6KGMucHVzaChlLGcpLGEuYS5rYShjLGgpKX1iKGUsZyxmdW5jdGlvbihiKXsxIT09Yi5ub2RlVHlwZSYmOCE9PWIubm9kZVR5cGV8fGEucGIoZCxiKX0pO2IoZSxnLGZ1bmN0aW9uKGIpezEhPT1iLm5vZGVUeXBlJiY4IT09Yi5ub2RlVHlwZXx8YS5ELlNiKGIsW2RdKX0pO2EuYS5rYShjLFxuaCl9fWZ1bmN0aW9uIGMoYSl7cmV0dXJuIGEubm9kZVR5cGU/YTowPGEubGVuZ3RoP2FbMF06bnVsbH1mdW5jdGlvbiBlKGIsZSxoLGwscSl7cT1xfHx7fTt2YXIgbj1iJiZjKGIpLG49biYmbi5vd25lckRvY3VtZW50LHQ9cS50ZW1wbGF0ZUVuZ2luZXx8ZzthLmZiLmVjKGgsdCxuKTtoPXQucmVuZGVyVGVtcGxhdGUoaCxsLHEsbik7aWYoXCJudW1iZXJcIiE9dHlwZW9mIGgubGVuZ3RofHwwPGgubGVuZ3RoJiZcIm51bWJlclwiIT10eXBlb2YgaFswXS5ub2RlVHlwZSl0aHJvdyBFcnJvcihcIlRlbXBsYXRlIGVuZ2luZSBtdXN0IHJldHVybiBhbiBhcnJheSBvZiBET00gbm9kZXNcIik7bj0hMTtzd2l0Y2goZSl7Y2FzZSBcInJlcGxhY2VDaGlsZHJlblwiOmEuZi5UKGIsaCk7bj0hMDticmVhaztjYXNlIFwicmVwbGFjZU5vZGVcIjphLmEuTGIoYixoKTtuPSEwO2JyZWFrO2Nhc2UgXCJpZ25vcmVUYXJnZXROb2RlXCI6YnJlYWs7ZGVmYXVsdDp0aHJvdyBFcnJvcihcIlVua25vd24gcmVuZGVyTW9kZTogXCIrXG5lKTt9biYmKGQoaCxsKSxxLmFmdGVyUmVuZGVyJiZhLmsuQihxLmFmdGVyUmVuZGVyLG51bGwsW2gsbC4kZGF0YV0pKTtyZXR1cm4gaH12YXIgZzthLmFiPWZ1bmN0aW9uKGIpe2lmKGIhPXAmJiEoYiBpbnN0YW5jZW9mIGEuSCkpdGhyb3cgRXJyb3IoXCJ0ZW1wbGF0ZUVuZ2luZSBtdXN0IGluaGVyaXQgZnJvbSBrby50ZW1wbGF0ZUVuZ2luZVwiKTtnPWJ9O2EuWWE9ZnVuY3Rpb24oYixkLGgsbCxxKXtoPWh8fHt9O2lmKChoLnRlbXBsYXRlRW5naW5lfHxnKT09cCl0aHJvdyBFcnJvcihcIlNldCBhIHRlbXBsYXRlIGVuZ2luZSBiZWZvcmUgY2FsbGluZyByZW5kZXJUZW1wbGF0ZVwiKTtxPXF8fFwicmVwbGFjZUNoaWxkcmVuXCI7aWYobCl7dmFyIG49YyhsKTtyZXR1cm4gYS5qKGZ1bmN0aW9uKCl7dmFyIGc9ZCYmZCBpbnN0YW5jZW9mIGEuTj9kOm5ldyBhLk4oYS5hLmMoZCkpLHA9YS5DKGIpP2IoKTpcImZ1bmN0aW9uXCI9PT10eXBlb2YgYj9iKGcuJGRhdGEsZyk6YixnPWUobCxxLHAsZyxoKTtcblwicmVwbGFjZU5vZGVcIj09cSYmKGw9ZyxuPWMobCkpfSxudWxsLHtJYTpmdW5jdGlvbigpe3JldHVybiFufHwhYS5hLkphKG4pfSxvOm4mJlwicmVwbGFjZU5vZGVcIj09cT9uLnBhcmVudE5vZGU6bn0pfXJldHVybiBhLkQuVWEoZnVuY3Rpb24oYyl7YS5ZYShiLGQsaCxjLFwicmVwbGFjZU5vZGVcIil9KX07YS51Yz1mdW5jdGlvbihiLGMsZyxoLHEpe2Z1bmN0aW9uIG4oYSxiKXtkKGIscyk7Zy5hZnRlclJlbmRlciYmZy5hZnRlclJlbmRlcihiLGEpfWZ1bmN0aW9uIHQoYyxkKXtzPXEuY3JlYXRlQ2hpbGRDb250ZXh0KGMsZy5hcyxmdW5jdGlvbihhKXthLiRpbmRleD1kfSk7dmFyIGY9YS5DKGIpP2IoKTpcImZ1bmN0aW9uXCI9PT10eXBlb2YgYj9iKGMscyk6YjtyZXR1cm4gZShudWxsLFwiaWdub3JlVGFyZ2V0Tm9kZVwiLGYscyxnKX12YXIgcztyZXR1cm4gYS5qKGZ1bmN0aW9uKCl7dmFyIGI9YS5hLmMoYyl8fFtdO1widW5kZWZpbmVkXCI9PXR5cGVvZiBiLmxlbmd0aCYmKGI9W2JdKTtiPWEuYS50YShiLFxuZnVuY3Rpb24oYil7cmV0dXJuIGcuaW5jbHVkZURlc3Ryb3llZHx8Yj09PXB8fG51bGw9PT1ifHwhYS5hLmMoYi5fZGVzdHJveSl9KTthLmsuQihhLmEuWmEsbnVsbCxbaCxiLHQsZyxuXSl9LG51bGwse286aH0pfTt2YXIgaD1hLmEuZS5GKCk7YS5kLnRlbXBsYXRlPXtpbml0OmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLmMoYygpKTtcInN0cmluZ1wiPT10eXBlb2YgZHx8ZC5uYW1lP2EuZi5qYShiKTooZD1hLmYuY2hpbGROb2RlcyhiKSxkPWEuYS5vYyhkKSwobmV3IGEuci5mYShiKSkubm9kZXMoZCkpO3JldHVybntjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5nczohMH19LHVwZGF0ZTpmdW5jdGlvbihiLGMsZCxlLGcpe3ZhciBuPWMoKSx0O2M9YS5hLmMobik7ZD0hMDtlPW51bGw7XCJzdHJpbmdcIj09dHlwZW9mIGM/Yz17fToobj1jLm5hbWUsXCJpZlwiaW4gYyYmKGQ9YS5hLmMoY1tcImlmXCJdKSksZCYmXCJpZm5vdFwiaW4gYyYmKGQ9IWEuYS5jKGMuaWZub3QpKSx0PWEuYS5jKGMuZGF0YSkpO1xuXCJmb3JlYWNoXCJpbiBjP2U9YS51YyhufHxiLGQmJmMuZm9yZWFjaHx8W10sYyxiLGcpOmQ/KGc9XCJkYXRhXCJpbiBjP2cuY3JlYXRlQ2hpbGRDb250ZXh0KHQsYy5hcyk6ZyxlPWEuWWEobnx8YixnLGMsYikpOmEuZi5qYShiKTtnPWU7KHQ9YS5hLmUuZ2V0KGIsaCkpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LksmJnQuSygpO2EuYS5lLnNldChiLGgsZyYmZy5aKCk/ZzpwKX19O2EuaC5oYS50ZW1wbGF0ZT1mdW5jdGlvbihiKXtiPWEuaC5XYShiKTtyZXR1cm4gMT09Yi5sZW5ndGgmJmJbMF0udW5rbm93bnx8YS5oLmxjKGIsXCJuYW1lXCIpP251bGw6XCJUaGlzIHRlbXBsYXRlIGVuZ2luZSBkb2VzIG5vdCBzdXBwb3J0IGFub255bW91cyB0ZW1wbGF0ZXMgbmVzdGVkIHdpdGhpbiBpdHMgdGVtcGxhdGVzXCJ9O2EuZi5RLnRlbXBsYXRlPSEwfSkoKTthLmIoXCJzZXRUZW1wbGF0ZUVuZ2luZVwiLGEuYWIpO2EuYihcInJlbmRlclRlbXBsYXRlXCIsYS5ZYSk7YS5hLndiPWZ1bmN0aW9uKGEsZCxjKXtpZihhLmxlbmd0aCYmXG5kLmxlbmd0aCl7dmFyIGUsZyxoLGssZjtmb3IoZT1nPTA7KCFjfHxlPGMpJiYoaz1hW2ddKTsrK2cpe2ZvcihoPTA7Zj1kW2hdOysraClpZihrLnZhbHVlPT09Zi52YWx1ZSl7ay5tb3ZlZD1mLmluZGV4O2YubW92ZWQ9ay5pbmRleDtkLnNwbGljZShoLDEpO2U9aD0wO2JyZWFrfWUrPWh9fX07YS5hLkZhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGMsZSxnLGgpe3ZhciBrPU1hdGgubWluLGY9TWF0aC5tYXgsbT1bXSxsLHE9Yi5sZW5ndGgsbixwPWMubGVuZ3RoLHM9cC1xfHwxLHU9cStwKzEscix2LHc7Zm9yKGw9MDtsPD1xO2wrKylmb3Iodj1yLG0ucHVzaChyPVtdKSx3PWsocCxsK3MpLG49ZigwLGwtMSk7bjw9dztuKyspcltuXT1uP2w/YltsLTFdPT09Y1tuLTFdP3Zbbi0xXTprKHZbbl18fHUscltuLTFdfHx1KSsxOm4rMTpsKzE7az1bXTtmPVtdO3M9W107bD1xO2ZvcihuPXA7bHx8bjspcD1tW2xdW25dLTEsbiYmcD09PW1bbF1bbi0xXT9mLnB1c2goa1trLmxlbmd0aF09e3N0YXR1czplLFxudmFsdWU6Y1stLW5dLGluZGV4Om59KTpsJiZwPT09bVtsLTFdW25dP3MucHVzaChrW2subGVuZ3RoXT17c3RhdHVzOmcsdmFsdWU6YlstLWxdLGluZGV4Omx9KTooLS1uLC0tbCxoLnNwYXJzZXx8ay5wdXNoKHtzdGF0dXM6XCJyZXRhaW5lZFwiLHZhbHVlOmNbbl19KSk7YS5hLndiKGYscywxMCpxKTtyZXR1cm4gay5yZXZlcnNlKCl9cmV0dXJuIGZ1bmN0aW9uKGEsYyxlKXtlPVwiYm9vbGVhblwiPT09dHlwZW9mIGU/e2RvbnRMaW1pdE1vdmVzOmV9OmV8fHt9O2E9YXx8W107Yz1jfHxbXTtyZXR1cm4gYS5sZW5ndGg8PWMubGVuZ3RoP2IoYSxjLFwiYWRkZWRcIixcImRlbGV0ZWRcIixlKTpiKGMsYSxcImRlbGV0ZWRcIixcImFkZGVkXCIsZSl9fSgpO2EuYihcInV0aWxzLmNvbXBhcmVBcnJheXNcIixhLmEuRmEpOyhmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixkLGcsaCxrKXt2YXIgZj1bXSxtPWEuaihmdW5jdGlvbigpe3ZhciBsPWQoZyxrLGEuYS5rYShmLGIpKXx8W107MDxmLmxlbmd0aCYmKGEuYS5MYihmLFxubCksaCYmYS5rLkIoaCxudWxsLFtnLGwsa10pKTtmLmxlbmd0aD0wO2EuYS5nYShmLGwpfSxudWxsLHtvOmIsSWE6ZnVuY3Rpb24oKXtyZXR1cm4hYS5hLm9iKGYpfX0pO3JldHVybnskOmYsajptLlooKT9tOnB9fXZhciBkPWEuYS5lLkYoKTthLmEuWmE9ZnVuY3Rpb24oYyxlLGcsaCxrKXtmdW5jdGlvbiBmKGIsZCl7eD1xW2RdO3IhPT1kJiYoQVtiXT14KTt4Lk5hKHIrKyk7YS5hLmthKHguJCxjKTtzLnB1c2goeCk7dy5wdXNoKHgpfWZ1bmN0aW9uIG0oYixjKXtpZihiKWZvcih2YXIgZD0wLGU9Yy5sZW5ndGg7ZDxlO2QrKyljW2RdJiZhLmEudShjW2RdLiQsZnVuY3Rpb24oYSl7YihhLGQsY1tkXS5zYSl9KX1lPWV8fFtdO2g9aHx8e307dmFyIGw9YS5hLmUuZ2V0KGMsZCk9PT1wLHE9YS5hLmUuZ2V0KGMsZCl8fFtdLG49YS5hLkRhKHEsZnVuY3Rpb24oYSl7cmV0dXJuIGEuc2F9KSx0PWEuYS5GYShuLGUsaC5kb250TGltaXRNb3Zlcykscz1bXSx1PTAscj0wLHY9W10sdz1bXTtlPVxuW107Zm9yKHZhciBBPVtdLG49W10seCxCPTAsRCxGO0Q9dFtCXTtCKyspc3dpdGNoKEY9RC5tb3ZlZCxELnN0YXR1cyl7Y2FzZSBcImRlbGV0ZWRcIjpGPT09cCYmKHg9cVt1XSx4LmomJnguai5LKCksdi5wdXNoLmFwcGx5KHYsYS5hLmthKHguJCxjKSksaC5iZWZvcmVSZW1vdmUmJihlW0JdPXgsdy5wdXNoKHgpKSk7dSsrO2JyZWFrO2Nhc2UgXCJyZXRhaW5lZFwiOmYoQix1KyspO2JyZWFrO2Nhc2UgXCJhZGRlZFwiOkYhPT1wP2YoQixGKTooeD17c2E6RC52YWx1ZSxOYTphLnAocisrKX0scy5wdXNoKHgpLHcucHVzaCh4KSxsfHwobltCXT14KSl9bShoLmJlZm9yZU1vdmUsQSk7YS5hLnUodixoLmJlZm9yZVJlbW92ZT9hLlI6YS5yZW1vdmVOb2RlKTtmb3IodmFyIEI9MCxsPWEuZi5maXJzdENoaWxkKGMpLEc7eD13W0JdO0IrKyl7eC4kfHxhLmEuZXh0ZW5kKHgsYihjLGcseC5zYSxrLHguTmEpKTtmb3IodT0wO3Q9eC4kW3VdO2w9dC5uZXh0U2libGluZyxHPXQsdSsrKXQhPT1sJiZhLmYuQmIoYyxcbnQsRyk7IXguaWMmJmsmJihrKHguc2EseC4kLHguTmEpLHguaWM9ITApfW0oaC5iZWZvcmVSZW1vdmUsZSk7bShoLmFmdGVyTW92ZSxBKTttKGguYWZ0ZXJBZGQsbik7YS5hLmUuc2V0KGMsZCxzKX19KSgpO2EuYihcInV0aWxzLnNldERvbU5vZGVDaGlsZHJlbkZyb21BcnJheU1hcHBpbmdcIixhLmEuWmEpO2EuTz1mdW5jdGlvbigpe3RoaXMuYWxsb3dUZW1wbGF0ZVJld3JpdGluZz0hMX07YS5PLnByb3RvdHlwZT1uZXcgYS5IO2EuTy5wcm90b3R5cGUucmVuZGVyVGVtcGxhdGVTb3VyY2U9ZnVuY3Rpb24oYil7dmFyIGQ9KDk+YS5hLkw/MDpiLm5vZGVzKT9iLm5vZGVzKCk6bnVsbDtpZihkKXJldHVybiBhLmEuUyhkLmNsb25lTm9kZSghMCkuY2hpbGROb2Rlcyk7Yj1iLnRleHQoKTtyZXR1cm4gYS5hLmJhKGIpfTthLk8uT2E9bmV3IGEuTzthLmFiKGEuTy5PYSk7YS5iKFwibmF0aXZlVGVtcGxhdGVFbmdpbmVcIixhLk8pOyhmdW5jdGlvbigpe2EuU2E9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmtjPVxuZnVuY3Rpb24oKXtpZighd3x8IXcudG1wbClyZXR1cm4gMDt0cnl7aWYoMDw9dy50bXBsLnRhZy50bXBsLm9wZW4udG9TdHJpbmcoKS5pbmRleE9mKFwiX19cIikpcmV0dXJuIDJ9Y2F0Y2goYSl7fXJldHVybiAxfSgpO3RoaXMucmVuZGVyVGVtcGxhdGVTb3VyY2U9ZnVuY3Rpb24oYixlLGcpe2c9Z3x8e307aWYoMj5hKXRocm93IEVycm9yKFwiWW91ciB2ZXJzaW9uIG9mIGpRdWVyeS50bXBsIGlzIHRvbyBvbGQuIFBsZWFzZSB1cGdyYWRlIHRvIGpRdWVyeS50bXBsIDEuMC4wcHJlIG9yIGxhdGVyLlwiKTt2YXIgaD1iLmRhdGEoXCJwcmVjb21waWxlZFwiKTtofHwoaD1iLnRleHQoKXx8XCJcIixoPXcudGVtcGxhdGUobnVsbCxcInt7a29fd2l0aCAkaXRlbS5rb0JpbmRpbmdDb250ZXh0fX1cIitoK1wie3sva29fd2l0aH19XCIpLGIuZGF0YShcInByZWNvbXBpbGVkXCIsaCkpO2I9W2UuJGRhdGFdO2U9dy5leHRlbmQoe2tvQmluZGluZ0NvbnRleHQ6ZX0sZy50ZW1wbGF0ZU9wdGlvbnMpO2U9dy50bXBsKGgsXG5iLGUpO2UuYXBwZW5kVG8odi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTt3LmZyYWdtZW50cz17fTtyZXR1cm4gZX07dGhpcy5jcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2s9ZnVuY3Rpb24oYSl7cmV0dXJuXCJ7e2tvX2NvZGUgKChmdW5jdGlvbigpIHsgcmV0dXJuIFwiK2ErXCIgfSkoKSkgfX1cIn07dGhpcy5hZGRUZW1wbGF0ZT1mdW5jdGlvbihhLGIpe3Yud3JpdGUoXCI8c2NyaXB0IHR5cGU9J3RleHQvaHRtbCcgaWQ9J1wiK2ErXCInPlwiK2IrXCJcXHgzYy9zY3JpcHQ+XCIpfTswPGEmJih3LnRtcGwudGFnLmtvX2NvZGU9e29wZW46XCJfXy5wdXNoKCQxIHx8ICcnKTtcIn0sdy50bXBsLnRhZy5rb193aXRoPXtvcGVuOlwid2l0aCgkMSkge1wiLGNsb3NlOlwifSBcIn0pfTthLlNhLnByb3RvdHlwZT1uZXcgYS5IO3ZhciBiPW5ldyBhLlNhOzA8Yi5rYyYmYS5hYihiKTthLmIoXCJqcXVlcnlUbXBsVGVtcGxhdGVFbmdpbmVcIixhLlNhKX0pKCl9KX0pKCk7fSkoKTtcbiIsIlByb21pc2UgPSByZXF1aXJlICdibHVlYmlyZCdcbmtvID0gcmVxdWlyZSAna25vY2tvdXQnXG5cbntnZXRNZXNzYWdlcywgZ2V0Q29uZmlnfSA9IHJlcXVpcmUgJy4vbWVzc2FnZV9zZXJ2aWNlLmNvZmZlZSdcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBNYWluVmlld01vZGVsXG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgIEBtZXNzYWdlcyA9IGtvLm9ic2VydmFibGVBcnJheSBbXVxuXG4gICAgUHJvbWlzZS5hbGwoW2dldENvbmZpZygpLCBnZXRNZXNzYWdlcygpXSkuc3ByZWFkIChjb25maWcsIG1lc3NhZ2VzKSA9PlxuICAgICAgQG1lc3NhZ2VUeXBlcyA9IGNvbmZpZy5tZXNzYWdlVHlwZXNcbiAgICAgIEByZWZyZXNoIG1lc3NhZ2VzXG5cbiAgcmVmcmVzaDogLT4gZ2V0TWVzc2FnZXMoKS50aGVuIChuZXdNZXNzYWdlcykgPT5cbiAgICBAbWVzc2FnZXMucHVzaCBtZXNzYWdlIGZvciBtZXNzYWdlIGluIG5ld01lc3NhZ2VzXG4iLCIkID0gcmVxdWlyZSAnanF1ZXJ5J1xuUHJvbWlzZSA9IHJlcXVpcmUgJ2JsdWViaXJkJ1xuXG5hcGlVcmwgPSBcIi9hcGkvdjEvZXZlbnRzL3Rlc3RcIlxuXG5leHBvcnRzLmdldENvbmZpZyA9IC0+IFByb21pc2UucmVzb2x2ZSAkLmdldEpTT04gXCIje2FwaVVybH0vY29uZmlnXCJcbmV4cG9ydHMuZ2V0TWVzc2FnZXMgPSAtPiBQcm9taXNlLnJlc29sdmUgJC5nZXRKU09OIFwiI3thcGlVcmx9L21lc3NhZ2VzXCJcbiIsIi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlKSB7XG52YXIgU29tZVByb21pc2VBcnJheSA9IFByb21pc2UuX1NvbWVQcm9taXNlQXJyYXk7XG5mdW5jdGlvbiBQcm9taXNlJF9BbnkocHJvbWlzZXMpIHtcbiAgICB2YXIgcmV0ID0gbmV3IFNvbWVQcm9taXNlQXJyYXkocHJvbWlzZXMpO1xuICAgIHZhciBwcm9taXNlID0gcmV0LnByb21pc2UoKTtcbiAgICBpZiAocHJvbWlzZS5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIHJldC5zZXRIb3dNYW55KDEpO1xuICAgIHJldC5zZXRVbndyYXAoKTtcbiAgICByZXQuaW5pdCgpO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5Qcm9taXNlLmFueSA9IGZ1bmN0aW9uIFByb21pc2UkQW55KHByb21pc2VzKSB7XG4gICAgcmV0dXJuIFByb21pc2UkX0FueShwcm9taXNlcyk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5hbnkgPSBmdW5jdGlvbiBQcm9taXNlJGFueSgpIHtcbiAgICByZXR1cm4gUHJvbWlzZSRfQW55KHRoaXMpO1xufTtcblxufTtcbiIsIihmdW5jdGlvbiAocHJvY2Vzcyl7XG4vKipcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbnZhciBzY2hlZHVsZSA9IHJlcXVpcmUoXCIuL3NjaGVkdWxlLmpzXCIpO1xudmFyIFF1ZXVlID0gcmVxdWlyZShcIi4vcXVldWUuanNcIik7XG52YXIgZXJyb3JPYmogPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpLmVycm9yT2JqO1xudmFyIHRyeUNhdGNoMSA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIikudHJ5Q2F0Y2gxO1xudmFyIF9wcm9jZXNzID0gdHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgPyBwcm9jZXNzIDogdm9pZCAwO1xuXG5mdW5jdGlvbiBBc3luYygpIHtcbiAgICB0aGlzLl9pc1RpY2tVc2VkID0gZmFsc2U7XG4gICAgdGhpcy5fc2NoZWR1bGUgPSBzY2hlZHVsZTtcbiAgICB0aGlzLl9sZW5ndGggPSAwO1xuICAgIHRoaXMuX2xhdGVCdWZmZXIgPSBuZXcgUXVldWUoMTYpO1xuICAgIHRoaXMuX2Z1bmN0aW9uQnVmZmVyID0gbmV3IFF1ZXVlKDY1NTM2KTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5jb25zdW1lRnVuY3Rpb25CdWZmZXIgPSBmdW5jdGlvbiBBc3luYyRjb25zdW1lRnVuY3Rpb25CdWZmZXIoKSB7XG4gICAgICAgIHNlbGYuX2NvbnN1bWVGdW5jdGlvbkJ1ZmZlcigpO1xuICAgIH07XG59XG5cbkFzeW5jLnByb3RvdHlwZS5oYXZlSXRlbXNRdWV1ZWQgPSBmdW5jdGlvbiBBc3luYyRoYXZlSXRlbXNRdWV1ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xlbmd0aCA+IDA7XG59O1xuXG5Bc3luYy5wcm90b3R5cGUuaW52b2tlTGF0ZXIgPSBmdW5jdGlvbiBBc3luYyRpbnZva2VMYXRlcihmbiwgcmVjZWl2ZXIsIGFyZykge1xuICAgIGlmIChfcHJvY2VzcyAhPT0gdm9pZCAwICYmXG4gICAgICAgIF9wcm9jZXNzLmRvbWFpbiAhPSBudWxsICYmXG4gICAgICAgICFmbi5kb21haW4pIHtcbiAgICAgICAgZm4gPSBfcHJvY2Vzcy5kb21haW4uYmluZChmbik7XG4gICAgfVxuICAgIHRoaXMuX2xhdGVCdWZmZXIucHVzaChmbiwgcmVjZWl2ZXIsIGFyZyk7XG4gICAgdGhpcy5fcXVldWVUaWNrKCk7XG59O1xuXG5Bc3luYy5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gQXN5bmMkaW52b2tlKGZuLCByZWNlaXZlciwgYXJnKSB7XG4gICAgaWYgKF9wcm9jZXNzICE9PSB2b2lkIDAgJiZcbiAgICAgICAgX3Byb2Nlc3MuZG9tYWluICE9IG51bGwgJiZcbiAgICAgICAgIWZuLmRvbWFpbikge1xuICAgICAgICBmbiA9IF9wcm9jZXNzLmRvbWFpbi5iaW5kKGZuKTtcbiAgICB9XG4gICAgdmFyIGZ1bmN0aW9uQnVmZmVyID0gdGhpcy5fZnVuY3Rpb25CdWZmZXI7XG4gICAgZnVuY3Rpb25CdWZmZXIucHVzaChmbiwgcmVjZWl2ZXIsIGFyZyk7XG4gICAgdGhpcy5fbGVuZ3RoID0gZnVuY3Rpb25CdWZmZXIubGVuZ3RoKCk7XG4gICAgdGhpcy5fcXVldWVUaWNrKCk7XG59O1xuXG5Bc3luYy5wcm90b3R5cGUuX2NvbnN1bWVGdW5jdGlvbkJ1ZmZlciA9XG5mdW5jdGlvbiBBc3luYyRfY29uc3VtZUZ1bmN0aW9uQnVmZmVyKCkge1xuICAgIHZhciBmdW5jdGlvbkJ1ZmZlciA9IHRoaXMuX2Z1bmN0aW9uQnVmZmVyO1xuICAgIHdoaWxlIChmdW5jdGlvbkJ1ZmZlci5sZW5ndGgoKSA+IDApIHtcbiAgICAgICAgdmFyIGZuID0gZnVuY3Rpb25CdWZmZXIuc2hpZnQoKTtcbiAgICAgICAgdmFyIHJlY2VpdmVyID0gZnVuY3Rpb25CdWZmZXIuc2hpZnQoKTtcbiAgICAgICAgdmFyIGFyZyA9IGZ1bmN0aW9uQnVmZmVyLnNoaWZ0KCk7XG4gICAgICAgIGZuLmNhbGwocmVjZWl2ZXIsIGFyZyk7XG4gICAgfVxuICAgIHRoaXMuX3Jlc2V0KCk7XG4gICAgdGhpcy5fY29uc3VtZUxhdGVCdWZmZXIoKTtcbn07XG5cbkFzeW5jLnByb3RvdHlwZS5fY29uc3VtZUxhdGVCdWZmZXIgPSBmdW5jdGlvbiBBc3luYyRfY29uc3VtZUxhdGVCdWZmZXIoKSB7XG4gICAgdmFyIGJ1ZmZlciA9IHRoaXMuX2xhdGVCdWZmZXI7XG4gICAgd2hpbGUoYnVmZmVyLmxlbmd0aCgpID4gMCkge1xuICAgICAgICB2YXIgZm4gPSBidWZmZXIuc2hpZnQoKTtcbiAgICAgICAgdmFyIHJlY2VpdmVyID0gYnVmZmVyLnNoaWZ0KCk7XG4gICAgICAgIHZhciBhcmcgPSBidWZmZXIuc2hpZnQoKTtcbiAgICAgICAgdmFyIHJlcyA9IHRyeUNhdGNoMShmbiwgcmVjZWl2ZXIsIGFyZyk7XG4gICAgICAgIGlmIChyZXMgPT09IGVycm9yT2JqKSB7XG4gICAgICAgICAgICB0aGlzLl9xdWV1ZVRpY2soKTtcbiAgICAgICAgICAgIGlmIChmbi5kb21haW4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZuLmRvbWFpbi5lbWl0KFwiZXJyb3JcIiwgcmVzLmUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZXMuZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbkFzeW5jLnByb3RvdHlwZS5fcXVldWVUaWNrID0gZnVuY3Rpb24gQXN5bmMkX3F1ZXVlKCkge1xuICAgIGlmICghdGhpcy5faXNUaWNrVXNlZCkge1xuICAgICAgICB0aGlzLl9zY2hlZHVsZSh0aGlzLmNvbnN1bWVGdW5jdGlvbkJ1ZmZlcik7XG4gICAgICAgIHRoaXMuX2lzVGlja1VzZWQgPSB0cnVlO1xuICAgIH1cbn07XG5cbkFzeW5jLnByb3RvdHlwZS5fcmVzZXQgPSBmdW5jdGlvbiBBc3luYyRfcmVzZXQoKSB7XG4gICAgdGhpcy5faXNUaWNrVXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2xlbmd0aCA9IDA7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBBc3luYygpO1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZSgnX3Byb2Nlc3MnKSkiLCIvKipcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbnZhciBQcm9taXNlID0gcmVxdWlyZShcIi4vcHJvbWlzZS5qc1wiKSgpO1xubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlOyIsIi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xudmFyIGNyID0gT2JqZWN0LmNyZWF0ZTtcbmlmIChjcikge1xuICAgIHZhciBjYWxsZXJDYWNoZSA9IGNyKG51bGwpO1xuICAgIHZhciBnZXR0ZXJDYWNoZSA9IGNyKG51bGwpO1xuICAgIGNhbGxlckNhY2hlW1wiIHNpemVcIl0gPSBnZXR0ZXJDYWNoZVtcIiBzaXplXCJdID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlKSB7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgY2FuRXZhbHVhdGUgPSB1dGlsLmNhbkV2YWx1YXRlO1xudmFyIGlzSWRlbnRpZmllciA9IHV0aWwuaXNJZGVudGlmaWVyO1xuXG5mdW5jdGlvbiBtYWtlTWV0aG9kQ2FsbGVyIChtZXRob2ROYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbihcIm9ialwiLCBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICd1c2Ugc3RyaWN0JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIHZhciBsZW4gPSB0aGlzLmxlbmd0aDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIHN3aXRjaChsZW4pIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBvYmoubWV0aG9kTmFtZSh0aGlzWzBdKTsgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBvYmoubWV0aG9kTmFtZSh0aGlzWzBdLCB0aGlzWzFdKTsgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiBvYmoubWV0aG9kTmFtZSh0aGlzWzBdLCB0aGlzWzFdLCB0aGlzWzJdKTsgICAgICAgIFxcblxcXG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBvYmoubWV0aG9kTmFtZSgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gb2JqLm1ldGhvZE5hbWUuYXBwbHkob2JqLCB0aGlzKTsgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIFwiLnJlcGxhY2UoL21ldGhvZE5hbWUvZywgbWV0aG9kTmFtZSkpO1xufVxuXG5mdW5jdGlvbiBtYWtlR2V0dGVyIChwcm9wZXJ0eU5hbWUpIHtcbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKFwib2JqXCIsIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgJ3VzZSBzdHJpY3QnOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgcmV0dXJuIG9iai5wcm9wZXJ0eU5hbWU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgXCIucmVwbGFjZShcInByb3BlcnR5TmFtZVwiLCBwcm9wZXJ0eU5hbWUpKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcGlsZWQobmFtZSwgY29tcGlsZXIsIGNhY2hlKSB7XG4gICAgdmFyIHJldCA9IGNhY2hlW25hbWVdO1xuICAgIGlmICh0eXBlb2YgcmV0ICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgaWYgKCFpc0lkZW50aWZpZXIobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldCA9IGNvbXBpbGVyKG5hbWUpO1xuICAgICAgICBjYWNoZVtuYW1lXSA9IHJldDtcbiAgICAgICAgY2FjaGVbXCIgc2l6ZVwiXSsrO1xuICAgICAgICBpZiAoY2FjaGVbXCIgc2l6ZVwiXSA+IDUxMikge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhjYWNoZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSBkZWxldGUgY2FjaGVba2V5c1tpXV07XG4gICAgICAgICAgICBjYWNoZVtcIiBzaXplXCJdID0ga2V5cy5sZW5ndGggLSAyNTY7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZ2V0TWV0aG9kQ2FsbGVyKG5hbWUpIHtcbiAgICByZXR1cm4gZ2V0Q29tcGlsZWQobmFtZSwgbWFrZU1ldGhvZENhbGxlciwgY2FsbGVyQ2FjaGUpO1xufVxuXG5mdW5jdGlvbiBnZXRHZXR0ZXIobmFtZSkge1xuICAgIHJldHVybiBnZXRDb21waWxlZChuYW1lLCBtYWtlR2V0dGVyLCBnZXR0ZXJDYWNoZSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxlcihvYmopIHtcbiAgICByZXR1cm4gb2JqW3RoaXMucG9wKCldLmFwcGx5KG9iaiwgdGhpcyk7XG59XG5Qcm9taXNlLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gUHJvbWlzZSRjYWxsKG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgJF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoO3ZhciBhcmdzID0gbmV3IEFycmF5KCRfbGVuIC0gMSk7IGZvcih2YXIgJF9pID0gMTsgJF9pIDwgJF9sZW47ICsrJF9pKSB7YXJnc1skX2kgLSAxXSA9IGFyZ3VtZW50c1skX2ldO31cbiAgICBpZiAoY2FuRXZhbHVhdGUpIHtcbiAgICAgICAgdmFyIG1heWJlQ2FsbGVyID0gZ2V0TWV0aG9kQ2FsbGVyKG1ldGhvZE5hbWUpO1xuICAgICAgICBpZiAobWF5YmVDYWxsZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90aGVuKG1heWJlQ2FsbGVyLCB2b2lkIDAsIHZvaWQgMCwgYXJncywgdm9pZCAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhcmdzLnB1c2gobWV0aG9kTmFtZSk7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW4oY2FsbGVyLCB2b2lkIDAsIHZvaWQgMCwgYXJncywgdm9pZCAwKTtcbn07XG5cbmZ1bmN0aW9uIG5hbWVkR2V0dGVyKG9iaikge1xuICAgIHJldHVybiBvYmpbdGhpc107XG59XG5mdW5jdGlvbiBpbmRleGVkR2V0dGVyKG9iaikge1xuICAgIHJldHVybiBvYmpbdGhpc107XG59XG5Qcm9taXNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBQcm9taXNlJGdldChwcm9wZXJ0eU5hbWUpIHtcbiAgICB2YXIgaXNJbmRleCA9ICh0eXBlb2YgcHJvcGVydHlOYW1lID09PSBcIm51bWJlclwiKTtcbiAgICB2YXIgZ2V0dGVyO1xuICAgIGlmICghaXNJbmRleCkge1xuICAgICAgICBpZiAoY2FuRXZhbHVhdGUpIHtcbiAgICAgICAgICAgIHZhciBtYXliZUdldHRlciA9IGdldEdldHRlcihwcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgZ2V0dGVyID0gbWF5YmVHZXR0ZXIgIT09IG51bGwgPyBtYXliZUdldHRlciA6IG5hbWVkR2V0dGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2V0dGVyID0gbmFtZWRHZXR0ZXI7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBnZXR0ZXIgPSBpbmRleGVkR2V0dGVyO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdGhlbihnZXR0ZXIsIHZvaWQgMCwgdm9pZCAwLCBwcm9wZXJ0eU5hbWUsIHZvaWQgMCk7XG59O1xufTtcbiIsIi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCkge1xudmFyIGVycm9ycyA9IHJlcXVpcmUoXCIuL2Vycm9ycy5qc1wiKTtcbnZhciBjYW5BdHRhY2ggPSBlcnJvcnMuY2FuQXR0YWNoO1xudmFyIGFzeW5jID0gcmVxdWlyZShcIi4vYXN5bmMuanNcIik7XG52YXIgQ2FuY2VsbGF0aW9uRXJyb3IgPSBlcnJvcnMuQ2FuY2VsbGF0aW9uRXJyb3I7XG5cblByb21pc2UucHJvdG90eXBlLl9jYW5jZWwgPSBmdW5jdGlvbiBQcm9taXNlJF9jYW5jZWwocmVhc29uKSB7XG4gICAgaWYgKCF0aGlzLmlzQ2FuY2VsbGFibGUoKSkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIHBhcmVudDtcbiAgICB2YXIgcHJvbWlzZVRvUmVqZWN0ID0gdGhpcztcbiAgICB3aGlsZSAoKHBhcmVudCA9IHByb21pc2VUb1JlamVjdC5fY2FuY2VsbGF0aW9uUGFyZW50KSAhPT0gdm9pZCAwICYmXG4gICAgICAgIHBhcmVudC5pc0NhbmNlbGxhYmxlKCkpIHtcbiAgICAgICAgcHJvbWlzZVRvUmVqZWN0ID0gcGFyZW50O1xuICAgIH1cbiAgICBwcm9taXNlVG9SZWplY3QuX2F0dGFjaEV4dHJhVHJhY2UocmVhc29uKTtcbiAgICBwcm9taXNlVG9SZWplY3QuX3JlamVjdFVuY2hlY2tlZChyZWFzb24pO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24gUHJvbWlzZSRjYW5jZWwocmVhc29uKSB7XG4gICAgaWYgKCF0aGlzLmlzQ2FuY2VsbGFibGUoKSkgcmV0dXJuIHRoaXM7XG4gICAgcmVhc29uID0gcmVhc29uICE9PSB2b2lkIDBcbiAgICAgICAgPyAoY2FuQXR0YWNoKHJlYXNvbikgPyByZWFzb24gOiBuZXcgRXJyb3IocmVhc29uICsgXCJcIikpXG4gICAgICAgIDogbmV3IENhbmNlbGxhdGlvbkVycm9yKCk7XG4gICAgYXN5bmMuaW52b2tlTGF0ZXIodGhpcy5fY2FuY2VsLCB0aGlzLCByZWFzb24pO1xuICAgIHJldHVybiB0aGlzO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuY2FuY2VsbGFibGUgPSBmdW5jdGlvbiBQcm9taXNlJGNhbmNlbGxhYmxlKCkge1xuICAgIGlmICh0aGlzLl9jYW5jZWxsYWJsZSgpKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLl9zZXRDYW5jZWxsYWJsZSgpO1xuICAgIHRoaXMuX2NhbmNlbGxhdGlvblBhcmVudCA9IHZvaWQgMDtcbiAgICByZXR1cm4gdGhpcztcbn07XG5cblByb21pc2UucHJvdG90eXBlLnVuY2FuY2VsbGFibGUgPSBmdW5jdGlvbiBQcm9taXNlJHVuY2FuY2VsbGFibGUoKSB7XG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICByZXQuX3Byb3BhZ2F0ZUZyb20odGhpcywgMiB8IDQpO1xuICAgIHJldC5fZm9sbG93KHRoaXMpO1xuICAgIHJldC5fdW5zZXRDYW5jZWxsYWJsZSgpO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5mb3JrID1cbmZ1bmN0aW9uIFByb21pc2UkZm9yayhkaWRGdWxmaWxsLCBkaWRSZWplY3QsIGRpZFByb2dyZXNzKSB7XG4gICAgdmFyIHJldCA9IHRoaXMuX3RoZW4oZGlkRnVsZmlsbCwgZGlkUmVqZWN0LCBkaWRQcm9ncmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAsIHZvaWQgMCk7XG5cbiAgICByZXQuX3NldENhbmNlbGxhYmxlKCk7XG4gICAgcmV0Ll9jYW5jZWxsYXRpb25QYXJlbnQgPSB2b2lkIDA7XG4gICAgcmV0dXJuIHJldDtcbn07XG59O1xuIiwiLyoqXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xudmFyIGluaGVyaXRzID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKS5pbmhlcml0cztcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2VzNS5qc1wiKS5kZWZpbmVQcm9wZXJ0eTtcblxudmFyIHJpZ25vcmUgPSBuZXcgUmVnRXhwKFxuICAgIFwiXFxcXGIoPzpbYS16QS1aMC05Ll0rXFxcXCRfXFxcXHcrfFwiICtcbiAgICBcInRyeUNhdGNoKD86MXwyfDN8NHxBcHBseSl8bmV3IFxcXFx3KlByb21pc2VBcnJheXxcIiArXG4gICAgXCJcXFxcdypQcm9taXNlQXJyYXlcXFxcLlxcXFx3KlByb21pc2VBcnJheXxcIiArXG4gICAgXCJzZXRUaW1lb3V0fENhdGNoRmlsdGVyXFxcXCRfXFxcXHcrfG1ha2VOb2RlUHJvbWlzaWZpZWR8cHJvY2Vzc0ltbWVkaWF0ZXxcIiArXG4gICAgXCJwcm9jZXNzLl90aWNrQ2FsbGJhY2t8bmV4dFRpY2t8QXN5bmNcXFxcJFxcXFx3KylcXFxcYlwiXG4pO1xuXG52YXIgcnRyYWNlbGluZSA9IG51bGw7XG52YXIgZm9ybWF0U3RhY2sgPSBudWxsO1xuXG5mdW5jdGlvbiBmb3JtYXROb25FcnJvcihvYmopIHtcbiAgICB2YXIgc3RyO1xuICAgIGlmICh0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgc3RyID0gXCJbZnVuY3Rpb24gXCIgK1xuICAgICAgICAgICAgKG9iai5uYW1lIHx8IFwiYW5vbnltb3VzXCIpICtcbiAgICAgICAgICAgIFwiXVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IG9iai50b1N0cmluZygpO1xuICAgICAgICB2YXIgcnVzZWxlc3NUb1N0cmluZyA9IC9cXFtvYmplY3QgW2EtekEtWjAtOSRfXStcXF0vO1xuICAgICAgICBpZiAocnVzZWxlc3NUb1N0cmluZy50ZXN0KHN0cikpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1N0ciA9IEpTT04uc3RyaW5naWZ5KG9iaik7XG4gICAgICAgICAgICAgICAgc3RyID0gbmV3U3RyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2goZSkge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHN0ciA9IFwiKGVtcHR5IGFycmF5KVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXCIoPFwiICsgc25pcChzdHIpICsgXCI+LCBubyBzdGFjayB0cmFjZSlcIik7XG59XG5cbmZ1bmN0aW9uIHNuaXAoc3RyKSB7XG4gICAgdmFyIG1heENoYXJzID0gNDE7XG4gICAgaWYgKHN0ci5sZW5ndGggPCBtYXhDaGFycykge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnN1YnN0cigwLCBtYXhDaGFycyAtIDMpICsgXCIuLi5cIjtcbn1cblxuZnVuY3Rpb24gQ2FwdHVyZWRUcmFjZShpZ25vcmVVbnRpbCwgaXNUb3BMZXZlbCkge1xuICAgIHRoaXMuY2FwdHVyZVN0YWNrVHJhY2UoQ2FwdHVyZWRUcmFjZSwgaXNUb3BMZXZlbCk7XG5cbn1cbmluaGVyaXRzKENhcHR1cmVkVHJhY2UsIEVycm9yKTtcblxuQ2FwdHVyZWRUcmFjZS5wcm90b3R5cGUuY2FwdHVyZVN0YWNrVHJhY2UgPVxuZnVuY3Rpb24gQ2FwdHVyZWRUcmFjZSRjYXB0dXJlU3RhY2tUcmFjZShpZ25vcmVVbnRpbCwgaXNUb3BMZXZlbCkge1xuICAgIGNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIGlnbm9yZVVudGlsLCBpc1RvcExldmVsKTtcbn07XG5cbkNhcHR1cmVkVHJhY2UucG9zc2libHlVbmhhbmRsZWRSZWplY3Rpb24gPVxuZnVuY3Rpb24gQ2FwdHVyZWRUcmFjZSRQb3NzaWJseVVuaGFuZGxlZFJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2U7XG4gICAgICAgIGlmICh0eXBlb2YgcmVhc29uID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiByZWFzb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdmFyIHN0YWNrID0gcmVhc29uLnN0YWNrO1xuICAgICAgICAgICAgbWVzc2FnZSA9IFwiUG9zc2libHkgdW5oYW5kbGVkIFwiICsgZm9ybWF0U3RhY2soc3RhY2ssIHJlYXNvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gXCJQb3NzaWJseSB1bmhhbmRsZWQgXCIgKyBTdHJpbmcocmVhc29uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09IFwiZnVuY3Rpb25cIiB8fFxuICAgICAgICAgICAgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbnNvbGUubG9nID09PSBcImZ1bmN0aW9uXCIgfHxcbiAgICAgICAgICAgIHR5cGVvZiBjb25zb2xlLmxvZyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5DYXB0dXJlZFRyYWNlLmNvbWJpbmUgPSBmdW5jdGlvbiBDYXB0dXJlZFRyYWNlJENvbWJpbmUoY3VycmVudCwgcHJldikge1xuICAgIHZhciBjdXJMYXN0ID0gY3VycmVudC5sZW5ndGggLSAxO1xuICAgIGZvciAodmFyIGkgPSBwcmV2Lmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBsaW5lID0gcHJldltpXTtcbiAgICAgICAgaWYgKGN1cnJlbnRbY3VyTGFzdF0gPT09IGxpbmUpIHtcbiAgICAgICAgICAgIGN1cnJlbnQucG9wKCk7XG4gICAgICAgICAgICBjdXJMYXN0LS07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGN1cnJlbnQucHVzaChcIkZyb20gcHJldmlvdXMgZXZlbnQ6XCIpO1xuICAgIHZhciBsaW5lcyA9IGN1cnJlbnQuY29uY2F0KHByZXYpO1xuXG4gICAgdmFyIHJldCA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpbmVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG5cbiAgICAgICAgaWYgKCgocmlnbm9yZS50ZXN0KGxpbmVzW2ldKSAmJiBydHJhY2VsaW5lLnRlc3QobGluZXNbaV0pKSB8fFxuICAgICAgICAgICAgKGkgPiAwICYmICFydHJhY2VsaW5lLnRlc3QobGluZXNbaV0pKSAmJlxuICAgICAgICAgICAgbGluZXNbaV0gIT09IFwiRnJvbSBwcmV2aW91cyBldmVudDpcIilcbiAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldC5wdXNoKGxpbmVzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbkNhcHR1cmVkVHJhY2UucHJvdGVjdEVycm9yTWVzc2FnZU5ld2xpbmVzID0gZnVuY3Rpb24oc3RhY2spIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmIChydHJhY2VsaW5lLnRlc3Qoc3RhY2tbaV0pKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpIDw9IDEpIHJldHVybjtcblxuICAgIHZhciBlcnJvck1lc3NhZ2VMaW5lcyA9IFtdO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgaTsgKytqKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZUxpbmVzLnB1c2goc3RhY2suc2hpZnQoKSk7XG4gICAgfVxuICAgIHN0YWNrLnVuc2hpZnQoZXJyb3JNZXNzYWdlTGluZXMuam9pbihcIlxcdTAwMDJcXHUwMDAwXFx1MDAwMVwiKSk7XG59O1xuXG5DYXB0dXJlZFRyYWNlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gQ2FwdHVyZWRUcmFjZSRJc1N1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gdHlwZW9mIGNhcHR1cmVTdGFja1RyYWNlID09PSBcImZ1bmN0aW9uXCI7XG59O1xuXG52YXIgY2FwdHVyZVN0YWNrVHJhY2UgPSAoZnVuY3Rpb24gc3RhY2tEZXRlY3Rpb24oKSB7XG4gICAgaWYgKHR5cGVvZiBFcnJvci5zdGFja1RyYWNlTGltaXQgPT09IFwibnVtYmVyXCIgJiZcbiAgICAgICAgdHlwZW9mIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcnRyYWNlbGluZSA9IC9eXFxzKmF0XFxzKi87XG4gICAgICAgIGZvcm1hdFN0YWNrID0gZnVuY3Rpb24oc3RhY2ssIGVycm9yKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0YWNrID09PSBcInN0cmluZ1wiKSByZXR1cm4gc3RhY2s7XG5cbiAgICAgICAgICAgIGlmIChlcnJvci5uYW1lICE9PSB2b2lkIDAgJiZcbiAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubmFtZSArIFwiLiBcIiArIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0Tm9uRXJyb3IoZXJyb3IpO1xuXG5cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGNhcHR1cmVTdGFja1RyYWNlID0gRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2U7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBDYXB0dXJlZFRyYWNlJF9jYXB0dXJlU3RhY2tUcmFjZShcbiAgICAgICAgICAgIHJlY2VpdmVyLCBpZ25vcmVVbnRpbCkge1xuICAgICAgICAgICAgY2FwdHVyZVN0YWNrVHJhY2UocmVjZWl2ZXIsIGlnbm9yZVVudGlsKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcigpO1xuXG4gICAgaWYgKHR5cGVvZiBlcnIuc3RhY2sgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgdHlwZW9mIFwiXCIuc3RhcnRzV2l0aCA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgIChlcnIuc3RhY2suc3RhcnRzV2l0aChcInN0YWNrRGV0ZWN0aW9uQFwiKSkgJiZcbiAgICAgICAgc3RhY2tEZXRlY3Rpb24ubmFtZSA9PT0gXCJzdGFja0RldGVjdGlvblwiKSB7XG5cbiAgICAgICAgZGVmaW5lUHJvcGVydHkoRXJyb3IsIFwic3RhY2tUcmFjZUxpbWl0XCIsIHtcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IDI1XG4gICAgICAgIH0pO1xuICAgICAgICBydHJhY2VsaW5lID0gL0AvO1xuICAgICAgICB2YXIgcmxpbmUgPSAvW0BcXG5dLztcblxuICAgICAgICBmb3JtYXRTdGFjayA9IGZ1bmN0aW9uKHN0YWNrLCBlcnJvcikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGFjayA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoZXJyb3IubmFtZSArIFwiLiBcIiArIGVycm9yLm1lc3NhZ2UgKyBcIlxcblwiICsgc3RhY2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZXJyb3IubmFtZSAhPT0gdm9pZCAwICYmXG4gICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm5hbWUgKyBcIi4gXCIgKyBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdE5vbkVycm9yKGVycm9yKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY2FwdHVyZVN0YWNrVHJhY2Uobykge1xuICAgICAgICAgICAgdmFyIHN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG4gICAgICAgICAgICB2YXIgc3BsaXQgPSBzdGFjay5zcGxpdChybGluZSk7XG4gICAgICAgICAgICB2YXIgbGVuID0gc3BsaXQubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIHJldCA9IFwiXCI7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0ICs9IHNwbGl0W2ldO1xuICAgICAgICAgICAgICAgIHJldCArPSBcIkBcIjtcbiAgICAgICAgICAgICAgICByZXQgKz0gc3BsaXRbaSArIDFdO1xuICAgICAgICAgICAgICAgIHJldCArPSBcIlxcblwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgby5zdGFjayA9IHJldDtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtYXRTdGFjayA9IGZ1bmN0aW9uKHN0YWNrLCBlcnJvcikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGFjayA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHN0YWNrO1xuXG4gICAgICAgICAgICBpZiAoKHR5cGVvZiBlcnJvciA9PT0gXCJvYmplY3RcIiB8fFxuICAgICAgICAgICAgICAgIHR5cGVvZiBlcnJvciA9PT0gXCJmdW5jdGlvblwiKSAmJlxuICAgICAgICAgICAgICAgIGVycm9yLm5hbWUgIT09IHZvaWQgMCAmJlxuICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5uYW1lICsgXCIuIFwiICsgZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmb3JtYXROb25FcnJvcihlcnJvcik7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSkoKTtcblxucmV0dXJuIENhcHR1cmVkVHJhY2U7XG59O1xuIiwiLyoqXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5FWFRfRklMVEVSKSB7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgZXJyb3JzID0gcmVxdWlyZShcIi4vZXJyb3JzLmpzXCIpO1xudmFyIHRyeUNhdGNoMSA9IHV0aWwudHJ5Q2F0Y2gxO1xudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcbnZhciBrZXlzID0gcmVxdWlyZShcIi4vZXM1LmpzXCIpLmtleXM7XG52YXIgVHlwZUVycm9yID0gZXJyb3JzLlR5cGVFcnJvcjtcblxuZnVuY3Rpb24gQ2F0Y2hGaWx0ZXIoaW5zdGFuY2VzLCBjYWxsYmFjaywgcHJvbWlzZSkge1xuICAgIHRoaXMuX2luc3RhbmNlcyA9IGluc3RhbmNlcztcbiAgICB0aGlzLl9jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMuX3Byb21pc2UgPSBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBDYXRjaEZpbHRlciRfc2FmZVByZWRpY2F0ZShwcmVkaWNhdGUsIGUpIHtcbiAgICB2YXIgc2FmZU9iamVjdCA9IHt9O1xuICAgIHZhciByZXRmaWx0ZXIgPSB0cnlDYXRjaDEocHJlZGljYXRlLCBzYWZlT2JqZWN0LCBlKTtcblxuICAgIGlmIChyZXRmaWx0ZXIgPT09IGVycm9yT2JqKSByZXR1cm4gcmV0ZmlsdGVyO1xuXG4gICAgdmFyIHNhZmVLZXlzID0ga2V5cyhzYWZlT2JqZWN0KTtcbiAgICBpZiAoc2FmZUtleXMubGVuZ3RoKSB7XG4gICAgICAgIGVycm9yT2JqLmUgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgXCJDYXRjaCBmaWx0ZXIgbXVzdCBpbmhlcml0IGZyb20gRXJyb3IgXCJcbiAgICAgICAgICArIFwib3IgYmUgYSBzaW1wbGUgcHJlZGljYXRlIGZ1bmN0aW9uXCIpO1xuICAgICAgICByZXR1cm4gZXJyb3JPYmo7XG4gICAgfVxuICAgIHJldHVybiByZXRmaWx0ZXI7XG59XG5cbkNhdGNoRmlsdGVyLnByb3RvdHlwZS5kb0ZpbHRlciA9IGZ1bmN0aW9uIENhdGNoRmlsdGVyJF9kb0ZpbHRlcihlKSB7XG4gICAgdmFyIGNiID0gdGhpcy5fY2FsbGJhY2s7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wcm9taXNlO1xuICAgIHZhciBib3VuZFRvID0gcHJvbWlzZS5fYm91bmRUbztcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5faW5zdGFuY2VzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIHZhciBpdGVtID0gdGhpcy5faW5zdGFuY2VzW2ldO1xuICAgICAgICB2YXIgaXRlbUlzRXJyb3JUeXBlID0gaXRlbSA9PT0gRXJyb3IgfHxcbiAgICAgICAgICAgIChpdGVtICE9IG51bGwgJiYgaXRlbS5wcm90b3R5cGUgaW5zdGFuY2VvZiBFcnJvcik7XG5cbiAgICAgICAgaWYgKGl0ZW1Jc0Vycm9yVHlwZSAmJiBlIGluc3RhbmNlb2YgaXRlbSkge1xuICAgICAgICAgICAgdmFyIHJldCA9IHRyeUNhdGNoMShjYiwgYm91bmRUbywgZSk7XG4gICAgICAgICAgICBpZiAocmV0ID09PSBlcnJvck9iaikge1xuICAgICAgICAgICAgICAgIE5FWFRfRklMVEVSLmUgPSByZXQuZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gTkVYVF9GSUxURVI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtID09PSBcImZ1bmN0aW9uXCIgJiYgIWl0ZW1Jc0Vycm9yVHlwZSkge1xuICAgICAgICAgICAgdmFyIHNob3VsZEhhbmRsZSA9IENhdGNoRmlsdGVyJF9zYWZlUHJlZGljYXRlKGl0ZW0sIGUpO1xuICAgICAgICAgICAgaWYgKHNob3VsZEhhbmRsZSA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgICAgICAgICB2YXIgdHJhY2UgPSBlcnJvcnMuY2FuQXR0YWNoKGVycm9yT2JqLmUpXG4gICAgICAgICAgICAgICAgICAgID8gZXJyb3JPYmouZVxuICAgICAgICAgICAgICAgICAgICA6IG5ldyBFcnJvcihlcnJvck9iai5lICsgXCJcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvbWlzZS5fYXR0YWNoRXh0cmFUcmFjZSh0cmFjZSk7XG4gICAgICAgICAgICAgICAgZSA9IGVycm9yT2JqLmU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZEhhbmRsZSkge1xuICAgICAgICAgICAgICAgIHZhciByZXQgPSB0cnlDYXRjaDEoY2IsIGJvdW5kVG8sIGUpO1xuICAgICAgICAgICAgICAgIGlmIChyZXQgPT09IGVycm9yT2JqKSB7XG4gICAgICAgICAgICAgICAgICAgIE5FWFRfRklMVEVSLmUgPSByZXQuZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE5FWFRfRklMVEVSO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIE5FWFRfRklMVEVSLmUgPSBlO1xuICAgIHJldHVybiBORVhUX0ZJTFRFUjtcbn07XG5cbnJldHVybiBDYXRjaEZpbHRlcjtcbn07XG4iLCIvKipcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKTtcbnZhciBpc1ByaW1pdGl2ZSA9IHV0aWwuaXNQcmltaXRpdmU7XG52YXIgd3JhcHNQcmltaXRpdmVSZWNlaXZlciA9IHV0aWwud3JhcHNQcmltaXRpdmVSZWNlaXZlcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlKSB7XG52YXIgcmV0dXJuZXIgPSBmdW5jdGlvbiBQcm9taXNlJF9yZXR1cm5lcigpIHtcbiAgICByZXR1cm4gdGhpcztcbn07XG52YXIgdGhyb3dlciA9IGZ1bmN0aW9uIFByb21pc2UkX3Rocm93ZXIoKSB7XG4gICAgdGhyb3cgdGhpcztcbn07XG5cbnZhciB3cmFwcGVyID0gZnVuY3Rpb24gUHJvbWlzZSRfd3JhcHBlcih2YWx1ZSwgYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbiA9PT0gMSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gUHJvbWlzZSRfdGhyb3dlcigpIHtcbiAgICAgICAgICAgIHRocm93IHZhbHVlO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSAyKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBQcm9taXNlJF9yZXR1cm5lcigpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG5cblByb21pc2UucHJvdG90eXBlW1wicmV0dXJuXCJdID1cblByb21pc2UucHJvdG90eXBlLnRoZW5SZXR1cm4gPVxuZnVuY3Rpb24gUHJvbWlzZSR0aGVuUmV0dXJuKHZhbHVlKSB7XG4gICAgaWYgKHdyYXBzUHJpbWl0aXZlUmVjZWl2ZXIgJiYgaXNQcmltaXRpdmUodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aGVuKFxuICAgICAgICAgICAgd3JhcHBlcih2YWx1ZSwgMiksXG4gICAgICAgICAgICB2b2lkIDAsXG4gICAgICAgICAgICB2b2lkIDAsXG4gICAgICAgICAgICB2b2lkIDAsXG4gICAgICAgICAgICB2b2lkIDBcbiAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdGhlbihyZXR1cm5lciwgdm9pZCAwLCB2b2lkIDAsIHZhbHVlLCB2b2lkIDApO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGVbXCJ0aHJvd1wiXSA9XG5Qcm9taXNlLnByb3RvdHlwZS50aGVuVGhyb3cgPVxuZnVuY3Rpb24gUHJvbWlzZSR0aGVuVGhyb3cocmVhc29uKSB7XG4gICAgaWYgKHdyYXBzUHJpbWl0aXZlUmVjZWl2ZXIgJiYgaXNQcmltaXRpdmUocmVhc29uKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGhlbihcbiAgICAgICAgICAgIHdyYXBwZXIocmVhc29uLCAxKSxcbiAgICAgICAgICAgIHZvaWQgMCxcbiAgICAgICAgICAgIHZvaWQgMCxcbiAgICAgICAgICAgIHZvaWQgMCxcbiAgICAgICAgICAgIHZvaWQgMFxuICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl90aGVuKHRocm93ZXIsIHZvaWQgMCwgdm9pZCAwLCByZWFzb24sIHZvaWQgMCk7XG59O1xufTtcbiIsIi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCkge1xudmFyIFByb21pc2VSZWR1Y2UgPSBQcm9taXNlLnJlZHVjZTtcblxuUHJvbWlzZS5wcm90b3R5cGUuZWFjaCA9IGZ1bmN0aW9uIFByb21pc2UkZWFjaChmbikge1xuICAgIHJldHVybiBQcm9taXNlUmVkdWNlKHRoaXMsIGZuLCBudWxsLCBJTlRFUk5BTCk7XG59O1xuXG5Qcm9taXNlLmVhY2ggPSBmdW5jdGlvbiBQcm9taXNlJEVhY2gocHJvbWlzZXMsIGZuKSB7XG4gICAgcmV0dXJuIFByb21pc2VSZWR1Y2UocHJvbWlzZXMsIGZuLCBudWxsLCBJTlRFUk5BTCk7XG59O1xufTtcbiIsIi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xudmFyIE9iamVjdGZyZWV6ZSA9IHJlcXVpcmUoXCIuL2VzNS5qc1wiKS5mcmVlemU7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgaW5oZXJpdHMgPSB1dGlsLmluaGVyaXRzO1xudmFyIG5vdEVudW1lcmFibGVQcm9wID0gdXRpbC5ub3RFbnVtZXJhYmxlUHJvcDtcblxuZnVuY3Rpb24gbWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uKGUpIHtcbiAgICB0cnkge1xuICAgICAgICBub3RFbnVtZXJhYmxlUHJvcChlLCBcImlzT3BlcmF0aW9uYWxcIiwgdHJ1ZSk7XG4gICAgfVxuICAgIGNhdGNoKGlnbm9yZSkge31cbn1cblxuZnVuY3Rpb24gb3JpZ2luYXRlc0Zyb21SZWplY3Rpb24oZSkge1xuICAgIGlmIChlID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gKChlIGluc3RhbmNlb2YgT3BlcmF0aW9uYWxFcnJvcikgfHxcbiAgICAgICAgZVtcImlzT3BlcmF0aW9uYWxcIl0gPT09IHRydWUpO1xufVxuXG5mdW5jdGlvbiBpc0Vycm9yKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBFcnJvcjtcbn1cblxuZnVuY3Rpb24gY2FuQXR0YWNoKG9iaikge1xuICAgIHJldHVybiBpc0Vycm9yKG9iaik7XG59XG5cbmZ1bmN0aW9uIHN1YkVycm9yKG5hbWVQcm9wZXJ0eSwgZGVmYXVsdE1lc3NhZ2UpIHtcbiAgICBmdW5jdGlvbiBTdWJFcnJvcihtZXNzYWdlKSB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTdWJFcnJvcikpIHJldHVybiBuZXcgU3ViRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHR5cGVvZiBtZXNzYWdlID09PSBcInN0cmluZ1wiID8gbWVzc2FnZSA6IGRlZmF1bHRNZXNzYWdlO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lUHJvcGVydHk7XG4gICAgICAgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5oZXJpdHMoU3ViRXJyb3IsIEVycm9yKTtcbiAgICByZXR1cm4gU3ViRXJyb3I7XG59XG5cbnZhciBfVHlwZUVycm9yLCBfUmFuZ2VFcnJvcjtcbnZhciBDYW5jZWxsYXRpb25FcnJvciA9IHN1YkVycm9yKFwiQ2FuY2VsbGF0aW9uRXJyb3JcIiwgXCJjYW5jZWxsYXRpb24gZXJyb3JcIik7XG52YXIgVGltZW91dEVycm9yID0gc3ViRXJyb3IoXCJUaW1lb3V0RXJyb3JcIiwgXCJ0aW1lb3V0IGVycm9yXCIpO1xudmFyIEFnZ3JlZ2F0ZUVycm9yID0gc3ViRXJyb3IoXCJBZ2dyZWdhdGVFcnJvclwiLCBcImFnZ3JlZ2F0ZSBlcnJvclwiKTtcbnRyeSB7XG4gICAgX1R5cGVFcnJvciA9IFR5cGVFcnJvcjtcbiAgICBfUmFuZ2VFcnJvciA9IFJhbmdlRXJyb3I7XG59IGNhdGNoKGUpIHtcbiAgICBfVHlwZUVycm9yID0gc3ViRXJyb3IoXCJUeXBlRXJyb3JcIiwgXCJ0eXBlIGVycm9yXCIpO1xuICAgIF9SYW5nZUVycm9yID0gc3ViRXJyb3IoXCJSYW5nZUVycm9yXCIsIFwicmFuZ2UgZXJyb3JcIik7XG59XG5cbnZhciBtZXRob2RzID0gKFwiam9pbiBwb3AgcHVzaCBzaGlmdCB1bnNoaWZ0IHNsaWNlIGZpbHRlciBmb3JFYWNoIHNvbWUgXCIgK1xuICAgIFwiZXZlcnkgbWFwIGluZGV4T2YgbGFzdEluZGV4T2YgcmVkdWNlIHJlZHVjZVJpZ2h0IHNvcnQgcmV2ZXJzZVwiKS5zcGxpdChcIiBcIik7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgbWV0aG9kcy5sZW5ndGg7ICsraSkge1xuICAgIGlmICh0eXBlb2YgQXJyYXkucHJvdG90eXBlW21ldGhvZHNbaV1dID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgQWdncmVnYXRlRXJyb3IucHJvdG90eXBlW21ldGhvZHNbaV1dID0gQXJyYXkucHJvdG90eXBlW21ldGhvZHNbaV1dO1xuICAgIH1cbn1cblxuQWdncmVnYXRlRXJyb3IucHJvdG90eXBlLmxlbmd0aCA9IDA7XG5BZ2dyZWdhdGVFcnJvci5wcm90b3R5cGVbXCJpc09wZXJhdGlvbmFsXCJdID0gdHJ1ZTtcbnZhciBsZXZlbCA9IDA7XG5BZ2dyZWdhdGVFcnJvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaW5kZW50ID0gQXJyYXkobGV2ZWwgKiA0ICsgMSkuam9pbihcIiBcIik7XG4gICAgdmFyIHJldCA9IFwiXFxuXCIgKyBpbmRlbnQgKyBcIkFnZ3JlZ2F0ZUVycm9yIG9mOlwiICsgXCJcXG5cIjtcbiAgICBsZXZlbCsrO1xuICAgIGluZGVudCA9IEFycmF5KGxldmVsICogNCArIDEpLmpvaW4oXCIgXCIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgc3RyID0gdGhpc1tpXSA9PT0gdGhpcyA/IFwiW0NpcmN1bGFyIEFnZ3JlZ2F0ZUVycm9yXVwiIDogdGhpc1tpXSArIFwiXCI7XG4gICAgICAgIHZhciBsaW5lcyA9IHN0ci5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBsaW5lcy5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgbGluZXNbal0gPSBpbmRlbnQgKyBsaW5lc1tqXTtcbiAgICAgICAgfVxuICAgICAgICBzdHIgPSBsaW5lcy5qb2luKFwiXFxuXCIpO1xuICAgICAgICByZXQgKz0gc3RyICsgXCJcXG5cIjtcbiAgICB9XG4gICAgbGV2ZWwtLTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZnVuY3Rpb24gT3BlcmF0aW9uYWxFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5uYW1lID0gXCJPcGVyYXRpb25hbEVycm9yXCI7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLmNhdXNlID0gbWVzc2FnZTtcbiAgICB0aGlzW1wiaXNPcGVyYXRpb25hbFwiXSA9IHRydWU7XG5cbiAgICBpZiAobWVzc2FnZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UubWVzc2FnZTtcbiAgICAgICAgdGhpcy5zdGFjayA9IG1lc3NhZ2Uuc3RhY2s7XG4gICAgfSBlbHNlIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbn1cbmluaGVyaXRzKE9wZXJhdGlvbmFsRXJyb3IsIEVycm9yKTtcblxudmFyIGtleSA9IFwiX19CbHVlYmlyZEVycm9yVHlwZXNfX1wiO1xudmFyIGVycm9yVHlwZXMgPSBFcnJvcltrZXldO1xuaWYgKCFlcnJvclR5cGVzKSB7XG4gICAgZXJyb3JUeXBlcyA9IE9iamVjdGZyZWV6ZSh7XG4gICAgICAgIENhbmNlbGxhdGlvbkVycm9yOiBDYW5jZWxsYXRpb25FcnJvcixcbiAgICAgICAgVGltZW91dEVycm9yOiBUaW1lb3V0RXJyb3IsXG4gICAgICAgIE9wZXJhdGlvbmFsRXJyb3I6IE9wZXJhdGlvbmFsRXJyb3IsXG4gICAgICAgIFJlamVjdGlvbkVycm9yOiBPcGVyYXRpb25hbEVycm9yLFxuICAgICAgICBBZ2dyZWdhdGVFcnJvcjogQWdncmVnYXRlRXJyb3JcbiAgICB9KTtcbiAgICBub3RFbnVtZXJhYmxlUHJvcChFcnJvciwga2V5LCBlcnJvclR5cGVzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgRXJyb3I6IEVycm9yLFxuICAgIFR5cGVFcnJvcjogX1R5cGVFcnJvcixcbiAgICBSYW5nZUVycm9yOiBfUmFuZ2VFcnJvcixcbiAgICBDYW5jZWxsYXRpb25FcnJvcjogZXJyb3JUeXBlcy5DYW5jZWxsYXRpb25FcnJvcixcbiAgICBPcGVyYXRpb25hbEVycm9yOiBlcnJvclR5cGVzLk9wZXJhdGlvbmFsRXJyb3IsXG4gICAgVGltZW91dEVycm9yOiBlcnJvclR5cGVzLlRpbWVvdXRFcnJvcixcbiAgICBBZ2dyZWdhdGVFcnJvcjogZXJyb3JUeXBlcy5BZ2dyZWdhdGVFcnJvcixcbiAgICBvcmlnaW5hdGVzRnJvbVJlamVjdGlvbjogb3JpZ2luYXRlc0Zyb21SZWplY3Rpb24sXG4gICAgbWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uOiBtYXJrQXNPcmlnaW5hdGluZ0Zyb21SZWplY3Rpb24sXG4gICAgY2FuQXR0YWNoOiBjYW5BdHRhY2hcbn07XG4iLCIvKipcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSkge1xudmFyIFR5cGVFcnJvciA9IHJlcXVpcmUoJy4vZXJyb3JzLmpzJykuVHlwZUVycm9yO1xuXG5mdW5jdGlvbiBhcGlSZWplY3Rpb24obXNnKSB7XG4gICAgdmFyIGVycm9yID0gbmV3IFR5cGVFcnJvcihtc2cpO1xuICAgIHZhciByZXQgPSBQcm9taXNlLnJlamVjdGVkKGVycm9yKTtcbiAgICB2YXIgcGFyZW50ID0gcmV0Ll9wZWVrQ29udGV4dCgpO1xuICAgIGlmIChwYXJlbnQgIT0gbnVsbCkge1xuICAgICAgICBwYXJlbnQuX2F0dGFjaEV4dHJhVHJhY2UoZXJyb3IpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuXG5yZXR1cm4gYXBpUmVqZWN0aW9uO1xufTtcbiIsIi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cbnZhciBpc0VTNSA9IChmdW5jdGlvbigpe1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIHJldHVybiB0aGlzID09PSB2b2lkIDA7XG59KSgpO1xuXG5pZiAoaXNFUzUpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgZnJlZXplOiBPYmplY3QuZnJlZXplLFxuICAgICAgICBkZWZpbmVQcm9wZXJ0eTogT2JqZWN0LmRlZmluZVByb3BlcnR5LFxuICAgICAgICBrZXlzOiBPYmplY3Qua2V5cyxcbiAgICAgICAgZ2V0UHJvdG90eXBlT2Y6IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICAgICAgaXNBcnJheTogQXJyYXkuaXNBcnJheSxcbiAgICAgICAgaXNFUzU6IGlzRVM1XG4gICAgfTtcbn0gZWxzZSB7XG4gICAgdmFyIGhhcyA9IHt9Lmhhc093blByb3BlcnR5O1xuICAgIHZhciBzdHIgPSB7fS50b1N0cmluZztcbiAgICB2YXIgcHJvdG8gPSB7fS5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cbiAgICB2YXIgT2JqZWN0S2V5cyA9IGZ1bmN0aW9uIE9iamVjdEtleXMobykge1xuICAgICAgICB2YXIgcmV0ID0gW107XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvKSB7XG4gICAgICAgICAgICBpZiAoaGFzLmNhbGwobywga2V5KSkge1xuICAgICAgICAgICAgICAgIHJldC5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICB2YXIgT2JqZWN0RGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBPYmplY3REZWZpbmVQcm9wZXJ0eShvLCBrZXksIGRlc2MpIHtcbiAgICAgICAgb1trZXldID0gZGVzYy52YWx1ZTtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgfVxuXG4gICAgdmFyIE9iamVjdEZyZWV6ZSA9IGZ1bmN0aW9uIE9iamVjdEZyZWV6ZShvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICB2YXIgT2JqZWN0R2V0UHJvdG90eXBlT2YgPSBmdW5jdGlvbiBPYmplY3RHZXRQcm90b3R5cGVPZihvYmopIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qob2JqKS5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm90bztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBBcnJheUlzQXJyYXkgPSBmdW5jdGlvbiBBcnJheUlzQXJyYXkob2JqKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICBpc0FycmF5OiBBcnJheUlzQXJyYXksXG4gICAgICAgIGtleXM6IE9iamVjdEtleXMsXG4gICAgICAgIGRlZmluZVByb3BlcnR5OiBPYmplY3REZWZpbmVQcm9wZXJ0eSxcbiAgICAgICAgZnJlZXplOiBPYmplY3RGcmVlemUsXG4gICAgICAgIGdldFByb3RvdHlwZU9mOiBPYmplY3RHZXRQcm90b3R5cGVPZixcbiAgICAgICAgaXNFUzU6IGlzRVM1XG4gICAgfTtcbn1cbiIsIi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCkge1xudmFyIFByb21pc2VNYXAgPSBQcm9taXNlLm1hcDtcblxuUHJvbWlzZS5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gUHJvbWlzZSRmaWx0ZXIoZm4sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gUHJvbWlzZU1hcCh0aGlzLCBmbiwgb3B0aW9ucywgSU5URVJOQUwpO1xufTtcblxuUHJvbWlzZS5maWx0ZXIgPSBmdW5jdGlvbiBQcm9taXNlJEZpbHRlcihwcm9taXNlcywgZm4sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gUHJvbWlzZU1hcChwcm9taXNlcywgZm4sIG9wdGlvbnMsIElOVEVSTkFMKTtcbn07XG59O1xuIiwiLyoqXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIE5FWFRfRklMVEVSLCBjYXN0KSB7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgd3JhcHNQcmltaXRpdmVSZWNlaXZlciA9IHV0aWwud3JhcHNQcmltaXRpdmVSZWNlaXZlcjtcbnZhciBpc1ByaW1pdGl2ZSA9IHV0aWwuaXNQcmltaXRpdmU7XG52YXIgdGhyb3dlciA9IHV0aWwudGhyb3dlcjtcblxuZnVuY3Rpb24gcmV0dXJuVGhpcygpIHtcbiAgICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIHRocm93VGhpcygpIHtcbiAgICB0aHJvdyB0aGlzO1xufVxuZnVuY3Rpb24gcmV0dXJuJChyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIFByb21pc2UkX3JldHVybmVyKCkge1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xufVxuZnVuY3Rpb24gdGhyb3ckKHIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gUHJvbWlzZSRfdGhyb3dlcigpIHtcbiAgICAgICAgdGhyb3cgcjtcbiAgICB9O1xufVxuZnVuY3Rpb24gcHJvbWlzZWRGaW5hbGx5KHJldCwgcmVhc29uT3JWYWx1ZSwgaXNGdWxmaWxsZWQpIHtcbiAgICB2YXIgdGhlbjtcbiAgICBpZiAod3JhcHNQcmltaXRpdmVSZWNlaXZlciAmJiBpc1ByaW1pdGl2ZShyZWFzb25PclZhbHVlKSkge1xuICAgICAgICB0aGVuID0gaXNGdWxmaWxsZWQgPyByZXR1cm4kKHJlYXNvbk9yVmFsdWUpIDogdGhyb3ckKHJlYXNvbk9yVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoZW4gPSBpc0Z1bGZpbGxlZCA/IHJldHVyblRoaXMgOiB0aHJvd1RoaXM7XG4gICAgfVxuICAgIHJldHVybiByZXQuX3RoZW4odGhlbiwgdGhyb3dlciwgdm9pZCAwLCByZWFzb25PclZhbHVlLCB2b2lkIDApO1xufVxuXG5mdW5jdGlvbiBmaW5hbGx5SGFuZGxlcihyZWFzb25PclZhbHVlKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLnByb21pc2U7XG4gICAgdmFyIGhhbmRsZXIgPSB0aGlzLmhhbmRsZXI7XG5cbiAgICB2YXIgcmV0ID0gcHJvbWlzZS5faXNCb3VuZCgpXG4gICAgICAgICAgICAgICAgICAgID8gaGFuZGxlci5jYWxsKHByb21pc2UuX2JvdW5kVG8pXG4gICAgICAgICAgICAgICAgICAgIDogaGFuZGxlcigpO1xuXG4gICAgaWYgKHJldCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0KHJldCwgdm9pZCAwKTtcbiAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlZEZpbmFsbHkobWF5YmVQcm9taXNlLCByZWFzb25PclZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5pc0Z1bGZpbGxlZCgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9taXNlLmlzUmVqZWN0ZWQoKSkge1xuICAgICAgICBORVhUX0ZJTFRFUi5lID0gcmVhc29uT3JWYWx1ZTtcbiAgICAgICAgcmV0dXJuIE5FWFRfRklMVEVSO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZWFzb25PclZhbHVlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdGFwSGFuZGxlcih2YWx1ZSkge1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xuICAgIHZhciBoYW5kbGVyID0gdGhpcy5oYW5kbGVyO1xuXG4gICAgdmFyIHJldCA9IHByb21pc2UuX2lzQm91bmQoKVxuICAgICAgICAgICAgICAgICAgICA/IGhhbmRsZXIuY2FsbChwcm9taXNlLl9ib3VuZFRvLCB2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgOiBoYW5kbGVyKHZhbHVlKTtcblxuICAgIGlmIChyZXQgIT09IHZvaWQgMCkge1xuICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gY2FzdChyZXQsIHZvaWQgMCk7XG4gICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZWRGaW5hbGx5KG1heWJlUHJvbWlzZSwgdmFsdWUsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUuX3Bhc3NUaHJvdWdoSGFuZGxlciA9XG5mdW5jdGlvbiBQcm9taXNlJF9wYXNzVGhyb3VnaEhhbmRsZXIoaGFuZGxlciwgaXNGaW5hbGx5KSB7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0aGlzLnRoZW4oKTtcblxuICAgIHZhciBwcm9taXNlQW5kSGFuZGxlciA9IHtcbiAgICAgICAgcHJvbWlzZTogdGhpcyxcbiAgICAgICAgaGFuZGxlcjogaGFuZGxlclxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5fdGhlbihcbiAgICAgICAgICAgIGlzRmluYWxseSA/IGZpbmFsbHlIYW5kbGVyIDogdGFwSGFuZGxlcixcbiAgICAgICAgICAgIGlzRmluYWxseSA/IGZpbmFsbHlIYW5kbGVyIDogdm9pZCAwLCB2b2lkIDAsXG4gICAgICAgICAgICBwcm9taXNlQW5kSGFuZGxlciwgdm9pZCAwKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmxhc3RseSA9XG5Qcm9taXNlLnByb3RvdHlwZVtcImZpbmFsbHlcIl0gPSBmdW5jdGlvbiBQcm9taXNlJGZpbmFsbHkoaGFuZGxlcikge1xuICAgIHJldHVybiB0aGlzLl9wYXNzVGhyb3VnaEhhbmRsZXIoaGFuZGxlciwgdHJ1ZSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS50YXAgPSBmdW5jdGlvbiBQcm9taXNlJHRhcChoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bhc3NUaHJvdWdoSGFuZGxlcihoYW5kbGVyLCBmYWxzZSk7XG59O1xufTtcbiIsIi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBhcGlSZWplY3Rpb24sIElOVEVSTkFMLCBjYXN0KSB7XG52YXIgZXJyb3JzID0gcmVxdWlyZShcIi4vZXJyb3JzLmpzXCIpO1xudmFyIFR5cGVFcnJvciA9IGVycm9ycy5UeXBlRXJyb3I7XG52YXIgZGVwcmVjYXRlZCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIikuZGVwcmVjYXRlZDtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKTtcbnZhciBlcnJvck9iaiA9IHV0aWwuZXJyb3JPYmo7XG52YXIgdHJ5Q2F0Y2gxID0gdXRpbC50cnlDYXRjaDE7XG52YXIgeWllbGRIYW5kbGVycyA9IFtdO1xuXG5mdW5jdGlvbiBwcm9taXNlRnJvbVlpZWxkSGFuZGxlcih2YWx1ZSwgeWllbGRIYW5kbGVycykge1xuICAgIHZhciBfZXJyb3JPYmogPSBlcnJvck9iajtcbiAgICB2YXIgX1Byb21pc2UgPSBQcm9taXNlO1xuICAgIHZhciBsZW4gPSB5aWVsZEhhbmRsZXJzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0cnlDYXRjaDEoeWllbGRIYW5kbGVyc1tpXSwgdm9pZCAwLCB2YWx1ZSk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IF9lcnJvck9iaikge1xuICAgICAgICAgICAgcmV0dXJuIF9Qcm9taXNlLnJlamVjdChfZXJyb3JPYmouZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IGNhc3QocmVzdWx0LCBwcm9taXNlRnJvbVlpZWxkSGFuZGxlcik7XG4gICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBfUHJvbWlzZSkgcmV0dXJuIG1heWJlUHJvbWlzZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIFByb21pc2VTcGF3bihnZW5lcmF0b3JGdW5jdGlvbiwgcmVjZWl2ZXIsIHlpZWxkSGFuZGxlcikge1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICBwcm9taXNlLl9zZXRUcmFjZSh2b2lkIDApO1xuICAgIHRoaXMuX2dlbmVyYXRvckZ1bmN0aW9uID0gZ2VuZXJhdG9yRnVuY3Rpb247XG4gICAgdGhpcy5fcmVjZWl2ZXIgPSByZWNlaXZlcjtcbiAgICB0aGlzLl9nZW5lcmF0b3IgPSB2b2lkIDA7XG4gICAgdGhpcy5feWllbGRIYW5kbGVycyA9IHR5cGVvZiB5aWVsZEhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/IFt5aWVsZEhhbmRsZXJdLmNvbmNhdCh5aWVsZEhhbmRsZXJzKVxuICAgICAgICA6IHlpZWxkSGFuZGxlcnM7XG59XG5cblByb21pc2VTcGF3bi5wcm90b3R5cGUucHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2VTcGF3biRwcm9taXNlKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xufTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5fcnVuID0gZnVuY3Rpb24gUHJvbWlzZVNwYXduJF9ydW4oKSB7XG4gICAgdGhpcy5fZ2VuZXJhdG9yID0gdGhpcy5fZ2VuZXJhdG9yRnVuY3Rpb24uY2FsbCh0aGlzLl9yZWNlaXZlcik7XG4gICAgdGhpcy5fcmVjZWl2ZXIgPVxuICAgICAgICB0aGlzLl9nZW5lcmF0b3JGdW5jdGlvbiA9IHZvaWQgMDtcbiAgICB0aGlzLl9uZXh0KHZvaWQgMCk7XG59O1xuXG5Qcm9taXNlU3Bhd24ucHJvdG90eXBlLl9jb250aW51ZSA9IGZ1bmN0aW9uIFByb21pc2VTcGF3biRfY29udGludWUocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgdGhpcy5fZ2VuZXJhdG9yID0gdm9pZCAwO1xuICAgICAgICB2YXIgdHJhY2UgPSBlcnJvcnMuY2FuQXR0YWNoKHJlc3VsdC5lKVxuICAgICAgICAgICAgPyByZXN1bHQuZSA6IG5ldyBFcnJvcihyZXN1bHQuZSArIFwiXCIpO1xuICAgICAgICB0aGlzLl9wcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHRyYWNlKTtcbiAgICAgICAgdGhpcy5fcHJvbWlzZS5fcmVqZWN0KHJlc3VsdC5lLCB0cmFjZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgaWYgKHJlc3VsdC5kb25lID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuX2dlbmVyYXRvciA9IHZvaWQgMDtcbiAgICAgICAgaWYgKCF0aGlzLl9wcm9taXNlLl90cnlGb2xsb3codmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLl9wcm9taXNlLl9mdWxmaWxsKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0KHZhbHVlLCB2b2lkIDApO1xuICAgICAgICBpZiAoIShtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xuICAgICAgICAgICAgbWF5YmVQcm9taXNlID1cbiAgICAgICAgICAgICAgICBwcm9taXNlRnJvbVlpZWxkSGFuZGxlcihtYXliZVByb21pc2UsIHRoaXMuX3lpZWxkSGFuZGxlcnMpO1xuICAgICAgICAgICAgaWYgKG1heWJlUHJvbWlzZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Rocm93KG5ldyBUeXBlRXJyb3IoXCJBIHZhbHVlIHdhcyB5aWVsZGVkIHRoYXQgY291bGQgbm90IGJlIHRyZWF0ZWQgYXMgYSBwcm9taXNlXCIpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWF5YmVQcm9taXNlLl90aGVuKFxuICAgICAgICAgICAgdGhpcy5fbmV4dCxcbiAgICAgICAgICAgIHRoaXMuX3Rocm93LFxuICAgICAgICAgICAgdm9pZCAwLFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIG51bGxcbiAgICAgICApO1xuICAgIH1cbn07XG5cblByb21pc2VTcGF3bi5wcm90b3R5cGUuX3Rocm93ID0gZnVuY3Rpb24gUHJvbWlzZVNwYXduJF90aHJvdyhyZWFzb24pIHtcbiAgICBpZiAoZXJyb3JzLmNhbkF0dGFjaChyZWFzb24pKVxuICAgICAgICB0aGlzLl9wcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHJlYXNvbik7XG4gICAgdGhpcy5fY29udGludWUoXG4gICAgICAgIHRyeUNhdGNoMSh0aGlzLl9nZW5lcmF0b3JbXCJ0aHJvd1wiXSwgdGhpcy5fZ2VuZXJhdG9yLCByZWFzb24pXG4gICApO1xufTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uIFByb21pc2VTcGF3biRfbmV4dCh2YWx1ZSkge1xuICAgIHRoaXMuX2NvbnRpbnVlKFxuICAgICAgICB0cnlDYXRjaDEodGhpcy5fZ2VuZXJhdG9yLm5leHQsIHRoaXMuX2dlbmVyYXRvciwgdmFsdWUpXG4gICApO1xufTtcblxuUHJvbWlzZS5jb3JvdXRpbmUgPVxuZnVuY3Rpb24gUHJvbWlzZSRDb3JvdXRpbmUoZ2VuZXJhdG9yRnVuY3Rpb24sIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIGdlbmVyYXRvckZ1bmN0aW9uICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImdlbmVyYXRvckZ1bmN0aW9uIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgdmFyIHlpZWxkSGFuZGxlciA9IE9iamVjdChvcHRpb25zKS55aWVsZEhhbmRsZXI7XG4gICAgdmFyIFByb21pc2VTcGF3biQgPSBQcm9taXNlU3Bhd247XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGdlbmVyYXRvciA9IGdlbmVyYXRvckZ1bmN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIHZhciBzcGF3biA9IG5ldyBQcm9taXNlU3Bhd24kKHZvaWQgMCwgdm9pZCAwLCB5aWVsZEhhbmRsZXIpO1xuICAgICAgICBzcGF3bi5fZ2VuZXJhdG9yID0gZ2VuZXJhdG9yO1xuICAgICAgICBzcGF3bi5fbmV4dCh2b2lkIDApO1xuICAgICAgICByZXR1cm4gc3Bhd24ucHJvbWlzZSgpO1xuICAgIH07XG59O1xuXG5Qcm9taXNlLmNvcm91dGluZS5hZGRZaWVsZEhhbmRsZXIgPSBmdW5jdGlvbihmbikge1xuICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcImZuIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICB5aWVsZEhhbmRsZXJzLnB1c2goZm4pO1xufTtcblxuUHJvbWlzZS5zcGF3biA9IGZ1bmN0aW9uIFByb21pc2UkU3Bhd24oZ2VuZXJhdG9yRnVuY3Rpb24pIHtcbiAgICBkZXByZWNhdGVkKFwiUHJvbWlzZS5zcGF3biBpcyBkZXByZWNhdGVkLiBVc2UgUHJvbWlzZS5jb3JvdXRpbmUgaW5zdGVhZC5cIik7XG4gICAgaWYgKHR5cGVvZiBnZW5lcmF0b3JGdW5jdGlvbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBhcGlSZWplY3Rpb24oXCJnZW5lcmF0b3JGdW5jdGlvbiBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICAgIHZhciBzcGF3biA9IG5ldyBQcm9taXNlU3Bhd24oZ2VuZXJhdG9yRnVuY3Rpb24sIHRoaXMpO1xuICAgIHZhciByZXQgPSBzcGF3bi5wcm9taXNlKCk7XG4gICAgc3Bhd24uX3J1bihQcm9taXNlLnNwYXduKTtcbiAgICByZXR1cm4gcmV0O1xufTtcbn07XG4iLCIvKipcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID1cbmZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSwgY2FzdCwgSU5URVJOQUwpIHtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKTtcbnZhciBjYW5FdmFsdWF0ZSA9IHV0aWwuY2FuRXZhbHVhdGU7XG52YXIgdHJ5Q2F0Y2gxID0gdXRpbC50cnlDYXRjaDE7XG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xuXG5cbmlmIChjYW5FdmFsdWF0ZSkge1xuICAgIHZhciB0aGVuQ2FsbGJhY2sgPSBmdW5jdGlvbihpKSB7XG4gICAgICAgIHJldHVybiBuZXcgRnVuY3Rpb24oXCJ2YWx1ZVwiLCBcImhvbGRlclwiLCBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIGhvbGRlci5wSW5kZXggPSB2YWx1ZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIGhvbGRlci5jaGVja0Z1bGZpbGxtZW50KHRoaXMpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFwiLnJlcGxhY2UoL0luZGV4L2csIGkpKTtcbiAgICB9O1xuXG4gICAgdmFyIGNhbGxlciA9IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gY291bnQ7ICsraSkgdmFsdWVzLnB1c2goXCJob2xkZXIucFwiICsgaSk7XG4gICAgICAgIHJldHVybiBuZXcgRnVuY3Rpb24oXCJob2xkZXJcIiwgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAndXNlIHN0cmljdCc7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBob2xkZXIuZm47ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sodmFsdWVzKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBcIi5yZXBsYWNlKC92YWx1ZXMvZywgdmFsdWVzLmpvaW4oXCIsIFwiKSkpO1xuICAgIH07XG4gICAgdmFyIHRoZW5DYWxsYmFja3MgPSBbXTtcbiAgICB2YXIgY2FsbGVycyA9IFt2b2lkIDBdO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IDU7ICsraSkge1xuICAgICAgICB0aGVuQ2FsbGJhY2tzLnB1c2godGhlbkNhbGxiYWNrKGkpKTtcbiAgICAgICAgY2FsbGVycy5wdXNoKGNhbGxlcihpKSk7XG4gICAgfVxuXG4gICAgdmFyIEhvbGRlciA9IGZ1bmN0aW9uKHRvdGFsLCBmbikge1xuICAgICAgICB0aGlzLnAxID0gdGhpcy5wMiA9IHRoaXMucDMgPSB0aGlzLnA0ID0gdGhpcy5wNSA9IG51bGw7XG4gICAgICAgIHRoaXMuZm4gPSBmbjtcbiAgICAgICAgdGhpcy50b3RhbCA9IHRvdGFsO1xuICAgICAgICB0aGlzLm5vdyA9IDA7XG4gICAgfTtcblxuICAgIEhvbGRlci5wcm90b3R5cGUuY2FsbGVycyA9IGNhbGxlcnM7XG4gICAgSG9sZGVyLnByb3RvdHlwZS5jaGVja0Z1bGZpbGxtZW50ID0gZnVuY3Rpb24ocHJvbWlzZSkge1xuICAgICAgICB2YXIgbm93ID0gdGhpcy5ub3c7XG4gICAgICAgIG5vdysrO1xuICAgICAgICB2YXIgdG90YWwgPSB0aGlzLnRvdGFsO1xuICAgICAgICBpZiAobm93ID49IHRvdGFsKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlciA9IHRoaXMuY2FsbGVyc1t0b3RhbF07XG4gICAgICAgICAgICB2YXIgcmV0ID0gdHJ5Q2F0Y2gxKGhhbmRsZXIsIHZvaWQgMCwgdGhpcyk7XG4gICAgICAgICAgICBpZiAocmV0ID09PSBlcnJvck9iaikge1xuICAgICAgICAgICAgICAgIHByb21pc2UuX3JlamVjdFVuY2hlY2tlZChyZXQuZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFwcm9taXNlLl90cnlGb2xsb3cocmV0KSkge1xuICAgICAgICAgICAgICAgIHByb21pc2UuX2Z1bGZpbGxVbmNoZWNrZWQocmV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubm93ID0gbm93O1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuXG5cblxuUHJvbWlzZS5qb2luID0gZnVuY3Rpb24gUHJvbWlzZSRKb2luKCkge1xuICAgIHZhciBsYXN0ID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgdmFyIGZuO1xuICAgIGlmIChsYXN0ID4gMCAmJiB0eXBlb2YgYXJndW1lbnRzW2xhc3RdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZm4gPSBhcmd1bWVudHNbbGFzdF07XG4gICAgICAgIGlmIChsYXN0IDwgNiAmJiBjYW5FdmFsdWF0ZSkge1xuICAgICAgICAgICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICAgICAgICAgIHJldC5fc2V0VHJhY2Uodm9pZCAwKTtcbiAgICAgICAgICAgIHZhciBob2xkZXIgPSBuZXcgSG9sZGVyKGxhc3QsIGZuKTtcbiAgICAgICAgICAgIHZhciByZWplY3QgPSByZXQuX3JlamVjdDtcbiAgICAgICAgICAgIHZhciBjYWxsYmFja3MgPSB0aGVuQ2FsbGJhY2tzO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0OyArK2kpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gY2FzdChhcmd1bWVudHNbaV0sIHZvaWQgMCk7XG4gICAgICAgICAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1heWJlUHJvbWlzZS5pc1BlbmRpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF5YmVQcm9taXNlLl90aGVuKGNhbGxiYWNrc1tpXSwgcmVqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCwgcmV0LCBob2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1heWJlUHJvbWlzZS5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3NbaV0uY2FsbChyZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXliZVByb21pc2UuX3NldHRsZWRWYWx1ZSwgaG9sZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5fcmVqZWN0KG1heWJlUHJvbWlzZS5fc2V0dGxlZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fdW5zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzW2ldLmNhbGwocmV0LCBtYXliZVByb21pc2UsIGhvbGRlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgJF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoO3ZhciBhcmdzID0gbmV3IEFycmF5KCRfbGVuKTsgZm9yKHZhciAkX2kgPSAwOyAkX2kgPCAkX2xlbjsgKyskX2kpIHthcmdzWyRfaV0gPSBhcmd1bWVudHNbJF9pXTt9XG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlQXJyYXkoYXJncykucHJvbWlzZSgpO1xuICAgIHJldHVybiBmbiAhPT0gdm9pZCAwID8gcmV0LnNwcmVhZChmbikgOiByZXQ7XG59O1xuXG59O1xuIiwiLyoqXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSwgYXBpUmVqZWN0aW9uLCBjYXN0LCBJTlRFUk5BTCkge1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIHRyeUNhdGNoMyA9IHV0aWwudHJ5Q2F0Y2gzO1xudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcbnZhciBQRU5ESU5HID0ge307XG52YXIgRU1QVFlfQVJSQVkgPSBbXTtcblxuZnVuY3Rpb24gTWFwcGluZ1Byb21pc2VBcnJheShwcm9taXNlcywgZm4sIGxpbWl0LCBfZmlsdGVyKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvciQocHJvbWlzZXMpO1xuICAgIHRoaXMuX2NhbGxiYWNrID0gZm47XG4gICAgdGhpcy5fcHJlc2VydmVkVmFsdWVzID0gX2ZpbHRlciA9PT0gSU5URVJOQUxcbiAgICAgICAgPyBuZXcgQXJyYXkodGhpcy5sZW5ndGgoKSlcbiAgICAgICAgOiBudWxsO1xuICAgIHRoaXMuX2xpbWl0ID0gbGltaXQ7XG4gICAgdGhpcy5faW5GbGlnaHQgPSAwO1xuICAgIHRoaXMuX3F1ZXVlID0gbGltaXQgPj0gMSA/IFtdIDogRU1QVFlfQVJSQVk7XG4gICAgdGhpcy5faW5pdCQodm9pZCAwLCAtMik7XG59XG51dGlsLmluaGVyaXRzKE1hcHBpbmdQcm9taXNlQXJyYXksIFByb21pc2VBcnJheSk7XG5cbk1hcHBpbmdQcm9taXNlQXJyYXkucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gTWFwcGluZ1Byb21pc2VBcnJheSRfaW5pdCgpIHt9O1xuXG5NYXBwaW5nUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZUZ1bGZpbGxlZCA9XG5mdW5jdGlvbiBNYXBwaW5nUHJvbWlzZUFycmF5JF9wcm9taXNlRnVsZmlsbGVkKHZhbHVlLCBpbmRleCkge1xuICAgIHZhciB2YWx1ZXMgPSB0aGlzLl92YWx1ZXM7XG4gICAgaWYgKHZhbHVlcyA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG4gICAgdmFyIHByZXNlcnZlZFZhbHVlcyA9IHRoaXMuX3ByZXNlcnZlZFZhbHVlcztcbiAgICB2YXIgbGltaXQgPSB0aGlzLl9saW1pdDtcbiAgICBpZiAodmFsdWVzW2luZGV4XSA9PT0gUEVORElORykge1xuICAgICAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgIGlmIChsaW1pdCA+PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9pbkZsaWdodC0tO1xuICAgICAgICAgICAgdGhpcy5fZHJhaW5RdWV1ZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzUmVzb2x2ZWQoKSkgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGxpbWl0ID49IDEgJiYgdGhpcy5faW5GbGlnaHQgPj0gbGltaXQpIHtcbiAgICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3F1ZXVlLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmVzZXJ2ZWRWYWx1ZXMgIT09IG51bGwpIHByZXNlcnZlZFZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcblxuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLl9jYWxsYmFjaztcbiAgICAgICAgdmFyIHJlY2VpdmVyID0gdGhpcy5fcHJvbWlzZS5fYm91bmRUbztcbiAgICAgICAgdmFyIHJldCA9IHRyeUNhdGNoMyhjYWxsYmFjaywgcmVjZWl2ZXIsIHZhbHVlLCBpbmRleCwgbGVuZ3RoKTtcbiAgICAgICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHJldHVybiB0aGlzLl9yZWplY3QocmV0LmUpO1xuXG4gICAgICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0KHJldCwgdm9pZCAwKTtcbiAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIGlmIChtYXliZVByb21pc2UuaXNQZW5kaW5nKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAobGltaXQgPj0gMSkgdGhpcy5faW5GbGlnaHQrKztcbiAgICAgICAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gUEVORElORztcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF5YmVQcm9taXNlLl9wcm94eVByb21pc2VBcnJheSh0aGlzLCBpbmRleCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1heWJlUHJvbWlzZS5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0ID0gbWF5YmVQcm9taXNlLnZhbHVlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fdW5zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWplY3QobWF5YmVQcm9taXNlLnJlYXNvbigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YWx1ZXNbaW5kZXhdID0gcmV0O1xuICAgIH1cbiAgICB2YXIgdG90YWxSZXNvbHZlZCA9ICsrdGhpcy5fdG90YWxSZXNvbHZlZDtcbiAgICBpZiAodG90YWxSZXNvbHZlZCA+PSBsZW5ndGgpIHtcbiAgICAgICAgaWYgKHByZXNlcnZlZFZhbHVlcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fZmlsdGVyKHZhbHVlcywgcHJlc2VydmVkVmFsdWVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfVxuXG4gICAgfVxufTtcblxuTWFwcGluZ1Byb21pc2VBcnJheS5wcm90b3R5cGUuX2RyYWluUXVldWUgPVxuZnVuY3Rpb24gTWFwcGluZ1Byb21pc2VBcnJheSRfZHJhaW5RdWV1ZSgpIHtcbiAgICB2YXIgcXVldWUgPSB0aGlzLl9xdWV1ZTtcbiAgICB2YXIgbGltaXQgPSB0aGlzLl9saW1pdDtcbiAgICB2YXIgdmFsdWVzID0gdGhpcy5fdmFsdWVzO1xuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwICYmIHRoaXMuX2luRmxpZ2h0IDwgbGltaXQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gcXVldWUucG9wKCk7XG4gICAgICAgIHRoaXMuX3Byb21pc2VGdWxmaWxsZWQodmFsdWVzW2luZGV4XSwgaW5kZXgpO1xuICAgIH1cbn07XG5cbk1hcHBpbmdQcm9taXNlQXJyYXkucHJvdG90eXBlLl9maWx0ZXIgPVxuZnVuY3Rpb24gTWFwcGluZ1Byb21pc2VBcnJheSRfZmlsdGVyKGJvb2xlYW5zLCB2YWx1ZXMpIHtcbiAgICB2YXIgbGVuID0gdmFsdWVzLmxlbmd0aDtcbiAgICB2YXIgcmV0ID0gbmV3IEFycmF5KGxlbik7XG4gICAgdmFyIGogPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgaWYgKGJvb2xlYW5zW2ldKSByZXRbaisrXSA9IHZhbHVlc1tpXTtcbiAgICB9XG4gICAgcmV0Lmxlbmd0aCA9IGo7XG4gICAgdGhpcy5fcmVzb2x2ZShyZXQpO1xufTtcblxuTWFwcGluZ1Byb21pc2VBcnJheS5wcm90b3R5cGUucHJlc2VydmVkVmFsdWVzID1cbmZ1bmN0aW9uIE1hcHBpbmdQcm9taXNlQXJyYXkkcHJlc2VydmVWYWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZXNlcnZlZFZhbHVlcztcbn07XG5cbmZ1bmN0aW9uIG1hcChwcm9taXNlcywgZm4sIG9wdGlvbnMsIF9maWx0ZXIpIHtcbiAgICB2YXIgbGltaXQgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zICE9PSBudWxsXG4gICAgICAgID8gb3B0aW9ucy5jb25jdXJyZW5jeVxuICAgICAgICA6IDA7XG4gICAgbGltaXQgPSB0eXBlb2YgbGltaXQgPT09IFwibnVtYmVyXCIgJiZcbiAgICAgICAgaXNGaW5pdGUobGltaXQpICYmIGxpbWl0ID49IDEgPyBsaW1pdCA6IDA7XG4gICAgcmV0dXJuIG5ldyBNYXBwaW5nUHJvbWlzZUFycmF5KHByb21pc2VzLCBmbiwgbGltaXQsIF9maWx0ZXIpO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiBQcm9taXNlJG1hcChmbiwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGFwaVJlamVjdGlvbihcImZuIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcblxuICAgIHJldHVybiBtYXAodGhpcywgZm4sIG9wdGlvbnMsIG51bGwpLnByb21pc2UoKTtcbn07XG5cblByb21pc2UubWFwID0gZnVuY3Rpb24gUHJvbWlzZSRNYXAocHJvbWlzZXMsIGZuLCBvcHRpb25zLCBfZmlsdGVyKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gYXBpUmVqZWN0aW9uKFwiZm4gbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgIHJldHVybiBtYXAocHJvbWlzZXMsIGZuLCBvcHRpb25zLCBfZmlsdGVyKS5wcm9taXNlKCk7XG59O1xuXG5cbn07XG4iLCIvKipcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSkge1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIGFzeW5jID0gcmVxdWlyZShcIi4vYXN5bmMuanNcIik7XG52YXIgdHJ5Q2F0Y2gyID0gdXRpbC50cnlDYXRjaDI7XG52YXIgdHJ5Q2F0Y2gxID0gdXRpbC50cnlDYXRjaDE7XG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xuXG5mdW5jdGlvbiB0aHJvd2VyKHIpIHtcbiAgICB0aHJvdyByO1xufVxuXG5mdW5jdGlvbiBQcm9taXNlJF9zcHJlYWRBZGFwdGVyKHZhbCwgcmVjZWl2ZXIpIHtcbiAgICBpZiAoIXV0aWwuaXNBcnJheSh2YWwpKSByZXR1cm4gUHJvbWlzZSRfc3VjY2Vzc0FkYXB0ZXIodmFsLCByZWNlaXZlcik7XG4gICAgdmFyIHJldCA9IHV0aWwudHJ5Q2F0Y2hBcHBseSh0aGlzLCBbbnVsbF0uY29uY2F0KHZhbCksIHJlY2VpdmVyKTtcbiAgICBpZiAocmV0ID09PSBlcnJvck9iaikge1xuICAgICAgICBhc3luYy5pbnZva2VMYXRlcih0aHJvd2VyLCB2b2lkIDAsIHJldC5lKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIFByb21pc2UkX3N1Y2Nlc3NBZGFwdGVyKHZhbCwgcmVjZWl2ZXIpIHtcbiAgICB2YXIgbm9kZWJhY2sgPSB0aGlzO1xuICAgIHZhciByZXQgPSB2YWwgPT09IHZvaWQgMFxuICAgICAgICA/IHRyeUNhdGNoMShub2RlYmFjaywgcmVjZWl2ZXIsIG51bGwpXG4gICAgICAgIDogdHJ5Q2F0Y2gyKG5vZGViYWNrLCByZWNlaXZlciwgbnVsbCwgdmFsKTtcbiAgICBpZiAocmV0ID09PSBlcnJvck9iaikge1xuICAgICAgICBhc3luYy5pbnZva2VMYXRlcih0aHJvd2VyLCB2b2lkIDAsIHJldC5lKTtcbiAgICB9XG59XG5mdW5jdGlvbiBQcm9taXNlJF9lcnJvckFkYXB0ZXIocmVhc29uLCByZWNlaXZlcikge1xuICAgIHZhciBub2RlYmFjayA9IHRoaXM7XG4gICAgdmFyIHJldCA9IHRyeUNhdGNoMShub2RlYmFjaywgcmVjZWl2ZXIsIHJlYXNvbik7XG4gICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgYXN5bmMuaW52b2tlTGF0ZXIodGhyb3dlciwgdm9pZCAwLCByZXQuZSk7XG4gICAgfVxufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5ub2RlaWZ5ID0gZnVuY3Rpb24gUHJvbWlzZSRub2RlaWZ5KG5vZGViYWNrLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBub2RlYmFjayA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdmFyIGFkYXB0ZXIgPSBQcm9taXNlJF9zdWNjZXNzQWRhcHRlcjtcbiAgICAgICAgaWYgKG9wdGlvbnMgIT09IHZvaWQgMCAmJiBPYmplY3Qob3B0aW9ucykuc3ByZWFkKSB7XG4gICAgICAgICAgICBhZGFwdGVyID0gUHJvbWlzZSRfc3ByZWFkQWRhcHRlcjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90aGVuKFxuICAgICAgICAgICAgYWRhcHRlcixcbiAgICAgICAgICAgIFByb21pc2UkX2Vycm9yQWRhcHRlcixcbiAgICAgICAgICAgIHZvaWQgMCxcbiAgICAgICAgICAgIG5vZGViYWNrLFxuICAgICAgICAgICAgdGhpcy5fYm91bmRUb1xuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn07XG59O1xuIiwiLyoqXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSkge1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIGFzeW5jID0gcmVxdWlyZShcIi4vYXN5bmMuanNcIik7XG52YXIgZXJyb3JzID0gcmVxdWlyZShcIi4vZXJyb3JzLmpzXCIpO1xudmFyIHRyeUNhdGNoMSA9IHV0aWwudHJ5Q2F0Y2gxO1xudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcblxuUHJvbWlzZS5wcm90b3R5cGUucHJvZ3Jlc3NlZCA9IGZ1bmN0aW9uIFByb21pc2UkcHJvZ3Jlc3NlZChoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW4odm9pZCAwLCB2b2lkIDAsIGhhbmRsZXIsIHZvaWQgMCwgdm9pZCAwKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9wcm9ncmVzcyA9IGZ1bmN0aW9uIFByb21pc2UkX3Byb2dyZXNzKHByb2dyZXNzVmFsdWUpIHtcbiAgICBpZiAodGhpcy5faXNGb2xsb3dpbmdPckZ1bGZpbGxlZE9yUmVqZWN0ZWQoKSkgcmV0dXJuO1xuICAgIHRoaXMuX3Byb2dyZXNzVW5jaGVja2VkKHByb2dyZXNzVmFsdWUpO1xuXG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fY2xlYXJGaXJzdEhhbmRsZXJEYXRhJEJhc2UgPVxuUHJvbWlzZS5wcm90b3R5cGUuX2NsZWFyRmlyc3RIYW5kbGVyRGF0YTtcblByb21pc2UucHJvdG90eXBlLl9jbGVhckZpcnN0SGFuZGxlckRhdGEgPVxuZnVuY3Rpb24gUHJvbWlzZSRfY2xlYXJGaXJzdEhhbmRsZXJEYXRhKCkge1xuICAgIHRoaXMuX2NsZWFyRmlyc3RIYW5kbGVyRGF0YSRCYXNlKCk7XG4gICAgdGhpcy5fcHJvZ3Jlc3NIYW5kbGVyMCA9IHZvaWQgMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9wcm9ncmVzc0hhbmRsZXJBdCA9XG5mdW5jdGlvbiBQcm9taXNlJF9wcm9ncmVzc0hhbmRsZXJBdChpbmRleCkge1xuICAgIHJldHVybiBpbmRleCA9PT0gMFxuICAgICAgICA/IHRoaXMuX3Byb2dyZXNzSGFuZGxlcjBcbiAgICAgICAgOiB0aGlzWyhpbmRleCA8PCAyKSArIGluZGV4IC0gNSArIDJdO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2RvUHJvZ3Jlc3NXaXRoID1cbmZ1bmN0aW9uIFByb21pc2UkX2RvUHJvZ3Jlc3NXaXRoKHByb2dyZXNzaW9uKSB7XG4gICAgdmFyIHByb2dyZXNzVmFsdWUgPSBwcm9ncmVzc2lvbi52YWx1ZTtcbiAgICB2YXIgaGFuZGxlciA9IHByb2dyZXNzaW9uLmhhbmRsZXI7XG4gICAgdmFyIHByb21pc2UgPSBwcm9ncmVzc2lvbi5wcm9taXNlO1xuICAgIHZhciByZWNlaXZlciA9IHByb2dyZXNzaW9uLnJlY2VpdmVyO1xuXG4gICAgdmFyIHJldCA9IHRyeUNhdGNoMShoYW5kbGVyLCByZWNlaXZlciwgcHJvZ3Jlc3NWYWx1ZSk7XG4gICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgaWYgKHJldC5lICE9IG51bGwgJiZcbiAgICAgICAgICAgIHJldC5lLm5hbWUgIT09IFwiU3RvcFByb2dyZXNzUHJvcGFnYXRpb25cIikge1xuICAgICAgICAgICAgdmFyIHRyYWNlID0gZXJyb3JzLmNhbkF0dGFjaChyZXQuZSlcbiAgICAgICAgICAgICAgICA/IHJldC5lIDogbmV3IEVycm9yKHJldC5lICsgXCJcIik7XG4gICAgICAgICAgICBwcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHRyYWNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX3Byb2dyZXNzKHJldC5lKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmV0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICByZXQuX3RoZW4ocHJvbWlzZS5fcHJvZ3Jlc3MsIG51bGwsIG51bGwsIHByb21pc2UsIHZvaWQgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZS5fcHJvZ3Jlc3MocmV0KTtcbiAgICB9XG59O1xuXG5cblByb21pc2UucHJvdG90eXBlLl9wcm9ncmVzc1VuY2hlY2tlZCA9XG5mdW5jdGlvbiBQcm9taXNlJF9wcm9ncmVzc1VuY2hlY2tlZChwcm9ncmVzc1ZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmlzUGVuZGluZygpKSByZXR1cm47XG4gICAgdmFyIGxlbiA9IHRoaXMuX2xlbmd0aCgpO1xuICAgIHZhciBwcm9ncmVzcyA9IHRoaXMuX3Byb2dyZXNzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSB0aGlzLl9wcm9ncmVzc0hhbmRsZXJBdChpKTtcbiAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLl9wcm9taXNlQXQoaSk7XG4gICAgICAgIGlmICghKHByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xuICAgICAgICAgICAgdmFyIHJlY2VpdmVyID0gdGhpcy5fcmVjZWl2ZXJBdChpKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlci5jYWxsKHJlY2VpdmVyLCBwcm9ncmVzc1ZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjZWl2ZXIgaW5zdGFuY2VvZiBQcm9taXNlICYmIHJlY2VpdmVyLl9pc1Byb3hpZWQoKSkge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVyLl9wcm9ncmVzc1VuY2hlY2tlZChwcm9ncmVzc1ZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjZWl2ZXIgaW5zdGFuY2VvZiBQcm9taXNlQXJyYXkpIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlci5fcHJvbWlzZVByb2dyZXNzZWQocHJvZ3Jlc3NWYWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBhc3luYy5pbnZva2UodGhpcy5fZG9Qcm9ncmVzc1dpdGgsIHRoaXMsIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyLFxuICAgICAgICAgICAgICAgIHByb21pc2U6IHByb21pc2UsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZXI6IHRoaXMuX3JlY2VpdmVyQXQoaSksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHByb2dyZXNzVmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXN5bmMuaW52b2tlKHByb2dyZXNzLCBwcm9taXNlLCBwcm9ncmVzc1ZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG59O1xuIiwiKGZ1bmN0aW9uIChwcm9jZXNzKXtcbi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xudmFyIG9sZDtcbmlmICh0eXBlb2YgUHJvbWlzZSAhPT0gXCJ1bmRlZmluZWRcIikgb2xkID0gUHJvbWlzZTtcbmZ1bmN0aW9uIG5vQ29uZmxpY3QoYmx1ZWJpcmQpIHtcbiAgICB0cnkgeyBpZiAoUHJvbWlzZSA9PT0gYmx1ZWJpcmQpIFByb21pc2UgPSBvbGQ7IH1cbiAgICBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gYmx1ZWJpcmQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIGFzeW5jID0gcmVxdWlyZShcIi4vYXN5bmMuanNcIik7XG52YXIgZXJyb3JzID0gcmVxdWlyZShcIi4vZXJyb3JzLmpzXCIpO1xuXG52YXIgSU5URVJOQUwgPSBmdW5jdGlvbigpe307XG52YXIgQVBQTFkgPSB7fTtcbnZhciBORVhUX0ZJTFRFUiA9IHtlOiBudWxsfTtcblxudmFyIGNhc3QgPSByZXF1aXJlKFwiLi90aGVuYWJsZXMuanNcIikoUHJvbWlzZSwgSU5URVJOQUwpO1xudmFyIFByb21pc2VBcnJheSA9IHJlcXVpcmUoXCIuL3Byb21pc2VfYXJyYXkuanNcIikoUHJvbWlzZSwgSU5URVJOQUwsIGNhc3QpO1xudmFyIENhcHR1cmVkVHJhY2UgPSByZXF1aXJlKFwiLi9jYXB0dXJlZF90cmFjZS5qc1wiKSgpO1xudmFyIENhdGNoRmlsdGVyID0gcmVxdWlyZShcIi4vY2F0Y2hfZmlsdGVyLmpzXCIpKE5FWFRfRklMVEVSKTtcbnZhciBQcm9taXNlUmVzb2x2ZXIgPSByZXF1aXJlKFwiLi9wcm9taXNlX3Jlc29sdmVyLmpzXCIpO1xuXG52YXIgaXNBcnJheSA9IHV0aWwuaXNBcnJheTtcblxudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcbnZhciB0cnlDYXRjaDEgPSB1dGlsLnRyeUNhdGNoMTtcbnZhciB0cnlDYXRjaDIgPSB1dGlsLnRyeUNhdGNoMjtcbnZhciB0cnlDYXRjaEFwcGx5ID0gdXRpbC50cnlDYXRjaEFwcGx5O1xudmFyIFJhbmdlRXJyb3IgPSBlcnJvcnMuUmFuZ2VFcnJvcjtcbnZhciBUeXBlRXJyb3IgPSBlcnJvcnMuVHlwZUVycm9yO1xudmFyIENhbmNlbGxhdGlvbkVycm9yID0gZXJyb3JzLkNhbmNlbGxhdGlvbkVycm9yO1xudmFyIFRpbWVvdXRFcnJvciA9IGVycm9ycy5UaW1lb3V0RXJyb3I7XG52YXIgT3BlcmF0aW9uYWxFcnJvciA9IGVycm9ycy5PcGVyYXRpb25hbEVycm9yO1xudmFyIG9yaWdpbmF0ZXNGcm9tUmVqZWN0aW9uID0gZXJyb3JzLm9yaWdpbmF0ZXNGcm9tUmVqZWN0aW9uO1xudmFyIG1hcmtBc09yaWdpbmF0aW5nRnJvbVJlamVjdGlvbiA9IGVycm9ycy5tYXJrQXNPcmlnaW5hdGluZ0Zyb21SZWplY3Rpb247XG52YXIgY2FuQXR0YWNoID0gZXJyb3JzLmNhbkF0dGFjaDtcbnZhciB0aHJvd2VyID0gdXRpbC50aHJvd2VyO1xudmFyIGFwaVJlamVjdGlvbiA9IHJlcXVpcmUoXCIuL2Vycm9yc19hcGlfcmVqZWN0aW9uXCIpKFByb21pc2UpO1xuXG5cbnZhciBtYWtlU2VsZlJlc29sdXRpb25FcnJvciA9IGZ1bmN0aW9uIFByb21pc2UkX21ha2VTZWxmUmVzb2x1dGlvbkVycm9yKCkge1xuICAgIHJldHVybiBuZXcgVHlwZUVycm9yKFwiY2lyY3VsYXIgcHJvbWlzZSByZXNvbHV0aW9uIGNoYWluXCIpO1xufTtcblxuZnVuY3Rpb24gUHJvbWlzZShyZXNvbHZlcikge1xuICAgIGlmICh0eXBlb2YgcmVzb2x2ZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwidGhlIHByb21pc2UgY29uc3RydWN0b3IgcmVxdWlyZXMgYSByZXNvbHZlciBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IgIT09IFByb21pc2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcInRoZSBwcm9taXNlIGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBpbnZva2VkIGRpcmVjdGx5XCIpO1xuICAgIH1cbiAgICB0aGlzLl9iaXRGaWVsZCA9IDA7XG4gICAgdGhpcy5fZnVsZmlsbG1lbnRIYW5kbGVyMCA9IHZvaWQgMDtcbiAgICB0aGlzLl9yZWplY3Rpb25IYW5kbGVyMCA9IHZvaWQgMDtcbiAgICB0aGlzLl9wcm9taXNlMCA9IHZvaWQgMDtcbiAgICB0aGlzLl9yZWNlaXZlcjAgPSB2b2lkIDA7XG4gICAgdGhpcy5fc2V0dGxlZFZhbHVlID0gdm9pZCAwO1xuICAgIHRoaXMuX2JvdW5kVG8gPSB2b2lkIDA7XG4gICAgaWYgKHJlc29sdmVyICE9PSBJTlRFUk5BTCkgdGhpcy5fcmVzb2x2ZUZyb21SZXNvbHZlcihyZXNvbHZlcik7XG59XG5cbmZ1bmN0aW9uIHJldHVybkZpcnN0RWxlbWVudChlbGVtZW50cykge1xuICAgIHJldHVybiBlbGVtZW50c1swXTtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIFByb21pc2UkYmluZCh0aGlzQXJnKSB7XG4gICAgdmFyIG1heWJlUHJvbWlzZSA9IGNhc3QodGhpc0FyZywgdm9pZCAwKTtcbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHZhciBiaW5kZXIgPSBtYXliZVByb21pc2UudGhlbihmdW5jdGlvbih0aGlzQXJnKSB7XG4gICAgICAgICAgICByZXQuX3NldEJvdW5kVG8odGhpc0FyZyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgcCA9IFByb21pc2UuYWxsKFt0aGlzLCBiaW5kZXJdKS50aGVuKHJldHVybkZpcnN0RWxlbWVudCk7XG4gICAgICAgIHJldC5fZm9sbG93KHApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldC5fZm9sbG93KHRoaXMpO1xuICAgICAgICByZXQuX3NldEJvdW5kVG8odGhpc0FyZyk7XG4gICAgfVxuICAgIHJldC5fcHJvcGFnYXRlRnJvbSh0aGlzLCAyIHwgMSk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gUHJvbWlzZSR0b1N0cmluZygpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IFByb21pc2VdXCI7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5jYXVnaHQgPSBQcm9taXNlLnByb3RvdHlwZVtcImNhdGNoXCJdID1cbmZ1bmN0aW9uIFByb21pc2UkY2F0Y2goZm4pIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZiAobGVuID4gMSkge1xuICAgICAgICB2YXIgY2F0Y2hJbnN0YW5jZXMgPSBuZXcgQXJyYXkobGVuIC0gMSksXG4gICAgICAgICAgICBqID0gMCwgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbiAtIDE7ICsraSkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGNhdGNoSW5zdGFuY2VzW2orK10gPSBpdGVtO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY2F0Y2hGaWx0ZXJUeXBlRXJyb3IgPVxuICAgICAgICAgICAgICAgICAgICBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBIGNhdGNoIGZpbHRlciBtdXN0IGJlIGFuIGVycm9yIGNvbnN0cnVjdG9yIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICArIFwib3IgYSBmaWx0ZXIgZnVuY3Rpb25cIik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9hdHRhY2hFeHRyYVRyYWNlKGNhdGNoRmlsdGVyVHlwZUVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoY2F0Y2hGaWx0ZXJUeXBlRXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoSW5zdGFuY2VzLmxlbmd0aCA9IGo7XG4gICAgICAgIGZuID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICAgIHRoaXMuX3Jlc2V0VHJhY2UoKTtcbiAgICAgICAgdmFyIGNhdGNoRmlsdGVyID0gbmV3IENhdGNoRmlsdGVyKGNhdGNoSW5zdGFuY2VzLCBmbiwgdGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzLl90aGVuKHZvaWQgMCwgY2F0Y2hGaWx0ZXIuZG9GaWx0ZXIsIHZvaWQgMCxcbiAgICAgICAgICAgIGNhdGNoRmlsdGVyLCB2b2lkIDApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdGhlbih2b2lkIDAsIGZuLCB2b2lkIDAsIHZvaWQgMCwgdm9pZCAwKTtcbn07XG5cbmZ1bmN0aW9uIHJlZmxlY3QoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlLlByb21pc2VJbnNwZWN0aW9uKHRoaXMpO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5yZWZsZWN0ID0gZnVuY3Rpb24gUHJvbWlzZSRyZWZsZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl90aGVuKHJlZmxlY3QsIHJlZmxlY3QsIHZvaWQgMCwgdGhpcywgdm9pZCAwKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnRoZW4gPVxuZnVuY3Rpb24gUHJvbWlzZSR0aGVuKGRpZEZ1bGZpbGwsIGRpZFJlamVjdCwgZGlkUHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlbihkaWRGdWxmaWxsLCBkaWRSZWplY3QsIGRpZFByb2dyZXNzLFxuICAgICAgICB2b2lkIDAsIHZvaWQgMCk7XG59O1xuXG5cblByb21pc2UucHJvdG90eXBlLmRvbmUgPVxuZnVuY3Rpb24gUHJvbWlzZSRkb25lKGRpZEZ1bGZpbGwsIGRpZFJlamVjdCwgZGlkUHJvZ3Jlc3MpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3RoZW4oZGlkRnVsZmlsbCwgZGlkUmVqZWN0LCBkaWRQcm9ncmVzcyxcbiAgICAgICAgdm9pZCAwLCB2b2lkIDApO1xuICAgIHByb21pc2UuX3NldElzRmluYWwoKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnNwcmVhZCA9IGZ1bmN0aW9uIFByb21pc2Ukc3ByZWFkKGRpZEZ1bGZpbGwsIGRpZFJlamVjdCkge1xuICAgIHJldHVybiB0aGlzLl90aGVuKGRpZEZ1bGZpbGwsIGRpZFJlamVjdCwgdm9pZCAwLFxuICAgICAgICBBUFBMWSwgdm9pZCAwKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmlzQ2FuY2VsbGFibGUgPSBmdW5jdGlvbiBQcm9taXNlJGlzQ2FuY2VsbGFibGUoKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzUmVzb2x2ZWQoKSAmJlxuICAgICAgICB0aGlzLl9jYW5jZWxsYWJsZSgpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gUHJvbWlzZSR0b0pTT04oKSB7XG4gICAgdmFyIHJldCA9IHtcbiAgICAgICAgaXNGdWxmaWxsZWQ6IGZhbHNlLFxuICAgICAgICBpc1JlamVjdGVkOiBmYWxzZSxcbiAgICAgICAgZnVsZmlsbG1lbnRWYWx1ZTogdm9pZCAwLFxuICAgICAgICByZWplY3Rpb25SZWFzb246IHZvaWQgMFxuICAgIH07XG4gICAgaWYgKHRoaXMuaXNGdWxmaWxsZWQoKSkge1xuICAgICAgICByZXQuZnVsZmlsbG1lbnRWYWx1ZSA9IHRoaXMuX3NldHRsZWRWYWx1ZTtcbiAgICAgICAgcmV0LmlzRnVsZmlsbGVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNSZWplY3RlZCgpKSB7XG4gICAgICAgIHJldC5yZWplY3Rpb25SZWFzb24gPSB0aGlzLl9zZXR0bGVkVmFsdWU7XG4gICAgICAgIHJldC5pc1JlamVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmFsbCA9IGZ1bmN0aW9uIFByb21pc2UkYWxsKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZUFycmF5KHRoaXMpLnByb21pc2UoKTtcbn07XG5cblxuUHJvbWlzZS5pcyA9IGZ1bmN0aW9uIFByb21pc2UkSXModmFsKSB7XG4gICAgcmV0dXJuIHZhbCBpbnN0YW5jZW9mIFByb21pc2U7XG59O1xuXG5Qcm9taXNlLmFsbCA9IGZ1bmN0aW9uIFByb21pc2UkQWxsKHByb21pc2VzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlQXJyYXkocHJvbWlzZXMpLnByb21pc2UoKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gUHJvbWlzZSRfZXJyb3IoZm4pIHtcbiAgICByZXR1cm4gdGhpcy5jYXVnaHQob3JpZ2luYXRlc0Zyb21SZWplY3Rpb24sIGZuKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZXNvbHZlRnJvbVN5bmNWYWx1ZSA9XG5mdW5jdGlvbiBQcm9taXNlJF9yZXNvbHZlRnJvbVN5bmNWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgdGhpcy5fY2xlYW5WYWx1ZXMoKTtcbiAgICAgICAgdGhpcy5fc2V0UmVqZWN0ZWQoKTtcbiAgICAgICAgdGhpcy5fc2V0dGxlZFZhbHVlID0gdmFsdWUuZTtcbiAgICAgICAgdGhpcy5fZW5zdXJlUG9zc2libGVSZWplY3Rpb25IYW5kbGVkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IGNhc3QodmFsdWUsIHZvaWQgMCk7XG4gICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICB0aGlzLl9mb2xsb3cobWF5YmVQcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NsZWFuVmFsdWVzKCk7XG4gICAgICAgICAgICB0aGlzLl9zZXRGdWxmaWxsZWQoKTtcbiAgICAgICAgICAgIHRoaXMuX3NldHRsZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuUHJvbWlzZS5tZXRob2QgPSBmdW5jdGlvbiBQcm9taXNlJF9NZXRob2QoZm4pIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImZuIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIFByb21pc2UkX21ldGhvZCgpIHtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6IHZhbHVlID0gdHJ5Q2F0Y2gxKGZuLCB0aGlzLCB2b2lkIDApOyBicmVhaztcbiAgICAgICAgY2FzZSAxOiB2YWx1ZSA9IHRyeUNhdGNoMShmbiwgdGhpcywgYXJndW1lbnRzWzBdKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogdmFsdWUgPSB0cnlDYXRjaDIoZm4sIHRoaXMsIGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoO3ZhciBhcmdzID0gbmV3IEFycmF5KCRfbGVuKTsgZm9yKHZhciAkX2kgPSAwOyAkX2kgPCAkX2xlbjsgKyskX2kpIHthcmdzWyRfaV0gPSBhcmd1bWVudHNbJF9pXTt9XG4gICAgICAgICAgICB2YWx1ZSA9IHRyeUNhdGNoQXBwbHkoZm4sIGFyZ3MsIHRoaXMpOyBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgICAgICByZXQuX3NldFRyYWNlKHZvaWQgMCk7XG4gICAgICAgIHJldC5fcmVzb2x2ZUZyb21TeW5jVmFsdWUodmFsdWUpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG59O1xuXG5Qcm9taXNlLmF0dGVtcHQgPSBQcm9taXNlW1widHJ5XCJdID0gZnVuY3Rpb24gUHJvbWlzZSRfVHJ5KGZuLCBhcmdzLCBjdHgpIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGFwaVJlamVjdGlvbihcImZuIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgdmFyIHZhbHVlID0gaXNBcnJheShhcmdzKVxuICAgICAgICA/IHRyeUNhdGNoQXBwbHkoZm4sIGFyZ3MsIGN0eClcbiAgICAgICAgOiB0cnlDYXRjaDEoZm4sIGN0eCwgYXJncyk7XG5cbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIHJldC5fc2V0VHJhY2Uodm9pZCAwKTtcbiAgICByZXQuX3Jlc29sdmVGcm9tU3luY1ZhbHVlKHZhbHVlKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuUHJvbWlzZS5kZWZlciA9IFByb21pc2UucGVuZGluZyA9IGZ1bmN0aW9uIFByb21pc2UkRGVmZXIoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgcHJvbWlzZS5fc2V0VHJhY2Uodm9pZCAwKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2VSZXNvbHZlcihwcm9taXNlKTtcbn07XG5cblByb21pc2UuYmluZCA9IGZ1bmN0aW9uIFByb21pc2UkQmluZCh0aGlzQXJnKSB7XG4gICAgdmFyIG1heWJlUHJvbWlzZSA9IGNhc3QodGhpc0FyZywgdm9pZCAwKTtcbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIHJldC5fc2V0VHJhY2Uodm9pZCAwKTtcblxuICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHZhciBwID0gbWF5YmVQcm9taXNlLnRoZW4oZnVuY3Rpb24odGhpc0FyZykge1xuICAgICAgICAgICAgcmV0Ll9zZXRCb3VuZFRvKHRoaXNBcmcpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0Ll9mb2xsb3cocCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0Ll9zZXRCb3VuZFRvKHRoaXNBcmcpO1xuICAgICAgICByZXQuX3NldEZ1bGZpbGxlZCgpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufTtcblxuUHJvbWlzZS5jYXN0ID0gZnVuY3Rpb24gUHJvbWlzZSRfQ2FzdChvYmopIHtcbiAgICB2YXIgcmV0ID0gY2FzdChvYmosIHZvaWQgMCk7XG4gICAgaWYgKCEocmV0IGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgICAgdmFyIHZhbCA9IHJldDtcbiAgICAgICAgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgICAgICByZXQuX3NldFRyYWNlKHZvaWQgMCk7XG4gICAgICAgIHJldC5fc2V0RnVsZmlsbGVkKCk7XG4gICAgICAgIHJldC5fY2xlYW5WYWx1ZXMoKTtcbiAgICAgICAgcmV0Ll9zZXR0bGVkVmFsdWUgPSB2YWw7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59O1xuXG5Qcm9taXNlLnJlc29sdmUgPSBQcm9taXNlLmZ1bGZpbGxlZCA9IFByb21pc2UuY2FzdDtcblxuUHJvbWlzZS5yZWplY3QgPSBQcm9taXNlLnJlamVjdGVkID0gZnVuY3Rpb24gUHJvbWlzZSRSZWplY3QocmVhc29uKSB7XG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICByZXQuX3NldFRyYWNlKHZvaWQgMCk7XG4gICAgbWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uKHJlYXNvbik7XG4gICAgcmV0Ll9jbGVhblZhbHVlcygpO1xuICAgIHJldC5fc2V0UmVqZWN0ZWQoKTtcbiAgICByZXQuX3NldHRsZWRWYWx1ZSA9IHJlYXNvbjtcbiAgICBpZiAoIWNhbkF0dGFjaChyZWFzb24pKSB7XG4gICAgICAgIHZhciB0cmFjZSA9IG5ldyBFcnJvcihyZWFzb24gKyBcIlwiKTtcbiAgICAgICAgcmV0Ll9zZXRDYXJyaWVkU3RhY2tUcmFjZSh0cmFjZSk7XG4gICAgfVxuICAgIHJldC5fZW5zdXJlUG9zc2libGVSZWplY3Rpb25IYW5kbGVkKCk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2Uub25Qb3NzaWJseVVuaGFuZGxlZFJlamVjdGlvbiA9XG5mdW5jdGlvbiBQcm9taXNlJE9uUG9zc2libHlVbmhhbmRsZWRSZWplY3Rpb24oZm4pIHtcbiAgICAgICAgQ2FwdHVyZWRUcmFjZS5wb3NzaWJseVVuaGFuZGxlZFJlamVjdGlvbiA9IHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmbiA6IHZvaWQgMDtcbn07XG5cbnZhciB1bmhhbmRsZWRSZWplY3Rpb25IYW5kbGVkO1xuUHJvbWlzZS5vblVuaGFuZGxlZFJlamVjdGlvbkhhbmRsZWQgPVxuZnVuY3Rpb24gUHJvbWlzZSRvblVuaGFuZGxlZFJlamVjdGlvbkhhbmRsZWQoZm4pIHtcbiAgICB1bmhhbmRsZWRSZWplY3Rpb25IYW5kbGVkID0gdHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCIgPyBmbiA6IHZvaWQgMDtcbn07XG5cbnZhciBkZWJ1Z2dpbmcgPSBmYWxzZSB8fCAhIShcbiAgICB0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgIHR5cGVvZiBwcm9jZXNzLmV4ZWNQYXRoID09PSBcInN0cmluZ1wiICYmXG4gICAgdHlwZW9mIHByb2Nlc3MuZW52ID09PSBcIm9iamVjdFwiICYmXG4gICAgKHByb2Nlc3MuZW52W1wiQkxVRUJJUkRfREVCVUdcIl0gfHxcbiAgICAgICAgcHJvY2Vzcy5lbnZbXCJOT0RFX0VOVlwiXSA9PT0gXCJkZXZlbG9wbWVudFwiKVxuKTtcblxuXG5Qcm9taXNlLmxvbmdTdGFja1RyYWNlcyA9IGZ1bmN0aW9uIFByb21pc2UkTG9uZ1N0YWNrVHJhY2VzKCkge1xuICAgIGlmIChhc3luYy5oYXZlSXRlbXNRdWV1ZWQoKSAmJlxuICAgICAgICBkZWJ1Z2dpbmcgPT09IGZhbHNlXG4gICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2Fubm90IGVuYWJsZSBsb25nIHN0YWNrIHRyYWNlcyBhZnRlciBwcm9taXNlcyBoYXZlIGJlZW4gY3JlYXRlZFwiKTtcbiAgICB9XG4gICAgZGVidWdnaW5nID0gQ2FwdHVyZWRUcmFjZS5pc1N1cHBvcnRlZCgpO1xufTtcblxuUHJvbWlzZS5oYXNMb25nU3RhY2tUcmFjZXMgPSBmdW5jdGlvbiBQcm9taXNlJEhhc0xvbmdTdGFja1RyYWNlcygpIHtcbiAgICByZXR1cm4gZGVidWdnaW5nICYmIENhcHR1cmVkVHJhY2UuaXNTdXBwb3J0ZWQoKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl90aGVuID1cbmZ1bmN0aW9uIFByb21pc2UkX3RoZW4oXG4gICAgZGlkRnVsZmlsbCxcbiAgICBkaWRSZWplY3QsXG4gICAgZGlkUHJvZ3Jlc3MsXG4gICAgcmVjZWl2ZXIsXG4gICAgaW50ZXJuYWxEYXRhXG4pIHtcbiAgICB2YXIgaGF2ZUludGVybmFsRGF0YSA9IGludGVybmFsRGF0YSAhPT0gdm9pZCAwO1xuICAgIHZhciByZXQgPSBoYXZlSW50ZXJuYWxEYXRhID8gaW50ZXJuYWxEYXRhIDogbmV3IFByb21pc2UoSU5URVJOQUwpO1xuXG4gICAgaWYgKCFoYXZlSW50ZXJuYWxEYXRhKSB7XG4gICAgICAgIGlmIChkZWJ1Z2dpbmcpIHtcbiAgICAgICAgICAgIHZhciBoYXZlU2FtZUNvbnRleHQgPSB0aGlzLl9wZWVrQ29udGV4dCgpID09PSB0aGlzLl90cmFjZVBhcmVudDtcbiAgICAgICAgICAgIHJldC5fdHJhY2VQYXJlbnQgPSBoYXZlU2FtZUNvbnRleHQgPyB0aGlzLl90cmFjZVBhcmVudCA6IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0Ll9wcm9wYWdhdGVGcm9tKHRoaXMsIDcpO1xuICAgIH1cblxuICAgIHZhciBjYWxsYmFja0luZGV4ID1cbiAgICAgICAgdGhpcy5fYWRkQ2FsbGJhY2tzKGRpZEZ1bGZpbGwsIGRpZFJlamVjdCwgZGlkUHJvZ3Jlc3MsIHJldCwgcmVjZWl2ZXIpO1xuXG4gICAgaWYgKHRoaXMuaXNSZXNvbHZlZCgpKSB7XG4gICAgICAgIGFzeW5jLmludm9rZSh0aGlzLl9xdWV1ZVNldHRsZUF0LCB0aGlzLCBjYWxsYmFja0luZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2xlbmd0aCA9IGZ1bmN0aW9uIFByb21pc2UkX2xlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYml0RmllbGQgJiAyNjIxNDM7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faXNGb2xsb3dpbmdPckZ1bGZpbGxlZE9yUmVqZWN0ZWQgPVxuZnVuY3Rpb24gUHJvbWlzZSRfaXNGb2xsb3dpbmdPckZ1bGZpbGxlZE9yUmVqZWN0ZWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDkzOTUyNDA5NikgPiAwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2lzRm9sbG93aW5nID0gZnVuY3Rpb24gUHJvbWlzZSRfaXNGb2xsb3dpbmcoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDUzNjg3MDkxMikgPT09IDUzNjg3MDkxMjtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRMZW5ndGggPSBmdW5jdGlvbiBQcm9taXNlJF9zZXRMZW5ndGgobGVuKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSAodGhpcy5fYml0RmllbGQgJiAtMjYyMTQ0KSB8XG4gICAgICAgIChsZW4gJiAyNjIxNDMpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldEZ1bGZpbGxlZCA9IGZ1bmN0aW9uIFByb21pc2UkX3NldEZ1bGZpbGxlZCgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgMjY4NDM1NDU2O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldFJlamVjdGVkID0gZnVuY3Rpb24gUHJvbWlzZSRfc2V0UmVqZWN0ZWQoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDEzNDIxNzcyODtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRGb2xsb3dpbmcgPSBmdW5jdGlvbiBQcm9taXNlJF9zZXRGb2xsb3dpbmcoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDUzNjg3MDkxMjtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRJc0ZpbmFsID0gZnVuY3Rpb24gUHJvbWlzZSRfc2V0SXNGaW5hbCgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgMzM1NTQ0MzI7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faXNGaW5hbCA9IGZ1bmN0aW9uIFByb21pc2UkX2lzRmluYWwoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDMzNTU0NDMyKSA+IDA7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fY2FuY2VsbGFibGUgPSBmdW5jdGlvbiBQcm9taXNlJF9jYW5jZWxsYWJsZSgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgNjcxMDg4NjQpID4gMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRDYW5jZWxsYWJsZSA9IGZ1bmN0aW9uIFByb21pc2UkX3NldENhbmNlbGxhYmxlKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCA2NzEwODg2NDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl91bnNldENhbmNlbGxhYmxlID0gZnVuY3Rpb24gUHJvbWlzZSRfdW5zZXRDYW5jZWxsYWJsZSgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkICYgKH42NzEwODg2NCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQgPVxuZnVuY3Rpb24gUHJvbWlzZSRfc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDIwOTcxNTI7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fdW5zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCA9XG5mdW5jdGlvbiBQcm9taXNlJF91bnNldFJlamVjdGlvbklzVW5oYW5kbGVkKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgJiAofjIwOTcxNTIpO1xuICAgIGlmICh0aGlzLl9pc1VuaGFuZGxlZFJlamVjdGlvbk5vdGlmaWVkKCkpIHtcbiAgICAgICAgdGhpcy5fdW5zZXRVbmhhbmRsZWRSZWplY3Rpb25Jc05vdGlmaWVkKCk7XG4gICAgICAgIHRoaXMuX25vdGlmeVVuaGFuZGxlZFJlamVjdGlvbklzSGFuZGxlZCgpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc1JlamVjdGlvblVuaGFuZGxlZCA9XG5mdW5jdGlvbiBQcm9taXNlJF9pc1JlamVjdGlvblVuaGFuZGxlZCgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgMjA5NzE1MikgPiAwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldFVuaGFuZGxlZFJlamVjdGlvbklzTm90aWZpZWQgPVxuZnVuY3Rpb24gUHJvbWlzZSRfc2V0VW5oYW5kbGVkUmVqZWN0aW9uSXNOb3RpZmllZCgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgNTI0Mjg4O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Vuc2V0VW5oYW5kbGVkUmVqZWN0aW9uSXNOb3RpZmllZCA9XG5mdW5jdGlvbiBQcm9taXNlJF91bnNldFVuaGFuZGxlZFJlamVjdGlvbklzTm90aWZpZWQoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCAmICh+NTI0Mjg4KTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc1VuaGFuZGxlZFJlamVjdGlvbk5vdGlmaWVkID1cbmZ1bmN0aW9uIFByb21pc2UkX2lzVW5oYW5kbGVkUmVqZWN0aW9uTm90aWZpZWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDUyNDI4OCkgPiAwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldENhcnJpZWRTdGFja1RyYWNlID1cbmZ1bmN0aW9uIFByb21pc2UkX3NldENhcnJpZWRTdGFja1RyYWNlKGNhcHR1cmVkVHJhY2UpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgMTA0ODU3NjtcbiAgICB0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXIwID0gY2FwdHVyZWRUcmFjZTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl91bnNldENhcnJpZWRTdGFja1RyYWNlID1cbmZ1bmN0aW9uIFByb21pc2UkX3Vuc2V0Q2FycmllZFN0YWNrVHJhY2UoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCAmICh+MTA0ODU3Nik7XG4gICAgdGhpcy5fZnVsZmlsbG1lbnRIYW5kbGVyMCA9IHZvaWQgMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc0NhcnJ5aW5nU3RhY2tUcmFjZSA9XG5mdW5jdGlvbiBQcm9taXNlJF9pc0NhcnJ5aW5nU3RhY2tUcmFjZSgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgMTA0ODU3NikgPiAwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2dldENhcnJpZWRTdGFja1RyYWNlID1cbmZ1bmN0aW9uIFByb21pc2UkX2dldENhcnJpZWRTdGFja1RyYWNlKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0NhcnJ5aW5nU3RhY2tUcmFjZSgpXG4gICAgICAgID8gdGhpcy5fZnVsZmlsbG1lbnRIYW5kbGVyMFxuICAgICAgICA6IHZvaWQgMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZWNlaXZlckF0ID0gZnVuY3Rpb24gUHJvbWlzZSRfcmVjZWl2ZXJBdChpbmRleCkge1xuICAgIHZhciByZXQgPSBpbmRleCA9PT0gMFxuICAgICAgICA/IHRoaXMuX3JlY2VpdmVyMFxuICAgICAgICA6IHRoaXNbKGluZGV4IDw8IDIpICsgaW5kZXggLSA1ICsgNF07XG4gICAgaWYgKHRoaXMuX2lzQm91bmQoKSAmJiByZXQgPT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm91bmRUbztcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9wcm9taXNlQXQgPSBmdW5jdGlvbiBQcm9taXNlJF9wcm9taXNlQXQoaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXggPT09IDBcbiAgICAgICAgPyB0aGlzLl9wcm9taXNlMFxuICAgICAgICA6IHRoaXNbKGluZGV4IDw8IDIpICsgaW5kZXggLSA1ICsgM107XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fZnVsZmlsbG1lbnRIYW5kbGVyQXQgPVxuZnVuY3Rpb24gUHJvbWlzZSRfZnVsZmlsbG1lbnRIYW5kbGVyQXQoaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXggPT09IDBcbiAgICAgICAgPyB0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXIwXG4gICAgICAgIDogdGhpc1soaW5kZXggPDwgMikgKyBpbmRleCAtIDUgKyAwXTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZWplY3Rpb25IYW5kbGVyQXQgPVxuZnVuY3Rpb24gUHJvbWlzZSRfcmVqZWN0aW9uSGFuZGxlckF0KGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4ID09PSAwXG4gICAgICAgID8gdGhpcy5fcmVqZWN0aW9uSGFuZGxlcjBcbiAgICAgICAgOiB0aGlzWyhpbmRleCA8PCAyKSArIGluZGV4IC0gNSArIDFdO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2FkZENhbGxiYWNrcyA9IGZ1bmN0aW9uIFByb21pc2UkX2FkZENhbGxiYWNrcyhcbiAgICBmdWxmaWxsLFxuICAgIHJlamVjdCxcbiAgICBwcm9ncmVzcyxcbiAgICBwcm9taXNlLFxuICAgIHJlY2VpdmVyXG4pIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLl9sZW5ndGgoKTtcblxuICAgIGlmIChpbmRleCA+PSAyNjIxNDMgLSA1KSB7XG4gICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5fc2V0TGVuZ3RoKDApO1xuICAgIH1cblxuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICB0aGlzLl9wcm9taXNlMCA9IHByb21pc2U7XG4gICAgICAgIGlmIChyZWNlaXZlciAhPT0gdm9pZCAwKSB0aGlzLl9yZWNlaXZlcjAgPSByZWNlaXZlcjtcbiAgICAgICAgaWYgKHR5cGVvZiBmdWxmaWxsID09PSBcImZ1bmN0aW9uXCIgJiYgIXRoaXMuX2lzQ2FycnlpbmdTdGFja1RyYWNlKCkpXG4gICAgICAgICAgICB0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXIwID0gZnVsZmlsbDtcbiAgICAgICAgaWYgKHR5cGVvZiByZWplY3QgPT09IFwiZnVuY3Rpb25cIikgdGhpcy5fcmVqZWN0aW9uSGFuZGxlcjAgPSByZWplY3Q7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvZ3Jlc3MgPT09IFwiZnVuY3Rpb25cIikgdGhpcy5fcHJvZ3Jlc3NIYW5kbGVyMCA9IHByb2dyZXNzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBiYXNlID0gKGluZGV4IDw8IDIpICsgaW5kZXggLSA1O1xuICAgICAgICB0aGlzW2Jhc2UgKyAzXSA9IHByb21pc2U7XG4gICAgICAgIHRoaXNbYmFzZSArIDRdID0gcmVjZWl2ZXI7XG4gICAgICAgIHRoaXNbYmFzZSArIDBdID0gdHlwZW9mIGZ1bGZpbGwgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZ1bGZpbGwgOiB2b2lkIDA7XG4gICAgICAgIHRoaXNbYmFzZSArIDFdID0gdHlwZW9mIHJlamVjdCA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcmVqZWN0IDogdm9pZCAwO1xuICAgICAgICB0aGlzW2Jhc2UgKyAyXSA9IHR5cGVvZiBwcm9ncmVzcyA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcHJvZ3Jlc3MgOiB2b2lkIDA7XG4gICAgfVxuICAgIHRoaXMuX3NldExlbmd0aChpbmRleCArIDEpO1xuICAgIHJldHVybiBpbmRleDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRQcm94eUhhbmRsZXJzID1cbmZ1bmN0aW9uIFByb21pc2UkX3NldFByb3h5SGFuZGxlcnMocmVjZWl2ZXIsIHByb21pc2VTbG90VmFsdWUpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLl9sZW5ndGgoKTtcblxuICAgIGlmIChpbmRleCA+PSAyNjIxNDMgLSA1KSB7XG4gICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5fc2V0TGVuZ3RoKDApO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgdGhpcy5fcHJvbWlzZTAgPSBwcm9taXNlU2xvdFZhbHVlO1xuICAgICAgICB0aGlzLl9yZWNlaXZlcjAgPSByZWNlaXZlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgYmFzZSA9IChpbmRleCA8PCAyKSArIGluZGV4IC0gNTtcbiAgICAgICAgdGhpc1tiYXNlICsgM10gPSBwcm9taXNlU2xvdFZhbHVlO1xuICAgICAgICB0aGlzW2Jhc2UgKyA0XSA9IHJlY2VpdmVyO1xuICAgICAgICB0aGlzW2Jhc2UgKyAwXSA9XG4gICAgICAgIHRoaXNbYmFzZSArIDFdID1cbiAgICAgICAgdGhpc1tiYXNlICsgMl0gPSB2b2lkIDA7XG4gICAgfVxuICAgIHRoaXMuX3NldExlbmd0aChpbmRleCArIDEpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Byb3h5UHJvbWlzZUFycmF5ID1cbmZ1bmN0aW9uIFByb21pc2UkX3Byb3h5UHJvbWlzZUFycmF5KHByb21pc2VBcnJheSwgaW5kZXgpIHtcbiAgICB0aGlzLl9zZXRQcm94eUhhbmRsZXJzKHByb21pc2VBcnJheSwgaW5kZXgpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Byb3h5UHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UkX3Byb3h5UHJvbWlzZShwcm9taXNlKSB7XG4gICAgcHJvbWlzZS5fc2V0UHJveGllZCgpO1xuICAgIHRoaXMuX3NldFByb3h5SGFuZGxlcnMocHJvbWlzZSwgLTE1KTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRCb3VuZFRvID0gZnVuY3Rpb24gUHJvbWlzZSRfc2V0Qm91bmRUbyhvYmopIHtcbiAgICBpZiAob2JqICE9PSB2b2lkIDApIHtcbiAgICAgICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDgzODg2MDg7XG4gICAgICAgIHRoaXMuX2JvdW5kVG8gPSBvYmo7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCAmICh+ODM4ODYwOCk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2lzQm91bmQgPSBmdW5jdGlvbiBQcm9taXNlJF9pc0JvdW5kKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiA4Mzg4NjA4KSA9PT0gODM4ODYwODtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZXNvbHZlRnJvbVJlc29sdmVyID1cbmZ1bmN0aW9uIFByb21pc2UkX3Jlc29sdmVGcm9tUmVzb2x2ZXIocmVzb2x2ZXIpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gICAgdGhpcy5fc2V0VHJhY2Uodm9pZCAwKTtcbiAgICB0aGlzLl9wdXNoQ29udGV4dCgpO1xuXG4gICAgZnVuY3Rpb24gUHJvbWlzZSRfcmVzb2x2ZXIodmFsKSB7XG4gICAgICAgIGlmIChwcm9taXNlLl90cnlGb2xsb3codmFsKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHByb21pc2UuX2Z1bGZpbGwodmFsKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gUHJvbWlzZSRfcmVqZWN0ZXIodmFsKSB7XG4gICAgICAgIHZhciB0cmFjZSA9IGNhbkF0dGFjaCh2YWwpID8gdmFsIDogbmV3IEVycm9yKHZhbCArIFwiXCIpO1xuICAgICAgICBwcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHRyYWNlKTtcbiAgICAgICAgbWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uKHZhbCk7XG4gICAgICAgIHByb21pc2UuX3JlamVjdCh2YWwsIHRyYWNlID09PSB2YWwgPyB2b2lkIDAgOiB0cmFjZSk7XG4gICAgfVxuICAgIHZhciByID0gdHJ5Q2F0Y2gyKHJlc29sdmVyLCB2b2lkIDAsIFByb21pc2UkX3Jlc29sdmVyLCBQcm9taXNlJF9yZWplY3Rlcik7XG4gICAgdGhpcy5fcG9wQ29udGV4dCgpO1xuXG4gICAgaWYgKHIgIT09IHZvaWQgMCAmJiByID09PSBlcnJvck9iaikge1xuICAgICAgICB2YXIgZSA9IHIuZTtcbiAgICAgICAgdmFyIHRyYWNlID0gY2FuQXR0YWNoKGUpID8gZSA6IG5ldyBFcnJvcihlICsgXCJcIik7XG4gICAgICAgIHByb21pc2UuX3JlamVjdChlLCB0cmFjZSk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NwcmVhZFNsb3dDYXNlID1cbmZ1bmN0aW9uIFByb21pc2UkX3NwcmVhZFNsb3dDYXNlKHRhcmdldEZuLCBwcm9taXNlLCB2YWx1ZXMsIGJvdW5kVG8pIHtcbiAgICB2YXIgcHJvbWlzZUZvckFsbCA9IG5ldyBQcm9taXNlQXJyYXkodmFsdWVzKS5wcm9taXNlKCk7XG4gICAgdmFyIHByb21pc2UyID0gcHJvbWlzZUZvckFsbC5fdGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldEZuLmFwcGx5KGJvdW5kVG8sIGFyZ3VtZW50cyk7XG4gICAgfSwgdm9pZCAwLCB2b2lkIDAsIEFQUExZLCB2b2lkIDApO1xuICAgIHByb21pc2UuX2ZvbGxvdyhwcm9taXNlMik7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fY2FsbFNwcmVhZCA9XG5mdW5jdGlvbiBQcm9taXNlJF9jYWxsU3ByZWFkKGhhbmRsZXIsIHByb21pc2UsIHZhbHVlKSB7XG4gICAgdmFyIGJvdW5kVG8gPSB0aGlzLl9ib3VuZFRvO1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChjYXN0KHZhbHVlW2ldLCB2b2lkIDApIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NwcmVhZFNsb3dDYXNlKGhhbmRsZXIsIHByb21pc2UsIHZhbHVlLCBib3VuZFRvKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvbWlzZS5fcHVzaENvbnRleHQoKTtcbiAgICByZXR1cm4gdHJ5Q2F0Y2hBcHBseShoYW5kbGVyLCB2YWx1ZSwgYm91bmRUbyk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fY2FsbEhhbmRsZXIgPVxuZnVuY3Rpb24gUHJvbWlzZSRfY2FsbEhhbmRsZXIoXG4gICAgaGFuZGxlciwgcmVjZWl2ZXIsIHByb21pc2UsIHZhbHVlKSB7XG4gICAgdmFyIHg7XG4gICAgaWYgKHJlY2VpdmVyID09PSBBUFBMWSAmJiAhdGhpcy5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgeCA9IHRoaXMuX2NhbGxTcHJlYWQoaGFuZGxlciwgcHJvbWlzZSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2UuX3B1c2hDb250ZXh0KCk7XG4gICAgICAgIHggPSB0cnlDYXRjaDEoaGFuZGxlciwgcmVjZWl2ZXIsIHZhbHVlKTtcbiAgICB9XG4gICAgcHJvbWlzZS5fcG9wQ29udGV4dCgpO1xuICAgIHJldHVybiB4O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldHRsZVByb21pc2VGcm9tSGFuZGxlciA9XG5mdW5jdGlvbiBQcm9taXNlJF9zZXR0bGVQcm9taXNlRnJvbUhhbmRsZXIoXG4gICAgaGFuZGxlciwgcmVjZWl2ZXIsIHZhbHVlLCBwcm9taXNlXG4pIHtcbiAgICBpZiAoIShwcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgICAgaGFuZGxlci5jYWxsKHJlY2VpdmVyLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHggPSB0aGlzLl9jYWxsSGFuZGxlcihoYW5kbGVyLCByZWNlaXZlciwgcHJvbWlzZSwgdmFsdWUpO1xuICAgIGlmIChwcm9taXNlLl9pc0ZvbGxvd2luZygpKSByZXR1cm47XG5cbiAgICBpZiAoeCA9PT0gZXJyb3JPYmogfHwgeCA9PT0gcHJvbWlzZSB8fCB4ID09PSBORVhUX0ZJTFRFUikge1xuICAgICAgICB2YXIgZXJyID0geCA9PT0gcHJvbWlzZVxuICAgICAgICAgICAgICAgICAgICA/IG1ha2VTZWxmUmVzb2x1dGlvbkVycm9yKClcbiAgICAgICAgICAgICAgICAgICAgOiB4LmU7XG4gICAgICAgIHZhciB0cmFjZSA9IGNhbkF0dGFjaChlcnIpID8gZXJyIDogbmV3IEVycm9yKGVyciArIFwiXCIpO1xuICAgICAgICBpZiAoeCAhPT0gTkVYVF9GSUxURVIpIHByb21pc2UuX2F0dGFjaEV4dHJhVHJhY2UodHJhY2UpO1xuICAgICAgICBwcm9taXNlLl9yZWplY3RVbmNoZWNrZWQoZXJyLCB0cmFjZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNhc3RWYWx1ZSA9IGNhc3QoeCwgcHJvbWlzZSk7XG4gICAgICAgIGlmIChjYXN0VmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICBpZiAoY2FzdFZhbHVlLmlzUmVqZWN0ZWQoKSAmJlxuICAgICAgICAgICAgICAgICFjYXN0VmFsdWUuX2lzQ2FycnlpbmdTdGFja1RyYWNlKCkgJiZcbiAgICAgICAgICAgICAgICAhY2FuQXR0YWNoKGNhc3RWYWx1ZS5fc2V0dGxlZFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhciB0cmFjZSA9IG5ldyBFcnJvcihjYXN0VmFsdWUuX3NldHRsZWRWYWx1ZSArIFwiXCIpO1xuICAgICAgICAgICAgICAgIHByb21pc2UuX2F0dGFjaEV4dHJhVHJhY2UodHJhY2UpO1xuICAgICAgICAgICAgICAgIGNhc3RWYWx1ZS5fc2V0Q2FycmllZFN0YWNrVHJhY2UodHJhY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvbWlzZS5fZm9sbG93KGNhc3RWYWx1ZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9wcm9wYWdhdGVGcm9tKGNhc3RWYWx1ZSwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlLl9mdWxmaWxsVW5jaGVja2VkKHgpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2ZvbGxvdyA9XG5mdW5jdGlvbiBQcm9taXNlJF9mb2xsb3cocHJvbWlzZSkge1xuICAgIHRoaXMuX3NldEZvbGxvd2luZygpO1xuXG4gICAgaWYgKHByb21pc2UuaXNQZW5kaW5nKCkpIHtcbiAgICAgICAgdGhpcy5fcHJvcGFnYXRlRnJvbShwcm9taXNlLCAxKTtcbiAgICAgICAgcHJvbWlzZS5fcHJveHlQcm9taXNlKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAocHJvbWlzZS5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgIHRoaXMuX2Z1bGZpbGxVbmNoZWNrZWQocHJvbWlzZS5fc2V0dGxlZFZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZWplY3RVbmNoZWNrZWQocHJvbWlzZS5fc2V0dGxlZFZhbHVlLFxuICAgICAgICAgICAgcHJvbWlzZS5fZ2V0Q2FycmllZFN0YWNrVHJhY2UoKSk7XG4gICAgfVxuXG4gICAgaWYgKHByb21pc2UuX2lzUmVqZWN0aW9uVW5oYW5kbGVkKCkpIHByb21pc2UuX3Vuc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQoKTtcblxuICAgIGlmIChkZWJ1Z2dpbmcgJiZcbiAgICAgICAgcHJvbWlzZS5fdHJhY2VQYXJlbnQgPT0gbnVsbCkge1xuICAgICAgICBwcm9taXNlLl90cmFjZVBhcmVudCA9IHRoaXM7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3RyeUZvbGxvdyA9XG5mdW5jdGlvbiBQcm9taXNlJF90cnlGb2xsb3codmFsdWUpIHtcbiAgICBpZiAodGhpcy5faXNGb2xsb3dpbmdPckZ1bGZpbGxlZE9yUmVqZWN0ZWQoKSB8fFxuICAgICAgICB2YWx1ZSA9PT0gdGhpcykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0KHZhbHVlLCB2b2lkIDApO1xuICAgIGlmICghKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5fZm9sbG93KG1heWJlUHJvbWlzZSk7XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcmVzZXRUcmFjZSA9IGZ1bmN0aW9uIFByb21pc2UkX3Jlc2V0VHJhY2UoKSB7XG4gICAgaWYgKGRlYnVnZ2luZykge1xuICAgICAgICB0aGlzLl90cmFjZSA9IG5ldyBDYXB0dXJlZFRyYWNlKHRoaXMuX3BlZWtDb250ZXh0KCkgPT09IHZvaWQgMCk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldFRyYWNlID0gZnVuY3Rpb24gUHJvbWlzZSRfc2V0VHJhY2UocGFyZW50KSB7XG4gICAgaWYgKGRlYnVnZ2luZykge1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuX3BlZWtDb250ZXh0KCk7XG4gICAgICAgIHRoaXMuX3RyYWNlUGFyZW50ID0gY29udGV4dDtcbiAgICAgICAgdmFyIGlzVG9wTGV2ZWwgPSBjb250ZXh0ID09PSB2b2lkIDA7XG4gICAgICAgIGlmIChwYXJlbnQgIT09IHZvaWQgMCAmJlxuICAgICAgICAgICAgcGFyZW50Ll90cmFjZVBhcmVudCA9PT0gY29udGV4dCkge1xuICAgICAgICAgICAgdGhpcy5fdHJhY2UgPSBwYXJlbnQuX3RyYWNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdHJhY2UgPSBuZXcgQ2FwdHVyZWRUcmFjZShpc1RvcExldmVsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9hdHRhY2hFeHRyYVRyYWNlID1cbmZ1bmN0aW9uIFByb21pc2UkX2F0dGFjaEV4dHJhVHJhY2UoZXJyb3IpIHtcbiAgICBpZiAoZGVidWdnaW5nKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gdGhpcztcbiAgICAgICAgdmFyIHN0YWNrID0gZXJyb3Iuc3RhY2s7XG4gICAgICAgIHN0YWNrID0gdHlwZW9mIHN0YWNrID09PSBcInN0cmluZ1wiID8gc3RhY2suc3BsaXQoXCJcXG5cIikgOiBbXTtcbiAgICAgICAgQ2FwdHVyZWRUcmFjZS5wcm90ZWN0RXJyb3JNZXNzYWdlTmV3bGluZXMoc3RhY2spO1xuICAgICAgICB2YXIgaGVhZGVyTGluZUNvdW50ID0gMTtcbiAgICAgICAgdmFyIGNvbWJpbmVkVHJhY2VzID0gMTtcbiAgICAgICAgd2hpbGUocHJvbWlzZSAhPSBudWxsICYmXG4gICAgICAgICAgICBwcm9taXNlLl90cmFjZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzdGFjayA9IENhcHR1cmVkVHJhY2UuY29tYmluZShcbiAgICAgICAgICAgICAgICBzdGFjayxcbiAgICAgICAgICAgICAgICBwcm9taXNlLl90cmFjZS5zdGFjay5zcGxpdChcIlxcblwiKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHByb21pc2UgPSBwcm9taXNlLl90cmFjZVBhcmVudDtcbiAgICAgICAgICAgIGNvbWJpbmVkVHJhY2VzKys7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3RhY2tUcmFjZUxpbWl0ID0gRXJyb3Iuc3RhY2tUcmFjZUxpbWl0IHx8IDEwO1xuICAgICAgICB2YXIgbWF4ID0gKHN0YWNrVHJhY2VMaW1pdCArIGhlYWRlckxpbmVDb3VudCkgKiBjb21iaW5lZFRyYWNlcztcbiAgICAgICAgdmFyIGxlbiA9IHN0YWNrLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbiA+IG1heCkge1xuICAgICAgICAgICAgc3RhY2subGVuZ3RoID0gbWF4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxlbiA+IDApXG4gICAgICAgICAgICBzdGFja1swXSA9IHN0YWNrWzBdLnNwbGl0KFwiXFx1MDAwMlxcdTAwMDBcXHUwMDAxXCIpLmpvaW4oXCJcXG5cIik7XG5cbiAgICAgICAgaWYgKHN0YWNrLmxlbmd0aCA8PSBoZWFkZXJMaW5lQ291bnQpIHtcbiAgICAgICAgICAgIGVycm9yLnN0YWNrID0gXCIoTm8gc3RhY2sgdHJhY2UpXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvci5zdGFjayA9IHN0YWNrLmpvaW4oXCJcXG5cIik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fY2xlYW5WYWx1ZXMgPSBmdW5jdGlvbiBQcm9taXNlJF9jbGVhblZhbHVlcygpIHtcbiAgICBpZiAodGhpcy5fY2FuY2VsbGFibGUoKSkge1xuICAgICAgICB0aGlzLl9jYW5jZWxsYXRpb25QYXJlbnQgPSB2b2lkIDA7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Byb3BhZ2F0ZUZyb20gPVxuZnVuY3Rpb24gUHJvbWlzZSRfcHJvcGFnYXRlRnJvbShwYXJlbnQsIGZsYWdzKSB7XG4gICAgaWYgKChmbGFncyAmIDEpID4gMCAmJiBwYXJlbnQuX2NhbmNlbGxhYmxlKCkpIHtcbiAgICAgICAgdGhpcy5fc2V0Q2FuY2VsbGFibGUoKTtcbiAgICAgICAgdGhpcy5fY2FuY2VsbGF0aW9uUGFyZW50ID0gcGFyZW50O1xuICAgIH1cbiAgICBpZiAoKGZsYWdzICYgNCkgPiAwKSB7XG4gICAgICAgIHRoaXMuX3NldEJvdW5kVG8ocGFyZW50Ll9ib3VuZFRvKTtcbiAgICB9XG4gICAgaWYgKChmbGFncyAmIDIpID4gMCkge1xuICAgICAgICB0aGlzLl9zZXRUcmFjZShwYXJlbnQpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9mdWxmaWxsID0gZnVuY3Rpb24gUHJvbWlzZSRfZnVsZmlsbCh2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9pc0ZvbGxvd2luZ09yRnVsZmlsbGVkT3JSZWplY3RlZCgpKSByZXR1cm47XG4gICAgdGhpcy5fZnVsZmlsbFVuY2hlY2tlZCh2YWx1ZSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcmVqZWN0ID1cbmZ1bmN0aW9uIFByb21pc2UkX3JlamVjdChyZWFzb24sIGNhcnJpZWRTdGFja1RyYWNlKSB7XG4gICAgaWYgKHRoaXMuX2lzRm9sbG93aW5nT3JGdWxmaWxsZWRPclJlamVjdGVkKCkpIHJldHVybjtcbiAgICB0aGlzLl9yZWplY3RVbmNoZWNrZWQocmVhc29uLCBjYXJyaWVkU3RhY2tUcmFjZSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0dGxlUHJvbWlzZUF0ID0gZnVuY3Rpb24gUHJvbWlzZSRfc2V0dGxlUHJvbWlzZUF0KGluZGV4KSB7XG4gICAgdmFyIGhhbmRsZXIgPSB0aGlzLmlzRnVsZmlsbGVkKClcbiAgICAgICAgPyB0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXJBdChpbmRleClcbiAgICAgICAgOiB0aGlzLl9yZWplY3Rpb25IYW5kbGVyQXQoaW5kZXgpO1xuXG4gICAgdmFyIHZhbHVlID0gdGhpcy5fc2V0dGxlZFZhbHVlO1xuICAgIHZhciByZWNlaXZlciA9IHRoaXMuX3JlY2VpdmVyQXQoaW5kZXgpO1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcHJvbWlzZUF0KGluZGV4KTtcblxuICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRoaXMuX3NldHRsZVByb21pc2VGcm9tSGFuZGxlcihoYW5kbGVyLCByZWNlaXZlciwgdmFsdWUsIHByb21pc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBkb25lID0gZmFsc2U7XG4gICAgICAgIHZhciBpc0Z1bGZpbGxlZCA9IHRoaXMuaXNGdWxmaWxsZWQoKTtcbiAgICAgICAgaWYgKHJlY2VpdmVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGlmIChyZWNlaXZlciBpbnN0YW5jZW9mIFByb21pc2UgJiZcbiAgICAgICAgICAgICAgICByZWNlaXZlci5faXNQcm94aWVkKCkpIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlci5fdW5zZXRQcm94aWVkKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNGdWxmaWxsZWQpIHJlY2VpdmVyLl9mdWxmaWxsVW5jaGVja2VkKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBlbHNlIHJlY2VpdmVyLl9yZWplY3RVbmNoZWNrZWQodmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dldENhcnJpZWRTdGFja1RyYWNlKCkpO1xuICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWNlaXZlciBpbnN0YW5jZW9mIFByb21pc2VBcnJheSkge1xuICAgICAgICAgICAgICAgIGlmIChpc0Z1bGZpbGxlZCkgcmVjZWl2ZXIuX3Byb21pc2VGdWxmaWxsZWQodmFsdWUsIHByb21pc2UpO1xuICAgICAgICAgICAgICAgIGVsc2UgcmVjZWl2ZXIuX3Byb21pc2VSZWplY3RlZCh2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc0Z1bGZpbGxlZCkgcHJvbWlzZS5fZnVsZmlsbCh2YWx1ZSk7XG4gICAgICAgICAgICBlbHNlIHByb21pc2UuX3JlamVjdCh2YWx1ZSwgdGhpcy5fZ2V0Q2FycmllZFN0YWNrVHJhY2UoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPj0gNCkge1xuICAgICAgICB0aGlzLl9xdWV1ZUdDKCk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2lzUHJveGllZCA9IGZ1bmN0aW9uIFByb21pc2UkX2lzUHJveGllZCgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgNDE5NDMwNCkgPT09IDQxOTQzMDQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0UHJveGllZCA9IGZ1bmN0aW9uIFByb21pc2UkX3NldFByb3hpZWQoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDQxOTQzMDQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fdW5zZXRQcm94aWVkID0gZnVuY3Rpb24gUHJvbWlzZSRfdW5zZXRQcm94aWVkKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgJiAofjQxOTQzMDQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2lzR2NRdWV1ZWQgPSBmdW5jdGlvbiBQcm9taXNlJF9pc0djUXVldWVkKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiAtMTA3Mzc0MTgyNCkgPT09IC0xMDczNzQxODI0O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldEdjUXVldWVkID0gZnVuY3Rpb24gUHJvbWlzZSRfc2V0R2NRdWV1ZWQoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IC0xMDczNzQxODI0O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Vuc2V0R2NRdWV1ZWQgPSBmdW5jdGlvbiBQcm9taXNlJF91bnNldEdjUXVldWVkKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgJiAofi0xMDczNzQxODI0KTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9xdWV1ZUdDID0gZnVuY3Rpb24gUHJvbWlzZSRfcXVldWVHQygpIHtcbiAgICBpZiAodGhpcy5faXNHY1F1ZXVlZCgpKSByZXR1cm47XG4gICAgdGhpcy5fc2V0R2NRdWV1ZWQoKTtcbiAgICBhc3luYy5pbnZva2VMYXRlcih0aGlzLl9nYywgdGhpcywgdm9pZCAwKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9nYyA9IGZ1bmN0aW9uIFByb21pc2UkZ2MoKSB7XG4gICAgdmFyIGxlbiA9IHRoaXMuX2xlbmd0aCgpICogNSAtIDU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBkZWxldGUgdGhpc1tpXTtcbiAgICB9XG4gICAgdGhpcy5fY2xlYXJGaXJzdEhhbmRsZXJEYXRhKCk7XG4gICAgdGhpcy5fc2V0TGVuZ3RoKDApO1xuICAgIHRoaXMuX3Vuc2V0R2NRdWV1ZWQoKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9jbGVhckZpcnN0SGFuZGxlckRhdGEgPVxuZnVuY3Rpb24gUHJvbWlzZSRfY2xlYXJGaXJzdEhhbmRsZXJEYXRhKCkge1xuICAgIHRoaXMuX2Z1bGZpbGxtZW50SGFuZGxlcjAgPSB2b2lkIDA7XG4gICAgdGhpcy5fcmVqZWN0aW9uSGFuZGxlcjAgPSB2b2lkIDA7XG4gICAgdGhpcy5fcHJvbWlzZTAgPSB2b2lkIDA7XG4gICAgdGhpcy5fcmVjZWl2ZXIwID0gdm9pZCAwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3F1ZXVlU2V0dGxlQXQgPSBmdW5jdGlvbiBQcm9taXNlJF9xdWV1ZVNldHRsZUF0KGluZGV4KSB7XG4gICAgaWYgKHRoaXMuX2lzUmVqZWN0aW9uVW5oYW5kbGVkKCkpIHRoaXMuX3Vuc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQoKTtcbiAgICBhc3luYy5pbnZva2UodGhpcy5fc2V0dGxlUHJvbWlzZUF0LCB0aGlzLCBpbmRleCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fZnVsZmlsbFVuY2hlY2tlZCA9XG5mdW5jdGlvbiBQcm9taXNlJF9mdWxmaWxsVW5jaGVja2VkKHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmlzUGVuZGluZygpKSByZXR1cm47XG4gICAgaWYgKHZhbHVlID09PSB0aGlzKSB7XG4gICAgICAgIHZhciBlcnIgPSBtYWtlU2VsZlJlc29sdXRpb25FcnJvcigpO1xuICAgICAgICB0aGlzLl9hdHRhY2hFeHRyYVRyYWNlKGVycik7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWplY3RVbmNoZWNrZWQoZXJyLCB2b2lkIDApO1xuICAgIH1cbiAgICB0aGlzLl9jbGVhblZhbHVlcygpO1xuICAgIHRoaXMuX3NldEZ1bGZpbGxlZCgpO1xuICAgIHRoaXMuX3NldHRsZWRWYWx1ZSA9IHZhbHVlO1xuICAgIHZhciBsZW4gPSB0aGlzLl9sZW5ndGgoKTtcblxuICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgIGFzeW5jLmludm9rZSh0aGlzLl9zZXR0bGVQcm9taXNlcywgdGhpcywgbGVuKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcmVqZWN0VW5jaGVja2VkQ2hlY2tFcnJvciA9XG5mdW5jdGlvbiBQcm9taXNlJF9yZWplY3RVbmNoZWNrZWRDaGVja0Vycm9yKHJlYXNvbikge1xuICAgIHZhciB0cmFjZSA9IGNhbkF0dGFjaChyZWFzb24pID8gcmVhc29uIDogbmV3IEVycm9yKHJlYXNvbiArIFwiXCIpO1xuICAgIHRoaXMuX3JlamVjdFVuY2hlY2tlZChyZWFzb24sIHRyYWNlID09PSByZWFzb24gPyB2b2lkIDAgOiB0cmFjZSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcmVqZWN0VW5jaGVja2VkID1cbmZ1bmN0aW9uIFByb21pc2UkX3JlamVjdFVuY2hlY2tlZChyZWFzb24sIHRyYWNlKSB7XG4gICAgaWYgKCF0aGlzLmlzUGVuZGluZygpKSByZXR1cm47XG4gICAgaWYgKHJlYXNvbiA9PT0gdGhpcykge1xuICAgICAgICB2YXIgZXJyID0gbWFrZVNlbGZSZXNvbHV0aW9uRXJyb3IoKTtcbiAgICAgICAgdGhpcy5fYXR0YWNoRXh0cmFUcmFjZShlcnIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVqZWN0VW5jaGVja2VkKGVycik7XG4gICAgfVxuICAgIHRoaXMuX2NsZWFuVmFsdWVzKCk7XG4gICAgdGhpcy5fc2V0UmVqZWN0ZWQoKTtcbiAgICB0aGlzLl9zZXR0bGVkVmFsdWUgPSByZWFzb247XG5cbiAgICBpZiAodGhpcy5faXNGaW5hbCgpKSB7XG4gICAgICAgIGFzeW5jLmludm9rZUxhdGVyKHRocm93ZXIsIHZvaWQgMCwgdHJhY2UgPT09IHZvaWQgMCA/IHJlYXNvbiA6IHRyYWNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgbGVuID0gdGhpcy5fbGVuZ3RoKCk7XG5cbiAgICBpZiAodHJhY2UgIT09IHZvaWQgMCkgdGhpcy5fc2V0Q2FycmllZFN0YWNrVHJhY2UodHJhY2UpO1xuXG4gICAgaWYgKGxlbiA+IDApIHtcbiAgICAgICAgYXN5bmMuaW52b2tlKHRoaXMuX3JlamVjdFByb21pc2VzLCB0aGlzLCBudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9lbnN1cmVQb3NzaWJsZVJlamVjdGlvbkhhbmRsZWQoKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcmVqZWN0UHJvbWlzZXMgPSBmdW5jdGlvbiBQcm9taXNlJF9yZWplY3RQcm9taXNlcygpIHtcbiAgICB0aGlzLl9zZXR0bGVQcm9taXNlcygpO1xuICAgIHRoaXMuX3Vuc2V0Q2FycmllZFN0YWNrVHJhY2UoKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXR0bGVQcm9taXNlcyA9IGZ1bmN0aW9uIFByb21pc2UkX3NldHRsZVByb21pc2VzKCkge1xuICAgIHZhciBsZW4gPSB0aGlzLl9sZW5ndGgoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHRoaXMuX3NldHRsZVByb21pc2VBdChpKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fZW5zdXJlUG9zc2libGVSZWplY3Rpb25IYW5kbGVkID1cbmZ1bmN0aW9uIFByb21pc2UkX2Vuc3VyZVBvc3NpYmxlUmVqZWN0aW9uSGFuZGxlZCgpIHtcbiAgICB0aGlzLl9zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCgpO1xuICAgIGlmIChDYXB0dXJlZFRyYWNlLnBvc3NpYmx5VW5oYW5kbGVkUmVqZWN0aW9uICE9PSB2b2lkIDApIHtcbiAgICAgICAgYXN5bmMuaW52b2tlTGF0ZXIodGhpcy5fbm90aWZ5VW5oYW5kbGVkUmVqZWN0aW9uLCB0aGlzLCB2b2lkIDApO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9ub3RpZnlVbmhhbmRsZWRSZWplY3Rpb25Jc0hhbmRsZWQgPVxuZnVuY3Rpb24gUHJvbWlzZSRfbm90aWZ5VW5oYW5kbGVkUmVqZWN0aW9uSXNIYW5kbGVkKCkge1xuICAgIGlmICh0eXBlb2YgdW5oYW5kbGVkUmVqZWN0aW9uSGFuZGxlZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGFzeW5jLmludm9rZUxhdGVyKHVuaGFuZGxlZFJlamVjdGlvbkhhbmRsZWQsIHZvaWQgMCwgdGhpcyk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX25vdGlmeVVuaGFuZGxlZFJlamVjdGlvbiA9XG5mdW5jdGlvbiBQcm9taXNlJF9ub3RpZnlVbmhhbmRsZWRSZWplY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzUmVqZWN0aW9uVW5oYW5kbGVkKCkpIHtcbiAgICAgICAgdmFyIHJlYXNvbiA9IHRoaXMuX3NldHRsZWRWYWx1ZTtcbiAgICAgICAgdmFyIHRyYWNlID0gdGhpcy5fZ2V0Q2FycmllZFN0YWNrVHJhY2UoKTtcblxuICAgICAgICB0aGlzLl9zZXRVbmhhbmRsZWRSZWplY3Rpb25Jc05vdGlmaWVkKCk7XG5cbiAgICAgICAgaWYgKHRyYWNlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHRoaXMuX3Vuc2V0Q2FycmllZFN0YWNrVHJhY2UoKTtcbiAgICAgICAgICAgIHJlYXNvbiA9IHRyYWNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgQ2FwdHVyZWRUcmFjZS5wb3NzaWJseVVuaGFuZGxlZFJlamVjdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBDYXB0dXJlZFRyYWNlLnBvc3NpYmx5VW5oYW5kbGVkUmVqZWN0aW9uKHJlYXNvbiwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG52YXIgY29udGV4dFN0YWNrID0gW107XG5Qcm9taXNlLnByb3RvdHlwZS5fcGVla0NvbnRleHQgPSBmdW5jdGlvbiBQcm9taXNlJF9wZWVrQ29udGV4dCgpIHtcbiAgICB2YXIgbGFzdEluZGV4ID0gY29udGV4dFN0YWNrLmxlbmd0aCAtIDE7XG4gICAgaWYgKGxhc3RJbmRleCA+PSAwKSB7XG4gICAgICAgIHJldHVybiBjb250ZXh0U3RhY2tbbGFzdEluZGV4XTtcbiAgICB9XG4gICAgcmV0dXJuIHZvaWQgMDtcblxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3B1c2hDb250ZXh0ID0gZnVuY3Rpb24gUHJvbWlzZSRfcHVzaENvbnRleHQoKSB7XG4gICAgaWYgKCFkZWJ1Z2dpbmcpIHJldHVybjtcbiAgICBjb250ZXh0U3RhY2sucHVzaCh0aGlzKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9wb3BDb250ZXh0ID0gZnVuY3Rpb24gUHJvbWlzZSRfcG9wQ29udGV4dCgpIHtcbiAgICBpZiAoIWRlYnVnZ2luZykgcmV0dXJuO1xuICAgIGNvbnRleHRTdGFjay5wb3AoKTtcbn07XG5cblByb21pc2Uubm9Db25mbGljdCA9IGZ1bmN0aW9uIFByb21pc2UkTm9Db25mbGljdCgpIHtcbiAgICByZXR1cm4gbm9Db25mbGljdChQcm9taXNlKTtcbn07XG5cblByb21pc2Uuc2V0U2NoZWR1bGVyID0gZnVuY3Rpb24oZm4pIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJmbiBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gICAgYXN5bmMuX3NjaGVkdWxlID0gZm47XG59O1xuXG5pZiAoIUNhcHR1cmVkVHJhY2UuaXNTdXBwb3J0ZWQoKSkge1xuICAgIFByb21pc2UubG9uZ1N0YWNrVHJhY2VzID0gZnVuY3Rpb24oKXt9O1xuICAgIGRlYnVnZ2luZyA9IGZhbHNlO1xufVxuXG5Qcm9taXNlLl9tYWtlU2VsZlJlc29sdXRpb25FcnJvciA9IG1ha2VTZWxmUmVzb2x1dGlvbkVycm9yO1xucmVxdWlyZShcIi4vZmluYWxseS5qc1wiKShQcm9taXNlLCBORVhUX0ZJTFRFUiwgY2FzdCk7XG5yZXF1aXJlKFwiLi9kaXJlY3RfcmVzb2x2ZS5qc1wiKShQcm9taXNlKTtcbnJlcXVpcmUoXCIuL3N5bmNocm9ub3VzX2luc3BlY3Rpb24uanNcIikoUHJvbWlzZSk7XG5yZXF1aXJlKFwiLi9qb2luLmpzXCIpKFByb21pc2UsIFByb21pc2VBcnJheSwgY2FzdCwgSU5URVJOQUwpO1xuUHJvbWlzZS5SYW5nZUVycm9yID0gUmFuZ2VFcnJvcjtcblByb21pc2UuQ2FuY2VsbGF0aW9uRXJyb3IgPSBDYW5jZWxsYXRpb25FcnJvcjtcblByb21pc2UuVGltZW91dEVycm9yID0gVGltZW91dEVycm9yO1xuUHJvbWlzZS5UeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5Qcm9taXNlLk9wZXJhdGlvbmFsRXJyb3IgPSBPcGVyYXRpb25hbEVycm9yO1xuUHJvbWlzZS5SZWplY3Rpb25FcnJvciA9IE9wZXJhdGlvbmFsRXJyb3I7XG5Qcm9taXNlLkFnZ3JlZ2F0ZUVycm9yID0gZXJyb3JzLkFnZ3JlZ2F0ZUVycm9yO1xuXG51dGlsLnRvRmFzdFByb3BlcnRpZXMoUHJvbWlzZSk7XG51dGlsLnRvRmFzdFByb3BlcnRpZXMoUHJvbWlzZS5wcm90b3R5cGUpO1xuUHJvbWlzZS5Qcm9taXNlID0gUHJvbWlzZTtcbnJlcXVpcmUoJy4vdGltZXJzLmpzJykoUHJvbWlzZSxJTlRFUk5BTCxjYXN0KTtcbnJlcXVpcmUoJy4vcmFjZS5qcycpKFByb21pc2UsSU5URVJOQUwsY2FzdCk7XG5yZXF1aXJlKCcuL2NhbGxfZ2V0LmpzJykoUHJvbWlzZSk7XG5yZXF1aXJlKCcuL2dlbmVyYXRvcnMuanMnKShQcm9taXNlLGFwaVJlamVjdGlvbixJTlRFUk5BTCxjYXN0KTtcbnJlcXVpcmUoJy4vbWFwLmpzJykoUHJvbWlzZSxQcm9taXNlQXJyYXksYXBpUmVqZWN0aW9uLGNhc3QsSU5URVJOQUwpO1xucmVxdWlyZSgnLi9ub2RlaWZ5LmpzJykoUHJvbWlzZSk7XG5yZXF1aXJlKCcuL3Byb21pc2lmeS5qcycpKFByb21pc2UsSU5URVJOQUwpO1xucmVxdWlyZSgnLi9wcm9wcy5qcycpKFByb21pc2UsUHJvbWlzZUFycmF5LGNhc3QpO1xucmVxdWlyZSgnLi9yZWR1Y2UuanMnKShQcm9taXNlLFByb21pc2VBcnJheSxhcGlSZWplY3Rpb24sY2FzdCxJTlRFUk5BTCk7XG5yZXF1aXJlKCcuL3NldHRsZS5qcycpKFByb21pc2UsUHJvbWlzZUFycmF5KTtcbnJlcXVpcmUoJy4vc29tZS5qcycpKFByb21pc2UsUHJvbWlzZUFycmF5LGFwaVJlamVjdGlvbik7XG5yZXF1aXJlKCcuL3Byb2dyZXNzLmpzJykoUHJvbWlzZSxQcm9taXNlQXJyYXkpO1xucmVxdWlyZSgnLi9jYW5jZWwuanMnKShQcm9taXNlLElOVEVSTkFMKTtcbnJlcXVpcmUoJy4vZmlsdGVyLmpzJykoUHJvbWlzZSxJTlRFUk5BTCk7XG5yZXF1aXJlKCcuL2FueS5qcycpKFByb21pc2UsUHJvbWlzZUFycmF5KTtcbnJlcXVpcmUoJy4vZWFjaC5qcycpKFByb21pc2UsSU5URVJOQUwpO1xucmVxdWlyZSgnLi91c2luZy5qcycpKFByb21pc2UsYXBpUmVqZWN0aW9uLGNhc3QpO1xuXG5Qcm9taXNlLnByb3RvdHlwZSA9IFByb21pc2UucHJvdG90eXBlO1xucmV0dXJuIFByb21pc2U7XG5cbn07XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKCdfcHJvY2VzcycpKSIsIi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCwgY2FzdCkge1xudmFyIGNhbkF0dGFjaCA9IHJlcXVpcmUoXCIuL2Vycm9ycy5qc1wiKS5jYW5BdHRhY2g7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgaXNBcnJheSA9IHV0aWwuaXNBcnJheTtcblxuZnVuY3Rpb24gdG9SZXNvbHV0aW9uVmFsdWUodmFsKSB7XG4gICAgc3dpdGNoKHZhbCkge1xuICAgIGNhc2UgLTE6IHJldHVybiB2b2lkIDA7XG4gICAgY2FzZSAtMjogcmV0dXJuIFtdO1xuICAgIGNhc2UgLTM6IHJldHVybiB7fTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIFByb21pc2VBcnJheSh2YWx1ZXMpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgdmFyIHBhcmVudCA9IHZvaWQgMDtcbiAgICBpZiAodmFsdWVzIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBwYXJlbnQgPSB2YWx1ZXM7XG4gICAgICAgIHByb21pc2UuX3Byb3BhZ2F0ZUZyb20ocGFyZW50LCAxIHwgNCk7XG4gICAgfVxuICAgIHByb21pc2UuX3NldFRyYWNlKHBhcmVudCk7XG4gICAgdGhpcy5fdmFsdWVzID0gdmFsdWVzO1xuICAgIHRoaXMuX2xlbmd0aCA9IDA7XG4gICAgdGhpcy5fdG90YWxSZXNvbHZlZCA9IDA7XG4gICAgdGhpcy5faW5pdCh2b2lkIDAsIC0yKTtcbn1cblByb21pc2VBcnJheS5wcm90b3R5cGUubGVuZ3RoID0gZnVuY3Rpb24gUHJvbWlzZUFycmF5JGxlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGVuZ3RoO1xufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5wcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZUFycmF5JHByb21pc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb21pc2U7XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9pbml0ID1cbmZ1bmN0aW9uIFByb21pc2VBcnJheSRfaW5pdChfLCByZXNvbHZlVmFsdWVJZkVtcHR5KSB7XG4gICAgdmFyIHZhbHVlcyA9IGNhc3QodGhpcy5fdmFsdWVzLCB2b2lkIDApO1xuICAgIGlmICh2YWx1ZXMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlcyA9IHZhbHVlcztcbiAgICAgICAgdmFsdWVzLl9zZXRCb3VuZFRvKHRoaXMuX3Byb21pc2UuX2JvdW5kVG8pO1xuICAgICAgICBpZiAodmFsdWVzLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5fc2V0dGxlZFZhbHVlO1xuICAgICAgICAgICAgaWYgKCFpc0FycmF5KHZhbHVlcykpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXJyID0gbmV3IFByb21pc2UuVHlwZUVycm9yKFwiZXhwZWN0aW5nIGFuIGFycmF5LCBhIHByb21pc2Ugb3IgYSB0aGVuYWJsZVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9faGFyZFJlamVjdF9fKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlcy5pc1BlbmRpbmcoKSkge1xuICAgICAgICAgICAgdmFsdWVzLl90aGVuKFxuICAgICAgICAgICAgICAgIFByb21pc2VBcnJheSRfaW5pdCxcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWplY3QsXG4gICAgICAgICAgICAgICAgdm9pZCAwLFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZVZhbHVlSWZFbXB0eVxuICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWVzLl91bnNldFJlamVjdGlvbklzVW5oYW5kbGVkKCk7XG4gICAgICAgICAgICB0aGlzLl9yZWplY3QodmFsdWVzLl9zZXR0bGVkVmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICghaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICAgIHZhciBlcnIgPSBuZXcgUHJvbWlzZS5UeXBlRXJyb3IoXCJleHBlY3RpbmcgYW4gYXJyYXksIGEgcHJvbWlzZSBvciBhIHRoZW5hYmxlXCIpO1xuICAgICAgICB0aGlzLl9faGFyZFJlamVjdF9fKGVycik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpZiAocmVzb2x2ZVZhbHVlSWZFbXB0eSA9PT0gLTUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmVFbXB0eUFycmF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlKHRvUmVzb2x1dGlvblZhbHVlKHJlc29sdmVWYWx1ZUlmRW1wdHkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBsZW4gPSB0aGlzLmdldEFjdHVhbExlbmd0aCh2YWx1ZXMubGVuZ3RoKTtcbiAgICB2YXIgbmV3TGVuID0gbGVuO1xuICAgIHZhciBuZXdWYWx1ZXMgPSB0aGlzLnNob3VsZENvcHlWYWx1ZXMoKSA/IG5ldyBBcnJheShsZW4pIDogdGhpcy5fdmFsdWVzO1xuICAgIHZhciBpc0RpcmVjdFNjYW5OZWVkZWQgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0KHZhbHVlc1tpXSwgdm9pZCAwKTtcbiAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIGlmIChtYXliZVByb21pc2UuaXNQZW5kaW5nKCkpIHtcbiAgICAgICAgICAgICAgICBtYXliZVByb21pc2UuX3Byb3h5UHJvbWlzZUFycmF5KHRoaXMsIGkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtYXliZVByb21pc2UuX3Vuc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQoKTtcbiAgICAgICAgICAgICAgICBpc0RpcmVjdFNjYW5OZWVkZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNEaXJlY3RTY2FuTmVlZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBuZXdWYWx1ZXNbaV0gPSBtYXliZVByb21pc2U7XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlcyA9IG5ld1ZhbHVlcztcbiAgICB0aGlzLl9sZW5ndGggPSBuZXdMZW47XG4gICAgaWYgKGlzRGlyZWN0U2Nhbk5lZWRlZCkge1xuICAgICAgICB0aGlzLl9zY2FuRGlyZWN0VmFsdWVzKGxlbik7XG4gICAgfVxufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fc2V0dGxlUHJvbWlzZUF0ID1cbmZ1bmN0aW9uIFByb21pc2VBcnJheSRfc2V0dGxlUHJvbWlzZUF0KGluZGV4KSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5fdmFsdWVzW2luZGV4XTtcbiAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpKSB7XG4gICAgICAgIHRoaXMuX3Byb21pc2VGdWxmaWxsZWQodmFsdWUsIGluZGV4KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgdGhpcy5fcHJvbWlzZUZ1bGZpbGxlZCh2YWx1ZS5fc2V0dGxlZFZhbHVlLCBpbmRleCk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZS5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgdGhpcy5fcHJvbWlzZVJlamVjdGVkKHZhbHVlLl9zZXR0bGVkVmFsdWUsIGluZGV4KTtcbiAgICB9XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9zY2FuRGlyZWN0VmFsdWVzID1cbmZ1bmN0aW9uIFByb21pc2VBcnJheSRfc2NhbkRpcmVjdFZhbHVlcyhsZW4pIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1Jlc29sdmVkKCkpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NldHRsZVByb21pc2VBdChpKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9pc1Jlc29sdmVkID0gZnVuY3Rpb24gUHJvbWlzZUFycmF5JF9pc1Jlc29sdmVkKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZXMgPT09IG51bGw7XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9yZXNvbHZlID0gZnVuY3Rpb24gUHJvbWlzZUFycmF5JF9yZXNvbHZlKHZhbHVlKSB7XG4gICAgdGhpcy5fdmFsdWVzID0gbnVsbDtcbiAgICB0aGlzLl9wcm9taXNlLl9mdWxmaWxsKHZhbHVlKTtcbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuX19oYXJkUmVqZWN0X18gPVxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcmVqZWN0ID0gZnVuY3Rpb24gUHJvbWlzZUFycmF5JF9yZWplY3QocmVhc29uKSB7XG4gICAgdGhpcy5fdmFsdWVzID0gbnVsbDtcbiAgICB2YXIgdHJhY2UgPSBjYW5BdHRhY2gocmVhc29uKSA/IHJlYXNvbiA6IG5ldyBFcnJvcihyZWFzb24gKyBcIlwiKTtcbiAgICB0aGlzLl9wcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHRyYWNlKTtcbiAgICB0aGlzLl9wcm9taXNlLl9yZWplY3QocmVhc29uLCB0cmFjZSk7XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlUHJvZ3Jlc3NlZCA9XG5mdW5jdGlvbiBQcm9taXNlQXJyYXkkX3Byb21pc2VQcm9ncmVzc2VkKHByb2dyZXNzVmFsdWUsIGluZGV4KSB7XG4gICAgaWYgKHRoaXMuX2lzUmVzb2x2ZWQoKSkgcmV0dXJuO1xuICAgIHRoaXMuX3Byb21pc2UuX3Byb2dyZXNzKHtcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICB2YWx1ZTogcHJvZ3Jlc3NWYWx1ZVxuICAgIH0pO1xufTtcblxuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlRnVsZmlsbGVkID1cbmZ1bmN0aW9uIFByb21pc2VBcnJheSRfcHJvbWlzZUZ1bGZpbGxlZCh2YWx1ZSwgaW5kZXgpIHtcbiAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm47XG4gICAgdGhpcy5fdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgIHZhciB0b3RhbFJlc29sdmVkID0gKyt0aGlzLl90b3RhbFJlc29sdmVkO1xuICAgIGlmICh0b3RhbFJlc29sdmVkID49IHRoaXMuX2xlbmd0aCkge1xuICAgICAgICB0aGlzLl9yZXNvbHZlKHRoaXMuX3ZhbHVlcyk7XG4gICAgfVxufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZVJlamVjdGVkID1cbmZ1bmN0aW9uIFByb21pc2VBcnJheSRfcHJvbWlzZVJlamVjdGVkKHJlYXNvbiwgaW5kZXgpIHtcbiAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm47XG4gICAgdGhpcy5fdG90YWxSZXNvbHZlZCsrO1xuICAgIHRoaXMuX3JlamVjdChyZWFzb24pO1xufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5zaG91bGRDb3B5VmFsdWVzID1cbmZ1bmN0aW9uIFByb21pc2VBcnJheSRfc2hvdWxkQ29weVZhbHVlcygpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuZ2V0QWN0dWFsTGVuZ3RoID1cbmZ1bmN0aW9uIFByb21pc2VBcnJheSRnZXRBY3R1YWxMZW5ndGgobGVuKSB7XG4gICAgcmV0dXJuIGxlbjtcbn07XG5cbnJldHVybiBQcm9taXNlQXJyYXk7XG59O1xuIiwiLyoqXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgbWF5YmVXcmFwQXNFcnJvciA9IHV0aWwubWF5YmVXcmFwQXNFcnJvcjtcbnZhciBlcnJvcnMgPSByZXF1aXJlKFwiLi9lcnJvcnMuanNcIik7XG52YXIgVGltZW91dEVycm9yID0gZXJyb3JzLlRpbWVvdXRFcnJvcjtcbnZhciBPcGVyYXRpb25hbEVycm9yID0gZXJyb3JzLk9wZXJhdGlvbmFsRXJyb3I7XG52YXIgYXN5bmMgPSByZXF1aXJlKFwiLi9hc3luYy5qc1wiKTtcbnZhciBoYXZlR2V0dGVycyA9IHV0aWwuaGF2ZUdldHRlcnM7XG52YXIgZXM1ID0gcmVxdWlyZShcIi4vZXM1LmpzXCIpO1xuXG5mdW5jdGlvbiBpc1VudHlwZWRFcnJvcihvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRXJyb3IgJiZcbiAgICAgICAgZXM1LmdldFByb3RvdHlwZU9mKG9iaikgPT09IEVycm9yLnByb3RvdHlwZTtcbn1cblxuZnVuY3Rpb24gd3JhcEFzT3BlcmF0aW9uYWxFcnJvcihvYmopIHtcbiAgICB2YXIgcmV0O1xuICAgIGlmIChpc1VudHlwZWRFcnJvcihvYmopKSB7XG4gICAgICAgIHJldCA9IG5ldyBPcGVyYXRpb25hbEVycm9yKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0ID0gb2JqO1xuICAgIH1cbiAgICBlcnJvcnMubWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uKHJldCk7XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gbm9kZWJhY2tGb3JQcm9taXNlKHByb21pc2UpIHtcbiAgICBmdW5jdGlvbiBQcm9taXNlUmVzb2x2ZXIkX2NhbGxiYWNrKGVyciwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHByb21pc2UgPT09IG51bGwpIHJldHVybjtcblxuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICB2YXIgd3JhcHBlZCA9IHdyYXBBc09wZXJhdGlvbmFsRXJyb3IobWF5YmVXcmFwQXNFcnJvcihlcnIpKTtcbiAgICAgICAgICAgIHByb21pc2UuX2F0dGFjaEV4dHJhVHJhY2Uod3JhcHBlZCk7XG4gICAgICAgICAgICBwcm9taXNlLl9yZWplY3Qod3JhcHBlZCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIHZhciAkX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGg7dmFyIGFyZ3MgPSBuZXcgQXJyYXkoJF9sZW4gLSAxKTsgZm9yKHZhciAkX2kgPSAxOyAkX2kgPCAkX2xlbjsgKyskX2kpIHthcmdzWyRfaSAtIDFdID0gYXJndW1lbnRzWyRfaV07fVxuICAgICAgICAgICAgcHJvbWlzZS5fZnVsZmlsbChhcmdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb21pc2UuX2Z1bGZpbGwodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlUmVzb2x2ZXIkX2NhbGxiYWNrO1xufVxuXG5cbnZhciBQcm9taXNlUmVzb2x2ZXI7XG5pZiAoIWhhdmVHZXR0ZXJzKSB7XG4gICAgUHJvbWlzZVJlc29sdmVyID0gZnVuY3Rpb24gUHJvbWlzZVJlc29sdmVyKHByb21pc2UpIHtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICAgICAgdGhpcy5hc0NhbGxiYWNrID0gbm9kZWJhY2tGb3JQcm9taXNlKHByb21pc2UpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gdGhpcy5hc0NhbGxiYWNrO1xuICAgIH07XG59XG5lbHNlIHtcbiAgICBQcm9taXNlUmVzb2x2ZXIgPSBmdW5jdGlvbiBQcm9taXNlUmVzb2x2ZXIocHJvbWlzZSkge1xuICAgICAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIH07XG59XG5pZiAoaGF2ZUdldHRlcnMpIHtcbiAgICB2YXIgcHJvcCA9IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlYmFja0ZvclByb21pc2UodGhpcy5wcm9taXNlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZXM1LmRlZmluZVByb3BlcnR5KFByb21pc2VSZXNvbHZlci5wcm90b3R5cGUsIFwiYXNDYWxsYmFja1wiLCBwcm9wKTtcbiAgICBlczUuZGVmaW5lUHJvcGVydHkoUHJvbWlzZVJlc29sdmVyLnByb3RvdHlwZSwgXCJjYWxsYmFja1wiLCBwcm9wKTtcbn1cblxuUHJvbWlzZVJlc29sdmVyLl9ub2RlYmFja0ZvclByb21pc2UgPSBub2RlYmFja0ZvclByb21pc2U7XG5cblByb21pc2VSZXNvbHZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiBQcm9taXNlUmVzb2x2ZXIkdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBQcm9taXNlUmVzb2x2ZXJdXCI7XG59O1xuXG5Qcm9taXNlUmVzb2x2ZXIucHJvdG90eXBlLnJlc29sdmUgPVxuUHJvbWlzZVJlc29sdmVyLnByb3RvdHlwZS5mdWxmaWxsID0gZnVuY3Rpb24gUHJvbWlzZVJlc29sdmVyJHJlc29sdmUodmFsdWUpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUHJvbWlzZVJlc29sdmVyKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSWxsZWdhbCBpbnZvY2F0aW9uLCByZXNvbHZlciByZXNvbHZlL3JlamVjdCBtdXN0IGJlIGNhbGxlZCB3aXRoaW4gYSByZXNvbHZlciBjb250ZXh0LiBDb25zaWRlciB1c2luZyB0aGUgcHJvbWlzZSBjb25zdHJ1Y3RvciBpbnN0ZWFkLlwiKTtcbiAgICB9XG5cbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMucHJvbWlzZTtcbiAgICBpZiAocHJvbWlzZS5fdHJ5Rm9sbG93KHZhbHVlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGFzeW5jLmludm9rZShwcm9taXNlLl9mdWxmaWxsLCBwcm9taXNlLCB2YWx1ZSk7XG59O1xuXG5Qcm9taXNlUmVzb2x2ZXIucHJvdG90eXBlLnJlamVjdCA9IGZ1bmN0aW9uIFByb21pc2VSZXNvbHZlciRyZWplY3QocmVhc29uKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb21pc2VSZXNvbHZlcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIklsbGVnYWwgaW52b2NhdGlvbiwgcmVzb2x2ZXIgcmVzb2x2ZS9yZWplY3QgbXVzdCBiZSBjYWxsZWQgd2l0aGluIGEgcmVzb2x2ZXIgY29udGV4dC4gQ29uc2lkZXIgdXNpbmcgdGhlIHByb21pc2UgY29uc3RydWN0b3IgaW5zdGVhZC5cIik7XG4gICAgfVxuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLnByb21pc2U7XG4gICAgZXJyb3JzLm1hcmtBc09yaWdpbmF0aW5nRnJvbVJlamVjdGlvbihyZWFzb24pO1xuICAgIHZhciB0cmFjZSA9IGVycm9ycy5jYW5BdHRhY2gocmVhc29uKSA/IHJlYXNvbiA6IG5ldyBFcnJvcihyZWFzb24gKyBcIlwiKTtcbiAgICBwcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHRyYWNlKTtcbiAgICBhc3luYy5pbnZva2UocHJvbWlzZS5fcmVqZWN0LCBwcm9taXNlLCByZWFzb24pO1xuICAgIGlmICh0cmFjZSAhPT0gcmVhc29uKSB7XG4gICAgICAgIGFzeW5jLmludm9rZSh0aGlzLl9zZXRDYXJyaWVkU3RhY2tUcmFjZSwgdGhpcywgdHJhY2UpO1xuICAgIH1cbn07XG5cblByb21pc2VSZXNvbHZlci5wcm90b3R5cGUucHJvZ3Jlc3MgPVxuZnVuY3Rpb24gUHJvbWlzZVJlc29sdmVyJHByb2dyZXNzKHZhbHVlKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb21pc2VSZXNvbHZlcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIklsbGVnYWwgaW52b2NhdGlvbiwgcmVzb2x2ZXIgcmVzb2x2ZS9yZWplY3QgbXVzdCBiZSBjYWxsZWQgd2l0aGluIGEgcmVzb2x2ZXIgY29udGV4dC4gQ29uc2lkZXIgdXNpbmcgdGhlIHByb21pc2UgY29uc3RydWN0b3IgaW5zdGVhZC5cIik7XG4gICAgfVxuICAgIGFzeW5jLmludm9rZSh0aGlzLnByb21pc2UuX3Byb2dyZXNzLCB0aGlzLnByb21pc2UsIHZhbHVlKTtcbn07XG5cblByb21pc2VSZXNvbHZlci5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24gUHJvbWlzZVJlc29sdmVyJGNhbmNlbCgpIHtcbiAgICBhc3luYy5pbnZva2UodGhpcy5wcm9taXNlLmNhbmNlbCwgdGhpcy5wcm9taXNlLCB2b2lkIDApO1xufTtcblxuUHJvbWlzZVJlc29sdmVyLnByb3RvdHlwZS50aW1lb3V0ID0gZnVuY3Rpb24gUHJvbWlzZVJlc29sdmVyJHRpbWVvdXQoKSB7XG4gICAgdGhpcy5yZWplY3QobmV3IFRpbWVvdXRFcnJvcihcInRpbWVvdXRcIikpO1xufTtcblxuUHJvbWlzZVJlc29sdmVyLnByb3RvdHlwZS5pc1Jlc29sdmVkID0gZnVuY3Rpb24gUHJvbWlzZVJlc29sdmVyJGlzUmVzb2x2ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvbWlzZS5pc1Jlc29sdmVkKCk7XG59O1xuXG5Qcm9taXNlUmVzb2x2ZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIFByb21pc2VSZXNvbHZlciR0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvbWlzZS50b0pTT04oKTtcbn07XG5cblByb21pc2VSZXNvbHZlci5wcm90b3R5cGUuX3NldENhcnJpZWRTdGFja1RyYWNlID1cbmZ1bmN0aW9uIFByb21pc2VSZXNvbHZlciRfc2V0Q2FycmllZFN0YWNrVHJhY2UodHJhY2UpIHtcbiAgICBpZiAodGhpcy5wcm9taXNlLmlzUmVqZWN0ZWQoKSkge1xuICAgICAgICB0aGlzLnByb21pc2UuX3NldENhcnJpZWRTdGFja1RyYWNlKHRyYWNlKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2VSZXNvbHZlcjtcbiIsIi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCkge1xudmFyIFRISVMgPSB7fTtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKTtcbnZhciBub2RlYmFja0ZvclByb21pc2UgPSByZXF1aXJlKFwiLi9wcm9taXNlX3Jlc29sdmVyLmpzXCIpXG4gICAgLl9ub2RlYmFja0ZvclByb21pc2U7XG52YXIgd2l0aEFwcGVuZGVkID0gdXRpbC53aXRoQXBwZW5kZWQ7XG52YXIgbWF5YmVXcmFwQXNFcnJvciA9IHV0aWwubWF5YmVXcmFwQXNFcnJvcjtcbnZhciBjYW5FdmFsdWF0ZSA9IHV0aWwuY2FuRXZhbHVhdGU7XG52YXIgVHlwZUVycm9yID0gcmVxdWlyZShcIi4vZXJyb3JzXCIpLlR5cGVFcnJvcjtcbnZhciBkZWZhdWx0U3VmZml4ID0gXCJBc3luY1wiO1xudmFyIGRlZmF1bHRGaWx0ZXIgPSBmdW5jdGlvbihuYW1lLCBmdW5jKSB7XG4gICAgcmV0dXJuIHV0aWwuaXNJZGVudGlmaWVyKG5hbWUpICYmXG4gICAgICAgIG5hbWUuY2hhckF0KDApICE9PSBcIl9cIiAmJlxuICAgICAgICAhdXRpbC5pc0NsYXNzKGZ1bmMpO1xufTtcbnZhciBkZWZhdWx0UHJvbWlzaWZpZWQgPSB7X19pc1Byb21pc2lmaWVkX186IHRydWV9O1xuXG5cbmZ1bmN0aW9uIGVzY2FwZUlkZW50UmVnZXgoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWyRdKS8sIFwiXFxcXCRcIik7XG59XG5cbmZ1bmN0aW9uIGlzUHJvbWlzaWZpZWQoZm4pIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZm4uX19pc1Byb21pc2lmaWVkX18gPT09IHRydWU7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhc1Byb21pc2lmaWVkKG9iaiwga2V5LCBzdWZmaXgpIHtcbiAgICB2YXIgdmFsID0gdXRpbC5nZXREYXRhUHJvcGVydHlPckRlZmF1bHQob2JqLCBrZXkgKyBzdWZmaXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRQcm9taXNpZmllZCk7XG4gICAgcmV0dXJuIHZhbCA/IGlzUHJvbWlzaWZpZWQodmFsKSA6IGZhbHNlO1xufVxuZnVuY3Rpb24gY2hlY2tWYWxpZChyZXQsIHN1ZmZpeCwgc3VmZml4UmVnZXhwKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgdmFyIGtleSA9IHJldFtpXTtcbiAgICAgICAgaWYgKHN1ZmZpeFJlZ2V4cC50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgIHZhciBrZXlXaXRob3V0QXN5bmNTdWZmaXggPSBrZXkucmVwbGFjZShzdWZmaXhSZWdleHAsIFwiXCIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZXQubGVuZ3RoOyBqICs9IDIpIHtcbiAgICAgICAgICAgICAgICBpZiAocmV0W2pdID09PSBrZXlXaXRob3V0QXN5bmNTdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBwcm9taXNpZnkgYW4gQVBJIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGhhdCBoYXMgbm9ybWFsIG1ldGhvZHMgd2l0aCAnXCIrc3VmZml4K1wiJy1zdWZmaXhcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwcm9taXNpZmlhYmxlTWV0aG9kcyhvYmosIHN1ZmZpeCwgc3VmZml4UmVnZXhwLCBmaWx0ZXIpIHtcbiAgICB2YXIga2V5cyA9IHV0aWwuaW5oZXJpdGVkRGF0YUtleXMob2JqKTtcbiAgICB2YXIgcmV0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YXIgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgICAgICAhaXNQcm9taXNpZmllZCh2YWx1ZSkgJiZcbiAgICAgICAgICAgICFoYXNQcm9taXNpZmllZChvYmosIGtleSwgc3VmZml4KSAmJlxuICAgICAgICAgICAgZmlsdGVyKGtleSwgdmFsdWUsIG9iaikpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrVmFsaWQocmV0LCBzdWZmaXgsIHN1ZmZpeFJlZ2V4cCk7XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gc3dpdGNoQ2FzZUFyZ3VtZW50T3JkZXIobGlrZWx5QXJndW1lbnRDb3VudCkge1xuICAgIHZhciByZXQgPSBbbGlrZWx5QXJndW1lbnRDb3VudF07XG4gICAgdmFyIG1pbiA9IE1hdGgubWF4KDAsIGxpa2VseUFyZ3VtZW50Q291bnQgLSAxIC0gNSk7XG4gICAgZm9yKHZhciBpID0gbGlrZWx5QXJndW1lbnRDb3VudCAtIDE7IGkgPj0gbWluOyAtLWkpIHtcbiAgICAgICAgaWYgKGkgPT09IGxpa2VseUFyZ3VtZW50Q291bnQpIGNvbnRpbnVlO1xuICAgICAgICByZXQucHVzaChpKTtcbiAgICB9XG4gICAgZm9yKHZhciBpID0gbGlrZWx5QXJndW1lbnRDb3VudCArIDE7IGkgPD0gNTsgKytpKSB7XG4gICAgICAgIHJldC5wdXNoKGkpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBhcmd1bWVudFNlcXVlbmNlKGFyZ3VtZW50Q291bnQpIHtcbiAgICByZXR1cm4gdXRpbC5maWxsZWRSYW5nZShhcmd1bWVudENvdW50LCBcImFyZ3VtZW50c1tcIiwgXCJdXCIpO1xufVxuXG5mdW5jdGlvbiBwYXJhbWV0ZXJEZWNsYXJhdGlvbihwYXJhbWV0ZXJDb3VudCkge1xuICAgIHJldHVybiB1dGlsLmZpbGxlZFJhbmdlKHBhcmFtZXRlckNvdW50LCBcIl9hcmdcIiwgXCJcIik7XG59XG5cbmZ1bmN0aW9uIHBhcmFtZXRlckNvdW50KGZuKSB7XG4gICAgaWYgKHR5cGVvZiBmbi5sZW5ndGggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKGZuLmxlbmd0aCwgMTAyMyArIDEpLCAwKTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJvcGVydHlBY2Nlc3Moa2V5KSB7XG4gICAgaWYgKHV0aWwuaXNJZGVudGlmaWVyKGtleSkpIHtcbiAgICAgICAgcmV0dXJuIFwiLlwiICsga2V5O1xuICAgIH1cbiAgICBlbHNlIHJldHVybiBcIlsnXCIgKyBrZXkucmVwbGFjZSgvKFsnXFxcXF0pL2csIFwiXFxcXCQxXCIpICsgXCInXVwiO1xufVxuXG5mdW5jdGlvbiBtYWtlTm9kZVByb21pc2lmaWVkRXZhbChjYWxsYmFjaywgcmVjZWl2ZXIsIG9yaWdpbmFsTmFtZSwgZm4sIHN1ZmZpeCkge1xuICAgIHZhciBuZXdQYXJhbWV0ZXJDb3VudCA9IE1hdGgubWF4KDAsIHBhcmFtZXRlckNvdW50KGZuKSAtIDEpO1xuICAgIHZhciBhcmd1bWVudE9yZGVyID0gc3dpdGNoQ2FzZUFyZ3VtZW50T3JkZXIobmV3UGFyYW1ldGVyQ291bnQpO1xuICAgIHZhciBjYWxsYmFja05hbWUgPVxuICAgICAgICAodHlwZW9mIG9yaWdpbmFsTmFtZSA9PT0gXCJzdHJpbmdcIiAmJiB1dGlsLmlzSWRlbnRpZmllcihvcmlnaW5hbE5hbWUpXG4gICAgICAgICAgICA/IG9yaWdpbmFsTmFtZSArIHN1ZmZpeFxuICAgICAgICAgICAgOiBcInByb21pc2lmaWVkXCIpO1xuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDYWxsRm9yQXJndW1lbnRDb3VudChjb3VudCkge1xuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50U2VxdWVuY2UoY291bnQpLmpvaW4oXCIsIFwiKTtcbiAgICAgICAgdmFyIGNvbW1hID0gY291bnQgPiAwID8gXCIsIFwiIDogXCJcIjtcbiAgICAgICAgdmFyIHJldDtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0ID0gXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZCh7e2FyZ3N9fSwgZm4pOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFwiLnJlcGxhY2UoXCIubWV0aG9kXCIsIGdlbmVyYXRlUHJvcGVydHlBY2Nlc3MoY2FsbGJhY2spKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZWNlaXZlciA9PT0gVEhJUykge1xuICAgICAgICAgICAgcmV0ID0gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIHt7YXJnc319LCBmbik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHJlY2VpdmVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHJldCA9ICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChyZWNlaXZlciwge3thcmdzfX0sIGZuKTsgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldCA9ICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soe3thcmdzfX0sIGZuKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0LnJlcGxhY2UoXCJ7e2FyZ3N9fVwiLCBhcmdzKS5yZXBsYWNlKFwiLCBcIiwgY29tbWEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQXJndW1lbnRTd2l0Y2hDYXNlKCkge1xuICAgICAgICB2YXIgcmV0ID0gXCJcIjtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50T3JkZXIubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHJldCArPSBcImNhc2UgXCIgKyBhcmd1bWVudE9yZGVyW2ldICtcIjpcIiArXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVDYWxsRm9yQXJndW1lbnRDb3VudChhcmd1bWVudE9yZGVyW2ldKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29kZUZvckNhbGw7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGNvZGVGb3JDYWxsID0gXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eS5hcHBseSh0aGlzLCBhcmdzKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiLnByb3BlcnR5XCIsIGdlbmVyYXRlUHJvcGVydHlBY2Nlc3MoY2FsbGJhY2spKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZWNlaXZlciA9PT0gVEhJUykge1xuICAgICAgICAgICAgY29kZUZvckNhbGwgPSBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmdzKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29kZUZvckNhbGwgPSBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShyZWNlaXZlciwgYXJncyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0ICs9IFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIGRlZmF1bHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShsZW4gKyAxKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB2YXIgaSA9IDA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBhcmdzW2ldID0gZm47ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBbQ29kZUZvckNhbGxdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIFwiLnJlcGxhY2UoXCJbQ29kZUZvckNhbGxdXCIsIGNvZGVGb3JDYWxsKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKFwiUHJvbWlzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxsYmFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWNlaXZlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aXRoQXBwZW5kZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWF5YmVXcmFwQXNFcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJub2RlYmFja0ZvclByb21pc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSU5URVJOQUxcIixcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgdmFyIHJldCA9IGZ1bmN0aW9uIEZ1bmN0aW9uTmFtZShQYXJhbWV0ZXJzKSB7ICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoSU5URVJOQUwpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHByb21pc2UuX3NldFRyYWNlKHZvaWQgMCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHZhciBmbiA9IG5vZGViYWNrRm9yUHJvbWlzZShwcm9taXNlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHRyeSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBzd2l0Y2gobGVuKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgW0NvZGVGb3JTd2l0Y2hDYXNlXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICB2YXIgd3JhcHBlZCA9IG1heWJlV3JhcEFzRXJyb3IoZSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBwcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHdyYXBwZWQpOyAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBwcm9taXNlLl9yZWplY3Qod3JhcHBlZCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgfTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgcmV0Ll9faXNQcm9taXNpZmllZF9fID0gdHJ1ZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgcmV0dXJuIHJldDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgXCJcbiAgICAgICAgLnJlcGxhY2UoXCJGdW5jdGlvbk5hbWVcIiwgY2FsbGJhY2tOYW1lKVxuICAgICAgICAucmVwbGFjZShcIlBhcmFtZXRlcnNcIiwgcGFyYW1ldGVyRGVjbGFyYXRpb24obmV3UGFyYW1ldGVyQ291bnQpKVxuICAgICAgICAucmVwbGFjZShcIltDb2RlRm9yU3dpdGNoQ2FzZV1cIiwgZ2VuZXJhdGVBcmd1bWVudFN3aXRjaENhc2UoKSkpKFxuICAgICAgICAgICAgUHJvbWlzZSxcbiAgICAgICAgICAgIGNhbGxiYWNrLFxuICAgICAgICAgICAgcmVjZWl2ZXIsXG4gICAgICAgICAgICB3aXRoQXBwZW5kZWQsXG4gICAgICAgICAgICBtYXliZVdyYXBBc0Vycm9yLFxuICAgICAgICAgICAgbm9kZWJhY2tGb3JQcm9taXNlLFxuICAgICAgICAgICAgSU5URVJOQUxcbiAgICAgICAgKTtcbn1cblxuZnVuY3Rpb24gbWFrZU5vZGVQcm9taXNpZmllZENsb3N1cmUoY2FsbGJhY2ssIHJlY2VpdmVyKSB7XG4gICAgZnVuY3Rpb24gcHJvbWlzaWZpZWQoKSB7XG4gICAgICAgIHZhciBfcmVjZWl2ZXIgPSByZWNlaXZlcjtcbiAgICAgICAgaWYgKHJlY2VpdmVyID09PSBUSElTKSBfcmVjZWl2ZXIgPSB0aGlzO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IF9yZWNlaXZlcltjYWxsYmFja107XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgICAgIHByb21pc2UuX3NldFRyYWNlKHZvaWQgMCk7XG4gICAgICAgIHZhciBmbiA9IG5vZGViYWNrRm9yUHJvbWlzZShwcm9taXNlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KF9yZWNlaXZlciwgd2l0aEFwcGVuZGVkKGFyZ3VtZW50cywgZm4pKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICB2YXIgd3JhcHBlZCA9IG1heWJlV3JhcEFzRXJyb3IoZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHdyYXBwZWQpO1xuICAgICAgICAgICAgcHJvbWlzZS5fcmVqZWN0KHdyYXBwZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBwcm9taXNpZmllZC5fX2lzUHJvbWlzaWZpZWRfXyA9IHRydWU7XG4gICAgcmV0dXJuIHByb21pc2lmaWVkO1xufVxuXG52YXIgbWFrZU5vZGVQcm9taXNpZmllZCA9IGNhbkV2YWx1YXRlXG4gICAgPyBtYWtlTm9kZVByb21pc2lmaWVkRXZhbFxuICAgIDogbWFrZU5vZGVQcm9taXNpZmllZENsb3N1cmU7XG5cbmZ1bmN0aW9uIHByb21pc2lmeUFsbChvYmosIHN1ZmZpeCwgZmlsdGVyLCBwcm9taXNpZmllcikge1xuICAgIHZhciBzdWZmaXhSZWdleHAgPSBuZXcgUmVnRXhwKGVzY2FwZUlkZW50UmVnZXgoc3VmZml4KSArIFwiJFwiKTtcbiAgICB2YXIgbWV0aG9kcyA9XG4gICAgICAgIHByb21pc2lmaWFibGVNZXRob2RzKG9iaiwgc3VmZml4LCBzdWZmaXhSZWdleHAsIGZpbHRlcik7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbWV0aG9kcy5sZW5ndGg7IGkgPCBsZW47IGkrPSAyKSB7XG4gICAgICAgIHZhciBrZXkgPSBtZXRob2RzW2ldO1xuICAgICAgICB2YXIgZm4gPSBtZXRob2RzW2krMV07XG4gICAgICAgIHZhciBwcm9taXNpZmllZEtleSA9IGtleSArIHN1ZmZpeDtcbiAgICAgICAgb2JqW3Byb21pc2lmaWVkS2V5XSA9IHByb21pc2lmaWVyID09PSBtYWtlTm9kZVByb21pc2lmaWVkXG4gICAgICAgICAgICAgICAgPyBtYWtlTm9kZVByb21pc2lmaWVkKGtleSwgVEhJUywga2V5LCBmbiwgc3VmZml4KVxuICAgICAgICAgICAgICAgIDogcHJvbWlzaWZpZXIoZm4pO1xuICAgIH1cbiAgICB1dGlsLnRvRmFzdFByb3BlcnRpZXMob2JqKTtcbiAgICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBwcm9taXNpZnkoY2FsbGJhY2ssIHJlY2VpdmVyKSB7XG4gICAgcmV0dXJuIG1ha2VOb2RlUHJvbWlzaWZpZWQoY2FsbGJhY2ssIHJlY2VpdmVyLCB2b2lkIDAsIGNhbGxiYWNrKTtcbn1cblxuUHJvbWlzZS5wcm9taXNpZnkgPSBmdW5jdGlvbiBQcm9taXNlJFByb21pc2lmeShmbiwgcmVjZWl2ZXIpIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImZuIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgaWYgKGlzUHJvbWlzaWZpZWQoZm4pKSB7XG4gICAgICAgIHJldHVybiBmbjtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2lmeShmbiwgYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBUSElTIDogcmVjZWl2ZXIpO1xufTtcblxuUHJvbWlzZS5wcm9taXNpZnlBbGwgPSBmdW5jdGlvbiBQcm9taXNlJFByb21pc2lmeUFsbCh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiB0YXJnZXQgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcInRoZSB0YXJnZXQgb2YgcHJvbWlzaWZ5QWxsIG11c3QgYmUgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBPYmplY3Qob3B0aW9ucyk7XG4gICAgdmFyIHN1ZmZpeCA9IG9wdGlvbnMuc3VmZml4O1xuICAgIGlmICh0eXBlb2Ygc3VmZml4ICE9PSBcInN0cmluZ1wiKSBzdWZmaXggPSBkZWZhdWx0U3VmZml4O1xuICAgIHZhciBmaWx0ZXIgPSBvcHRpb25zLmZpbHRlcjtcbiAgICBpZiAodHlwZW9mIGZpbHRlciAhPT0gXCJmdW5jdGlvblwiKSBmaWx0ZXIgPSBkZWZhdWx0RmlsdGVyO1xuICAgIHZhciBwcm9taXNpZmllciA9IG9wdGlvbnMucHJvbWlzaWZpZXI7XG4gICAgaWYgKHR5cGVvZiBwcm9taXNpZmllciAhPT0gXCJmdW5jdGlvblwiKSBwcm9taXNpZmllciA9IG1ha2VOb2RlUHJvbWlzaWZpZWQ7XG5cbiAgICBpZiAoIXV0aWwuaXNJZGVudGlmaWVyKHN1ZmZpeCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJzdWZmaXggbXVzdCBiZSBhIHZhbGlkIGlkZW50aWZpZXJcIik7XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSB1dGlsLmluaGVyaXRlZERhdGFLZXlzKHRhcmdldCwge2luY2x1ZGVIaWRkZW46IHRydWV9KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGFyZ2V0W2tleXNbaV1dO1xuICAgICAgICBpZiAoa2V5c1tpXSAhPT0gXCJjb25zdHJ1Y3RvclwiICYmXG4gICAgICAgICAgICB1dGlsLmlzQ2xhc3ModmFsdWUpKSB7XG4gICAgICAgICAgICBwcm9taXNpZnlBbGwodmFsdWUucHJvdG90eXBlLCBzdWZmaXgsIGZpbHRlciwgcHJvbWlzaWZpZXIpO1xuICAgICAgICAgICAgcHJvbWlzaWZ5QWxsKHZhbHVlLCBzdWZmaXgsIGZpbHRlciwgcHJvbWlzaWZpZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2lmeUFsbCh0YXJnZXQsIHN1ZmZpeCwgZmlsdGVyLCBwcm9taXNpZmllcik7XG59O1xufTtcblxuIiwiLyoqXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSwgY2FzdCkge1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIGFwaVJlamVjdGlvbiA9IHJlcXVpcmUoXCIuL2Vycm9yc19hcGlfcmVqZWN0aW9uXCIpKFByb21pc2UpO1xudmFyIGlzT2JqZWN0ID0gdXRpbC5pc09iamVjdDtcbnZhciBlczUgPSByZXF1aXJlKFwiLi9lczUuanNcIik7XG5cbmZ1bmN0aW9uIFByb3BlcnRpZXNQcm9taXNlQXJyYXkob2JqKSB7XG4gICAgdmFyIGtleXMgPSBlczUua2V5cyhvYmopO1xuICAgIHZhciBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgdmFsdWVzID0gbmV3IEFycmF5KGxlbiAqIDIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIHZhbHVlc1tpXSA9IG9ialtrZXldO1xuICAgICAgICB2YWx1ZXNbaSArIGxlbl0gPSBrZXk7XG4gICAgfVxuICAgIHRoaXMuY29uc3RydWN0b3IkKHZhbHVlcyk7XG59XG51dGlsLmluaGVyaXRzKFByb3BlcnRpZXNQcm9taXNlQXJyYXksIFByb21pc2VBcnJheSk7XG5cblByb3BlcnRpZXNQcm9taXNlQXJyYXkucHJvdG90eXBlLl9pbml0ID1cbmZ1bmN0aW9uIFByb3BlcnRpZXNQcm9taXNlQXJyYXkkX2luaXQoKSB7XG4gICAgdGhpcy5faW5pdCQodm9pZCAwLCAtMykgO1xufTtcblxuUHJvcGVydGllc1Byb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VGdWxmaWxsZWQgPVxuZnVuY3Rpb24gUHJvcGVydGllc1Byb21pc2VBcnJheSRfcHJvbWlzZUZ1bGZpbGxlZCh2YWx1ZSwgaW5kZXgpIHtcbiAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm47XG4gICAgdGhpcy5fdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgIHZhciB0b3RhbFJlc29sdmVkID0gKyt0aGlzLl90b3RhbFJlc29sdmVkO1xuICAgIGlmICh0b3RhbFJlc29sdmVkID49IHRoaXMuX2xlbmd0aCkge1xuICAgICAgICB2YXIgdmFsID0ge307XG4gICAgICAgIHZhciBrZXlPZmZzZXQgPSB0aGlzLmxlbmd0aCgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5sZW5ndGgoKTsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICB2YWxbdGhpcy5fdmFsdWVzW2kgKyBrZXlPZmZzZXRdXSA9IHRoaXMuX3ZhbHVlc1tpXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZXNvbHZlKHZhbCk7XG4gICAgfVxufTtcblxuUHJvcGVydGllc1Byb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VQcm9ncmVzc2VkID1cbmZ1bmN0aW9uIFByb3BlcnRpZXNQcm9taXNlQXJyYXkkX3Byb21pc2VQcm9ncmVzc2VkKHZhbHVlLCBpbmRleCkge1xuICAgIGlmICh0aGlzLl9pc1Jlc29sdmVkKCkpIHJldHVybjtcblxuICAgIHRoaXMuX3Byb21pc2UuX3Byb2dyZXNzKHtcbiAgICAgICAga2V5OiB0aGlzLl92YWx1ZXNbaW5kZXggKyB0aGlzLmxlbmd0aCgpXSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG59O1xuXG5Qcm9wZXJ0aWVzUHJvbWlzZUFycmF5LnByb3RvdHlwZS5zaG91bGRDb3B5VmFsdWVzID1cbmZ1bmN0aW9uIFByb3BlcnRpZXNQcm9taXNlQXJyYXkkX3Nob3VsZENvcHlWYWx1ZXMoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuUHJvcGVydGllc1Byb21pc2VBcnJheS5wcm90b3R5cGUuZ2V0QWN0dWFsTGVuZ3RoID1cbmZ1bmN0aW9uIFByb3BlcnRpZXNQcm9taXNlQXJyYXkkZ2V0QWN0dWFsTGVuZ3RoKGxlbikge1xuICAgIHJldHVybiBsZW4gPj4gMTtcbn07XG5cbmZ1bmN0aW9uIFByb21pc2UkX1Byb3BzKHByb21pc2VzKSB7XG4gICAgdmFyIHJldDtcbiAgICB2YXIgY2FzdFZhbHVlID0gY2FzdChwcm9taXNlcywgdm9pZCAwKTtcblxuICAgIGlmICghaXNPYmplY3QoY2FzdFZhbHVlKSkge1xuICAgICAgICByZXR1cm4gYXBpUmVqZWN0aW9uKFwiY2Fubm90IGF3YWl0IHByb3BlcnRpZXMgb2YgYSBub24tb2JqZWN0XCIpO1xuICAgIH0gZWxzZSBpZiAoY2FzdFZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICByZXQgPSBjYXN0VmFsdWUuX3RoZW4oUHJvbWlzZS5wcm9wcywgdm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgdm9pZCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXQgPSBuZXcgUHJvcGVydGllc1Byb21pc2VBcnJheShjYXN0VmFsdWUpLnByb21pc2UoKTtcbiAgICB9XG5cbiAgICBpZiAoY2FzdFZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICByZXQuX3Byb3BhZ2F0ZUZyb20oY2FzdFZhbHVlLCA0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUucHJvcHMgPSBmdW5jdGlvbiBQcm9taXNlJHByb3BzKCkge1xuICAgIHJldHVybiBQcm9taXNlJF9Qcm9wcyh0aGlzKTtcbn07XG5cblByb21pc2UucHJvcHMgPSBmdW5jdGlvbiBQcm9taXNlJFByb3BzKHByb21pc2VzKSB7XG4gICAgcmV0dXJuIFByb21pc2UkX1Byb3BzKHByb21pc2VzKTtcbn07XG59O1xuIiwiLyoqXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBhcnJheUNvcHkoc3JjLCBzcmNJbmRleCwgZHN0LCBkc3RJbmRleCwgbGVuKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBsZW47ICsraikge1xuICAgICAgICBkc3RbaiArIGRzdEluZGV4XSA9IHNyY1tqICsgc3JjSW5kZXhdO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gUXVldWUoY2FwYWNpdHkpIHtcbiAgICB0aGlzLl9jYXBhY2l0eSA9IGNhcGFjaXR5O1xuICAgIHRoaXMuX2xlbmd0aCA9IDA7XG4gICAgdGhpcy5fZnJvbnQgPSAwO1xuICAgIHRoaXMuX21ha2VDYXBhY2l0eSgpO1xufVxuXG5RdWV1ZS5wcm90b3R5cGUuX3dpbGxCZU92ZXJDYXBhY2l0eSA9XG5mdW5jdGlvbiBRdWV1ZSRfd2lsbEJlT3ZlckNhcGFjaXR5KHNpemUpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FwYWNpdHkgPCBzaXplO1xufTtcblxuUXVldWUucHJvdG90eXBlLl9wdXNoT25lID0gZnVuY3Rpb24gUXVldWUkX3B1c2hPbmUoYXJnKSB7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG4gICAgdGhpcy5fY2hlY2tDYXBhY2l0eShsZW5ndGggKyAxKTtcbiAgICB2YXIgaSA9ICh0aGlzLl9mcm9udCArIGxlbmd0aCkgJiAodGhpcy5fY2FwYWNpdHkgLSAxKTtcbiAgICB0aGlzW2ldID0gYXJnO1xuICAgIHRoaXMuX2xlbmd0aCA9IGxlbmd0aCArIDE7XG59O1xuXG5RdWV1ZS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIFF1ZXVlJHB1c2goZm4sIHJlY2VpdmVyLCBhcmcpIHtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKSArIDM7XG4gICAgaWYgKHRoaXMuX3dpbGxCZU92ZXJDYXBhY2l0eShsZW5ndGgpKSB7XG4gICAgICAgIHRoaXMuX3B1c2hPbmUoZm4pO1xuICAgICAgICB0aGlzLl9wdXNoT25lKHJlY2VpdmVyKTtcbiAgICAgICAgdGhpcy5fcHVzaE9uZShhcmcpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBqID0gdGhpcy5fZnJvbnQgKyBsZW5ndGggLSAzO1xuICAgIHRoaXMuX2NoZWNrQ2FwYWNpdHkobGVuZ3RoKTtcbiAgICB2YXIgd3JhcE1hc2sgPSB0aGlzLl9jYXBhY2l0eSAtIDE7XG4gICAgdGhpc1soaiArIDApICYgd3JhcE1hc2tdID0gZm47XG4gICAgdGhpc1soaiArIDEpICYgd3JhcE1hc2tdID0gcmVjZWl2ZXI7XG4gICAgdGhpc1soaiArIDIpICYgd3JhcE1hc2tdID0gYXJnO1xuICAgIHRoaXMuX2xlbmd0aCA9IGxlbmd0aDtcbn07XG5cblF1ZXVlLnByb3RvdHlwZS5zaGlmdCA9IGZ1bmN0aW9uIFF1ZXVlJHNoaWZ0KCkge1xuICAgIHZhciBmcm9udCA9IHRoaXMuX2Zyb250LFxuICAgICAgICByZXQgPSB0aGlzW2Zyb250XTtcblxuICAgIHRoaXNbZnJvbnRdID0gdm9pZCAwO1xuICAgIHRoaXMuX2Zyb250ID0gKGZyb250ICsgMSkgJiAodGhpcy5fY2FwYWNpdHkgLSAxKTtcbiAgICB0aGlzLl9sZW5ndGgtLTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuUXVldWUucHJvdG90eXBlLmxlbmd0aCA9IGZ1bmN0aW9uIFF1ZXVlJGxlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGVuZ3RoO1xufTtcblxuUXVldWUucHJvdG90eXBlLl9tYWtlQ2FwYWNpdHkgPSBmdW5jdGlvbiBRdWV1ZSRfbWFrZUNhcGFjaXR5KCkge1xuICAgIHZhciBsZW4gPSB0aGlzLl9jYXBhY2l0eTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIHRoaXNbaV0gPSB2b2lkIDA7XG4gICAgfVxufTtcblxuUXVldWUucHJvdG90eXBlLl9jaGVja0NhcGFjaXR5ID0gZnVuY3Rpb24gUXVldWUkX2NoZWNrQ2FwYWNpdHkoc2l6ZSkge1xuICAgIGlmICh0aGlzLl9jYXBhY2l0eSA8IHNpemUpIHtcbiAgICAgICAgdGhpcy5fcmVzaXplVG8odGhpcy5fY2FwYWNpdHkgPDwgMyk7XG4gICAgfVxufTtcblxuUXVldWUucHJvdG90eXBlLl9yZXNpemVUbyA9IGZ1bmN0aW9uIFF1ZXVlJF9yZXNpemVUbyhjYXBhY2l0eSkge1xuICAgIHZhciBvbGRGcm9udCA9IHRoaXMuX2Zyb250O1xuICAgIHZhciBvbGRDYXBhY2l0eSA9IHRoaXMuX2NhcGFjaXR5O1xuICAgIHZhciBvbGRRdWV1ZSA9IG5ldyBBcnJheShvbGRDYXBhY2l0eSk7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG5cbiAgICBhcnJheUNvcHkodGhpcywgMCwgb2xkUXVldWUsIDAsIG9sZENhcGFjaXR5KTtcbiAgICB0aGlzLl9jYXBhY2l0eSA9IGNhcGFjaXR5O1xuICAgIHRoaXMuX21ha2VDYXBhY2l0eSgpO1xuICAgIHRoaXMuX2Zyb250ID0gMDtcbiAgICBpZiAob2xkRnJvbnQgKyBsZW5ndGggPD0gb2xkQ2FwYWNpdHkpIHtcbiAgICAgICAgYXJyYXlDb3B5KG9sZFF1ZXVlLCBvbGRGcm9udCwgdGhpcywgMCwgbGVuZ3RoKTtcbiAgICB9IGVsc2UgeyAgICAgICAgdmFyIGxlbmd0aEJlZm9yZVdyYXBwaW5nID1cbiAgICAgICAgICAgIGxlbmd0aCAtICgob2xkRnJvbnQgKyBsZW5ndGgpICYgKG9sZENhcGFjaXR5IC0gMSkpO1xuXG4gICAgICAgIGFycmF5Q29weShvbGRRdWV1ZSwgb2xkRnJvbnQsIHRoaXMsIDAsIGxlbmd0aEJlZm9yZVdyYXBwaW5nKTtcbiAgICAgICAgYXJyYXlDb3B5KG9sZFF1ZXVlLCAwLCB0aGlzLCBsZW5ndGhCZWZvcmVXcmFwcGluZyxcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoIC0gbGVuZ3RoQmVmb3JlV3JhcHBpbmcpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUXVldWU7XG4iLCIvKipcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgSU5URVJOQUwsIGNhc3QpIHtcbnZhciBhcGlSZWplY3Rpb24gPSByZXF1aXJlKFwiLi9lcnJvcnNfYXBpX3JlamVjdGlvbi5qc1wiKShQcm9taXNlKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKS5pc0FycmF5O1xuXG52YXIgcmFjZUxhdGVyID0gZnVuY3Rpb24gUHJvbWlzZSRfcmFjZUxhdGVyKHByb21pc2UpIHtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlJF9SYWNlKGFycmF5LCBwcm9taXNlKTtcbiAgICB9KTtcbn07XG5cbnZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIFByb21pc2UkX1JhY2UocHJvbWlzZXMsIHBhcmVudCkge1xuICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0KHByb21pc2VzLCB2b2lkIDApO1xuXG4gICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIHJhY2VMYXRlcihtYXliZVByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoIWlzQXJyYXkocHJvbWlzZXMpKSB7XG4gICAgICAgIHJldHVybiBhcGlSZWplY3Rpb24oXCJleHBlY3RpbmcgYW4gYXJyYXksIGEgcHJvbWlzZSBvciBhIHRoZW5hYmxlXCIpO1xuICAgIH1cblxuICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgaWYgKHBhcmVudCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldC5fcHJvcGFnYXRlRnJvbShwYXJlbnQsIDcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldC5fc2V0VHJhY2Uodm9pZCAwKTtcbiAgICB9XG4gICAgdmFyIGZ1bGZpbGwgPSByZXQuX2Z1bGZpbGw7XG4gICAgdmFyIHJlamVjdCA9IHJldC5fcmVqZWN0O1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwcm9taXNlcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICB2YXIgdmFsID0gcHJvbWlzZXNbaV07XG5cbiAgICAgICAgaWYgKHZhbCA9PT0gdm9pZCAwICYmICEoaGFzT3duLmNhbGwocHJvbWlzZXMsIGkpKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBQcm9taXNlLmNhc3QodmFsKS5fdGhlbihmdWxmaWxsLCByZWplY3QsIHZvaWQgMCwgcmV0LCBudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuUHJvbWlzZS5yYWNlID0gZnVuY3Rpb24gUHJvbWlzZSRSYWNlKHByb21pc2VzKSB7XG4gICAgcmV0dXJuIFByb21pc2UkX1JhY2UocHJvbWlzZXMsIHZvaWQgMCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5yYWNlID0gZnVuY3Rpb24gUHJvbWlzZSRyYWNlKCkge1xuICAgIHJldHVybiBQcm9taXNlJF9SYWNlKHRoaXMsIHZvaWQgMCk7XG59O1xuXG59O1xuIiwiLyoqXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSwgYXBpUmVqZWN0aW9uLCBjYXN0LCBJTlRFUk5BTCkge1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIHRyeUNhdGNoNCA9IHV0aWwudHJ5Q2F0Y2g0O1xudmFyIHRyeUNhdGNoMyA9IHV0aWwudHJ5Q2F0Y2gzO1xudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcbmZ1bmN0aW9uIFJlZHVjdGlvblByb21pc2VBcnJheShwcm9taXNlcywgZm4sIGFjY3VtLCBfZWFjaCkge1xuICAgIHRoaXMuY29uc3RydWN0b3IkKHByb21pc2VzKTtcbiAgICB0aGlzLl9wcmVzZXJ2ZWRWYWx1ZXMgPSBfZWFjaCA9PT0gSU5URVJOQUwgPyBbXSA6IG51bGw7XG4gICAgdGhpcy5femVyb3RoSXNBY2N1bSA9IChhY2N1bSA9PT0gdm9pZCAwKTtcbiAgICB0aGlzLl9nb3RBY2N1bSA9IGZhbHNlO1xuICAgIHRoaXMuX3JlZHVjaW5nSW5kZXggPSAodGhpcy5femVyb3RoSXNBY2N1bSA/IDEgOiAwKTtcbiAgICB0aGlzLl92YWx1ZXNQaGFzZSA9IHVuZGVmaW5lZDtcblxuICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0KGFjY3VtLCB2b2lkIDApO1xuICAgIHZhciByZWplY3RlZCA9IGZhbHNlO1xuICAgIHZhciBpc1Byb21pc2UgPSBtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlO1xuICAgIGlmIChpc1Byb21pc2UpIHtcbiAgICAgICAgaWYgKG1heWJlUHJvbWlzZS5pc1BlbmRpbmcoKSkge1xuICAgICAgICAgICAgbWF5YmVQcm9taXNlLl9wcm94eVByb21pc2VBcnJheSh0aGlzLCAtMSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWF5YmVQcm9taXNlLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgICAgIGFjY3VtID0gbWF5YmVQcm9taXNlLnZhbHVlKCk7XG4gICAgICAgICAgICB0aGlzLl9nb3RBY2N1bSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXliZVByb21pc2UuX3Vuc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQoKTtcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdChtYXliZVByb21pc2UucmVhc29uKCkpO1xuICAgICAgICAgICAgcmVqZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghKGlzUHJvbWlzZSB8fCB0aGlzLl96ZXJvdGhJc0FjY3VtKSkgdGhpcy5fZ290QWNjdW0gPSB0cnVlO1xuICAgIHRoaXMuX2NhbGxiYWNrID0gZm47XG4gICAgdGhpcy5fYWNjdW0gPSBhY2N1bTtcbiAgICBpZiAoIXJlamVjdGVkKSB0aGlzLl9pbml0JCh2b2lkIDAsIC01KTtcbn1cbnV0aWwuaW5oZXJpdHMoUmVkdWN0aW9uUHJvbWlzZUFycmF5LCBQcm9taXNlQXJyYXkpO1xuXG5SZWR1Y3Rpb25Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9pbml0ID1cbmZ1bmN0aW9uIFJlZHVjdGlvblByb21pc2VBcnJheSRfaW5pdCgpIHt9O1xuXG5SZWR1Y3Rpb25Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9yZXNvbHZlRW1wdHlBcnJheSA9XG5mdW5jdGlvbiBSZWR1Y3Rpb25Qcm9taXNlQXJyYXkkX3Jlc29sdmVFbXB0eUFycmF5KCkge1xuICAgIGlmICh0aGlzLl9nb3RBY2N1bSB8fCB0aGlzLl96ZXJvdGhJc0FjY3VtKSB7XG4gICAgICAgIHRoaXMuX3Jlc29sdmUodGhpcy5fcHJlc2VydmVkVmFsdWVzICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtdIDogdGhpcy5fYWNjdW0pO1xuICAgIH1cbn07XG5cblJlZHVjdGlvblByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VGdWxmaWxsZWQgPVxuZnVuY3Rpb24gUmVkdWN0aW9uUHJvbWlzZUFycmF5JF9wcm9taXNlRnVsZmlsbGVkKHZhbHVlLCBpbmRleCkge1xuICAgIHZhciB2YWx1ZXMgPSB0aGlzLl92YWx1ZXM7XG4gICAgaWYgKHZhbHVlcyA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuICAgIHZhciBwcmVzZXJ2ZWRWYWx1ZXMgPSB0aGlzLl9wcmVzZXJ2ZWRWYWx1ZXM7XG4gICAgdmFyIGlzRWFjaCA9IHByZXNlcnZlZFZhbHVlcyAhPT0gbnVsbDtcbiAgICB2YXIgZ290QWNjdW0gPSB0aGlzLl9nb3RBY2N1bTtcbiAgICB2YXIgdmFsdWVzUGhhc2UgPSB0aGlzLl92YWx1ZXNQaGFzZTtcbiAgICB2YXIgdmFsdWVzUGhhc2VJbmRleDtcbiAgICBpZiAoIXZhbHVlc1BoYXNlKSB7XG4gICAgICAgIHZhbHVlc1BoYXNlID0gdGhpcy5fdmFsdWVzUGhhc2UgPSBBcnJheShsZW5ndGgpO1xuICAgICAgICBmb3IgKHZhbHVlc1BoYXNlSW5kZXg9MDsgdmFsdWVzUGhhc2VJbmRleDxsZW5ndGg7ICsrdmFsdWVzUGhhc2VJbmRleCkge1xuICAgICAgICAgICAgdmFsdWVzUGhhc2VbdmFsdWVzUGhhc2VJbmRleF0gPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhbHVlc1BoYXNlSW5kZXggPSB2YWx1ZXNQaGFzZVtpbmRleF07XG5cbiAgICBpZiAoaW5kZXggPT09IDAgJiYgdGhpcy5femVyb3RoSXNBY2N1bSkge1xuICAgICAgICBpZiAoIWdvdEFjY3VtKSB7XG4gICAgICAgICAgICB0aGlzLl9hY2N1bSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fZ290QWNjdW0gPSBnb3RBY2N1bSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWVzUGhhc2VbaW5kZXhdID0gKCh2YWx1ZXNQaGFzZUluZGV4ID09PSAwKVxuICAgICAgICAgICAgPyAxIDogMik7XG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgaWYgKCFnb3RBY2N1bSkge1xuICAgICAgICAgICAgdGhpcy5fYWNjdW0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX2dvdEFjY3VtID0gZ290QWNjdW0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHZhbHVlc1BoYXNlSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHZhbHVlc1BoYXNlW2luZGV4XSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZXNQaGFzZVtpbmRleF0gPSAyO1xuICAgICAgICAgICAgaWYgKGdvdEFjY3VtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWNjdW0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWdvdEFjY3VtKSByZXR1cm47XG5cbiAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLl9jYWxsYmFjaztcbiAgICB2YXIgcmVjZWl2ZXIgPSB0aGlzLl9wcm9taXNlLl9ib3VuZFRvO1xuICAgIHZhciByZXQ7XG5cbiAgICBmb3IgKHZhciBpID0gdGhpcy5fcmVkdWNpbmdJbmRleDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhbHVlc1BoYXNlSW5kZXggPSB2YWx1ZXNQaGFzZVtpXTtcbiAgICAgICAgaWYgKHZhbHVlc1BoYXNlSW5kZXggPT09IDIpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlZHVjaW5nSW5kZXggPSBpICsgMTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZXNQaGFzZUluZGV4ICE9PSAxKSByZXR1cm47XG5cbiAgICAgICAgdmFsdWUgPSB2YWx1ZXNbaV07XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5fc2V0dGxlZFZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5pc1BlbmRpbmcoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuX3Vuc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVqZWN0KHZhbHVlLnJlYXNvbigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0VhY2gpIHtcbiAgICAgICAgICAgIHByZXNlcnZlZFZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIHJldCA9IHRyeUNhdGNoMyhjYWxsYmFjaywgcmVjZWl2ZXIsIHZhbHVlLCBpLCBsZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0ID0gdHJ5Q2F0Y2g0KGNhbGxiYWNrLCByZWNlaXZlciwgdGhpcy5fYWNjdW0sIHZhbHVlLCBpLCBsZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHJldHVybiB0aGlzLl9yZWplY3QocmV0LmUpO1xuXG4gICAgICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0KHJldCwgdm9pZCAwKTtcbiAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIGlmIChtYXliZVByb21pc2UuaXNQZW5kaW5nKCkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNQaGFzZVtpXSA9IDQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1heWJlUHJvbWlzZS5fcHJveHlQcm9taXNlQXJyYXkodGhpcywgaSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1heWJlUHJvbWlzZS5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0ID0gbWF5YmVQcm9taXNlLnZhbHVlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fdW5zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWplY3QobWF5YmVQcm9taXNlLnJlYXNvbigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3JlZHVjaW5nSW5kZXggPSBpICsgMTtcbiAgICAgICAgdGhpcy5fYWNjdW0gPSByZXQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3JlZHVjaW5nSW5kZXggPCBsZW5ndGgpIHJldHVybjtcbiAgICB0aGlzLl9yZXNvbHZlKGlzRWFjaCA/IHByZXNlcnZlZFZhbHVlcyA6IHRoaXMuX2FjY3VtKTtcbn07XG5cbmZ1bmN0aW9uIHJlZHVjZShwcm9taXNlcywgZm4sIGluaXRpYWxWYWx1ZSwgX2VhY2gpIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBhcGlSZWplY3Rpb24oXCJmbiBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gICAgdmFyIGFycmF5ID0gbmV3IFJlZHVjdGlvblByb21pc2VBcnJheShwcm9taXNlcywgZm4sIGluaXRpYWxWYWx1ZSwgX2VhY2gpO1xuICAgIHJldHVybiBhcnJheS5wcm9taXNlKCk7XG59XG5cblByb21pc2UucHJvdG90eXBlLnJlZHVjZSA9IGZ1bmN0aW9uIFByb21pc2UkcmVkdWNlKGZuLCBpbml0aWFsVmFsdWUpIHtcbiAgICByZXR1cm4gcmVkdWNlKHRoaXMsIGZuLCBpbml0aWFsVmFsdWUsIG51bGwpO1xufTtcblxuUHJvbWlzZS5yZWR1Y2UgPSBmdW5jdGlvbiBQcm9taXNlJFJlZHVjZShwcm9taXNlcywgZm4sIGluaXRpYWxWYWx1ZSwgX2VhY2gpIHtcbiAgICByZXR1cm4gcmVkdWNlKHByb21pc2VzLCBmbiwgaW5pdGlhbFZhbHVlLCBfZWFjaCk7XG59O1xufTtcbiIsIihmdW5jdGlvbiAocHJvY2Vzcyl7XG4vKipcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbnZhciBzY2hlZHVsZTtcbnZhciBfTXV0YXRpb25PYnNlcnZlcjtcbmlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcHJvY2Vzcy52ZXJzaW9uID09PSBcInN0cmluZ1wiKSB7XG4gICAgc2NoZWR1bGUgPSBmdW5jdGlvbiBQcm9taXNlJF9TY2hlZHVsZXIoZm4pIHtcbiAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbik7XG4gICAgfTtcbn1cbmVsc2UgaWYgKCh0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgKF9NdXRhdGlvbk9ic2VydmVyID0gTXV0YXRpb25PYnNlcnZlcikpIHx8XG4gICAgICAgICAodHlwZW9mIFdlYktpdE11dGF0aW9uT2JzZXJ2ZXIgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgIChfTXV0YXRpb25PYnNlcnZlciA9IFdlYktpdE11dGF0aW9uT2JzZXJ2ZXIpKSkge1xuICAgIHNjaGVkdWxlID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIHF1ZXVlZEZuID0gdm9pZCAwO1xuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgX011dGF0aW9uT2JzZXJ2ZXIoXG4gICAgICAgICAgICBmdW5jdGlvbiBQcm9taXNlJF9TY2hlZHVsZXIoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZuID0gcXVldWVkRm47XG4gICAgICAgICAgICAgICAgcXVldWVkRm4gPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICApO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRpdiwge1xuICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIFByb21pc2UkX1NjaGVkdWxlcihmbikge1xuICAgICAgICAgICAgcXVldWVkRm4gPSBmbjtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QudG9nZ2xlKFwiZm9vXCIpO1xuICAgICAgICB9O1xuXG4gICAgfSkoKTtcbn1cbmVsc2UgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgc2NoZWR1bGUgPSBmdW5jdGlvbiBQcm9taXNlJF9TY2hlZHVsZXIoZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn1cbmVsc2UgdGhyb3cgbmV3IEVycm9yKFwibm8gYXN5bmMgc2NoZWR1bGVyIGF2YWlsYWJsZVwiKTtcbm1vZHVsZS5leHBvcnRzID0gc2NoZWR1bGU7XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKCdfcHJvY2VzcycpKSIsIi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPVxuICAgIGZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSkge1xudmFyIFByb21pc2VJbnNwZWN0aW9uID0gUHJvbWlzZS5Qcm9taXNlSW5zcGVjdGlvbjtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKTtcblxuZnVuY3Rpb24gU2V0dGxlZFByb21pc2VBcnJheSh2YWx1ZXMpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9yJCh2YWx1ZXMpO1xufVxudXRpbC5pbmhlcml0cyhTZXR0bGVkUHJvbWlzZUFycmF5LCBQcm9taXNlQXJyYXkpO1xuXG5TZXR0bGVkUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZVJlc29sdmVkID1cbmZ1bmN0aW9uIFNldHRsZWRQcm9taXNlQXJyYXkkX3Byb21pc2VSZXNvbHZlZChpbmRleCwgaW5zcGVjdGlvbikge1xuICAgIHRoaXMuX3ZhbHVlc1tpbmRleF0gPSBpbnNwZWN0aW9uO1xuICAgIHZhciB0b3RhbFJlc29sdmVkID0gKyt0aGlzLl90b3RhbFJlc29sdmVkO1xuICAgIGlmICh0b3RhbFJlc29sdmVkID49IHRoaXMuX2xlbmd0aCkge1xuICAgICAgICB0aGlzLl9yZXNvbHZlKHRoaXMuX3ZhbHVlcyk7XG4gICAgfVxufTtcblxuU2V0dGxlZFByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VGdWxmaWxsZWQgPVxuZnVuY3Rpb24gU2V0dGxlZFByb21pc2VBcnJheSRfcHJvbWlzZUZ1bGZpbGxlZCh2YWx1ZSwgaW5kZXgpIHtcbiAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm47XG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlSW5zcGVjdGlvbigpO1xuICAgIHJldC5fYml0RmllbGQgPSAyNjg0MzU0NTY7XG4gICAgcmV0Ll9zZXR0bGVkVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9wcm9taXNlUmVzb2x2ZWQoaW5kZXgsIHJldCk7XG59O1xuU2V0dGxlZFByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VSZWplY3RlZCA9XG5mdW5jdGlvbiBTZXR0bGVkUHJvbWlzZUFycmF5JF9wcm9taXNlUmVqZWN0ZWQocmVhc29uLCBpbmRleCkge1xuICAgIGlmICh0aGlzLl9pc1Jlc29sdmVkKCkpIHJldHVybjtcbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2VJbnNwZWN0aW9uKCk7XG4gICAgcmV0Ll9iaXRGaWVsZCA9IDEzNDIxNzcyODtcbiAgICByZXQuX3NldHRsZWRWYWx1ZSA9IHJlYXNvbjtcbiAgICB0aGlzLl9wcm9taXNlUmVzb2x2ZWQoaW5kZXgsIHJldCk7XG59O1xuXG5Qcm9taXNlLnNldHRsZSA9IGZ1bmN0aW9uIFByb21pc2UkU2V0dGxlKHByb21pc2VzKSB7XG4gICAgcmV0dXJuIG5ldyBTZXR0bGVkUHJvbWlzZUFycmF5KHByb21pc2VzKS5wcm9taXNlKCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5zZXR0bGUgPSBmdW5jdGlvbiBQcm9taXNlJHNldHRsZSgpIHtcbiAgICByZXR1cm4gbmV3IFNldHRsZWRQcm9taXNlQXJyYXkodGhpcykucHJvbWlzZSgpO1xufTtcbn07XG4iLCIvKipcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID1cbmZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSwgYXBpUmVqZWN0aW9uKSB7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgUmFuZ2VFcnJvciA9IHJlcXVpcmUoXCIuL2Vycm9ycy5qc1wiKS5SYW5nZUVycm9yO1xudmFyIEFnZ3JlZ2F0ZUVycm9yID0gcmVxdWlyZShcIi4vZXJyb3JzLmpzXCIpLkFnZ3JlZ2F0ZUVycm9yO1xudmFyIGlzQXJyYXkgPSB1dGlsLmlzQXJyYXk7XG5cblxuZnVuY3Rpb24gU29tZVByb21pc2VBcnJheSh2YWx1ZXMpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9yJCh2YWx1ZXMpO1xuICAgIHRoaXMuX2hvd01hbnkgPSAwO1xuICAgIHRoaXMuX3Vud3JhcCA9IGZhbHNlO1xuICAgIHRoaXMuX2luaXRpYWxpemVkID0gZmFsc2U7XG59XG51dGlsLmluaGVyaXRzKFNvbWVQcm9taXNlQXJyYXksIFByb21pc2VBcnJheSk7XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gU29tZVByb21pc2VBcnJheSRfaW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuX2luaXRpYWxpemVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hvd01hbnkgPT09IDApIHtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZShbXSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5faW5pdCQodm9pZCAwLCAtNSk7XG4gICAgdmFyIGlzQXJyYXlSZXNvbHZlZCA9IGlzQXJyYXkodGhpcy5fdmFsdWVzKTtcbiAgICBpZiAoIXRoaXMuX2lzUmVzb2x2ZWQoKSAmJlxuICAgICAgICBpc0FycmF5UmVzb2x2ZWQgJiZcbiAgICAgICAgdGhpcy5faG93TWFueSA+IHRoaXMuX2NhblBvc3NpYmx5RnVsZmlsbCgpKSB7XG4gICAgICAgIHRoaXMuX3JlamVjdCh0aGlzLl9nZXRSYW5nZUVycm9yKHRoaXMubGVuZ3RoKCkpKTtcbiAgICB9XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gU29tZVByb21pc2VBcnJheSRpbml0KCkge1xuICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB0aGlzLl9pbml0KCk7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5zZXRVbndyYXAgPSBmdW5jdGlvbiBTb21lUHJvbWlzZUFycmF5JHNldFVud3JhcCgpIHtcbiAgICB0aGlzLl91bndyYXAgPSB0cnVlO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuaG93TWFueSA9IGZ1bmN0aW9uIFNvbWVQcm9taXNlQXJyYXkkaG93TWFueSgpIHtcbiAgICByZXR1cm4gdGhpcy5faG93TWFueTtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLnNldEhvd01hbnkgPVxuZnVuY3Rpb24gU29tZVByb21pc2VBcnJheSRzZXRIb3dNYW55KGNvdW50KSB7XG4gICAgaWYgKHRoaXMuX2lzUmVzb2x2ZWQoKSkgcmV0dXJuO1xuICAgIHRoaXMuX2hvd01hbnkgPSBjb3VudDtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlRnVsZmlsbGVkID1cbmZ1bmN0aW9uIFNvbWVQcm9taXNlQXJyYXkkX3Byb21pc2VGdWxmaWxsZWQodmFsdWUpIHtcbiAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm47XG4gICAgdGhpcy5fYWRkRnVsZmlsbGVkKHZhbHVlKTtcbiAgICBpZiAodGhpcy5fZnVsZmlsbGVkKCkgPT09IHRoaXMuaG93TWFueSgpKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlcy5sZW5ndGggPSB0aGlzLmhvd01hbnkoKTtcbiAgICAgICAgaWYgKHRoaXMuaG93TWFueSgpID09PSAxICYmIHRoaXMuX3Vud3JhcCkge1xuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZSh0aGlzLl92YWx1ZXNbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZSh0aGlzLl92YWx1ZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VSZWplY3RlZCA9XG5mdW5jdGlvbiBTb21lUHJvbWlzZUFycmF5JF9wcm9taXNlUmVqZWN0ZWQocmVhc29uKSB7XG4gICAgaWYgKHRoaXMuX2lzUmVzb2x2ZWQoKSkgcmV0dXJuO1xuICAgIHRoaXMuX2FkZFJlamVjdGVkKHJlYXNvbik7XG4gICAgaWYgKHRoaXMuaG93TWFueSgpID4gdGhpcy5fY2FuUG9zc2libHlGdWxmaWxsKCkpIHtcbiAgICAgICAgdmFyIGUgPSBuZXcgQWdncmVnYXRlRXJyb3IoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMubGVuZ3RoKCk7IGkgPCB0aGlzLl92YWx1ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGUucHVzaCh0aGlzLl92YWx1ZXNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3JlamVjdChlKTtcbiAgICB9XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fZnVsZmlsbGVkID0gZnVuY3Rpb24gU29tZVByb21pc2VBcnJheSRfZnVsZmlsbGVkKCkge1xuICAgIHJldHVybiB0aGlzLl90b3RhbFJlc29sdmVkO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX3JlamVjdGVkID0gZnVuY3Rpb24gU29tZVByb21pc2VBcnJheSRfcmVqZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlcy5sZW5ndGggLSB0aGlzLmxlbmd0aCgpO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX2FkZFJlamVjdGVkID1cbmZ1bmN0aW9uIFNvbWVQcm9taXNlQXJyYXkkX2FkZFJlamVjdGVkKHJlYXNvbikge1xuICAgIHRoaXMuX3ZhbHVlcy5wdXNoKHJlYXNvbik7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fYWRkRnVsZmlsbGVkID1cbmZ1bmN0aW9uIFNvbWVQcm9taXNlQXJyYXkkX2FkZEZ1bGZpbGxlZCh2YWx1ZSkge1xuICAgIHRoaXMuX3ZhbHVlc1t0aGlzLl90b3RhbFJlc29sdmVkKytdID0gdmFsdWU7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fY2FuUG9zc2libHlGdWxmaWxsID1cbmZ1bmN0aW9uIFNvbWVQcm9taXNlQXJyYXkkX2NhblBvc3NpYmx5RnVsZmlsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGgoKSAtIHRoaXMuX3JlamVjdGVkKCk7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fZ2V0UmFuZ2VFcnJvciA9XG5mdW5jdGlvbiBTb21lUHJvbWlzZUFycmF5JF9nZXRSYW5nZUVycm9yKGNvdW50KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSBcIklucHV0IGFycmF5IG11c3QgY29udGFpbiBhdCBsZWFzdCBcIiArXG4gICAgICAgICAgICB0aGlzLl9ob3dNYW55ICsgXCIgaXRlbXMgYnV0IGNvbnRhaW5zIG9ubHkgXCIgKyBjb3VudCArIFwiIGl0ZW1zXCI7XG4gICAgcmV0dXJuIG5ldyBSYW5nZUVycm9yKG1lc3NhZ2UpO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX3Jlc29sdmVFbXB0eUFycmF5ID1cbmZ1bmN0aW9uIFNvbWVQcm9taXNlQXJyYXkkX3Jlc29sdmVFbXB0eUFycmF5KCkge1xuICAgIHRoaXMuX3JlamVjdCh0aGlzLl9nZXRSYW5nZUVycm9yKDApKTtcbn07XG5cbmZ1bmN0aW9uIFByb21pc2UkX1NvbWUocHJvbWlzZXMsIGhvd01hbnkpIHtcbiAgICBpZiAoKGhvd01hbnkgfCAwKSAhPT0gaG93TWFueSB8fCBob3dNYW55IDwgMCkge1xuICAgICAgICByZXR1cm4gYXBpUmVqZWN0aW9uKFwiZXhwZWN0aW5nIGEgcG9zaXRpdmUgaW50ZWdlclwiKTtcbiAgICB9XG4gICAgdmFyIHJldCA9IG5ldyBTb21lUHJvbWlzZUFycmF5KHByb21pc2VzKTtcbiAgICB2YXIgcHJvbWlzZSA9IHJldC5wcm9taXNlKCk7XG4gICAgaWYgKHByb21pc2UuaXNSZWplY3RlZCgpKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICByZXQuc2V0SG93TWFueShob3dNYW55KTtcbiAgICByZXQuaW5pdCgpO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5Qcm9taXNlLnNvbWUgPSBmdW5jdGlvbiBQcm9taXNlJFNvbWUocHJvbWlzZXMsIGhvd01hbnkpIHtcbiAgICByZXR1cm4gUHJvbWlzZSRfU29tZShwcm9taXNlcywgaG93TWFueSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5zb21lID0gZnVuY3Rpb24gUHJvbWlzZSRzb21lKGhvd01hbnkpIHtcbiAgICByZXR1cm4gUHJvbWlzZSRfU29tZSh0aGlzLCBob3dNYW55KTtcbn07XG5cblByb21pc2UuX1NvbWVQcm9taXNlQXJyYXkgPSBTb21lUHJvbWlzZUFycmF5O1xufTtcbiIsIi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlKSB7XG5mdW5jdGlvbiBQcm9taXNlSW5zcGVjdGlvbihwcm9taXNlKSB7XG4gICAgaWYgKHByb21pc2UgIT09IHZvaWQgMCkge1xuICAgICAgICB0aGlzLl9iaXRGaWVsZCA9IHByb21pc2UuX2JpdEZpZWxkO1xuICAgICAgICB0aGlzLl9zZXR0bGVkVmFsdWUgPSBwcm9taXNlLmlzUmVzb2x2ZWQoKVxuICAgICAgICAgICAgPyBwcm9taXNlLl9zZXR0bGVkVmFsdWVcbiAgICAgICAgICAgIDogdm9pZCAwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5fYml0RmllbGQgPSAwO1xuICAgICAgICB0aGlzLl9zZXR0bGVkVmFsdWUgPSB2b2lkIDA7XG4gICAgfVxufVxuXG5Qcm9taXNlSW5zcGVjdGlvbi5wcm90b3R5cGUuaXNGdWxmaWxsZWQgPVxuUHJvbWlzZS5wcm90b3R5cGUuaXNGdWxmaWxsZWQgPSBmdW5jdGlvbiBQcm9taXNlJGlzRnVsZmlsbGVkKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiAyNjg0MzU0NTYpID4gMDtcbn07XG5cblByb21pc2VJbnNwZWN0aW9uLnByb3RvdHlwZS5pc1JlamVjdGVkID1cblByb21pc2UucHJvdG90eXBlLmlzUmVqZWN0ZWQgPSBmdW5jdGlvbiBQcm9taXNlJGlzUmVqZWN0ZWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDEzNDIxNzcyOCkgPiAwO1xufTtcblxuUHJvbWlzZUluc3BlY3Rpb24ucHJvdG90eXBlLmlzUGVuZGluZyA9XG5Qcm9taXNlLnByb3RvdHlwZS5pc1BlbmRpbmcgPSBmdW5jdGlvbiBQcm9taXNlJGlzUGVuZGluZygpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgNDAyNjUzMTg0KSA9PT0gMDtcbn07XG5cblByb21pc2VJbnNwZWN0aW9uLnByb3RvdHlwZS52YWx1ZSA9XG5Qcm9taXNlLnByb3RvdHlwZS52YWx1ZSA9IGZ1bmN0aW9uIFByb21pc2UkdmFsdWUoKSB7XG4gICAgaWYgKCF0aGlzLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNhbm5vdCBnZXQgZnVsZmlsbG1lbnQgdmFsdWUgb2YgYSBub24tZnVsZmlsbGVkIHByb21pc2VcIik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zZXR0bGVkVmFsdWU7XG59O1xuXG5Qcm9taXNlSW5zcGVjdGlvbi5wcm90b3R5cGUuZXJyb3IgPVxuUHJvbWlzZUluc3BlY3Rpb24ucHJvdG90eXBlLnJlYXNvbiA9XG5Qcm9taXNlLnByb3RvdHlwZS5yZWFzb24gPSBmdW5jdGlvbiBQcm9taXNlJHJlYXNvbigpIHtcbiAgICBpZiAoIXRoaXMuaXNSZWplY3RlZCgpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJjYW5ub3QgZ2V0IHJlamVjdGlvbiByZWFzb24gb2YgYSBub24tcmVqZWN0ZWQgcHJvbWlzZVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3NldHRsZWRWYWx1ZTtcbn07XG5cblByb21pc2VJbnNwZWN0aW9uLnByb3RvdHlwZS5pc1Jlc29sdmVkID1cblByb21pc2UucHJvdG90eXBlLmlzUmVzb2x2ZWQgPSBmdW5jdGlvbiBQcm9taXNlJGlzUmVzb2x2ZWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDQwMjY1MzE4NCkgPiAwO1xufTtcblxuUHJvbWlzZS5Qcm9taXNlSW5zcGVjdGlvbiA9IFByb21pc2VJbnNwZWN0aW9uO1xufTtcbiIsIi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCkge1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIGNhbkF0dGFjaCA9IHJlcXVpcmUoXCIuL2Vycm9ycy5qc1wiKS5jYW5BdHRhY2g7XG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xudmFyIGlzT2JqZWN0ID0gdXRpbC5pc09iamVjdDtcblxuZnVuY3Rpb24gZ2V0VGhlbihvYmopIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gb2JqLnRoZW47XG4gICAgfVxuICAgIGNhdGNoKGUpIHtcbiAgICAgICAgZXJyb3JPYmouZSA9IGU7XG4gICAgICAgIHJldHVybiBlcnJvck9iajtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIFByb21pc2UkX0Nhc3Qob2JqLCBvcmlnaW5hbFByb21pc2UpIHtcbiAgICBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0FueUJsdWViaXJkUHJvbWlzZShvYmopKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgICAgICAgICAgcmV0Ll9zZXRUcmFjZSh2b2lkIDApO1xuICAgICAgICAgICAgb2JqLl90aGVuKFxuICAgICAgICAgICAgICAgIHJldC5fZnVsZmlsbFVuY2hlY2tlZCxcbiAgICAgICAgICAgICAgICByZXQuX3JlamVjdFVuY2hlY2tlZENoZWNrRXJyb3IsXG4gICAgICAgICAgICAgICAgcmV0Ll9wcm9ncmVzc1VuY2hlY2tlZCxcbiAgICAgICAgICAgICAgICByZXQsXG4gICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldC5fc2V0Rm9sbG93aW5nKCk7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG4gICAgICAgIHZhciB0aGVuID0gZ2V0VGhlbihvYmopO1xuICAgICAgICBpZiAodGhlbiA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbFByb21pc2UgIT09IHZvaWQgMCAmJiBjYW5BdHRhY2godGhlbi5lKSkge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsUHJvbWlzZS5fYXR0YWNoRXh0cmFUcmFjZSh0aGVuLmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHRoZW4uZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UkX2RvVGhlbmFibGUob2JqLCB0aGVuLCBvcmlnaW5hbFByb21pc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5cbnZhciBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiBpc0FueUJsdWViaXJkUHJvbWlzZShvYmopIHtcbiAgICByZXR1cm4gaGFzUHJvcC5jYWxsKG9iaiwgXCJfcHJvbWlzZTBcIik7XG59XG5cbmZ1bmN0aW9uIFByb21pc2UkX2RvVGhlbmFibGUoeCwgdGhlbiwgb3JpZ2luYWxQcm9taXNlKSB7XG4gICAgdmFyIHJlc29sdmVyID0gUHJvbWlzZS5kZWZlcigpO1xuICAgIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgICB0aGVuLmNhbGwoXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgUHJvbWlzZSRfcmVzb2x2ZUZyb21UaGVuYWJsZSxcbiAgICAgICAgICAgIFByb21pc2UkX3JlamVjdEZyb21UaGVuYWJsZSxcbiAgICAgICAgICAgIFByb21pc2UkX3Byb2dyZXNzRnJvbVRoZW5hYmxlXG4gICAgICAgICk7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIHRyYWNlID0gY2FuQXR0YWNoKGUpID8gZSA6IG5ldyBFcnJvcihlICsgXCJcIik7XG4gICAgICAgICAgICBpZiAob3JpZ2luYWxQcm9taXNlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFByb21pc2UuX2F0dGFjaEV4dHJhVHJhY2UodHJhY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZXIucHJvbWlzZS5fcmVqZWN0KGUsIHRyYWNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzb2x2ZXIucHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIFByb21pc2UkX3Jlc29sdmVGcm9tVGhlbmFibGUoeSkge1xuICAgICAgICBpZiAoY2FsbGVkKSByZXR1cm47XG4gICAgICAgIGNhbGxlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKHggPT09IHkpIHtcbiAgICAgICAgICAgIHZhciBlID0gUHJvbWlzZS5fbWFrZVNlbGZSZXNvbHV0aW9uRXJyb3IoKTtcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbFByb21pc2UgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsUHJvbWlzZS5fYXR0YWNoRXh0cmFUcmFjZShlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmVyLnByb21pc2UuX3JlamVjdChlLCB2b2lkIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVyLnJlc29sdmUoeSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gUHJvbWlzZSRfcmVqZWN0RnJvbVRoZW5hYmxlKHIpIHtcbiAgICAgICAgaWYgKGNhbGxlZCkgcmV0dXJuO1xuICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICB2YXIgdHJhY2UgPSBjYW5BdHRhY2gocikgPyByIDogbmV3IEVycm9yKHIgKyBcIlwiKTtcbiAgICAgICAgaWYgKG9yaWdpbmFsUHJvbWlzZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBvcmlnaW5hbFByb21pc2UuX2F0dGFjaEV4dHJhVHJhY2UodHJhY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVyLnByb21pc2UuX3JlamVjdChyLCB0cmFjZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gUHJvbWlzZSRfcHJvZ3Jlc3NGcm9tVGhlbmFibGUodikge1xuICAgICAgICBpZiAoY2FsbGVkKSByZXR1cm47XG4gICAgICAgIHZhciBwcm9taXNlID0gcmVzb2x2ZXIucHJvbWlzZTtcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9taXNlLl9wcm9ncmVzcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBwcm9taXNlLl9wcm9ncmVzcyh2KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxucmV0dXJuIFByb21pc2UkX0Nhc3Q7XG59O1xuIiwiLyoqXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX3NldFRpbWVvdXQgPSBmdW5jdGlvbihmbiwgbXMpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgYXJnMCA9IGFyZ3VtZW50c1syXTtcbiAgICB2YXIgYXJnMSA9IGFyZ3VtZW50c1szXTtcbiAgICB2YXIgYXJnMiA9IGxlbiA+PSA1ID8gYXJndW1lbnRzWzRdIDogdm9pZCAwO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGZuKGFyZzAsIGFyZzEsIGFyZzIpO1xuICAgIH0sIG1zfDApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCwgY2FzdCkge1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIGVycm9ycyA9IHJlcXVpcmUoXCIuL2Vycm9ycy5qc1wiKTtcbnZhciBhcGlSZWplY3Rpb24gPSByZXF1aXJlKFwiLi9lcnJvcnNfYXBpX3JlamVjdGlvblwiKShQcm9taXNlKTtcbnZhciBUaW1lb3V0RXJyb3IgPSBQcm9taXNlLlRpbWVvdXRFcnJvcjtcblxudmFyIGFmdGVyVGltZW91dCA9IGZ1bmN0aW9uIFByb21pc2UkX2FmdGVyVGltZW91dChwcm9taXNlLCBtZXNzYWdlLCBtcykge1xuICAgIGlmICghcHJvbWlzZS5pc1BlbmRpbmcoKSkgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgbWVzc2FnZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICBtZXNzYWdlID0gXCJvcGVyYXRpb24gdGltZWQgb3V0IGFmdGVyXCIgKyBcIiBcIiArIG1zICsgXCIgbXNcIlxuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IFRpbWVvdXRFcnJvcihtZXNzYWdlKTtcbiAgICBlcnJvcnMubWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uKGVycik7XG4gICAgcHJvbWlzZS5fYXR0YWNoRXh0cmFUcmFjZShlcnIpO1xuICAgIHByb21pc2UuX2NhbmNlbChlcnIpO1xufTtcblxudmFyIGFmdGVyRGVsYXkgPSBmdW5jdGlvbiBQcm9taXNlJF9hZnRlckRlbGF5KHZhbHVlLCBwcm9taXNlKSB7XG4gICAgcHJvbWlzZS5fZnVsZmlsbCh2YWx1ZSk7XG59O1xuXG52YXIgZGVsYXkgPSBQcm9taXNlLmRlbGF5ID0gZnVuY3Rpb24gUHJvbWlzZSREZWxheSh2YWx1ZSwgbXMpIHtcbiAgICBpZiAobXMgPT09IHZvaWQgMCkge1xuICAgICAgICBtcyA9IHZhbHVlO1xuICAgICAgICB2YWx1ZSA9IHZvaWQgMDtcbiAgICB9XG4gICAgbXMgPSArbXM7XG4gICAgdmFyIG1heWJlUHJvbWlzZSA9IGNhc3QodmFsdWUsIHZvaWQgMCk7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG5cbiAgICBpZiAobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBwcm9taXNlLl9wcm9wYWdhdGVGcm9tKG1heWJlUHJvbWlzZSwgNyk7XG4gICAgICAgIHByb21pc2UuX2ZvbGxvdyhtYXliZVByb21pc2UpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5kZWxheSh2YWx1ZSwgbXMpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9taXNlLl9zZXRUcmFjZSh2b2lkIDApO1xuICAgICAgICBfc2V0VGltZW91dChhZnRlckRlbGF5LCBtcywgdmFsdWUsIHByb21pc2UpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmRlbGF5ID0gZnVuY3Rpb24gUHJvbWlzZSRkZWxheShtcykge1xuICAgIHJldHVybiBkZWxheSh0aGlzLCBtcyk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS50aW1lb3V0ID0gZnVuY3Rpb24gUHJvbWlzZSR0aW1lb3V0KG1zLCBtZXNzYWdlKSB7XG4gICAgbXMgPSArbXM7XG5cbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIHJldC5fcHJvcGFnYXRlRnJvbSh0aGlzLCA3KTtcbiAgICByZXQuX2ZvbGxvdyh0aGlzKTtcbiAgICBfc2V0VGltZW91dChhZnRlclRpbWVvdXQsIG1zLCByZXQsIG1lc3NhZ2UsIG1zKTtcbiAgICByZXR1cm4gcmV0LmNhbmNlbGxhYmxlKCk7XG59O1xuXG59O1xuIiwiLyoqXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChQcm9taXNlLCBhcGlSZWplY3Rpb24sIGNhc3QpIHtcbiAgICB2YXIgVHlwZUVycm9yID0gcmVxdWlyZShcIi4vZXJyb3JzLmpzXCIpLlR5cGVFcnJvcjtcbiAgICB2YXIgaW5oZXJpdHMgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpLmluaGVyaXRzO1xuICAgIHZhciBQcm9taXNlSW5zcGVjdGlvbiA9IFByb21pc2UuUHJvbWlzZUluc3BlY3Rpb247XG5cbiAgICBmdW5jdGlvbiBpbnNwZWN0aW9uTWFwcGVyKGluc3BlY3Rpb25zKSB7XG4gICAgICAgIHZhciBsZW4gPSBpbnNwZWN0aW9ucy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBpbnNwZWN0aW9uID0gaW5zcGVjdGlvbnNbaV07XG4gICAgICAgICAgICBpZiAoaW5zcGVjdGlvbi5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoaW5zcGVjdGlvbi5lcnJvcigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluc3BlY3Rpb25zW2ldID0gaW5zcGVjdGlvbi52YWx1ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnNwZWN0aW9ucztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0aHJvd2VyKGUpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGU7fSwgMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FzdFByZXNlcnZpbmdEaXNwb3NhYmxlKHRoZW5hYmxlKSB7XG4gICAgICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0KHRoZW5hYmxlLCB2b2lkIDApO1xuICAgICAgICBpZiAobWF5YmVQcm9taXNlICE9PSB0aGVuYWJsZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHRoZW5hYmxlLl9pc0Rpc3Bvc2FibGUgPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICAgICAgdHlwZW9mIHRoZW5hYmxlLl9nZXREaXNwb3NlciA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgICAgICB0aGVuYWJsZS5faXNEaXNwb3NhYmxlKCkpIHtcbiAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fc2V0RGlzcG9zYWJsZSh0aGVuYWJsZS5fZ2V0RGlzcG9zZXIoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heWJlUHJvbWlzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzcG9zZShyZXNvdXJjZXMsIGluc3BlY3Rpb24pIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgbGVuID0gcmVzb3VyY2VzLmxlbmd0aDtcbiAgICAgICAgdmFyIHJldCA9IFByb21pc2UuZGVmZXIoKTtcbiAgICAgICAgZnVuY3Rpb24gaXRlcmF0b3IoKSB7XG4gICAgICAgICAgICBpZiAoaSA+PSBsZW4pIHJldHVybiByZXQucmVzb2x2ZSgpO1xuICAgICAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IGNhc3RQcmVzZXJ2aW5nRGlzcG9zYWJsZShyZXNvdXJjZXNbaSsrXSk7XG4gICAgICAgICAgICBpZiAobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSAmJlxuICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5faXNEaXNwb3NhYmxlKCkpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBtYXliZVByb21pc2UgPSBjYXN0KG1heWJlUHJvbWlzZS5fZ2V0RGlzcG9zZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50cnlEaXNwb3NlKGluc3BlY3Rpb24pLCB2b2lkIDApO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRocm93ZXIoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXliZVByb21pc2UuX3RoZW4oaXRlcmF0b3IsIHRocm93ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCwgbnVsbCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlcmF0b3IoKTtcbiAgICAgICAgfVxuICAgICAgICBpdGVyYXRvcigpO1xuICAgICAgICByZXR1cm4gcmV0LnByb21pc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcG9zZXJTdWNjZXNzKHZhbHVlKSB7XG4gICAgICAgIHZhciBpbnNwZWN0aW9uID0gbmV3IFByb21pc2VJbnNwZWN0aW9uKCk7XG4gICAgICAgIGluc3BlY3Rpb24uX3NldHRsZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICBpbnNwZWN0aW9uLl9iaXRGaWVsZCA9IDI2ODQzNTQ1NjtcbiAgICAgICAgcmV0dXJuIGRpc3Bvc2UodGhpcywgaW5zcGVjdGlvbikudGhlblJldHVybih2YWx1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcG9zZXJGYWlsKHJlYXNvbikge1xuICAgICAgICB2YXIgaW5zcGVjdGlvbiA9IG5ldyBQcm9taXNlSW5zcGVjdGlvbigpO1xuICAgICAgICBpbnNwZWN0aW9uLl9zZXR0bGVkVmFsdWUgPSByZWFzb247XG4gICAgICAgIGluc3BlY3Rpb24uX2JpdEZpZWxkID0gMTM0MjE3NzI4O1xuICAgICAgICByZXR1cm4gZGlzcG9zZSh0aGlzLCBpbnNwZWN0aW9uKS50aGVuVGhyb3cocmVhc29uKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBEaXNwb3NlcihkYXRhLCBwcm9taXNlKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLl9wcm9taXNlID0gcHJvbWlzZTtcbiAgICB9XG5cbiAgICBEaXNwb3Nlci5wcm90b3R5cGUuZGF0YSA9IGZ1bmN0aW9uIERpc3Bvc2VyJGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH07XG5cbiAgICBEaXNwb3Nlci5wcm90b3R5cGUucHJvbWlzZSA9IGZ1bmN0aW9uIERpc3Bvc2VyJHByb21pc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xuICAgIH07XG5cbiAgICBEaXNwb3Nlci5wcm90b3R5cGUucmVzb3VyY2UgPSBmdW5jdGlvbiBEaXNwb3NlciRyZXNvdXJjZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvbWlzZSgpLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb21pc2UoKS52YWx1ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBEaXNwb3Nlci5wcm90b3R5cGUudHJ5RGlzcG9zZSA9IGZ1bmN0aW9uKGluc3BlY3Rpb24pIHtcbiAgICAgICAgdmFyIHJlc291cmNlID0gdGhpcy5yZXNvdXJjZSgpO1xuICAgICAgICB2YXIgcmV0ID0gcmVzb3VyY2UgIT09IG51bGxcbiAgICAgICAgICAgID8gdGhpcy5kb0Rpc3Bvc2UocmVzb3VyY2UsIGluc3BlY3Rpb24pIDogbnVsbDtcbiAgICAgICAgdGhpcy5fcHJvbWlzZS5fdW5zZXREaXNwb3NhYmxlKCk7XG4gICAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9wcm9taXNlID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuXG4gICAgRGlzcG9zZXIuaXNEaXNwb3NlciA9IGZ1bmN0aW9uIERpc3Bvc2VyJGlzRGlzcG9zZXIoZCkge1xuICAgICAgICByZXR1cm4gKGQgIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBkLnJlc291cmNlID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZC50cnlEaXNwb3NlID09PSBcImZ1bmN0aW9uXCIpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBGdW5jdGlvbkRpc3Bvc2VyKGZuLCBwcm9taXNlKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IkKGZuLCBwcm9taXNlKTtcbiAgICB9XG4gICAgaW5oZXJpdHMoRnVuY3Rpb25EaXNwb3NlciwgRGlzcG9zZXIpO1xuXG4gICAgRnVuY3Rpb25EaXNwb3Nlci5wcm90b3R5cGUuZG9EaXNwb3NlID0gZnVuY3Rpb24gKHJlc291cmNlLCBpbnNwZWN0aW9uKSB7XG4gICAgICAgIHZhciBmbiA9IHRoaXMuZGF0YSgpO1xuICAgICAgICByZXR1cm4gZm4uY2FsbChyZXNvdXJjZSwgcmVzb3VyY2UsIGluc3BlY3Rpb24pO1xuICAgIH07XG5cbiAgICBQcm9taXNlLnVzaW5nID0gZnVuY3Rpb24gUHJvbWlzZSR1c2luZygpIHtcbiAgICAgICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPCAyKSByZXR1cm4gYXBpUmVqZWN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ5b3UgbXVzdCBwYXNzIGF0IGxlYXN0IDIgYXJndW1lbnRzIHRvIFByb21pc2UudXNpbmdcIik7XG4gICAgICAgIHZhciBmbiA9IGFyZ3VtZW50c1tsZW4gLSAxXTtcbiAgICAgICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gYXBpUmVqZWN0aW9uKFwiZm4gbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICBsZW4tLTtcbiAgICAgICAgdmFyIHJlc291cmNlcyA9IG5ldyBBcnJheShsZW4pO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICB2YXIgcmVzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBpZiAoRGlzcG9zZXIuaXNEaXNwb3NlcihyZXNvdXJjZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlzcG9zZXIgPSByZXNvdXJjZTtcbiAgICAgICAgICAgICAgICByZXNvdXJjZSA9IHJlc291cmNlLnByb21pc2UoKTtcbiAgICAgICAgICAgICAgICByZXNvdXJjZS5fc2V0RGlzcG9zYWJsZShkaXNwb3Nlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvdXJjZXNbaV0gPSByZXNvdXJjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnNldHRsZShyZXNvdXJjZXMpXG4gICAgICAgICAgICAudGhlbihpbnNwZWN0aW9uTWFwcGVyKVxuICAgICAgICAgICAgLnNwcmVhZChmbilcbiAgICAgICAgICAgIC5fdGhlbihkaXNwb3NlclN1Y2Nlc3MsIGRpc3Bvc2VyRmFpbCwgdm9pZCAwLCByZXNvdXJjZXMsIHZvaWQgMCk7XG4gICAgfTtcblxuICAgIFByb21pc2UucHJvdG90eXBlLl9zZXREaXNwb3NhYmxlID1cbiAgICBmdW5jdGlvbiBQcm9taXNlJF9zZXREaXNwb3NhYmxlKGRpc3Bvc2VyKSB7XG4gICAgICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCAyNjIxNDQ7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VyID0gZGlzcG9zZXI7XG4gICAgfTtcblxuICAgIFByb21pc2UucHJvdG90eXBlLl9pc0Rpc3Bvc2FibGUgPSBmdW5jdGlvbiBQcm9taXNlJF9pc0Rpc3Bvc2FibGUoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiAyNjIxNDQpID4gMDtcbiAgICB9O1xuXG4gICAgUHJvbWlzZS5wcm90b3R5cGUuX2dldERpc3Bvc2VyID0gZnVuY3Rpb24gUHJvbWlzZSRfZ2V0RGlzcG9zZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNwb3NlcjtcbiAgICB9O1xuXG4gICAgUHJvbWlzZS5wcm90b3R5cGUuX3Vuc2V0RGlzcG9zYWJsZSA9IGZ1bmN0aW9uIFByb21pc2UkX3Vuc2V0RGlzcG9zYWJsZSgpIHtcbiAgICAgICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCAmICh+MjYyMTQ0KTtcbiAgICAgICAgdGhpcy5fZGlzcG9zZXIgPSB2b2lkIDA7XG4gICAgfTtcblxuICAgIFByb21pc2UucHJvdG90eXBlLmRpc3Bvc2VyID0gZnVuY3Rpb24gUHJvbWlzZSRkaXNwb3Nlcihmbikge1xuICAgICAgICBpZiAodHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRnVuY3Rpb25EaXNwb3NlcihmbiwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgIH07XG5cbn07XG4iLCIvKipcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbnZhciBlczUgPSByZXF1aXJlKFwiLi9lczUuanNcIik7XG52YXIgaGF2ZUdldHRlcnMgPSAoZnVuY3Rpb24oKXtcbiAgICB0cnkge1xuICAgICAgICB2YXIgbyA9IHt9O1xuICAgICAgICBlczUuZGVmaW5lUHJvcGVydHkobywgXCJmXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG8uZiA9PT0gMztcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxufSkoKTtcbnZhciBjYW5FdmFsdWF0ZSA9IHR5cGVvZiBuYXZpZ2F0b3IgPT0gXCJ1bmRlZmluZWRcIjtcbnZhciBlcnJvck9iaiA9IHtlOiB7fX07XG5mdW5jdGlvbiB0cnlDYXRjaDEoZm4sIHJlY2VpdmVyLCBhcmcpIHtcbiAgICB0cnkgeyByZXR1cm4gZm4uY2FsbChyZWNlaXZlciwgYXJnKTsgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGVycm9yT2JqLmUgPSBlO1xuICAgICAgICByZXR1cm4gZXJyb3JPYmo7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0cnlDYXRjaDIoZm4sIHJlY2VpdmVyLCBhcmcsIGFyZzIpIHtcbiAgICB0cnkgeyByZXR1cm4gZm4uY2FsbChyZWNlaXZlciwgYXJnLCBhcmcyKTsgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGVycm9yT2JqLmUgPSBlO1xuICAgICAgICByZXR1cm4gZXJyb3JPYmo7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0cnlDYXRjaDMoZm4sIHJlY2VpdmVyLCBhcmcsIGFyZzIsIGFyZzMpIHtcbiAgICB0cnkgeyByZXR1cm4gZm4uY2FsbChyZWNlaXZlciwgYXJnLCBhcmcyLCBhcmczKTsgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGVycm9yT2JqLmUgPSBlO1xuICAgICAgICByZXR1cm4gZXJyb3JPYmo7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0cnlDYXRjaDQoZm4sIHJlY2VpdmVyLCBhcmcsIGFyZzIsIGFyZzMsIGFyZzQpIHtcbiAgICB0cnkgeyByZXR1cm4gZm4uY2FsbChyZWNlaXZlciwgYXJnLCBhcmcyLCBhcmczLCBhcmc0KTsgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGVycm9yT2JqLmUgPSBlO1xuICAgICAgICByZXR1cm4gZXJyb3JPYmo7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0cnlDYXRjaEFwcGx5KGZuLCBhcmdzLCByZWNlaXZlcikge1xuICAgIHRyeSB7IHJldHVybiBmbi5hcHBseShyZWNlaXZlciwgYXJncyk7IH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBlcnJvck9iai5lID0gZTtcbiAgICAgICAgcmV0dXJuIGVycm9yT2JqO1xuICAgIH1cbn1cblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24oQ2hpbGQsIFBhcmVudCkge1xuICAgIHZhciBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbiAgICBmdW5jdGlvbiBUKCkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gQ2hpbGQ7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IkID0gUGFyZW50O1xuICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gUGFyZW50LnByb3RvdHlwZSkge1xuICAgICAgICAgICAgaWYgKGhhc1Byb3AuY2FsbChQYXJlbnQucHJvdG90eXBlLCBwcm9wZXJ0eU5hbWUpICYmXG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lLmNoYXJBdChwcm9wZXJ0eU5hbWUubGVuZ3RoLTEpICE9PSBcIiRcIlxuICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzW3Byb3BlcnR5TmFtZSArIFwiJFwiXSA9IFBhcmVudC5wcm90b3R5cGVbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBULnByb3RvdHlwZSA9IFBhcmVudC5wcm90b3R5cGU7XG4gICAgQ2hpbGQucHJvdG90eXBlID0gbmV3IFQoKTtcbiAgICByZXR1cm4gQ2hpbGQucHJvdG90eXBlO1xufTtcblxuZnVuY3Rpb24gYXNTdHJpbmcodmFsKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyB2YWwgOiAoXCJcIiArIHZhbCk7XG59XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKHZhbCkge1xuICAgIHJldHVybiB2YWwgPT0gbnVsbCB8fCB2YWwgPT09IHRydWUgfHwgdmFsID09PSBmYWxzZSB8fFxuICAgICAgICB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCI7XG5cbn1cblxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gIWlzUHJpbWl0aXZlKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gbWF5YmVXcmFwQXNFcnJvcihtYXliZUVycm9yKSB7XG4gICAgaWYgKCFpc1ByaW1pdGl2ZShtYXliZUVycm9yKSkgcmV0dXJuIG1heWJlRXJyb3I7XG5cbiAgICByZXR1cm4gbmV3IEVycm9yKGFzU3RyaW5nKG1heWJlRXJyb3IpKTtcbn1cblxuZnVuY3Rpb24gd2l0aEFwcGVuZGVkKHRhcmdldCwgYXBwZW5kZWUpIHtcbiAgICB2YXIgbGVuID0gdGFyZ2V0Lmxlbmd0aDtcbiAgICB2YXIgcmV0ID0gbmV3IEFycmF5KGxlbiArIDEpO1xuICAgIHZhciBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICByZXRbaV0gPSB0YXJnZXRbaV07XG4gICAgfVxuICAgIHJldFtpXSA9IGFwcGVuZGVlO1xuICAgIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGdldERhdGFQcm9wZXJ0eU9yRGVmYXVsdChvYmosIGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKGVzNS5pc0VTNSkge1xuICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpO1xuICAgICAgICBpZiAoZGVzYyAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVzYy5nZXQgPT0gbnVsbCAmJiBkZXNjLnNldCA9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgID8gZGVzYy52YWx1ZVxuICAgICAgICAgICAgICAgICAgICA6IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSA/IG9ialtrZXldIDogdm9pZCAwO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbm90RW51bWVyYWJsZVByb3Aob2JqLCBuYW1lLCB2YWx1ZSkge1xuICAgIGlmIChpc1ByaW1pdGl2ZShvYmopKSByZXR1cm4gb2JqO1xuICAgIHZhciBkZXNjcmlwdG9yID0ge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfTtcbiAgICBlczUuZGVmaW5lUHJvcGVydHkob2JqLCBuYW1lLCBkZXNjcmlwdG9yKTtcbiAgICByZXR1cm4gb2JqO1xufVxuXG5cbnZhciB3cmFwc1ByaW1pdGl2ZVJlY2VpdmVyID0gKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzICE9PSBcInN0cmluZ1wiO1xufSkuY2FsbChcInN0cmluZ1wiKTtcblxuZnVuY3Rpb24gdGhyb3dlcihyKSB7XG4gICAgdGhyb3cgcjtcbn1cblxudmFyIGluaGVyaXRlZERhdGFLZXlzID0gKGZ1bmN0aW9uKCkge1xuICAgIGlmIChlczUuaXNFUzUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9iaiwgb3B0cykge1xuICAgICAgICAgICAgdmFyIHJldCA9IFtdO1xuICAgICAgICAgICAgdmFyIHZpc2l0ZWRLZXlzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICAgIHZhciBnZXRLZXlzID0gT2JqZWN0KG9wdHMpLmluY2x1ZGVIaWRkZW5cbiAgICAgICAgICAgICAgICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gICAgICAgICAgICAgICAgOiBPYmplY3Qua2V5cztcbiAgICAgICAgICAgIHdoaWxlIChvYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciBrZXlzO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXMgPSBnZXRLZXlzKG9iaik7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICh2aXNpdGVkS2V5c1trZXldKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdmlzaXRlZEtleXNba2V5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXNjICE9IG51bGwgJiYgZGVzYy5nZXQgPT0gbnVsbCAmJiBkZXNjLnNldCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXQucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9iaiA9IGVzNS5nZXRQcm90b3R5cGVPZihvYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gW107XG4gICAgICAgICAgICAvKmpzaGludCBmb3JpbjpmYWxzZSAqL1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICAgICAgICAgIHJldC5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9O1xuICAgIH1cblxufSkoKTtcblxuZnVuY3Rpb24gaXNDbGFzcyhmbikge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBlczUua2V5cyhmbi5wcm90b3R5cGUpO1xuICAgICAgICAgICAgcmV0dXJuIGtleXMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICEoa2V5cy5sZW5ndGggPT09IDEgJiYga2V5c1swXSA9PT0gXCJjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b0Zhc3RQcm9wZXJ0aWVzKG9iaikge1xuICAgIC8qanNoaW50IC1XMDI3Ki9cbiAgICBmdW5jdGlvbiBmKCkge31cbiAgICBmLnByb3RvdHlwZSA9IG9iajtcbiAgICByZXR1cm4gZjtcbiAgICBldmFsKG9iaik7XG59XG5cbnZhciByaWRlbnQgPSAvXlthLXokX11bYS16JF8wLTldKiQvaTtcbmZ1bmN0aW9uIGlzSWRlbnRpZmllcihzdHIpIHtcbiAgICByZXR1cm4gcmlkZW50LnRlc3Qoc3RyKTtcbn1cblxuZnVuY3Rpb24gZmlsbGVkUmFuZ2UoY291bnQsIHByZWZpeCwgc3VmZml4KSB7XG4gICAgdmFyIHJldCA9IG5ldyBBcnJheShjb3VudCk7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgcmV0W2ldID0gcHJlZml4ICsgaSArIHN1ZmZpeDtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxudmFyIHJldCA9IHtcbiAgICBpc0NsYXNzOiBpc0NsYXNzLFxuICAgIGlzSWRlbnRpZmllcjogaXNJZGVudGlmaWVyLFxuICAgIGluaGVyaXRlZERhdGFLZXlzOiBpbmhlcml0ZWREYXRhS2V5cyxcbiAgICBnZXREYXRhUHJvcGVydHlPckRlZmF1bHQ6IGdldERhdGFQcm9wZXJ0eU9yRGVmYXVsdCxcbiAgICB0aHJvd2VyOiB0aHJvd2VyLFxuICAgIGlzQXJyYXk6IGVzNS5pc0FycmF5LFxuICAgIGhhdmVHZXR0ZXJzOiBoYXZlR2V0dGVycyxcbiAgICBub3RFbnVtZXJhYmxlUHJvcDogbm90RW51bWVyYWJsZVByb3AsXG4gICAgaXNQcmltaXRpdmU6IGlzUHJpbWl0aXZlLFxuICAgIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgICBjYW5FdmFsdWF0ZTogY2FuRXZhbHVhdGUsXG4gICAgZXJyb3JPYmo6IGVycm9yT2JqLFxuICAgIHRyeUNhdGNoMTogdHJ5Q2F0Y2gxLFxuICAgIHRyeUNhdGNoMjogdHJ5Q2F0Y2gyLFxuICAgIHRyeUNhdGNoMzogdHJ5Q2F0Y2gzLFxuICAgIHRyeUNhdGNoNDogdHJ5Q2F0Y2g0LFxuICAgIHRyeUNhdGNoQXBwbHk6IHRyeUNhdGNoQXBwbHksXG4gICAgaW5oZXJpdHM6IGluaGVyaXRzLFxuICAgIHdpdGhBcHBlbmRlZDogd2l0aEFwcGVuZGVkLFxuICAgIGFzU3RyaW5nOiBhc1N0cmluZyxcbiAgICBtYXliZVdyYXBBc0Vycm9yOiBtYXliZVdyYXBBc0Vycm9yLFxuICAgIHdyYXBzUHJpbWl0aXZlUmVjZWl2ZXI6IHdyYXBzUHJpbWl0aXZlUmVjZWl2ZXIsXG4gICAgdG9GYXN0UHJvcGVydGllczogdG9GYXN0UHJvcGVydGllcyxcbiAgICBmaWxsZWRSYW5nZTogZmlsbGVkUmFuZ2Vcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmV0O1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxucHJvY2Vzcy5uZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhblNldEltbWVkaWF0ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnNldEltbWVkaWF0ZTtcbiAgICB2YXIgY2FuUG9zdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnBvc3RNZXNzYWdlICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyXG4gICAgO1xuXG4gICAgaWYgKGNhblNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIHdpbmRvdy5zZXRJbW1lZGlhdGUoZikgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB2YXIgcXVldWUgPSBbXTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBldi5zb3VyY2U7XG4gICAgICAgICAgICBpZiAoKHNvdXJjZSA9PT0gd2luZG93IHx8IHNvdXJjZSA9PT0gbnVsbCkgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufVxuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG4iXX0=
