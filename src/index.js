import './style.css';
import Ui from './ui';

// startup
const ui = new Ui();
document.addEventListener('DOMContentLoaded', ui.loadList());