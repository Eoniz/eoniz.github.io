import { ICommand } from "../../types";
import AudioHandler from '../utils/audio_manager';

const admin: ICommand = {
    name: "admin",
    description: "π Administrate the website π",
    execute: async (args, kwargs, { pushToStd }) => {
        if (args.length === 2 && args[1] === "stop") {
            const audio = AudioHandler.getInstance().getAudio();

            if (audio) {
                audio.pause();
                audio.currentTime = 0;
                AudioHandler.getInstance().setAudio(null);
            }

            return "π€‘ Sorry for the troll π€‘";
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
                content: "What are you doing ? π§",
                kind: "string"
            });
        }, 5000);

        setTimeout(() => {
            pushToStd(undefined, {
                content: "It's my favorite part πΊπ",
                kind: "string"
            });
        }, 10000);

        setTimeout(() => {
            pushToStd(undefined, {
                content: "π€‘ Btw, you can stop it by typing {#FFCB6B}admin stop{/#FFCB6B} π€‘\nMusic by {magenta}Chips 'N Cellos{/magenta}: {link}https://www.youtube.com/watch?v=ZQo8YaG1hhs{/link}, follow him !",
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
