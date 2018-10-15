declare module "cordova-background-geolocation" {
	interface Sensors {
    platform: string;
    accelerometer: boolean;
    magnetometer: boolean;
    gyroscope: boolean;
    significant_motion?: boolean;
    motion_hardware?: boolean;
  }
}