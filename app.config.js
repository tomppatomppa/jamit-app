import 'dotenv/config'

export default {
  expo: {
    name: 'jamit-app',
    slug: 'jamit-app',
    privacy: 'public',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      eas: {
        projectId: '2fd65afc-f0ad-414a-b81c-62291bbdf86d',
      },
      env: process.env.ENV,
      uri: process.env.DATABASE_URI,
      uri_dev: process.env.DATABASE_URI_DEV,
    },
    owner: 'tomppatomppa',
  },
}
