const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

function createWindow () {
	win = new BrowserWindow({width: 1450, height: 750});

	win.loadURL(url.format({
		pathname: path.join(__dirname, '/dist/index.html'),
		protocol: 'file:',
		slashes: true
	}));

	if(process.NODE_EVN !== 'production') {
		win.webContents.openDevTools()
	}

	win.on('closed', () => {
		win = null;
	});
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
});
