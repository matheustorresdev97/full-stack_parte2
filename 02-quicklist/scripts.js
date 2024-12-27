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


