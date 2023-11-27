const animationOptions = {
  ease: 'expo.inOut',
};

const introAnimation = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: animationOptions.ease,
      duration: 1,
    },
  });

  tl.to('.intro__title', {
    duration: 1.5,
    y: 0,
    autoAlpha: 1,
    delay: 0.5,
  })
    .to(
      '.intro__title',
      {
        duration: 1.5,
        y: -60,
        autoAlpha: 0,
      },
      '-=0.6'
    )
    .to(
      '.intro',
      {
        y: '-100%',
      },
      '-=0.5'
    );

  return tl;
};

const skewInElements = (elements) => {
  const tl = gsap.timeline();

  tl.from(elements, {
    duration: 1,
    ease: animationOptions.ease,
    skewY: -5,
    autoAlpha: 0,
    y: 40,
  });

  return tl;
};

const master = gsap.timeline({
  paused: false,
  delay: 0.2,
});

master.add(introAnimation()).add(fadeInElements('')).add(skewInElements(''), '-=1');
