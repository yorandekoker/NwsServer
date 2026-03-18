import path from "path";
import express, { Application, Request, Response } from "express";
import routes from "./routes";


const app: Application = express();
const PORT: number = 3000;

// Middleware om statische bestanden te serveren
app.use(express.static(path.join(__dirname, "/public")));
// Middleware om formulierdata te verwerken
app.use(express.urlencoded({ extended: true }));


app.use("/", routes);
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});