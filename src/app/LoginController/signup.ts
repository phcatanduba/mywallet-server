import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import SignupModel from "./signupModel";

export default function signup(req: Request, res: Response) {
  const request = new SignupModel(req.body.name, req.body.password, req.body.email, req.body.cpf)
  const validation = requestValidation(request)

  if (typeof(validation) === "string") {
    return res.status(400).send({
        error: validation,
        status: 400
      })
  }

  saveUser(request)

  return res.json({
    response: validation
  });
}

async function saveUser(request: SignupModel) {
  const prisma = new PrismaClient()
  const createUser = await prisma.user.create({
    data: {
      name: request.name.toString(),
      email: request.email.toString(),
      password: request.password.toString(),
      cpf: request.cpf.toString()
    }
  })
}

function requestValidation(request: SignupModel) {
  if (request.cpf === undefined) {
    return SignUpCodes.noCpf
  } else if (request.name === undefined) {
    return SignUpCodes.noName
  } else if (request.password === undefined) {
    return SignUpCodes.noPassword
  } else if (request.email === undefined) {
    return SignUpCodes.noEmail
  }

  return SignUpCodes.success
}

const SignUpCodes = {
  noCpf: "cpf undefined",
  noEmail: "email undefined",
  noPassword: "password undefined",
  noName: "name undefined",
  success: 200
}

