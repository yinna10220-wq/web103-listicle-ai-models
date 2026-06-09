const express = require("express");
const fs = require("fs");
const path = require("path");
const models = require("./data/models");

const app = express();
const PORT = 3000;

function fillTemplate(template, data) {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => data[key] ?? "");
}

app.get("/", (req, res) => {
  const cards = models
    .map(
      (m) => `
      <article>
        <a href="/models/${m.id}" style="text-decoration:none;color:inherit;">
          <img src="${m.logo}" alt="${m.name} logo"
               style="height:48px;width:auto;object-fit:contain;margin-bottom:.75rem;display:block;"
               onerror="this.style.display='none'">
          <hgroup>
            <h3 style="margin-bottom:.25rem;">${m.name}</h3>
            <p style="margin:0;font-size:.85rem;">${m.company} &nbsp;·&nbsp; ${m.releaseYear}</p>
          </hgroup>
        </a>
        <p style="margin-top:.75rem;font-size:.9rem;">${m.description}</p>
        <footer>
          <small><mark>${m.category}</mark></small>
          &nbsp;
          <a href="/models/${m.id}">View Details →</a>
        </footer>
      </article>`
    )
    .join("");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>AI Model Directory</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
  <style>
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
    }
    .card-grid article { margin: 0; }
  </style>
</head>
<body>
  <main class="container" style="padding-top: 2rem;">
    <hgroup style="margin-bottom: 2rem;">
      <h1>AI Model Directory</h1>
      <p>Explore ${models.length} influential AI models across language, image, code, and search.</p>
    </hgroup>
    <div class="card-grid">
      ${cards}
    </div>
  </main>
</body>
</html>`;

  res.send(html);
});

app.get("/models/:id", (req, res) => {
  const model = models.find((m) => m.id === parseInt(req.params.id, 10));
  if (!model) {
    return res.status(404).send("<h1>404 — Model not found</h1><a href='/'>← Back</a>");
  }
  const template = fs.readFileSync(
    path.join(__dirname, "views/model.html"),
    "utf-8"
  );
  res.send(fillTemplate(template, model));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
