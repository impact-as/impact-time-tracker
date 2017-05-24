const {app, BrowserWindow, session} = require('electron');
const path = require('path');
const url = require('url');

const requestFilter = {
  urls: ['*://jira.impact.dk/rest/tempo-timesheets/3*']
};


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
	

	session.defaultSession.webRequest.onBeforeSendHeaders(requestFilter, (details, callback) => { //Why, you ask? The Tempo API defecates if we use the real userAgent
		details.requestHeaders['User-Agent'] = 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; AppleWebKit-537.36; Chrome-45.0.2454.85; Electron-0.34.2; Safari-537.36) like Gecko';
		callback({ cancel: false, requestHeaders: details.requestHeaders });
	});
	

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
