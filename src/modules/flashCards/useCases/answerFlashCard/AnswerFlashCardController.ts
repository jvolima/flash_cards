import { Request, Response } from "express";
import { AnswerFlashCardUseCase } from "./AnswerFlashCardUseCase";

export class AnswerFlashCardController {
  async handle(request: Request, response: Response) {
    const { id: id_user } = request;
    const { id } = request.params;
    const { answer } = request.body;

    const answerFlashCardUseCase = new AnswerFlashCardUseCase();

    const result = await answerFlashCardUseCase.execute({
      id,
      id_user,
      answer
    });

    return response.json(result);
  }
}