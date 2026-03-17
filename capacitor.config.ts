import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.femaxehub.app',
  appName: 'FemAxeHub',
  webDir: 'out',
  server: {
    androidScheme: 'https',
    hostname: 'femaxehub.app'
  }
};

export default config;
