const topNav = document.querySelector('#top-nav');

window.addEventListener('scroll', _.debounce((e) => {
  const scroll = window.scrollY;
  const topNavClasses = topNav.classList;
  console.log('scroll position', scroll);
  if(scroll === 0) {
    topNavClasses.remove('hidden');
  } else if(!topNavClasses.contains('hidden')) {
    topNavClasses.add('hidden');
  }
}, 66))