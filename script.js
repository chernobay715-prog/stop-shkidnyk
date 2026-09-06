document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});}});});
const toggle=document.querySelector('.mobile-toggle');
const mobile=document.getElementById('mobileMenu');
if(toggle&&mobile){toggle.addEventListener('click',()=>mobile.classList.toggle('open'));mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobile.classList.remove('open')));}
const current=(location.pathname.split('/').pop()||'index.html');
document.querySelectorAll('.menu a,.mobile-menu a').forEach(a=>{const href=a.getAttribute('href').split('#')[0];if(href===current)a.classList.add('active');});
document.querySelectorAll('.schema-point').forEach(point=>{point.addEventListener('click',()=>{document.querySelectorAll('.schema-point').forEach(p=>p.classList.remove('active'));point.classList.add('active');const detail=document.getElementById('schemaDetail');if(detail){detail.innerHTML='<b>'+point.dataset.title+':</b> '+point.dataset.text;}});});

// Внутрішня перелінковка локальних SEO-сторінок
(function(){
  const pages=['index.html','private.html','business.html'];
  if(!pages.includes(current)) return;
  const main=document.querySelector('main');
  if(!main) return;

  const section=document.createElement('section');
  section.className='section soft';
  section.id='local-services';
  section.innerHTML=`
    <div class="container">
      <div class="section-head">
        <div><div class="eyebrow">Послуги у вашому місті</div><h2>STOPШКІДНИК у Сумах та Вінниці</h2></div>
        <p>Оберіть місто та потрібну послугу. Працюємо з приватними клієнтами й бізнесом.</p>
      </div>
      <div class="grid split">
        <div class="card">
          <h3>Суми</h3>
          <p><a href="znishchennia-tarhaniv-sumy.html">Знищення тарганів у Сумах →</a></p>
          <p><a href="znishchennia-klopiv-sumy.html">Знищення клопів у Сумах →</a></p>
          <p><a href="deratyzatsiia-sumy.html">Дератизація у Сумах →</a></p>
          <p><a href="pest-control-sumy.html">Pest Control для бізнесу у Сумах →</a></p>
        </div>
        <div class="card">
          <h3>Вінниця</h3>
          <p><a href="znishchennia-tarhaniv-vinnytsia.html">Знищення тарганів у Вінниці →</a></p>
          <p><a href="znishchennia-klopiv-vinnytsia.html">Знищення клопів у Вінниці →</a></p>
          <p><a href="deratyzatsiia-vinnytsia.html">Дератизація у Вінниці →</a></p>
          <p><a href="pest-control-vinnytsia.html">Pest Control для бізнесу у Вінниці →</a></p>
        </div>
      </div>
    </div>`;

  const footer=document.querySelector('footer');
  if(footer) footer.parentNode.insertBefore(section,footer); else main.appendChild(section);
})();

// Google Analytics 4 — STOPШКІДНИК
(function(){
  const GA_ID='G-8J8L6E9YQ5';
  window.dataLayer=window.dataLayer||[];
  window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};
  window.gtag('js',new Date());
  window.gtag('config',GA_ID);

  if(!document.querySelector('script[data-stop-ga4]')){
    const s=document.createElement('script');
    s.async=true;
    s.src='https://www.googletagmanager.com/gtag/js?id='+GA_ID;
    s.setAttribute('data-stop-ga4','true');
    document.head.appendChild(s);
  }

  document.querySelectorAll('a[href^="tel:"]').forEach(a=>a.addEventListener('click',()=>{
    window.gtag('event','phone_click',{event_category:'lead',event_label:a.getAttribute('href')});
  }));

  document.querySelectorAll('a[href^="mailto:"]').forEach(a=>a.addEventListener('click',()=>{
    window.gtag('event','email_click',{event_category:'lead',event_label:a.getAttribute('href')});
  }));

  document.querySelectorAll('form').forEach(form=>form.addEventListener('submit',()=>{
    window.gtag('event','generate_lead',{event_category:'lead',form_name:form.getAttribute('name')||'contact'});
  }));
})();
