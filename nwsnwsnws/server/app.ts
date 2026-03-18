import express, { Application} from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import routes from "./routers/routes";

import dotenv from "dotenv";
dotenv.config();

const app: Application = express();
const PORT : number = parseInt(<string>process.env.PORT, 10) || 3000;

// EJS als template-engine instellen
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressEjsLayouts);
app.set("layout", "layouts/main");

app.use(express.static(path.join(__dirname, "/public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", routes);

// Start the HTTP server
app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});