import { prisma } from "../../../../database/prismaClient";

interface ICreateFlashCards {
  id_user: string;
  question: string;
  answer: string;
}

export class CreateFlashCardsUseCase {
  async execute({ id_user, question, answer }: ICreateFlashCards) {
    const flashCard = await prisma.flashCard.create({
      data: {
        id_user,
        question,
        answer
      }
    });

    return flashCard;
  }
}