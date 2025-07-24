import { Request, Response } from "express";
import Prisma from "@prisma/client";

const prisma = new Prisma.PrismaClient();

export const verifyotp = async (req: Request, res: Response) => {
    const { email, otp } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) return res.status(404).json({ error: "Utilisateur introuvable" });

        if (user.otp !== otp) return res.status(400).json({ error: "Code OTP incorrect" });

        if (user.otpExpiry && new Date() > user.otpExpiry) {
            return res.status(400).json({ error: "Code OTP expiré" });
        }

        await prisma.user.update({
            where: { email },
            data: { otp: null, otpExpiry: null, },
        })

        res.status(200).json({ message: "OTP validé avec succès" });
    } catch (error) {
        console.log("Erreur de verification de l'OTP !", error)
        return res.status(500).json({ error: "Une erreur s'est produite lors de la verification de l'OTP." });
    }
}

