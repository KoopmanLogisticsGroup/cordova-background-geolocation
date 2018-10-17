declare module "cordova-background-geolocation" {
  /**
  * Append your own log-messages into the plugin's logging database.  The following methods are available at [[BackgroundGeolocation.logger]]:
  *
  ## Methods

  | method     | logLevel | icon            |
  |------------|----------|-----------------|
  |`error`     |`ERROR`   | ❗️              |
  |`warn`      |`WARNING` | ⚠️              |
  |`debug`     |`DEBUG`   | 🐞              |
  |`info`      |`INFO`    | ℹ️              |
  |`notice`    |`INFO`    | 🔵              |
  |`header`    |`INFO`    | *message wrapped in box*    |
  |`on`        |`INFO`    | 🎾              |
  |`off`       |`INFO`    | 🔴              |
  |`ok`        |`INFO`    | ✅              |


  ## Examples
  *
  * @example
  *
  * ```javascript
  * BackgroundGeolocation.logger.error("Something bad happened");
  * BackgroundGeolocation.logger.warn("Something weird happened");
  * BackgroundGeolocation.logger.debug("Debug message");
  * BackgroundGeolocation.logger.info("Something informative");
  * BackgroundGeolocation.logger.notice("Something interesting");
  * BackgroundGeolocation.logger.header("Something bold");
  * BackgroundGeolocation.logger.on("Something on or positive");
  * BackgroundGeolocation.logger.off("Something off or negative");
  * BackgroundGeolocation.logger.ok("Something affirmative happened");
  * ```
  */
  interface Logger {
    error: (message:string) => void;
    warn: (message:string) => void
    debug: (message:string) => void
    info: (message:string) => void
    notice: (message:string) => void
    header: (message:string) => void
    on: (message:string) => void
    off: (message:string) => void
    ok: (message:string) => void
  }
}
