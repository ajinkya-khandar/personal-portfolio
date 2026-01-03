document.addEventListener("DOMContentLoaded", () => {
  const stage = document.querySelector(".owl-stage");
  const items = document.querySelectorAll(".owl-item");
  const itemWidth = items[0].offsetWidth + 20; // include right gap
  let index = 0;

  // clone for seamless loop
  stage.innerHTML += stage.innerHTML;

  setInterval(() => {
    index++;

    stage.style.transition = "transform 0.25s ease";
    stage.style.transform = `translate3d(-${index * itemWidth}px, 0, 0)`;

    // Reset smoothly when reaching halfway (after clone)
    if (index >= items.length) {
      setTimeout(() => {
        stage.style.transition = "none";
        stage.style.transform = "translate3d(0,0,0)";
        index = 0;
      }, 260);
    }
  }, 5000); // 1 second per slide
});

document.addEventListener('DOMContentLoaded', () => {
  appendTotalExperience(document.getElementById('exp1'));
  appendTotalExperience(document.getElementById('exp2'));
  document.getElementById('year').textContent = new Date().getFullYear();

  const slider = document.querySelector('.brand-wrap');

  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    slider.scrollLeft = scrollLeft - walk;
  });

  // Touch support (mobile)
  slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });

});

function appendTotalExperience(pElement) {
  if (!pElement) return;

  const text = pElement.innerText.trim();

  // Match: Jan' 21 to Dec' 23  OR  Jan' 21 to Present
  const regex = /([A-Za-z]{3})'\s*(\d{2})\s+to\s+(Present|([A-Za-z]{3})'\s*(\d{2}))/i;
  const match = text.match(regex);

  if (!match) return;

  const monthMap = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
  };

  const startMonth = monthMap[match[1]];
  const startYear = 2000 + Number(match[2]);

  let endMonth, endYear;

  if (match[3].toLowerCase() === 'present') {
    const now = new Date();
    endMonth = now.getMonth();
    endYear = now.getFullYear();
  } else {
    endMonth = monthMap[match[4]];
    endYear = 2000 + Number(match[5]);
  }

  let totalMonths =
    (endYear - startYear) * 12 +
    (endMonth - startMonth) + 1; // inclusive month count

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let duration = '';
  if (years) duration += `${years} yr${years > 1 ? 's' : ''} `;
  if (months) duration += `${months} mo${months > 1 ? 's' : ''}`;

  pElement.innerText = `${text} | ${duration.trim()}`;
}

