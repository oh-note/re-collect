import 'webextension-polyfill';
import { exampleThemeStorage } from '@chrome-extension-boilerplate/storage';

exampleThemeStorage.get().then(theme => {
  console.log('theme', theme);
});

console.log('background loaded');
console.log('background loaded 2');
console.log("Edit 'apps/chrome-extension/lib/background/index.ts' and save to reload.");

chrome.tabs.onActivated.addListener(({ tabId }) => {
  const tab = chrome.tabs.get(tabId).then((value) => {
    console.log(value);
  });
});

