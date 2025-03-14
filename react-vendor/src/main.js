const { app, BrowserWindow } = require('electron/main')
const path = require('path')
const {format} = require("url");

function createWindow () {
    const win = new BrowserWindow({
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })
    // win.maximize()

    const startURL = format({
        pathname: path.join(__dirname, '../build/index.html'),
        protocol: 'file:',
    });

    win.loadURL(startURL);
    // win.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform === 'darwin') {
        app.quit()
    }
})