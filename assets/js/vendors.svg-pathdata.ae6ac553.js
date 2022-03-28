/*! For license information please see vendors.svg-pathdata.ae6ac553.js.LICENSE.txt */
(self.webpackChunkreact_bargraph=self.webpackChunkreact_bargraph||[]).push([[755],{152:(t,r,e)=>{"use strict";e.d(r,{OU:()=>x});var i=function(t,r){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])})(t,r)};function a(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function e(){this.constructor=t}i(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}function n(t,r){var e=t[0],i=t[1];return[e*Math.cos(r)-i*Math.sin(r),e*Math.sin(r)+i*Math.cos(r)]}function o(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var e=0;e<t.length;e++)if("number"!=typeof t[e])throw new Error("assertNumbers arguments["+e+"] is not a number. "+typeof t[e]+" == typeof "+t[e]);return!0}var s=Math.PI;function u(t,r,e){t.lArcFlag=0===t.lArcFlag?0:1,t.sweepFlag=0===t.sweepFlag?0:1;var i=t.rX,a=t.rY,o=t.x,u=t.y;i=Math.abs(t.rX),a=Math.abs(t.rY);var h=n([(r-o)/2,(e-u)/2],-t.xRot/180*s),c=h[0],y=h[1],p=Math.pow(c,2)/Math.pow(i,2)+Math.pow(y,2)/Math.pow(a,2);1<p&&(i*=Math.sqrt(p),a*=Math.sqrt(p)),t.rX=i,t.rY=a;var m=Math.pow(i,2)*Math.pow(y,2)+Math.pow(a,2)*Math.pow(c,2),O=(t.lArcFlag!==t.sweepFlag?1:-1)*Math.sqrt(Math.max(0,(Math.pow(i,2)*Math.pow(a,2)-m)/m)),l=i*y/a*O,T=-a*c/i*O,v=n([l,T],t.xRot/180*s);t.cX=v[0]+(r+o)/2,t.cY=v[1]+(e+u)/2,t.phi1=Math.atan2((y-T)/a,(c-l)/i),t.phi2=Math.atan2((-y-T)/a,(-c-l)/i),0===t.sweepFlag&&t.phi2>t.phi1&&(t.phi2-=2*s),1===t.sweepFlag&&t.phi2<t.phi1&&(t.phi2+=2*s),t.phi1*=180/s,t.phi2*=180/s}function h(t,r,e){o(t,r,e);var i=t*t+r*r-e*e;if(0>i)return[];if(0===i)return[[t*e/(t*t+r*r),r*e/(t*t+r*r)]];var a=Math.sqrt(i);return[[(t*e+r*a)/(t*t+r*r),(r*e-t*a)/(t*t+r*r)],[(t*e-r*a)/(t*t+r*r),(r*e+t*a)/(t*t+r*r)]]}var c,y=Math.PI/180;function p(t,r,e){return(1-e)*t+e*r}function m(t,r,e,i){return t+Math.cos(i/180*s)*r+Math.sin(i/180*s)*e}function O(t,r,e,i){var a=1e-6,n=r-t,o=e-r,s=3*n+3*(i-e)-6*o,u=6*(o-n),h=3*n;return Math.abs(s)<a?[-h/u]:function(t,r,e){void 0===e&&(e=1e-6);var i=t*t/4-r;if(i<-e)return[];if(i<=e)return[-t/2];var a=Math.sqrt(i);return[-t/2-a,-t/2+a]}(u/s,h/s,a)}function l(t,r,e,i,a){var n=1-a;return t*(n*n*n)+r*(3*n*n*a)+e*(3*n*a*a)+i*(a*a*a)}!function(t){function r(){return a((function(t,r,e){return t.relative&&(void 0!==t.x1&&(t.x1+=r),void 0!==t.y1&&(t.y1+=e),void 0!==t.x2&&(t.x2+=r),void 0!==t.y2&&(t.y2+=e),void 0!==t.x&&(t.x+=r),void 0!==t.y&&(t.y+=e),t.relative=!1),t}))}function e(){var t=NaN,r=NaN,e=NaN,i=NaN;return a((function(a,n,o){return a.type&x.SMOOTH_CURVE_TO&&(a.type=x.CURVE_TO,t=isNaN(t)?n:t,r=isNaN(r)?o:r,a.x1=a.relative?n-t:2*n-t,a.y1=a.relative?o-r:2*o-r),a.type&x.CURVE_TO?(t=a.relative?n+a.x2:a.x2,r=a.relative?o+a.y2:a.y2):(t=NaN,r=NaN),a.type&x.SMOOTH_QUAD_TO&&(a.type=x.QUAD_TO,e=isNaN(e)?n:e,i=isNaN(i)?o:i,a.x1=a.relative?n-e:2*n-e,a.y1=a.relative?o-i:2*o-i),a.type&x.QUAD_TO?(e=a.relative?n+a.x1:a.x1,i=a.relative?o+a.y1:a.y1):(e=NaN,i=NaN),a}))}function i(){var t=NaN,r=NaN;return a((function(e,i,a){if(e.type&x.SMOOTH_QUAD_TO&&(e.type=x.QUAD_TO,t=isNaN(t)?i:t,r=isNaN(r)?a:r,e.x1=e.relative?i-t:2*i-t,e.y1=e.relative?a-r:2*a-r),e.type&x.QUAD_TO){t=e.relative?i+e.x1:e.x1,r=e.relative?a+e.y1:e.y1;var n=e.x1,o=e.y1;e.type=x.CURVE_TO,e.x1=((e.relative?0:i)+2*n)/3,e.y1=((e.relative?0:a)+2*o)/3,e.x2=(e.x+2*n)/3,e.y2=(e.y+2*o)/3}else t=NaN,r=NaN;return e}))}function a(t){var r=0,e=0,i=NaN,a=NaN;return function(n){if(isNaN(i)&&!(n.type&x.MOVE_TO))throw new Error("path must start with moveto");var o=t(n,r,e,i,a);return n.type&x.CLOSE_PATH&&(r=i,e=a),void 0!==n.x&&(r=n.relative?r+n.x:n.x),void 0!==n.y&&(e=n.relative?e+n.y:n.y),n.type&x.MOVE_TO&&(i=r,a=e),o}}function s(t,r,e,i,n,s){return o(t,r,e,i,n,s),a((function(a,o,u,h){var c=a.x1,y=a.x2,p=a.relative&&!isNaN(h),m=void 0!==a.x?a.x:p?0:o,O=void 0!==a.y?a.y:p?0:u;function l(t){return t*t}a.type&x.HORIZ_LINE_TO&&0!==r&&(a.type=x.LINE_TO,a.y=a.relative?0:u),a.type&x.VERT_LINE_TO&&0!==e&&(a.type=x.LINE_TO,a.x=a.relative?0:o),void 0!==a.x&&(a.x=a.x*t+O*e+(p?0:n)),void 0!==a.y&&(a.y=m*r+a.y*i+(p?0:s)),void 0!==a.x1&&(a.x1=a.x1*t+a.y1*e+(p?0:n)),void 0!==a.y1&&(a.y1=c*r+a.y1*i+(p?0:s)),void 0!==a.x2&&(a.x2=a.x2*t+a.y2*e+(p?0:n)),void 0!==a.y2&&(a.y2=y*r+a.y2*i+(p?0:s));var T=t*i-r*e;if(void 0!==a.xRot&&(1!==t||0!==r||0!==e||1!==i))if(0===T)delete a.rX,delete a.rY,delete a.xRot,delete a.lArcFlag,delete a.sweepFlag,a.type=x.LINE_TO;else{var v=a.xRot*Math.PI/180,f=Math.sin(v),_=Math.cos(v),N=1/l(a.rX),d=1/l(a.rY),E=l(_)*N+l(f)*d,A=2*f*_*(N-d),C=l(f)*N+l(_)*d,M=E*i*i-A*r*i+C*r*r,R=A*(t*i+r*e)-2*(E*e*i+C*t*r),g=E*e*e-A*t*e+C*t*t,I=(Math.atan2(R,M-g)+Math.PI)%Math.PI/2,S=Math.sin(I),L=Math.cos(I);a.rX=Math.abs(T)/Math.sqrt(M*l(L)+R*S*L+g*l(S)),a.rY=Math.abs(T)/Math.sqrt(M*l(S)-R*S*L+g*l(L)),a.xRot=180*I/Math.PI}return void 0!==a.sweepFlag&&0>T&&(a.sweepFlag=+!a.sweepFlag),a}))}t.ROUND=function(t){function r(r){return Math.round(r*t)/t}return void 0===t&&(t=1e13),o(t),function(t){return void 0!==t.x1&&(t.x1=r(t.x1)),void 0!==t.y1&&(t.y1=r(t.y1)),void 0!==t.x2&&(t.x2=r(t.x2)),void 0!==t.y2&&(t.y2=r(t.y2)),void 0!==t.x&&(t.x=r(t.x)),void 0!==t.y&&(t.y=r(t.y)),void 0!==t.rX&&(t.rX=r(t.rX)),void 0!==t.rY&&(t.rY=r(t.rY)),t}},t.TO_ABS=r,t.TO_REL=function(){return a((function(t,r,e){return t.relative||(void 0!==t.x1&&(t.x1-=r),void 0!==t.y1&&(t.y1-=e),void 0!==t.x2&&(t.x2-=r),void 0!==t.y2&&(t.y2-=e),void 0!==t.x&&(t.x-=r),void 0!==t.y&&(t.y-=e),t.relative=!0),t}))},t.NORMALIZE_HVZ=function(t,r,e){return void 0===t&&(t=!0),void 0===r&&(r=!0),void 0===e&&(e=!0),a((function(i,a,n,o,s){if(isNaN(o)&&!(i.type&x.MOVE_TO))throw new Error("path must start with moveto");return r&&i.type&x.HORIZ_LINE_TO&&(i.type=x.LINE_TO,i.y=i.relative?0:n),e&&i.type&x.VERT_LINE_TO&&(i.type=x.LINE_TO,i.x=i.relative?0:a),t&&i.type&x.CLOSE_PATH&&(i.type=x.LINE_TO,i.x=i.relative?o-a:o,i.y=i.relative?s-n:s),i.type&x.ARC&&(0===i.rX||0===i.rY)&&(i.type=x.LINE_TO,delete i.rX,delete i.rY,delete i.xRot,delete i.lArcFlag,delete i.sweepFlag),i}))},t.NORMALIZE_ST=e,t.QT_TO_C=i,t.INFO=a,t.SANITIZE=function(t){void 0===t&&(t=0),o(t);var r=NaN,e=NaN,i=NaN,n=NaN;return a((function(a,o,s,u,h){var c=Math.abs,y=!1,p=0,m=0;if(a.type&x.SMOOTH_CURVE_TO&&(p=isNaN(r)?0:o-r,m=isNaN(e)?0:s-e),a.type&(x.CURVE_TO|x.SMOOTH_CURVE_TO)?(r=a.relative?o+a.x2:a.x2,e=a.relative?s+a.y2:a.y2):(r=NaN,e=NaN),a.type&x.SMOOTH_QUAD_TO?(i=isNaN(i)?o:2*o-i,n=isNaN(n)?s:2*s-n):a.type&x.QUAD_TO?(i=a.relative?o+a.x1:a.x1,n=a.relative?s+a.y1:a.y2):(i=NaN,n=NaN),a.type&x.LINE_COMMANDS||a.type&x.ARC&&(0===a.rX||0===a.rY||!a.lArcFlag)||a.type&x.CURVE_TO||a.type&x.SMOOTH_CURVE_TO||a.type&x.QUAD_TO||a.type&x.SMOOTH_QUAD_TO){var O=void 0===a.x?0:a.relative?a.x:a.x-o,l=void 0===a.y?0:a.relative?a.y:a.y-s;p=isNaN(i)?void 0===a.x1?p:a.relative?a.x:a.x1-o:i-o,m=isNaN(n)?void 0===a.y1?m:a.relative?a.y:a.y1-s:n-s;var T=void 0===a.x2?0:a.relative?a.x:a.x2-o,v=void 0===a.y2?0:a.relative?a.y:a.y2-s;c(O)<=t&&c(l)<=t&&c(p)<=t&&c(m)<=t&&c(T)<=t&&c(v)<=t&&(y=!0)}return a.type&x.CLOSE_PATH&&c(o-u)<=t&&c(s-h)<=t&&(y=!0),y?[]:a}))},t.MATRIX=s,t.ROTATE=function(t,r,e){void 0===r&&(r=0),void 0===e&&(e=0),o(t,r,e);var i=Math.sin(t),a=Math.cos(t);return s(a,i,-i,a,r-r*a+e*i,e-r*i-e*a)},t.TRANSLATE=function(t,r){return void 0===r&&(r=0),o(t,r),s(1,0,0,1,t,r)},t.SCALE=function(t,r){return void 0===r&&(r=t),o(t,r),s(t,0,0,r,0,0)},t.SKEW_X=function(t){return o(t),s(1,0,Math.atan(t),1,0,0)},t.SKEW_Y=function(t){return o(t),s(1,Math.atan(t),0,1,0,0)},t.X_AXIS_SYMMETRY=function(t){return void 0===t&&(t=0),o(t),s(-1,0,0,1,t,0)},t.Y_AXIS_SYMMETRY=function(t){return void 0===t&&(t=0),o(t),s(1,0,0,-1,0,t)},t.A_TO_C=function(){return a((function(t,r,e){return x.ARC===t.type?function(t,r,e){var i,a,o,s;t.cX||u(t,r,e);for(var h=Math.min(t.phi1,t.phi2),c=Math.max(t.phi1,t.phi2)-h,m=Math.ceil(c/90),O=new Array(m),l=r,T=e,v=0;v<m;v++){var f=p(t.phi1,t.phi2,v/m),_=p(t.phi1,t.phi2,(v+1)/m),N=_-f,d=4/3*Math.tan(N*y/4),E=[Math.cos(f*y)-d*Math.sin(f*y),Math.sin(f*y)+d*Math.cos(f*y)],A=E[0],C=E[1],M=[Math.cos(_*y),Math.sin(_*y)],R=M[0],g=M[1],I=[R+d*Math.sin(_*y),g-d*Math.cos(_*y)],S=I[0],L=I[1];O[v]={relative:t.relative,type:x.CURVE_TO};var H=function(r,e){var i=n([r*t.rX,e*t.rY],t.xRot),a=i[0],o=i[1];return[t.cX+a,t.cY+o]};i=H(A,C),O[v].x1=i[0],O[v].y1=i[1],a=H(S,L),O[v].x2=a[0],O[v].y2=a[1],o=H(R,g),O[v].x=o[0],O[v].y=o[1],t.relative&&(O[v].x1-=l,O[v].y1-=T,O[v].x2-=l,O[v].y2-=T,O[v].x-=l,O[v].y-=T),l=(s=[O[v].x,O[v].y])[0],T=s[1]}return O}(t,t.relative?0:r,t.relative?0:e):t}))},t.ANNOTATE_ARCS=function(){return a((function(t,r,e){return t.relative&&(r=0,e=0),x.ARC===t.type&&u(t,r,e),t}))},t.CLONE=function(){return function(t){var r={};for(var e in t)r[e]=t[e];return r}},t.CALCULATE_BOUNDS=function(){var t=r(),n=i(),o=e(),s=a((function(r,e,i){var a=o(n(t(function(t){var r={};for(var e in t)r[e]=t[e];return r}(r))));function c(t){t>s.maxX&&(s.maxX=t),t<s.minX&&(s.minX=t)}function y(t){t>s.maxY&&(s.maxY=t),t<s.minY&&(s.minY=t)}if(a.type&x.DRAWING_COMMANDS&&(c(e),y(i)),a.type&x.HORIZ_LINE_TO&&c(a.x),a.type&x.VERT_LINE_TO&&y(a.y),a.type&x.LINE_TO&&(c(a.x),y(a.y)),a.type&x.CURVE_TO){c(a.x),y(a.y);for(var p=0,T=O(e,a.x1,a.x2,a.x);p<T.length;p++)0<(U=T[p])&&1>U&&c(l(e,a.x1,a.x2,a.x,U));for(var v=0,f=O(i,a.y1,a.y2,a.y);v<f.length;v++)0<(U=f[v])&&1>U&&y(l(i,a.y1,a.y2,a.y,U))}if(a.type&x.ARC){c(a.x),y(a.y),u(a,e,i);for(var _=a.xRot/180*Math.PI,N=Math.cos(_)*a.rX,d=Math.sin(_)*a.rX,E=-Math.sin(_)*a.rY,A=Math.cos(_)*a.rY,C=a.phi1<a.phi2?[a.phi1,a.phi2]:-180>a.phi2?[a.phi2+360,a.phi1+360]:[a.phi2,a.phi1],M=C[0],R=C[1],g=function(t){var r=t[0],e=t[1],i=180*Math.atan2(e,r)/Math.PI;return i<M?i+360:i},I=0,S=h(E,-N,0).map(g);I<S.length;I++)(U=S[I])>M&&U<R&&c(m(a.cX,N,E,U));for(var L=0,H=h(A,-d,0).map(g);L<H.length;L++){var U;(U=H[L])>M&&U<R&&y(m(a.cY,d,A,U))}}return r}));return s.minX=1/0,s.maxX=-1/0,s.minY=1/0,s.maxY=-1/0,s}}(c||(c={}));var T,v=function(){function t(){}return t.prototype.round=function(t){return this.transform(c.ROUND(t))},t.prototype.toAbs=function(){return this.transform(c.TO_ABS())},t.prototype.toRel=function(){return this.transform(c.TO_REL())},t.prototype.normalizeHVZ=function(t,r,e){return this.transform(c.NORMALIZE_HVZ(t,r,e))},t.prototype.normalizeST=function(){return this.transform(c.NORMALIZE_ST())},t.prototype.qtToC=function(){return this.transform(c.QT_TO_C())},t.prototype.aToC=function(){return this.transform(c.A_TO_C())},t.prototype.sanitize=function(t){return this.transform(c.SANITIZE(t))},t.prototype.translate=function(t,r){return this.transform(c.TRANSLATE(t,r))},t.prototype.scale=function(t,r){return this.transform(c.SCALE(t,r))},t.prototype.rotate=function(t,r,e){return this.transform(c.ROTATE(t,r,e))},t.prototype.matrix=function(t,r,e,i,a,n){return this.transform(c.MATRIX(t,r,e,i,a,n))},t.prototype.skewX=function(t){return this.transform(c.SKEW_X(t))},t.prototype.skewY=function(t){return this.transform(c.SKEW_Y(t))},t.prototype.xSymmetry=function(t){return this.transform(c.X_AXIS_SYMMETRY(t))},t.prototype.ySymmetry=function(t){return this.transform(c.Y_AXIS_SYMMETRY(t))},t.prototype.annotateArcs=function(){return this.transform(c.ANNOTATE_ARCS())},t}(),f=function(t){return" "===t||"\t"===t||"\r"===t||"\n"===t},_=function(t){return"0".charCodeAt(0)<=t.charCodeAt(0)&&t.charCodeAt(0)<="9".charCodeAt(0)},N=function(t){function r(){var r=t.call(this)||this;return r.curNumber="",r.curCommandType=-1,r.curCommandRelative=!1,r.canParseCommandOrComma=!0,r.curNumberHasExp=!1,r.curNumberHasExpDigits=!1,r.curNumberHasDecimal=!1,r.curArgs=[],r}return a(r,t),r.prototype.finish=function(t){if(void 0===t&&(t=[]),this.parse(" ",t),0!==this.curArgs.length||!this.canParseCommandOrComma)throw new SyntaxError("Unterminated command at the path end.");return t},r.prototype.parse=function(t,r){var e=this;void 0===r&&(r=[]);for(var i=function(t){r.push(t),e.curArgs.length=0,e.canParseCommandOrComma=!0},a=0;a<t.length;a++){var n=t[a],o=!(this.curCommandType!==x.ARC||3!==this.curArgs.length&&4!==this.curArgs.length||1!==this.curNumber.length||"0"!==this.curNumber&&"1"!==this.curNumber),s=_(n)&&("0"===this.curNumber&&"0"===n||o);if(!_(n)||s)if("e"!==n&&"E"!==n)if("-"!==n&&"+"!==n||!this.curNumberHasExp||this.curNumberHasExpDigits)if("."!==n||this.curNumberHasExp||this.curNumberHasDecimal||o){if(this.curNumber&&-1!==this.curCommandType){var u=Number(this.curNumber);if(isNaN(u))throw new SyntaxError("Invalid number ending at "+a);if(this.curCommandType===x.ARC)if(0===this.curArgs.length||1===this.curArgs.length){if(0>u)throw new SyntaxError('Expected positive number, got "'+u+'" at index "'+a+'"')}else if((3===this.curArgs.length||4===this.curArgs.length)&&"0"!==this.curNumber&&"1"!==this.curNumber)throw new SyntaxError('Expected a flag, got "'+this.curNumber+'" at index "'+a+'"');this.curArgs.push(u),this.curArgs.length===d[this.curCommandType]&&(x.HORIZ_LINE_TO===this.curCommandType?i({type:x.HORIZ_LINE_TO,relative:this.curCommandRelative,x:u}):x.VERT_LINE_TO===this.curCommandType?i({type:x.VERT_LINE_TO,relative:this.curCommandRelative,y:u}):this.curCommandType===x.MOVE_TO||this.curCommandType===x.LINE_TO||this.curCommandType===x.SMOOTH_QUAD_TO?(i({type:this.curCommandType,relative:this.curCommandRelative,x:this.curArgs[0],y:this.curArgs[1]}),x.MOVE_TO===this.curCommandType&&(this.curCommandType=x.LINE_TO)):this.curCommandType===x.CURVE_TO?i({type:x.CURVE_TO,relative:this.curCommandRelative,x1:this.curArgs[0],y1:this.curArgs[1],x2:this.curArgs[2],y2:this.curArgs[3],x:this.curArgs[4],y:this.curArgs[5]}):this.curCommandType===x.SMOOTH_CURVE_TO?i({type:x.SMOOTH_CURVE_TO,relative:this.curCommandRelative,x2:this.curArgs[0],y2:this.curArgs[1],x:this.curArgs[2],y:this.curArgs[3]}):this.curCommandType===x.QUAD_TO?i({type:x.QUAD_TO,relative:this.curCommandRelative,x1:this.curArgs[0],y1:this.curArgs[1],x:this.curArgs[2],y:this.curArgs[3]}):this.curCommandType===x.ARC&&i({type:x.ARC,relative:this.curCommandRelative,rX:this.curArgs[0],rY:this.curArgs[1],xRot:this.curArgs[2],lArcFlag:this.curArgs[3],sweepFlag:this.curArgs[4],x:this.curArgs[5],y:this.curArgs[6]})),this.curNumber="",this.curNumberHasExpDigits=!1,this.curNumberHasExp=!1,this.curNumberHasDecimal=!1,this.canParseCommandOrComma=!0}if(!f(n))if(","===n&&this.canParseCommandOrComma)this.canParseCommandOrComma=!1;else if("+"!==n&&"-"!==n&&"."!==n)if(s)this.curNumber=n,this.curNumberHasDecimal=!1;else{if(0!==this.curArgs.length)throw new SyntaxError("Unterminated command at index "+a+".");if(!this.canParseCommandOrComma)throw new SyntaxError('Unexpected character "'+n+'" at index '+a+". Command cannot follow comma");if(this.canParseCommandOrComma=!1,"z"!==n&&"Z"!==n)if("h"===n||"H"===n)this.curCommandType=x.HORIZ_LINE_TO,this.curCommandRelative="h"===n;else if("v"===n||"V"===n)this.curCommandType=x.VERT_LINE_TO,this.curCommandRelative="v"===n;else if("m"===n||"M"===n)this.curCommandType=x.MOVE_TO,this.curCommandRelative="m"===n;else if("l"===n||"L"===n)this.curCommandType=x.LINE_TO,this.curCommandRelative="l"===n;else if("c"===n||"C"===n)this.curCommandType=x.CURVE_TO,this.curCommandRelative="c"===n;else if("s"===n||"S"===n)this.curCommandType=x.SMOOTH_CURVE_TO,this.curCommandRelative="s"===n;else if("q"===n||"Q"===n)this.curCommandType=x.QUAD_TO,this.curCommandRelative="q"===n;else if("t"===n||"T"===n)this.curCommandType=x.SMOOTH_QUAD_TO,this.curCommandRelative="t"===n;else{if("a"!==n&&"A"!==n)throw new SyntaxError('Unexpected character "'+n+'" at index '+a+".");this.curCommandType=x.ARC,this.curCommandRelative="a"===n}else r.push({type:x.CLOSE_PATH}),this.canParseCommandOrComma=!0,this.curCommandType=-1}else this.curNumber=n,this.curNumberHasDecimal="."===n}else this.curNumber+=n,this.curNumberHasDecimal=!0;else this.curNumber+=n;else this.curNumber+=n,this.curNumberHasExp=!0;else this.curNumber+=n,this.curNumberHasExpDigits=this.curNumberHasExp}return r},r.prototype.transform=function(t){return Object.create(this,{parse:{value:function(r,e){void 0===e&&(e=[]);for(var i=0,a=Object.getPrototypeOf(this).parse.call(this,r);i<a.length;i++){var n=a[i],o=t(n);Array.isArray(o)?e.push.apply(e,o):e.push(o)}return e}}})},r}(v),x=function(t){function r(e){var i=t.call(this)||this;return i.commands="string"==typeof e?r.parse(e):e,i}return a(r,t),r.prototype.encode=function(){return r.encode(this.commands)},r.prototype.getBounds=function(){var t=c.CALCULATE_BOUNDS();return this.transform(t),t},r.prototype.transform=function(t){for(var r=[],e=0,i=this.commands;e<i.length;e++){var a=t(i[e]);Array.isArray(a)?r.push.apply(r,a):r.push(a)}return this.commands=r,this},r.encode=function(t){return function(t){var r="";Array.isArray(t)||(t=[t]);for(var e=0;e<t.length;e++){var i=t[e];if(i.type===x.CLOSE_PATH)r+="z";else if(i.type===x.HORIZ_LINE_TO)r+=(i.relative?"h":"H")+i.x;else if(i.type===x.VERT_LINE_TO)r+=(i.relative?"v":"V")+i.y;else if(i.type===x.MOVE_TO)r+=(i.relative?"m":"M")+i.x+" "+i.y;else if(i.type===x.LINE_TO)r+=(i.relative?"l":"L")+i.x+" "+i.y;else if(i.type===x.CURVE_TO)r+=(i.relative?"c":"C")+i.x1+" "+i.y1+" "+i.x2+" "+i.y2+" "+i.x+" "+i.y;else if(i.type===x.SMOOTH_CURVE_TO)r+=(i.relative?"s":"S")+i.x2+" "+i.y2+" "+i.x+" "+i.y;else if(i.type===x.QUAD_TO)r+=(i.relative?"q":"Q")+i.x1+" "+i.y1+" "+i.x+" "+i.y;else if(i.type===x.SMOOTH_QUAD_TO)r+=(i.relative?"t":"T")+i.x+" "+i.y;else{if(i.type!==x.ARC)throw new Error('Unexpected command type "'+i.type+'" at index '+e+".");r+=(i.relative?"a":"A")+i.rX+" "+i.rY+" "+i.xRot+" "+ +i.lArcFlag+" "+ +i.sweepFlag+" "+i.x+" "+i.y}}return r}(t)},r.parse=function(t){var r=new N,e=[];return r.parse(t,e),r.finish(e),e},r.CLOSE_PATH=1,r.MOVE_TO=2,r.HORIZ_LINE_TO=4,r.VERT_LINE_TO=8,r.LINE_TO=16,r.CURVE_TO=32,r.SMOOTH_CURVE_TO=64,r.QUAD_TO=128,r.SMOOTH_QUAD_TO=256,r.ARC=512,r.LINE_COMMANDS=r.LINE_TO|r.HORIZ_LINE_TO|r.VERT_LINE_TO,r.DRAWING_COMMANDS=r.HORIZ_LINE_TO|r.VERT_LINE_TO|r.LINE_TO|r.CURVE_TO|r.SMOOTH_CURVE_TO|r.QUAD_TO|r.SMOOTH_QUAD_TO|r.ARC,r}(v),d=((T={})[x.MOVE_TO]=2,T[x.LINE_TO]=2,T[x.HORIZ_LINE_TO]=1,T[x.VERT_LINE_TO]=1,T[x.CLOSE_PATH]=0,T[x.QUAD_TO]=4,T[x.SMOOTH_QUAD_TO]=2,T[x.CURVE_TO]=6,T[x.SMOOTH_CURVE_TO]=4,T[x.ARC]=7,T)}}]);