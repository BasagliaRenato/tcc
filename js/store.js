window.VerseStore = (() => {
  const key = 'verse-demo-v1';
  const defaults = {name:'Alex',avatar:'🎧',theme:'light',animations:true,notifications:true,language:'pt-BR',completed:6,xp:680,streak:7,session:true};
  let state = {...defaults};
  try {
    const saved = JSON.parse(localStorage.getItem(key) || 'null');
    if (saved && typeof saved === 'object') {
      for (const field of Object.keys(defaults)) if (typeof saved[field] === typeof defaults[field]) state[field] = saved[field];
    }
  } catch { /* O protótipo continua utilizável quando o armazenamento está indisponível. */ }
  state.completed = Math.max(0,Math.min(27,Math.floor(state.completed)));
  if (!['light','dark'].includes(state.theme)) state.theme = 'light';
  if (!['pt-BR','en'].includes(state.language)) state.language = 'pt-BR';
  let persistent = true;
  function save(patch) {
    state = {...state,...patch};
    try { localStorage.setItem(key,JSON.stringify(state)); } catch { persistent = false; }
    apply();
  }
  function apply() {
    document.documentElement.dataset.theme = state.theme;
    document.documentElement.dataset.motion = state.animations ? 'on' : 'off';
    document.documentElement.lang = state.language;
  }
  apply();
  return {get:()=>({...state}), save, isPersistent:()=>persistent,reset:()=>save({completed:0,xp:0,streak:0})};
})();
