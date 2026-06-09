const express = require("express");
const fs = require("fs");
const path = require("path");
const models = require("./data/models");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

function fillTemplate(template, data) {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => data[key] ?? "");
}

function send404(res) {
  const html = fs.readFileSync(path.join(__dirname, "views/404.html"), "utf-8");
  res.status(404).send(html);
}

app.get("/", (req, res) => {
  const cards = models
    .map(
      (m) => `
      <article>
        <div class="logo-wrap" data-initial="${m.name[0].toUpperCase()}">
          <img src="${m.logo}" alt="${m.name} logo"
               onerror="this.style.display='none';this.parentNode.classList.add('fallback')">
        </div>
        <hgroup>
          <h3><a href="/models/${m.id}" style="text-decoration:none;color:inherit;">${m.name}</a></h3>
          <p>${m.company} &nbsp;·&nbsp; ${m.releaseYear}</p>
        </hgroup>
        <p class="card-description">${m.description}</p>
        <footer>
          <span class="badge">${m.category}</span>
          <a href="/models/${m.id}">Details →</a>
        </footer>
      </article>`
    )
    .join("");

  const html = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>AI Model Directory</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <main class="container">
    <header class="hero">
      <h1 class="hero-title">AI Model Directory</h1>
      <p class="hero-sub">Explore ${models.length} influential AI models across language, image, code, and search.</p>
    </header>
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
    return send404(res);
  }
  const template = fs.readFileSync(
    path.join(__dirname, "views/model.html"),
    "utf-8"
  );
  res.send(fillTemplate(template, { ...model, initial: model.name[0].toUpperCase() }));
});

app.use((req, res) => {
  send404(res);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
