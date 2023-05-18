const toggle = document.querySelector('#switch-theme');

window.addEventListener('DOMContentLoaded', getTheme);
toggle.addEventListener('click', switchTheme);

const button = document.querySelector('#fetchUserData');
const input = document.querySelector('#input');

const user = 'miranlegin';
const URL = `https://api.github.com/users/${user}`;
const params = {
  cache: 'no-cache',
  headers: {
    Authorization: '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',
    'X-GitHub-Api-Version': '2022-11-28',
  },
};

const getData = async () => {
  const response = await fetch(URL, params);
  const data = await response.json();

  console.log(data);
};

button.addEventListener('click', getData);
