
const config  = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
};

export const lazyLoad = () => {
  let images = document.querySelectorAll('main img')
  let observer = new IntersectionObserver((element) => {
    
    element.forEach(imgEl => {
      if(!imgEl.isIntersecting) return;
      if(imgEl.intersectionRatio > 0) {
        const img = new Image();
        img.src = imgEl.target.getAttribute('data-src');

        img.onload = () => {
          imgEl.target.setAttribute('src', img.src)
          imgEl.target.closest('div').classList.add('active')
          imgEl.target.setAttribute('data-src', '')
        }
        observer.unobserve(imgEl.target)
      }
    })
  }, config)
  
  images.forEach(image => {
    observer.observe(image)
  })
}