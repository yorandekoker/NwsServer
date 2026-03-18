// Importeer sql uit db.ts
import sql from "./db";

// Interface voor een nieuwsartikel
export interface News {
  id: number;
  slug: string;
  title: string;
  content?: string;
  image?: string;
  created_at?: string;
}

// Alle nieuwsartikelen ophalen
export async function getAllNews(): Promise<News[]> {
  const data: News[] = await sql`
     SELECT 
    news.id, 
    news.title, 
    news.content,
    json_agg(json_build_object(
      'id', comments.id, 
      'author', comments.author, 
      'comment', comments.comments
    )) AS comments
  FROM news
  LEFT JOIN comments ON news.id = comments.news_id
  GROUP BY news.id
  ORDER BY news.id;
`;
  console.log(data);
  return data;
}

// /**
//  * Zoekt een nieuwsartikel op basis van de slug.
//  */
// export const getNewsBySlug = (slug: string): News | undefined => {
//   const news = getNews();
//   return news.find((article) => article.slug === slug);
// };

// /**
//  * Voegt een nieuw nieuwsartikel toe aan het JSON-bestand.
//  */
// export const addNews = (newArticle: Omit<News, "slug">): News => {
//   const news = getNews();
//   const slug:string = newArticle.title.toLowerCase().replace(/\s/g, "-");
//   const articleWithSlug: News = { slug: slug, ...newArticle };

//   news.push(articleWithSlug);
//   fs.writeFileSync(filePath, JSON.stringify(news, null, 2), "utf-8");

//   return articleWithSlug;
// };
