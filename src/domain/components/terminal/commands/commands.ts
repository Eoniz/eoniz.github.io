import { ICommand } from "../types";
import cls from "./@cls";
import help from "./@help";
import contact from "./@contact";
import experiences from "./@experiences";
import skills from "./@skills";
import picture from "./@picture";
import bio from "./@bio";
import fortyTwo from "./@42";
import admin from "./@admin";
import cat from "./@cat";
import dog from "./@dog";

const commands: Record<string, ICommand> = {
    [admin.name]: admin,
    [cls.name]: cls,
    [help.name]: help,
    [fortyTwo.name]: fortyTwo,
    [bio.name]: bio,
    [contact.name]: contact,
    [experiences.name]: experiences,
    [skills.name]: skills,
    [picture.name]: picture,
    [cat.name]: cat,
    [dog.name]: dog,
};

export default commands;
