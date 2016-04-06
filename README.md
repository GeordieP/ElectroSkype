#Web Skype Electron Wrapper

The Skype desktop app is awful on most platforms, but their web client is fantastic. Let's put one inside the other.

## Known Issues
- Notifications
-- Notification popup windows/toast notifications don't work, and may never be implemented. Sounds do still work, however.

---
## To Edit

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository, cd into it
# Install dependencies and run the app
npm install && npm start
```

## To Build
```bash
# run electron-packager in the current directory with appname, platform, arch, and Electron version parameters
electron-packager ./ AppName --platform=win32 --arch=ia32,x64 --version=0.36.0
```

Learn more about Electron and its API in the [documentation](http://electron.atom.io/docs/latest).

#### License [CC0 (Public Domain)](LICENSE.md)