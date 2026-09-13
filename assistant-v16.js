/* Public, reviewed business knowledge only. No credentials, private documents,
   client records, runtime retrieval, analytics or conversation persistence. */
(() => {
  'use strict';
  const reviewed='September 13, 2026';
  const contact=['Contact NorthRidge','/#contact'];
  const book=['Book a 30-minute consultation','https://calendly.com/deanfernandes/30min'];
  const techPage='/ai-transformation.html';
  const sources={
    dex:['Gartner: DEX blueprint (summary; full research requires access)','https://www.gartner.com/en/documents/5582427'],
    ai:['NIST: AI Risk Management Framework','https://www.nist.gov/itl/ai-risk-management-framework'],
    agents:['IBM Research: AI agents','https://research.ibm.com/blog/what-are-ai-agents-llm'],
    rag:['IBM: Retrieval-augmented generation','https://www.ibm.com/think/topics/retrieval-augmented-generation'],
    platform:['IBM: Platform engineering','https://www.ibm.com/think/topics/platform-engineering'],
    cloud:['IBM: Cloud computing','https://www.ibm.com/think/topics/cloud-computing'],
    cyber:['NIST: Cybersecurity Framework','https://www.nist.gov/cyberframework'],
    zero:['NIST: Zero Trust Architecture','https://csrc.nist.gov/pubs/sp/800/207/final'],
    observe:['IBM: Observability','https://www.ibm.com/think/topics/observability']
  };
  const entries=[];
  function add(id,title,keys,text,detail,url,source){entries.push({id,title,keys,text,detail,url:url||techPage,source});}
  add('dex','Digital Employee Experience (DEX)',/\bdex\b|digital employee|employee experience/i,
    'DEX is how employees experience devices, applications and IT support. It brings performance data and employee feedback together to identify friction. Dean built and managed DEX offers at NWN and DXC within Digital Workplace portfolios.',
    'A useful DEX discussion starts with application reliability, device health, employee feedback and recurring support issues. Agree a baseline and prioritize improvements; a technology score alone does not establish employee productivity or business value. NorthRidge brings offer-management experience to these decisions.',techPage+'#dex',sources.dex);
  add('workplace','Digital Workplace',/digital workplace|hybrid work|\bteams\b|microsoft 365|\bm365\b|collaboration/i,
    'Digital Workplace connects the tools, access and support employees need to work. DEX focuses on their experience of those tools. NorthRidge’s published expertise includes Microsoft 365 and Teams, secure hybrid work and workplace transformation.',
    'Dean built Global Workplace Services at Pearson for a program serving 52,000+ employees. NorthRidge discussions connect workplace investment, adoption, service quality and operating responsibilities—not just a software rollout.','/results.html#pearson');
  add('agents','Agentic AI',/agentic|ai agents?|autonomous agents?/i,
    'AI agents can use models and tools to carry out steps toward a goal. Unlike a simple question-answer interaction, an agent may choose actions and work through a task. Tool access and oversight matter because actions can affect business systems.',
    'A practical evaluation should define the allowed task, access boundaries, approval points and how failed actions are detected and reversed. This is general guidance, not a claim that the NorthRidge website assistant executes tasks.',techPage,sources.agents);
  add('rag','Retrieval-augmented generation (RAG)',/\brag\b|retrieval.augmented|knowledge base|grounding/i,
    'RAG supplies a language model with relevant material retrieved from a knowledge source before it answers. It can ground responses in business information, but retrieved material and generated answers still need evaluation.',
    'For a business assistant, separate public content from restricted records, keep sources current and check whether answers are actually supported. RAG is not the same as training a model. This website currently uses prepared answers, not a live RAG service.',techPage,sources.rag);
  add('aigovernance','AI governance and readiness',/ai (governance|risk|readiness|ready)|responsible ai|govern.*ai|hallucin|\bllm\b|generative ai|\bgenai\b/i,
    'AI readiness includes a clear use case, suitable data, accountable owners and a way to evaluate outputs. NIST’s AI Risk Management Framework organizes risk work around Govern, Map, Measure and Manage. AI-generated content can be wrong and needs context-appropriate review.',
    'NorthRidge’s published approach is to assess priorities, define ownership, then execute and learn. A sensible pilot has explicit success measures and review points before broader deployment. No framework alone guarantees safety or legal compliance.',techPage,sources.ai);
  add('platformengineering','Platform engineering',/platform engineering|developer platform|developer experience|\bdevops\b|\bidp\b/i,
    'Platform engineering provides reusable tools, self-service workflows and consistent environments for software teams. Its focus is the developer experience and dependable delivery, rather than asking every team to assemble its own tooling.',
    'Treat the internal platform as a product: understand developer needs, start with useful capabilities and improve through feedback. This is narrower than NorthRidge’s broader platform strategy work, which also includes offer design and commercialization.',techPage,sources.platform);
  add('platform','Platform strategy and offers',/\bplatforms?\b|offer management|commerciali[sz]|product strategy|portfolio|pricing strategy/i,
    'NorthRidge connects platform investment with customer needs, offer design, pricing, delivery and portfolio economics. Dean’s public experience includes NWN’s Experience Management Platform and DXC’s Workplace Experience Platform.',
    'The leadership question is how reusable capabilities become a differentiated, supportable offer with clear ownership and economics. See the career case studies for Dean’s responsibilities and broader outcomes; they are not guarantees for a new engagement.','/results.html');
  add('zerotrust','Zero Trust',/zero trust|least privilege|identity security/i,
    'Zero Trust avoids assuming that a user or device is trusted merely because of network location. Access decisions focus on users, devices and resources. It is an architectural approach—not a single product you install.',
    'Start by understanding important resources and access paths. Identity, device posture and carefully scoped permissions inform access decisions. A qualified security team should tailor implementation to the environment.',techPage,sources.zero);
  add('cyber','Cybersecurity and resilience',/cyber.?security|\bsecurity\b|ransomware|resilience|cyber risk|\bnist\b/i,
    'Cybersecurity leadership connects business risk, accountable decisions and operational safeguards. NIST CSF 2.0 uses six functions: Govern, Identify, Protect, Detect, Respond and Recover. NorthRidge’s board perspective includes cyber governance and resilience.',
    'Use the framework to discuss current and desired outcomes, ownership and investment priorities. It does not replace a security assessment or an incident-response team. For an active incident, contact your organization’s security lead promptly.','/board.html',sources.cyber);
  add('observability','Observability',/observability|telemetry|monitoring|\baiops\b/i,
    'Observability uses system outputs—such as logs, metrics and traces—to understand what is happening inside applications and infrastructure. It extends monitoring with context for investigation and improvement.',
    'Connect technical signals with the services people depend on. Decide who investigates a problem and what response is appropriate; collecting more telemetry without an operating process is not enough.',techPage,sources.observe);
  add('cloud','Cloud and modernization',/\bcloud\b|\bsaas\b|\bpaas\b|\biaas\b|azure|\baws\b|moderni[sz]/i,
    'Cloud computing provides computing resources on demand. SaaS delivers applications; PaaS provides a development platform; IaaS provides infrastructure. Modernization decisions should consider workload needs, operating responsibilities and costs—not assume every workload belongs in the same place.',
    'Public, private and hybrid approaches serve different needs. NorthRidge’s published advisory approach starts with business priorities and architecture, then sequences investment and delivery. Provider selection and current prices require a specific assessment.',techPage,sources.cloud);
  add('ai','AI and transformation',/\bai\b|artificial intelligence|automation|transformation|technology strategy/i,
    'NorthRidge helps connect AI and technology investment with a business agenda: choose the use cases worth pursuing, establish ownership, assess data and platform readiness, and measure progress. Automation should support an understood workflow, not just add another tool.',
    'The published initial agenda is assess and prioritize, define ownership, then execute and learn. Discuss the decisions, baseline, delivery capacity and risks before selecting technology. Outcomes and scope are agreed for each engagement.',techPage,sources.ai);
  add('fractional','Fractional and interim leadership',/fractional|interim|leadership gap|vacancy|transition|part.time/i,
    'Fractional leadership provides ongoing executive capacity at an agreed cadence. Interim leadership covers a temporary vacancy or transition. Focused advisory addresses a defined decision or initiative. Scope and authority are agreed around the business need.',
    'NorthRidge starts by clarifying the challenge, then agrees the mandate, decision rights, deliverables and measures. A permanent executive may be more appropriate when the organization needs enduring, daily leadership of a large function.','/leadership.html');
  add('duration','Engagement timing and delivery',/how long|duration|90.day|first 90|deliverables|engagement process|how.*engagement|getting started/i,
    'Duration follows the mandate. An initial 90-day agenda can establish a baseline, align priorities and begin execution. Fractional engagements can continue at an agreed cadence; interim and project work include a transition or completion plan.',
    'The first conversation covers the challenge, desired outcomes and timing. Deliverables, executive access, decision rights, fees and progress measures are agreed before work begins. This is not a fixed-duration promise.','/leadership.html');
  add('transaction','Transactions and due diligence',/due diligence|acquisition|\bm&a\b|private equity|\bpe\b|\bvc\b|investor|merger/i,
    'The advisory page describes support for investors, acquirers and portfolio companies: assess architecture, technical debt, product strategy, engineering leadership, cybersecurity and AI readiness; after close, turn findings into integration priorities.',
    'A transaction mandate needs an agreed scope, evidence access and decision timetable. The published experience includes M&A integration; the website does not promise a particular transaction result or provide legal or investment advice.','/leadership.html');
  add('nwn','NWN leadership',/\bnwn\b|experience management platform|\bemp\b/i,
    'At NWN, Dean led product, engineering and technology strategy and architected the Experience Management Platform. The public case study describes contributions to $300M+ in revenue growth through broader platform and portfolio transformation. He also built and managed the DEX offer.',
    'This is prior-role experience, not a NorthRidge client engagement. The published growth figure relates to the broader role and portfolio; it should not be presented as a DEX-only outcome.','/results.html#nwn');
  add('dxc','DXC leadership',/\bdxc\b|workplace experience platform/i,
    'At DXC, Dean led a 250-person global product and engineering organization supporting a $2B workplace portfolio, built the Workplace Experience Platform and built and managed the DEX offer.',
    'The public case study reports a 20–30% cost-to-serve reduction through platform automation and resolution-time improvements above 25%. These are broader career outcomes, not DEX-only results or promises for a new engagement.','/results.html#dxc');
  add('pearson','Pearson leadership',/pearson/i,
    'Dean built Global Workplace Services at Pearson, leading a team of up to 120 and a workplace program serving 52,000+ employees. The public case study describes Microsoft 365 and Teams deployment and service-desk consolidation.',
    'The site reports 35% cost savings from the workplace program. This example demonstrates enterprise-scale workplace leadership and is separate from NorthRidge client work.','/results.html#pearson');
  add('nortel','Nortel and CSC experience',/nortel|\bcsc\b/i,
    'Dean progressed to CTO and General Manager at Nortel, building and scaling a $50M+ Network Application Services business. His background also includes executive IT leadership at CSC.',
    'The public executive page describes experience on both sides of enterprise IT: operating internal technology organizations and building platforms and services that enterprise buyers evaluate.','/executive.html');
  add('board','Board and advisory opportunities',/board|director|governance/i,
    'Dean welcomes independent director and advisory conversations involving technology investment, AI, cybersecurity, recurring-revenue models and transformation. His perspective connects operating responsibilities with commercial outcomes.',
    'The board page organizes this contribution around investment strategy, risk and resilience, and growth and integration. Contact NorthRidge with the organization, mandate and timing; this does not claim an existing appointment.','/board.html');
  add('partners','Partner ecosystem',/partner|ecosystem|vendor|microsoft|nexthink|cisco|hpe|palo alto|genesys|five9|lenovo|zoom|dell|servicenow/i,
    'The ecosystem page lists selected technology companies relevant to the work, including Nexthink. The mix of providers and specialists depends on the engagement. Their inclusion is not a claim that every provider supplies DEX or that a particular partnership is contracted.',
    'Provider selection should follow requirements, integration needs, operating capabilities and agreed responsibilities. NorthRidge can discuss the right mix; the assistant cannot confirm vendor contracts, certifications or current product pricing.','/partners.html');
  add('insights','Insights, speaking and media',/insights?|article|media|speaking|keynote|interview|forbes|fedscoop/i,
    'Insights includes published commentary on AI infrastructure, cloud transformation and DEX, plus executive coverage. Speaking or media inquiries can be sent through the business contact form.',
    'The page includes Dean’s July 2025 DEX interview featured by NWN, Forbes commentary on aging infrastructure and a contributed FedScoop article. These links provide public context rather than private company information.','/insights.html');
  add('executive','Executive experience',/executive|\bcto\b|\bcio\b|\bcpo\b|hiring|hire|resume|\bcv\b|full.time|background|about dean|who is dean|who.*northridge/i,
    'Dean Fernandes founded NorthRidge Advisory and brings 25+ years of technology and product leadership across NWN, DXC, Pearson, CSC and Nortel. The website covers full-time executive opportunities, fractional and interim leadership, and focused advisory.',
    'His published business experience spans platform engineering, product and offer management, enterprise IT, global teams and portfolio economics. Explore the executive page or download the public profile.','/executive.html');
  add('results','Results and career case studies',/results|case stud|track record|outcomes|achievements|experience/i,
    'The Results page separates business context, Dean’s role, actions and results for NWN, DXC, Pearson and Nortel. These are achievements in prior executive roles, not claims about NorthRidge client engagements.',
    'Use the examples to understand the scale and nature of the work. NorthRidge does not guarantee that a new engagement will reproduce a past result.','/results.html');
  const defaults=['Explore services','Technology topics','Book a meeting'];
  const reply=(id,text,links=[contact],chips=defaults)=>({id,text,links,chips});
  function answer(raw,lastId){
    const q=String(raw??'').normalize('NFKC').trim().slice(0,500);
    if(!q)return reply('empty','Please type a question—for example, “What is DEX?” or “How does fractional leadership work?”');
    if(/home address|personal (email|phone|info|information|life)|family|spouse|married|children|birthday|date of birth|salary|password|credentials|api key|private (files|documents|records)|client (list|records|data)/i.test(q))return reply('private','I only use approved public business content. I cannot share personal details, private documents, credentials or client records. Please use the business contact form for an appropriate inquiry.');
    if(/^(hi|hello|hey|thanks|thank you)[!. ]*$/i.test(q))return reply('hello','Hello! I can explain NorthRidge’s services and business experience, answer reviewed technology questions, or help you find a page.');
    if(/privacy|store.*chat|save.*chat|conversation.*(data|stored)|how.*assistant|live (research|search)|are you.*ai/i.test(q))return reply('privacy','I use a prepared library of public business information and researched technology explanations. I do not browse live, access private documents or send this chat to an AI provider. This assistant does not save conversations; they clear when the page reloads. Please do not enter confidential information.',[['Privacy policy','/privacy.html']]);
    if(/^(tell me more|more|details|yes|how does that work|next step)[?.! ]*$/i.test(q)){
      const e=entries.find(e=>e.id===lastId);return e?{...reply(e.id,e.detail,[[e.title,e.url],...(e.source?[e.source]:[]),contact]),researched:!!e.source}:reply('clarify','Which topic would you like to explore? Try DEX, AI governance, cloud, or fractional leadership.');
    }
    if(/^(all pages|site map|navigate|show.*pages)[?.! ]*$/i.test(q))return reply('pages','Choose a section of the website:',[['Home','/'],['Executive experience','/executive.html'],['Advisory','/leadership.html'],['AI, transformation and DEX',techPage],['Results','/results.html'],['Insights','/insights.html'],['Partners','/partners.html'],['Board opportunities','/board.html'],contact]);
    if(/^(technology topics|what (technology )?topics|what can you answer)[?.! ]*$/i.test(q))return reply('topics','I have reviewed explanations for DEX, Digital Workplace, agentic AI, RAG, AI governance, platform engineering, cloud, cybersecurity, Zero Trust and observability. Ask about one topic or compare two.',['dex','agents','cyber'].map(id=>{const e=entries.find(x=>x.id===id);return [e.title,e.url];}),['What is DEX?','What is agentic AI?','What is Zero Trust?']);
    if(/^(explore services|services|what (services )?do you (do|offer|provide)|what does northridge (do|offer)|how can (you|northridge) help( me| us)?|help me|not sure)[?.! ]*$/i.test(q))return reply('services','NorthRidge offers fractional and interim technology leadership, focused advisory, and AI/transformation support. Dean also welcomes full-time executive and board opportunities. Which need best describes yours?',[['Engagement options','/leadership.html'],contact],['Fractional leadership','AI transformation','Executive experience']);
    if(/\b(book|schedule|reschedule|cancel)\b.*\b(meeting|call|consultation|appointment)\b|^book a meeting$|\bavailability\b/i.test(q))return reply('booking','The Calendly link shows available times for a 30-minute consultation and the location before confirmation. For an existing booking, use the reschedule or cancellation link in its confirmation email. I cannot book or change a meeting in this chat.',[book,contact]);
    if(/^(contact( dean| northridge)?|email|phone|speak to (dean|a human)|talk to (dean|a human))[?.! ]*$|how (can|do) i (contact|reach)|business email/i.test(q))return reply('contact','Use contact@northridgeadvisory.net or the contact form. Share the business need and timing; do not include confidential records. I do not send messages on your behalf.',[contact,book]);
    let matches=entries.filter(e=>e.keys.test(q));
    const specificTech=matches.filter(e=>e.source&&e.id!=='ai');
    if(specificTech.length)matches=matches.filter(e=>!['ai','platform','executive','board','partners','results'].includes(e.id));
    const price=/\b(pricing|price|prices|cost|costs|fees?|rates?|quote|retainer|charge|charges)\b/i.test(q);
    if(price&&(!matches.length||/your|northridge|engagement|consultation|fractional|what does it cost/i.test(q)))return reply('pricing','NorthRidge does not publish fixed fees. Scope, duration, intensity and responsibilities determine the commercial arrangement. Ask for a scoped discussion; I cannot issue a quote.',[contact,book]);
    if(/latest|today|current (price|version)|which.*best|best.*(tool|vendor|software)|recommend.*(tool|vendor|software)/i.test(q))return reply('current','I cannot verify live product changes, prices or rank the best vendor for your environment. I can explain a topic from the reviewed library; a specific recommendation needs current product evidence and your requirements.',[...matches.slice(0,1).flatMap(e=>e.source?[e.source]:[[e.title,e.url]]),contact]);
    if(matches.length){
      const selected=matches.slice(0,/compare|versus|\bvs\b|difference|\band\b/i.test(q)?2:1);
      const links=selected.flatMap(e=>[[e.title,e.url],...(e.source?[e.source]:[])]);
      return {...reply(selected[0].id,selected.map(e=>e.title+': '+e.text).join('\n\n'),links,['Tell me more','Book a meeting','Technology topics']),researched:selected.some(e=>e.source)};
    }
    return reply('unknown','I don’t have a verified answer to that question in my knowledge library, and I don’t want to guess. Try naming a technology topic, choose a website section, or contact NorthRidge for a specific answer. I have not forwarded your question.',[contact,book],['Technology topics','All pages','Explore services']);
  }
  if(typeof module!=='undefined'&&module.exports)module.exports={answer,entries};
  if(typeof document==='undefined')return;
  const root=document.querySelector('.guide');if(!root)return;
  root.innerHTML=`<button class="nr-launch" aria-controls="nr-chat" aria-expanded="false"><img src="/northridge-icon-v13.svg" alt=""><span>Ask NorthRidge<small>Business · technology · booking</small></span></button><section id="nr-chat" class="nr-chat" role="dialog" aria-modal="false" aria-labelledby="nr-chat-title" hidden><header class="nr-chat-head"><img src="/northridge-icon-v13.svg" alt="NorthRidge logo"><div><strong id="nr-chat-title">NorthRidge Assistant</strong><small>Public business & technology knowledge</small></div><button type="button" class="nr-close" aria-label="Close assistant">×</button></header><div class="nr-messages" role="log" aria-live="polite" aria-relevant="additions text" tabindex="0" aria-label="Conversation"></div><div class="nr-suggestions" aria-label="Suggested questions"></div><form class="nr-compose" novalidate><label class="nr-sr" for="nr-question">Ask NorthRidge a question</label><input id="nr-question" maxlength="500" placeholder="Ask about DEX, AI or NorthRidge…" autocomplete="off"><button type="submit">Send</button></form><footer class="nr-chat-note">Reviewed knowledge · Not live AI or web search<br>Do not enter personal or confidential information.</footer></section>`;
  const launch=root.querySelector('.nr-launch'),chat=root.querySelector('.nr-chat'),log=root.querySelector('.nr-messages'),input=root.querySelector('input'),suggestions=root.querySelector('.nr-suggestions');let last=null;
  function close(){chat.hidden=true;launch.setAttribute('aria-expanded','false');launch.focus();}
  launch.addEventListener('click',()=>{chat.hidden=!chat.hidden;launch.setAttribute('aria-expanded',String(!chat.hidden));if(!chat.hidden)input.focus();});
  root.querySelector('.nr-close').addEventListener('click',close);
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!chat.hidden)close();});
  function message(text,who='assistant',links=[],researched=false){
    const item=document.createElement('div');item.className='nr-message '+who;
    String(text).split('\n\n').forEach(text=>{const p=document.createElement('p');p.textContent=text;item.append(p);});
    const seen=new Set();links.forEach(([label,url])=>{if(seen.has(url))return;seen.add(url);if(!url.startsWith('/')&&!url.startsWith('https://'))return;const a=document.createElement('a');a.textContent=label+' →';a.href=url;if(url.startsWith('https:')){a.target='_blank';a.rel='noopener noreferrer';}else a.addEventListener('click',close);item.append(a);});
    if(researched){const p=document.createElement('small');p.textContent='General explanation · Sources reviewed '+reviewed;p.className='nr-reviewed';item.append(p);}
    log.append(item);requestAnimationFrame(()=>{log.scrollTop=item.offsetTop;});
  }
  function chips(labels){suggestions.replaceChildren();labels.forEach(label=>{const b=document.createElement('button');b.type='button';b.textContent=label;b.addEventListener('click',()=>respond(label));suggestions.append(b);});}
  function respond(raw){
    const q=String(raw??'').trim().slice(0,500);if(q)message(q,'user');input.value='';
    try{const result=answer(q,last);if(!result?.text)throw new Error('Empty answer');message(result.text,'assistant',result.links,result.researched);last=entries.some(e=>e.id===result.id)?result.id:null;chips(result.chips);}
    catch{message('Sorry, I couldn’t prepare an answer. Please try a shorter question or contact NorthRidge directly. Your question has not been sent.','assistant',[contact,book]);last=null;}
  }
  root.querySelector('form').addEventListener('submit',e=>{e.preventDefault();respond(input.value);input.focus();});
  message('Welcome to NorthRidge. Ask about our services, public executive experience, or technology topics such as AI, DEX and cybersecurity. I use reviewed answers with sources—not live web searches.');chips(defaults);
  const navigation=document.querySelector('.navlinks');if(navigation&&!navigation.querySelector('a[href*="calendly.com"]')){const a=document.createElement('a');a.href=book[1];a.textContent='Book a consultation';a.target='_blank';a.rel='noopener noreferrer';navigation.append(a);}
})();
