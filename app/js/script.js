const hamburger = document.querySelector('.ham');
const menu = document.querySelector('.wrapper-menu');
const featuresNav = document.querySelector('.features')
const companyNav = document.querySelector('.company')
const overlay = document.querySelector('.overlay');


// Show Menu
hamburger.addEventListener('click', () => {
  menu.classList.toggle('showMenu')
  overlay.classList.toggle('bg-overlay')
})


const showList = function (list) {
  list.classList.toggle('showList');
}

const handleNavClick = function (e, listClass) {
  if (e.target.tagName !== 'LI') return

  const list = e.target.querySelector(`.${listClass}`);
  const chevron = e.target.querySelector('.chevron');
  chevron.classList.toggle('rotate');
  showList(list);
}

featuresNav.addEventListener('click', e => handleNavClick(e, 'features-list'));

companyNav.addEventListener('click', e => handleNavClick(e, 'company-list'));

