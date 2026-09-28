const page=document.body.dataset.page;
const L=(h,t,k)=>`<a href="${h}" class="${page===k?'on':''}">${t}</a>`;
document.body.insertAdjacentHTML('afterbegin',`<header><a class="logo" href="index.html"><span class="flip">A</span>chieng.M</a>
<nav>${L('index.html','Home','home')}${L('portfolio.html','Portfolio','portfolio')}${L('contact.html','Contact','contact')}</nav></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer>© ${new Date().getFullYear()} Achieng.M. All rights reserved.</footer>`);
document.querySelectorAll('img').forEach(i=>i.onerror=()=>{i.style.visibility='hidden'});
