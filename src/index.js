import './style.css';
import Ui from './ui';

// startup
document.addEventListener('DOMContentLoaded', Ui.loadList);

// listeners
const form = document.querySelector("#add-form");
form.addEventListener("submit", Ui.addBook);