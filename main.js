'use strict';

{
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');

  btn.addEventListener('click', () => {
    const results = ['河野強し(ウルトラ超吉)', 'オクラモグラ先生(まあやん)','北野貴也(ウルトラ超大凶)'];
    const n = Math.floor(Math.random() * 3);

    result.textContent = results[n];

  });
}