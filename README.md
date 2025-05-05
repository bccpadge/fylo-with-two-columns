# Frontend Mentor - Fylo landing page with two column layout solution

This is a solution to the [Fylo landing page with two column layout challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-landing-page-with-two-column-layout-5ca5ef041e82137ec91a50f5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Desktop preview](./fylo-screenshot.png)



### Links

- Solution URL: [Frontend Mentor]()
- Live Site URL: [GitHub Pages](https://bccpadge.github.io/fylo-with-two-columns/)

## My process

### Built with

<p align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-663399?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
</p>


### What I learned

I learned how to add a scroll to top button to this website and add Scroll Reveal animations using JavaScript.



```html
<a href="#top" class="footer__scroll active" aria-label="click to scroll to top of page" data-js-top>
  <i class="fa-solid fa-arrow-up"></i>
</a>
```

```js
ScrollReveal().reveal(".text-group ", {
  origin: "left",
  duration: 1000,
  distance: "50px",
  reset: true,
});
```

### Continued development

Start building projects using ReactJS and Tailwind CSS.

### Useful resources

- [Shots](https://shots.so/) - Create and share beautiful screenshots of your site


## Author
- [Rebecca Padgett](https://linkedin.com/in/rebeccapadgett121) on LinkedIn



## Acknowledgments

- [Scroll to top button](https://www.youtube.com/watch?v=CDRcfbHyRqw) YouTube video by codewithsadee. 