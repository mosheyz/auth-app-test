import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    try {
        const auth = req.header("Authorization");

        if (!auth) {
            const err = new Error("Unauthorized - No token");
            err.status = 401;
            throw err;
        }

        const token = auth.split(" ")[1];
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        if (!verifyToken) {
            const err = new Error("Unauthorized - No token");
            err.status = 401;
            throw err;
        }
        req.user = verifyToken;
        next();
    } catch (error) {
        const err = new Error("Unauthorized - Invalid token");
        err.status = 401;
        throw err;
    }
};
