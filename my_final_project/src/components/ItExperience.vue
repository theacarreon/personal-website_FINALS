<template>
    <section id="it-experience">
        <h2>IT Experience</h2>
        <div class="experience-container">
            <div class="experience-item">
               <img :src="dcvms" alt="DCVMS">
                  <div class="experience-desc">
                    <p>DCV-MS is our PBL Project which is a Dress Code Violation Management System.</p>
                    <p>We automated the process of Blue Slip Issuance of APC.</p>
                    <p>This project has AI implementation in which the camera will detect the violation <br> and prompt the security guard to process a violation.</p>
                  </div>
              </div>
          </div>
    </section>
</template>

<script setup>
import dcvms from '@/assets/images/dcvms.png'; 
</script>

<style>
#it-experience {
    background: rgba(0, 0, 0, 0.8); /* Dark transparent background */
    padding: 40px;
    border-radius: 10px; /* Smooth rounded corners */
    margin-top: 50px; /* Space from the Education section */
    text-align: center; /* Center align text */
    color: white;
}


#it-experience h2 {
    font-size: 2em;
    font-family: 'Dancing Script', sans-serif;
    font-weight: bold;
    margin-bottom: 20px;
    color: white !important; /* Neon green effect */
    text-shadow: 0px 0px 10px #00ff88; /* Glow effect */
}

.experience-container {
    display: flex;
    justify-content: center; /* Center content horizontally */
    align-items: center; /* Align items properly */
    flex-wrap: wrap; /* Allows responsiveness */
    gap: 20px; /* Space between items */
}

.experience-item {
    background: rgba(255, 255, 255, 0.1); /* Slight transparent white background */
    padding: 20px;
    border-radius: 15px;
    width: 60%; /* Adjust width */
    box-shadow: 0px 5px 15px rgba(0, 255, 136, 0.3); /* Glowing shadow */
    transition: transform 0.3s ease-in-out;
}


.experience-item img {
    display: block; /* Ensures block-level behavior */
    margin: 0 auto; /* Centers the image */
    width: 50%; /* Set width to 50% */
    height: auto; /* Maintain aspect ratio */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0px 0px 10px rgba(0, 255, 136, 0.5); /* Glow effect */
}

.experience-desc {
    background: rgba(0, 0, 0, 0.6); /* Semi-dark background */
    padding: 15px;
    border-radius: 10px;
    margin-top: 15px;
    color: white; /* White font color */
    box-shadow: 0px 5px 15px rgba(255, 0, 170, 0.434); /* Soft glowing effect */
    font-family: 'Lilita One', sans-serif;
    font-size: 1.5em;
}

</style>