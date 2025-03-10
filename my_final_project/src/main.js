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
import WCommentForm from './components/WCommentForm.vue';
import WComment from './components/WComment.vue';
import Footer from './components/Footer.vue';


const app = createApp(App)
app.component('Navbar', Navbar)
app.component('Title', Title)
app.component('About', About)
app.component('Education', Education)
app.component('ItExperience', ItExperience)
app.component('Hobbies', Hobbies)
app.component('Gallery', Gallery)
app.component('WCommentForm', WCommentForm)
app.component('WComment', WComment)
app.component('Footer', Footer)
app.mount('#app');