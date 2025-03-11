<template>
    <div class="comment-form">
    <form @submit.prevent="submitComment">
        <label for="name">Name:</label>
        <input type="text" id="name" class="form-control">
        <label for="comment">Comment:</label>
        <textarea id="comment" class="form-control" rows="4"></textarea>

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
  
  // Your Supabase URL and Key - IMPORTANT!
  const tableName = 'comments'; // Name of your Supabase table
  
const emit = defineEmits(["comment-submitted"]);

async function submitComment() {
  submissionStatus.value = "Submitting...";

  try {
    const { error } = await supabase
      .from("comments")
      .insert([{ name: name.value, comment: comment.value }]);

    if (error) {
      console.error("Error inserting comment:", error);
      submissionStatus.value = "Error submitting comment. Please try again.";
    } else {
      submissionStatus.value = "Comment submitted successfully!";
      name.value = ""; 
      comment.value = "";
      emit("comment-submitted"); // Notify parent component to refresh
    }
  } catch (err) {
    console.error("An unexpected error occurred:", err);
    submissionStatus.value = "An unexpected error occurred. Please try again.";
  }
}

</script>

<style scoped>
 .comment-form {
    background-color: #525252; /* Dark background for the form */
    border-radius: 15px;
    padding: 40px;
    max-width: 400px;
    margin: 50px auto; /* Center the form */
    box-shadow: 0 0 20px rgb(255, 148, 203), /* Purple/pink glow */
                0 0 10px rgba(0, 150, 0, 0.866); /* Green glow */
    text-align: center;
    color: #fff; /* White text */
    font-family: 'Dancing Script', sans-serif; 
    height: 300px;
}

.comment-form label {
    display: block;
    margin-bottom: 0.5rem;
    color: #fff; /* White label text */
}

.btn {
  display: block;
  margin: 20px auto 0; /* Center the button */
  padding: 10px 20px;
  background-color: #030303; /* Semi-dark background */
  color: white;
  border: 1px solid rgba(0, 150, 0, 0.866); /* Neon green border */
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.sbtn:hover {
  background-color: #555;
}
</style>