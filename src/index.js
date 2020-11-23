import './styles/index.scss';
import { render } from './utils';
import App from './components/App';
import Board from './components/Board';

const root = document.querySelector('#root');
render(root, App);

const start = new Board();
start.renderSlides();
start.submitForm();
start.renderFeatures();
// start.autoShowSlides();
