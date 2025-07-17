const replacements = {};

function loadConfigAndApply() {
  fetch(chrome.runtime.getURL('sounds/config.json'))
    .then(response => {
      if (!response.ok) throw new Error('not found');
      return response.json();
    })
    .then(config => {
      Object.keys(config).forEach(key => {
        replacements[key] = config[key].label;
      });
      // Запускаем замену сразу и повторно при изменениях DOM
      replaceSoundTexts();
      const observer = new MutationObserver(replaceSoundTexts);
      observer.observe(document.body, { childList: true, subtree: true });
      setInterval(replaceSoundTexts, 50);
      addInputListeners();
    })
    .catch(() => {
      // fallback: дефолтные надписи
      const defaultLabels = {
        "Found tone": "custom_sound1",
        "Found tone enhanced": "custom_sound2",
        "Large crowd": "custom_sound3",
        "Lone wolf howling": "custom_sound4",
        "Radio impact swirl": "custom_sound5",
        "Thunder clap": "custom_sound6",
        "Whoosh whip": "custom_sound7"
      };
      Object.keys(defaultLabels).forEach(key => {
        replacements[key] = defaultLabels[key];
      });
      replaceSoundTexts();
      const observer = new MutationObserver(replaceSoundTexts);
      observer.observe(document.body, { childList: true, subtree: true });
      setInterval(replaceSoundTexts, 50);
      addInputListeners();
    });
}

function replaceSoundTexts() {
  document.querySelectorAll('button[id^="selected."]').forEach(btn => {
    const textDiv = btn.querySelector('div.Text-sc-e4573c9-0.dOqsbu');
    if (textDiv) {
      const orig = textDiv.textContent.trim();
      if (replacements[orig]) textDiv.textContent = replacements[orig];
    }
  });
  document.querySelectorAll('input[name="matchFoundSound"]').forEach(input => {
    const orig = input.value.trim();
    if (replacements[orig]) input.value = replacements[orig];
  });
  document.querySelectorAll('span.Text-sc-e4573c9-0.dOqsbu').forEach(span => {
    const orig = span.textContent.trim();
    if (replacements[orig]) span.textContent = replacements[orig];
  });
}

function addInputListeners() {
  document.querySelectorAll('input[name="matchFoundSound"]').forEach(input => {
    input.addEventListener('input', replaceSoundTexts);
    input.addEventListener('change', replaceSoundTexts);
  });
}

loadConfigAndApply();