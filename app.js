var app = {
    version : '1.0.0',
    audioFile : 'www/fanfare3.ogg', 
    wavFile   : 'www/ice_cream_truck.wav',
    buddyFile : 'www/BuddyHolly-Everyday.ogg',

    //
    hook : function () {
        document.getElementById('exitApp').addEventListener('touchend',
            function () { navigator.app.exitApp(); },
            false);
        document.getElementById('playOther').addEventListener('touchend',
            function () { mediaPlugin.play(cordova.file.applicationDirectory + app.wavFile); },
            false);
        document.getElementById('playBuddy').addEventListener('touchend',
            function () { mediaPlugin.play(cordova.file.applicationDirectory + app.buddyFile); },
            false);
    },
    //
    onDOMContentLoaded : function () {
        document.getElementById('navCodeName').innerHTML = navigator.appCodeName;
        document.getElementById('navName').innerHTML     = navigator.appName;
        document.getElementById('navVersion').innerHTML  = navigator.appVersion;
        document.getElementById('navPlatform').innerHTML = navigator.platform;
        //
        app.hook();
    },
    //
    onDeviceReady : function () {
        // - https://videlais.com/2014/08/21/lessons-learned-from-detecting-apache-cordova/
        document.getElementById('isCordovaApp').innerHTML = (typeof window.cordova !== "undefined");
        document.getElementById('appVersion').innerHTML   = app.version;
        //
        // Play some sound
        //
        mediaPlugin.play(cordova.file.applicationDirectory + app.audioFile);
    }
}
