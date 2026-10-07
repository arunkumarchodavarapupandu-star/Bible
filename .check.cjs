const fs = require("fs");
let bad = 0;

// 1. asset links in HTML resolve to real files
for (const f of ["index.html", "story.html"]) {
  const html = fs.readFileSync(f, "utf8");
  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = m[1];
    if (/^(https?:|#|mailto)/.test(url)) continue;
    const path = url.split("#")[0].split("?")[0];
    if (path && !fs.existsSync(path)) {
      console.log("BROKEN in " + f + " : " + url);
      bad++;
    }
  }
}

// 2. every getElementById target exists in HTML or is created dynamically by JS
const jsApp = fs.readFileSync("js/app.js", "utf8") + fs.readFileSync("js/ui.js", "utf8");
const jsStory = fs.readFileSync("js/story.js", "utf8") + fs.readFileSync("js/ui.js", "utf8");
for (const [js, htmlFile] of [
  [jsApp, "index.html"],
  [jsStory, "story.html"]
]) {
  const html = fs.readFileSync(htmlFile, "utf8");
  for (const m of js.matchAll(/getElementById\("([^"]+)"\)/g)) {
    if (!html.includes('id="' + m[1] + '"') && !js.includes('id="' + m[1] + '"')) {
      console.log("MISSING ID in " + htmlFile + " : " + m[1]);
      bad++;
    }
  }
}

// 3. every story id used in hardcoded links exists in data
const { STORY_MAP } = require("./js/stories-data.js");
for (const f of ["index.html", "story.html", "README.md"]) {
  const text = fs.readFileSync(f, "utf8");
  for (const m of text.matchAll(/story\.html\?id=([a-z0-9-]+)/g)) {
    if (!STORY_MAP[m[1]]) {
      console.log("UNKNOWN story id in " + f + " : " + m[1]);
      bad++;
    }
  }
}

console.log(bad ? "PROBLEMS: " + bad : "all links + IDs + story ids OK");
