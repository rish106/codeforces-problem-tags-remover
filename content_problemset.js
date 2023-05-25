const tags = document.querySelectorAll(".notice");
for (let i = 0; i < tags.length; i++) {
  try {
    tags[i].parentNode.style.display = "none";
  } catch(err) {
    // do nothing
  }
}
