# PGB-Simplified-Media

A *Phonegap Build* simplified example for the Cordova 'Media' plugin using `cli-7.0.1` which uses minimal CSS & Javascript.

This example app only uses `cordova-plugin-media`. The plugins `cordova-plugin-file` and `cordova-plugin-compat` are automatically loaded by *Phonegap Build*.

* https://www.npmjs.com/package/cordova-plugin-media
* https://www.npmjs.com/package/cordova-plugin-file
* https://www.npmjs.com/package/cordova-plugin-compat (deprecated)

This example app uses the least amount of javascript and css possible. It expects everything to work. If you are having issues use [pgb-example-core-media](https://github.com/jessemonroy650/pgb-example-core-media), which has more feedback and error messages.

* When the app starts, it plays a trumpet "fanfare" an `ogg` audio clip.
* The "Play Other" is the "ice cream truck" song - a `wav` audio clip.
* The "Play Buddy Holly" is Buddy Holly's song entitled "Everyday".

## App Security 

* The following excessive security permissions were set
```
    <meta http-equiv="Content-Security-Policy" 
             content="default-src *; 
                      style-src * 'self' 'unsafe-inline' 'unsafe-eval'; 
                      script-src * 'self' 'unsafe-inline' 'unsafe-eval';">
```
* For `style-src * 'self' 'unsafe-inline' 'unsafe-eval';`
  * `'unsafe-eval'` is not needed for this example.
  * `'unsafe-inline'`  is required anytime `style` is used in an HTML element.

* For `script-src * 'self' 'unsafe-inline' 'unsafe-eval';`
  * I did not really figure this out, but is appears it just wants Objects.
  * It is unclear how to autoload code, or hook to autoload code.

This app does not address audio clips not the mobile device. Doing so will require the use of the [Cordova white-list](https://www.npmjs.com/package/cordova-plugin-whitelist)
