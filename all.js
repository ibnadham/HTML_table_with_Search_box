const search = () => {
  const searchBox = document.getElementById("searchItem").value.toUpperCase();
  const content = document.querySelectorAll("tr.content");

  for (let i = 0; i < content.length; i++) {
    let hide = true;
    for (let j = 0; j < content[i].children.length; j++) {
      let textValue = content[i].children[j].textContent;

      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        hide = false;
        break;
      }
    }
    if (hide) {
      content[i].style.display = "none";
    } else {
      content[i].style.display = "";
    }
  }
};
