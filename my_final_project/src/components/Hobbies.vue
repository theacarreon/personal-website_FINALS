<template>
    <section id="hobbies-interest">
        <h2>Hobbies and Interests</h2>
        <div class="hobbies-interest-con">
          <div class="hob-in-img">
            <img :src="matil_da" alt="Matilda">
            <img :src="cats" alt="Cats">
            <img :src="Hamilton" alt="Hamilton">
            <img :src="SOM" alt="SoundOfMusic">
          </div>
            <div class="hob-in-desc">
              <p>I like watching musical plays. My long lost dream was to become a theater actress and everytime I watch theater plays, I find myself crying HAHA.<br>
              These are some of my favorite plays!</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import matil_da from '@/assets/images/4f0f4ffe435e12180468fdb902432499.png';
import cats from '@/assets/images/Cats.jpg';
import Hamilton from '@/assets/images/Hamilton-Logo.jpg';
import SOM from '@/assets/images/p5620_v_v13_as.jpg';
</script>

<style>
#hobbies-interest {
    padding: 40px;
    border-radius: 10px; /* Smooth rounded corners */
    margin-top: 50px; 
    text-align: center; /* Center align text */
    color: white;
}

#hobbies-interest h2 {
    font-size: 2em;
    font-family: 'Dancing Script', sans-serif;
    font-weight: bold;
    margin-bottom: 20px;
    color: white !important; /* Neon green effect */
}

.hobbies-interest-con {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 900px; 
    margin: auto;
}

.hob-in-img {
    display: flex;
    justify-content: center;
    gap: 30px; /* Spacing between images */
    flex-wrap: wrap; /* Ensures responsiveness */
    width: 100%;
    max-width: 900px;
}
  
.hob-in-img img {
    width: 200px; /* Adjust as needed */
    height: auto;
    border-radius: 8px; /* Optional styling */
    object-fit: cover;
    box-shadow: 0px 0px 10px rgba(0, 255, 136, 0.5); /* Glow effect */
}
  
.hob-in-desc {
    background: rgba(0, 0, 0, 0.6); /* Semi-dark background */
    padding: 15px;
    border-radius: 10px;
    margin-top: 15px;
    color: white; /* White font color */
    box-shadow: 0px 5px 15px rgba(255, 0, 170, 0.434); /* Soft glowing effect */
    font-family: 'Lilita One', sans-serif;
    font-size: 1.5em;
    max-width: 600px;
    text-align: center;
}

@media (max-width: 800px) {
    .hob-in-img {
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .hob-in-img img {
        width: 150px; /* Reduce image size for smaller screens */
    }
}
</style>
