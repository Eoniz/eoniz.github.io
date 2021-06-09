import { ICommand } from "../../types";
import AudioHandler from '../utils/audio_manager';

const admin: ICommand = {
    name: "admin",
    description: "🔑 Administrate the website 🔑",
    execute: async (args, kwargs, { pushToStd }) => {
        if (args.length === 2 && args[1] === "stop") {
            const audio = AudioHandler.getInstance().getAudio();

            if (audio) {
                audio.pause();
                audio.currentTime = 0;
                AudioHandler.getInstance().setAudio(null);
            }

            return "🤡 Sorry for the troll 🤡";
        }

        const lastAudio = AudioHandler.getInstance().getAudio();
        if (lastAudio) {
            lastAudio.pause();
        }

        const audio = new Audio(`${process.env.PUBLIC_URL}/sounds/troll.mp3`);
        AudioHandler.getInstance().setAudio(audio);
        audio.play();

        setTimeout(() => {
            pushToStd(undefined, {
                content: "What are you doing ? 🧐",
                kind: "string"
            });
        }, 5000);

        setTimeout(() => {
            pushToStd(undefined, {
                content: "It's my favorite part 🕺💃",
                kind: "string"
            });
        }, 10000);

        setTimeout(() => {
            pushToStd(undefined, {
                content: "🤡 Btw, you can stop it by typing {#FFCB6B}admin stop{/#FFCB6B} 🤡",
                kind: "string"
            });
        }, 15000);

        return {
            content: `${process.env.PUBLIC_URL}/img/rickroll.gif`,
            kind: "gif"
        };
    },
};

export default admin;
