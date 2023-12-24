document.addEventListener("DOMContentLoaded", function () {
  const playButtons = document.querySelectorAll(".bi-play");
  const pauseButtons = document.querySelectorAll(".bi-pause");
  const audioElements = document.querySelectorAll("audio");
 

  playButtons.forEach((playButton, index) => {
    playButton.addEventListener("click", function () {
      const audio = audioElements[index];
      if (audio.paused) {
        audio.play();
      }
    });
  });

  pauseButtons.forEach((pauseButton, index) => {
    pauseButton.addEventListener("click", function () {
      const audio = audioElements[index];
      if (!audio.paused) {
        audio.pause();
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const loginButton1 = document.getElementById("loginButton1");
    const loginButton2 = document.getElementById("loginButton2");

    loginButton1.addEventListener("click", function () {
        // первая кнопка
       
        window.location.href = "top_hits.html";
    });

    loginButton2.addEventListener("click", function () {
        window.location.href = "top_hits.html";
       
       
    });
    loginButton3.addEventListener("click", function () {
        window.location.href = "top_hits.html";
       
    });

    loginButton4.addEventListener("click", function () {
        window.location.href = "top_hits.html";
       
    });
   
});
document.addEventListener("DOMContentLoaded", function () {
    const backButton = document.getElementById("backButton");

    backButton.addEventListener("click", function () {
        window.location.href = "secondpage.html";
    });
    
});

document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById("nav-portfolio-tab");
  button.addEventListener("click", function() {
   
    window.location.href = "the_artist.html";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  
  const goBackButton = document.getElementById("goBackButton");
  goBackButton.addEventListener("click", function () {
    window.history.back(); // Этот код отправит вас на предыдущую страницу в истории браузера
  });
});

