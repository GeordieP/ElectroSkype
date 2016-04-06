#Web Skype Electron Wrapper

##Please note: This application is ONLY for text chat. Voice and video calls are not supported.

The Skype desktop app is awful on most platforms, but their web client is fantastic. Let's put one inside the other.

In addition to a better Skype text client, ElectroSkype supports custom stylesheets. To change the stylesheet, replace `skype.css` in `[install directory]/resources/app/app/css/skypeStyles/` and re-start the application. To use the default style, delete or rename `skype.css`.

## Known Issues
- Notifications
-- Notification popup windows/toast notifications don't work, and may never be implemented. Sounds do still work, however.
- Voice and video calls are not supported, due to their reliance on a signed browser plugin.
- Older P2P group chats are not supported by the web client, and will not show up in the contacts list. Newer group chats work just fine. (Log into [the web client](https://web.skype.com) in your browser to check any of your existing groups)

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
