(() => {
  const D = window.PORTFOLIO, $ = s => document.querySelector(s);
  document.getElementById('yr').textContent = new Date().getFullYear();

  // Smooth scrolling
  if (window.Lenis && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const lenis = window.__lenis = new Lenis({ lerp: 0.09 });
    const raf = t => { lenis.raf(t); requestAnimationFrame(raf); }; requestAnimationFrame(raf);
    document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
      const id = a.getAttribute('href'); if (id.length > 1 && $(id)) { e.preventDefault(); const pane = a.dataset.tab || ($(id).closest('.pane') && $(id).closest('.pane').dataset.pane); if (pane) { showTab(pane); lenis.scrollTo('#desk', { offset: -70 }); } else lenis.scrollTo(id, { offset: -60 }); }
    }));
  }

  // Desk window tabs
  function showTab(name) {
    document.querySelectorAll('.win-tabs button').forEach(b => b.classList.toggle('on', b.dataset.tab === name));
    document.querySelectorAll('.pane').forEach(p => p.classList.toggle('on', p.dataset.pane === name));
    document.querySelectorAll('#navlinks a').forEach(l => l.classList.toggle('active', l.dataset.tab === name));
    const body = document.querySelector('.win-body'); if (body) body.scrollTop = 0;
    const pane = document.querySelector(`.pane[data-pane="${name}"]`);
    if (name === 'about') animateRings();
  }
  window.showTab = showTab;
  document.querySelectorAll('.win-tabs button').forEach(b => b.addEventListener('click', () => showTab(b.dataset.tab)));
  if (!window.Lenis) document.querySelectorAll('a[data-tab]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); showTab(a.dataset.tab); $('#desk').scrollIntoView({ behavior: 'smooth' }); }));
  let ringsDone = false;
  function animateRings() { if (ringsDone) return; ringsDone = true;
    document.querySelectorAll('.ring').forEach((r, i) => { const o = { p: 0 }; anime({ targets: o, p: +r.parentElement.style.getPropertyValue('--v'), duration: 1400, delay: i * 80, easing: 'easeOutExpo', update: () => r.style.setProperty('--p', o.p) }); }); }

  // Folders
  const fwrap = $('#folders');
  D.folders.forEach((f, i) => {
    const el = document.createElement('button');
    el.className = 'folder reveal'; el.style.setProperty('--c', f.color);
    const thumbs = f.items.filter(x => x.type !== 'link').slice(0, 3).map(x =>
      `<span style="background-image:url('${x.type === 'video' ? `https://i.ytimg.com/vi/${x.id}/mqdefault.jpg` : x.poster || x.thumb || x.src}')"></span>`).join('');
    el.innerHTML = `<div class="f-tab"><span>${String(i + 1).padStart(2, '0')}</span></div><div class="f-papers">${thumbs || '<span></span><span></span>'}</div>
      <div class="f-front"><small>${f.tag}</small><strong>${f.title}</strong><em>${f.items.length} item${f.items.length > 1 ? 's' : ''} <b>↘</b></em></div>`;
    el.addEventListener('click', () => openFolder(f));
    fwrap.appendChild(el);
  });

  // External link cards: icon + source + title, styled per link type
  const ICON = {
    album: '<path d="M4 5h16v14H4z"/><path d="M4 16l5-5 4 4 3-3 4 4"/><circle cx="15.5" cy="9" r="1.5"/>',
    drive: '<path d="M3 7h6l2 2h10v10H3z"/>',
    video: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9l5 3-5 3z"/>',
    article: '<path d="M6 3h9l4 4v14H6z"/><path d="M9 11h7M9 15h7M9 7h4"/>',
    link: '<path d="M10 14a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-1 1"/><path d="M14 10a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l1-1"/>'
  };
  function linkCard(x) {
    const h = x.href;
    const [kind, src] = /photos\.app\.goo\.gl|photos\.google/.test(h) ? ['album', 'Google Photos album']
      : /drive\.google/.test(h) ? ['drive', 'Google Drive folder']
      : /facebook\.com/.test(h) ? ['video', 'Facebook video']
      : /thenationonlineng/.test(h) ? ['article', 'The Nation · Article']
      : /linktr\.ee/.test(h) ? ['link', 'Linktree']
      : /tiktok\.com/.test(h) ? ['video', 'TikTok video'] : /instagram\.com|x\.com/.test(h) ? ['link', 'Social page'] : /canva\.site/.test(h) ? ['album', 'Canva portfolio'] : /github\.com/.test(h) ? ['link', 'GitHub'] : /vercel\.app|netlify\.app/.test(h) ? ['link', 'Live site'] : ['link', 'External link'];
    const label = x.label.replace(/^The Nation: |^Full album: | \((Facebook|Google Photos)\)$/g, '');
    return `<a class="g-item linkcard lk-${kind}" href="${h}" target="_blank" rel="noopener">
      <span class="lk-ico"><svg viewBox="0 0 24 24" aria-hidden="true">${ICON[kind]}</svg></span>
      <span class="lk-src">${src}</span><strong>${label}</strong><span class="lk-go">Open <i>↗</i></span></a>`;
  }

  // Modal
  const modal = $('#modal'), body = $('#modal-body');
  function openFolder(f) {
    $('#modal-tag').textContent = f.tag; $('#modal-title').textContent = f.title; $('#modal-desc').textContent = f.desc;
    modal.style.setProperty('--c', f.color);
    body.innerHTML = f.items.map(x => x.type === 'video'
      ? `<div class="g-item vid" data-id="${x.id}"><img loading="lazy" src="https://i.ytimg.com/vi/${x.id}/hqdefault.jpg" alt="Video thumbnail"><span class="play">▶</span></div>`
      : x.type === 'reel' ? `<div class="g-item reel"><video src="${x.src}" poster="${x.poster}" controls preload="none" playsinline></video><span class="cap">${x.cap}</span></div>`
      : x.type === 'mp4' ? `<div class="g-item wide"><video src="${x.src}" poster="${x.poster}" controls preload="none" playsinline></video></div>`
      : x.type === 'pdf' ? `<a class="g-item cert" href="${x.src}" target="_blank" rel="noopener"><img loading="lazy" src="${x.thumb}" alt="${x.cap}"><span>${x.cap}</span></a>`
      : x.type === 'site' ? `<a class="g-item site" href="${x.href}" target="_blank" rel="noopener"><img loading="lazy" src="${x.thumb}" alt="${x.title}"><span class="site-meta"><b>${x.title}</b><small>${x.cap}</small><em>${x.href.replace(/^https?:\/\//, '').replace(/\/$/, '')} ↗</em></span></a>`
      : x.type === 'image' ? `<a class="g-item" href="${x.src}" target="_blank" rel="noopener"><img loading="lazy" src="${x.src}" alt="${x.cap}"><span class="cap">${x.cap}</span></a>`
      : linkCard(x)).join('');
    body.querySelectorAll('.vid').forEach(v => v.addEventListener('click', () => {
      v.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${v.dataset.id}?autoplay=1" allow="autoplay; encrypted-media; fullscreen" allowfullscreen title="Video"></iframe>`;
    }));
    modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden';
    body.querySelectorAll('.g-item').forEach((g, i) => g.style.setProperty('--i', i));
    $('#close').focus();
  }
  document.querySelectorAll('[data-open]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); openFolder(D.folders.find(f => f.key === a.dataset.open)); }));
  function close() { body.querySelectorAll('video').forEach(v => v.pause()); modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); body.innerHTML = ''; document.body.style.overflow = ''; }
  $('#close').onclick = close; modal.onclick = e => { if (e.target === modal) close(); };
  addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  // Timeline + tools
  // Experience: tabs on one side, detail panel that flips in on the other
  const tabs = $('#xp-tabs'), panel = $('#xp-panel');
  tabs.innerHTML = D.experience.map(([d, r, o], i) =>
    `<button role="tab" aria-selected="${i === 0}" data-i="${i}"><span>${String(i + 1).padStart(2, '0')}</span><b>${o}</b><small>${d}</small></button>`).join('');
  function showXp(i) {
    const [d, r, o, t, tags = []] = D.experience[i];
    tabs.querySelectorAll('button').forEach(b => b.setAttribute('aria-selected', b.dataset.i == i));
    panel.innerHTML = `<p class="lbl">${d}</p><h3>${r}</h3><p class="org">${o}</p><p>${t}</p><div class="chips">${tags.map(x => `<span>${x}</span>`).join('')}</div><div class="xp-num">${String(i + 1).padStart(2, '0')}</div>`;
    anime({ targets: panel, opacity: [0, 1], rotateY: [-14, 0], translateX: [30, 0], duration: 650, easing: 'easeOutExpo' });
    anime({ targets: panel.querySelectorAll('.chips span'), opacity: [0, 1], translateY: [10, 0], delay: anime.stagger(50, { start: 150 }) });
  }
  tabs.addEventListener('click', e => { const b = e.target.closest('button'); if (b) showXp(+b.dataset.i); });
  showXp(0);

  // Back-to-top button
  const top = $('#totop');
  addEventListener('scroll', () => top.classList.toggle('show', scrollY > innerHeight * 0.8), { passive: true });
  top.onclick = () => window.__lenis ? window.__lenis.scrollTo(0) : scrollTo({ top: 0, behavior: 'smooth' });

  // Tool rings
  $('#rings').innerHTML = D.rings.map(([n, m, v]) => `<li style="--v:${v}"><span class="ring"><b>${m}</b></span><small>${n}</small></li>`).join('');

  // GitHub: curated projects + live profile numbers + any public repos not listed yet
  const repoCard = r => `<article class="repo reveal">
      <header><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.71 1.71.75.75 0 0 1-1.07 1.06A2.49 2.49 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.71A2.49 2.49 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.09a.25.25 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"/></svg>
      <b class="mono">${r.name}</b><span class="vis">${r.private ? 'Private' : 'Public'}</span></header>
      <p>${r.desc}</p>
      <div class="stack">${r.stack.map(x => `<span>${x}</span>`).join('')}</div>
      <footer>${r.live ? `<a href="${r.live}" target="_blank" rel="noopener">Live site ↗</a>` : ''}${r.repo ? `<a href="${r.repo}" target="_blank" rel="noopener">Code ↗</a>` : ''}</footer></article>`;
  const repos = $('#repos'); repos.innerHTML = D.github.map(repoCard).join('');
  fetch('https://api.github.com/users/Olajide9909').then(r => r.ok ? r.json() : null).then(u => {
    if (!u) return; $('#gh-avatar').src = u.avatar_url;
    $('#gh-stats').textContent = `${u.public_repos} public repos · ${u.followers} followers · joined ${new Date(u.created_at).getFullYear()}`;
  }).catch(() => {});
  fetch('https://api.github.com/users/Olajide9909/repos?per_page=100&sort=pushed').then(r => r.ok ? r.json() : []).then(list => {
    const known = new Set(D.github.map(g => g.name));
    list.filter(r => !r.fork && !known.has(r.name)).forEach(r => {
      repos.insertAdjacentHTML('beforeend', repoCard({ name: r.name, desc: r.description || 'Public repository', stack: [r.language || 'Code'], live: r.homepage, repo: r.html_url }));
      io.observe(repos.lastElementChild);
    });
  }).catch(() => {});

  // Intro
  anime.timeline({ easing: 'easeOutExpo' })
    .add({ targets: '#loader span', translateY: ['100%', 0], opacity: [0, 1], duration: 700 })
    .add({ targets: '#loader', opacity: 0, duration: 500, complete: () => $('#loader').remove() })
    .add({ targets: '.hero-title .line', translateY: ['105%', 0], opacity: [0, 1], delay: anime.stagger(120), duration: 1100 }, '-=200')
    .add({ targets: '.hero-text > *:not(.hero-title), .nav, .ticker li', opacity: [0, 1], translateY: [20, 0], delay: anime.stagger(60), duration: 800 }, '-=800')
    .add({ targets: '.hero-visual span', opacity: [0, 1], duration: 900 }, '-=600');

  // Safety net: never leave the loader up or the hero hidden
  setTimeout(() => {
    $('#loader')?.remove();
    document.querySelectorAll('.hero-text > *, .nav, .ticker li, .hero-visual span, .hero-title .line').forEach(el => { if (+getComputedStyle(el).opacity < 0.5) { el.style.opacity = 1; el.style.transform = 'none'; } });
  }, 3200);

  // Active link in nav
  const links = [...document.querySelectorAll('#navlinks a')];
  const spy = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id)); }), { rootMargin: '-45% 0px -50% 0px' });
  ['home', 'work'].forEach(id => spy.observe(document.getElementById(id)));
  new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { const t = document.querySelector('.win-tabs button.on'); links.forEach(l => l.classList.toggle('active', !!t && l.dataset.tab === t.dataset.tab)); } }), { rootMargin: '-45% 0px -50% 0px' }).observe(document.getElementById('desk'));

  // Scroll reveal
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; io.unobserve(e.target);
    e.target.classList.add('in');
    if (e.target.querySelector('.pane.on .ring')) animateRings();
  }), { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Tilt on folders and photo
  document.querySelectorAll('.folder').forEach(el => {
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
    });
    el.addEventListener('pointerleave', () => anime({ targets: el, rotateX: 0, rotateY: 0, duration: 600, easing: 'easeOutElastic(1,.6)', complete: () => el.style.transform = '' }));
  });
})();
