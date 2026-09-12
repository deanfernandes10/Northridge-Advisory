(()=>{
 const panel=document.querySelector('.guide-panel');if(!panel)return;
 const booking='https://calendly.com/deanfernandes/30min';
 const topics=[
 ['Executive opportunities','Explore Dean’s technology and product leadership experience for full-time executive roles.','/executive.html','hire hiring executive cto cio career full time'],
 ['Fractional & interim leadership','Explore leadership support for organizations that need executive expertise through a fractional or interim engagement.','/leadership.html','fractional interim services leadership'],
 ['AI & transformation','Learn about consulting and transformation advisory for technology and business priorities.','/ai-transformation.html','ai artificial intelligence transformation consulting strategy'],
 ['Board opportunities','Explore board and advisory opportunities with Dean.','/board.html','board governance advisory'],
 ['Results & experience','Review the published examples of Dean’s experience and outcomes.','/results.html','results examples experience outcomes case studies'],
 ['Partner ecosystem','Explore the technology companies shown in Northridge’s partner ecosystem.','/partners.html','partners technology microsoft zoom dell genesys five9'],
 ['Insights','Read the insights published on the Northridge website.','/insights.html','insights articles resources'],
 ['Book a consultation','Choose an available time on Calendly. The booking page shows the meeting details before you confirm.',booking,'book booking meeting availability schedule appointment consultation'],
 ['Contact Dean','Use the inquiry form or email contact@northridgeadvisory.net. Phone and company are optional.','/#contact','contact email phone company inquiry'],
 ['Pricing & engagement scope','Pricing and availability depend on the engagement. Send Dean your requirements to discuss scope and a quote.','/#contact','price cost pricing fees rates quote retainer payment'],
 ['Privacy','Read how information submitted through the site is used.','/privacy.html','privacy data personal information'],
 ['Home & overview','Start with the overview of Northridge Advisory and explore the site’s main sections.','/','home overview about navigate help']
 ];
 const close=panel.querySelector('.guide-close');panel.replaceChildren(close);
 const heading=document.createElement('h2');heading.textContent='Northridge Virtual Assistant';panel.append(heading);
 const intro=document.createElement('p');intro.textContent='Find a page, explore services, or ask a question. Answers use this site’s published information.';panel.append(intro);
 const log=document.createElement('div');log.setAttribute('aria-live','polite');log.setAttribute('role','log');panel.append(log);
 const choices=document.createElement('div');choices.className='guide-options';panel.append(choices);
 function answer(t){log.replaceChildren();const p=document.createElement('p');p.textContent=t[1];const a=document.createElement('a');a.href=t[2];a.textContent=t[0]+' →';log.append(p,a);}
 for(const label of ['Explore services','Book a meeting','Pricing & FAQs','All pages']){const b=document.createElement('button');b.type='button';b.textContent=label;b.addEventListener('click',()=>{if(label==='Book a meeting')answer(topics[7]);else if(label==='Pricing & FAQs')answer(topics[9]);else{log.replaceChildren();topics.filter((_,i)=>label==='All pages'||i<4).forEach(t=>{const a=document.createElement('a');a.href=t[2];a.textContent=t[0];a.style.display='block';a.style.padding='7px 0';log.append(a);});}});choices.append(b);}
 const form=document.createElement('form');const input=document.createElement('input');input.placeholder='Ask about services, pricing, booking…';input.setAttribute('aria-label','Your question');input.required=true;input.maxLength=300;const send=document.createElement('button');send.type='submit';send.textContent='Ask';form.append(input,send);panel.append(form);
 form.addEventListener('submit',e=>{e.preventDefault();const words=input.value.toLowerCase().match(/[a-z]+/g)||[];const ranked=topics.map(t=>({t,score:words.filter(w=>w.length>2&&(t[0]+' '+t[3]).toLowerCase().includes(w)).length})).sort((a,b)=>b.score-a.score);answer(ranked[0].score?ranked[0].t:['Ask Dean','I don’t have a published answer to that question. Please contact Dean for details.','/#contact']);input.value='';});
 const style=document.createElement('style');style.textContent='.guide-panel{max-height:80vh;overflow:auto;width:min(390px,calc(100vw - 32px))}.guide-panel form{display:flex;gap:8px;margin-top:18px}.guide-panel input{min-width:0;flex:1;padding:10px;border:1px solid #64748b;border-radius:7px;font:inherit}.guide-panel button:not(.guide-close){padding:10px;border:1px solid #cbd5e1;border-radius:7px;background:#edf3ff;color:#12243b;cursor:pointer;font:inherit}.guide-panel [role=log]{margin:12px 0;line-height:1.6}.guide-panel a{font-weight:600}';document.head.append(style);
 const navigation=document.querySelector('.navlinks');if(navigation){const a=document.createElement('a');a.href=booking;a.textContent='Book a consultation';a.target='_blank';a.rel='noopener';navigation.append(a);}
})();
