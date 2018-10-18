# PGB-Simplified-Media
A *Phonegap Build* simplified example for Cordova 'Media' plugin using `cli-7.0.1`.

This example app uses the least amount of javascript and css possible. It only uses `cordova-plugin-media`. The plugin `cordova-plugin-file` is loaded automatically by *Phonegap Build*.

* When the app starts it plays a trumpet "fanfare" audio clip.
* The "Play Other" is the "ice cream truck" song.
* The "Play Buddy Holly" is Buddy Holly's song entitled "Everyday".

## App Security 

* For `style-src * 'self' 'unsafe-inline' 'unsafe-eval';`
  * `'unsafe-eval'` is not needed for this example.
  * `'unsafe-inline'`  is required anytime `style` is used in an HTML element.

* For `script-src * 'self' 'unsafe-inline' 'unsafe-eval';`
  * I did not really figure this out, but is appears it just wants Objects.
  * It is unclear how to autoload code, or hook to autoload code.
