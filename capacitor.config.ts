import type { CapacitorConfig } from '@capacitor/cli'; // Importing the CapacitorConfig type from the Capacitor CLI

const config: CapacitorConfig = {
  appId: 'io.ionic.starter', // Unique identifier for the app, typically in reverse domain name notation
  appName: 'my-app', // The name of the app as it will appear on the device
  webDir: 'www' // Directory containing the web assets to be used by Capacitor
};

export default config; // Exporting the configuration object as the default export
