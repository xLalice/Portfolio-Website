window.addEventListener('scroll', function() {
    const aboutSection = document.getElementById('about');
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset >= aboutSection.offsetTop - navbar.offsetHeight) {
      navbar.classList.add('darkbg');
    } else {
      navbar.classList.remove('darkbg');
    }
  });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (item.classList.contains(filter) || filter === 'all') {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

const portfolioOverlay = document.querySelectorAll('.portfolio-overlay');

portfolioOverlay.forEach(item => {
    item.addEventListener('click', e => {
        if (e.target !== e.currentTarget) return;
        const imgSrc = item.previousElementSibling.src;
        const lightbox = `
            <div class="lightbox">
                <img src="${imgSrc}" alt="lightbox image">
                <span class="close-btn">&times;</span>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', lightbox);

        const closeBtn = document.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => {
            document.querySelector('.lightbox').remove();
        });
    });
});

const words = ["Aspiring Software Developer", "Fervent Learner", "Writer", "Philosopher", "Basketball Player", "Gamer", "Avid Ready", "Movie Enthusiast", ];
let currentWordIndex = 0;

function typewriter() {
    const text = document.getElementById("hero");
    const textString = words[currentWordIndex];

    text.innerText = "";
    let i = 0;

    function revealNextLetter() {
        if (i < textString.length) {
            if (textString.charAt(i) === ' ') {
                text.innerHTML += '&nbsp;';
                } else {
                text.textContent += textString.charAt(i);
                }
                i++;
                setTimeout(revealNextLetter, 100);
        } else {
            setTimeout(deleteLastLetter, 1500);
        }
    }

    function deleteLastLetter() {
        if (text.textContent.length > 0) {
          text.textContent = text.textContent.slice(0, -1);
          setTimeout(deleteLastLetter, 100);
        } else {
            currentWordIndex++;
            if (currentWordIndex == words.length) {
                currentWordIndex = 0;
            }
            setTimeout(typewriter, 500);
        }
    }

    revealNextLetter();
}


typewriter();


  
  
  