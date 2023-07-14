function showCardsOnScroll() {
  let rows = document.querySelectorAll('.slider');
  
  for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    let rowTop = row.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    if (rowTop < windowHeight - 100) {
      row.classList.add('show');
    }
  }
}

window.addEventListener('scroll', showCardsOnScroll);

