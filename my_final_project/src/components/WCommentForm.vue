<template>
  <div class="comment-form">
    <form @submit.prevent="submitComment">
      <h1>What is your feeling? Leave a Comment!</h1>
      <label for="name">Name:</label>
      <input type="text" id="name" class="form-control" v-model="name"> 
      <label for="comment">Comment:</label>
      <textarea id="comment" class="form-control" rows="4" v-model="comment"></textarea> 

      <button type="submit" class="btn">Submit Comment</button> 
    </form>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { supabase } from '../lib/supabaseClient'

  const name = ref('');
  const comment = ref('');
  const submissionStatus = ref(null);

  const tableName = 'WComments'; 

  const emit = defineEmits(["comment-submitted"]);

  async function submitComment() {
    submissionStatus.value = "Submitting...";

    try {
      const { error } = await supabase
        .from(tableName) 
        .insert([{ name: name.value, comment: comment.value }]); 

      if (error) {
        console.error("Error inserting comment:", error);
        submissionStatus.value = "Error submitting comment. Please try again.";
      } else {
        submissionStatus.value = "Comment submitted successfully!";
        name.value = ""; 
        comment.value = "";
        emit("comment-submitted"); 
      }
    } catch (err) {
      console.error("An unexpected error occurred:", err);
      submissionStatus.value = "An unexpected error occurred. Please try again.";
    }
  }
</script>

<style scoped>
.comment-form {
  display: flex;
  align-items: center; 
  background-color: rgba(82, 82, 82, 0.5);
  border-radius: 15px;
  padding: 40px;
  max-width: 450px;
  margin: 50px auto;
  box-shadow: 0 0 20px rgb(255, 148, 203), 0 0 10px rgba(0, 150, 0, 0.866);
  text-align: center;
  color: #fff;
  font-family: 'Dancing Script', sans-serif;
  font-weight: bolder;
}

.comment-form label {
  display: block;
  flex: 0.8; /* Adjust flex value as needed */
  /* margin-bottom: 0.5rem;  Consider removing or adjusting */
  color: #fff;
  font-weight: bold;
}

.comment-form input.form-control,
.comment-form textarea.form-control {
  background-color: #a7a7a7;
  color: #ffffff;
  border: 1px solid rgba(0, 150, 0, 0.866);
  padding: 8px;
  border-radius: 5px;
  flex: 2.2; /* Adjust flex value as needed */
}

.btn {
  display: block;
  margin: 20px auto 0;
  padding: 10px 20px;
  background-color: #030303;
  color: white;
  border: 1px solid rgba(0, 150, 0, 0.866);
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
  margin-top: 0.5rem;
}

.btn:hover { /* Corrected button hover selector */
  background-color: rgb(255, 148, 203);
}

.comment-form h1 {
  font-size: 25px;
}
</style>