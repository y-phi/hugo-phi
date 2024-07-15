(() => {
  const change = (theme) => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = `theme-${theme}`;
  };
  const hours = (new Date()).getHours();
  const defaultTheme = (hours >= 6 && hours < 18) ? 'light' : 'dark';
  const theme = localStorage.getItem('theme') ?? defaultTheme;
  change(theme);
  window.addEventListener('load', () => {
    const sw = document.querySelector('#theme-switch');
    sw.addEventListener('click', () => {
      const currentTheme = document.documentElement.className.replace('theme-', '');
      change(currentTheme == 'light' ? 'dark' : 'light');
    })
  });
})();