"use strict";function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,s=new Array(e);i<e;i++)s[i]=t[i];return s}function _iterableToArrayLimit(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var i=[],s=!0,r=!1,a=void 0;try{for(var l,n=t[Symbol.iterator]();!(s=(l=n.next()).done)&&(i.push(l.value),!e||i.length!==e);s=!0);}catch(t){r=!0,a=t}finally{try{s||null==n.return||n.return()}finally{if(r)throw a}}return i}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function gallery(){return{last:0,active:0,default:{item:"gallery__item",hidden:"gallery__item--hidden",left_in:"gallery__anim-left-in",left_out:"gallery__anim-left-out",right_in:"gallery__anim-right-in",right_out:"gallery__anim-right-out"},elements:[],init:function(t){var e=this;if(void 0!==t)for(var i=0,s=Object.entries(t);i<s.length;i++){var r=_slicedToArray(s[i],2),a=r[0],l=r[1];this.default[a]=l}this.$el;this.$el.querySelectorAll("."+this.default.item).forEach((function(t){e.elements.push(t)})),this.elements[0].classList.remove(this.default.hidden),void 0!==this.$refs.height&&this.setSize("height",this.$el),void 0!==this.$refs.width&&this.setSize("width",this.$el),void 0!==this.$refs.size&&this.setSize("size",this.$el)},next:function(){this.last=this.active,this.elements.length>this.active+1?this.active++:this.active=0;this.default.left_out,this.default.left_in;this.elements[this.active].classList.remove(this.default.left_out,this.default.left_in,this.default.right_out,this.default.hidden),this.elements[this.active].classList.add(this.default.right_in),this.elements[this.last].classList.add(this.default.right_out,this.default.hidden),this.elements[this.last].classList.remove(this.default.left_out,this.default.left_in,this.default.right_in)},previous:function(){this.last=this.active,this.active-1>=0?this.active--:this.active=this.elements.length-1,this.elements[this.active].classList.remove(this.default.right_in,this.default.right_out,this.default.left_out,this.default.hidden),this.elements[this.active].classList.add(this.default.left_in),this.elements[this.last].classList.add(this.default.hidden,this.default.left_out),this.elements[this.last].classList.remove(this.default.right_in,this.default.right_out,this.default.left_in)},setSize:function(t,e){this.$refs[t].querySelector("img").onload=function(i){-1!==["width","size"].indexOf(t)&&e.style.setProperty("--gallery_width",i.target.naturalWidth+"px"),-1!==["height","size"].indexOf(t)&&e.style.setProperty("--gallery_height",i.target.naturalHeight+"px")}}}}