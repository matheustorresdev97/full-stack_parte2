// Estado inicial - array de objetos representando os itens
let items = [
  { id: 1, text: "Pão de forma", checked: false },
  { id: 2, text: "Café preto", checked: false },
  { id: 3, text: "Suco de laranja", checked: false },
  { id: 4, text: "Bolacha", checked: false },
];

// Selecionando elementos do DOM
const shoppingList = document.getElementById("shoppingList");
const newItemInput = document.getElementById("newItem");
const addButton = document.querySelector(".add-button");
const notification = document.getElementById("notification");
const closeNotification = document.querySelector(".close-notification");

function renderList() {
  // Limpa a lista atual
  shoppingList.innerHTML = "";

  // Para cada item, cria um elemento na lista
  items.forEach((item) => {
    const listItem = document.createElement("div");
    listItem.className = "list-item";

    // Define o HTML interno do item
    listItem.innerHTML = `
              <div class="checkbox ${item.checked ? "checked" : ""}" 
                   onclick="toggleItem(${item.id})"></div>
              <span class="item-text">${item.text}</span>
              <button class="delete-button" onclick="deleteItem(${
                item.id
              })">🗑</button>
          `;

    // Adiciona o item à lista
    shoppingList.appendChild(listItem);
  });
}

function addItem() {
  // Pega o texto do input e remove espaços extras
  const text = newItemInput.value.trim();

  if (text) {
    // Cria novo item com ID único usando timestamp
    const newItem = {
      id: Date.now(),
      text: text,
      checked: false,
    };

    // Adiciona o item ao array
    items.push(newItem);

    // Limpa o input
    newItemInput.value = "";

    // Atualiza a lista na tela
    renderList();
  }
}
