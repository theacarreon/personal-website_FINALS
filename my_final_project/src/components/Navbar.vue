<template>
    <nav class="navbar navbar-expand-sm fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#title-welcome">
          <img :src="wickedLogo" alt="home page">
        </a>
        <ul class="navbar-nav me-auto d-flex align-items-center">
          <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#Education">Shiz U</a></li>
          <li class="nav-item"><a class="nav-link" href="#hobbies-interest">Life!</a></li>
        </ul>
      </div>
    </nav>
  </template>

<script setup>
import wickedLogo from '@/assets/images/wicked-logo.png'; 
</script>

<style>
.navbar {
    background-color: #1f7a1f !important; /* Green background */
    z-index: 1000;
    padding: 10px 20px;
}

.navbar-brand img {
    height: 60px;
    width: auto;
    border-radius: 50%; /* Optional: Makes the logo round */
}

.navbar-nav .nav-link {
    color: white !important;
    font-size: 20px;
    font-weight: bold;
    font-family: "Dancing Script", cursive;
    margin-right: 15px;
    transition: color 0.3s ease;
}

.navbar-nav .nav-link:hover {
    color: #f9b9e3 !important; /* Light pink hover effect */
    text-decoration: underline;
}

</style>