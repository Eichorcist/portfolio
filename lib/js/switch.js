
var storedTheme = localStorage.getItem('theme');
if (storedTheme) {
  switchColor(storedTheme);
}

function switchColor(mode) {
  var elementsWithColorMode = document.querySelectorAll('*[data-color-mode]');

  elementsWithColorMode.forEach(function (element) {
    var currentMode = element.getAttribute('data-color-mode');

    if (currentMode === 'light' && mode === 'dark') {
      element.setAttribute('data-color-mode', 'dark');
    } else if (currentMode === 'dark' && mode === 'light') {
      element.setAttribute('data-color-mode', 'light');
    }
  });

  localStorage.setItem('theme', mode);

  console.log('Current color mode:', mode);
}
