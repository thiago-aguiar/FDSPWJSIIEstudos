const menuItens = document.querySelectorAll('.section_menu_item');
menuItens.forEach(addActionListener);

getPage(0);

function addActionListener(item, index) {
  item.onclick = () => setActionListenerMenuItem(index);
}
function setActionListenerMenuItem(index) {
  getPage(index);
}

function getPage(page) {
  const pageIndex = page + 1;
  content.innerText = "Carregando...";
  updateMenuItensStyle(page, menuItens);
  fetch('./pages/etapa' + pageIndex + '.html')
    .then(response => response.text())
    .then(response => content.innerHTML = response)
    .catch(error => content.innerText = 'Error: Page not found!');
}

function updateMenuItensStyle(page, menuItens) {
  menuItens.forEach((item, index) => {
    updateMenuItemStyle(item, page == index)
  });
}

function updateMenuItemStyle(item, active) {
  if (active) {
    item.classList.add('active');
  } else {
    item.classList.remove('active');
  }
}