const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) loadNextPage();
}, { rootMargin: '200px' });
observer.observe(document.querySelector('#scrollSentinel'));