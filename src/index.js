const { app, BrowserWindow, ipcMain } = require("electron")
const path = require("path")
const ipc = ipcMain

if (require('electron-squirrel-startup')) {
  app.quit();
}

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: 'assets/images/icon.png',
        icon: path.join(__dirname, 'assets/images/icon.png'),
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: true,
            preload: path.join(__dirname, "preload.js")
        }
    })

    win.loadFile("src/index.html")
    win.setBackgroundColor("#343B48")

    // minimize app
    ipc.on("minimizeApp", () => {
        console.log("clicked on minimize btn")
        win.minimize()
    })

    // maximize restore app
    ipc.on("maximizeRestoreApp", () => {
        if (win.isMaximized()) {
            console.log("clicked on restore")
            win.restore()
        } else {
            win.maximize()
        }
    })

    // check if is maximized
    win.on("maximize", () => {
        win.webContents.send("isMaximized")
    })

    // check if is restored
    win.on("unmaximize", () => {
        win.webContents.send("isRestored")
    })

    // close app
    ipc.on("closeApp", () => {
        console.log("clicked on close btn")
        win.close()
    })
}

app.whenReady().then(() => {
    createWindow()

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
})