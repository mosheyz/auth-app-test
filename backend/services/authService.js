import { readProfileFile, writeProfileFile } from "../data/io.js";
import z from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signupSchema = z.object({
    username: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
});

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export const signup = async (req) => {
    const validUser = signupSchema.safeParse(req.body);
    if (!validUser.success) {
        const err = new Error(`Invalid data: ${validUser.error.message}`);
        err.status = 400;
        throw err;
    }
    const { username, email, password } = validUser.data;
    const users = await readProfileFile();

    const hashedPassword = await bcrypt.hash(password, 12);
    users.push({ username, email, password: hashedPassword });

    await writeProfileFile(users);

    return { message: "Register successfully" };
};

export const login = async (req) => {
    const validUser = loginSchema.safeParse(req.body);
    if (!validUser.success) {
        const err = new Error(`Invalid data: ${validUser.error.message}`);
        err.status = 400;
        throw err;
    }
    const { email, password } = validUser.data;
    const users = await readProfileFile();

    const user = users.find((user) => user.email === email);
    console.log(user)
    if (!user) {
        const err = new Error(`User not found`);
        err.status = 404;
        throw err;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch)
    if (!isMatch) {
        const err = new Error(`unauthorized - Incorrect password`);
        err.status = 401;
        throw err;
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET);

    return { token, message: "Login successfully" };
};

export const getProfile = async (req) => {

    const users = await readProfileFile();
    const user = users.find((user) => req.user.email === user.email);

    if (!user) {
        const err = new Error(`User not found`);
        err.status = 404;
        throw err;
    }
    return user;
};
