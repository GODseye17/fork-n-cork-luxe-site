import { useEffect } from 'react';

declare const anime: any;

export const useAnimeScrollReveal = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const animationType = element.dataset.animation || 'fadeInUp';
          
          // Remove from observer after animation
          observer.unobserve(element);
          
          // Execute animation based on type
          switch (animationType) {
            case 'fadeInUp':
              anime({
                targets: element,
                translateY: [60, 0],
                opacity: [0, 1],
                duration: 1200,
                easing: 'easeOutExpo',
                delay: parseInt(element.dataset.delay || '0')
              });
              break;
              
            case 'fadeInLeft':
              anime({
                targets: element,
                translateX: [-80, 0],
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeOutCubic',
                delay: parseInt(element.dataset.delay || '0')
              });
              break;
              
            case 'fadeInRight':
              anime({
                targets: element,
                translateX: [80, 0],
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeOutCubic',
                delay: parseInt(element.dataset.delay || '0')
              });
              break;
              
            case 'scaleIn':
              anime({
                targets: element,
                scale: [0.8, 1],
                opacity: [0, 1],
                duration: 800,
                easing: 'easeOutBack',
                delay: parseInt(element.dataset.delay || '0')
              });
              break;
              
            case 'luxuryReveal':
              // Sophisticated luxury animation
              anime({
                targets: element,
                translateY: [40, 0],
                opacity: [0, 1],
                scale: [0.95, 1],
                duration: 1500,
                easing: 'cubicBezier(0.25, 0.46, 0.45, 0.94)',
                delay: parseInt(element.dataset.delay || '0'),
                complete: () => {
                  // Add subtle floating animation after reveal
                  anime({
                    targets: element,
                    translateY: [-3, 3],
                    duration: 4000,
                    direction: 'alternate',
                    loop: true,
                    easing: 'easeInOutSine'
                  });
                }
              });
              break;
              
            case 'goldShimmer':
              // Special gold shimmer effect for premium elements
              anime({
                targets: element,
                opacity: [0, 1],
                duration: 800,
                easing: 'easeOutQuad',
                delay: parseInt(element.dataset.delay || '0'),
                complete: () => {
                  // Add shimmer effect
                  const shimmer = element.querySelector('.shimmer-effect');
                  if (shimmer) {
                    anime({
                      targets: shimmer,
                      translateX: ['-100%', '100%'],
                      duration: 2000,
                      easing: 'easeInOutQuad',
                      loop: true,
                      direction: 'alternate'
                    });
                  }
                }
              });
              break;
              
            case 'staggerText':
              // Text reveal with staggered letters
              const textElement = element as HTMLElement;
              const text = textElement.textContent || '';
              textElement.innerHTML = text
                .split('')
                .map(char => char === ' ' ? ' ' : `<span style="opacity: 0; transform: translateY(20px);">${char}</span>`)
                .join('');
              
              anime({
                targets: `#${element.id} span`,
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 600,
                delay: (el: any, i: number) => i * 50,
                easing: 'easeOutExpo'
              });
              break;
              
            default:
              // Default luxury animation
              anime({
                targets: element,
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 1000,
                easing: 'easeOutCubic',
                delay: parseInt(element.dataset.delay || '0')
              });
          }
        }
      });
    }, observerOptions);

    // Observe all elements with anime-reveal class
    const scrollElements = document.querySelectorAll('.anime-reveal');
    scrollElements.forEach((el) => observer.observe(el));

    // Special animations for cards
    const cardElements = document.querySelectorAll('.card-luxury');
    cardElements.forEach((card, index) => {
      card.setAttribute('data-animation', 'luxuryReveal');
      card.setAttribute('data-delay', (index * 200).toString());
      card.classList.add('anime-reveal');
      observer.observe(card);
    });

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el));
      cardElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

export default useAnimeScrollReveal;