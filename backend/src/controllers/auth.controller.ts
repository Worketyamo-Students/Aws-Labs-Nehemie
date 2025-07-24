import { generateOTP } from "../utils/generateOTP";
import { Request, Response } from "express";
import Prisma from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new Prisma.PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || "my_secret";

export const register = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        const existingUser = await prisma.user.findUnique({ where: { email }});
        if (existingUser) {
            return res.status(400).json({ error: "Utilisateur déjà enregistré" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const otp = generateOTP();
        const otpExpiry = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

        const newUser = await prisma.user.create({
            data: {
                email, 
                password: hashedPassword, 
                status: "pending",
                otp,
                otpExpiry,
            }
        })

        const token = jwt.sign({ id: newUser.id, email: newUser.email }, JWT_SECRET, {
            expiresIn: "1d",
        })

        return res.status(201).json({
            message: "Inscription réussie",
            token,
            user: {
                id: newUser.id,
                email: newUser.email,
                status: newUser.status
            }
        })
    } catch (error) {
        console.log("Erreur d'inscription !", error)
        return res.status(500).json({ error: "Une erreur s'est produite lors de l'inscription." });
    }
}

