const {
  app,
  BrowserWindow,
  Rectangle
} = require('electron');

let MAIN_WINDOW;

app.on(
  'ready',
  () => {
    const {screen} = require('electron');
    const {width, height} = screen.getPrimaryDisplay().workAreaSize;

    MAIN_WINDOW = new BrowserWindow(
      {
        x: 0,
        y: 0,
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
