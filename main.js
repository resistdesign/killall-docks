const {app, BrowserWindow} = require('electron');

let MAIN_WINDOW;

app.on(
  'ready',
  () => {
    MAIN_WINDOW = new BrowserWindow(
      {
        width: 800,
        height: 600,
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

    MAIN_WINDOW.loadFile('./src/index.html');
    MAIN_WINDOW.once(
      'ready-to-show',
      () => {
        MAIN_WINDOW.show();
      }
    );
  }
);
