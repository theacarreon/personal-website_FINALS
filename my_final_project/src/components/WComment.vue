<template>
  <div class="comments">
    <h1>Comments</h1>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        {{ comment.name }}: {{ comment.comment || "No comment provided" }}
      </li>
    </ul>
  </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { supabase } from "../lib/supabaseClient";
  
  const comments = ref([]);
  
  async function getComments() {
    const { data, error } = await supabase
    .from("WComments")
    .select()
    .order("created_at", { ascending: false }); // Fetch newest comments first
  
    if (error) {
      console.error("Error fetching comments:", error);
    } else {
      comments.value = data;
    }
  }
  
  onMounted(() => {
    getComments();
  });
  
  </script>
  
  
  
  <style>

.comments {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Create 3 equal-width columns */
  gap: 10px; /* Adjust spacing between comments */
  display: flex;
  align-items: center; 
  background-color: rgba(82, 82, 82, 0.5);
  border-radius: 15px;
  padding: 40px;
  max-width: auto;
  margin: 50px auto;
  box-shadow: 0 0 10px rgba(0, 150, 0, 0.866);
  text-align: center;
  color: #fff;
  font-family: 'Dancing Script', sans-serif;
  font-weight: bolder;
}

.comments h1 {
  font-size: 25px;
  text-align: center;
}


  </style>