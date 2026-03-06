import express, { Request, Response } from "express";
import path from "path";

const router = express.Router();

/**
 * GET / - Laadt de homepagina
 */
router.get("/", (req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

router.get("/details", (req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, "/views/details.html"));
});

export default router;
