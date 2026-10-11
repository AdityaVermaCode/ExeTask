const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 380,
        height: 580,
        resizable: true, // Allows maximizing and resizing
        frame: true,     // Gives you the standard Windows drag bar, minimize, maximize, and close buttons
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    // Hide the default browser-style menu bar (File, Edit, etc.)
    win.setMenuBarVisibility(false);

    // Load your custom HTML file
    win.loadFile('index_test_2.html');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
