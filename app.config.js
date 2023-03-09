import 'dotenv/config'

export default {
  expo: {
    name: 'Jamit app',
    slug: 'jamit-app',
    plugins: [],
    privacy: 'public',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    scheme: `fb${process.env.FACEBOOK_APP_ID}`,
    facebookScheme: `fb${process.env.FACEBOOK_APP_ID}`,
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
      package: 'com.tomiwest.jamitapp',
      versionCode: 1,
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
      APP_ID: process.env.FACEBOOK_APP_ID,
      ENV: process.env.ENV,
      DATABASE_URI: process.env.DATABASE_URI,
      DATABASE_URI_DEV: process.env.DATABASE_URI_DEV,
      SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
      BASE_URL: process.env.BASE_URL,
    },
    owner: 'tomppatomppa',
  },
}
