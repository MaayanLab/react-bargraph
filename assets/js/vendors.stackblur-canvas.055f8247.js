(self.webpackChunkreact_bargraph=self.webpackChunkreact_bargraph||[]).push([[854],{2449:(t,r,a)=>{"use strict";function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a.d(r,{vR:()=>c});var e=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],o=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function f(t,r,a,e,o){if("string"===typeof t&&(t=document.getElementById(t)),!t||"object"!==n(t)||!("getContext"in t))throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");var f=t.getContext("2d");try{return f.getImageData(r,a,e,o)}catch(c){throw new Error("unable to access image data: "+c)}}function c(t,r,a,n,c,s){if(!(isNaN(s)||s<1)){s|=0;var u=f(t,r,a,n,c);u=function(t,r,a,n,f,c){for(var s,u=t.data,b=2*c+1,g=n-1,v=f-1,l=c+1,p=l*(l+1)/2,y=new i,h=y,x=1;x<b;x++)h=h.next=new i,x===l&&(s=h);h.next=y;for(var m=null,w=null,d=0,C=0,E=e[c],S=o[c],k=0;k<f;k++){h=y;for(var I=u[C],B=u[C+1],D=u[C+2],N=u[C+3],R=0;R<l;R++)h.r=I,h.g=B,h.b=D,h.a=N,h=h.next;for(var T=0,_=0,j=0,A=0,G=l*I,q=l*B,z=l*D,F=l*N,H=p*I,J=p*B,K=p*D,L=p*N,M=1;M<l;M++){var O=C+((g<M?g:M)<<2),P=u[O],Q=u[O+1],U=u[O+2],V=u[O+3],W=l-M;H+=(h.r=P)*W,J+=(h.g=Q)*W,K+=(h.b=U)*W,L+=(h.a=V)*W,T+=P,_+=Q,j+=U,A+=V,h=h.next}m=y,w=s;for(var X=0;X<n;X++){var Y=L*E>>S;if(u[C+3]=Y,0!==Y){var Z=255/Y;u[C]=(H*E>>S)*Z,u[C+1]=(J*E>>S)*Z,u[C+2]=(K*E>>S)*Z}else u[C]=u[C+1]=u[C+2]=0;H-=G,J-=q,K-=z,L-=F,G-=m.r,q-=m.g,z-=m.b,F-=m.a;var $=X+c+1;$=d+($<g?$:g)<<2,H+=T+=m.r=u[$],J+=_+=m.g=u[$+1],K+=j+=m.b=u[$+2],L+=A+=m.a=u[$+3],m=m.next;var tt=w,rt=tt.r,at=tt.g,nt=tt.b,et=tt.a;G+=rt,q+=at,z+=nt,F+=et,T-=rt,_-=at,j-=nt,A-=et,w=w.next,C+=4}d+=n}for(var ot=0;ot<n;ot++){var ft=u[C=ot<<2],ct=u[C+1],it=u[C+2],st=u[C+3],ut=l*ft,bt=l*ct,gt=l*it,vt=l*st,lt=p*ft,pt=p*ct,yt=p*it,ht=p*st;h=y;for(var xt=0;xt<l;xt++)h.r=ft,h.g=ct,h.b=it,h.a=st,h=h.next;for(var mt=n,wt=0,dt=0,Ct=0,Et=0,St=1;St<=c;St++){C=mt+ot<<2;var kt=l-St;lt+=(h.r=ft=u[C])*kt,pt+=(h.g=ct=u[C+1])*kt,yt+=(h.b=it=u[C+2])*kt,ht+=(h.a=st=u[C+3])*kt,Et+=ft,wt+=ct,dt+=it,Ct+=st,h=h.next,St<v&&(mt+=n)}C=ot,m=y,w=s;for(var It=0;It<f;It++){var Bt=C<<2;u[Bt+3]=st=ht*E>>S,st>0?(st=255/st,u[Bt]=(lt*E>>S)*st,u[Bt+1]=(pt*E>>S)*st,u[Bt+2]=(yt*E>>S)*st):u[Bt]=u[Bt+1]=u[Bt+2]=0,lt-=ut,pt-=bt,yt-=gt,ht-=vt,ut-=m.r,bt-=m.g,gt-=m.b,vt-=m.a,Bt=ot+((Bt=It+l)<v?Bt:v)*n<<2,lt+=Et+=m.r=u[Bt],pt+=wt+=m.g=u[Bt+1],yt+=dt+=m.b=u[Bt+2],ht+=Ct+=m.a=u[Bt+3],m=m.next,ut+=ft=w.r,bt+=ct=w.g,gt+=it=w.b,vt+=st=w.a,Et-=ft,wt-=ct,dt-=it,Ct-=st,w=w.next,C+=n}}return t}(u,0,0,n,c,s),t.getContext("2d").putImageData(u,r,a)}}var i=function t(){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.r=0,this.g=0,this.b=0,this.a=0,this.next=null}}}]);