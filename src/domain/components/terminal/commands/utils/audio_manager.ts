class AudioHandler {
    private static instance: AudioHandler;

    private _audio: HTMLAudioElement | null;

    constructor () {
        this._audio = null;
    }

    public static getInstance() {
        if (!AudioHandler.instance) {
            AudioHandler.instance = new AudioHandler();
        }

        return AudioHandler.instance;
    }

    public setAudio(audio: HTMLAudioElement | null) {
        this._audio = audio;
    }

    public getAudio() {
        return this._audio || null;
    }
}

export default AudioHandler;
