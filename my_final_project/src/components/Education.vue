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
import apcLogo from '@/assets/images/APC-Logo.png';
import cvsuLogo from '@/assets/images/cvsu-logo.jpg';
import bnhsLogo from '@/assets/images/bnhs-logo.jpg';
import ccaLogo from '@/assets/images/cca-logo.jpg';
</script>
