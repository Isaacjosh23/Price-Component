# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-I-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard
- **Bonus**: Complete the challenge with just HTML and CSS


### Links

- Solution URL: [Price Component](https://pricecom.netlify.app/)
- Live Site URL: [Price Component](https://pricecom.netlify.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- CSS custom properties
- [TailwindCSS](https://tailwindcss.com/) - For styles
- Flexbox
- CSS Grid
- Mobile-first workflow



### What I learned

I learnt how to style a radio input element. The codes are below


```css
.toggle-switch input:checked + .slider,
.toggle-switch input + .slider {
  background: #7c73e6;
}

.toggle-switch input:checked + .slider::before {
  transform: translateX(2.4rem);
}
```



## Author

- Website - [Joshua Ebhamen](https://www.linkedin.com/in/joshua-ebhamen-4904aa344/)
- Frontend Mentor - [@Isaacjosh23](https://www.frontendmentor.io/profile/Isaacjosh23)
