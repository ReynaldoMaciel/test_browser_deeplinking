const fallbackToPlayStore = function() {
  window.location.replace('https://play.google.com/store?hl=pt_BR');
};

const fallbackToAppleStore = function() {
  window.location.replace('https://www.apple.com/br/ios/app-store/');
};

const openApp = function() {
  
  if (navigator.appVersion.includes('Android')) {
    setTimeout(fallbackToPlayStore, 250);
  }
  
  if (navigator.appVersion.includes('iPhone') || navigator.appVersion.includes('iPad')) {
    setTimeout(fallbackToAppleStore, 250);
  }
};

openApp();
