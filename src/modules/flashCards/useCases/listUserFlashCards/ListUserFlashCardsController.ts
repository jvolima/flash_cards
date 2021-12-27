import { Request, Response } from "express";
import { ListUserFlashCardsUseCase } from "./ListUserFlashCardsUseCase";

export class ListUserFlashCardsController {
  async handle(request: Request, response: Response) {
    const { id: id_user } = request;

    const listUserFlashCardsUseCase = new ListUserFlashCardsUseCase();

    const flashCards = await listUserFlashCardsUseCase.execute(id_user);

    return response.json(flashCards);
  }
}