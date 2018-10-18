var mediaPlugin = {
    // Simple function: play until finished.
    play : function (audioFile) {
        var mediaObject = new Media(audioFile);
        document.getElementById('status').innerHTML = "loaded";
        mediaObject.play();
        document.getElementById('status').innerHTML = "playing => " + audioFile;
    }
}

