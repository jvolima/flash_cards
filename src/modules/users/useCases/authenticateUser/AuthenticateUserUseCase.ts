import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../database/prismaClient";

interface IAuthenticateUser {
  email: string;
  password: string;
}

export class AuthenticateUserUseCase {
  async execute({ email, password }: IAuthenticateUser) {
    const user = await prisma.user.findFirst({
      where: {
        email
      }
    });

    if(!user) {
      throw new Error("Email or password incorrect!");
    }

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      throw new Error("Email or password incorrect!");
    }

    const token = sign({ email }, "b2dfd307fb6e9f375379b8062749e7c1", {
      subject: user.id,
      expiresIn: "1d"
    });

    return token;
  }
}