(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var $, MainViewModel, ko;

$ = require('jquery');

require('bootstrap');

ko = require('knockout');

MainViewModel = require('./main_view_model.coffee');

ko.applyBindings(new MainViewModel);



},{"./main_view_model.coffee":6,"bootstrap":2,"jquery":3,"knockout":5}],2:[function(require,module,exports){
(function (global){

; $ = global.$ = require("/Users/japsu/Hobby/infokala/bower_components/jquery/dist/jquery.min.js");
;__browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.2.0",d.prototype.close=function(b){function c(){f.detach().trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",c).emulateTransitionEnd(150):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.2.0",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),d[e](null==f[b]?this.options[b]:f[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b).on("keydown.bs.carousel",a.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.2.0",c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},c.prototype.keydown=function(a){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.to=function(b){var c=this,d=this.getItemIndex(this.$active=this.$element.find(".item.active"));return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=e[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:g});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,f&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(e)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:g});return a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one("bsTransitionEnd",function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger(m)),f&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(b=!b),e||d.data("bs.collapse",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};c.VERSION="3.2.0",c.DEFAULTS={toggle:!0},c.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},c.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var c=a.Event("show.bs.collapse");if(this.$element.trigger(c),!c.isDefaultPrevented()){var d=this.$parent&&this.$parent.find("> .panel > .in");if(d&&d.length){var e=d.data("bs.collapse");if(e&&e.transitioning)return;b.call(d,"hide"),e||d.data("bs.collapse",null)}var f=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[f](0),this.transitioning=1;var g=function(){this.$element.removeClass("collapsing").addClass("collapse in")[f](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return g.call(this);var h=a.camelCase(["scroll",f].join("-"));this.$element.one("bsTransitionEnd",a.proxy(g,this)).emulateTransitionEnd(350)[f](this.$element[0][h])}}},c.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},c.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var d=a.fn.collapse;a.fn.collapse=b,a.fn.collapse.Constructor=c,a.fn.collapse.noConflict=function(){return a.fn.collapse=d,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(c){var d,e=a(this),f=e.attr("data-target")||c.preventDefault()||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),g=a(f),h=g.data("bs.collapse"),i=h?"toggle":e.data(),j=e.attr("data-parent"),k=j&&a(j);h&&h.transitioning||(k&&k.find('[data-toggle="collapse"][data-parent="'+j+'"]').not(e).addClass("collapsed"),e[g.hasClass("in")?"addClass":"removeClass"]("collapsed")),b.call(g,i)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.2.0",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f+', [role="menu"], [role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.2.0",c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(c.$body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one("bsTransitionEnd",function(){c.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(300):c.$element.trigger("focus").trigger(e)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;if(this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;e?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(150):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var f=function(){c.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",f).emulateTransitionEnd(150):f()}else b&&b()},c.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.2.0",c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var c=a.contains(document.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!c)return;var d=this,e=this.tip(),f=this.getUID(this.type);this.setContent(),e.attr("id",f),this.$element.attr("aria-describedby",f),this.options.animation&&e.addClass("fade");var g="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,h=/\s?auto?\s?/i,i=h.test(g);i&&(g=g.replace(h,"")||"top"),e.detach().css({top:0,left:0,display:"block"}).addClass(g).data("bs."+this.type,this),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element);var j=this.getPosition(),k=e[0].offsetWidth,l=e[0].offsetHeight;if(i){var m=g,n=this.$element.parent(),o=this.getPosition(n);g="bottom"==g&&j.top+j.height+l-o.scroll>o.height?"top":"top"==g&&j.top-o.scroll-l<0?"bottom":"right"==g&&j.right+k>o.width?"left":"left"==g&&j.left-k<o.left?"right":g,e.removeClass(m).addClass(g)}var p=this.getCalculatedOffset(g,j,k,l);this.applyPlacement(p,g);var q=function(){d.$element.trigger("shown.bs."+d.type),d.hoverState=null};a.support.transition&&this.$tip.hasClass("fade")?e.one("bsTransitionEnd",q).emulateTransitionEnd(150):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=k.left?2*k.left-e+i:2*k.top-f+j,m=k.left?"left":"top",n=k.left?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(l,d[0][n],m)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.removeAttr("aria-describedby"),this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one("bsTransitionEnd",b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName;return a.extend({},"function"==typeof c.getBoundingClientRect?c.getBoundingClientRect():null,{scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop(),width:d?a(window).width():b.outerWidth(),height:d?a(window).height():b.outerHeight()},d?{top:0,left:0}:b.offset())},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.2.0",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").empty()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.2.0",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.2.0",c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.closest("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},c.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one("bsTransitionEnd",e).emulateTransitionEnd(150):e(),f.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(c){c.preventDefault(),b.call(a(this),"show")})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.2.0",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=a(document).height(),d=this.$target.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=b-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){null!=this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:b-this.$element.height()-h}))}}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},d.offsetBottom&&(d.offset.bottom=d.offsetBottom),d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
; browserify_shim__define__module__export__(typeof jQuery != "undefined" ? jQuery : window.jQuery);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"/Users/japsu/Hobby/infokala/bower_components/jquery/dist/jquery.min.js":3}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
(function (factory) {
	// Module systems magic dance.

	if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
		// CommonJS or Node: hard-coded dependency on "knockout"
		factory(require("knockout"), exports);
	} else if (typeof define === "function" && define["amd"]) {
		// AMD anonymous module with hard-coded dependency on "knockout"
		define(["knockout", "exports"], factory);
	} else {
		// <script> tag: use the global `ko` object, attaching a `mapping` property
		factory(ko, ko.mapping = {});
	}
}(function (ko, exports) {
	var DEBUG=true;
	var mappingProperty = "__ko_mapping__";
	var realKoDependentObservable = ko.dependentObservable;
	var mappingNesting = 0;
	var dependentObservables;
	var visitedObjects;
	var recognizedRootProperties = ["create", "update", "key", "arrayChanged"];
	var emptyReturn = {};

	var _defaultOptions = {
		include: ["_destroy"],
		ignore: [],
		copy: [],
		observe: []
	};
	var defaultOptions = _defaultOptions;

	// Author: KennyTM @ StackOverflow
	function unionArrays (x, y) {
		var obj = {};
		for (var i = x.length - 1; i >= 0; -- i) obj[x[i]] = x[i];
		for (var i = y.length - 1; i >= 0; -- i) obj[y[i]] = y[i];
		var res = [];

		for (var k in obj) {
			res.push(obj[k]);
		};

		return res;
	}

	function extendObject(destination, source) {
		var destType;

		for (var key in source) {
			if (source.hasOwnProperty(key) && source[key]) {
				destType = exports.getType(destination[key]);
				if (key && destination[key] && destType !== "array" && destType !== "string") {
					extendObject(destination[key], source[key]);
				} else {
					var bothArrays = exports.getType(destination[key]) === "array" && exports.getType(source[key]) === "array";
					if (bothArrays) {
						destination[key] = unionArrays(destination[key], source[key]);
					} else {
						destination[key] = source[key];
					}
				}
			}
		}
	}

	function merge(obj1, obj2) {
		var merged = {};
		extendObject(merged, obj1);
		extendObject(merged, obj2);

		return merged;
	}

	exports.isMapped = function (viewModel) {
		var unwrapped = ko.utils.unwrapObservable(viewModel);
		return unwrapped && unwrapped[mappingProperty];
	}

	exports.fromJS = function (jsObject /*, inputOptions, target*/ ) {
		if (arguments.length == 0) throw new Error("When calling ko.fromJS, pass the object you want to convert.");

		try {
			if (!mappingNesting++) {
				dependentObservables = [];
				visitedObjects = new objectLookup();
			}

			var options;
			var target;

			if (arguments.length == 2) {
				if (arguments[1][mappingProperty]) {
					target = arguments[1];
				} else {
					options = arguments[1];
				}
			}
			if (arguments.length == 3) {
				options = arguments[1];
				target = arguments[2];
			}

			if (target) {
				options = merge(options, target[mappingProperty]);
			}
			options = fillOptions(options);

			var result = updateViewModel(target, jsObject, options);
			if (target) {
				result = target;
			}

			// Evaluate any dependent observables that were proxied.
			// Do this after the model's observables have been created
			if (!--mappingNesting) {
				while (dependentObservables.length) {
					var DO = dependentObservables.pop();
					if (DO) {
						DO();
						
						// Move this magic property to the underlying dependent observable
						DO.__DO["throttleEvaluation"] = DO["throttleEvaluation"];
					}
				}
			}

			// Save any new mapping options in the view model, so that updateFromJS can use them later.
			result[mappingProperty] = merge(result[mappingProperty], options);

			return result;
		} catch(e) {
			mappingNesting = 0;
			throw e;
		}
	};

	exports.fromJSON = function (jsonString /*, options, target*/ ) {
		var parsed = ko.utils.parseJson(jsonString);
		arguments[0] = parsed;
		return exports.fromJS.apply(this, arguments);
	};

	exports.updateFromJS = function (viewModel) {
		throw new Error("ko.mapping.updateFromJS, use ko.mapping.fromJS instead. Please note that the order of parameters is different!");
	};

	exports.updateFromJSON = function (viewModel) {
		throw new Error("ko.mapping.updateFromJSON, use ko.mapping.fromJSON instead. Please note that the order of parameters is different!");
	};

	exports.toJS = function (rootObject, options) {
		if (!defaultOptions) exports.resetDefaultOptions();

		if (arguments.length == 0) throw new Error("When calling ko.mapping.toJS, pass the object you want to convert.");
		if (exports.getType(defaultOptions.ignore) !== "array") throw new Error("ko.mapping.defaultOptions().ignore should be an array.");
		if (exports.getType(defaultOptions.include) !== "array") throw new Error("ko.mapping.defaultOptions().include should be an array.");
		if (exports.getType(defaultOptions.copy) !== "array") throw new Error("ko.mapping.defaultOptions().copy should be an array.");

		// Merge in the options used in fromJS
		options = fillOptions(options, rootObject[mappingProperty]);

		// We just unwrap everything at every level in the object graph
		return exports.visitModel(rootObject, function (x) {
			return ko.utils.unwrapObservable(x)
		}, options);
	};

	exports.toJSON = function (rootObject, options) {
		var plainJavaScriptObject = exports.toJS(rootObject, options);
		return ko.utils.stringifyJson(plainJavaScriptObject);
	};

	exports.defaultOptions = function () {
		if (arguments.length > 0) {
			defaultOptions = arguments[0];
		} else {
			return defaultOptions;
		}
	};

	exports.resetDefaultOptions = function () {
		defaultOptions = {
			include: _defaultOptions.include.slice(0),
			ignore: _defaultOptions.ignore.slice(0),
			copy: _defaultOptions.copy.slice(0)
		};
	};

	exports.getType = function(x) {
		if ((x) && (typeof (x) === "object")) {
			if (x.constructor === Date) return "date";
			if (x.constructor === Array) return "array";
		}
		return typeof x;
	}

	function fillOptions(rawOptions, otherOptions) {
		var options = merge({}, rawOptions);

		// Move recognized root-level properties into a root namespace
		for (var i = recognizedRootProperties.length - 1; i >= 0; i--) {
			var property = recognizedRootProperties[i];
			
			// Carry on, unless this property is present
			if (!options[property]) continue;
			
			// Move the property into the root namespace
			if (!(options[""] instanceof Object)) options[""] = {};
			options[""][property] = options[property];
			delete options[property];
		}

		if (otherOptions) {
			options.ignore = mergeArrays(otherOptions.ignore, options.ignore);
			options.include = mergeArrays(otherOptions.include, options.include);
			options.copy = mergeArrays(otherOptions.copy, options.copy);
			options.observe = mergeArrays(otherOptions.observe, options.observe);
		}
		options.ignore = mergeArrays(options.ignore, defaultOptions.ignore);
		options.include = mergeArrays(options.include, defaultOptions.include);
		options.copy = mergeArrays(options.copy, defaultOptions.copy);
		options.observe = mergeArrays(options.observe, defaultOptions.observe);

		options.mappedProperties = options.mappedProperties || {};
		options.copiedProperties = options.copiedProperties || {};
		return options;
	}

	function mergeArrays(a, b) {
		if (exports.getType(a) !== "array") {
			if (exports.getType(a) === "undefined") a = [];
			else a = [a];
		}
		if (exports.getType(b) !== "array") {
			if (exports.getType(b) === "undefined") b = [];
			else b = [b];
		}

		return ko.utils.arrayGetDistinctValues(a.concat(b));
	}

	// When using a 'create' callback, we proxy the dependent observable so that it doesn't immediately evaluate on creation.
	// The reason is that the dependent observables in the user-specified callback may contain references to properties that have not been mapped yet.
	function withProxyDependentObservable(dependentObservables, callback) {
		var localDO = ko.dependentObservable;
		ko.dependentObservable = function (read, owner, options) {
			options = options || {};

			if (read && typeof read == "object") { // mirrors condition in knockout implementation of DO's
				options = read;
			}

			var realDeferEvaluation = options.deferEvaluation;

			var isRemoved = false;

			// We wrap the original dependent observable so that we can remove it from the 'dependentObservables' list we need to evaluate after mapping has
			// completed if the user already evaluated the DO themselves in the meantime.
			var wrap = function (DO) {
				// Temporarily revert ko.dependentObservable, since it is used in ko.isWriteableObservable
				var tmp = ko.dependentObservable;
				ko.dependentObservable = realKoDependentObservable;
				var isWriteable = ko.isWriteableObservable(DO);
				ko.dependentObservable = tmp;

				var wrapped = realKoDependentObservable({
					read: function () {
						if (!isRemoved) {
							ko.utils.arrayRemoveItem(dependentObservables, DO);
							isRemoved = true;
						}
						return DO.apply(DO, arguments);
					},
					write: isWriteable && function (val) {
						return DO(val);
					},
					deferEvaluation: true
				});
				if (DEBUG) wrapped._wrapper = true;
				wrapped.__DO = DO;
				return wrapped;
			};
			
			options.deferEvaluation = true; // will either set for just options, or both read/options.
			var realDependentObservable = new realKoDependentObservable(read, owner, options);

			if (!realDeferEvaluation) {
				realDependentObservable = wrap(realDependentObservable);
				dependentObservables.push(realDependentObservable);
			}

			return realDependentObservable;
		}
		ko.dependentObservable.fn = realKoDependentObservable.fn;
		ko.computed = ko.dependentObservable;
		var result = callback();
		ko.dependentObservable = localDO;
		ko.computed = ko.dependentObservable;
		return result;
	}

	function updateViewModel(mappedRootObject, rootObject, options, parentName, parent, parentPropertyName, mappedParent) {
		var isArray = exports.getType(ko.utils.unwrapObservable(rootObject)) === "array";

		parentPropertyName = parentPropertyName || "";

		// If this object was already mapped previously, take the options from there and merge them with our existing ones.
		if (exports.isMapped(mappedRootObject)) {
			var previousMapping = ko.utils.unwrapObservable(mappedRootObject)[mappingProperty];
			options = merge(previousMapping, options);
		}

		var callbackParams = {
			data: rootObject,
			parent: mappedParent || parent
		};

		var hasCreateCallback = function () {
			return options[parentName] && options[parentName].create instanceof Function;
		};

		var createCallback = function (data) {
			return withProxyDependentObservable(dependentObservables, function () {
				
				if (ko.utils.unwrapObservable(parent) instanceof Array) {
					return options[parentName].create({
						data: data || callbackParams.data,
						parent: callbackParams.parent,
						skip: emptyReturn
					});
				} else {
					return options[parentName].create({
						data: data || callbackParams.data,
						parent: callbackParams.parent
					});
				}				
			});
		};

		var hasUpdateCallback = function () {
			return options[parentName] && options[parentName].update instanceof Function;
		};

		var updateCallback = function (obj, data) {
			var params = {
				data: data || callbackParams.data,
				parent: callbackParams.parent,
				target: ko.utils.unwrapObservable(obj)
			};

			if (ko.isWriteableObservable(obj)) {
				params.observable = obj;
			}

			return options[parentName].update(params);
		}

		var alreadyMapped = visitedObjects.get(rootObject);
		if (alreadyMapped) {
			return alreadyMapped;
		}

		parentName = parentName || "";

		if (!isArray) {
			// For atomic types, do a direct update on the observable
			if (!canHaveProperties(rootObject)) {
				switch (exports.getType(rootObject)) {
				case "function":
					if (hasUpdateCallback()) {
						if (ko.isWriteableObservable(rootObject)) {
							rootObject(updateCallback(rootObject));
							mappedRootObject = rootObject;
						} else {
							mappedRootObject = updateCallback(rootObject);
						}
					} else {
						mappedRootObject = rootObject;
					}
					break;
				default:
					if (ko.isWriteableObservable(mappedRootObject)) {
						if (hasUpdateCallback()) {
							var valueToWrite = updateCallback(mappedRootObject);
							mappedRootObject(valueToWrite);
							return valueToWrite;
						} else {
							var valueToWrite = ko.utils.unwrapObservable(rootObject);
							mappedRootObject(valueToWrite);
							return valueToWrite;
						}
					} else {
						var hasCreateOrUpdateCallback = hasCreateCallback() || hasUpdateCallback();
						
						if (hasCreateCallback()) {
							mappedRootObject = createCallback();
						} else {
							mappedRootObject = ko.observable(ko.utils.unwrapObservable(rootObject));
						}

						if (hasUpdateCallback()) {
							mappedRootObject(updateCallback(mappedRootObject));
						}
						
						if (hasCreateOrUpdateCallback) return mappedRootObject;
					}
				}

			} else {
				mappedRootObject = ko.utils.unwrapObservable(mappedRootObject);
				if (!mappedRootObject) {
					if (hasCreateCallback()) {
						var result = createCallback();

						if (hasUpdateCallback()) {
							result = updateCallback(result);
						}

						return result;
					} else {
						if (hasUpdateCallback()) {
							return updateCallback(result);
						}

						mappedRootObject = {};
					}
				}

				if (hasUpdateCallback()) {
					mappedRootObject = updateCallback(mappedRootObject);
				}

				visitedObjects.save(rootObject, mappedRootObject);
				if (hasUpdateCallback()) return mappedRootObject;

				// For non-atomic types, visit all properties and update recursively
				visitPropertiesOrArrayEntries(rootObject, function (indexer) {
					var fullPropertyName = parentPropertyName.length ? parentPropertyName + "." + indexer : indexer;

					if (ko.utils.arrayIndexOf(options.ignore, fullPropertyName) != -1) {
						return;
					}

					if (ko.utils.arrayIndexOf(options.copy, fullPropertyName) != -1) {
						mappedRootObject[indexer] = rootObject[indexer];
						return;
					}

					if(typeof rootObject[indexer] != "object" && typeof rootObject[indexer] != "array" && options.observe.length > 0 && ko.utils.arrayIndexOf(options.observe, fullPropertyName) == -1)
					{
						mappedRootObject[indexer] = rootObject[indexer];
						options.copiedProperties[fullPropertyName] = true;
						return;
					}
					
					// In case we are adding an already mapped property, fill it with the previously mapped property value to prevent recursion.
					// If this is a property that was generated by fromJS, we should use the options specified there
					var prevMappedProperty = visitedObjects.get(rootObject[indexer]);
					var retval = updateViewModel(mappedRootObject[indexer], rootObject[indexer], options, indexer, mappedRootObject, fullPropertyName, mappedRootObject);
					var value = prevMappedProperty || retval;
					
					if(options.observe.length > 0 && ko.utils.arrayIndexOf(options.observe, fullPropertyName) == -1)
					{
						mappedRootObject[indexer] = value();
						options.copiedProperties[fullPropertyName] = true;
						return;
					}
					
					if (ko.isWriteableObservable(mappedRootObject[indexer])) {
						value = ko.utils.unwrapObservable(value);
						if (mappedRootObject[indexer]() !== value) {
							mappedRootObject[indexer](value);
						}
					} else {
						value = mappedRootObject[indexer] === undefined ? value : ko.utils.unwrapObservable(value);
						mappedRootObject[indexer] = value;
					}

					options.mappedProperties[fullPropertyName] = true;
				});
			}
		} else { //mappedRootObject is an array
			var changes = [];

			var hasKeyCallback = false;
			var keyCallback = function (x) {
				return x;
			}
			if (options[parentName] && options[parentName].key) {
				keyCallback = options[parentName].key;
				hasKeyCallback = true;
			}

			if (!ko.isObservable(mappedRootObject)) {
				// When creating the new observable array, also add a bunch of utility functions that take the 'key' of the array items into account.
				mappedRootObject = ko.observableArray([]);

				mappedRootObject.mappedRemove = function (valueOrPredicate) {
					var predicate = typeof valueOrPredicate == "function" ? valueOrPredicate : function (value) {
							return value === keyCallback(valueOrPredicate);
						};
					return mappedRootObject.remove(function (item) {
						return predicate(keyCallback(item));
					});
				}

				mappedRootObject.mappedRemoveAll = function (arrayOfValues) {
					var arrayOfKeys = filterArrayByKey(arrayOfValues, keyCallback);
					return mappedRootObject.remove(function (item) {
						return ko.utils.arrayIndexOf(arrayOfKeys, keyCallback(item)) != -1;
					});
				}

				mappedRootObject.mappedDestroy = function (valueOrPredicate) {
					var predicate = typeof valueOrPredicate == "function" ? valueOrPredicate : function (value) {
							return value === keyCallback(valueOrPredicate);
						};
					return mappedRootObject.destroy(function (item) {
						return predicate(keyCallback(item));
					});
				}

				mappedRootObject.mappedDestroyAll = function (arrayOfValues) {
					var arrayOfKeys = filterArrayByKey(arrayOfValues, keyCallback);
					return mappedRootObject.destroy(function (item) {
						return ko.utils.arrayIndexOf(arrayOfKeys, keyCallback(item)) != -1;
					});
				}

				mappedRootObject.mappedIndexOf = function (item) {
					var keys = filterArrayByKey(mappedRootObject(), keyCallback);
					var key = keyCallback(item);
					return ko.utils.arrayIndexOf(keys, key);
				}

				mappedRootObject.mappedGet = function (item) {
					return mappedRootObject()[mappedRootObject.mappedIndexOf(item)];
				}

				mappedRootObject.mappedCreate = function (value) {
					if (mappedRootObject.mappedIndexOf(value) !== -1) {
						throw new Error("There already is an object with the key that you specified.");
					}

					var item = hasCreateCallback() ? createCallback(value) : value;
					if (hasUpdateCallback()) {
						var newValue = updateCallback(item, value);
						if (ko.isWriteableObservable(item)) {
							item(newValue);
						} else {
							item = newValue;
						}
					}
					mappedRootObject.push(item);
					return item;
				}
			}

			var currentArrayKeys = filterArrayByKey(ko.utils.unwrapObservable(mappedRootObject), keyCallback).sort();
			var newArrayKeys = filterArrayByKey(rootObject, keyCallback);
			if (hasKeyCallback) newArrayKeys.sort();
			var editScript = ko.utils.compareArrays(currentArrayKeys, newArrayKeys);

			var ignoreIndexOf = {};
			
			var i, j;

			var unwrappedRootObject = ko.utils.unwrapObservable(rootObject);
			var itemsByKey = {};
			var optimizedKeys = true;
			for (i = 0, j = unwrappedRootObject.length; i < j; i++) {
				var key = keyCallback(unwrappedRootObject[i]);
				if (key === undefined || key instanceof Object) {
					optimizedKeys = false;
					break;
				}
				itemsByKey[key] = unwrappedRootObject[i];
			}

			var newContents = [];
			var passedOver = 0;
			for (i = 0, j = editScript.length; i < j; i++) {
				var key = editScript[i];
				var mappedItem;
				var fullPropertyName = parentPropertyName + "[" + i + "]";
				switch (key.status) {
				case "added":
					var item = optimizedKeys ? itemsByKey[key.value] : getItemByKey(ko.utils.unwrapObservable(rootObject), key.value, keyCallback);
					mappedItem = updateViewModel(undefined, item, options, parentName, mappedRootObject, fullPropertyName, parent);
					if(!hasCreateCallback()) {
						mappedItem = ko.utils.unwrapObservable(mappedItem);
					}

					var index = ignorableIndexOf(ko.utils.unwrapObservable(rootObject), item, ignoreIndexOf);
					
					if (mappedItem === emptyReturn) {
						passedOver++;
					} else {
						newContents[index - passedOver] = mappedItem;
					}
						
					ignoreIndexOf[index] = true;
					break;
				case "retained":
					var item = optimizedKeys ? itemsByKey[key.value] : getItemByKey(ko.utils.unwrapObservable(rootObject), key.value, keyCallback);
					mappedItem = getItemByKey(mappedRootObject, key.value, keyCallback);
					updateViewModel(mappedItem, item, options, parentName, mappedRootObject, fullPropertyName, parent);

					var index = ignorableIndexOf(ko.utils.unwrapObservable(rootObject), item, ignoreIndexOf);
					newContents[index] = mappedItem;
					ignoreIndexOf[index] = true;
					break;
				case "deleted":
					mappedItem = getItemByKey(mappedRootObject, key.value, keyCallback);
					break;
				}

				changes.push({
					event: key.status,
					item: mappedItem
				});
			}

			mappedRootObject(newContents);

			if (options[parentName] && options[parentName].arrayChanged) {
				ko.utils.arrayForEach(changes, function (change) {
					options[parentName].arrayChanged(change.event, change.item);
				});
			}
		}

		return mappedRootObject;
	}

	function ignorableIndexOf(array, item, ignoreIndices) {
		for (var i = 0, j = array.length; i < j; i++) {
			if (ignoreIndices[i] === true) continue;
			if (array[i] === item) return i;
		}
		return null;
	}

	function mapKey(item, callback) {
		var mappedItem;
		if (callback) mappedItem = callback(item);
		if (exports.getType(mappedItem) === "undefined") mappedItem = item;

		return ko.utils.unwrapObservable(mappedItem);
	}

	function getItemByKey(array, key, callback) {
		array = ko.utils.unwrapObservable(array);
		for (var i = 0, j = array.length; i < j; i++) {
			var item = array[i];
			if (mapKey(item, callback) === key) return item;
		}

		throw new Error("When calling ko.update*, the key '" + key + "' was not found!");
	}

	function filterArrayByKey(array, callback) {
		return ko.utils.arrayMap(ko.utils.unwrapObservable(array), function (item) {
			if (callback) {
				return mapKey(item, callback);
			} else {
				return item;
			}
		});
	}

	function visitPropertiesOrArrayEntries(rootObject, visitorCallback) {
		if (exports.getType(rootObject) === "array") {
			for (var i = 0; i < rootObject.length; i++)
			visitorCallback(i);
		} else {
			for (var propertyName in rootObject)
			visitorCallback(propertyName);
		}
	};

	function canHaveProperties(object) {
		var type = exports.getType(object);
		return ((type === "object") || (type === "array")) && (object !== null);
	}

	// Based on the parentName, this creates a fully classified name of a property

	function getPropertyName(parentName, parent, indexer) {
		var propertyName = parentName || "";
		if (exports.getType(parent) === "array") {
			if (parentName) {
				propertyName += "[" + indexer + "]";
			}
		} else {
			if (parentName) {
				propertyName += ".";
			}
			propertyName += indexer;
		}
		return propertyName;
	}

	exports.visitModel = function (rootObject, callback, options) {
		options = options || {};
		options.visitedObjects = options.visitedObjects || new objectLookup();

		var mappedRootObject;
		var unwrappedRootObject = ko.utils.unwrapObservable(rootObject);

		if (!canHaveProperties(unwrappedRootObject)) {
			return callback(rootObject, options.parentName);
		} else {
			options = fillOptions(options, unwrappedRootObject[mappingProperty]);

			// Only do a callback, but ignore the results
			callback(rootObject, options.parentName);
			mappedRootObject = exports.getType(unwrappedRootObject) === "array" ? [] : {};
		}

		options.visitedObjects.save(rootObject, mappedRootObject);

		var parentName = options.parentName;
		visitPropertiesOrArrayEntries(unwrappedRootObject, function (indexer) {
			if (options.ignore && ko.utils.arrayIndexOf(options.ignore, indexer) != -1) return;

			var propertyValue = unwrappedRootObject[indexer];
			options.parentName = getPropertyName(parentName, unwrappedRootObject, indexer);

			// If we don't want to explicitly copy the unmapped property...
			if (ko.utils.arrayIndexOf(options.copy, indexer) === -1) {
				// ...find out if it's a property we want to explicitly include
				if (ko.utils.arrayIndexOf(options.include, indexer) === -1) {
					// The mapped properties object contains all the properties that were part of the original object.
					// If a property does not exist, and it is not because it is part of an array (e.g. "myProp[3]"), then it should not be unmapped.
				    if (unwrappedRootObject[mappingProperty]
				        && unwrappedRootObject[mappingProperty].mappedProperties && !unwrappedRootObject[mappingProperty].mappedProperties[indexer]
				        && unwrappedRootObject[mappingProperty].copiedProperties && !unwrappedRootObject[mappingProperty].copiedProperties[indexer]
				        && !(exports.getType(unwrappedRootObject) === "array")) {
						return;
					}
				}
			}

			var outputProperty;
			switch (exports.getType(ko.utils.unwrapObservable(propertyValue))) {
			case "object":
			case "array":
			case "undefined":
				var previouslyMappedValue = options.visitedObjects.get(propertyValue);
				mappedRootObject[indexer] = (exports.getType(previouslyMappedValue) !== "undefined") ? previouslyMappedValue : exports.visitModel(propertyValue, callback, options);
				break;
			default:
				mappedRootObject[indexer] = callback(propertyValue, options.parentName);
			}
		});

		return mappedRootObject;
	}

	function simpleObjectLookup() {
		var keys = [];
		var values = [];
		this.save = function (key, value) {
			var existingIndex = ko.utils.arrayIndexOf(keys, key);
			if (existingIndex >= 0) values[existingIndex] = value;
			else {
				keys.push(key);
				values.push(value);
			}
		};
		this.get = function (key) {
			var existingIndex = ko.utils.arrayIndexOf(keys, key);
			var value = (existingIndex >= 0) ? values[existingIndex] : undefined;
			return value;
		};
	};
	
	function objectLookup() {
		var buckets = {};
		
		var findBucket = function(key) {
			var bucketKey;
			try {
				bucketKey = key;//JSON.stringify(key);
			}
			catch (e) {
				bucketKey = "$$$";
			}

			var bucket = buckets[bucketKey];
			if (bucket === undefined) {
				bucket = new simpleObjectLookup();
				buckets[bucketKey] = bucket;
			}
			return bucket;
		};
		
		this.save = function (key, value) {
			findBucket(key).save(key, value);
		};
		this.get = function (key) {
			return findBucket(key).get(key);
		};
	};
}));

},{"knockout":5}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
var MainViewModel, Promise, getConfig, getMessages, ko, mapping, _ref;

Promise = require('bluebird');

ko = require('knockout');

mapping = require('knockout-mapping');

_ref = require('./message_service.coffee'), getMessages = _ref.getMessages, getConfig = _ref.getConfig;

module.exports = MainViewModel = (function() {
  function MainViewModel() {
    this.messages = ko.observableArray([]);
    this.user = mapping.fromJS({
      displayName: "",
      username: ""
    });
    Promise.all([getConfig(), getMessages()]).spread((function(_this) {
      return function(config, messages) {
        _this.messageTypes = config.messageTypes;
        mapping.fromJS(config.user, _this.user);
        return _this.newMessages(messages);
      };
    })(this));
  }

  MainViewModel.prototype.newMessages = function(newMessages) {
    var message, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = newMessages.length; _i < _len; _i++) {
      message = newMessages[_i];
      _results.push(this.messages.push(message));
    }
    return _results;
  };

  return MainViewModel;

})();



},{"./message_service.coffee":7,"bluebird":10,"knockout":5,"knockout-mapping":4}],7:[function(require,module,exports){
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



},{"bluebird":10,"jquery":3}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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
},{"./queue.js":32,"./schedule.js":35,"./util.js":42,"_process":43}],10:[function(require,module,exports){
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
},{"./promise.js":27}],11:[function(require,module,exports){
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

},{"./util.js":42}],12:[function(require,module,exports){
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

},{"./async.js":9,"./errors.js":17}],13:[function(require,module,exports){
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

},{"./es5.js":19,"./util.js":42}],14:[function(require,module,exports){
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

},{"./errors.js":17,"./es5.js":19,"./util.js":42}],15:[function(require,module,exports){
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

},{"./util.js":42}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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

},{"./es5.js":19,"./util.js":42}],18:[function(require,module,exports){
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

},{"./errors.js":17}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
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

},{"./util.js":42}],22:[function(require,module,exports){
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

},{"./errors.js":17,"./util.js":42}],23:[function(require,module,exports){
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

},{"./util.js":42}],24:[function(require,module,exports){
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

},{"./util.js":42}],25:[function(require,module,exports){
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

},{"./async.js":9,"./util.js":42}],26:[function(require,module,exports){
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

},{"./async.js":9,"./errors.js":17,"./util.js":42}],27:[function(require,module,exports){
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
},{"./any.js":8,"./async.js":9,"./call_get.js":11,"./cancel.js":12,"./captured_trace.js":13,"./catch_filter.js":14,"./direct_resolve.js":15,"./each.js":16,"./errors.js":17,"./errors_api_rejection":18,"./filter.js":20,"./finally.js":21,"./generators.js":22,"./join.js":23,"./map.js":24,"./nodeify.js":25,"./progress.js":26,"./promise_array.js":28,"./promise_resolver.js":29,"./promisify.js":30,"./props.js":31,"./race.js":33,"./reduce.js":34,"./settle.js":36,"./some.js":37,"./synchronous_inspection.js":38,"./thenables.js":39,"./timers.js":40,"./using.js":41,"./util.js":42,"_process":43}],28:[function(require,module,exports){
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

},{"./errors.js":17,"./util.js":42}],29:[function(require,module,exports){
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

},{"./async.js":9,"./errors.js":17,"./es5.js":19,"./util.js":42}],30:[function(require,module,exports){
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


},{"./errors":17,"./promise_resolver.js":29,"./util.js":42}],31:[function(require,module,exports){
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

},{"./errors_api_rejection":18,"./es5.js":19,"./util.js":42}],32:[function(require,module,exports){
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

},{}],33:[function(require,module,exports){
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

},{"./errors_api_rejection.js":18,"./util.js":42}],34:[function(require,module,exports){
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

},{"./util.js":42}],35:[function(require,module,exports){
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
},{"_process":43}],36:[function(require,module,exports){
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

},{"./util.js":42}],37:[function(require,module,exports){
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

},{"./errors.js":17,"./util.js":42}],38:[function(require,module,exports){
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

},{}],39:[function(require,module,exports){
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

},{"./errors.js":17,"./util.js":42}],40:[function(require,module,exports){
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

},{"./errors.js":17,"./errors_api_rejection":18,"./util.js":42}],41:[function(require,module,exports){
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

},{"./errors.js":17,"./util.js":42}],42:[function(require,module,exports){
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

},{"./es5.js":19}],43:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamFwc3UvSG9iYnkvaW5mb2thbGEvaW5mb2thbGEvc3RhdGljX3NyYy9pbmZva2FsYS9pbmZva2FsYS5jb2ZmZWUiLCIvVXNlcnMvamFwc3UvSG9iYnkvaW5mb2thbGEvYm93ZXJfY29tcG9uZW50cy9ib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAubWluLmpzIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL2Jvd2VyX2NvbXBvbmVudHMvanF1ZXJ5L2Rpc3QvanF1ZXJ5Lm1pbi5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ib3dlcl9jb21wb25lbnRzL2tub2Nrb3V0LW1hcHBpbmcva25vY2tvdXQubWFwcGluZy5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ib3dlcl9jb21wb25lbnRzL2tub2Nrb3V0L2Rpc3Qva25vY2tvdXQuanMiLCIvVXNlcnMvamFwc3UvSG9iYnkvaW5mb2thbGEvaW5mb2thbGEvc3RhdGljX3NyYy9pbmZva2FsYS9tYWluX3ZpZXdfbW9kZWwuY29mZmVlIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL2luZm9rYWxhL3N0YXRpY19zcmMvaW5mb2thbGEvbWVzc2FnZV9zZXJ2aWNlLmNvZmZlZSIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9hbnkuanMiLCIvVXNlcnMvamFwc3UvSG9iYnkvaW5mb2thbGEvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vYXN5bmMuanMiLCIvVXNlcnMvamFwc3UvSG9iYnkvaW5mb2thbGEvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vYmx1ZWJpcmQuanMiLCIvVXNlcnMvamFwc3UvSG9iYnkvaW5mb2thbGEvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vY2FsbF9nZXQuanMiLCIvVXNlcnMvamFwc3UvSG9iYnkvaW5mb2thbGEvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vY2FuY2VsLmpzIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL2NhcHR1cmVkX3RyYWNlLmpzIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL2NhdGNoX2ZpbHRlci5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9kaXJlY3RfcmVzb2x2ZS5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9lYWNoLmpzIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL2Vycm9ycy5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9lcnJvcnNfYXBpX3JlamVjdGlvbi5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9lczUuanMiLCIvVXNlcnMvamFwc3UvSG9iYnkvaW5mb2thbGEvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vZmlsdGVyLmpzIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL2ZpbmFsbHkuanMiLCIvVXNlcnMvamFwc3UvSG9iYnkvaW5mb2thbGEvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vZ2VuZXJhdG9ycy5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9qb2luLmpzIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL21hcC5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9ub2RlaWZ5LmpzIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3Byb2dyZXNzLmpzIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3Byb21pc2UuanMiLCIvVXNlcnMvamFwc3UvSG9iYnkvaW5mb2thbGEvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vcHJvbWlzZV9hcnJheS5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9wcm9taXNlX3Jlc29sdmVyLmpzIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3Byb21pc2lmeS5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9wcm9wcy5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9xdWV1ZS5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9yYWNlLmpzIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3JlZHVjZS5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9zY2hlZHVsZS5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9zZXR0bGUuanMiLCIvVXNlcnMvamFwc3UvSG9iYnkvaW5mb2thbGEvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vc29tZS5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi9zeW5jaHJvbm91c19pbnNwZWN0aW9uLmpzIiwiL1VzZXJzL2phcHN1L0hvYmJ5L2luZm9rYWxhL25vZGVfbW9kdWxlcy9ibHVlYmlyZC9qcy9tYWluL3RoZW5hYmxlcy5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ub2RlX21vZHVsZXMvYmx1ZWJpcmQvanMvbWFpbi90aW1lcnMuanMiLCIvVXNlcnMvamFwc3UvSG9iYnkvaW5mb2thbGEvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vdXNpbmcuanMiLCIvVXNlcnMvamFwc3UvSG9iYnkvaW5mb2thbGEvbm9kZV9tb2R1bGVzL2JsdWViaXJkL2pzL21haW4vdXRpbC5qcyIsIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQSxvQkFBQTs7QUFBQSxDQUFBLEdBQUksT0FBQSxDQUFRLFFBQVIsQ0FBSixDQUFBOztBQUFBLE9BQ0EsQ0FBUSxXQUFSLENBREEsQ0FBQTs7QUFBQSxFQUVBLEdBQUssT0FBQSxDQUFRLFVBQVIsQ0FGTCxDQUFBOztBQUFBLGFBSUEsR0FBZ0IsT0FBQSxDQUFRLDBCQUFSLENBSmhCLENBQUE7O0FBQUEsRUFNRSxDQUFDLGFBQUgsQ0FBaUIsR0FBQSxDQUFBLGFBQWpCLENBTkEsQ0FBQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0eUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9HQSxJQUFBLGlFQUFBOztBQUFBLE9BQUEsR0FBVSxPQUFBLENBQVEsVUFBUixDQUFWLENBQUE7O0FBQUEsRUFDQSxHQUFLLE9BQUEsQ0FBUSxVQUFSLENBREwsQ0FBQTs7QUFBQSxPQUVBLEdBQVUsT0FBQSxDQUFRLGtCQUFSLENBRlYsQ0FBQTs7QUFBQSxPQUkyQixPQUFBLENBQVEsMEJBQVIsQ0FBM0IsRUFBQyxtQkFBQSxXQUFELEVBQWMsaUJBQUEsU0FKZCxDQUFBOztBQUFBLE1BTU0sQ0FBQyxPQUFQLEdBQXVCO0FBQ1IsRUFBQSx1QkFBQSxHQUFBO0FBQ1gsSUFBQSxJQUFDLENBQUEsUUFBRCxHQUFZLEVBQUUsQ0FBQyxlQUFILENBQW1CLEVBQW5CLENBQVosQ0FBQTtBQUFBLElBQ0EsSUFBQyxDQUFBLElBQUQsR0FBUSxPQUFPLENBQUMsTUFBUixDQUNOO0FBQUEsTUFBQSxXQUFBLEVBQWEsRUFBYjtBQUFBLE1BQ0EsUUFBQSxFQUFVLEVBRFY7S0FETSxDQURSLENBQUE7QUFBQSxJQUtBLE9BQU8sQ0FBQyxHQUFSLENBQVksQ0FBQyxTQUFBLENBQUEsQ0FBRCxFQUFjLFdBQUEsQ0FBQSxDQUFkLENBQVosQ0FBeUMsQ0FBQyxNQUExQyxDQUFpRCxDQUFBLFNBQUEsS0FBQSxHQUFBO2FBQUEsU0FBQyxNQUFELEVBQVMsUUFBVCxHQUFBO0FBQy9DLFFBQUEsS0FBQyxDQUFBLFlBQUQsR0FBZ0IsTUFBTSxDQUFDLFlBQXZCLENBQUE7QUFBQSxRQUNBLE9BQU8sQ0FBQyxNQUFSLENBQWUsTUFBTSxDQUFDLElBQXRCLEVBQTRCLEtBQUMsQ0FBQSxJQUE3QixDQURBLENBQUE7ZUFFQSxLQUFDLENBQUEsV0FBRCxDQUFhLFFBQWIsRUFIK0M7TUFBQSxFQUFBO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFqRCxDQUxBLENBRFc7RUFBQSxDQUFiOztBQUFBLDBCQVdBLFdBQUEsR0FBYSxTQUFDLFdBQUQsR0FBQTtBQUNYLFFBQUEsMkJBQUE7QUFBQTtTQUFBLGtEQUFBO2dDQUFBO0FBQUEsb0JBQUEsSUFBQyxDQUFBLFFBQVEsQ0FBQyxJQUFWLENBQWUsT0FBZixFQUFBLENBQUE7QUFBQTtvQkFEVztFQUFBLENBWGIsQ0FBQTs7dUJBQUE7O0lBUEYsQ0FBQTs7Ozs7QUNBQSxJQUFBLGtCQUFBOztBQUFBLENBQUEsR0FBSSxPQUFBLENBQVEsUUFBUixDQUFKLENBQUE7O0FBQUEsT0FDQSxHQUFVLE9BQUEsQ0FBUSxVQUFSLENBRFYsQ0FBQTs7QUFBQSxNQUdBLEdBQVMscUJBSFQsQ0FBQTs7QUFBQSxPQUtPLENBQUMsU0FBUixHQUFvQixTQUFBLEdBQUE7U0FBRyxPQUFPLENBQUMsT0FBUixDQUFnQixDQUFDLENBQUMsT0FBRixDQUFVLEVBQUEsR0FBRyxNQUFILEdBQVUsU0FBcEIsQ0FBaEIsRUFBSDtBQUFBLENBTHBCLENBQUE7O0FBQUEsT0FNTyxDQUFDLFdBQVIsR0FBc0IsU0FBQSxHQUFBO1NBQUcsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxFQUFBLEdBQUcsTUFBSCxHQUFVLFdBQXBCLENBQWhCLEVBQUg7QUFBQSxDQU50QixDQUFBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoa0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQgPSByZXF1aXJlICdqcXVlcnknXG5yZXF1aXJlICdib290c3RyYXAnXG5rbyA9IHJlcXVpcmUgJ2tub2Nrb3V0J1xuXG5NYWluVmlld01vZGVsID0gcmVxdWlyZSAnLi9tYWluX3ZpZXdfbW9kZWwuY29mZmVlJ1xuXG5rby5hcHBseUJpbmRpbmdzIG5ldyBNYWluVmlld01vZGVsXG4iLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG5cbjsgJCA9IGdsb2JhbC4kID0gcmVxdWlyZShcIi9Vc2Vycy9qYXBzdS9Ib2JieS9pbmZva2FsYS9ib3dlcl9jb21wb25lbnRzL2pxdWVyeS9kaXN0L2pxdWVyeS5taW4uanNcIik7XG47X19icm93c2VyaWZ5X3NoaW1fcmVxdWlyZV9fPXJlcXVpcmU7KGZ1bmN0aW9uIGJyb3dzZXJpZnlTaGltKG1vZHVsZSwgZXhwb3J0cywgcmVxdWlyZSwgZGVmaW5lLCBicm93c2VyaWZ5X3NoaW1fX2RlZmluZV9fbW9kdWxlX19leHBvcnRfXykge1xuLyohXG4gKiBCb290c3RyYXAgdjMuMi4wIChodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbSlcbiAqIENvcHlyaWdodCAyMDExLTIwMTQgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqL1xuaWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGpRdWVyeSl0aHJvdyBuZXcgRXJyb3IoXCJCb290c3RyYXAncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGpRdWVyeVwiKTsrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYigpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJib290c3RyYXBcIiksYj17V2Via2l0VHJhbnNpdGlvbjpcIndlYmtpdFRyYW5zaXRpb25FbmRcIixNb3pUcmFuc2l0aW9uOlwidHJhbnNpdGlvbmVuZFwiLE9UcmFuc2l0aW9uOlwib1RyYW5zaXRpb25FbmQgb3RyYW5zaXRpb25lbmRcIix0cmFuc2l0aW9uOlwidHJhbnNpdGlvbmVuZFwifTtmb3IodmFyIGMgaW4gYilpZih2b2lkIDAhPT1hLnN0eWxlW2NdKXJldHVybntlbmQ6YltjXX07cmV0dXJuITF9YS5mbi5lbXVsYXRlVHJhbnNpdGlvbkVuZD1mdW5jdGlvbihiKXt2YXIgYz0hMSxkPXRoaXM7YSh0aGlzKS5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixmdW5jdGlvbigpe2M9ITB9KTt2YXIgZT1mdW5jdGlvbigpe2N8fGEoZCkudHJpZ2dlcihhLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQpfTtyZXR1cm4gc2V0VGltZW91dChlLGIpLHRoaXN9LGEoZnVuY3Rpb24oKXthLnN1cHBvcnQudHJhbnNpdGlvbj1iKCksYS5zdXBwb3J0LnRyYW5zaXRpb24mJihhLmV2ZW50LnNwZWNpYWwuYnNUcmFuc2l0aW9uRW5kPXtiaW5kVHlwZTphLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsZGVsZWdhdGVUeXBlOmEuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCxoYW5kbGU6ZnVuY3Rpb24oYil7cmV0dXJuIGEoYi50YXJnZXQpLmlzKHRoaXMpP2IuaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpOnZvaWQgMH19KX0pfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1hKHRoaXMpLGU9Yy5kYXRhKFwiYnMuYWxlcnRcIik7ZXx8Yy5kYXRhKFwiYnMuYWxlcnRcIixlPW5ldyBkKHRoaXMpKSxcInN0cmluZ1wiPT10eXBlb2YgYiYmZVtiXS5jYWxsKGMpfSl9dmFyIGM9J1tkYXRhLWRpc21pc3M9XCJhbGVydFwiXScsZD1mdW5jdGlvbihiKXthKGIpLm9uKFwiY2xpY2tcIixjLHRoaXMuY2xvc2UpfTtkLlZFUlNJT049XCIzLjIuMFwiLGQucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGMoKXtmLmRldGFjaCgpLnRyaWdnZXIoXCJjbG9zZWQuYnMuYWxlcnRcIikucmVtb3ZlKCl9dmFyIGQ9YSh0aGlzKSxlPWQuYXR0cihcImRhdGEtdGFyZ2V0XCIpO2V8fChlPWQuYXR0cihcImhyZWZcIiksZT1lJiZlLnJlcGxhY2UoLy4qKD89I1teXFxzXSokKS8sXCJcIikpO3ZhciBmPWEoZSk7YiYmYi5wcmV2ZW50RGVmYXVsdCgpLGYubGVuZ3RofHwoZj1kLmhhc0NsYXNzKFwiYWxlcnRcIik/ZDpkLnBhcmVudCgpKSxmLnRyaWdnZXIoYj1hLkV2ZW50KFwiY2xvc2UuYnMuYWxlcnRcIikpLGIuaXNEZWZhdWx0UHJldmVudGVkKCl8fChmLnJlbW92ZUNsYXNzKFwiaW5cIiksYS5zdXBwb3J0LnRyYW5zaXRpb24mJmYuaGFzQ2xhc3MoXCJmYWRlXCIpP2Yub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsYykuZW11bGF0ZVRyYW5zaXRpb25FbmQoMTUwKTpjKCkpfTt2YXIgZT1hLmZuLmFsZXJ0O2EuZm4uYWxlcnQ9YixhLmZuLmFsZXJ0LkNvbnN0cnVjdG9yPWQsYS5mbi5hbGVydC5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4uYWxlcnQ9ZSx0aGlzfSxhKGRvY3VtZW50KS5vbihcImNsaWNrLmJzLmFsZXJ0LmRhdGEtYXBpXCIsYyxkLnByb3RvdHlwZS5jbG9zZSl9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1kLmRhdGEoXCJicy5idXR0b25cIiksZj1cIm9iamVjdFwiPT10eXBlb2YgYiYmYjtlfHxkLmRhdGEoXCJicy5idXR0b25cIixlPW5ldyBjKHRoaXMsZikpLFwidG9nZ2xlXCI9PWI/ZS50b2dnbGUoKTpiJiZlLnNldFN0YXRlKGIpfSl9dmFyIGM9ZnVuY3Rpb24oYixkKXt0aGlzLiRlbGVtZW50PWEoYiksdGhpcy5vcHRpb25zPWEuZXh0ZW5kKHt9LGMuREVGQVVMVFMsZCksdGhpcy5pc0xvYWRpbmc9ITF9O2MuVkVSU0lPTj1cIjMuMi4wXCIsYy5ERUZBVUxUUz17bG9hZGluZ1RleHQ6XCJsb2FkaW5nLi4uXCJ9LGMucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKGIpe3ZhciBjPVwiZGlzYWJsZWRcIixkPXRoaXMuJGVsZW1lbnQsZT1kLmlzKFwiaW5wdXRcIik/XCJ2YWxcIjpcImh0bWxcIixmPWQuZGF0YSgpO2IrPVwiVGV4dFwiLG51bGw9PWYucmVzZXRUZXh0JiZkLmRhdGEoXCJyZXNldFRleHRcIixkW2VdKCkpLGRbZV0obnVsbD09ZltiXT90aGlzLm9wdGlvbnNbYl06ZltiXSksc2V0VGltZW91dChhLnByb3h5KGZ1bmN0aW9uKCl7XCJsb2FkaW5nVGV4dFwiPT1iPyh0aGlzLmlzTG9hZGluZz0hMCxkLmFkZENsYXNzKGMpLmF0dHIoYyxjKSk6dGhpcy5pc0xvYWRpbmcmJih0aGlzLmlzTG9hZGluZz0hMSxkLnJlbW92ZUNsYXNzKGMpLnJlbW92ZUF0dHIoYykpfSx0aGlzKSwwKX0sYy5wcm90b3R5cGUudG9nZ2xlPWZ1bmN0aW9uKCl7dmFyIGE9ITAsYj10aGlzLiRlbGVtZW50LmNsb3Nlc3QoJ1tkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIl0nKTtpZihiLmxlbmd0aCl7dmFyIGM9dGhpcy4kZWxlbWVudC5maW5kKFwiaW5wdXRcIik7XCJyYWRpb1wiPT1jLnByb3AoXCJ0eXBlXCIpJiYoYy5wcm9wKFwiY2hlY2tlZFwiKSYmdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImFjdGl2ZVwiKT9hPSExOmIuZmluZChcIi5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIikpLGEmJmMucHJvcChcImNoZWNrZWRcIiwhdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImFjdGl2ZVwiKSkudHJpZ2dlcihcImNoYW5nZVwiKX1hJiZ0aGlzLiRlbGVtZW50LnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpfTt2YXIgZD1hLmZuLmJ1dHRvbjthLmZuLmJ1dHRvbj1iLGEuZm4uYnV0dG9uLkNvbnN0cnVjdG9yPWMsYS5mbi5idXR0b24ubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLmJ1dHRvbj1kLHRoaXN9LGEoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMuYnV0dG9uLmRhdGEtYXBpXCIsJ1tkYXRhLXRvZ2dsZV49XCJidXR0b25cIl0nLGZ1bmN0aW9uKGMpe3ZhciBkPWEoYy50YXJnZXQpO2QuaGFzQ2xhc3MoXCJidG5cIil8fChkPWQuY2xvc2VzdChcIi5idG5cIikpLGIuY2FsbChkLFwidG9nZ2xlXCIpLGMucHJldmVudERlZmF1bHQoKX0pfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1hKHRoaXMpLGU9ZC5kYXRhKFwiYnMuY2Fyb3VzZWxcIiksZj1hLmV4dGVuZCh7fSxjLkRFRkFVTFRTLGQuZGF0YSgpLFwib2JqZWN0XCI9PXR5cGVvZiBiJiZiKSxnPVwic3RyaW5nXCI9PXR5cGVvZiBiP2I6Zi5zbGlkZTtlfHxkLmRhdGEoXCJicy5jYXJvdXNlbFwiLGU9bmV3IGModGhpcyxmKSksXCJudW1iZXJcIj09dHlwZW9mIGI/ZS50byhiKTpnP2VbZ10oKTpmLmludGVydmFsJiZlLnBhdXNlKCkuY3ljbGUoKX0pfXZhciBjPWZ1bmN0aW9uKGIsYyl7dGhpcy4kZWxlbWVudD1hKGIpLm9uKFwia2V5ZG93bi5icy5jYXJvdXNlbFwiLGEucHJveHkodGhpcy5rZXlkb3duLHRoaXMpKSx0aGlzLiRpbmRpY2F0b3JzPXRoaXMuJGVsZW1lbnQuZmluZChcIi5jYXJvdXNlbC1pbmRpY2F0b3JzXCIpLHRoaXMub3B0aW9ucz1jLHRoaXMucGF1c2VkPXRoaXMuc2xpZGluZz10aGlzLmludGVydmFsPXRoaXMuJGFjdGl2ZT10aGlzLiRpdGVtcz1udWxsLFwiaG92ZXJcIj09dGhpcy5vcHRpb25zLnBhdXNlJiZ0aGlzLiRlbGVtZW50Lm9uKFwibW91c2VlbnRlci5icy5jYXJvdXNlbFwiLGEucHJveHkodGhpcy5wYXVzZSx0aGlzKSkub24oXCJtb3VzZWxlYXZlLmJzLmNhcm91c2VsXCIsYS5wcm94eSh0aGlzLmN5Y2xlLHRoaXMpKX07Yy5WRVJTSU9OPVwiMy4yLjBcIixjLkRFRkFVTFRTPXtpbnRlcnZhbDo1ZTMscGF1c2U6XCJob3ZlclwiLHdyYXA6ITB9LGMucHJvdG90eXBlLmtleWRvd249ZnVuY3Rpb24oYSl7c3dpdGNoKGEud2hpY2gpe2Nhc2UgMzc6dGhpcy5wcmV2KCk7YnJlYWs7Y2FzZSAzOTp0aGlzLm5leHQoKTticmVhaztkZWZhdWx0OnJldHVybn1hLnByZXZlbnREZWZhdWx0KCl9LGMucHJvdG90eXBlLmN5Y2xlPWZ1bmN0aW9uKGIpe3JldHVybiBifHwodGhpcy5wYXVzZWQ9ITEpLHRoaXMuaW50ZXJ2YWwmJmNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCksdGhpcy5vcHRpb25zLmludGVydmFsJiYhdGhpcy5wYXVzZWQmJih0aGlzLmludGVydmFsPXNldEludGVydmFsKGEucHJveHkodGhpcy5uZXh0LHRoaXMpLHRoaXMub3B0aW9ucy5pbnRlcnZhbCkpLHRoaXN9LGMucHJvdG90eXBlLmdldEl0ZW1JbmRleD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy4kaXRlbXM9YS5wYXJlbnQoKS5jaGlsZHJlbihcIi5pdGVtXCIpLHRoaXMuJGl0ZW1zLmluZGV4KGF8fHRoaXMuJGFjdGl2ZSl9LGMucHJvdG90eXBlLnRvPWZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMsZD10aGlzLmdldEl0ZW1JbmRleCh0aGlzLiRhY3RpdmU9dGhpcy4kZWxlbWVudC5maW5kKFwiLml0ZW0uYWN0aXZlXCIpKTtyZXR1cm4gYj50aGlzLiRpdGVtcy5sZW5ndGgtMXx8MD5iP3ZvaWQgMDp0aGlzLnNsaWRpbmc/dGhpcy4kZWxlbWVudC5vbmUoXCJzbGlkLmJzLmNhcm91c2VsXCIsZnVuY3Rpb24oKXtjLnRvKGIpfSk6ZD09Yj90aGlzLnBhdXNlKCkuY3ljbGUoKTp0aGlzLnNsaWRlKGI+ZD9cIm5leHRcIjpcInByZXZcIixhKHRoaXMuJGl0ZW1zW2JdKSl9LGMucHJvdG90eXBlLnBhdXNlPWZ1bmN0aW9uKGIpe3JldHVybiBifHwodGhpcy5wYXVzZWQ9ITApLHRoaXMuJGVsZW1lbnQuZmluZChcIi5uZXh0LCAucHJldlwiKS5sZW5ndGgmJmEuc3VwcG9ydC50cmFuc2l0aW9uJiYodGhpcy4kZWxlbWVudC50cmlnZ2VyKGEuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCksdGhpcy5jeWNsZSghMCkpLHRoaXMuaW50ZXJ2YWw9Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKSx0aGlzfSxjLnByb3RvdHlwZS5uZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2xpZGluZz92b2lkIDA6dGhpcy5zbGlkZShcIm5leHRcIil9LGMucHJvdG90eXBlLnByZXY9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zbGlkaW5nP3ZvaWQgMDp0aGlzLnNsaWRlKFwicHJldlwiKX0sYy5wcm90b3R5cGUuc2xpZGU9ZnVuY3Rpb24oYixjKXt2YXIgZD10aGlzLiRlbGVtZW50LmZpbmQoXCIuaXRlbS5hY3RpdmVcIiksZT1jfHxkW2JdKCksZj10aGlzLmludGVydmFsLGc9XCJuZXh0XCI9PWI/XCJsZWZ0XCI6XCJyaWdodFwiLGg9XCJuZXh0XCI9PWI/XCJmaXJzdFwiOlwibGFzdFwiLGk9dGhpcztpZighZS5sZW5ndGgpe2lmKCF0aGlzLm9wdGlvbnMud3JhcClyZXR1cm47ZT10aGlzLiRlbGVtZW50LmZpbmQoXCIuaXRlbVwiKVtoXSgpfWlmKGUuaGFzQ2xhc3MoXCJhY3RpdmVcIikpcmV0dXJuIHRoaXMuc2xpZGluZz0hMTt2YXIgaj1lWzBdLGs9YS5FdmVudChcInNsaWRlLmJzLmNhcm91c2VsXCIse3JlbGF0ZWRUYXJnZXQ6aixkaXJlY3Rpb246Z30pO2lmKHRoaXMuJGVsZW1lbnQudHJpZ2dlcihrKSwhay5pc0RlZmF1bHRQcmV2ZW50ZWQoKSl7aWYodGhpcy5zbGlkaW5nPSEwLGYmJnRoaXMucGF1c2UoKSx0aGlzLiRpbmRpY2F0b3JzLmxlbmd0aCl7dGhpcy4kaW5kaWNhdG9ycy5maW5kKFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTt2YXIgbD1hKHRoaXMuJGluZGljYXRvcnMuY2hpbGRyZW4oKVt0aGlzLmdldEl0ZW1JbmRleChlKV0pO2wmJmwuYWRkQ2xhc3MoXCJhY3RpdmVcIil9dmFyIG09YS5FdmVudChcInNsaWQuYnMuY2Fyb3VzZWxcIix7cmVsYXRlZFRhcmdldDpqLGRpcmVjdGlvbjpnfSk7cmV0dXJuIGEuc3VwcG9ydC50cmFuc2l0aW9uJiZ0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwic2xpZGVcIik/KGUuYWRkQ2xhc3MoYiksZVswXS5vZmZzZXRXaWR0aCxkLmFkZENsYXNzKGcpLGUuYWRkQ2xhc3MoZyksZC5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixmdW5jdGlvbigpe2UucmVtb3ZlQ2xhc3MoW2IsZ10uam9pbihcIiBcIikpLmFkZENsYXNzKFwiYWN0aXZlXCIpLGQucmVtb3ZlQ2xhc3MoW1wiYWN0aXZlXCIsZ10uam9pbihcIiBcIikpLGkuc2xpZGluZz0hMSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aS4kZWxlbWVudC50cmlnZ2VyKG0pfSwwKX0pLmVtdWxhdGVUcmFuc2l0aW9uRW5kKDFlMypkLmNzcyhcInRyYW5zaXRpb24tZHVyYXRpb25cIikuc2xpY2UoMCwtMSkpKTooZC5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxlLmFkZENsYXNzKFwiYWN0aXZlXCIpLHRoaXMuc2xpZGluZz0hMSx0aGlzLiRlbGVtZW50LnRyaWdnZXIobSkpLGYmJnRoaXMuY3ljbGUoKSx0aGlzfX07dmFyIGQ9YS5mbi5jYXJvdXNlbDthLmZuLmNhcm91c2VsPWIsYS5mbi5jYXJvdXNlbC5Db25zdHJ1Y3Rvcj1jLGEuZm4uY2Fyb3VzZWwubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLmNhcm91c2VsPWQsdGhpc30sYShkb2N1bWVudCkub24oXCJjbGljay5icy5jYXJvdXNlbC5kYXRhLWFwaVwiLFwiW2RhdGEtc2xpZGVdLCBbZGF0YS1zbGlkZS10b11cIixmdW5jdGlvbihjKXt2YXIgZCxlPWEodGhpcyksZj1hKGUuYXR0cihcImRhdGEtdGFyZ2V0XCIpfHwoZD1lLmF0dHIoXCJocmVmXCIpKSYmZC5yZXBsYWNlKC8uKig/PSNbXlxcc10rJCkvLFwiXCIpKTtpZihmLmhhc0NsYXNzKFwiY2Fyb3VzZWxcIikpe3ZhciBnPWEuZXh0ZW5kKHt9LGYuZGF0YSgpLGUuZGF0YSgpKSxoPWUuYXR0cihcImRhdGEtc2xpZGUtdG9cIik7aCYmKGcuaW50ZXJ2YWw9ITEpLGIuY2FsbChmLGcpLGgmJmYuZGF0YShcImJzLmNhcm91c2VsXCIpLnRvKGgpLGMucHJldmVudERlZmF1bHQoKX19KSxhKHdpbmRvdykub24oXCJsb2FkXCIsZnVuY3Rpb24oKXthKCdbZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIl0nKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9YSh0aGlzKTtiLmNhbGwoYyxjLmRhdGEoKSl9KX0pfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1hKHRoaXMpLGU9ZC5kYXRhKFwiYnMuY29sbGFwc2VcIiksZj1hLmV4dGVuZCh7fSxjLkRFRkFVTFRTLGQuZGF0YSgpLFwib2JqZWN0XCI9PXR5cGVvZiBiJiZiKTshZSYmZi50b2dnbGUmJlwic2hvd1wiPT1iJiYoYj0hYiksZXx8ZC5kYXRhKFwiYnMuY29sbGFwc2VcIixlPW5ldyBjKHRoaXMsZikpLFwic3RyaW5nXCI9PXR5cGVvZiBiJiZlW2JdKCl9KX12YXIgYz1mdW5jdGlvbihiLGQpe3RoaXMuJGVsZW1lbnQ9YShiKSx0aGlzLm9wdGlvbnM9YS5leHRlbmQoe30sYy5ERUZBVUxUUyxkKSx0aGlzLnRyYW5zaXRpb25pbmc9bnVsbCx0aGlzLm9wdGlvbnMucGFyZW50JiYodGhpcy4kcGFyZW50PWEodGhpcy5vcHRpb25zLnBhcmVudCkpLHRoaXMub3B0aW9ucy50b2dnbGUmJnRoaXMudG9nZ2xlKCl9O2MuVkVSU0lPTj1cIjMuMi4wXCIsYy5ERUZBVUxUUz17dG9nZ2xlOiEwfSxjLnByb3RvdHlwZS5kaW1lbnNpb249ZnVuY3Rpb24oKXt2YXIgYT10aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwid2lkdGhcIik7cmV0dXJuIGE/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJ9LGMucHJvdG90eXBlLnNob3c9ZnVuY3Rpb24oKXtpZighdGhpcy50cmFuc2l0aW9uaW5nJiYhdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImluXCIpKXt2YXIgYz1hLkV2ZW50KFwic2hvdy5icy5jb2xsYXBzZVwiKTtpZih0aGlzLiRlbGVtZW50LnRyaWdnZXIoYyksIWMuaXNEZWZhdWx0UHJldmVudGVkKCkpe3ZhciBkPXRoaXMuJHBhcmVudCYmdGhpcy4kcGFyZW50LmZpbmQoXCI+IC5wYW5lbCA+IC5pblwiKTtpZihkJiZkLmxlbmd0aCl7dmFyIGU9ZC5kYXRhKFwiYnMuY29sbGFwc2VcIik7aWYoZSYmZS50cmFuc2l0aW9uaW5nKXJldHVybjtiLmNhbGwoZCxcImhpZGVcIiksZXx8ZC5kYXRhKFwiYnMuY29sbGFwc2VcIixudWxsKX12YXIgZj10aGlzLmRpbWVuc2lvbigpO3RoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZVwiKS5hZGRDbGFzcyhcImNvbGxhcHNpbmdcIilbZl0oMCksdGhpcy50cmFuc2l0aW9uaW5nPTE7dmFyIGc9ZnVuY3Rpb24oKXt0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKFwiY29sbGFwc2luZ1wiKS5hZGRDbGFzcyhcImNvbGxhcHNlIGluXCIpW2ZdKFwiXCIpLHRoaXMudHJhbnNpdGlvbmluZz0wLHRoaXMuJGVsZW1lbnQudHJpZ2dlcihcInNob3duLmJzLmNvbGxhcHNlXCIpfTtpZighYS5zdXBwb3J0LnRyYW5zaXRpb24pcmV0dXJuIGcuY2FsbCh0aGlzKTt2YXIgaD1hLmNhbWVsQ2FzZShbXCJzY3JvbGxcIixmXS5qb2luKFwiLVwiKSk7dGhpcy4kZWxlbWVudC5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixhLnByb3h5KGcsdGhpcykpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKDM1MClbZl0odGhpcy4kZWxlbWVudFswXVtoXSl9fX0sYy5wcm90b3R5cGUuaGlkZT1mdW5jdGlvbigpe2lmKCF0aGlzLnRyYW5zaXRpb25pbmcmJnRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJpblwiKSl7dmFyIGI9YS5FdmVudChcImhpZGUuYnMuY29sbGFwc2VcIik7aWYodGhpcy4kZWxlbWVudC50cmlnZ2VyKGIpLCFiLmlzRGVmYXVsdFByZXZlbnRlZCgpKXt2YXIgYz10aGlzLmRpbWVuc2lvbigpO3RoaXMuJGVsZW1lbnRbY10odGhpcy4kZWxlbWVudFtjXSgpKVswXS5vZmZzZXRIZWlnaHQsdGhpcy4kZWxlbWVudC5hZGRDbGFzcyhcImNvbGxhcHNpbmdcIikucmVtb3ZlQ2xhc3MoXCJjb2xsYXBzZVwiKS5yZW1vdmVDbGFzcyhcImluXCIpLHRoaXMudHJhbnNpdGlvbmluZz0xO3ZhciBkPWZ1bmN0aW9uKCl7dGhpcy50cmFuc2l0aW9uaW5nPTAsdGhpcy4kZWxlbWVudC50cmlnZ2VyKFwiaGlkZGVuLmJzLmNvbGxhcHNlXCIpLnJlbW92ZUNsYXNzKFwiY29sbGFwc2luZ1wiKS5hZGRDbGFzcyhcImNvbGxhcHNlXCIpfTtyZXR1cm4gYS5zdXBwb3J0LnRyYW5zaXRpb24/dm9pZCB0aGlzLiRlbGVtZW50W2NdKDApLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGEucHJveHkoZCx0aGlzKSkuZW11bGF0ZVRyYW5zaXRpb25FbmQoMzUwKTpkLmNhbGwodGhpcyl9fX0sYy5wcm90b3R5cGUudG9nZ2xlPWZ1bmN0aW9uKCl7dGhpc1t0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiaW5cIik/XCJoaWRlXCI6XCJzaG93XCJdKCl9O3ZhciBkPWEuZm4uY29sbGFwc2U7YS5mbi5jb2xsYXBzZT1iLGEuZm4uY29sbGFwc2UuQ29uc3RydWN0b3I9YyxhLmZuLmNvbGxhcHNlLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5jb2xsYXBzZT1kLHRoaXN9LGEoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMuY29sbGFwc2UuZGF0YS1hcGlcIiwnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0nLGZ1bmN0aW9uKGMpe3ZhciBkLGU9YSh0aGlzKSxmPWUuYXR0cihcImRhdGEtdGFyZ2V0XCIpfHxjLnByZXZlbnREZWZhdWx0KCl8fChkPWUuYXR0cihcImhyZWZcIikpJiZkLnJlcGxhY2UoLy4qKD89I1teXFxzXSskKS8sXCJcIiksZz1hKGYpLGg9Zy5kYXRhKFwiYnMuY29sbGFwc2VcIiksaT1oP1widG9nZ2xlXCI6ZS5kYXRhKCksaj1lLmF0dHIoXCJkYXRhLXBhcmVudFwiKSxrPWomJmEoaik7aCYmaC50cmFuc2l0aW9uaW5nfHwoayYmay5maW5kKCdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtkYXRhLXBhcmVudD1cIicraisnXCJdJykubm90KGUpLmFkZENsYXNzKFwiY29sbGFwc2VkXCIpLGVbZy5oYXNDbGFzcyhcImluXCIpP1wiYWRkQ2xhc3NcIjpcInJlbW92ZUNsYXNzXCJdKFwiY29sbGFwc2VkXCIpKSxiLmNhbGwoZyxpKX0pfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIpe2ImJjM9PT1iLndoaWNofHwoYShlKS5yZW1vdmUoKSxhKGYpLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1jKGEodGhpcykpLGU9e3JlbGF0ZWRUYXJnZXQ6dGhpc307ZC5oYXNDbGFzcyhcIm9wZW5cIikmJihkLnRyaWdnZXIoYj1hLkV2ZW50KFwiaGlkZS5icy5kcm9wZG93blwiLGUpKSxiLmlzRGVmYXVsdFByZXZlbnRlZCgpfHxkLnJlbW92ZUNsYXNzKFwib3BlblwiKS50cmlnZ2VyKFwiaGlkZGVuLmJzLmRyb3Bkb3duXCIsZSkpfSkpfWZ1bmN0aW9uIGMoYil7dmFyIGM9Yi5hdHRyKFwiZGF0YS10YXJnZXRcIik7Y3x8KGM9Yi5hdHRyKFwiaHJlZlwiKSxjPWMmJi8jW0EtWmEtel0vLnRlc3QoYykmJmMucmVwbGFjZSgvLiooPz0jW15cXHNdKiQpLyxcIlwiKSk7dmFyIGQ9YyYmYShjKTtyZXR1cm4gZCYmZC5sZW5ndGg/ZDpiLnBhcmVudCgpfWZ1bmN0aW9uIGQoYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPWEodGhpcyksZD1jLmRhdGEoXCJicy5kcm9wZG93blwiKTtkfHxjLmRhdGEoXCJicy5kcm9wZG93blwiLGQ9bmV3IGcodGhpcykpLFwic3RyaW5nXCI9PXR5cGVvZiBiJiZkW2JdLmNhbGwoYyl9KX12YXIgZT1cIi5kcm9wZG93bi1iYWNrZHJvcFwiLGY9J1tkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJyxnPWZ1bmN0aW9uKGIpe2EoYikub24oXCJjbGljay5icy5kcm9wZG93blwiLHRoaXMudG9nZ2xlKX07Zy5WRVJTSU9OPVwiMy4yLjBcIixnLnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24oZCl7dmFyIGU9YSh0aGlzKTtpZighZS5pcyhcIi5kaXNhYmxlZCwgOmRpc2FibGVkXCIpKXt2YXIgZj1jKGUpLGc9Zi5oYXNDbGFzcyhcIm9wZW5cIik7aWYoYigpLCFnKXtcIm9udG91Y2hzdGFydFwiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50JiYhZi5jbG9zZXN0KFwiLm5hdmJhci1uYXZcIikubGVuZ3RoJiZhKCc8ZGl2IGNsYXNzPVwiZHJvcGRvd24tYmFja2Ryb3BcIi8+JykuaW5zZXJ0QWZ0ZXIoYSh0aGlzKSkub24oXCJjbGlja1wiLGIpO3ZhciBoPXtyZWxhdGVkVGFyZ2V0OnRoaXN9O2lmKGYudHJpZ2dlcihkPWEuRXZlbnQoXCJzaG93LmJzLmRyb3Bkb3duXCIsaCkpLGQuaXNEZWZhdWx0UHJldmVudGVkKCkpcmV0dXJuO2UudHJpZ2dlcihcImZvY3VzXCIpLGYudG9nZ2xlQ2xhc3MoXCJvcGVuXCIpLnRyaWdnZXIoXCJzaG93bi5icy5kcm9wZG93blwiLGgpfXJldHVybiExfX0sZy5wcm90b3R5cGUua2V5ZG93bj1mdW5jdGlvbihiKXtpZigvKDM4fDQwfDI3KS8udGVzdChiLmtleUNvZGUpKXt2YXIgZD1hKHRoaXMpO2lmKGIucHJldmVudERlZmF1bHQoKSxiLnN0b3BQcm9wYWdhdGlvbigpLCFkLmlzKFwiLmRpc2FibGVkLCA6ZGlzYWJsZWRcIikpe3ZhciBlPWMoZCksZz1lLmhhc0NsYXNzKFwib3BlblwiKTtpZighZ3x8ZyYmMjc9PWIua2V5Q29kZSlyZXR1cm4gMjc9PWIud2hpY2gmJmUuZmluZChmKS50cmlnZ2VyKFwiZm9jdXNcIiksZC50cmlnZ2VyKFwiY2xpY2tcIik7dmFyIGg9XCIgbGk6bm90KC5kaXZpZGVyKTp2aXNpYmxlIGFcIixpPWUuZmluZCgnW3JvbGU9XCJtZW51XCJdJytoKycsIFtyb2xlPVwibGlzdGJveFwiXScraCk7aWYoaS5sZW5ndGgpe3ZhciBqPWkuaW5kZXgoaS5maWx0ZXIoXCI6Zm9jdXNcIikpOzM4PT1iLmtleUNvZGUmJmo+MCYmai0tLDQwPT1iLmtleUNvZGUmJmo8aS5sZW5ndGgtMSYmaisrLH5qfHwoaj0wKSxpLmVxKGopLnRyaWdnZXIoXCJmb2N1c1wiKX19fX07dmFyIGg9YS5mbi5kcm9wZG93bjthLmZuLmRyb3Bkb3duPWQsYS5mbi5kcm9wZG93bi5Db25zdHJ1Y3Rvcj1nLGEuZm4uZHJvcGRvd24ubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLmRyb3Bkb3duPWgsdGhpc30sYShkb2N1bWVudCkub24oXCJjbGljay5icy5kcm9wZG93bi5kYXRhLWFwaVwiLGIpLm9uKFwiY2xpY2suYnMuZHJvcGRvd24uZGF0YS1hcGlcIixcIi5kcm9wZG93biBmb3JtXCIsZnVuY3Rpb24oYSl7YS5zdG9wUHJvcGFnYXRpb24oKX0pLm9uKFwiY2xpY2suYnMuZHJvcGRvd24uZGF0YS1hcGlcIixmLGcucHJvdG90eXBlLnRvZ2dsZSkub24oXCJrZXlkb3duLmJzLmRyb3Bkb3duLmRhdGEtYXBpXCIsZisnLCBbcm9sZT1cIm1lbnVcIl0sIFtyb2xlPVwibGlzdGJveFwiXScsZy5wcm90b3R5cGUua2V5ZG93bil9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYixkKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9YSh0aGlzKSxmPWUuZGF0YShcImJzLm1vZGFsXCIpLGc9YS5leHRlbmQoe30sYy5ERUZBVUxUUyxlLmRhdGEoKSxcIm9iamVjdFwiPT10eXBlb2YgYiYmYik7Znx8ZS5kYXRhKFwiYnMubW9kYWxcIixmPW5ldyBjKHRoaXMsZykpLFwic3RyaW5nXCI9PXR5cGVvZiBiP2ZbYl0oZCk6Zy5zaG93JiZmLnNob3coZCl9KX12YXIgYz1mdW5jdGlvbihiLGMpe3RoaXMub3B0aW9ucz1jLHRoaXMuJGJvZHk9YShkb2N1bWVudC5ib2R5KSx0aGlzLiRlbGVtZW50PWEoYiksdGhpcy4kYmFja2Ryb3A9dGhpcy5pc1Nob3duPW51bGwsdGhpcy5zY3JvbGxiYXJXaWR0aD0wLHRoaXMub3B0aW9ucy5yZW1vdGUmJnRoaXMuJGVsZW1lbnQuZmluZChcIi5tb2RhbC1jb250ZW50XCIpLmxvYWQodGhpcy5vcHRpb25zLnJlbW90ZSxhLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy4kZWxlbWVudC50cmlnZ2VyKFwibG9hZGVkLmJzLm1vZGFsXCIpfSx0aGlzKSl9O2MuVkVSU0lPTj1cIjMuMi4wXCIsYy5ERUZBVUxUUz17YmFja2Ryb3A6ITAsa2V5Ym9hcmQ6ITAsc2hvdzohMH0sYy5wcm90b3R5cGUudG9nZ2xlPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmlzU2hvd24/dGhpcy5oaWRlKCk6dGhpcy5zaG93KGEpfSxjLnByb3RvdHlwZS5zaG93PWZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMsZD1hLkV2ZW50KFwic2hvdy5icy5tb2RhbFwiLHtyZWxhdGVkVGFyZ2V0OmJ9KTt0aGlzLiRlbGVtZW50LnRyaWdnZXIoZCksdGhpcy5pc1Nob3dufHxkLmlzRGVmYXVsdFByZXZlbnRlZCgpfHwodGhpcy5pc1Nob3duPSEwLHRoaXMuY2hlY2tTY3JvbGxiYXIoKSx0aGlzLiRib2R5LmFkZENsYXNzKFwibW9kYWwtb3BlblwiKSx0aGlzLnNldFNjcm9sbGJhcigpLHRoaXMuZXNjYXBlKCksdGhpcy4kZWxlbWVudC5vbihcImNsaWNrLmRpc21pc3MuYnMubW9kYWxcIiwnW2RhdGEtZGlzbWlzcz1cIm1vZGFsXCJdJyxhLnByb3h5KHRoaXMuaGlkZSx0aGlzKSksdGhpcy5iYWNrZHJvcChmdW5jdGlvbigpe3ZhciBkPWEuc3VwcG9ydC50cmFuc2l0aW9uJiZjLiRlbGVtZW50Lmhhc0NsYXNzKFwiZmFkZVwiKTtjLiRlbGVtZW50LnBhcmVudCgpLmxlbmd0aHx8Yy4kZWxlbWVudC5hcHBlbmRUbyhjLiRib2R5KSxjLiRlbGVtZW50LnNob3coKS5zY3JvbGxUb3AoMCksZCYmYy4kZWxlbWVudFswXS5vZmZzZXRXaWR0aCxjLiRlbGVtZW50LmFkZENsYXNzKFwiaW5cIikuYXR0cihcImFyaWEtaGlkZGVuXCIsITEpLGMuZW5mb3JjZUZvY3VzKCk7dmFyIGU9YS5FdmVudChcInNob3duLmJzLm1vZGFsXCIse3JlbGF0ZWRUYXJnZXQ6Yn0pO2Q/Yy4kZWxlbWVudC5maW5kKFwiLm1vZGFsLWRpYWxvZ1wiKS5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixmdW5jdGlvbigpe2MuJGVsZW1lbnQudHJpZ2dlcihcImZvY3VzXCIpLnRyaWdnZXIoZSl9KS5lbXVsYXRlVHJhbnNpdGlvbkVuZCgzMDApOmMuJGVsZW1lbnQudHJpZ2dlcihcImZvY3VzXCIpLnRyaWdnZXIoZSl9KSl9LGMucHJvdG90eXBlLmhpZGU9ZnVuY3Rpb24oYil7YiYmYi5wcmV2ZW50RGVmYXVsdCgpLGI9YS5FdmVudChcImhpZGUuYnMubW9kYWxcIiksdGhpcy4kZWxlbWVudC50cmlnZ2VyKGIpLHRoaXMuaXNTaG93biYmIWIuaXNEZWZhdWx0UHJldmVudGVkKCkmJih0aGlzLmlzU2hvd249ITEsdGhpcy4kYm9keS5yZW1vdmVDbGFzcyhcIm1vZGFsLW9wZW5cIiksdGhpcy5yZXNldFNjcm9sbGJhcigpLHRoaXMuZXNjYXBlKCksYShkb2N1bWVudCkub2ZmKFwiZm9jdXNpbi5icy5tb2RhbFwiKSx0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKFwiaW5cIikuYXR0cihcImFyaWEtaGlkZGVuXCIsITApLm9mZihcImNsaWNrLmRpc21pc3MuYnMubW9kYWxcIiksYS5zdXBwb3J0LnRyYW5zaXRpb24mJnRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJmYWRlXCIpP3RoaXMuJGVsZW1lbnQub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsYS5wcm94eSh0aGlzLmhpZGVNb2RhbCx0aGlzKSkuZW11bGF0ZVRyYW5zaXRpb25FbmQoMzAwKTp0aGlzLmhpZGVNb2RhbCgpKX0sYy5wcm90b3R5cGUuZW5mb3JjZUZvY3VzPWZ1bmN0aW9uKCl7YShkb2N1bWVudCkub2ZmKFwiZm9jdXNpbi5icy5tb2RhbFwiKS5vbihcImZvY3VzaW4uYnMubW9kYWxcIixhLnByb3h5KGZ1bmN0aW9uKGEpe3RoaXMuJGVsZW1lbnRbMF09PT1hLnRhcmdldHx8dGhpcy4kZWxlbWVudC5oYXMoYS50YXJnZXQpLmxlbmd0aHx8dGhpcy4kZWxlbWVudC50cmlnZ2VyKFwiZm9jdXNcIil9LHRoaXMpKX0sYy5wcm90b3R5cGUuZXNjYXBlPWZ1bmN0aW9uKCl7dGhpcy5pc1Nob3duJiZ0aGlzLm9wdGlvbnMua2V5Ym9hcmQ/dGhpcy4kZWxlbWVudC5vbihcImtleXVwLmRpc21pc3MuYnMubW9kYWxcIixhLnByb3h5KGZ1bmN0aW9uKGEpezI3PT1hLndoaWNoJiZ0aGlzLmhpZGUoKX0sdGhpcykpOnRoaXMuaXNTaG93bnx8dGhpcy4kZWxlbWVudC5vZmYoXCJrZXl1cC5kaXNtaXNzLmJzLm1vZGFsXCIpfSxjLnByb3RvdHlwZS5oaWRlTW9kYWw9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO3RoaXMuJGVsZW1lbnQuaGlkZSgpLHRoaXMuYmFja2Ryb3AoZnVuY3Rpb24oKXthLiRlbGVtZW50LnRyaWdnZXIoXCJoaWRkZW4uYnMubW9kYWxcIil9KX0sYy5wcm90b3R5cGUucmVtb3ZlQmFja2Ryb3A9ZnVuY3Rpb24oKXt0aGlzLiRiYWNrZHJvcCYmdGhpcy4kYmFja2Ryb3AucmVtb3ZlKCksdGhpcy4kYmFja2Ryb3A9bnVsbH0sYy5wcm90b3R5cGUuYmFja2Ryb3A9ZnVuY3Rpb24oYil7dmFyIGM9dGhpcyxkPXRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJmYWRlXCIpP1wiZmFkZVwiOlwiXCI7aWYodGhpcy5pc1Nob3duJiZ0aGlzLm9wdGlvbnMuYmFja2Ryb3Ape3ZhciBlPWEuc3VwcG9ydC50cmFuc2l0aW9uJiZkO2lmKHRoaXMuJGJhY2tkcm9wPWEoJzxkaXYgY2xhc3M9XCJtb2RhbC1iYWNrZHJvcCAnK2QrJ1wiIC8+JykuYXBwZW5kVG8odGhpcy4kYm9keSksdGhpcy4kZWxlbWVudC5vbihcImNsaWNrLmRpc21pc3MuYnMubW9kYWxcIixhLnByb3h5KGZ1bmN0aW9uKGEpe2EudGFyZ2V0PT09YS5jdXJyZW50VGFyZ2V0JiYoXCJzdGF0aWNcIj09dGhpcy5vcHRpb25zLmJhY2tkcm9wP3RoaXMuJGVsZW1lbnRbMF0uZm9jdXMuY2FsbCh0aGlzLiRlbGVtZW50WzBdKTp0aGlzLmhpZGUuY2FsbCh0aGlzKSl9LHRoaXMpKSxlJiZ0aGlzLiRiYWNrZHJvcFswXS5vZmZzZXRXaWR0aCx0aGlzLiRiYWNrZHJvcC5hZGRDbGFzcyhcImluXCIpLCFiKXJldHVybjtlP3RoaXMuJGJhY2tkcm9wLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGIpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKDE1MCk6YigpfWVsc2UgaWYoIXRoaXMuaXNTaG93biYmdGhpcy4kYmFja2Ryb3Ape3RoaXMuJGJhY2tkcm9wLnJlbW92ZUNsYXNzKFwiaW5cIik7dmFyIGY9ZnVuY3Rpb24oKXtjLnJlbW92ZUJhY2tkcm9wKCksYiYmYigpfTthLnN1cHBvcnQudHJhbnNpdGlvbiYmdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImZhZGVcIik/dGhpcy4kYmFja2Ryb3Aub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsZikuZW11bGF0ZVRyYW5zaXRpb25FbmQoMTUwKTpmKCl9ZWxzZSBiJiZiKCl9LGMucHJvdG90eXBlLmNoZWNrU2Nyb2xsYmFyPWZ1bmN0aW9uKCl7ZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aD49d2luZG93LmlubmVyV2lkdGh8fCh0aGlzLnNjcm9sbGJhcldpZHRoPXRoaXMuc2Nyb2xsYmFyV2lkdGh8fHRoaXMubWVhc3VyZVNjcm9sbGJhcigpKX0sYy5wcm90b3R5cGUuc2V0U2Nyb2xsYmFyPWZ1bmN0aW9uKCl7dmFyIGE9cGFyc2VJbnQodGhpcy4kYm9keS5jc3MoXCJwYWRkaW5nLXJpZ2h0XCIpfHwwLDEwKTt0aGlzLnNjcm9sbGJhcldpZHRoJiZ0aGlzLiRib2R5LmNzcyhcInBhZGRpbmctcmlnaHRcIixhK3RoaXMuc2Nyb2xsYmFyV2lkdGgpfSxjLnByb3RvdHlwZS5yZXNldFNjcm9sbGJhcj1mdW5jdGlvbigpe3RoaXMuJGJvZHkuY3NzKFwicGFkZGluZy1yaWdodFwiLFwiXCIpfSxjLnByb3RvdHlwZS5tZWFzdXJlU2Nyb2xsYmFyPWZ1bmN0aW9uKCl7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTthLmNsYXNzTmFtZT1cIm1vZGFsLXNjcm9sbGJhci1tZWFzdXJlXCIsdGhpcy4kYm9keS5hcHBlbmQoYSk7dmFyIGI9YS5vZmZzZXRXaWR0aC1hLmNsaWVudFdpZHRoO3JldHVybiB0aGlzLiRib2R5WzBdLnJlbW92ZUNoaWxkKGEpLGJ9O3ZhciBkPWEuZm4ubW9kYWw7YS5mbi5tb2RhbD1iLGEuZm4ubW9kYWwuQ29uc3RydWN0b3I9YyxhLmZuLm1vZGFsLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5tb2RhbD1kLHRoaXN9LGEoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMubW9kYWwuZGF0YS1hcGlcIiwnW2RhdGEtdG9nZ2xlPVwibW9kYWxcIl0nLGZ1bmN0aW9uKGMpe3ZhciBkPWEodGhpcyksZT1kLmF0dHIoXCJocmVmXCIpLGY9YShkLmF0dHIoXCJkYXRhLXRhcmdldFwiKXx8ZSYmZS5yZXBsYWNlKC8uKig/PSNbXlxcc10rJCkvLFwiXCIpKSxnPWYuZGF0YShcImJzLm1vZGFsXCIpP1widG9nZ2xlXCI6YS5leHRlbmQoe3JlbW90ZTohLyMvLnRlc3QoZSkmJmV9LGYuZGF0YSgpLGQuZGF0YSgpKTtkLmlzKFwiYVwiKSYmYy5wcmV2ZW50RGVmYXVsdCgpLGYub25lKFwic2hvdy5icy5tb2RhbFwiLGZ1bmN0aW9uKGEpe2EuaXNEZWZhdWx0UHJldmVudGVkKCl8fGYub25lKFwiaGlkZGVuLmJzLm1vZGFsXCIsZnVuY3Rpb24oKXtkLmlzKFwiOnZpc2libGVcIikmJmQudHJpZ2dlcihcImZvY3VzXCIpfSl9KSxiLmNhbGwoZixnLHRoaXMpfSl9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1kLmRhdGEoXCJicy50b29sdGlwXCIpLGY9XCJvYmplY3RcIj09dHlwZW9mIGImJmI7KGV8fFwiZGVzdHJveVwiIT1iKSYmKGV8fGQuZGF0YShcImJzLnRvb2x0aXBcIixlPW5ldyBjKHRoaXMsZikpLFwic3RyaW5nXCI9PXR5cGVvZiBiJiZlW2JdKCkpfSl9dmFyIGM9ZnVuY3Rpb24oYSxiKXt0aGlzLnR5cGU9dGhpcy5vcHRpb25zPXRoaXMuZW5hYmxlZD10aGlzLnRpbWVvdXQ9dGhpcy5ob3ZlclN0YXRlPXRoaXMuJGVsZW1lbnQ9bnVsbCx0aGlzLmluaXQoXCJ0b29sdGlwXCIsYSxiKX07Yy5WRVJTSU9OPVwiMy4yLjBcIixjLkRFRkFVTFRTPXthbmltYXRpb246ITAscGxhY2VtZW50OlwidG9wXCIsc2VsZWN0b3I6ITEsdGVtcGxhdGU6JzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCI+PC9kaXY+PC9kaXY+Jyx0cmlnZ2VyOlwiaG92ZXIgZm9jdXNcIix0aXRsZTpcIlwiLGRlbGF5OjAsaHRtbDohMSxjb250YWluZXI6ITEsdmlld3BvcnQ6e3NlbGVjdG9yOlwiYm9keVwiLHBhZGRpbmc6MH19LGMucHJvdG90eXBlLmluaXQ9ZnVuY3Rpb24oYixjLGQpe3RoaXMuZW5hYmxlZD0hMCx0aGlzLnR5cGU9Yix0aGlzLiRlbGVtZW50PWEoYyksdGhpcy5vcHRpb25zPXRoaXMuZ2V0T3B0aW9ucyhkKSx0aGlzLiR2aWV3cG9ydD10aGlzLm9wdGlvbnMudmlld3BvcnQmJmEodGhpcy5vcHRpb25zLnZpZXdwb3J0LnNlbGVjdG9yfHx0aGlzLm9wdGlvbnMudmlld3BvcnQpO2Zvcih2YXIgZT10aGlzLm9wdGlvbnMudHJpZ2dlci5zcGxpdChcIiBcIiksZj1lLmxlbmd0aDtmLS07KXt2YXIgZz1lW2ZdO2lmKFwiY2xpY2tcIj09Zyl0aGlzLiRlbGVtZW50Lm9uKFwiY2xpY2suXCIrdGhpcy50eXBlLHRoaXMub3B0aW9ucy5zZWxlY3RvcixhLnByb3h5KHRoaXMudG9nZ2xlLHRoaXMpKTtlbHNlIGlmKFwibWFudWFsXCIhPWcpe3ZhciBoPVwiaG92ZXJcIj09Zz9cIm1vdXNlZW50ZXJcIjpcImZvY3VzaW5cIixpPVwiaG92ZXJcIj09Zz9cIm1vdXNlbGVhdmVcIjpcImZvY3Vzb3V0XCI7dGhpcy4kZWxlbWVudC5vbihoK1wiLlwiK3RoaXMudHlwZSx0aGlzLm9wdGlvbnMuc2VsZWN0b3IsYS5wcm94eSh0aGlzLmVudGVyLHRoaXMpKSx0aGlzLiRlbGVtZW50Lm9uKGkrXCIuXCIrdGhpcy50eXBlLHRoaXMub3B0aW9ucy5zZWxlY3RvcixhLnByb3h5KHRoaXMubGVhdmUsdGhpcykpfX10aGlzLm9wdGlvbnMuc2VsZWN0b3I/dGhpcy5fb3B0aW9ucz1hLmV4dGVuZCh7fSx0aGlzLm9wdGlvbnMse3RyaWdnZXI6XCJtYW51YWxcIixzZWxlY3RvcjpcIlwifSk6dGhpcy5maXhUaXRsZSgpfSxjLnByb3RvdHlwZS5nZXREZWZhdWx0cz1mdW5jdGlvbigpe3JldHVybiBjLkRFRkFVTFRTfSxjLnByb3RvdHlwZS5nZXRPcHRpb25zPWZ1bmN0aW9uKGIpe3JldHVybiBiPWEuZXh0ZW5kKHt9LHRoaXMuZ2V0RGVmYXVsdHMoKSx0aGlzLiRlbGVtZW50LmRhdGEoKSxiKSxiLmRlbGF5JiZcIm51bWJlclwiPT10eXBlb2YgYi5kZWxheSYmKGIuZGVsYXk9e3Nob3c6Yi5kZWxheSxoaWRlOmIuZGVsYXl9KSxifSxjLnByb3RvdHlwZS5nZXREZWxlZ2F0ZU9wdGlvbnM9ZnVuY3Rpb24oKXt2YXIgYj17fSxjPXRoaXMuZ2V0RGVmYXVsdHMoKTtyZXR1cm4gdGhpcy5fb3B0aW9ucyYmYS5lYWNoKHRoaXMuX29wdGlvbnMsZnVuY3Rpb24oYSxkKXtjW2FdIT1kJiYoYlthXT1kKX0pLGJ9LGMucHJvdG90eXBlLmVudGVyPWZ1bmN0aW9uKGIpe3ZhciBjPWIgaW5zdGFuY2VvZiB0aGlzLmNvbnN0cnVjdG9yP2I6YShiLmN1cnJlbnRUYXJnZXQpLmRhdGEoXCJicy5cIit0aGlzLnR5cGUpO3JldHVybiBjfHwoYz1uZXcgdGhpcy5jb25zdHJ1Y3RvcihiLmN1cnJlbnRUYXJnZXQsdGhpcy5nZXREZWxlZ2F0ZU9wdGlvbnMoKSksYShiLmN1cnJlbnRUYXJnZXQpLmRhdGEoXCJicy5cIit0aGlzLnR5cGUsYykpLGNsZWFyVGltZW91dChjLnRpbWVvdXQpLGMuaG92ZXJTdGF0ZT1cImluXCIsYy5vcHRpb25zLmRlbGF5JiZjLm9wdGlvbnMuZGVsYXkuc2hvdz92b2lkKGMudGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XCJpblwiPT1jLmhvdmVyU3RhdGUmJmMuc2hvdygpfSxjLm9wdGlvbnMuZGVsYXkuc2hvdykpOmMuc2hvdygpfSxjLnByb3RvdHlwZS5sZWF2ZT1mdW5jdGlvbihiKXt2YXIgYz1iIGluc3RhbmNlb2YgdGhpcy5jb25zdHJ1Y3Rvcj9iOmEoYi5jdXJyZW50VGFyZ2V0KS5kYXRhKFwiYnMuXCIrdGhpcy50eXBlKTtyZXR1cm4gY3x8KGM9bmV3IHRoaXMuY29uc3RydWN0b3IoYi5jdXJyZW50VGFyZ2V0LHRoaXMuZ2V0RGVsZWdhdGVPcHRpb25zKCkpLGEoYi5jdXJyZW50VGFyZ2V0KS5kYXRhKFwiYnMuXCIrdGhpcy50eXBlLGMpKSxjbGVhclRpbWVvdXQoYy50aW1lb3V0KSxjLmhvdmVyU3RhdGU9XCJvdXRcIixjLm9wdGlvbnMuZGVsYXkmJmMub3B0aW9ucy5kZWxheS5oaWRlP3ZvaWQoYy50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtcIm91dFwiPT1jLmhvdmVyU3RhdGUmJmMuaGlkZSgpfSxjLm9wdGlvbnMuZGVsYXkuaGlkZSkpOmMuaGlkZSgpfSxjLnByb3RvdHlwZS5zaG93PWZ1bmN0aW9uKCl7dmFyIGI9YS5FdmVudChcInNob3cuYnMuXCIrdGhpcy50eXBlKTtpZih0aGlzLmhhc0NvbnRlbnQoKSYmdGhpcy5lbmFibGVkKXt0aGlzLiRlbGVtZW50LnRyaWdnZXIoYik7dmFyIGM9YS5jb250YWlucyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsdGhpcy4kZWxlbWVudFswXSk7aWYoYi5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8IWMpcmV0dXJuO3ZhciBkPXRoaXMsZT10aGlzLnRpcCgpLGY9dGhpcy5nZXRVSUQodGhpcy50eXBlKTt0aGlzLnNldENvbnRlbnQoKSxlLmF0dHIoXCJpZFwiLGYpLHRoaXMuJGVsZW1lbnQuYXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIixmKSx0aGlzLm9wdGlvbnMuYW5pbWF0aW9uJiZlLmFkZENsYXNzKFwiZmFkZVwiKTt2YXIgZz1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLm9wdGlvbnMucGxhY2VtZW50P3RoaXMub3B0aW9ucy5wbGFjZW1lbnQuY2FsbCh0aGlzLGVbMF0sdGhpcy4kZWxlbWVudFswXSk6dGhpcy5vcHRpb25zLnBsYWNlbWVudCxoPS9cXHM/YXV0bz9cXHM/L2ksaT1oLnRlc3QoZyk7aSYmKGc9Zy5yZXBsYWNlKGgsXCJcIil8fFwidG9wXCIpLGUuZGV0YWNoKCkuY3NzKHt0b3A6MCxsZWZ0OjAsZGlzcGxheTpcImJsb2NrXCJ9KS5hZGRDbGFzcyhnKS5kYXRhKFwiYnMuXCIrdGhpcy50eXBlLHRoaXMpLHRoaXMub3B0aW9ucy5jb250YWluZXI/ZS5hcHBlbmRUbyh0aGlzLm9wdGlvbnMuY29udGFpbmVyKTplLmluc2VydEFmdGVyKHRoaXMuJGVsZW1lbnQpO3ZhciBqPXRoaXMuZ2V0UG9zaXRpb24oKSxrPWVbMF0ub2Zmc2V0V2lkdGgsbD1lWzBdLm9mZnNldEhlaWdodDtpZihpKXt2YXIgbT1nLG49dGhpcy4kZWxlbWVudC5wYXJlbnQoKSxvPXRoaXMuZ2V0UG9zaXRpb24obik7Zz1cImJvdHRvbVwiPT1nJiZqLnRvcCtqLmhlaWdodCtsLW8uc2Nyb2xsPm8uaGVpZ2h0P1widG9wXCI6XCJ0b3BcIj09ZyYmai50b3Atby5zY3JvbGwtbDwwP1wiYm90dG9tXCI6XCJyaWdodFwiPT1nJiZqLnJpZ2h0K2s+by53aWR0aD9cImxlZnRcIjpcImxlZnRcIj09ZyYmai5sZWZ0LWs8by5sZWZ0P1wicmlnaHRcIjpnLGUucmVtb3ZlQ2xhc3MobSkuYWRkQ2xhc3MoZyl9dmFyIHA9dGhpcy5nZXRDYWxjdWxhdGVkT2Zmc2V0KGcsaixrLGwpO3RoaXMuYXBwbHlQbGFjZW1lbnQocCxnKTt2YXIgcT1mdW5jdGlvbigpe2QuJGVsZW1lbnQudHJpZ2dlcihcInNob3duLmJzLlwiK2QudHlwZSksZC5ob3ZlclN0YXRlPW51bGx9O2Euc3VwcG9ydC50cmFuc2l0aW9uJiZ0aGlzLiR0aXAuaGFzQ2xhc3MoXCJmYWRlXCIpP2Uub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIscSkuZW11bGF0ZVRyYW5zaXRpb25FbmQoMTUwKTpxKCl9fSxjLnByb3RvdHlwZS5hcHBseVBsYWNlbWVudD1mdW5jdGlvbihiLGMpe3ZhciBkPXRoaXMudGlwKCksZT1kWzBdLm9mZnNldFdpZHRoLGY9ZFswXS5vZmZzZXRIZWlnaHQsZz1wYXJzZUludChkLmNzcyhcIm1hcmdpbi10b3BcIiksMTApLGg9cGFyc2VJbnQoZC5jc3MoXCJtYXJnaW4tbGVmdFwiKSwxMCk7aXNOYU4oZykmJihnPTApLGlzTmFOKGgpJiYoaD0wKSxiLnRvcD1iLnRvcCtnLGIubGVmdD1iLmxlZnQraCxhLm9mZnNldC5zZXRPZmZzZXQoZFswXSxhLmV4dGVuZCh7dXNpbmc6ZnVuY3Rpb24oYSl7ZC5jc3Moe3RvcDpNYXRoLnJvdW5kKGEudG9wKSxsZWZ0Ok1hdGgucm91bmQoYS5sZWZ0KX0pfX0sYiksMCksZC5hZGRDbGFzcyhcImluXCIpO3ZhciBpPWRbMF0ub2Zmc2V0V2lkdGgsaj1kWzBdLm9mZnNldEhlaWdodDtcInRvcFwiPT1jJiZqIT1mJiYoYi50b3A9Yi50b3ArZi1qKTt2YXIgaz10aGlzLmdldFZpZXdwb3J0QWRqdXN0ZWREZWx0YShjLGIsaSxqKTtrLmxlZnQ/Yi5sZWZ0Kz1rLmxlZnQ6Yi50b3ArPWsudG9wO3ZhciBsPWsubGVmdD8yKmsubGVmdC1lK2k6MiprLnRvcC1mK2osbT1rLmxlZnQ/XCJsZWZ0XCI6XCJ0b3BcIixuPWsubGVmdD9cIm9mZnNldFdpZHRoXCI6XCJvZmZzZXRIZWlnaHRcIjtkLm9mZnNldChiKSx0aGlzLnJlcGxhY2VBcnJvdyhsLGRbMF1bbl0sbSl9LGMucHJvdG90eXBlLnJlcGxhY2VBcnJvdz1mdW5jdGlvbihhLGIsYyl7dGhpcy5hcnJvdygpLmNzcyhjLGE/NTAqKDEtYS9iKStcIiVcIjpcIlwiKX0sYy5wcm90b3R5cGUuc2V0Q29udGVudD1mdW5jdGlvbigpe3ZhciBhPXRoaXMudGlwKCksYj10aGlzLmdldFRpdGxlKCk7YS5maW5kKFwiLnRvb2x0aXAtaW5uZXJcIilbdGhpcy5vcHRpb25zLmh0bWw/XCJodG1sXCI6XCJ0ZXh0XCJdKGIpLGEucmVtb3ZlQ2xhc3MoXCJmYWRlIGluIHRvcCBib3R0b20gbGVmdCByaWdodFwiKX0sYy5wcm90b3R5cGUuaGlkZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoKXtcImluXCIhPWMuaG92ZXJTdGF0ZSYmZC5kZXRhY2goKSxjLiRlbGVtZW50LnRyaWdnZXIoXCJoaWRkZW4uYnMuXCIrYy50eXBlKX12YXIgYz10aGlzLGQ9dGhpcy50aXAoKSxlPWEuRXZlbnQoXCJoaWRlLmJzLlwiK3RoaXMudHlwZSk7cmV0dXJuIHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIiksdGhpcy4kZWxlbWVudC50cmlnZ2VyKGUpLGUuaXNEZWZhdWx0UHJldmVudGVkKCk/dm9pZCAwOihkLnJlbW92ZUNsYXNzKFwiaW5cIiksYS5zdXBwb3J0LnRyYW5zaXRpb24mJnRoaXMuJHRpcC5oYXNDbGFzcyhcImZhZGVcIik/ZC5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixiKS5lbXVsYXRlVHJhbnNpdGlvbkVuZCgxNTApOmIoKSx0aGlzLmhvdmVyU3RhdGU9bnVsbCx0aGlzKX0sYy5wcm90b3R5cGUuZml4VGl0bGU9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLiRlbGVtZW50OyhhLmF0dHIoXCJ0aXRsZVwiKXx8XCJzdHJpbmdcIiE9dHlwZW9mIGEuYXR0cihcImRhdGEtb3JpZ2luYWwtdGl0bGVcIikpJiZhLmF0dHIoXCJkYXRhLW9yaWdpbmFsLXRpdGxlXCIsYS5hdHRyKFwidGl0bGVcIil8fFwiXCIpLmF0dHIoXCJ0aXRsZVwiLFwiXCIpfSxjLnByb3RvdHlwZS5oYXNDb250ZW50PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0VGl0bGUoKX0sYy5wcm90b3R5cGUuZ2V0UG9zaXRpb249ZnVuY3Rpb24oYil7Yj1ifHx0aGlzLiRlbGVtZW50O3ZhciBjPWJbMF0sZD1cIkJPRFlcIj09Yy50YWdOYW1lO3JldHVybiBhLmV4dGVuZCh7fSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBjLmdldEJvdW5kaW5nQ2xpZW50UmVjdD9jLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOm51bGwse3Njcm9sbDpkP2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3B8fGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wOmIuc2Nyb2xsVG9wKCksd2lkdGg6ZD9hKHdpbmRvdykud2lkdGgoKTpiLm91dGVyV2lkdGgoKSxoZWlnaHQ6ZD9hKHdpbmRvdykuaGVpZ2h0KCk6Yi5vdXRlckhlaWdodCgpfSxkP3t0b3A6MCxsZWZ0OjB9OmIub2Zmc2V0KCkpfSxjLnByb3RvdHlwZS5nZXRDYWxjdWxhdGVkT2Zmc2V0PWZ1bmN0aW9uKGEsYixjLGQpe3JldHVyblwiYm90dG9tXCI9PWE/e3RvcDpiLnRvcCtiLmhlaWdodCxsZWZ0OmIubGVmdCtiLndpZHRoLzItYy8yfTpcInRvcFwiPT1hP3t0b3A6Yi50b3AtZCxsZWZ0OmIubGVmdCtiLndpZHRoLzItYy8yfTpcImxlZnRcIj09YT97dG9wOmIudG9wK2IuaGVpZ2h0LzItZC8yLGxlZnQ6Yi5sZWZ0LWN9Ont0b3A6Yi50b3ArYi5oZWlnaHQvMi1kLzIsbGVmdDpiLmxlZnQrYi53aWR0aH19LGMucHJvdG90eXBlLmdldFZpZXdwb3J0QWRqdXN0ZWREZWx0YT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT17dG9wOjAsbGVmdDowfTtpZighdGhpcy4kdmlld3BvcnQpcmV0dXJuIGU7dmFyIGY9dGhpcy5vcHRpb25zLnZpZXdwb3J0JiZ0aGlzLm9wdGlvbnMudmlld3BvcnQucGFkZGluZ3x8MCxnPXRoaXMuZ2V0UG9zaXRpb24odGhpcy4kdmlld3BvcnQpO2lmKC9yaWdodHxsZWZ0Ly50ZXN0KGEpKXt2YXIgaD1iLnRvcC1mLWcuc2Nyb2xsLGk9Yi50b3ArZi1nLnNjcm9sbCtkO2g8Zy50b3A/ZS50b3A9Zy50b3AtaDppPmcudG9wK2cuaGVpZ2h0JiYoZS50b3A9Zy50b3ArZy5oZWlnaHQtaSl9ZWxzZXt2YXIgaj1iLmxlZnQtZixrPWIubGVmdCtmK2M7ajxnLmxlZnQ/ZS5sZWZ0PWcubGVmdC1qOms+Zy53aWR0aCYmKGUubGVmdD1nLmxlZnQrZy53aWR0aC1rKX1yZXR1cm4gZX0sYy5wcm90b3R5cGUuZ2V0VGl0bGU9ZnVuY3Rpb24oKXt2YXIgYSxiPXRoaXMuJGVsZW1lbnQsYz10aGlzLm9wdGlvbnM7cmV0dXJuIGE9Yi5hdHRyKFwiZGF0YS1vcmlnaW5hbC10aXRsZVwiKXx8KFwiZnVuY3Rpb25cIj09dHlwZW9mIGMudGl0bGU/Yy50aXRsZS5jYWxsKGJbMF0pOmMudGl0bGUpfSxjLnByb3RvdHlwZS5nZXRVSUQ9ZnVuY3Rpb24oYSl7ZG8gYSs9fn4oMWU2Kk1hdGgucmFuZG9tKCkpO3doaWxlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGEpKTtyZXR1cm4gYX0sYy5wcm90b3R5cGUudGlwPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJHRpcD10aGlzLiR0aXB8fGEodGhpcy5vcHRpb25zLnRlbXBsYXRlKX0sYy5wcm90b3R5cGUuYXJyb3c9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kYXJyb3c9dGhpcy4kYXJyb3d8fHRoaXMudGlwKCkuZmluZChcIi50b29sdGlwLWFycm93XCIpfSxjLnByb3RvdHlwZS52YWxpZGF0ZT1mdW5jdGlvbigpe3RoaXMuJGVsZW1lbnRbMF0ucGFyZW50Tm9kZXx8KHRoaXMuaGlkZSgpLHRoaXMuJGVsZW1lbnQ9bnVsbCx0aGlzLm9wdGlvbnM9bnVsbCl9LGMucHJvdG90eXBlLmVuYWJsZT1mdW5jdGlvbigpe3RoaXMuZW5hYmxlZD0hMH0sYy5wcm90b3R5cGUuZGlzYWJsZT1mdW5jdGlvbigpe3RoaXMuZW5hYmxlZD0hMX0sYy5wcm90b3R5cGUudG9nZ2xlRW5hYmxlZD1mdW5jdGlvbigpe3RoaXMuZW5hYmxlZD0hdGhpcy5lbmFibGVkfSxjLnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24oYil7dmFyIGM9dGhpcztiJiYoYz1hKGIuY3VycmVudFRhcmdldCkuZGF0YShcImJzLlwiK3RoaXMudHlwZSksY3x8KGM9bmV3IHRoaXMuY29uc3RydWN0b3IoYi5jdXJyZW50VGFyZ2V0LHRoaXMuZ2V0RGVsZWdhdGVPcHRpb25zKCkpLGEoYi5jdXJyZW50VGFyZ2V0KS5kYXRhKFwiYnMuXCIrdGhpcy50eXBlLGMpKSksYy50aXAoKS5oYXNDbGFzcyhcImluXCIpP2MubGVhdmUoYyk6Yy5lbnRlcihjKX0sYy5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpLHRoaXMuaGlkZSgpLiRlbGVtZW50Lm9mZihcIi5cIit0aGlzLnR5cGUpLnJlbW92ZURhdGEoXCJicy5cIit0aGlzLnR5cGUpfTt2YXIgZD1hLmZuLnRvb2x0aXA7YS5mbi50b29sdGlwPWIsYS5mbi50b29sdGlwLkNvbnN0cnVjdG9yPWMsYS5mbi50b29sdGlwLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi50b29sdGlwPWQsdGhpc319KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1kLmRhdGEoXCJicy5wb3BvdmVyXCIpLGY9XCJvYmplY3RcIj09dHlwZW9mIGImJmI7KGV8fFwiZGVzdHJveVwiIT1iKSYmKGV8fGQuZGF0YShcImJzLnBvcG92ZXJcIixlPW5ldyBjKHRoaXMsZikpLFwic3RyaW5nXCI9PXR5cGVvZiBiJiZlW2JdKCkpfSl9dmFyIGM9ZnVuY3Rpb24oYSxiKXt0aGlzLmluaXQoXCJwb3BvdmVyXCIsYSxiKX07aWYoIWEuZm4udG9vbHRpcCl0aHJvdyBuZXcgRXJyb3IoXCJQb3BvdmVyIHJlcXVpcmVzIHRvb2x0aXAuanNcIik7Yy5WRVJTSU9OPVwiMy4yLjBcIixjLkRFRkFVTFRTPWEuZXh0ZW5kKHt9LGEuZm4udG9vbHRpcC5Db25zdHJ1Y3Rvci5ERUZBVUxUUyx7cGxhY2VtZW50OlwicmlnaHRcIix0cmlnZ2VyOlwiY2xpY2tcIixjb250ZW50OlwiXCIsdGVtcGxhdGU6JzxkaXYgY2xhc3M9XCJwb3BvdmVyXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj48aDMgY2xhc3M9XCJwb3BvdmVyLXRpdGxlXCI+PC9oMz48ZGl2IGNsYXNzPVwicG9wb3Zlci1jb250ZW50XCI+PC9kaXY+PC9kaXY+J30pLGMucHJvdG90eXBlPWEuZXh0ZW5kKHt9LGEuZm4udG9vbHRpcC5Db25zdHJ1Y3Rvci5wcm90b3R5cGUpLGMucHJvdG90eXBlLmNvbnN0cnVjdG9yPWMsYy5wcm90b3R5cGUuZ2V0RGVmYXVsdHM9ZnVuY3Rpb24oKXtyZXR1cm4gYy5ERUZBVUxUU30sYy5wcm90b3R5cGUuc2V0Q29udGVudD1mdW5jdGlvbigpe3ZhciBhPXRoaXMudGlwKCksYj10aGlzLmdldFRpdGxlKCksYz10aGlzLmdldENvbnRlbnQoKTthLmZpbmQoXCIucG9wb3Zlci10aXRsZVwiKVt0aGlzLm9wdGlvbnMuaHRtbD9cImh0bWxcIjpcInRleHRcIl0oYiksYS5maW5kKFwiLnBvcG92ZXItY29udGVudFwiKS5lbXB0eSgpW3RoaXMub3B0aW9ucy5odG1sP1wic3RyaW5nXCI9PXR5cGVvZiBjP1wiaHRtbFwiOlwiYXBwZW5kXCI6XCJ0ZXh0XCJdKGMpLGEucmVtb3ZlQ2xhc3MoXCJmYWRlIHRvcCBib3R0b20gbGVmdCByaWdodCBpblwiKSxhLmZpbmQoXCIucG9wb3Zlci10aXRsZVwiKS5odG1sKCl8fGEuZmluZChcIi5wb3BvdmVyLXRpdGxlXCIpLmhpZGUoKX0sYy5wcm90b3R5cGUuaGFzQ29udGVudD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdldFRpdGxlKCl8fHRoaXMuZ2V0Q29udGVudCgpfSxjLnByb3RvdHlwZS5nZXRDb250ZW50PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy4kZWxlbWVudCxiPXRoaXMub3B0aW9ucztyZXR1cm4gYS5hdHRyKFwiZGF0YS1jb250ZW50XCIpfHwoXCJmdW5jdGlvblwiPT10eXBlb2YgYi5jb250ZW50P2IuY29udGVudC5jYWxsKGFbMF0pOmIuY29udGVudCl9LGMucHJvdG90eXBlLmFycm93PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGFycm93PXRoaXMuJGFycm93fHx0aGlzLnRpcCgpLmZpbmQoXCIuYXJyb3dcIil9LGMucHJvdG90eXBlLnRpcD1mdW5jdGlvbigpe3JldHVybiB0aGlzLiR0aXB8fCh0aGlzLiR0aXA9YSh0aGlzLm9wdGlvbnMudGVtcGxhdGUpKSx0aGlzLiR0aXB9O3ZhciBkPWEuZm4ucG9wb3ZlcjthLmZuLnBvcG92ZXI9YixhLmZuLnBvcG92ZXIuQ29uc3RydWN0b3I9YyxhLmZuLnBvcG92ZXIubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLnBvcG92ZXI9ZCx0aGlzfX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihjLGQpe3ZhciBlPWEucHJveHkodGhpcy5wcm9jZXNzLHRoaXMpO3RoaXMuJGJvZHk9YShcImJvZHlcIiksdGhpcy4kc2Nyb2xsRWxlbWVudD1hKGEoYykuaXMoXCJib2R5XCIpP3dpbmRvdzpjKSx0aGlzLm9wdGlvbnM9YS5leHRlbmQoe30sYi5ERUZBVUxUUyxkKSx0aGlzLnNlbGVjdG9yPSh0aGlzLm9wdGlvbnMudGFyZ2V0fHxcIlwiKStcIiAubmF2IGxpID4gYVwiLHRoaXMub2Zmc2V0cz1bXSx0aGlzLnRhcmdldHM9W10sdGhpcy5hY3RpdmVUYXJnZXQ9bnVsbCx0aGlzLnNjcm9sbEhlaWdodD0wLHRoaXMuJHNjcm9sbEVsZW1lbnQub24oXCJzY3JvbGwuYnMuc2Nyb2xsc3B5XCIsZSksdGhpcy5yZWZyZXNoKCksdGhpcy5wcm9jZXNzKCl9ZnVuY3Rpb24gYyhjKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ9YSh0aGlzKSxlPWQuZGF0YShcImJzLnNjcm9sbHNweVwiKSxmPVwib2JqZWN0XCI9PXR5cGVvZiBjJiZjO2V8fGQuZGF0YShcImJzLnNjcm9sbHNweVwiLGU9bmV3IGIodGhpcyxmKSksXCJzdHJpbmdcIj09dHlwZW9mIGMmJmVbY10oKX0pfWIuVkVSU0lPTj1cIjMuMi4wXCIsYi5ERUZBVUxUUz17b2Zmc2V0OjEwfSxiLnByb3RvdHlwZS5nZXRTY3JvbGxIZWlnaHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kc2Nyb2xsRWxlbWVudFswXS5zY3JvbGxIZWlnaHR8fE1hdGgubWF4KHRoaXMuJGJvZHlbMF0uc2Nyb2xsSGVpZ2h0LGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQpfSxiLnByb3RvdHlwZS5yZWZyZXNoPWZ1bmN0aW9uKCl7dmFyIGI9XCJvZmZzZXRcIixjPTA7YS5pc1dpbmRvdyh0aGlzLiRzY3JvbGxFbGVtZW50WzBdKXx8KGI9XCJwb3NpdGlvblwiLGM9dGhpcy4kc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3AoKSksdGhpcy5vZmZzZXRzPVtdLHRoaXMudGFyZ2V0cz1bXSx0aGlzLnNjcm9sbEhlaWdodD10aGlzLmdldFNjcm9sbEhlaWdodCgpO3ZhciBkPXRoaXM7dGhpcy4kYm9keS5maW5kKHRoaXMuc2VsZWN0b3IpLm1hcChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1kLmRhdGEoXCJ0YXJnZXRcIil8fGQuYXR0cihcImhyZWZcIiksZj0vXiMuLy50ZXN0KGUpJiZhKGUpO3JldHVybiBmJiZmLmxlbmd0aCYmZi5pcyhcIjp2aXNpYmxlXCIpJiZbW2ZbYl0oKS50b3ArYyxlXV18fG51bGx9KS5zb3J0KGZ1bmN0aW9uKGEsYil7cmV0dXJuIGFbMF0tYlswXX0pLmVhY2goZnVuY3Rpb24oKXtkLm9mZnNldHMucHVzaCh0aGlzWzBdKSxkLnRhcmdldHMucHVzaCh0aGlzWzFdKX0pfSxiLnByb3RvdHlwZS5wcm9jZXNzPWZ1bmN0aW9uKCl7dmFyIGEsYj10aGlzLiRzY3JvbGxFbGVtZW50LnNjcm9sbFRvcCgpK3RoaXMub3B0aW9ucy5vZmZzZXQsYz10aGlzLmdldFNjcm9sbEhlaWdodCgpLGQ9dGhpcy5vcHRpb25zLm9mZnNldCtjLXRoaXMuJHNjcm9sbEVsZW1lbnQuaGVpZ2h0KCksZT10aGlzLm9mZnNldHMsZj10aGlzLnRhcmdldHMsZz10aGlzLmFjdGl2ZVRhcmdldDtpZih0aGlzLnNjcm9sbEhlaWdodCE9YyYmdGhpcy5yZWZyZXNoKCksYj49ZClyZXR1cm4gZyE9KGE9ZltmLmxlbmd0aC0xXSkmJnRoaXMuYWN0aXZhdGUoYSk7aWYoZyYmYjw9ZVswXSlyZXR1cm4gZyE9KGE9ZlswXSkmJnRoaXMuYWN0aXZhdGUoYSk7Zm9yKGE9ZS5sZW5ndGg7YS0tOylnIT1mW2FdJiZiPj1lW2FdJiYoIWVbYSsxXXx8Yjw9ZVthKzFdKSYmdGhpcy5hY3RpdmF0ZShmW2FdKX0sYi5wcm90b3R5cGUuYWN0aXZhdGU9ZnVuY3Rpb24oYil7dGhpcy5hY3RpdmVUYXJnZXQ9YixhKHRoaXMuc2VsZWN0b3IpLnBhcmVudHNVbnRpbCh0aGlzLm9wdGlvbnMudGFyZ2V0LFwiLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTt2YXIgYz10aGlzLnNlbGVjdG9yKydbZGF0YS10YXJnZXQ9XCInK2IrJ1wiXSwnK3RoaXMuc2VsZWN0b3IrJ1tocmVmPVwiJytiKydcIl0nLGQ9YShjKS5wYXJlbnRzKFwibGlcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7ZC5wYXJlbnQoXCIuZHJvcGRvd24tbWVudVwiKS5sZW5ndGgmJihkPWQuY2xvc2VzdChcImxpLmRyb3Bkb3duXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpKSxkLnRyaWdnZXIoXCJhY3RpdmF0ZS5icy5zY3JvbGxzcHlcIil9O3ZhciBkPWEuZm4uc2Nyb2xsc3B5O2EuZm4uc2Nyb2xsc3B5PWMsYS5mbi5zY3JvbGxzcHkuQ29uc3RydWN0b3I9YixhLmZuLnNjcm9sbHNweS5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4uc2Nyb2xsc3B5PWQsdGhpc30sYSh3aW5kb3cpLm9uKFwibG9hZC5icy5zY3JvbGxzcHkuZGF0YS1hcGlcIixmdW5jdGlvbigpe2EoJ1tkYXRhLXNweT1cInNjcm9sbFwiXScpLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpO2MuY2FsbChiLGIuZGF0YSgpKX0pfSl9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1kLmRhdGEoXCJicy50YWJcIik7ZXx8ZC5kYXRhKFwiYnMudGFiXCIsZT1uZXcgYyh0aGlzKSksXCJzdHJpbmdcIj09dHlwZW9mIGImJmVbYl0oKX0pfXZhciBjPWZ1bmN0aW9uKGIpe3RoaXMuZWxlbWVudD1hKGIpfTtjLlZFUlNJT049XCIzLjIuMFwiLGMucHJvdG90eXBlLnNob3c9ZnVuY3Rpb24oKXt2YXIgYj10aGlzLmVsZW1lbnQsYz1iLmNsb3Nlc3QoXCJ1bDpub3QoLmRyb3Bkb3duLW1lbnUpXCIpLGQ9Yi5kYXRhKFwidGFyZ2V0XCIpO2lmKGR8fChkPWIuYXR0cihcImhyZWZcIiksZD1kJiZkLnJlcGxhY2UoLy4qKD89I1teXFxzXSokKS8sXCJcIikpLCFiLnBhcmVudChcImxpXCIpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKXt2YXIgZT1jLmZpbmQoXCIuYWN0aXZlOmxhc3QgYVwiKVswXSxmPWEuRXZlbnQoXCJzaG93LmJzLnRhYlwiLHtyZWxhdGVkVGFyZ2V0OmV9KTtpZihiLnRyaWdnZXIoZiksIWYuaXNEZWZhdWx0UHJldmVudGVkKCkpe3ZhciBnPWEoZCk7dGhpcy5hY3RpdmF0ZShiLmNsb3Nlc3QoXCJsaVwiKSxjKSx0aGlzLmFjdGl2YXRlKGcsZy5wYXJlbnQoKSxmdW5jdGlvbigpe2IudHJpZ2dlcih7dHlwZTpcInNob3duLmJzLnRhYlwiLHJlbGF0ZWRUYXJnZXQ6ZX0pfSl9fX0sYy5wcm90b3R5cGUuYWN0aXZhdGU9ZnVuY3Rpb24oYixjLGQpe2Z1bmN0aW9uIGUoKXtmLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLmZpbmQoXCI+IC5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxiLmFkZENsYXNzKFwiYWN0aXZlXCIpLGc/KGJbMF0ub2Zmc2V0V2lkdGgsYi5hZGRDbGFzcyhcImluXCIpKTpiLnJlbW92ZUNsYXNzKFwiZmFkZVwiKSxiLnBhcmVudChcIi5kcm9wZG93bi1tZW51XCIpJiZiLmNsb3Nlc3QoXCJsaS5kcm9wZG93blwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxkJiZkKCl9dmFyIGY9Yy5maW5kKFwiPiAuYWN0aXZlXCIpLGc9ZCYmYS5zdXBwb3J0LnRyYW5zaXRpb24mJmYuaGFzQ2xhc3MoXCJmYWRlXCIpO2c/Zi5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixlKS5lbXVsYXRlVHJhbnNpdGlvbkVuZCgxNTApOmUoKSxmLnJlbW92ZUNsYXNzKFwiaW5cIil9O3ZhciBkPWEuZm4udGFiO2EuZm4udGFiPWIsYS5mbi50YWIuQ29uc3RydWN0b3I9YyxhLmZuLnRhYi5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4udGFiPWQsdGhpc30sYShkb2N1bWVudCkub24oXCJjbGljay5icy50YWIuZGF0YS1hcGlcIiwnW2RhdGEtdG9nZ2xlPVwidGFiXCJdLCBbZGF0YS10b2dnbGU9XCJwaWxsXCJdJyxmdW5jdGlvbihjKXtjLnByZXZlbnREZWZhdWx0KCksYi5jYWxsKGEodGhpcyksXCJzaG93XCIpfSl9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1kLmRhdGEoXCJicy5hZmZpeFwiKSxmPVwib2JqZWN0XCI9PXR5cGVvZiBiJiZiO2V8fGQuZGF0YShcImJzLmFmZml4XCIsZT1uZXcgYyh0aGlzLGYpKSxcInN0cmluZ1wiPT10eXBlb2YgYiYmZVtiXSgpfSl9dmFyIGM9ZnVuY3Rpb24oYixkKXt0aGlzLm9wdGlvbnM9YS5leHRlbmQoe30sYy5ERUZBVUxUUyxkKSx0aGlzLiR0YXJnZXQ9YSh0aGlzLm9wdGlvbnMudGFyZ2V0KS5vbihcInNjcm9sbC5icy5hZmZpeC5kYXRhLWFwaVwiLGEucHJveHkodGhpcy5jaGVja1Bvc2l0aW9uLHRoaXMpKS5vbihcImNsaWNrLmJzLmFmZml4LmRhdGEtYXBpXCIsYS5wcm94eSh0aGlzLmNoZWNrUG9zaXRpb25XaXRoRXZlbnRMb29wLHRoaXMpKSx0aGlzLiRlbGVtZW50PWEoYiksdGhpcy5hZmZpeGVkPXRoaXMudW5waW49dGhpcy5waW5uZWRPZmZzZXQ9bnVsbCx0aGlzLmNoZWNrUG9zaXRpb24oKX07Yy5WRVJTSU9OPVwiMy4yLjBcIixjLlJFU0VUPVwiYWZmaXggYWZmaXgtdG9wIGFmZml4LWJvdHRvbVwiLGMuREVGQVVMVFM9e29mZnNldDowLHRhcmdldDp3aW5kb3d9LGMucHJvdG90eXBlLmdldFBpbm5lZE9mZnNldD1mdW5jdGlvbigpe2lmKHRoaXMucGlubmVkT2Zmc2V0KXJldHVybiB0aGlzLnBpbm5lZE9mZnNldDt0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKGMuUkVTRVQpLmFkZENsYXNzKFwiYWZmaXhcIik7dmFyIGE9dGhpcy4kdGFyZ2V0LnNjcm9sbFRvcCgpLGI9dGhpcy4kZWxlbWVudC5vZmZzZXQoKTtyZXR1cm4gdGhpcy5waW5uZWRPZmZzZXQ9Yi50b3AtYX0sYy5wcm90b3R5cGUuY2hlY2tQb3NpdGlvbldpdGhFdmVudExvb3A9ZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGEucHJveHkodGhpcy5jaGVja1Bvc2l0aW9uLHRoaXMpLDEpfSxjLnByb3RvdHlwZS5jaGVja1Bvc2l0aW9uPWZ1bmN0aW9uKCl7aWYodGhpcy4kZWxlbWVudC5pcyhcIjp2aXNpYmxlXCIpKXt2YXIgYj1hKGRvY3VtZW50KS5oZWlnaHQoKSxkPXRoaXMuJHRhcmdldC5zY3JvbGxUb3AoKSxlPXRoaXMuJGVsZW1lbnQub2Zmc2V0KCksZj10aGlzLm9wdGlvbnMub2Zmc2V0LGc9Zi50b3AsaD1mLmJvdHRvbTtcIm9iamVjdFwiIT10eXBlb2YgZiYmKGg9Zz1mKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBnJiYoZz1mLnRvcCh0aGlzLiRlbGVtZW50KSksXCJmdW5jdGlvblwiPT10eXBlb2YgaCYmKGg9Zi5ib3R0b20odGhpcy4kZWxlbWVudCkpO3ZhciBpPW51bGwhPXRoaXMudW5waW4mJmQrdGhpcy51bnBpbjw9ZS50b3A/ITE6bnVsbCE9aCYmZS50b3ArdGhpcy4kZWxlbWVudC5oZWlnaHQoKT49Yi1oP1wiYm90dG9tXCI6bnVsbCE9ZyYmZz49ZD9cInRvcFwiOiExO2lmKHRoaXMuYWZmaXhlZCE9PWkpe251bGwhPXRoaXMudW5waW4mJnRoaXMuJGVsZW1lbnQuY3NzKFwidG9wXCIsXCJcIik7dmFyIGo9XCJhZmZpeFwiKyhpP1wiLVwiK2k6XCJcIiksaz1hLkV2ZW50KGorXCIuYnMuYWZmaXhcIik7dGhpcy4kZWxlbWVudC50cmlnZ2VyKGspLGsuaXNEZWZhdWx0UHJldmVudGVkKCl8fCh0aGlzLmFmZml4ZWQ9aSx0aGlzLnVucGluPVwiYm90dG9tXCI9PWk/dGhpcy5nZXRQaW5uZWRPZmZzZXQoKTpudWxsLHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoYy5SRVNFVCkuYWRkQ2xhc3MoaikudHJpZ2dlcihhLkV2ZW50KGoucmVwbGFjZShcImFmZml4XCIsXCJhZmZpeGVkXCIpKSksXCJib3R0b21cIj09aSYmdGhpcy4kZWxlbWVudC5vZmZzZXQoe3RvcDpiLXRoaXMuJGVsZW1lbnQuaGVpZ2h0KCktaH0pKX19fTt2YXIgZD1hLmZuLmFmZml4O2EuZm4uYWZmaXg9YixhLmZuLmFmZml4LkNvbnN0cnVjdG9yPWMsYS5mbi5hZmZpeC5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4uYWZmaXg9ZCx0aGlzfSxhKHdpbmRvdykub24oXCJsb2FkXCIsZnVuY3Rpb24oKXthKCdbZGF0YS1zcHk9XCJhZmZpeFwiXScpLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1hKHRoaXMpLGQ9Yy5kYXRhKCk7ZC5vZmZzZXQ9ZC5vZmZzZXR8fHt9LGQub2Zmc2V0Qm90dG9tJiYoZC5vZmZzZXQuYm90dG9tPWQub2Zmc2V0Qm90dG9tKSxkLm9mZnNldFRvcCYmKGQub2Zmc2V0LnRvcD1kLm9mZnNldFRvcCksYi5jYWxsKGMsZCl9KX0pfShqUXVlcnkpO1xuOyBicm93c2VyaWZ5X3NoaW1fX2RlZmluZV9fbW9kdWxlX19leHBvcnRfXyh0eXBlb2YgalF1ZXJ5ICE9IFwidW5kZWZpbmVkXCIgPyBqUXVlcnkgOiB3aW5kb3cualF1ZXJ5KTtcblxufSkuY2FsbChnbG9iYWwsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgZnVuY3Rpb24gZGVmaW5lRXhwb3J0KGV4KSB7IG1vZHVsZS5leHBvcnRzID0gZXg7IH0pO1xuXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSkiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG47X19icm93c2VyaWZ5X3NoaW1fcmVxdWlyZV9fPXJlcXVpcmU7KGZ1bmN0aW9uIGJyb3dzZXJpZnlTaGltKG1vZHVsZSwgZXhwb3J0cywgcmVxdWlyZSwgZGVmaW5lLCBicm93c2VyaWZ5X3NoaW1fX2RlZmluZV9fbW9kdWxlX19leHBvcnRfXykge1xuLyohIGpRdWVyeSB2Mi4xLjEgfCAoYykgMjAwNSwgMjAxNCBqUXVlcnkgRm91bmRhdGlvbiwgSW5jLiB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xuIWZ1bmN0aW9uKGEsYil7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWEuZG9jdW1lbnQ/YihhLCEwKTpmdW5jdGlvbihhKXtpZighYS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiBiKGEpfTpiKGEpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKGEsYil7dmFyIGM9W10sZD1jLnNsaWNlLGU9Yy5jb25jYXQsZj1jLnB1c2gsZz1jLmluZGV4T2YsaD17fSxpPWgudG9TdHJpbmcsaj1oLmhhc093blByb3BlcnR5LGs9e30sbD1hLmRvY3VtZW50LG09XCIyLjEuMVwiLG49ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IG4uZm4uaW5pdChhLGIpfSxvPS9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZyxwPS9eLW1zLS8scT0vLShbXFxkYS16XSkvZ2kscj1mdW5jdGlvbihhLGIpe3JldHVybiBiLnRvVXBwZXJDYXNlKCl9O24uZm49bi5wcm90b3R5cGU9e2pxdWVyeTptLGNvbnN0cnVjdG9yOm4sc2VsZWN0b3I6XCJcIixsZW5ndGg6MCx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIGQuY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hPzA+YT90aGlzW2ErdGhpcy5sZW5ndGhdOnRoaXNbYV06ZC5jYWxsKHRoaXMpfSxwdXNoU3RhY2s6ZnVuY3Rpb24oYSl7dmFyIGI9bi5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksYSk7cmV0dXJuIGIucHJldk9iamVjdD10aGlzLGIuY29udGV4dD10aGlzLmNvbnRleHQsYn0sZWFjaDpmdW5jdGlvbihhLGIpe3JldHVybiBuLmVhY2godGhpcyxhLGIpfSxtYXA6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG4ubWFwKHRoaXMsZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5jYWxsKGIsYyxiKX0pKX0sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZC5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxmaXJzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKDApfSxsYXN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoLTEpfSxlcTpmdW5jdGlvbihhKXt2YXIgYj10aGlzLmxlbmd0aCxjPSthKygwPmE/YjowKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soYz49MCYmYj5jP1t0aGlzW2NdXTpbXSl9LGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnByZXZPYmplY3R8fHRoaXMuY29uc3RydWN0b3IobnVsbCl9LHB1c2g6Zixzb3J0OmMuc29ydCxzcGxpY2U6Yy5zcGxpY2V9LG4uZXh0ZW5kPW4uZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmLGc9YXJndW1lbnRzWzBdfHx7fSxoPTEsaT1hcmd1bWVudHMubGVuZ3RoLGo9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgZyYmKGo9ZyxnPWFyZ3VtZW50c1toXXx8e30saCsrKSxcIm9iamVjdFwiPT10eXBlb2YgZ3x8bi5pc0Z1bmN0aW9uKGcpfHwoZz17fSksaD09PWkmJihnPXRoaXMsaC0tKTtpPmg7aCsrKWlmKG51bGwhPShhPWFyZ3VtZW50c1toXSkpZm9yKGIgaW4gYSljPWdbYl0sZD1hW2JdLGchPT1kJiYoaiYmZCYmKG4uaXNQbGFpbk9iamVjdChkKXx8KGU9bi5pc0FycmF5KGQpKSk/KGU/KGU9ITEsZj1jJiZuLmlzQXJyYXkoYyk/YzpbXSk6Zj1jJiZuLmlzUGxhaW5PYmplY3QoYyk/Yzp7fSxnW2JdPW4uZXh0ZW5kKGosZixkKSk6dm9pZCAwIT09ZCYmKGdbYl09ZCkpO3JldHVybiBnfSxuLmV4dGVuZCh7ZXhwYW5kbzpcImpRdWVyeVwiKyhtK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGlzUmVhZHk6ITAsZXJyb3I6ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKGEpfSxub29wOmZ1bmN0aW9uKCl7fSxpc0Z1bmN0aW9uOmZ1bmN0aW9uKGEpe3JldHVyblwiZnVuY3Rpb25cIj09PW4udHlwZShhKX0saXNBcnJheTpBcnJheS5pc0FycmF5LGlzV2luZG93OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hJiZhPT09YS53aW5kb3d9LGlzTnVtZXJpYzpmdW5jdGlvbihhKXtyZXR1cm4hbi5pc0FycmF5KGEpJiZhLXBhcnNlRmxvYXQoYSk+PTB9LGlzUGxhaW5PYmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuXCJvYmplY3RcIiE9PW4udHlwZShhKXx8YS5ub2RlVHlwZXx8bi5pc1dpbmRvdyhhKT8hMTphLmNvbnN0cnVjdG9yJiYhai5jYWxsKGEuY29uc3RydWN0b3IucHJvdG90eXBlLFwiaXNQcm90b3R5cGVPZlwiKT8hMTohMH0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihhKXt2YXIgYjtmb3IoYiBpbiBhKXJldHVybiExO3JldHVybiEwfSx0eXBlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP2ErXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYT9oW2kuY2FsbChhKV18fFwib2JqZWN0XCI6dHlwZW9mIGF9LGdsb2JhbEV2YWw6ZnVuY3Rpb24oYSl7dmFyIGIsYz1ldmFsO2E9bi50cmltKGEpLGEmJigxPT09YS5pbmRleE9mKFwidXNlIHN0cmljdFwiKT8oYj1sLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksYi50ZXh0PWEsbC5oZWFkLmFwcGVuZENoaWxkKGIpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYikpOmMoYSkpfSxjYW1lbENhc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZShwLFwibXMtXCIpLnJlcGxhY2UocSxyKX0sbm9kZU5hbWU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yi50b0xvd2VyQ2FzZSgpfSxlYWNoOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlPTAsZj1hLmxlbmd0aCxnPXMoYSk7aWYoYyl7aWYoZyl7Zm9yKDtmPmU7ZSsrKWlmKGQ9Yi5hcHBseShhW2VdLGMpLGQ9PT0hMSlicmVha31lbHNlIGZvcihlIGluIGEpaWYoZD1iLmFwcGx5KGFbZV0sYyksZD09PSExKWJyZWFrfWVsc2UgaWYoZyl7Zm9yKDtmPmU7ZSsrKWlmKGQ9Yi5jYWxsKGFbZV0sZSxhW2VdKSxkPT09ITEpYnJlYWt9ZWxzZSBmb3IoZSBpbiBhKWlmKGQ9Yi5jYWxsKGFbZV0sZSxhW2VdKSxkPT09ITEpYnJlYWs7cmV0dXJuIGF9LHRyaW06ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjooYStcIlwiKS5yZXBsYWNlKG8sXCJcIil9LG1ha2VBcnJheTpmdW5jdGlvbihhLGIpe3ZhciBjPWJ8fFtdO3JldHVybiBudWxsIT1hJiYocyhPYmplY3QoYSkpP24ubWVyZ2UoYyxcInN0cmluZ1wiPT10eXBlb2YgYT9bYV06YSk6Zi5jYWxsKGMsYSkpLGN9LGluQXJyYXk6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBudWxsPT1iPy0xOmcuY2FsbChiLGEsYyl9LG1lcmdlOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPStiLmxlbmd0aCxkPTAsZT1hLmxlbmd0aDtjPmQ7ZCsrKWFbZSsrXT1iW2RdO3JldHVybiBhLmxlbmd0aD1lLGF9LGdyZXA6ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZCxlPVtdLGY9MCxnPWEubGVuZ3RoLGg9IWM7Zz5mO2YrKylkPSFiKGFbZl0sZiksZCE9PWgmJmUucHVzaChhW2ZdKTtyZXR1cm4gZX0sbWFwOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxmPTAsZz1hLmxlbmd0aCxoPXMoYSksaT1bXTtpZihoKWZvcig7Zz5mO2YrKylkPWIoYVtmXSxmLGMpLG51bGwhPWQmJmkucHVzaChkKTtlbHNlIGZvcihmIGluIGEpZD1iKGFbZl0sZixjKSxudWxsIT1kJiZpLnB1c2goZCk7cmV0dXJuIGUuYXBwbHkoW10saSl9LGd1aWQ6MSxwcm94eTpmdW5jdGlvbihhLGIpe3ZhciBjLGUsZjtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYiYmKGM9YVtiXSxiPWEsYT1jKSxuLmlzRnVuY3Rpb24oYSk/KGU9ZC5jYWxsKGFyZ3VtZW50cywyKSxmPWZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYnx8dGhpcyxlLmNvbmNhdChkLmNhbGwoYXJndW1lbnRzKSkpfSxmLmd1aWQ9YS5ndWlkPWEuZ3VpZHx8bi5ndWlkKyssZik6dm9pZCAwfSxub3c6RGF0ZS5ub3csc3VwcG9ydDprfSksbi5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvclwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe2hbXCJbb2JqZWN0IFwiK2IrXCJdXCJdPWIudG9Mb3dlckNhc2UoKX0pO2Z1bmN0aW9uIHMoYSl7dmFyIGI9YS5sZW5ndGgsYz1uLnR5cGUoYSk7cmV0dXJuXCJmdW5jdGlvblwiPT09Y3x8bi5pc1dpbmRvdyhhKT8hMToxPT09YS5ub2RlVHlwZSYmYj8hMDpcImFycmF5XCI9PT1jfHwwPT09Ynx8XCJudW1iZXJcIj09dHlwZW9mIGImJmI+MCYmYi0xIGluIGF9dmFyIHQ9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaSxqLGssbCxtLG4sbyxwLHEscixzLHQsdT1cInNpenpsZVwiKy1uZXcgRGF0ZSx2PWEuZG9jdW1lbnQsdz0wLHg9MCx5PWdiKCksej1nYigpLEE9Z2IoKSxCPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9PT1iJiYobD0hMCksMH0sQz1cInVuZGVmaW5lZFwiLEQ9MTw8MzEsRT17fS5oYXNPd25Qcm9wZXJ0eSxGPVtdLEc9Ri5wb3AsSD1GLnB1c2gsST1GLnB1c2gsSj1GLnNsaWNlLEs9Ri5pbmRleE9mfHxmdW5jdGlvbihhKXtmb3IodmFyIGI9MCxjPXRoaXMubGVuZ3RoO2M+YjtiKyspaWYodGhpc1tiXT09PWEpcmV0dXJuIGI7cmV0dXJuLTF9LEw9XCJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZFwiLE09XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLE49XCIoPzpcXFxcXFxcXC58W1xcXFx3LV18W15cXFxceDAwLVxcXFx4YTBdKStcIixPPU4ucmVwbGFjZShcIndcIixcIncjXCIpLFA9XCJcXFxcW1wiK00rXCIqKFwiK04rXCIpKD86XCIrTStcIiooWypeJHwhfl0/PSlcIitNK1wiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIrTytcIikpfClcIitNK1wiKlxcXFxdXCIsUT1cIjooXCIrTitcIikoPzpcXFxcKCgoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXwoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrUCtcIikqKXwuKilcXFxcKXwpXCIsUj1uZXcgUmVnRXhwKFwiXlwiK00rXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiK00rXCIrJFwiLFwiZ1wiKSxTPW5ldyBSZWdFeHAoXCJeXCIrTStcIiosXCIrTStcIipcIiksVD1uZXcgUmVnRXhwKFwiXlwiK00rXCIqKFs+K35dfFwiK00rXCIpXCIrTStcIipcIiksVT1uZXcgUmVnRXhwKFwiPVwiK00rXCIqKFteXFxcXF0nXFxcIl0qPylcIitNK1wiKlxcXFxdXCIsXCJnXCIpLFY9bmV3IFJlZ0V4cChRKSxXPW5ldyBSZWdFeHAoXCJeXCIrTytcIiRcIiksWD17SUQ6bmV3IFJlZ0V4cChcIl4jKFwiK04rXCIpXCIpLENMQVNTOm5ldyBSZWdFeHAoXCJeXFxcXC4oXCIrTitcIilcIiksVEFHOm5ldyBSZWdFeHAoXCJeKFwiK04ucmVwbGFjZShcIndcIixcIncqXCIpK1wiKVwiKSxBVFRSOm5ldyBSZWdFeHAoXCJeXCIrUCksUFNFVURPOm5ldyBSZWdFeHAoXCJeXCIrUSksQ0hJTEQ6bmV3IFJlZ0V4cChcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIrTStcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiK00rXCIqKD86KFsrLV18KVwiK00rXCIqKFxcXFxkKyl8KSlcIitNK1wiKlxcXFwpfClcIixcImlcIiksYm9vbDpuZXcgUmVnRXhwKFwiXig/OlwiK0wrXCIpJFwiLFwiaVwiKSxuZWVkc0NvbnRleHQ6bmV3IFJlZ0V4cChcIl5cIitNK1wiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIitNK1wiKigoPzotXFxcXGQpP1xcXFxkKilcIitNK1wiKlxcXFwpfCkoPz1bXi1dfCQpXCIsXCJpXCIpfSxZPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksWj0vXmhcXGQkL2ksJD0vXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLF89L14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sYWI9L1srfl0vLGJiPS8nfFxcXFwvZyxjYj1uZXcgUmVnRXhwKFwiXFxcXFxcXFwoW1xcXFxkYS1mXXsxLDZ9XCIrTStcIj98KFwiK00rXCIpfC4pXCIsXCJpZ1wiKSxkYj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9XCIweFwiK2ItNjU1MzY7cmV0dXJuIGQhPT1kfHxjP2I6MD5kP1N0cmluZy5mcm9tQ2hhckNvZGUoZCs2NTUzNik6U3RyaW5nLmZyb21DaGFyQ29kZShkPj4xMHw1NTI5NiwxMDIzJmR8NTYzMjApfTt0cnl7SS5hcHBseShGPUouY2FsbCh2LmNoaWxkTm9kZXMpLHYuY2hpbGROb2RlcyksRlt2LmNoaWxkTm9kZXMubGVuZ3RoXS5ub2RlVHlwZX1jYXRjaChlYil7ST17YXBwbHk6Ri5sZW5ndGg/ZnVuY3Rpb24oYSxiKXtILmFwcGx5KGEsSi5jYWxsKGIpKX06ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLmxlbmd0aCxkPTA7d2hpbGUoYVtjKytdPWJbZCsrXSk7YS5sZW5ndGg9Yy0xfX19ZnVuY3Rpb24gZmIoYSxiLGQsZSl7dmFyIGYsaCxqLGssbCxvLHIscyx3LHg7aWYoKGI/Yi5vd25lckRvY3VtZW50fHxiOnYpIT09biYmbShiKSxiPWJ8fG4sZD1kfHxbXSwhYXx8XCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIGQ7aWYoMSE9PShrPWIubm9kZVR5cGUpJiY5IT09aylyZXR1cm5bXTtpZihwJiYhZSl7aWYoZj1fLmV4ZWMoYSkpaWYoaj1mWzFdKXtpZig5PT09ayl7aWYoaD1iLmdldEVsZW1lbnRCeUlkKGopLCFofHwhaC5wYXJlbnROb2RlKXJldHVybiBkO2lmKGguaWQ9PT1qKXJldHVybiBkLnB1c2goaCksZH1lbHNlIGlmKGIub3duZXJEb2N1bWVudCYmKGg9Yi5vd25lckRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGopKSYmdChiLGgpJiZoLmlkPT09ailyZXR1cm4gZC5wdXNoKGgpLGR9ZWxzZXtpZihmWzJdKXJldHVybiBJLmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKSksZDtpZigoaj1mWzNdKSYmYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpcmV0dXJuIEkuYXBwbHkoZCxiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoaikpLGR9aWYoYy5xc2EmJighcXx8IXEudGVzdChhKSkpe2lmKHM9cj11LHc9Yix4PTk9PT1rJiZhLDE9PT1rJiZcIm9iamVjdFwiIT09Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXtvPWcoYSksKHI9Yi5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk/cz1yLnJlcGxhY2UoYmIsXCJcXFxcJCZcIik6Yi5zZXRBdHRyaWJ1dGUoXCJpZFwiLHMpLHM9XCJbaWQ9J1wiK3MrXCInXSBcIixsPW8ubGVuZ3RoO3doaWxlKGwtLSlvW2xdPXMrcWIob1tsXSk7dz1hYi50ZXN0KGEpJiZvYihiLnBhcmVudE5vZGUpfHxiLHg9by5qb2luKFwiLFwiKX1pZih4KXRyeXtyZXR1cm4gSS5hcHBseShkLHcucXVlcnlTZWxlY3RvckFsbCh4KSksZH1jYXRjaCh5KXt9ZmluYWxseXtyfHxiLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpfX19cmV0dXJuIGkoYS5yZXBsYWNlKFIsXCIkMVwiKSxiLGQsZSl9ZnVuY3Rpb24gZ2IoKXt2YXIgYT1bXTtmdW5jdGlvbiBiKGMsZSl7cmV0dXJuIGEucHVzaChjK1wiIFwiKT5kLmNhY2hlTGVuZ3RoJiZkZWxldGUgYlthLnNoaWZ0KCldLGJbYytcIiBcIl09ZX1yZXR1cm4gYn1mdW5jdGlvbiBoYihhKXtyZXR1cm4gYVt1XT0hMCxhfWZ1bmN0aW9uIGliKGEpe3ZhciBiPW4uY3JlYXRlRWxlbWVudChcImRpdlwiKTt0cnl7cmV0dXJuISFhKGIpfWNhdGNoKGMpe3JldHVybiExfWZpbmFsbHl7Yi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYiksYj1udWxsfX1mdW5jdGlvbiBqYihhLGIpe3ZhciBjPWEuc3BsaXQoXCJ8XCIpLGU9YS5sZW5ndGg7d2hpbGUoZS0tKWQuYXR0ckhhbmRsZVtjW2VdXT1ifWZ1bmN0aW9uIGtiKGEsYil7dmFyIGM9YiYmYSxkPWMmJjE9PT1hLm5vZGVUeXBlJiYxPT09Yi5ub2RlVHlwZSYmKH5iLnNvdXJjZUluZGV4fHxEKS0ofmEuc291cmNlSW5kZXh8fEQpO2lmKGQpcmV0dXJuIGQ7aWYoYyl3aGlsZShjPWMubmV4dFNpYmxpbmcpaWYoYz09PWIpcmV0dXJuLTE7cmV0dXJuIGE/MTotMX1mdW5jdGlvbiBsYihhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWMmJmIudHlwZT09PWF9fWZ1bmN0aW9uIG1iKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuKFwiaW5wdXRcIj09PWN8fFwiYnV0dG9uXCI9PT1jKSYmYi50eXBlPT09YX19ZnVuY3Rpb24gbmIoYSl7cmV0dXJuIGhiKGZ1bmN0aW9uKGIpe3JldHVybiBiPStiLGhiKGZ1bmN0aW9uKGMsZCl7dmFyIGUsZj1hKFtdLGMubGVuZ3RoLGIpLGc9Zi5sZW5ndGg7d2hpbGUoZy0tKWNbZT1mW2ddXSYmKGNbZV09IShkW2VdPWNbZV0pKX0pfSl9ZnVuY3Rpb24gb2IoYSl7cmV0dXJuIGEmJnR5cGVvZiBhLmdldEVsZW1lbnRzQnlUYWdOYW1lIT09QyYmYX1jPWZiLnN1cHBvcnQ9e30sZj1mYi5pc1hNTD1mdW5jdGlvbihhKXt2YXIgYj1hJiYoYS5vd25lckRvY3VtZW50fHxhKS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuIGI/XCJIVE1MXCIhPT1iLm5vZGVOYW1lOiExfSxtPWZiLnNldERvY3VtZW50PWZ1bmN0aW9uKGEpe3ZhciBiLGU9YT9hLm93bmVyRG9jdW1lbnR8fGE6dixnPWUuZGVmYXVsdFZpZXc7cmV0dXJuIGUhPT1uJiY5PT09ZS5ub2RlVHlwZSYmZS5kb2N1bWVudEVsZW1lbnQ/KG49ZSxvPWUuZG9jdW1lbnRFbGVtZW50LHA9IWYoZSksZyYmZyE9PWcudG9wJiYoZy5hZGRFdmVudExpc3RlbmVyP2cuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLGZ1bmN0aW9uKCl7bSgpfSwhMSk6Zy5hdHRhY2hFdmVudCYmZy5hdHRhY2hFdmVudChcIm9udW5sb2FkXCIsZnVuY3Rpb24oKXttKCl9KSksYy5hdHRyaWJ1dGVzPWliKGZ1bmN0aW9uKGEpe3JldHVybiBhLmNsYXNzTmFtZT1cImlcIiwhYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIil9KSxjLmdldEVsZW1lbnRzQnlUYWdOYW1lPWliKGZ1bmN0aW9uKGEpe3JldHVybiBhLmFwcGVuZENoaWxkKGUuY3JlYXRlQ29tbWVudChcIlwiKSksIWEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pLGMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT0kLnRlc3QoZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSYmaWIoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGRpdiBjbGFzcz0nYSc+PC9kaXY+PGRpdiBjbGFzcz0nYSBpJz48L2Rpdj5cIixhLmZpcnN0Q2hpbGQuY2xhc3NOYW1lPVwiaVwiLDI9PT1hLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpXCIpLmxlbmd0aH0pLGMuZ2V0QnlJZD1pYihmdW5jdGlvbihhKXtyZXR1cm4gby5hcHBlbmRDaGlsZChhKS5pZD11LCFlLmdldEVsZW1lbnRzQnlOYW1lfHwhZS5nZXRFbGVtZW50c0J5TmFtZSh1KS5sZW5ndGh9KSxjLmdldEJ5SWQ/KGQuZmluZC5JRD1mdW5jdGlvbihhLGIpe2lmKHR5cGVvZiBiLmdldEVsZW1lbnRCeUlkIT09QyYmcCl7dmFyIGM9Yi5nZXRFbGVtZW50QnlJZChhKTtyZXR1cm4gYyYmYy5wYXJlbnROb2RlP1tjXTpbXX19LGQuZmlsdGVyLklEPWZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShjYixkYik7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybiBhLmdldEF0dHJpYnV0ZShcImlkXCIpPT09Yn19KTooZGVsZXRlIGQuZmluZC5JRCxkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoY2IsZGIpO3JldHVybiBmdW5jdGlvbihhKXt2YXIgYz10eXBlb2YgYS5nZXRBdHRyaWJ1dGVOb2RlIT09QyYmYS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7cmV0dXJuIGMmJmMudmFsdWU9PT1ifX0pLGQuZmluZC5UQUc9Yy5nZXRFbGVtZW50c0J5VGFnTmFtZT9mdW5jdGlvbihhLGIpe3JldHVybiB0eXBlb2YgYi5nZXRFbGVtZW50c0J5VGFnTmFtZSE9PUM/Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKTp2b2lkIDB9OmZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPTAsZj1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpO2lmKFwiKlwiPT09YSl7d2hpbGUoYz1mW2UrK10pMT09PWMubm9kZVR5cGUmJmQucHVzaChjKTtyZXR1cm4gZH1yZXR1cm4gZn0sZC5maW5kLkNMQVNTPWMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZnVuY3Rpb24oYSxiKXtyZXR1cm4gdHlwZW9mIGIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSE9PUMmJnA/Yi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGEpOnZvaWQgMH0scj1bXSxxPVtdLChjLnFzYT0kLnRlc3QoZS5xdWVyeVNlbGVjdG9yQWxsKSkmJihpYihmdW5jdGlvbihhKXthLmlubmVySFRNTD1cIjxzZWxlY3QgbXNhbGxvd2NsaXA9Jyc+PG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIixhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbXNhbGxvd2NsaXBePScnXVwiKS5sZW5ndGgmJnEucHVzaChcIlsqXiRdPVwiK00rXCIqKD86Jyd8XFxcIlxcXCIpXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RofHxxLnB1c2goXCJcXFxcW1wiK00rXCIqKD86dmFsdWV8XCIrTCtcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RofHxxLnB1c2goXCI6Y2hlY2tlZFwiKX0pLGliKGZ1bmN0aW9uKGEpe3ZhciBiPWUuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Iuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiaGlkZGVuXCIpLGEuYXBwZW5kQ2hpbGQoYikuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiRFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGgmJnEucHVzaChcIm5hbWVcIitNK1wiKlsqXiR8IX5dPz1cIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RofHxxLnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIikscS5wdXNoKFwiLC4qOlwiKX0pKSwoYy5tYXRjaGVzU2VsZWN0b3I9JC50ZXN0KHM9by5tYXRjaGVzfHxvLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8by5tb3pNYXRjaGVzU2VsZWN0b3J8fG8ub01hdGNoZXNTZWxlY3Rvcnx8by5tc01hdGNoZXNTZWxlY3RvcikpJiZpYihmdW5jdGlvbihhKXtjLmRpc2Nvbm5lY3RlZE1hdGNoPXMuY2FsbChhLFwiZGl2XCIpLHMuY2FsbChhLFwiW3MhPScnXTp4XCIpLHIucHVzaChcIiE9XCIsUSl9KSxxPXEubGVuZ3RoJiZuZXcgUmVnRXhwKHEuam9pbihcInxcIikpLHI9ci5sZW5ndGgmJm5ldyBSZWdFeHAoci5qb2luKFwifFwiKSksYj0kLnRlc3Qoby5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiksdD1ifHwkLnRlc3Qoby5jb250YWlucyk/ZnVuY3Rpb24oYSxiKXt2YXIgYz05PT09YS5ub2RlVHlwZT9hLmRvY3VtZW50RWxlbWVudDphLGQ9YiYmYi5wYXJlbnROb2RlO3JldHVybiBhPT09ZHx8ISghZHx8MSE9PWQubm9kZVR5cGV8fCEoYy5jb250YWlucz9jLmNvbnRhaW5zKGQpOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJjE2JmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZCkpKX06ZnVuY3Rpb24oYSxiKXtpZihiKXdoaWxlKGI9Yi5wYXJlbnROb2RlKWlmKGI9PT1hKXJldHVybiEwO3JldHVybiExfSxCPWI/ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBkPSFhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uLSFiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO3JldHVybiBkP2Q6KGQ9KGEub3duZXJEb2N1bWVudHx8YSk9PT0oYi5vd25lckRvY3VtZW50fHxiKT9hLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpOjEsMSZkfHwhYy5zb3J0RGV0YWNoZWQmJmIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYSk9PT1kP2E9PT1lfHxhLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYSk/LTE6Yj09PWV8fGIub3duZXJEb2N1bWVudD09PXYmJnQodixiKT8xOms/Sy5jYWxsKGssYSktSy5jYWxsKGssYik6MDo0JmQ/LTE6MSl9OmZ1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgYyxkPTAsZj1hLnBhcmVudE5vZGUsZz1iLnBhcmVudE5vZGUsaD1bYV0saT1bYl07aWYoIWZ8fCFnKXJldHVybiBhPT09ZT8tMTpiPT09ZT8xOmY/LTE6Zz8xOms/Sy5jYWxsKGssYSktSy5jYWxsKGssYik6MDtpZihmPT09ZylyZXR1cm4ga2IoYSxiKTtjPWE7d2hpbGUoYz1jLnBhcmVudE5vZGUpaC51bnNoaWZ0KGMpO2M9Yjt3aGlsZShjPWMucGFyZW50Tm9kZSlpLnVuc2hpZnQoYyk7d2hpbGUoaFtkXT09PWlbZF0pZCsrO3JldHVybiBkP2tiKGhbZF0saVtkXSk6aFtkXT09PXY/LTE6aVtkXT09PXY/MTowfSxlKTpufSxmYi5tYXRjaGVzPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGZiKGEsbnVsbCxudWxsLGIpfSxmYi5tYXRjaGVzU2VsZWN0b3I9ZnVuY3Rpb24oYSxiKXtpZigoYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSksYj1iLnJlcGxhY2UoVSxcIj0nJDEnXVwiKSwhKCFjLm1hdGNoZXNTZWxlY3Rvcnx8IXB8fHImJnIudGVzdChiKXx8cSYmcS50ZXN0KGIpKSl0cnl7dmFyIGQ9cy5jYWxsKGEsYik7aWYoZHx8Yy5kaXNjb25uZWN0ZWRNYXRjaHx8YS5kb2N1bWVudCYmMTEhPT1hLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiBkfWNhdGNoKGUpe31yZXR1cm4gZmIoYixuLG51bGwsW2FdKS5sZW5ndGg+MH0sZmIuY29udGFpbnM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4oYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSksdChhLGIpfSxmYi5hdHRyPWZ1bmN0aW9uKGEsYil7KGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpO3ZhciBlPWQuYXR0ckhhbmRsZVtiLnRvTG93ZXJDYXNlKCldLGY9ZSYmRS5jYWxsKGQuYXR0ckhhbmRsZSxiLnRvTG93ZXJDYXNlKCkpP2UoYSxiLCFwKTp2b2lkIDA7cmV0dXJuIHZvaWQgMCE9PWY/ZjpjLmF0dHJpYnV0ZXN8fCFwP2EuZ2V0QXR0cmlidXRlKGIpOihmPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmYuc3BlY2lmaWVkP2YudmFsdWU6bnVsbH0sZmIuZXJyb3I9ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIrYSl9LGZiLnVuaXF1ZVNvcnQ9ZnVuY3Rpb24oYSl7dmFyIGIsZD1bXSxlPTAsZj0wO2lmKGw9IWMuZGV0ZWN0RHVwbGljYXRlcyxrPSFjLnNvcnRTdGFibGUmJmEuc2xpY2UoMCksYS5zb3J0KEIpLGwpe3doaWxlKGI9YVtmKytdKWI9PT1hW2ZdJiYoZT1kLnB1c2goZikpO3doaWxlKGUtLSlhLnNwbGljZShkW2VdLDEpfXJldHVybiBrPW51bGwsYX0sZT1mYi5nZXRUZXh0PWZ1bmN0aW9uKGEpe3ZhciBiLGM9XCJcIixkPTAsZj1hLm5vZGVUeXBlO2lmKGYpe2lmKDE9PT1mfHw5PT09Znx8MTE9PT1mKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYS50ZXh0Q29udGVudClyZXR1cm4gYS50ZXh0Q29udGVudDtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpYys9ZShhKX1lbHNlIGlmKDM9PT1mfHw0PT09ZilyZXR1cm4gYS5ub2RlVmFsdWV9ZWxzZSB3aGlsZShiPWFbZCsrXSljKz1lKGIpO3JldHVybiBjfSxkPWZiLnNlbGVjdG9ycz17Y2FjaGVMZW5ndGg6NTAsY3JlYXRlUHNldWRvOmhiLG1hdGNoOlgsYXR0ckhhbmRsZTp7fSxmaW5kOnt9LHJlbGF0aXZlOntcIj5cIjp7ZGlyOlwicGFyZW50Tm9kZVwiLGZpcnN0OiEwfSxcIiBcIjp7ZGlyOlwicGFyZW50Tm9kZVwifSxcIitcIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCIsZmlyc3Q6ITB9LFwiflwiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIn19LHByZUZpbHRlcjp7QVRUUjpmdW5jdGlvbihhKXtyZXR1cm4gYVsxXT1hWzFdLnJlcGxhY2UoY2IsZGIpLGFbM109KGFbM118fGFbNF18fGFbNV18fFwiXCIpLnJlcGxhY2UoY2IsZGIpLFwifj1cIj09PWFbMl0mJihhWzNdPVwiIFwiK2FbM10rXCIgXCIpLGEuc2xpY2UoMCw0KX0sQ0hJTEQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV09YVsxXS50b0xvd2VyQ2FzZSgpLFwibnRoXCI9PT1hWzFdLnNsaWNlKDAsMyk/KGFbM118fGZiLmVycm9yKGFbMF0pLGFbNF09KyhhWzRdP2FbNV0rKGFbNl18fDEpOjIqKFwiZXZlblwiPT09YVszXXx8XCJvZGRcIj09PWFbM10pKSxhWzVdPSsoYVs3XSthWzhdfHxcIm9kZFwiPT09YVszXSkpOmFbM10mJmZiLmVycm9yKGFbMF0pLGF9LFBTRVVETzpmdW5jdGlvbihhKXt2YXIgYixjPSFhWzZdJiZhWzJdO3JldHVybiBYLkNISUxELnRlc3QoYVswXSk/bnVsbDooYVszXT9hWzJdPWFbNF18fGFbNV18fFwiXCI6YyYmVi50ZXN0KGMpJiYoYj1nKGMsITApKSYmKGI9Yy5pbmRleE9mKFwiKVwiLGMubGVuZ3RoLWIpLWMubGVuZ3RoKSYmKGFbMF09YVswXS5zbGljZSgwLGIpLGFbMl09Yy5zbGljZSgwLGIpKSxhLnNsaWNlKDAsMykpfX0sZmlsdGVyOntUQUc6ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKGNiLGRiKS50b0xvd2VyQ2FzZSgpO3JldHVyblwiKlwiPT09YT9mdW5jdGlvbigpe3JldHVybiEwfTpmdW5jdGlvbihhKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yn19LENMQVNTOmZ1bmN0aW9uKGEpe3ZhciBiPXlbYStcIiBcIl07cmV0dXJuIGJ8fChiPW5ldyBSZWdFeHAoXCIoXnxcIitNK1wiKVwiK2ErXCIoXCIrTStcInwkKVwiKSkmJnkoYSxmdW5jdGlvbihhKXtyZXR1cm4gYi50ZXN0KFwic3RyaW5nXCI9PXR5cGVvZiBhLmNsYXNzTmFtZSYmYS5jbGFzc05hbWV8fHR5cGVvZiBhLmdldEF0dHJpYnV0ZSE9PUMmJmEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpfSl9LEFUVFI6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBmdW5jdGlvbihkKXt2YXIgZT1mYi5hdHRyKGQsYSk7cmV0dXJuIG51bGw9PWU/XCIhPVwiPT09YjpiPyhlKz1cIlwiLFwiPVwiPT09Yj9lPT09YzpcIiE9XCI9PT1iP2UhPT1jOlwiXj1cIj09PWI/YyYmMD09PWUuaW5kZXhPZihjKTpcIio9XCI9PT1iP2MmJmUuaW5kZXhPZihjKT4tMTpcIiQ9XCI9PT1iP2MmJmUuc2xpY2UoLWMubGVuZ3RoKT09PWM6XCJ+PVwiPT09Yj8oXCIgXCIrZStcIiBcIikuaW5kZXhPZihjKT4tMTpcInw9XCI9PT1iP2U9PT1jfHxlLnNsaWNlKDAsYy5sZW5ndGgrMSk9PT1jK1wiLVwiOiExKTohMH19LENISUxEOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9XCJudGhcIiE9PWEuc2xpY2UoMCwzKSxnPVwibGFzdFwiIT09YS5zbGljZSgtNCksaD1cIm9mLXR5cGVcIj09PWI7cmV0dXJuIDE9PT1kJiYwPT09ZT9mdW5jdGlvbihhKXtyZXR1cm4hIWEucGFyZW50Tm9kZX06ZnVuY3Rpb24oYixjLGkpe3ZhciBqLGssbCxtLG4sbyxwPWYhPT1nP1wibmV4dFNpYmxpbmdcIjpcInByZXZpb3VzU2libGluZ1wiLHE9Yi5wYXJlbnROb2RlLHI9aCYmYi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLHM9IWkmJiFoO2lmKHEpe2lmKGYpe3doaWxlKHApe2w9Yjt3aGlsZShsPWxbcF0paWYoaD9sLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1yOjE9PT1sLm5vZGVUeXBlKXJldHVybiExO289cD1cIm9ubHlcIj09PWEmJiFvJiZcIm5leHRTaWJsaW5nXCJ9cmV0dXJuITB9aWYobz1bZz9xLmZpcnN0Q2hpbGQ6cS5sYXN0Q2hpbGRdLGcmJnMpe2s9cVt1XXx8KHFbdV09e30pLGo9a1thXXx8W10sbj1qWzBdPT09dyYmalsxXSxtPWpbMF09PT13JiZqWzJdLGw9biYmcS5jaGlsZE5vZGVzW25dO3doaWxlKGw9KytuJiZsJiZsW3BdfHwobT1uPTApfHxvLnBvcCgpKWlmKDE9PT1sLm5vZGVUeXBlJiYrK20mJmw9PT1iKXtrW2FdPVt3LG4sbV07YnJlYWt9fWVsc2UgaWYocyYmKGo9KGJbdV18fChiW3VdPXt9KSlbYV0pJiZqWzBdPT09dyltPWpbMV07ZWxzZSB3aGlsZShsPSsrbiYmbCYmbFtwXXx8KG09bj0wKXx8by5wb3AoKSlpZigoaD9sLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1yOjE9PT1sLm5vZGVUeXBlKSYmKyttJiYocyYmKChsW3VdfHwobFt1XT17fSkpW2FdPVt3LG1dKSxsPT09YikpYnJlYWs7cmV0dXJuIG0tPWUsbT09PWR8fG0lZD09PTAmJm0vZD49MH19fSxQU0VVRE86ZnVuY3Rpb24oYSxiKXt2YXIgYyxlPWQucHNldWRvc1thXXx8ZC5zZXRGaWx0ZXJzW2EudG9Mb3dlckNhc2UoKV18fGZiLmVycm9yKFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIithKTtyZXR1cm4gZVt1XT9lKGIpOmUubGVuZ3RoPjE/KGM9W2EsYSxcIlwiLGJdLGQuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eShhLnRvTG93ZXJDYXNlKCkpP2hiKGZ1bmN0aW9uKGEsYyl7dmFyIGQsZj1lKGEsYiksZz1mLmxlbmd0aDt3aGlsZShnLS0pZD1LLmNhbGwoYSxmW2ddKSxhW2RdPSEoY1tkXT1mW2ddKX0pOmZ1bmN0aW9uKGEpe3JldHVybiBlKGEsMCxjKX0pOmV9fSxwc2V1ZG9zOntub3Q6aGIoZnVuY3Rpb24oYSl7dmFyIGI9W10sYz1bXSxkPWgoYS5yZXBsYWNlKFIsXCIkMVwiKSk7cmV0dXJuIGRbdV0/aGIoZnVuY3Rpb24oYSxiLGMsZSl7dmFyIGYsZz1kKGEsbnVsbCxlLFtdKSxoPWEubGVuZ3RoO3doaWxlKGgtLSkoZj1nW2hdKSYmKGFbaF09IShiW2hdPWYpKX0pOmZ1bmN0aW9uKGEsZSxmKXtyZXR1cm4gYlswXT1hLGQoYixudWxsLGYsYyksIWMucG9wKCl9fSksaGFzOmhiKGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gZmIoYSxiKS5sZW5ndGg+MH19KSxjb250YWluczpoYihmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuKGIudGV4dENvbnRlbnR8fGIuaW5uZXJUZXh0fHxlKGIpKS5pbmRleE9mKGEpPi0xfX0pLGxhbmc6aGIoZnVuY3Rpb24oYSl7cmV0dXJuIFcudGVzdChhfHxcIlwiKXx8ZmIuZXJyb3IoXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIithKSxhPWEucmVwbGFjZShjYixkYikudG9Mb3dlckNhc2UoKSxmdW5jdGlvbihiKXt2YXIgYztkbyBpZihjPXA/Yi5sYW5nOmIuZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIil8fGIuZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSlyZXR1cm4gYz1jLnRvTG93ZXJDYXNlKCksYz09PWF8fDA9PT1jLmluZGV4T2YoYStcIi1cIik7d2hpbGUoKGI9Yi5wYXJlbnROb2RlKSYmMT09PWIubm9kZVR5cGUpO3JldHVybiExfX0pLHRhcmdldDpmdW5jdGlvbihiKXt2YXIgYz1hLmxvY2F0aW9uJiZhLmxvY2F0aW9uLmhhc2g7cmV0dXJuIGMmJmMuc2xpY2UoMSk9PT1iLmlkfSxyb290OmZ1bmN0aW9uKGEpe3JldHVybiBhPT09b30sZm9jdXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1uLmFjdGl2ZUVsZW1lbnQmJighbi5oYXNGb2N1c3x8bi5oYXNGb2N1cygpKSYmISEoYS50eXBlfHxhLmhyZWZ8fH5hLnRhYkluZGV4KX0sZW5hYmxlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5kaXNhYmxlZD09PSExfSxkaXNhYmxlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5kaXNhYmxlZD09PSEwfSxjaGVja2VkOmZ1bmN0aW9uKGEpe3ZhciBiPWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iJiYhIWEuY2hlY2tlZHx8XCJvcHRpb25cIj09PWImJiEhYS5zZWxlY3RlZH0sc2VsZWN0ZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsYS5zZWxlY3RlZD09PSEwfSxlbXB0eTpmdW5jdGlvbihhKXtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpaWYoYS5ub2RlVHlwZTw2KXJldHVybiExO3JldHVybiEwfSxwYXJlbnQ6ZnVuY3Rpb24oYSl7cmV0dXJuIWQucHNldWRvcy5lbXB0eShhKX0saGVhZGVyOmZ1bmN0aW9uKGEpe3JldHVybiBaLnRlc3QoYS5ub2RlTmFtZSl9LGlucHV0OmZ1bmN0aW9uKGEpe3JldHVybiBZLnRlc3QoYS5ub2RlTmFtZSl9LGJ1dHRvbjpmdW5jdGlvbihhKXt2YXIgYj1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YiYmXCJidXR0b25cIj09PWEudHlwZXx8XCJidXR0b25cIj09PWJ9LHRleHQ6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuXCJpbnB1dFwiPT09YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZcInRleHRcIj09PWEudHlwZSYmKG51bGw9PShiPWEuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSl8fFwidGV4dFwiPT09Yi50b0xvd2VyQ2FzZSgpKX0sZmlyc3Q6bmIoZnVuY3Rpb24oKXtyZXR1cm5bMF19KSxsYXN0Om5iKGZ1bmN0aW9uKGEsYil7cmV0dXJuW2ItMV19KSxlcTpuYihmdW5jdGlvbihhLGIsYyl7cmV0dXJuWzA+Yz9jK2I6Y119KSxldmVuOm5iKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTA7Yj5jO2MrPTIpYS5wdXNoKGMpO3JldHVybiBhfSksb2RkOm5iKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTE7Yj5jO2MrPTIpYS5wdXNoKGMpO3JldHVybiBhfSksbHQ6bmIoZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD0wPmM/YytiOmM7LS1kPj0wOylhLnB1c2goZCk7cmV0dXJuIGF9KSxndDpuYihmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTA+Yz9jK2I6YzsrK2Q8YjspYS5wdXNoKGQpO3JldHVybiBhfSl9fSxkLnBzZXVkb3MubnRoPWQucHNldWRvcy5lcTtmb3IoYiBpbntyYWRpbzohMCxjaGVja2JveDohMCxmaWxlOiEwLHBhc3N3b3JkOiEwLGltYWdlOiEwfSlkLnBzZXVkb3NbYl09bGIoYik7Zm9yKGIgaW57c3VibWl0OiEwLHJlc2V0OiEwfSlkLnBzZXVkb3NbYl09bWIoYik7ZnVuY3Rpb24gcGIoKXt9cGIucHJvdG90eXBlPWQuZmlsdGVycz1kLnBzZXVkb3MsZC5zZXRGaWx0ZXJzPW5ldyBwYixnPWZiLnRva2VuaXplPWZ1bmN0aW9uKGEsYil7dmFyIGMsZSxmLGcsaCxpLGosaz16W2ErXCIgXCJdO2lmKGspcmV0dXJuIGI/MDprLnNsaWNlKDApO2g9YSxpPVtdLGo9ZC5wcmVGaWx0ZXI7d2hpbGUoaCl7KCFjfHwoZT1TLmV4ZWMoaCkpKSYmKGUmJihoPWguc2xpY2UoZVswXS5sZW5ndGgpfHxoKSxpLnB1c2goZj1bXSkpLGM9ITEsKGU9VC5leGVjKGgpKSYmKGM9ZS5zaGlmdCgpLGYucHVzaCh7dmFsdWU6Yyx0eXBlOmVbMF0ucmVwbGFjZShSLFwiIFwiKX0pLGg9aC5zbGljZShjLmxlbmd0aCkpO2ZvcihnIGluIGQuZmlsdGVyKSEoZT1YW2ddLmV4ZWMoaCkpfHxqW2ddJiYhKGU9altnXShlKSl8fChjPWUuc2hpZnQoKSxmLnB1c2goe3ZhbHVlOmMsdHlwZTpnLG1hdGNoZXM6ZX0pLGg9aC5zbGljZShjLmxlbmd0aCkpO2lmKCFjKWJyZWFrfXJldHVybiBiP2gubGVuZ3RoOmg/ZmIuZXJyb3IoYSk6eihhLGkpLnNsaWNlKDApfTtmdW5jdGlvbiBxYihhKXtmb3IodmFyIGI9MCxjPWEubGVuZ3RoLGQ9XCJcIjtjPmI7YisrKWQrPWFbYl0udmFsdWU7cmV0dXJuIGR9ZnVuY3Rpb24gcmIoYSxiLGMpe3ZhciBkPWIuZGlyLGU9YyYmXCJwYXJlbnROb2RlXCI9PT1kLGY9eCsrO3JldHVybiBiLmZpcnN0P2Z1bmN0aW9uKGIsYyxmKXt3aGlsZShiPWJbZF0paWYoMT09PWIubm9kZVR5cGV8fGUpcmV0dXJuIGEoYixjLGYpfTpmdW5jdGlvbihiLGMsZyl7dmFyIGgsaSxqPVt3LGZdO2lmKGcpe3doaWxlKGI9YltkXSlpZigoMT09PWIubm9kZVR5cGV8fGUpJiZhKGIsYyxnKSlyZXR1cm4hMH1lbHNlIHdoaWxlKGI9YltkXSlpZigxPT09Yi5ub2RlVHlwZXx8ZSl7aWYoaT1iW3VdfHwoYlt1XT17fSksKGg9aVtkXSkmJmhbMF09PT13JiZoWzFdPT09ZilyZXR1cm4galsyXT1oWzJdO2lmKGlbZF09aixqWzJdPWEoYixjLGcpKXJldHVybiEwfX19ZnVuY3Rpb24gc2IoYSl7cmV0dXJuIGEubGVuZ3RoPjE/ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWEubGVuZ3RoO3doaWxlKGUtLSlpZighYVtlXShiLGMsZCkpcmV0dXJuITE7cmV0dXJuITB9OmFbMF19ZnVuY3Rpb24gdGIoYSxiLGMpe2Zvcih2YXIgZD0wLGU9Yi5sZW5ndGg7ZT5kO2QrKylmYihhLGJbZF0sYyk7cmV0dXJuIGN9ZnVuY3Rpb24gdWIoYSxiLGMsZCxlKXtmb3IodmFyIGYsZz1bXSxoPTAsaT1hLmxlbmd0aCxqPW51bGwhPWI7aT5oO2grKykoZj1hW2hdKSYmKCFjfHxjKGYsZCxlKSkmJihnLnB1c2goZiksaiYmYi5wdXNoKGgpKTtyZXR1cm4gZ31mdW5jdGlvbiB2YihhLGIsYyxkLGUsZil7cmV0dXJuIGQmJiFkW3VdJiYoZD12YihkKSksZSYmIWVbdV0mJihlPXZiKGUsZikpLGhiKGZ1bmN0aW9uKGYsZyxoLGkpe3ZhciBqLGssbCxtPVtdLG49W10sbz1nLmxlbmd0aCxwPWZ8fHRiKGJ8fFwiKlwiLGgubm9kZVR5cGU/W2hdOmgsW10pLHE9IWF8fCFmJiZiP3A6dWIocCxtLGEsaCxpKSxyPWM/ZXx8KGY/YTpvfHxkKT9bXTpnOnE7aWYoYyYmYyhxLHIsaCxpKSxkKXtqPXViKHIsbiksZChqLFtdLGgsaSksaz1qLmxlbmd0aDt3aGlsZShrLS0pKGw9altrXSkmJihyW25ba11dPSEocVtuW2tdXT1sKSl9aWYoZil7aWYoZXx8YSl7aWYoZSl7aj1bXSxrPXIubGVuZ3RoO3doaWxlKGstLSkobD1yW2tdKSYmai5wdXNoKHFba109bCk7ZShudWxsLHI9W10saixpKX1rPXIubGVuZ3RoO3doaWxlKGstLSkobD1yW2tdKSYmKGo9ZT9LLmNhbGwoZixsKTptW2tdKT4tMSYmKGZbal09IShnW2pdPWwpKX19ZWxzZSByPXViKHI9PT1nP3Iuc3BsaWNlKG8sci5sZW5ndGgpOnIpLGU/ZShudWxsLGcscixpKTpJLmFwcGx5KGcscil9KX1mdW5jdGlvbiB3YihhKXtmb3IodmFyIGIsYyxlLGY9YS5sZW5ndGgsZz1kLnJlbGF0aXZlW2FbMF0udHlwZV0saD1nfHxkLnJlbGF0aXZlW1wiIFwiXSxpPWc/MTowLGs9cmIoZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1ifSxoLCEwKSxsPXJiKGZ1bmN0aW9uKGEpe3JldHVybiBLLmNhbGwoYixhKT4tMX0saCwhMCksbT1bZnVuY3Rpb24oYSxjLGQpe3JldHVybiFnJiYoZHx8YyE9PWopfHwoKGI9Yykubm9kZVR5cGU/ayhhLGMsZCk6bChhLGMsZCkpfV07Zj5pO2krKylpZihjPWQucmVsYXRpdmVbYVtpXS50eXBlXSltPVtyYihzYihtKSxjKV07ZWxzZXtpZihjPWQuZmlsdGVyW2FbaV0udHlwZV0uYXBwbHkobnVsbCxhW2ldLm1hdGNoZXMpLGNbdV0pe2ZvcihlPSsraTtmPmU7ZSsrKWlmKGQucmVsYXRpdmVbYVtlXS50eXBlXSlicmVhaztyZXR1cm4gdmIoaT4xJiZzYihtKSxpPjEmJnFiKGEuc2xpY2UoMCxpLTEpLmNvbmNhdCh7dmFsdWU6XCIgXCI9PT1hW2ktMl0udHlwZT9cIipcIjpcIlwifSkpLnJlcGxhY2UoUixcIiQxXCIpLGMsZT5pJiZ3YihhLnNsaWNlKGksZSkpLGY+ZSYmd2IoYT1hLnNsaWNlKGUpKSxmPmUmJnFiKGEpKX1tLnB1c2goYyl9cmV0dXJuIHNiKG0pfWZ1bmN0aW9uIHhiKGEsYil7dmFyIGM9Yi5sZW5ndGg+MCxlPWEubGVuZ3RoPjAsZj1mdW5jdGlvbihmLGcsaCxpLGspe3ZhciBsLG0sbyxwPTAscT1cIjBcIixyPWYmJltdLHM9W10sdD1qLHU9Znx8ZSYmZC5maW5kLlRBRyhcIipcIixrKSx2PXcrPW51bGw9PXQ/MTpNYXRoLnJhbmRvbSgpfHwuMSx4PXUubGVuZ3RoO2ZvcihrJiYoaj1nIT09biYmZyk7cSE9PXgmJm51bGwhPShsPXVbcV0pO3ErKyl7aWYoZSYmbCl7bT0wO3doaWxlKG89YVttKytdKWlmKG8obCxnLGgpKXtpLnB1c2gobCk7YnJlYWt9ayYmKHc9dil9YyYmKChsPSFvJiZsKSYmcC0tLGYmJnIucHVzaChsKSl9aWYocCs9cSxjJiZxIT09cCl7bT0wO3doaWxlKG89YlttKytdKW8ocixzLGcsaCk7aWYoZil7aWYocD4wKXdoaWxlKHEtLSlyW3FdfHxzW3FdfHwoc1txXT1HLmNhbGwoaSkpO3M9dWIocyl9SS5hcHBseShpLHMpLGsmJiFmJiZzLmxlbmd0aD4wJiZwK2IubGVuZ3RoPjEmJmZiLnVuaXF1ZVNvcnQoaSl9cmV0dXJuIGsmJih3PXYsaj10KSxyfTtyZXR1cm4gYz9oYihmKTpmfXJldHVybiBoPWZiLmNvbXBpbGU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9W10sZj1BW2ErXCIgXCJdO2lmKCFmKXtifHwoYj1nKGEpKSxjPWIubGVuZ3RoO3doaWxlKGMtLSlmPXdiKGJbY10pLGZbdV0/ZC5wdXNoKGYpOmUucHVzaChmKTtmPUEoYSx4YihlLGQpKSxmLnNlbGVjdG9yPWF9cmV0dXJuIGZ9LGk9ZmIuc2VsZWN0PWZ1bmN0aW9uKGEsYixlLGYpe3ZhciBpLGosayxsLG0sbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiZhLG89IWYmJmcoYT1uLnNlbGVjdG9yfHxhKTtpZihlPWV8fFtdLDE9PT1vLmxlbmd0aCl7aWYoaj1vWzBdPW9bMF0uc2xpY2UoMCksai5sZW5ndGg+MiYmXCJJRFwiPT09KGs9alswXSkudHlwZSYmYy5nZXRCeUlkJiY5PT09Yi5ub2RlVHlwZSYmcCYmZC5yZWxhdGl2ZVtqWzFdLnR5cGVdKXtpZihiPShkLmZpbmQuSUQoay5tYXRjaGVzWzBdLnJlcGxhY2UoY2IsZGIpLGIpfHxbXSlbMF0sIWIpcmV0dXJuIGU7biYmKGI9Yi5wYXJlbnROb2RlKSxhPWEuc2xpY2Uoai5zaGlmdCgpLnZhbHVlLmxlbmd0aCl9aT1YLm5lZWRzQ29udGV4dC50ZXN0KGEpPzA6ai5sZW5ndGg7d2hpbGUoaS0tKXtpZihrPWpbaV0sZC5yZWxhdGl2ZVtsPWsudHlwZV0pYnJlYWs7aWYoKG09ZC5maW5kW2xdKSYmKGY9bShrLm1hdGNoZXNbMF0ucmVwbGFjZShjYixkYiksYWIudGVzdChqWzBdLnR5cGUpJiZvYihiLnBhcmVudE5vZGUpfHxiKSkpe2lmKGouc3BsaWNlKGksMSksYT1mLmxlbmd0aCYmcWIoaiksIWEpcmV0dXJuIEkuYXBwbHkoZSxmKSxlO2JyZWFrfX19cmV0dXJuKG58fGgoYSxvKSkoZixiLCFwLGUsYWIudGVzdChhKSYmb2IoYi5wYXJlbnROb2RlKXx8YiksZX0sYy5zb3J0U3RhYmxlPXUuc3BsaXQoXCJcIikuc29ydChCKS5qb2luKFwiXCIpPT09dSxjLmRldGVjdER1cGxpY2F0ZXM9ISFsLG0oKSxjLnNvcnREZXRhY2hlZD1pYihmdW5jdGlvbihhKXtyZXR1cm4gMSZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG4uY3JlYXRlRWxlbWVudChcImRpdlwiKSl9KSxpYihmdW5jdGlvbihhKXtyZXR1cm4gYS5pbm5lckhUTUw9XCI8YSBocmVmPScjJz48L2E+XCIsXCIjXCI9PT1hLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKX0pfHxqYihcInR5cGV8aHJlZnxoZWlnaHR8d2lkdGhcIixmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGM/dm9pZCAwOmEuZ2V0QXR0cmlidXRlKGIsXCJ0eXBlXCI9PT1iLnRvTG93ZXJDYXNlKCk/MToyKX0pLGMuYXR0cmlidXRlcyYmaWIoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGlucHV0Lz5cIixhLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiKSxcIlwiPT09YS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfSl8fGpiKFwidmFsdWVcIixmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGN8fFwiaW5wdXRcIiE9PWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT92b2lkIDA6YS5kZWZhdWx0VmFsdWV9KSxpYihmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YS5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKX0pfHxqYihMLGZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gYz92b2lkIDA6YVtiXT09PSEwP2IudG9Mb3dlckNhc2UoKTooZD1hLmdldEF0dHJpYnV0ZU5vZGUoYikpJiZkLnNwZWNpZmllZD9kLnZhbHVlOm51bGx9KSxmYn0oYSk7bi5maW5kPXQsbi5leHByPXQuc2VsZWN0b3JzLG4uZXhwcltcIjpcIl09bi5leHByLnBzZXVkb3Msbi51bmlxdWU9dC51bmlxdWVTb3J0LG4udGV4dD10LmdldFRleHQsbi5pc1hNTERvYz10LmlzWE1MLG4uY29udGFpbnM9dC5jb250YWluczt2YXIgdT1uLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LHY9L148KFxcdyspXFxzKlxcLz8+KD86PFxcL1xcMT58KSQvLHc9L14uW146I1xcW1xcLixdKiQvO2Z1bmN0aW9uIHgoYSxiLGMpe2lmKG4uaXNGdW5jdGlvbihiKSlyZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSxkKXtyZXR1cm4hIWIuY2FsbChhLGQsYSkhPT1jfSk7aWYoYi5ub2RlVHlwZSlyZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1iIT09Y30pO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKXtpZih3LnRlc3QoYikpcmV0dXJuIG4uZmlsdGVyKGIsYSxjKTtiPW4uZmlsdGVyKGIsYSl9cmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBnLmNhbGwoYixhKT49MCE9PWN9KX1uLmZpbHRlcj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YlswXTtyZXR1cm4gYyYmKGE9XCI6bm90KFwiK2ErXCIpXCIpLDE9PT1iLmxlbmd0aCYmMT09PWQubm9kZVR5cGU/bi5maW5kLm1hdGNoZXNTZWxlY3RvcihkLGEpP1tkXTpbXTpuLmZpbmQubWF0Y2hlcyhhLG4uZ3JlcChiLGZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZX0pKX0sbi5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oYSl7dmFyIGIsYz10aGlzLmxlbmd0aCxkPVtdLGU9dGhpcztpZihcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gdGhpcy5wdXNoU3RhY2sobihhKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IoYj0wO2M+YjtiKyspaWYobi5jb250YWlucyhlW2JdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihiPTA7Yz5iO2IrKyluLmZpbmQoYSxlW2JdLGQpO3JldHVybiBkPXRoaXMucHVzaFN0YWNrKGM+MT9uLnVuaXF1ZShkKTpkKSxkLnNlbGVjdG9yPXRoaXMuc2VsZWN0b3I/dGhpcy5zZWxlY3RvcitcIiBcIithOmEsZH0sZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayh4KHRoaXMsYXx8W10sITEpKX0sbm90OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayh4KHRoaXMsYXx8W10sITApKX0saXM6ZnVuY3Rpb24oYSl7cmV0dXJuISF4KHRoaXMsXCJzdHJpbmdcIj09dHlwZW9mIGEmJnUudGVzdChhKT9uKGEpOmF8fFtdLCExKS5sZW5ndGh9fSk7dmFyIHksej0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0qKSkkLyxBPW4uZm4uaW5pdD1mdW5jdGlvbihhLGIpe3ZhciBjLGQ7aWYoIWEpcmV0dXJuIHRoaXM7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEpe2lmKGM9XCI8XCI9PT1hWzBdJiZcIj5cIj09PWFbYS5sZW5ndGgtMV0mJmEubGVuZ3RoPj0zP1tudWxsLGEsbnVsbF06ei5leGVjKGEpLCFjfHwhY1sxXSYmYilyZXR1cm4hYnx8Yi5qcXVlcnk/KGJ8fHkpLmZpbmQoYSk6dGhpcy5jb25zdHJ1Y3RvcihiKS5maW5kKGEpO2lmKGNbMV0pe2lmKGI9YiBpbnN0YW5jZW9mIG4/YlswXTpiLG4ubWVyZ2UodGhpcyxuLnBhcnNlSFRNTChjWzFdLGImJmIubm9kZVR5cGU/Yi5vd25lckRvY3VtZW50fHxiOmwsITApKSx2LnRlc3QoY1sxXSkmJm4uaXNQbGFpbk9iamVjdChiKSlmb3IoYyBpbiBiKW4uaXNGdW5jdGlvbih0aGlzW2NdKT90aGlzW2NdKGJbY10pOnRoaXMuYXR0cihjLGJbY10pO3JldHVybiB0aGlzfXJldHVybiBkPWwuZ2V0RWxlbWVudEJ5SWQoY1syXSksZCYmZC5wYXJlbnROb2RlJiYodGhpcy5sZW5ndGg9MSx0aGlzWzBdPWQpLHRoaXMuY29udGV4dD1sLHRoaXMuc2VsZWN0b3I9YSx0aGlzfXJldHVybiBhLm5vZGVUeXBlPyh0aGlzLmNvbnRleHQ9dGhpc1swXT1hLHRoaXMubGVuZ3RoPTEsdGhpcyk6bi5pc0Z1bmN0aW9uKGEpP1widW5kZWZpbmVkXCIhPXR5cGVvZiB5LnJlYWR5P3kucmVhZHkoYSk6YShuKToodm9pZCAwIT09YS5zZWxlY3RvciYmKHRoaXMuc2VsZWN0b3I9YS5zZWxlY3Rvcix0aGlzLmNvbnRleHQ9YS5jb250ZXh0KSxuLm1ha2VBcnJheShhLHRoaXMpKX07QS5wcm90b3R5cGU9bi5mbix5PW4obCk7dmFyIEI9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sQz17Y2hpbGRyZW46ITAsY29udGVudHM6ITAsbmV4dDohMCxwcmV2OiEwfTtuLmV4dGVuZCh7ZGlyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1bXSxlPXZvaWQgMCE9PWM7d2hpbGUoKGE9YVtiXSkmJjkhPT1hLm5vZGVUeXBlKWlmKDE9PT1hLm5vZGVUeXBlKXtpZihlJiZuKGEpLmlzKGMpKWJyZWFrO2QucHVzaChhKX1yZXR1cm4gZH0sc2libGluZzpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1bXTthO2E9YS5uZXh0U2libGluZykxPT09YS5ub2RlVHlwZSYmYSE9PWImJmMucHVzaChhKTtyZXR1cm4gY319KSxuLmZuLmV4dGVuZCh7aGFzOmZ1bmN0aW9uKGEpe3ZhciBiPW4oYSx0aGlzKSxjPWIubGVuZ3RoO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe2Zvcih2YXIgYT0wO2M+YTthKyspaWYobi5jb250YWlucyh0aGlzLGJbYV0pKXJldHVybiEwfSl9LGNsb3Nlc3Q6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGMsZD0wLGU9dGhpcy5sZW5ndGgsZj1bXSxnPXUudGVzdChhKXx8XCJzdHJpbmdcIiE9dHlwZW9mIGE/bihhLGJ8fHRoaXMuY29udGV4dCk6MDtlPmQ7ZCsrKWZvcihjPXRoaXNbZF07YyYmYyE9PWI7Yz1jLnBhcmVudE5vZGUpaWYoYy5ub2RlVHlwZTwxMSYmKGc/Zy5pbmRleChjKT4tMToxPT09Yy5ub2RlVHlwZSYmbi5maW5kLm1hdGNoZXNTZWxlY3RvcihjLGEpKSl7Zi5wdXNoKGMpO2JyZWFrfXJldHVybiB0aGlzLnB1c2hTdGFjayhmLmxlbmd0aD4xP24udW5pcXVlKGYpOmYpfSxpbmRleDpmdW5jdGlvbihhKXtyZXR1cm4gYT9cInN0cmluZ1wiPT10eXBlb2YgYT9nLmNhbGwobihhKSx0aGlzWzBdKTpnLmNhbGwodGhpcyxhLmpxdWVyeT9hWzBdOmEpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG4udW5pcXVlKG4ubWVyZ2UodGhpcy5nZXQoKSxuKGEsYikpKSl9LGFkZEJhY2s6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYWRkKG51bGw9PWE/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoYSkpfX0pO2Z1bmN0aW9uIEQoYSxiKXt3aGlsZSgoYT1hW2JdKSYmMSE9PWEubm9kZVR5cGUpO3JldHVybiBhfW4uZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtyZXR1cm4gYiYmMTEhPT1iLm5vZGVUeXBlP2I6bnVsbH0scGFyZW50czpmdW5jdGlvbihhKXtyZXR1cm4gbi5kaXIoYSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG4uZGlyKGEsXCJwYXJlbnROb2RlXCIsYyl9LG5leHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIEQoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2OmZ1bmN0aW9uKGEpe3JldHVybiBEKGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZGlyKGEsXCJuZXh0U2libGluZ1wiKX0scHJldkFsbDpmdW5jdGlvbihhKXtyZXR1cm4gbi5kaXIoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dFVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbi5kaXIoYSxcIm5leHRTaWJsaW5nXCIsYyl9LHByZXZVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG4uZGlyKGEsXCJwcmV2aW91c1NpYmxpbmdcIixjKX0sc2libGluZ3M6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uc2libGluZygoYS5wYXJlbnROb2RlfHx7fSkuZmlyc3RDaGlsZCxhKX0sY2hpbGRyZW46ZnVuY3Rpb24oYSl7cmV0dXJuIG4uc2libGluZyhhLmZpcnN0Q2hpbGQpfSxjb250ZW50czpmdW5jdGlvbihhKXtyZXR1cm4gYS5jb250ZW50RG9jdW1lbnR8fG4ubWVyZ2UoW10sYS5jaGlsZE5vZGVzKX19LGZ1bmN0aW9uKGEsYil7bi5mblthXT1mdW5jdGlvbihjLGQpe3ZhciBlPW4ubWFwKHRoaXMsYixjKTtyZXR1cm5cIlVudGlsXCIhPT1hLnNsaWNlKC01KSYmKGQ9YyksZCYmXCJzdHJpbmdcIj09dHlwZW9mIGQmJihlPW4uZmlsdGVyKGQsZSkpLHRoaXMubGVuZ3RoPjEmJihDW2FdfHxuLnVuaXF1ZShlKSxCLnRlc3QoYSkmJmUucmV2ZXJzZSgpKSx0aGlzLnB1c2hTdGFjayhlKX19KTt2YXIgRT0vXFxTKy9nLEY9e307ZnVuY3Rpb24gRyhhKXt2YXIgYj1GW2FdPXt9O3JldHVybiBuLmVhY2goYS5tYXRjaChFKXx8W10sZnVuY3Rpb24oYSxjKXtiW2NdPSEwfSksYn1uLkNhbGxiYWNrcz1mdW5jdGlvbihhKXthPVwic3RyaW5nXCI9PXR5cGVvZiBhP0ZbYV18fEcoYSk6bi5leHRlbmQoe30sYSk7dmFyIGIsYyxkLGUsZixnLGg9W10saT0hYS5vbmNlJiZbXSxqPWZ1bmN0aW9uKGwpe2ZvcihiPWEubWVtb3J5JiZsLGM9ITAsZz1lfHwwLGU9MCxmPWgubGVuZ3RoLGQ9ITA7aCYmZj5nO2crKylpZihoW2ddLmFwcGx5KGxbMF0sbFsxXSk9PT0hMSYmYS5zdG9wT25GYWxzZSl7Yj0hMTticmVha31kPSExLGgmJihpP2kubGVuZ3RoJiZqKGkuc2hpZnQoKSk6Yj9oPVtdOmsuZGlzYWJsZSgpKX0saz17YWRkOmZ1bmN0aW9uKCl7aWYoaCl7dmFyIGM9aC5sZW5ndGg7IWZ1bmN0aW9uIGcoYil7bi5lYWNoKGIsZnVuY3Rpb24oYixjKXt2YXIgZD1uLnR5cGUoYyk7XCJmdW5jdGlvblwiPT09ZD9hLnVuaXF1ZSYmay5oYXMoYyl8fGgucHVzaChjKTpjJiZjLmxlbmd0aCYmXCJzdHJpbmdcIiE9PWQmJmcoYyl9KX0oYXJndW1lbnRzKSxkP2Y9aC5sZW5ndGg6YiYmKGU9YyxqKGIpKX1yZXR1cm4gdGhpc30scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIGgmJm4uZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oYSxiKXt2YXIgYzt3aGlsZSgoYz1uLmluQXJyYXkoYixoLGMpKT4tMSloLnNwbGljZShjLDEpLGQmJihmPj1jJiZmLS0sZz49YyYmZy0tKX0pLHRoaXN9LGhhczpmdW5jdGlvbihhKXtyZXR1cm4gYT9uLmluQXJyYXkoYSxoKT4tMTohKCFofHwhaC5sZW5ndGgpfSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiBoPVtdLGY9MCx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGg9aT1iPXZvaWQgMCx0aGlzfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiFofSxsb2NrOmZ1bmN0aW9uKCl7cmV0dXJuIGk9dm9pZCAwLGJ8fGsuZGlzYWJsZSgpLHRoaXN9LGxvY2tlZDpmdW5jdGlvbigpe3JldHVybiFpfSxmaXJlV2l0aDpmdW5jdGlvbihhLGIpe3JldHVybiFofHxjJiYhaXx8KGI9Ynx8W10sYj1bYSxiLnNsaWNlP2Iuc2xpY2UoKTpiXSxkP2kucHVzaChiKTpqKGIpKSx0aGlzfSxmaXJlOmZ1bmN0aW9uKCl7cmV0dXJuIGsuZmlyZVdpdGgodGhpcyxhcmd1bWVudHMpLHRoaXN9LGZpcmVkOmZ1bmN0aW9uKCl7cmV0dXJuISFjfX07cmV0dXJuIGt9LG4uZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbihhKXt2YXIgYj1bW1wicmVzb2x2ZVwiLFwiZG9uZVwiLG4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIixuLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFwicmVqZWN0ZWRcIl0sW1wibm90aWZ5XCIsXCJwcm9ncmVzc1wiLG4uQ2FsbGJhY2tzKFwibWVtb3J5XCIpXV0sYz1cInBlbmRpbmdcIixkPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBjfSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gZS5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LHRoZW46ZnVuY3Rpb24oKXt2YXIgYT1hcmd1bWVudHM7cmV0dXJuIG4uRGVmZXJyZWQoZnVuY3Rpb24oYyl7bi5lYWNoKGIsZnVuY3Rpb24oYixmKXt2YXIgZz1uLmlzRnVuY3Rpb24oYVtiXSkmJmFbYl07ZVtmWzFdXShmdW5jdGlvbigpe3ZhciBhPWcmJmcuYXBwbHkodGhpcyxhcmd1bWVudHMpO2EmJm4uaXNGdW5jdGlvbihhLnByb21pc2UpP2EucHJvbWlzZSgpLmRvbmUoYy5yZXNvbHZlKS5mYWlsKGMucmVqZWN0KS5wcm9ncmVzcyhjLm5vdGlmeSk6Y1tmWzBdK1wiV2l0aFwiXSh0aGlzPT09ZD9jLnByb21pc2UoKTp0aGlzLGc/W2FdOmFyZ3VtZW50cyl9KX0pLGE9bnVsbH0pLnByb21pc2UoKX0scHJvbWlzZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YT9uLmV4dGVuZChhLGQpOmR9fSxlPXt9O3JldHVybiBkLnBpcGU9ZC50aGVuLG4uZWFjaChiLGZ1bmN0aW9uKGEsZil7dmFyIGc9ZlsyXSxoPWZbM107ZFtmWzFdXT1nLmFkZCxoJiZnLmFkZChmdW5jdGlvbigpe2M9aH0sYlsxXmFdWzJdLmRpc2FibGUsYlsyXVsyXS5sb2NrKSxlW2ZbMF1dPWZ1bmN0aW9uKCl7cmV0dXJuIGVbZlswXStcIldpdGhcIl0odGhpcz09PWU/ZDp0aGlzLGFyZ3VtZW50cyksdGhpc30sZVtmWzBdK1wiV2l0aFwiXT1nLmZpcmVXaXRofSksZC5wcm9taXNlKGUpLGEmJmEuY2FsbChlLGUpLGV9LHdoZW46ZnVuY3Rpb24oYSl7dmFyIGI9MCxjPWQuY2FsbChhcmd1bWVudHMpLGU9Yy5sZW5ndGgsZj0xIT09ZXx8YSYmbi5pc0Z1bmN0aW9uKGEucHJvbWlzZSk/ZTowLGc9MT09PWY/YTpuLkRlZmVycmVkKCksaD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGUpe2JbYV09dGhpcyxjW2FdPWFyZ3VtZW50cy5sZW5ndGg+MT9kLmNhbGwoYXJndW1lbnRzKTplLGM9PT1pP2cubm90aWZ5V2l0aChiLGMpOi0tZnx8Zy5yZXNvbHZlV2l0aChiLGMpfX0saSxqLGs7aWYoZT4xKWZvcihpPW5ldyBBcnJheShlKSxqPW5ldyBBcnJheShlKSxrPW5ldyBBcnJheShlKTtlPmI7YisrKWNbYl0mJm4uaXNGdW5jdGlvbihjW2JdLnByb21pc2UpP2NbYl0ucHJvbWlzZSgpLmRvbmUoaChiLGssYykpLmZhaWwoZy5yZWplY3QpLnByb2dyZXNzKGgoYixqLGkpKTotLWY7cmV0dXJuIGZ8fGcucmVzb2x2ZVdpdGgoayxjKSxnLnByb21pc2UoKX19KTt2YXIgSDtuLmZuLnJlYWR5PWZ1bmN0aW9uKGEpe3JldHVybiBuLnJlYWR5LnByb21pc2UoKS5kb25lKGEpLHRoaXN9LG4uZXh0ZW5kKHtpc1JlYWR5OiExLHJlYWR5V2FpdDoxLGhvbGRSZWFkeTpmdW5jdGlvbihhKXthP24ucmVhZHlXYWl0Kys6bi5yZWFkeSghMCl9LHJlYWR5OmZ1bmN0aW9uKGEpeyhhPT09ITA/LS1uLnJlYWR5V2FpdDpuLmlzUmVhZHkpfHwobi5pc1JlYWR5PSEwLGEhPT0hMCYmLS1uLnJlYWR5V2FpdD4wfHwoSC5yZXNvbHZlV2l0aChsLFtuXSksbi5mbi50cmlnZ2VySGFuZGxlciYmKG4obCkudHJpZ2dlckhhbmRsZXIoXCJyZWFkeVwiKSxuKGwpLm9mZihcInJlYWR5XCIpKSkpfX0pO2Z1bmN0aW9uIEkoKXtsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsSSwhMSksYS5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLEksITEpLG4ucmVhZHkoKX1uLnJlYWR5LnByb21pc2U9ZnVuY3Rpb24oYil7cmV0dXJuIEh8fChIPW4uRGVmZXJyZWQoKSxcImNvbXBsZXRlXCI9PT1sLnJlYWR5U3RhdGU/c2V0VGltZW91dChuLnJlYWR5KToobC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEksITEpLGEuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixJLCExKSkpLEgucHJvbWlzZShiKX0sbi5yZWFkeS5wcm9taXNlKCk7dmFyIEo9bi5hY2Nlc3M9ZnVuY3Rpb24oYSxiLGMsZCxlLGYsZyl7dmFyIGg9MCxpPWEubGVuZ3RoLGo9bnVsbD09YztpZihcIm9iamVjdFwiPT09bi50eXBlKGMpKXtlPSEwO2ZvcihoIGluIGMpbi5hY2Nlc3MoYSxiLGgsY1toXSwhMCxmLGcpfWVsc2UgaWYodm9pZCAwIT09ZCYmKGU9ITAsbi5pc0Z1bmN0aW9uKGQpfHwoZz0hMCksaiYmKGc/KGIuY2FsbChhLGQpLGI9bnVsbCk6KGo9YixiPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gai5jYWxsKG4oYSksYyl9KSksYikpZm9yKDtpPmg7aCsrKWIoYVtoXSxjLGc/ZDpkLmNhbGwoYVtoXSxoLGIoYVtoXSxjKSkpO3JldHVybiBlP2E6aj9iLmNhbGwoYSk6aT9iKGFbMF0sYyk6Zn07bi5hY2NlcHREYXRhPWZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZXx8OT09PWEubm9kZVR5cGV8fCErYS5ub2RlVHlwZX07ZnVuY3Rpb24gSygpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmNhY2hlPXt9LDAse2dldDpmdW5jdGlvbigpe3JldHVybnt9fX0pLHRoaXMuZXhwYW5kbz1uLmV4cGFuZG8rTWF0aC5yYW5kb20oKX1LLnVpZD0xLEsuYWNjZXB0cz1uLmFjY2VwdERhdGEsSy5wcm90b3R5cGU9e2tleTpmdW5jdGlvbihhKXtpZighSy5hY2NlcHRzKGEpKXJldHVybiAwO3ZhciBiPXt9LGM9YVt0aGlzLmV4cGFuZG9dO2lmKCFjKXtjPUsudWlkKys7dHJ5e2JbdGhpcy5leHBhbmRvXT17dmFsdWU6Y30sT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoYSxiKX1jYXRjaChkKXtiW3RoaXMuZXhwYW5kb109YyxuLmV4dGVuZChhLGIpfX1yZXR1cm4gdGhpcy5jYWNoZVtjXXx8KHRoaXMuY2FjaGVbY109e30pLGN9LHNldDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZT10aGlzLmtleShhKSxmPXRoaXMuY2FjaGVbZV07aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpZltiXT1jO2Vsc2UgaWYobi5pc0VtcHR5T2JqZWN0KGYpKW4uZXh0ZW5kKHRoaXMuY2FjaGVbZV0sYik7ZWxzZSBmb3IoZCBpbiBiKWZbZF09YltkXTtyZXR1cm4gZn0sZ2V0OmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5jYWNoZVt0aGlzLmtleShhKV07cmV0dXJuIHZvaWQgMD09PWI/YzpjW2JdfSxhY2Nlc3M6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiB2b2lkIDA9PT1ifHxiJiZcInN0cmluZ1wiPT10eXBlb2YgYiYmdm9pZCAwPT09Yz8oZD10aGlzLmdldChhLGIpLHZvaWQgMCE9PWQ/ZDp0aGlzLmdldChhLG4uY2FtZWxDYXNlKGIpKSk6KHRoaXMuc2V0KGEsYixjKSx2b2lkIDAhPT1jP2M6Yil9LHJlbW92ZTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPXRoaXMua2V5KGEpLGc9dGhpcy5jYWNoZVtmXTtpZih2b2lkIDA9PT1iKXRoaXMuY2FjaGVbZl09e307ZWxzZXtuLmlzQXJyYXkoYik/ZD1iLmNvbmNhdChiLm1hcChuLmNhbWVsQ2FzZSkpOihlPW4uY2FtZWxDYXNlKGIpLGIgaW4gZz9kPVtiLGVdOihkPWUsZD1kIGluIGc/W2RdOmQubWF0Y2goRSl8fFtdKSksYz1kLmxlbmd0aDt3aGlsZShjLS0pZGVsZXRlIGdbZFtjXV19fSxoYXNEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiFuLmlzRW1wdHlPYmplY3QodGhpcy5jYWNoZVthW3RoaXMuZXhwYW5kb11dfHx7fSl9LGRpc2NhcmQ6ZnVuY3Rpb24oYSl7YVt0aGlzLmV4cGFuZG9dJiZkZWxldGUgdGhpcy5jYWNoZVthW3RoaXMuZXhwYW5kb11dfX07dmFyIEw9bmV3IEssTT1uZXcgSyxOPS9eKD86XFx7W1xcd1xcV10qXFx9fFxcW1tcXHdcXFddKlxcXSkkLyxPPS8oW0EtWl0pL2c7ZnVuY3Rpb24gUChhLGIsYyl7dmFyIGQ7aWYodm9pZCAwPT09YyYmMT09PWEubm9kZVR5cGUpaWYoZD1cImRhdGEtXCIrYi5yZXBsYWNlKE8sXCItJDFcIikudG9Mb3dlckNhc2UoKSxjPWEuZ2V0QXR0cmlidXRlKGQpLFwic3RyaW5nXCI9PXR5cGVvZiBjKXt0cnl7Yz1cInRydWVcIj09PWM/ITA6XCJmYWxzZVwiPT09Yz8hMTpcIm51bGxcIj09PWM/bnVsbDorYytcIlwiPT09Yz8rYzpOLnRlc3QoYyk/bi5wYXJzZUpTT04oYyk6Y31jYXRjaChlKXt9TS5zZXQoYSxiLGMpfWVsc2UgYz12b2lkIDA7cmV0dXJuIGN9bi5leHRlbmQoe2hhc0RhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIE0uaGFzRGF0YShhKXx8TC5oYXNEYXRhKGEpfSxkYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gTS5hY2Nlc3MoYSxiLGMpfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7TS5yZW1vdmUoYSxiKVxufSxfZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIEwuYWNjZXNzKGEsYixjKX0sX3JlbW92ZURhdGE6ZnVuY3Rpb24oYSxiKXtMLnJlbW92ZShhLGIpfX0pLG4uZm4uZXh0ZW5kKHtkYXRhOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9dGhpc1swXSxnPWYmJmYuYXR0cmlidXRlcztpZih2b2lkIDA9PT1hKXtpZih0aGlzLmxlbmd0aCYmKGU9TS5nZXQoZiksMT09PWYubm9kZVR5cGUmJiFMLmdldChmLFwiaGFzRGF0YUF0dHJzXCIpKSl7Yz1nLmxlbmd0aDt3aGlsZShjLS0pZ1tjXSYmKGQ9Z1tjXS5uYW1lLDA9PT1kLmluZGV4T2YoXCJkYXRhLVwiKSYmKGQ9bi5jYW1lbENhc2UoZC5zbGljZSg1KSksUChmLGQsZVtkXSkpKTtMLnNldChmLFwiaGFzRGF0YUF0dHJzXCIsITApfXJldHVybiBlfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBhP3RoaXMuZWFjaChmdW5jdGlvbigpe00uc2V0KHRoaXMsYSl9KTpKKHRoaXMsZnVuY3Rpb24oYil7dmFyIGMsZD1uLmNhbWVsQ2FzZShhKTtpZihmJiZ2b2lkIDA9PT1iKXtpZihjPU0uZ2V0KGYsYSksdm9pZCAwIT09YylyZXR1cm4gYztpZihjPU0uZ2V0KGYsZCksdm9pZCAwIT09YylyZXR1cm4gYztpZihjPVAoZixkLHZvaWQgMCksdm9pZCAwIT09YylyZXR1cm4gY31lbHNlIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPU0uZ2V0KHRoaXMsZCk7TS5zZXQodGhpcyxkLGIpLC0xIT09YS5pbmRleE9mKFwiLVwiKSYmdm9pZCAwIT09YyYmTS5zZXQodGhpcyxhLGIpfSl9LG51bGwsYixhcmd1bWVudHMubGVuZ3RoPjEsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe00ucmVtb3ZlKHRoaXMsYSl9KX19KSxuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiBhPyhiPShifHxcImZ4XCIpK1wicXVldWVcIixkPUwuZ2V0KGEsYiksYyYmKCFkfHxuLmlzQXJyYXkoYyk/ZD1MLmFjY2VzcyhhLGIsbi5tYWtlQXJyYXkoYykpOmQucHVzaChjKSksZHx8W10pOnZvaWQgMH0sZGVxdWV1ZTpmdW5jdGlvbihhLGIpe2I9Ynx8XCJmeFwiO3ZhciBjPW4ucXVldWUoYSxiKSxkPWMubGVuZ3RoLGU9Yy5zaGlmdCgpLGY9bi5fcXVldWVIb29rcyhhLGIpLGc9ZnVuY3Rpb24oKXtuLmRlcXVldWUoYSxiKX07XCJpbnByb2dyZXNzXCI9PT1lJiYoZT1jLnNoaWZ0KCksZC0tKSxlJiYoXCJmeFwiPT09YiYmYy51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgZi5zdG9wLGUuY2FsbChhLGcsZikpLCFkJiZmJiZmLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz1iK1wicXVldWVIb29rc1wiO3JldHVybiBMLmdldChhLGMpfHxMLmFjY2VzcyhhLGMse2VtcHR5Om4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7TC5yZW1vdmUoYSxbYitcInF1ZXVlXCIsY10pfSl9KX19KSxuLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiKXt2YXIgYz0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9XCJmeFwiLGMtLSksYXJndW1lbnRzLmxlbmd0aDxjP24ucXVldWUodGhpc1swXSxhKTp2b2lkIDA9PT1iP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9bi5xdWV1ZSh0aGlzLGEsYik7bi5fcXVldWVIb29rcyh0aGlzLGEpLFwiZnhcIj09PWEmJlwiaW5wcm9ncmVzc1wiIT09Y1swXSYmbi5kZXF1ZXVlKHRoaXMsYSl9KX0sZGVxdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5kZXF1ZXVlKHRoaXMsYSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0xLGU9bi5EZWZlcnJlZCgpLGY9dGhpcyxnPXRoaXMubGVuZ3RoLGg9ZnVuY3Rpb24oKXstLWR8fGUucmVzb2x2ZVdpdGgoZixbZl0pfTtcInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPXZvaWQgMCksYT1hfHxcImZ4XCI7d2hpbGUoZy0tKWM9TC5nZXQoZltnXSxhK1wicXVldWVIb29rc1wiKSxjJiZjLmVtcHR5JiYoZCsrLGMuZW1wdHkuYWRkKGgpKTtyZXR1cm4gaCgpLGUucHJvbWlzZShiKX19KTt2YXIgUT0vWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2UsUj1bXCJUb3BcIixcIlJpZ2h0XCIsXCJCb3R0b21cIixcIkxlZnRcIl0sUz1mdW5jdGlvbihhLGIpe3JldHVybiBhPWJ8fGEsXCJub25lXCI9PT1uLmNzcyhhLFwiZGlzcGxheVwiKXx8IW4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpfSxUPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pOyFmdW5jdGlvbigpe3ZhciBhPWwuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLGI9YS5hcHBlbmRDaGlsZChsLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGM9bC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7Yy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKSxjLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIixcImNoZWNrZWRcIiksYy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0XCIpLGIuYXBwZW5kQ2hpbGQoYyksay5jaGVja0Nsb25lPWIuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLGIuaW5uZXJIVE1MPVwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiLGsubm9DbG9uZUNoZWNrZWQ9ISFiLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZX0oKTt2YXIgVT1cInVuZGVmaW5lZFwiO2suZm9jdXNpbkJ1YmJsZXM9XCJvbmZvY3VzaW5cImluIGE7dmFyIFY9L15rZXkvLFc9L14oPzptb3VzZXxwb2ludGVyfGNvbnRleHRtZW51KXxjbGljay8sWD0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC8sWT0vXihbXi5dKikoPzpcXC4oLispfCkkLztmdW5jdGlvbiBaKCl7cmV0dXJuITB9ZnVuY3Rpb24gJCgpe3JldHVybiExfWZ1bmN0aW9uIF8oKXt0cnl7cmV0dXJuIGwuYWN0aXZlRWxlbWVudH1jYXRjaChhKXt9fW4uZXZlbnQ9e2dsb2JhbDp7fSxhZGQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxtLG8scCxxLHI9TC5nZXQoYSk7aWYocil7Yy5oYW5kbGVyJiYoZj1jLGM9Zi5oYW5kbGVyLGU9Zi5zZWxlY3RvciksYy5ndWlkfHwoYy5ndWlkPW4uZ3VpZCsrKSwoaT1yLmV2ZW50cyl8fChpPXIuZXZlbnRzPXt9KSwoZz1yLmhhbmRsZSl8fChnPXIuaGFuZGxlPWZ1bmN0aW9uKGIpe3JldHVybiB0eXBlb2YgbiE9PVUmJm4uZXZlbnQudHJpZ2dlcmVkIT09Yi50eXBlP24uZXZlbnQuZGlzcGF0Y2guYXBwbHkoYSxhcmd1bWVudHMpOnZvaWQgMH0pLGI9KGJ8fFwiXCIpLm1hdGNoKEUpfHxbXCJcIl0saj1iLmxlbmd0aDt3aGlsZShqLS0paD1ZLmV4ZWMoYltqXSl8fFtdLG89cT1oWzFdLHA9KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbyYmKGw9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxvPShlP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxvLGw9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxrPW4uZXh0ZW5kKHt0eXBlOm8sb3JpZ1R5cGU6cSxkYXRhOmQsaGFuZGxlcjpjLGd1aWQ6Yy5ndWlkLHNlbGVjdG9yOmUsbmVlZHNDb250ZXh0OmUmJm4uZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChlKSxuYW1lc3BhY2U6cC5qb2luKFwiLlwiKX0sZiksKG09aVtvXSl8fChtPWlbb109W10sbS5kZWxlZ2F0ZUNvdW50PTAsbC5zZXR1cCYmbC5zZXR1cC5jYWxsKGEsZCxwLGcpIT09ITF8fGEuYWRkRXZlbnRMaXN0ZW5lciYmYS5hZGRFdmVudExpc3RlbmVyKG8sZywhMSkpLGwuYWRkJiYobC5hZGQuY2FsbChhLGspLGsuaGFuZGxlci5ndWlkfHwoay5oYW5kbGVyLmd1aWQ9Yy5ndWlkKSksZT9tLnNwbGljZShtLmRlbGVnYXRlQ291bnQrKywwLGspOm0ucHVzaChrKSxuLmV2ZW50Lmdsb2JhbFtvXT0hMCl9fSxyZW1vdmU6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxtLG8scCxxLHI9TC5oYXNEYXRhKGEpJiZMLmdldChhKTtpZihyJiYoaT1yLmV2ZW50cykpe2I9KGJ8fFwiXCIpLm1hdGNoKEUpfHxbXCJcIl0saj1iLmxlbmd0aDt3aGlsZShqLS0paWYoaD1ZLmV4ZWMoYltqXSl8fFtdLG89cT1oWzFdLHA9KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbyl7bD1uLmV2ZW50LnNwZWNpYWxbb118fHt9LG89KGQ/bC5kZWxlZ2F0ZVR5cGU6bC5iaW5kVHlwZSl8fG8sbT1pW29dfHxbXSxoPWhbMl0mJm5ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitwLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKSxnPWY9bS5sZW5ndGg7d2hpbGUoZi0tKWs9bVtmXSwhZSYmcSE9PWsub3JpZ1R5cGV8fGMmJmMuZ3VpZCE9PWsuZ3VpZHx8aCYmIWgudGVzdChrLm5hbWVzcGFjZSl8fGQmJmQhPT1rLnNlbGVjdG9yJiYoXCIqKlwiIT09ZHx8IWsuc2VsZWN0b3IpfHwobS5zcGxpY2UoZiwxKSxrLnNlbGVjdG9yJiZtLmRlbGVnYXRlQ291bnQtLSxsLnJlbW92ZSYmbC5yZW1vdmUuY2FsbChhLGspKTtnJiYhbS5sZW5ndGgmJihsLnRlYXJkb3duJiZsLnRlYXJkb3duLmNhbGwoYSxwLHIuaGFuZGxlKSE9PSExfHxuLnJlbW92ZUV2ZW50KGEsbyxyLmhhbmRsZSksZGVsZXRlIGlbb10pfWVsc2UgZm9yKG8gaW4gaSluLmV2ZW50LnJlbW92ZShhLG8rYltqXSxjLGQsITApO24uaXNFbXB0eU9iamVjdChpKSYmKGRlbGV0ZSByLmhhbmRsZSxMLnJlbW92ZShhLFwiZXZlbnRzXCIpKX19LHRyaWdnZXI6ZnVuY3Rpb24oYixjLGQsZSl7dmFyIGYsZyxoLGksayxtLG8scD1bZHx8bF0scT1qLmNhbGwoYixcInR5cGVcIik/Yi50eXBlOmIscj1qLmNhbGwoYixcIm5hbWVzcGFjZVwiKT9iLm5hbWVzcGFjZS5zcGxpdChcIi5cIik6W107aWYoZz1oPWQ9ZHx8bCwzIT09ZC5ub2RlVHlwZSYmOCE9PWQubm9kZVR5cGUmJiFYLnRlc3QocStuLmV2ZW50LnRyaWdnZXJlZCkmJihxLmluZGV4T2YoXCIuXCIpPj0wJiYocj1xLnNwbGl0KFwiLlwiKSxxPXIuc2hpZnQoKSxyLnNvcnQoKSksaz1xLmluZGV4T2YoXCI6XCIpPDAmJlwib25cIitxLGI9YltuLmV4cGFuZG9dP2I6bmV3IG4uRXZlbnQocSxcIm9iamVjdFwiPT10eXBlb2YgYiYmYiksYi5pc1RyaWdnZXI9ZT8yOjMsYi5uYW1lc3BhY2U9ci5qb2luKFwiLlwiKSxiLm5hbWVzcGFjZV9yZT1iLm5hbWVzcGFjZT9uZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrci5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIik6bnVsbCxiLnJlc3VsdD12b2lkIDAsYi50YXJnZXR8fChiLnRhcmdldD1kKSxjPW51bGw9PWM/W2JdOm4ubWFrZUFycmF5KGMsW2JdKSxvPW4uZXZlbnQuc3BlY2lhbFtxXXx8e30sZXx8IW8udHJpZ2dlcnx8by50cmlnZ2VyLmFwcGx5KGQsYykhPT0hMSkpe2lmKCFlJiYhby5ub0J1YmJsZSYmIW4uaXNXaW5kb3coZCkpe2ZvcihpPW8uZGVsZWdhdGVUeXBlfHxxLFgudGVzdChpK3EpfHwoZz1nLnBhcmVudE5vZGUpO2c7Zz1nLnBhcmVudE5vZGUpcC5wdXNoKGcpLGg9ZztoPT09KGQub3duZXJEb2N1bWVudHx8bCkmJnAucHVzaChoLmRlZmF1bHRWaWV3fHxoLnBhcmVudFdpbmRvd3x8YSl9Zj0wO3doaWxlKChnPXBbZisrXSkmJiFiLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpYi50eXBlPWY+MT9pOm8uYmluZFR5cGV8fHEsbT0oTC5nZXQoZyxcImV2ZW50c1wiKXx8e30pW2IudHlwZV0mJkwuZ2V0KGcsXCJoYW5kbGVcIiksbSYmbS5hcHBseShnLGMpLG09ayYmZ1trXSxtJiZtLmFwcGx5JiZuLmFjY2VwdERhdGEoZykmJihiLnJlc3VsdD1tLmFwcGx5KGcsYyksYi5yZXN1bHQ9PT0hMSYmYi5wcmV2ZW50RGVmYXVsdCgpKTtyZXR1cm4gYi50eXBlPXEsZXx8Yi5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8by5fZGVmYXVsdCYmby5fZGVmYXVsdC5hcHBseShwLnBvcCgpLGMpIT09ITF8fCFuLmFjY2VwdERhdGEoZCl8fGsmJm4uaXNGdW5jdGlvbihkW3FdKSYmIW4uaXNXaW5kb3coZCkmJihoPWRba10saCYmKGRba109bnVsbCksbi5ldmVudC50cmlnZ2VyZWQ9cSxkW3FdKCksbi5ldmVudC50cmlnZ2VyZWQ9dm9pZCAwLGgmJihkW2tdPWgpKSxiLnJlc3VsdH19LGRpc3BhdGNoOmZ1bmN0aW9uKGEpe2E9bi5ldmVudC5maXgoYSk7dmFyIGIsYyxlLGYsZyxoPVtdLGk9ZC5jYWxsKGFyZ3VtZW50cyksaj0oTC5nZXQodGhpcyxcImV2ZW50c1wiKXx8e30pW2EudHlwZV18fFtdLGs9bi5ldmVudC5zcGVjaWFsW2EudHlwZV18fHt9O2lmKGlbMF09YSxhLmRlbGVnYXRlVGFyZ2V0PXRoaXMsIWsucHJlRGlzcGF0Y2h8fGsucHJlRGlzcGF0Y2guY2FsbCh0aGlzLGEpIT09ITEpe2g9bi5ldmVudC5oYW5kbGVycy5jYWxsKHRoaXMsYSxqKSxiPTA7d2hpbGUoKGY9aFtiKytdKSYmIWEuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSl7YS5jdXJyZW50VGFyZ2V0PWYuZWxlbSxjPTA7d2hpbGUoKGc9Zi5oYW5kbGVyc1tjKytdKSYmIWEuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSkoIWEubmFtZXNwYWNlX3JlfHxhLm5hbWVzcGFjZV9yZS50ZXN0KGcubmFtZXNwYWNlKSkmJihhLmhhbmRsZU9iaj1nLGEuZGF0YT1nLmRhdGEsZT0oKG4uZXZlbnQuc3BlY2lhbFtnLm9yaWdUeXBlXXx8e30pLmhhbmRsZXx8Zy5oYW5kbGVyKS5hcHBseShmLmVsZW0saSksdm9pZCAwIT09ZSYmKGEucmVzdWx0PWUpPT09ITEmJihhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKSkpfXJldHVybiBrLnBvc3REaXNwYXRjaCYmay5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLGEpLGEucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZixnPVtdLGg9Yi5kZWxlZ2F0ZUNvdW50LGk9YS50YXJnZXQ7aWYoaCYmaS5ub2RlVHlwZSYmKCFhLmJ1dHRvbnx8XCJjbGlja1wiIT09YS50eXBlKSlmb3IoO2khPT10aGlzO2k9aS5wYXJlbnROb2RlfHx0aGlzKWlmKGkuZGlzYWJsZWQhPT0hMHx8XCJjbGlja1wiIT09YS50eXBlKXtmb3IoZD1bXSxjPTA7aD5jO2MrKylmPWJbY10sZT1mLnNlbGVjdG9yK1wiIFwiLHZvaWQgMD09PWRbZV0mJihkW2VdPWYubmVlZHNDb250ZXh0P24oZSx0aGlzKS5pbmRleChpKT49MDpuLmZpbmQoZSx0aGlzLG51bGwsW2ldKS5sZW5ndGgpLGRbZV0mJmQucHVzaChmKTtkLmxlbmd0aCYmZy5wdXNoKHtlbGVtOmksaGFuZGxlcnM6ZH0pfXJldHVybiBoPGIubGVuZ3RoJiZnLnB1c2goe2VsZW06dGhpcyxoYW5kbGVyczpiLnNsaWNlKGgpfSksZ30scHJvcHM6XCJhbHRLZXkgYnViYmxlcyBjYW5jZWxhYmxlIGN0cmxLZXkgY3VycmVudFRhcmdldCBldmVudFBoYXNlIG1ldGFLZXkgcmVsYXRlZFRhcmdldCBzaGlmdEtleSB0YXJnZXQgdGltZVN0YW1wIHZpZXcgd2hpY2hcIi5zcGxpdChcIiBcIiksZml4SG9va3M6e30sa2V5SG9va3M6e3Byb3BzOlwiY2hhciBjaGFyQ29kZSBrZXkga2V5Q29kZVwiLnNwbGl0KFwiIFwiKSxmaWx0ZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbnVsbD09YS53aGljaCYmKGEud2hpY2g9bnVsbCE9Yi5jaGFyQ29kZT9iLmNoYXJDb2RlOmIua2V5Q29kZSksYX19LG1vdXNlSG9va3M6e3Byb3BzOlwiYnV0dG9uIGJ1dHRvbnMgY2xpZW50WCBjbGllbnRZIG9mZnNldFggb2Zmc2V0WSBwYWdlWCBwYWdlWSBzY3JlZW5YIHNjcmVlblkgdG9FbGVtZW50XCIuc3BsaXQoXCIgXCIpLGZpbHRlcjpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPWIuYnV0dG9uO3JldHVybiBudWxsPT1hLnBhZ2VYJiZudWxsIT1iLmNsaWVudFgmJihjPWEudGFyZ2V0Lm93bmVyRG9jdW1lbnR8fGwsZD1jLmRvY3VtZW50RWxlbWVudCxlPWMuYm9keSxhLnBhZ2VYPWIuY2xpZW50WCsoZCYmZC5zY3JvbGxMZWZ0fHxlJiZlLnNjcm9sbExlZnR8fDApLShkJiZkLmNsaWVudExlZnR8fGUmJmUuY2xpZW50TGVmdHx8MCksYS5wYWdlWT1iLmNsaWVudFkrKGQmJmQuc2Nyb2xsVG9wfHxlJiZlLnNjcm9sbFRvcHx8MCktKGQmJmQuY2xpZW50VG9wfHxlJiZlLmNsaWVudFRvcHx8MCkpLGEud2hpY2h8fHZvaWQgMD09PWZ8fChhLndoaWNoPTEmZj8xOjImZj8zOjQmZj8yOjApLGF9fSxmaXg6ZnVuY3Rpb24oYSl7aWYoYVtuLmV4cGFuZG9dKXJldHVybiBhO3ZhciBiLGMsZCxlPWEudHlwZSxmPWEsZz10aGlzLmZpeEhvb2tzW2VdO2d8fCh0aGlzLmZpeEhvb2tzW2VdPWc9Vy50ZXN0KGUpP3RoaXMubW91c2VIb29rczpWLnRlc3QoZSk/dGhpcy5rZXlIb29rczp7fSksZD1nLnByb3BzP3RoaXMucHJvcHMuY29uY2F0KGcucHJvcHMpOnRoaXMucHJvcHMsYT1uZXcgbi5FdmVudChmKSxiPWQubGVuZ3RoO3doaWxlKGItLSljPWRbYl0sYVtjXT1mW2NdO3JldHVybiBhLnRhcmdldHx8KGEudGFyZ2V0PWwpLDM9PT1hLnRhcmdldC5ub2RlVHlwZSYmKGEudGFyZ2V0PWEudGFyZ2V0LnBhcmVudE5vZGUpLGcuZmlsdGVyP2cuZmlsdGVyKGEsZik6YX0sc3BlY2lhbDp7bG9hZDp7bm9CdWJibGU6ITB9LGZvY3VzOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMhPT1fKCkmJnRoaXMuZm9jdXM/KHRoaXMuZm9jdXMoKSwhMSk6dm9pZCAwfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c2luXCJ9LGJsdXI6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcz09PV8oKSYmdGhpcy5ibHVyPyh0aGlzLmJsdXIoKSwhMSk6dm9pZCAwfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c291dFwifSxjbGljazp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVyblwiY2hlY2tib3hcIj09PXRoaXMudHlwZSYmdGhpcy5jbGljayYmbi5ub2RlTmFtZSh0aGlzLFwiaW5wdXRcIik/KHRoaXMuY2xpY2soKSwhMSk6dm9pZCAwfSxfZGVmYXVsdDpmdW5jdGlvbihhKXtyZXR1cm4gbi5ub2RlTmFtZShhLnRhcmdldCxcImFcIil9fSxiZWZvcmV1bmxvYWQ6e3Bvc3REaXNwYXRjaDpmdW5jdGlvbihhKXt2b2lkIDAhPT1hLnJlc3VsdCYmYS5vcmlnaW5hbEV2ZW50JiYoYS5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlPWEucmVzdWx0KX19fSxzaW11bGF0ZTpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1uLmV4dGVuZChuZXcgbi5FdmVudCxjLHt0eXBlOmEsaXNTaW11bGF0ZWQ6ITAsb3JpZ2luYWxFdmVudDp7fX0pO2Q/bi5ldmVudC50cmlnZ2VyKGUsbnVsbCxiKTpuLmV2ZW50LmRpc3BhdGNoLmNhbGwoYixlKSxlLmlzRGVmYXVsdFByZXZlbnRlZCgpJiZjLnByZXZlbnREZWZhdWx0KCl9fSxuLnJlbW92ZUV2ZW50PWZ1bmN0aW9uKGEsYixjKXthLnJlbW92ZUV2ZW50TGlzdGVuZXImJmEucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGMsITEpfSxuLkV2ZW50PWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBuLkV2ZW50PyhhJiZhLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1hLHRoaXMudHlwZT1hLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9YS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1hLmRlZmF1bHRQcmV2ZW50ZWQmJmEucmV0dXJuVmFsdWU9PT0hMT9aOiQpOnRoaXMudHlwZT1hLGImJm4uZXh0ZW5kKHRoaXMsYiksdGhpcy50aW1lU3RhbXA9YSYmYS50aW1lU3RhbXB8fG4ubm93KCksdm9pZCh0aGlzW24uZXhwYW5kb109ITApKTpuZXcgbi5FdmVudChhLGIpfSxuLkV2ZW50LnByb3RvdHlwZT17aXNEZWZhdWx0UHJldmVudGVkOiQsaXNQcm9wYWdhdGlvblN0b3BwZWQ6JCxpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDokLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPVosYSYmYS5wcmV2ZW50RGVmYXVsdCYmYS5wcmV2ZW50RGVmYXVsdCgpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1aLGEmJmEuc3RvcFByb3BhZ2F0aW9uJiZhLnN0b3BQcm9wYWdhdGlvbigpfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD1aLGEmJmEuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uJiZhLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSxuLmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sZnVuY3Rpb24oYSxiKXtuLmV2ZW50LnNwZWNpYWxbYV09e2RlbGVnYXRlVHlwZTpiLGJpbmRUeXBlOmIsaGFuZGxlOmZ1bmN0aW9uKGEpe3ZhciBjLGQ9dGhpcyxlPWEucmVsYXRlZFRhcmdldCxmPWEuaGFuZGxlT2JqO3JldHVybighZXx8ZSE9PWQmJiFuLmNvbnRhaW5zKGQsZSkpJiYoYS50eXBlPWYub3JpZ1R5cGUsYz1mLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGEudHlwZT1iKSxjfX19KSxrLmZvY3VzaW5CdWJibGVzfHxuLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPWZ1bmN0aW9uKGEpe24uZXZlbnQuc2ltdWxhdGUoYixhLnRhcmdldCxuLmV2ZW50LmZpeChhKSwhMCl9O24uZXZlbnQuc3BlY2lhbFtiXT17c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1MLmFjY2VzcyhkLGIpO2V8fGQuYWRkRXZlbnRMaXN0ZW5lcihhLGMsITApLEwuYWNjZXNzKGQsYiwoZXx8MCkrMSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9TC5hY2Nlc3MoZCxiKS0xO2U/TC5hY2Nlc3MoZCxiLGUpOihkLnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxjLCEwKSxMLnJlbW92ZShkLGIpKX19fSksbi5mbi5leHRlbmQoe29uOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZztpZihcIm9iamVjdFwiPT10eXBlb2YgYSl7XCJzdHJpbmdcIiE9dHlwZW9mIGImJihjPWN8fGIsYj12b2lkIDApO2ZvcihnIGluIGEpdGhpcy5vbihnLGIsYyxhW2ddLGUpO3JldHVybiB0aGlzfWlmKG51bGw9PWMmJm51bGw9PWQ/KGQ9YixjPWI9dm9pZCAwKTpudWxsPT1kJiYoXCJzdHJpbmdcIj09dHlwZW9mIGI/KGQ9YyxjPXZvaWQgMCk6KGQ9YyxjPWIsYj12b2lkIDApKSxkPT09ITEpZD0kO2Vsc2UgaWYoIWQpcmV0dXJuIHRoaXM7cmV0dXJuIDE9PT1lJiYoZj1kLGQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG4oKS5vZmYoYSksZi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGQuZ3VpZD1mLmd1aWR8fChmLmd1aWQ9bi5ndWlkKyspKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LmFkZCh0aGlzLGEsZCxjLGIpfSl9LG9uZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5vbihhLGIsYyxkLDEpfSxvZmY6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU7aWYoYSYmYS5wcmV2ZW50RGVmYXVsdCYmYS5oYW5kbGVPYmopcmV0dXJuIGQ9YS5oYW5kbGVPYmosbihhLmRlbGVnYXRlVGFyZ2V0KS5vZmYoZC5uYW1lc3BhY2U/ZC5vcmlnVHlwZStcIi5cIitkLm5hbWVzcGFjZTpkLm9yaWdUeXBlLGQuc2VsZWN0b3IsZC5oYW5kbGVyKSx0aGlzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhKXtmb3IoZSBpbiBhKXRoaXMub2ZmKGUsYixhW2VdKTtyZXR1cm4gdGhpc31yZXR1cm4oYj09PSExfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBiKSYmKGM9YixiPXZvaWQgMCksYz09PSExJiYoYz0kKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LnJlbW92ZSh0aGlzLGEsYyxiKX0pfSx0cmlnZ2VyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24uZXZlbnQudHJpZ2dlcihhLGIsdGhpcyl9KX0sdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzWzBdO3JldHVybiBjP24uZXZlbnQudHJpZ2dlcihhLGIsYywhMCk6dm9pZCAwfX0pO3ZhciBhYj0vPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbXFx3Ol0rKVtePl0qKVxcLz4vZ2ksYmI9LzwoW1xcdzpdKykvLGNiPS88fCYjP1xcdys7LyxkYj0vPCg/OnNjcmlwdHxzdHlsZXxsaW5rKS9pLGViPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksZmI9L14kfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaSxnYj0vXnRydWVcXC8oLiopLyxoYj0vXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2csaWI9e29wdGlvbjpbMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSx0aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpbMCxcIlwiLFwiXCJdfTtpYi5vcHRncm91cD1pYi5vcHRpb24saWIudGJvZHk9aWIudGZvb3Q9aWIuY29sZ3JvdXA9aWIuY2FwdGlvbj1pYi50aGVhZCxpYi50aD1pYi50ZDtmdW5jdGlvbiBqYihhLGIpe3JldHVybiBuLm5vZGVOYW1lKGEsXCJ0YWJsZVwiKSYmbi5ub2RlTmFtZSgxMSE9PWIubm9kZVR5cGU/YjpiLmZpcnN0Q2hpbGQsXCJ0clwiKT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGJvZHlcIilbMF18fGEuYXBwZW5kQ2hpbGQoYS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKSk6YX1mdW5jdGlvbiBrYihhKXtyZXR1cm4gYS50eXBlPShudWxsIT09YS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKStcIi9cIithLnR5cGUsYX1mdW5jdGlvbiBsYihhKXt2YXIgYj1nYi5leGVjKGEudHlwZSk7cmV0dXJuIGI/YS50eXBlPWJbMV06YS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGF9ZnVuY3Rpb24gbWIoYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2Q+YztjKyspTC5zZXQoYVtjXSxcImdsb2JhbEV2YWxcIiwhYnx8TC5nZXQoYltjXSxcImdsb2JhbEV2YWxcIikpfWZ1bmN0aW9uIG5iKGEsYil7dmFyIGMsZCxlLGYsZyxoLGksajtpZigxPT09Yi5ub2RlVHlwZSl7aWYoTC5oYXNEYXRhKGEpJiYoZj1MLmFjY2VzcyhhKSxnPUwuc2V0KGIsZiksaj1mLmV2ZW50cykpe2RlbGV0ZSBnLmhhbmRsZSxnLmV2ZW50cz17fTtmb3IoZSBpbiBqKWZvcihjPTAsZD1qW2VdLmxlbmd0aDtkPmM7YysrKW4uZXZlbnQuYWRkKGIsZSxqW2VdW2NdKX1NLmhhc0RhdGEoYSkmJihoPU0uYWNjZXNzKGEpLGk9bi5leHRlbmQoe30saCksTS5zZXQoYixpKSl9fWZ1bmN0aW9uIG9iKGEsYil7dmFyIGM9YS5nZXRFbGVtZW50c0J5VGFnTmFtZT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKGJ8fFwiKlwiKTphLnF1ZXJ5U2VsZWN0b3JBbGw/YS5xdWVyeVNlbGVjdG9yQWxsKGJ8fFwiKlwiKTpbXTtyZXR1cm4gdm9pZCAwPT09Ynx8YiYmbi5ub2RlTmFtZShhLGIpP24ubWVyZ2UoW2FdLGMpOmN9ZnVuY3Rpb24gcGIoYSxiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XCJpbnB1dFwiPT09YyYmVC50ZXN0KGEudHlwZSk/Yi5jaGVja2VkPWEuY2hlY2tlZDooXCJpbnB1dFwiPT09Y3x8XCJ0ZXh0YXJlYVwiPT09YykmJihiLmRlZmF1bHRWYWx1ZT1hLmRlZmF1bHRWYWx1ZSl9bi5leHRlbmQoe2Nsb25lOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY2xvbmVOb2RlKCEwKSxpPW4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpO2lmKCEoay5ub0Nsb25lQ2hlY2tlZHx8MSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZXx8bi5pc1hNTERvYyhhKSkpZm9yKGc9b2IoaCksZj1vYihhKSxkPTAsZT1mLmxlbmd0aDtlPmQ7ZCsrKXBiKGZbZF0sZ1tkXSk7aWYoYilpZihjKWZvcihmPWZ8fG9iKGEpLGc9Z3x8b2IoaCksZD0wLGU9Zi5sZW5ndGg7ZT5kO2QrKyluYihmW2RdLGdbZF0pO2Vsc2UgbmIoYSxoKTtyZXR1cm4gZz1vYihoLFwic2NyaXB0XCIpLGcubGVuZ3RoPjAmJm1iKGcsIWkmJm9iKGEsXCJzY3JpcHRcIikpLGh9LGJ1aWxkRnJhZ21lbnQ6ZnVuY3Rpb24oYSxiLGMsZCl7Zm9yKHZhciBlLGYsZyxoLGksaixrPWIuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLGw9W10sbT0wLG89YS5sZW5ndGg7bz5tO20rKylpZihlPWFbbV0sZXx8MD09PWUpaWYoXCJvYmplY3RcIj09PW4udHlwZShlKSluLm1lcmdlKGwsZS5ub2RlVHlwZT9bZV06ZSk7ZWxzZSBpZihjYi50ZXN0KGUpKXtmPWZ8fGsuYXBwZW5kQ2hpbGQoYi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxnPShiYi5leGVjKGUpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKSxoPWliW2ddfHxpYi5fZGVmYXVsdCxmLmlubmVySFRNTD1oWzFdK2UucmVwbGFjZShhYixcIjwkMT48LyQyPlwiKStoWzJdLGo9aFswXTt3aGlsZShqLS0pZj1mLmxhc3RDaGlsZDtuLm1lcmdlKGwsZi5jaGlsZE5vZGVzKSxmPWsuZmlyc3RDaGlsZCxmLnRleHRDb250ZW50PVwiXCJ9ZWxzZSBsLnB1c2goYi5jcmVhdGVUZXh0Tm9kZShlKSk7ay50ZXh0Q29udGVudD1cIlwiLG09MDt3aGlsZShlPWxbbSsrXSlpZigoIWR8fC0xPT09bi5pbkFycmF5KGUsZCkpJiYoaT1uLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKSxmPW9iKGsuYXBwZW5kQ2hpbGQoZSksXCJzY3JpcHRcIiksaSYmbWIoZiksYykpe2o9MDt3aGlsZShlPWZbaisrXSlmYi50ZXN0KGUudHlwZXx8XCJcIikmJmMucHVzaChlKX1yZXR1cm4ga30sY2xlYW5EYXRhOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjLGQsZSxmPW4uZXZlbnQuc3BlY2lhbCxnPTA7dm9pZCAwIT09KGM9YVtnXSk7ZysrKXtpZihuLmFjY2VwdERhdGEoYykmJihlPWNbTC5leHBhbmRvXSxlJiYoYj1MLmNhY2hlW2VdKSkpe2lmKGIuZXZlbnRzKWZvcihkIGluIGIuZXZlbnRzKWZbZF0/bi5ldmVudC5yZW1vdmUoYyxkKTpuLnJlbW92ZUV2ZW50KGMsZCxiLmhhbmRsZSk7TC5jYWNoZVtlXSYmZGVsZXRlIEwuY2FjaGVbZV19ZGVsZXRlIE0uY2FjaGVbY1tNLmV4cGFuZG9dXX19fSksbi5mbi5leHRlbmQoe3RleHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIEoodGhpcyxmdW5jdGlvbihhKXtyZXR1cm4gdm9pZCAwPT09YT9uLnRleHQodGhpcyk6dGhpcy5lbXB0eSgpLmVhY2goZnVuY3Rpb24oKXsoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpJiYodGhpcy50ZXh0Q29udGVudD1hKX0pfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LGFwcGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9amIodGhpcyxhKTtiLmFwcGVuZENoaWxkKGEpfX0pfSxwcmVwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1qYih0aGlzLGEpO2IuaW5zZXJ0QmVmb3JlKGEsYi5maXJzdENoaWxkKX19KX0sYmVmb3JlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMpfSl9LGFmdGVyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMubmV4dFNpYmxpbmcpfSl9LHJlbW92ZTpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYyxkPWE/bi5maWx0ZXIoYSx0aGlzKTp0aGlzLGU9MDtudWxsIT0oYz1kW2VdKTtlKyspYnx8MSE9PWMubm9kZVR5cGV8fG4uY2xlYW5EYXRhKG9iKGMpKSxjLnBhcmVudE5vZGUmJihiJiZuLmNvbnRhaW5zKGMub3duZXJEb2N1bWVudCxjKSYmbWIob2IoYyxcInNjcmlwdFwiKSksYy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGMpKTtyZXR1cm4gdGhpc30sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGEsYj0wO251bGwhPShhPXRoaXNbYl0pO2IrKykxPT09YS5ub2RlVHlwZSYmKG4uY2xlYW5EYXRhKG9iKGEsITEpKSxhLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihhLGIpe3JldHVybiBhPW51bGw9PWE/ITE6YSxiPW51bGw9PWI/YTpiLHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIG4uY2xvbmUodGhpcyxhLGIpfSl9LGh0bWw6ZnVuY3Rpb24oYSl7cmV0dXJuIEoodGhpcyxmdW5jdGlvbihhKXt2YXIgYj10aGlzWzBdfHx7fSxjPTAsZD10aGlzLmxlbmd0aDtpZih2b2lkIDA9PT1hJiYxPT09Yi5ub2RlVHlwZSlyZXR1cm4gYi5pbm5lckhUTUw7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJiFkYi50ZXN0KGEpJiYhaWJbKGJiLmV4ZWMoYSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXSl7YT1hLnJlcGxhY2UoYWIsXCI8JDE+PC8kMj5cIik7dHJ5e2Zvcig7ZD5jO2MrKyliPXRoaXNbY118fHt9LDE9PT1iLm5vZGVUeXBlJiYobi5jbGVhbkRhdGEob2IoYiwhMSkpLGIuaW5uZXJIVE1MPWEpO2I9MH1jYXRjaChlKXt9fWImJnRoaXMuZW1wdHkoKS5hcHBlbmQoYSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oKXt2YXIgYT1hcmd1bWVudHNbMF07cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGIpe2E9dGhpcy5wYXJlbnROb2RlLG4uY2xlYW5EYXRhKG9iKHRoaXMpKSxhJiZhLnJlcGxhY2VDaGlsZChiLHRoaXMpfSksYSYmKGEubGVuZ3RofHxhLm5vZGVUeXBlKT90aGlzOnRoaXMucmVtb3ZlKCl9LGRldGFjaDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5yZW1vdmUoYSwhMCl9LGRvbU1hbmlwOmZ1bmN0aW9uKGEsYil7YT1lLmFwcGx5KFtdLGEpO3ZhciBjLGQsZixnLGgsaSxqPTAsbD10aGlzLmxlbmd0aCxtPXRoaXMsbz1sLTEscD1hWzBdLHE9bi5pc0Z1bmN0aW9uKHApO2lmKHF8fGw+MSYmXCJzdHJpbmdcIj09dHlwZW9mIHAmJiFrLmNoZWNrQ2xvbmUmJmViLnRlc3QocCkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihjKXt2YXIgZD1tLmVxKGMpO3EmJihhWzBdPXAuY2FsbCh0aGlzLGMsZC5odG1sKCkpKSxkLmRvbU1hbmlwKGEsYil9KTtpZihsJiYoYz1uLmJ1aWxkRnJhZ21lbnQoYSx0aGlzWzBdLm93bmVyRG9jdW1lbnQsITEsdGhpcyksZD1jLmZpcnN0Q2hpbGQsMT09PWMuY2hpbGROb2Rlcy5sZW5ndGgmJihjPWQpLGQpKXtmb3IoZj1uLm1hcChvYihjLFwic2NyaXB0XCIpLGtiKSxnPWYubGVuZ3RoO2w+ajtqKyspaD1jLGohPT1vJiYoaD1uLmNsb25lKGgsITAsITApLGcmJm4ubWVyZ2UoZixvYihoLFwic2NyaXB0XCIpKSksYi5jYWxsKHRoaXNbal0saCxqKTtpZihnKWZvcihpPWZbZi5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxuLm1hcChmLGxiKSxqPTA7Zz5qO2orKyloPWZbal0sZmIudGVzdChoLnR5cGV8fFwiXCIpJiYhTC5hY2Nlc3MoaCxcImdsb2JhbEV2YWxcIikmJm4uY29udGFpbnMoaSxoKSYmKGguc3JjP24uX2V2YWxVcmwmJm4uX2V2YWxVcmwoaC5zcmMpOm4uZ2xvYmFsRXZhbChoLnRleHRDb250ZW50LnJlcGxhY2UoaGIsXCJcIikpKX1yZXR1cm4gdGhpc319KSxuLmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oYSxiKXtuLmZuW2FdPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxkPVtdLGU9bihhKSxnPWUubGVuZ3RoLTEsaD0wO2c+PWg7aCsrKWM9aD09PWc/dGhpczp0aGlzLmNsb25lKCEwKSxuKGVbaF0pW2JdKGMpLGYuYXBwbHkoZCxjLmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZCl9fSk7dmFyIHFiLHJiPXt9O2Z1bmN0aW9uIHNiKGIsYyl7dmFyIGQsZT1uKGMuY3JlYXRlRWxlbWVudChiKSkuYXBwZW5kVG8oYy5ib2R5KSxmPWEuZ2V0RGVmYXVsdENvbXB1dGVkU3R5bGUmJihkPWEuZ2V0RGVmYXVsdENvbXB1dGVkU3R5bGUoZVswXSkpP2QuZGlzcGxheTpuLmNzcyhlWzBdLFwiZGlzcGxheVwiKTtyZXR1cm4gZS5kZXRhY2goKSxmfWZ1bmN0aW9uIHRiKGEpe3ZhciBiPWwsYz1yYlthXTtyZXR1cm4gY3x8KGM9c2IoYSxiKSxcIm5vbmVcIiE9PWMmJmN8fChxYj0ocWJ8fG4oXCI8aWZyYW1lIGZyYW1lYm9yZGVyPScwJyB3aWR0aD0nMCcgaGVpZ2h0PScwJy8+XCIpKS5hcHBlbmRUbyhiLmRvY3VtZW50RWxlbWVudCksYj1xYlswXS5jb250ZW50RG9jdW1lbnQsYi53cml0ZSgpLGIuY2xvc2UoKSxjPXNiKGEsYikscWIuZGV0YWNoKCkpLHJiW2FdPWMpLGN9dmFyIHViPS9ebWFyZ2luLyx2Yj1uZXcgUmVnRXhwKFwiXihcIitRK1wiKSg/IXB4KVthLXolXSskXCIsXCJpXCIpLHdiPWZ1bmN0aW9uKGEpe3JldHVybiBhLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShhLG51bGwpfTtmdW5jdGlvbiB4YihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLnN0eWxlO3JldHVybiBjPWN8fHdiKGEpLGMmJihnPWMuZ2V0UHJvcGVydHlWYWx1ZShiKXx8Y1tiXSksYyYmKFwiXCIhPT1nfHxuLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKXx8KGc9bi5zdHlsZShhLGIpKSx2Yi50ZXN0KGcpJiZ1Yi50ZXN0KGIpJiYoZD1oLndpZHRoLGU9aC5taW5XaWR0aCxmPWgubWF4V2lkdGgsaC5taW5XaWR0aD1oLm1heFdpZHRoPWgud2lkdGg9ZyxnPWMud2lkdGgsaC53aWR0aD1kLGgubWluV2lkdGg9ZSxoLm1heFdpZHRoPWYpKSx2b2lkIDAhPT1nP2crXCJcIjpnfWZ1bmN0aW9uIHliKGEsYil7cmV0dXJue2dldDpmdW5jdGlvbigpe3JldHVybiBhKCk/dm9pZCBkZWxldGUgdGhpcy5nZXQ6KHRoaXMuZ2V0PWIpLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fSFmdW5jdGlvbigpe3ZhciBiLGMsZD1sLmRvY3VtZW50RWxlbWVudCxlPWwuY3JlYXRlRWxlbWVudChcImRpdlwiKSxmPWwuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZihmLnN0eWxlKXtmLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiY29udGVudC1ib3hcIixmLmNsb25lTm9kZSghMCkuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJcIixrLmNsZWFyQ2xvbmVTdHlsZT1cImNvbnRlbnQtYm94XCI9PT1mLnN0eWxlLmJhY2tncm91bmRDbGlwLGUuc3R5bGUuY3NzVGV4dD1cImJvcmRlcjowO3dpZHRoOjA7aGVpZ2h0OjA7dG9wOjA7bGVmdDotOTk5OXB4O21hcmdpbi10b3A6MXB4O3Bvc2l0aW9uOmFic29sdXRlXCIsZS5hcHBlbmRDaGlsZChmKTtmdW5jdGlvbiBnKCl7Zi5zdHlsZS5jc3NUZXh0PVwiLXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDoxJTt0b3A6MSU7Ym9yZGVyOjFweDtwYWRkaW5nOjFweDt3aWR0aDo0cHg7cG9zaXRpb246YWJzb2x1dGVcIixmLmlubmVySFRNTD1cIlwiLGQuYXBwZW5kQ2hpbGQoZSk7dmFyIGc9YS5nZXRDb21wdXRlZFN0eWxlKGYsbnVsbCk7Yj1cIjElXCIhPT1nLnRvcCxjPVwiNHB4XCI9PT1nLndpZHRoLGQucmVtb3ZlQ2hpbGQoZSl9YS5nZXRDb21wdXRlZFN0eWxlJiZuLmV4dGVuZChrLHtwaXhlbFBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIGcoKSxifSxib3hTaXppbmdSZWxpYWJsZTpmdW5jdGlvbigpe3JldHVybiBudWxsPT1jJiZnKCksY30scmVsaWFibGVNYXJnaW5SaWdodDpmdW5jdGlvbigpe3ZhciBiLGM9Zi5hcHBlbmRDaGlsZChsLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO3JldHVybiBjLnN0eWxlLmNzc1RleHQ9Zi5zdHlsZS5jc3NUZXh0PVwiLXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94Oy1tb3otYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjA7Ym9yZGVyOjA7cGFkZGluZzowXCIsYy5zdHlsZS5tYXJnaW5SaWdodD1jLnN0eWxlLndpZHRoPVwiMFwiLGYuc3R5bGUud2lkdGg9XCIxcHhcIixkLmFwcGVuZENoaWxkKGUpLGI9IXBhcnNlRmxvYXQoYS5nZXRDb21wdXRlZFN0eWxlKGMsbnVsbCkubWFyZ2luUmlnaHQpLGQucmVtb3ZlQ2hpbGQoZSksYn19KX19KCksbi5zd2FwPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZz17fTtmb3IoZiBpbiBiKWdbZl09YS5zdHlsZVtmXSxhLnN0eWxlW2ZdPWJbZl07ZT1jLmFwcGx5KGEsZHx8W10pO2ZvcihmIGluIGIpYS5zdHlsZVtmXT1nW2ZdO3JldHVybiBlfTt2YXIgemI9L14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLEFiPW5ldyBSZWdFeHAoXCJeKFwiK1ErXCIpKC4qKSRcIixcImlcIiksQmI9bmV3IFJlZ0V4cChcIl4oWystXSk9KFwiK1ErXCIpXCIsXCJpXCIpLENiPXtwb3NpdGlvbjpcImFic29sdXRlXCIsdmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSxEYj17bGV0dGVyU3BhY2luZzpcIjBcIixmb250V2VpZ2h0OlwiNDAwXCJ9LEViPVtcIldlYmtpdFwiLFwiT1wiLFwiTW96XCIsXCJtc1wiXTtmdW5jdGlvbiBGYihhLGIpe2lmKGIgaW4gYSlyZXR1cm4gYjt2YXIgYz1iWzBdLnRvVXBwZXJDYXNlKCkrYi5zbGljZSgxKSxkPWIsZT1FYi5sZW5ndGg7d2hpbGUoZS0tKWlmKGI9RWJbZV0rYyxiIGluIGEpcmV0dXJuIGI7cmV0dXJuIGR9ZnVuY3Rpb24gR2IoYSxiLGMpe3ZhciBkPUFiLmV4ZWMoYik7cmV0dXJuIGQ/TWF0aC5tYXgoMCxkWzFdLShjfHwwKSkrKGRbMl18fFwicHhcIik6Yn1mdW5jdGlvbiBIYihhLGIsYyxkLGUpe2Zvcih2YXIgZj1jPT09KGQ/XCJib3JkZXJcIjpcImNvbnRlbnRcIik/NDpcIndpZHRoXCI9PT1iPzE6MCxnPTA7ND5mO2YrPTIpXCJtYXJnaW5cIj09PWMmJihnKz1uLmNzcyhhLGMrUltmXSwhMCxlKSksZD8oXCJjb250ZW50XCI9PT1jJiYoZy09bi5jc3MoYSxcInBhZGRpbmdcIitSW2ZdLCEwLGUpKSxcIm1hcmdpblwiIT09YyYmKGctPW4uY3NzKGEsXCJib3JkZXJcIitSW2ZdK1wiV2lkdGhcIiwhMCxlKSkpOihnKz1uLmNzcyhhLFwicGFkZGluZ1wiK1JbZl0sITAsZSksXCJwYWRkaW5nXCIhPT1jJiYoZys9bi5jc3MoYSxcImJvcmRlclwiK1JbZl0rXCJXaWR0aFwiLCEwLGUpKSk7cmV0dXJuIGd9ZnVuY3Rpb24gSWIoYSxiLGMpe3ZhciBkPSEwLGU9XCJ3aWR0aFwiPT09Yj9hLm9mZnNldFdpZHRoOmEub2Zmc2V0SGVpZ2h0LGY9d2IoYSksZz1cImJvcmRlci1ib3hcIj09PW4uY3NzKGEsXCJib3hTaXppbmdcIiwhMSxmKTtpZigwPj1lfHxudWxsPT1lKXtpZihlPXhiKGEsYixmKSwoMD5lfHxudWxsPT1lKSYmKGU9YS5zdHlsZVtiXSksdmIudGVzdChlKSlyZXR1cm4gZTtkPWcmJihrLmJveFNpemluZ1JlbGlhYmxlKCl8fGU9PT1hLnN0eWxlW2JdKSxlPXBhcnNlRmxvYXQoZSl8fDB9cmV0dXJuIGUrSGIoYSxiLGN8fChnP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpLGQsZikrXCJweFwifWZ1bmN0aW9uIEpiKGEsYil7Zm9yKHZhciBjLGQsZSxmPVtdLGc9MCxoPWEubGVuZ3RoO2g+ZztnKyspZD1hW2ddLGQuc3R5bGUmJihmW2ddPUwuZ2V0KGQsXCJvbGRkaXNwbGF5XCIpLGM9ZC5zdHlsZS5kaXNwbGF5LGI/KGZbZ118fFwibm9uZVwiIT09Y3x8KGQuc3R5bGUuZGlzcGxheT1cIlwiKSxcIlwiPT09ZC5zdHlsZS5kaXNwbGF5JiZTKGQpJiYoZltnXT1MLmFjY2VzcyhkLFwib2xkZGlzcGxheVwiLHRiKGQubm9kZU5hbWUpKSkpOihlPVMoZCksXCJub25lXCI9PT1jJiZlfHxMLnNldChkLFwib2xkZGlzcGxheVwiLGU/YzpuLmNzcyhkLFwiZGlzcGxheVwiKSkpKTtmb3IoZz0wO2g+ZztnKyspZD1hW2ddLGQuc3R5bGUmJihiJiZcIm5vbmVcIiE9PWQuc3R5bGUuZGlzcGxheSYmXCJcIiE9PWQuc3R5bGUuZGlzcGxheXx8KGQuc3R5bGUuZGlzcGxheT1iP2ZbZ118fFwiXCI6XCJub25lXCIpKTtyZXR1cm4gYX1uLmV4dGVuZCh7Y3NzSG9va3M6e29wYWNpdHk6e2dldDpmdW5jdGlvbihhLGIpe2lmKGIpe3ZhciBjPXhiKGEsXCJvcGFjaXR5XCIpO3JldHVyblwiXCI9PT1jP1wiMVwiOmN9fX19LGNzc051bWJlcjp7Y29sdW1uQ291bnQ6ITAsZmlsbE9wYWNpdHk6ITAsZmxleEdyb3c6ITAsZmxleFNocmluazohMCxmb250V2VpZ2h0OiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMH0sY3NzUHJvcHM6e1wiZmxvYXRcIjpcImNzc0Zsb2F0XCJ9LHN0eWxlOmZ1bmN0aW9uKGEsYixjLGQpe2lmKGEmJjMhPT1hLm5vZGVUeXBlJiY4IT09YS5ub2RlVHlwZSYmYS5zdHlsZSl7dmFyIGUsZixnLGg9bi5jYW1lbENhc2UoYiksaT1hLnN0eWxlO3JldHVybiBiPW4uY3NzUHJvcHNbaF18fChuLmNzc1Byb3BzW2hdPUZiKGksaCkpLGc9bi5jc3NIb29rc1tiXXx8bi5jc3NIb29rc1toXSx2b2lkIDA9PT1jP2cmJlwiZ2V0XCJpbiBnJiZ2b2lkIDAhPT0oZT1nLmdldChhLCExLGQpKT9lOmlbYl06KGY9dHlwZW9mIGMsXCJzdHJpbmdcIj09PWYmJihlPUJiLmV4ZWMoYykpJiYoYz0oZVsxXSsxKSplWzJdK3BhcnNlRmxvYXQobi5jc3MoYSxiKSksZj1cIm51bWJlclwiKSxudWxsIT1jJiZjPT09YyYmKFwibnVtYmVyXCIhPT1mfHxuLmNzc051bWJlcltoXXx8KGMrPVwicHhcIiksay5jbGVhckNsb25lU3R5bGV8fFwiXCIhPT1jfHwwIT09Yi5pbmRleE9mKFwiYmFja2dyb3VuZFwiKXx8KGlbYl09XCJpbmhlcml0XCIpLGcmJlwic2V0XCJpbiBnJiZ2b2lkIDA9PT0oYz1nLnNldChhLGMsZCkpfHwoaVtiXT1jKSksdm9pZCAwKX19LGNzczpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGcsaD1uLmNhbWVsQ2FzZShiKTtyZXR1cm4gYj1uLmNzc1Byb3BzW2hdfHwobi5jc3NQcm9wc1toXT1GYihhLnN0eWxlLGgpKSxnPW4uY3NzSG9va3NbYl18fG4uY3NzSG9va3NbaF0sZyYmXCJnZXRcImluIGcmJihlPWcuZ2V0KGEsITAsYykpLHZvaWQgMD09PWUmJihlPXhiKGEsYixkKSksXCJub3JtYWxcIj09PWUmJmIgaW4gRGImJihlPURiW2JdKSxcIlwiPT09Y3x8Yz8oZj1wYXJzZUZsb2F0KGUpLGM9PT0hMHx8bi5pc051bWVyaWMoZik/Znx8MDplKTplfX0pLG4uZWFjaChbXCJoZWlnaHRcIixcIndpZHRoXCJdLGZ1bmN0aW9uKGEsYil7bi5jc3NIb29rc1tiXT17Z2V0OmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gYz96Yi50ZXN0KG4uY3NzKGEsXCJkaXNwbGF5XCIpKSYmMD09PWEub2Zmc2V0V2lkdGg/bi5zd2FwKGEsQ2IsZnVuY3Rpb24oKXtyZXR1cm4gSWIoYSxiLGQpfSk6SWIoYSxiLGQpOnZvaWQgMH0sc2V0OmZ1bmN0aW9uKGEsYyxkKXt2YXIgZT1kJiZ3YihhKTtyZXR1cm4gR2IoYSxjLGQ/SGIoYSxiLGQsXCJib3JkZXItYm94XCI9PT1uLmNzcyhhLFwiYm94U2l6aW5nXCIsITEsZSksZSk6MCl9fX0pLG4uY3NzSG9va3MubWFyZ2luUmlnaHQ9eWIoay5yZWxpYWJsZU1hcmdpblJpZ2h0LGZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/bi5zd2FwKGEse2Rpc3BsYXk6XCJpbmxpbmUtYmxvY2tcIn0seGIsW2EsXCJtYXJnaW5SaWdodFwiXSk6dm9pZCAwfSksbi5lYWNoKHttYXJnaW46XCJcIixwYWRkaW5nOlwiXCIsYm9yZGVyOlwiV2lkdGhcIn0sZnVuY3Rpb24oYSxiKXtuLmNzc0hvb2tzW2ErYl09e2V4cGFuZDpmdW5jdGlvbihjKXtmb3IodmFyIGQ9MCxlPXt9LGY9XCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5zcGxpdChcIiBcIik6W2NdOzQ+ZDtkKyspZVthK1JbZF0rYl09ZltkXXx8ZltkLTJdfHxmWzBdO3JldHVybiBlfX0sdWIudGVzdChhKXx8KG4uY3NzSG9va3NbYStiXS5zZXQ9R2IpfSksbi5mbi5leHRlbmQoe2NzczpmdW5jdGlvbihhLGIpe3JldHVybiBKKHRoaXMsZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj17fSxnPTA7aWYobi5pc0FycmF5KGIpKXtmb3IoZD13YihhKSxlPWIubGVuZ3RoO2U+ZztnKyspZltiW2ddXT1uLmNzcyhhLGJbZ10sITEsZCk7cmV0dXJuIGZ9cmV0dXJuIHZvaWQgMCE9PWM/bi5zdHlsZShhLGIsYyk6bi5jc3MoYSxiKX0sYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHNob3c6ZnVuY3Rpb24oKXtyZXR1cm4gSmIodGhpcywhMCl9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gSmIodGhpcyl9LHRvZ2dsZTpmdW5jdGlvbihhKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGE/YT90aGlzLnNob3coKTp0aGlzLmhpZGUoKTp0aGlzLmVhY2goZnVuY3Rpb24oKXtTKHRoaXMpP24odGhpcykuc2hvdygpOm4odGhpcykuaGlkZSgpfSl9fSk7ZnVuY3Rpb24gS2IoYSxiLGMsZCxlKXtyZXR1cm4gbmV3IEtiLnByb3RvdHlwZS5pbml0KGEsYixjLGQsZSl9bi5Ud2Vlbj1LYixLYi5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOktiLGluaXQ6ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3RoaXMuZWxlbT1hLHRoaXMucHJvcD1jLHRoaXMuZWFzaW5nPWV8fFwic3dpbmdcIix0aGlzLm9wdGlvbnM9Yix0aGlzLnN0YXJ0PXRoaXMubm93PXRoaXMuY3VyKCksdGhpcy5lbmQ9ZCx0aGlzLnVuaXQ9Znx8KG4uY3NzTnVtYmVyW2NdP1wiXCI6XCJweFwiKX0sY3VyOmZ1bmN0aW9uKCl7dmFyIGE9S2IucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIGEmJmEuZ2V0P2EuZ2V0KHRoaXMpOktiLnByb3BIb29rcy5fZGVmYXVsdC5nZXQodGhpcyl9LHJ1bjpmdW5jdGlvbihhKXt2YXIgYixjPUtiLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiB0aGlzLnBvcz1iPXRoaXMub3B0aW9ucy5kdXJhdGlvbj9uLmVhc2luZ1t0aGlzLmVhc2luZ10oYSx0aGlzLm9wdGlvbnMuZHVyYXRpb24qYSwwLDEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKTphLHRoaXMubm93PSh0aGlzLmVuZC10aGlzLnN0YXJ0KSpiK3RoaXMuc3RhcnQsdGhpcy5vcHRpb25zLnN0ZXAmJnRoaXMub3B0aW9ucy5zdGVwLmNhbGwodGhpcy5lbGVtLHRoaXMubm93LHRoaXMpLGMmJmMuc2V0P2Muc2V0KHRoaXMpOktiLnByb3BIb29rcy5fZGVmYXVsdC5zZXQodGhpcyksdGhpc319LEtiLnByb3RvdHlwZS5pbml0LnByb3RvdHlwZT1LYi5wcm90b3R5cGUsS2IucHJvcEhvb2tzPXtfZGVmYXVsdDp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiBudWxsPT1hLmVsZW1bYS5wcm9wXXx8YS5lbGVtLnN0eWxlJiZudWxsIT1hLmVsZW0uc3R5bGVbYS5wcm9wXT8oYj1uLmNzcyhhLmVsZW0sYS5wcm9wLFwiXCIpLGImJlwiYXV0b1wiIT09Yj9iOjApOmEuZWxlbVthLnByb3BdfSxzZXQ6ZnVuY3Rpb24oYSl7bi5meC5zdGVwW2EucHJvcF0/bi5meC5zdGVwW2EucHJvcF0oYSk6YS5lbGVtLnN0eWxlJiYobnVsbCE9YS5lbGVtLnN0eWxlW24uY3NzUHJvcHNbYS5wcm9wXV18fG4uY3NzSG9va3NbYS5wcm9wXSk/bi5zdHlsZShhLmVsZW0sYS5wcm9wLGEubm93K2EudW5pdCk6YS5lbGVtW2EucHJvcF09YS5ub3d9fX0sS2IucHJvcEhvb2tzLnNjcm9sbFRvcD1LYi5wcm9wSG9va3Muc2Nyb2xsTGVmdD17c2V0OmZ1bmN0aW9uKGEpe2EuZWxlbS5ub2RlVHlwZSYmYS5lbGVtLnBhcmVudE5vZGUmJihhLmVsZW1bYS5wcm9wXT1hLm5vdyl9fSxuLmVhc2luZz17bGluZWFyOmZ1bmN0aW9uKGEpe3JldHVybiBhfSxzd2luZzpmdW5jdGlvbihhKXtyZXR1cm4uNS1NYXRoLmNvcyhhKk1hdGguUEkpLzJ9fSxuLmZ4PUtiLnByb3RvdHlwZS5pbml0LG4uZnguc3RlcD17fTt2YXIgTGIsTWIsTmI9L14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLE9iPW5ldyBSZWdFeHAoXCJeKD86KFsrLV0pPXwpKFwiK1ErXCIpKFthLXolXSopJFwiLFwiaVwiKSxQYj0vcXVldWVIb29rcyQvLFFiPVtWYl0sUmI9e1wiKlwiOltmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuY3JlYXRlVHdlZW4oYSxiKSxkPWMuY3VyKCksZT1PYi5leGVjKGIpLGY9ZSYmZVszXXx8KG4uY3NzTnVtYmVyW2FdP1wiXCI6XCJweFwiKSxnPShuLmNzc051bWJlclthXXx8XCJweFwiIT09ZiYmK2QpJiZPYi5leGVjKG4uY3NzKGMuZWxlbSxhKSksaD0xLGk9MjA7aWYoZyYmZ1szXSE9PWYpe2Y9Znx8Z1szXSxlPWV8fFtdLGc9K2R8fDE7ZG8gaD1ofHxcIi41XCIsZy89aCxuLnN0eWxlKGMuZWxlbSxhLGcrZik7d2hpbGUoaCE9PShoPWMuY3VyKCkvZCkmJjEhPT1oJiYtLWkpfXJldHVybiBlJiYoZz1jLnN0YXJ0PStnfHwrZHx8MCxjLnVuaXQ9ZixjLmVuZD1lWzFdP2crKGVbMV0rMSkqZVsyXTorZVsyXSksY31dfTtmdW5jdGlvbiBTYigpe3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7TGI9dm9pZCAwfSksTGI9bi5ub3coKX1mdW5jdGlvbiBUYihhLGIpe3ZhciBjLGQ9MCxlPXtoZWlnaHQ6YX07Zm9yKGI9Yj8xOjA7ND5kO2QrPTItYiljPVJbZF0sZVtcIm1hcmdpblwiK2NdPWVbXCJwYWRkaW5nXCIrY109YTtyZXR1cm4gYiYmKGUub3BhY2l0eT1lLndpZHRoPWEpLGV9ZnVuY3Rpb24gVWIoYSxiLGMpe2Zvcih2YXIgZCxlPShSYltiXXx8W10pLmNvbmNhdChSYltcIipcIl0pLGY9MCxnPWUubGVuZ3RoO2c+ZjtmKyspaWYoZD1lW2ZdLmNhbGwoYyxiLGEpKXJldHVybiBkfWZ1bmN0aW9uIFZiKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixrLGw9dGhpcyxtPXt9LG89YS5zdHlsZSxwPWEubm9kZVR5cGUmJlMoYSkscT1MLmdldChhLFwiZnhzaG93XCIpO2MucXVldWV8fChoPW4uX3F1ZXVlSG9va3MoYSxcImZ4XCIpLG51bGw9PWgudW5xdWV1ZWQmJihoLnVucXVldWVkPTAsaT1oLmVtcHR5LmZpcmUsaC5lbXB0eS5maXJlPWZ1bmN0aW9uKCl7aC51bnF1ZXVlZHx8aSgpfSksaC51bnF1ZXVlZCsrLGwuYWx3YXlzKGZ1bmN0aW9uKCl7bC5hbHdheXMoZnVuY3Rpb24oKXtoLnVucXVldWVkLS0sbi5xdWV1ZShhLFwiZnhcIikubGVuZ3RofHxoLmVtcHR5LmZpcmUoKX0pfSkpLDE9PT1hLm5vZGVUeXBlJiYoXCJoZWlnaHRcImluIGJ8fFwid2lkdGhcImluIGIpJiYoYy5vdmVyZmxvdz1bby5vdmVyZmxvdyxvLm92ZXJmbG93WCxvLm92ZXJmbG93WV0saj1uLmNzcyhhLFwiZGlzcGxheVwiKSxrPVwibm9uZVwiPT09aj9MLmdldChhLFwib2xkZGlzcGxheVwiKXx8dGIoYS5ub2RlTmFtZSk6aixcImlubGluZVwiPT09ayYmXCJub25lXCI9PT1uLmNzcyhhLFwiZmxvYXRcIikmJihvLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIikpLGMub3ZlcmZsb3cmJihvLm92ZXJmbG93PVwiaGlkZGVuXCIsbC5hbHdheXMoZnVuY3Rpb24oKXtvLm92ZXJmbG93PWMub3ZlcmZsb3dbMF0sby5vdmVyZmxvd1g9Yy5vdmVyZmxvd1sxXSxvLm92ZXJmbG93WT1jLm92ZXJmbG93WzJdfSkpO2ZvcihkIGluIGIpaWYoZT1iW2RdLE5iLmV4ZWMoZSkpe2lmKGRlbGV0ZSBiW2RdLGY9Znx8XCJ0b2dnbGVcIj09PWUsZT09PShwP1wiaGlkZVwiOlwic2hvd1wiKSl7aWYoXCJzaG93XCIhPT1lfHwhcXx8dm9pZCAwPT09cVtkXSljb250aW51ZTtwPSEwfW1bZF09cSYmcVtkXXx8bi5zdHlsZShhLGQpfWVsc2Ugaj12b2lkIDA7aWYobi5pc0VtcHR5T2JqZWN0KG0pKVwiaW5saW5lXCI9PT0oXCJub25lXCI9PT1qP3RiKGEubm9kZU5hbWUpOmopJiYoby5kaXNwbGF5PWopO2Vsc2V7cT9cImhpZGRlblwiaW4gcSYmKHA9cS5oaWRkZW4pOnE9TC5hY2Nlc3MoYSxcImZ4c2hvd1wiLHt9KSxmJiYocS5oaWRkZW49IXApLHA/bihhKS5zaG93KCk6bC5kb25lKGZ1bmN0aW9uKCl7bihhKS5oaWRlKCl9KSxsLmRvbmUoZnVuY3Rpb24oKXt2YXIgYjtMLnJlbW92ZShhLFwiZnhzaG93XCIpO2ZvcihiIGluIG0pbi5zdHlsZShhLGIsbVtiXSl9KTtmb3IoZCBpbiBtKWc9VWIocD9xW2RdOjAsZCxsKSxkIGluIHF8fChxW2RdPWcuc3RhcnQscCYmKGcuZW5kPWcuc3RhcnQsZy5zdGFydD1cIndpZHRoXCI9PT1kfHxcImhlaWdodFwiPT09ZD8xOjApKX19ZnVuY3Rpb24gV2IoYSxiKXt2YXIgYyxkLGUsZixnO2ZvcihjIGluIGEpaWYoZD1uLmNhbWVsQ2FzZShjKSxlPWJbZF0sZj1hW2NdLG4uaXNBcnJheShmKSYmKGU9ZlsxXSxmPWFbY109ZlswXSksYyE9PWQmJihhW2RdPWYsZGVsZXRlIGFbY10pLGc9bi5jc3NIb29rc1tkXSxnJiZcImV4cGFuZFwiaW4gZyl7Zj1nLmV4cGFuZChmKSxkZWxldGUgYVtkXTtmb3IoYyBpbiBmKWMgaW4gYXx8KGFbY109ZltjXSxiW2NdPWUpfWVsc2UgYltkXT1lfWZ1bmN0aW9uIFhiKGEsYixjKXt2YXIgZCxlLGY9MCxnPVFiLmxlbmd0aCxoPW4uRGVmZXJyZWQoKS5hbHdheXMoZnVuY3Rpb24oKXtkZWxldGUgaS5lbGVtfSksaT1mdW5jdGlvbigpe2lmKGUpcmV0dXJuITE7Zm9yKHZhciBiPUxifHxTYigpLGM9TWF0aC5tYXgoMCxqLnN0YXJ0VGltZStqLmR1cmF0aW9uLWIpLGQ9Yy9qLmR1cmF0aW9ufHwwLGY9MS1kLGc9MCxpPWoudHdlZW5zLmxlbmd0aDtpPmc7ZysrKWoudHdlZW5zW2ddLnJ1bihmKTtyZXR1cm4gaC5ub3RpZnlXaXRoKGEsW2osZixjXSksMT5mJiZpP2M6KGgucmVzb2x2ZVdpdGgoYSxbal0pLCExKX0saj1oLnByb21pc2Uoe2VsZW06YSxwcm9wczpuLmV4dGVuZCh7fSxiKSxvcHRzOm4uZXh0ZW5kKCEwLHtzcGVjaWFsRWFzaW5nOnt9fSxjKSxvcmlnaW5hbFByb3BlcnRpZXM6YixvcmlnaW5hbE9wdGlvbnM6YyxzdGFydFRpbWU6TGJ8fFNiKCksZHVyYXRpb246Yy5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24oYixjKXt2YXIgZD1uLlR3ZWVuKGEsai5vcHRzLGIsYyxqLm9wdHMuc3BlY2lhbEVhc2luZ1tiXXx8ai5vcHRzLmVhc2luZyk7cmV0dXJuIGoudHdlZW5zLnB1c2goZCksZH0sc3RvcDpmdW5jdGlvbihiKXt2YXIgYz0wLGQ9Yj9qLnR3ZWVucy5sZW5ndGg6MDtpZihlKXJldHVybiB0aGlzO2ZvcihlPSEwO2Q+YztjKyspai50d2VlbnNbY10ucnVuKDEpO3JldHVybiBiP2gucmVzb2x2ZVdpdGgoYSxbaixiXSk6aC5yZWplY3RXaXRoKGEsW2osYl0pLHRoaXN9fSksaz1qLnByb3BzO2ZvcihXYihrLGoub3B0cy5zcGVjaWFsRWFzaW5nKTtnPmY7ZisrKWlmKGQ9UWJbZl0uY2FsbChqLGEsayxqLm9wdHMpKXJldHVybiBkO3JldHVybiBuLm1hcChrLFViLGopLG4uaXNGdW5jdGlvbihqLm9wdHMuc3RhcnQpJiZqLm9wdHMuc3RhcnQuY2FsbChhLGopLG4uZngudGltZXIobi5leHRlbmQoaSx7ZWxlbTphLGFuaW06aixxdWV1ZTpqLm9wdHMucXVldWV9KSksai5wcm9ncmVzcyhqLm9wdHMucHJvZ3Jlc3MpLmRvbmUoai5vcHRzLmRvbmUsai5vcHRzLmNvbXBsZXRlKS5mYWlsKGoub3B0cy5mYWlsKS5hbHdheXMoai5vcHRzLmFsd2F5cyl9bi5BbmltYXRpb249bi5leHRlbmQoWGIse3R3ZWVuZXI6ZnVuY3Rpb24oYSxiKXtuLmlzRnVuY3Rpb24oYSk/KGI9YSxhPVtcIipcIl0pOmE9YS5zcGxpdChcIiBcIik7Zm9yKHZhciBjLGQ9MCxlPWEubGVuZ3RoO2U+ZDtkKyspYz1hW2RdLFJiW2NdPVJiW2NdfHxbXSxSYltjXS51bnNoaWZ0KGIpfSxwcmVmaWx0ZXI6ZnVuY3Rpb24oYSxiKXtiP1FiLnVuc2hpZnQoYSk6UWIucHVzaChhKX19KSxuLnNwZWVkPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1hJiZcIm9iamVjdFwiPT10eXBlb2YgYT9uLmV4dGVuZCh7fSxhKTp7Y29tcGxldGU6Y3x8IWMmJmJ8fG4uaXNGdW5jdGlvbihhKSYmYSxkdXJhdGlvbjphLGVhc2luZzpjJiZifHxiJiYhbi5pc0Z1bmN0aW9uKGIpJiZifTtyZXR1cm4gZC5kdXJhdGlvbj1uLmZ4Lm9mZj8wOlwibnVtYmVyXCI9PXR5cGVvZiBkLmR1cmF0aW9uP2QuZHVyYXRpb246ZC5kdXJhdGlvbiBpbiBuLmZ4LnNwZWVkcz9uLmZ4LnNwZWVkc1tkLmR1cmF0aW9uXTpuLmZ4LnNwZWVkcy5fZGVmYXVsdCwobnVsbD09ZC5xdWV1ZXx8ZC5xdWV1ZT09PSEwKSYmKGQucXVldWU9XCJmeFwiKSxkLm9sZD1kLmNvbXBsZXRlLGQuY29tcGxldGU9ZnVuY3Rpb24oKXtuLmlzRnVuY3Rpb24oZC5vbGQpJiZkLm9sZC5jYWxsKHRoaXMpLGQucXVldWUmJm4uZGVxdWV1ZSh0aGlzLGQucXVldWUpfSxkfSxuLmZuLmV4dGVuZCh7ZmFkZVRvOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLmZpbHRlcihTKS5jc3MoXCJvcGFjaXR5XCIsMCkuc2hvdygpLmVuZCgpLmFuaW1hdGUoe29wYWNpdHk6Yn0sYSxjLGQpfSxhbmltYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPW4uaXNFbXB0eU9iamVjdChhKSxmPW4uc3BlZWQoYixjLGQpLGc9ZnVuY3Rpb24oKXt2YXIgYj1YYih0aGlzLG4uZXh0ZW5kKHt9LGEpLGYpOyhlfHxMLmdldCh0aGlzLFwiZmluaXNoXCIpKSYmYi5zdG9wKCEwKX07cmV0dXJuIGcuZmluaXNoPWcsZXx8Zi5xdWV1ZT09PSExP3RoaXMuZWFjaChnKTp0aGlzLnF1ZXVlKGYucXVldWUsZyl9LHN0b3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWZ1bmN0aW9uKGEpe3ZhciBiPWEuc3RvcDtkZWxldGUgYS5zdG9wLGIoYyl9O3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYz1iLGI9YSxhPXZvaWQgMCksYiYmYSE9PSExJiZ0aGlzLnF1ZXVlKGF8fFwiZnhcIixbXSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9ITAsZT1udWxsIT1hJiZhK1wicXVldWVIb29rc1wiLGY9bi50aW1lcnMsZz1MLmdldCh0aGlzKTtpZihlKWdbZV0mJmdbZV0uc3RvcCYmZChnW2VdKTtlbHNlIGZvcihlIGluIGcpZ1tlXSYmZ1tlXS5zdG9wJiZQYi50ZXN0KGUpJiZkKGdbZV0pO2ZvcihlPWYubGVuZ3RoO2UtLTspZltlXS5lbGVtIT09dGhpc3x8bnVsbCE9YSYmZltlXS5xdWV1ZSE9PWF8fChmW2VdLmFuaW0uc3RvcChjKSxiPSExLGYuc3BsaWNlKGUsMSkpOyhifHwhYykmJm4uZGVxdWV1ZSh0aGlzLGEpfSl9LGZpbmlzaDpmdW5jdGlvbihhKXtyZXR1cm4gYSE9PSExJiYoYT1hfHxcImZ4XCIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiLGM9TC5nZXQodGhpcyksZD1jW2ErXCJxdWV1ZVwiXSxlPWNbYStcInF1ZXVlSG9va3NcIl0sZj1uLnRpbWVycyxnPWQ/ZC5sZW5ndGg6MDtmb3IoYy5maW5pc2g9ITAsbi5xdWV1ZSh0aGlzLGEsW10pLGUmJmUuc3RvcCYmZS5zdG9wLmNhbGwodGhpcywhMCksYj1mLmxlbmd0aDtiLS07KWZbYl0uZWxlbT09PXRoaXMmJmZbYl0ucXVldWU9PT1hJiYoZltiXS5hbmltLnN0b3AoITApLGYuc3BsaWNlKGIsMSkpO2ZvcihiPTA7Zz5iO2IrKylkW2JdJiZkW2JdLmZpbmlzaCYmZFtiXS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgYy5maW5pc2h9KX19KSxuLmVhY2goW1widG9nZ2xlXCIsXCJzaG93XCIsXCJoaWRlXCJdLGZ1bmN0aW9uKGEsYil7dmFyIGM9bi5mbltiXTtuLmZuW2JdPWZ1bmN0aW9uKGEsZCxlKXtyZXR1cm4gbnVsbD09YXx8XCJib29sZWFuXCI9PXR5cGVvZiBhP2MuYXBwbHkodGhpcyxhcmd1bWVudHMpOnRoaXMuYW5pbWF0ZShUYihiLCEwKSxhLGQsZSl9fSksbi5lYWNoKHtzbGlkZURvd246VGIoXCJzaG93XCIpLHNsaWRlVXA6VGIoXCJoaWRlXCIpLHNsaWRlVG9nZ2xlOlRiKFwidG9nZ2xlXCIpLGZhZGVJbjp7b3BhY2l0eTpcInNob3dcIn0sZmFkZU91dDp7b3BhY2l0eTpcImhpZGVcIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eTpcInRvZ2dsZVwifX0sZnVuY3Rpb24oYSxiKXtuLmZuW2FdPWZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gdGhpcy5hbmltYXRlKGIsYSxjLGQpfX0pLG4udGltZXJzPVtdLG4uZngudGljaz1mdW5jdGlvbigpe3ZhciBhLGI9MCxjPW4udGltZXJzO2ZvcihMYj1uLm5vdygpO2I8Yy5sZW5ndGg7YisrKWE9Y1tiXSxhKCl8fGNbYl0hPT1hfHxjLnNwbGljZShiLS0sMSk7Yy5sZW5ndGh8fG4uZnguc3RvcCgpLExiPXZvaWQgMH0sbi5meC50aW1lcj1mdW5jdGlvbihhKXtuLnRpbWVycy5wdXNoKGEpLGEoKT9uLmZ4LnN0YXJ0KCk6bi50aW1lcnMucG9wKCl9LG4uZnguaW50ZXJ2YWw9MTMsbi5meC5zdGFydD1mdW5jdGlvbigpe01ifHwoTWI9c2V0SW50ZXJ2YWwobi5meC50aWNrLG4uZnguaW50ZXJ2YWwpKX0sbi5meC5zdG9wPWZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbChNYiksTWI9bnVsbH0sbi5meC5zcGVlZHM9e3Nsb3c6NjAwLGZhc3Q6MjAwLF9kZWZhdWx0OjQwMH0sbi5mbi5kZWxheT1mdW5jdGlvbihhLGIpe3JldHVybiBhPW4uZng/bi5meC5zcGVlZHNbYV18fGE6YSxiPWJ8fFwiZnhcIix0aGlzLnF1ZXVlKGIsZnVuY3Rpb24oYixjKXt2YXIgZD1zZXRUaW1lb3V0KGIsYSk7Yy5zdG9wPWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KGQpfX0pfSxmdW5jdGlvbigpe3ZhciBhPWwuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGI9bC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLGM9Yi5hcHBlbmRDaGlsZChsLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpO2EudHlwZT1cImNoZWNrYm94XCIsay5jaGVja09uPVwiXCIhPT1hLnZhbHVlLGsub3B0U2VsZWN0ZWQ9Yy5zZWxlY3RlZCxiLmRpc2FibGVkPSEwLGsub3B0RGlzYWJsZWQ9IWMuZGlzYWJsZWQsYT1sLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxhLnZhbHVlPVwidFwiLGEudHlwZT1cInJhZGlvXCIsay5yYWRpb1ZhbHVlPVwidFwiPT09YS52YWx1ZX0oKTt2YXIgWWIsWmIsJGI9bi5leHByLmF0dHJIYW5kbGU7bi5mbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gSih0aGlzLG4uYXR0cixhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5yZW1vdmVBdHRyKHRoaXMsYSl9KX19KSxuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPWEubm9kZVR5cGU7aWYoYSYmMyE9PWYmJjghPT1mJiYyIT09ZilyZXR1cm4gdHlwZW9mIGEuZ2V0QXR0cmlidXRlPT09VT9uLnByb3AoYSxiLGMpOigxPT09ZiYmbi5pc1hNTERvYyhhKXx8KGI9Yi50b0xvd2VyQ2FzZSgpLGQ9bi5hdHRySG9va3NbYl18fChuLmV4cHIubWF0Y2guYm9vbC50ZXN0KGIpP1piOlliKSksdm9pZCAwPT09Yz9kJiZcImdldFwiaW4gZCYmbnVsbCE9PShlPWQuZ2V0KGEsYikpP2U6KGU9bi5maW5kLmF0dHIoYSxiKSxudWxsPT1lP3ZvaWQgMDplKTpudWxsIT09Yz9kJiZcInNldFwiaW4gZCYmdm9pZCAwIT09KGU9ZC5zZXQoYSxjLGIpKT9lOihhLnNldEF0dHJpYnV0ZShiLGMrXCJcIiksYyk6dm9pZCBuLnJlbW92ZUF0dHIoYSxiKSlcbn0scmVtb3ZlQXR0cjpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT0wLGY9YiYmYi5tYXRjaChFKTtpZihmJiYxPT09YS5ub2RlVHlwZSl3aGlsZShjPWZbZSsrXSlkPW4ucHJvcEZpeFtjXXx8YyxuLmV4cHIubWF0Y2guYm9vbC50ZXN0KGMpJiYoYVtkXT0hMSksYS5yZW1vdmVBdHRyaWJ1dGUoYyl9LGF0dHJIb29rczp7dHlwZTp7c2V0OmZ1bmN0aW9uKGEsYil7aWYoIWsucmFkaW9WYWx1ZSYmXCJyYWRpb1wiPT09YiYmbi5ub2RlTmFtZShhLFwiaW5wdXRcIikpe3ZhciBjPWEudmFsdWU7cmV0dXJuIGEuc2V0QXR0cmlidXRlKFwidHlwZVwiLGIpLGMmJihhLnZhbHVlPWMpLGJ9fX19fSksWmI9e3NldDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGI9PT0hMT9uLnJlbW92ZUF0dHIoYSxjKTphLnNldEF0dHJpYnV0ZShjLGMpLGN9fSxuLmVhY2gobi5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKC9cXHcrL2cpLGZ1bmN0aW9uKGEsYil7dmFyIGM9JGJbYl18fG4uZmluZC5hdHRyOyRiW2JdPWZ1bmN0aW9uKGEsYixkKXt2YXIgZSxmO3JldHVybiBkfHwoZj0kYltiXSwkYltiXT1lLGU9bnVsbCE9YyhhLGIsZCk/Yi50b0xvd2VyQ2FzZSgpOm51bGwsJGJbYl09ZiksZX19KTt2YXIgX2I9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaTtuLmZuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihhLGIpe3JldHVybiBKKHRoaXMsbi5wcm9wLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVQcm9wOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtkZWxldGUgdGhpc1tuLnByb3BGaXhbYV18fGFdfSl9fSksbi5leHRlbmQoe3Byb3BGaXg6e1wiZm9yXCI6XCJodG1sRm9yXCIsXCJjbGFzc1wiOlwiY2xhc3NOYW1lXCJ9LHByb3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnPWEubm9kZVR5cGU7aWYoYSYmMyE9PWcmJjghPT1nJiYyIT09ZylyZXR1cm4gZj0xIT09Z3x8IW4uaXNYTUxEb2MoYSksZiYmKGI9bi5wcm9wRml4W2JdfHxiLGU9bi5wcm9wSG9va3NbYl0pLHZvaWQgMCE9PWM/ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDphW2JdPWM6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOmFbYl19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihhKXtyZXR1cm4gYS5oYXNBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKXx8X2IudGVzdChhLm5vZGVOYW1lKXx8YS5ocmVmP2EudGFiSW5kZXg6LTF9fX19KSxrLm9wdFNlbGVjdGVkfHwobi5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJmIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsbnVsbH19KSxuLmVhY2goW1widGFiSW5kZXhcIixcInJlYWRPbmx5XCIsXCJtYXhMZW5ndGhcIixcImNlbGxTcGFjaW5nXCIsXCJjZWxsUGFkZGluZ1wiLFwicm93U3BhblwiLFwiY29sU3BhblwiLFwidXNlTWFwXCIsXCJmcmFtZUJvcmRlclwiLFwiY29udGVudEVkaXRhYmxlXCJdLGZ1bmN0aW9uKCl7bi5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV09dGhpc30pO3ZhciBhYz0vW1xcdFxcclxcblxcZl0vZztuLmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGg9XCJzdHJpbmdcIj09dHlwZW9mIGEmJmEsaT0wLGo9dGhpcy5sZW5ndGg7aWYobi5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS5hZGRDbGFzcyhhLmNhbGwodGhpcyxiLHRoaXMuY2xhc3NOYW1lKSl9KTtpZihoKWZvcihiPShhfHxcIlwiKS5tYXRjaChFKXx8W107aj5pO2krKylpZihjPXRoaXNbaV0sZD0xPT09Yy5ub2RlVHlwZSYmKGMuY2xhc3NOYW1lPyhcIiBcIitjLmNsYXNzTmFtZStcIiBcIikucmVwbGFjZShhYyxcIiBcIik6XCIgXCIpKXtmPTA7d2hpbGUoZT1iW2YrK10pZC5pbmRleE9mKFwiIFwiK2UrXCIgXCIpPDAmJihkKz1lK1wiIFwiKTtnPW4udHJpbShkKSxjLmNsYXNzTmFtZSE9PWcmJihjLmNsYXNzTmFtZT1nKX1yZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGg9MD09PWFyZ3VtZW50cy5sZW5ndGh8fFwic3RyaW5nXCI9PXR5cGVvZiBhJiZhLGk9MCxqPXRoaXMubGVuZ3RoO2lmKG4uaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykucmVtb3ZlQ2xhc3MoYS5jYWxsKHRoaXMsYix0aGlzLmNsYXNzTmFtZSkpfSk7aWYoaClmb3IoYj0oYXx8XCJcIikubWF0Y2goRSl8fFtdO2o+aTtpKyspaWYoYz10aGlzW2ldLGQ9MT09PWMubm9kZVR5cGUmJihjLmNsYXNzTmFtZT8oXCIgXCIrYy5jbGFzc05hbWUrXCIgXCIpLnJlcGxhY2UoYWMsXCIgXCIpOlwiXCIpKXtmPTA7d2hpbGUoZT1iW2YrK10pd2hpbGUoZC5pbmRleE9mKFwiIFwiK2UrXCIgXCIpPj0wKWQ9ZC5yZXBsYWNlKFwiIFwiK2UrXCIgXCIsXCIgXCIpO2c9YT9uLnRyaW0oZCk6XCJcIixjLmNsYXNzTmFtZSE9PWcmJihjLmNsYXNzTmFtZT1nKX1yZXR1cm4gdGhpc30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz10eXBlb2YgYTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGImJlwic3RyaW5nXCI9PT1jP2I/dGhpcy5hZGRDbGFzcyhhKTp0aGlzLnJlbW92ZUNsYXNzKGEpOnRoaXMuZWFjaChuLmlzRnVuY3Rpb24oYSk/ZnVuY3Rpb24oYyl7bih0aGlzKS50b2dnbGVDbGFzcyhhLmNhbGwodGhpcyxjLHRoaXMuY2xhc3NOYW1lLGIpLGIpfTpmdW5jdGlvbigpe2lmKFwic3RyaW5nXCI9PT1jKXt2YXIgYixkPTAsZT1uKHRoaXMpLGY9YS5tYXRjaChFKXx8W107d2hpbGUoYj1mW2QrK10pZS5oYXNDbGFzcyhiKT9lLnJlbW92ZUNsYXNzKGIpOmUuYWRkQ2xhc3MoYil9ZWxzZShjPT09VXx8XCJib29sZWFuXCI9PT1jKSYmKHRoaXMuY2xhc3NOYW1lJiZMLnNldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiLHRoaXMuY2xhc3NOYW1lKSx0aGlzLmNsYXNzTmFtZT10aGlzLmNsYXNzTmFtZXx8YT09PSExP1wiXCI6TC5nZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIil8fFwiXCIpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1cIiBcIithK1wiIFwiLGM9MCxkPXRoaXMubGVuZ3RoO2Q+YztjKyspaWYoMT09PXRoaXNbY10ubm9kZVR5cGUmJihcIiBcIit0aGlzW2NdLmNsYXNzTmFtZStcIiBcIikucmVwbGFjZShhYyxcIiBcIikuaW5kZXhPZihiKT49MClyZXR1cm4hMDtyZXR1cm4hMX19KTt2YXIgYmM9L1xcci9nO24uZm4uZXh0ZW5kKHt2YWw6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGU9dGhpc1swXTt7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZD1uLmlzRnVuY3Rpb24oYSksdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3ZhciBlOzE9PT10aGlzLm5vZGVUeXBlJiYoZT1kP2EuY2FsbCh0aGlzLGMsbih0aGlzKS52YWwoKSk6YSxudWxsPT1lP2U9XCJcIjpcIm51bWJlclwiPT10eXBlb2YgZT9lKz1cIlwiOm4uaXNBcnJheShlKSYmKGU9bi5tYXAoZSxmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOmErXCJcIn0pKSxiPW4udmFsSG9va3NbdGhpcy50eXBlXXx8bi52YWxIb29rc1t0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwic2V0XCJpbiBiJiZ2b2lkIDAhPT1iLnNldCh0aGlzLGUsXCJ2YWx1ZVwiKXx8KHRoaXMudmFsdWU9ZSkpfSk7aWYoZSlyZXR1cm4gYj1uLnZhbEhvb2tzW2UudHlwZV18fG4udmFsSG9va3NbZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcImdldFwiaW4gYiYmdm9pZCAwIT09KGM9Yi5nZXQoZSxcInZhbHVlXCIpKT9jOihjPWUudmFsdWUsXCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5yZXBsYWNlKGJjLFwiXCIpOm51bGw9PWM/XCJcIjpjKX19fSksbi5leHRlbmQoe3ZhbEhvb2tzOntvcHRpb246e2dldDpmdW5jdGlvbihhKXt2YXIgYj1uLmZpbmQuYXR0cihhLFwidmFsdWVcIik7cmV0dXJuIG51bGwhPWI/YjpuLnRyaW0obi50ZXh0KGEpKX19LHNlbGVjdDp7Z2V0OmZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjLGQ9YS5vcHRpb25zLGU9YS5zZWxlY3RlZEluZGV4LGY9XCJzZWxlY3Qtb25lXCI9PT1hLnR5cGV8fDA+ZSxnPWY/bnVsbDpbXSxoPWY/ZSsxOmQubGVuZ3RoLGk9MD5lP2g6Zj9lOjA7aD5pO2krKylpZihjPWRbaV0sISghYy5zZWxlY3RlZCYmaSE9PWV8fChrLm9wdERpc2FibGVkP2MuZGlzYWJsZWQ6bnVsbCE9PWMuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikpfHxjLnBhcmVudE5vZGUuZGlzYWJsZWQmJm4ubm9kZU5hbWUoYy5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZihiPW4oYykudmFsKCksZilyZXR1cm4gYjtnLnB1c2goYil9cmV0dXJuIGd9LHNldDpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT1hLm9wdGlvbnMsZj1uLm1ha2VBcnJheShiKSxnPWUubGVuZ3RoO3doaWxlKGctLSlkPWVbZ10sKGQuc2VsZWN0ZWQ9bi5pbkFycmF5KGQudmFsdWUsZik+PTApJiYoYz0hMCk7cmV0dXJuIGN8fChhLnNlbGVjdGVkSW5kZXg9LTEpLGZ9fX19KSxuLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7bi52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uaXNBcnJheShiKT9hLmNoZWNrZWQ9bi5pbkFycmF5KG4oYSkudmFsKCksYik+PTA6dm9pZCAwfX0say5jaGVja09ufHwobi52YWxIb29rc1t0aGlzXS5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PT1hLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpP1wib25cIjphLnZhbHVlfSl9KSxuLmVhY2goXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgbG9hZCByZXNpemUgc2Nyb2xsIHVubG9hZCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGVycm9yIGNvbnRleHRtZW51XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7bi5mbltiXT1mdW5jdGlvbihhLGMpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjA/dGhpcy5vbihiLG51bGwsYSxjKTp0aGlzLnRyaWdnZXIoYil9fSksbi5mbi5leHRlbmQoe2hvdmVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMubW91c2VlbnRlcihhKS5tb3VzZWxlYXZlKGJ8fGEpfSxiaW5kOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vbihhLG51bGwsYixjKX0sdW5iaW5kOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub2ZmKGEsbnVsbCxiKX0sZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMub24oYixhLGMsZCl9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihhLFwiKipcIik6dGhpcy5vZmYoYixhfHxcIioqXCIsYyl9fSk7dmFyIGNjPW4ubm93KCksZGM9L1xcPy87bi5wYXJzZUpTT049ZnVuY3Rpb24oYSl7cmV0dXJuIEpTT04ucGFyc2UoYStcIlwiKX0sbi5wYXJzZVhNTD1mdW5jdGlvbihhKXt2YXIgYixjO2lmKCFhfHxcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gbnVsbDt0cnl7Yz1uZXcgRE9NUGFyc2VyLGI9Yy5wYXJzZUZyb21TdHJpbmcoYSxcInRleHQveG1sXCIpfWNhdGNoKGQpe2I9dm9pZCAwfXJldHVybighYnx8Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aCkmJm4uZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIrYSksYn07dmFyIGVjLGZjLGdjPS8jLiokLyxoYz0vKFs/Jl0pXz1bXiZdKi8saWM9L14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9nbSxqYz0vXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxrYz0vXig/OkdFVHxIRUFEKSQvLGxjPS9eXFwvXFwvLyxtYz0vXihbXFx3ListXSs6KSg/OlxcL1xcLyg/OlteXFwvPyNdKkB8KShbXlxcLz8jOl0qKSg/OjooXFxkKyl8KXwpLyxuYz17fSxvYz17fSxwYz1cIiovXCIuY29uY2F0KFwiKlwiKTt0cnl7ZmM9bG9jYXRpb24uaHJlZn1jYXRjaChxYyl7ZmM9bC5jcmVhdGVFbGVtZW50KFwiYVwiKSxmYy5ocmVmPVwiXCIsZmM9ZmMuaHJlZn1lYz1tYy5leGVjKGZjLnRvTG93ZXJDYXNlKCkpfHxbXTtmdW5jdGlvbiByYyhhKXtyZXR1cm4gZnVuY3Rpb24oYixjKXtcInN0cmluZ1wiIT10eXBlb2YgYiYmKGM9YixiPVwiKlwiKTt2YXIgZCxlPTAsZj1iLnRvTG93ZXJDYXNlKCkubWF0Y2goRSl8fFtdO2lmKG4uaXNGdW5jdGlvbihjKSl3aGlsZShkPWZbZSsrXSlcIitcIj09PWRbMF0/KGQ9ZC5zbGljZSgxKXx8XCIqXCIsKGFbZF09YVtkXXx8W10pLnVuc2hpZnQoYykpOihhW2RdPWFbZF18fFtdKS5wdXNoKGMpfX1mdW5jdGlvbiBzYyhhLGIsYyxkKXt2YXIgZT17fSxmPWE9PT1vYztmdW5jdGlvbiBnKGgpe3ZhciBpO3JldHVybiBlW2hdPSEwLG4uZWFjaChhW2hdfHxbXSxmdW5jdGlvbihhLGgpe3ZhciBqPWgoYixjLGQpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBqfHxmfHxlW2pdP2Y/IShpPWopOnZvaWQgMDooYi5kYXRhVHlwZXMudW5zaGlmdChqKSxnKGopLCExKX0pLGl9cmV0dXJuIGcoYi5kYXRhVHlwZXNbMF0pfHwhZVtcIipcIl0mJmcoXCIqXCIpfWZ1bmN0aW9uIHRjKGEsYil7dmFyIGMsZCxlPW4uYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3IoYyBpbiBiKXZvaWQgMCE9PWJbY10mJigoZVtjXT9hOmR8fChkPXt9KSlbY109YltjXSk7cmV0dXJuIGQmJm4uZXh0ZW5kKCEwLGEsZCksYX1mdW5jdGlvbiB1YyhhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNvbnRlbnRzLGk9YS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT1pWzBdKWkuc2hpZnQoKSx2b2lkIDA9PT1kJiYoZD1hLm1pbWVUeXBlfHxiLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihkKWZvcihlIGluIGgpaWYoaFtlXSYmaFtlXS50ZXN0KGQpKXtpLnVuc2hpZnQoZSk7YnJlYWt9aWYoaVswXWluIGMpZj1pWzBdO2Vsc2V7Zm9yKGUgaW4gYyl7aWYoIWlbMF18fGEuY29udmVydGVyc1tlK1wiIFwiK2lbMF1dKXtmPWU7YnJlYWt9Z3x8KGc9ZSl9Zj1mfHxnfXJldHVybiBmPyhmIT09aVswXSYmaS51bnNoaWZ0KGYpLGNbZl0pOnZvaWQgMH1mdW5jdGlvbiB2YyhhLGIsYyxkKXt2YXIgZSxmLGcsaCxpLGo9e30saz1hLmRhdGFUeXBlcy5zbGljZSgpO2lmKGtbMV0pZm9yKGcgaW4gYS5jb252ZXJ0ZXJzKWpbZy50b0xvd2VyQ2FzZSgpXT1hLmNvbnZlcnRlcnNbZ107Zj1rLnNoaWZ0KCk7d2hpbGUoZilpZihhLnJlc3BvbnNlRmllbGRzW2ZdJiYoY1thLnJlc3BvbnNlRmllbGRzW2ZdXT1iKSwhaSYmZCYmYS5kYXRhRmlsdGVyJiYoYj1hLmRhdGFGaWx0ZXIoYixhLmRhdGFUeXBlKSksaT1mLGY9ay5zaGlmdCgpKWlmKFwiKlwiPT09ZilmPWk7ZWxzZSBpZihcIipcIiE9PWkmJmkhPT1mKXtpZihnPWpbaStcIiBcIitmXXx8altcIiogXCIrZl0sIWcpZm9yKGUgaW4gailpZihoPWUuc3BsaXQoXCIgXCIpLGhbMV09PT1mJiYoZz1qW2krXCIgXCIraFswXV18fGpbXCIqIFwiK2hbMF1dKSl7Zz09PSEwP2c9altlXTpqW2VdIT09ITAmJihmPWhbMF0say51bnNoaWZ0KGhbMV0pKTticmVha31pZihnIT09ITApaWYoZyYmYVtcInRocm93c1wiXSliPWcoYik7ZWxzZSB0cnl7Yj1nKGIpfWNhdGNoKGwpe3JldHVybntzdGF0ZTpcInBhcnNlcmVycm9yXCIsZXJyb3I6Zz9sOlwiTm8gY29udmVyc2lvbiBmcm9tIFwiK2krXCIgdG8gXCIrZn19fXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOmJ9fW4uZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDpmYyx0eXBlOlwiR0VUXCIsaXNMb2NhbDpqYy50ZXN0KGVjWzFdKSxnbG9iYWw6ITAscHJvY2Vzc0RhdGE6ITAsYXN5bmM6ITAsY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixhY2NlcHRzOntcIipcIjpwYyx0ZXh0OlwidGV4dC9wbGFpblwiLGh0bWw6XCJ0ZXh0L2h0bWxcIix4bWw6XCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsanNvbjpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwifSxjb250ZW50czp7eG1sOi94bWwvLGh0bWw6L2h0bWwvLGpzb246L2pzb24vfSxyZXNwb25zZUZpZWxkczp7eG1sOlwicmVzcG9uc2VYTUxcIix0ZXh0OlwicmVzcG9uc2VUZXh0XCIsanNvbjpcInJlc3BvbnNlSlNPTlwifSxjb252ZXJ0ZXJzOntcIiogdGV4dFwiOlN0cmluZyxcInRleHQgaHRtbFwiOiEwLFwidGV4dCBqc29uXCI6bi5wYXJzZUpTT04sXCJ0ZXh0IHhtbFwiOm4ucGFyc2VYTUx9LGZsYXRPcHRpb25zOnt1cmw6ITAsY29udGV4dDohMH19LGFqYXhTZXR1cDpmdW5jdGlvbihhLGIpe3JldHVybiBiP3RjKHRjKGEsbi5hamF4U2V0dGluZ3MpLGIpOnRjKG4uYWpheFNldHRpbmdzLGEpfSxhamF4UHJlZmlsdGVyOnJjKG5jKSxhamF4VHJhbnNwb3J0OnJjKG9jKSxhamF4OmZ1bmN0aW9uKGEsYil7XCJvYmplY3RcIj09dHlwZW9mIGEmJihiPWEsYT12b2lkIDApLGI9Ynx8e307dmFyIGMsZCxlLGYsZyxoLGksaixrPW4uYWpheFNldHVwKHt9LGIpLGw9ay5jb250ZXh0fHxrLG09ay5jb250ZXh0JiYobC5ub2RlVHlwZXx8bC5qcXVlcnkpP24obCk6bi5ldmVudCxvPW4uRGVmZXJyZWQoKSxwPW4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikscT1rLnN0YXR1c0NvZGV8fHt9LHI9e30scz17fSx0PTAsdT1cImNhbmNlbGVkXCIsdj17cmVhZHlTdGF0ZTowLGdldFJlc3BvbnNlSGVhZGVyOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKDI9PT10KXtpZighZil7Zj17fTt3aGlsZShiPWljLmV4ZWMoZSkpZltiWzFdLnRvTG93ZXJDYXNlKCldPWJbMl19Yj1mW2EudG9Mb3dlckNhc2UoKV19cmV0dXJuIG51bGw9PWI/bnVsbDpifSxnZXRBbGxSZXNwb25zZUhlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gMj09PXQ/ZTpudWxsfSxzZXRSZXF1ZXN0SGVhZGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9YS50b0xvd2VyQ2FzZSgpO3JldHVybiB0fHwoYT1zW2NdPXNbY118fGEsclthXT1iKSx0aGlzfSxvdmVycmlkZU1pbWVUeXBlOmZ1bmN0aW9uKGEpe3JldHVybiB0fHwoay5taW1lVHlwZT1hKSx0aGlzfSxzdGF0dXNDb2RlOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKGEpaWYoMj50KWZvcihiIGluIGEpcVtiXT1bcVtiXSxhW2JdXTtlbHNlIHYuYWx3YXlzKGFbdi5zdGF0dXNdKTtyZXR1cm4gdGhpc30sYWJvcnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YXx8dTtyZXR1cm4gYyYmYy5hYm9ydChiKSx4KDAsYiksdGhpc319O2lmKG8ucHJvbWlzZSh2KS5jb21wbGV0ZT1wLmFkZCx2LnN1Y2Nlc3M9di5kb25lLHYuZXJyb3I9di5mYWlsLGsudXJsPSgoYXx8ay51cmx8fGZjKStcIlwiKS5yZXBsYWNlKGdjLFwiXCIpLnJlcGxhY2UobGMsZWNbMV0rXCIvL1wiKSxrLnR5cGU9Yi5tZXRob2R8fGIudHlwZXx8ay5tZXRob2R8fGsudHlwZSxrLmRhdGFUeXBlcz1uLnRyaW0oay5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goRSl8fFtcIlwiXSxudWxsPT1rLmNyb3NzRG9tYWluJiYoaD1tYy5leGVjKGsudXJsLnRvTG93ZXJDYXNlKCkpLGsuY3Jvc3NEb21haW49ISghaHx8aFsxXT09PWVjWzFdJiZoWzJdPT09ZWNbMl0mJihoWzNdfHwoXCJodHRwOlwiPT09aFsxXT9cIjgwXCI6XCI0NDNcIikpPT09KGVjWzNdfHwoXCJodHRwOlwiPT09ZWNbMV0/XCI4MFwiOlwiNDQzXCIpKSkpLGsuZGF0YSYmay5wcm9jZXNzRGF0YSYmXCJzdHJpbmdcIiE9dHlwZW9mIGsuZGF0YSYmKGsuZGF0YT1uLnBhcmFtKGsuZGF0YSxrLnRyYWRpdGlvbmFsKSksc2MobmMsayxiLHYpLDI9PT10KXJldHVybiB2O2k9ay5nbG9iYWwsaSYmMD09PW4uYWN0aXZlKysmJm4uZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKSxrLnR5cGU9ay50eXBlLnRvVXBwZXJDYXNlKCksay5oYXNDb250ZW50PSFrYy50ZXN0KGsudHlwZSksZD1rLnVybCxrLmhhc0NvbnRlbnR8fChrLmRhdGEmJihkPWsudXJsKz0oZGMudGVzdChkKT9cIiZcIjpcIj9cIikray5kYXRhLGRlbGV0ZSBrLmRhdGEpLGsuY2FjaGU9PT0hMSYmKGsudXJsPWhjLnRlc3QoZCk/ZC5yZXBsYWNlKGhjLFwiJDFfPVwiK2NjKyspOmQrKGRjLnRlc3QoZCk/XCImXCI6XCI/XCIpK1wiXz1cIitjYysrKSksay5pZk1vZGlmaWVkJiYobi5sYXN0TW9kaWZpZWRbZF0mJnYuc2V0UmVxdWVzdEhlYWRlcihcIklmLU1vZGlmaWVkLVNpbmNlXCIsbi5sYXN0TW9kaWZpZWRbZF0pLG4uZXRhZ1tkXSYmdi5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLG4uZXRhZ1tkXSkpLChrLmRhdGEmJmsuaGFzQ29udGVudCYmay5jb250ZW50VHlwZSE9PSExfHxiLmNvbnRlbnRUeXBlKSYmdi5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsay5jb250ZW50VHlwZSksdi5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsay5kYXRhVHlwZXNbMF0mJmsuYWNjZXB0c1trLmRhdGFUeXBlc1swXV0/ay5hY2NlcHRzW2suZGF0YVR5cGVzWzBdXSsoXCIqXCIhPT1rLmRhdGFUeXBlc1swXT9cIiwgXCIrcGMrXCI7IHE9MC4wMVwiOlwiXCIpOmsuYWNjZXB0c1tcIipcIl0pO2ZvcihqIGluIGsuaGVhZGVycyl2LnNldFJlcXVlc3RIZWFkZXIoaixrLmhlYWRlcnNbal0pO2lmKGsuYmVmb3JlU2VuZCYmKGsuYmVmb3JlU2VuZC5jYWxsKGwsdixrKT09PSExfHwyPT09dCkpcmV0dXJuIHYuYWJvcnQoKTt1PVwiYWJvcnRcIjtmb3IoaiBpbntzdWNjZXNzOjEsZXJyb3I6MSxjb21wbGV0ZToxfSl2W2pdKGtbal0pO2lmKGM9c2Mob2MsayxiLHYpKXt2LnJlYWR5U3RhdGU9MSxpJiZtLnRyaWdnZXIoXCJhamF4U2VuZFwiLFt2LGtdKSxrLmFzeW5jJiZrLnRpbWVvdXQ+MCYmKGc9c2V0VGltZW91dChmdW5jdGlvbigpe3YuYWJvcnQoXCJ0aW1lb3V0XCIpfSxrLnRpbWVvdXQpKTt0cnl7dD0xLGMuc2VuZChyLHgpfWNhdGNoKHcpe2lmKCEoMj50KSl0aHJvdyB3O3goLTEsdyl9fWVsc2UgeCgtMSxcIk5vIFRyYW5zcG9ydFwiKTtmdW5jdGlvbiB4KGEsYixmLGgpe3ZhciBqLHIscyx1LHcseD1iOzIhPT10JiYodD0yLGcmJmNsZWFyVGltZW91dChnKSxjPXZvaWQgMCxlPWh8fFwiXCIsdi5yZWFkeVN0YXRlPWE+MD80OjAsaj1hPj0yMDAmJjMwMD5hfHwzMDQ9PT1hLGYmJih1PXVjKGssdixmKSksdT12YyhrLHUsdixqKSxqPyhrLmlmTW9kaWZpZWQmJih3PXYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpLHcmJihuLmxhc3RNb2RpZmllZFtkXT13KSx3PXYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpLHcmJihuLmV0YWdbZF09dykpLDIwND09PWF8fFwiSEVBRFwiPT09ay50eXBlP3g9XCJub2NvbnRlbnRcIjozMDQ9PT1hP3g9XCJub3Rtb2RpZmllZFwiOih4PXUuc3RhdGUscj11LmRhdGEscz11LmVycm9yLGo9IXMpKToocz14LChhfHwheCkmJih4PVwiZXJyb3JcIiwwPmEmJihhPTApKSksdi5zdGF0dXM9YSx2LnN0YXR1c1RleHQ9KGJ8fHgpK1wiXCIsaj9vLnJlc29sdmVXaXRoKGwsW3IseCx2XSk6by5yZWplY3RXaXRoKGwsW3YseCxzXSksdi5zdGF0dXNDb2RlKHEpLHE9dm9pZCAwLGkmJm0udHJpZ2dlcihqP1wiYWpheFN1Y2Nlc3NcIjpcImFqYXhFcnJvclwiLFt2LGssaj9yOnNdKSxwLmZpcmVXaXRoKGwsW3YseF0pLGkmJihtLnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIixbdixrXSksLS1uLmFjdGl2ZXx8bi5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIikpKX1yZXR1cm4gdn0sZ2V0SlNPTjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG4uZ2V0KGEsYixjLFwianNvblwiKX0sZ2V0U2NyaXB0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uZ2V0KGEsdm9pZCAwLGIsXCJzY3JpcHRcIil9fSksbi5lYWNoKFtcImdldFwiLFwicG9zdFwiXSxmdW5jdGlvbihhLGIpe25bYl09ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIG4uaXNGdW5jdGlvbihjKSYmKGU9ZXx8ZCxkPWMsYz12b2lkIDApLG4uYWpheCh7dXJsOmEsdHlwZTpiLGRhdGFUeXBlOmUsZGF0YTpjLHN1Y2Nlc3M6ZH0pfX0pLG4uZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGEsYil7bi5mbltiXT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5vbihiLGEpfX0pLG4uX2V2YWxVcmw9ZnVuY3Rpb24oYSl7cmV0dXJuIG4uYWpheCh7dXJsOmEsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsYXN5bmM6ITEsZ2xvYmFsOiExLFwidGhyb3dzXCI6ITB9KX0sbi5mbi5leHRlbmQoe3dyYXBBbGw6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIG4uaXNGdW5jdGlvbihhKT90aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS53cmFwQWxsKGEuY2FsbCh0aGlzLGIpKX0pOih0aGlzWzBdJiYoYj1uKGEsdGhpc1swXS5vd25lckRvY3VtZW50KS5lcSgwKS5jbG9uZSghMCksdGhpc1swXS5wYXJlbnROb2RlJiZiLmluc2VydEJlZm9yZSh0aGlzWzBdKSxiLm1hcChmdW5jdGlvbigpe3ZhciBhPXRoaXM7d2hpbGUoYS5maXJzdEVsZW1lbnRDaGlsZClhPWEuZmlyc3RFbGVtZW50Q2hpbGQ7cmV0dXJuIGF9KS5hcHBlbmQodGhpcykpLHRoaXMpfSx3cmFwSW5uZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChuLmlzRnVuY3Rpb24oYSk/ZnVuY3Rpb24oYil7bih0aGlzKS53cmFwSW5uZXIoYS5jYWxsKHRoaXMsYikpfTpmdW5jdGlvbigpe3ZhciBiPW4odGhpcyksYz1iLmNvbnRlbnRzKCk7Yy5sZW5ndGg/Yy53cmFwQWxsKGEpOmIuYXBwZW5kKGEpfSl9LHdyYXA6ZnVuY3Rpb24oYSl7dmFyIGI9bi5pc0Z1bmN0aW9uKGEpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYyl7bih0aGlzKS53cmFwQWxsKGI/YS5jYWxsKHRoaXMsYyk6YSl9KX0sdW53cmFwOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGFyZW50KCkuZWFjaChmdW5jdGlvbigpe24ubm9kZU5hbWUodGhpcyxcImJvZHlcIil8fG4odGhpcykucmVwbGFjZVdpdGgodGhpcy5jaGlsZE5vZGVzKX0pLmVuZCgpfX0pLG4uZXhwci5maWx0ZXJzLmhpZGRlbj1mdW5jdGlvbihhKXtyZXR1cm4gYS5vZmZzZXRXaWR0aDw9MCYmYS5vZmZzZXRIZWlnaHQ8PTB9LG4uZXhwci5maWx0ZXJzLnZpc2libGU9ZnVuY3Rpb24oYSl7cmV0dXJuIW4uZXhwci5maWx0ZXJzLmhpZGRlbihhKX07dmFyIHdjPS8lMjAvZyx4Yz0vXFxbXFxdJC8seWM9L1xccj9cXG4vZyx6Yz0vXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksQWM9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO2Z1bmN0aW9uIEJjKGEsYixjLGQpe3ZhciBlO2lmKG4uaXNBcnJheShiKSluLmVhY2goYixmdW5jdGlvbihiLGUpe2N8fHhjLnRlc3QoYSk/ZChhLGUpOkJjKGErXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiBlP2I6XCJcIikrXCJdXCIsZSxjLGQpfSk7ZWxzZSBpZihjfHxcIm9iamVjdFwiIT09bi50eXBlKGIpKWQoYSxiKTtlbHNlIGZvcihlIGluIGIpQmMoYStcIltcIitlK1wiXVwiLGJbZV0sYyxkKX1uLnBhcmFtPWZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPWZ1bmN0aW9uKGEsYil7Yj1uLmlzRnVuY3Rpb24oYik/YigpOm51bGw9PWI/XCJcIjpiLGRbZC5sZW5ndGhdPWVuY29kZVVSSUNvbXBvbmVudChhKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQoYil9O2lmKHZvaWQgMD09PWImJihiPW4uYWpheFNldHRpbmdzJiZuLmFqYXhTZXR0aW5ncy50cmFkaXRpb25hbCksbi5pc0FycmF5KGEpfHxhLmpxdWVyeSYmIW4uaXNQbGFpbk9iamVjdChhKSluLmVhY2goYSxmdW5jdGlvbigpe2UodGhpcy5uYW1lLHRoaXMudmFsdWUpfSk7ZWxzZSBmb3IoYyBpbiBhKUJjKGMsYVtjXSxiLGUpO3JldHVybiBkLmpvaW4oXCImXCIpLnJlcGxhY2Uod2MsXCIrXCIpfSxuLmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIG4ucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT1uLnByb3AodGhpcyxcImVsZW1lbnRzXCIpO3JldHVybiBhP24ubWFrZUFycmF5KGEpOnRoaXN9KS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgYT10aGlzLnR5cGU7cmV0dXJuIHRoaXMubmFtZSYmIW4odGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJkFjLnRlc3QodGhpcy5ub2RlTmFtZSkmJiF6Yy50ZXN0KGEpJiYodGhpcy5jaGVja2VkfHwhVC50ZXN0KGEpKX0pLm1hcChmdW5jdGlvbihhLGIpe3ZhciBjPW4odGhpcykudmFsKCk7cmV0dXJuIG51bGw9PWM/bnVsbDpuLmlzQXJyYXkoYyk/bi5tYXAoYyxmdW5jdGlvbihhKXtyZXR1cm57bmFtZTpiLm5hbWUsdmFsdWU6YS5yZXBsYWNlKHljLFwiXFxyXFxuXCIpfX0pOntuYW1lOmIubmFtZSx2YWx1ZTpjLnJlcGxhY2UoeWMsXCJcXHJcXG5cIil9fSkuZ2V0KCl9fSksbi5hamF4U2V0dGluZ3MueGhyPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBuZXcgWE1MSHR0cFJlcXVlc3R9Y2F0Y2goYSl7fX07dmFyIENjPTAsRGM9e30sRWM9ezA6MjAwLDEyMjM6MjA0fSxGYz1uLmFqYXhTZXR0aW5ncy54aHIoKTthLkFjdGl2ZVhPYmplY3QmJm4oYSkub24oXCJ1bmxvYWRcIixmdW5jdGlvbigpe2Zvcih2YXIgYSBpbiBEYylEY1thXSgpfSksay5jb3JzPSEhRmMmJlwid2l0aENyZWRlbnRpYWxzXCJpbiBGYyxrLmFqYXg9RmM9ISFGYyxuLmFqYXhUcmFuc3BvcnQoZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIGsuY29yc3x8RmMmJiFhLmNyb3NzRG9tYWluP3tzZW5kOmZ1bmN0aW9uKGMsZCl7dmFyIGUsZj1hLnhocigpLGc9KytDYztpZihmLm9wZW4oYS50eXBlLGEudXJsLGEuYXN5bmMsYS51c2VybmFtZSxhLnBhc3N3b3JkKSxhLnhockZpZWxkcylmb3IoZSBpbiBhLnhockZpZWxkcylmW2VdPWEueGhyRmllbGRzW2VdO2EubWltZVR5cGUmJmYub3ZlcnJpZGVNaW1lVHlwZSYmZi5vdmVycmlkZU1pbWVUeXBlKGEubWltZVR5cGUpLGEuY3Jvc3NEb21haW58fGNbXCJYLVJlcXVlc3RlZC1XaXRoXCJdfHwoY1tcIlgtUmVxdWVzdGVkLVdpdGhcIl09XCJYTUxIdHRwUmVxdWVzdFwiKTtmb3IoZSBpbiBjKWYuc2V0UmVxdWVzdEhlYWRlcihlLGNbZV0pO2I9ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKCl7YiYmKGRlbGV0ZSBEY1tnXSxiPWYub25sb2FkPWYub25lcnJvcj1udWxsLFwiYWJvcnRcIj09PWE/Zi5hYm9ydCgpOlwiZXJyb3JcIj09PWE/ZChmLnN0YXR1cyxmLnN0YXR1c1RleHQpOmQoRWNbZi5zdGF0dXNdfHxmLnN0YXR1cyxmLnN0YXR1c1RleHQsXCJzdHJpbmdcIj09dHlwZW9mIGYucmVzcG9uc2VUZXh0P3t0ZXh0OmYucmVzcG9uc2VUZXh0fTp2b2lkIDAsZi5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpfX0sZi5vbmxvYWQ9YigpLGYub25lcnJvcj1iKFwiZXJyb3JcIiksYj1EY1tnXT1iKFwiYWJvcnRcIik7dHJ5e2Yuc2VuZChhLmhhc0NvbnRlbnQmJmEuZGF0YXx8bnVsbCl9Y2F0Y2goaCl7aWYoYil0aHJvdyBofX0sYWJvcnQ6ZnVuY3Rpb24oKXtiJiZiKCl9fTp2b2lkIDB9KSxuLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovKD86amF2YXxlY21hKXNjcmlwdC99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihhKXtyZXR1cm4gbi5nbG9iYWxFdmFsKGEpLGF9fX0pLG4uYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe3ZvaWQgMD09PWEuY2FjaGUmJihhLmNhY2hlPSExKSxhLmNyb3NzRG9tYWluJiYoYS50eXBlPVwiR0VUXCIpfSksbi5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24oYSl7aWYoYS5jcm9zc0RvbWFpbil7dmFyIGIsYztyZXR1cm57c2VuZDpmdW5jdGlvbihkLGUpe2I9bihcIjxzY3JpcHQ+XCIpLnByb3Aoe2FzeW5jOiEwLGNoYXJzZXQ6YS5zY3JpcHRDaGFyc2V0LHNyYzphLnVybH0pLm9uKFwibG9hZCBlcnJvclwiLGM9ZnVuY3Rpb24oYSl7Yi5yZW1vdmUoKSxjPW51bGwsYSYmZShcImVycm9yXCI9PT1hLnR5cGU/NDA0OjIwMCxhLnR5cGUpfSksbC5oZWFkLmFwcGVuZENoaWxkKGJbMF0pfSxhYm9ydDpmdW5jdGlvbigpe2MmJmMoKX19fX0pO3ZhciBHYz1bXSxIYz0vKD0pXFw/KD89JnwkKXxcXD9cXD8vO24uYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBhPUdjLnBvcCgpfHxuLmV4cGFuZG8rXCJfXCIrY2MrKztyZXR1cm4gdGhpc1thXT0hMCxhfX0pLG4uYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihiLGMsZCl7dmFyIGUsZixnLGg9Yi5qc29ucCE9PSExJiYoSGMudGVzdChiLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2YgYi5kYXRhJiYhKGIuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJkhjLnRlc3QoYi5kYXRhKSYmXCJkYXRhXCIpO3JldHVybiBofHxcImpzb25wXCI9PT1iLmRhdGFUeXBlc1swXT8oZT1iLmpzb25wQ2FsbGJhY2s9bi5pc0Z1bmN0aW9uKGIuanNvbnBDYWxsYmFjayk/Yi5qc29ucENhbGxiYWNrKCk6Yi5qc29ucENhbGxiYWNrLGg/YltoXT1iW2hdLnJlcGxhY2UoSGMsXCIkMVwiK2UpOmIuanNvbnAhPT0hMSYmKGIudXJsKz0oZGMudGVzdChiLnVybCk/XCImXCI6XCI/XCIpK2IuanNvbnArXCI9XCIrZSksYi5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gZ3x8bi5lcnJvcihlK1wiIHdhcyBub3QgY2FsbGVkXCIpLGdbMF19LGIuZGF0YVR5cGVzWzBdPVwianNvblwiLGY9YVtlXSxhW2VdPWZ1bmN0aW9uKCl7Zz1hcmd1bWVudHN9LGQuYWx3YXlzKGZ1bmN0aW9uKCl7YVtlXT1mLGJbZV0mJihiLmpzb25wQ2FsbGJhY2s9Yy5qc29ucENhbGxiYWNrLEdjLnB1c2goZSkpLGcmJm4uaXNGdW5jdGlvbihmKSYmZihnWzBdKSxnPWY9dm9pZCAwfSksXCJzY3JpcHRcIik6dm9pZCAwfSksbi5wYXJzZUhUTUw9ZnVuY3Rpb24oYSxiLGMpe2lmKCFhfHxcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gbnVsbDtcImJvb2xlYW5cIj09dHlwZW9mIGImJihjPWIsYj0hMSksYj1ifHxsO3ZhciBkPXYuZXhlYyhhKSxlPSFjJiZbXTtyZXR1cm4gZD9bYi5jcmVhdGVFbGVtZW50KGRbMV0pXTooZD1uLmJ1aWxkRnJhZ21lbnQoW2FdLGIsZSksZSYmZS5sZW5ndGgmJm4oZSkucmVtb3ZlKCksbi5tZXJnZShbXSxkLmNoaWxkTm9kZXMpKX07dmFyIEljPW4uZm4ubG9hZDtuLmZuLmxvYWQ9ZnVuY3Rpb24oYSxiLGMpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhJiZJYylyZXR1cm4gSWMuYXBwbHkodGhpcyxhcmd1bWVudHMpO3ZhciBkLGUsZixnPXRoaXMsaD1hLmluZGV4T2YoXCIgXCIpO3JldHVybiBoPj0wJiYoZD1uLnRyaW0oYS5zbGljZShoKSksYT1hLnNsaWNlKDAsaCkpLG4uaXNGdW5jdGlvbihiKT8oYz1iLGI9dm9pZCAwKTpiJiZcIm9iamVjdFwiPT10eXBlb2YgYiYmKGU9XCJQT1NUXCIpLGcubGVuZ3RoPjAmJm4uYWpheCh7dXJsOmEsdHlwZTplLGRhdGFUeXBlOlwiaHRtbFwiLGRhdGE6Yn0pLmRvbmUoZnVuY3Rpb24oYSl7Zj1hcmd1bWVudHMsZy5odG1sKGQ/bihcIjxkaXY+XCIpLmFwcGVuZChuLnBhcnNlSFRNTChhKSkuZmluZChkKTphKX0pLmNvbXBsZXRlKGMmJmZ1bmN0aW9uKGEsYil7Zy5lYWNoKGMsZnx8W2EucmVzcG9uc2VUZXh0LGIsYV0pfSksdGhpc30sbi5leHByLmZpbHRlcnMuYW5pbWF0ZWQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZ3JlcChuLnRpbWVycyxmdW5jdGlvbihiKXtyZXR1cm4gYT09PWIuZWxlbX0pLmxlbmd0aH07dmFyIEpjPWEuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O2Z1bmN0aW9uIEtjKGEpe3JldHVybiBuLmlzV2luZG93KGEpP2E6OT09PWEubm9kZVR5cGUmJmEuZGVmYXVsdFZpZXd9bi5vZmZzZXQ9e3NldE9mZnNldDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaCxpLGosaz1uLmNzcyhhLFwicG9zaXRpb25cIiksbD1uKGEpLG09e307XCJzdGF0aWNcIj09PWsmJihhLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIiksaD1sLm9mZnNldCgpLGY9bi5jc3MoYSxcInRvcFwiKSxpPW4uY3NzKGEsXCJsZWZ0XCIpLGo9KFwiYWJzb2x1dGVcIj09PWt8fFwiZml4ZWRcIj09PWspJiYoZitpKS5pbmRleE9mKFwiYXV0b1wiKT4tMSxqPyhkPWwucG9zaXRpb24oKSxnPWQudG9wLGU9ZC5sZWZ0KTooZz1wYXJzZUZsb2F0KGYpfHwwLGU9cGFyc2VGbG9hdChpKXx8MCksbi5pc0Z1bmN0aW9uKGIpJiYoYj1iLmNhbGwoYSxjLGgpKSxudWxsIT1iLnRvcCYmKG0udG9wPWIudG9wLWgudG9wK2cpLG51bGwhPWIubGVmdCYmKG0ubGVmdD1iLmxlZnQtaC5sZWZ0K2UpLFwidXNpbmdcImluIGI/Yi51c2luZy5jYWxsKGEsbSk6bC5jc3MobSl9fSxuLmZuLmV4dGVuZCh7b2Zmc2V0OmZ1bmN0aW9uKGEpe2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHZvaWQgMD09PWE/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oYil7bi5vZmZzZXQuc2V0T2Zmc2V0KHRoaXMsYSxiKX0pO3ZhciBiLGMsZD10aGlzWzBdLGU9e3RvcDowLGxlZnQ6MH0sZj1kJiZkLm93bmVyRG9jdW1lbnQ7aWYoZilyZXR1cm4gYj1mLmRvY3VtZW50RWxlbWVudCxuLmNvbnRhaW5zKGIsZCk/KHR5cGVvZiBkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCE9PVUmJihlPWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpLGM9S2MoZikse3RvcDplLnRvcCtjLnBhZ2VZT2Zmc2V0LWIuY2xpZW50VG9wLGxlZnQ6ZS5sZWZ0K2MucGFnZVhPZmZzZXQtYi5jbGllbnRMZWZ0fSk6ZX0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzWzBdKXt2YXIgYSxiLGM9dGhpc1swXSxkPXt0b3A6MCxsZWZ0OjB9O3JldHVyblwiZml4ZWRcIj09PW4uY3NzKGMsXCJwb3NpdGlvblwiKT9iPWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6KGE9dGhpcy5vZmZzZXRQYXJlbnQoKSxiPXRoaXMub2Zmc2V0KCksbi5ub2RlTmFtZShhWzBdLFwiaHRtbFwiKXx8KGQ9YS5vZmZzZXQoKSksZC50b3ArPW4uY3NzKGFbMF0sXCJib3JkZXJUb3BXaWR0aFwiLCEwKSxkLmxlZnQrPW4uY3NzKGFbMF0sXCJib3JkZXJMZWZ0V2lkdGhcIiwhMCkpLHt0b3A6Yi50b3AtZC50b3Atbi5jc3MoYyxcIm1hcmdpblRvcFwiLCEwKSxsZWZ0OmIubGVmdC1kLmxlZnQtbi5jc3MoYyxcIm1hcmdpbkxlZnRcIiwhMCl9fX0sb2Zmc2V0UGFyZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vZmZzZXRQYXJlbnR8fEpjO3doaWxlKGEmJiFuLm5vZGVOYW1lKGEsXCJodG1sXCIpJiZcInN0YXRpY1wiPT09bi5jc3MoYSxcInBvc2l0aW9uXCIpKWE9YS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGF8fEpjfSl9fSksbi5lYWNoKHtzY3JvbGxMZWZ0OlwicGFnZVhPZmZzZXRcIixzY3JvbGxUb3A6XCJwYWdlWU9mZnNldFwifSxmdW5jdGlvbihiLGMpe3ZhciBkPVwicGFnZVlPZmZzZXRcIj09PWM7bi5mbltiXT1mdW5jdGlvbihlKXtyZXR1cm4gSih0aGlzLGZ1bmN0aW9uKGIsZSxmKXt2YXIgZz1LYyhiKTtyZXR1cm4gdm9pZCAwPT09Zj9nP2dbY106YltlXTp2b2lkKGc/Zy5zY3JvbGxUbyhkP2EucGFnZVhPZmZzZXQ6ZixkP2Y6YS5wYWdlWU9mZnNldCk6YltlXT1mKX0sYixlLGFyZ3VtZW50cy5sZW5ndGgsbnVsbCl9fSksbi5lYWNoKFtcInRvcFwiLFwibGVmdFwiXSxmdW5jdGlvbihhLGIpe24uY3NzSG9va3NbYl09eWIoay5waXhlbFBvc2l0aW9uLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGM/KGM9eGIoYSxiKSx2Yi50ZXN0KGMpP24oYSkucG9zaXRpb24oKVtiXStcInB4XCI6Yyk6dm9pZCAwfSl9KSxuLmVhY2goe0hlaWdodDpcImhlaWdodFwiLFdpZHRoOlwid2lkdGhcIn0sZnVuY3Rpb24oYSxiKXtuLmVhY2goe3BhZGRpbmc6XCJpbm5lclwiK2EsY29udGVudDpiLFwiXCI6XCJvdXRlclwiK2F9LGZ1bmN0aW9uKGMsZCl7bi5mbltkXT1mdW5jdGlvbihkLGUpe3ZhciBmPWFyZ3VtZW50cy5sZW5ndGgmJihjfHxcImJvb2xlYW5cIiE9dHlwZW9mIGQpLGc9Y3x8KGQ9PT0hMHx8ZT09PSEwP1wibWFyZ2luXCI6XCJib3JkZXJcIik7cmV0dXJuIEoodGhpcyxmdW5jdGlvbihiLGMsZCl7dmFyIGU7cmV0dXJuIG4uaXNXaW5kb3coYik/Yi5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIithXTo5PT09Yi5ub2RlVHlwZT8oZT1iLmRvY3VtZW50RWxlbWVudCxNYXRoLm1heChiLmJvZHlbXCJzY3JvbGxcIithXSxlW1wic2Nyb2xsXCIrYV0sYi5ib2R5W1wib2Zmc2V0XCIrYV0sZVtcIm9mZnNldFwiK2FdLGVbXCJjbGllbnRcIithXSkpOnZvaWQgMD09PWQ/bi5jc3MoYixjLGcpOm4uc3R5bGUoYixjLGQsZyl9LGIsZj9kOnZvaWQgMCxmLG51bGwpfX0pfSksbi5mbi5zaXplPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubGVuZ3RofSxuLmZuLmFuZFNlbGY9bi5mbi5hZGRCYWNrLFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKFwianF1ZXJ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gbn0pO3ZhciBMYz1hLmpRdWVyeSxNYz1hLiQ7cmV0dXJuIG4ubm9Db25mbGljdD1mdW5jdGlvbihiKXtyZXR1cm4gYS4kPT09biYmKGEuJD1NYyksYiYmYS5qUXVlcnk9PT1uJiYoYS5qUXVlcnk9TGMpLG59LHR5cGVvZiBiPT09VSYmKGEualF1ZXJ5PWEuJD1uKSxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qcXVlcnkubWluLm1hcFxuOyBicm93c2VyaWZ5X3NoaW1fX2RlZmluZV9fbW9kdWxlX19leHBvcnRfXyh0eXBlb2YgalF1ZXJ5ICE9IFwidW5kZWZpbmVkXCIgPyBqUXVlcnkgOiB3aW5kb3cualF1ZXJ5KTtcblxufSkuY2FsbChnbG9iYWwsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgZnVuY3Rpb24gZGVmaW5lRXhwb3J0KGV4KSB7IG1vZHVsZS5leHBvcnRzID0gZXg7IH0pO1xuXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSkiLCIoZnVuY3Rpb24gKGZhY3RvcnkpIHtcclxuXHQvLyBNb2R1bGUgc3lzdGVtcyBtYWdpYyBkYW5jZS5cclxuXHJcblx0aWYgKHR5cGVvZiByZXF1aXJlID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0Ly8gQ29tbW9uSlMgb3IgTm9kZTogaGFyZC1jb2RlZCBkZXBlbmRlbmN5IG9uIFwia25vY2tvdXRcIlxyXG5cdFx0ZmFjdG9yeShyZXF1aXJlKFwia25vY2tvdXRcIiksIGV4cG9ydHMpO1xyXG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZVtcImFtZFwiXSkge1xyXG5cdFx0Ly8gQU1EIGFub255bW91cyBtb2R1bGUgd2l0aCBoYXJkLWNvZGVkIGRlcGVuZGVuY3kgb24gXCJrbm9ja291dFwiXHJcblx0XHRkZWZpbmUoW1wia25vY2tvdXRcIiwgXCJleHBvcnRzXCJdLCBmYWN0b3J5KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Ly8gPHNjcmlwdD4gdGFnOiB1c2UgdGhlIGdsb2JhbCBga29gIG9iamVjdCwgYXR0YWNoaW5nIGEgYG1hcHBpbmdgIHByb3BlcnR5XHJcblx0XHRmYWN0b3J5KGtvLCBrby5tYXBwaW5nID0ge30pO1xyXG5cdH1cclxufShmdW5jdGlvbiAoa28sIGV4cG9ydHMpIHtcclxuXHR2YXIgREVCVUc9dHJ1ZTtcclxuXHR2YXIgbWFwcGluZ1Byb3BlcnR5ID0gXCJfX2tvX21hcHBpbmdfX1wiO1xyXG5cdHZhciByZWFsS29EZXBlbmRlbnRPYnNlcnZhYmxlID0ga28uZGVwZW5kZW50T2JzZXJ2YWJsZTtcclxuXHR2YXIgbWFwcGluZ05lc3RpbmcgPSAwO1xyXG5cdHZhciBkZXBlbmRlbnRPYnNlcnZhYmxlcztcclxuXHR2YXIgdmlzaXRlZE9iamVjdHM7XHJcblx0dmFyIHJlY29nbml6ZWRSb290UHJvcGVydGllcyA9IFtcImNyZWF0ZVwiLCBcInVwZGF0ZVwiLCBcImtleVwiLCBcImFycmF5Q2hhbmdlZFwiXTtcclxuXHR2YXIgZW1wdHlSZXR1cm4gPSB7fTtcclxuXHJcblx0dmFyIF9kZWZhdWx0T3B0aW9ucyA9IHtcclxuXHRcdGluY2x1ZGU6IFtcIl9kZXN0cm95XCJdLFxyXG5cdFx0aWdub3JlOiBbXSxcclxuXHRcdGNvcHk6IFtdLFxyXG5cdFx0b2JzZXJ2ZTogW11cclxuXHR9O1xyXG5cdHZhciBkZWZhdWx0T3B0aW9ucyA9IF9kZWZhdWx0T3B0aW9ucztcclxuXHJcblx0Ly8gQXV0aG9yOiBLZW5ueVRNIEAgU3RhY2tPdmVyZmxvd1xyXG5cdGZ1bmN0aW9uIHVuaW9uQXJyYXlzICh4LCB5KSB7XHJcblx0XHR2YXIgb2JqID0ge307XHJcblx0XHRmb3IgKHZhciBpID0geC5sZW5ndGggLSAxOyBpID49IDA7IC0tIGkpIG9ialt4W2ldXSA9IHhbaV07XHJcblx0XHRmb3IgKHZhciBpID0geS5sZW5ndGggLSAxOyBpID49IDA7IC0tIGkpIG9ialt5W2ldXSA9IHlbaV07XHJcblx0XHR2YXIgcmVzID0gW107XHJcblxyXG5cdFx0Zm9yICh2YXIgayBpbiBvYmopIHtcclxuXHRcdFx0cmVzLnB1c2gob2JqW2tdKTtcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGV4dGVuZE9iamVjdChkZXN0aW5hdGlvbiwgc291cmNlKSB7XHJcblx0XHR2YXIgZGVzdFR5cGU7XHJcblxyXG5cdFx0Zm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xyXG5cdFx0XHRpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkgJiYgc291cmNlW2tleV0pIHtcclxuXHRcdFx0XHRkZXN0VHlwZSA9IGV4cG9ydHMuZ2V0VHlwZShkZXN0aW5hdGlvbltrZXldKTtcclxuXHRcdFx0XHRpZiAoa2V5ICYmIGRlc3RpbmF0aW9uW2tleV0gJiYgZGVzdFR5cGUgIT09IFwiYXJyYXlcIiAmJiBkZXN0VHlwZSAhPT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdFx0ZXh0ZW5kT2JqZWN0KGRlc3RpbmF0aW9uW2tleV0sIHNvdXJjZVtrZXldKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dmFyIGJvdGhBcnJheXMgPSBleHBvcnRzLmdldFR5cGUoZGVzdGluYXRpb25ba2V5XSkgPT09IFwiYXJyYXlcIiAmJiBleHBvcnRzLmdldFR5cGUoc291cmNlW2tleV0pID09PSBcImFycmF5XCI7XHJcblx0XHRcdFx0XHRpZiAoYm90aEFycmF5cykge1xyXG5cdFx0XHRcdFx0XHRkZXN0aW5hdGlvbltrZXldID0gdW5pb25BcnJheXMoZGVzdGluYXRpb25ba2V5XSwgc291cmNlW2tleV0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0ZGVzdGluYXRpb25ba2V5XSA9IHNvdXJjZVtrZXldO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gbWVyZ2Uob2JqMSwgb2JqMikge1xyXG5cdFx0dmFyIG1lcmdlZCA9IHt9O1xyXG5cdFx0ZXh0ZW5kT2JqZWN0KG1lcmdlZCwgb2JqMSk7XHJcblx0XHRleHRlbmRPYmplY3QobWVyZ2VkLCBvYmoyKTtcclxuXHJcblx0XHRyZXR1cm4gbWVyZ2VkO1xyXG5cdH1cclxuXHJcblx0ZXhwb3J0cy5pc01hcHBlZCA9IGZ1bmN0aW9uICh2aWV3TW9kZWwpIHtcclxuXHRcdHZhciB1bndyYXBwZWQgPSBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZpZXdNb2RlbCk7XHJcblx0XHRyZXR1cm4gdW53cmFwcGVkICYmIHVud3JhcHBlZFttYXBwaW5nUHJvcGVydHldO1xyXG5cdH1cclxuXHJcblx0ZXhwb3J0cy5mcm9tSlMgPSBmdW5jdGlvbiAoanNPYmplY3QgLyosIGlucHV0T3B0aW9ucywgdGFyZ2V0Ki8gKSB7XHJcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJXaGVuIGNhbGxpbmcga28uZnJvbUpTLCBwYXNzIHRoZSBvYmplY3QgeW91IHdhbnQgdG8gY29udmVydC5cIik7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0aWYgKCFtYXBwaW5nTmVzdGluZysrKSB7XHJcblx0XHRcdFx0ZGVwZW5kZW50T2JzZXJ2YWJsZXMgPSBbXTtcclxuXHRcdFx0XHR2aXNpdGVkT2JqZWN0cyA9IG5ldyBvYmplY3RMb29rdXAoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIG9wdGlvbnM7XHJcblx0XHRcdHZhciB0YXJnZXQ7XHJcblxyXG5cdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAyKSB7XHJcblx0XHRcdFx0aWYgKGFyZ3VtZW50c1sxXVttYXBwaW5nUHJvcGVydHldKSB7XHJcblx0XHRcdFx0XHR0YXJnZXQgPSBhcmd1bWVudHNbMV07XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdG9wdGlvbnMgPSBhcmd1bWVudHNbMV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09IDMpIHtcclxuXHRcdFx0XHRvcHRpb25zID0gYXJndW1lbnRzWzFdO1xyXG5cdFx0XHRcdHRhcmdldCA9IGFyZ3VtZW50c1syXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRhcmdldCkge1xyXG5cdFx0XHRcdG9wdGlvbnMgPSBtZXJnZShvcHRpb25zLCB0YXJnZXRbbWFwcGluZ1Byb3BlcnR5XSk7XHJcblx0XHRcdH1cclxuXHRcdFx0b3B0aW9ucyA9IGZpbGxPcHRpb25zKG9wdGlvbnMpO1xyXG5cclxuXHRcdFx0dmFyIHJlc3VsdCA9IHVwZGF0ZVZpZXdNb2RlbCh0YXJnZXQsIGpzT2JqZWN0LCBvcHRpb25zKTtcclxuXHRcdFx0aWYgKHRhcmdldCkge1xyXG5cdFx0XHRcdHJlc3VsdCA9IHRhcmdldDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gRXZhbHVhdGUgYW55IGRlcGVuZGVudCBvYnNlcnZhYmxlcyB0aGF0IHdlcmUgcHJveGllZC5cclxuXHRcdFx0Ly8gRG8gdGhpcyBhZnRlciB0aGUgbW9kZWwncyBvYnNlcnZhYmxlcyBoYXZlIGJlZW4gY3JlYXRlZFxyXG5cdFx0XHRpZiAoIS0tbWFwcGluZ05lc3RpbmcpIHtcclxuXHRcdFx0XHR3aGlsZSAoZGVwZW5kZW50T2JzZXJ2YWJsZXMubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHR2YXIgRE8gPSBkZXBlbmRlbnRPYnNlcnZhYmxlcy5wb3AoKTtcclxuXHRcdFx0XHRcdGlmIChETykge1xyXG5cdFx0XHRcdFx0XHRETygpO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Ly8gTW92ZSB0aGlzIG1hZ2ljIHByb3BlcnR5IHRvIHRoZSB1bmRlcmx5aW5nIGRlcGVuZGVudCBvYnNlcnZhYmxlXHJcblx0XHRcdFx0XHRcdERPLl9fRE9bXCJ0aHJvdHRsZUV2YWx1YXRpb25cIl0gPSBET1tcInRocm90dGxlRXZhbHVhdGlvblwiXTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIFNhdmUgYW55IG5ldyBtYXBwaW5nIG9wdGlvbnMgaW4gdGhlIHZpZXcgbW9kZWwsIHNvIHRoYXQgdXBkYXRlRnJvbUpTIGNhbiB1c2UgdGhlbSBsYXRlci5cclxuXHRcdFx0cmVzdWx0W21hcHBpbmdQcm9wZXJ0eV0gPSBtZXJnZShyZXN1bHRbbWFwcGluZ1Byb3BlcnR5XSwgb3B0aW9ucyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fSBjYXRjaChlKSB7XHJcblx0XHRcdG1hcHBpbmdOZXN0aW5nID0gMDtcclxuXHRcdFx0dGhyb3cgZTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRleHBvcnRzLmZyb21KU09OID0gZnVuY3Rpb24gKGpzb25TdHJpbmcgLyosIG9wdGlvbnMsIHRhcmdldCovICkge1xyXG5cdFx0dmFyIHBhcnNlZCA9IGtvLnV0aWxzLnBhcnNlSnNvbihqc29uU3RyaW5nKTtcclxuXHRcdGFyZ3VtZW50c1swXSA9IHBhcnNlZDtcclxuXHRcdHJldHVybiBleHBvcnRzLmZyb21KUy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdH07XHJcblxyXG5cdGV4cG9ydHMudXBkYXRlRnJvbUpTID0gZnVuY3Rpb24gKHZpZXdNb2RlbCkge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwia28ubWFwcGluZy51cGRhdGVGcm9tSlMsIHVzZSBrby5tYXBwaW5nLmZyb21KUyBpbnN0ZWFkLiBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBvcmRlciBvZiBwYXJhbWV0ZXJzIGlzIGRpZmZlcmVudCFcIik7XHJcblx0fTtcclxuXHJcblx0ZXhwb3J0cy51cGRhdGVGcm9tSlNPTiA9IGZ1bmN0aW9uICh2aWV3TW9kZWwpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcImtvLm1hcHBpbmcudXBkYXRlRnJvbUpTT04sIHVzZSBrby5tYXBwaW5nLmZyb21KU09OIGluc3RlYWQuIFBsZWFzZSBub3RlIHRoYXQgdGhlIG9yZGVyIG9mIHBhcmFtZXRlcnMgaXMgZGlmZmVyZW50IVwiKTtcclxuXHR9O1xyXG5cclxuXHRleHBvcnRzLnRvSlMgPSBmdW5jdGlvbiAocm9vdE9iamVjdCwgb3B0aW9ucykge1xyXG5cdFx0aWYgKCFkZWZhdWx0T3B0aW9ucykgZXhwb3J0cy5yZXNldERlZmF1bHRPcHRpb25zKCk7XHJcblxyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiV2hlbiBjYWxsaW5nIGtvLm1hcHBpbmcudG9KUywgcGFzcyB0aGUgb2JqZWN0IHlvdSB3YW50IHRvIGNvbnZlcnQuXCIpO1xyXG5cdFx0aWYgKGV4cG9ydHMuZ2V0VHlwZShkZWZhdWx0T3B0aW9ucy5pZ25vcmUpICE9PSBcImFycmF5XCIpIHRocm93IG5ldyBFcnJvcihcImtvLm1hcHBpbmcuZGVmYXVsdE9wdGlvbnMoKS5pZ25vcmUgc2hvdWxkIGJlIGFuIGFycmF5LlwiKTtcclxuXHRcdGlmIChleHBvcnRzLmdldFR5cGUoZGVmYXVsdE9wdGlvbnMuaW5jbHVkZSkgIT09IFwiYXJyYXlcIikgdGhyb3cgbmV3IEVycm9yKFwia28ubWFwcGluZy5kZWZhdWx0T3B0aW9ucygpLmluY2x1ZGUgc2hvdWxkIGJlIGFuIGFycmF5LlwiKTtcclxuXHRcdGlmIChleHBvcnRzLmdldFR5cGUoZGVmYXVsdE9wdGlvbnMuY29weSkgIT09IFwiYXJyYXlcIikgdGhyb3cgbmV3IEVycm9yKFwia28ubWFwcGluZy5kZWZhdWx0T3B0aW9ucygpLmNvcHkgc2hvdWxkIGJlIGFuIGFycmF5LlwiKTtcclxuXHJcblx0XHQvLyBNZXJnZSBpbiB0aGUgb3B0aW9ucyB1c2VkIGluIGZyb21KU1xyXG5cdFx0b3B0aW9ucyA9IGZpbGxPcHRpb25zKG9wdGlvbnMsIHJvb3RPYmplY3RbbWFwcGluZ1Byb3BlcnR5XSk7XHJcblxyXG5cdFx0Ly8gV2UganVzdCB1bndyYXAgZXZlcnl0aGluZyBhdCBldmVyeSBsZXZlbCBpbiB0aGUgb2JqZWN0IGdyYXBoXHJcblx0XHRyZXR1cm4gZXhwb3J0cy52aXNpdE1vZGVsKHJvb3RPYmplY3QsIGZ1bmN0aW9uICh4KSB7XHJcblx0XHRcdHJldHVybiBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHgpXHJcblx0XHR9LCBvcHRpb25zKTtcclxuXHR9O1xyXG5cclxuXHRleHBvcnRzLnRvSlNPTiA9IGZ1bmN0aW9uIChyb290T2JqZWN0LCBvcHRpb25zKSB7XHJcblx0XHR2YXIgcGxhaW5KYXZhU2NyaXB0T2JqZWN0ID0gZXhwb3J0cy50b0pTKHJvb3RPYmplY3QsIG9wdGlvbnMpO1xyXG5cdFx0cmV0dXJuIGtvLnV0aWxzLnN0cmluZ2lmeUpzb24ocGxhaW5KYXZhU2NyaXB0T2JqZWN0KTtcclxuXHR9O1xyXG5cclxuXHRleHBvcnRzLmRlZmF1bHRPcHRpb25zID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdGRlZmF1bHRPcHRpb25zID0gYXJndW1lbnRzWzBdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGRlZmF1bHRPcHRpb25zO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGV4cG9ydHMucmVzZXREZWZhdWx0T3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGRlZmF1bHRPcHRpb25zID0ge1xyXG5cdFx0XHRpbmNsdWRlOiBfZGVmYXVsdE9wdGlvbnMuaW5jbHVkZS5zbGljZSgwKSxcclxuXHRcdFx0aWdub3JlOiBfZGVmYXVsdE9wdGlvbnMuaWdub3JlLnNsaWNlKDApLFxyXG5cdFx0XHRjb3B5OiBfZGVmYXVsdE9wdGlvbnMuY29weS5zbGljZSgwKVxyXG5cdFx0fTtcclxuXHR9O1xyXG5cclxuXHRleHBvcnRzLmdldFR5cGUgPSBmdW5jdGlvbih4KSB7XHJcblx0XHRpZiAoKHgpICYmICh0eXBlb2YgKHgpID09PSBcIm9iamVjdFwiKSkge1xyXG5cdFx0XHRpZiAoeC5jb25zdHJ1Y3RvciA9PT0gRGF0ZSkgcmV0dXJuIFwiZGF0ZVwiO1xyXG5cdFx0XHRpZiAoeC5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHJldHVybiBcImFycmF5XCI7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHlwZW9mIHg7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBmaWxsT3B0aW9ucyhyYXdPcHRpb25zLCBvdGhlck9wdGlvbnMpIHtcclxuXHRcdHZhciBvcHRpb25zID0gbWVyZ2Uoe30sIHJhd09wdGlvbnMpO1xyXG5cclxuXHRcdC8vIE1vdmUgcmVjb2duaXplZCByb290LWxldmVsIHByb3BlcnRpZXMgaW50byBhIHJvb3QgbmFtZXNwYWNlXHJcblx0XHRmb3IgKHZhciBpID0gcmVjb2duaXplZFJvb3RQcm9wZXJ0aWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcblx0XHRcdHZhciBwcm9wZXJ0eSA9IHJlY29nbml6ZWRSb290UHJvcGVydGllc1tpXTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIENhcnJ5IG9uLCB1bmxlc3MgdGhpcyBwcm9wZXJ0eSBpcyBwcmVzZW50XHJcblx0XHRcdGlmICghb3B0aW9uc1twcm9wZXJ0eV0pIGNvbnRpbnVlO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gTW92ZSB0aGUgcHJvcGVydHkgaW50byB0aGUgcm9vdCBuYW1lc3BhY2VcclxuXHRcdFx0aWYgKCEob3B0aW9uc1tcIlwiXSBpbnN0YW5jZW9mIE9iamVjdCkpIG9wdGlvbnNbXCJcIl0gPSB7fTtcclxuXHRcdFx0b3B0aW9uc1tcIlwiXVtwcm9wZXJ0eV0gPSBvcHRpb25zW3Byb3BlcnR5XTtcclxuXHRcdFx0ZGVsZXRlIG9wdGlvbnNbcHJvcGVydHldO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChvdGhlck9wdGlvbnMpIHtcclxuXHRcdFx0b3B0aW9ucy5pZ25vcmUgPSBtZXJnZUFycmF5cyhvdGhlck9wdGlvbnMuaWdub3JlLCBvcHRpb25zLmlnbm9yZSk7XHJcblx0XHRcdG9wdGlvbnMuaW5jbHVkZSA9IG1lcmdlQXJyYXlzKG90aGVyT3B0aW9ucy5pbmNsdWRlLCBvcHRpb25zLmluY2x1ZGUpO1xyXG5cdFx0XHRvcHRpb25zLmNvcHkgPSBtZXJnZUFycmF5cyhvdGhlck9wdGlvbnMuY29weSwgb3B0aW9ucy5jb3B5KTtcclxuXHRcdFx0b3B0aW9ucy5vYnNlcnZlID0gbWVyZ2VBcnJheXMob3RoZXJPcHRpb25zLm9ic2VydmUsIG9wdGlvbnMub2JzZXJ2ZSk7XHJcblx0XHR9XHJcblx0XHRvcHRpb25zLmlnbm9yZSA9IG1lcmdlQXJyYXlzKG9wdGlvbnMuaWdub3JlLCBkZWZhdWx0T3B0aW9ucy5pZ25vcmUpO1xyXG5cdFx0b3B0aW9ucy5pbmNsdWRlID0gbWVyZ2VBcnJheXMob3B0aW9ucy5pbmNsdWRlLCBkZWZhdWx0T3B0aW9ucy5pbmNsdWRlKTtcclxuXHRcdG9wdGlvbnMuY29weSA9IG1lcmdlQXJyYXlzKG9wdGlvbnMuY29weSwgZGVmYXVsdE9wdGlvbnMuY29weSk7XHJcblx0XHRvcHRpb25zLm9ic2VydmUgPSBtZXJnZUFycmF5cyhvcHRpb25zLm9ic2VydmUsIGRlZmF1bHRPcHRpb25zLm9ic2VydmUpO1xyXG5cclxuXHRcdG9wdGlvbnMubWFwcGVkUHJvcGVydGllcyA9IG9wdGlvbnMubWFwcGVkUHJvcGVydGllcyB8fCB7fTtcclxuXHRcdG9wdGlvbnMuY29waWVkUHJvcGVydGllcyA9IG9wdGlvbnMuY29waWVkUHJvcGVydGllcyB8fCB7fTtcclxuXHRcdHJldHVybiBvcHRpb25zO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gbWVyZ2VBcnJheXMoYSwgYikge1xyXG5cdFx0aWYgKGV4cG9ydHMuZ2V0VHlwZShhKSAhPT0gXCJhcnJheVwiKSB7XHJcblx0XHRcdGlmIChleHBvcnRzLmdldFR5cGUoYSkgPT09IFwidW5kZWZpbmVkXCIpIGEgPSBbXTtcclxuXHRcdFx0ZWxzZSBhID0gW2FdO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGV4cG9ydHMuZ2V0VHlwZShiKSAhPT0gXCJhcnJheVwiKSB7XHJcblx0XHRcdGlmIChleHBvcnRzLmdldFR5cGUoYikgPT09IFwidW5kZWZpbmVkXCIpIGIgPSBbXTtcclxuXHRcdFx0ZWxzZSBiID0gW2JdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBrby51dGlscy5hcnJheUdldERpc3RpbmN0VmFsdWVzKGEuY29uY2F0KGIpKTtcclxuXHR9XHJcblxyXG5cdC8vIFdoZW4gdXNpbmcgYSAnY3JlYXRlJyBjYWxsYmFjaywgd2UgcHJveHkgdGhlIGRlcGVuZGVudCBvYnNlcnZhYmxlIHNvIHRoYXQgaXQgZG9lc24ndCBpbW1lZGlhdGVseSBldmFsdWF0ZSBvbiBjcmVhdGlvbi5cclxuXHQvLyBUaGUgcmVhc29uIGlzIHRoYXQgdGhlIGRlcGVuZGVudCBvYnNlcnZhYmxlcyBpbiB0aGUgdXNlci1zcGVjaWZpZWQgY2FsbGJhY2sgbWF5IGNvbnRhaW4gcmVmZXJlbmNlcyB0byBwcm9wZXJ0aWVzIHRoYXQgaGF2ZSBub3QgYmVlbiBtYXBwZWQgeWV0LlxyXG5cdGZ1bmN0aW9uIHdpdGhQcm94eURlcGVuZGVudE9ic2VydmFibGUoZGVwZW5kZW50T2JzZXJ2YWJsZXMsIGNhbGxiYWNrKSB7XHJcblx0XHR2YXIgbG9jYWxETyA9IGtvLmRlcGVuZGVudE9ic2VydmFibGU7XHJcblx0XHRrby5kZXBlbmRlbnRPYnNlcnZhYmxlID0gZnVuY3Rpb24gKHJlYWQsIG93bmVyLCBvcHRpb25zKSB7XHJcblx0XHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuXHRcdFx0aWYgKHJlYWQgJiYgdHlwZW9mIHJlYWQgPT0gXCJvYmplY3RcIikgeyAvLyBtaXJyb3JzIGNvbmRpdGlvbiBpbiBrbm9ja291dCBpbXBsZW1lbnRhdGlvbiBvZiBETydzXHJcblx0XHRcdFx0b3B0aW9ucyA9IHJlYWQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciByZWFsRGVmZXJFdmFsdWF0aW9uID0gb3B0aW9ucy5kZWZlckV2YWx1YXRpb247XHJcblxyXG5cdFx0XHR2YXIgaXNSZW1vdmVkID0gZmFsc2U7XHJcblxyXG5cdFx0XHQvLyBXZSB3cmFwIHRoZSBvcmlnaW5hbCBkZXBlbmRlbnQgb2JzZXJ2YWJsZSBzbyB0aGF0IHdlIGNhbiByZW1vdmUgaXQgZnJvbSB0aGUgJ2RlcGVuZGVudE9ic2VydmFibGVzJyBsaXN0IHdlIG5lZWQgdG8gZXZhbHVhdGUgYWZ0ZXIgbWFwcGluZyBoYXNcclxuXHRcdFx0Ly8gY29tcGxldGVkIGlmIHRoZSB1c2VyIGFscmVhZHkgZXZhbHVhdGVkIHRoZSBETyB0aGVtc2VsdmVzIGluIHRoZSBtZWFudGltZS5cclxuXHRcdFx0dmFyIHdyYXAgPSBmdW5jdGlvbiAoRE8pIHtcclxuXHRcdFx0XHQvLyBUZW1wb3JhcmlseSByZXZlcnQga28uZGVwZW5kZW50T2JzZXJ2YWJsZSwgc2luY2UgaXQgaXMgdXNlZCBpbiBrby5pc1dyaXRlYWJsZU9ic2VydmFibGVcclxuXHRcdFx0XHR2YXIgdG1wID0ga28uZGVwZW5kZW50T2JzZXJ2YWJsZTtcclxuXHRcdFx0XHRrby5kZXBlbmRlbnRPYnNlcnZhYmxlID0gcmVhbEtvRGVwZW5kZW50T2JzZXJ2YWJsZTtcclxuXHRcdFx0XHR2YXIgaXNXcml0ZWFibGUgPSBrby5pc1dyaXRlYWJsZU9ic2VydmFibGUoRE8pO1xyXG5cdFx0XHRcdGtvLmRlcGVuZGVudE9ic2VydmFibGUgPSB0bXA7XHJcblxyXG5cdFx0XHRcdHZhciB3cmFwcGVkID0gcmVhbEtvRGVwZW5kZW50T2JzZXJ2YWJsZSh7XHJcblx0XHRcdFx0XHRyZWFkOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdGlmICghaXNSZW1vdmVkKSB7XHJcblx0XHRcdFx0XHRcdFx0a28udXRpbHMuYXJyYXlSZW1vdmVJdGVtKGRlcGVuZGVudE9ic2VydmFibGVzLCBETyk7XHJcblx0XHRcdFx0XHRcdFx0aXNSZW1vdmVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gRE8uYXBwbHkoRE8sIGFyZ3VtZW50cyk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0d3JpdGU6IGlzV3JpdGVhYmxlICYmIGZ1bmN0aW9uICh2YWwpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIERPKHZhbCk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZGVmZXJFdmFsdWF0aW9uOiB0cnVlXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0aWYgKERFQlVHKSB3cmFwcGVkLl93cmFwcGVyID0gdHJ1ZTtcclxuXHRcdFx0XHR3cmFwcGVkLl9fRE8gPSBETztcclxuXHRcdFx0XHRyZXR1cm4gd3JhcHBlZDtcclxuXHRcdFx0fTtcclxuXHRcdFx0XHJcblx0XHRcdG9wdGlvbnMuZGVmZXJFdmFsdWF0aW9uID0gdHJ1ZTsgLy8gd2lsbCBlaXRoZXIgc2V0IGZvciBqdXN0IG9wdGlvbnMsIG9yIGJvdGggcmVhZC9vcHRpb25zLlxyXG5cdFx0XHR2YXIgcmVhbERlcGVuZGVudE9ic2VydmFibGUgPSBuZXcgcmVhbEtvRGVwZW5kZW50T2JzZXJ2YWJsZShyZWFkLCBvd25lciwgb3B0aW9ucyk7XHJcblxyXG5cdFx0XHRpZiAoIXJlYWxEZWZlckV2YWx1YXRpb24pIHtcclxuXHRcdFx0XHRyZWFsRGVwZW5kZW50T2JzZXJ2YWJsZSA9IHdyYXAocmVhbERlcGVuZGVudE9ic2VydmFibGUpO1xyXG5cdFx0XHRcdGRlcGVuZGVudE9ic2VydmFibGVzLnB1c2gocmVhbERlcGVuZGVudE9ic2VydmFibGUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcmVhbERlcGVuZGVudE9ic2VydmFibGU7XHJcblx0XHR9XHJcblx0XHRrby5kZXBlbmRlbnRPYnNlcnZhYmxlLmZuID0gcmVhbEtvRGVwZW5kZW50T2JzZXJ2YWJsZS5mbjtcclxuXHRcdGtvLmNvbXB1dGVkID0ga28uZGVwZW5kZW50T2JzZXJ2YWJsZTtcclxuXHRcdHZhciByZXN1bHQgPSBjYWxsYmFjaygpO1xyXG5cdFx0a28uZGVwZW5kZW50T2JzZXJ2YWJsZSA9IGxvY2FsRE87XHJcblx0XHRrby5jb21wdXRlZCA9IGtvLmRlcGVuZGVudE9ic2VydmFibGU7XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gdXBkYXRlVmlld01vZGVsKG1hcHBlZFJvb3RPYmplY3QsIHJvb3RPYmplY3QsIG9wdGlvbnMsIHBhcmVudE5hbWUsIHBhcmVudCwgcGFyZW50UHJvcGVydHlOYW1lLCBtYXBwZWRQYXJlbnQpIHtcclxuXHRcdHZhciBpc0FycmF5ID0gZXhwb3J0cy5nZXRUeXBlKGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUocm9vdE9iamVjdCkpID09PSBcImFycmF5XCI7XHJcblxyXG5cdFx0cGFyZW50UHJvcGVydHlOYW1lID0gcGFyZW50UHJvcGVydHlOYW1lIHx8IFwiXCI7XHJcblxyXG5cdFx0Ly8gSWYgdGhpcyBvYmplY3Qgd2FzIGFscmVhZHkgbWFwcGVkIHByZXZpb3VzbHksIHRha2UgdGhlIG9wdGlvbnMgZnJvbSB0aGVyZSBhbmQgbWVyZ2UgdGhlbSB3aXRoIG91ciBleGlzdGluZyBvbmVzLlxyXG5cdFx0aWYgKGV4cG9ydHMuaXNNYXBwZWQobWFwcGVkUm9vdE9iamVjdCkpIHtcclxuXHRcdFx0dmFyIHByZXZpb3VzTWFwcGluZyA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUobWFwcGVkUm9vdE9iamVjdClbbWFwcGluZ1Byb3BlcnR5XTtcclxuXHRcdFx0b3B0aW9ucyA9IG1lcmdlKHByZXZpb3VzTWFwcGluZywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGNhbGxiYWNrUGFyYW1zID0ge1xyXG5cdFx0XHRkYXRhOiByb290T2JqZWN0LFxyXG5cdFx0XHRwYXJlbnQ6IG1hcHBlZFBhcmVudCB8fCBwYXJlbnRcclxuXHRcdH07XHJcblxyXG5cdFx0dmFyIGhhc0NyZWF0ZUNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gb3B0aW9uc1twYXJlbnROYW1lXSAmJiBvcHRpb25zW3BhcmVudE5hbWVdLmNyZWF0ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xyXG5cdFx0fTtcclxuXHJcblx0XHR2YXIgY3JlYXRlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG5cdFx0XHRyZXR1cm4gd2l0aFByb3h5RGVwZW5kZW50T2JzZXJ2YWJsZShkZXBlbmRlbnRPYnNlcnZhYmxlcywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHBhcmVudCkgaW5zdGFuY2VvZiBBcnJheSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIG9wdGlvbnNbcGFyZW50TmFtZV0uY3JlYXRlKHtcclxuXHRcdFx0XHRcdFx0ZGF0YTogZGF0YSB8fCBjYWxsYmFja1BhcmFtcy5kYXRhLFxyXG5cdFx0XHRcdFx0XHRwYXJlbnQ6IGNhbGxiYWNrUGFyYW1zLnBhcmVudCxcclxuXHRcdFx0XHRcdFx0c2tpcDogZW1wdHlSZXR1cm5cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gb3B0aW9uc1twYXJlbnROYW1lXS5jcmVhdGUoe1xyXG5cdFx0XHRcdFx0XHRkYXRhOiBkYXRhIHx8IGNhbGxiYWNrUGFyYW1zLmRhdGEsXHJcblx0XHRcdFx0XHRcdHBhcmVudDogY2FsbGJhY2tQYXJhbXMucGFyZW50XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciBoYXNVcGRhdGVDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIG9wdGlvbnNbcGFyZW50TmFtZV0gJiYgb3B0aW9uc1twYXJlbnROYW1lXS51cGRhdGUgaW5zdGFuY2VvZiBGdW5jdGlvbjtcclxuXHRcdH07XHJcblxyXG5cdFx0dmFyIHVwZGF0ZUNhbGxiYWNrID0gZnVuY3Rpb24gKG9iaiwgZGF0YSkge1xyXG5cdFx0XHR2YXIgcGFyYW1zID0ge1xyXG5cdFx0XHRcdGRhdGE6IGRhdGEgfHwgY2FsbGJhY2tQYXJhbXMuZGF0YSxcclxuXHRcdFx0XHRwYXJlbnQ6IGNhbGxiYWNrUGFyYW1zLnBhcmVudCxcclxuXHRcdFx0XHR0YXJnZXQ6IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUob2JqKVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0aWYgKGtvLmlzV3JpdGVhYmxlT2JzZXJ2YWJsZShvYmopKSB7XHJcblx0XHRcdFx0cGFyYW1zLm9ic2VydmFibGUgPSBvYmo7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBvcHRpb25zW3BhcmVudE5hbWVdLnVwZGF0ZShwYXJhbXMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBhbHJlYWR5TWFwcGVkID0gdmlzaXRlZE9iamVjdHMuZ2V0KHJvb3RPYmplY3QpO1xyXG5cdFx0aWYgKGFscmVhZHlNYXBwZWQpIHtcclxuXHRcdFx0cmV0dXJuIGFscmVhZHlNYXBwZWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0cGFyZW50TmFtZSA9IHBhcmVudE5hbWUgfHwgXCJcIjtcclxuXHJcblx0XHRpZiAoIWlzQXJyYXkpIHtcclxuXHRcdFx0Ly8gRm9yIGF0b21pYyB0eXBlcywgZG8gYSBkaXJlY3QgdXBkYXRlIG9uIHRoZSBvYnNlcnZhYmxlXHJcblx0XHRcdGlmICghY2FuSGF2ZVByb3BlcnRpZXMocm9vdE9iamVjdCkpIHtcclxuXHRcdFx0XHRzd2l0Y2ggKGV4cG9ydHMuZ2V0VHlwZShyb290T2JqZWN0KSkge1xyXG5cdFx0XHRcdGNhc2UgXCJmdW5jdGlvblwiOlxyXG5cdFx0XHRcdFx0aWYgKGhhc1VwZGF0ZUNhbGxiYWNrKCkpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGtvLmlzV3JpdGVhYmxlT2JzZXJ2YWJsZShyb290T2JqZWN0KSkge1xyXG5cdFx0XHRcdFx0XHRcdHJvb3RPYmplY3QodXBkYXRlQ2FsbGJhY2socm9vdE9iamVjdCkpO1xyXG5cdFx0XHRcdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QgPSByb290T2JqZWN0O1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QgPSB1cGRhdGVDYWxsYmFjayhyb290T2JqZWN0KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdCA9IHJvb3RPYmplY3Q7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0aWYgKGtvLmlzV3JpdGVhYmxlT2JzZXJ2YWJsZShtYXBwZWRSb290T2JqZWN0KSkge1xyXG5cdFx0XHRcdFx0XHRpZiAoaGFzVXBkYXRlQ2FsbGJhY2soKSkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciB2YWx1ZVRvV3JpdGUgPSB1cGRhdGVDYWxsYmFjayhtYXBwZWRSb290T2JqZWN0KTtcclxuXHRcdFx0XHRcdFx0XHRtYXBwZWRSb290T2JqZWN0KHZhbHVlVG9Xcml0ZSk7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlVG9Xcml0ZTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgdmFsdWVUb1dyaXRlID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShyb290T2JqZWN0KTtcclxuXHRcdFx0XHRcdFx0XHRtYXBwZWRSb290T2JqZWN0KHZhbHVlVG9Xcml0ZSk7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlVG9Xcml0ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dmFyIGhhc0NyZWF0ZU9yVXBkYXRlQ2FsbGJhY2sgPSBoYXNDcmVhdGVDYWxsYmFjaygpIHx8IGhhc1VwZGF0ZUNhbGxiYWNrKCk7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAoaGFzQ3JlYXRlQ2FsbGJhY2soKSkge1xyXG5cdFx0XHRcdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QgPSBjcmVhdGVDYWxsYmFjaygpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QgPSBrby5vYnNlcnZhYmxlKGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUocm9vdE9iamVjdCkpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoaGFzVXBkYXRlQ2FsbGJhY2soKSkge1xyXG5cdFx0XHRcdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QodXBkYXRlQ2FsbGJhY2sobWFwcGVkUm9vdE9iamVjdCkpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAoaGFzQ3JlYXRlT3JVcGRhdGVDYWxsYmFjaykgcmV0dXJuIG1hcHBlZFJvb3RPYmplY3Q7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRtYXBwZWRSb290T2JqZWN0ID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShtYXBwZWRSb290T2JqZWN0KTtcclxuXHRcdFx0XHRpZiAoIW1hcHBlZFJvb3RPYmplY3QpIHtcclxuXHRcdFx0XHRcdGlmIChoYXNDcmVhdGVDYWxsYmFjaygpKSB7XHJcblx0XHRcdFx0XHRcdHZhciByZXN1bHQgPSBjcmVhdGVDYWxsYmFjaygpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGhhc1VwZGF0ZUNhbGxiYWNrKCkpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXN1bHQgPSB1cGRhdGVDYWxsYmFjayhyZXN1bHQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aWYgKGhhc1VwZGF0ZUNhbGxiYWNrKCkpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlQ2FsbGJhY2socmVzdWx0KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdCA9IHt9O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKGhhc1VwZGF0ZUNhbGxiYWNrKCkpIHtcclxuXHRcdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QgPSB1cGRhdGVDYWxsYmFjayhtYXBwZWRSb290T2JqZWN0KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHZpc2l0ZWRPYmplY3RzLnNhdmUocm9vdE9iamVjdCwgbWFwcGVkUm9vdE9iamVjdCk7XHJcblx0XHRcdFx0aWYgKGhhc1VwZGF0ZUNhbGxiYWNrKCkpIHJldHVybiBtYXBwZWRSb290T2JqZWN0O1xyXG5cclxuXHRcdFx0XHQvLyBGb3Igbm9uLWF0b21pYyB0eXBlcywgdmlzaXQgYWxsIHByb3BlcnRpZXMgYW5kIHVwZGF0ZSByZWN1cnNpdmVseVxyXG5cdFx0XHRcdHZpc2l0UHJvcGVydGllc09yQXJyYXlFbnRyaWVzKHJvb3RPYmplY3QsIGZ1bmN0aW9uIChpbmRleGVyKSB7XHJcblx0XHRcdFx0XHR2YXIgZnVsbFByb3BlcnR5TmFtZSA9IHBhcmVudFByb3BlcnR5TmFtZS5sZW5ndGggPyBwYXJlbnRQcm9wZXJ0eU5hbWUgKyBcIi5cIiArIGluZGV4ZXIgOiBpbmRleGVyO1xyXG5cclxuXHRcdFx0XHRcdGlmIChrby51dGlscy5hcnJheUluZGV4T2Yob3B0aW9ucy5pZ25vcmUsIGZ1bGxQcm9wZXJ0eU5hbWUpICE9IC0xKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZiAoa28udXRpbHMuYXJyYXlJbmRleE9mKG9wdGlvbnMuY29weSwgZnVsbFByb3BlcnR5TmFtZSkgIT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdFtpbmRleGVyXSA9IHJvb3RPYmplY3RbaW5kZXhlcl07XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRpZih0eXBlb2Ygcm9vdE9iamVjdFtpbmRleGVyXSAhPSBcIm9iamVjdFwiICYmIHR5cGVvZiByb290T2JqZWN0W2luZGV4ZXJdICE9IFwiYXJyYXlcIiAmJiBvcHRpb25zLm9ic2VydmUubGVuZ3RoID4gMCAmJiBrby51dGlscy5hcnJheUluZGV4T2Yob3B0aW9ucy5vYnNlcnZlLCBmdWxsUHJvcGVydHlOYW1lKSA9PSAtMSlcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdFtpbmRleGVyXSA9IHJvb3RPYmplY3RbaW5kZXhlcl07XHJcblx0XHRcdFx0XHRcdG9wdGlvbnMuY29waWVkUHJvcGVydGllc1tmdWxsUHJvcGVydHlOYW1lXSA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Ly8gSW4gY2FzZSB3ZSBhcmUgYWRkaW5nIGFuIGFscmVhZHkgbWFwcGVkIHByb3BlcnR5LCBmaWxsIGl0IHdpdGggdGhlIHByZXZpb3VzbHkgbWFwcGVkIHByb3BlcnR5IHZhbHVlIHRvIHByZXZlbnQgcmVjdXJzaW9uLlxyXG5cdFx0XHRcdFx0Ly8gSWYgdGhpcyBpcyBhIHByb3BlcnR5IHRoYXQgd2FzIGdlbmVyYXRlZCBieSBmcm9tSlMsIHdlIHNob3VsZCB1c2UgdGhlIG9wdGlvbnMgc3BlY2lmaWVkIHRoZXJlXHJcblx0XHRcdFx0XHR2YXIgcHJldk1hcHBlZFByb3BlcnR5ID0gdmlzaXRlZE9iamVjdHMuZ2V0KHJvb3RPYmplY3RbaW5kZXhlcl0pO1xyXG5cdFx0XHRcdFx0dmFyIHJldHZhbCA9IHVwZGF0ZVZpZXdNb2RlbChtYXBwZWRSb290T2JqZWN0W2luZGV4ZXJdLCByb290T2JqZWN0W2luZGV4ZXJdLCBvcHRpb25zLCBpbmRleGVyLCBtYXBwZWRSb290T2JqZWN0LCBmdWxsUHJvcGVydHlOYW1lLCBtYXBwZWRSb290T2JqZWN0KTtcclxuXHRcdFx0XHRcdHZhciB2YWx1ZSA9IHByZXZNYXBwZWRQcm9wZXJ0eSB8fCByZXR2YWw7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmKG9wdGlvbnMub2JzZXJ2ZS5sZW5ndGggPiAwICYmIGtvLnV0aWxzLmFycmF5SW5kZXhPZihvcHRpb25zLm9ic2VydmUsIGZ1bGxQcm9wZXJ0eU5hbWUpID09IC0xKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRtYXBwZWRSb290T2JqZWN0W2luZGV4ZXJdID0gdmFsdWUoKTtcclxuXHRcdFx0XHRcdFx0b3B0aW9ucy5jb3BpZWRQcm9wZXJ0aWVzW2Z1bGxQcm9wZXJ0eU5hbWVdID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAoa28uaXNXcml0ZWFibGVPYnNlcnZhYmxlKG1hcHBlZFJvb3RPYmplY3RbaW5kZXhlcl0pKSB7XHJcblx0XHRcdFx0XHRcdHZhbHVlID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZSh2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdGlmIChtYXBwZWRSb290T2JqZWN0W2luZGV4ZXJdKCkgIT09IHZhbHVlKSB7XHJcblx0XHRcdFx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdFtpbmRleGVyXSh2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHZhbHVlID0gbWFwcGVkUm9vdE9iamVjdFtpbmRleGVyXSA9PT0gdW5kZWZpbmVkID8gdmFsdWUgOiBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdFtpbmRleGVyXSA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdG9wdGlvbnMubWFwcGVkUHJvcGVydGllc1tmdWxsUHJvcGVydHlOYW1lXSA9IHRydWU7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7IC8vbWFwcGVkUm9vdE9iamVjdCBpcyBhbiBhcnJheVxyXG5cdFx0XHR2YXIgY2hhbmdlcyA9IFtdO1xyXG5cclxuXHRcdFx0dmFyIGhhc0tleUNhbGxiYWNrID0gZmFsc2U7XHJcblx0XHRcdHZhciBrZXlDYWxsYmFjayA9IGZ1bmN0aW9uICh4KSB7XHJcblx0XHRcdFx0cmV0dXJuIHg7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKG9wdGlvbnNbcGFyZW50TmFtZV0gJiYgb3B0aW9uc1twYXJlbnROYW1lXS5rZXkpIHtcclxuXHRcdFx0XHRrZXlDYWxsYmFjayA9IG9wdGlvbnNbcGFyZW50TmFtZV0ua2V5O1xyXG5cdFx0XHRcdGhhc0tleUNhbGxiYWNrID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCFrby5pc09ic2VydmFibGUobWFwcGVkUm9vdE9iamVjdCkpIHtcclxuXHRcdFx0XHQvLyBXaGVuIGNyZWF0aW5nIHRoZSBuZXcgb2JzZXJ2YWJsZSBhcnJheSwgYWxzbyBhZGQgYSBidW5jaCBvZiB1dGlsaXR5IGZ1bmN0aW9ucyB0aGF0IHRha2UgdGhlICdrZXknIG9mIHRoZSBhcnJheSBpdGVtcyBpbnRvIGFjY291bnQuXHJcblx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdCA9IGtvLm9ic2VydmFibGVBcnJheShbXSk7XHJcblxyXG5cdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QubWFwcGVkUmVtb3ZlID0gZnVuY3Rpb24gKHZhbHVlT3JQcmVkaWNhdGUpIHtcclxuXHRcdFx0XHRcdHZhciBwcmVkaWNhdGUgPSB0eXBlb2YgdmFsdWVPclByZWRpY2F0ZSA9PSBcImZ1bmN0aW9uXCIgPyB2YWx1ZU9yUHJlZGljYXRlIDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlID09PSBrZXlDYWxsYmFjayh2YWx1ZU9yUHJlZGljYXRlKTtcclxuXHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdHJldHVybiBtYXBwZWRSb290T2JqZWN0LnJlbW92ZShmdW5jdGlvbiAoaXRlbSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJlZGljYXRlKGtleUNhbGxiYWNrKGl0ZW0pKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdC5tYXBwZWRSZW1vdmVBbGwgPSBmdW5jdGlvbiAoYXJyYXlPZlZhbHVlcykge1xyXG5cdFx0XHRcdFx0dmFyIGFycmF5T2ZLZXlzID0gZmlsdGVyQXJyYXlCeUtleShhcnJheU9mVmFsdWVzLCBrZXlDYWxsYmFjayk7XHJcblx0XHRcdFx0XHRyZXR1cm4gbWFwcGVkUm9vdE9iamVjdC5yZW1vdmUoZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGtvLnV0aWxzLmFycmF5SW5kZXhPZihhcnJheU9mS2V5cywga2V5Q2FsbGJhY2soaXRlbSkpICE9IC0xO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRtYXBwZWRSb290T2JqZWN0Lm1hcHBlZERlc3Ryb3kgPSBmdW5jdGlvbiAodmFsdWVPclByZWRpY2F0ZSkge1xyXG5cdFx0XHRcdFx0dmFyIHByZWRpY2F0ZSA9IHR5cGVvZiB2YWx1ZU9yUHJlZGljYXRlID09IFwiZnVuY3Rpb25cIiA/IHZhbHVlT3JQcmVkaWNhdGUgOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IGtleUNhbGxiYWNrKHZhbHVlT3JQcmVkaWNhdGUpO1xyXG5cdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0cmV0dXJuIG1hcHBlZFJvb3RPYmplY3QuZGVzdHJveShmdW5jdGlvbiAoaXRlbSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJlZGljYXRlKGtleUNhbGxiYWNrKGl0ZW0pKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bWFwcGVkUm9vdE9iamVjdC5tYXBwZWREZXN0cm95QWxsID0gZnVuY3Rpb24gKGFycmF5T2ZWYWx1ZXMpIHtcclxuXHRcdFx0XHRcdHZhciBhcnJheU9mS2V5cyA9IGZpbHRlckFycmF5QnlLZXkoYXJyYXlPZlZhbHVlcywga2V5Q2FsbGJhY2spO1xyXG5cdFx0XHRcdFx0cmV0dXJuIG1hcHBlZFJvb3RPYmplY3QuZGVzdHJveShmdW5jdGlvbiAoaXRlbSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4ga28udXRpbHMuYXJyYXlJbmRleE9mKGFycmF5T2ZLZXlzLCBrZXlDYWxsYmFjayhpdGVtKSkgIT0gLTE7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdG1hcHBlZFJvb3RPYmplY3QubWFwcGVkSW5kZXhPZiA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcblx0XHRcdFx0XHR2YXIga2V5cyA9IGZpbHRlckFycmF5QnlLZXkobWFwcGVkUm9vdE9iamVjdCgpLCBrZXlDYWxsYmFjayk7XHJcblx0XHRcdFx0XHR2YXIga2V5ID0ga2V5Q2FsbGJhY2soaXRlbSk7XHJcblx0XHRcdFx0XHRyZXR1cm4ga28udXRpbHMuYXJyYXlJbmRleE9mKGtleXMsIGtleSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRtYXBwZWRSb290T2JqZWN0Lm1hcHBlZEdldCA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gbWFwcGVkUm9vdE9iamVjdCgpW21hcHBlZFJvb3RPYmplY3QubWFwcGVkSW5kZXhPZihpdGVtKV07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRtYXBwZWRSb290T2JqZWN0Lm1hcHBlZENyZWF0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cdFx0XHRcdFx0aWYgKG1hcHBlZFJvb3RPYmplY3QubWFwcGVkSW5kZXhPZih2YWx1ZSkgIT09IC0xKSB7XHJcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRoZXJlIGFscmVhZHkgaXMgYW4gb2JqZWN0IHdpdGggdGhlIGtleSB0aGF0IHlvdSBzcGVjaWZpZWQuXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHZhciBpdGVtID0gaGFzQ3JlYXRlQ2FsbGJhY2soKSA/IGNyZWF0ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xyXG5cdFx0XHRcdFx0aWYgKGhhc1VwZGF0ZUNhbGxiYWNrKCkpIHtcclxuXHRcdFx0XHRcdFx0dmFyIG5ld1ZhbHVlID0gdXBkYXRlQ2FsbGJhY2soaXRlbSwgdmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRpZiAoa28uaXNXcml0ZWFibGVPYnNlcnZhYmxlKGl0ZW0pKSB7XHJcblx0XHRcdFx0XHRcdFx0aXRlbShuZXdWYWx1ZSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0aXRlbSA9IG5ld1ZhbHVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRtYXBwZWRSb290T2JqZWN0LnB1c2goaXRlbSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gaXRlbTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBjdXJyZW50QXJyYXlLZXlzID0gZmlsdGVyQXJyYXlCeUtleShrby51dGlscy51bndyYXBPYnNlcnZhYmxlKG1hcHBlZFJvb3RPYmplY3QpLCBrZXlDYWxsYmFjaykuc29ydCgpO1xyXG5cdFx0XHR2YXIgbmV3QXJyYXlLZXlzID0gZmlsdGVyQXJyYXlCeUtleShyb290T2JqZWN0LCBrZXlDYWxsYmFjayk7XHJcblx0XHRcdGlmIChoYXNLZXlDYWxsYmFjaykgbmV3QXJyYXlLZXlzLnNvcnQoKTtcclxuXHRcdFx0dmFyIGVkaXRTY3JpcHQgPSBrby51dGlscy5jb21wYXJlQXJyYXlzKGN1cnJlbnRBcnJheUtleXMsIG5ld0FycmF5S2V5cyk7XHJcblxyXG5cdFx0XHR2YXIgaWdub3JlSW5kZXhPZiA9IHt9O1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIGksIGo7XHJcblxyXG5cdFx0XHR2YXIgdW53cmFwcGVkUm9vdE9iamVjdCA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUocm9vdE9iamVjdCk7XHJcblx0XHRcdHZhciBpdGVtc0J5S2V5ID0ge307XHJcblx0XHRcdHZhciBvcHRpbWl6ZWRLZXlzID0gdHJ1ZTtcclxuXHRcdFx0Zm9yIChpID0gMCwgaiA9IHVud3JhcHBlZFJvb3RPYmplY3QubGVuZ3RoOyBpIDwgajsgaSsrKSB7XHJcblx0XHRcdFx0dmFyIGtleSA9IGtleUNhbGxiYWNrKHVud3JhcHBlZFJvb3RPYmplY3RbaV0pO1xyXG5cdFx0XHRcdGlmIChrZXkgPT09IHVuZGVmaW5lZCB8fCBrZXkgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuXHRcdFx0XHRcdG9wdGltaXplZEtleXMgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpdGVtc0J5S2V5W2tleV0gPSB1bndyYXBwZWRSb290T2JqZWN0W2ldO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgbmV3Q29udGVudHMgPSBbXTtcclxuXHRcdFx0dmFyIHBhc3NlZE92ZXIgPSAwO1xyXG5cdFx0XHRmb3IgKGkgPSAwLCBqID0gZWRpdFNjcmlwdC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcclxuXHRcdFx0XHR2YXIga2V5ID0gZWRpdFNjcmlwdFtpXTtcclxuXHRcdFx0XHR2YXIgbWFwcGVkSXRlbTtcclxuXHRcdFx0XHR2YXIgZnVsbFByb3BlcnR5TmFtZSA9IHBhcmVudFByb3BlcnR5TmFtZSArIFwiW1wiICsgaSArIFwiXVwiO1xyXG5cdFx0XHRcdHN3aXRjaCAoa2V5LnN0YXR1cykge1xyXG5cdFx0XHRcdGNhc2UgXCJhZGRlZFwiOlxyXG5cdFx0XHRcdFx0dmFyIGl0ZW0gPSBvcHRpbWl6ZWRLZXlzID8gaXRlbXNCeUtleVtrZXkudmFsdWVdIDogZ2V0SXRlbUJ5S2V5KGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUocm9vdE9iamVjdCksIGtleS52YWx1ZSwga2V5Q2FsbGJhY2spO1xyXG5cdFx0XHRcdFx0bWFwcGVkSXRlbSA9IHVwZGF0ZVZpZXdNb2RlbCh1bmRlZmluZWQsIGl0ZW0sIG9wdGlvbnMsIHBhcmVudE5hbWUsIG1hcHBlZFJvb3RPYmplY3QsIGZ1bGxQcm9wZXJ0eU5hbWUsIHBhcmVudCk7XHJcblx0XHRcdFx0XHRpZighaGFzQ3JlYXRlQ2FsbGJhY2soKSkge1xyXG5cdFx0XHRcdFx0XHRtYXBwZWRJdGVtID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShtYXBwZWRJdGVtKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR2YXIgaW5kZXggPSBpZ25vcmFibGVJbmRleE9mKGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUocm9vdE9iamVjdCksIGl0ZW0sIGlnbm9yZUluZGV4T2YpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAobWFwcGVkSXRlbSA9PT0gZW1wdHlSZXR1cm4pIHtcclxuXHRcdFx0XHRcdFx0cGFzc2VkT3ZlcisrO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0bmV3Q29udGVudHNbaW5kZXggLSBwYXNzZWRPdmVyXSA9IG1hcHBlZEl0ZW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWdub3JlSW5kZXhPZltpbmRleF0gPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBcInJldGFpbmVkXCI6XHJcblx0XHRcdFx0XHR2YXIgaXRlbSA9IG9wdGltaXplZEtleXMgPyBpdGVtc0J5S2V5W2tleS52YWx1ZV0gOiBnZXRJdGVtQnlLZXkoa28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShyb290T2JqZWN0KSwga2V5LnZhbHVlLCBrZXlDYWxsYmFjayk7XHJcblx0XHRcdFx0XHRtYXBwZWRJdGVtID0gZ2V0SXRlbUJ5S2V5KG1hcHBlZFJvb3RPYmplY3QsIGtleS52YWx1ZSwga2V5Q2FsbGJhY2spO1xyXG5cdFx0XHRcdFx0dXBkYXRlVmlld01vZGVsKG1hcHBlZEl0ZW0sIGl0ZW0sIG9wdGlvbnMsIHBhcmVudE5hbWUsIG1hcHBlZFJvb3RPYmplY3QsIGZ1bGxQcm9wZXJ0eU5hbWUsIHBhcmVudCk7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGluZGV4ID0gaWdub3JhYmxlSW5kZXhPZihrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHJvb3RPYmplY3QpLCBpdGVtLCBpZ25vcmVJbmRleE9mKTtcclxuXHRcdFx0XHRcdG5ld0NvbnRlbnRzW2luZGV4XSA9IG1hcHBlZEl0ZW07XHJcblx0XHRcdFx0XHRpZ25vcmVJbmRleE9mW2luZGV4XSA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIFwiZGVsZXRlZFwiOlxyXG5cdFx0XHRcdFx0bWFwcGVkSXRlbSA9IGdldEl0ZW1CeUtleShtYXBwZWRSb290T2JqZWN0LCBrZXkudmFsdWUsIGtleUNhbGxiYWNrKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Y2hhbmdlcy5wdXNoKHtcclxuXHRcdFx0XHRcdGV2ZW50OiBrZXkuc3RhdHVzLFxyXG5cdFx0XHRcdFx0aXRlbTogbWFwcGVkSXRlbVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtYXBwZWRSb290T2JqZWN0KG5ld0NvbnRlbnRzKTtcclxuXHJcblx0XHRcdGlmIChvcHRpb25zW3BhcmVudE5hbWVdICYmIG9wdGlvbnNbcGFyZW50TmFtZV0uYXJyYXlDaGFuZ2VkKSB7XHJcblx0XHRcdFx0a28udXRpbHMuYXJyYXlGb3JFYWNoKGNoYW5nZXMsIGZ1bmN0aW9uIChjaGFuZ2UpIHtcclxuXHRcdFx0XHRcdG9wdGlvbnNbcGFyZW50TmFtZV0uYXJyYXlDaGFuZ2VkKGNoYW5nZS5ldmVudCwgY2hhbmdlLml0ZW0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG1hcHBlZFJvb3RPYmplY3Q7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBpZ25vcmFibGVJbmRleE9mKGFycmF5LCBpdGVtLCBpZ25vcmVJbmRpY2VzKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMCwgaiA9IGFycmF5Lmxlbmd0aDsgaSA8IGo7IGkrKykge1xyXG5cdFx0XHRpZiAoaWdub3JlSW5kaWNlc1tpXSA9PT0gdHJ1ZSkgY29udGludWU7XHJcblx0XHRcdGlmIChhcnJheVtpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG1hcEtleShpdGVtLCBjYWxsYmFjaykge1xyXG5cdFx0dmFyIG1hcHBlZEl0ZW07XHJcblx0XHRpZiAoY2FsbGJhY2spIG1hcHBlZEl0ZW0gPSBjYWxsYmFjayhpdGVtKTtcclxuXHRcdGlmIChleHBvcnRzLmdldFR5cGUobWFwcGVkSXRlbSkgPT09IFwidW5kZWZpbmVkXCIpIG1hcHBlZEl0ZW0gPSBpdGVtO1xyXG5cclxuXHRcdHJldHVybiBrby51dGlscy51bndyYXBPYnNlcnZhYmxlKG1hcHBlZEl0ZW0pO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0SXRlbUJ5S2V5KGFycmF5LCBrZXksIGNhbGxiYWNrKSB7XHJcblx0XHRhcnJheSA9IGtvLnV0aWxzLnVud3JhcE9ic2VydmFibGUoYXJyYXkpO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDAsIGogPSBhcnJheS5sZW5ndGg7IGkgPCBqOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBhcnJheVtpXTtcclxuXHRcdFx0aWYgKG1hcEtleShpdGVtLCBjYWxsYmFjaykgPT09IGtleSkgcmV0dXJuIGl0ZW07XHJcblx0XHR9XHJcblxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiV2hlbiBjYWxsaW5nIGtvLnVwZGF0ZSosIHRoZSBrZXkgJ1wiICsga2V5ICsgXCInIHdhcyBub3QgZm91bmQhXCIpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZmlsdGVyQXJyYXlCeUtleShhcnJheSwgY2FsbGJhY2spIHtcclxuXHRcdHJldHVybiBrby51dGlscy5hcnJheU1hcChrby51dGlscy51bndyYXBPYnNlcnZhYmxlKGFycmF5KSwgZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHRcdFx0aWYgKGNhbGxiYWNrKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1hcEtleShpdGVtLCBjYWxsYmFjayk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIGl0ZW07XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gdmlzaXRQcm9wZXJ0aWVzT3JBcnJheUVudHJpZXMocm9vdE9iamVjdCwgdmlzaXRvckNhbGxiYWNrKSB7XHJcblx0XHRpZiAoZXhwb3J0cy5nZXRUeXBlKHJvb3RPYmplY3QpID09PSBcImFycmF5XCIpIHtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByb290T2JqZWN0Lmxlbmd0aDsgaSsrKVxyXG5cdFx0XHR2aXNpdG9yQ2FsbGJhY2soaSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gcm9vdE9iamVjdClcclxuXHRcdFx0dmlzaXRvckNhbGxiYWNrKHByb3BlcnR5TmFtZSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0ZnVuY3Rpb24gY2FuSGF2ZVByb3BlcnRpZXMob2JqZWN0KSB7XHJcblx0XHR2YXIgdHlwZSA9IGV4cG9ydHMuZ2V0VHlwZShvYmplY3QpO1xyXG5cdFx0cmV0dXJuICgodHlwZSA9PT0gXCJvYmplY3RcIikgfHwgKHR5cGUgPT09IFwiYXJyYXlcIikpICYmIChvYmplY3QgIT09IG51bGwpO1xyXG5cdH1cclxuXHJcblx0Ly8gQmFzZWQgb24gdGhlIHBhcmVudE5hbWUsIHRoaXMgY3JlYXRlcyBhIGZ1bGx5IGNsYXNzaWZpZWQgbmFtZSBvZiBhIHByb3BlcnR5XHJcblxyXG5cdGZ1bmN0aW9uIGdldFByb3BlcnR5TmFtZShwYXJlbnROYW1lLCBwYXJlbnQsIGluZGV4ZXIpIHtcclxuXHRcdHZhciBwcm9wZXJ0eU5hbWUgPSBwYXJlbnROYW1lIHx8IFwiXCI7XHJcblx0XHRpZiAoZXhwb3J0cy5nZXRUeXBlKHBhcmVudCkgPT09IFwiYXJyYXlcIikge1xyXG5cdFx0XHRpZiAocGFyZW50TmFtZSkge1xyXG5cdFx0XHRcdHByb3BlcnR5TmFtZSArPSBcIltcIiArIGluZGV4ZXIgKyBcIl1cIjtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHBhcmVudE5hbWUpIHtcclxuXHRcdFx0XHRwcm9wZXJ0eU5hbWUgKz0gXCIuXCI7XHJcblx0XHRcdH1cclxuXHRcdFx0cHJvcGVydHlOYW1lICs9IGluZGV4ZXI7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcHJvcGVydHlOYW1lO1xyXG5cdH1cclxuXHJcblx0ZXhwb3J0cy52aXNpdE1vZGVsID0gZnVuY3Rpb24gKHJvb3RPYmplY3QsIGNhbGxiYWNrLCBvcHRpb25zKSB7XHJcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHRcdG9wdGlvbnMudmlzaXRlZE9iamVjdHMgPSBvcHRpb25zLnZpc2l0ZWRPYmplY3RzIHx8IG5ldyBvYmplY3RMb29rdXAoKTtcclxuXHJcblx0XHR2YXIgbWFwcGVkUm9vdE9iamVjdDtcclxuXHRcdHZhciB1bndyYXBwZWRSb290T2JqZWN0ID0ga28udXRpbHMudW53cmFwT2JzZXJ2YWJsZShyb290T2JqZWN0KTtcclxuXHJcblx0XHRpZiAoIWNhbkhhdmVQcm9wZXJ0aWVzKHVud3JhcHBlZFJvb3RPYmplY3QpKSB7XHJcblx0XHRcdHJldHVybiBjYWxsYmFjayhyb290T2JqZWN0LCBvcHRpb25zLnBhcmVudE5hbWUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0b3B0aW9ucyA9IGZpbGxPcHRpb25zKG9wdGlvbnMsIHVud3JhcHBlZFJvb3RPYmplY3RbbWFwcGluZ1Byb3BlcnR5XSk7XHJcblxyXG5cdFx0XHQvLyBPbmx5IGRvIGEgY2FsbGJhY2ssIGJ1dCBpZ25vcmUgdGhlIHJlc3VsdHNcclxuXHRcdFx0Y2FsbGJhY2socm9vdE9iamVjdCwgb3B0aW9ucy5wYXJlbnROYW1lKTtcclxuXHRcdFx0bWFwcGVkUm9vdE9iamVjdCA9IGV4cG9ydHMuZ2V0VHlwZSh1bndyYXBwZWRSb290T2JqZWN0KSA9PT0gXCJhcnJheVwiID8gW10gOiB7fTtcclxuXHRcdH1cclxuXHJcblx0XHRvcHRpb25zLnZpc2l0ZWRPYmplY3RzLnNhdmUocm9vdE9iamVjdCwgbWFwcGVkUm9vdE9iamVjdCk7XHJcblxyXG5cdFx0dmFyIHBhcmVudE5hbWUgPSBvcHRpb25zLnBhcmVudE5hbWU7XHJcblx0XHR2aXNpdFByb3BlcnRpZXNPckFycmF5RW50cmllcyh1bndyYXBwZWRSb290T2JqZWN0LCBmdW5jdGlvbiAoaW5kZXhlcikge1xyXG5cdFx0XHRpZiAob3B0aW9ucy5pZ25vcmUgJiYga28udXRpbHMuYXJyYXlJbmRleE9mKG9wdGlvbnMuaWdub3JlLCBpbmRleGVyKSAhPSAtMSkgcmV0dXJuO1xyXG5cclxuXHRcdFx0dmFyIHByb3BlcnR5VmFsdWUgPSB1bndyYXBwZWRSb290T2JqZWN0W2luZGV4ZXJdO1xyXG5cdFx0XHRvcHRpb25zLnBhcmVudE5hbWUgPSBnZXRQcm9wZXJ0eU5hbWUocGFyZW50TmFtZSwgdW53cmFwcGVkUm9vdE9iamVjdCwgaW5kZXhlcik7XHJcblxyXG5cdFx0XHQvLyBJZiB3ZSBkb24ndCB3YW50IHRvIGV4cGxpY2l0bHkgY29weSB0aGUgdW5tYXBwZWQgcHJvcGVydHkuLi5cclxuXHRcdFx0aWYgKGtvLnV0aWxzLmFycmF5SW5kZXhPZihvcHRpb25zLmNvcHksIGluZGV4ZXIpID09PSAtMSkge1xyXG5cdFx0XHRcdC8vIC4uLmZpbmQgb3V0IGlmIGl0J3MgYSBwcm9wZXJ0eSB3ZSB3YW50IHRvIGV4cGxpY2l0bHkgaW5jbHVkZVxyXG5cdFx0XHRcdGlmIChrby51dGlscy5hcnJheUluZGV4T2Yob3B0aW9ucy5pbmNsdWRlLCBpbmRleGVyKSA9PT0gLTEpIHtcclxuXHRcdFx0XHRcdC8vIFRoZSBtYXBwZWQgcHJvcGVydGllcyBvYmplY3QgY29udGFpbnMgYWxsIHRoZSBwcm9wZXJ0aWVzIHRoYXQgd2VyZSBwYXJ0IG9mIHRoZSBvcmlnaW5hbCBvYmplY3QuXHJcblx0XHRcdFx0XHQvLyBJZiBhIHByb3BlcnR5IGRvZXMgbm90IGV4aXN0LCBhbmQgaXQgaXMgbm90IGJlY2F1c2UgaXQgaXMgcGFydCBvZiBhbiBhcnJheSAoZS5nLiBcIm15UHJvcFszXVwiKSwgdGhlbiBpdCBzaG91bGQgbm90IGJlIHVubWFwcGVkLlxyXG5cdFx0XHRcdCAgICBpZiAodW53cmFwcGVkUm9vdE9iamVjdFttYXBwaW5nUHJvcGVydHldXHJcblx0XHRcdFx0ICAgICAgICAmJiB1bndyYXBwZWRSb290T2JqZWN0W21hcHBpbmdQcm9wZXJ0eV0ubWFwcGVkUHJvcGVydGllcyAmJiAhdW53cmFwcGVkUm9vdE9iamVjdFttYXBwaW5nUHJvcGVydHldLm1hcHBlZFByb3BlcnRpZXNbaW5kZXhlcl1cclxuXHRcdFx0XHQgICAgICAgICYmIHVud3JhcHBlZFJvb3RPYmplY3RbbWFwcGluZ1Byb3BlcnR5XS5jb3BpZWRQcm9wZXJ0aWVzICYmICF1bndyYXBwZWRSb290T2JqZWN0W21hcHBpbmdQcm9wZXJ0eV0uY29waWVkUHJvcGVydGllc1tpbmRleGVyXVxyXG5cdFx0XHRcdCAgICAgICAgJiYgIShleHBvcnRzLmdldFR5cGUodW53cmFwcGVkUm9vdE9iamVjdCkgPT09IFwiYXJyYXlcIikpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIG91dHB1dFByb3BlcnR5O1xyXG5cdFx0XHRzd2l0Y2ggKGV4cG9ydHMuZ2V0VHlwZShrby51dGlscy51bndyYXBPYnNlcnZhYmxlKHByb3BlcnR5VmFsdWUpKSkge1xyXG5cdFx0XHRjYXNlIFwib2JqZWN0XCI6XHJcblx0XHRcdGNhc2UgXCJhcnJheVwiOlxyXG5cdFx0XHRjYXNlIFwidW5kZWZpbmVkXCI6XHJcblx0XHRcdFx0dmFyIHByZXZpb3VzbHlNYXBwZWRWYWx1ZSA9IG9wdGlvbnMudmlzaXRlZE9iamVjdHMuZ2V0KHByb3BlcnR5VmFsdWUpO1xyXG5cdFx0XHRcdG1hcHBlZFJvb3RPYmplY3RbaW5kZXhlcl0gPSAoZXhwb3J0cy5nZXRUeXBlKHByZXZpb3VzbHlNYXBwZWRWYWx1ZSkgIT09IFwidW5kZWZpbmVkXCIpID8gcHJldmlvdXNseU1hcHBlZFZhbHVlIDogZXhwb3J0cy52aXNpdE1vZGVsKHByb3BlcnR5VmFsdWUsIGNhbGxiYWNrLCBvcHRpb25zKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRtYXBwZWRSb290T2JqZWN0W2luZGV4ZXJdID0gY2FsbGJhY2socHJvcGVydHlWYWx1ZSwgb3B0aW9ucy5wYXJlbnROYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIG1hcHBlZFJvb3RPYmplY3Q7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzaW1wbGVPYmplY3RMb29rdXAoKSB7XHJcblx0XHR2YXIga2V5cyA9IFtdO1xyXG5cdFx0dmFyIHZhbHVlcyA9IFtdO1xyXG5cdFx0dGhpcy5zYXZlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuXHRcdFx0dmFyIGV4aXN0aW5nSW5kZXggPSBrby51dGlscy5hcnJheUluZGV4T2Yoa2V5cywga2V5KTtcclxuXHRcdFx0aWYgKGV4aXN0aW5nSW5kZXggPj0gMCkgdmFsdWVzW2V4aXN0aW5nSW5kZXhdID0gdmFsdWU7XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGtleXMucHVzaChrZXkpO1xyXG5cdFx0XHRcdHZhbHVlcy5wdXNoKHZhbHVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdHRoaXMuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xyXG5cdFx0XHR2YXIgZXhpc3RpbmdJbmRleCA9IGtvLnV0aWxzLmFycmF5SW5kZXhPZihrZXlzLCBrZXkpO1xyXG5cdFx0XHR2YXIgdmFsdWUgPSAoZXhpc3RpbmdJbmRleCA+PSAwKSA/IHZhbHVlc1tleGlzdGluZ0luZGV4XSA6IHVuZGVmaW5lZDtcclxuXHRcdFx0cmV0dXJuIHZhbHVlO1xyXG5cdFx0fTtcclxuXHR9O1xyXG5cdFxyXG5cdGZ1bmN0aW9uIG9iamVjdExvb2t1cCgpIHtcclxuXHRcdHZhciBidWNrZXRzID0ge307XHJcblx0XHRcclxuXHRcdHZhciBmaW5kQnVja2V0ID0gZnVuY3Rpb24oa2V5KSB7XHJcblx0XHRcdHZhciBidWNrZXRLZXk7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0YnVja2V0S2V5ID0ga2V5Oy8vSlNPTi5zdHJpbmdpZnkoa2V5KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRcdGJ1Y2tldEtleSA9IFwiJCQkXCI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBidWNrZXQgPSBidWNrZXRzW2J1Y2tldEtleV07XHJcblx0XHRcdGlmIChidWNrZXQgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdGJ1Y2tldCA9IG5ldyBzaW1wbGVPYmplY3RMb29rdXAoKTtcclxuXHRcdFx0XHRidWNrZXRzW2J1Y2tldEtleV0gPSBidWNrZXQ7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGJ1Y2tldDtcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHRoaXMuc2F2ZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcblx0XHRcdGZpbmRCdWNrZXQoa2V5KS5zYXZlKGtleSwgdmFsdWUpO1xyXG5cdFx0fTtcclxuXHRcdHRoaXMuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xyXG5cdFx0XHRyZXR1cm4gZmluZEJ1Y2tldChrZXkpLmdldChrZXkpO1xyXG5cdFx0fTtcclxuXHR9O1xyXG59KSk7XHJcbiIsIi8qIVxuICogS25vY2tvdXQgSmF2YVNjcmlwdCBsaWJyYXJ5IHYzLjIuMFxuICogKGMpIFN0ZXZlbiBTYW5kZXJzb24gLSBodHRwOi8va25vY2tvdXRqcy5jb20vXG4gKiBMaWNlbnNlOiBNSVQgKGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwKVxuICovXG5cbihmdW5jdGlvbigpIHsoZnVuY3Rpb24ocCl7dmFyIHM9dGhpc3x8KDAsZXZhbCkoXCJ0aGlzXCIpLHY9cy5kb2N1bWVudCxMPXMubmF2aWdhdG9yLHc9cy5qUXVlcnksRD1zLkpTT047KGZ1bmN0aW9uKHApe1wiZnVuY3Rpb25cIj09PXR5cGVvZiByZXF1aXJlJiZcIm9iamVjdFwiPT09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PT10eXBlb2YgbW9kdWxlP3AobW9kdWxlLmV4cG9ydHN8fGV4cG9ydHMscmVxdWlyZSk6XCJmdW5jdGlvblwiPT09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wiZXhwb3J0c1wiLFwicmVxdWlyZVwiXSxwKTpwKHMua289e30pfSkoZnVuY3Rpb24oTSxOKXtmdW5jdGlvbiBIKGEsZCl7cmV0dXJuIG51bGw9PT1hfHx0eXBlb2YgYSBpbiBSP2E9PT1kOiExfWZ1bmN0aW9uIFMoYSxkKXt2YXIgYztyZXR1cm4gZnVuY3Rpb24oKXtjfHwoYz1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Yz1wO2EoKX0sZCkpfX1mdW5jdGlvbiBUKGEsZCl7dmFyIGM7cmV0dXJuIGZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KGMpO1xuYz1zZXRUaW1lb3V0KGEsZCl9fWZ1bmN0aW9uIEkoYixkLGMsZSl7YS5kW2JdPXtpbml0OmZ1bmN0aW9uKGIsaCxrLGYsbSl7dmFyIGwscTthLnMoZnVuY3Rpb24oKXt2YXIgZj1hLmEuYyhoKCkpLGs9IWMhPT0hZix6PSFxO2lmKHp8fGR8fGshPT1sKXomJmEuWS5sYSgpJiYocT1hLmEuaWEoYS5mLmNoaWxkTm9kZXMoYiksITApKSxrPyh6fHxhLmYuVChiLGEuYS5pYShxKSksYS5DYShlP2UobSxmKTptLGIpKTphLmYuamEoYiksbD1rfSxudWxsLHtvOmJ9KTtyZXR1cm57Y29udHJvbHNEZXNjZW5kYW50QmluZGluZ3M6ITB9fX07YS5oLmhhW2JdPSExO2EuZi5RW2JdPSEwfXZhciBhPVwidW5kZWZpbmVkXCIhPT10eXBlb2YgTT9NOnt9O2EuYj1mdW5jdGlvbihiLGQpe2Zvcih2YXIgYz1iLnNwbGl0KFwiLlwiKSxlPWEsZz0wO2c8Yy5sZW5ndGgtMTtnKyspZT1lW2NbZ11dO2VbY1tjLmxlbmd0aC0xXV09ZH07YS5BPWZ1bmN0aW9uKGEsZCxjKXthW2RdPWN9O2EudmVyc2lvbj1cIjMuMi4wXCI7XG5hLmIoXCJ2ZXJzaW9uXCIsYS52ZXJzaW9uKTthLmE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGEsYil7Zm9yKHZhciBjIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShjKSYmYihjLGFbY10pfWZ1bmN0aW9uIGQoYSxiKXtpZihiKWZvcih2YXIgYyBpbiBiKWIuaGFzT3duUHJvcGVydHkoYykmJihhW2NdPWJbY10pO3JldHVybiBhfWZ1bmN0aW9uIGMoYSxiKXthLl9fcHJvdG9fXz1iO3JldHVybiBhfXZhciBlPXtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSxnPXt9LGg9e307Z1tMJiYvRmlyZWZveFxcLzIvaS50ZXN0KEwudXNlckFnZW50KT9cIktleWJvYXJkRXZlbnRcIjpcIlVJRXZlbnRzXCJdPVtcImtleXVwXCIsXCJrZXlkb3duXCIsXCJrZXlwcmVzc1wiXTtnLk1vdXNlRXZlbnRzPVwiY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmVcIi5zcGxpdChcIiBcIik7YihnLGZ1bmN0aW9uKGEsYil7aWYoYi5sZW5ndGgpZm9yKHZhciBjPVxuMCxkPWIubGVuZ3RoO2M8ZDtjKyspaFtiW2NdXT1hfSk7dmFyIGs9e3Byb3BlcnR5Y2hhbmdlOiEwfSxmPXYmJmZ1bmN0aW9uKCl7Zm9yKHZhciBhPTMsYj12LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksYz1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaVwiKTtiLmlubmVySFRNTD1cIlxceDNjIS0tW2lmIGd0IElFIFwiKyArK2ErXCJdPjxpPjwvaT48IVtlbmRpZl0tLVxceDNlXCIsY1swXTspO3JldHVybiA0PGE/YTpwfSgpO3JldHVybnt2YjpbXCJhdXRoZW50aWNpdHlfdG9rZW5cIiwvXl9fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuKF8uKik/JC9dLHU6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2M8ZDtjKyspYihhW2NdLGMpfSxtOmZ1bmN0aW9uKGEsYil7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgQXJyYXkucHJvdG90eXBlLmluZGV4T2YpcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYSxiKTtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2M8ZDtjKyspaWYoYVtjXT09PVxuYilyZXR1cm4gYztyZXR1cm4tMX0scWI6ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD0wLGY9YS5sZW5ndGg7ZDxmO2QrKylpZihiLmNhbGwoYyxhW2RdLGQpKXJldHVybiBhW2RdO3JldHVybiBudWxsfSx1YTpmdW5jdGlvbihtLGIpe3ZhciBjPWEuYS5tKG0sYik7MDxjP20uc3BsaWNlKGMsMSk6MD09PWMmJm0uc2hpZnQoKX0scmI6ZnVuY3Rpb24obSl7bT1tfHxbXTtmb3IodmFyIGI9W10sYz0wLGQ9bS5sZW5ndGg7YzxkO2MrKykwPmEuYS5tKGIsbVtjXSkmJmIucHVzaChtW2NdKTtyZXR1cm4gYn0sRGE6ZnVuY3Rpb24oYSxiKXthPWF8fFtdO2Zvcih2YXIgYz1bXSxkPTAsZj1hLmxlbmd0aDtkPGY7ZCsrKWMucHVzaChiKGFbZF0sZCkpO3JldHVybiBjfSx0YTpmdW5jdGlvbihhLGIpe2E9YXx8W107Zm9yKHZhciBjPVtdLGQ9MCxmPWEubGVuZ3RoO2Q8ZjtkKyspYihhW2RdLGQpJiZjLnB1c2goYVtkXSk7cmV0dXJuIGN9LGdhOmZ1bmN0aW9uKGEsYil7aWYoYiBpbnN0YW5jZW9mXG5BcnJheSlhLnB1c2guYXBwbHkoYSxiKTtlbHNlIGZvcih2YXIgYz0wLGQ9Yi5sZW5ndGg7YzxkO2MrKylhLnB1c2goYltjXSk7cmV0dXJuIGF9LGVhOmZ1bmN0aW9uKGIsYyxkKXt2YXIgZj1hLmEubShhLmEuWGEoYiksYyk7MD5mP2QmJmIucHVzaChjKTpkfHxiLnNwbGljZShmLDEpfSx4YTplLGV4dGVuZDpkLHphOmMsQWE6ZT9jOmQsRzpiLG5hOmZ1bmN0aW9uKGEsYil7aWYoIWEpcmV0dXJuIGE7dmFyIGM9e30sZDtmb3IoZCBpbiBhKWEuaGFzT3duUHJvcGVydHkoZCkmJihjW2RdPWIoYVtkXSxkLGEpKTtyZXR1cm4gY30sS2E6ZnVuY3Rpb24oYil7Zm9yKDtiLmZpcnN0Q2hpbGQ7KWEucmVtb3ZlTm9kZShiLmZpcnN0Q2hpbGQpfSxvYzpmdW5jdGlvbihiKXtiPWEuYS5TKGIpO2Zvcih2YXIgYz12LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZD0wLGY9Yi5sZW5ndGg7ZDxmO2QrKyljLmFwcGVuZENoaWxkKGEuUihiW2RdKSk7cmV0dXJuIGN9LGlhOmZ1bmN0aW9uKGIsYyl7Zm9yKHZhciBkPVxuMCxmPWIubGVuZ3RoLGU9W107ZDxmO2QrKyl7dmFyIGs9YltkXS5jbG9uZU5vZGUoITApO2UucHVzaChjP2EuUihrKTprKX1yZXR1cm4gZX0sVDpmdW5jdGlvbihiLGMpe2EuYS5LYShiKTtpZihjKWZvcih2YXIgZD0wLGY9Yy5sZW5ndGg7ZDxmO2QrKyliLmFwcGVuZENoaWxkKGNbZF0pfSxMYjpmdW5jdGlvbihiLGMpe3ZhciBkPWIubm9kZVR5cGU/W2JdOmI7aWYoMDxkLmxlbmd0aCl7Zm9yKHZhciBmPWRbMF0sZT1mLnBhcmVudE5vZGUsaz0wLGc9Yy5sZW5ndGg7azxnO2srKyllLmluc2VydEJlZm9yZShjW2tdLGYpO2s9MDtmb3IoZz1kLmxlbmd0aDtrPGc7aysrKWEucmVtb3ZlTm9kZShkW2tdKX19LGthOmZ1bmN0aW9uKGEsYil7aWYoYS5sZW5ndGgpe2ZvcihiPTg9PT1iLm5vZGVUeXBlJiZiLnBhcmVudE5vZGV8fGI7YS5sZW5ndGgmJmFbMF0ucGFyZW50Tm9kZSE9PWI7KWEuc2hpZnQoKTtpZigxPGEubGVuZ3RoKXt2YXIgYz1hWzBdLGQ9YVthLmxlbmd0aC0xXTtmb3IoYS5sZW5ndGg9XG4wO2MhPT1kOylpZihhLnB1c2goYyksYz1jLm5leHRTaWJsaW5nLCFjKXJldHVybjthLnB1c2goZCl9fXJldHVybiBhfSxOYjpmdW5jdGlvbihhLGIpezc+Zj9hLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsYik6YS5zZWxlY3RlZD1ifSxjYjpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09PWF8fGE9PT1wP1wiXCI6YS50cmltP2EudHJpbSgpOmEudG9TdHJpbmcoKS5yZXBsYWNlKC9eW1xcc1xceGEwXSt8W1xcc1xceGEwXSskL2csXCJcIil9LHZjOmZ1bmN0aW9uKGEsYil7YT1hfHxcIlwiO3JldHVybiBiLmxlbmd0aD5hLmxlbmd0aD8hMTphLnN1YnN0cmluZygwLGIubGVuZ3RoKT09PWJ9LGNjOmZ1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuITA7aWYoMTE9PT1hLm5vZGVUeXBlKXJldHVybiExO2lmKGIuY29udGFpbnMpcmV0dXJuIGIuY29udGFpbnMoMz09PWEubm9kZVR5cGU/YS5wYXJlbnROb2RlOmEpO2lmKGIuY29tcGFyZURvY3VtZW50UG9zaXRpb24pcmV0dXJuIDE2PT0oYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihhKSZcbjE2KTtmb3IoO2EmJmEhPWI7KWE9YS5wYXJlbnROb2RlO3JldHVybiEhYX0sSmE6ZnVuY3Rpb24oYil7cmV0dXJuIGEuYS5jYyhiLGIub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpfSxvYjpmdW5jdGlvbihiKXtyZXR1cm4hIWEuYS5xYihiLGEuYS5KYSl9LHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJmEudGFnTmFtZSYmYS50YWdOYW1lLnRvTG93ZXJDYXNlKCl9LG46ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWYmJmtbY107aWYoIWUmJncpdyhiKS5iaW5kKGMsZCk7ZWxzZSBpZihlfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBiLmFkZEV2ZW50TGlzdGVuZXIpaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuYXR0YWNoRXZlbnQpe3ZhciBnPWZ1bmN0aW9uKGEpe2QuY2FsbChiLGEpfSxoPVwib25cIitjO2IuYXR0YWNoRXZlbnQoaCxnKTthLmEudy5kYShiLGZ1bmN0aW9uKCl7Yi5kZXRhY2hFdmVudChoLGcpfSl9ZWxzZSB0aHJvdyBFcnJvcihcIkJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGFkZEV2ZW50TGlzdGVuZXIgb3IgYXR0YWNoRXZlbnRcIik7XG5lbHNlIGIuYWRkRXZlbnRMaXN0ZW5lcihjLGQsITEpfSxvYTpmdW5jdGlvbihiLGMpe2lmKCFifHwhYi5ub2RlVHlwZSl0aHJvdyBFcnJvcihcImVsZW1lbnQgbXVzdCBiZSBhIERPTSBub2RlIHdoZW4gY2FsbGluZyB0cmlnZ2VyRXZlbnRcIik7dmFyIGQ7XCJpbnB1dFwiPT09YS5hLnQoYikmJmIudHlwZSYmXCJjbGlja1wiPT1jLnRvTG93ZXJDYXNlKCk/KGQ9Yi50eXBlLGQ9XCJjaGVja2JveFwiPT1kfHxcInJhZGlvXCI9PWQpOmQ9ITE7aWYodyYmIWQpdyhiKS50cmlnZ2VyKGMpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2Ygdi5jcmVhdGVFdmVudClpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBiLmRpc3BhdGNoRXZlbnQpZD12LmNyZWF0ZUV2ZW50KGhbY118fFwiSFRNTEV2ZW50c1wiKSxkLmluaXRFdmVudChjLCEwLCEwLHMsMCwwLDAsMCwwLCExLCExLCExLCExLDAsYiksYi5kaXNwYXRjaEV2ZW50KGQpO2Vsc2UgdGhyb3cgRXJyb3IoXCJUaGUgc3VwcGxpZWQgZWxlbWVudCBkb2Vzbid0IHN1cHBvcnQgZGlzcGF0Y2hFdmVudFwiKTtcbmVsc2UgaWYoZCYmYi5jbGljayliLmNsaWNrKCk7ZWxzZSBpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5maXJlRXZlbnQpYi5maXJlRXZlbnQoXCJvblwiK2MpO2Vsc2UgdGhyb3cgRXJyb3IoXCJCcm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCB0cmlnZ2VyaW5nIGV2ZW50c1wiKTt9LGM6ZnVuY3Rpb24oYil7cmV0dXJuIGEuQyhiKT9iKCk6Yn0sWGE6ZnVuY3Rpb24oYil7cmV0dXJuIGEuQyhiKT9iLnYoKTpifSxCYTpmdW5jdGlvbihiLGMsZCl7aWYoYyl7dmFyIGY9L1xcUysvZyxlPWIuY2xhc3NOYW1lLm1hdGNoKGYpfHxbXTthLmEudShjLm1hdGNoKGYpLGZ1bmN0aW9uKGIpe2EuYS5lYShlLGIsZCl9KTtiLmNsYXNzTmFtZT1lLmpvaW4oXCIgXCIpfX0sYmI6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuYyhjKTtpZihudWxsPT09ZHx8ZD09PXApZD1cIlwiO3ZhciBmPWEuZi5maXJzdENoaWxkKGIpOyFmfHwzIT1mLm5vZGVUeXBlfHxhLmYubmV4dFNpYmxpbmcoZik/YS5mLlQoYixbYi5vd25lckRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGQpXSk6XG5mLmRhdGE9ZDthLmEuZmMoYil9LE1iOmZ1bmN0aW9uKGEsYil7YS5uYW1lPWI7aWYoNz49Zil0cnl7YS5tZXJnZUF0dHJpYnV0ZXModi5jcmVhdGVFbGVtZW50KFwiPGlucHV0IG5hbWU9J1wiK2EubmFtZStcIicvPlwiKSwhMSl9Y2F0Y2goYyl7fX0sZmM6ZnVuY3Rpb24oYSl7OTw9ZiYmKGE9MT09YS5ub2RlVHlwZT9hOmEucGFyZW50Tm9kZSxhLnN0eWxlJiYoYS5zdHlsZS56b29tPWEuc3R5bGUuem9vbSkpfSxkYzpmdW5jdGlvbihhKXtpZihmKXt2YXIgYj1hLnN0eWxlLndpZHRoO2Euc3R5bGUud2lkdGg9MDthLnN0eWxlLndpZHRoPWJ9fSxzYzpmdW5jdGlvbihiLGMpe2I9YS5hLmMoYik7Yz1hLmEuYyhjKTtmb3IodmFyIGQ9W10sZj1iO2Y8PWM7ZisrKWQucHVzaChmKTtyZXR1cm4gZH0sUzpmdW5jdGlvbihhKXtmb3IodmFyIGI9W10sYz0wLGQ9YS5sZW5ndGg7YzxkO2MrKyliLnB1c2goYVtjXSk7cmV0dXJuIGJ9LHljOjY9PT1mLHpjOjc9PT1mLEw6Zix4YjpmdW5jdGlvbihiLGMpe2Zvcih2YXIgZD1cbmEuYS5TKGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKSkuY29uY2F0KGEuYS5TKGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZXh0YXJlYVwiKSkpLGY9XCJzdHJpbmdcIj09dHlwZW9mIGM/ZnVuY3Rpb24oYSl7cmV0dXJuIGEubmFtZT09PWN9OmZ1bmN0aW9uKGEpe3JldHVybiBjLnRlc3QoYS5uYW1lKX0sZT1bXSxrPWQubGVuZ3RoLTE7MDw9aztrLS0pZihkW2tdKSYmZS5wdXNoKGRba10pO3JldHVybiBlfSxwYzpmdW5jdGlvbihiKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYiYmKGI9YS5hLmNiKGIpKT9EJiZELnBhcnNlP0QucGFyc2UoYik6KG5ldyBGdW5jdGlvbihcInJldHVybiBcIitiKSkoKTpudWxsfSxlYjpmdW5jdGlvbihiLGMsZCl7aWYoIUR8fCFELnN0cmluZ2lmeSl0aHJvdyBFcnJvcihcIkNhbm5vdCBmaW5kIEpTT04uc3RyaW5naWZ5KCkuIFNvbWUgYnJvd3NlcnMgKGUuZy4sIElFIDwgOCkgZG9uJ3Qgc3VwcG9ydCBpdCBuYXRpdmVseSwgYnV0IHlvdSBjYW4gb3ZlcmNvbWUgdGhpcyBieSBhZGRpbmcgYSBzY3JpcHQgcmVmZXJlbmNlIHRvIGpzb24yLmpzLCBkb3dubG9hZGFibGUgZnJvbSBodHRwOi8vd3d3Lmpzb24ub3JnL2pzb24yLmpzXCIpO1xucmV0dXJuIEQuc3RyaW5naWZ5KGEuYS5jKGIpLGMsZCl9LHFjOmZ1bmN0aW9uKGMsZCxmKXtmPWZ8fHt9O3ZhciBlPWYucGFyYW1zfHx7fSxrPWYuaW5jbHVkZUZpZWxkc3x8dGhpcy52YixnPWM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGMmJlwiZm9ybVwiPT09YS5hLnQoYykpZm9yKHZhciBnPWMuYWN0aW9uLGg9ay5sZW5ndGgtMTswPD1oO2gtLSlmb3IodmFyIHI9YS5hLnhiKGMsa1toXSksRT1yLmxlbmd0aC0xOzA8PUU7RS0tKWVbcltFXS5uYW1lXT1yW0VdLnZhbHVlO2Q9YS5hLmMoZCk7dmFyIHk9di5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTt5LnN0eWxlLmRpc3BsYXk9XCJub25lXCI7eS5hY3Rpb249Zzt5Lm1ldGhvZD1cInBvc3RcIjtmb3IodmFyIHAgaW4gZCljPXYuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGMudHlwZT1cImhpZGRlblwiLGMubmFtZT1wLGMudmFsdWU9YS5hLmViKGEuYS5jKGRbcF0pKSx5LmFwcGVuZENoaWxkKGMpO2IoZSxmdW5jdGlvbihhLGIpe3ZhciBjPXYuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuYy50eXBlPVwiaGlkZGVuXCI7Yy5uYW1lPWE7Yy52YWx1ZT1iO3kuYXBwZW5kQ2hpbGQoYyl9KTt2LmJvZHkuYXBwZW5kQ2hpbGQoeSk7Zi5zdWJtaXR0ZXI/Zi5zdWJtaXR0ZXIoeSk6eS5zdWJtaXQoKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHkpfSwwKX19fSgpO2EuYihcInV0aWxzXCIsYS5hKTthLmIoXCJ1dGlscy5hcnJheUZvckVhY2hcIixhLmEudSk7YS5iKFwidXRpbHMuYXJyYXlGaXJzdFwiLGEuYS5xYik7YS5iKFwidXRpbHMuYXJyYXlGaWx0ZXJcIixhLmEudGEpO2EuYihcInV0aWxzLmFycmF5R2V0RGlzdGluY3RWYWx1ZXNcIixhLmEucmIpO2EuYihcInV0aWxzLmFycmF5SW5kZXhPZlwiLGEuYS5tKTthLmIoXCJ1dGlscy5hcnJheU1hcFwiLGEuYS5EYSk7YS5iKFwidXRpbHMuYXJyYXlQdXNoQWxsXCIsYS5hLmdhKTthLmIoXCJ1dGlscy5hcnJheVJlbW92ZUl0ZW1cIixhLmEudWEpO2EuYihcInV0aWxzLmV4dGVuZFwiLGEuYS5leHRlbmQpO2EuYihcInV0aWxzLmZpZWxkc0luY2x1ZGVkV2l0aEpzb25Qb3N0XCIsXG5hLmEudmIpO2EuYihcInV0aWxzLmdldEZvcm1GaWVsZHNcIixhLmEueGIpO2EuYihcInV0aWxzLnBlZWtPYnNlcnZhYmxlXCIsYS5hLlhhKTthLmIoXCJ1dGlscy5wb3N0SnNvblwiLGEuYS5xYyk7YS5iKFwidXRpbHMucGFyc2VKc29uXCIsYS5hLnBjKTthLmIoXCJ1dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlclwiLGEuYS5uKTthLmIoXCJ1dGlscy5zdHJpbmdpZnlKc29uXCIsYS5hLmViKTthLmIoXCJ1dGlscy5yYW5nZVwiLGEuYS5zYyk7YS5iKFwidXRpbHMudG9nZ2xlRG9tTm9kZUNzc0NsYXNzXCIsYS5hLkJhKTthLmIoXCJ1dGlscy50cmlnZ2VyRXZlbnRcIixhLmEub2EpO2EuYihcInV0aWxzLnVud3JhcE9ic2VydmFibGVcIixhLmEuYyk7YS5iKFwidXRpbHMub2JqZWN0Rm9yRWFjaFwiLGEuYS5HKTthLmIoXCJ1dGlscy5hZGRPclJlbW92ZUl0ZW1cIixhLmEuZWEpO2EuYihcInVud3JhcFwiLGEuYS5jKTtGdW5jdGlvbi5wcm90b3R5cGUuYmluZHx8KEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKGEpe3ZhciBkPVxudGhpcyxjPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7YT1jLnNoaWZ0KCk7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGQuYXBwbHkoYSxjLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSl9fSk7YS5hLmU9bmV3IGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShiLGgpe3ZhciBrPWJbY107aWYoIWt8fFwibnVsbFwiPT09a3x8IWVba10pe2lmKCFoKXJldHVybiBwO2s9YltjXT1cImtvXCIrZCsrO2Vba109e319cmV0dXJuIGVba119dmFyIGQ9MCxjPVwiX19rb19fXCIrKG5ldyBEYXRlKS5nZXRUaW1lKCksZT17fTtyZXR1cm57Z2V0OmZ1bmN0aW9uKGMsZCl7dmFyIGU9YShjLCExKTtyZXR1cm4gZT09PXA/cDplW2RdfSxzZXQ6ZnVuY3Rpb24oYyxkLGUpe2lmKGUhPT1wfHxhKGMsITEpIT09cClhKGMsITApW2RdPWV9LGNsZWFyOmZ1bmN0aW9uKGEpe3ZhciBiPWFbY107cmV0dXJuIGI/KGRlbGV0ZSBlW2JdLGFbY109bnVsbCwhMCk6ITF9LEY6ZnVuY3Rpb24oKXtyZXR1cm4gZCsrICtcbmN9fX07YS5iKFwidXRpbHMuZG9tRGF0YVwiLGEuYS5lKTthLmIoXCJ1dGlscy5kb21EYXRhLmNsZWFyXCIsYS5hLmUuY2xlYXIpO2EuYS53PW5ldyBmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixkKXt2YXIgZj1hLmEuZS5nZXQoYixjKTtmPT09cCYmZCYmKGY9W10sYS5hLmUuc2V0KGIsYyxmKSk7cmV0dXJuIGZ9ZnVuY3Rpb24gZChjKXt2YXIgZT1iKGMsITEpO2lmKGUpZm9yKHZhciBlPWUuc2xpY2UoMCksZj0wO2Y8ZS5sZW5ndGg7ZisrKWVbZl0oYyk7YS5hLmUuY2xlYXIoYyk7YS5hLncuY2xlYW5FeHRlcm5hbERhdGEoYyk7aWYoZ1tjLm5vZGVUeXBlXSlmb3IoZT1jLmZpcnN0Q2hpbGQ7Yz1lOyllPWMubmV4dFNpYmxpbmcsOD09PWMubm9kZVR5cGUmJmQoYyl9dmFyIGM9YS5hLmUuRigpLGU9ezE6ITAsODohMCw5OiEwfSxnPXsxOiEwLDk6ITB9O3JldHVybntkYTpmdW5jdGlvbihhLGMpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGMpdGhyb3cgRXJyb3IoXCJDYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG5iKGEsITApLnB1c2goYyl9LEtiOmZ1bmN0aW9uKGQsZSl7dmFyIGY9YihkLCExKTtmJiYoYS5hLnVhKGYsZSksMD09Zi5sZW5ndGgmJmEuYS5lLnNldChkLGMscCkpfSxSOmZ1bmN0aW9uKGIpe2lmKGVbYi5ub2RlVHlwZV0mJihkKGIpLGdbYi5ub2RlVHlwZV0pKXt2YXIgYz1bXTthLmEuZ2EoYyxiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKSk7Zm9yKHZhciBmPTAsbT1jLmxlbmd0aDtmPG07ZisrKWQoY1tmXSl9cmV0dXJuIGJ9LHJlbW92ZU5vZGU6ZnVuY3Rpb24oYil7YS5SKGIpO2IucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpfSxjbGVhbkV4dGVybmFsRGF0YTpmdW5jdGlvbihhKXt3JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB3LmNsZWFuRGF0YSYmdy5jbGVhbkRhdGEoW2FdKX19fTthLlI9YS5hLncuUjthLnJlbW92ZU5vZGU9YS5hLncucmVtb3ZlTm9kZTthLmIoXCJjbGVhbk5vZGVcIixhLlIpO2EuYihcInJlbW92ZU5vZGVcIixhLnJlbW92ZU5vZGUpO2EuYihcInV0aWxzLmRvbU5vZGVEaXNwb3NhbFwiLFxuYS5hLncpO2EuYihcInV0aWxzLmRvbU5vZGVEaXNwb3NhbC5hZGREaXNwb3NlQ2FsbGJhY2tcIixhLmEudy5kYSk7YS5iKFwidXRpbHMuZG9tTm9kZURpc3Bvc2FsLnJlbW92ZURpc3Bvc2VDYWxsYmFja1wiLGEuYS53LktiKTsoZnVuY3Rpb24oKXthLmEuYmE9ZnVuY3Rpb24oYil7dmFyIGQ7aWYodylpZih3LnBhcnNlSFRNTClkPXcucGFyc2VIVE1MKGIpfHxbXTtlbHNle2lmKChkPXcuY2xlYW4oW2JdKSkmJmRbMF0pe2ZvcihiPWRbMF07Yi5wYXJlbnROb2RlJiYxMSE9PWIucGFyZW50Tm9kZS5ub2RlVHlwZTspYj1iLnBhcmVudE5vZGU7Yi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYil9fWVsc2V7dmFyIGM9YS5hLmNiKGIpLnRvTG93ZXJDYXNlKCk7ZD12LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Yz1jLm1hdGNoKC9ePCh0aGVhZHx0Ym9keXx0Zm9vdCkvKSYmWzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXXx8IWMuaW5kZXhPZihcIjx0clwiKSYmWzIsXCI8dGFibGU+PHRib2R5PlwiLFxuXCI8L3Rib2R5PjwvdGFibGU+XCJdfHwoIWMuaW5kZXhPZihcIjx0ZFwiKXx8IWMuaW5kZXhPZihcIjx0aFwiKSkmJlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl18fFswLFwiXCIsXCJcIl07Yj1cImlnbm9yZWQ8ZGl2PlwiK2NbMV0rYitjWzJdK1wiPC9kaXY+XCI7Zm9yKFwiZnVuY3Rpb25cIj09dHlwZW9mIHMuaW5uZXJTaGl2P2QuYXBwZW5kQ2hpbGQocy5pbm5lclNoaXYoYikpOmQuaW5uZXJIVE1MPWI7Y1swXS0tOylkPWQubGFzdENoaWxkO2Q9YS5hLlMoZC5sYXN0Q2hpbGQuY2hpbGROb2Rlcyl9cmV0dXJuIGR9O2EuYS4kYT1mdW5jdGlvbihiLGQpe2EuYS5LYShiKTtkPWEuYS5jKGQpO2lmKG51bGwhPT1kJiZkIT09cClpZihcInN0cmluZ1wiIT10eXBlb2YgZCYmKGQ9ZC50b1N0cmluZygpKSx3KXcoYikuaHRtbChkKTtlbHNlIGZvcih2YXIgYz1hLmEuYmEoZCksZT0wO2U8Yy5sZW5ndGg7ZSsrKWIuYXBwZW5kQ2hpbGQoY1tlXSl9fSkoKTthLmIoXCJ1dGlscy5wYXJzZUh0bWxGcmFnbWVudFwiLFxuYS5hLmJhKTthLmIoXCJ1dGlscy5zZXRIdG1sXCIsYS5hLiRhKTthLkQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGMsZCl7aWYoYylpZig4PT1jLm5vZGVUeXBlKXt2YXIgZz1hLkQuR2IoYy5ub2RlVmFsdWUpO251bGwhPWcmJmQucHVzaCh7YmM6YyxtYzpnfSl9ZWxzZSBpZigxPT1jLm5vZGVUeXBlKWZvcih2YXIgZz0wLGg9Yy5jaGlsZE5vZGVzLGs9aC5sZW5ndGg7ZzxrO2crKyliKGhbZ10sZCl9dmFyIGQ9e307cmV0dXJue1VhOmZ1bmN0aW9uKGEpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGEpdGhyb3cgRXJyb3IoXCJZb3UgY2FuIG9ubHkgcGFzcyBhIGZ1bmN0aW9uIHRvIGtvLm1lbW9pemF0aW9uLm1lbW9pemUoKVwiKTt2YXIgYj0oNDI5NDk2NzI5NiooMStNYXRoLnJhbmRvbSgpKXwwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpKyg0Mjk0OTY3Mjk2KigxK01hdGgucmFuZG9tKCkpfDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSk7ZFtiXT1hO3JldHVyblwiXFx4M2MhLS1ba29fbWVtbzpcIitcbmIrXCJdLS1cXHgzZVwifSxSYjpmdW5jdGlvbihhLGIpe3ZhciBnPWRbYV07aWYoZz09PXApdGhyb3cgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGFueSBtZW1vIHdpdGggSUQgXCIrYStcIi4gUGVyaGFwcyBpdCdzIGFscmVhZHkgYmVlbiB1bm1lbW9pemVkLlwiKTt0cnl7cmV0dXJuIGcuYXBwbHkobnVsbCxifHxbXSksITB9ZmluYWxseXtkZWxldGUgZFthXX19LFNiOmZ1bmN0aW9uKGMsZCl7dmFyIGc9W107YihjLGcpO2Zvcih2YXIgaD0wLGs9Zy5sZW5ndGg7aDxrO2grKyl7dmFyIGY9Z1toXS5iYyxtPVtmXTtkJiZhLmEuZ2EobSxkKTthLkQuUmIoZ1toXS5tYyxtKTtmLm5vZGVWYWx1ZT1cIlwiO2YucGFyZW50Tm9kZSYmZi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGYpfX0sR2I6ZnVuY3Rpb24oYSl7cmV0dXJuKGE9YS5tYXRjaCgvXlxcW2tvX21lbW9cXDooLio/KVxcXSQvKSk/YVsxXTpudWxsfX19KCk7YS5iKFwibWVtb2l6YXRpb25cIixhLkQpO2EuYihcIm1lbW9pemF0aW9uLm1lbW9pemVcIixhLkQuVWEpO1xuYS5iKFwibWVtb2l6YXRpb24udW5tZW1vaXplXCIsYS5ELlJiKTthLmIoXCJtZW1vaXphdGlvbi5wYXJzZU1lbW9UZXh0XCIsYS5ELkdiKTthLmIoXCJtZW1vaXphdGlvbi51bm1lbW9pemVEb21Ob2RlQW5kRGVzY2VuZGFudHNcIixhLkQuU2IpO2EuTGE9e3Rocm90dGxlOmZ1bmN0aW9uKGIsZCl7Yi50aHJvdHRsZUV2YWx1YXRpb249ZDt2YXIgYz1udWxsO3JldHVybiBhLmooe3JlYWQ6Yix3cml0ZTpmdW5jdGlvbihhKXtjbGVhclRpbWVvdXQoYyk7Yz1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YihhKX0sZCl9fSl9LHJhdGVMaW1pdDpmdW5jdGlvbihhLGQpe3ZhciBjLGUsZztcIm51bWJlclwiPT10eXBlb2YgZD9jPWQ6KGM9ZC50aW1lb3V0LGU9ZC5tZXRob2QpO2c9XCJub3RpZnlXaGVuQ2hhbmdlc1N0b3BcIj09ZT9UOlM7YS5UYShmdW5jdGlvbihhKXtyZXR1cm4gZyhhLGMpfSl9LG5vdGlmeTpmdW5jdGlvbihhLGQpe2EuZXF1YWxpdHlDb21wYXJlcj1cImFsd2F5c1wiPT1kP251bGw6SH19O3ZhciBSPVxue3VuZGVmaW5lZDoxLFwiYm9vbGVhblwiOjEsbnVtYmVyOjEsc3RyaW5nOjF9O2EuYihcImV4dGVuZGVyc1wiLGEuTGEpO2EuUGI9ZnVuY3Rpb24oYixkLGMpe3RoaXMudGFyZ2V0PWI7dGhpcy53YT1kO3RoaXMuYWM9Yzt0aGlzLkNiPSExO2EuQSh0aGlzLFwiZGlzcG9zZVwiLHRoaXMuSyl9O2EuUGIucHJvdG90eXBlLks9ZnVuY3Rpb24oKXt0aGlzLkNiPSEwO3RoaXMuYWMoKX07YS5QPWZ1bmN0aW9uKCl7YS5hLkFhKHRoaXMsYS5QLmZuKTt0aGlzLk09e319O3ZhciBHPVwiY2hhbmdlXCIsQT17VTpmdW5jdGlvbihiLGQsYyl7dmFyIGU9dGhpcztjPWN8fEc7dmFyIGc9bmV3IGEuUGIoZSxkP2IuYmluZChkKTpiLGZ1bmN0aW9uKCl7YS5hLnVhKGUuTVtjXSxnKTtlLm5iJiZlLm5iKCl9KTtlLnZhJiZlLnZhKGMpO2UuTVtjXXx8KGUuTVtjXT1bXSk7ZS5NW2NdLnB1c2goZyk7cmV0dXJuIGd9LG5vdGlmeVN1YnNjcmliZXJzOmZ1bmN0aW9uKGIsZCl7ZD1kfHxHO2lmKHRoaXMuQWIoZCkpdHJ5e2Euay5FYSgpO1xuZm9yKHZhciBjPXRoaXMuTVtkXS5zbGljZSgwKSxlPTAsZztnPWNbZV07KytlKWcuQ2J8fGcud2EoYil9ZmluYWxseXthLmsuZW5kKCl9fSxUYTpmdW5jdGlvbihiKXt2YXIgZD10aGlzLGM9YS5DKGQpLGUsZyxoO2QucWF8fChkLnFhPWQubm90aWZ5U3Vic2NyaWJlcnMsZC5ub3RpZnlTdWJzY3JpYmVycz1mdW5jdGlvbihhLGIpe2ImJmIhPT1HP1wiYmVmb3JlQ2hhbmdlXCI9PT1iP2Qua2IoYSk6ZC5xYShhLGIpOmQubGIoYSl9KTt2YXIgaz1iKGZ1bmN0aW9uKCl7YyYmaD09PWQmJihoPWQoKSk7ZT0hMTtkLlBhKGcsaCkmJmQucWEoZz1oKX0pO2QubGI9ZnVuY3Rpb24oYSl7ZT0hMDtoPWE7aygpfTtkLmtiPWZ1bmN0aW9uKGEpe2V8fChnPWEsZC5xYShhLFwiYmVmb3JlQ2hhbmdlXCIpKX19LEFiOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLk1bYV0mJnRoaXMuTVthXS5sZW5ndGh9LHliOmZ1bmN0aW9uKCl7dmFyIGI9MDthLmEuRyh0aGlzLk0sZnVuY3Rpb24oYSxjKXtiKz1jLmxlbmd0aH0pO1xucmV0dXJuIGJ9LFBhOmZ1bmN0aW9uKGEsZCl7cmV0dXJuIXRoaXMuZXF1YWxpdHlDb21wYXJlcnx8IXRoaXMuZXF1YWxpdHlDb21wYXJlcihhLGQpfSxleHRlbmQ6ZnVuY3Rpb24oYil7dmFyIGQ9dGhpcztiJiZhLmEuRyhiLGZ1bmN0aW9uKGIsZSl7dmFyIGc9YS5MYVtiXTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBnJiYoZD1nKGQsZSl8fGQpfSk7cmV0dXJuIGR9fTthLkEoQSxcInN1YnNjcmliZVwiLEEuVSk7YS5BKEEsXCJleHRlbmRcIixBLmV4dGVuZCk7YS5BKEEsXCJnZXRTdWJzY3JpcHRpb25zQ291bnRcIixBLnliKTthLmEueGEmJmEuYS56YShBLEZ1bmN0aW9uLnByb3RvdHlwZSk7YS5QLmZuPUE7YS5EYj1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYS5VJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLm5vdGlmeVN1YnNjcmliZXJzfTthLmIoXCJzdWJzY3JpYmFibGVcIixhLlApO2EuYihcImlzU3Vic2NyaWJhYmxlXCIsYS5EYik7YS5ZPWEuaz1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYSl7Yy5wdXNoKGUpO1xuZT1hfWZ1bmN0aW9uIGQoKXtlPWMucG9wKCl9dmFyIGM9W10sZSxnPTA7cmV0dXJue0VhOmIsZW5kOmQsSmI6ZnVuY3Rpb24oYil7aWYoZSl7aWYoIWEuRGIoYikpdGhyb3cgRXJyb3IoXCJPbmx5IHN1YnNjcmliYWJsZSB0aGluZ3MgY2FuIGFjdCBhcyBkZXBlbmRlbmNpZXNcIik7ZS53YShiLGIuVmJ8fChiLlZiPSsrZykpfX0sQjpmdW5jdGlvbihhLGMsZil7dHJ5e3JldHVybiBiKCksYS5hcHBseShjLGZ8fFtdKX1maW5hbGx5e2QoKX19LGxhOmZ1bmN0aW9uKCl7aWYoZSlyZXR1cm4gZS5zLmxhKCl9LG1hOmZ1bmN0aW9uKCl7aWYoZSlyZXR1cm4gZS5tYX19fSgpO2EuYihcImNvbXB1dGVkQ29udGV4dFwiLGEuWSk7YS5iKFwiY29tcHV0ZWRDb250ZXh0LmdldERlcGVuZGVuY2llc0NvdW50XCIsYS5ZLmxhKTthLmIoXCJjb21wdXRlZENvbnRleHQuaXNJbml0aWFsXCIsYS5ZLm1hKTthLmIoXCJjb21wdXRlZENvbnRleHQuaXNTbGVlcGluZ1wiLGEuWS5BYyk7YS5wPWZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGQoKXtpZigwPFxuYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZC5QYShjLGFyZ3VtZW50c1swXSkmJihkLlgoKSxjPWFyZ3VtZW50c1swXSxkLlcoKSksdGhpczthLmsuSmIoZCk7cmV0dXJuIGN9dmFyIGM9YjthLlAuY2FsbChkKTthLmEuQWEoZCxhLnAuZm4pO2Qudj1mdW5jdGlvbigpe3JldHVybiBjfTtkLlc9ZnVuY3Rpb24oKXtkLm5vdGlmeVN1YnNjcmliZXJzKGMpfTtkLlg9ZnVuY3Rpb24oKXtkLm5vdGlmeVN1YnNjcmliZXJzKGMsXCJiZWZvcmVDaGFuZ2VcIil9O2EuQShkLFwicGVla1wiLGQudik7YS5BKGQsXCJ2YWx1ZUhhc011dGF0ZWRcIixkLlcpO2EuQShkLFwidmFsdWVXaWxsTXV0YXRlXCIsZC5YKTtyZXR1cm4gZH07YS5wLmZuPXtlcXVhbGl0eUNvbXBhcmVyOkh9O3ZhciBGPWEucC5yYz1cIl9fa29fcHJvdG9fX1wiO2EucC5mbltGXT1hLnA7YS5hLnhhJiZhLmEuemEoYS5wLmZuLGEuUC5mbik7YS5NYT1mdW5jdGlvbihiLGQpe3JldHVybiBudWxsPT09Ynx8Yj09PXB8fGJbRl09PT1wPyExOmJbRl09PT1cbmQ/ITA6YS5NYShiW0ZdLGQpfTthLkM9ZnVuY3Rpb24oYil7cmV0dXJuIGEuTWEoYixhLnApfTthLlJhPWZ1bmN0aW9uKGIpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGImJmJbRl09PT1hLnB8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGImJmJbRl09PT1hLmomJmIuaGM/ITA6ITF9O2EuYihcIm9ic2VydmFibGVcIixhLnApO2EuYihcImlzT2JzZXJ2YWJsZVwiLGEuQyk7YS5iKFwiaXNXcml0ZWFibGVPYnNlcnZhYmxlXCIsYS5SYSk7YS5iKFwiaXNXcml0YWJsZU9ic2VydmFibGVcIixhLlJhKTthLmFhPWZ1bmN0aW9uKGIpe2I9Ynx8W107aWYoXCJvYmplY3RcIiE9dHlwZW9mIGJ8fCEoXCJsZW5ndGhcImluIGIpKXRocm93IEVycm9yKFwiVGhlIGFyZ3VtZW50IHBhc3NlZCB3aGVuIGluaXRpYWxpemluZyBhbiBvYnNlcnZhYmxlIGFycmF5IG11c3QgYmUgYW4gYXJyYXksIG9yIG51bGwsIG9yIHVuZGVmaW5lZC5cIik7Yj1hLnAoYik7YS5hLkFhKGIsYS5hYS5mbik7cmV0dXJuIGIuZXh0ZW5kKHt0cmFja0FycmF5Q2hhbmdlczohMH0pfTtcbmEuYWEuZm49e3JlbW92ZTpmdW5jdGlvbihiKXtmb3IodmFyIGQ9dGhpcy52KCksYz1bXSxlPVwiZnVuY3Rpb25cIiE9dHlwZW9mIGJ8fGEuQyhiKT9mdW5jdGlvbihhKXtyZXR1cm4gYT09PWJ9OmIsZz0wO2c8ZC5sZW5ndGg7ZysrKXt2YXIgaD1kW2ddO2UoaCkmJigwPT09Yy5sZW5ndGgmJnRoaXMuWCgpLGMucHVzaChoKSxkLnNwbGljZShnLDEpLGctLSl9Yy5sZW5ndGgmJnRoaXMuVygpO3JldHVybiBjfSxyZW1vdmVBbGw6ZnVuY3Rpb24oYil7aWYoYj09PXApe3ZhciBkPXRoaXMudigpLGM9ZC5zbGljZSgwKTt0aGlzLlgoKTtkLnNwbGljZSgwLGQubGVuZ3RoKTt0aGlzLlcoKTtyZXR1cm4gY31yZXR1cm4gYj90aGlzLnJlbW92ZShmdW5jdGlvbihjKXtyZXR1cm4gMDw9YS5hLm0oYixjKX0pOltdfSxkZXN0cm95OmZ1bmN0aW9uKGIpe3ZhciBkPXRoaXMudigpLGM9XCJmdW5jdGlvblwiIT10eXBlb2YgYnx8YS5DKGIpP2Z1bmN0aW9uKGEpe3JldHVybiBhPT09Yn06Yjt0aGlzLlgoKTtcbmZvcih2YXIgZT1kLmxlbmd0aC0xOzA8PWU7ZS0tKWMoZFtlXSkmJihkW2VdLl9kZXN0cm95PSEwKTt0aGlzLlcoKX0sZGVzdHJveUFsbDpmdW5jdGlvbihiKXtyZXR1cm4gYj09PXA/dGhpcy5kZXN0cm95KGZ1bmN0aW9uKCl7cmV0dXJuITB9KTpiP3RoaXMuZGVzdHJveShmdW5jdGlvbihkKXtyZXR1cm4gMDw9YS5hLm0oYixkKX0pOltdfSxpbmRleE9mOmZ1bmN0aW9uKGIpe3ZhciBkPXRoaXMoKTtyZXR1cm4gYS5hLm0oZCxiKX0scmVwbGFjZTpmdW5jdGlvbihhLGQpe3ZhciBjPXRoaXMuaW5kZXhPZihhKTswPD1jJiYodGhpcy5YKCksdGhpcy52KClbY109ZCx0aGlzLlcoKSl9fTthLmEudShcInBvcCBwdXNoIHJldmVyc2Ugc2hpZnQgc29ydCBzcGxpY2UgdW5zaGlmdFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihiKXthLmFhLmZuW2JdPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy52KCk7dGhpcy5YKCk7dGhpcy5zYihhLGIsYXJndW1lbnRzKTthPWFbYl0uYXBwbHkoYSxhcmd1bWVudHMpO3RoaXMuVygpO1xucmV0dXJuIGF9fSk7YS5hLnUoW1wic2xpY2VcIl0sZnVuY3Rpb24oYil7YS5hYS5mbltiXT1mdW5jdGlvbigpe3ZhciBhPXRoaXMoKTtyZXR1cm4gYVtiXS5hcHBseShhLGFyZ3VtZW50cyl9fSk7YS5hLnhhJiZhLmEuemEoYS5hYS5mbixhLnAuZm4pO2EuYihcIm9ic2VydmFibGVBcnJheVwiLGEuYWEpO3ZhciBKPVwiYXJyYXlDaGFuZ2VcIjthLkxhLnRyYWNrQXJyYXlDaGFuZ2VzPWZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGQoKXtpZighYyl7Yz0hMDt2YXIgZD1iLm5vdGlmeVN1YnNjcmliZXJzO2Iubm90aWZ5U3Vic2NyaWJlcnM9ZnVuY3Rpb24oYSxiKXtiJiZiIT09R3x8KytnO3JldHVybiBkLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07dmFyIGY9W10uY29uY2F0KGIudigpfHxbXSk7ZT1udWxsO2IuVShmdW5jdGlvbihjKXtjPVtdLmNvbmNhdChjfHxbXSk7aWYoYi5BYihKKSl7dmFyIGQ7aWYoIWV8fDE8ZyllPWEuYS5GYShmLGMse3NwYXJzZTohMH0pO2Q9ZTtkLmxlbmd0aCYmYi5ub3RpZnlTdWJzY3JpYmVycyhkLFxuSil9Zj1jO2U9bnVsbDtnPTB9KX19aWYoIWIuc2Ipe3ZhciBjPSExLGU9bnVsbCxnPTAsaD1iLlU7Yi5VPWIuc3Vic2NyaWJlPWZ1bmN0aW9uKGEsYixjKXtjPT09SiYmZCgpO3JldHVybiBoLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07Yi5zYj1mdW5jdGlvbihiLGQsbSl7ZnVuY3Rpb24gbChhLGIsYyl7cmV0dXJuIHFbcS5sZW5ndGhdPXtzdGF0dXM6YSx2YWx1ZTpiLGluZGV4OmN9fWlmKGMmJiFnKXt2YXIgcT1bXSxoPWIubGVuZ3RoLHQ9bS5sZW5ndGgsej0wO3N3aXRjaChkKXtjYXNlIFwicHVzaFwiOno9aDtjYXNlIFwidW5zaGlmdFwiOmZvcihkPTA7ZDx0O2QrKylsKFwiYWRkZWRcIixtW2RdLHorZCk7YnJlYWs7Y2FzZSBcInBvcFwiOno9aC0xO2Nhc2UgXCJzaGlmdFwiOmgmJmwoXCJkZWxldGVkXCIsYlt6XSx6KTticmVhaztjYXNlIFwic3BsaWNlXCI6ZD1NYXRoLm1pbihNYXRoLm1heCgwLDA+bVswXT9oK21bMF06bVswXSksaCk7Zm9yKHZhciBoPTE9PT10P2g6TWF0aC5taW4oZCsobVsxXXx8MCksXG5oKSx0PWQrdC0yLHo9TWF0aC5tYXgoaCx0KSx1PVtdLHI9W10sRT0yO2Q8ejsrK2QsKytFKWQ8aCYmci5wdXNoKGwoXCJkZWxldGVkXCIsYltkXSxkKSksZDx0JiZ1LnB1c2gobChcImFkZGVkXCIsbVtFXSxkKSk7YS5hLndiKHIsdSk7YnJlYWs7ZGVmYXVsdDpyZXR1cm59ZT1xfX19fTthLnM9YS5qPWZ1bmN0aW9uKGIsZCxjKXtmdW5jdGlvbiBlKCl7YS5hLkcodixmdW5jdGlvbihhLGIpe2IuSygpfSk7dj17fX1mdW5jdGlvbiBnKCl7ZSgpO0M9MDt1PSEwO249ITF9ZnVuY3Rpb24gaCgpe3ZhciBhPWYudGhyb3R0bGVFdmFsdWF0aW9uO2EmJjA8PWE/KGNsZWFyVGltZW91dChQKSxQPXNldFRpbWVvdXQoayxhKSk6Zi5pYj9mLmliKCk6aygpfWZ1bmN0aW9uIGsoYil7aWYodCl7aWYoRSl0aHJvdyBFcnJvcihcIkEgJ3B1cmUnIGNvbXB1dGVkIG11c3Qgbm90IGJlIGNhbGxlZCByZWN1cnNpdmVseVwiKTt9ZWxzZSBpZighdSl7aWYodyYmdygpKXtpZigheil7cygpO3JldHVybn19ZWxzZSB6PSExO1xudD0hMDtpZih5KXRyeXt2YXIgYz17fTthLmsuRWEoe3dhOmZ1bmN0aW9uKGEsYil7Y1tiXXx8KGNbYl09MSwrK0MpfSxzOmYsbWE6cH0pO0M9MDtxPXIuY2FsbChkKX1maW5hbGx5e2Euay5lbmQoKSx0PSExfWVsc2UgdHJ5e3ZhciBlPXYsbT1DO2Euay5FYSh7d2E6ZnVuY3Rpb24oYSxiKXt1fHwobSYmZVtiXT8odltiXT1lW2JdLCsrQyxkZWxldGUgZVtiXSwtLW0pOnZbYl18fCh2W2JdPWEuVShoKSwrK0MpKX0sczpmLG1hOkU/cDohQ30pO3Y9e307Qz0wO3RyeXt2YXIgbD1kP3IuY2FsbChkKTpyKCl9ZmluYWxseXthLmsuZW5kKCksbSYmYS5hLkcoZSxmdW5jdGlvbihhLGIpe2IuSygpfSksbj0hMX1mLlBhKHEsbCkmJihmLm5vdGlmeVN1YnNjcmliZXJzKHEsXCJiZWZvcmVDaGFuZ2VcIikscT1sLCEwIT09YiYmZi5ub3RpZnlTdWJzY3JpYmVycyhxKSl9ZmluYWxseXt0PSExfUN8fHMoKX19ZnVuY3Rpb24gZigpe2lmKDA8YXJndW1lbnRzLmxlbmd0aCl7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIE8pTy5hcHBseShkLFxuYXJndW1lbnRzKTtlbHNlIHRocm93IEVycm9yKFwiQ2Fubm90IHdyaXRlIGEgdmFsdWUgdG8gYSBrby5jb21wdXRlZCB1bmxlc3MgeW91IHNwZWNpZnkgYSAnd3JpdGUnIG9wdGlvbi4gSWYgeW91IHdpc2ggdG8gcmVhZCB0aGUgY3VycmVudCB2YWx1ZSwgZG9uJ3QgcGFzcyBhbnkgcGFyYW1ldGVycy5cIik7cmV0dXJuIHRoaXN9YS5rLkpiKGYpO24mJmsoITApO3JldHVybiBxfWZ1bmN0aW9uIG0oKXtuJiYhQyYmayghMCk7cmV0dXJuIHF9ZnVuY3Rpb24gbCgpe3JldHVybiBufHwwPEN9dmFyIHEsbj0hMCx0PSExLHo9ITEsdT0hMSxyPWIsRT0hMSx5PSExO3ImJlwib2JqZWN0XCI9PXR5cGVvZiByPyhjPXIscj1jLnJlYWQpOihjPWN8fHt9LHJ8fChyPWMucmVhZCkpO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHIpdGhyb3cgRXJyb3IoXCJQYXNzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUga28uY29tcHV0ZWRcIik7dmFyIE89Yy53cml0ZSx4PWMuZGlzcG9zZVdoZW5Ob2RlSXNSZW1vdmVkfHxcbmMub3x8bnVsbCxCPWMuZGlzcG9zZVdoZW58fGMuSWEsdz1CLHM9Zyx2PXt9LEM9MCxQPW51bGw7ZHx8KGQ9Yy5vd25lcik7YS5QLmNhbGwoZik7YS5hLkFhKGYsYS5qLmZuKTtmLnY9bTtmLmxhPWZ1bmN0aW9uKCl7cmV0dXJuIEN9O2YuaGM9XCJmdW5jdGlvblwiPT09dHlwZW9mIGMud3JpdGU7Zi5LPWZ1bmN0aW9uKCl7cygpfTtmLlo9bDt2YXIgQT1mLlRhO2YuVGE9ZnVuY3Rpb24oYSl7QS5jYWxsKGYsYSk7Zi5pYj1mdW5jdGlvbigpe2Yua2IocSk7bj0hMDtmLmxiKGYpfX07Yy5wdXJlPyh5PUU9ITAsZi52YT1mdW5jdGlvbigpe3kmJih5PSExLGsoITApKX0sZi5uYj1mdW5jdGlvbigpe2YueWIoKXx8KGUoKSx5PW49ITApfSk6Yy5kZWZlckV2YWx1YXRpb24mJihmLnZhPWZ1bmN0aW9uKCl7bSgpO2RlbGV0ZSBmLnZhfSk7YS5BKGYsXCJwZWVrXCIsZi52KTthLkEoZixcImRpc3Bvc2VcIixmLkspO2EuQShmLFwiaXNBY3RpdmVcIixmLlopO2EuQShmLFwiZ2V0RGVwZW5kZW5jaWVzQ291bnRcIixcbmYubGEpO3gmJih6PSEwLHgubm9kZVR5cGUmJih3PWZ1bmN0aW9uKCl7cmV0dXJuIWEuYS5KYSh4KXx8QiYmQigpfSkpO3l8fGMuZGVmZXJFdmFsdWF0aW9ufHxrKCk7eCYmbCgpJiZ4Lm5vZGVUeXBlJiYocz1mdW5jdGlvbigpe2EuYS53LktiKHgscyk7ZygpfSxhLmEudy5kYSh4LHMpKTtyZXR1cm4gZn07YS5qYz1mdW5jdGlvbihiKXtyZXR1cm4gYS5NYShiLGEuail9O0E9YS5wLnJjO2EualtBXT1hLnA7YS5qLmZuPXtlcXVhbGl0eUNvbXBhcmVyOkh9O2Euai5mbltBXT1hLmo7YS5hLnhhJiZhLmEuemEoYS5qLmZuLGEuUC5mbik7YS5iKFwiZGVwZW5kZW50T2JzZXJ2YWJsZVwiLGEuaik7YS5iKFwiY29tcHV0ZWRcIixhLmopO2EuYihcImlzQ29tcHV0ZWRcIixhLmpjKTthLkliPWZ1bmN0aW9uKGIsZCl7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIpcmV0dXJuIGEucyhiLGQse3B1cmU6ITB9KTtiPWEuYS5leHRlbmQoe30sYik7Yi5wdXJlPSEwO3JldHVybiBhLnMoYixkKX07YS5iKFwicHVyZUNvbXB1dGVkXCIsXG5hLkliKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGEsZyxoKXtoPWh8fG5ldyBjO2E9ZyhhKTtpZihcIm9iamVjdFwiIT10eXBlb2YgYXx8bnVsbD09PWF8fGE9PT1wfHxhIGluc3RhbmNlb2YgRGF0ZXx8YSBpbnN0YW5jZW9mIFN0cmluZ3x8YSBpbnN0YW5jZW9mIE51bWJlcnx8YSBpbnN0YW5jZW9mIEJvb2xlYW4pcmV0dXJuIGE7dmFyIGs9YSBpbnN0YW5jZW9mIEFycmF5P1tdOnt9O2guc2F2ZShhLGspO2QoYSxmdW5jdGlvbihjKXt2YXIgZD1nKGFbY10pO3N3aXRjaCh0eXBlb2YgZCl7Y2FzZSBcImJvb2xlYW5cIjpjYXNlIFwibnVtYmVyXCI6Y2FzZSBcInN0cmluZ1wiOmNhc2UgXCJmdW5jdGlvblwiOmtbY109ZDticmVhaztjYXNlIFwib2JqZWN0XCI6Y2FzZSBcInVuZGVmaW5lZFwiOnZhciBsPWguZ2V0KGQpO2tbY109bCE9PXA/bDpiKGQsZyxoKX19KTtyZXR1cm4ga31mdW5jdGlvbiBkKGEsYil7aWYoYSBpbnN0YW5jZW9mIEFycmF5KXtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKyliKGMpO1wiZnVuY3Rpb25cIj09XG50eXBlb2YgYS50b0pTT04mJmIoXCJ0b0pTT05cIil9ZWxzZSBmb3IoYyBpbiBhKWIoYyl9ZnVuY3Rpb24gYygpe3RoaXMua2V5cz1bXTt0aGlzLmhiPVtdfWEuUWI9ZnVuY3Rpb24oYyl7aWYoMD09YXJndW1lbnRzLmxlbmd0aCl0aHJvdyBFcnJvcihcIldoZW4gY2FsbGluZyBrby50b0pTLCBwYXNzIHRoZSBvYmplY3QgeW91IHdhbnQgdG8gY29udmVydC5cIik7cmV0dXJuIGIoYyxmdW5jdGlvbihiKXtmb3IodmFyIGM9MDthLkMoYikmJjEwPmM7YysrKWI9YigpO3JldHVybiBifSl9O2EudG9KU09OPWZ1bmN0aW9uKGIsYyxkKXtiPWEuUWIoYik7cmV0dXJuIGEuYS5lYihiLGMsZCl9O2MucHJvdG90eXBlPXtzYXZlOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLm0odGhpcy5rZXlzLGIpOzA8PWQ/dGhpcy5oYltkXT1jOih0aGlzLmtleXMucHVzaChiKSx0aGlzLmhiLnB1c2goYykpfSxnZXQ6ZnVuY3Rpb24oYil7Yj1hLmEubSh0aGlzLmtleXMsYik7cmV0dXJuIDA8PWI/dGhpcy5oYltiXTpwfX19KSgpO1xuYS5iKFwidG9KU1wiLGEuUWIpO2EuYihcInRvSlNPTlwiLGEudG9KU09OKTsoZnVuY3Rpb24oKXthLmk9e3E6ZnVuY3Rpb24oYil7c3dpdGNoKGEuYS50KGIpKXtjYXNlIFwib3B0aW9uXCI6cmV0dXJuITA9PT1iLl9fa29fX2hhc0RvbURhdGFPcHRpb25WYWx1ZV9fP2EuYS5lLmdldChiLGEuZC5vcHRpb25zLlZhKTo3Pj1hLmEuTD9iLmdldEF0dHJpYnV0ZU5vZGUoXCJ2YWx1ZVwiKSYmYi5nZXRBdHRyaWJ1dGVOb2RlKFwidmFsdWVcIikuc3BlY2lmaWVkP2IudmFsdWU6Yi50ZXh0OmIudmFsdWU7Y2FzZSBcInNlbGVjdFwiOnJldHVybiAwPD1iLnNlbGVjdGVkSW5kZXg/YS5pLnEoYi5vcHRpb25zW2Iuc2VsZWN0ZWRJbmRleF0pOnA7ZGVmYXVsdDpyZXR1cm4gYi52YWx1ZX19LGNhOmZ1bmN0aW9uKGIsZCxjKXtzd2l0Y2goYS5hLnQoYikpe2Nhc2UgXCJvcHRpb25cIjpzd2l0Y2godHlwZW9mIGQpe2Nhc2UgXCJzdHJpbmdcIjphLmEuZS5zZXQoYixhLmQub3B0aW9ucy5WYSxwKTtcIl9fa29fX2hhc0RvbURhdGFPcHRpb25WYWx1ZV9fXCJpblxuYiYmZGVsZXRlIGIuX19rb19faGFzRG9tRGF0YU9wdGlvblZhbHVlX187Yi52YWx1ZT1kO2JyZWFrO2RlZmF1bHQ6YS5hLmUuc2V0KGIsYS5kLm9wdGlvbnMuVmEsZCksYi5fX2tvX19oYXNEb21EYXRhT3B0aW9uVmFsdWVfXz0hMCxiLnZhbHVlPVwibnVtYmVyXCI9PT10eXBlb2YgZD9kOlwiXCJ9YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmlmKFwiXCI9PT1kfHxudWxsPT09ZClkPXA7Zm9yKHZhciBlPS0xLGc9MCxoPWIub3B0aW9ucy5sZW5ndGgsaztnPGg7KytnKWlmKGs9YS5pLnEoYi5vcHRpb25zW2ddKSxrPT1kfHxcIlwiPT1rJiZkPT09cCl7ZT1nO2JyZWFrfWlmKGN8fDA8PWV8fGQ9PT1wJiYxPGIuc2l6ZSliLnNlbGVjdGVkSW5kZXg9ZTticmVhaztkZWZhdWx0OmlmKG51bGw9PT1kfHxkPT09cClkPVwiXCI7Yi52YWx1ZT1kfX19fSkoKTthLmIoXCJzZWxlY3RFeHRlbnNpb25zXCIsYS5pKTthLmIoXCJzZWxlY3RFeHRlbnNpb25zLnJlYWRWYWx1ZVwiLGEuaS5xKTthLmIoXCJzZWxlY3RFeHRlbnNpb25zLndyaXRlVmFsdWVcIixcbmEuaS5jYSk7YS5oPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiKXtiPWEuYS5jYihiKTsxMjM9PT1iLmNoYXJDb2RlQXQoMCkmJihiPWIuc2xpY2UoMSwtMSkpO3ZhciBjPVtdLGQ9Yi5tYXRjaChlKSxrLG4sdD0wO2lmKGQpe2QucHVzaChcIixcIik7Zm9yKHZhciB6PTAsdTt1PWRbel07Kyt6KXt2YXIgcj11LmNoYXJDb2RlQXQoMCk7aWYoNDQ9PT1yKXtpZigwPj10KXtrJiZjLnB1c2gobj97a2V5OmssdmFsdWU6bi5qb2luKFwiXCIpfTp7dW5rbm93bjprfSk7az1uPXQ9MDtjb250aW51ZX19ZWxzZSBpZig1OD09PXIpe2lmKCFuKWNvbnRpbnVlfWVsc2UgaWYoNDc9PT1yJiZ6JiYxPHUubGVuZ3RoKShyPWRbei0xXS5tYXRjaChnKSkmJiFoW3JbMF1dJiYoYj1iLnN1YnN0cihiLmluZGV4T2YodSkrMSksZD1iLm1hdGNoKGUpLGQucHVzaChcIixcIiksej0tMSx1PVwiL1wiKTtlbHNlIGlmKDQwPT09cnx8MTIzPT09cnx8OTE9PT1yKSsrdDtlbHNlIGlmKDQxPT09cnx8MTI1PT09cnx8OTM9PT1yKS0tdDtcbmVsc2UgaWYoIWsmJiFuKXtrPTM0PT09cnx8Mzk9PT1yP3Uuc2xpY2UoMSwtMSk6dTtjb250aW51ZX1uP24ucHVzaCh1KTpuPVt1XX19cmV0dXJuIGN9dmFyIGQ9W1widHJ1ZVwiLFwiZmFsc2VcIixcIm51bGxcIixcInVuZGVmaW5lZFwiXSxjPS9eKD86WyRfYS16XVskXFx3XSp8KC4rKShcXC5cXHMqWyRfYS16XVskXFx3XSp8XFxbLitcXF0pKSQvaSxlPVJlZ0V4cChcIlxcXCIoPzpbXlxcXCJcXFxcXFxcXF18XFxcXFxcXFwuKSpcXFwifCcoPzpbXidcXFxcXFxcXF18XFxcXFxcXFwuKSonfC8oPzpbXi9cXFxcXFxcXF18XFxcXFxcXFwuKSovdyp8W15cXFxcczosL11bXixcXFwiJ3t9KCkvOltcXFxcXV0qW15cXFxccyxcXFwiJ3t9KCkvOltcXFxcXV18W15cXFxcc11cIixcImdcIiksZz0vW1xcXSlcIidBLVphLXowLTlfJF0rJC8saD17XCJpblwiOjEsXCJyZXR1cm5cIjoxLFwidHlwZW9mXCI6MX0saz17fTtyZXR1cm57aGE6W10sVjprLFdhOmIseWE6ZnVuY3Rpb24oZixtKXtmdW5jdGlvbiBlKGIsbSl7dmFyIGY7aWYoIXope3ZhciB1PWEuZ2V0QmluZGluZ0hhbmRsZXIoYik7aWYodSYmdS5wcmVwcm9jZXNzJiZcbiEobT11LnByZXByb2Nlc3MobSxiLGUpKSlyZXR1cm47aWYodT1rW2JdKWY9bSwwPD1hLmEubShkLGYpP2Y9ITE6KHU9Zi5tYXRjaChjKSxmPW51bGw9PT11PyExOnVbMV0/XCJPYmplY3QoXCIrdVsxXStcIilcIit1WzJdOmYpLHU9Zjt1JiZoLnB1c2goXCInXCIrYitcIic6ZnVuY3Rpb24oX3ope1wiK2YrXCI9X3p9XCIpfXQmJihtPVwiZnVuY3Rpb24oKXtyZXR1cm4gXCIrbStcIiB9XCIpO2cucHVzaChcIidcIitiK1wiJzpcIittKX1tPW18fHt9O3ZhciBnPVtdLGg9W10sdD1tLnZhbHVlQWNjZXNzb3JzLHo9bS5iaW5kaW5nUGFyYW1zLHU9XCJzdHJpbmdcIj09PXR5cGVvZiBmP2IoZik6ZjthLmEudSh1LGZ1bmN0aW9uKGEpe2UoYS5rZXl8fGEudW5rbm93bixhLnZhbHVlKX0pO2gubGVuZ3RoJiZlKFwiX2tvX3Byb3BlcnR5X3dyaXRlcnNcIixcIntcIitoLmpvaW4oXCIsXCIpK1wiIH1cIik7cmV0dXJuIGcuam9pbihcIixcIil9LGxjOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspaWYoYVtjXS5rZXk9PVxuYilyZXR1cm4hMDtyZXR1cm4hMX0scGE6ZnVuY3Rpb24oYixjLGQsZSxrKXtpZihiJiZhLkMoYikpIWEuUmEoYil8fGsmJmIudigpPT09ZXx8YihlKTtlbHNlIGlmKChiPWMuZ2V0KFwiX2tvX3Byb3BlcnR5X3dyaXRlcnNcIikpJiZiW2RdKWJbZF0oZSl9fX0oKTthLmIoXCJleHByZXNzaW9uUmV3cml0aW5nXCIsYS5oKTthLmIoXCJleHByZXNzaW9uUmV3cml0aW5nLmJpbmRpbmdSZXdyaXRlVmFsaWRhdG9yc1wiLGEuaC5oYSk7YS5iKFwiZXhwcmVzc2lvblJld3JpdGluZy5wYXJzZU9iamVjdExpdGVyYWxcIixhLmguV2EpO2EuYihcImV4cHJlc3Npb25SZXdyaXRpbmcucHJlUHJvY2Vzc0JpbmRpbmdzXCIsYS5oLnlhKTthLmIoXCJleHByZXNzaW9uUmV3cml0aW5nLl90d29XYXlCaW5kaW5nc1wiLGEuaC5WKTthLmIoXCJqc29uRXhwcmVzc2lvblJld3JpdGluZ1wiLGEuaCk7YS5iKFwianNvbkV4cHJlc3Npb25SZXdyaXRpbmcuaW5zZXJ0UHJvcGVydHlBY2Nlc3NvcnNJbnRvSnNvblwiLGEuaC55YSk7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihhKXtyZXR1cm4gOD09XG5hLm5vZGVUeXBlJiZoLnRlc3QoZz9hLnRleHQ6YS5ub2RlVmFsdWUpfWZ1bmN0aW9uIGQoYSl7cmV0dXJuIDg9PWEubm9kZVR5cGUmJmsudGVzdChnP2EudGV4dDphLm5vZGVWYWx1ZSl9ZnVuY3Rpb24gYyhhLGMpe2Zvcih2YXIgZj1hLGU9MSxrPVtdO2Y9Zi5uZXh0U2libGluZzspe2lmKGQoZikmJihlLS0sMD09PWUpKXJldHVybiBrO2sucHVzaChmKTtiKGYpJiZlKyt9aWYoIWMpdGhyb3cgRXJyb3IoXCJDYW5ub3QgZmluZCBjbG9zaW5nIGNvbW1lbnQgdGFnIHRvIG1hdGNoOiBcIithLm5vZGVWYWx1ZSk7cmV0dXJuIG51bGx9ZnVuY3Rpb24gZShhLGIpe3ZhciBkPWMoYSxiKTtyZXR1cm4gZD8wPGQubGVuZ3RoP2RbZC5sZW5ndGgtMV0ubmV4dFNpYmxpbmc6YS5uZXh0U2libGluZzpudWxsfXZhciBnPXYmJlwiXFx4M2MhLS10ZXN0LS1cXHgzZVwiPT09di5jcmVhdGVDb21tZW50KFwidGVzdFwiKS50ZXh0LGg9Zz8vXlxceDNjIS0tXFxzKmtvKD86XFxzKyhbXFxzXFxTXSspKT9cXHMqLS1cXHgzZSQvOi9eXFxzKmtvKD86XFxzKyhbXFxzXFxTXSspKT9cXHMqJC8sXG5rPWc/L15cXHgzYyEtLVxccypcXC9rb1xccyotLVxceDNlJC86L15cXHMqXFwva29cXHMqJC8sZj17dWw6ITAsb2w6ITB9O2EuZj17UTp7fSxjaGlsZE5vZGVzOmZ1bmN0aW9uKGEpe3JldHVybiBiKGEpP2MoYSk6YS5jaGlsZE5vZGVzfSxqYTpmdW5jdGlvbihjKXtpZihiKGMpKXtjPWEuZi5jaGlsZE5vZGVzKGMpO2Zvcih2YXIgZD0wLGY9Yy5sZW5ndGg7ZDxmO2QrKylhLnJlbW92ZU5vZGUoY1tkXSl9ZWxzZSBhLmEuS2EoYyl9LFQ6ZnVuY3Rpb24oYyxkKXtpZihiKGMpKXthLmYuamEoYyk7Zm9yKHZhciBmPWMubmV4dFNpYmxpbmcsZT0wLGs9ZC5sZW5ndGg7ZTxrO2UrKylmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRbZV0sZil9ZWxzZSBhLmEuVChjLGQpfSxIYjpmdW5jdGlvbihhLGMpe2IoYSk/YS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjLGEubmV4dFNpYmxpbmcpOmEuZmlyc3RDaGlsZD9hLmluc2VydEJlZm9yZShjLGEuZmlyc3RDaGlsZCk6YS5hcHBlbmRDaGlsZChjKX0sQmI6ZnVuY3Rpb24oYyxcbmQsZil7Zj9iKGMpP2MucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZCxmLm5leHRTaWJsaW5nKTpmLm5leHRTaWJsaW5nP2MuaW5zZXJ0QmVmb3JlKGQsZi5uZXh0U2libGluZyk6Yy5hcHBlbmRDaGlsZChkKTphLmYuSGIoYyxkKX0sZmlyc3RDaGlsZDpmdW5jdGlvbihhKXtyZXR1cm4gYihhKT8hYS5uZXh0U2libGluZ3x8ZChhLm5leHRTaWJsaW5nKT9udWxsOmEubmV4dFNpYmxpbmc6YS5maXJzdENoaWxkfSxuZXh0U2libGluZzpmdW5jdGlvbihhKXtiKGEpJiYoYT1lKGEpKTtyZXR1cm4gYS5uZXh0U2libGluZyYmZChhLm5leHRTaWJsaW5nKT9udWxsOmEubmV4dFNpYmxpbmd9LGdjOmIseGM6ZnVuY3Rpb24oYSl7cmV0dXJuKGE9KGc/YS50ZXh0OmEubm9kZVZhbHVlKS5tYXRjaChoKSk/YVsxXTpudWxsfSxGYjpmdW5jdGlvbihjKXtpZihmW2EuYS50KGMpXSl7dmFyIGs9Yy5maXJzdENoaWxkO2lmKGspe2RvIGlmKDE9PT1rLm5vZGVUeXBlKXt2YXIgZztnPWsuZmlyc3RDaGlsZDtcbnZhciBoPW51bGw7aWYoZyl7ZG8gaWYoaCloLnB1c2goZyk7ZWxzZSBpZihiKGcpKXt2YXIgdD1lKGcsITApO3Q/Zz10Omg9W2ddfWVsc2UgZChnKSYmKGg9W2ddKTt3aGlsZShnPWcubmV4dFNpYmxpbmcpfWlmKGc9aClmb3IoaD1rLm5leHRTaWJsaW5nLHQ9MDt0PGcubGVuZ3RoO3QrKyloP2MuaW5zZXJ0QmVmb3JlKGdbdF0saCk6Yy5hcHBlbmRDaGlsZChnW3RdKX13aGlsZShrPWsubmV4dFNpYmxpbmcpfX19fX0pKCk7YS5iKFwidmlydHVhbEVsZW1lbnRzXCIsYS5mKTthLmIoXCJ2aXJ0dWFsRWxlbWVudHMuYWxsb3dlZEJpbmRpbmdzXCIsYS5mLlEpO2EuYihcInZpcnR1YWxFbGVtZW50cy5lbXB0eU5vZGVcIixhLmYuamEpO2EuYihcInZpcnR1YWxFbGVtZW50cy5pbnNlcnRBZnRlclwiLGEuZi5CYik7YS5iKFwidmlydHVhbEVsZW1lbnRzLnByZXBlbmRcIixhLmYuSGIpO2EuYihcInZpcnR1YWxFbGVtZW50cy5zZXREb21Ob2RlQ2hpbGRyZW5cIixhLmYuVCk7KGZ1bmN0aW9uKCl7YS5KPWZ1bmN0aW9uKCl7dGhpcy5ZYj1cbnt9fTthLmEuZXh0ZW5kKGEuSi5wcm90b3R5cGUse25vZGVIYXNCaW5kaW5nczpmdW5jdGlvbihiKXtzd2l0Y2goYi5ub2RlVHlwZSl7Y2FzZSAxOnJldHVybiBudWxsIT1iLmdldEF0dHJpYnV0ZShcImRhdGEtYmluZFwiKXx8YS5nLmdldENvbXBvbmVudE5hbWVGb3JOb2RlKGIpO2Nhc2UgODpyZXR1cm4gYS5mLmdjKGIpO2RlZmF1bHQ6cmV0dXJuITF9fSxnZXRCaW5kaW5nczpmdW5jdGlvbihiLGQpe3ZhciBjPXRoaXMuZ2V0QmluZGluZ3NTdHJpbmcoYixkKSxjPWM/dGhpcy5wYXJzZUJpbmRpbmdzU3RyaW5nKGMsZCxiKTpudWxsO3JldHVybiBhLmcubWIoYyxiLGQsITEpfSxnZXRCaW5kaW5nQWNjZXNzb3JzOmZ1bmN0aW9uKGIsZCl7dmFyIGM9dGhpcy5nZXRCaW5kaW5nc1N0cmluZyhiLGQpLGM9Yz90aGlzLnBhcnNlQmluZGluZ3NTdHJpbmcoYyxkLGIse3ZhbHVlQWNjZXNzb3JzOiEwfSk6bnVsbDtyZXR1cm4gYS5nLm1iKGMsYixkLCEwKX0sZ2V0QmluZGluZ3NTdHJpbmc6ZnVuY3Rpb24oYil7c3dpdGNoKGIubm9kZVR5cGUpe2Nhc2UgMTpyZXR1cm4gYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJpbmRcIik7XG5jYXNlIDg6cmV0dXJuIGEuZi54YyhiKTtkZWZhdWx0OnJldHVybiBudWxsfX0scGFyc2VCaW5kaW5nc1N0cmluZzpmdW5jdGlvbihiLGQsYyxlKXt0cnl7dmFyIGc9dGhpcy5ZYixoPWIrKGUmJmUudmFsdWVBY2Nlc3NvcnN8fFwiXCIpLGs7aWYoIShrPWdbaF0pKXt2YXIgZixtPVwid2l0aCgkY29udGV4dCl7d2l0aCgkZGF0YXx8e30pe3JldHVybntcIithLmgueWEoYixlKStcIn19fVwiO2Y9bmV3IEZ1bmN0aW9uKFwiJGNvbnRleHRcIixcIiRlbGVtZW50XCIsbSk7az1nW2hdPWZ9cmV0dXJuIGsoZCxjKX1jYXRjaChsKXt0aHJvdyBsLm1lc3NhZ2U9XCJVbmFibGUgdG8gcGFyc2UgYmluZGluZ3MuXFxuQmluZGluZ3MgdmFsdWU6IFwiK2IrXCJcXG5NZXNzYWdlOiBcIitsLm1lc3NhZ2UsbDt9fX0pO2EuSi5pbnN0YW5jZT1uZXcgYS5KfSkoKTthLmIoXCJiaW5kaW5nUHJvdmlkZXJcIixhLkopOyhmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGF9fWZ1bmN0aW9uIGQoYSl7cmV0dXJuIGEoKX1cbmZ1bmN0aW9uIGMoYil7cmV0dXJuIGEuYS5uYShhLmsuQihiKSxmdW5jdGlvbihhLGMpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBiKClbY119fSl9ZnVuY3Rpb24gZShhLGIpe3JldHVybiBjKHRoaXMuZ2V0QmluZGluZ3MuYmluZCh0aGlzLGEsYikpfWZ1bmN0aW9uIGcoYixjLGQpe3ZhciBmLGU9YS5mLmZpcnN0Q2hpbGQoYyksaz1hLkouaW5zdGFuY2UsZz1rLnByZXByb2Nlc3NOb2RlO2lmKGcpe2Zvcig7Zj1lOyllPWEuZi5uZXh0U2libGluZyhmKSxnLmNhbGwoayxmKTtlPWEuZi5maXJzdENoaWxkKGMpfWZvcig7Zj1lOyllPWEuZi5uZXh0U2libGluZyhmKSxoKGIsZixkKX1mdW5jdGlvbiBoKGIsYyxkKXt2YXIgZT0hMCxrPTE9PT1jLm5vZGVUeXBlO2smJmEuZi5GYihjKTtpZihrJiZkfHxhLkouaW5zdGFuY2Uubm9kZUhhc0JpbmRpbmdzKGMpKWU9ZihjLG51bGwsYixkKS5zaG91bGRCaW5kRGVzY2VuZGFudHM7ZSYmIWxbYS5hLnQoYyldJiZnKGIsYywhayl9ZnVuY3Rpb24gayhiKXt2YXIgYz1cbltdLGQ9e30sZj1bXTthLmEuRyhiLGZ1bmN0aW9uIHkoZSl7aWYoIWRbZV0pe3ZhciBrPWEuZ2V0QmluZGluZ0hhbmRsZXIoZSk7ayYmKGsuYWZ0ZXImJihmLnB1c2goZSksYS5hLnUoay5hZnRlcixmdW5jdGlvbihjKXtpZihiW2NdKXtpZigtMSE9PWEuYS5tKGYsYykpdGhyb3cgRXJyb3IoXCJDYW5ub3QgY29tYmluZSB0aGUgZm9sbG93aW5nIGJpbmRpbmdzLCBiZWNhdXNlIHRoZXkgaGF2ZSBhIGN5Y2xpYyBkZXBlbmRlbmN5OiBcIitmLmpvaW4oXCIsIFwiKSk7eShjKX19KSxmLmxlbmd0aC0tKSxjLnB1c2goe2tleTplLHpiOmt9KSk7ZFtlXT0hMH19KTtyZXR1cm4gY31mdW5jdGlvbiBmKGIsYyxmLGcpe3ZhciBtPWEuYS5lLmdldChiLHEpO2lmKCFjKXtpZihtKXRocm93IEVycm9yKFwiWW91IGNhbm5vdCBhcHBseSBiaW5kaW5ncyBtdWx0aXBsZSB0aW1lcyB0byB0aGUgc2FtZSBlbGVtZW50LlwiKTthLmEuZS5zZXQoYixxLCEwKX0hbSYmZyYmYS5PYihiLGYpO3ZhciBsO2lmKGMmJlwiZnVuY3Rpb25cIiE9PVxudHlwZW9mIGMpbD1jO2Vsc2V7dmFyIGg9YS5KLmluc3RhbmNlLG49aC5nZXRCaW5kaW5nQWNjZXNzb3JzfHxlLHM9YS5qKGZ1bmN0aW9uKCl7KGw9Yz9jKGYsYik6bi5jYWxsKGgsYixmKSkmJmYuSSYmZi5JKCk7cmV0dXJuIGx9LG51bGwse286Yn0pO2wmJnMuWigpfHwocz1udWxsKX12YXIgdjtpZihsKXt2YXIgdz1zP2Z1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBkKHMoKVthXSl9fTpmdW5jdGlvbihhKXtyZXR1cm4gbFthXX0sQT1mdW5jdGlvbigpe3JldHVybiBhLmEubmEocz9zKCk6bCxkKX07QS5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIGxbYV0mJmQodyhhKSl9O0EuaGFzPWZ1bmN0aW9uKGEpe3JldHVybiBhIGluIGx9O2c9ayhsKTthLmEudShnLGZ1bmN0aW9uKGMpe3ZhciBkPWMuemIuaW5pdCxlPWMuemIudXBkYXRlLGs9Yy5rZXk7aWYoOD09PWIubm9kZVR5cGUmJiFhLmYuUVtrXSl0aHJvdyBFcnJvcihcIlRoZSBiaW5kaW5nICdcIitrK1wiJyBjYW5ub3QgYmUgdXNlZCB3aXRoIHZpcnR1YWwgZWxlbWVudHNcIik7XG50cnl7XCJmdW5jdGlvblwiPT10eXBlb2YgZCYmYS5rLkIoZnVuY3Rpb24oKXt2YXIgYT1kKGIsdyhrKSxBLGYuJGRhdGEsZik7aWYoYSYmYS5jb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5ncyl7aWYodiE9PXApdGhyb3cgRXJyb3IoXCJNdWx0aXBsZSBiaW5kaW5ncyAoXCIrditcIiBhbmQgXCIraytcIikgYXJlIHRyeWluZyB0byBjb250cm9sIGRlc2NlbmRhbnQgYmluZGluZ3Mgb2YgdGhlIHNhbWUgZWxlbWVudC4gWW91IGNhbm5vdCB1c2UgdGhlc2UgYmluZGluZ3MgdG9nZXRoZXIgb24gdGhlIHNhbWUgZWxlbWVudC5cIik7dj1rfX0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmEuaihmdW5jdGlvbigpe2UoYix3KGspLEEsZi4kZGF0YSxmKX0sbnVsbCx7bzpifSl9Y2F0Y2goZyl7dGhyb3cgZy5tZXNzYWdlPSdVbmFibGUgdG8gcHJvY2VzcyBiaW5kaW5nIFwiJytrK1wiOiBcIitsW2tdKydcIlxcbk1lc3NhZ2U6ICcrZy5tZXNzYWdlLGc7fX0pfXJldHVybntzaG91bGRCaW5kRGVzY2VuZGFudHM6dj09PXB9fVxuZnVuY3Rpb24gbShiKXtyZXR1cm4gYiYmYiBpbnN0YW5jZW9mIGEuTj9iOm5ldyBhLk4oYil9YS5kPXt9O3ZhciBsPXtzY3JpcHQ6ITB9O2EuZ2V0QmluZGluZ0hhbmRsZXI9ZnVuY3Rpb24oYil7cmV0dXJuIGEuZFtiXX07YS5OPWZ1bmN0aW9uKGIsYyxkLGYpe3ZhciBlPXRoaXMsaz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBiJiYhYS5DKGIpLGcsbT1hLmooZnVuY3Rpb24oKXt2YXIgZz1rP2IoKTpiLGw9YS5hLmMoZyk7Yz8oYy5JJiZjLkkoKSxhLmEuZXh0ZW5kKGUsYyksbSYmKGUuST1tKSk6KGUuJHBhcmVudHM9W10sZS4kcm9vdD1sLGUua289YSk7ZS4kcmF3RGF0YT1nO2UuJGRhdGE9bDtkJiYoZVtkXT1sKTtmJiZmKGUsYyxsKTtyZXR1cm4gZS4kZGF0YX0sbnVsbCx7SWE6ZnVuY3Rpb24oKXtyZXR1cm4gZyYmIWEuYS5vYihnKX0sbzohMH0pO20uWigpJiYoZS5JPW0sbS5lcXVhbGl0eUNvbXBhcmVyPW51bGwsZz1bXSxtLlRiPWZ1bmN0aW9uKGIpe2cucHVzaChiKTthLmEudy5kYShiLFxuZnVuY3Rpb24oYil7YS5hLnVhKGcsYik7Zy5sZW5ndGh8fChtLksoKSxlLkk9bT1wKX0pfSl9O2EuTi5wcm90b3R5cGUuY3JlYXRlQ2hpbGRDb250ZXh0PWZ1bmN0aW9uKGIsYyxkKXtyZXR1cm4gbmV3IGEuTihiLHRoaXMsYyxmdW5jdGlvbihhLGIpe2EuJHBhcmVudENvbnRleHQ9YjthLiRwYXJlbnQ9Yi4kZGF0YTthLiRwYXJlbnRzPShiLiRwYXJlbnRzfHxbXSkuc2xpY2UoMCk7YS4kcGFyZW50cy51bnNoaWZ0KGEuJHBhcmVudCk7ZCYmZChhKX0pfTthLk4ucHJvdG90eXBlLmV4dGVuZD1mdW5jdGlvbihiKXtyZXR1cm4gbmV3IGEuTih0aGlzLkl8fHRoaXMuJGRhdGEsdGhpcyxudWxsLGZ1bmN0aW9uKGMsZCl7Yy4kcmF3RGF0YT1kLiRyYXdEYXRhO2EuYS5leHRlbmQoYyxcImZ1bmN0aW9uXCI9PXR5cGVvZiBiP2IoKTpiKX0pfTt2YXIgcT1hLmEuZS5GKCksbj1hLmEuZS5GKCk7YS5PYj1mdW5jdGlvbihiLGMpe2lmKDI9PWFyZ3VtZW50cy5sZW5ndGgpYS5hLmUuc2V0KGIsbixjKSxcbmMuSSYmYy5JLlRiKGIpO2Vsc2UgcmV0dXJuIGEuYS5lLmdldChiLG4pfTthLnJhPWZ1bmN0aW9uKGIsYyxkKXsxPT09Yi5ub2RlVHlwZSYmYS5mLkZiKGIpO3JldHVybiBmKGIsYyxtKGQpLCEwKX07YS5XYj1mdW5jdGlvbihkLGYsZSl7ZT1tKGUpO3JldHVybiBhLnJhKGQsXCJmdW5jdGlvblwiPT09dHlwZW9mIGY/YyhmLmJpbmQobnVsbCxlLGQpKTphLmEubmEoZixiKSxlKX07YS5DYT1mdW5jdGlvbihhLGIpezEhPT1iLm5vZGVUeXBlJiY4IT09Yi5ub2RlVHlwZXx8ZyhtKGEpLGIsITApfTthLnBiPWZ1bmN0aW9uKGEsYil7IXcmJnMualF1ZXJ5JiYodz1zLmpRdWVyeSk7aWYoYiYmMSE9PWIubm9kZVR5cGUmJjghPT1iLm5vZGVUeXBlKXRocm93IEVycm9yKFwia28uYXBwbHlCaW5kaW5nczogZmlyc3QgcGFyYW1ldGVyIHNob3VsZCBiZSB5b3VyIHZpZXcgbW9kZWw7IHNlY29uZCBwYXJhbWV0ZXIgc2hvdWxkIGJlIGEgRE9NIG5vZGVcIik7Yj1ifHxzLmRvY3VtZW50LmJvZHk7aChtKGEpLFxuYiwhMCl9O2EuSGE9ZnVuY3Rpb24oYil7c3dpdGNoKGIubm9kZVR5cGUpe2Nhc2UgMTpjYXNlIDg6dmFyIGM9YS5PYihiKTtpZihjKXJldHVybiBjO2lmKGIucGFyZW50Tm9kZSlyZXR1cm4gYS5IYShiLnBhcmVudE5vZGUpfXJldHVybiBwfTthLiRiPWZ1bmN0aW9uKGIpe3JldHVybihiPWEuSGEoYikpP2IuJGRhdGE6cH07YS5iKFwiYmluZGluZ0hhbmRsZXJzXCIsYS5kKTthLmIoXCJhcHBseUJpbmRpbmdzXCIsYS5wYik7YS5iKFwiYXBwbHlCaW5kaW5nc1RvRGVzY2VuZGFudHNcIixhLkNhKTthLmIoXCJhcHBseUJpbmRpbmdBY2Nlc3NvcnNUb05vZGVcIixhLnJhKTthLmIoXCJhcHBseUJpbmRpbmdzVG9Ob2RlXCIsYS5XYik7YS5iKFwiY29udGV4dEZvclwiLGEuSGEpO2EuYihcImRhdGFGb3JcIixhLiRiKX0pKCk7KGZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGQoZCxmKXt2YXIgZT1nLmhhc093blByb3BlcnR5KGQpP2dbZF06YixsO2V8fChlPWdbZF09bmV3IGEuUCxjKGQsZnVuY3Rpb24oYSl7aFtkXT1hO2RlbGV0ZSBnW2RdO1xubD9lLm5vdGlmeVN1YnNjcmliZXJzKGEpOnNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLm5vdGlmeVN1YnNjcmliZXJzKGEpfSwwKX0pLGw9ITApO2UuVShmKX1mdW5jdGlvbiBjKGEsYil7ZShcImdldENvbmZpZ1wiLFthXSxmdW5jdGlvbihjKXtjP2UoXCJsb2FkQ29tcG9uZW50XCIsW2EsY10sZnVuY3Rpb24oYSl7YihhKX0pOmIobnVsbCl9KX1mdW5jdGlvbiBlKGMsZCxnLGwpe2x8fChsPWEuZy5sb2FkZXJzLnNsaWNlKDApKTt2YXIgaD1sLnNoaWZ0KCk7aWYoaCl7dmFyIG49aFtjXTtpZihuKXt2YXIgdD0hMTtpZihuLmFwcGx5KGgsZC5jb25jYXQoZnVuY3Rpb24oYSl7dD9nKG51bGwpOm51bGwhPT1hP2coYSk6ZShjLGQsZyxsKX0pKSE9PWImJih0PSEwLCFoLnN1cHByZXNzTG9hZGVyRXhjZXB0aW9ucykpdGhyb3cgRXJyb3IoXCJDb21wb25lbnQgbG9hZGVycyBtdXN0IHN1cHBseSB2YWx1ZXMgYnkgaW52b2tpbmcgdGhlIGNhbGxiYWNrLCBub3QgYnkgcmV0dXJuaW5nIHZhbHVlcyBzeW5jaHJvbm91c2x5LlwiKTtcbn1lbHNlIGUoYyxkLGcsbCl9ZWxzZSBnKG51bGwpfXZhciBnPXt9LGg9e307YS5nPXtnZXQ6ZnVuY3Rpb24oYSxjKXt2YXIgZT1oLmhhc093blByb3BlcnR5KGEpP2hbYV06YjtlP3NldFRpbWVvdXQoZnVuY3Rpb24oKXtjKGUpfSwwKTpkKGEsYyl9LHRiOmZ1bmN0aW9uKGEpe2RlbGV0ZSBoW2FdfSxqYjplfTthLmcubG9hZGVycz1bXTthLmIoXCJjb21wb25lbnRzXCIsYS5nKTthLmIoXCJjb21wb25lbnRzLmdldFwiLGEuZy5nZXQpO2EuYihcImNvbXBvbmVudHMuY2xlYXJDYWNoZWREZWZpbml0aW9uXCIsYS5nLnRiKX0pKCk7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGMsZCxlKXtmdW5jdGlvbiBrKCl7MD09PS0tdSYmZShoKX12YXIgaD17fSx1PTIscj1kLnRlbXBsYXRlO2Q9ZC52aWV3TW9kZWw7cj9nKGMscixmdW5jdGlvbihjKXthLmcuamIoXCJsb2FkVGVtcGxhdGVcIixbYixjXSxmdW5jdGlvbihhKXtoLnRlbXBsYXRlPWE7aygpfSl9KTprKCk7ZD9nKGMsZCxmdW5jdGlvbihjKXthLmcuamIoXCJsb2FkVmlld01vZGVsXCIsXG5bYixjXSxmdW5jdGlvbihhKXtoW2ZdPWE7aygpfSl9KTprKCl9ZnVuY3Rpb24gZChhLGIsYyl7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIpYyhmdW5jdGlvbihhKXtyZXR1cm4gbmV3IGIoYSl9KTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiW2ZdKWMoYltmXSk7ZWxzZSBpZihcImluc3RhbmNlXCJpbiBiKXt2YXIgZT1iLmluc3RhbmNlO2MoZnVuY3Rpb24oKXtyZXR1cm4gZX0pfWVsc2VcInZpZXdNb2RlbFwiaW4gYj9kKGEsYi52aWV3TW9kZWwsYyk6YShcIlVua25vd24gdmlld01vZGVsIHZhbHVlOiBcIitiKX1mdW5jdGlvbiBjKGIpe3N3aXRjaChhLmEudChiKSl7Y2FzZSBcInNjcmlwdFwiOnJldHVybiBhLmEuYmEoYi50ZXh0KTtjYXNlIFwidGV4dGFyZWFcIjpyZXR1cm4gYS5hLmJhKGIudmFsdWUpO2Nhc2UgXCJ0ZW1wbGF0ZVwiOmlmKGUoYi5jb250ZW50KSlyZXR1cm4gYS5hLmlhKGIuY29udGVudC5jaGlsZE5vZGVzKX1yZXR1cm4gYS5hLmlhKGIuY2hpbGROb2Rlcyl9ZnVuY3Rpb24gZShhKXtyZXR1cm4gcy5Eb2N1bWVudEZyYWdtZW50P1xuYSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQ6YSYmMTE9PT1hLm5vZGVUeXBlfWZ1bmN0aW9uIGcoYSxiLGMpe1wic3RyaW5nXCI9PT10eXBlb2YgYi5yZXF1aXJlP058fHMucmVxdWlyZT8oTnx8cy5yZXF1aXJlKShbYi5yZXF1aXJlXSxjKTphKFwiVXNlcyByZXF1aXJlLCBidXQgbm8gQU1EIGxvYWRlciBpcyBwcmVzZW50XCIpOmMoYil9ZnVuY3Rpb24gaChhKXtyZXR1cm4gZnVuY3Rpb24oYil7dGhyb3cgRXJyb3IoXCJDb21wb25lbnQgJ1wiK2ErXCInOiBcIitiKTt9fXZhciBrPXt9O2EuZy50Yz1mdW5jdGlvbihiLGMpe2lmKCFjKXRocm93IEVycm9yKFwiSW52YWxpZCBjb25maWd1cmF0aW9uIGZvciBcIitiKTtpZihhLmcuUWEoYikpdGhyb3cgRXJyb3IoXCJDb21wb25lbnQgXCIrYitcIiBpcyBhbHJlYWR5IHJlZ2lzdGVyZWRcIik7a1tiXT1jfTthLmcuUWE9ZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW4ga307YS5nLndjPWZ1bmN0aW9uKGIpe2RlbGV0ZSBrW2JdO2EuZy50YihiKX07YS5nLnViPXtnZXRDb25maWc6ZnVuY3Rpb24oYSxcbmIpe2Ioay5oYXNPd25Qcm9wZXJ0eShhKT9rW2FdOm51bGwpfSxsb2FkQ29tcG9uZW50OmZ1bmN0aW9uKGEsYyxkKXt2YXIgZT1oKGEpO2coZSxjLGZ1bmN0aW9uKGMpe2IoYSxlLGMsZCl9KX0sbG9hZFRlbXBsYXRlOmZ1bmN0aW9uKGIsZCxmKXtiPWgoYik7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBkKWYoYS5hLmJhKGQpKTtlbHNlIGlmKGQgaW5zdGFuY2VvZiBBcnJheSlmKGQpO2Vsc2UgaWYoZShkKSlmKGEuYS5TKGQuY2hpbGROb2RlcykpO2Vsc2UgaWYoZC5lbGVtZW50KWlmKGQ9ZC5lbGVtZW50LHMuSFRNTEVsZW1lbnQ/ZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50OmQmJmQudGFnTmFtZSYmMT09PWQubm9kZVR5cGUpZihjKGQpKTtlbHNlIGlmKFwic3RyaW5nXCI9PT10eXBlb2YgZCl7dmFyIGs9di5nZXRFbGVtZW50QnlJZChkKTtrP2YoYyhrKSk6YihcIkNhbm5vdCBmaW5kIGVsZW1lbnQgd2l0aCBJRCBcIitkKX1lbHNlIGIoXCJVbmtub3duIGVsZW1lbnQgdHlwZTogXCIrZCk7ZWxzZSBiKFwiVW5rbm93biB0ZW1wbGF0ZSB2YWx1ZTogXCIrXG5kKX0sbG9hZFZpZXdNb2RlbDpmdW5jdGlvbihhLGIsYyl7ZChoKGEpLGIsYyl9fTt2YXIgZj1cImNyZWF0ZVZpZXdNb2RlbFwiO2EuYihcImNvbXBvbmVudHMucmVnaXN0ZXJcIixhLmcudGMpO2EuYihcImNvbXBvbmVudHMuaXNSZWdpc3RlcmVkXCIsYS5nLlFhKTthLmIoXCJjb21wb25lbnRzLnVucmVnaXN0ZXJcIixhLmcud2MpO2EuYihcImNvbXBvbmVudHMuZGVmYXVsdExvYWRlclwiLGEuZy51Yik7YS5nLmxvYWRlcnMucHVzaChhLmcudWIpO2EuZy5VYj1rfSkoKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsZSl7dmFyIGc9Yi5nZXRBdHRyaWJ1dGUoXCJwYXJhbXNcIik7aWYoZyl7dmFyIGc9ZC5wYXJzZUJpbmRpbmdzU3RyaW5nKGcsZSxiLHt2YWx1ZUFjY2Vzc29yczohMCxiaW5kaW5nUGFyYW1zOiEwfSksZz1hLmEubmEoZyxmdW5jdGlvbihkKXtyZXR1cm4gYS5zKGQsbnVsbCx7bzpifSl9KSxoPWEuYS5uYShnLGZ1bmN0aW9uKGQpe3JldHVybiBkLlooKT9hLnMoZnVuY3Rpb24oKXtyZXR1cm4gYS5hLmMoZCgpKX0sXG5udWxsLHtvOmJ9KTpkLnYoKX0pO2guaGFzT3duUHJvcGVydHkoXCIkcmF3XCIpfHwoaC4kcmF3PWcpO3JldHVybiBofXJldHVybnskcmF3Ont9fX1hLmcuZ2V0Q29tcG9uZW50TmFtZUZvck5vZGU9ZnVuY3Rpb24oYil7Yj1hLmEudChiKTtyZXR1cm4gYS5nLlFhKGIpJiZifTthLmcubWI9ZnVuY3Rpb24oYyxkLGcsaCl7aWYoMT09PWQubm9kZVR5cGUpe3ZhciBrPWEuZy5nZXRDb21wb25lbnROYW1lRm9yTm9kZShkKTtpZihrKXtjPWN8fHt9O2lmKGMuY29tcG9uZW50KXRocm93IEVycm9yKCdDYW5ub3QgdXNlIHRoZSBcImNvbXBvbmVudFwiIGJpbmRpbmcgb24gYSBjdXN0b20gZWxlbWVudCBtYXRjaGluZyBhIGNvbXBvbmVudCcpO3ZhciBmPXtuYW1lOmsscGFyYW1zOmIoZCxnKX07Yy5jb21wb25lbnQ9aD9mdW5jdGlvbigpe3JldHVybiBmfTpmfX1yZXR1cm4gY307dmFyIGQ9bmV3IGEuSjs5PmEuYS5MJiYoYS5nLnJlZ2lzdGVyPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihiKXt2LmNyZWF0ZUVsZW1lbnQoYik7XG5yZXR1cm4gYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fShhLmcucmVnaXN0ZXIpLHYuY3JlYXRlRG9jdW1lbnRGcmFnbWVudD1mdW5jdGlvbihiKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgZD1iKCksZz1hLmcuVWIsaDtmb3IoaCBpbiBnKWcuaGFzT3duUHJvcGVydHkoaCkmJmQuY3JlYXRlRWxlbWVudChoKTtyZXR1cm4gZH19KHYuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCkpfSkoKTsoZnVuY3Rpb24oKXt2YXIgYj0wO2EuZC5jb21wb25lbnQ9e2luaXQ6ZnVuY3Rpb24oZCxjLGUsZyxoKXtmdW5jdGlvbiBrKCl7dmFyIGE9ZiYmZi5kaXNwb3NlO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBhJiZhLmNhbGwoZik7bT1udWxsfXZhciBmLG07YS5hLncuZGEoZCxrKTthLnMoZnVuY3Rpb24oKXt2YXIgZT1hLmEuYyhjKCkpLGcsbjtcInN0cmluZ1wiPT09dHlwZW9mIGU/Zz1lOihnPWEuYS5jKGUubmFtZSksbj1hLmEuYyhlLnBhcmFtcykpO2lmKCFnKXRocm93IEVycm9yKFwiTm8gY29tcG9uZW50IG5hbWUgc3BlY2lmaWVkXCIpO1xudmFyIHQ9bT0rK2I7YS5nLmdldChnLGZ1bmN0aW9uKGIpe2lmKG09PT10KXtrKCk7aWYoIWIpdGhyb3cgRXJyb3IoXCJVbmtub3duIGNvbXBvbmVudCAnXCIrZytcIidcIik7dmFyIGM9Yi50ZW1wbGF0ZTtpZighYyl0aHJvdyBFcnJvcihcIkNvbXBvbmVudCAnXCIrZytcIicgaGFzIG5vIHRlbXBsYXRlXCIpO2M9YS5hLmlhKGMpO2EuZi5UKGQsYyk7dmFyIGM9bixlPWIuY3JlYXRlVmlld01vZGVsO2I9ZT9lLmNhbGwoYixjLHtlbGVtZW50OmR9KTpjO2M9aC5jcmVhdGVDaGlsZENvbnRleHQoYik7Zj1iO2EuQ2EoYyxkKX19KX0sbnVsbCx7bzpkfSk7cmV0dXJue2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzOiEwfX19O2EuZi5RLmNvbXBvbmVudD0hMH0pKCk7dmFyIFE9e1wiY2xhc3NcIjpcImNsYXNzTmFtZVwiLFwiZm9yXCI6XCJodG1sRm9yXCJ9O2EuZC5hdHRyPXt1cGRhdGU6ZnVuY3Rpb24oYixkKXt2YXIgYz1hLmEuYyhkKCkpfHx7fTthLmEuRyhjLGZ1bmN0aW9uKGMsZCl7ZD1hLmEuYyhkKTt2YXIgaD1cbiExPT09ZHx8bnVsbD09PWR8fGQ9PT1wO2gmJmIucmVtb3ZlQXR0cmlidXRlKGMpOzg+PWEuYS5MJiZjIGluIFE/KGM9UVtjXSxoP2IucmVtb3ZlQXR0cmlidXRlKGMpOmJbY109ZCk6aHx8Yi5zZXRBdHRyaWJ1dGUoYyxkLnRvU3RyaW5nKCkpO1wibmFtZVwiPT09YyYmYS5hLk1iKGIsaD9cIlwiOmQudG9TdHJpbmcoKSl9KX19OyhmdW5jdGlvbigpe2EuZC5jaGVja2VkPXthZnRlcjpbXCJ2YWx1ZVwiLFwiYXR0clwiXSxpbml0OmZ1bmN0aW9uKGIsZCxjKXtmdW5jdGlvbiBlKCl7dmFyIGU9Yi5jaGVja2VkLGs9cT9oKCk6ZTtpZighYS5ZLm1hKCkmJighZnx8ZSkpe3ZhciBnPWEuay5CKGQpO20/bCE9PWs/KGUmJihhLmEuZWEoZyxrLCEwKSxhLmEuZWEoZyxsLCExKSksbD1rKTphLmEuZWEoZyxrLGUpOmEuaC5wYShnLGMsXCJjaGVja2VkXCIsaywhMCl9fWZ1bmN0aW9uIGcoKXt2YXIgYz1hLmEuYyhkKCkpO2IuY2hlY2tlZD1tPzA8PWEuYS5tKGMsaCgpKTprP2M6aCgpPT09Y312YXIgaD1hLkliKGZ1bmN0aW9uKCl7cmV0dXJuIGMuaGFzKFwiY2hlY2tlZFZhbHVlXCIpP1xuYS5hLmMoYy5nZXQoXCJjaGVja2VkVmFsdWVcIikpOmMuaGFzKFwidmFsdWVcIik/YS5hLmMoYy5nZXQoXCJ2YWx1ZVwiKSk6Yi52YWx1ZX0pLGs9XCJjaGVja2JveFwiPT1iLnR5cGUsZj1cInJhZGlvXCI9PWIudHlwZTtpZihrfHxmKXt2YXIgbT1rJiZhLmEuYyhkKCkpaW5zdGFuY2VvZiBBcnJheSxsPW0/aCgpOnAscT1mfHxtO2YmJiFiLm5hbWUmJmEuZC51bmlxdWVOYW1lLmluaXQoYixmdW5jdGlvbigpe3JldHVybiEwfSk7YS5zKGUsbnVsbCx7bzpifSk7YS5hLm4oYixcImNsaWNrXCIsZSk7YS5zKGcsbnVsbCx7bzpifSl9fX07YS5oLlYuY2hlY2tlZD0hMDthLmQuY2hlY2tlZFZhbHVlPXt1cGRhdGU6ZnVuY3Rpb24oYixkKXtiLnZhbHVlPWEuYS5jKGQoKSl9fX0pKCk7YS5kLmNzcz17dXBkYXRlOmZ1bmN0aW9uKGIsZCl7dmFyIGM9YS5hLmMoZCgpKTtcIm9iamVjdFwiPT10eXBlb2YgYz9hLmEuRyhjLGZ1bmN0aW9uKGMsZCl7ZD1hLmEuYyhkKTthLmEuQmEoYixjLGQpfSk6KGM9U3RyaW5nKGN8fFwiXCIpLFxuYS5hLkJhKGIsYi5fX2tvX19jc3NWYWx1ZSwhMSksYi5fX2tvX19jc3NWYWx1ZT1jLGEuYS5CYShiLGMsITApKX19O2EuZC5lbmFibGU9e3VwZGF0ZTpmdW5jdGlvbihiLGQpe3ZhciBjPWEuYS5jKGQoKSk7YyYmYi5kaXNhYmxlZD9iLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpOmN8fGIuZGlzYWJsZWR8fChiLmRpc2FibGVkPSEwKX19O2EuZC5kaXNhYmxlPXt1cGRhdGU6ZnVuY3Rpb24oYixkKXthLmQuZW5hYmxlLnVwZGF0ZShiLGZ1bmN0aW9uKCl7cmV0dXJuIWEuYS5jKGQoKSl9KX19O2EuZC5ldmVudD17aW5pdDpmdW5jdGlvbihiLGQsYyxlLGcpe3ZhciBoPWQoKXx8e307YS5hLkcoaCxmdW5jdGlvbihrKXtcInN0cmluZ1wiPT10eXBlb2YgayYmYS5hLm4oYixrLGZ1bmN0aW9uKGIpe3ZhciBoLGw9ZCgpW2tdO2lmKGwpe3RyeXt2YXIgcT1hLmEuUyhhcmd1bWVudHMpO2U9Zy4kZGF0YTtxLnVuc2hpZnQoZSk7aD1sLmFwcGx5KGUscSl9ZmluYWxseXshMCE9PWgmJihiLnByZXZlbnREZWZhdWx0P1xuYi5wcmV2ZW50RGVmYXVsdCgpOmIucmV0dXJuVmFsdWU9ITEpfSExPT09Yy5nZXQoaytcIkJ1YmJsZVwiKSYmKGIuY2FuY2VsQnViYmxlPSEwLGIuc3RvcFByb3BhZ2F0aW9uJiZiLnN0b3BQcm9wYWdhdGlvbigpKX19KX0pfX07YS5kLmZvcmVhY2g9e0ViOmZ1bmN0aW9uKGIpe3JldHVybiBmdW5jdGlvbigpe3ZhciBkPWIoKSxjPWEuYS5YYShkKTtpZighY3x8XCJudW1iZXJcIj09dHlwZW9mIGMubGVuZ3RoKXJldHVybntmb3JlYWNoOmQsdGVtcGxhdGVFbmdpbmU6YS5PLk9hfTthLmEuYyhkKTtyZXR1cm57Zm9yZWFjaDpjLmRhdGEsYXM6Yy5hcyxpbmNsdWRlRGVzdHJveWVkOmMuaW5jbHVkZURlc3Ryb3llZCxhZnRlckFkZDpjLmFmdGVyQWRkLGJlZm9yZVJlbW92ZTpjLmJlZm9yZVJlbW92ZSxhZnRlclJlbmRlcjpjLmFmdGVyUmVuZGVyLGJlZm9yZU1vdmU6Yy5iZWZvcmVNb3ZlLGFmdGVyTW92ZTpjLmFmdGVyTW92ZSx0ZW1wbGF0ZUVuZ2luZTphLk8uT2F9fX0saW5pdDpmdW5jdGlvbihiLFxuZCl7cmV0dXJuIGEuZC50ZW1wbGF0ZS5pbml0KGIsYS5kLmZvcmVhY2guRWIoZCkpfSx1cGRhdGU6ZnVuY3Rpb24oYixkLGMsZSxnKXtyZXR1cm4gYS5kLnRlbXBsYXRlLnVwZGF0ZShiLGEuZC5mb3JlYWNoLkViKGQpLGMsZSxnKX19O2EuaC5oYS5mb3JlYWNoPSExO2EuZi5RLmZvcmVhY2g9ITA7YS5kLmhhc2ZvY3VzPXtpbml0OmZ1bmN0aW9uKGIsZCxjKXtmdW5jdGlvbiBlKGUpe2IuX19rb19oYXNmb2N1c1VwZGF0aW5nPSEwO3ZhciBmPWIub3duZXJEb2N1bWVudDtpZihcImFjdGl2ZUVsZW1lbnRcImluIGYpe3ZhciBnO3RyeXtnPWYuYWN0aXZlRWxlbWVudH1jYXRjaChoKXtnPWYuYm9keX1lPWc9PT1ifWY9ZCgpO2EuaC5wYShmLGMsXCJoYXNmb2N1c1wiLGUsITApO2IuX19rb19oYXNmb2N1c0xhc3RWYWx1ZT1lO2IuX19rb19oYXNmb2N1c1VwZGF0aW5nPSExfXZhciBnPWUuYmluZChudWxsLCEwKSxoPWUuYmluZChudWxsLCExKTthLmEubihiLFwiZm9jdXNcIixnKTthLmEubihiLFwiZm9jdXNpblwiLFxuZyk7YS5hLm4oYixcImJsdXJcIixoKTthLmEubihiLFwiZm9jdXNvdXRcIixoKX0sdXBkYXRlOmZ1bmN0aW9uKGIsZCl7dmFyIGM9ISFhLmEuYyhkKCkpO2IuX19rb19oYXNmb2N1c1VwZGF0aW5nfHxiLl9fa29faGFzZm9jdXNMYXN0VmFsdWU9PT1jfHwoYz9iLmZvY3VzKCk6Yi5ibHVyKCksYS5rLkIoYS5hLm9hLG51bGwsW2IsYz9cImZvY3VzaW5cIjpcImZvY3Vzb3V0XCJdKSl9fTthLmguVi5oYXNmb2N1cz0hMDthLmQuaGFzRm9jdXM9YS5kLmhhc2ZvY3VzO2EuaC5WLmhhc0ZvY3VzPSEwO2EuZC5odG1sPXtpbml0OmZ1bmN0aW9uKCl7cmV0dXJue2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzOiEwfX0sdXBkYXRlOmZ1bmN0aW9uKGIsZCl7YS5hLiRhKGIsZCgpKX19O0koXCJpZlwiKTtJKFwiaWZub3RcIiwhMSwhMCk7SShcIndpdGhcIiwhMCwhMSxmdW5jdGlvbihhLGQpe3JldHVybiBhLmNyZWF0ZUNoaWxkQ29udGV4dChkKX0pO3ZhciBLPXt9O2EuZC5vcHRpb25zPXtpbml0OmZ1bmN0aW9uKGIpe2lmKFwic2VsZWN0XCIhPT1cbmEuYS50KGIpKXRocm93IEVycm9yKFwib3B0aW9ucyBiaW5kaW5nIGFwcGxpZXMgb25seSB0byBTRUxFQ1QgZWxlbWVudHNcIik7Zm9yKDswPGIubGVuZ3RoOyliLnJlbW92ZSgwKTtyZXR1cm57Y29udHJvbHNEZXNjZW5kYW50QmluZGluZ3M6ITB9fSx1cGRhdGU6ZnVuY3Rpb24oYixkLGMpe2Z1bmN0aW9uIGUoKXtyZXR1cm4gYS5hLnRhKGIub3B0aW9ucyxmdW5jdGlvbihhKXtyZXR1cm4gYS5zZWxlY3RlZH0pfWZ1bmN0aW9uIGcoYSxiLGMpe3ZhciBkPXR5cGVvZiBiO3JldHVyblwiZnVuY3Rpb25cIj09ZD9iKGEpOlwic3RyaW5nXCI9PWQ/YVtiXTpjfWZ1bmN0aW9uIGgoYyxkKXtpZihxLmxlbmd0aCl7dmFyIGU9MDw9YS5hLm0ocSxhLmkucShkWzBdKSk7YS5hLk5iKGRbMF0sZSk7biYmIWUmJmEuay5CKGEuYS5vYSxudWxsLFtiLFwiY2hhbmdlXCJdKX19dmFyIGs9MCE9Yi5sZW5ndGgmJmIubXVsdGlwbGU/Yi5zY3JvbGxUb3A6bnVsbCxmPWEuYS5jKGQoKSksbT1jLmdldChcIm9wdGlvbnNJbmNsdWRlRGVzdHJveWVkXCIpO1xuZD17fTt2YXIgbCxxO3E9Yi5tdWx0aXBsZT9hLmEuRGEoZSgpLGEuaS5xKTowPD1iLnNlbGVjdGVkSW5kZXg/W2EuaS5xKGIub3B0aW9uc1tiLnNlbGVjdGVkSW5kZXhdKV06W107ZiYmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBmLmxlbmd0aCYmKGY9W2ZdKSxsPWEuYS50YShmLGZ1bmN0aW9uKGIpe3JldHVybiBtfHxiPT09cHx8bnVsbD09PWJ8fCFhLmEuYyhiLl9kZXN0cm95KX0pLGMuaGFzKFwib3B0aW9uc0NhcHRpb25cIikmJihmPWEuYS5jKGMuZ2V0KFwib3B0aW9uc0NhcHRpb25cIikpLG51bGwhPT1mJiZmIT09cCYmbC51bnNoaWZ0KEspKSk7dmFyIG49ITE7ZC5iZWZvcmVSZW1vdmU9ZnVuY3Rpb24oYSl7Yi5yZW1vdmVDaGlsZChhKX07Zj1oO2MuaGFzKFwib3B0aW9uc0FmdGVyUmVuZGVyXCIpJiYoZj1mdW5jdGlvbihiLGQpe2goMCxkKTthLmsuQihjLmdldChcIm9wdGlvbnNBZnRlclJlbmRlclwiKSxudWxsLFtkWzBdLGIhPT1LP2I6cF0pfSk7YS5hLlphKGIsbCxmdW5jdGlvbihkLGUsZil7Zi5sZW5ndGgmJlxuKHE9ZlswXS5zZWxlY3RlZD9bYS5pLnEoZlswXSldOltdLG49ITApO2U9Yi5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7ZD09PUs/KGEuYS5iYihlLGMuZ2V0KFwib3B0aW9uc0NhcHRpb25cIikpLGEuaS5jYShlLHApKTooZj1nKGQsYy5nZXQoXCJvcHRpb25zVmFsdWVcIiksZCksYS5pLmNhKGUsYS5hLmMoZikpLGQ9ZyhkLGMuZ2V0KFwib3B0aW9uc1RleHRcIiksZiksYS5hLmJiKGUsZCkpO3JldHVybltlXX0sZCxmKTthLmsuQihmdW5jdGlvbigpe2MuZ2V0KFwidmFsdWVBbGxvd1Vuc2V0XCIpJiZjLmhhcyhcInZhbHVlXCIpP2EuaS5jYShiLGEuYS5jKGMuZ2V0KFwidmFsdWVcIikpLCEwKTooYi5tdWx0aXBsZT9xLmxlbmd0aCYmZSgpLmxlbmd0aDxxLmxlbmd0aDpxLmxlbmd0aCYmMDw9Yi5zZWxlY3RlZEluZGV4P2EuaS5xKGIub3B0aW9uc1tiLnNlbGVjdGVkSW5kZXhdKSE9PXFbMF06cS5sZW5ndGh8fDA8PWIuc2VsZWN0ZWRJbmRleCkmJmEuYS5vYShiLFwiY2hhbmdlXCIpfSk7XG5hLmEuZGMoYik7ayYmMjA8TWF0aC5hYnMoay1iLnNjcm9sbFRvcCkmJihiLnNjcm9sbFRvcD1rKX19O2EuZC5vcHRpb25zLlZhPWEuYS5lLkYoKTthLmQuc2VsZWN0ZWRPcHRpb25zPXthZnRlcjpbXCJvcHRpb25zXCIsXCJmb3JlYWNoXCJdLGluaXQ6ZnVuY3Rpb24oYixkLGMpe2EuYS5uKGIsXCJjaGFuZ2VcIixmdW5jdGlvbigpe3ZhciBlPWQoKSxnPVtdO2EuYS51KGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJvcHRpb25cIiksZnVuY3Rpb24oYil7Yi5zZWxlY3RlZCYmZy5wdXNoKGEuaS5xKGIpKX0pO2EuaC5wYShlLGMsXCJzZWxlY3RlZE9wdGlvbnNcIixnKX0pfSx1cGRhdGU6ZnVuY3Rpb24oYixkKXtpZihcInNlbGVjdFwiIT1hLmEudChiKSl0aHJvdyBFcnJvcihcInZhbHVlcyBiaW5kaW5nIGFwcGxpZXMgb25seSB0byBTRUxFQ1QgZWxlbWVudHNcIik7dmFyIGM9YS5hLmMoZCgpKTtjJiZcIm51bWJlclwiPT10eXBlb2YgYy5sZW5ndGgmJmEuYS51KGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJvcHRpb25cIiksXG5mdW5jdGlvbihiKXt2YXIgZD0wPD1hLmEubShjLGEuaS5xKGIpKTthLmEuTmIoYixkKX0pfX07YS5oLlYuc2VsZWN0ZWRPcHRpb25zPSEwO2EuZC5zdHlsZT17dXBkYXRlOmZ1bmN0aW9uKGIsZCl7dmFyIGM9YS5hLmMoZCgpfHx7fSk7YS5hLkcoYyxmdW5jdGlvbihjLGQpe2Q9YS5hLmMoZCk7aWYobnVsbD09PWR8fGQ9PT1wfHwhMT09PWQpZD1cIlwiO2Iuc3R5bGVbY109ZH0pfX07YS5kLnN1Ym1pdD17aW5pdDpmdW5jdGlvbihiLGQsYyxlLGcpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGQoKSl0aHJvdyBFcnJvcihcIlRoZSB2YWx1ZSBmb3IgYSBzdWJtaXQgYmluZGluZyBtdXN0IGJlIGEgZnVuY3Rpb25cIik7YS5hLm4oYixcInN1Ym1pdFwiLGZ1bmN0aW9uKGEpe3ZhciBjLGU9ZCgpO3RyeXtjPWUuY2FsbChnLiRkYXRhLGIpfWZpbmFsbHl7ITAhPT1jJiYoYS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6YS5yZXR1cm5WYWx1ZT0hMSl9fSl9fTthLmQudGV4dD17aW5pdDpmdW5jdGlvbigpe3JldHVybntjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5nczohMH19LFxudXBkYXRlOmZ1bmN0aW9uKGIsZCl7YS5hLmJiKGIsZCgpKX19O2EuZi5RLnRleHQ9ITA7KGZ1bmN0aW9uKCl7aWYocyYmcy5uYXZpZ2F0b3IpdmFyIGI9ZnVuY3Rpb24oYSl7aWYoYSlyZXR1cm4gcGFyc2VGbG9hdChhWzFdKX0sZD1zLm9wZXJhJiZzLm9wZXJhLnZlcnNpb24mJnBhcnNlSW50KHMub3BlcmEudmVyc2lvbigpKSxjPXMubmF2aWdhdG9yLnVzZXJBZ2VudCxlPWIoYy5tYXRjaCgvXig/Oig/IWNocm9tZSkuKSp2ZXJzaW9uXFwvKFteIF0qKSBzYWZhcmkvaSkpLGc9YihjLm1hdGNoKC9GaXJlZm94XFwvKFteIF0qKS8pKTtpZigxMD5hLmEuTCl2YXIgaD1hLmEuZS5GKCksaz1hLmEuZS5GKCksZj1mdW5jdGlvbihiKXt2YXIgYz10aGlzLmFjdGl2ZUVsZW1lbnQ7KGM9YyYmYS5hLmUuZ2V0KGMsaykpJiZjKGIpfSxtPWZ1bmN0aW9uKGIsYyl7dmFyIGQ9Yi5vd25lckRvY3VtZW50O2EuYS5lLmdldChkLGgpfHwoYS5hLmUuc2V0KGQsaCwhMCksYS5hLm4oZCxcInNlbGVjdGlvbmNoYW5nZVwiLFxuZikpO2EuYS5lLnNldChiLGssYyl9O2EuZC50ZXh0SW5wdXQ9e2luaXQ6ZnVuY3Rpb24oYixjLGYpe2Z1bmN0aW9uIGsoYyxkKXthLmEubihiLGMsZCl9ZnVuY3Rpb24gaCgpe3ZhciBkPWEuYS5jKGMoKSk7aWYobnVsbD09PWR8fGQ9PT1wKWQ9XCJcIjt2IT09cCYmZD09PXY/c2V0VGltZW91dChoLDQpOmIudmFsdWUhPT1kJiYocz1kLGIudmFsdWU9ZCl9ZnVuY3Rpb24gdSgpe3l8fCh2PWIudmFsdWUseT1zZXRUaW1lb3V0KHIsNCkpfWZ1bmN0aW9uIHIoKXtjbGVhclRpbWVvdXQoeSk7dj15PXA7dmFyIGQ9Yi52YWx1ZTtzIT09ZCYmKHM9ZCxhLmgucGEoYygpLGYsXCJ0ZXh0SW5wdXRcIixkKSl9dmFyIHM9Yi52YWx1ZSx5LHY7MTA+YS5hLkw/KGsoXCJwcm9wZXJ0eWNoYW5nZVwiLGZ1bmN0aW9uKGEpe1widmFsdWVcIj09PWEucHJvcGVydHlOYW1lJiZyKCl9KSw4PT1hLmEuTCYmKGsoXCJrZXl1cFwiLHIpLGsoXCJrZXlkb3duXCIscikpLDg8PWEuYS5MJiYobShiLHIpLGsoXCJkcmFnZW5kXCIsdSkpKTpcbihrKFwiaW5wdXRcIixyKSw1PmUmJlwidGV4dGFyZWFcIj09PWEuYS50KGIpPyhrKFwia2V5ZG93blwiLHUpLGsoXCJwYXN0ZVwiLHUpLGsoXCJjdXRcIix1KSk6MTE+ZD9rKFwia2V5ZG93blwiLHUpOjQ+ZyYmKGsoXCJET01BdXRvQ29tcGxldGVcIixyKSxrKFwiZHJhZ2Ryb3BcIixyKSxrKFwiZHJvcFwiLHIpKSk7ayhcImNoYW5nZVwiLHIpO2EucyhoLG51bGwse286Yn0pfX07YS5oLlYudGV4dElucHV0PSEwO2EuZC50ZXh0aW5wdXQ9e3ByZXByb2Nlc3M6ZnVuY3Rpb24oYSxiLGMpe2MoXCJ0ZXh0SW5wdXRcIixhKX19fSkoKTthLmQudW5pcXVlTmFtZT17aW5pdDpmdW5jdGlvbihiLGQpe2lmKGQoKSl7dmFyIGM9XCJrb191bmlxdWVfXCIrICsrYS5kLnVuaXF1ZU5hbWUuWmI7YS5hLk1iKGIsYyl9fX07YS5kLnVuaXF1ZU5hbWUuWmI9MDthLmQudmFsdWU9e2FmdGVyOltcIm9wdGlvbnNcIixcImZvcmVhY2hcIl0saW5pdDpmdW5jdGlvbihiLGQsYyl7aWYoXCJpbnB1dFwiIT1iLnRhZ05hbWUudG9Mb3dlckNhc2UoKXx8XCJjaGVja2JveFwiIT1cbmIudHlwZSYmXCJyYWRpb1wiIT1iLnR5cGUpe3ZhciBlPVtcImNoYW5nZVwiXSxnPWMuZ2V0KFwidmFsdWVVcGRhdGVcIiksaD0hMSxrPW51bGw7ZyYmKFwic3RyaW5nXCI9PXR5cGVvZiBnJiYoZz1bZ10pLGEuYS5nYShlLGcpLGU9YS5hLnJiKGUpKTt2YXIgZj1mdW5jdGlvbigpe2s9bnVsbDtoPSExO3ZhciBlPWQoKSxmPWEuaS5xKGIpO2EuaC5wYShlLGMsXCJ2YWx1ZVwiLGYpfTshYS5hLkx8fFwiaW5wdXRcIiE9Yi50YWdOYW1lLnRvTG93ZXJDYXNlKCl8fFwidGV4dFwiIT1iLnR5cGV8fFwib2ZmXCI9PWIuYXV0b2NvbXBsZXRlfHxiLmZvcm0mJlwib2ZmXCI9PWIuZm9ybS5hdXRvY29tcGxldGV8fC0xIT1hLmEubShlLFwicHJvcGVydHljaGFuZ2VcIil8fChhLmEubihiLFwicHJvcGVydHljaGFuZ2VcIixmdW5jdGlvbigpe2g9ITB9KSxhLmEubihiLFwiZm9jdXNcIixmdW5jdGlvbigpe2g9ITF9KSxhLmEubihiLFwiYmx1clwiLGZ1bmN0aW9uKCl7aCYmZigpfSkpO2EuYS51KGUsZnVuY3Rpb24oYyl7dmFyIGQ9ZjthLmEudmMoYyxcblwiYWZ0ZXJcIikmJihkPWZ1bmN0aW9uKCl7az1hLmkucShiKTtzZXRUaW1lb3V0KGYsMCl9LGM9Yy5zdWJzdHJpbmcoNSkpO2EuYS5uKGIsYyxkKX0pO3ZhciBtPWZ1bmN0aW9uKCl7dmFyIGU9YS5hLmMoZCgpKSxmPWEuaS5xKGIpO2lmKG51bGwhPT1rJiZlPT09aylzZXRUaW1lb3V0KG0sMCk7ZWxzZSBpZihlIT09ZilpZihcInNlbGVjdFwiPT09YS5hLnQoYikpe3ZhciBnPWMuZ2V0KFwidmFsdWVBbGxvd1Vuc2V0XCIpLGY9ZnVuY3Rpb24oKXthLmkuY2EoYixlLGcpfTtmKCk7Z3x8ZT09PWEuaS5xKGIpP3NldFRpbWVvdXQoZiwwKTphLmsuQihhLmEub2EsbnVsbCxbYixcImNoYW5nZVwiXSl9ZWxzZSBhLmkuY2EoYixlKX07YS5zKG0sbnVsbCx7bzpifSl9ZWxzZSBhLnJhKGIse2NoZWNrZWRWYWx1ZTpkfSl9LHVwZGF0ZTpmdW5jdGlvbigpe319O2EuaC5WLnZhbHVlPSEwO2EuZC52aXNpYmxlPXt1cGRhdGU6ZnVuY3Rpb24oYixkKXt2YXIgYz1hLmEuYyhkKCkpLGU9XCJub25lXCIhPWIuc3R5bGUuZGlzcGxheTtcbmMmJiFlP2Iuc3R5bGUuZGlzcGxheT1cIlwiOiFjJiZlJiYoYi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKX19OyhmdW5jdGlvbihiKXthLmRbYl09e2luaXQ6ZnVuY3Rpb24oZCxjLGUsZyxoKXtyZXR1cm4gYS5kLmV2ZW50LmluaXQuY2FsbCh0aGlzLGQsZnVuY3Rpb24oKXt2YXIgYT17fTthW2JdPWMoKTtyZXR1cm4gYX0sZSxnLGgpfX19KShcImNsaWNrXCIpO2EuSD1mdW5jdGlvbigpe307YS5ILnByb3RvdHlwZS5yZW5kZXJUZW1wbGF0ZVNvdXJjZT1mdW5jdGlvbigpe3Rocm93IEVycm9yKFwiT3ZlcnJpZGUgcmVuZGVyVGVtcGxhdGVTb3VyY2VcIik7fTthLkgucHJvdG90eXBlLmNyZWF0ZUphdmFTY3JpcHRFdmFsdWF0b3JCbG9jaz1mdW5jdGlvbigpe3Rocm93IEVycm9yKFwiT3ZlcnJpZGUgY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrXCIpO307YS5ILnByb3RvdHlwZS5tYWtlVGVtcGxhdGVTb3VyY2U9ZnVuY3Rpb24oYixkKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYil7ZD1kfHx2O3ZhciBjPVxuZC5nZXRFbGVtZW50QnlJZChiKTtpZighYyl0aHJvdyBFcnJvcihcIkNhbm5vdCBmaW5kIHRlbXBsYXRlIHdpdGggSUQgXCIrYik7cmV0dXJuIG5ldyBhLnIubChjKX1pZigxPT1iLm5vZGVUeXBlfHw4PT1iLm5vZGVUeXBlKXJldHVybiBuZXcgYS5yLmZhKGIpO3Rocm93IEVycm9yKFwiVW5rbm93biB0ZW1wbGF0ZSB0eXBlOiBcIitiKTt9O2EuSC5wcm90b3R5cGUucmVuZGVyVGVtcGxhdGU9ZnVuY3Rpb24oYSxkLGMsZSl7YT10aGlzLm1ha2VUZW1wbGF0ZVNvdXJjZShhLGUpO3JldHVybiB0aGlzLnJlbmRlclRlbXBsYXRlU291cmNlKGEsZCxjKX07YS5ILnByb3RvdHlwZS5pc1RlbXBsYXRlUmV3cml0dGVuPWZ1bmN0aW9uKGEsZCl7cmV0dXJuITE9PT10aGlzLmFsbG93VGVtcGxhdGVSZXdyaXRpbmc/ITA6dGhpcy5tYWtlVGVtcGxhdGVTb3VyY2UoYSxkKS5kYXRhKFwiaXNSZXdyaXR0ZW5cIil9O2EuSC5wcm90b3R5cGUucmV3cml0ZVRlbXBsYXRlPWZ1bmN0aW9uKGEsZCxjKXthPXRoaXMubWFrZVRlbXBsYXRlU291cmNlKGEsXG5jKTtkPWQoYS50ZXh0KCkpO2EudGV4dChkKTthLmRhdGEoXCJpc1Jld3JpdHRlblwiLCEwKX07YS5iKFwidGVtcGxhdGVFbmdpbmVcIixhLkgpO2EuZmI9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsYyxkLGspe2I9YS5oLldhKGIpO2Zvcih2YXIgZj1hLmguaGEsbT0wO208Yi5sZW5ndGg7bSsrKXt2YXIgbD1iW21dLmtleTtpZihmLmhhc093blByb3BlcnR5KGwpKXt2YXIgcT1mW2xdO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBxKXtpZihsPXEoYlttXS52YWx1ZSkpdGhyb3cgRXJyb3IobCk7fWVsc2UgaWYoIXEpdGhyb3cgRXJyb3IoXCJUaGlzIHRlbXBsYXRlIGVuZ2luZSBkb2VzIG5vdCBzdXBwb3J0IHRoZSAnXCIrbCtcIicgYmluZGluZyB3aXRoaW4gaXRzIHRlbXBsYXRlc1wiKTt9fWQ9XCJrby5fX3RyX2FtYnRucyhmdW5jdGlvbigkY29udGV4dCwkZWxlbWVudCl7cmV0dXJuKGZ1bmN0aW9uKCl7cmV0dXJueyBcIithLmgueWEoYix7dmFsdWVBY2Nlc3NvcnM6ITB9KStcIiB9IH0pKCl9LCdcIitkLnRvTG93ZXJDYXNlKCkrXG5cIicpXCI7cmV0dXJuIGsuY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrKGQpK2N9dmFyIGQ9Lyg8KFthLXpdK1xcZCopKD86XFxzKyg/IWRhdGEtYmluZFxccyo9XFxzKilbYS16MC05XFwtXSsoPzo9KD86XFxcIlteXFxcIl0qXFxcInxcXCdbXlxcJ10qXFwnKSk/KSpcXHMrKWRhdGEtYmluZFxccyo9XFxzKihbXCInXSkoW1xcc1xcU10qPylcXDMvZ2ksYz0vXFx4M2MhLS1cXHMqa29cXGJcXHMqKFtcXHNcXFNdKj8pXFxzKi0tXFx4M2UvZztyZXR1cm57ZWM6ZnVuY3Rpb24oYixjLGQpe2MuaXNUZW1wbGF0ZVJld3JpdHRlbihiLGQpfHxjLnJld3JpdGVUZW1wbGF0ZShiLGZ1bmN0aW9uKGIpe3JldHVybiBhLmZiLm5jKGIsYyl9LGQpfSxuYzpmdW5jdGlvbihhLGcpe3JldHVybiBhLnJlcGxhY2UoZCxmdW5jdGlvbihhLGMsZCxlLGwpe3JldHVybiBiKGwsYyxkLGcpfSkucmVwbGFjZShjLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGIoYyxcIlxceDNjIS0tIGtvIC0tXFx4M2VcIixcIiNjb21tZW50XCIsZyl9KX0sWGI6ZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5ELlVhKGZ1bmN0aW9uKGQsXG5rKXt2YXIgZj1kLm5leHRTaWJsaW5nO2YmJmYubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWMmJmEucmEoZixiLGspfSl9fX0oKTthLmIoXCJfX3RyX2FtYnRuc1wiLGEuZmIuWGIpOyhmdW5jdGlvbigpe2Eucj17fTthLnIubD1mdW5jdGlvbihhKXt0aGlzLmw9YX07YS5yLmwucHJvdG90eXBlLnRleHQ9ZnVuY3Rpb24oKXt2YXIgYj1hLmEudCh0aGlzLmwpLGI9XCJzY3JpcHRcIj09PWI/XCJ0ZXh0XCI6XCJ0ZXh0YXJlYVwiPT09Yj9cInZhbHVlXCI6XCJpbm5lckhUTUxcIjtpZigwPT1hcmd1bWVudHMubGVuZ3RoKXJldHVybiB0aGlzLmxbYl07dmFyIGQ9YXJndW1lbnRzWzBdO1wiaW5uZXJIVE1MXCI9PT1iP2EuYS4kYSh0aGlzLmwsZCk6dGhpcy5sW2JdPWR9O3ZhciBiPWEuYS5lLkYoKStcIl9cIjthLnIubC5wcm90b3R5cGUuZGF0YT1mdW5jdGlvbihjKXtpZigxPT09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gYS5hLmUuZ2V0KHRoaXMubCxiK2MpO2EuYS5lLnNldCh0aGlzLmwsYitjLGFyZ3VtZW50c1sxXSl9O1xudmFyIGQ9YS5hLmUuRigpO2Euci5mYT1mdW5jdGlvbihhKXt0aGlzLmw9YX07YS5yLmZhLnByb3RvdHlwZT1uZXcgYS5yLmw7YS5yLmZhLnByb3RvdHlwZS50ZXh0PWZ1bmN0aW9uKCl7aWYoMD09YXJndW1lbnRzLmxlbmd0aCl7dmFyIGI9YS5hLmUuZ2V0KHRoaXMubCxkKXx8e307Yi5nYj09PXAmJmIuR2EmJihiLmdiPWIuR2EuaW5uZXJIVE1MKTtyZXR1cm4gYi5nYn1hLmEuZS5zZXQodGhpcy5sLGQse2diOmFyZ3VtZW50c1swXX0pfTthLnIubC5wcm90b3R5cGUubm9kZXM9ZnVuY3Rpb24oKXtpZigwPT1hcmd1bWVudHMubGVuZ3RoKXJldHVybihhLmEuZS5nZXQodGhpcy5sLGQpfHx7fSkuR2E7YS5hLmUuc2V0KHRoaXMubCxkLHtHYTphcmd1bWVudHNbMF19KX07YS5iKFwidGVtcGxhdGVTb3VyY2VzXCIsYS5yKTthLmIoXCJ0ZW1wbGF0ZVNvdXJjZXMuZG9tRWxlbWVudFwiLGEuci5sKTthLmIoXCJ0ZW1wbGF0ZVNvdXJjZXMuYW5vbnltb3VzVGVtcGxhdGVcIixhLnIuZmEpfSkoKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsXG5jLGQpe3ZhciBlO2ZvcihjPWEuZi5uZXh0U2libGluZyhjKTtiJiYoZT1iKSE9PWM7KWI9YS5mLm5leHRTaWJsaW5nKGUpLGQoZSxiKX1mdW5jdGlvbiBkKGMsZCl7aWYoYy5sZW5ndGgpe3ZhciBlPWNbMF0sZz1jW2MubGVuZ3RoLTFdLGg9ZS5wYXJlbnROb2RlLG49YS5KLmluc3RhbmNlLHQ9bi5wcmVwcm9jZXNzTm9kZTtpZih0KXtiKGUsZyxmdW5jdGlvbihhLGIpe3ZhciBjPWEucHJldmlvdXNTaWJsaW5nLGQ9dC5jYWxsKG4sYSk7ZCYmKGE9PT1lJiYoZT1kWzBdfHxiKSxhPT09ZyYmKGc9ZFtkLmxlbmd0aC0xXXx8YykpfSk7Yy5sZW5ndGg9MDtpZighZSlyZXR1cm47ZT09PWc/Yy5wdXNoKGUpOihjLnB1c2goZSxnKSxhLmEua2EoYyxoKSl9YihlLGcsZnVuY3Rpb24oYil7MSE9PWIubm9kZVR5cGUmJjghPT1iLm5vZGVUeXBlfHxhLnBiKGQsYil9KTtiKGUsZyxmdW5jdGlvbihiKXsxIT09Yi5ub2RlVHlwZSYmOCE9PWIubm9kZVR5cGV8fGEuRC5TYihiLFtkXSl9KTthLmEua2EoYyxcbmgpfX1mdW5jdGlvbiBjKGEpe3JldHVybiBhLm5vZGVUeXBlP2E6MDxhLmxlbmd0aD9hWzBdOm51bGx9ZnVuY3Rpb24gZShiLGUsaCxsLHEpe3E9cXx8e307dmFyIG49YiYmYyhiKSxuPW4mJm4ub3duZXJEb2N1bWVudCx0PXEudGVtcGxhdGVFbmdpbmV8fGc7YS5mYi5lYyhoLHQsbik7aD10LnJlbmRlclRlbXBsYXRlKGgsbCxxLG4pO2lmKFwibnVtYmVyXCIhPXR5cGVvZiBoLmxlbmd0aHx8MDxoLmxlbmd0aCYmXCJudW1iZXJcIiE9dHlwZW9mIGhbMF0ubm9kZVR5cGUpdGhyb3cgRXJyb3IoXCJUZW1wbGF0ZSBlbmdpbmUgbXVzdCByZXR1cm4gYW4gYXJyYXkgb2YgRE9NIG5vZGVzXCIpO249ITE7c3dpdGNoKGUpe2Nhc2UgXCJyZXBsYWNlQ2hpbGRyZW5cIjphLmYuVChiLGgpO249ITA7YnJlYWs7Y2FzZSBcInJlcGxhY2VOb2RlXCI6YS5hLkxiKGIsaCk7bj0hMDticmVhaztjYXNlIFwiaWdub3JlVGFyZ2V0Tm9kZVwiOmJyZWFrO2RlZmF1bHQ6dGhyb3cgRXJyb3IoXCJVbmtub3duIHJlbmRlck1vZGU6IFwiK1xuZSk7fW4mJihkKGgsbCkscS5hZnRlclJlbmRlciYmYS5rLkIocS5hZnRlclJlbmRlcixudWxsLFtoLGwuJGRhdGFdKSk7cmV0dXJuIGh9dmFyIGc7YS5hYj1mdW5jdGlvbihiKXtpZihiIT1wJiYhKGIgaW5zdGFuY2VvZiBhLkgpKXRocm93IEVycm9yKFwidGVtcGxhdGVFbmdpbmUgbXVzdCBpbmhlcml0IGZyb20ga28udGVtcGxhdGVFbmdpbmVcIik7Zz1ifTthLllhPWZ1bmN0aW9uKGIsZCxoLGwscSl7aD1ofHx7fTtpZigoaC50ZW1wbGF0ZUVuZ2luZXx8Zyk9PXApdGhyb3cgRXJyb3IoXCJTZXQgYSB0ZW1wbGF0ZSBlbmdpbmUgYmVmb3JlIGNhbGxpbmcgcmVuZGVyVGVtcGxhdGVcIik7cT1xfHxcInJlcGxhY2VDaGlsZHJlblwiO2lmKGwpe3ZhciBuPWMobCk7cmV0dXJuIGEuaihmdW5jdGlvbigpe3ZhciBnPWQmJmQgaW5zdGFuY2VvZiBhLk4/ZDpuZXcgYS5OKGEuYS5jKGQpKSxwPWEuQyhiKT9iKCk6XCJmdW5jdGlvblwiPT09dHlwZW9mIGI/YihnLiRkYXRhLGcpOmIsZz1lKGwscSxwLGcsaCk7XG5cInJlcGxhY2VOb2RlXCI9PXEmJihsPWcsbj1jKGwpKX0sbnVsbCx7SWE6ZnVuY3Rpb24oKXtyZXR1cm4hbnx8IWEuYS5KYShuKX0sbzpuJiZcInJlcGxhY2VOb2RlXCI9PXE/bi5wYXJlbnROb2RlOm59KX1yZXR1cm4gYS5ELlVhKGZ1bmN0aW9uKGMpe2EuWWEoYixkLGgsYyxcInJlcGxhY2VOb2RlXCIpfSl9O2EudWM9ZnVuY3Rpb24oYixjLGcsaCxxKXtmdW5jdGlvbiBuKGEsYil7ZChiLHMpO2cuYWZ0ZXJSZW5kZXImJmcuYWZ0ZXJSZW5kZXIoYixhKX1mdW5jdGlvbiB0KGMsZCl7cz1xLmNyZWF0ZUNoaWxkQ29udGV4dChjLGcuYXMsZnVuY3Rpb24oYSl7YS4kaW5kZXg9ZH0pO3ZhciBmPWEuQyhiKT9iKCk6XCJmdW5jdGlvblwiPT09dHlwZW9mIGI/YihjLHMpOmI7cmV0dXJuIGUobnVsbCxcImlnbm9yZVRhcmdldE5vZGVcIixmLHMsZyl9dmFyIHM7cmV0dXJuIGEuaihmdW5jdGlvbigpe3ZhciBiPWEuYS5jKGMpfHxbXTtcInVuZGVmaW5lZFwiPT10eXBlb2YgYi5sZW5ndGgmJihiPVtiXSk7Yj1hLmEudGEoYixcbmZ1bmN0aW9uKGIpe3JldHVybiBnLmluY2x1ZGVEZXN0cm95ZWR8fGI9PT1wfHxudWxsPT09Ynx8IWEuYS5jKGIuX2Rlc3Ryb3kpfSk7YS5rLkIoYS5hLlphLG51bGwsW2gsYix0LGcsbl0pfSxudWxsLHtvOmh9KX07dmFyIGg9YS5hLmUuRigpO2EuZC50ZW1wbGF0ZT17aW5pdDpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5jKGMoKSk7XCJzdHJpbmdcIj09dHlwZW9mIGR8fGQubmFtZT9hLmYuamEoYik6KGQ9YS5mLmNoaWxkTm9kZXMoYiksZD1hLmEub2MoZCksKG5ldyBhLnIuZmEoYikpLm5vZGVzKGQpKTtyZXR1cm57Y29udHJvbHNEZXNjZW5kYW50QmluZGluZ3M6ITB9fSx1cGRhdGU6ZnVuY3Rpb24oYixjLGQsZSxnKXt2YXIgbj1jKCksdDtjPWEuYS5jKG4pO2Q9ITA7ZT1udWxsO1wic3RyaW5nXCI9PXR5cGVvZiBjP2M9e306KG49Yy5uYW1lLFwiaWZcImluIGMmJihkPWEuYS5jKGNbXCJpZlwiXSkpLGQmJlwiaWZub3RcImluIGMmJihkPSFhLmEuYyhjLmlmbm90KSksdD1hLmEuYyhjLmRhdGEpKTtcblwiZm9yZWFjaFwiaW4gYz9lPWEudWMobnx8YixkJiZjLmZvcmVhY2h8fFtdLGMsYixnKTpkPyhnPVwiZGF0YVwiaW4gYz9nLmNyZWF0ZUNoaWxkQ29udGV4dCh0LGMuYXMpOmcsZT1hLllhKG58fGIsZyxjLGIpKTphLmYuamEoYik7Zz1lOyh0PWEuYS5lLmdldChiLGgpKSYmXCJmdW5jdGlvblwiPT10eXBlb2YgdC5LJiZ0LksoKTthLmEuZS5zZXQoYixoLGcmJmcuWigpP2c6cCl9fTthLmguaGEudGVtcGxhdGU9ZnVuY3Rpb24oYil7Yj1hLmguV2EoYik7cmV0dXJuIDE9PWIubGVuZ3RoJiZiWzBdLnVua25vd258fGEuaC5sYyhiLFwibmFtZVwiKT9udWxsOlwiVGhpcyB0ZW1wbGF0ZSBlbmdpbmUgZG9lcyBub3Qgc3VwcG9ydCBhbm9ueW1vdXMgdGVtcGxhdGVzIG5lc3RlZCB3aXRoaW4gaXRzIHRlbXBsYXRlc1wifTthLmYuUS50ZW1wbGF0ZT0hMH0pKCk7YS5iKFwic2V0VGVtcGxhdGVFbmdpbmVcIixhLmFiKTthLmIoXCJyZW5kZXJUZW1wbGF0ZVwiLGEuWWEpO2EuYS53Yj1mdW5jdGlvbihhLGQsYyl7aWYoYS5sZW5ndGgmJlxuZC5sZW5ndGgpe3ZhciBlLGcsaCxrLGY7Zm9yKGU9Zz0wOyghY3x8ZTxjKSYmKGs9YVtnXSk7KytnKXtmb3IoaD0wO2Y9ZFtoXTsrK2gpaWYoay52YWx1ZT09PWYudmFsdWUpe2subW92ZWQ9Zi5pbmRleDtmLm1vdmVkPWsuaW5kZXg7ZC5zcGxpY2UoaCwxKTtlPWg9MDticmVha31lKz1ofX19O2EuYS5GYT1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixjLGUsZyxoKXt2YXIgaz1NYXRoLm1pbixmPU1hdGgubWF4LG09W10sbCxxPWIubGVuZ3RoLG4scD1jLmxlbmd0aCxzPXAtcXx8MSx1PXErcCsxLHIsdix3O2ZvcihsPTA7bDw9cTtsKyspZm9yKHY9cixtLnB1c2gocj1bXSksdz1rKHAsbCtzKSxuPWYoMCxsLTEpO248PXc7bisrKXJbbl09bj9sP2JbbC0xXT09PWNbbi0xXT92W24tMV06ayh2W25dfHx1LHJbbi0xXXx8dSkrMTpuKzE6bCsxO2s9W107Zj1bXTtzPVtdO2w9cTtmb3Iobj1wO2x8fG47KXA9bVtsXVtuXS0xLG4mJnA9PT1tW2xdW24tMV0/Zi5wdXNoKGtbay5sZW5ndGhdPXtzdGF0dXM6ZSxcbnZhbHVlOmNbLS1uXSxpbmRleDpufSk6bCYmcD09PW1bbC0xXVtuXT9zLnB1c2goa1trLmxlbmd0aF09e3N0YXR1czpnLHZhbHVlOmJbLS1sXSxpbmRleDpsfSk6KC0tbiwtLWwsaC5zcGFyc2V8fGsucHVzaCh7c3RhdHVzOlwicmV0YWluZWRcIix2YWx1ZTpjW25dfSkpO2EuYS53YihmLHMsMTAqcSk7cmV0dXJuIGsucmV2ZXJzZSgpfXJldHVybiBmdW5jdGlvbihhLGMsZSl7ZT1cImJvb2xlYW5cIj09PXR5cGVvZiBlP3tkb250TGltaXRNb3ZlczplfTplfHx7fTthPWF8fFtdO2M9Y3x8W107cmV0dXJuIGEubGVuZ3RoPD1jLmxlbmd0aD9iKGEsYyxcImFkZGVkXCIsXCJkZWxldGVkXCIsZSk6YihjLGEsXCJkZWxldGVkXCIsXCJhZGRlZFwiLGUpfX0oKTthLmIoXCJ1dGlscy5jb21wYXJlQXJyYXlzXCIsYS5hLkZhKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsZCxnLGgsayl7dmFyIGY9W10sbT1hLmooZnVuY3Rpb24oKXt2YXIgbD1kKGcsayxhLmEua2EoZixiKSl8fFtdOzA8Zi5sZW5ndGgmJihhLmEuTGIoZixcbmwpLGgmJmEuay5CKGgsbnVsbCxbZyxsLGtdKSk7Zi5sZW5ndGg9MDthLmEuZ2EoZixsKX0sbnVsbCx7bzpiLElhOmZ1bmN0aW9uKCl7cmV0dXJuIWEuYS5vYihmKX19KTtyZXR1cm57JDpmLGo6bS5aKCk/bTpwfX12YXIgZD1hLmEuZS5GKCk7YS5hLlphPWZ1bmN0aW9uKGMsZSxnLGgsayl7ZnVuY3Rpb24gZihiLGQpe3g9cVtkXTtyIT09ZCYmKEFbYl09eCk7eC5OYShyKyspO2EuYS5rYSh4LiQsYyk7cy5wdXNoKHgpO3cucHVzaCh4KX1mdW5jdGlvbiBtKGIsYyl7aWYoYilmb3IodmFyIGQ9MCxlPWMubGVuZ3RoO2Q8ZTtkKyspY1tkXSYmYS5hLnUoY1tkXS4kLGZ1bmN0aW9uKGEpe2IoYSxkLGNbZF0uc2EpfSl9ZT1lfHxbXTtoPWh8fHt9O3ZhciBsPWEuYS5lLmdldChjLGQpPT09cCxxPWEuYS5lLmdldChjLGQpfHxbXSxuPWEuYS5EYShxLGZ1bmN0aW9uKGEpe3JldHVybiBhLnNhfSksdD1hLmEuRmEobixlLGguZG9udExpbWl0TW92ZXMpLHM9W10sdT0wLHI9MCx2PVtdLHc9W107ZT1cbltdO2Zvcih2YXIgQT1bXSxuPVtdLHgsQj0wLEQsRjtEPXRbQl07QisrKXN3aXRjaChGPUQubW92ZWQsRC5zdGF0dXMpe2Nhc2UgXCJkZWxldGVkXCI6Rj09PXAmJih4PXFbdV0seC5qJiZ4LmouSygpLHYucHVzaC5hcHBseSh2LGEuYS5rYSh4LiQsYykpLGguYmVmb3JlUmVtb3ZlJiYoZVtCXT14LHcucHVzaCh4KSkpO3UrKzticmVhaztjYXNlIFwicmV0YWluZWRcIjpmKEIsdSsrKTticmVhaztjYXNlIFwiYWRkZWRcIjpGIT09cD9mKEIsRik6KHg9e3NhOkQudmFsdWUsTmE6YS5wKHIrKyl9LHMucHVzaCh4KSx3LnB1c2goeCksbHx8KG5bQl09eCkpfW0oaC5iZWZvcmVNb3ZlLEEpO2EuYS51KHYsaC5iZWZvcmVSZW1vdmU/YS5SOmEucmVtb3ZlTm9kZSk7Zm9yKHZhciBCPTAsbD1hLmYuZmlyc3RDaGlsZChjKSxHO3g9d1tCXTtCKyspe3guJHx8YS5hLmV4dGVuZCh4LGIoYyxnLHguc2Esayx4Lk5hKSk7Zm9yKHU9MDt0PXguJFt1XTtsPXQubmV4dFNpYmxpbmcsRz10LHUrKyl0IT09bCYmYS5mLkJiKGMsXG50LEcpOyF4LmljJiZrJiYoayh4LnNhLHguJCx4Lk5hKSx4LmljPSEwKX1tKGguYmVmb3JlUmVtb3ZlLGUpO20oaC5hZnRlck1vdmUsQSk7bShoLmFmdGVyQWRkLG4pO2EuYS5lLnNldChjLGQscyl9fSkoKTthLmIoXCJ1dGlscy5zZXREb21Ob2RlQ2hpbGRyZW5Gcm9tQXJyYXlNYXBwaW5nXCIsYS5hLlphKTthLk89ZnVuY3Rpb24oKXt0aGlzLmFsbG93VGVtcGxhdGVSZXdyaXRpbmc9ITF9O2EuTy5wcm90b3R5cGU9bmV3IGEuSDthLk8ucHJvdG90eXBlLnJlbmRlclRlbXBsYXRlU291cmNlPWZ1bmN0aW9uKGIpe3ZhciBkPSg5PmEuYS5MPzA6Yi5ub2Rlcyk/Yi5ub2RlcygpOm51bGw7aWYoZClyZXR1cm4gYS5hLlMoZC5jbG9uZU5vZGUoITApLmNoaWxkTm9kZXMpO2I9Yi50ZXh0KCk7cmV0dXJuIGEuYS5iYShiKX07YS5PLk9hPW5ldyBhLk87YS5hYihhLk8uT2EpO2EuYihcIm5hdGl2ZVRlbXBsYXRlRW5naW5lXCIsYS5PKTsoZnVuY3Rpb24oKXthLlNhPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5rYz1cbmZ1bmN0aW9uKCl7aWYoIXd8fCF3LnRtcGwpcmV0dXJuIDA7dHJ5e2lmKDA8PXcudG1wbC50YWcudG1wbC5vcGVuLnRvU3RyaW5nKCkuaW5kZXhPZihcIl9fXCIpKXJldHVybiAyfWNhdGNoKGEpe31yZXR1cm4gMX0oKTt0aGlzLnJlbmRlclRlbXBsYXRlU291cmNlPWZ1bmN0aW9uKGIsZSxnKXtnPWd8fHt9O2lmKDI+YSl0aHJvdyBFcnJvcihcIllvdXIgdmVyc2lvbiBvZiBqUXVlcnkudG1wbCBpcyB0b28gb2xkLiBQbGVhc2UgdXBncmFkZSB0byBqUXVlcnkudG1wbCAxLjAuMHByZSBvciBsYXRlci5cIik7dmFyIGg9Yi5kYXRhKFwicHJlY29tcGlsZWRcIik7aHx8KGg9Yi50ZXh0KCl8fFwiXCIsaD13LnRlbXBsYXRlKG51bGwsXCJ7e2tvX3dpdGggJGl0ZW0ua29CaW5kaW5nQ29udGV4dH19XCIraCtcInt7L2tvX3dpdGh9fVwiKSxiLmRhdGEoXCJwcmVjb21waWxlZFwiLGgpKTtiPVtlLiRkYXRhXTtlPXcuZXh0ZW5kKHtrb0JpbmRpbmdDb250ZXh0OmV9LGcudGVtcGxhdGVPcHRpb25zKTtlPXcudG1wbChoLFxuYixlKTtlLmFwcGVuZFRvKHYuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7dy5mcmFnbWVudHM9e307cmV0dXJuIGV9O3RoaXMuY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrPWZ1bmN0aW9uKGEpe3JldHVyblwie3trb19jb2RlICgoZnVuY3Rpb24oKSB7IHJldHVybiBcIithK1wiIH0pKCkpIH19XCJ9O3RoaXMuYWRkVGVtcGxhdGU9ZnVuY3Rpb24oYSxiKXt2LndyaXRlKFwiPHNjcmlwdCB0eXBlPSd0ZXh0L2h0bWwnIGlkPSdcIithK1wiJz5cIitiK1wiXFx4M2Mvc2NyaXB0PlwiKX07MDxhJiYody50bXBsLnRhZy5rb19jb2RlPXtvcGVuOlwiX18ucHVzaCgkMSB8fCAnJyk7XCJ9LHcudG1wbC50YWcua29fd2l0aD17b3BlbjpcIndpdGgoJDEpIHtcIixjbG9zZTpcIn0gXCJ9KX07YS5TYS5wcm90b3R5cGU9bmV3IGEuSDt2YXIgYj1uZXcgYS5TYTswPGIua2MmJmEuYWIoYik7YS5iKFwianF1ZXJ5VG1wbFRlbXBsYXRlRW5naW5lXCIsYS5TYSl9KSgpfSl9KSgpO30pKCk7XG4iLCJQcm9taXNlID0gcmVxdWlyZSAnYmx1ZWJpcmQnXG5rbyA9IHJlcXVpcmUgJ2tub2Nrb3V0J1xubWFwcGluZyA9IHJlcXVpcmUgJ2tub2Nrb3V0LW1hcHBpbmcnXG5cbntnZXRNZXNzYWdlcywgZ2V0Q29uZmlnfSA9IHJlcXVpcmUgJy4vbWVzc2FnZV9zZXJ2aWNlLmNvZmZlZSdcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBNYWluVmlld01vZGVsXG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgIEBtZXNzYWdlcyA9IGtvLm9ic2VydmFibGVBcnJheSBbXVxuICAgIEB1c2VyID0gbWFwcGluZy5mcm9tSlNcbiAgICAgIGRpc3BsYXlOYW1lOiBcIlwiXG4gICAgICB1c2VybmFtZTogXCJcIlxuXG4gICAgUHJvbWlzZS5hbGwoW2dldENvbmZpZygpLCBnZXRNZXNzYWdlcygpXSkuc3ByZWFkIChjb25maWcsIG1lc3NhZ2VzKSA9PlxuICAgICAgQG1lc3NhZ2VUeXBlcyA9IGNvbmZpZy5tZXNzYWdlVHlwZXNcbiAgICAgIG1hcHBpbmcuZnJvbUpTIGNvbmZpZy51c2VyLCBAdXNlclxuICAgICAgQG5ld01lc3NhZ2VzIG1lc3NhZ2VzXG5cbiAgbmV3TWVzc2FnZXM6IChuZXdNZXNzYWdlcykgLT5cbiAgICBAbWVzc2FnZXMucHVzaCBtZXNzYWdlIGZvciBtZXNzYWdlIGluIG5ld01lc3NhZ2VzXG4iLCIkID0gcmVxdWlyZSAnanF1ZXJ5J1xuUHJvbWlzZSA9IHJlcXVpcmUgJ2JsdWViaXJkJ1xuXG5hcGlVcmwgPSBcIi9hcGkvdjEvZXZlbnRzL3Rlc3RcIlxuXG5leHBvcnRzLmdldENvbmZpZyA9IC0+IFByb21pc2UucmVzb2x2ZSAkLmdldEpTT04gXCIje2FwaVVybH0vY29uZmlnXCJcbmV4cG9ydHMuZ2V0TWVzc2FnZXMgPSAtPiBQcm9taXNlLnJlc29sdmUgJC5nZXRKU09OIFwiI3thcGlVcmx9L21lc3NhZ2VzXCJcbiIsIi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlKSB7XG52YXIgU29tZVByb21pc2VBcnJheSA9IFByb21pc2UuX1NvbWVQcm9taXNlQXJyYXk7XG5mdW5jdGlvbiBQcm9taXNlJF9BbnkocHJvbWlzZXMpIHtcbiAgICB2YXIgcmV0ID0gbmV3IFNvbWVQcm9taXNlQXJyYXkocHJvbWlzZXMpO1xuICAgIHZhciBwcm9taXNlID0gcmV0LnByb21pc2UoKTtcbiAgICBpZiAocHJvbWlzZS5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIHJldC5zZXRIb3dNYW55KDEpO1xuICAgIHJldC5zZXRVbndyYXAoKTtcbiAgICByZXQuaW5pdCgpO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5Qcm9taXNlLmFueSA9IGZ1bmN0aW9uIFByb21pc2UkQW55KHByb21pc2VzKSB7XG4gICAgcmV0dXJuIFByb21pc2UkX0FueShwcm9taXNlcyk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5hbnkgPSBmdW5jdGlvbiBQcm9taXNlJGFueSgpIHtcbiAgICByZXR1cm4gUHJvbWlzZSRfQW55KHRoaXMpO1xufTtcblxufTtcbiIsIihmdW5jdGlvbiAocHJvY2Vzcyl7XG4vKipcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbnZhciBzY2hlZHVsZSA9IHJlcXVpcmUoXCIuL3NjaGVkdWxlLmpzXCIpO1xudmFyIFF1ZXVlID0gcmVxdWlyZShcIi4vcXVldWUuanNcIik7XG52YXIgZXJyb3JPYmogPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpLmVycm9yT2JqO1xudmFyIHRyeUNhdGNoMSA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIikudHJ5Q2F0Y2gxO1xudmFyIF9wcm9jZXNzID0gdHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgPyBwcm9jZXNzIDogdm9pZCAwO1xuXG5mdW5jdGlvbiBBc3luYygpIHtcbiAgICB0aGlzLl9pc1RpY2tVc2VkID0gZmFsc2U7XG4gICAgdGhpcy5fc2NoZWR1bGUgPSBzY2hlZHVsZTtcbiAgICB0aGlzLl9sZW5ndGggPSAwO1xuICAgIHRoaXMuX2xhdGVCdWZmZXIgPSBuZXcgUXVldWUoMTYpO1xuICAgIHRoaXMuX2Z1bmN0aW9uQnVmZmVyID0gbmV3IFF1ZXVlKDY1NTM2KTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5jb25zdW1lRnVuY3Rpb25CdWZmZXIgPSBmdW5jdGlvbiBBc3luYyRjb25zdW1lRnVuY3Rpb25CdWZmZXIoKSB7XG4gICAgICAgIHNlbGYuX2NvbnN1bWVGdW5jdGlvbkJ1ZmZlcigpO1xuICAgIH07XG59XG5cbkFzeW5jLnByb3RvdHlwZS5oYXZlSXRlbXNRdWV1ZWQgPSBmdW5jdGlvbiBBc3luYyRoYXZlSXRlbXNRdWV1ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xlbmd0aCA+IDA7XG59O1xuXG5Bc3luYy5wcm90b3R5cGUuaW52b2tlTGF0ZXIgPSBmdW5jdGlvbiBBc3luYyRpbnZva2VMYXRlcihmbiwgcmVjZWl2ZXIsIGFyZykge1xuICAgIGlmIChfcHJvY2VzcyAhPT0gdm9pZCAwICYmXG4gICAgICAgIF9wcm9jZXNzLmRvbWFpbiAhPSBudWxsICYmXG4gICAgICAgICFmbi5kb21haW4pIHtcbiAgICAgICAgZm4gPSBfcHJvY2Vzcy5kb21haW4uYmluZChmbik7XG4gICAgfVxuICAgIHRoaXMuX2xhdGVCdWZmZXIucHVzaChmbiwgcmVjZWl2ZXIsIGFyZyk7XG4gICAgdGhpcy5fcXVldWVUaWNrKCk7XG59O1xuXG5Bc3luYy5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gQXN5bmMkaW52b2tlKGZuLCByZWNlaXZlciwgYXJnKSB7XG4gICAgaWYgKF9wcm9jZXNzICE9PSB2b2lkIDAgJiZcbiAgICAgICAgX3Byb2Nlc3MuZG9tYWluICE9IG51bGwgJiZcbiAgICAgICAgIWZuLmRvbWFpbikge1xuICAgICAgICBmbiA9IF9wcm9jZXNzLmRvbWFpbi5iaW5kKGZuKTtcbiAgICB9XG4gICAgdmFyIGZ1bmN0aW9uQnVmZmVyID0gdGhpcy5fZnVuY3Rpb25CdWZmZXI7XG4gICAgZnVuY3Rpb25CdWZmZXIucHVzaChmbiwgcmVjZWl2ZXIsIGFyZyk7XG4gICAgdGhpcy5fbGVuZ3RoID0gZnVuY3Rpb25CdWZmZXIubGVuZ3RoKCk7XG4gICAgdGhpcy5fcXVldWVUaWNrKCk7XG59O1xuXG5Bc3luYy5wcm90b3R5cGUuX2NvbnN1bWVGdW5jdGlvbkJ1ZmZlciA9XG5mdW5jdGlvbiBBc3luYyRfY29uc3VtZUZ1bmN0aW9uQnVmZmVyKCkge1xuICAgIHZhciBmdW5jdGlvbkJ1ZmZlciA9IHRoaXMuX2Z1bmN0aW9uQnVmZmVyO1xuICAgIHdoaWxlIChmdW5jdGlvbkJ1ZmZlci5sZW5ndGgoKSA+IDApIHtcbiAgICAgICAgdmFyIGZuID0gZnVuY3Rpb25CdWZmZXIuc2hpZnQoKTtcbiAgICAgICAgdmFyIHJlY2VpdmVyID0gZnVuY3Rpb25CdWZmZXIuc2hpZnQoKTtcbiAgICAgICAgdmFyIGFyZyA9IGZ1bmN0aW9uQnVmZmVyLnNoaWZ0KCk7XG4gICAgICAgIGZuLmNhbGwocmVjZWl2ZXIsIGFyZyk7XG4gICAgfVxuICAgIHRoaXMuX3Jlc2V0KCk7XG4gICAgdGhpcy5fY29uc3VtZUxhdGVCdWZmZXIoKTtcbn07XG5cbkFzeW5jLnByb3RvdHlwZS5fY29uc3VtZUxhdGVCdWZmZXIgPSBmdW5jdGlvbiBBc3luYyRfY29uc3VtZUxhdGVCdWZmZXIoKSB7XG4gICAgdmFyIGJ1ZmZlciA9IHRoaXMuX2xhdGVCdWZmZXI7XG4gICAgd2hpbGUoYnVmZmVyLmxlbmd0aCgpID4gMCkge1xuICAgICAgICB2YXIgZm4gPSBidWZmZXIuc2hpZnQoKTtcbiAgICAgICAgdmFyIHJlY2VpdmVyID0gYnVmZmVyLnNoaWZ0KCk7XG4gICAgICAgIHZhciBhcmcgPSBidWZmZXIuc2hpZnQoKTtcbiAgICAgICAgdmFyIHJlcyA9IHRyeUNhdGNoMShmbiwgcmVjZWl2ZXIsIGFyZyk7XG4gICAgICAgIGlmIChyZXMgPT09IGVycm9yT2JqKSB7XG4gICAgICAgICAgICB0aGlzLl9xdWV1ZVRpY2soKTtcbiAgICAgICAgICAgIGlmIChmbi5kb21haW4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZuLmRvbWFpbi5lbWl0KFwiZXJyb3JcIiwgcmVzLmUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZXMuZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbkFzeW5jLnByb3RvdHlwZS5fcXVldWVUaWNrID0gZnVuY3Rpb24gQXN5bmMkX3F1ZXVlKCkge1xuICAgIGlmICghdGhpcy5faXNUaWNrVXNlZCkge1xuICAgICAgICB0aGlzLl9zY2hlZHVsZSh0aGlzLmNvbnN1bWVGdW5jdGlvbkJ1ZmZlcik7XG4gICAgICAgIHRoaXMuX2lzVGlja1VzZWQgPSB0cnVlO1xuICAgIH1cbn07XG5cbkFzeW5jLnByb3RvdHlwZS5fcmVzZXQgPSBmdW5jdGlvbiBBc3luYyRfcmVzZXQoKSB7XG4gICAgdGhpcy5faXNUaWNrVXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2xlbmd0aCA9IDA7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBBc3luYygpO1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZSgnX3Byb2Nlc3MnKSkiLCIvKipcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbnZhciBQcm9taXNlID0gcmVxdWlyZShcIi4vcHJvbWlzZS5qc1wiKSgpO1xubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlOyIsIi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xudmFyIGNyID0gT2JqZWN0LmNyZWF0ZTtcbmlmIChjcikge1xuICAgIHZhciBjYWxsZXJDYWNoZSA9IGNyKG51bGwpO1xuICAgIHZhciBnZXR0ZXJDYWNoZSA9IGNyKG51bGwpO1xuICAgIGNhbGxlckNhY2hlW1wiIHNpemVcIl0gPSBnZXR0ZXJDYWNoZVtcIiBzaXplXCJdID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlKSB7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgY2FuRXZhbHVhdGUgPSB1dGlsLmNhbkV2YWx1YXRlO1xudmFyIGlzSWRlbnRpZmllciA9IHV0aWwuaXNJZGVudGlmaWVyO1xuXG5mdW5jdGlvbiBtYWtlTWV0aG9kQ2FsbGVyIChtZXRob2ROYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbihcIm9ialwiLCBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICd1c2Ugc3RyaWN0JyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIHZhciBsZW4gPSB0aGlzLmxlbmd0aDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIHN3aXRjaChsZW4pIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBvYmoubWV0aG9kTmFtZSh0aGlzWzBdKTsgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBvYmoubWV0aG9kTmFtZSh0aGlzWzBdLCB0aGlzWzFdKTsgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiBvYmoubWV0aG9kTmFtZSh0aGlzWzBdLCB0aGlzWzFdLCB0aGlzWzJdKTsgICAgICAgIFxcblxcXG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBvYmoubWV0aG9kTmFtZSgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gb2JqLm1ldGhvZE5hbWUuYXBwbHkob2JqLCB0aGlzKTsgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIFwiLnJlcGxhY2UoL21ldGhvZE5hbWUvZywgbWV0aG9kTmFtZSkpO1xufVxuXG5mdW5jdGlvbiBtYWtlR2V0dGVyIChwcm9wZXJ0eU5hbWUpIHtcbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKFwib2JqXCIsIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgJ3VzZSBzdHJpY3QnOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgcmV0dXJuIG9iai5wcm9wZXJ0eU5hbWU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgXCIucmVwbGFjZShcInByb3BlcnR5TmFtZVwiLCBwcm9wZXJ0eU5hbWUpKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcGlsZWQobmFtZSwgY29tcGlsZXIsIGNhY2hlKSB7XG4gICAgdmFyIHJldCA9IGNhY2hlW25hbWVdO1xuICAgIGlmICh0eXBlb2YgcmV0ICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgaWYgKCFpc0lkZW50aWZpZXIobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldCA9IGNvbXBpbGVyKG5hbWUpO1xuICAgICAgICBjYWNoZVtuYW1lXSA9IHJldDtcbiAgICAgICAgY2FjaGVbXCIgc2l6ZVwiXSsrO1xuICAgICAgICBpZiAoY2FjaGVbXCIgc2l6ZVwiXSA+IDUxMikge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhjYWNoZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSBkZWxldGUgY2FjaGVba2V5c1tpXV07XG4gICAgICAgICAgICBjYWNoZVtcIiBzaXplXCJdID0ga2V5cy5sZW5ndGggLSAyNTY7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZ2V0TWV0aG9kQ2FsbGVyKG5hbWUpIHtcbiAgICByZXR1cm4gZ2V0Q29tcGlsZWQobmFtZSwgbWFrZU1ldGhvZENhbGxlciwgY2FsbGVyQ2FjaGUpO1xufVxuXG5mdW5jdGlvbiBnZXRHZXR0ZXIobmFtZSkge1xuICAgIHJldHVybiBnZXRDb21waWxlZChuYW1lLCBtYWtlR2V0dGVyLCBnZXR0ZXJDYWNoZSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxlcihvYmopIHtcbiAgICByZXR1cm4gb2JqW3RoaXMucG9wKCldLmFwcGx5KG9iaiwgdGhpcyk7XG59XG5Qcm9taXNlLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gUHJvbWlzZSRjYWxsKG1ldGhvZE5hbWUpIHtcbiAgICB2YXIgJF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoO3ZhciBhcmdzID0gbmV3IEFycmF5KCRfbGVuIC0gMSk7IGZvcih2YXIgJF9pID0gMTsgJF9pIDwgJF9sZW47ICsrJF9pKSB7YXJnc1skX2kgLSAxXSA9IGFyZ3VtZW50c1skX2ldO31cbiAgICBpZiAoY2FuRXZhbHVhdGUpIHtcbiAgICAgICAgdmFyIG1heWJlQ2FsbGVyID0gZ2V0TWV0aG9kQ2FsbGVyKG1ldGhvZE5hbWUpO1xuICAgICAgICBpZiAobWF5YmVDYWxsZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90aGVuKG1heWJlQ2FsbGVyLCB2b2lkIDAsIHZvaWQgMCwgYXJncywgdm9pZCAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhcmdzLnB1c2gobWV0aG9kTmFtZSk7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW4oY2FsbGVyLCB2b2lkIDAsIHZvaWQgMCwgYXJncywgdm9pZCAwKTtcbn07XG5cbmZ1bmN0aW9uIG5hbWVkR2V0dGVyKG9iaikge1xuICAgIHJldHVybiBvYmpbdGhpc107XG59XG5mdW5jdGlvbiBpbmRleGVkR2V0dGVyKG9iaikge1xuICAgIHJldHVybiBvYmpbdGhpc107XG59XG5Qcm9taXNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBQcm9taXNlJGdldChwcm9wZXJ0eU5hbWUpIHtcbiAgICB2YXIgaXNJbmRleCA9ICh0eXBlb2YgcHJvcGVydHlOYW1lID09PSBcIm51bWJlclwiKTtcbiAgICB2YXIgZ2V0dGVyO1xuICAgIGlmICghaXNJbmRleCkge1xuICAgICAgICBpZiAoY2FuRXZhbHVhdGUpIHtcbiAgICAgICAgICAgIHZhciBtYXliZUdldHRlciA9IGdldEdldHRlcihwcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgZ2V0dGVyID0gbWF5YmVHZXR0ZXIgIT09IG51bGwgPyBtYXliZUdldHRlciA6IG5hbWVkR2V0dGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2V0dGVyID0gbmFtZWRHZXR0ZXI7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBnZXR0ZXIgPSBpbmRleGVkR2V0dGVyO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdGhlbihnZXR0ZXIsIHZvaWQgMCwgdm9pZCAwLCBwcm9wZXJ0eU5hbWUsIHZvaWQgMCk7XG59O1xufTtcbiIsIi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCkge1xudmFyIGVycm9ycyA9IHJlcXVpcmUoXCIuL2Vycm9ycy5qc1wiKTtcbnZhciBjYW5BdHRhY2ggPSBlcnJvcnMuY2FuQXR0YWNoO1xudmFyIGFzeW5jID0gcmVxdWlyZShcIi4vYXN5bmMuanNcIik7XG52YXIgQ2FuY2VsbGF0aW9uRXJyb3IgPSBlcnJvcnMuQ2FuY2VsbGF0aW9uRXJyb3I7XG5cblByb21pc2UucHJvdG90eXBlLl9jYW5jZWwgPSBmdW5jdGlvbiBQcm9taXNlJF9jYW5jZWwocmVhc29uKSB7XG4gICAgaWYgKCF0aGlzLmlzQ2FuY2VsbGFibGUoKSkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIHBhcmVudDtcbiAgICB2YXIgcHJvbWlzZVRvUmVqZWN0ID0gdGhpcztcbiAgICB3aGlsZSAoKHBhcmVudCA9IHByb21pc2VUb1JlamVjdC5fY2FuY2VsbGF0aW9uUGFyZW50KSAhPT0gdm9pZCAwICYmXG4gICAgICAgIHBhcmVudC5pc0NhbmNlbGxhYmxlKCkpIHtcbiAgICAgICAgcHJvbWlzZVRvUmVqZWN0ID0gcGFyZW50O1xuICAgIH1cbiAgICBwcm9taXNlVG9SZWplY3QuX2F0dGFjaEV4dHJhVHJhY2UocmVhc29uKTtcbiAgICBwcm9taXNlVG9SZWplY3QuX3JlamVjdFVuY2hlY2tlZChyZWFzb24pO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24gUHJvbWlzZSRjYW5jZWwocmVhc29uKSB7XG4gICAgaWYgKCF0aGlzLmlzQ2FuY2VsbGFibGUoKSkgcmV0dXJuIHRoaXM7XG4gICAgcmVhc29uID0gcmVhc29uICE9PSB2b2lkIDBcbiAgICAgICAgPyAoY2FuQXR0YWNoKHJlYXNvbikgPyByZWFzb24gOiBuZXcgRXJyb3IocmVhc29uICsgXCJcIikpXG4gICAgICAgIDogbmV3IENhbmNlbGxhdGlvbkVycm9yKCk7XG4gICAgYXN5bmMuaW52b2tlTGF0ZXIodGhpcy5fY2FuY2VsLCB0aGlzLCByZWFzb24pO1xuICAgIHJldHVybiB0aGlzO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuY2FuY2VsbGFibGUgPSBmdW5jdGlvbiBQcm9taXNlJGNhbmNlbGxhYmxlKCkge1xuICAgIGlmICh0aGlzLl9jYW5jZWxsYWJsZSgpKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLl9zZXRDYW5jZWxsYWJsZSgpO1xuICAgIHRoaXMuX2NhbmNlbGxhdGlvblBhcmVudCA9IHZvaWQgMDtcbiAgICByZXR1cm4gdGhpcztcbn07XG5cblByb21pc2UucHJvdG90eXBlLnVuY2FuY2VsbGFibGUgPSBmdW5jdGlvbiBQcm9taXNlJHVuY2FuY2VsbGFibGUoKSB7XG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICByZXQuX3Byb3BhZ2F0ZUZyb20odGhpcywgMiB8IDQpO1xuICAgIHJldC5fZm9sbG93KHRoaXMpO1xuICAgIHJldC5fdW5zZXRDYW5jZWxsYWJsZSgpO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5mb3JrID1cbmZ1bmN0aW9uIFByb21pc2UkZm9yayhkaWRGdWxmaWxsLCBkaWRSZWplY3QsIGRpZFByb2dyZXNzKSB7XG4gICAgdmFyIHJldCA9IHRoaXMuX3RoZW4oZGlkRnVsZmlsbCwgZGlkUmVqZWN0LCBkaWRQcm9ncmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAsIHZvaWQgMCk7XG5cbiAgICByZXQuX3NldENhbmNlbGxhYmxlKCk7XG4gICAgcmV0Ll9jYW5jZWxsYXRpb25QYXJlbnQgPSB2b2lkIDA7XG4gICAgcmV0dXJuIHJldDtcbn07XG59O1xuIiwiLyoqXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xudmFyIGluaGVyaXRzID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKS5pbmhlcml0cztcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2VzNS5qc1wiKS5kZWZpbmVQcm9wZXJ0eTtcblxudmFyIHJpZ25vcmUgPSBuZXcgUmVnRXhwKFxuICAgIFwiXFxcXGIoPzpbYS16QS1aMC05Ll0rXFxcXCRfXFxcXHcrfFwiICtcbiAgICBcInRyeUNhdGNoKD86MXwyfDN8NHxBcHBseSl8bmV3IFxcXFx3KlByb21pc2VBcnJheXxcIiArXG4gICAgXCJcXFxcdypQcm9taXNlQXJyYXlcXFxcLlxcXFx3KlByb21pc2VBcnJheXxcIiArXG4gICAgXCJzZXRUaW1lb3V0fENhdGNoRmlsdGVyXFxcXCRfXFxcXHcrfG1ha2VOb2RlUHJvbWlzaWZpZWR8cHJvY2Vzc0ltbWVkaWF0ZXxcIiArXG4gICAgXCJwcm9jZXNzLl90aWNrQ2FsbGJhY2t8bmV4dFRpY2t8QXN5bmNcXFxcJFxcXFx3KylcXFxcYlwiXG4pO1xuXG52YXIgcnRyYWNlbGluZSA9IG51bGw7XG52YXIgZm9ybWF0U3RhY2sgPSBudWxsO1xuXG5mdW5jdGlvbiBmb3JtYXROb25FcnJvcihvYmopIHtcbiAgICB2YXIgc3RyO1xuICAgIGlmICh0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgc3RyID0gXCJbZnVuY3Rpb24gXCIgK1xuICAgICAgICAgICAgKG9iai5uYW1lIHx8IFwiYW5vbnltb3VzXCIpICtcbiAgICAgICAgICAgIFwiXVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IG9iai50b1N0cmluZygpO1xuICAgICAgICB2YXIgcnVzZWxlc3NUb1N0cmluZyA9IC9cXFtvYmplY3QgW2EtekEtWjAtOSRfXStcXF0vO1xuICAgICAgICBpZiAocnVzZWxlc3NUb1N0cmluZy50ZXN0KHN0cikpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1N0ciA9IEpTT04uc3RyaW5naWZ5KG9iaik7XG4gICAgICAgICAgICAgICAgc3RyID0gbmV3U3RyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2goZSkge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHN0ciA9IFwiKGVtcHR5IGFycmF5KVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXCIoPFwiICsgc25pcChzdHIpICsgXCI+LCBubyBzdGFjayB0cmFjZSlcIik7XG59XG5cbmZ1bmN0aW9uIHNuaXAoc3RyKSB7XG4gICAgdmFyIG1heENoYXJzID0gNDE7XG4gICAgaWYgKHN0ci5sZW5ndGggPCBtYXhDaGFycykge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICByZXR1cm4gc3RyLnN1YnN0cigwLCBtYXhDaGFycyAtIDMpICsgXCIuLi5cIjtcbn1cblxuZnVuY3Rpb24gQ2FwdHVyZWRUcmFjZShpZ25vcmVVbnRpbCwgaXNUb3BMZXZlbCkge1xuICAgIHRoaXMuY2FwdHVyZVN0YWNrVHJhY2UoQ2FwdHVyZWRUcmFjZSwgaXNUb3BMZXZlbCk7XG5cbn1cbmluaGVyaXRzKENhcHR1cmVkVHJhY2UsIEVycm9yKTtcblxuQ2FwdHVyZWRUcmFjZS5wcm90b3R5cGUuY2FwdHVyZVN0YWNrVHJhY2UgPVxuZnVuY3Rpb24gQ2FwdHVyZWRUcmFjZSRjYXB0dXJlU3RhY2tUcmFjZShpZ25vcmVVbnRpbCwgaXNUb3BMZXZlbCkge1xuICAgIGNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIGlnbm9yZVVudGlsLCBpc1RvcExldmVsKTtcbn07XG5cbkNhcHR1cmVkVHJhY2UucG9zc2libHlVbmhhbmRsZWRSZWplY3Rpb24gPVxuZnVuY3Rpb24gQ2FwdHVyZWRUcmFjZSRQb3NzaWJseVVuaGFuZGxlZFJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2U7XG4gICAgICAgIGlmICh0eXBlb2YgcmVhc29uID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiByZWFzb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdmFyIHN0YWNrID0gcmVhc29uLnN0YWNrO1xuICAgICAgICAgICAgbWVzc2FnZSA9IFwiUG9zc2libHkgdW5oYW5kbGVkIFwiICsgZm9ybWF0U3RhY2soc3RhY2ssIHJlYXNvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gXCJQb3NzaWJseSB1bmhhbmRsZWQgXCIgKyBTdHJpbmcocmVhc29uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09IFwiZnVuY3Rpb25cIiB8fFxuICAgICAgICAgICAgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbnNvbGUubG9nID09PSBcImZ1bmN0aW9uXCIgfHxcbiAgICAgICAgICAgIHR5cGVvZiBjb25zb2xlLmxvZyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5DYXB0dXJlZFRyYWNlLmNvbWJpbmUgPSBmdW5jdGlvbiBDYXB0dXJlZFRyYWNlJENvbWJpbmUoY3VycmVudCwgcHJldikge1xuICAgIHZhciBjdXJMYXN0ID0gY3VycmVudC5sZW5ndGggLSAxO1xuICAgIGZvciAodmFyIGkgPSBwcmV2Lmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBsaW5lID0gcHJldltpXTtcbiAgICAgICAgaWYgKGN1cnJlbnRbY3VyTGFzdF0gPT09IGxpbmUpIHtcbiAgICAgICAgICAgIGN1cnJlbnQucG9wKCk7XG4gICAgICAgICAgICBjdXJMYXN0LS07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGN1cnJlbnQucHVzaChcIkZyb20gcHJldmlvdXMgZXZlbnQ6XCIpO1xuICAgIHZhciBsaW5lcyA9IGN1cnJlbnQuY29uY2F0KHByZXYpO1xuXG4gICAgdmFyIHJldCA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpbmVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG5cbiAgICAgICAgaWYgKCgocmlnbm9yZS50ZXN0KGxpbmVzW2ldKSAmJiBydHJhY2VsaW5lLnRlc3QobGluZXNbaV0pKSB8fFxuICAgICAgICAgICAgKGkgPiAwICYmICFydHJhY2VsaW5lLnRlc3QobGluZXNbaV0pKSAmJlxuICAgICAgICAgICAgbGluZXNbaV0gIT09IFwiRnJvbSBwcmV2aW91cyBldmVudDpcIilcbiAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldC5wdXNoKGxpbmVzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbkNhcHR1cmVkVHJhY2UucHJvdGVjdEVycm9yTWVzc2FnZU5ld2xpbmVzID0gZnVuY3Rpb24oc3RhY2spIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmIChydHJhY2VsaW5lLnRlc3Qoc3RhY2tbaV0pKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpIDw9IDEpIHJldHVybjtcblxuICAgIHZhciBlcnJvck1lc3NhZ2VMaW5lcyA9IFtdO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgaTsgKytqKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZUxpbmVzLnB1c2goc3RhY2suc2hpZnQoKSk7XG4gICAgfVxuICAgIHN0YWNrLnVuc2hpZnQoZXJyb3JNZXNzYWdlTGluZXMuam9pbihcIlxcdTAwMDJcXHUwMDAwXFx1MDAwMVwiKSk7XG59O1xuXG5DYXB0dXJlZFRyYWNlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gQ2FwdHVyZWRUcmFjZSRJc1N1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gdHlwZW9mIGNhcHR1cmVTdGFja1RyYWNlID09PSBcImZ1bmN0aW9uXCI7XG59O1xuXG52YXIgY2FwdHVyZVN0YWNrVHJhY2UgPSAoZnVuY3Rpb24gc3RhY2tEZXRlY3Rpb24oKSB7XG4gICAgaWYgKHR5cGVvZiBFcnJvci5zdGFja1RyYWNlTGltaXQgPT09IFwibnVtYmVyXCIgJiZcbiAgICAgICAgdHlwZW9mIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcnRyYWNlbGluZSA9IC9eXFxzKmF0XFxzKi87XG4gICAgICAgIGZvcm1hdFN0YWNrID0gZnVuY3Rpb24oc3RhY2ssIGVycm9yKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0YWNrID09PSBcInN0cmluZ1wiKSByZXR1cm4gc3RhY2s7XG5cbiAgICAgICAgICAgIGlmIChlcnJvci5uYW1lICE9PSB2b2lkIDAgJiZcbiAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubmFtZSArIFwiLiBcIiArIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0Tm9uRXJyb3IoZXJyb3IpO1xuXG5cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGNhcHR1cmVTdGFja1RyYWNlID0gRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2U7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBDYXB0dXJlZFRyYWNlJF9jYXB0dXJlU3RhY2tUcmFjZShcbiAgICAgICAgICAgIHJlY2VpdmVyLCBpZ25vcmVVbnRpbCkge1xuICAgICAgICAgICAgY2FwdHVyZVN0YWNrVHJhY2UocmVjZWl2ZXIsIGlnbm9yZVVudGlsKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcigpO1xuXG4gICAgaWYgKHR5cGVvZiBlcnIuc3RhY2sgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgdHlwZW9mIFwiXCIuc3RhcnRzV2l0aCA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgIChlcnIuc3RhY2suc3RhcnRzV2l0aChcInN0YWNrRGV0ZWN0aW9uQFwiKSkgJiZcbiAgICAgICAgc3RhY2tEZXRlY3Rpb24ubmFtZSA9PT0gXCJzdGFja0RldGVjdGlvblwiKSB7XG5cbiAgICAgICAgZGVmaW5lUHJvcGVydHkoRXJyb3IsIFwic3RhY2tUcmFjZUxpbWl0XCIsIHtcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IDI1XG4gICAgICAgIH0pO1xuICAgICAgICBydHJhY2VsaW5lID0gL0AvO1xuICAgICAgICB2YXIgcmxpbmUgPSAvW0BcXG5dLztcblxuICAgICAgICBmb3JtYXRTdGFjayA9IGZ1bmN0aW9uKHN0YWNrLCBlcnJvcikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGFjayA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoZXJyb3IubmFtZSArIFwiLiBcIiArIGVycm9yLm1lc3NhZ2UgKyBcIlxcblwiICsgc3RhY2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZXJyb3IubmFtZSAhPT0gdm9pZCAwICYmXG4gICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm5hbWUgKyBcIi4gXCIgKyBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdE5vbkVycm9yKGVycm9yKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY2FwdHVyZVN0YWNrVHJhY2Uobykge1xuICAgICAgICAgICAgdmFyIHN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG4gICAgICAgICAgICB2YXIgc3BsaXQgPSBzdGFjay5zcGxpdChybGluZSk7XG4gICAgICAgICAgICB2YXIgbGVuID0gc3BsaXQubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIHJldCA9IFwiXCI7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0ICs9IHNwbGl0W2ldO1xuICAgICAgICAgICAgICAgIHJldCArPSBcIkBcIjtcbiAgICAgICAgICAgICAgICByZXQgKz0gc3BsaXRbaSArIDFdO1xuICAgICAgICAgICAgICAgIHJldCArPSBcIlxcblwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgby5zdGFjayA9IHJldDtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3JtYXRTdGFjayA9IGZ1bmN0aW9uKHN0YWNrLCBlcnJvcikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGFjayA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHN0YWNrO1xuXG4gICAgICAgICAgICBpZiAoKHR5cGVvZiBlcnJvciA9PT0gXCJvYmplY3RcIiB8fFxuICAgICAgICAgICAgICAgIHR5cGVvZiBlcnJvciA9PT0gXCJmdW5jdGlvblwiKSAmJlxuICAgICAgICAgICAgICAgIGVycm9yLm5hbWUgIT09IHZvaWQgMCAmJlxuICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5uYW1lICsgXCIuIFwiICsgZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmb3JtYXROb25FcnJvcihlcnJvcik7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSkoKTtcblxucmV0dXJuIENhcHR1cmVkVHJhY2U7XG59O1xuIiwiLyoqXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5FWFRfRklMVEVSKSB7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgZXJyb3JzID0gcmVxdWlyZShcIi4vZXJyb3JzLmpzXCIpO1xudmFyIHRyeUNhdGNoMSA9IHV0aWwudHJ5Q2F0Y2gxO1xudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcbnZhciBrZXlzID0gcmVxdWlyZShcIi4vZXM1LmpzXCIpLmtleXM7XG52YXIgVHlwZUVycm9yID0gZXJyb3JzLlR5cGVFcnJvcjtcblxuZnVuY3Rpb24gQ2F0Y2hGaWx0ZXIoaW5zdGFuY2VzLCBjYWxsYmFjaywgcHJvbWlzZSkge1xuICAgIHRoaXMuX2luc3RhbmNlcyA9IGluc3RhbmNlcztcbiAgICB0aGlzLl9jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMuX3Byb21pc2UgPSBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBDYXRjaEZpbHRlciRfc2FmZVByZWRpY2F0ZShwcmVkaWNhdGUsIGUpIHtcbiAgICB2YXIgc2FmZU9iamVjdCA9IHt9O1xuICAgIHZhciByZXRmaWx0ZXIgPSB0cnlDYXRjaDEocHJlZGljYXRlLCBzYWZlT2JqZWN0LCBlKTtcblxuICAgIGlmIChyZXRmaWx0ZXIgPT09IGVycm9yT2JqKSByZXR1cm4gcmV0ZmlsdGVyO1xuXG4gICAgdmFyIHNhZmVLZXlzID0ga2V5cyhzYWZlT2JqZWN0KTtcbiAgICBpZiAoc2FmZUtleXMubGVuZ3RoKSB7XG4gICAgICAgIGVycm9yT2JqLmUgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgXCJDYXRjaCBmaWx0ZXIgbXVzdCBpbmhlcml0IGZyb20gRXJyb3IgXCJcbiAgICAgICAgICArIFwib3IgYmUgYSBzaW1wbGUgcHJlZGljYXRlIGZ1bmN0aW9uXCIpO1xuICAgICAgICByZXR1cm4gZXJyb3JPYmo7XG4gICAgfVxuICAgIHJldHVybiByZXRmaWx0ZXI7XG59XG5cbkNhdGNoRmlsdGVyLnByb3RvdHlwZS5kb0ZpbHRlciA9IGZ1bmN0aW9uIENhdGNoRmlsdGVyJF9kb0ZpbHRlcihlKSB7XG4gICAgdmFyIGNiID0gdGhpcy5fY2FsbGJhY2s7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wcm9taXNlO1xuICAgIHZhciBib3VuZFRvID0gcHJvbWlzZS5fYm91bmRUbztcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5faW5zdGFuY2VzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIHZhciBpdGVtID0gdGhpcy5faW5zdGFuY2VzW2ldO1xuICAgICAgICB2YXIgaXRlbUlzRXJyb3JUeXBlID0gaXRlbSA9PT0gRXJyb3IgfHxcbiAgICAgICAgICAgIChpdGVtICE9IG51bGwgJiYgaXRlbS5wcm90b3R5cGUgaW5zdGFuY2VvZiBFcnJvcik7XG5cbiAgICAgICAgaWYgKGl0ZW1Jc0Vycm9yVHlwZSAmJiBlIGluc3RhbmNlb2YgaXRlbSkge1xuICAgICAgICAgICAgdmFyIHJldCA9IHRyeUNhdGNoMShjYiwgYm91bmRUbywgZSk7XG4gICAgICAgICAgICBpZiAocmV0ID09PSBlcnJvck9iaikge1xuICAgICAgICAgICAgICAgIE5FWFRfRklMVEVSLmUgPSByZXQuZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gTkVYVF9GSUxURVI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtID09PSBcImZ1bmN0aW9uXCIgJiYgIWl0ZW1Jc0Vycm9yVHlwZSkge1xuICAgICAgICAgICAgdmFyIHNob3VsZEhhbmRsZSA9IENhdGNoRmlsdGVyJF9zYWZlUHJlZGljYXRlKGl0ZW0sIGUpO1xuICAgICAgICAgICAgaWYgKHNob3VsZEhhbmRsZSA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgICAgICAgICB2YXIgdHJhY2UgPSBlcnJvcnMuY2FuQXR0YWNoKGVycm9yT2JqLmUpXG4gICAgICAgICAgICAgICAgICAgID8gZXJyb3JPYmouZVxuICAgICAgICAgICAgICAgICAgICA6IG5ldyBFcnJvcihlcnJvck9iai5lICsgXCJcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvbWlzZS5fYXR0YWNoRXh0cmFUcmFjZSh0cmFjZSk7XG4gICAgICAgICAgICAgICAgZSA9IGVycm9yT2JqLmU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZEhhbmRsZSkge1xuICAgICAgICAgICAgICAgIHZhciByZXQgPSB0cnlDYXRjaDEoY2IsIGJvdW5kVG8sIGUpO1xuICAgICAgICAgICAgICAgIGlmIChyZXQgPT09IGVycm9yT2JqKSB7XG4gICAgICAgICAgICAgICAgICAgIE5FWFRfRklMVEVSLmUgPSByZXQuZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE5FWFRfRklMVEVSO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIE5FWFRfRklMVEVSLmUgPSBlO1xuICAgIHJldHVybiBORVhUX0ZJTFRFUjtcbn07XG5cbnJldHVybiBDYXRjaEZpbHRlcjtcbn07XG4iLCIvKipcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKTtcbnZhciBpc1ByaW1pdGl2ZSA9IHV0aWwuaXNQcmltaXRpdmU7XG52YXIgd3JhcHNQcmltaXRpdmVSZWNlaXZlciA9IHV0aWwud3JhcHNQcmltaXRpdmVSZWNlaXZlcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlKSB7XG52YXIgcmV0dXJuZXIgPSBmdW5jdGlvbiBQcm9taXNlJF9yZXR1cm5lcigpIHtcbiAgICByZXR1cm4gdGhpcztcbn07XG52YXIgdGhyb3dlciA9IGZ1bmN0aW9uIFByb21pc2UkX3Rocm93ZXIoKSB7XG4gICAgdGhyb3cgdGhpcztcbn07XG5cbnZhciB3cmFwcGVyID0gZnVuY3Rpb24gUHJvbWlzZSRfd3JhcHBlcih2YWx1ZSwgYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbiA9PT0gMSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gUHJvbWlzZSRfdGhyb3dlcigpIHtcbiAgICAgICAgICAgIHRocm93IHZhbHVlO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSAyKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBQcm9taXNlJF9yZXR1cm5lcigpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG5cblByb21pc2UucHJvdG90eXBlW1wicmV0dXJuXCJdID1cblByb21pc2UucHJvdG90eXBlLnRoZW5SZXR1cm4gPVxuZnVuY3Rpb24gUHJvbWlzZSR0aGVuUmV0dXJuKHZhbHVlKSB7XG4gICAgaWYgKHdyYXBzUHJpbWl0aXZlUmVjZWl2ZXIgJiYgaXNQcmltaXRpdmUodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aGVuKFxuICAgICAgICAgICAgd3JhcHBlcih2YWx1ZSwgMiksXG4gICAgICAgICAgICB2b2lkIDAsXG4gICAgICAgICAgICB2b2lkIDAsXG4gICAgICAgICAgICB2b2lkIDAsXG4gICAgICAgICAgICB2b2lkIDBcbiAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdGhlbihyZXR1cm5lciwgdm9pZCAwLCB2b2lkIDAsIHZhbHVlLCB2b2lkIDApO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGVbXCJ0aHJvd1wiXSA9XG5Qcm9taXNlLnByb3RvdHlwZS50aGVuVGhyb3cgPVxuZnVuY3Rpb24gUHJvbWlzZSR0aGVuVGhyb3cocmVhc29uKSB7XG4gICAgaWYgKHdyYXBzUHJpbWl0aXZlUmVjZWl2ZXIgJiYgaXNQcmltaXRpdmUocmVhc29uKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGhlbihcbiAgICAgICAgICAgIHdyYXBwZXIocmVhc29uLCAxKSxcbiAgICAgICAgICAgIHZvaWQgMCxcbiAgICAgICAgICAgIHZvaWQgMCxcbiAgICAgICAgICAgIHZvaWQgMCxcbiAgICAgICAgICAgIHZvaWQgMFxuICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl90aGVuKHRocm93ZXIsIHZvaWQgMCwgdm9pZCAwLCByZWFzb24sIHZvaWQgMCk7XG59O1xufTtcbiIsIi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCkge1xudmFyIFByb21pc2VSZWR1Y2UgPSBQcm9taXNlLnJlZHVjZTtcblxuUHJvbWlzZS5wcm90b3R5cGUuZWFjaCA9IGZ1bmN0aW9uIFByb21pc2UkZWFjaChmbikge1xuICAgIHJldHVybiBQcm9taXNlUmVkdWNlKHRoaXMsIGZuLCBudWxsLCBJTlRFUk5BTCk7XG59O1xuXG5Qcm9taXNlLmVhY2ggPSBmdW5jdGlvbiBQcm9taXNlJEVhY2gocHJvbWlzZXMsIGZuKSB7XG4gICAgcmV0dXJuIFByb21pc2VSZWR1Y2UocHJvbWlzZXMsIGZuLCBudWxsLCBJTlRFUk5BTCk7XG59O1xufTtcbiIsIi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xudmFyIE9iamVjdGZyZWV6ZSA9IHJlcXVpcmUoXCIuL2VzNS5qc1wiKS5mcmVlemU7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgaW5oZXJpdHMgPSB1dGlsLmluaGVyaXRzO1xudmFyIG5vdEVudW1lcmFibGVQcm9wID0gdXRpbC5ub3RFbnVtZXJhYmxlUHJvcDtcblxuZnVuY3Rpb24gbWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uKGUpIHtcbiAgICB0cnkge1xuICAgICAgICBub3RFbnVtZXJhYmxlUHJvcChlLCBcImlzT3BlcmF0aW9uYWxcIiwgdHJ1ZSk7XG4gICAgfVxuICAgIGNhdGNoKGlnbm9yZSkge31cbn1cblxuZnVuY3Rpb24gb3JpZ2luYXRlc0Zyb21SZWplY3Rpb24oZSkge1xuICAgIGlmIChlID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gKChlIGluc3RhbmNlb2YgT3BlcmF0aW9uYWxFcnJvcikgfHxcbiAgICAgICAgZVtcImlzT3BlcmF0aW9uYWxcIl0gPT09IHRydWUpO1xufVxuXG5mdW5jdGlvbiBpc0Vycm9yKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBFcnJvcjtcbn1cblxuZnVuY3Rpb24gY2FuQXR0YWNoKG9iaikge1xuICAgIHJldHVybiBpc0Vycm9yKG9iaik7XG59XG5cbmZ1bmN0aW9uIHN1YkVycm9yKG5hbWVQcm9wZXJ0eSwgZGVmYXVsdE1lc3NhZ2UpIHtcbiAgICBmdW5jdGlvbiBTdWJFcnJvcihtZXNzYWdlKSB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTdWJFcnJvcikpIHJldHVybiBuZXcgU3ViRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHR5cGVvZiBtZXNzYWdlID09PSBcInN0cmluZ1wiID8gbWVzc2FnZSA6IGRlZmF1bHRNZXNzYWdlO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lUHJvcGVydHk7XG4gICAgICAgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5oZXJpdHMoU3ViRXJyb3IsIEVycm9yKTtcbiAgICByZXR1cm4gU3ViRXJyb3I7XG59XG5cbnZhciBfVHlwZUVycm9yLCBfUmFuZ2VFcnJvcjtcbnZhciBDYW5jZWxsYXRpb25FcnJvciA9IHN1YkVycm9yKFwiQ2FuY2VsbGF0aW9uRXJyb3JcIiwgXCJjYW5jZWxsYXRpb24gZXJyb3JcIik7XG52YXIgVGltZW91dEVycm9yID0gc3ViRXJyb3IoXCJUaW1lb3V0RXJyb3JcIiwgXCJ0aW1lb3V0IGVycm9yXCIpO1xudmFyIEFnZ3JlZ2F0ZUVycm9yID0gc3ViRXJyb3IoXCJBZ2dyZWdhdGVFcnJvclwiLCBcImFnZ3JlZ2F0ZSBlcnJvclwiKTtcbnRyeSB7XG4gICAgX1R5cGVFcnJvciA9IFR5cGVFcnJvcjtcbiAgICBfUmFuZ2VFcnJvciA9IFJhbmdlRXJyb3I7XG59IGNhdGNoKGUpIHtcbiAgICBfVHlwZUVycm9yID0gc3ViRXJyb3IoXCJUeXBlRXJyb3JcIiwgXCJ0eXBlIGVycm9yXCIpO1xuICAgIF9SYW5nZUVycm9yID0gc3ViRXJyb3IoXCJSYW5nZUVycm9yXCIsIFwicmFuZ2UgZXJyb3JcIik7XG59XG5cbnZhciBtZXRob2RzID0gKFwiam9pbiBwb3AgcHVzaCBzaGlmdCB1bnNoaWZ0IHNsaWNlIGZpbHRlciBmb3JFYWNoIHNvbWUgXCIgK1xuICAgIFwiZXZlcnkgbWFwIGluZGV4T2YgbGFzdEluZGV4T2YgcmVkdWNlIHJlZHVjZVJpZ2h0IHNvcnQgcmV2ZXJzZVwiKS5zcGxpdChcIiBcIik7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgbWV0aG9kcy5sZW5ndGg7ICsraSkge1xuICAgIGlmICh0eXBlb2YgQXJyYXkucHJvdG90eXBlW21ldGhvZHNbaV1dID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgQWdncmVnYXRlRXJyb3IucHJvdG90eXBlW21ldGhvZHNbaV1dID0gQXJyYXkucHJvdG90eXBlW21ldGhvZHNbaV1dO1xuICAgIH1cbn1cblxuQWdncmVnYXRlRXJyb3IucHJvdG90eXBlLmxlbmd0aCA9IDA7XG5BZ2dyZWdhdGVFcnJvci5wcm90b3R5cGVbXCJpc09wZXJhdGlvbmFsXCJdID0gdHJ1ZTtcbnZhciBsZXZlbCA9IDA7XG5BZ2dyZWdhdGVFcnJvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaW5kZW50ID0gQXJyYXkobGV2ZWwgKiA0ICsgMSkuam9pbihcIiBcIik7XG4gICAgdmFyIHJldCA9IFwiXFxuXCIgKyBpbmRlbnQgKyBcIkFnZ3JlZ2F0ZUVycm9yIG9mOlwiICsgXCJcXG5cIjtcbiAgICBsZXZlbCsrO1xuICAgIGluZGVudCA9IEFycmF5KGxldmVsICogNCArIDEpLmpvaW4oXCIgXCIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgc3RyID0gdGhpc1tpXSA9PT0gdGhpcyA/IFwiW0NpcmN1bGFyIEFnZ3JlZ2F0ZUVycm9yXVwiIDogdGhpc1tpXSArIFwiXCI7XG4gICAgICAgIHZhciBsaW5lcyA9IHN0ci5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBsaW5lcy5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgbGluZXNbal0gPSBpbmRlbnQgKyBsaW5lc1tqXTtcbiAgICAgICAgfVxuICAgICAgICBzdHIgPSBsaW5lcy5qb2luKFwiXFxuXCIpO1xuICAgICAgICByZXQgKz0gc3RyICsgXCJcXG5cIjtcbiAgICB9XG4gICAgbGV2ZWwtLTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZnVuY3Rpb24gT3BlcmF0aW9uYWxFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5uYW1lID0gXCJPcGVyYXRpb25hbEVycm9yXCI7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLmNhdXNlID0gbWVzc2FnZTtcbiAgICB0aGlzW1wiaXNPcGVyYXRpb25hbFwiXSA9IHRydWU7XG5cbiAgICBpZiAobWVzc2FnZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UubWVzc2FnZTtcbiAgICAgICAgdGhpcy5zdGFjayA9IG1lc3NhZ2Uuc3RhY2s7XG4gICAgfSBlbHNlIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbn1cbmluaGVyaXRzKE9wZXJhdGlvbmFsRXJyb3IsIEVycm9yKTtcblxudmFyIGtleSA9IFwiX19CbHVlYmlyZEVycm9yVHlwZXNfX1wiO1xudmFyIGVycm9yVHlwZXMgPSBFcnJvcltrZXldO1xuaWYgKCFlcnJvclR5cGVzKSB7XG4gICAgZXJyb3JUeXBlcyA9IE9iamVjdGZyZWV6ZSh7XG4gICAgICAgIENhbmNlbGxhdGlvbkVycm9yOiBDYW5jZWxsYXRpb25FcnJvcixcbiAgICAgICAgVGltZW91dEVycm9yOiBUaW1lb3V0RXJyb3IsXG4gICAgICAgIE9wZXJhdGlvbmFsRXJyb3I6IE9wZXJhdGlvbmFsRXJyb3IsXG4gICAgICAgIFJlamVjdGlvbkVycm9yOiBPcGVyYXRpb25hbEVycm9yLFxuICAgICAgICBBZ2dyZWdhdGVFcnJvcjogQWdncmVnYXRlRXJyb3JcbiAgICB9KTtcbiAgICBub3RFbnVtZXJhYmxlUHJvcChFcnJvciwga2V5LCBlcnJvclR5cGVzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgRXJyb3I6IEVycm9yLFxuICAgIFR5cGVFcnJvcjogX1R5cGVFcnJvcixcbiAgICBSYW5nZUVycm9yOiBfUmFuZ2VFcnJvcixcbiAgICBDYW5jZWxsYXRpb25FcnJvcjogZXJyb3JUeXBlcy5DYW5jZWxsYXRpb25FcnJvcixcbiAgICBPcGVyYXRpb25hbEVycm9yOiBlcnJvclR5cGVzLk9wZXJhdGlvbmFsRXJyb3IsXG4gICAgVGltZW91dEVycm9yOiBlcnJvclR5cGVzLlRpbWVvdXRFcnJvcixcbiAgICBBZ2dyZWdhdGVFcnJvcjogZXJyb3JUeXBlcy5BZ2dyZWdhdGVFcnJvcixcbiAgICBvcmlnaW5hdGVzRnJvbVJlamVjdGlvbjogb3JpZ2luYXRlc0Zyb21SZWplY3Rpb24sXG4gICAgbWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uOiBtYXJrQXNPcmlnaW5hdGluZ0Zyb21SZWplY3Rpb24sXG4gICAgY2FuQXR0YWNoOiBjYW5BdHRhY2hcbn07XG4iLCIvKipcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSkge1xudmFyIFR5cGVFcnJvciA9IHJlcXVpcmUoJy4vZXJyb3JzLmpzJykuVHlwZUVycm9yO1xuXG5mdW5jdGlvbiBhcGlSZWplY3Rpb24obXNnKSB7XG4gICAgdmFyIGVycm9yID0gbmV3IFR5cGVFcnJvcihtc2cpO1xuICAgIHZhciByZXQgPSBQcm9taXNlLnJlamVjdGVkKGVycm9yKTtcbiAgICB2YXIgcGFyZW50ID0gcmV0Ll9wZWVrQ29udGV4dCgpO1xuICAgIGlmIChwYXJlbnQgIT0gbnVsbCkge1xuICAgICAgICBwYXJlbnQuX2F0dGFjaEV4dHJhVHJhY2UoZXJyb3IpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuXG5yZXR1cm4gYXBpUmVqZWN0aW9uO1xufTtcbiIsIi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cbnZhciBpc0VTNSA9IChmdW5jdGlvbigpe1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIHJldHVybiB0aGlzID09PSB2b2lkIDA7XG59KSgpO1xuXG5pZiAoaXNFUzUpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgZnJlZXplOiBPYmplY3QuZnJlZXplLFxuICAgICAgICBkZWZpbmVQcm9wZXJ0eTogT2JqZWN0LmRlZmluZVByb3BlcnR5LFxuICAgICAgICBrZXlzOiBPYmplY3Qua2V5cyxcbiAgICAgICAgZ2V0UHJvdG90eXBlT2Y6IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICAgICAgaXNBcnJheTogQXJyYXkuaXNBcnJheSxcbiAgICAgICAgaXNFUzU6IGlzRVM1XG4gICAgfTtcbn0gZWxzZSB7XG4gICAgdmFyIGhhcyA9IHt9Lmhhc093blByb3BlcnR5O1xuICAgIHZhciBzdHIgPSB7fS50b1N0cmluZztcbiAgICB2YXIgcHJvdG8gPSB7fS5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cbiAgICB2YXIgT2JqZWN0S2V5cyA9IGZ1bmN0aW9uIE9iamVjdEtleXMobykge1xuICAgICAgICB2YXIgcmV0ID0gW107XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvKSB7XG4gICAgICAgICAgICBpZiAoaGFzLmNhbGwobywga2V5KSkge1xuICAgICAgICAgICAgICAgIHJldC5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICB2YXIgT2JqZWN0RGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBPYmplY3REZWZpbmVQcm9wZXJ0eShvLCBrZXksIGRlc2MpIHtcbiAgICAgICAgb1trZXldID0gZGVzYy52YWx1ZTtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgfVxuXG4gICAgdmFyIE9iamVjdEZyZWV6ZSA9IGZ1bmN0aW9uIE9iamVjdEZyZWV6ZShvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICB2YXIgT2JqZWN0R2V0UHJvdG90eXBlT2YgPSBmdW5jdGlvbiBPYmplY3RHZXRQcm90b3R5cGVPZihvYmopIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qob2JqKS5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm90bztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBBcnJheUlzQXJyYXkgPSBmdW5jdGlvbiBBcnJheUlzQXJyYXkob2JqKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICBpc0FycmF5OiBBcnJheUlzQXJyYXksXG4gICAgICAgIGtleXM6IE9iamVjdEtleXMsXG4gICAgICAgIGRlZmluZVByb3BlcnR5OiBPYmplY3REZWZpbmVQcm9wZXJ0eSxcbiAgICAgICAgZnJlZXplOiBPYmplY3RGcmVlemUsXG4gICAgICAgIGdldFByb3RvdHlwZU9mOiBPYmplY3RHZXRQcm90b3R5cGVPZixcbiAgICAgICAgaXNFUzU6IGlzRVM1XG4gICAgfTtcbn1cbiIsIi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCkge1xudmFyIFByb21pc2VNYXAgPSBQcm9taXNlLm1hcDtcblxuUHJvbWlzZS5wcm90b3R5cGUuZmlsdGVyID0gZnVuY3Rpb24gUHJvbWlzZSRmaWx0ZXIoZm4sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gUHJvbWlzZU1hcCh0aGlzLCBmbiwgb3B0aW9ucywgSU5URVJOQUwpO1xufTtcblxuUHJvbWlzZS5maWx0ZXIgPSBmdW5jdGlvbiBQcm9taXNlJEZpbHRlcihwcm9taXNlcywgZm4sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gUHJvbWlzZU1hcChwcm9taXNlcywgZm4sIG9wdGlvbnMsIElOVEVSTkFMKTtcbn07XG59O1xuIiwiLyoqXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIE5FWFRfRklMVEVSLCBjYXN0KSB7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgd3JhcHNQcmltaXRpdmVSZWNlaXZlciA9IHV0aWwud3JhcHNQcmltaXRpdmVSZWNlaXZlcjtcbnZhciBpc1ByaW1pdGl2ZSA9IHV0aWwuaXNQcmltaXRpdmU7XG52YXIgdGhyb3dlciA9IHV0aWwudGhyb3dlcjtcblxuZnVuY3Rpb24gcmV0dXJuVGhpcygpIHtcbiAgICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIHRocm93VGhpcygpIHtcbiAgICB0aHJvdyB0aGlzO1xufVxuZnVuY3Rpb24gcmV0dXJuJChyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIFByb21pc2UkX3JldHVybmVyKCkge1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xufVxuZnVuY3Rpb24gdGhyb3ckKHIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gUHJvbWlzZSRfdGhyb3dlcigpIHtcbiAgICAgICAgdGhyb3cgcjtcbiAgICB9O1xufVxuZnVuY3Rpb24gcHJvbWlzZWRGaW5hbGx5KHJldCwgcmVhc29uT3JWYWx1ZSwgaXNGdWxmaWxsZWQpIHtcbiAgICB2YXIgdGhlbjtcbiAgICBpZiAod3JhcHNQcmltaXRpdmVSZWNlaXZlciAmJiBpc1ByaW1pdGl2ZShyZWFzb25PclZhbHVlKSkge1xuICAgICAgICB0aGVuID0gaXNGdWxmaWxsZWQgPyByZXR1cm4kKHJlYXNvbk9yVmFsdWUpIDogdGhyb3ckKHJlYXNvbk9yVmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoZW4gPSBpc0Z1bGZpbGxlZCA/IHJldHVyblRoaXMgOiB0aHJvd1RoaXM7XG4gICAgfVxuICAgIHJldHVybiByZXQuX3RoZW4odGhlbiwgdGhyb3dlciwgdm9pZCAwLCByZWFzb25PclZhbHVlLCB2b2lkIDApO1xufVxuXG5mdW5jdGlvbiBmaW5hbGx5SGFuZGxlcihyZWFzb25PclZhbHVlKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLnByb21pc2U7XG4gICAgdmFyIGhhbmRsZXIgPSB0aGlzLmhhbmRsZXI7XG5cbiAgICB2YXIgcmV0ID0gcHJvbWlzZS5faXNCb3VuZCgpXG4gICAgICAgICAgICAgICAgICAgID8gaGFuZGxlci5jYWxsKHByb21pc2UuX2JvdW5kVG8pXG4gICAgICAgICAgICAgICAgICAgIDogaGFuZGxlcigpO1xuXG4gICAgaWYgKHJldCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0KHJldCwgdm9pZCAwKTtcbiAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlZEZpbmFsbHkobWF5YmVQcm9taXNlLCByZWFzb25PclZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5pc0Z1bGZpbGxlZCgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9taXNlLmlzUmVqZWN0ZWQoKSkge1xuICAgICAgICBORVhUX0ZJTFRFUi5lID0gcmVhc29uT3JWYWx1ZTtcbiAgICAgICAgcmV0dXJuIE5FWFRfRklMVEVSO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZWFzb25PclZhbHVlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdGFwSGFuZGxlcih2YWx1ZSkge1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xuICAgIHZhciBoYW5kbGVyID0gdGhpcy5oYW5kbGVyO1xuXG4gICAgdmFyIHJldCA9IHByb21pc2UuX2lzQm91bmQoKVxuICAgICAgICAgICAgICAgICAgICA/IGhhbmRsZXIuY2FsbChwcm9taXNlLl9ib3VuZFRvLCB2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgOiBoYW5kbGVyKHZhbHVlKTtcblxuICAgIGlmIChyZXQgIT09IHZvaWQgMCkge1xuICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gY2FzdChyZXQsIHZvaWQgMCk7XG4gICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZWRGaW5hbGx5KG1heWJlUHJvbWlzZSwgdmFsdWUsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUuX3Bhc3NUaHJvdWdoSGFuZGxlciA9XG5mdW5jdGlvbiBQcm9taXNlJF9wYXNzVGhyb3VnaEhhbmRsZXIoaGFuZGxlciwgaXNGaW5hbGx5KSB7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0aGlzLnRoZW4oKTtcblxuICAgIHZhciBwcm9taXNlQW5kSGFuZGxlciA9IHtcbiAgICAgICAgcHJvbWlzZTogdGhpcyxcbiAgICAgICAgaGFuZGxlcjogaGFuZGxlclxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5fdGhlbihcbiAgICAgICAgICAgIGlzRmluYWxseSA/IGZpbmFsbHlIYW5kbGVyIDogdGFwSGFuZGxlcixcbiAgICAgICAgICAgIGlzRmluYWxseSA/IGZpbmFsbHlIYW5kbGVyIDogdm9pZCAwLCB2b2lkIDAsXG4gICAgICAgICAgICBwcm9taXNlQW5kSGFuZGxlciwgdm9pZCAwKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmxhc3RseSA9XG5Qcm9taXNlLnByb3RvdHlwZVtcImZpbmFsbHlcIl0gPSBmdW5jdGlvbiBQcm9taXNlJGZpbmFsbHkoaGFuZGxlcikge1xuICAgIHJldHVybiB0aGlzLl9wYXNzVGhyb3VnaEhhbmRsZXIoaGFuZGxlciwgdHJ1ZSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS50YXAgPSBmdW5jdGlvbiBQcm9taXNlJHRhcChoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bhc3NUaHJvdWdoSGFuZGxlcihoYW5kbGVyLCBmYWxzZSk7XG59O1xufTtcbiIsIi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBhcGlSZWplY3Rpb24sIElOVEVSTkFMLCBjYXN0KSB7XG52YXIgZXJyb3JzID0gcmVxdWlyZShcIi4vZXJyb3JzLmpzXCIpO1xudmFyIFR5cGVFcnJvciA9IGVycm9ycy5UeXBlRXJyb3I7XG52YXIgZGVwcmVjYXRlZCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIikuZGVwcmVjYXRlZDtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKTtcbnZhciBlcnJvck9iaiA9IHV0aWwuZXJyb3JPYmo7XG52YXIgdHJ5Q2F0Y2gxID0gdXRpbC50cnlDYXRjaDE7XG52YXIgeWllbGRIYW5kbGVycyA9IFtdO1xuXG5mdW5jdGlvbiBwcm9taXNlRnJvbVlpZWxkSGFuZGxlcih2YWx1ZSwgeWllbGRIYW5kbGVycykge1xuICAgIHZhciBfZXJyb3JPYmogPSBlcnJvck9iajtcbiAgICB2YXIgX1Byb21pc2UgPSBQcm9taXNlO1xuICAgIHZhciBsZW4gPSB5aWVsZEhhbmRsZXJzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0cnlDYXRjaDEoeWllbGRIYW5kbGVyc1tpXSwgdm9pZCAwLCB2YWx1ZSk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IF9lcnJvck9iaikge1xuICAgICAgICAgICAgcmV0dXJuIF9Qcm9taXNlLnJlamVjdChfZXJyb3JPYmouZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IGNhc3QocmVzdWx0LCBwcm9taXNlRnJvbVlpZWxkSGFuZGxlcik7XG4gICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBfUHJvbWlzZSkgcmV0dXJuIG1heWJlUHJvbWlzZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIFByb21pc2VTcGF3bihnZW5lcmF0b3JGdW5jdGlvbiwgcmVjZWl2ZXIsIHlpZWxkSGFuZGxlcikge1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcHJvbWlzZSA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICBwcm9taXNlLl9zZXRUcmFjZSh2b2lkIDApO1xuICAgIHRoaXMuX2dlbmVyYXRvckZ1bmN0aW9uID0gZ2VuZXJhdG9yRnVuY3Rpb247XG4gICAgdGhpcy5fcmVjZWl2ZXIgPSByZWNlaXZlcjtcbiAgICB0aGlzLl9nZW5lcmF0b3IgPSB2b2lkIDA7XG4gICAgdGhpcy5feWllbGRIYW5kbGVycyA9IHR5cGVvZiB5aWVsZEhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/IFt5aWVsZEhhbmRsZXJdLmNvbmNhdCh5aWVsZEhhbmRsZXJzKVxuICAgICAgICA6IHlpZWxkSGFuZGxlcnM7XG59XG5cblByb21pc2VTcGF3bi5wcm90b3R5cGUucHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2VTcGF3biRwcm9taXNlKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xufTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5fcnVuID0gZnVuY3Rpb24gUHJvbWlzZVNwYXduJF9ydW4oKSB7XG4gICAgdGhpcy5fZ2VuZXJhdG9yID0gdGhpcy5fZ2VuZXJhdG9yRnVuY3Rpb24uY2FsbCh0aGlzLl9yZWNlaXZlcik7XG4gICAgdGhpcy5fcmVjZWl2ZXIgPVxuICAgICAgICB0aGlzLl9nZW5lcmF0b3JGdW5jdGlvbiA9IHZvaWQgMDtcbiAgICB0aGlzLl9uZXh0KHZvaWQgMCk7XG59O1xuXG5Qcm9taXNlU3Bhd24ucHJvdG90eXBlLl9jb250aW51ZSA9IGZ1bmN0aW9uIFByb21pc2VTcGF3biRfY29udGludWUocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgdGhpcy5fZ2VuZXJhdG9yID0gdm9pZCAwO1xuICAgICAgICB2YXIgdHJhY2UgPSBlcnJvcnMuY2FuQXR0YWNoKHJlc3VsdC5lKVxuICAgICAgICAgICAgPyByZXN1bHQuZSA6IG5ldyBFcnJvcihyZXN1bHQuZSArIFwiXCIpO1xuICAgICAgICB0aGlzLl9wcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHRyYWNlKTtcbiAgICAgICAgdGhpcy5fcHJvbWlzZS5fcmVqZWN0KHJlc3VsdC5lLCB0cmFjZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgaWYgKHJlc3VsdC5kb25lID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuX2dlbmVyYXRvciA9IHZvaWQgMDtcbiAgICAgICAgaWYgKCF0aGlzLl9wcm9taXNlLl90cnlGb2xsb3codmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLl9wcm9taXNlLl9mdWxmaWxsKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0KHZhbHVlLCB2b2lkIDApO1xuICAgICAgICBpZiAoIShtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xuICAgICAgICAgICAgbWF5YmVQcm9taXNlID1cbiAgICAgICAgICAgICAgICBwcm9taXNlRnJvbVlpZWxkSGFuZGxlcihtYXliZVByb21pc2UsIHRoaXMuX3lpZWxkSGFuZGxlcnMpO1xuICAgICAgICAgICAgaWYgKG1heWJlUHJvbWlzZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Rocm93KG5ldyBUeXBlRXJyb3IoXCJBIHZhbHVlIHdhcyB5aWVsZGVkIHRoYXQgY291bGQgbm90IGJlIHRyZWF0ZWQgYXMgYSBwcm9taXNlXCIpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWF5YmVQcm9taXNlLl90aGVuKFxuICAgICAgICAgICAgdGhpcy5fbmV4dCxcbiAgICAgICAgICAgIHRoaXMuX3Rocm93LFxuICAgICAgICAgICAgdm9pZCAwLFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIG51bGxcbiAgICAgICApO1xuICAgIH1cbn07XG5cblByb21pc2VTcGF3bi5wcm90b3R5cGUuX3Rocm93ID0gZnVuY3Rpb24gUHJvbWlzZVNwYXduJF90aHJvdyhyZWFzb24pIHtcbiAgICBpZiAoZXJyb3JzLmNhbkF0dGFjaChyZWFzb24pKVxuICAgICAgICB0aGlzLl9wcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHJlYXNvbik7XG4gICAgdGhpcy5fY29udGludWUoXG4gICAgICAgIHRyeUNhdGNoMSh0aGlzLl9nZW5lcmF0b3JbXCJ0aHJvd1wiXSwgdGhpcy5fZ2VuZXJhdG9yLCByZWFzb24pXG4gICApO1xufTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uIFByb21pc2VTcGF3biRfbmV4dCh2YWx1ZSkge1xuICAgIHRoaXMuX2NvbnRpbnVlKFxuICAgICAgICB0cnlDYXRjaDEodGhpcy5fZ2VuZXJhdG9yLm5leHQsIHRoaXMuX2dlbmVyYXRvciwgdmFsdWUpXG4gICApO1xufTtcblxuUHJvbWlzZS5jb3JvdXRpbmUgPVxuZnVuY3Rpb24gUHJvbWlzZSRDb3JvdXRpbmUoZ2VuZXJhdG9yRnVuY3Rpb24sIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIGdlbmVyYXRvckZ1bmN0aW9uICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImdlbmVyYXRvckZ1bmN0aW9uIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgdmFyIHlpZWxkSGFuZGxlciA9IE9iamVjdChvcHRpb25zKS55aWVsZEhhbmRsZXI7XG4gICAgdmFyIFByb21pc2VTcGF3biQgPSBQcm9taXNlU3Bhd247XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGdlbmVyYXRvciA9IGdlbmVyYXRvckZ1bmN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIHZhciBzcGF3biA9IG5ldyBQcm9taXNlU3Bhd24kKHZvaWQgMCwgdm9pZCAwLCB5aWVsZEhhbmRsZXIpO1xuICAgICAgICBzcGF3bi5fZ2VuZXJhdG9yID0gZ2VuZXJhdG9yO1xuICAgICAgICBzcGF3bi5fbmV4dCh2b2lkIDApO1xuICAgICAgICByZXR1cm4gc3Bhd24ucHJvbWlzZSgpO1xuICAgIH07XG59O1xuXG5Qcm9taXNlLmNvcm91dGluZS5hZGRZaWVsZEhhbmRsZXIgPSBmdW5jdGlvbihmbikge1xuICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcImZuIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICB5aWVsZEhhbmRsZXJzLnB1c2goZm4pO1xufTtcblxuUHJvbWlzZS5zcGF3biA9IGZ1bmN0aW9uIFByb21pc2UkU3Bhd24oZ2VuZXJhdG9yRnVuY3Rpb24pIHtcbiAgICBkZXByZWNhdGVkKFwiUHJvbWlzZS5zcGF3biBpcyBkZXByZWNhdGVkLiBVc2UgUHJvbWlzZS5jb3JvdXRpbmUgaW5zdGVhZC5cIik7XG4gICAgaWYgKHR5cGVvZiBnZW5lcmF0b3JGdW5jdGlvbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBhcGlSZWplY3Rpb24oXCJnZW5lcmF0b3JGdW5jdGlvbiBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICAgIHZhciBzcGF3biA9IG5ldyBQcm9taXNlU3Bhd24oZ2VuZXJhdG9yRnVuY3Rpb24sIHRoaXMpO1xuICAgIHZhciByZXQgPSBzcGF3bi5wcm9taXNlKCk7XG4gICAgc3Bhd24uX3J1bihQcm9taXNlLnNwYXduKTtcbiAgICByZXR1cm4gcmV0O1xufTtcbn07XG4iLCIvKipcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID1cbmZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSwgY2FzdCwgSU5URVJOQUwpIHtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKTtcbnZhciBjYW5FdmFsdWF0ZSA9IHV0aWwuY2FuRXZhbHVhdGU7XG52YXIgdHJ5Q2F0Y2gxID0gdXRpbC50cnlDYXRjaDE7XG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xuXG5cbmlmIChjYW5FdmFsdWF0ZSkge1xuICAgIHZhciB0aGVuQ2FsbGJhY2sgPSBmdW5jdGlvbihpKSB7XG4gICAgICAgIHJldHVybiBuZXcgRnVuY3Rpb24oXCJ2YWx1ZVwiLCBcImhvbGRlclwiLCBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIGhvbGRlci5wSW5kZXggPSB2YWx1ZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIGhvbGRlci5jaGVja0Z1bGZpbGxtZW50KHRoaXMpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFwiLnJlcGxhY2UoL0luZGV4L2csIGkpKTtcbiAgICB9O1xuXG4gICAgdmFyIGNhbGxlciA9IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gY291bnQ7ICsraSkgdmFsdWVzLnB1c2goXCJob2xkZXIucFwiICsgaSk7XG4gICAgICAgIHJldHVybiBuZXcgRnVuY3Rpb24oXCJob2xkZXJcIiwgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAndXNlIHN0cmljdCc7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBob2xkZXIuZm47ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sodmFsdWVzKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBcIi5yZXBsYWNlKC92YWx1ZXMvZywgdmFsdWVzLmpvaW4oXCIsIFwiKSkpO1xuICAgIH07XG4gICAgdmFyIHRoZW5DYWxsYmFja3MgPSBbXTtcbiAgICB2YXIgY2FsbGVycyA9IFt2b2lkIDBdO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IDU7ICsraSkge1xuICAgICAgICB0aGVuQ2FsbGJhY2tzLnB1c2godGhlbkNhbGxiYWNrKGkpKTtcbiAgICAgICAgY2FsbGVycy5wdXNoKGNhbGxlcihpKSk7XG4gICAgfVxuXG4gICAgdmFyIEhvbGRlciA9IGZ1bmN0aW9uKHRvdGFsLCBmbikge1xuICAgICAgICB0aGlzLnAxID0gdGhpcy5wMiA9IHRoaXMucDMgPSB0aGlzLnA0ID0gdGhpcy5wNSA9IG51bGw7XG4gICAgICAgIHRoaXMuZm4gPSBmbjtcbiAgICAgICAgdGhpcy50b3RhbCA9IHRvdGFsO1xuICAgICAgICB0aGlzLm5vdyA9IDA7XG4gICAgfTtcblxuICAgIEhvbGRlci5wcm90b3R5cGUuY2FsbGVycyA9IGNhbGxlcnM7XG4gICAgSG9sZGVyLnByb3RvdHlwZS5jaGVja0Z1bGZpbGxtZW50ID0gZnVuY3Rpb24ocHJvbWlzZSkge1xuICAgICAgICB2YXIgbm93ID0gdGhpcy5ub3c7XG4gICAgICAgIG5vdysrO1xuICAgICAgICB2YXIgdG90YWwgPSB0aGlzLnRvdGFsO1xuICAgICAgICBpZiAobm93ID49IHRvdGFsKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlciA9IHRoaXMuY2FsbGVyc1t0b3RhbF07XG4gICAgICAgICAgICB2YXIgcmV0ID0gdHJ5Q2F0Y2gxKGhhbmRsZXIsIHZvaWQgMCwgdGhpcyk7XG4gICAgICAgICAgICBpZiAocmV0ID09PSBlcnJvck9iaikge1xuICAgICAgICAgICAgICAgIHByb21pc2UuX3JlamVjdFVuY2hlY2tlZChyZXQuZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFwcm9taXNlLl90cnlGb2xsb3cocmV0KSkge1xuICAgICAgICAgICAgICAgIHByb21pc2UuX2Z1bGZpbGxVbmNoZWNrZWQocmV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubm93ID0gbm93O1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuXG5cblxuUHJvbWlzZS5qb2luID0gZnVuY3Rpb24gUHJvbWlzZSRKb2luKCkge1xuICAgIHZhciBsYXN0ID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgdmFyIGZuO1xuICAgIGlmIChsYXN0ID4gMCAmJiB0eXBlb2YgYXJndW1lbnRzW2xhc3RdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZm4gPSBhcmd1bWVudHNbbGFzdF07XG4gICAgICAgIGlmIChsYXN0IDwgNiAmJiBjYW5FdmFsdWF0ZSkge1xuICAgICAgICAgICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICAgICAgICAgIHJldC5fc2V0VHJhY2Uodm9pZCAwKTtcbiAgICAgICAgICAgIHZhciBob2xkZXIgPSBuZXcgSG9sZGVyKGxhc3QsIGZuKTtcbiAgICAgICAgICAgIHZhciByZWplY3QgPSByZXQuX3JlamVjdDtcbiAgICAgICAgICAgIHZhciBjYWxsYmFja3MgPSB0aGVuQ2FsbGJhY2tzO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0OyArK2kpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gY2FzdChhcmd1bWVudHNbaV0sIHZvaWQgMCk7XG4gICAgICAgICAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1heWJlUHJvbWlzZS5pc1BlbmRpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF5YmVQcm9taXNlLl90aGVuKGNhbGxiYWNrc1tpXSwgcmVqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCwgcmV0LCBob2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1heWJlUHJvbWlzZS5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3NbaV0uY2FsbChyZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXliZVByb21pc2UuX3NldHRsZWRWYWx1ZSwgaG9sZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5fcmVqZWN0KG1heWJlUHJvbWlzZS5fc2V0dGxlZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fdW5zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzW2ldLmNhbGwocmV0LCBtYXliZVByb21pc2UsIGhvbGRlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgJF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoO3ZhciBhcmdzID0gbmV3IEFycmF5KCRfbGVuKTsgZm9yKHZhciAkX2kgPSAwOyAkX2kgPCAkX2xlbjsgKyskX2kpIHthcmdzWyRfaV0gPSBhcmd1bWVudHNbJF9pXTt9XG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlQXJyYXkoYXJncykucHJvbWlzZSgpO1xuICAgIHJldHVybiBmbiAhPT0gdm9pZCAwID8gcmV0LnNwcmVhZChmbikgOiByZXQ7XG59O1xuXG59O1xuIiwiLyoqXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSwgYXBpUmVqZWN0aW9uLCBjYXN0LCBJTlRFUk5BTCkge1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIHRyeUNhdGNoMyA9IHV0aWwudHJ5Q2F0Y2gzO1xudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcbnZhciBQRU5ESU5HID0ge307XG52YXIgRU1QVFlfQVJSQVkgPSBbXTtcblxuZnVuY3Rpb24gTWFwcGluZ1Byb21pc2VBcnJheShwcm9taXNlcywgZm4sIGxpbWl0LCBfZmlsdGVyKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvciQocHJvbWlzZXMpO1xuICAgIHRoaXMuX2NhbGxiYWNrID0gZm47XG4gICAgdGhpcy5fcHJlc2VydmVkVmFsdWVzID0gX2ZpbHRlciA9PT0gSU5URVJOQUxcbiAgICAgICAgPyBuZXcgQXJyYXkodGhpcy5sZW5ndGgoKSlcbiAgICAgICAgOiBudWxsO1xuICAgIHRoaXMuX2xpbWl0ID0gbGltaXQ7XG4gICAgdGhpcy5faW5GbGlnaHQgPSAwO1xuICAgIHRoaXMuX3F1ZXVlID0gbGltaXQgPj0gMSA/IFtdIDogRU1QVFlfQVJSQVk7XG4gICAgdGhpcy5faW5pdCQodm9pZCAwLCAtMik7XG59XG51dGlsLmluaGVyaXRzKE1hcHBpbmdQcm9taXNlQXJyYXksIFByb21pc2VBcnJheSk7XG5cbk1hcHBpbmdQcm9taXNlQXJyYXkucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gTWFwcGluZ1Byb21pc2VBcnJheSRfaW5pdCgpIHt9O1xuXG5NYXBwaW5nUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZUZ1bGZpbGxlZCA9XG5mdW5jdGlvbiBNYXBwaW5nUHJvbWlzZUFycmF5JF9wcm9taXNlRnVsZmlsbGVkKHZhbHVlLCBpbmRleCkge1xuICAgIHZhciB2YWx1ZXMgPSB0aGlzLl92YWx1ZXM7XG4gICAgaWYgKHZhbHVlcyA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG4gICAgdmFyIHByZXNlcnZlZFZhbHVlcyA9IHRoaXMuX3ByZXNlcnZlZFZhbHVlcztcbiAgICB2YXIgbGltaXQgPSB0aGlzLl9saW1pdDtcbiAgICBpZiAodmFsdWVzW2luZGV4XSA9PT0gUEVORElORykge1xuICAgICAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgIGlmIChsaW1pdCA+PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9pbkZsaWdodC0tO1xuICAgICAgICAgICAgdGhpcy5fZHJhaW5RdWV1ZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzUmVzb2x2ZWQoKSkgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGxpbWl0ID49IDEgJiYgdGhpcy5faW5GbGlnaHQgPj0gbGltaXQpIHtcbiAgICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3F1ZXVlLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmVzZXJ2ZWRWYWx1ZXMgIT09IG51bGwpIHByZXNlcnZlZFZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcblxuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLl9jYWxsYmFjaztcbiAgICAgICAgdmFyIHJlY2VpdmVyID0gdGhpcy5fcHJvbWlzZS5fYm91bmRUbztcbiAgICAgICAgdmFyIHJldCA9IHRyeUNhdGNoMyhjYWxsYmFjaywgcmVjZWl2ZXIsIHZhbHVlLCBpbmRleCwgbGVuZ3RoKTtcbiAgICAgICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHJldHVybiB0aGlzLl9yZWplY3QocmV0LmUpO1xuXG4gICAgICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0KHJldCwgdm9pZCAwKTtcbiAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIGlmIChtYXliZVByb21pc2UuaXNQZW5kaW5nKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAobGltaXQgPj0gMSkgdGhpcy5faW5GbGlnaHQrKztcbiAgICAgICAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gUEVORElORztcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF5YmVQcm9taXNlLl9wcm94eVByb21pc2VBcnJheSh0aGlzLCBpbmRleCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1heWJlUHJvbWlzZS5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0ID0gbWF5YmVQcm9taXNlLnZhbHVlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fdW5zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWplY3QobWF5YmVQcm9taXNlLnJlYXNvbigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YWx1ZXNbaW5kZXhdID0gcmV0O1xuICAgIH1cbiAgICB2YXIgdG90YWxSZXNvbHZlZCA9ICsrdGhpcy5fdG90YWxSZXNvbHZlZDtcbiAgICBpZiAodG90YWxSZXNvbHZlZCA+PSBsZW5ndGgpIHtcbiAgICAgICAgaWYgKHByZXNlcnZlZFZhbHVlcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fZmlsdGVyKHZhbHVlcywgcHJlc2VydmVkVmFsdWVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfVxuXG4gICAgfVxufTtcblxuTWFwcGluZ1Byb21pc2VBcnJheS5wcm90b3R5cGUuX2RyYWluUXVldWUgPVxuZnVuY3Rpb24gTWFwcGluZ1Byb21pc2VBcnJheSRfZHJhaW5RdWV1ZSgpIHtcbiAgICB2YXIgcXVldWUgPSB0aGlzLl9xdWV1ZTtcbiAgICB2YXIgbGltaXQgPSB0aGlzLl9saW1pdDtcbiAgICB2YXIgdmFsdWVzID0gdGhpcy5fdmFsdWVzO1xuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwICYmIHRoaXMuX2luRmxpZ2h0IDwgbGltaXQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gcXVldWUucG9wKCk7XG4gICAgICAgIHRoaXMuX3Byb21pc2VGdWxmaWxsZWQodmFsdWVzW2luZGV4XSwgaW5kZXgpO1xuICAgIH1cbn07XG5cbk1hcHBpbmdQcm9taXNlQXJyYXkucHJvdG90eXBlLl9maWx0ZXIgPVxuZnVuY3Rpb24gTWFwcGluZ1Byb21pc2VBcnJheSRfZmlsdGVyKGJvb2xlYW5zLCB2YWx1ZXMpIHtcbiAgICB2YXIgbGVuID0gdmFsdWVzLmxlbmd0aDtcbiAgICB2YXIgcmV0ID0gbmV3IEFycmF5KGxlbik7XG4gICAgdmFyIGogPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgaWYgKGJvb2xlYW5zW2ldKSByZXRbaisrXSA9IHZhbHVlc1tpXTtcbiAgICB9XG4gICAgcmV0Lmxlbmd0aCA9IGo7XG4gICAgdGhpcy5fcmVzb2x2ZShyZXQpO1xufTtcblxuTWFwcGluZ1Byb21pc2VBcnJheS5wcm90b3R5cGUucHJlc2VydmVkVmFsdWVzID1cbmZ1bmN0aW9uIE1hcHBpbmdQcm9taXNlQXJyYXkkcHJlc2VydmVWYWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZXNlcnZlZFZhbHVlcztcbn07XG5cbmZ1bmN0aW9uIG1hcChwcm9taXNlcywgZm4sIG9wdGlvbnMsIF9maWx0ZXIpIHtcbiAgICB2YXIgbGltaXQgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zICE9PSBudWxsXG4gICAgICAgID8gb3B0aW9ucy5jb25jdXJyZW5jeVxuICAgICAgICA6IDA7XG4gICAgbGltaXQgPSB0eXBlb2YgbGltaXQgPT09IFwibnVtYmVyXCIgJiZcbiAgICAgICAgaXNGaW5pdGUobGltaXQpICYmIGxpbWl0ID49IDEgPyBsaW1pdCA6IDA7XG4gICAgcmV0dXJuIG5ldyBNYXBwaW5nUHJvbWlzZUFycmF5KHByb21pc2VzLCBmbiwgbGltaXQsIF9maWx0ZXIpO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiBQcm9taXNlJG1hcChmbiwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGFwaVJlamVjdGlvbihcImZuIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcblxuICAgIHJldHVybiBtYXAodGhpcywgZm4sIG9wdGlvbnMsIG51bGwpLnByb21pc2UoKTtcbn07XG5cblByb21pc2UubWFwID0gZnVuY3Rpb24gUHJvbWlzZSRNYXAocHJvbWlzZXMsIGZuLCBvcHRpb25zLCBfZmlsdGVyKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gYXBpUmVqZWN0aW9uKFwiZm4gbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgIHJldHVybiBtYXAocHJvbWlzZXMsIGZuLCBvcHRpb25zLCBfZmlsdGVyKS5wcm9taXNlKCk7XG59O1xuXG5cbn07XG4iLCIvKipcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSkge1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIGFzeW5jID0gcmVxdWlyZShcIi4vYXN5bmMuanNcIik7XG52YXIgdHJ5Q2F0Y2gyID0gdXRpbC50cnlDYXRjaDI7XG52YXIgdHJ5Q2F0Y2gxID0gdXRpbC50cnlDYXRjaDE7XG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xuXG5mdW5jdGlvbiB0aHJvd2VyKHIpIHtcbiAgICB0aHJvdyByO1xufVxuXG5mdW5jdGlvbiBQcm9taXNlJF9zcHJlYWRBZGFwdGVyKHZhbCwgcmVjZWl2ZXIpIHtcbiAgICBpZiAoIXV0aWwuaXNBcnJheSh2YWwpKSByZXR1cm4gUHJvbWlzZSRfc3VjY2Vzc0FkYXB0ZXIodmFsLCByZWNlaXZlcik7XG4gICAgdmFyIHJldCA9IHV0aWwudHJ5Q2F0Y2hBcHBseSh0aGlzLCBbbnVsbF0uY29uY2F0KHZhbCksIHJlY2VpdmVyKTtcbiAgICBpZiAocmV0ID09PSBlcnJvck9iaikge1xuICAgICAgICBhc3luYy5pbnZva2VMYXRlcih0aHJvd2VyLCB2b2lkIDAsIHJldC5lKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIFByb21pc2UkX3N1Y2Nlc3NBZGFwdGVyKHZhbCwgcmVjZWl2ZXIpIHtcbiAgICB2YXIgbm9kZWJhY2sgPSB0aGlzO1xuICAgIHZhciByZXQgPSB2YWwgPT09IHZvaWQgMFxuICAgICAgICA/IHRyeUNhdGNoMShub2RlYmFjaywgcmVjZWl2ZXIsIG51bGwpXG4gICAgICAgIDogdHJ5Q2F0Y2gyKG5vZGViYWNrLCByZWNlaXZlciwgbnVsbCwgdmFsKTtcbiAgICBpZiAocmV0ID09PSBlcnJvck9iaikge1xuICAgICAgICBhc3luYy5pbnZva2VMYXRlcih0aHJvd2VyLCB2b2lkIDAsIHJldC5lKTtcbiAgICB9XG59XG5mdW5jdGlvbiBQcm9taXNlJF9lcnJvckFkYXB0ZXIocmVhc29uLCByZWNlaXZlcikge1xuICAgIHZhciBub2RlYmFjayA9IHRoaXM7XG4gICAgdmFyIHJldCA9IHRyeUNhdGNoMShub2RlYmFjaywgcmVjZWl2ZXIsIHJlYXNvbik7XG4gICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgYXN5bmMuaW52b2tlTGF0ZXIodGhyb3dlciwgdm9pZCAwLCByZXQuZSk7XG4gICAgfVxufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5ub2RlaWZ5ID0gZnVuY3Rpb24gUHJvbWlzZSRub2RlaWZ5KG5vZGViYWNrLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBub2RlYmFjayA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdmFyIGFkYXB0ZXIgPSBQcm9taXNlJF9zdWNjZXNzQWRhcHRlcjtcbiAgICAgICAgaWYgKG9wdGlvbnMgIT09IHZvaWQgMCAmJiBPYmplY3Qob3B0aW9ucykuc3ByZWFkKSB7XG4gICAgICAgICAgICBhZGFwdGVyID0gUHJvbWlzZSRfc3ByZWFkQWRhcHRlcjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90aGVuKFxuICAgICAgICAgICAgYWRhcHRlcixcbiAgICAgICAgICAgIFByb21pc2UkX2Vycm9yQWRhcHRlcixcbiAgICAgICAgICAgIHZvaWQgMCxcbiAgICAgICAgICAgIG5vZGViYWNrLFxuICAgICAgICAgICAgdGhpcy5fYm91bmRUb1xuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn07XG59O1xuIiwiLyoqXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSkge1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIGFzeW5jID0gcmVxdWlyZShcIi4vYXN5bmMuanNcIik7XG52YXIgZXJyb3JzID0gcmVxdWlyZShcIi4vZXJyb3JzLmpzXCIpO1xudmFyIHRyeUNhdGNoMSA9IHV0aWwudHJ5Q2F0Y2gxO1xudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcblxuUHJvbWlzZS5wcm90b3R5cGUucHJvZ3Jlc3NlZCA9IGZ1bmN0aW9uIFByb21pc2UkcHJvZ3Jlc3NlZChoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW4odm9pZCAwLCB2b2lkIDAsIGhhbmRsZXIsIHZvaWQgMCwgdm9pZCAwKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9wcm9ncmVzcyA9IGZ1bmN0aW9uIFByb21pc2UkX3Byb2dyZXNzKHByb2dyZXNzVmFsdWUpIHtcbiAgICBpZiAodGhpcy5faXNGb2xsb3dpbmdPckZ1bGZpbGxlZE9yUmVqZWN0ZWQoKSkgcmV0dXJuO1xuICAgIHRoaXMuX3Byb2dyZXNzVW5jaGVja2VkKHByb2dyZXNzVmFsdWUpO1xuXG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fY2xlYXJGaXJzdEhhbmRsZXJEYXRhJEJhc2UgPVxuUHJvbWlzZS5wcm90b3R5cGUuX2NsZWFyRmlyc3RIYW5kbGVyRGF0YTtcblByb21pc2UucHJvdG90eXBlLl9jbGVhckZpcnN0SGFuZGxlckRhdGEgPVxuZnVuY3Rpb24gUHJvbWlzZSRfY2xlYXJGaXJzdEhhbmRsZXJEYXRhKCkge1xuICAgIHRoaXMuX2NsZWFyRmlyc3RIYW5kbGVyRGF0YSRCYXNlKCk7XG4gICAgdGhpcy5fcHJvZ3Jlc3NIYW5kbGVyMCA9IHZvaWQgMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9wcm9ncmVzc0hhbmRsZXJBdCA9XG5mdW5jdGlvbiBQcm9taXNlJF9wcm9ncmVzc0hhbmRsZXJBdChpbmRleCkge1xuICAgIHJldHVybiBpbmRleCA9PT0gMFxuICAgICAgICA/IHRoaXMuX3Byb2dyZXNzSGFuZGxlcjBcbiAgICAgICAgOiB0aGlzWyhpbmRleCA8PCAyKSArIGluZGV4IC0gNSArIDJdO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2RvUHJvZ3Jlc3NXaXRoID1cbmZ1bmN0aW9uIFByb21pc2UkX2RvUHJvZ3Jlc3NXaXRoKHByb2dyZXNzaW9uKSB7XG4gICAgdmFyIHByb2dyZXNzVmFsdWUgPSBwcm9ncmVzc2lvbi52YWx1ZTtcbiAgICB2YXIgaGFuZGxlciA9IHByb2dyZXNzaW9uLmhhbmRsZXI7XG4gICAgdmFyIHByb21pc2UgPSBwcm9ncmVzc2lvbi5wcm9taXNlO1xuICAgIHZhciByZWNlaXZlciA9IHByb2dyZXNzaW9uLnJlY2VpdmVyO1xuXG4gICAgdmFyIHJldCA9IHRyeUNhdGNoMShoYW5kbGVyLCByZWNlaXZlciwgcHJvZ3Jlc3NWYWx1ZSk7XG4gICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgaWYgKHJldC5lICE9IG51bGwgJiZcbiAgICAgICAgICAgIHJldC5lLm5hbWUgIT09IFwiU3RvcFByb2dyZXNzUHJvcGFnYXRpb25cIikge1xuICAgICAgICAgICAgdmFyIHRyYWNlID0gZXJyb3JzLmNhbkF0dGFjaChyZXQuZSlcbiAgICAgICAgICAgICAgICA/IHJldC5lIDogbmV3IEVycm9yKHJldC5lICsgXCJcIik7XG4gICAgICAgICAgICBwcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHRyYWNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX3Byb2dyZXNzKHJldC5lKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmV0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICByZXQuX3RoZW4ocHJvbWlzZS5fcHJvZ3Jlc3MsIG51bGwsIG51bGwsIHByb21pc2UsIHZvaWQgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZS5fcHJvZ3Jlc3MocmV0KTtcbiAgICB9XG59O1xuXG5cblByb21pc2UucHJvdG90eXBlLl9wcm9ncmVzc1VuY2hlY2tlZCA9XG5mdW5jdGlvbiBQcm9taXNlJF9wcm9ncmVzc1VuY2hlY2tlZChwcm9ncmVzc1ZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmlzUGVuZGluZygpKSByZXR1cm47XG4gICAgdmFyIGxlbiA9IHRoaXMuX2xlbmd0aCgpO1xuICAgIHZhciBwcm9ncmVzcyA9IHRoaXMuX3Byb2dyZXNzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSB0aGlzLl9wcm9ncmVzc0hhbmRsZXJBdChpKTtcbiAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLl9wcm9taXNlQXQoaSk7XG4gICAgICAgIGlmICghKHByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xuICAgICAgICAgICAgdmFyIHJlY2VpdmVyID0gdGhpcy5fcmVjZWl2ZXJBdChpKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlci5jYWxsKHJlY2VpdmVyLCBwcm9ncmVzc1ZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjZWl2ZXIgaW5zdGFuY2VvZiBQcm9taXNlICYmIHJlY2VpdmVyLl9pc1Byb3hpZWQoKSkge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVyLl9wcm9ncmVzc1VuY2hlY2tlZChwcm9ncmVzc1ZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjZWl2ZXIgaW5zdGFuY2VvZiBQcm9taXNlQXJyYXkpIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlci5fcHJvbWlzZVByb2dyZXNzZWQocHJvZ3Jlc3NWYWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBhc3luYy5pbnZva2UodGhpcy5fZG9Qcm9ncmVzc1dpdGgsIHRoaXMsIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyLFxuICAgICAgICAgICAgICAgIHByb21pc2U6IHByb21pc2UsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZXI6IHRoaXMuX3JlY2VpdmVyQXQoaSksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHByb2dyZXNzVmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXN5bmMuaW52b2tlKHByb2dyZXNzLCBwcm9taXNlLCBwcm9ncmVzc1ZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG59O1xuIiwiKGZ1bmN0aW9uIChwcm9jZXNzKXtcbi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xudmFyIG9sZDtcbmlmICh0eXBlb2YgUHJvbWlzZSAhPT0gXCJ1bmRlZmluZWRcIikgb2xkID0gUHJvbWlzZTtcbmZ1bmN0aW9uIG5vQ29uZmxpY3QoYmx1ZWJpcmQpIHtcbiAgICB0cnkgeyBpZiAoUHJvbWlzZSA9PT0gYmx1ZWJpcmQpIFByb21pc2UgPSBvbGQ7IH1cbiAgICBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gYmx1ZWJpcmQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIGFzeW5jID0gcmVxdWlyZShcIi4vYXN5bmMuanNcIik7XG52YXIgZXJyb3JzID0gcmVxdWlyZShcIi4vZXJyb3JzLmpzXCIpO1xuXG52YXIgSU5URVJOQUwgPSBmdW5jdGlvbigpe307XG52YXIgQVBQTFkgPSB7fTtcbnZhciBORVhUX0ZJTFRFUiA9IHtlOiBudWxsfTtcblxudmFyIGNhc3QgPSByZXF1aXJlKFwiLi90aGVuYWJsZXMuanNcIikoUHJvbWlzZSwgSU5URVJOQUwpO1xudmFyIFByb21pc2VBcnJheSA9IHJlcXVpcmUoXCIuL3Byb21pc2VfYXJyYXkuanNcIikoUHJvbWlzZSwgSU5URVJOQUwsIGNhc3QpO1xudmFyIENhcHR1cmVkVHJhY2UgPSByZXF1aXJlKFwiLi9jYXB0dXJlZF90cmFjZS5qc1wiKSgpO1xudmFyIENhdGNoRmlsdGVyID0gcmVxdWlyZShcIi4vY2F0Y2hfZmlsdGVyLmpzXCIpKE5FWFRfRklMVEVSKTtcbnZhciBQcm9taXNlUmVzb2x2ZXIgPSByZXF1aXJlKFwiLi9wcm9taXNlX3Jlc29sdmVyLmpzXCIpO1xuXG52YXIgaXNBcnJheSA9IHV0aWwuaXNBcnJheTtcblxudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcbnZhciB0cnlDYXRjaDEgPSB1dGlsLnRyeUNhdGNoMTtcbnZhciB0cnlDYXRjaDIgPSB1dGlsLnRyeUNhdGNoMjtcbnZhciB0cnlDYXRjaEFwcGx5ID0gdXRpbC50cnlDYXRjaEFwcGx5O1xudmFyIFJhbmdlRXJyb3IgPSBlcnJvcnMuUmFuZ2VFcnJvcjtcbnZhciBUeXBlRXJyb3IgPSBlcnJvcnMuVHlwZUVycm9yO1xudmFyIENhbmNlbGxhdGlvbkVycm9yID0gZXJyb3JzLkNhbmNlbGxhdGlvbkVycm9yO1xudmFyIFRpbWVvdXRFcnJvciA9IGVycm9ycy5UaW1lb3V0RXJyb3I7XG52YXIgT3BlcmF0aW9uYWxFcnJvciA9IGVycm9ycy5PcGVyYXRpb25hbEVycm9yO1xudmFyIG9yaWdpbmF0ZXNGcm9tUmVqZWN0aW9uID0gZXJyb3JzLm9yaWdpbmF0ZXNGcm9tUmVqZWN0aW9uO1xudmFyIG1hcmtBc09yaWdpbmF0aW5nRnJvbVJlamVjdGlvbiA9IGVycm9ycy5tYXJrQXNPcmlnaW5hdGluZ0Zyb21SZWplY3Rpb247XG52YXIgY2FuQXR0YWNoID0gZXJyb3JzLmNhbkF0dGFjaDtcbnZhciB0aHJvd2VyID0gdXRpbC50aHJvd2VyO1xudmFyIGFwaVJlamVjdGlvbiA9IHJlcXVpcmUoXCIuL2Vycm9yc19hcGlfcmVqZWN0aW9uXCIpKFByb21pc2UpO1xuXG5cbnZhciBtYWtlU2VsZlJlc29sdXRpb25FcnJvciA9IGZ1bmN0aW9uIFByb21pc2UkX21ha2VTZWxmUmVzb2x1dGlvbkVycm9yKCkge1xuICAgIHJldHVybiBuZXcgVHlwZUVycm9yKFwiY2lyY3VsYXIgcHJvbWlzZSByZXNvbHV0aW9uIGNoYWluXCIpO1xufTtcblxuZnVuY3Rpb24gUHJvbWlzZShyZXNvbHZlcikge1xuICAgIGlmICh0eXBlb2YgcmVzb2x2ZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwidGhlIHByb21pc2UgY29uc3RydWN0b3IgcmVxdWlyZXMgYSByZXNvbHZlciBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29uc3RydWN0b3IgIT09IFByb21pc2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcInRoZSBwcm9taXNlIGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBpbnZva2VkIGRpcmVjdGx5XCIpO1xuICAgIH1cbiAgICB0aGlzLl9iaXRGaWVsZCA9IDA7XG4gICAgdGhpcy5fZnVsZmlsbG1lbnRIYW5kbGVyMCA9IHZvaWQgMDtcbiAgICB0aGlzLl9yZWplY3Rpb25IYW5kbGVyMCA9IHZvaWQgMDtcbiAgICB0aGlzLl9wcm9taXNlMCA9IHZvaWQgMDtcbiAgICB0aGlzLl9yZWNlaXZlcjAgPSB2b2lkIDA7XG4gICAgdGhpcy5fc2V0dGxlZFZhbHVlID0gdm9pZCAwO1xuICAgIHRoaXMuX2JvdW5kVG8gPSB2b2lkIDA7XG4gICAgaWYgKHJlc29sdmVyICE9PSBJTlRFUk5BTCkgdGhpcy5fcmVzb2x2ZUZyb21SZXNvbHZlcihyZXNvbHZlcik7XG59XG5cbmZ1bmN0aW9uIHJldHVybkZpcnN0RWxlbWVudChlbGVtZW50cykge1xuICAgIHJldHVybiBlbGVtZW50c1swXTtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIFByb21pc2UkYmluZCh0aGlzQXJnKSB7XG4gICAgdmFyIG1heWJlUHJvbWlzZSA9IGNhc3QodGhpc0FyZywgdm9pZCAwKTtcbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHZhciBiaW5kZXIgPSBtYXliZVByb21pc2UudGhlbihmdW5jdGlvbih0aGlzQXJnKSB7XG4gICAgICAgICAgICByZXQuX3NldEJvdW5kVG8odGhpc0FyZyk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgcCA9IFByb21pc2UuYWxsKFt0aGlzLCBiaW5kZXJdKS50aGVuKHJldHVybkZpcnN0RWxlbWVudCk7XG4gICAgICAgIHJldC5fZm9sbG93KHApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldC5fZm9sbG93KHRoaXMpO1xuICAgICAgICByZXQuX3NldEJvdW5kVG8odGhpc0FyZyk7XG4gICAgfVxuICAgIHJldC5fcHJvcGFnYXRlRnJvbSh0aGlzLCAyIHwgMSk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gUHJvbWlzZSR0b1N0cmluZygpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IFByb21pc2VdXCI7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5jYXVnaHQgPSBQcm9taXNlLnByb3RvdHlwZVtcImNhdGNoXCJdID1cbmZ1bmN0aW9uIFByb21pc2UkY2F0Y2goZm4pIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZiAobGVuID4gMSkge1xuICAgICAgICB2YXIgY2F0Y2hJbnN0YW5jZXMgPSBuZXcgQXJyYXkobGVuIC0gMSksXG4gICAgICAgICAgICBqID0gMCwgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbiAtIDE7ICsraSkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGNhdGNoSW5zdGFuY2VzW2orK10gPSBpdGVtO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY2F0Y2hGaWx0ZXJUeXBlRXJyb3IgPVxuICAgICAgICAgICAgICAgICAgICBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBIGNhdGNoIGZpbHRlciBtdXN0IGJlIGFuIGVycm9yIGNvbnN0cnVjdG9yIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICArIFwib3IgYSBmaWx0ZXIgZnVuY3Rpb25cIik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9hdHRhY2hFeHRyYVRyYWNlKGNhdGNoRmlsdGVyVHlwZUVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoY2F0Y2hGaWx0ZXJUeXBlRXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoSW5zdGFuY2VzLmxlbmd0aCA9IGo7XG4gICAgICAgIGZuID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICAgIHRoaXMuX3Jlc2V0VHJhY2UoKTtcbiAgICAgICAgdmFyIGNhdGNoRmlsdGVyID0gbmV3IENhdGNoRmlsdGVyKGNhdGNoSW5zdGFuY2VzLCBmbiwgdGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzLl90aGVuKHZvaWQgMCwgY2F0Y2hGaWx0ZXIuZG9GaWx0ZXIsIHZvaWQgMCxcbiAgICAgICAgICAgIGNhdGNoRmlsdGVyLCB2b2lkIDApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdGhlbih2b2lkIDAsIGZuLCB2b2lkIDAsIHZvaWQgMCwgdm9pZCAwKTtcbn07XG5cbmZ1bmN0aW9uIHJlZmxlY3QoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlLlByb21pc2VJbnNwZWN0aW9uKHRoaXMpO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5yZWZsZWN0ID0gZnVuY3Rpb24gUHJvbWlzZSRyZWZsZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl90aGVuKHJlZmxlY3QsIHJlZmxlY3QsIHZvaWQgMCwgdGhpcywgdm9pZCAwKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnRoZW4gPVxuZnVuY3Rpb24gUHJvbWlzZSR0aGVuKGRpZEZ1bGZpbGwsIGRpZFJlamVjdCwgZGlkUHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gdGhpcy5fdGhlbihkaWRGdWxmaWxsLCBkaWRSZWplY3QsIGRpZFByb2dyZXNzLFxuICAgICAgICB2b2lkIDAsIHZvaWQgMCk7XG59O1xuXG5cblByb21pc2UucHJvdG90eXBlLmRvbmUgPVxuZnVuY3Rpb24gUHJvbWlzZSRkb25lKGRpZEZ1bGZpbGwsIGRpZFJlamVjdCwgZGlkUHJvZ3Jlc3MpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3RoZW4oZGlkRnVsZmlsbCwgZGlkUmVqZWN0LCBkaWRQcm9ncmVzcyxcbiAgICAgICAgdm9pZCAwLCB2b2lkIDApO1xuICAgIHByb21pc2UuX3NldElzRmluYWwoKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnNwcmVhZCA9IGZ1bmN0aW9uIFByb21pc2Ukc3ByZWFkKGRpZEZ1bGZpbGwsIGRpZFJlamVjdCkge1xuICAgIHJldHVybiB0aGlzLl90aGVuKGRpZEZ1bGZpbGwsIGRpZFJlamVjdCwgdm9pZCAwLFxuICAgICAgICBBUFBMWSwgdm9pZCAwKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmlzQ2FuY2VsbGFibGUgPSBmdW5jdGlvbiBQcm9taXNlJGlzQ2FuY2VsbGFibGUoKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzUmVzb2x2ZWQoKSAmJlxuICAgICAgICB0aGlzLl9jYW5jZWxsYWJsZSgpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gUHJvbWlzZSR0b0pTT04oKSB7XG4gICAgdmFyIHJldCA9IHtcbiAgICAgICAgaXNGdWxmaWxsZWQ6IGZhbHNlLFxuICAgICAgICBpc1JlamVjdGVkOiBmYWxzZSxcbiAgICAgICAgZnVsZmlsbG1lbnRWYWx1ZTogdm9pZCAwLFxuICAgICAgICByZWplY3Rpb25SZWFzb246IHZvaWQgMFxuICAgIH07XG4gICAgaWYgKHRoaXMuaXNGdWxmaWxsZWQoKSkge1xuICAgICAgICByZXQuZnVsZmlsbG1lbnRWYWx1ZSA9IHRoaXMuX3NldHRsZWRWYWx1ZTtcbiAgICAgICAgcmV0LmlzRnVsZmlsbGVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNSZWplY3RlZCgpKSB7XG4gICAgICAgIHJldC5yZWplY3Rpb25SZWFzb24gPSB0aGlzLl9zZXR0bGVkVmFsdWU7XG4gICAgICAgIHJldC5pc1JlamVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmFsbCA9IGZ1bmN0aW9uIFByb21pc2UkYWxsKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZUFycmF5KHRoaXMpLnByb21pc2UoKTtcbn07XG5cblxuUHJvbWlzZS5pcyA9IGZ1bmN0aW9uIFByb21pc2UkSXModmFsKSB7XG4gICAgcmV0dXJuIHZhbCBpbnN0YW5jZW9mIFByb21pc2U7XG59O1xuXG5Qcm9taXNlLmFsbCA9IGZ1bmN0aW9uIFByb21pc2UkQWxsKHByb21pc2VzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlQXJyYXkocHJvbWlzZXMpLnByb21pc2UoKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gUHJvbWlzZSRfZXJyb3IoZm4pIHtcbiAgICByZXR1cm4gdGhpcy5jYXVnaHQob3JpZ2luYXRlc0Zyb21SZWplY3Rpb24sIGZuKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZXNvbHZlRnJvbVN5bmNWYWx1ZSA9XG5mdW5jdGlvbiBQcm9taXNlJF9yZXNvbHZlRnJvbVN5bmNWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgdGhpcy5fY2xlYW5WYWx1ZXMoKTtcbiAgICAgICAgdGhpcy5fc2V0UmVqZWN0ZWQoKTtcbiAgICAgICAgdGhpcy5fc2V0dGxlZFZhbHVlID0gdmFsdWUuZTtcbiAgICAgICAgdGhpcy5fZW5zdXJlUG9zc2libGVSZWplY3Rpb25IYW5kbGVkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IGNhc3QodmFsdWUsIHZvaWQgMCk7XG4gICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICB0aGlzLl9mb2xsb3cobWF5YmVQcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NsZWFuVmFsdWVzKCk7XG4gICAgICAgICAgICB0aGlzLl9zZXRGdWxmaWxsZWQoKTtcbiAgICAgICAgICAgIHRoaXMuX3NldHRsZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuUHJvbWlzZS5tZXRob2QgPSBmdW5jdGlvbiBQcm9taXNlJF9NZXRob2QoZm4pIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImZuIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIFByb21pc2UkX21ldGhvZCgpIHtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6IHZhbHVlID0gdHJ5Q2F0Y2gxKGZuLCB0aGlzLCB2b2lkIDApOyBicmVhaztcbiAgICAgICAgY2FzZSAxOiB2YWx1ZSA9IHRyeUNhdGNoMShmbiwgdGhpcywgYXJndW1lbnRzWzBdKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogdmFsdWUgPSB0cnlDYXRjaDIoZm4sIHRoaXMsIGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoO3ZhciBhcmdzID0gbmV3IEFycmF5KCRfbGVuKTsgZm9yKHZhciAkX2kgPSAwOyAkX2kgPCAkX2xlbjsgKyskX2kpIHthcmdzWyRfaV0gPSBhcmd1bWVudHNbJF9pXTt9XG4gICAgICAgICAgICB2YWx1ZSA9IHRyeUNhdGNoQXBwbHkoZm4sIGFyZ3MsIHRoaXMpOyBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgICAgICByZXQuX3NldFRyYWNlKHZvaWQgMCk7XG4gICAgICAgIHJldC5fcmVzb2x2ZUZyb21TeW5jVmFsdWUodmFsdWUpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG59O1xuXG5Qcm9taXNlLmF0dGVtcHQgPSBQcm9taXNlW1widHJ5XCJdID0gZnVuY3Rpb24gUHJvbWlzZSRfVHJ5KGZuLCBhcmdzLCBjdHgpIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGFwaVJlamVjdGlvbihcImZuIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgdmFyIHZhbHVlID0gaXNBcnJheShhcmdzKVxuICAgICAgICA/IHRyeUNhdGNoQXBwbHkoZm4sIGFyZ3MsIGN0eClcbiAgICAgICAgOiB0cnlDYXRjaDEoZm4sIGN0eCwgYXJncyk7XG5cbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIHJldC5fc2V0VHJhY2Uodm9pZCAwKTtcbiAgICByZXQuX3Jlc29sdmVGcm9tU3luY1ZhbHVlKHZhbHVlKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuUHJvbWlzZS5kZWZlciA9IFByb21pc2UucGVuZGluZyA9IGZ1bmN0aW9uIFByb21pc2UkRGVmZXIoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgcHJvbWlzZS5fc2V0VHJhY2Uodm9pZCAwKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2VSZXNvbHZlcihwcm9taXNlKTtcbn07XG5cblByb21pc2UuYmluZCA9IGZ1bmN0aW9uIFByb21pc2UkQmluZCh0aGlzQXJnKSB7XG4gICAgdmFyIG1heWJlUHJvbWlzZSA9IGNhc3QodGhpc0FyZywgdm9pZCAwKTtcbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIHJldC5fc2V0VHJhY2Uodm9pZCAwKTtcblxuICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHZhciBwID0gbWF5YmVQcm9taXNlLnRoZW4oZnVuY3Rpb24odGhpc0FyZykge1xuICAgICAgICAgICAgcmV0Ll9zZXRCb3VuZFRvKHRoaXNBcmcpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0Ll9mb2xsb3cocCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0Ll9zZXRCb3VuZFRvKHRoaXNBcmcpO1xuICAgICAgICByZXQuX3NldEZ1bGZpbGxlZCgpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufTtcblxuUHJvbWlzZS5jYXN0ID0gZnVuY3Rpb24gUHJvbWlzZSRfQ2FzdChvYmopIHtcbiAgICB2YXIgcmV0ID0gY2FzdChvYmosIHZvaWQgMCk7XG4gICAgaWYgKCEocmV0IGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgICAgdmFyIHZhbCA9IHJldDtcbiAgICAgICAgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgICAgICByZXQuX3NldFRyYWNlKHZvaWQgMCk7XG4gICAgICAgIHJldC5fc2V0RnVsZmlsbGVkKCk7XG4gICAgICAgIHJldC5fY2xlYW5WYWx1ZXMoKTtcbiAgICAgICAgcmV0Ll9zZXR0bGVkVmFsdWUgPSB2YWw7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59O1xuXG5Qcm9taXNlLnJlc29sdmUgPSBQcm9taXNlLmZ1bGZpbGxlZCA9IFByb21pc2UuY2FzdDtcblxuUHJvbWlzZS5yZWplY3QgPSBQcm9taXNlLnJlamVjdGVkID0gZnVuY3Rpb24gUHJvbWlzZSRSZWplY3QocmVhc29uKSB7XG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICByZXQuX3NldFRyYWNlKHZvaWQgMCk7XG4gICAgbWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uKHJlYXNvbik7XG4gICAgcmV0Ll9jbGVhblZhbHVlcygpO1xuICAgIHJldC5fc2V0UmVqZWN0ZWQoKTtcbiAgICByZXQuX3NldHRsZWRWYWx1ZSA9IHJlYXNvbjtcbiAgICBpZiAoIWNhbkF0dGFjaChyZWFzb24pKSB7XG4gICAgICAgIHZhciB0cmFjZSA9IG5ldyBFcnJvcihyZWFzb24gKyBcIlwiKTtcbiAgICAgICAgcmV0Ll9zZXRDYXJyaWVkU3RhY2tUcmFjZSh0cmFjZSk7XG4gICAgfVxuICAgIHJldC5fZW5zdXJlUG9zc2libGVSZWplY3Rpb25IYW5kbGVkKCk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2Uub25Qb3NzaWJseVVuaGFuZGxlZFJlamVjdGlvbiA9XG5mdW5jdGlvbiBQcm9taXNlJE9uUG9zc2libHlVbmhhbmRsZWRSZWplY3Rpb24oZm4pIHtcbiAgICAgICAgQ2FwdHVyZWRUcmFjZS5wb3NzaWJseVVuaGFuZGxlZFJlamVjdGlvbiA9IHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmbiA6IHZvaWQgMDtcbn07XG5cbnZhciB1bmhhbmRsZWRSZWplY3Rpb25IYW5kbGVkO1xuUHJvbWlzZS5vblVuaGFuZGxlZFJlamVjdGlvbkhhbmRsZWQgPVxuZnVuY3Rpb24gUHJvbWlzZSRvblVuaGFuZGxlZFJlamVjdGlvbkhhbmRsZWQoZm4pIHtcbiAgICB1bmhhbmRsZWRSZWplY3Rpb25IYW5kbGVkID0gdHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCIgPyBmbiA6IHZvaWQgMDtcbn07XG5cbnZhciBkZWJ1Z2dpbmcgPSBmYWxzZSB8fCAhIShcbiAgICB0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgIHR5cGVvZiBwcm9jZXNzLmV4ZWNQYXRoID09PSBcInN0cmluZ1wiICYmXG4gICAgdHlwZW9mIHByb2Nlc3MuZW52ID09PSBcIm9iamVjdFwiICYmXG4gICAgKHByb2Nlc3MuZW52W1wiQkxVRUJJUkRfREVCVUdcIl0gfHxcbiAgICAgICAgcHJvY2Vzcy5lbnZbXCJOT0RFX0VOVlwiXSA9PT0gXCJkZXZlbG9wbWVudFwiKVxuKTtcblxuXG5Qcm9taXNlLmxvbmdTdGFja1RyYWNlcyA9IGZ1bmN0aW9uIFByb21pc2UkTG9uZ1N0YWNrVHJhY2VzKCkge1xuICAgIGlmIChhc3luYy5oYXZlSXRlbXNRdWV1ZWQoKSAmJlxuICAgICAgICBkZWJ1Z2dpbmcgPT09IGZhbHNlXG4gICApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2Fubm90IGVuYWJsZSBsb25nIHN0YWNrIHRyYWNlcyBhZnRlciBwcm9taXNlcyBoYXZlIGJlZW4gY3JlYXRlZFwiKTtcbiAgICB9XG4gICAgZGVidWdnaW5nID0gQ2FwdHVyZWRUcmFjZS5pc1N1cHBvcnRlZCgpO1xufTtcblxuUHJvbWlzZS5oYXNMb25nU3RhY2tUcmFjZXMgPSBmdW5jdGlvbiBQcm9taXNlJEhhc0xvbmdTdGFja1RyYWNlcygpIHtcbiAgICByZXR1cm4gZGVidWdnaW5nICYmIENhcHR1cmVkVHJhY2UuaXNTdXBwb3J0ZWQoKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl90aGVuID1cbmZ1bmN0aW9uIFByb21pc2UkX3RoZW4oXG4gICAgZGlkRnVsZmlsbCxcbiAgICBkaWRSZWplY3QsXG4gICAgZGlkUHJvZ3Jlc3MsXG4gICAgcmVjZWl2ZXIsXG4gICAgaW50ZXJuYWxEYXRhXG4pIHtcbiAgICB2YXIgaGF2ZUludGVybmFsRGF0YSA9IGludGVybmFsRGF0YSAhPT0gdm9pZCAwO1xuICAgIHZhciByZXQgPSBoYXZlSW50ZXJuYWxEYXRhID8gaW50ZXJuYWxEYXRhIDogbmV3IFByb21pc2UoSU5URVJOQUwpO1xuXG4gICAgaWYgKCFoYXZlSW50ZXJuYWxEYXRhKSB7XG4gICAgICAgIGlmIChkZWJ1Z2dpbmcpIHtcbiAgICAgICAgICAgIHZhciBoYXZlU2FtZUNvbnRleHQgPSB0aGlzLl9wZWVrQ29udGV4dCgpID09PSB0aGlzLl90cmFjZVBhcmVudDtcbiAgICAgICAgICAgIHJldC5fdHJhY2VQYXJlbnQgPSBoYXZlU2FtZUNvbnRleHQgPyB0aGlzLl90cmFjZVBhcmVudCA6IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0Ll9wcm9wYWdhdGVGcm9tKHRoaXMsIDcpO1xuICAgIH1cblxuICAgIHZhciBjYWxsYmFja0luZGV4ID1cbiAgICAgICAgdGhpcy5fYWRkQ2FsbGJhY2tzKGRpZEZ1bGZpbGwsIGRpZFJlamVjdCwgZGlkUHJvZ3Jlc3MsIHJldCwgcmVjZWl2ZXIpO1xuXG4gICAgaWYgKHRoaXMuaXNSZXNvbHZlZCgpKSB7XG4gICAgICAgIGFzeW5jLmludm9rZSh0aGlzLl9xdWV1ZVNldHRsZUF0LCB0aGlzLCBjYWxsYmFja0luZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2xlbmd0aCA9IGZ1bmN0aW9uIFByb21pc2UkX2xlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYml0RmllbGQgJiAyNjIxNDM7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faXNGb2xsb3dpbmdPckZ1bGZpbGxlZE9yUmVqZWN0ZWQgPVxuZnVuY3Rpb24gUHJvbWlzZSRfaXNGb2xsb3dpbmdPckZ1bGZpbGxlZE9yUmVqZWN0ZWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDkzOTUyNDA5NikgPiAwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2lzRm9sbG93aW5nID0gZnVuY3Rpb24gUHJvbWlzZSRfaXNGb2xsb3dpbmcoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDUzNjg3MDkxMikgPT09IDUzNjg3MDkxMjtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRMZW5ndGggPSBmdW5jdGlvbiBQcm9taXNlJF9zZXRMZW5ndGgobGVuKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSAodGhpcy5fYml0RmllbGQgJiAtMjYyMTQ0KSB8XG4gICAgICAgIChsZW4gJiAyNjIxNDMpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldEZ1bGZpbGxlZCA9IGZ1bmN0aW9uIFByb21pc2UkX3NldEZ1bGZpbGxlZCgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgMjY4NDM1NDU2O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldFJlamVjdGVkID0gZnVuY3Rpb24gUHJvbWlzZSRfc2V0UmVqZWN0ZWQoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDEzNDIxNzcyODtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRGb2xsb3dpbmcgPSBmdW5jdGlvbiBQcm9taXNlJF9zZXRGb2xsb3dpbmcoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDUzNjg3MDkxMjtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRJc0ZpbmFsID0gZnVuY3Rpb24gUHJvbWlzZSRfc2V0SXNGaW5hbCgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgMzM1NTQ0MzI7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faXNGaW5hbCA9IGZ1bmN0aW9uIFByb21pc2UkX2lzRmluYWwoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDMzNTU0NDMyKSA+IDA7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fY2FuY2VsbGFibGUgPSBmdW5jdGlvbiBQcm9taXNlJF9jYW5jZWxsYWJsZSgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgNjcxMDg4NjQpID4gMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRDYW5jZWxsYWJsZSA9IGZ1bmN0aW9uIFByb21pc2UkX3NldENhbmNlbGxhYmxlKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCA2NzEwODg2NDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl91bnNldENhbmNlbGxhYmxlID0gZnVuY3Rpb24gUHJvbWlzZSRfdW5zZXRDYW5jZWxsYWJsZSgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkICYgKH42NzEwODg2NCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQgPVxuZnVuY3Rpb24gUHJvbWlzZSRfc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDIwOTcxNTI7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fdW5zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCA9XG5mdW5jdGlvbiBQcm9taXNlJF91bnNldFJlamVjdGlvbklzVW5oYW5kbGVkKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgJiAofjIwOTcxNTIpO1xuICAgIGlmICh0aGlzLl9pc1VuaGFuZGxlZFJlamVjdGlvbk5vdGlmaWVkKCkpIHtcbiAgICAgICAgdGhpcy5fdW5zZXRVbmhhbmRsZWRSZWplY3Rpb25Jc05vdGlmaWVkKCk7XG4gICAgICAgIHRoaXMuX25vdGlmeVVuaGFuZGxlZFJlamVjdGlvbklzSGFuZGxlZCgpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc1JlamVjdGlvblVuaGFuZGxlZCA9XG5mdW5jdGlvbiBQcm9taXNlJF9pc1JlamVjdGlvblVuaGFuZGxlZCgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgMjA5NzE1MikgPiAwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldFVuaGFuZGxlZFJlamVjdGlvbklzTm90aWZpZWQgPVxuZnVuY3Rpb24gUHJvbWlzZSRfc2V0VW5oYW5kbGVkUmVqZWN0aW9uSXNOb3RpZmllZCgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgNTI0Mjg4O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Vuc2V0VW5oYW5kbGVkUmVqZWN0aW9uSXNOb3RpZmllZCA9XG5mdW5jdGlvbiBQcm9taXNlJF91bnNldFVuaGFuZGxlZFJlamVjdGlvbklzTm90aWZpZWQoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCAmICh+NTI0Mjg4KTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc1VuaGFuZGxlZFJlamVjdGlvbk5vdGlmaWVkID1cbmZ1bmN0aW9uIFByb21pc2UkX2lzVW5oYW5kbGVkUmVqZWN0aW9uTm90aWZpZWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDUyNDI4OCkgPiAwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldENhcnJpZWRTdGFja1RyYWNlID1cbmZ1bmN0aW9uIFByb21pc2UkX3NldENhcnJpZWRTdGFja1RyYWNlKGNhcHR1cmVkVHJhY2UpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgMTA0ODU3NjtcbiAgICB0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXIwID0gY2FwdHVyZWRUcmFjZTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl91bnNldENhcnJpZWRTdGFja1RyYWNlID1cbmZ1bmN0aW9uIFByb21pc2UkX3Vuc2V0Q2FycmllZFN0YWNrVHJhY2UoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCAmICh+MTA0ODU3Nik7XG4gICAgdGhpcy5fZnVsZmlsbG1lbnRIYW5kbGVyMCA9IHZvaWQgMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc0NhcnJ5aW5nU3RhY2tUcmFjZSA9XG5mdW5jdGlvbiBQcm9taXNlJF9pc0NhcnJ5aW5nU3RhY2tUcmFjZSgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgMTA0ODU3NikgPiAwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2dldENhcnJpZWRTdGFja1RyYWNlID1cbmZ1bmN0aW9uIFByb21pc2UkX2dldENhcnJpZWRTdGFja1RyYWNlKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0NhcnJ5aW5nU3RhY2tUcmFjZSgpXG4gICAgICAgID8gdGhpcy5fZnVsZmlsbG1lbnRIYW5kbGVyMFxuICAgICAgICA6IHZvaWQgMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZWNlaXZlckF0ID0gZnVuY3Rpb24gUHJvbWlzZSRfcmVjZWl2ZXJBdChpbmRleCkge1xuICAgIHZhciByZXQgPSBpbmRleCA9PT0gMFxuICAgICAgICA/IHRoaXMuX3JlY2VpdmVyMFxuICAgICAgICA6IHRoaXNbKGluZGV4IDw8IDIpICsgaW5kZXggLSA1ICsgNF07XG4gICAgaWYgKHRoaXMuX2lzQm91bmQoKSAmJiByZXQgPT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm91bmRUbztcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9wcm9taXNlQXQgPSBmdW5jdGlvbiBQcm9taXNlJF9wcm9taXNlQXQoaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXggPT09IDBcbiAgICAgICAgPyB0aGlzLl9wcm9taXNlMFxuICAgICAgICA6IHRoaXNbKGluZGV4IDw8IDIpICsgaW5kZXggLSA1ICsgM107XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fZnVsZmlsbG1lbnRIYW5kbGVyQXQgPVxuZnVuY3Rpb24gUHJvbWlzZSRfZnVsZmlsbG1lbnRIYW5kbGVyQXQoaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXggPT09IDBcbiAgICAgICAgPyB0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXIwXG4gICAgICAgIDogdGhpc1soaW5kZXggPDwgMikgKyBpbmRleCAtIDUgKyAwXTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZWplY3Rpb25IYW5kbGVyQXQgPVxuZnVuY3Rpb24gUHJvbWlzZSRfcmVqZWN0aW9uSGFuZGxlckF0KGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4ID09PSAwXG4gICAgICAgID8gdGhpcy5fcmVqZWN0aW9uSGFuZGxlcjBcbiAgICAgICAgOiB0aGlzWyhpbmRleCA8PCAyKSArIGluZGV4IC0gNSArIDFdO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2FkZENhbGxiYWNrcyA9IGZ1bmN0aW9uIFByb21pc2UkX2FkZENhbGxiYWNrcyhcbiAgICBmdWxmaWxsLFxuICAgIHJlamVjdCxcbiAgICBwcm9ncmVzcyxcbiAgICBwcm9taXNlLFxuICAgIHJlY2VpdmVyXG4pIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLl9sZW5ndGgoKTtcblxuICAgIGlmIChpbmRleCA+PSAyNjIxNDMgLSA1KSB7XG4gICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5fc2V0TGVuZ3RoKDApO1xuICAgIH1cblxuICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICB0aGlzLl9wcm9taXNlMCA9IHByb21pc2U7XG4gICAgICAgIGlmIChyZWNlaXZlciAhPT0gdm9pZCAwKSB0aGlzLl9yZWNlaXZlcjAgPSByZWNlaXZlcjtcbiAgICAgICAgaWYgKHR5cGVvZiBmdWxmaWxsID09PSBcImZ1bmN0aW9uXCIgJiYgIXRoaXMuX2lzQ2FycnlpbmdTdGFja1RyYWNlKCkpXG4gICAgICAgICAgICB0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXIwID0gZnVsZmlsbDtcbiAgICAgICAgaWYgKHR5cGVvZiByZWplY3QgPT09IFwiZnVuY3Rpb25cIikgdGhpcy5fcmVqZWN0aW9uSGFuZGxlcjAgPSByZWplY3Q7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvZ3Jlc3MgPT09IFwiZnVuY3Rpb25cIikgdGhpcy5fcHJvZ3Jlc3NIYW5kbGVyMCA9IHByb2dyZXNzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBiYXNlID0gKGluZGV4IDw8IDIpICsgaW5kZXggLSA1O1xuICAgICAgICB0aGlzW2Jhc2UgKyAzXSA9IHByb21pc2U7XG4gICAgICAgIHRoaXNbYmFzZSArIDRdID0gcmVjZWl2ZXI7XG4gICAgICAgIHRoaXNbYmFzZSArIDBdID0gdHlwZW9mIGZ1bGZpbGwgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZ1bGZpbGwgOiB2b2lkIDA7XG4gICAgICAgIHRoaXNbYmFzZSArIDFdID0gdHlwZW9mIHJlamVjdCA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcmVqZWN0IDogdm9pZCAwO1xuICAgICAgICB0aGlzW2Jhc2UgKyAyXSA9IHR5cGVvZiBwcm9ncmVzcyA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcHJvZ3Jlc3MgOiB2b2lkIDA7XG4gICAgfVxuICAgIHRoaXMuX3NldExlbmd0aChpbmRleCArIDEpO1xuICAgIHJldHVybiBpbmRleDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRQcm94eUhhbmRsZXJzID1cbmZ1bmN0aW9uIFByb21pc2UkX3NldFByb3h5SGFuZGxlcnMocmVjZWl2ZXIsIHByb21pc2VTbG90VmFsdWUpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLl9sZW5ndGgoKTtcblxuICAgIGlmIChpbmRleCA+PSAyNjIxNDMgLSA1KSB7XG4gICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5fc2V0TGVuZ3RoKDApO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgdGhpcy5fcHJvbWlzZTAgPSBwcm9taXNlU2xvdFZhbHVlO1xuICAgICAgICB0aGlzLl9yZWNlaXZlcjAgPSByZWNlaXZlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgYmFzZSA9IChpbmRleCA8PCAyKSArIGluZGV4IC0gNTtcbiAgICAgICAgdGhpc1tiYXNlICsgM10gPSBwcm9taXNlU2xvdFZhbHVlO1xuICAgICAgICB0aGlzW2Jhc2UgKyA0XSA9IHJlY2VpdmVyO1xuICAgICAgICB0aGlzW2Jhc2UgKyAwXSA9XG4gICAgICAgIHRoaXNbYmFzZSArIDFdID1cbiAgICAgICAgdGhpc1tiYXNlICsgMl0gPSB2b2lkIDA7XG4gICAgfVxuICAgIHRoaXMuX3NldExlbmd0aChpbmRleCArIDEpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Byb3h5UHJvbWlzZUFycmF5ID1cbmZ1bmN0aW9uIFByb21pc2UkX3Byb3h5UHJvbWlzZUFycmF5KHByb21pc2VBcnJheSwgaW5kZXgpIHtcbiAgICB0aGlzLl9zZXRQcm94eUhhbmRsZXJzKHByb21pc2VBcnJheSwgaW5kZXgpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Byb3h5UHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UkX3Byb3h5UHJvbWlzZShwcm9taXNlKSB7XG4gICAgcHJvbWlzZS5fc2V0UHJveGllZCgpO1xuICAgIHRoaXMuX3NldFByb3h5SGFuZGxlcnMocHJvbWlzZSwgLTE1KTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRCb3VuZFRvID0gZnVuY3Rpb24gUHJvbWlzZSRfc2V0Qm91bmRUbyhvYmopIHtcbiAgICBpZiAob2JqICE9PSB2b2lkIDApIHtcbiAgICAgICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDgzODg2MDg7XG4gICAgICAgIHRoaXMuX2JvdW5kVG8gPSBvYmo7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCAmICh+ODM4ODYwOCk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2lzQm91bmQgPSBmdW5jdGlvbiBQcm9taXNlJF9pc0JvdW5kKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiA4Mzg4NjA4KSA9PT0gODM4ODYwODtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZXNvbHZlRnJvbVJlc29sdmVyID1cbmZ1bmN0aW9uIFByb21pc2UkX3Jlc29sdmVGcm9tUmVzb2x2ZXIocmVzb2x2ZXIpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gICAgdGhpcy5fc2V0VHJhY2Uodm9pZCAwKTtcbiAgICB0aGlzLl9wdXNoQ29udGV4dCgpO1xuXG4gICAgZnVuY3Rpb24gUHJvbWlzZSRfcmVzb2x2ZXIodmFsKSB7XG4gICAgICAgIGlmIChwcm9taXNlLl90cnlGb2xsb3codmFsKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHByb21pc2UuX2Z1bGZpbGwodmFsKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gUHJvbWlzZSRfcmVqZWN0ZXIodmFsKSB7XG4gICAgICAgIHZhciB0cmFjZSA9IGNhbkF0dGFjaCh2YWwpID8gdmFsIDogbmV3IEVycm9yKHZhbCArIFwiXCIpO1xuICAgICAgICBwcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHRyYWNlKTtcbiAgICAgICAgbWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uKHZhbCk7XG4gICAgICAgIHByb21pc2UuX3JlamVjdCh2YWwsIHRyYWNlID09PSB2YWwgPyB2b2lkIDAgOiB0cmFjZSk7XG4gICAgfVxuICAgIHZhciByID0gdHJ5Q2F0Y2gyKHJlc29sdmVyLCB2b2lkIDAsIFByb21pc2UkX3Jlc29sdmVyLCBQcm9taXNlJF9yZWplY3Rlcik7XG4gICAgdGhpcy5fcG9wQ29udGV4dCgpO1xuXG4gICAgaWYgKHIgIT09IHZvaWQgMCAmJiByID09PSBlcnJvck9iaikge1xuICAgICAgICB2YXIgZSA9IHIuZTtcbiAgICAgICAgdmFyIHRyYWNlID0gY2FuQXR0YWNoKGUpID8gZSA6IG5ldyBFcnJvcihlICsgXCJcIik7XG4gICAgICAgIHByb21pc2UuX3JlamVjdChlLCB0cmFjZSk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NwcmVhZFNsb3dDYXNlID1cbmZ1bmN0aW9uIFByb21pc2UkX3NwcmVhZFNsb3dDYXNlKHRhcmdldEZuLCBwcm9taXNlLCB2YWx1ZXMsIGJvdW5kVG8pIHtcbiAgICB2YXIgcHJvbWlzZUZvckFsbCA9IG5ldyBQcm9taXNlQXJyYXkodmFsdWVzKS5wcm9taXNlKCk7XG4gICAgdmFyIHByb21pc2UyID0gcHJvbWlzZUZvckFsbC5fdGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldEZuLmFwcGx5KGJvdW5kVG8sIGFyZ3VtZW50cyk7XG4gICAgfSwgdm9pZCAwLCB2b2lkIDAsIEFQUExZLCB2b2lkIDApO1xuICAgIHByb21pc2UuX2ZvbGxvdyhwcm9taXNlMik7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fY2FsbFNwcmVhZCA9XG5mdW5jdGlvbiBQcm9taXNlJF9jYWxsU3ByZWFkKGhhbmRsZXIsIHByb21pc2UsIHZhbHVlKSB7XG4gICAgdmFyIGJvdW5kVG8gPSB0aGlzLl9ib3VuZFRvO1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChjYXN0KHZhbHVlW2ldLCB2b2lkIDApIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NwcmVhZFNsb3dDYXNlKGhhbmRsZXIsIHByb21pc2UsIHZhbHVlLCBib3VuZFRvKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvbWlzZS5fcHVzaENvbnRleHQoKTtcbiAgICByZXR1cm4gdHJ5Q2F0Y2hBcHBseShoYW5kbGVyLCB2YWx1ZSwgYm91bmRUbyk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fY2FsbEhhbmRsZXIgPVxuZnVuY3Rpb24gUHJvbWlzZSRfY2FsbEhhbmRsZXIoXG4gICAgaGFuZGxlciwgcmVjZWl2ZXIsIHByb21pc2UsIHZhbHVlKSB7XG4gICAgdmFyIHg7XG4gICAgaWYgKHJlY2VpdmVyID09PSBBUFBMWSAmJiAhdGhpcy5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgeCA9IHRoaXMuX2NhbGxTcHJlYWQoaGFuZGxlciwgcHJvbWlzZSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2UuX3B1c2hDb250ZXh0KCk7XG4gICAgICAgIHggPSB0cnlDYXRjaDEoaGFuZGxlciwgcmVjZWl2ZXIsIHZhbHVlKTtcbiAgICB9XG4gICAgcHJvbWlzZS5fcG9wQ29udGV4dCgpO1xuICAgIHJldHVybiB4O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldHRsZVByb21pc2VGcm9tSGFuZGxlciA9XG5mdW5jdGlvbiBQcm9taXNlJF9zZXR0bGVQcm9taXNlRnJvbUhhbmRsZXIoXG4gICAgaGFuZGxlciwgcmVjZWl2ZXIsIHZhbHVlLCBwcm9taXNlXG4pIHtcbiAgICBpZiAoIShwcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgICAgaGFuZGxlci5jYWxsKHJlY2VpdmVyLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHggPSB0aGlzLl9jYWxsSGFuZGxlcihoYW5kbGVyLCByZWNlaXZlciwgcHJvbWlzZSwgdmFsdWUpO1xuICAgIGlmIChwcm9taXNlLl9pc0ZvbGxvd2luZygpKSByZXR1cm47XG5cbiAgICBpZiAoeCA9PT0gZXJyb3JPYmogfHwgeCA9PT0gcHJvbWlzZSB8fCB4ID09PSBORVhUX0ZJTFRFUikge1xuICAgICAgICB2YXIgZXJyID0geCA9PT0gcHJvbWlzZVxuICAgICAgICAgICAgICAgICAgICA/IG1ha2VTZWxmUmVzb2x1dGlvbkVycm9yKClcbiAgICAgICAgICAgICAgICAgICAgOiB4LmU7XG4gICAgICAgIHZhciB0cmFjZSA9IGNhbkF0dGFjaChlcnIpID8gZXJyIDogbmV3IEVycm9yKGVyciArIFwiXCIpO1xuICAgICAgICBpZiAoeCAhPT0gTkVYVF9GSUxURVIpIHByb21pc2UuX2F0dGFjaEV4dHJhVHJhY2UodHJhY2UpO1xuICAgICAgICBwcm9taXNlLl9yZWplY3RVbmNoZWNrZWQoZXJyLCB0cmFjZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNhc3RWYWx1ZSA9IGNhc3QoeCwgcHJvbWlzZSk7XG4gICAgICAgIGlmIChjYXN0VmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICBpZiAoY2FzdFZhbHVlLmlzUmVqZWN0ZWQoKSAmJlxuICAgICAgICAgICAgICAgICFjYXN0VmFsdWUuX2lzQ2FycnlpbmdTdGFja1RyYWNlKCkgJiZcbiAgICAgICAgICAgICAgICAhY2FuQXR0YWNoKGNhc3RWYWx1ZS5fc2V0dGxlZFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhciB0cmFjZSA9IG5ldyBFcnJvcihjYXN0VmFsdWUuX3NldHRsZWRWYWx1ZSArIFwiXCIpO1xuICAgICAgICAgICAgICAgIHByb21pc2UuX2F0dGFjaEV4dHJhVHJhY2UodHJhY2UpO1xuICAgICAgICAgICAgICAgIGNhc3RWYWx1ZS5fc2V0Q2FycmllZFN0YWNrVHJhY2UodHJhY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvbWlzZS5fZm9sbG93KGNhc3RWYWx1ZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9wcm9wYWdhdGVGcm9tKGNhc3RWYWx1ZSwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlLl9mdWxmaWxsVW5jaGVja2VkKHgpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2ZvbGxvdyA9XG5mdW5jdGlvbiBQcm9taXNlJF9mb2xsb3cocHJvbWlzZSkge1xuICAgIHRoaXMuX3NldEZvbGxvd2luZygpO1xuXG4gICAgaWYgKHByb21pc2UuaXNQZW5kaW5nKCkpIHtcbiAgICAgICAgdGhpcy5fcHJvcGFnYXRlRnJvbShwcm9taXNlLCAxKTtcbiAgICAgICAgcHJvbWlzZS5fcHJveHlQcm9taXNlKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAocHJvbWlzZS5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgIHRoaXMuX2Z1bGZpbGxVbmNoZWNrZWQocHJvbWlzZS5fc2V0dGxlZFZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZWplY3RVbmNoZWNrZWQocHJvbWlzZS5fc2V0dGxlZFZhbHVlLFxuICAgICAgICAgICAgcHJvbWlzZS5fZ2V0Q2FycmllZFN0YWNrVHJhY2UoKSk7XG4gICAgfVxuXG4gICAgaWYgKHByb21pc2UuX2lzUmVqZWN0aW9uVW5oYW5kbGVkKCkpIHByb21pc2UuX3Vuc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQoKTtcblxuICAgIGlmIChkZWJ1Z2dpbmcgJiZcbiAgICAgICAgcHJvbWlzZS5fdHJhY2VQYXJlbnQgPT0gbnVsbCkge1xuICAgICAgICBwcm9taXNlLl90cmFjZVBhcmVudCA9IHRoaXM7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3RyeUZvbGxvdyA9XG5mdW5jdGlvbiBQcm9taXNlJF90cnlGb2xsb3codmFsdWUpIHtcbiAgICBpZiAodGhpcy5faXNGb2xsb3dpbmdPckZ1bGZpbGxlZE9yUmVqZWN0ZWQoKSB8fFxuICAgICAgICB2YWx1ZSA9PT0gdGhpcykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0KHZhbHVlLCB2b2lkIDApO1xuICAgIGlmICghKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5fZm9sbG93KG1heWJlUHJvbWlzZSk7XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcmVzZXRUcmFjZSA9IGZ1bmN0aW9uIFByb21pc2UkX3Jlc2V0VHJhY2UoKSB7XG4gICAgaWYgKGRlYnVnZ2luZykge1xuICAgICAgICB0aGlzLl90cmFjZSA9IG5ldyBDYXB0dXJlZFRyYWNlKHRoaXMuX3BlZWtDb250ZXh0KCkgPT09IHZvaWQgMCk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldFRyYWNlID0gZnVuY3Rpb24gUHJvbWlzZSRfc2V0VHJhY2UocGFyZW50KSB7XG4gICAgaWYgKGRlYnVnZ2luZykge1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuX3BlZWtDb250ZXh0KCk7XG4gICAgICAgIHRoaXMuX3RyYWNlUGFyZW50ID0gY29udGV4dDtcbiAgICAgICAgdmFyIGlzVG9wTGV2ZWwgPSBjb250ZXh0ID09PSB2b2lkIDA7XG4gICAgICAgIGlmIChwYXJlbnQgIT09IHZvaWQgMCAmJlxuICAgICAgICAgICAgcGFyZW50Ll90cmFjZVBhcmVudCA9PT0gY29udGV4dCkge1xuICAgICAgICAgICAgdGhpcy5fdHJhY2UgPSBwYXJlbnQuX3RyYWNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fdHJhY2UgPSBuZXcgQ2FwdHVyZWRUcmFjZShpc1RvcExldmVsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9hdHRhY2hFeHRyYVRyYWNlID1cbmZ1bmN0aW9uIFByb21pc2UkX2F0dGFjaEV4dHJhVHJhY2UoZXJyb3IpIHtcbiAgICBpZiAoZGVidWdnaW5nKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gdGhpcztcbiAgICAgICAgdmFyIHN0YWNrID0gZXJyb3Iuc3RhY2s7XG4gICAgICAgIHN0YWNrID0gdHlwZW9mIHN0YWNrID09PSBcInN0cmluZ1wiID8gc3RhY2suc3BsaXQoXCJcXG5cIikgOiBbXTtcbiAgICAgICAgQ2FwdHVyZWRUcmFjZS5wcm90ZWN0RXJyb3JNZXNzYWdlTmV3bGluZXMoc3RhY2spO1xuICAgICAgICB2YXIgaGVhZGVyTGluZUNvdW50ID0gMTtcbiAgICAgICAgdmFyIGNvbWJpbmVkVHJhY2VzID0gMTtcbiAgICAgICAgd2hpbGUocHJvbWlzZSAhPSBudWxsICYmXG4gICAgICAgICAgICBwcm9taXNlLl90cmFjZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzdGFjayA9IENhcHR1cmVkVHJhY2UuY29tYmluZShcbiAgICAgICAgICAgICAgICBzdGFjayxcbiAgICAgICAgICAgICAgICBwcm9taXNlLl90cmFjZS5zdGFjay5zcGxpdChcIlxcblwiKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHByb21pc2UgPSBwcm9taXNlLl90cmFjZVBhcmVudDtcbiAgICAgICAgICAgIGNvbWJpbmVkVHJhY2VzKys7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3RhY2tUcmFjZUxpbWl0ID0gRXJyb3Iuc3RhY2tUcmFjZUxpbWl0IHx8IDEwO1xuICAgICAgICB2YXIgbWF4ID0gKHN0YWNrVHJhY2VMaW1pdCArIGhlYWRlckxpbmVDb3VudCkgKiBjb21iaW5lZFRyYWNlcztcbiAgICAgICAgdmFyIGxlbiA9IHN0YWNrLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbiA+IG1heCkge1xuICAgICAgICAgICAgc3RhY2subGVuZ3RoID0gbWF4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxlbiA+IDApXG4gICAgICAgICAgICBzdGFja1swXSA9IHN0YWNrWzBdLnNwbGl0KFwiXFx1MDAwMlxcdTAwMDBcXHUwMDAxXCIpLmpvaW4oXCJcXG5cIik7XG5cbiAgICAgICAgaWYgKHN0YWNrLmxlbmd0aCA8PSBoZWFkZXJMaW5lQ291bnQpIHtcbiAgICAgICAgICAgIGVycm9yLnN0YWNrID0gXCIoTm8gc3RhY2sgdHJhY2UpXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvci5zdGFjayA9IHN0YWNrLmpvaW4oXCJcXG5cIik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fY2xlYW5WYWx1ZXMgPSBmdW5jdGlvbiBQcm9taXNlJF9jbGVhblZhbHVlcygpIHtcbiAgICBpZiAodGhpcy5fY2FuY2VsbGFibGUoKSkge1xuICAgICAgICB0aGlzLl9jYW5jZWxsYXRpb25QYXJlbnQgPSB2b2lkIDA7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Byb3BhZ2F0ZUZyb20gPVxuZnVuY3Rpb24gUHJvbWlzZSRfcHJvcGFnYXRlRnJvbShwYXJlbnQsIGZsYWdzKSB7XG4gICAgaWYgKChmbGFncyAmIDEpID4gMCAmJiBwYXJlbnQuX2NhbmNlbGxhYmxlKCkpIHtcbiAgICAgICAgdGhpcy5fc2V0Q2FuY2VsbGFibGUoKTtcbiAgICAgICAgdGhpcy5fY2FuY2VsbGF0aW9uUGFyZW50ID0gcGFyZW50O1xuICAgIH1cbiAgICBpZiAoKGZsYWdzICYgNCkgPiAwKSB7XG4gICAgICAgIHRoaXMuX3NldEJvdW5kVG8ocGFyZW50Ll9ib3VuZFRvKTtcbiAgICB9XG4gICAgaWYgKChmbGFncyAmIDIpID4gMCkge1xuICAgICAgICB0aGlzLl9zZXRUcmFjZShwYXJlbnQpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9mdWxmaWxsID0gZnVuY3Rpb24gUHJvbWlzZSRfZnVsZmlsbCh2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9pc0ZvbGxvd2luZ09yRnVsZmlsbGVkT3JSZWplY3RlZCgpKSByZXR1cm47XG4gICAgdGhpcy5fZnVsZmlsbFVuY2hlY2tlZCh2YWx1ZSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcmVqZWN0ID1cbmZ1bmN0aW9uIFByb21pc2UkX3JlamVjdChyZWFzb24sIGNhcnJpZWRTdGFja1RyYWNlKSB7XG4gICAgaWYgKHRoaXMuX2lzRm9sbG93aW5nT3JGdWxmaWxsZWRPclJlamVjdGVkKCkpIHJldHVybjtcbiAgICB0aGlzLl9yZWplY3RVbmNoZWNrZWQocmVhc29uLCBjYXJyaWVkU3RhY2tUcmFjZSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0dGxlUHJvbWlzZUF0ID0gZnVuY3Rpb24gUHJvbWlzZSRfc2V0dGxlUHJvbWlzZUF0KGluZGV4KSB7XG4gICAgdmFyIGhhbmRsZXIgPSB0aGlzLmlzRnVsZmlsbGVkKClcbiAgICAgICAgPyB0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXJBdChpbmRleClcbiAgICAgICAgOiB0aGlzLl9yZWplY3Rpb25IYW5kbGVyQXQoaW5kZXgpO1xuXG4gICAgdmFyIHZhbHVlID0gdGhpcy5fc2V0dGxlZFZhbHVlO1xuICAgIHZhciByZWNlaXZlciA9IHRoaXMuX3JlY2VpdmVyQXQoaW5kZXgpO1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5fcHJvbWlzZUF0KGluZGV4KTtcblxuICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRoaXMuX3NldHRsZVByb21pc2VGcm9tSGFuZGxlcihoYW5kbGVyLCByZWNlaXZlciwgdmFsdWUsIHByb21pc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBkb25lID0gZmFsc2U7XG4gICAgICAgIHZhciBpc0Z1bGZpbGxlZCA9IHRoaXMuaXNGdWxmaWxsZWQoKTtcbiAgICAgICAgaWYgKHJlY2VpdmVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGlmIChyZWNlaXZlciBpbnN0YW5jZW9mIFByb21pc2UgJiZcbiAgICAgICAgICAgICAgICByZWNlaXZlci5faXNQcm94aWVkKCkpIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlci5fdW5zZXRQcm94aWVkKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNGdWxmaWxsZWQpIHJlY2VpdmVyLl9mdWxmaWxsVW5jaGVja2VkKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBlbHNlIHJlY2VpdmVyLl9yZWplY3RVbmNoZWNrZWQodmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dldENhcnJpZWRTdGFja1RyYWNlKCkpO1xuICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWNlaXZlciBpbnN0YW5jZW9mIFByb21pc2VBcnJheSkge1xuICAgICAgICAgICAgICAgIGlmIChpc0Z1bGZpbGxlZCkgcmVjZWl2ZXIuX3Byb21pc2VGdWxmaWxsZWQodmFsdWUsIHByb21pc2UpO1xuICAgICAgICAgICAgICAgIGVsc2UgcmVjZWl2ZXIuX3Byb21pc2VSZWplY3RlZCh2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc0Z1bGZpbGxlZCkgcHJvbWlzZS5fZnVsZmlsbCh2YWx1ZSk7XG4gICAgICAgICAgICBlbHNlIHByb21pc2UuX3JlamVjdCh2YWx1ZSwgdGhpcy5fZ2V0Q2FycmllZFN0YWNrVHJhY2UoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPj0gNCkge1xuICAgICAgICB0aGlzLl9xdWV1ZUdDKCk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2lzUHJveGllZCA9IGZ1bmN0aW9uIFByb21pc2UkX2lzUHJveGllZCgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgNDE5NDMwNCkgPT09IDQxOTQzMDQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0UHJveGllZCA9IGZ1bmN0aW9uIFByb21pc2UkX3NldFByb3hpZWQoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDQxOTQzMDQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fdW5zZXRQcm94aWVkID0gZnVuY3Rpb24gUHJvbWlzZSRfdW5zZXRQcm94aWVkKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgJiAofjQxOTQzMDQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2lzR2NRdWV1ZWQgPSBmdW5jdGlvbiBQcm9taXNlJF9pc0djUXVldWVkKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiAtMTA3Mzc0MTgyNCkgPT09IC0xMDczNzQxODI0O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldEdjUXVldWVkID0gZnVuY3Rpb24gUHJvbWlzZSRfc2V0R2NRdWV1ZWQoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IC0xMDczNzQxODI0O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Vuc2V0R2NRdWV1ZWQgPSBmdW5jdGlvbiBQcm9taXNlJF91bnNldEdjUXVldWVkKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgJiAofi0xMDczNzQxODI0KTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9xdWV1ZUdDID0gZnVuY3Rpb24gUHJvbWlzZSRfcXVldWVHQygpIHtcbiAgICBpZiAodGhpcy5faXNHY1F1ZXVlZCgpKSByZXR1cm47XG4gICAgdGhpcy5fc2V0R2NRdWV1ZWQoKTtcbiAgICBhc3luYy5pbnZva2VMYXRlcih0aGlzLl9nYywgdGhpcywgdm9pZCAwKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9nYyA9IGZ1bmN0aW9uIFByb21pc2UkZ2MoKSB7XG4gICAgdmFyIGxlbiA9IHRoaXMuX2xlbmd0aCgpICogNSAtIDU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBkZWxldGUgdGhpc1tpXTtcbiAgICB9XG4gICAgdGhpcy5fY2xlYXJGaXJzdEhhbmRsZXJEYXRhKCk7XG4gICAgdGhpcy5fc2V0TGVuZ3RoKDApO1xuICAgIHRoaXMuX3Vuc2V0R2NRdWV1ZWQoKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9jbGVhckZpcnN0SGFuZGxlckRhdGEgPVxuZnVuY3Rpb24gUHJvbWlzZSRfY2xlYXJGaXJzdEhhbmRsZXJEYXRhKCkge1xuICAgIHRoaXMuX2Z1bGZpbGxtZW50SGFuZGxlcjAgPSB2b2lkIDA7XG4gICAgdGhpcy5fcmVqZWN0aW9uSGFuZGxlcjAgPSB2b2lkIDA7XG4gICAgdGhpcy5fcHJvbWlzZTAgPSB2b2lkIDA7XG4gICAgdGhpcy5fcmVjZWl2ZXIwID0gdm9pZCAwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3F1ZXVlU2V0dGxlQXQgPSBmdW5jdGlvbiBQcm9taXNlJF9xdWV1ZVNldHRsZUF0KGluZGV4KSB7XG4gICAgaWYgKHRoaXMuX2lzUmVqZWN0aW9uVW5oYW5kbGVkKCkpIHRoaXMuX3Vuc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQoKTtcbiAgICBhc3luYy5pbnZva2UodGhpcy5fc2V0dGxlUHJvbWlzZUF0LCB0aGlzLCBpbmRleCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fZnVsZmlsbFVuY2hlY2tlZCA9XG5mdW5jdGlvbiBQcm9taXNlJF9mdWxmaWxsVW5jaGVja2VkKHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmlzUGVuZGluZygpKSByZXR1cm47XG4gICAgaWYgKHZhbHVlID09PSB0aGlzKSB7XG4gICAgICAgIHZhciBlcnIgPSBtYWtlU2VsZlJlc29sdXRpb25FcnJvcigpO1xuICAgICAgICB0aGlzLl9hdHRhY2hFeHRyYVRyYWNlKGVycik7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWplY3RVbmNoZWNrZWQoZXJyLCB2b2lkIDApO1xuICAgIH1cbiAgICB0aGlzLl9jbGVhblZhbHVlcygpO1xuICAgIHRoaXMuX3NldEZ1bGZpbGxlZCgpO1xuICAgIHRoaXMuX3NldHRsZWRWYWx1ZSA9IHZhbHVlO1xuICAgIHZhciBsZW4gPSB0aGlzLl9sZW5ndGgoKTtcblxuICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgIGFzeW5jLmludm9rZSh0aGlzLl9zZXR0bGVQcm9taXNlcywgdGhpcywgbGVuKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcmVqZWN0VW5jaGVja2VkQ2hlY2tFcnJvciA9XG5mdW5jdGlvbiBQcm9taXNlJF9yZWplY3RVbmNoZWNrZWRDaGVja0Vycm9yKHJlYXNvbikge1xuICAgIHZhciB0cmFjZSA9IGNhbkF0dGFjaChyZWFzb24pID8gcmVhc29uIDogbmV3IEVycm9yKHJlYXNvbiArIFwiXCIpO1xuICAgIHRoaXMuX3JlamVjdFVuY2hlY2tlZChyZWFzb24sIHRyYWNlID09PSByZWFzb24gPyB2b2lkIDAgOiB0cmFjZSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcmVqZWN0VW5jaGVja2VkID1cbmZ1bmN0aW9uIFByb21pc2UkX3JlamVjdFVuY2hlY2tlZChyZWFzb24sIHRyYWNlKSB7XG4gICAgaWYgKCF0aGlzLmlzUGVuZGluZygpKSByZXR1cm47XG4gICAgaWYgKHJlYXNvbiA9PT0gdGhpcykge1xuICAgICAgICB2YXIgZXJyID0gbWFrZVNlbGZSZXNvbHV0aW9uRXJyb3IoKTtcbiAgICAgICAgdGhpcy5fYXR0YWNoRXh0cmFUcmFjZShlcnIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVqZWN0VW5jaGVja2VkKGVycik7XG4gICAgfVxuICAgIHRoaXMuX2NsZWFuVmFsdWVzKCk7XG4gICAgdGhpcy5fc2V0UmVqZWN0ZWQoKTtcbiAgICB0aGlzLl9zZXR0bGVkVmFsdWUgPSByZWFzb247XG5cbiAgICBpZiAodGhpcy5faXNGaW5hbCgpKSB7XG4gICAgICAgIGFzeW5jLmludm9rZUxhdGVyKHRocm93ZXIsIHZvaWQgMCwgdHJhY2UgPT09IHZvaWQgMCA/IHJlYXNvbiA6IHRyYWNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgbGVuID0gdGhpcy5fbGVuZ3RoKCk7XG5cbiAgICBpZiAodHJhY2UgIT09IHZvaWQgMCkgdGhpcy5fc2V0Q2FycmllZFN0YWNrVHJhY2UodHJhY2UpO1xuXG4gICAgaWYgKGxlbiA+IDApIHtcbiAgICAgICAgYXN5bmMuaW52b2tlKHRoaXMuX3JlamVjdFByb21pc2VzLCB0aGlzLCBudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9lbnN1cmVQb3NzaWJsZVJlamVjdGlvbkhhbmRsZWQoKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcmVqZWN0UHJvbWlzZXMgPSBmdW5jdGlvbiBQcm9taXNlJF9yZWplY3RQcm9taXNlcygpIHtcbiAgICB0aGlzLl9zZXR0bGVQcm9taXNlcygpO1xuICAgIHRoaXMuX3Vuc2V0Q2FycmllZFN0YWNrVHJhY2UoKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXR0bGVQcm9taXNlcyA9IGZ1bmN0aW9uIFByb21pc2UkX3NldHRsZVByb21pc2VzKCkge1xuICAgIHZhciBsZW4gPSB0aGlzLl9sZW5ndGgoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHRoaXMuX3NldHRsZVByb21pc2VBdChpKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fZW5zdXJlUG9zc2libGVSZWplY3Rpb25IYW5kbGVkID1cbmZ1bmN0aW9uIFByb21pc2UkX2Vuc3VyZVBvc3NpYmxlUmVqZWN0aW9uSGFuZGxlZCgpIHtcbiAgICB0aGlzLl9zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCgpO1xuICAgIGlmIChDYXB0dXJlZFRyYWNlLnBvc3NpYmx5VW5oYW5kbGVkUmVqZWN0aW9uICE9PSB2b2lkIDApIHtcbiAgICAgICAgYXN5bmMuaW52b2tlTGF0ZXIodGhpcy5fbm90aWZ5VW5oYW5kbGVkUmVqZWN0aW9uLCB0aGlzLCB2b2lkIDApO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9ub3RpZnlVbmhhbmRsZWRSZWplY3Rpb25Jc0hhbmRsZWQgPVxuZnVuY3Rpb24gUHJvbWlzZSRfbm90aWZ5VW5oYW5kbGVkUmVqZWN0aW9uSXNIYW5kbGVkKCkge1xuICAgIGlmICh0eXBlb2YgdW5oYW5kbGVkUmVqZWN0aW9uSGFuZGxlZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGFzeW5jLmludm9rZUxhdGVyKHVuaGFuZGxlZFJlamVjdGlvbkhhbmRsZWQsIHZvaWQgMCwgdGhpcyk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX25vdGlmeVVuaGFuZGxlZFJlamVjdGlvbiA9XG5mdW5jdGlvbiBQcm9taXNlJF9ub3RpZnlVbmhhbmRsZWRSZWplY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzUmVqZWN0aW9uVW5oYW5kbGVkKCkpIHtcbiAgICAgICAgdmFyIHJlYXNvbiA9IHRoaXMuX3NldHRsZWRWYWx1ZTtcbiAgICAgICAgdmFyIHRyYWNlID0gdGhpcy5fZ2V0Q2FycmllZFN0YWNrVHJhY2UoKTtcblxuICAgICAgICB0aGlzLl9zZXRVbmhhbmRsZWRSZWplY3Rpb25Jc05vdGlmaWVkKCk7XG5cbiAgICAgICAgaWYgKHRyYWNlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHRoaXMuX3Vuc2V0Q2FycmllZFN0YWNrVHJhY2UoKTtcbiAgICAgICAgICAgIHJlYXNvbiA9IHRyYWNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgQ2FwdHVyZWRUcmFjZS5wb3NzaWJseVVuaGFuZGxlZFJlamVjdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBDYXB0dXJlZFRyYWNlLnBvc3NpYmx5VW5oYW5kbGVkUmVqZWN0aW9uKHJlYXNvbiwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG52YXIgY29udGV4dFN0YWNrID0gW107XG5Qcm9taXNlLnByb3RvdHlwZS5fcGVla0NvbnRleHQgPSBmdW5jdGlvbiBQcm9taXNlJF9wZWVrQ29udGV4dCgpIHtcbiAgICB2YXIgbGFzdEluZGV4ID0gY29udGV4dFN0YWNrLmxlbmd0aCAtIDE7XG4gICAgaWYgKGxhc3RJbmRleCA+PSAwKSB7XG4gICAgICAgIHJldHVybiBjb250ZXh0U3RhY2tbbGFzdEluZGV4XTtcbiAgICB9XG4gICAgcmV0dXJuIHZvaWQgMDtcblxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3B1c2hDb250ZXh0ID0gZnVuY3Rpb24gUHJvbWlzZSRfcHVzaENvbnRleHQoKSB7XG4gICAgaWYgKCFkZWJ1Z2dpbmcpIHJldHVybjtcbiAgICBjb250ZXh0U3RhY2sucHVzaCh0aGlzKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9wb3BDb250ZXh0ID0gZnVuY3Rpb24gUHJvbWlzZSRfcG9wQ29udGV4dCgpIHtcbiAgICBpZiAoIWRlYnVnZ2luZykgcmV0dXJuO1xuICAgIGNvbnRleHRTdGFjay5wb3AoKTtcbn07XG5cblByb21pc2Uubm9Db25mbGljdCA9IGZ1bmN0aW9uIFByb21pc2UkTm9Db25mbGljdCgpIHtcbiAgICByZXR1cm4gbm9Db25mbGljdChQcm9taXNlKTtcbn07XG5cblByb21pc2Uuc2V0U2NoZWR1bGVyID0gZnVuY3Rpb24oZm4pIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJmbiBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gICAgYXN5bmMuX3NjaGVkdWxlID0gZm47XG59O1xuXG5pZiAoIUNhcHR1cmVkVHJhY2UuaXNTdXBwb3J0ZWQoKSkge1xuICAgIFByb21pc2UubG9uZ1N0YWNrVHJhY2VzID0gZnVuY3Rpb24oKXt9O1xuICAgIGRlYnVnZ2luZyA9IGZhbHNlO1xufVxuXG5Qcm9taXNlLl9tYWtlU2VsZlJlc29sdXRpb25FcnJvciA9IG1ha2VTZWxmUmVzb2x1dGlvbkVycm9yO1xucmVxdWlyZShcIi4vZmluYWxseS5qc1wiKShQcm9taXNlLCBORVhUX0ZJTFRFUiwgY2FzdCk7XG5yZXF1aXJlKFwiLi9kaXJlY3RfcmVzb2x2ZS5qc1wiKShQcm9taXNlKTtcbnJlcXVpcmUoXCIuL3N5bmNocm9ub3VzX2luc3BlY3Rpb24uanNcIikoUHJvbWlzZSk7XG5yZXF1aXJlKFwiLi9qb2luLmpzXCIpKFByb21pc2UsIFByb21pc2VBcnJheSwgY2FzdCwgSU5URVJOQUwpO1xuUHJvbWlzZS5SYW5nZUVycm9yID0gUmFuZ2VFcnJvcjtcblByb21pc2UuQ2FuY2VsbGF0aW9uRXJyb3IgPSBDYW5jZWxsYXRpb25FcnJvcjtcblByb21pc2UuVGltZW91dEVycm9yID0gVGltZW91dEVycm9yO1xuUHJvbWlzZS5UeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5Qcm9taXNlLk9wZXJhdGlvbmFsRXJyb3IgPSBPcGVyYXRpb25hbEVycm9yO1xuUHJvbWlzZS5SZWplY3Rpb25FcnJvciA9IE9wZXJhdGlvbmFsRXJyb3I7XG5Qcm9taXNlLkFnZ3JlZ2F0ZUVycm9yID0gZXJyb3JzLkFnZ3JlZ2F0ZUVycm9yO1xuXG51dGlsLnRvRmFzdFByb3BlcnRpZXMoUHJvbWlzZSk7XG51dGlsLnRvRmFzdFByb3BlcnRpZXMoUHJvbWlzZS5wcm90b3R5cGUpO1xuUHJvbWlzZS5Qcm9taXNlID0gUHJvbWlzZTtcbnJlcXVpcmUoJy4vdGltZXJzLmpzJykoUHJvbWlzZSxJTlRFUk5BTCxjYXN0KTtcbnJlcXVpcmUoJy4vcmFjZS5qcycpKFByb21pc2UsSU5URVJOQUwsY2FzdCk7XG5yZXF1aXJlKCcuL2NhbGxfZ2V0LmpzJykoUHJvbWlzZSk7XG5yZXF1aXJlKCcuL2dlbmVyYXRvcnMuanMnKShQcm9taXNlLGFwaVJlamVjdGlvbixJTlRFUk5BTCxjYXN0KTtcbnJlcXVpcmUoJy4vbWFwLmpzJykoUHJvbWlzZSxQcm9taXNlQXJyYXksYXBpUmVqZWN0aW9uLGNhc3QsSU5URVJOQUwpO1xucmVxdWlyZSgnLi9ub2RlaWZ5LmpzJykoUHJvbWlzZSk7XG5yZXF1aXJlKCcuL3Byb21pc2lmeS5qcycpKFByb21pc2UsSU5URVJOQUwpO1xucmVxdWlyZSgnLi9wcm9wcy5qcycpKFByb21pc2UsUHJvbWlzZUFycmF5LGNhc3QpO1xucmVxdWlyZSgnLi9yZWR1Y2UuanMnKShQcm9taXNlLFByb21pc2VBcnJheSxhcGlSZWplY3Rpb24sY2FzdCxJTlRFUk5BTCk7XG5yZXF1aXJlKCcuL3NldHRsZS5qcycpKFByb21pc2UsUHJvbWlzZUFycmF5KTtcbnJlcXVpcmUoJy4vc29tZS5qcycpKFByb21pc2UsUHJvbWlzZUFycmF5LGFwaVJlamVjdGlvbik7XG5yZXF1aXJlKCcuL3Byb2dyZXNzLmpzJykoUHJvbWlzZSxQcm9taXNlQXJyYXkpO1xucmVxdWlyZSgnLi9jYW5jZWwuanMnKShQcm9taXNlLElOVEVSTkFMKTtcbnJlcXVpcmUoJy4vZmlsdGVyLmpzJykoUHJvbWlzZSxJTlRFUk5BTCk7XG5yZXF1aXJlKCcuL2FueS5qcycpKFByb21pc2UsUHJvbWlzZUFycmF5KTtcbnJlcXVpcmUoJy4vZWFjaC5qcycpKFByb21pc2UsSU5URVJOQUwpO1xucmVxdWlyZSgnLi91c2luZy5qcycpKFByb21pc2UsYXBpUmVqZWN0aW9uLGNhc3QpO1xuXG5Qcm9taXNlLnByb3RvdHlwZSA9IFByb21pc2UucHJvdG90eXBlO1xucmV0dXJuIFByb21pc2U7XG5cbn07XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKCdfcHJvY2VzcycpKSIsIi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCwgY2FzdCkge1xudmFyIGNhbkF0dGFjaCA9IHJlcXVpcmUoXCIuL2Vycm9ycy5qc1wiKS5jYW5BdHRhY2g7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgaXNBcnJheSA9IHV0aWwuaXNBcnJheTtcblxuZnVuY3Rpb24gdG9SZXNvbHV0aW9uVmFsdWUodmFsKSB7XG4gICAgc3dpdGNoKHZhbCkge1xuICAgIGNhc2UgLTE6IHJldHVybiB2b2lkIDA7XG4gICAgY2FzZSAtMjogcmV0dXJuIFtdO1xuICAgIGNhc2UgLTM6IHJldHVybiB7fTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIFByb21pc2VBcnJheSh2YWx1ZXMpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgdmFyIHBhcmVudCA9IHZvaWQgMDtcbiAgICBpZiAodmFsdWVzIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBwYXJlbnQgPSB2YWx1ZXM7XG4gICAgICAgIHByb21pc2UuX3Byb3BhZ2F0ZUZyb20ocGFyZW50LCAxIHwgNCk7XG4gICAgfVxuICAgIHByb21pc2UuX3NldFRyYWNlKHBhcmVudCk7XG4gICAgdGhpcy5fdmFsdWVzID0gdmFsdWVzO1xuICAgIHRoaXMuX2xlbmd0aCA9IDA7XG4gICAgdGhpcy5fdG90YWxSZXNvbHZlZCA9IDA7XG4gICAgdGhpcy5faW5pdCh2b2lkIDAsIC0yKTtcbn1cblByb21pc2VBcnJheS5wcm90b3R5cGUubGVuZ3RoID0gZnVuY3Rpb24gUHJvbWlzZUFycmF5JGxlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGVuZ3RoO1xufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5wcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZUFycmF5JHByb21pc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb21pc2U7XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9pbml0ID1cbmZ1bmN0aW9uIFByb21pc2VBcnJheSRfaW5pdChfLCByZXNvbHZlVmFsdWVJZkVtcHR5KSB7XG4gICAgdmFyIHZhbHVlcyA9IGNhc3QodGhpcy5fdmFsdWVzLCB2b2lkIDApO1xuICAgIGlmICh2YWx1ZXMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlcyA9IHZhbHVlcztcbiAgICAgICAgdmFsdWVzLl9zZXRCb3VuZFRvKHRoaXMuX3Byb21pc2UuX2JvdW5kVG8pO1xuICAgICAgICBpZiAodmFsdWVzLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5fc2V0dGxlZFZhbHVlO1xuICAgICAgICAgICAgaWYgKCFpc0FycmF5KHZhbHVlcykpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXJyID0gbmV3IFByb21pc2UuVHlwZUVycm9yKFwiZXhwZWN0aW5nIGFuIGFycmF5LCBhIHByb21pc2Ugb3IgYSB0aGVuYWJsZVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9faGFyZFJlamVjdF9fKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlcy5pc1BlbmRpbmcoKSkge1xuICAgICAgICAgICAgdmFsdWVzLl90aGVuKFxuICAgICAgICAgICAgICAgIFByb21pc2VBcnJheSRfaW5pdCxcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWplY3QsXG4gICAgICAgICAgICAgICAgdm9pZCAwLFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZVZhbHVlSWZFbXB0eVxuICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWVzLl91bnNldFJlamVjdGlvbklzVW5oYW5kbGVkKCk7XG4gICAgICAgICAgICB0aGlzLl9yZWplY3QodmFsdWVzLl9zZXR0bGVkVmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSBlbHNlIGlmICghaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICAgIHZhciBlcnIgPSBuZXcgUHJvbWlzZS5UeXBlRXJyb3IoXCJleHBlY3RpbmcgYW4gYXJyYXksIGEgcHJvbWlzZSBvciBhIHRoZW5hYmxlXCIpO1xuICAgICAgICB0aGlzLl9faGFyZFJlamVjdF9fKGVycik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpZiAocmVzb2x2ZVZhbHVlSWZFbXB0eSA9PT0gLTUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmVFbXB0eUFycmF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlKHRvUmVzb2x1dGlvblZhbHVlKHJlc29sdmVWYWx1ZUlmRW1wdHkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBsZW4gPSB0aGlzLmdldEFjdHVhbExlbmd0aCh2YWx1ZXMubGVuZ3RoKTtcbiAgICB2YXIgbmV3TGVuID0gbGVuO1xuICAgIHZhciBuZXdWYWx1ZXMgPSB0aGlzLnNob3VsZENvcHlWYWx1ZXMoKSA/IG5ldyBBcnJheShsZW4pIDogdGhpcy5fdmFsdWVzO1xuICAgIHZhciBpc0RpcmVjdFNjYW5OZWVkZWQgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0KHZhbHVlc1tpXSwgdm9pZCAwKTtcbiAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIGlmIChtYXliZVByb21pc2UuaXNQZW5kaW5nKCkpIHtcbiAgICAgICAgICAgICAgICBtYXliZVByb21pc2UuX3Byb3h5UHJvbWlzZUFycmF5KHRoaXMsIGkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtYXliZVByb21pc2UuX3Vuc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQoKTtcbiAgICAgICAgICAgICAgICBpc0RpcmVjdFNjYW5OZWVkZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNEaXJlY3RTY2FuTmVlZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBuZXdWYWx1ZXNbaV0gPSBtYXliZVByb21pc2U7XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlcyA9IG5ld1ZhbHVlcztcbiAgICB0aGlzLl9sZW5ndGggPSBuZXdMZW47XG4gICAgaWYgKGlzRGlyZWN0U2Nhbk5lZWRlZCkge1xuICAgICAgICB0aGlzLl9zY2FuRGlyZWN0VmFsdWVzKGxlbik7XG4gICAgfVxufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fc2V0dGxlUHJvbWlzZUF0ID1cbmZ1bmN0aW9uIFByb21pc2VBcnJheSRfc2V0dGxlUHJvbWlzZUF0KGluZGV4KSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5fdmFsdWVzW2luZGV4XTtcbiAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpKSB7XG4gICAgICAgIHRoaXMuX3Byb21pc2VGdWxmaWxsZWQodmFsdWUsIGluZGV4KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgdGhpcy5fcHJvbWlzZUZ1bGZpbGxlZCh2YWx1ZS5fc2V0dGxlZFZhbHVlLCBpbmRleCk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZS5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgdGhpcy5fcHJvbWlzZVJlamVjdGVkKHZhbHVlLl9zZXR0bGVkVmFsdWUsIGluZGV4KTtcbiAgICB9XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9zY2FuRGlyZWN0VmFsdWVzID1cbmZ1bmN0aW9uIFByb21pc2VBcnJheSRfc2NhbkRpcmVjdFZhbHVlcyhsZW4pIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1Jlc29sdmVkKCkpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NldHRsZVByb21pc2VBdChpKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9pc1Jlc29sdmVkID0gZnVuY3Rpb24gUHJvbWlzZUFycmF5JF9pc1Jlc29sdmVkKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZXMgPT09IG51bGw7XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9yZXNvbHZlID0gZnVuY3Rpb24gUHJvbWlzZUFycmF5JF9yZXNvbHZlKHZhbHVlKSB7XG4gICAgdGhpcy5fdmFsdWVzID0gbnVsbDtcbiAgICB0aGlzLl9wcm9taXNlLl9mdWxmaWxsKHZhbHVlKTtcbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuX19oYXJkUmVqZWN0X18gPVxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcmVqZWN0ID0gZnVuY3Rpb24gUHJvbWlzZUFycmF5JF9yZWplY3QocmVhc29uKSB7XG4gICAgdGhpcy5fdmFsdWVzID0gbnVsbDtcbiAgICB2YXIgdHJhY2UgPSBjYW5BdHRhY2gocmVhc29uKSA/IHJlYXNvbiA6IG5ldyBFcnJvcihyZWFzb24gKyBcIlwiKTtcbiAgICB0aGlzLl9wcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHRyYWNlKTtcbiAgICB0aGlzLl9wcm9taXNlLl9yZWplY3QocmVhc29uLCB0cmFjZSk7XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlUHJvZ3Jlc3NlZCA9XG5mdW5jdGlvbiBQcm9taXNlQXJyYXkkX3Byb21pc2VQcm9ncmVzc2VkKHByb2dyZXNzVmFsdWUsIGluZGV4KSB7XG4gICAgaWYgKHRoaXMuX2lzUmVzb2x2ZWQoKSkgcmV0dXJuO1xuICAgIHRoaXMuX3Byb21pc2UuX3Byb2dyZXNzKHtcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICB2YWx1ZTogcHJvZ3Jlc3NWYWx1ZVxuICAgIH0pO1xufTtcblxuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlRnVsZmlsbGVkID1cbmZ1bmN0aW9uIFByb21pc2VBcnJheSRfcHJvbWlzZUZ1bGZpbGxlZCh2YWx1ZSwgaW5kZXgpIHtcbiAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm47XG4gICAgdGhpcy5fdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgIHZhciB0b3RhbFJlc29sdmVkID0gKyt0aGlzLl90b3RhbFJlc29sdmVkO1xuICAgIGlmICh0b3RhbFJlc29sdmVkID49IHRoaXMuX2xlbmd0aCkge1xuICAgICAgICB0aGlzLl9yZXNvbHZlKHRoaXMuX3ZhbHVlcyk7XG4gICAgfVxufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZVJlamVjdGVkID1cbmZ1bmN0aW9uIFByb21pc2VBcnJheSRfcHJvbWlzZVJlamVjdGVkKHJlYXNvbiwgaW5kZXgpIHtcbiAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm47XG4gICAgdGhpcy5fdG90YWxSZXNvbHZlZCsrO1xuICAgIHRoaXMuX3JlamVjdChyZWFzb24pO1xufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5zaG91bGRDb3B5VmFsdWVzID1cbmZ1bmN0aW9uIFByb21pc2VBcnJheSRfc2hvdWxkQ29weVZhbHVlcygpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuZ2V0QWN0dWFsTGVuZ3RoID1cbmZ1bmN0aW9uIFByb21pc2VBcnJheSRnZXRBY3R1YWxMZW5ndGgobGVuKSB7XG4gICAgcmV0dXJuIGxlbjtcbn07XG5cbnJldHVybiBQcm9taXNlQXJyYXk7XG59O1xuIiwiLyoqXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgbWF5YmVXcmFwQXNFcnJvciA9IHV0aWwubWF5YmVXcmFwQXNFcnJvcjtcbnZhciBlcnJvcnMgPSByZXF1aXJlKFwiLi9lcnJvcnMuanNcIik7XG52YXIgVGltZW91dEVycm9yID0gZXJyb3JzLlRpbWVvdXRFcnJvcjtcbnZhciBPcGVyYXRpb25hbEVycm9yID0gZXJyb3JzLk9wZXJhdGlvbmFsRXJyb3I7XG52YXIgYXN5bmMgPSByZXF1aXJlKFwiLi9hc3luYy5qc1wiKTtcbnZhciBoYXZlR2V0dGVycyA9IHV0aWwuaGF2ZUdldHRlcnM7XG52YXIgZXM1ID0gcmVxdWlyZShcIi4vZXM1LmpzXCIpO1xuXG5mdW5jdGlvbiBpc1VudHlwZWRFcnJvcihvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRXJyb3IgJiZcbiAgICAgICAgZXM1LmdldFByb3RvdHlwZU9mKG9iaikgPT09IEVycm9yLnByb3RvdHlwZTtcbn1cblxuZnVuY3Rpb24gd3JhcEFzT3BlcmF0aW9uYWxFcnJvcihvYmopIHtcbiAgICB2YXIgcmV0O1xuICAgIGlmIChpc1VudHlwZWRFcnJvcihvYmopKSB7XG4gICAgICAgIHJldCA9IG5ldyBPcGVyYXRpb25hbEVycm9yKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0ID0gb2JqO1xuICAgIH1cbiAgICBlcnJvcnMubWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uKHJldCk7XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gbm9kZWJhY2tGb3JQcm9taXNlKHByb21pc2UpIHtcbiAgICBmdW5jdGlvbiBQcm9taXNlUmVzb2x2ZXIkX2NhbGxiYWNrKGVyciwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHByb21pc2UgPT09IG51bGwpIHJldHVybjtcblxuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICB2YXIgd3JhcHBlZCA9IHdyYXBBc09wZXJhdGlvbmFsRXJyb3IobWF5YmVXcmFwQXNFcnJvcihlcnIpKTtcbiAgICAgICAgICAgIHByb21pc2UuX2F0dGFjaEV4dHJhVHJhY2Uod3JhcHBlZCk7XG4gICAgICAgICAgICBwcm9taXNlLl9yZWplY3Qod3JhcHBlZCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIHZhciAkX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGg7dmFyIGFyZ3MgPSBuZXcgQXJyYXkoJF9sZW4gLSAxKTsgZm9yKHZhciAkX2kgPSAxOyAkX2kgPCAkX2xlbjsgKyskX2kpIHthcmdzWyRfaSAtIDFdID0gYXJndW1lbnRzWyRfaV07fVxuICAgICAgICAgICAgcHJvbWlzZS5fZnVsZmlsbChhcmdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb21pc2UuX2Z1bGZpbGwodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlUmVzb2x2ZXIkX2NhbGxiYWNrO1xufVxuXG5cbnZhciBQcm9taXNlUmVzb2x2ZXI7XG5pZiAoIWhhdmVHZXR0ZXJzKSB7XG4gICAgUHJvbWlzZVJlc29sdmVyID0gZnVuY3Rpb24gUHJvbWlzZVJlc29sdmVyKHByb21pc2UpIHtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICAgICAgdGhpcy5hc0NhbGxiYWNrID0gbm9kZWJhY2tGb3JQcm9taXNlKHByb21pc2UpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gdGhpcy5hc0NhbGxiYWNrO1xuICAgIH07XG59XG5lbHNlIHtcbiAgICBQcm9taXNlUmVzb2x2ZXIgPSBmdW5jdGlvbiBQcm9taXNlUmVzb2x2ZXIocHJvbWlzZSkge1xuICAgICAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIH07XG59XG5pZiAoaGF2ZUdldHRlcnMpIHtcbiAgICB2YXIgcHJvcCA9IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlYmFja0ZvclByb21pc2UodGhpcy5wcm9taXNlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZXM1LmRlZmluZVByb3BlcnR5KFByb21pc2VSZXNvbHZlci5wcm90b3R5cGUsIFwiYXNDYWxsYmFja1wiLCBwcm9wKTtcbiAgICBlczUuZGVmaW5lUHJvcGVydHkoUHJvbWlzZVJlc29sdmVyLnByb3RvdHlwZSwgXCJjYWxsYmFja1wiLCBwcm9wKTtcbn1cblxuUHJvbWlzZVJlc29sdmVyLl9ub2RlYmFja0ZvclByb21pc2UgPSBub2RlYmFja0ZvclByb21pc2U7XG5cblByb21pc2VSZXNvbHZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiBQcm9taXNlUmVzb2x2ZXIkdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBQcm9taXNlUmVzb2x2ZXJdXCI7XG59O1xuXG5Qcm9taXNlUmVzb2x2ZXIucHJvdG90eXBlLnJlc29sdmUgPVxuUHJvbWlzZVJlc29sdmVyLnByb3RvdHlwZS5mdWxmaWxsID0gZnVuY3Rpb24gUHJvbWlzZVJlc29sdmVyJHJlc29sdmUodmFsdWUpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUHJvbWlzZVJlc29sdmVyKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSWxsZWdhbCBpbnZvY2F0aW9uLCByZXNvbHZlciByZXNvbHZlL3JlamVjdCBtdXN0IGJlIGNhbGxlZCB3aXRoaW4gYSByZXNvbHZlciBjb250ZXh0LiBDb25zaWRlciB1c2luZyB0aGUgcHJvbWlzZSBjb25zdHJ1Y3RvciBpbnN0ZWFkLlwiKTtcbiAgICB9XG5cbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMucHJvbWlzZTtcbiAgICBpZiAocHJvbWlzZS5fdHJ5Rm9sbG93KHZhbHVlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGFzeW5jLmludm9rZShwcm9taXNlLl9mdWxmaWxsLCBwcm9taXNlLCB2YWx1ZSk7XG59O1xuXG5Qcm9taXNlUmVzb2x2ZXIucHJvdG90eXBlLnJlamVjdCA9IGZ1bmN0aW9uIFByb21pc2VSZXNvbHZlciRyZWplY3QocmVhc29uKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb21pc2VSZXNvbHZlcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIklsbGVnYWwgaW52b2NhdGlvbiwgcmVzb2x2ZXIgcmVzb2x2ZS9yZWplY3QgbXVzdCBiZSBjYWxsZWQgd2l0aGluIGEgcmVzb2x2ZXIgY29udGV4dC4gQ29uc2lkZXIgdXNpbmcgdGhlIHByb21pc2UgY29uc3RydWN0b3IgaW5zdGVhZC5cIik7XG4gICAgfVxuXG4gICAgdmFyIHByb21pc2UgPSB0aGlzLnByb21pc2U7XG4gICAgZXJyb3JzLm1hcmtBc09yaWdpbmF0aW5nRnJvbVJlamVjdGlvbihyZWFzb24pO1xuICAgIHZhciB0cmFjZSA9IGVycm9ycy5jYW5BdHRhY2gocmVhc29uKSA/IHJlYXNvbiA6IG5ldyBFcnJvcihyZWFzb24gKyBcIlwiKTtcbiAgICBwcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHRyYWNlKTtcbiAgICBhc3luYy5pbnZva2UocHJvbWlzZS5fcmVqZWN0LCBwcm9taXNlLCByZWFzb24pO1xuICAgIGlmICh0cmFjZSAhPT0gcmVhc29uKSB7XG4gICAgICAgIGFzeW5jLmludm9rZSh0aGlzLl9zZXRDYXJyaWVkU3RhY2tUcmFjZSwgdGhpcywgdHJhY2UpO1xuICAgIH1cbn07XG5cblByb21pc2VSZXNvbHZlci5wcm90b3R5cGUucHJvZ3Jlc3MgPVxuZnVuY3Rpb24gUHJvbWlzZVJlc29sdmVyJHByb2dyZXNzKHZhbHVlKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFByb21pc2VSZXNvbHZlcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIklsbGVnYWwgaW52b2NhdGlvbiwgcmVzb2x2ZXIgcmVzb2x2ZS9yZWplY3QgbXVzdCBiZSBjYWxsZWQgd2l0aGluIGEgcmVzb2x2ZXIgY29udGV4dC4gQ29uc2lkZXIgdXNpbmcgdGhlIHByb21pc2UgY29uc3RydWN0b3IgaW5zdGVhZC5cIik7XG4gICAgfVxuICAgIGFzeW5jLmludm9rZSh0aGlzLnByb21pc2UuX3Byb2dyZXNzLCB0aGlzLnByb21pc2UsIHZhbHVlKTtcbn07XG5cblByb21pc2VSZXNvbHZlci5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24gUHJvbWlzZVJlc29sdmVyJGNhbmNlbCgpIHtcbiAgICBhc3luYy5pbnZva2UodGhpcy5wcm9taXNlLmNhbmNlbCwgdGhpcy5wcm9taXNlLCB2b2lkIDApO1xufTtcblxuUHJvbWlzZVJlc29sdmVyLnByb3RvdHlwZS50aW1lb3V0ID0gZnVuY3Rpb24gUHJvbWlzZVJlc29sdmVyJHRpbWVvdXQoKSB7XG4gICAgdGhpcy5yZWplY3QobmV3IFRpbWVvdXRFcnJvcihcInRpbWVvdXRcIikpO1xufTtcblxuUHJvbWlzZVJlc29sdmVyLnByb3RvdHlwZS5pc1Jlc29sdmVkID0gZnVuY3Rpb24gUHJvbWlzZVJlc29sdmVyJGlzUmVzb2x2ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvbWlzZS5pc1Jlc29sdmVkKCk7XG59O1xuXG5Qcm9taXNlUmVzb2x2ZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIFByb21pc2VSZXNvbHZlciR0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvbWlzZS50b0pTT04oKTtcbn07XG5cblByb21pc2VSZXNvbHZlci5wcm90b3R5cGUuX3NldENhcnJpZWRTdGFja1RyYWNlID1cbmZ1bmN0aW9uIFByb21pc2VSZXNvbHZlciRfc2V0Q2FycmllZFN0YWNrVHJhY2UodHJhY2UpIHtcbiAgICBpZiAodGhpcy5wcm9taXNlLmlzUmVqZWN0ZWQoKSkge1xuICAgICAgICB0aGlzLnByb21pc2UuX3NldENhcnJpZWRTdGFja1RyYWNlKHRyYWNlKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2VSZXNvbHZlcjtcbiIsIi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCkge1xudmFyIFRISVMgPSB7fTtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKTtcbnZhciBub2RlYmFja0ZvclByb21pc2UgPSByZXF1aXJlKFwiLi9wcm9taXNlX3Jlc29sdmVyLmpzXCIpXG4gICAgLl9ub2RlYmFja0ZvclByb21pc2U7XG52YXIgd2l0aEFwcGVuZGVkID0gdXRpbC53aXRoQXBwZW5kZWQ7XG52YXIgbWF5YmVXcmFwQXNFcnJvciA9IHV0aWwubWF5YmVXcmFwQXNFcnJvcjtcbnZhciBjYW5FdmFsdWF0ZSA9IHV0aWwuY2FuRXZhbHVhdGU7XG52YXIgVHlwZUVycm9yID0gcmVxdWlyZShcIi4vZXJyb3JzXCIpLlR5cGVFcnJvcjtcbnZhciBkZWZhdWx0U3VmZml4ID0gXCJBc3luY1wiO1xudmFyIGRlZmF1bHRGaWx0ZXIgPSBmdW5jdGlvbihuYW1lLCBmdW5jKSB7XG4gICAgcmV0dXJuIHV0aWwuaXNJZGVudGlmaWVyKG5hbWUpICYmXG4gICAgICAgIG5hbWUuY2hhckF0KDApICE9PSBcIl9cIiAmJlxuICAgICAgICAhdXRpbC5pc0NsYXNzKGZ1bmMpO1xufTtcbnZhciBkZWZhdWx0UHJvbWlzaWZpZWQgPSB7X19pc1Byb21pc2lmaWVkX186IHRydWV9O1xuXG5cbmZ1bmN0aW9uIGVzY2FwZUlkZW50UmVnZXgoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWyRdKS8sIFwiXFxcXCRcIik7XG59XG5cbmZ1bmN0aW9uIGlzUHJvbWlzaWZpZWQoZm4pIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZm4uX19pc1Byb21pc2lmaWVkX18gPT09IHRydWU7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhc1Byb21pc2lmaWVkKG9iaiwga2V5LCBzdWZmaXgpIHtcbiAgICB2YXIgdmFsID0gdXRpbC5nZXREYXRhUHJvcGVydHlPckRlZmF1bHQob2JqLCBrZXkgKyBzdWZmaXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRQcm9taXNpZmllZCk7XG4gICAgcmV0dXJuIHZhbCA/IGlzUHJvbWlzaWZpZWQodmFsKSA6IGZhbHNlO1xufVxuZnVuY3Rpb24gY2hlY2tWYWxpZChyZXQsIHN1ZmZpeCwgc3VmZml4UmVnZXhwKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgdmFyIGtleSA9IHJldFtpXTtcbiAgICAgICAgaWYgKHN1ZmZpeFJlZ2V4cC50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgIHZhciBrZXlXaXRob3V0QXN5bmNTdWZmaXggPSBrZXkucmVwbGFjZShzdWZmaXhSZWdleHAsIFwiXCIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZXQubGVuZ3RoOyBqICs9IDIpIHtcbiAgICAgICAgICAgICAgICBpZiAocmV0W2pdID09PSBrZXlXaXRob3V0QXN5bmNTdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBwcm9taXNpZnkgYW4gQVBJIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGhhdCBoYXMgbm9ybWFsIG1ldGhvZHMgd2l0aCAnXCIrc3VmZml4K1wiJy1zdWZmaXhcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwcm9taXNpZmlhYmxlTWV0aG9kcyhvYmosIHN1ZmZpeCwgc3VmZml4UmVnZXhwLCBmaWx0ZXIpIHtcbiAgICB2YXIga2V5cyA9IHV0aWwuaW5oZXJpdGVkRGF0YUtleXMob2JqKTtcbiAgICB2YXIgcmV0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICB2YXIgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgICAgICAhaXNQcm9taXNpZmllZCh2YWx1ZSkgJiZcbiAgICAgICAgICAgICFoYXNQcm9taXNpZmllZChvYmosIGtleSwgc3VmZml4KSAmJlxuICAgICAgICAgICAgZmlsdGVyKGtleSwgdmFsdWUsIG9iaikpIHtcbiAgICAgICAgICAgIHJldC5wdXNoKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrVmFsaWQocmV0LCBzdWZmaXgsIHN1ZmZpeFJlZ2V4cCk7XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gc3dpdGNoQ2FzZUFyZ3VtZW50T3JkZXIobGlrZWx5QXJndW1lbnRDb3VudCkge1xuICAgIHZhciByZXQgPSBbbGlrZWx5QXJndW1lbnRDb3VudF07XG4gICAgdmFyIG1pbiA9IE1hdGgubWF4KDAsIGxpa2VseUFyZ3VtZW50Q291bnQgLSAxIC0gNSk7XG4gICAgZm9yKHZhciBpID0gbGlrZWx5QXJndW1lbnRDb3VudCAtIDE7IGkgPj0gbWluOyAtLWkpIHtcbiAgICAgICAgaWYgKGkgPT09IGxpa2VseUFyZ3VtZW50Q291bnQpIGNvbnRpbnVlO1xuICAgICAgICByZXQucHVzaChpKTtcbiAgICB9XG4gICAgZm9yKHZhciBpID0gbGlrZWx5QXJndW1lbnRDb3VudCArIDE7IGkgPD0gNTsgKytpKSB7XG4gICAgICAgIHJldC5wdXNoKGkpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBhcmd1bWVudFNlcXVlbmNlKGFyZ3VtZW50Q291bnQpIHtcbiAgICByZXR1cm4gdXRpbC5maWxsZWRSYW5nZShhcmd1bWVudENvdW50LCBcImFyZ3VtZW50c1tcIiwgXCJdXCIpO1xufVxuXG5mdW5jdGlvbiBwYXJhbWV0ZXJEZWNsYXJhdGlvbihwYXJhbWV0ZXJDb3VudCkge1xuICAgIHJldHVybiB1dGlsLmZpbGxlZFJhbmdlKHBhcmFtZXRlckNvdW50LCBcIl9hcmdcIiwgXCJcIik7XG59XG5cbmZ1bmN0aW9uIHBhcmFtZXRlckNvdW50KGZuKSB7XG4gICAgaWYgKHR5cGVvZiBmbi5sZW5ndGggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKGZuLmxlbmd0aCwgMTAyMyArIDEpLCAwKTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJvcGVydHlBY2Nlc3Moa2V5KSB7XG4gICAgaWYgKHV0aWwuaXNJZGVudGlmaWVyKGtleSkpIHtcbiAgICAgICAgcmV0dXJuIFwiLlwiICsga2V5O1xuICAgIH1cbiAgICBlbHNlIHJldHVybiBcIlsnXCIgKyBrZXkucmVwbGFjZSgvKFsnXFxcXF0pL2csIFwiXFxcXCQxXCIpICsgXCInXVwiO1xufVxuXG5mdW5jdGlvbiBtYWtlTm9kZVByb21pc2lmaWVkRXZhbChjYWxsYmFjaywgcmVjZWl2ZXIsIG9yaWdpbmFsTmFtZSwgZm4sIHN1ZmZpeCkge1xuICAgIHZhciBuZXdQYXJhbWV0ZXJDb3VudCA9IE1hdGgubWF4KDAsIHBhcmFtZXRlckNvdW50KGZuKSAtIDEpO1xuICAgIHZhciBhcmd1bWVudE9yZGVyID0gc3dpdGNoQ2FzZUFyZ3VtZW50T3JkZXIobmV3UGFyYW1ldGVyQ291bnQpO1xuICAgIHZhciBjYWxsYmFja05hbWUgPVxuICAgICAgICAodHlwZW9mIG9yaWdpbmFsTmFtZSA9PT0gXCJzdHJpbmdcIiAmJiB1dGlsLmlzSWRlbnRpZmllcihvcmlnaW5hbE5hbWUpXG4gICAgICAgICAgICA/IG9yaWdpbmFsTmFtZSArIHN1ZmZpeFxuICAgICAgICAgICAgOiBcInByb21pc2lmaWVkXCIpO1xuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDYWxsRm9yQXJndW1lbnRDb3VudChjb3VudCkge1xuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50U2VxdWVuY2UoY291bnQpLmpvaW4oXCIsIFwiKTtcbiAgICAgICAgdmFyIGNvbW1hID0gY291bnQgPiAwID8gXCIsIFwiIDogXCJcIjtcbiAgICAgICAgdmFyIHJldDtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0ID0gXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZCh7e2FyZ3N9fSwgZm4pOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFwiLnJlcGxhY2UoXCIubWV0aG9kXCIsIGdlbmVyYXRlUHJvcGVydHlBY2Nlc3MoY2FsbGJhY2spKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZWNlaXZlciA9PT0gVEhJUykge1xuICAgICAgICAgICAgcmV0ID0gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIHt7YXJnc319LCBmbik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFwiO1xuICAgICAgICB9IGVsc2UgaWYgKHJlY2VpdmVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHJldCA9ICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChyZWNlaXZlciwge3thcmdzfX0sIGZuKTsgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldCA9ICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soe3thcmdzfX0sIGZuKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0LnJlcGxhY2UoXCJ7e2FyZ3N9fVwiLCBhcmdzKS5yZXBsYWNlKFwiLCBcIiwgY29tbWEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQXJndW1lbnRTd2l0Y2hDYXNlKCkge1xuICAgICAgICB2YXIgcmV0ID0gXCJcIjtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50T3JkZXIubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHJldCArPSBcImNhc2UgXCIgKyBhcmd1bWVudE9yZGVyW2ldICtcIjpcIiArXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVDYWxsRm9yQXJndW1lbnRDb3VudChhcmd1bWVudE9yZGVyW2ldKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29kZUZvckNhbGw7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGNvZGVGb3JDYWxsID0gXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eS5hcHBseSh0aGlzLCBhcmdzKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKFwiLnByb3BlcnR5XCIsIGdlbmVyYXRlUHJvcGVydHlBY2Nlc3MoY2FsbGJhY2spKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZWNlaXZlciA9PT0gVEhJUykge1xuICAgICAgICAgICAgY29kZUZvckNhbGwgPSBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmdzKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29kZUZvckNhbGwgPSBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShyZWNlaXZlciwgYXJncyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0ICs9IFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIGRlZmF1bHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShsZW4gKyAxKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB2YXIgaSA9IDA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBhcmdzW2ldID0gZm47ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBbQ29kZUZvckNhbGxdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIFwiLnJlcGxhY2UoXCJbQ29kZUZvckNhbGxdXCIsIGNvZGVGb3JDYWxsKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKFwiUHJvbWlzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxsYmFja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWNlaXZlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aXRoQXBwZW5kZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWF5YmVXcmFwQXNFcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJub2RlYmFja0ZvclByb21pc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSU5URVJOQUxcIixcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgdmFyIHJldCA9IGZ1bmN0aW9uIEZ1bmN0aW9uTmFtZShQYXJhbWV0ZXJzKSB7ICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoSU5URVJOQUwpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHByb21pc2UuX3NldFRyYWNlKHZvaWQgMCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHZhciBmbiA9IG5vZGViYWNrRm9yUHJvbWlzZShwcm9taXNlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHRyeSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBzd2l0Y2gobGVuKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgW0NvZGVGb3JTd2l0Y2hDYXNlXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICB2YXIgd3JhcHBlZCA9IG1heWJlV3JhcEFzRXJyb3IoZSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBwcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHdyYXBwZWQpOyAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBwcm9taXNlLl9yZWplY3Qod3JhcHBlZCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgfTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgcmV0Ll9faXNQcm9taXNpZmllZF9fID0gdHJ1ZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgcmV0dXJuIHJldDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgXCJcbiAgICAgICAgLnJlcGxhY2UoXCJGdW5jdGlvbk5hbWVcIiwgY2FsbGJhY2tOYW1lKVxuICAgICAgICAucmVwbGFjZShcIlBhcmFtZXRlcnNcIiwgcGFyYW1ldGVyRGVjbGFyYXRpb24obmV3UGFyYW1ldGVyQ291bnQpKVxuICAgICAgICAucmVwbGFjZShcIltDb2RlRm9yU3dpdGNoQ2FzZV1cIiwgZ2VuZXJhdGVBcmd1bWVudFN3aXRjaENhc2UoKSkpKFxuICAgICAgICAgICAgUHJvbWlzZSxcbiAgICAgICAgICAgIGNhbGxiYWNrLFxuICAgICAgICAgICAgcmVjZWl2ZXIsXG4gICAgICAgICAgICB3aXRoQXBwZW5kZWQsXG4gICAgICAgICAgICBtYXliZVdyYXBBc0Vycm9yLFxuICAgICAgICAgICAgbm9kZWJhY2tGb3JQcm9taXNlLFxuICAgICAgICAgICAgSU5URVJOQUxcbiAgICAgICAgKTtcbn1cblxuZnVuY3Rpb24gbWFrZU5vZGVQcm9taXNpZmllZENsb3N1cmUoY2FsbGJhY2ssIHJlY2VpdmVyKSB7XG4gICAgZnVuY3Rpb24gcHJvbWlzaWZpZWQoKSB7XG4gICAgICAgIHZhciBfcmVjZWl2ZXIgPSByZWNlaXZlcjtcbiAgICAgICAgaWYgKHJlY2VpdmVyID09PSBUSElTKSBfcmVjZWl2ZXIgPSB0aGlzO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IF9yZWNlaXZlcltjYWxsYmFja107XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgICAgIHByb21pc2UuX3NldFRyYWNlKHZvaWQgMCk7XG4gICAgICAgIHZhciBmbiA9IG5vZGViYWNrRm9yUHJvbWlzZShwcm9taXNlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KF9yZWNlaXZlciwgd2l0aEFwcGVuZGVkKGFyZ3VtZW50cywgZm4pKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICB2YXIgd3JhcHBlZCA9IG1heWJlV3JhcEFzRXJyb3IoZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHdyYXBwZWQpO1xuICAgICAgICAgICAgcHJvbWlzZS5fcmVqZWN0KHdyYXBwZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBwcm9taXNpZmllZC5fX2lzUHJvbWlzaWZpZWRfXyA9IHRydWU7XG4gICAgcmV0dXJuIHByb21pc2lmaWVkO1xufVxuXG52YXIgbWFrZU5vZGVQcm9taXNpZmllZCA9IGNhbkV2YWx1YXRlXG4gICAgPyBtYWtlTm9kZVByb21pc2lmaWVkRXZhbFxuICAgIDogbWFrZU5vZGVQcm9taXNpZmllZENsb3N1cmU7XG5cbmZ1bmN0aW9uIHByb21pc2lmeUFsbChvYmosIHN1ZmZpeCwgZmlsdGVyLCBwcm9taXNpZmllcikge1xuICAgIHZhciBzdWZmaXhSZWdleHAgPSBuZXcgUmVnRXhwKGVzY2FwZUlkZW50UmVnZXgoc3VmZml4KSArIFwiJFwiKTtcbiAgICB2YXIgbWV0aG9kcyA9XG4gICAgICAgIHByb21pc2lmaWFibGVNZXRob2RzKG9iaiwgc3VmZml4LCBzdWZmaXhSZWdleHAsIGZpbHRlcik7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbWV0aG9kcy5sZW5ndGg7IGkgPCBsZW47IGkrPSAyKSB7XG4gICAgICAgIHZhciBrZXkgPSBtZXRob2RzW2ldO1xuICAgICAgICB2YXIgZm4gPSBtZXRob2RzW2krMV07XG4gICAgICAgIHZhciBwcm9taXNpZmllZEtleSA9IGtleSArIHN1ZmZpeDtcbiAgICAgICAgb2JqW3Byb21pc2lmaWVkS2V5XSA9IHByb21pc2lmaWVyID09PSBtYWtlTm9kZVByb21pc2lmaWVkXG4gICAgICAgICAgICAgICAgPyBtYWtlTm9kZVByb21pc2lmaWVkKGtleSwgVEhJUywga2V5LCBmbiwgc3VmZml4KVxuICAgICAgICAgICAgICAgIDogcHJvbWlzaWZpZXIoZm4pO1xuICAgIH1cbiAgICB1dGlsLnRvRmFzdFByb3BlcnRpZXMob2JqKTtcbiAgICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBwcm9taXNpZnkoY2FsbGJhY2ssIHJlY2VpdmVyKSB7XG4gICAgcmV0dXJuIG1ha2VOb2RlUHJvbWlzaWZpZWQoY2FsbGJhY2ssIHJlY2VpdmVyLCB2b2lkIDAsIGNhbGxiYWNrKTtcbn1cblxuUHJvbWlzZS5wcm9taXNpZnkgPSBmdW5jdGlvbiBQcm9taXNlJFByb21pc2lmeShmbiwgcmVjZWl2ZXIpIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImZuIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgaWYgKGlzUHJvbWlzaWZpZWQoZm4pKSB7XG4gICAgICAgIHJldHVybiBmbjtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2lmeShmbiwgYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBUSElTIDogcmVjZWl2ZXIpO1xufTtcblxuUHJvbWlzZS5wcm9taXNpZnlBbGwgPSBmdW5jdGlvbiBQcm9taXNlJFByb21pc2lmeUFsbCh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiB0YXJnZXQgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcInRoZSB0YXJnZXQgb2YgcHJvbWlzaWZ5QWxsIG11c3QgYmUgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBPYmplY3Qob3B0aW9ucyk7XG4gICAgdmFyIHN1ZmZpeCA9IG9wdGlvbnMuc3VmZml4O1xuICAgIGlmICh0eXBlb2Ygc3VmZml4ICE9PSBcInN0cmluZ1wiKSBzdWZmaXggPSBkZWZhdWx0U3VmZml4O1xuICAgIHZhciBmaWx0ZXIgPSBvcHRpb25zLmZpbHRlcjtcbiAgICBpZiAodHlwZW9mIGZpbHRlciAhPT0gXCJmdW5jdGlvblwiKSBmaWx0ZXIgPSBkZWZhdWx0RmlsdGVyO1xuICAgIHZhciBwcm9taXNpZmllciA9IG9wdGlvbnMucHJvbWlzaWZpZXI7XG4gICAgaWYgKHR5cGVvZiBwcm9taXNpZmllciAhPT0gXCJmdW5jdGlvblwiKSBwcm9taXNpZmllciA9IG1ha2VOb2RlUHJvbWlzaWZpZWQ7XG5cbiAgICBpZiAoIXV0aWwuaXNJZGVudGlmaWVyKHN1ZmZpeCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJzdWZmaXggbXVzdCBiZSBhIHZhbGlkIGlkZW50aWZpZXJcIik7XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSB1dGlsLmluaGVyaXRlZERhdGFLZXlzKHRhcmdldCwge2luY2x1ZGVIaWRkZW46IHRydWV9KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGFyZ2V0W2tleXNbaV1dO1xuICAgICAgICBpZiAoa2V5c1tpXSAhPT0gXCJjb25zdHJ1Y3RvclwiICYmXG4gICAgICAgICAgICB1dGlsLmlzQ2xhc3ModmFsdWUpKSB7XG4gICAgICAgICAgICBwcm9taXNpZnlBbGwodmFsdWUucHJvdG90eXBlLCBzdWZmaXgsIGZpbHRlciwgcHJvbWlzaWZpZXIpO1xuICAgICAgICAgICAgcHJvbWlzaWZ5QWxsKHZhbHVlLCBzdWZmaXgsIGZpbHRlciwgcHJvbWlzaWZpZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2lmeUFsbCh0YXJnZXQsIHN1ZmZpeCwgZmlsdGVyLCBwcm9taXNpZmllcik7XG59O1xufTtcblxuIiwiLyoqXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSwgY2FzdCkge1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIGFwaVJlamVjdGlvbiA9IHJlcXVpcmUoXCIuL2Vycm9yc19hcGlfcmVqZWN0aW9uXCIpKFByb21pc2UpO1xudmFyIGlzT2JqZWN0ID0gdXRpbC5pc09iamVjdDtcbnZhciBlczUgPSByZXF1aXJlKFwiLi9lczUuanNcIik7XG5cbmZ1bmN0aW9uIFByb3BlcnRpZXNQcm9taXNlQXJyYXkob2JqKSB7XG4gICAgdmFyIGtleXMgPSBlczUua2V5cyhvYmopO1xuICAgIHZhciBsZW4gPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgdmFsdWVzID0gbmV3IEFycmF5KGxlbiAqIDIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIHZhbHVlc1tpXSA9IG9ialtrZXldO1xuICAgICAgICB2YWx1ZXNbaSArIGxlbl0gPSBrZXk7XG4gICAgfVxuICAgIHRoaXMuY29uc3RydWN0b3IkKHZhbHVlcyk7XG59XG51dGlsLmluaGVyaXRzKFByb3BlcnRpZXNQcm9taXNlQXJyYXksIFByb21pc2VBcnJheSk7XG5cblByb3BlcnRpZXNQcm9taXNlQXJyYXkucHJvdG90eXBlLl9pbml0ID1cbmZ1bmN0aW9uIFByb3BlcnRpZXNQcm9taXNlQXJyYXkkX2luaXQoKSB7XG4gICAgdGhpcy5faW5pdCQodm9pZCAwLCAtMykgO1xufTtcblxuUHJvcGVydGllc1Byb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VGdWxmaWxsZWQgPVxuZnVuY3Rpb24gUHJvcGVydGllc1Byb21pc2VBcnJheSRfcHJvbWlzZUZ1bGZpbGxlZCh2YWx1ZSwgaW5kZXgpIHtcbiAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm47XG4gICAgdGhpcy5fdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgIHZhciB0b3RhbFJlc29sdmVkID0gKyt0aGlzLl90b3RhbFJlc29sdmVkO1xuICAgIGlmICh0b3RhbFJlc29sdmVkID49IHRoaXMuX2xlbmd0aCkge1xuICAgICAgICB2YXIgdmFsID0ge307XG4gICAgICAgIHZhciBrZXlPZmZzZXQgPSB0aGlzLmxlbmd0aCgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5sZW5ndGgoKTsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICB2YWxbdGhpcy5fdmFsdWVzW2kgKyBrZXlPZmZzZXRdXSA9IHRoaXMuX3ZhbHVlc1tpXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZXNvbHZlKHZhbCk7XG4gICAgfVxufTtcblxuUHJvcGVydGllc1Byb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VQcm9ncmVzc2VkID1cbmZ1bmN0aW9uIFByb3BlcnRpZXNQcm9taXNlQXJyYXkkX3Byb21pc2VQcm9ncmVzc2VkKHZhbHVlLCBpbmRleCkge1xuICAgIGlmICh0aGlzLl9pc1Jlc29sdmVkKCkpIHJldHVybjtcblxuICAgIHRoaXMuX3Byb21pc2UuX3Byb2dyZXNzKHtcbiAgICAgICAga2V5OiB0aGlzLl92YWx1ZXNbaW5kZXggKyB0aGlzLmxlbmd0aCgpXSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG59O1xuXG5Qcm9wZXJ0aWVzUHJvbWlzZUFycmF5LnByb3RvdHlwZS5zaG91bGRDb3B5VmFsdWVzID1cbmZ1bmN0aW9uIFByb3BlcnRpZXNQcm9taXNlQXJyYXkkX3Nob3VsZENvcHlWYWx1ZXMoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuUHJvcGVydGllc1Byb21pc2VBcnJheS5wcm90b3R5cGUuZ2V0QWN0dWFsTGVuZ3RoID1cbmZ1bmN0aW9uIFByb3BlcnRpZXNQcm9taXNlQXJyYXkkZ2V0QWN0dWFsTGVuZ3RoKGxlbikge1xuICAgIHJldHVybiBsZW4gPj4gMTtcbn07XG5cbmZ1bmN0aW9uIFByb21pc2UkX1Byb3BzKHByb21pc2VzKSB7XG4gICAgdmFyIHJldDtcbiAgICB2YXIgY2FzdFZhbHVlID0gY2FzdChwcm9taXNlcywgdm9pZCAwKTtcblxuICAgIGlmICghaXNPYmplY3QoY2FzdFZhbHVlKSkge1xuICAgICAgICByZXR1cm4gYXBpUmVqZWN0aW9uKFwiY2Fubm90IGF3YWl0IHByb3BlcnRpZXMgb2YgYSBub24tb2JqZWN0XCIpO1xuICAgIH0gZWxzZSBpZiAoY2FzdFZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICByZXQgPSBjYXN0VmFsdWUuX3RoZW4oUHJvbWlzZS5wcm9wcywgdm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgdm9pZCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXQgPSBuZXcgUHJvcGVydGllc1Byb21pc2VBcnJheShjYXN0VmFsdWUpLnByb21pc2UoKTtcbiAgICB9XG5cbiAgICBpZiAoY2FzdFZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICByZXQuX3Byb3BhZ2F0ZUZyb20oY2FzdFZhbHVlLCA0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUucHJvcHMgPSBmdW5jdGlvbiBQcm9taXNlJHByb3BzKCkge1xuICAgIHJldHVybiBQcm9taXNlJF9Qcm9wcyh0aGlzKTtcbn07XG5cblByb21pc2UucHJvcHMgPSBmdW5jdGlvbiBQcm9taXNlJFByb3BzKHByb21pc2VzKSB7XG4gICAgcmV0dXJuIFByb21pc2UkX1Byb3BzKHByb21pc2VzKTtcbn07XG59O1xuIiwiLyoqXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBhcnJheUNvcHkoc3JjLCBzcmNJbmRleCwgZHN0LCBkc3RJbmRleCwgbGVuKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBsZW47ICsraikge1xuICAgICAgICBkc3RbaiArIGRzdEluZGV4XSA9IHNyY1tqICsgc3JjSW5kZXhdO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gUXVldWUoY2FwYWNpdHkpIHtcbiAgICB0aGlzLl9jYXBhY2l0eSA9IGNhcGFjaXR5O1xuICAgIHRoaXMuX2xlbmd0aCA9IDA7XG4gICAgdGhpcy5fZnJvbnQgPSAwO1xuICAgIHRoaXMuX21ha2VDYXBhY2l0eSgpO1xufVxuXG5RdWV1ZS5wcm90b3R5cGUuX3dpbGxCZU92ZXJDYXBhY2l0eSA9XG5mdW5jdGlvbiBRdWV1ZSRfd2lsbEJlT3ZlckNhcGFjaXR5KHNpemUpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FwYWNpdHkgPCBzaXplO1xufTtcblxuUXVldWUucHJvdG90eXBlLl9wdXNoT25lID0gZnVuY3Rpb24gUXVldWUkX3B1c2hPbmUoYXJnKSB7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG4gICAgdGhpcy5fY2hlY2tDYXBhY2l0eShsZW5ndGggKyAxKTtcbiAgICB2YXIgaSA9ICh0aGlzLl9mcm9udCArIGxlbmd0aCkgJiAodGhpcy5fY2FwYWNpdHkgLSAxKTtcbiAgICB0aGlzW2ldID0gYXJnO1xuICAgIHRoaXMuX2xlbmd0aCA9IGxlbmd0aCArIDE7XG59O1xuXG5RdWV1ZS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIFF1ZXVlJHB1c2goZm4sIHJlY2VpdmVyLCBhcmcpIHtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKSArIDM7XG4gICAgaWYgKHRoaXMuX3dpbGxCZU92ZXJDYXBhY2l0eShsZW5ndGgpKSB7XG4gICAgICAgIHRoaXMuX3B1c2hPbmUoZm4pO1xuICAgICAgICB0aGlzLl9wdXNoT25lKHJlY2VpdmVyKTtcbiAgICAgICAgdGhpcy5fcHVzaE9uZShhcmcpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBqID0gdGhpcy5fZnJvbnQgKyBsZW5ndGggLSAzO1xuICAgIHRoaXMuX2NoZWNrQ2FwYWNpdHkobGVuZ3RoKTtcbiAgICB2YXIgd3JhcE1hc2sgPSB0aGlzLl9jYXBhY2l0eSAtIDE7XG4gICAgdGhpc1soaiArIDApICYgd3JhcE1hc2tdID0gZm47XG4gICAgdGhpc1soaiArIDEpICYgd3JhcE1hc2tdID0gcmVjZWl2ZXI7XG4gICAgdGhpc1soaiArIDIpICYgd3JhcE1hc2tdID0gYXJnO1xuICAgIHRoaXMuX2xlbmd0aCA9IGxlbmd0aDtcbn07XG5cblF1ZXVlLnByb3RvdHlwZS5zaGlmdCA9IGZ1bmN0aW9uIFF1ZXVlJHNoaWZ0KCkge1xuICAgIHZhciBmcm9udCA9IHRoaXMuX2Zyb250LFxuICAgICAgICByZXQgPSB0aGlzW2Zyb250XTtcblxuICAgIHRoaXNbZnJvbnRdID0gdm9pZCAwO1xuICAgIHRoaXMuX2Zyb250ID0gKGZyb250ICsgMSkgJiAodGhpcy5fY2FwYWNpdHkgLSAxKTtcbiAgICB0aGlzLl9sZW5ndGgtLTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuUXVldWUucHJvdG90eXBlLmxlbmd0aCA9IGZ1bmN0aW9uIFF1ZXVlJGxlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGVuZ3RoO1xufTtcblxuUXVldWUucHJvdG90eXBlLl9tYWtlQ2FwYWNpdHkgPSBmdW5jdGlvbiBRdWV1ZSRfbWFrZUNhcGFjaXR5KCkge1xuICAgIHZhciBsZW4gPSB0aGlzLl9jYXBhY2l0eTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIHRoaXNbaV0gPSB2b2lkIDA7XG4gICAgfVxufTtcblxuUXVldWUucHJvdG90eXBlLl9jaGVja0NhcGFjaXR5ID0gZnVuY3Rpb24gUXVldWUkX2NoZWNrQ2FwYWNpdHkoc2l6ZSkge1xuICAgIGlmICh0aGlzLl9jYXBhY2l0eSA8IHNpemUpIHtcbiAgICAgICAgdGhpcy5fcmVzaXplVG8odGhpcy5fY2FwYWNpdHkgPDwgMyk7XG4gICAgfVxufTtcblxuUXVldWUucHJvdG90eXBlLl9yZXNpemVUbyA9IGZ1bmN0aW9uIFF1ZXVlJF9yZXNpemVUbyhjYXBhY2l0eSkge1xuICAgIHZhciBvbGRGcm9udCA9IHRoaXMuX2Zyb250O1xuICAgIHZhciBvbGRDYXBhY2l0eSA9IHRoaXMuX2NhcGFjaXR5O1xuICAgIHZhciBvbGRRdWV1ZSA9IG5ldyBBcnJheShvbGRDYXBhY2l0eSk7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG5cbiAgICBhcnJheUNvcHkodGhpcywgMCwgb2xkUXVldWUsIDAsIG9sZENhcGFjaXR5KTtcbiAgICB0aGlzLl9jYXBhY2l0eSA9IGNhcGFjaXR5O1xuICAgIHRoaXMuX21ha2VDYXBhY2l0eSgpO1xuICAgIHRoaXMuX2Zyb250ID0gMDtcbiAgICBpZiAob2xkRnJvbnQgKyBsZW5ndGggPD0gb2xkQ2FwYWNpdHkpIHtcbiAgICAgICAgYXJyYXlDb3B5KG9sZFF1ZXVlLCBvbGRGcm9udCwgdGhpcywgMCwgbGVuZ3RoKTtcbiAgICB9IGVsc2UgeyAgICAgICAgdmFyIGxlbmd0aEJlZm9yZVdyYXBwaW5nID1cbiAgICAgICAgICAgIGxlbmd0aCAtICgob2xkRnJvbnQgKyBsZW5ndGgpICYgKG9sZENhcGFjaXR5IC0gMSkpO1xuXG4gICAgICAgIGFycmF5Q29weShvbGRRdWV1ZSwgb2xkRnJvbnQsIHRoaXMsIDAsIGxlbmd0aEJlZm9yZVdyYXBwaW5nKTtcbiAgICAgICAgYXJyYXlDb3B5KG9sZFF1ZXVlLCAwLCB0aGlzLCBsZW5ndGhCZWZvcmVXcmFwcGluZyxcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoIC0gbGVuZ3RoQmVmb3JlV3JhcHBpbmcpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUXVldWU7XG4iLCIvKipcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgSU5URVJOQUwsIGNhc3QpIHtcbnZhciBhcGlSZWplY3Rpb24gPSByZXF1aXJlKFwiLi9lcnJvcnNfYXBpX3JlamVjdGlvbi5qc1wiKShQcm9taXNlKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKS5pc0FycmF5O1xuXG52YXIgcmFjZUxhdGVyID0gZnVuY3Rpb24gUHJvbWlzZSRfcmFjZUxhdGVyKHByb21pc2UpIHtcbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlJF9SYWNlKGFycmF5LCBwcm9taXNlKTtcbiAgICB9KTtcbn07XG5cbnZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIFByb21pc2UkX1JhY2UocHJvbWlzZXMsIHBhcmVudCkge1xuICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0KHByb21pc2VzLCB2b2lkIDApO1xuXG4gICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIHJhY2VMYXRlcihtYXliZVByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoIWlzQXJyYXkocHJvbWlzZXMpKSB7XG4gICAgICAgIHJldHVybiBhcGlSZWplY3Rpb24oXCJleHBlY3RpbmcgYW4gYXJyYXksIGEgcHJvbWlzZSBvciBhIHRoZW5hYmxlXCIpO1xuICAgIH1cblxuICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgaWYgKHBhcmVudCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldC5fcHJvcGFnYXRlRnJvbShwYXJlbnQsIDcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldC5fc2V0VHJhY2Uodm9pZCAwKTtcbiAgICB9XG4gICAgdmFyIGZ1bGZpbGwgPSByZXQuX2Z1bGZpbGw7XG4gICAgdmFyIHJlamVjdCA9IHJldC5fcmVqZWN0O1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwcm9taXNlcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICB2YXIgdmFsID0gcHJvbWlzZXNbaV07XG5cbiAgICAgICAgaWYgKHZhbCA9PT0gdm9pZCAwICYmICEoaGFzT3duLmNhbGwocHJvbWlzZXMsIGkpKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBQcm9taXNlLmNhc3QodmFsKS5fdGhlbihmdWxmaWxsLCByZWplY3QsIHZvaWQgMCwgcmV0LCBudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuUHJvbWlzZS5yYWNlID0gZnVuY3Rpb24gUHJvbWlzZSRSYWNlKHByb21pc2VzKSB7XG4gICAgcmV0dXJuIFByb21pc2UkX1JhY2UocHJvbWlzZXMsIHZvaWQgMCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5yYWNlID0gZnVuY3Rpb24gUHJvbWlzZSRyYWNlKCkge1xuICAgIHJldHVybiBQcm9taXNlJF9SYWNlKHRoaXMsIHZvaWQgMCk7XG59O1xuXG59O1xuIiwiLyoqXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSwgYXBpUmVqZWN0aW9uLCBjYXN0LCBJTlRFUk5BTCkge1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIHRyeUNhdGNoNCA9IHV0aWwudHJ5Q2F0Y2g0O1xudmFyIHRyeUNhdGNoMyA9IHV0aWwudHJ5Q2F0Y2gzO1xudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcbmZ1bmN0aW9uIFJlZHVjdGlvblByb21pc2VBcnJheShwcm9taXNlcywgZm4sIGFjY3VtLCBfZWFjaCkge1xuICAgIHRoaXMuY29uc3RydWN0b3IkKHByb21pc2VzKTtcbiAgICB0aGlzLl9wcmVzZXJ2ZWRWYWx1ZXMgPSBfZWFjaCA9PT0gSU5URVJOQUwgPyBbXSA6IG51bGw7XG4gICAgdGhpcy5femVyb3RoSXNBY2N1bSA9IChhY2N1bSA9PT0gdm9pZCAwKTtcbiAgICB0aGlzLl9nb3RBY2N1bSA9IGZhbHNlO1xuICAgIHRoaXMuX3JlZHVjaW5nSW5kZXggPSAodGhpcy5femVyb3RoSXNBY2N1bSA/IDEgOiAwKTtcbiAgICB0aGlzLl92YWx1ZXNQaGFzZSA9IHVuZGVmaW5lZDtcblxuICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0KGFjY3VtLCB2b2lkIDApO1xuICAgIHZhciByZWplY3RlZCA9IGZhbHNlO1xuICAgIHZhciBpc1Byb21pc2UgPSBtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlO1xuICAgIGlmIChpc1Byb21pc2UpIHtcbiAgICAgICAgaWYgKG1heWJlUHJvbWlzZS5pc1BlbmRpbmcoKSkge1xuICAgICAgICAgICAgbWF5YmVQcm9taXNlLl9wcm94eVByb21pc2VBcnJheSh0aGlzLCAtMSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWF5YmVQcm9taXNlLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgICAgIGFjY3VtID0gbWF5YmVQcm9taXNlLnZhbHVlKCk7XG4gICAgICAgICAgICB0aGlzLl9nb3RBY2N1bSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXliZVByb21pc2UuX3Vuc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQoKTtcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdChtYXliZVByb21pc2UucmVhc29uKCkpO1xuICAgICAgICAgICAgcmVqZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghKGlzUHJvbWlzZSB8fCB0aGlzLl96ZXJvdGhJc0FjY3VtKSkgdGhpcy5fZ290QWNjdW0gPSB0cnVlO1xuICAgIHRoaXMuX2NhbGxiYWNrID0gZm47XG4gICAgdGhpcy5fYWNjdW0gPSBhY2N1bTtcbiAgICBpZiAoIXJlamVjdGVkKSB0aGlzLl9pbml0JCh2b2lkIDAsIC01KTtcbn1cbnV0aWwuaW5oZXJpdHMoUmVkdWN0aW9uUHJvbWlzZUFycmF5LCBQcm9taXNlQXJyYXkpO1xuXG5SZWR1Y3Rpb25Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9pbml0ID1cbmZ1bmN0aW9uIFJlZHVjdGlvblByb21pc2VBcnJheSRfaW5pdCgpIHt9O1xuXG5SZWR1Y3Rpb25Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9yZXNvbHZlRW1wdHlBcnJheSA9XG5mdW5jdGlvbiBSZWR1Y3Rpb25Qcm9taXNlQXJyYXkkX3Jlc29sdmVFbXB0eUFycmF5KCkge1xuICAgIGlmICh0aGlzLl9nb3RBY2N1bSB8fCB0aGlzLl96ZXJvdGhJc0FjY3VtKSB7XG4gICAgICAgIHRoaXMuX3Jlc29sdmUodGhpcy5fcHJlc2VydmVkVmFsdWVzICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtdIDogdGhpcy5fYWNjdW0pO1xuICAgIH1cbn07XG5cblJlZHVjdGlvblByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VGdWxmaWxsZWQgPVxuZnVuY3Rpb24gUmVkdWN0aW9uUHJvbWlzZUFycmF5JF9wcm9taXNlRnVsZmlsbGVkKHZhbHVlLCBpbmRleCkge1xuICAgIHZhciB2YWx1ZXMgPSB0aGlzLl92YWx1ZXM7XG4gICAgaWYgKHZhbHVlcyA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuICAgIHZhciBwcmVzZXJ2ZWRWYWx1ZXMgPSB0aGlzLl9wcmVzZXJ2ZWRWYWx1ZXM7XG4gICAgdmFyIGlzRWFjaCA9IHByZXNlcnZlZFZhbHVlcyAhPT0gbnVsbDtcbiAgICB2YXIgZ290QWNjdW0gPSB0aGlzLl9nb3RBY2N1bTtcbiAgICB2YXIgdmFsdWVzUGhhc2UgPSB0aGlzLl92YWx1ZXNQaGFzZTtcbiAgICB2YXIgdmFsdWVzUGhhc2VJbmRleDtcbiAgICBpZiAoIXZhbHVlc1BoYXNlKSB7XG4gICAgICAgIHZhbHVlc1BoYXNlID0gdGhpcy5fdmFsdWVzUGhhc2UgPSBBcnJheShsZW5ndGgpO1xuICAgICAgICBmb3IgKHZhbHVlc1BoYXNlSW5kZXg9MDsgdmFsdWVzUGhhc2VJbmRleDxsZW5ndGg7ICsrdmFsdWVzUGhhc2VJbmRleCkge1xuICAgICAgICAgICAgdmFsdWVzUGhhc2VbdmFsdWVzUGhhc2VJbmRleF0gPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhbHVlc1BoYXNlSW5kZXggPSB2YWx1ZXNQaGFzZVtpbmRleF07XG5cbiAgICBpZiAoaW5kZXggPT09IDAgJiYgdGhpcy5femVyb3RoSXNBY2N1bSkge1xuICAgICAgICBpZiAoIWdvdEFjY3VtKSB7XG4gICAgICAgICAgICB0aGlzLl9hY2N1bSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fZ290QWNjdW0gPSBnb3RBY2N1bSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWVzUGhhc2VbaW5kZXhdID0gKCh2YWx1ZXNQaGFzZUluZGV4ID09PSAwKVxuICAgICAgICAgICAgPyAxIDogMik7XG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgaWYgKCFnb3RBY2N1bSkge1xuICAgICAgICAgICAgdGhpcy5fYWNjdW0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX2dvdEFjY3VtID0gZ290QWNjdW0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHZhbHVlc1BoYXNlSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHZhbHVlc1BoYXNlW2luZGV4XSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZXNQaGFzZVtpbmRleF0gPSAyO1xuICAgICAgICAgICAgaWYgKGdvdEFjY3VtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWNjdW0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWdvdEFjY3VtKSByZXR1cm47XG5cbiAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLl9jYWxsYmFjaztcbiAgICB2YXIgcmVjZWl2ZXIgPSB0aGlzLl9wcm9taXNlLl9ib3VuZFRvO1xuICAgIHZhciByZXQ7XG5cbiAgICBmb3IgKHZhciBpID0gdGhpcy5fcmVkdWNpbmdJbmRleDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhbHVlc1BoYXNlSW5kZXggPSB2YWx1ZXNQaGFzZVtpXTtcbiAgICAgICAgaWYgKHZhbHVlc1BoYXNlSW5kZXggPT09IDIpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlZHVjaW5nSW5kZXggPSBpICsgMTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZXNQaGFzZUluZGV4ICE9PSAxKSByZXR1cm47XG5cbiAgICAgICAgdmFsdWUgPSB2YWx1ZXNbaV07XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5fc2V0dGxlZFZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5pc1BlbmRpbmcoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuX3Vuc2V0UmVqZWN0aW9uSXNVbmhhbmRsZWQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVqZWN0KHZhbHVlLnJlYXNvbigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0VhY2gpIHtcbiAgICAgICAgICAgIHByZXNlcnZlZFZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIHJldCA9IHRyeUNhdGNoMyhjYWxsYmFjaywgcmVjZWl2ZXIsIHZhbHVlLCBpLCBsZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0ID0gdHJ5Q2F0Y2g0KGNhbGxiYWNrLCByZWNlaXZlciwgdGhpcy5fYWNjdW0sIHZhbHVlLCBpLCBsZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHJldHVybiB0aGlzLl9yZWplY3QocmV0LmUpO1xuXG4gICAgICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0KHJldCwgdm9pZCAwKTtcbiAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIGlmIChtYXliZVByb21pc2UuaXNQZW5kaW5nKCkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNQaGFzZVtpXSA9IDQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1heWJlUHJvbWlzZS5fcHJveHlQcm9taXNlQXJyYXkodGhpcywgaSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1heWJlUHJvbWlzZS5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0ID0gbWF5YmVQcm9taXNlLnZhbHVlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fdW5zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWplY3QobWF5YmVQcm9taXNlLnJlYXNvbigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3JlZHVjaW5nSW5kZXggPSBpICsgMTtcbiAgICAgICAgdGhpcy5fYWNjdW0gPSByZXQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3JlZHVjaW5nSW5kZXggPCBsZW5ndGgpIHJldHVybjtcbiAgICB0aGlzLl9yZXNvbHZlKGlzRWFjaCA/IHByZXNlcnZlZFZhbHVlcyA6IHRoaXMuX2FjY3VtKTtcbn07XG5cbmZ1bmN0aW9uIHJlZHVjZShwcm9taXNlcywgZm4sIGluaXRpYWxWYWx1ZSwgX2VhY2gpIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBhcGlSZWplY3Rpb24oXCJmbiBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gICAgdmFyIGFycmF5ID0gbmV3IFJlZHVjdGlvblByb21pc2VBcnJheShwcm9taXNlcywgZm4sIGluaXRpYWxWYWx1ZSwgX2VhY2gpO1xuICAgIHJldHVybiBhcnJheS5wcm9taXNlKCk7XG59XG5cblByb21pc2UucHJvdG90eXBlLnJlZHVjZSA9IGZ1bmN0aW9uIFByb21pc2UkcmVkdWNlKGZuLCBpbml0aWFsVmFsdWUpIHtcbiAgICByZXR1cm4gcmVkdWNlKHRoaXMsIGZuLCBpbml0aWFsVmFsdWUsIG51bGwpO1xufTtcblxuUHJvbWlzZS5yZWR1Y2UgPSBmdW5jdGlvbiBQcm9taXNlJFJlZHVjZShwcm9taXNlcywgZm4sIGluaXRpYWxWYWx1ZSwgX2VhY2gpIHtcbiAgICByZXR1cm4gcmVkdWNlKHByb21pc2VzLCBmbiwgaW5pdGlhbFZhbHVlLCBfZWFjaCk7XG59O1xufTtcbiIsIihmdW5jdGlvbiAocHJvY2Vzcyl7XG4vKipcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbnZhciBzY2hlZHVsZTtcbnZhciBfTXV0YXRpb25PYnNlcnZlcjtcbmlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcHJvY2Vzcy52ZXJzaW9uID09PSBcInN0cmluZ1wiKSB7XG4gICAgc2NoZWR1bGUgPSBmdW5jdGlvbiBQcm9taXNlJF9TY2hlZHVsZXIoZm4pIHtcbiAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbik7XG4gICAgfTtcbn1cbmVsc2UgaWYgKCh0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgKF9NdXRhdGlvbk9ic2VydmVyID0gTXV0YXRpb25PYnNlcnZlcikpIHx8XG4gICAgICAgICAodHlwZW9mIFdlYktpdE11dGF0aW9uT2JzZXJ2ZXIgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgIChfTXV0YXRpb25PYnNlcnZlciA9IFdlYktpdE11dGF0aW9uT2JzZXJ2ZXIpKSkge1xuICAgIHNjaGVkdWxlID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIHF1ZXVlZEZuID0gdm9pZCAwO1xuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgX011dGF0aW9uT2JzZXJ2ZXIoXG4gICAgICAgICAgICBmdW5jdGlvbiBQcm9taXNlJF9TY2hlZHVsZXIoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZuID0gcXVldWVkRm47XG4gICAgICAgICAgICAgICAgcXVldWVkRm4gPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICApO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRpdiwge1xuICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIFByb21pc2UkX1NjaGVkdWxlcihmbikge1xuICAgICAgICAgICAgcXVldWVkRm4gPSBmbjtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QudG9nZ2xlKFwiZm9vXCIpO1xuICAgICAgICB9O1xuXG4gICAgfSkoKTtcbn1cbmVsc2UgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgc2NoZWR1bGUgPSBmdW5jdGlvbiBQcm9taXNlJF9TY2hlZHVsZXIoZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn1cbmVsc2UgdGhyb3cgbmV3IEVycm9yKFwibm8gYXN5bmMgc2NoZWR1bGVyIGF2YWlsYWJsZVwiKTtcbm1vZHVsZS5leHBvcnRzID0gc2NoZWR1bGU7XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKCdfcHJvY2VzcycpKSIsIi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPVxuICAgIGZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSkge1xudmFyIFByb21pc2VJbnNwZWN0aW9uID0gUHJvbWlzZS5Qcm9taXNlSW5zcGVjdGlvbjtcbnZhciB1dGlsID0gcmVxdWlyZShcIi4vdXRpbC5qc1wiKTtcblxuZnVuY3Rpb24gU2V0dGxlZFByb21pc2VBcnJheSh2YWx1ZXMpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9yJCh2YWx1ZXMpO1xufVxudXRpbC5pbmhlcml0cyhTZXR0bGVkUHJvbWlzZUFycmF5LCBQcm9taXNlQXJyYXkpO1xuXG5TZXR0bGVkUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZVJlc29sdmVkID1cbmZ1bmN0aW9uIFNldHRsZWRQcm9taXNlQXJyYXkkX3Byb21pc2VSZXNvbHZlZChpbmRleCwgaW5zcGVjdGlvbikge1xuICAgIHRoaXMuX3ZhbHVlc1tpbmRleF0gPSBpbnNwZWN0aW9uO1xuICAgIHZhciB0b3RhbFJlc29sdmVkID0gKyt0aGlzLl90b3RhbFJlc29sdmVkO1xuICAgIGlmICh0b3RhbFJlc29sdmVkID49IHRoaXMuX2xlbmd0aCkge1xuICAgICAgICB0aGlzLl9yZXNvbHZlKHRoaXMuX3ZhbHVlcyk7XG4gICAgfVxufTtcblxuU2V0dGxlZFByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VGdWxmaWxsZWQgPVxuZnVuY3Rpb24gU2V0dGxlZFByb21pc2VBcnJheSRfcHJvbWlzZUZ1bGZpbGxlZCh2YWx1ZSwgaW5kZXgpIHtcbiAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm47XG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlSW5zcGVjdGlvbigpO1xuICAgIHJldC5fYml0RmllbGQgPSAyNjg0MzU0NTY7XG4gICAgcmV0Ll9zZXR0bGVkVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9wcm9taXNlUmVzb2x2ZWQoaW5kZXgsIHJldCk7XG59O1xuU2V0dGxlZFByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VSZWplY3RlZCA9XG5mdW5jdGlvbiBTZXR0bGVkUHJvbWlzZUFycmF5JF9wcm9taXNlUmVqZWN0ZWQocmVhc29uLCBpbmRleCkge1xuICAgIGlmICh0aGlzLl9pc1Jlc29sdmVkKCkpIHJldHVybjtcbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2VJbnNwZWN0aW9uKCk7XG4gICAgcmV0Ll9iaXRGaWVsZCA9IDEzNDIxNzcyODtcbiAgICByZXQuX3NldHRsZWRWYWx1ZSA9IHJlYXNvbjtcbiAgICB0aGlzLl9wcm9taXNlUmVzb2x2ZWQoaW5kZXgsIHJldCk7XG59O1xuXG5Qcm9taXNlLnNldHRsZSA9IGZ1bmN0aW9uIFByb21pc2UkU2V0dGxlKHByb21pc2VzKSB7XG4gICAgcmV0dXJuIG5ldyBTZXR0bGVkUHJvbWlzZUFycmF5KHByb21pc2VzKS5wcm9taXNlKCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5zZXR0bGUgPSBmdW5jdGlvbiBQcm9taXNlJHNldHRsZSgpIHtcbiAgICByZXR1cm4gbmV3IFNldHRsZWRQcm9taXNlQXJyYXkodGhpcykucHJvbWlzZSgpO1xufTtcbn07XG4iLCIvKipcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID1cbmZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSwgYXBpUmVqZWN0aW9uKSB7XG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWwuanNcIik7XG52YXIgUmFuZ2VFcnJvciA9IHJlcXVpcmUoXCIuL2Vycm9ycy5qc1wiKS5SYW5nZUVycm9yO1xudmFyIEFnZ3JlZ2F0ZUVycm9yID0gcmVxdWlyZShcIi4vZXJyb3JzLmpzXCIpLkFnZ3JlZ2F0ZUVycm9yO1xudmFyIGlzQXJyYXkgPSB1dGlsLmlzQXJyYXk7XG5cblxuZnVuY3Rpb24gU29tZVByb21pc2VBcnJheSh2YWx1ZXMpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9yJCh2YWx1ZXMpO1xuICAgIHRoaXMuX2hvd01hbnkgPSAwO1xuICAgIHRoaXMuX3Vud3JhcCA9IGZhbHNlO1xuICAgIHRoaXMuX2luaXRpYWxpemVkID0gZmFsc2U7XG59XG51dGlsLmluaGVyaXRzKFNvbWVQcm9taXNlQXJyYXksIFByb21pc2VBcnJheSk7XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gU29tZVByb21pc2VBcnJheSRfaW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuX2luaXRpYWxpemVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hvd01hbnkgPT09IDApIHtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZShbXSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5faW5pdCQodm9pZCAwLCAtNSk7XG4gICAgdmFyIGlzQXJyYXlSZXNvbHZlZCA9IGlzQXJyYXkodGhpcy5fdmFsdWVzKTtcbiAgICBpZiAoIXRoaXMuX2lzUmVzb2x2ZWQoKSAmJlxuICAgICAgICBpc0FycmF5UmVzb2x2ZWQgJiZcbiAgICAgICAgdGhpcy5faG93TWFueSA+IHRoaXMuX2NhblBvc3NpYmx5RnVsZmlsbCgpKSB7XG4gICAgICAgIHRoaXMuX3JlamVjdCh0aGlzLl9nZXRSYW5nZUVycm9yKHRoaXMubGVuZ3RoKCkpKTtcbiAgICB9XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gU29tZVByb21pc2VBcnJheSRpbml0KCkge1xuICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB0aGlzLl9pbml0KCk7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5zZXRVbndyYXAgPSBmdW5jdGlvbiBTb21lUHJvbWlzZUFycmF5JHNldFVud3JhcCgpIHtcbiAgICB0aGlzLl91bndyYXAgPSB0cnVlO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuaG93TWFueSA9IGZ1bmN0aW9uIFNvbWVQcm9taXNlQXJyYXkkaG93TWFueSgpIHtcbiAgICByZXR1cm4gdGhpcy5faG93TWFueTtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLnNldEhvd01hbnkgPVxuZnVuY3Rpb24gU29tZVByb21pc2VBcnJheSRzZXRIb3dNYW55KGNvdW50KSB7XG4gICAgaWYgKHRoaXMuX2lzUmVzb2x2ZWQoKSkgcmV0dXJuO1xuICAgIHRoaXMuX2hvd01hbnkgPSBjb3VudDtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlRnVsZmlsbGVkID1cbmZ1bmN0aW9uIFNvbWVQcm9taXNlQXJyYXkkX3Byb21pc2VGdWxmaWxsZWQodmFsdWUpIHtcbiAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm47XG4gICAgdGhpcy5fYWRkRnVsZmlsbGVkKHZhbHVlKTtcbiAgICBpZiAodGhpcy5fZnVsZmlsbGVkKCkgPT09IHRoaXMuaG93TWFueSgpKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlcy5sZW5ndGggPSB0aGlzLmhvd01hbnkoKTtcbiAgICAgICAgaWYgKHRoaXMuaG93TWFueSgpID09PSAxICYmIHRoaXMuX3Vud3JhcCkge1xuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZSh0aGlzLl92YWx1ZXNbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZSh0aGlzLl92YWx1ZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VSZWplY3RlZCA9XG5mdW5jdGlvbiBTb21lUHJvbWlzZUFycmF5JF9wcm9taXNlUmVqZWN0ZWQocmVhc29uKSB7XG4gICAgaWYgKHRoaXMuX2lzUmVzb2x2ZWQoKSkgcmV0dXJuO1xuICAgIHRoaXMuX2FkZFJlamVjdGVkKHJlYXNvbik7XG4gICAgaWYgKHRoaXMuaG93TWFueSgpID4gdGhpcy5fY2FuUG9zc2libHlGdWxmaWxsKCkpIHtcbiAgICAgICAgdmFyIGUgPSBuZXcgQWdncmVnYXRlRXJyb3IoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMubGVuZ3RoKCk7IGkgPCB0aGlzLl92YWx1ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGUucHVzaCh0aGlzLl92YWx1ZXNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3JlamVjdChlKTtcbiAgICB9XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fZnVsZmlsbGVkID0gZnVuY3Rpb24gU29tZVByb21pc2VBcnJheSRfZnVsZmlsbGVkKCkge1xuICAgIHJldHVybiB0aGlzLl90b3RhbFJlc29sdmVkO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX3JlamVjdGVkID0gZnVuY3Rpb24gU29tZVByb21pc2VBcnJheSRfcmVqZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlcy5sZW5ndGggLSB0aGlzLmxlbmd0aCgpO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX2FkZFJlamVjdGVkID1cbmZ1bmN0aW9uIFNvbWVQcm9taXNlQXJyYXkkX2FkZFJlamVjdGVkKHJlYXNvbikge1xuICAgIHRoaXMuX3ZhbHVlcy5wdXNoKHJlYXNvbik7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fYWRkRnVsZmlsbGVkID1cbmZ1bmN0aW9uIFNvbWVQcm9taXNlQXJyYXkkX2FkZEZ1bGZpbGxlZCh2YWx1ZSkge1xuICAgIHRoaXMuX3ZhbHVlc1t0aGlzLl90b3RhbFJlc29sdmVkKytdID0gdmFsdWU7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fY2FuUG9zc2libHlGdWxmaWxsID1cbmZ1bmN0aW9uIFNvbWVQcm9taXNlQXJyYXkkX2NhblBvc3NpYmx5RnVsZmlsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGgoKSAtIHRoaXMuX3JlamVjdGVkKCk7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fZ2V0UmFuZ2VFcnJvciA9XG5mdW5jdGlvbiBTb21lUHJvbWlzZUFycmF5JF9nZXRSYW5nZUVycm9yKGNvdW50KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSBcIklucHV0IGFycmF5IG11c3QgY29udGFpbiBhdCBsZWFzdCBcIiArXG4gICAgICAgICAgICB0aGlzLl9ob3dNYW55ICsgXCIgaXRlbXMgYnV0IGNvbnRhaW5zIG9ubHkgXCIgKyBjb3VudCArIFwiIGl0ZW1zXCI7XG4gICAgcmV0dXJuIG5ldyBSYW5nZUVycm9yKG1lc3NhZ2UpO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX3Jlc29sdmVFbXB0eUFycmF5ID1cbmZ1bmN0aW9uIFNvbWVQcm9taXNlQXJyYXkkX3Jlc29sdmVFbXB0eUFycmF5KCkge1xuICAgIHRoaXMuX3JlamVjdCh0aGlzLl9nZXRSYW5nZUVycm9yKDApKTtcbn07XG5cbmZ1bmN0aW9uIFByb21pc2UkX1NvbWUocHJvbWlzZXMsIGhvd01hbnkpIHtcbiAgICBpZiAoKGhvd01hbnkgfCAwKSAhPT0gaG93TWFueSB8fCBob3dNYW55IDwgMCkge1xuICAgICAgICByZXR1cm4gYXBpUmVqZWN0aW9uKFwiZXhwZWN0aW5nIGEgcG9zaXRpdmUgaW50ZWdlclwiKTtcbiAgICB9XG4gICAgdmFyIHJldCA9IG5ldyBTb21lUHJvbWlzZUFycmF5KHByb21pc2VzKTtcbiAgICB2YXIgcHJvbWlzZSA9IHJldC5wcm9taXNlKCk7XG4gICAgaWYgKHByb21pc2UuaXNSZWplY3RlZCgpKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICByZXQuc2V0SG93TWFueShob3dNYW55KTtcbiAgICByZXQuaW5pdCgpO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5Qcm9taXNlLnNvbWUgPSBmdW5jdGlvbiBQcm9taXNlJFNvbWUocHJvbWlzZXMsIGhvd01hbnkpIHtcbiAgICByZXR1cm4gUHJvbWlzZSRfU29tZShwcm9taXNlcywgaG93TWFueSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5zb21lID0gZnVuY3Rpb24gUHJvbWlzZSRzb21lKGhvd01hbnkpIHtcbiAgICByZXR1cm4gUHJvbWlzZSRfU29tZSh0aGlzLCBob3dNYW55KTtcbn07XG5cblByb21pc2UuX1NvbWVQcm9taXNlQXJyYXkgPSBTb21lUHJvbWlzZUFycmF5O1xufTtcbiIsIi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlKSB7XG5mdW5jdGlvbiBQcm9taXNlSW5zcGVjdGlvbihwcm9taXNlKSB7XG4gICAgaWYgKHByb21pc2UgIT09IHZvaWQgMCkge1xuICAgICAgICB0aGlzLl9iaXRGaWVsZCA9IHByb21pc2UuX2JpdEZpZWxkO1xuICAgICAgICB0aGlzLl9zZXR0bGVkVmFsdWUgPSBwcm9taXNlLmlzUmVzb2x2ZWQoKVxuICAgICAgICAgICAgPyBwcm9taXNlLl9zZXR0bGVkVmFsdWVcbiAgICAgICAgICAgIDogdm9pZCAwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5fYml0RmllbGQgPSAwO1xuICAgICAgICB0aGlzLl9zZXR0bGVkVmFsdWUgPSB2b2lkIDA7XG4gICAgfVxufVxuXG5Qcm9taXNlSW5zcGVjdGlvbi5wcm90b3R5cGUuaXNGdWxmaWxsZWQgPVxuUHJvbWlzZS5wcm90b3R5cGUuaXNGdWxmaWxsZWQgPSBmdW5jdGlvbiBQcm9taXNlJGlzRnVsZmlsbGVkKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiAyNjg0MzU0NTYpID4gMDtcbn07XG5cblByb21pc2VJbnNwZWN0aW9uLnByb3RvdHlwZS5pc1JlamVjdGVkID1cblByb21pc2UucHJvdG90eXBlLmlzUmVqZWN0ZWQgPSBmdW5jdGlvbiBQcm9taXNlJGlzUmVqZWN0ZWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDEzNDIxNzcyOCkgPiAwO1xufTtcblxuUHJvbWlzZUluc3BlY3Rpb24ucHJvdG90eXBlLmlzUGVuZGluZyA9XG5Qcm9taXNlLnByb3RvdHlwZS5pc1BlbmRpbmcgPSBmdW5jdGlvbiBQcm9taXNlJGlzUGVuZGluZygpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgNDAyNjUzMTg0KSA9PT0gMDtcbn07XG5cblByb21pc2VJbnNwZWN0aW9uLnByb3RvdHlwZS52YWx1ZSA9XG5Qcm9taXNlLnByb3RvdHlwZS52YWx1ZSA9IGZ1bmN0aW9uIFByb21pc2UkdmFsdWUoKSB7XG4gICAgaWYgKCF0aGlzLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNhbm5vdCBnZXQgZnVsZmlsbG1lbnQgdmFsdWUgb2YgYSBub24tZnVsZmlsbGVkIHByb21pc2VcIik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zZXR0bGVkVmFsdWU7XG59O1xuXG5Qcm9taXNlSW5zcGVjdGlvbi5wcm90b3R5cGUuZXJyb3IgPVxuUHJvbWlzZUluc3BlY3Rpb24ucHJvdG90eXBlLnJlYXNvbiA9XG5Qcm9taXNlLnByb3RvdHlwZS5yZWFzb24gPSBmdW5jdGlvbiBQcm9taXNlJHJlYXNvbigpIHtcbiAgICBpZiAoIXRoaXMuaXNSZWplY3RlZCgpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJjYW5ub3QgZ2V0IHJlamVjdGlvbiByZWFzb24gb2YgYSBub24tcmVqZWN0ZWQgcHJvbWlzZVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3NldHRsZWRWYWx1ZTtcbn07XG5cblByb21pc2VJbnNwZWN0aW9uLnByb3RvdHlwZS5pc1Jlc29sdmVkID1cblByb21pc2UucHJvdG90eXBlLmlzUmVzb2x2ZWQgPSBmdW5jdGlvbiBQcm9taXNlJGlzUmVzb2x2ZWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDQwMjY1MzE4NCkgPiAwO1xufTtcblxuUHJvbWlzZS5Qcm9taXNlSW5zcGVjdGlvbiA9IFByb21pc2VJbnNwZWN0aW9uO1xufTtcbiIsIi8qKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxNCBQZXRrYSBBbnRvbm92XG4gKiBcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczo8L3A+XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICogXG4gKi9cblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCkge1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIGNhbkF0dGFjaCA9IHJlcXVpcmUoXCIuL2Vycm9ycy5qc1wiKS5jYW5BdHRhY2g7XG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xudmFyIGlzT2JqZWN0ID0gdXRpbC5pc09iamVjdDtcblxuZnVuY3Rpb24gZ2V0VGhlbihvYmopIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gb2JqLnRoZW47XG4gICAgfVxuICAgIGNhdGNoKGUpIHtcbiAgICAgICAgZXJyb3JPYmouZSA9IGU7XG4gICAgICAgIHJldHVybiBlcnJvck9iajtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIFByb21pc2UkX0Nhc3Qob2JqLCBvcmlnaW5hbFByb21pc2UpIHtcbiAgICBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0FueUJsdWViaXJkUHJvbWlzZShvYmopKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgICAgICAgICAgcmV0Ll9zZXRUcmFjZSh2b2lkIDApO1xuICAgICAgICAgICAgb2JqLl90aGVuKFxuICAgICAgICAgICAgICAgIHJldC5fZnVsZmlsbFVuY2hlY2tlZCxcbiAgICAgICAgICAgICAgICByZXQuX3JlamVjdFVuY2hlY2tlZENoZWNrRXJyb3IsXG4gICAgICAgICAgICAgICAgcmV0Ll9wcm9ncmVzc1VuY2hlY2tlZCxcbiAgICAgICAgICAgICAgICByZXQsXG4gICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldC5fc2V0Rm9sbG93aW5nKCk7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG4gICAgICAgIHZhciB0aGVuID0gZ2V0VGhlbihvYmopO1xuICAgICAgICBpZiAodGhlbiA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbFByb21pc2UgIT09IHZvaWQgMCAmJiBjYW5BdHRhY2godGhlbi5lKSkge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsUHJvbWlzZS5fYXR0YWNoRXh0cmFUcmFjZSh0aGVuLmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHRoZW4uZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UkX2RvVGhlbmFibGUob2JqLCB0aGVuLCBvcmlnaW5hbFByb21pc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5cbnZhciBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiBpc0FueUJsdWViaXJkUHJvbWlzZShvYmopIHtcbiAgICByZXR1cm4gaGFzUHJvcC5jYWxsKG9iaiwgXCJfcHJvbWlzZTBcIik7XG59XG5cbmZ1bmN0aW9uIFByb21pc2UkX2RvVGhlbmFibGUoeCwgdGhlbiwgb3JpZ2luYWxQcm9taXNlKSB7XG4gICAgdmFyIHJlc29sdmVyID0gUHJvbWlzZS5kZWZlcigpO1xuICAgIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgICB0aGVuLmNhbGwoXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgUHJvbWlzZSRfcmVzb2x2ZUZyb21UaGVuYWJsZSxcbiAgICAgICAgICAgIFByb21pc2UkX3JlamVjdEZyb21UaGVuYWJsZSxcbiAgICAgICAgICAgIFByb21pc2UkX3Byb2dyZXNzRnJvbVRoZW5hYmxlXG4gICAgICAgICk7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIHRyYWNlID0gY2FuQXR0YWNoKGUpID8gZSA6IG5ldyBFcnJvcihlICsgXCJcIik7XG4gICAgICAgICAgICBpZiAob3JpZ2luYWxQcm9taXNlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFByb21pc2UuX2F0dGFjaEV4dHJhVHJhY2UodHJhY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZXIucHJvbWlzZS5fcmVqZWN0KGUsIHRyYWNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzb2x2ZXIucHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIFByb21pc2UkX3Jlc29sdmVGcm9tVGhlbmFibGUoeSkge1xuICAgICAgICBpZiAoY2FsbGVkKSByZXR1cm47XG4gICAgICAgIGNhbGxlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKHggPT09IHkpIHtcbiAgICAgICAgICAgIHZhciBlID0gUHJvbWlzZS5fbWFrZVNlbGZSZXNvbHV0aW9uRXJyb3IoKTtcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbFByb21pc2UgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsUHJvbWlzZS5fYXR0YWNoRXh0cmFUcmFjZShlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmVyLnByb21pc2UuX3JlamVjdChlLCB2b2lkIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVyLnJlc29sdmUoeSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gUHJvbWlzZSRfcmVqZWN0RnJvbVRoZW5hYmxlKHIpIHtcbiAgICAgICAgaWYgKGNhbGxlZCkgcmV0dXJuO1xuICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICB2YXIgdHJhY2UgPSBjYW5BdHRhY2gocikgPyByIDogbmV3IEVycm9yKHIgKyBcIlwiKTtcbiAgICAgICAgaWYgKG9yaWdpbmFsUHJvbWlzZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBvcmlnaW5hbFByb21pc2UuX2F0dGFjaEV4dHJhVHJhY2UodHJhY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVyLnByb21pc2UuX3JlamVjdChyLCB0cmFjZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gUHJvbWlzZSRfcHJvZ3Jlc3NGcm9tVGhlbmFibGUodikge1xuICAgICAgICBpZiAoY2FsbGVkKSByZXR1cm47XG4gICAgICAgIHZhciBwcm9taXNlID0gcmVzb2x2ZXIucHJvbWlzZTtcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9taXNlLl9wcm9ncmVzcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBwcm9taXNlLl9wcm9ncmVzcyh2KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxucmV0dXJuIFByb21pc2UkX0Nhc3Q7XG59O1xuIiwiLyoqXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX3NldFRpbWVvdXQgPSBmdW5jdGlvbihmbiwgbXMpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgYXJnMCA9IGFyZ3VtZW50c1syXTtcbiAgICB2YXIgYXJnMSA9IGFyZ3VtZW50c1szXTtcbiAgICB2YXIgYXJnMiA9IGxlbiA+PSA1ID8gYXJndW1lbnRzWzRdIDogdm9pZCAwO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGZuKGFyZzAsIGFyZzEsIGFyZzIpO1xuICAgIH0sIG1zfDApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCwgY2FzdCkge1xudmFyIHV0aWwgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpO1xudmFyIGVycm9ycyA9IHJlcXVpcmUoXCIuL2Vycm9ycy5qc1wiKTtcbnZhciBhcGlSZWplY3Rpb24gPSByZXF1aXJlKFwiLi9lcnJvcnNfYXBpX3JlamVjdGlvblwiKShQcm9taXNlKTtcbnZhciBUaW1lb3V0RXJyb3IgPSBQcm9taXNlLlRpbWVvdXRFcnJvcjtcblxudmFyIGFmdGVyVGltZW91dCA9IGZ1bmN0aW9uIFByb21pc2UkX2FmdGVyVGltZW91dChwcm9taXNlLCBtZXNzYWdlLCBtcykge1xuICAgIGlmICghcHJvbWlzZS5pc1BlbmRpbmcoKSkgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgbWVzc2FnZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICBtZXNzYWdlID0gXCJvcGVyYXRpb24gdGltZWQgb3V0IGFmdGVyXCIgKyBcIiBcIiArIG1zICsgXCIgbXNcIlxuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IFRpbWVvdXRFcnJvcihtZXNzYWdlKTtcbiAgICBlcnJvcnMubWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uKGVycik7XG4gICAgcHJvbWlzZS5fYXR0YWNoRXh0cmFUcmFjZShlcnIpO1xuICAgIHByb21pc2UuX2NhbmNlbChlcnIpO1xufTtcblxudmFyIGFmdGVyRGVsYXkgPSBmdW5jdGlvbiBQcm9taXNlJF9hZnRlckRlbGF5KHZhbHVlLCBwcm9taXNlKSB7XG4gICAgcHJvbWlzZS5fZnVsZmlsbCh2YWx1ZSk7XG59O1xuXG52YXIgZGVsYXkgPSBQcm9taXNlLmRlbGF5ID0gZnVuY3Rpb24gUHJvbWlzZSREZWxheSh2YWx1ZSwgbXMpIHtcbiAgICBpZiAobXMgPT09IHZvaWQgMCkge1xuICAgICAgICBtcyA9IHZhbHVlO1xuICAgICAgICB2YWx1ZSA9IHZvaWQgMDtcbiAgICB9XG4gICAgbXMgPSArbXM7XG4gICAgdmFyIG1heWJlUHJvbWlzZSA9IGNhc3QodmFsdWUsIHZvaWQgMCk7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG5cbiAgICBpZiAobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBwcm9taXNlLl9wcm9wYWdhdGVGcm9tKG1heWJlUHJvbWlzZSwgNyk7XG4gICAgICAgIHByb21pc2UuX2ZvbGxvdyhtYXliZVByb21pc2UpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5kZWxheSh2YWx1ZSwgbXMpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9taXNlLl9zZXRUcmFjZSh2b2lkIDApO1xuICAgICAgICBfc2V0VGltZW91dChhZnRlckRlbGF5LCBtcywgdmFsdWUsIHByb21pc2UpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmRlbGF5ID0gZnVuY3Rpb24gUHJvbWlzZSRkZWxheShtcykge1xuICAgIHJldHVybiBkZWxheSh0aGlzLCBtcyk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS50aW1lb3V0ID0gZnVuY3Rpb24gUHJvbWlzZSR0aW1lb3V0KG1zLCBtZXNzYWdlKSB7XG4gICAgbXMgPSArbXM7XG5cbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIHJldC5fcHJvcGFnYXRlRnJvbSh0aGlzLCA3KTtcbiAgICByZXQuX2ZvbGxvdyh0aGlzKTtcbiAgICBfc2V0VGltZW91dChhZnRlclRpbWVvdXQsIG1zLCByZXQsIG1lc3NhZ2UsIG1zKTtcbiAgICByZXR1cm4gcmV0LmNhbmNlbGxhYmxlKCk7XG59O1xuXG59O1xuIiwiLyoqXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqIFxuICogQ29weXJpZ2h0IChjKSAyMDE0IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOjwvcD5cbiAqIFxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICogXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChQcm9taXNlLCBhcGlSZWplY3Rpb24sIGNhc3QpIHtcbiAgICB2YXIgVHlwZUVycm9yID0gcmVxdWlyZShcIi4vZXJyb3JzLmpzXCIpLlR5cGVFcnJvcjtcbiAgICB2YXIgaW5oZXJpdHMgPSByZXF1aXJlKFwiLi91dGlsLmpzXCIpLmluaGVyaXRzO1xuICAgIHZhciBQcm9taXNlSW5zcGVjdGlvbiA9IFByb21pc2UuUHJvbWlzZUluc3BlY3Rpb247XG5cbiAgICBmdW5jdGlvbiBpbnNwZWN0aW9uTWFwcGVyKGluc3BlY3Rpb25zKSB7XG4gICAgICAgIHZhciBsZW4gPSBpbnNwZWN0aW9ucy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBpbnNwZWN0aW9uID0gaW5zcGVjdGlvbnNbaV07XG4gICAgICAgICAgICBpZiAoaW5zcGVjdGlvbi5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoaW5zcGVjdGlvbi5lcnJvcigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluc3BlY3Rpb25zW2ldID0gaW5zcGVjdGlvbi52YWx1ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnNwZWN0aW9ucztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0aHJvd2VyKGUpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGU7fSwgMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FzdFByZXNlcnZpbmdEaXNwb3NhYmxlKHRoZW5hYmxlKSB7XG4gICAgICAgIHZhciBtYXliZVByb21pc2UgPSBjYXN0KHRoZW5hYmxlLCB2b2lkIDApO1xuICAgICAgICBpZiAobWF5YmVQcm9taXNlICE9PSB0aGVuYWJsZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHRoZW5hYmxlLl9pc0Rpc3Bvc2FibGUgPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICAgICAgdHlwZW9mIHRoZW5hYmxlLl9nZXREaXNwb3NlciA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgICAgICB0aGVuYWJsZS5faXNEaXNwb3NhYmxlKCkpIHtcbiAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fc2V0RGlzcG9zYWJsZSh0aGVuYWJsZS5fZ2V0RGlzcG9zZXIoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heWJlUHJvbWlzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzcG9zZShyZXNvdXJjZXMsIGluc3BlY3Rpb24pIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgbGVuID0gcmVzb3VyY2VzLmxlbmd0aDtcbiAgICAgICAgdmFyIHJldCA9IFByb21pc2UuZGVmZXIoKTtcbiAgICAgICAgZnVuY3Rpb24gaXRlcmF0b3IoKSB7XG4gICAgICAgICAgICBpZiAoaSA+PSBsZW4pIHJldHVybiByZXQucmVzb2x2ZSgpO1xuICAgICAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IGNhc3RQcmVzZXJ2aW5nRGlzcG9zYWJsZShyZXNvdXJjZXNbaSsrXSk7XG4gICAgICAgICAgICBpZiAobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSAmJlxuICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5faXNEaXNwb3NhYmxlKCkpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBtYXliZVByb21pc2UgPSBjYXN0KG1heWJlUHJvbWlzZS5fZ2V0RGlzcG9zZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50cnlEaXNwb3NlKGluc3BlY3Rpb24pLCB2b2lkIDApO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRocm93ZXIoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXliZVByb21pc2UuX3RoZW4oaXRlcmF0b3IsIHRocm93ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCwgbnVsbCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlcmF0b3IoKTtcbiAgICAgICAgfVxuICAgICAgICBpdGVyYXRvcigpO1xuICAgICAgICByZXR1cm4gcmV0LnByb21pc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcG9zZXJTdWNjZXNzKHZhbHVlKSB7XG4gICAgICAgIHZhciBpbnNwZWN0aW9uID0gbmV3IFByb21pc2VJbnNwZWN0aW9uKCk7XG4gICAgICAgIGluc3BlY3Rpb24uX3NldHRsZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICBpbnNwZWN0aW9uLl9iaXRGaWVsZCA9IDI2ODQzNTQ1NjtcbiAgICAgICAgcmV0dXJuIGRpc3Bvc2UodGhpcywgaW5zcGVjdGlvbikudGhlblJldHVybih2YWx1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcG9zZXJGYWlsKHJlYXNvbikge1xuICAgICAgICB2YXIgaW5zcGVjdGlvbiA9IG5ldyBQcm9taXNlSW5zcGVjdGlvbigpO1xuICAgICAgICBpbnNwZWN0aW9uLl9zZXR0bGVkVmFsdWUgPSByZWFzb247XG4gICAgICAgIGluc3BlY3Rpb24uX2JpdEZpZWxkID0gMTM0MjE3NzI4O1xuICAgICAgICByZXR1cm4gZGlzcG9zZSh0aGlzLCBpbnNwZWN0aW9uKS50aGVuVGhyb3cocmVhc29uKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBEaXNwb3NlcihkYXRhLCBwcm9taXNlKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLl9wcm9taXNlID0gcHJvbWlzZTtcbiAgICB9XG5cbiAgICBEaXNwb3Nlci5wcm90b3R5cGUuZGF0YSA9IGZ1bmN0aW9uIERpc3Bvc2VyJGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH07XG5cbiAgICBEaXNwb3Nlci5wcm90b3R5cGUucHJvbWlzZSA9IGZ1bmN0aW9uIERpc3Bvc2VyJHByb21pc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xuICAgIH07XG5cbiAgICBEaXNwb3Nlci5wcm90b3R5cGUucmVzb3VyY2UgPSBmdW5jdGlvbiBEaXNwb3NlciRyZXNvdXJjZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvbWlzZSgpLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb21pc2UoKS52YWx1ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBEaXNwb3Nlci5wcm90b3R5cGUudHJ5RGlzcG9zZSA9IGZ1bmN0aW9uKGluc3BlY3Rpb24pIHtcbiAgICAgICAgdmFyIHJlc291cmNlID0gdGhpcy5yZXNvdXJjZSgpO1xuICAgICAgICB2YXIgcmV0ID0gcmVzb3VyY2UgIT09IG51bGxcbiAgICAgICAgICAgID8gdGhpcy5kb0Rpc3Bvc2UocmVzb3VyY2UsIGluc3BlY3Rpb24pIDogbnVsbDtcbiAgICAgICAgdGhpcy5fcHJvbWlzZS5fdW5zZXREaXNwb3NhYmxlKCk7XG4gICAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9wcm9taXNlID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuXG4gICAgRGlzcG9zZXIuaXNEaXNwb3NlciA9IGZ1bmN0aW9uIERpc3Bvc2VyJGlzRGlzcG9zZXIoZCkge1xuICAgICAgICByZXR1cm4gKGQgIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBkLnJlc291cmNlID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZC50cnlEaXNwb3NlID09PSBcImZ1bmN0aW9uXCIpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBGdW5jdGlvbkRpc3Bvc2VyKGZuLCBwcm9taXNlKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IkKGZuLCBwcm9taXNlKTtcbiAgICB9XG4gICAgaW5oZXJpdHMoRnVuY3Rpb25EaXNwb3NlciwgRGlzcG9zZXIpO1xuXG4gICAgRnVuY3Rpb25EaXNwb3Nlci5wcm90b3R5cGUuZG9EaXNwb3NlID0gZnVuY3Rpb24gKHJlc291cmNlLCBpbnNwZWN0aW9uKSB7XG4gICAgICAgIHZhciBmbiA9IHRoaXMuZGF0YSgpO1xuICAgICAgICByZXR1cm4gZm4uY2FsbChyZXNvdXJjZSwgcmVzb3VyY2UsIGluc3BlY3Rpb24pO1xuICAgIH07XG5cbiAgICBQcm9taXNlLnVzaW5nID0gZnVuY3Rpb24gUHJvbWlzZSR1c2luZygpIHtcbiAgICAgICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPCAyKSByZXR1cm4gYXBpUmVqZWN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ5b3UgbXVzdCBwYXNzIGF0IGxlYXN0IDIgYXJndW1lbnRzIHRvIFByb21pc2UudXNpbmdcIik7XG4gICAgICAgIHZhciBmbiA9IGFyZ3VtZW50c1tsZW4gLSAxXTtcbiAgICAgICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gYXBpUmVqZWN0aW9uKFwiZm4gbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICBsZW4tLTtcbiAgICAgICAgdmFyIHJlc291cmNlcyA9IG5ldyBBcnJheShsZW4pO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICB2YXIgcmVzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBpZiAoRGlzcG9zZXIuaXNEaXNwb3NlcihyZXNvdXJjZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlzcG9zZXIgPSByZXNvdXJjZTtcbiAgICAgICAgICAgICAgICByZXNvdXJjZSA9IHJlc291cmNlLnByb21pc2UoKTtcbiAgICAgICAgICAgICAgICByZXNvdXJjZS5fc2V0RGlzcG9zYWJsZShkaXNwb3Nlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvdXJjZXNbaV0gPSByZXNvdXJjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnNldHRsZShyZXNvdXJjZXMpXG4gICAgICAgICAgICAudGhlbihpbnNwZWN0aW9uTWFwcGVyKVxuICAgICAgICAgICAgLnNwcmVhZChmbilcbiAgICAgICAgICAgIC5fdGhlbihkaXNwb3NlclN1Y2Nlc3MsIGRpc3Bvc2VyRmFpbCwgdm9pZCAwLCByZXNvdXJjZXMsIHZvaWQgMCk7XG4gICAgfTtcblxuICAgIFByb21pc2UucHJvdG90eXBlLl9zZXREaXNwb3NhYmxlID1cbiAgICBmdW5jdGlvbiBQcm9taXNlJF9zZXREaXNwb3NhYmxlKGRpc3Bvc2VyKSB7XG4gICAgICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCAyNjIxNDQ7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VyID0gZGlzcG9zZXI7XG4gICAgfTtcblxuICAgIFByb21pc2UucHJvdG90eXBlLl9pc0Rpc3Bvc2FibGUgPSBmdW5jdGlvbiBQcm9taXNlJF9pc0Rpc3Bvc2FibGUoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiAyNjIxNDQpID4gMDtcbiAgICB9O1xuXG4gICAgUHJvbWlzZS5wcm90b3R5cGUuX2dldERpc3Bvc2VyID0gZnVuY3Rpb24gUHJvbWlzZSRfZ2V0RGlzcG9zZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNwb3NlcjtcbiAgICB9O1xuXG4gICAgUHJvbWlzZS5wcm90b3R5cGUuX3Vuc2V0RGlzcG9zYWJsZSA9IGZ1bmN0aW9uIFByb21pc2UkX3Vuc2V0RGlzcG9zYWJsZSgpIHtcbiAgICAgICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCAmICh+MjYyMTQ0KTtcbiAgICAgICAgdGhpcy5fZGlzcG9zZXIgPSB2b2lkIDA7XG4gICAgfTtcblxuICAgIFByb21pc2UucHJvdG90eXBlLmRpc3Bvc2VyID0gZnVuY3Rpb24gUHJvbWlzZSRkaXNwb3Nlcihmbikge1xuICAgICAgICBpZiAodHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRnVuY3Rpb25EaXNwb3NlcihmbiwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgIH07XG5cbn07XG4iLCIvKipcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgUGV0a2EgQW50b25vdlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6PC9wPlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG5cInVzZSBzdHJpY3RcIjtcbnZhciBlczUgPSByZXF1aXJlKFwiLi9lczUuanNcIik7XG52YXIgaGF2ZUdldHRlcnMgPSAoZnVuY3Rpb24oKXtcbiAgICB0cnkge1xuICAgICAgICB2YXIgbyA9IHt9O1xuICAgICAgICBlczUuZGVmaW5lUHJvcGVydHkobywgXCJmXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG8uZiA9PT0gMztcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxufSkoKTtcbnZhciBjYW5FdmFsdWF0ZSA9IHR5cGVvZiBuYXZpZ2F0b3IgPT0gXCJ1bmRlZmluZWRcIjtcbnZhciBlcnJvck9iaiA9IHtlOiB7fX07XG5mdW5jdGlvbiB0cnlDYXRjaDEoZm4sIHJlY2VpdmVyLCBhcmcpIHtcbiAgICB0cnkgeyByZXR1cm4gZm4uY2FsbChyZWNlaXZlciwgYXJnKTsgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGVycm9yT2JqLmUgPSBlO1xuICAgICAgICByZXR1cm4gZXJyb3JPYmo7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0cnlDYXRjaDIoZm4sIHJlY2VpdmVyLCBhcmcsIGFyZzIpIHtcbiAgICB0cnkgeyByZXR1cm4gZm4uY2FsbChyZWNlaXZlciwgYXJnLCBhcmcyKTsgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGVycm9yT2JqLmUgPSBlO1xuICAgICAgICByZXR1cm4gZXJyb3JPYmo7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0cnlDYXRjaDMoZm4sIHJlY2VpdmVyLCBhcmcsIGFyZzIsIGFyZzMpIHtcbiAgICB0cnkgeyByZXR1cm4gZm4uY2FsbChyZWNlaXZlciwgYXJnLCBhcmcyLCBhcmczKTsgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGVycm9yT2JqLmUgPSBlO1xuICAgICAgICByZXR1cm4gZXJyb3JPYmo7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0cnlDYXRjaDQoZm4sIHJlY2VpdmVyLCBhcmcsIGFyZzIsIGFyZzMsIGFyZzQpIHtcbiAgICB0cnkgeyByZXR1cm4gZm4uY2FsbChyZWNlaXZlciwgYXJnLCBhcmcyLCBhcmczLCBhcmc0KTsgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGVycm9yT2JqLmUgPSBlO1xuICAgICAgICByZXR1cm4gZXJyb3JPYmo7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0cnlDYXRjaEFwcGx5KGZuLCBhcmdzLCByZWNlaXZlcikge1xuICAgIHRyeSB7IHJldHVybiBmbi5hcHBseShyZWNlaXZlciwgYXJncyk7IH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBlcnJvck9iai5lID0gZTtcbiAgICAgICAgcmV0dXJuIGVycm9yT2JqO1xuICAgIH1cbn1cblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24oQ2hpbGQsIFBhcmVudCkge1xuICAgIHZhciBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbiAgICBmdW5jdGlvbiBUKCkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gQ2hpbGQ7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IkID0gUGFyZW50O1xuICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gUGFyZW50LnByb3RvdHlwZSkge1xuICAgICAgICAgICAgaWYgKGhhc1Byb3AuY2FsbChQYXJlbnQucHJvdG90eXBlLCBwcm9wZXJ0eU5hbWUpICYmXG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lLmNoYXJBdChwcm9wZXJ0eU5hbWUubGVuZ3RoLTEpICE9PSBcIiRcIlxuICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzW3Byb3BlcnR5TmFtZSArIFwiJFwiXSA9IFBhcmVudC5wcm90b3R5cGVbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBULnByb3RvdHlwZSA9IFBhcmVudC5wcm90b3R5cGU7XG4gICAgQ2hpbGQucHJvdG90eXBlID0gbmV3IFQoKTtcbiAgICByZXR1cm4gQ2hpbGQucHJvdG90eXBlO1xufTtcblxuZnVuY3Rpb24gYXNTdHJpbmcodmFsKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyB2YWwgOiAoXCJcIiArIHZhbCk7XG59XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKHZhbCkge1xuICAgIHJldHVybiB2YWwgPT0gbnVsbCB8fCB2YWwgPT09IHRydWUgfHwgdmFsID09PSBmYWxzZSB8fFxuICAgICAgICB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCI7XG5cbn1cblxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gIWlzUHJpbWl0aXZlKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gbWF5YmVXcmFwQXNFcnJvcihtYXliZUVycm9yKSB7XG4gICAgaWYgKCFpc1ByaW1pdGl2ZShtYXliZUVycm9yKSkgcmV0dXJuIG1heWJlRXJyb3I7XG5cbiAgICByZXR1cm4gbmV3IEVycm9yKGFzU3RyaW5nKG1heWJlRXJyb3IpKTtcbn1cblxuZnVuY3Rpb24gd2l0aEFwcGVuZGVkKHRhcmdldCwgYXBwZW5kZWUpIHtcbiAgICB2YXIgbGVuID0gdGFyZ2V0Lmxlbmd0aDtcbiAgICB2YXIgcmV0ID0gbmV3IEFycmF5KGxlbiArIDEpO1xuICAgIHZhciBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICByZXRbaV0gPSB0YXJnZXRbaV07XG4gICAgfVxuICAgIHJldFtpXSA9IGFwcGVuZGVlO1xuICAgIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGdldERhdGFQcm9wZXJ0eU9yRGVmYXVsdChvYmosIGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKGVzNS5pc0VTNSkge1xuICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpO1xuICAgICAgICBpZiAoZGVzYyAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVzYy5nZXQgPT0gbnVsbCAmJiBkZXNjLnNldCA9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgID8gZGVzYy52YWx1ZVxuICAgICAgICAgICAgICAgICAgICA6IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSA/IG9ialtrZXldIDogdm9pZCAwO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbm90RW51bWVyYWJsZVByb3Aob2JqLCBuYW1lLCB2YWx1ZSkge1xuICAgIGlmIChpc1ByaW1pdGl2ZShvYmopKSByZXR1cm4gb2JqO1xuICAgIHZhciBkZXNjcmlwdG9yID0ge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfTtcbiAgICBlczUuZGVmaW5lUHJvcGVydHkob2JqLCBuYW1lLCBkZXNjcmlwdG9yKTtcbiAgICByZXR1cm4gb2JqO1xufVxuXG5cbnZhciB3cmFwc1ByaW1pdGl2ZVJlY2VpdmVyID0gKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzICE9PSBcInN0cmluZ1wiO1xufSkuY2FsbChcInN0cmluZ1wiKTtcblxuZnVuY3Rpb24gdGhyb3dlcihyKSB7XG4gICAgdGhyb3cgcjtcbn1cblxudmFyIGluaGVyaXRlZERhdGFLZXlzID0gKGZ1bmN0aW9uKCkge1xuICAgIGlmIChlczUuaXNFUzUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9iaiwgb3B0cykge1xuICAgICAgICAgICAgdmFyIHJldCA9IFtdO1xuICAgICAgICAgICAgdmFyIHZpc2l0ZWRLZXlzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICAgIHZhciBnZXRLZXlzID0gT2JqZWN0KG9wdHMpLmluY2x1ZGVIaWRkZW5cbiAgICAgICAgICAgICAgICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gICAgICAgICAgICAgICAgOiBPYmplY3Qua2V5cztcbiAgICAgICAgICAgIHdoaWxlIChvYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciBrZXlzO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXMgPSBnZXRLZXlzKG9iaik7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICh2aXNpdGVkS2V5c1trZXldKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdmlzaXRlZEtleXNba2V5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXNjICE9IG51bGwgJiYgZGVzYy5nZXQgPT0gbnVsbCAmJiBkZXNjLnNldCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXQucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9iaiA9IGVzNS5nZXRQcm90b3R5cGVPZihvYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gW107XG4gICAgICAgICAgICAvKmpzaGludCBmb3JpbjpmYWxzZSAqL1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICAgICAgICAgIHJldC5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9O1xuICAgIH1cblxufSkoKTtcblxuZnVuY3Rpb24gaXNDbGFzcyhmbikge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBlczUua2V5cyhmbi5wcm90b3R5cGUpO1xuICAgICAgICAgICAgcmV0dXJuIGtleXMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICEoa2V5cy5sZW5ndGggPT09IDEgJiYga2V5c1swXSA9PT0gXCJjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b0Zhc3RQcm9wZXJ0aWVzKG9iaikge1xuICAgIC8qanNoaW50IC1XMDI3Ki9cbiAgICBmdW5jdGlvbiBmKCkge31cbiAgICBmLnByb3RvdHlwZSA9IG9iajtcbiAgICByZXR1cm4gZjtcbiAgICBldmFsKG9iaik7XG59XG5cbnZhciByaWRlbnQgPSAvXlthLXokX11bYS16JF8wLTldKiQvaTtcbmZ1bmN0aW9uIGlzSWRlbnRpZmllcihzdHIpIHtcbiAgICByZXR1cm4gcmlkZW50LnRlc3Qoc3RyKTtcbn1cblxuZnVuY3Rpb24gZmlsbGVkUmFuZ2UoY291bnQsIHByZWZpeCwgc3VmZml4KSB7XG4gICAgdmFyIHJldCA9IG5ldyBBcnJheShjb3VudCk7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgcmV0W2ldID0gcHJlZml4ICsgaSArIHN1ZmZpeDtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxudmFyIHJldCA9IHtcbiAgICBpc0NsYXNzOiBpc0NsYXNzLFxuICAgIGlzSWRlbnRpZmllcjogaXNJZGVudGlmaWVyLFxuICAgIGluaGVyaXRlZERhdGFLZXlzOiBpbmhlcml0ZWREYXRhS2V5cyxcbiAgICBnZXREYXRhUHJvcGVydHlPckRlZmF1bHQ6IGdldERhdGFQcm9wZXJ0eU9yRGVmYXVsdCxcbiAgICB0aHJvd2VyOiB0aHJvd2VyLFxuICAgIGlzQXJyYXk6IGVzNS5pc0FycmF5LFxuICAgIGhhdmVHZXR0ZXJzOiBoYXZlR2V0dGVycyxcbiAgICBub3RFbnVtZXJhYmxlUHJvcDogbm90RW51bWVyYWJsZVByb3AsXG4gICAgaXNQcmltaXRpdmU6IGlzUHJpbWl0aXZlLFxuICAgIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgICBjYW5FdmFsdWF0ZTogY2FuRXZhbHVhdGUsXG4gICAgZXJyb3JPYmo6IGVycm9yT2JqLFxuICAgIHRyeUNhdGNoMTogdHJ5Q2F0Y2gxLFxuICAgIHRyeUNhdGNoMjogdHJ5Q2F0Y2gyLFxuICAgIHRyeUNhdGNoMzogdHJ5Q2F0Y2gzLFxuICAgIHRyeUNhdGNoNDogdHJ5Q2F0Y2g0LFxuICAgIHRyeUNhdGNoQXBwbHk6IHRyeUNhdGNoQXBwbHksXG4gICAgaW5oZXJpdHM6IGluaGVyaXRzLFxuICAgIHdpdGhBcHBlbmRlZDogd2l0aEFwcGVuZGVkLFxuICAgIGFzU3RyaW5nOiBhc1N0cmluZyxcbiAgICBtYXliZVdyYXBBc0Vycm9yOiBtYXliZVdyYXBBc0Vycm9yLFxuICAgIHdyYXBzUHJpbWl0aXZlUmVjZWl2ZXI6IHdyYXBzUHJpbWl0aXZlUmVjZWl2ZXIsXG4gICAgdG9GYXN0UHJvcGVydGllczogdG9GYXN0UHJvcGVydGllcyxcbiAgICBmaWxsZWRSYW5nZTogZmlsbGVkUmFuZ2Vcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmV0O1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxucHJvY2Vzcy5uZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhblNldEltbWVkaWF0ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnNldEltbWVkaWF0ZTtcbiAgICB2YXIgY2FuUG9zdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnBvc3RNZXNzYWdlICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyXG4gICAgO1xuXG4gICAgaWYgKGNhblNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIHdpbmRvdy5zZXRJbW1lZGlhdGUoZikgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB2YXIgcXVldWUgPSBbXTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBldi5zb3VyY2U7XG4gICAgICAgICAgICBpZiAoKHNvdXJjZSA9PT0gd2luZG93IHx8IHNvdXJjZSA9PT0gbnVsbCkgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufVxuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG4iXX0=
