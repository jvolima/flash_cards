import { prisma } from "../../../../database/prismaClient";

interface IAnswerFlashCard {
  id: string;
  id_user: string;
  answer: string;
}

export class AnswerFlashCardUseCase {
  async execute({ id, id_user, answer }: IAnswerFlashCard) {
    const flashCard = await prisma.flashCard.findFirst({
      where: {
        id,
        id_user
      }
    });

    if(!flashCard) {
      throw new Error("Flash card does not exists!");
    }

    if(flashCard.answer === answer) {
      const message = "Correct answer!";
      return message;
    }

    const message = "Incorrect answer!";
    return message;
  }
}