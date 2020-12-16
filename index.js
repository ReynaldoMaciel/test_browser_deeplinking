const fallbackToPlayStore = function() {
  window.location.replace('https://play.google.com/store/apps/details?id=br.com.coocafe.coocafecop');
};

const fallbackToAppleStore = function() {
  window.location.replace('https://apps.apple.com/br/app/coocafe/id1457360330');
};

const openApp = function() {
  if (navigator.appVersion.includes('iPhone') || navigator.appVersion.includes('iPad')) {
    setTimeout(fallbackToAppleStore, 250);
  } else {
    setTimeout(fallbackToPlayStore, 250);
  }
};

openApp();
