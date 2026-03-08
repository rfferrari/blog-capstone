import express from "express";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const app = express();

let projectRootDir = process.cwd();

try {
  const moduleUrl = typeof import.meta !== "undefined" ? import.meta.url : undefined;
  if (moduleUrl) {
    const currentFilePath = fileURLToPath(moduleUrl);
    projectRootDir = path.dirname(currentFilePath);
  }
} catch (error) {
  console.warn("Falling back to process.cwd() for root path resolution.", error);
}

app.set("views", path.join(projectRootDir, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(projectRootDir, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const data = await readJsonFile("public/assets/posts.json");
    res.render("index.ejs", { posts: data.posts });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data.");
  }
});

app.get("/view-post/:id", async (req, res) => {
  try {
    const targetId = req.params.id;
    const data = await readJsonFile("public/assets/posts.json");
    const dataPost = data.posts.find((item) => item.id === targetId);
    res.render("post-view.ejs", { post: dataPost });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data.");
  }
});

app.get("/new-post", (req, res) => {
  res.render("post-new.ejs");
});

app.get("/edit-post/:id", async (req, res) => {
  try {
    const targetId = req.params.id;
    const data = await readJsonFile("public/assets/posts.json");
    const dataPost = data.posts.find((item) => item.id === targetId);
    res.render("post-edit.ejs", { post: dataPost });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data.");
  }
});

// Fake endpoints for demo mode: returns success without persisting changes.
app.post("/update/:id", (req, res) => {
  res.status(200).json({
    ok: true,
    mode: "fake",
    action: "update",
    id: req.params.id,
    post: req.body,
  });
});

app.post("/add", (req, res) => {
  res.status(200).json({
    ok: true,
    mode: "fake",
    action: "add",
    post: {
      ...req.body,
      id: "fake-id",
    },
  });
});

app.delete("/delete/:id", (req, res) => {
  res.status(200).json({
    ok: true,
    mode: "fake",
    action: "delete",
    id: req.params.id,
  });
});

async function readJsonFile(filePath) {
  try {
    const absolutePath = path.join(projectRootDir, filePath);
    const rawData = await fs.readFile(absolutePath, "utf8");
    return JSON.parse(rawData);
  } catch (error) {
    console.error("Error reading or parsing JSON file:", error);
    throw error;
  }
}

export default app;
