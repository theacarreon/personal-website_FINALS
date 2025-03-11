<template>
  <div class="comments-container">
    <h1 class="comments-title">Comments</h1>
    <div class="comments-body">
      <ul>
        <li v-for="comment in comments" :key="comment.id">
          <span class="comment-name">{{ comment.name }}:</span> 
          <span class="comment-text">{{ comment.comment || "No comment provided" }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../lib/supabaseClient";

const comments = ref([]);

async function getComments() {
  const { data, error } = await supabase.from("wcomments").select();

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
.comments-container {
  background-color: rgba(82, 82, 82, 0.5);
  border-radius: 15px;
  padding: 40px;
  max-width: 800px; /* Adjust width */
  margin: 50px auto;
  box-shadow: 0 0 10px rgba(0, 150, 0, 0.866);
  color: #fff;
  font-weight: bolder;
  text-align: center;
}

.comments-title {
  font-size: 30px;
  font-weight: bold;
  font-family: 'Dancing Script', sans-serif;
  margin-bottom: 10px; /* Adds spacing */
  text-align: center;
}

.comments-body {
  font-size: 15px;
  font-family: 'Lilita One';
  text-align: left;
}

.comments-body ul {
  list-style: none;
  padding: 0;
}

.comments-body li {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  background: rgba(227, 227, 227, 0.2);
}

.comment-name {
  font-weight: normal;
}

.comment-text {
  font-weight: normal;
}
  </style>