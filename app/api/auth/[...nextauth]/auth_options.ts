import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prismaClient from "@/prisma/client";
import bcrypt from "bcrypt"
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prismaClient),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "E-Mail", type: "email", placeholder: "example@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                if(!credentials?.email || !credentials.password) return null;

                const user = await prisma?.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                if(!user) return null;

                const passwordMatch = await bcrypt.compare(credentials.password, user.hashed_password!);

                return passwordMatch ? user : null;
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
}