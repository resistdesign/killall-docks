const {
  app,
  BrowserWindow,
  ipcMain
} = require('electron');

// DEV CODE:
try {
  const path = require('path');
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
    hardResetMethod: 'exit'
  });
} catch (error) {
  console.log('Reload Error:', error);
}

let MAIN_WINDOW;

app.requestSingleInstanceLock();
app.setLoginItemSettings({
  openAtLogin: true
});
app.dock.hide();

app.on(
  'ready',
  () => {
    const {screen} = require('electron');
    const {width, height: screenHeight} = screen.getPrimaryDisplay().workAreaSize;
    const height = 100;
    const barHeight = 25;

    MAIN_WINDOW = new BrowserWindow(
      {
        x: 0,
        y: (screenHeight - height) + barHeight,
        width,
        height,
        center: true,
        frame: false,
        skipTaskbar: true,
        alwaysOnTop: true,
        useContentSize: true,
        movable: false,
        resizable: false,
        minimizable: false,
        maximizable: false,
        closable: false,
        focusable: false,
        fullscreen: false,
        fullscreenable: false,
        transparent: true,
        backgroundColor: 0x00000000,
        hasShadow: false,
        titleBarStyle: 'customButtonsOnHover',
        show: false
      }
    );

    MAIN_WINDOW.setMenu(null);
    MAIN_WINDOW.setIgnoreMouseEvents(true, {forward: true});
    MAIN_WINDOW.setMenuBarVisibility(false);
    MAIN_WINDOW.loadFile('./src/index.html');
    MAIN_WINDOW.once(
      'ready-to-show',
      () => {
        MAIN_WINDOW.showInactive();
      }
    );
  }
);

ipcMain.on('enter-bar', () => {
  MAIN_WINDOW.setIgnoreMouseEvents(false);
});

ipcMain.on('leave-bar', () => {
  MAIN_WINDOW.setIgnoreMouseEvents(true, {forward: true});
});
