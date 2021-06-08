import { ICommand } from "../types";
import cls from "./@cls";
import help from "./@help";
import contact from "./@contact";
import experiences from "./@experiences";
import skills from "./@skills";
import picture from "./@picture";

const commands: Record<string, ICommand> = {
    [cls.name]: cls,
    [help.name]: help,
    [contact.name]: contact,
    [experiences.name]: experiences,
    [skills.name]: skills,
    [picture.name]: picture,
};

export default commands;
