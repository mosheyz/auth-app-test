import express from "express";
import { getProfile, login, signup } from "../services/authService.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

export const router = express.Router();

router.post("/signup", async (req, res) => {
    const result = await signup(req);
    res.status(201).send(result);
});

router.post("/login", async (req, res) => {
    const result = await login(req);
    res.status(201).send(result);
});

router.get("/profile", authMiddleware, async (req, res) => {
    const result = await getProfile(req);
    res.status(200).send(result);
});
