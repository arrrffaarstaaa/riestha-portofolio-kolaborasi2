  AOS.init({
    duration: 1000,
    once: true
  });

  // PROGRESS BAR ANIMATION SCROLL RESET
  const skillCards = document.querySelectorAll(".skill-card");

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      const bar = entry.target.querySelector(".progress-bar");
      const percent = entry.target.querySelector(".percent");

      const target = parseInt(bar.getAttribute("data-width"));

      // SAAT MASUK LAYAR
      if(entry.isIntersecting){

        let progress = 0;

        bar.style.width = "0%";
        percent.innerText = "0%";

        const animate = setInterval(() => {

          if(progress >= target){

            clearInterval(animate);

          } else {

            progress++;

            bar.style.width = progress + "%";
            percent.innerText = progress + "%";

          }

        }, 20);

      }

      // SAAT KELUAR LAYAR
      else{

        bar.style.width = "0%";
        percent.innerText = "0%";

      }

    });

  }, {
    threshold: 0.4
  });

  skillCards.forEach(card => {
    observer.observe(card);
  });