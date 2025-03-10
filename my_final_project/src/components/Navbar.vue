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