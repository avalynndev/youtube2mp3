module.exports = {
  packagerConfig: {
    icon: 'src/assets/images/favicon.ico'
  },
  rebuildConfig: {
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        iconUrl: 'https://yt2mp3.is-an.app/favicon.ico',
        setupIcon: 'src/assets/images/favicon.ico',
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};