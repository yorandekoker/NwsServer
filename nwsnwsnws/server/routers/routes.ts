import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { getAllNews } from "../services/newsService";

const router = express.Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {

  const news = await getAllNews();
  console.log(news);
  res.render("index", { title: "Laatste Nieuws", page: "Home", news });

});

// router.get("/add", (req: Request, res: Response): void => {
//   res.render("add", { title: "Artikel Toevoegen", page: "Toevoegen" });
// });

// router.post("/add", (req: Request, res: Response): void => {
//   const { title, content, date } = req.body;
//   const article = addNews({ title, content, date });
//   res.redirect("/" + article.slug);
// });

// router.get("/:slug", (req: Request, res: Response): void => {

//   const slug = req.params.slug;
//   const article = getNewsBySlug(slug as string);
//     if (article) {
//         res.render("article", { title: article.title, page: article.title, article });  
//     } else {
//         res.status(404).render("404", { title: "Artikel Niet Gevonden", page: "404" });
//     }
// });



export default router;
