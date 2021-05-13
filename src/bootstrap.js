import App from './App.svelte';
import './global.css';

function mount(target) {
  const app = new App({
    target,
  });
}

const target = document.getElementById('_svelte_remote');

if (target) {
  mount(target);
}

export { mount };
