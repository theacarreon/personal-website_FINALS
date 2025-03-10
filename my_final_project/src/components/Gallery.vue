<template>
    <section id="gallery">
        <h2>Picture Gallery</h2>
        <div class="gallery-pics">
          <div class="gal-img">
            <figure>
              <img :src="image1" alt="caelus">
              <figcaption>This is my AUsome son,<br> Caelus.</figcaption>
          </figure>
          <figure>
              <img :src="image2" alt="T&T">
              <figcaption>2024, Japan - <br> Me and my Partner</figcaption>
          </figure>
          <figure>
              <img :src="image3" alt="Seokjin">
              <figcaption>My BTS Bias,<br> Kim SeokJin</figcaption>
          </figure>
          <figure>
              <img :src="image4" alt="Dokyeom">
              <figcaption>My SVT Bias,<br> Lee Seokmin</figcaption>
          </figure>
          <figure>
              <img :src="image5" alt="BoGum">
              <figcaption>My Fav Actor,<br> Park Bo Gum</figcaption>
          </figure>
          </div>
        </div>
    </section>
</template>

<script setup>
import image1 from '@/assets/images/photo_2025-03-06_00-47-22.jpg';
import image2 from '@/assets/images/photo_2025-03-06_01-00-40.jpg';
import image3 from '@/assets/images/jin.jpg';
import image4 from '@/assets/images/dk.jpg';
import image5 from '@/assets/images/pbg.jpg';
</script>
