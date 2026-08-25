document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});}});});
const toggle=document.querySelector('.mobile-toggle');
const mobile=document.getElementById('mobileMenu');
if(toggle&&mobile){toggle.addEventListener('click',()=>mobile.classList.toggle('open'));mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobile.classList.remove('open')));}
const current=(location.pathname.split('/').pop()||'index.html');
document.querySelectorAll('.menu a,.mobile-menu a').forEach(a=>{const href=a.getAttribute('href').split('#')[0];if(href===current)a.classList.add('active');});
document.querySelectorAll('.schema-point').forEach(point=>{point.addEventListener('click',()=>{document.querySelectorAll('.schema-point').forEach(p=>p.classList.remove('active'));point.classList.add('active');const detail=document.getElementById('schemaDetail');if(detail){detail.innerHTML='<b>'+point.dataset.title+':</b> '+point.dataset.text;}});});
