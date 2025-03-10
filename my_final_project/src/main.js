import { createApp } from 'vue';

import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/mystyles.css';
import Navbar from './components/Navbar.vue';
import Title from './components/Title.vue';
import About from './components/About.vue';
import Education from './components/Education.vue';
import ItExperience from './components/ItExperience.vue';
import Hobbies from './components/Hobbies.vue';
import Gallery from './components/Gallery.vue';
import Footer from './components/Footer.vue';

const app = createApp(App)
app.component('navbar', Navbar)
app.component('title', Title)
app.component('about', About)
app.component('education', Education)
app.component('itexperience', ItExperience)
app.component('hobbies', Hobbies)
app.component('gallery', Gallery)
app.component('footer', Footer)
app.mount('#app');