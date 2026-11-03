window.VerseUI = (() => {
  const paths = {
    home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z"/>',
    learn:'<path d="M4 4h6a3 3 0 0 1 3 3v14a4 4 0 0 0-4-3H4zM13 7a3 3 0 0 1 3-3h5v14h-4a4 4 0 0 0-4 3"/>',
    music:'<path d="M9 18V5l12-2v13M9 8l12-2"/><ellipse cx="6" cy="18" rx="3" ry="3"/><ellipse cx="18" cy="16" rx="3" ry="3"/>',
    user:'<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',
    settings:'<path d="m9 3-1 3-3 1-2 3 2 2-1 4 3 2 3-1 2 4 3-2 1-3 4-1 1-4-3-2V5l-4-2-2 2Z"/><circle cx="12" cy="12" r="3"/>',
    arrow:'<path d="M5 12h14m-5-5 5 5-5 5"/>',back:'<path d="M19 12H5m5-5-5 5 5 5"/>',chevron:'<path d="m9 5 7 7-7 7"/>',
    flame:'<path d="M12 3c2 5 7 6 7 12a7 7 0 0 1-14 0c0-3 2-6 4-7-1 4 0 5 1 5 2-1 3-5 2-10Z"/>',
    bolt:'<path d="m13 2-9 12h7l-1 8 10-12h-7z"/>',
    headphones:'<path d="M3 15v-3a9 9 0 0 1 18 0v3M3 14h4v7H4a1 1 0 0 1-1-1zm18 0h-4v7h3a1 1 0 0 0 1-1z"/>',
    check:'<path d="m5 12 4 4L19 6"/>',lock:'<rect x="5" y="10" width="14" height="11" rx="3"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    play:'<path d="m9 5 11 7-11 7z"/>',search:'<circle cx="10" cy="10" r="7"/><path d="m15 15 6 6"/>',
    heart:'<path d="M20 5a5 5 0 0 0-8 1 5 5 0 0 0-8-1c-5 5 3 11 8 15 5-4 13-10 8-15Z"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2"/>',
    moon:'<path d="M20 15A9 9 0 0 1 9 4a9 9 0 1 0 11 11Z"/>',
    trophy:'<path d="M7 3h10v6a5 5 0 0 1-10 0zm0 2H3v3a4 4 0 0 0 5 4m9-7h4v3a4 4 0 0 1-5 4m-4 2v6m-5 1h10"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',sparkles:'<path d="m12 3 3 6 6 3-6 3-3 6-3-6-6-3 6-3zm8-1v4m-2-2h4"/>',
    book:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 3v18m4-12h4m-4 4h4"/>',layers:'<path d="m12 3 10 6-10 6L2 9zm-10 12 10 6 10-6M2 12l10 6 10-6"/>',
    close:'<path d="m6 6 12 12M6 18 18 6"/>',logout:'<path d="M9 4H4v16h5m6-13 5 5-5 5M8 12h12"/>',bell:'<path d="M5 16h14l-2-3V9a5 5 0 0 0-10 0v4zm4 4h6"/>',globe:'<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',volume:'<path d="m11 4-6 5H2v6h3l6 5zm4 4a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m3 6 9 7 9-7"/>'
  };
  const icon=(name,cls='')=>`<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]||paths.music}</svg>`;
  const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const t=(pt,en)=>VerseStore.get().language === 'en' ? en : pt;
  const brand=()=>`<a class="brand" href="#home" aria-label="Verse — ${t('Início','Home')}"><span class="brand-mark">${icon('music')}</span>verse<span class="brand-dot">.</span></a>`;
  function art(song,extra='') {
    return `<div class="cover ${song.shape} ${extra}" style="--cover:${song.color}" role="img" aria-label="${t('Capa ilustrada de','Illustrated cover for')} ${esc(song.title)}"><span class="art-orbit"></span><span class="art-object"></span><span class="art-line"></span><div class="cover-type"><small>${esc(song.artist)}</small><strong>${esc(song.title)}</strong></div><span class="cover-stamp">V / ${String(VerseData.songs.indexOf(song)+1).padStart(2,'0')}</span></div>`;
  }
  function songCard(song) {
    return `<a class="song-card" href="#song/${song.id}">${art(song)}<div class="song-meta"><span class="song-genre">${esc(song.genre)}</span><span class="difficulty"><i></i>${esc(song.difficulty)}</span></div><h3>${esc(song.title)}</h3><p>${esc(song.artist)}</p><div class="skill-tags">${song.skills.map(s=>`<span>${esc(s)}</span>`).join('')}</div><span class="song-open" aria-hidden="true">${icon('arrow')}</span></a>`;
  }
  let timer;
  function toast(message) {
    const node=document.querySelector('#toast');
    node.textContent=message;node.classList.add('visible');clearTimeout(timer);
    timer=setTimeout(()=>node.classList.remove('visible'),4000);
  }
  function progress(value,max,label) {
    return `<div class="progress" role="progressbar" aria-label="${esc(label)}" aria-valuenow="${value}" aria-valuemin="0" aria-valuemax="${max}"><span style="width:${Math.min(100,value/max*100)}%"></span></div>`;
  }
  return {icon,esc,t,brand,art,songCard,toast,progress};
})();
