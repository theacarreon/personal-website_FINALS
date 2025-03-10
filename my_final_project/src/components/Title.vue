<template>
          <div class="title">
          <div id="title-welcome">
              <h1>"Some things I cannot change, <br>
              But 'till I try I'll never know"</h1>
              <h2>- Elphaba, Wicked Witch of the West</h2>
              <a href="#about" class="know-more">Want to know more?</a>
          </div>
      </div>
</template>

<style>
.title {
    display: flex;
    flex-direction: column; /* Stack items vertically */
    justify-content: center; /* Center items vertically */
    align-items: center; /* Center items horizontally */
    height: 100vh; /* Adjust container height */
    width: 100vw;
    text-align: center;
    background-image: url('https://images.hdqwalls.com/download/elphaba-and-glinda-in-wicked-movie-ea-2880x1800.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    gap: 70px; /* Space between items */
    margin-bottom: 10vh;
}

#title-welcome {
    background-color: rgba(0, 0, 0, 0.5); /* Dark semi-transparent box */
    color: white; /* Text color */
    padding: 30px; /* Space inside the box */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Adds shadow */
    max-width: 600px; /* Controls width */
    margin-bottom: 10vh;
}

#title-welcome h1 {
    font-family: 'Lilita One', serif; 
    font-size: 2.5em;
    font-weight: 700;
    margin-bottom: 10px;
}

#title-welcome h2 { 
    font-family: 'Dancing Script', sans-serif; 
    font-size: 1.5em;
    font-weight: 300;
}



.know-more {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background 0.3s ease;
}

.know-more:hover {
    background-color: #2f7e33;
}

</style>