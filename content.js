window.addEventListener("load", main, false);

function main(e) {
  const jsInitCheckTimer = setInterval(jsLoaded, 1000);
  function jsLoaded() {
    if (document.querySelector("article") != null) {
      clearInterval(jsInitCheckTimer);
      addDirectAnchor();
    }
  }
}

function addDirectAnchor() {
  const articles = document.querySelectorAll("article");
  for (const article of articles) {
    const entry = article.querySelector(".entry__title");
    const url = entry.attributes.getNamedItem("href").value;
    const newAnchor = document.createElement("a");
    newAnchor.setAttribute("href", url);
    newAnchor.setAttribute("target", "_brank");
    newAnchor.style.fontSize = "16px";
    newAnchor.style.padding = "8px";
    newAnchor.style.color = "red";
    newAnchor.appendChild(
      document.createTextNode("🔗 Go article page & Mark as read!")
    );

    newAnchor.onclick = () => {
      article.querySelector(".EntryMarkAsReadButton").click();
    };
    article.before(newAnchor);
  }
}
