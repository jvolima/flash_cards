import { Request, Response } from "express";
import { CreateFlashCardsUseCase } from "./CreateFlashCardsUseCase";

export class CreateFlashCardsController {
  async handle(request: Request, response: Response) {
    const { id: id_user } = request;
    const { question, answer } = request.body;

    const createFlashCardsUseCase = new CreateFlashCardsUseCase();

    const flashCard = await createFlashCardsUseCase.execute({
      id_user,
      question,
      answer
    });

    return response.status(201).json(flashCard);
  }
}