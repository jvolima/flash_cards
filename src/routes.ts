import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { CreateFlashCardsController } from "./modules/flashCards/useCases/createFlashCards/CreateFlashCardsController";
import { AuthenticateUserController } from "./modules/users/useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./modules/users/useCases/createUser/CreateUserController";

const routes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

const createFlashCardsController = new CreateFlashCardsController();

routes.post("/users", createUserController.handle);
routes.post("/users/authenticate", authenticateUserController.handle);

routes.post("/flashCards", ensureAuthenticated, createFlashCardsController.handle);

export { routes }