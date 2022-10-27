function addArticleLink() {
  const articles = document.querySelectorAll("article");
  for (const article of articles) {
    const newId = `${article.id}_link`;
    if (document.getElementById(newId) != null) {
      return;
    }
    const entry = article.querySelector(".entry__title");
    const url = entry.attributes.getNamedItem("href").value;
    const newAnchor = document.createElement("a");
    newAnchor.setAttribute("href", url);
    newAnchor.setAttribute("target", "_brank");
    newAnchor.style.fontSize = "16px";
    newAnchor.style.padding = "8px 0px 8px 0px";
    newAnchor.style.color = "red";
    newAnchor.id = newId;
    newAnchor.appendChild(
      document.createTextNode("🔗 Go article page & Mark as read!")
    );

    newAnchor.onclick = () => {
      article.querySelector(".EntryMarkAsReadButton").click();
    };
    article.before(newAnchor);
  }
}

(function () {
  "use strict";
  chrome.runtime.onMessage.addListener(function (message, sender, callback) {
    if (message.type === "addArticleLink") {
      // TODO ここやめたい
      setTimeout(addArticleLink, 2000);
    }
    return true;
  });
})();
