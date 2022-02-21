
const config  = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
};

const setBackgroundImages = () => {
  let backgrounds = document.querySelectorAll('.background')
  let observer = new IntersectionObserver((element) => {
    
    element.forEach(backgroundElement => {
      if(!backgroundElement.isIntersecting) return;
      if(backgroundElement.intersectionRatio > 0) {
        const img = new Image();
        img.src = backgroundElement.target.getAttribute('data-bg');

        img.onload = () => {
          backgroundElement.target.style.backgroundImage = 'url('+ img.src +')'
          backgroundElement.target.closest('section').classList.add('active')
          backgroundElement.target.setAttribute('data-bg', '')
        }
        observer.unobserve(backgroundElement.target)
      }
    })
  }, config)
  
  backgrounds.forEach(image => {
    observer.observe(image)
  })
}

export { setBackgroundImages };