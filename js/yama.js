/*!
 * Yama JavaScript library v0.1.0
 * (c) Onur Çelebi
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
var yama=null;yama=function(){var b="_obs_";var e={div:1,span:1,input:1,select:1,option:1,button:1};var d=function(r,t,o){var p=r[t],q=p,n=function(){return q},s=function(u){p=q;return q=o.call(r,t,p,u)};if(delete r[t]){if(Object.defineProperty){Object.defineProperty(r,t,{get:n,set:s})}else{if(Object.prototype.__defineGetter__&&Object.prototype.__defineSetter__){Object.prototype.__defineGetter__.call(r,t,n);Object.prototype.__defineSetter__.call(r,t,s)}}}};function f(p){var n=this,q=[];n.onItemAdded=null;n.onItemSet=null;n.onItemRemoved=null;function o(r){if(!(r in n)){Object.defineProperty(n,r,{configurable:true,enumerable:true,get:function(){return q[r]},set:function(s){q[r]=s;if(typeof n.onItemSet==="function"){n.onItemSet(r,s)}}})}}n.push=function(){var r;for(var s=0,t=arguments.length;s<t;s++){r=q.length;q.push(arguments[s]);o(r);if(typeof n.onItemAdded==="function"){n.onItemAdded(r,arguments[s])}}return q.length};n.pop=function(){if(~q.length){var r=q.length-1,s=q.pop();delete n[r];if(typeof n.onItemRemoved==="function"){n.onItemRemoved(r,s)}return s}};n.unshift=function(){for(var r=0,s=arguments.length;r<s;r++){q.splice(r,0,arguments[r]);o(q.length-1);if(typeof n.onItemAdded==="function"){n.onItemAdded(r,arguments[r])}}return q.length};n.shift=function(){if(~q.length){var r=q.shift();q.length===0&&delete n[index];if(typeof n.onItemRemoved==="function"){n.onItemRemoved(0,r)}return r}};n.splice=function(r,t){var w=[],v,x;r=!~r?q.length-r:r;t=(t==null?q.length-r:t)||0;while(t--){v=q.splice(r,1)[0];w.push(v);delete n[q.length];if(typeof n.onItemRemoved==="function"){n.onItemRemoved(r+w.length-1,v)}}for(var s=2,u=arguments.length;s<u;s++){q.splice(r,0,arguments[s]);o(q.length-1);if(typeof n.onItemAdded==="function"){n.onItemAdded(r,arguments[s])}r++}return w};Object.defineProperty(n,"length",{configurable:false,enumerable:true,get:function(){return q.length},set:function(r){var s=Number(r);if(s%1===0&&s>=0){if(s<q.length){n.splice(s)}else{if(s>q.length){n.push.apply(n,new Array(s-q.length))}}}else{throw new RangeError("Invalid array length")}return r}});Object.getOwnPropertyNames(Array.prototype).forEach(function(r){if(!(r in n)){Object.defineProperty(n,r,{configurable:false,enumerable:true,writeable:false,value:Array.prototype[r]})}});if(p instanceof Array){n.push.apply(n,p)}}function m(n){var o=window.onload;if(typeof window.onload!="function"){window.onload=n}else{window.onload=function(){o();n()}}}function k(q,s){var p=s.split(".");var u=q.length-1;var r=null;var w=null;var x=true;do{r=q[u];u--;var n=r;var t=null;for(var o=0;o<p.length&&n;o++){var v=p[o];t=n;n=n[v]}if(typeof(n)!="undefined"){x=false;w=p[p.length-1];r=t}}while(u>=0&&x);if(u==-1){console.log("Unable to find reference to "+s)}return{context:r,contextAccessor:w}}var g={text:function(n){return function(o){n.innerHTML=o}},avalue:function(n){return function(o){n.value=o}},onclick:function(p,n,o,q,r){return function(){p.onclick=function(){r[q].call(o,function(t){var s=k(n,t);return s.context[s.contextAccessor]})}}},value:function(r,n,p,s,t){var o=r.onkeyup;var q=false;r.onkeyup=function(u){if(o){o.call(this,u)}q=true;p[s]=this.value;q=false};return function(u){if(!q){r.value=u}}},onenter:function(q,n,p,r,s){var o=q.onkeyup;q.onkeyup=function(t){if(o){o.call(this,t)}if(t.keyCode==13){s[r].call(p)}}}};function i(q,t,y,s,r){var n=k(t,r);var w=n.context;var u=n.contextAccessor;if(!w){return}if(g[s]){var p=g[s];var o=b+u;if(!w[o]){w[o]=[]}var x=t.slice(0);var v=p(y,x,w,r,q);if(v){w[o].push(v);if(typeof(w[u])!="undefined"){v(w[u])}}}}function l(n){if(e[n]){return document.createElement(n)}return null}function c(q,t,s){var o=s.split(".");var n=yama.components;for(var p=0;p<o.length;p++){var r=o[p];if(n[r]){n=n[r]}else{n=null;break}}if(!n||typeof(n)!="function"){throw"Component not found : "+s}var u=new n(t,q);return u}function h(q,t,z,A,s,y,v,r,p){var o=b+r;var n=k(t,r);var x=n.context;var u=n.contextAccessor;var p=p||"index";if(!x[o]){x[o]=[]}var w=null;w=function(){return function(D){z.innerHTML="";if(!D){return}for(var C=0;C<D.length;C++){var B={};B[p]=C;B[v]=D[C];t.push(B);a(q,t,z,false,A,s+1,y);t.pop()}}}();if(w){x[o].push(w);w(x[u])}}function a(P,K,x,M,p,v,t){var F=v;if(F<p.length){var A=p[F];var N=A.match(/([ \t]+)?([\w\.]+)?:*([\w\.]*)?(.*)?/);var r=N[1].length;var E=N[2];var q=N[3];var G=N[4];if(F==v){if(M){if(E!="root"){throw"Must have a root tagged element"}else{return a(P,K,x,false,p,F+1,r)}}}if(r<=t){return F}var B=null;var J=F+1;var z=K[K.length-1];if(x){if(e[E]){B=l(E);if(q){B.className=q;z[q]=B}x.appendChild(B);if(G){var u=G.split(/\s+/);for(var H=0;H<u.length;H++){var s=u[H];var C=s.match(/([ \t]+)?([\w\.]+)?:*([\w\.]*)?(.*)?/);var y=C[2];var D=C[3];if(y){i(P,K,B,y,D)}}}}else{if(E=="foreach"){var o=null;var O=null;var L=q;if(G){var u=G.split(/\s+/);for(var H=0;H<u.length;H++){var s=u[H];var C=s.match(/([ \t]+)?(\w+)?:*([\w\.]*)?(.*)?/);var y=C[2];var D=C[3];if(y){o=y;O=D}}}h(P,K,x,p,F,r,o,O,L);J=a(P,K,null,false,p,F+1,r)}else{var I=c(z,x,E);if(q){z[q]=I}if(G){var u=G.split(/\s+/);for(var H=0;H<u.length;H++){var s=u[H];var C=s.match(/([ \t]+)?([\w\.]+)?:*([\w\.]*)?(.*)?/);var y=C[2];var D=C[3];if(y){if(typeof(z[D])=="function"){I[y]=function(){z[D].call(z)}}else{if(typeof(z[D])!="undefined"){var w=b+D;if(!z[w]){z[w]=[]}var n=null;n=function(){return function(Q){I[y]=Q}}();if(n){z[w].push(n);if(typeof(z[D])!="undefined"){n(z[D])}}}}}}}}}}if(B){J=a(P,K,B,false,p,F+1,r)}J=a(P,K,x,false,p,J,t);return J}return F}var j={register:function(s){var t=s.draw.toString().replace(/^[^\/]+\/\*!?/,"").replace(/!\*\/[^\/]+$/,"");var n={draw:1,init:1,name:1};var q=s.name.split(".");var p=function(F,z){var y=[];if(z){y.push(z)}y.push(this);var A=y[y.length-1];var D=[];for(var w in s){if(!n[w]){if(typeof(s[w])!="function"){var B=this;this[w]=s[w];d(this,w,function(H,O,J){if(J instanceof Array){var G=new f(J);var K=function(){var P=H;return function(){var Q=b+P;if(A[Q]){var T=A[Q];for(var S=0;S<T.length;S++){var R=T[S];if(R){R(G)}}}}}();G.onItemAdded=K;G.onItemSet=K;G.onItemRemoved=K;B[H]=G;K();return G}else{var I=b+H;if(A[I]){var L=A[I];for(var N=0;N<L.length;N++){var M=L[N];if(M){M(J)}}}return J}});D.push(w)}else{A[w]=s[w]}}}var E=t.match(/[^\r\n]+/g);a(s,y,F,true,E,0,-1);for(var x=0;x<D.length;x++){var C=D[x];this[C]=this[C]}if(s.init){s.init.call(this,F)}};var r={};var v=this.components;for(var o=0;o<q.length;o++){var u=q[o];if(o==q.length-1){if(v[u]){throw"Component name collision : "+u}else{v[u]=p;v[u].prototype=r}}else{if(!v[u]){v[u]={}}}v=v[u]}},addLoadEvent:function(n){m(n)},bindings:g,components:{}};return j}();