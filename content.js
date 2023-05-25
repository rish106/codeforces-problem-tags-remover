const tags = document.querySelectorAll(".tag-box");
for (let i = 0; i < tags.length; i++) {
  if (tags[i].getAttribute("title") !== "Difficulty") {
    tags[i].parentNode.style.display = "none";
  }
}
