import express from "express";

import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    console.log('Request received, fetching data...');
    const data = await readJsonFile('/public/assets/posts.json');
    res.render("index.ejs", { posts: data.posts });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data.');
  }
});

app.get("/view-post/:id", async (req, res) => {
  try {
    const targetId = req.params.id;
    console.log('Request received, fetching data...');
    const data = await readJsonFile('/public/assets/posts.json');
    const dataPost = data.posts.find(item => item.id === targetId);
    res.render("post-view.ejs", { post: dataPost });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data.');
  }
});

app.get("/new-post", async (req, res) => {
  res.render("post-new.ejs");
});

app.get("/edit-post/:id", async (req, res) => {
  try {
    const targetId = req.params.id;
    console.log('Request received, fetching data...');
    const data = await readJsonFile('/public/assets/posts.json');
    const dataPost = data.posts.find(item => item.id === targetId);
    res.render("post-edit.ejs", { post: dataPost });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data.');
  }
});

app.post("/update/:id", async (req, res) => {
  try {
    const body = req.body;
    const targetId = req.params.id;
    const jsonObject = await readJsonFile('/public/assets/posts.json');
    let postToEdit = jsonObject.posts.find(post => post.id === targetId);

    if (postToEdit) {
      postToEdit.title = body.title;
      postToEdit.thumbnail = body.thumbnail;
      postToEdit.summary = body.summary;
      postToEdit.content = body.content;
      postToEdit.date = body.date;
      console.log(`Successfully updated post ID ${postToEdit.id}.`);
    } else {
      console.log(`Post ID ${body.id} not found.`);
      return; // Exit if the post wasn't found
    }
    jsonObject.version += 1;
    const updatedJsonString = JSON.stringify(jsonObject, null, 2);
    await updateJsonFile('/public/assets/posts.json', updatedJsonString, 'utf8');
    res.status(201).json(postToEdit);
  } catch (error) {
    console.error('Error saving post:', error);
    res.status(500).json({ error: 'Failed to save the post.' });
  }
});

app.post("/add", async (req, res) => {
  try {
    const newItemData = req.body;
    const jsonObject = await readJsonFile('/public/assets/posts.json');

    if (Array.isArray(jsonObject.posts)) {
      newItemData.id = `${jsonObject.posts.length + 1}`;
      jsonObject.posts.push(newItemData);
      jsonObject.version += 1;
      console.log(`Successfully create post ID ${postToEdit.id}.`);
    } else {
      newItemData.id = `1`;
      jsonObject.posts = [newItemData];
      console.log("Array 'posts' created.");
    }

    const updatedJsonString = JSON.stringify(jsonObject, null, 2);
    await updateJsonFile('/public/assets/posts.json', updatedJsonString, 'utf8');
    res.status(200).json(newItemData);
  } catch (error) {
    console.error('Error saving post:', error);
    res.status(500).json({ error: 'Failed to save the post.' });
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const targetId = req.params.id;
    const jsonObject = await readJsonFile('/public/assets/posts.json');
    const initialLength = jsonObject.posts.length;

    // Use filter to remove the post with the matching ID
    jsonObject.posts = jsonObject.posts.filter(post => post.id !== targetId);

    const finalLength = jsonObject.posts.length;

    if (initialLength === finalLength) {
      // If lengths are the same, the item wasn't found (404 is better than 500)
      return res.status(404).json({ message: 'Post not found.' });
    }
    jsonObject.version += 1;
    const updatedJsonString = JSON.stringify(jsonObject, null, 2);
    await updateJsonFile('/public/assets/posts.json', updatedJsonString, 'utf8');
    res.status(200).json({ message: 'Post successfully deleted.' });
  } catch (error) {
    console.error('Error saving post:', error);
    res.status(500).json({ error: 'Failed to save the post.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

async function readJsonFile(filePath) {
  try {
    const absolutePath = path.join(__dirname, filePath);
    const rawData = await fs.readFile(absolutePath, 'utf8');
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Error reading or parsing JSON file:', error);
    throw error;
  }
}


async function updateJsonFile(filePath, updatedJsonString) {
  try {
    const absolutePath = path.join(__dirname, filePath);
    await fs.writeFile(absolutePath, updatedJsonString, 'utf8');
  } catch (error) {
    console.error('Error reading or parsing JSON file:', error);
    throw error;
  }
}