const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  const window = new BrowserWindow({ width: 1024, height: 600 });

  window.setMenuBarVisibility(null);
  window.loadURL(`https://play.qobuz.com/`);
});
