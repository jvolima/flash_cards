import { Router } from "express";
import { AuthenticateUserController } from "./modules/users/useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./modules/users/useCases/createUser/CreateUserController";

const routes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

routes.post("/users", createUserController.handle);
routes.post("/users/authenticate", authenticateUserController.handle);

export { routes }