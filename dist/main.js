(()=>{"use strict";const e=(e,n="",t="")=>{let i=document.createElement(e);if(n&&i.classList.add(n),t){let e=document.createTextNode(t);i.appendChild(e)}return i},n=function(){const n=e("main"),t=e("div","content"),i=e("h1","","Where elegance meets taste."),d=e("h2","","Discover one of italy's oldest and finest Pizzerias where you will get the best pizzas, wines, or pasta.");return n.appendChild(t),t.appendChild(i),t.appendChild(d),n},t=document.querySelector("div#content"),i=e("header"),d=e("div","logo"),a=e("h1","","Pizzeria Trentino");d.appendChild(a),i.appendChild(d);const l=e("ul","header-links"),c=e("li");let h=e("a","","Home");h.addEventListener("click",(()=>u("home"))),c.appendChild(h);const p=e("li");let o=e("a","","Menu");o.addEventListener("click",(()=>u("menu"))),p.appendChild(o);const s=e("li");let r=e("a","","Contact");function u(i){switch(function(){let e=document.querySelector("main");e&&(e.remove(),h.classList.remove("highlighted"),r.classList.remove("highlighted"),o.classList.remove("highlighted"))}(),i){case"home":C(h),t.appendChild(n());break;case"contact":C(r),t.appendChild(function(){const n=e("main"),t=e("div","content"),i=e("h2","","Contact us");return n.appendChild(t),t.appendChild(i),n}());break;case"menu":C(o),t.appendChild(function(){const n=e("main"),t=e("div","content"),i=e("h2","","Our Menu");return n.appendChild(t),t.appendChild(i),n}())}}function C(e){e.classList.add("highlighted")}r.addEventListener("click",(()=>u("contact"))),s.appendChild(r),l.appendChild(c),l.appendChild(p),l.appendChild(s),i.appendChild(l),t.appendChild(i),t.appendChild(n())})();