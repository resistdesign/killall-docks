const {
  remote: {
    BrowserWindow
  } = {}
} = require('electron');

const MAIN_WINDOW = new BrowserWindow(
  {
    width: 800,
    height: 600,
    frame: false
  }
);

MAIN_WINDOW.show();
