import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

export class CreateUserUseCase {
  async execute({ name, email, password }: ICreateUser) {
    const userExist = await prisma.user.findFirst({
      where: {
        email
      }
    });

    if(userExist) {
      throw new Error("User already exists!");
    }

    const hashPassword = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword
      }
    });

    return user;
  }
}