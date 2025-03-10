<template>
    <section id="about">
      <div class="about-container">
        <div class="profile-image">
          <img :src="theaProfile" alt="Profile" class="profile-pic">
        </div>
        <div class="info-box">
          <h2>"learn to live the unexamined life" - Fiyero, Wicked</h2>
          <p>Hi! my name is Maria Theresa B. Carreon. <br> But I prefer to be called Thea.</p>
        </div>
      </div>
    </section>
  </template>

<script setup>
import theaProfile from '@/assets/images/thea.png';
</script>

<style>
#about {
    padding-top: 10vh;
}

.about-container {
    display: flex;
    align-items: center; /* Ensures vertical alignment */
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap; 
  }

.profile-pic {
    width: 300px;
    height: auto;
    border-radius: 50%;
    display: block;
    align-self: flex-start; /* Ensures the image stays aligned at the top */
  }

.info-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5); /* Dark semi-transparent */
    color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    max-width: 600px;
  }


.info-box h2 {
    font-family: 'Dancing Script', sans-serif; 
    font-size: 1.5em;
    font-weight: 300;
}

.info-box p {
    font-family: 'Lilita One', sans-serif; 
    font-size: 1.5em;
    font-weight: 300;
}


</style>
  