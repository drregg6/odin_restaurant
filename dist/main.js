!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=(e,t)=>{const n=document.createElement(e);return t&&(n.innerHTML=t),n}},function(e,t,n){const i=n(0),r=n(2),o=n(3),a=n(4);let l=document.querySelector("#content"),u=[];const s=i("header"),d=i("h1","The Odin Restaurant"),c=i("nav");c.classList.add("nav");const p=i("ul");for(let e=0;e<3;e++){let t=i("li");t.classList.add("nav-item"),t.innerHTML=0===e?'<a href="#">Home</a>':1===e?'<a href="#">About</a>':'<a href="#">Contact</a>',u.push(t)}const m=i("div");m.classList.add("container"),s.appendChild(d);for(let e=0;e<u.length;e++)p.appendChild(u[e]);c.appendChild(p),l.appendChild(s),l.appendChild(c),l.appendChild(m);const f=document.querySelectorAll("a");for(let e=0;e<f.length;e++)f[e].addEventListener("click",(function(){let t=`${f[e].innerText.toLowerCase()}`;for(;m.firstChild;)m.removeChild(m.firstChild);"home"===t?m.appendChild(o()):"contact"===t?m.appendChild(a()):m.appendChild(r())}))},function(e,t,n){const i=n(0);e.exports=()=>{const e=i("div"),t=i("p","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis congue mauris malesuada aliquam. Aliquam dapibus, dolor non euismod porttitor, lectus nisi interdum lacus, non tincidunt ligula dolor non mauris. Morbi sit amet felis dolor. Aenean nisl nulla, pulvinar at sem et, molestie laoreet dui. Morbi eu mattis libero. Duis fringilla iaculis finibus. Suspendisse vel neque elit. Nulla volutpat euismod velit. Etiam facilisis non sapien vel pretium. Sed sit amet dui quam. Integer fringilla pulvinar gravida. Aliquam mattis mattis elit non ultricies. In sed risus suscipit, dictum dolor et, feugiat metus. Maecenas laoreet cursus interdum. Duis vel lectus tempor, aliquet erat eget, ullamcorper ex. "),n=i("h2","About");return e.classList.add("sub-element"),e.setAttribute("id","about"),e.appendChild(n),e.appendChild(t),e}},function(e,t,n){const i=n(0);e.exports=()=>{const e=i("div"),t=i("img");return e.classList.add("sub-element"),e.setAttribute("id","home"),t.setAttribute("src","../images/random.jpg"),e.appendChild(t),e}},function(e,t,n){const i=n(0);e.exports=()=>{const e=i("div");e.classList.add("sub-element"),e.setAttribute("id","contact");const t=i("h2","Contact"),n=i("form"),r=i("textarea");r.setAttribute("placeholder","Message...");const o=i("input");return o.setAttribute("type","submit"),o.setAttribute("value","Submit"),n.appendChild(r),n.appendChild(o),e.appendChild(t),e.appendChild(n),e}}]);