const { app, BrowserWindow } = require("electron");

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadURL(`file://${__dirname}/index.html`);
}

app.on("ready", createWindow);
app.on("window-all-closed", function () {
  app.quit();
});
app.on("activate", function () {
  if (!mainWindow) {
    createWindow();
  }
});
