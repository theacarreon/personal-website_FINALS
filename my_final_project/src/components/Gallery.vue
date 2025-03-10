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

<style>
#gallery {
    background: rgba(0, 0, 0, 0.8); /* Dark transparent background */
    padding: 40px;
    border-radius: 10px; /* Smooth rounded corners */
    margin-top: 50px; /* Space from the Education section */
    text-align: center; /* Center align text */
    color: white;
}

#gallery h2 {
    font-size: 2em;
    font-family: 'Dancing Script', sans-serif;
    font-weight: bold;
    margin-bottom: 20px;
    color: white !important; /* Neon green effect */
    text-shadow: 0px 0px 10px #00ff88; /* Glow effect */
}

.gallery-pics {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 900px; 
    margin: auto;
}

.gal-img {
    display: flex;
    justify-content: center;
    gap: 30px; /* Spacing between images */
    flex-wrap: wrap; /* Ensures responsiveness */
    width: 100%;
    max-width: 1300px;
}

.gal-img img {
    width: 180px; /* Adjust as needed */
    height: 250px;
    border-radius: 8px; /* Optional styling */
    object-fit: cover;
    box-shadow: 0px 0px 10px rgba(0, 255, 136, 0.5); /* Glow effect */
}

.gal-img figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: calc(100% / 5 - 20px); /* Ensure exactly 5 per row */
    max-width: 200px; /* Adjust to match image size */
}


.gal-img figcaption {
    background: rgba(0, 0, 0, 0.6); /* Semi-dark background */
    padding: 10px; /* Adjusted padding */
    border-radius: 10px; /* Rounded corners */
    margin-top: 8px; /* Spacing from image */
    color: white; /* White font color */
    box-shadow: 0px 5px 15px rgba(255, 0, 170, 0.434); /* Soft glowing effect */
    font-family: 'Lilita One', sans-serif;
    font-size: 1.2em; /* Adjusted font size for better scaling */
    max-width: 200px; /* Matches the figure's width */
    text-align: center;
    display: block; /* Ensures it behaves as a box element */
    width: 100%; /* Ensures it expands properly */
}

@media (max-width: 800px) {
    .gal-img {
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .gal-img img {
        width: 150px; /* Reduce image size for smaller screens */
    }
}
</style>