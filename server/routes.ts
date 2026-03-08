import express, { Request, Response } from "express";
import path from "path";
import { getNews, getNewsBySlug } from "./newsService";

const router = express.Router();

/**
 * GET / - Laadt de homepagina
 */
router.get("/", (req: Request, res: Response) => {

  const news = getNews();

  let html = `
  <head>
  <title>Nieuws</title>
  <link rel="stylesheet" href="../css/main.css">
</head>
<body>

  <h1>Nieuws</h1>
  <ul>
  </body>
  `;

  news.forEach(article => {
    html += `<li>
      <a href="/news/${article.slug}">
        ${article.title}
      </a>
    </li>`;
  });

  html += `</ul>`;

  res.send(html);
});

router.get("/news/:slug", (req: Request, res: Response) => {

  const article = getNewsBySlug("" + req.params.slug);

  if(!article){
    res.status(404).send("Artikel niet gevonden");
    return;
  }

  const html = `
  <head>
  <title>Nieuws</title>
  <link rel="stylesheet" href="../css/main.css">
</head>
<body>

  <h1>${article.title}</h1>
  <p>${article.date}</p>
  <p>${article.content}</p>

  <a href="/">← terug</a>
  </body>
  `;

  res.send(html);

});
// ik snapte echt niet hoe dit moest dus heb hierbij de hulp van AI ingeschakeld
export default router;


