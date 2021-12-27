import { prisma } from "../../../../database/prismaClient";


export class ListUserFlashCardsUseCase {
  async execute(id_user: string) {
    const flashCards = await prisma.user.findMany({
      where: {
        id: id_user
      },
      select: {
        name: true,
        email: true,
        flashCards: true
      }
    });

    return flashCards;
  }
} 