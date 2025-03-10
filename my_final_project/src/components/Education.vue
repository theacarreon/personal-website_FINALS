<template>
    <section id="Education">
      <h2>Education</h2>
      <table class="education-table">
      <tr>
        <th>Year</th>
        <th>School</th>
        <th>Degree</th>
      </tr>
      <tr>
        <td>2022 - Present</td>
        <td>
          <img :src="apcLogo" alt="APC Logo" class="school-logo">
          NU - Asia Pacific College</td>
        <td>Bachelor of Science in Computer Science <br> with Specialization in Software Systems</td>
      </tr>
      <tr>
        <td>2014 - 2018</td>
        <td>
          <img :src="cvsuLogo" alt="cvsu logo" class="school-logo">
         Cavite State University - Imus Campus</td>
        <td>Bachelor of Arts in Mass Communication <br> Major in Journalism</td>
      </tr>
      <tr>
        <td>2010 - 2014</td>
        <td>
          <img :src="bnhsLogo" alt="bnhs logo" class="school-logo">
         Bacoor National High School - Villa Maria Annex</td>
        <td>High School</td>
      </tr>
      <tr>
        <td>2004 - 2010</td>
        <td>
          <img :src="ccaLogo" alt="cca logo" class="school-logo">
         Citiville Christian Academy</td>
        <td>Elementary</td>
      </tr>
      </table>
    </section>
</template>


<script setup>
import apcLogo from '@/assets/images/APC-logo.png';
import cvsuLogo from '@/assets/images/cvsu-logo.png';
import bnhsLogo from '@/assets/images/bnhs-logo.jpg';
import ccaLogo from '@/assets/images/cca-logo.jpg';
</script>

<style>
.education-table {
    width: 50%; /* Leaves 30% space on both sides */
    margin: 0 auto; /* Centers the table */
    border-collapse: collapse;
    background: rgba(0, 0, 0, 0.5); /* Semi-dark background */
    color: white;
    text-align: center;
    font-family: "Lilita One";
    box-shadow: 0px 5px 15px rgba(0, 255, 136, 0.3); /* Glowing shadow */
}

.education-table th, .education-table td {
    border: 1px solid rgba(255, 255, 255, 0.5); /* 50% opacity for borders */
    padding: 10px;
}

.education-table th {
    font-weight: bold;
    text-align: center;
}

.school-logo {
    width: 30px; /* Adjust logo size */
    height: auto;
    margin-right: 10px; /* Adds space between logo and school name */
    vertical-align: middle; /* Aligns logo with text */
}

#Education h2 {
    font-family: 'Dancing Script', sans-serif; 
    font-size: 2em;
    font-weight: bold;
    color: white !important;
    text-align: center; /* Centers text */
}

</style>
