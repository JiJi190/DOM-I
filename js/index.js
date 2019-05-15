const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// NAV Items
const navItems = ['Services', 'Product', 'Vision', 'Features', 'About', 'Contact'];
const navSetup = document.querySelectorAll('nav a');
navSetup.forEach(( currentValue, index) => {
  currentValue.textContent = siteContent.nav[`nav-item-${index + 1}`];
});

// CTA 
let headImg = document.getElementById('cta-img');
headImg.setAttribute('src', "img/header-img.png");

let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', 'img/mid-page-accent.jpg');

const mainHeader = document.querySelector('h1');
mainHeader.textContent = 'DOM Is Awesome';

const btnText = document.querySelector('.cta-text > button');
btnText.textContent = 'Get Started!';

// MAIN CONTENT
const textContentHeading = document.querySelectorAll('.text-content h4');
textContentHeading[0].textContent = 'Features';
textContentHeading[1].textContent = 'About';


const textContentP = document.querySelectorAll('.text-content p');
textContentP[0].textContent = '"Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
textContentP[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const bottomContentHeading = document.querySelectorAll('.bottom-content h4');
bottomContentHeading[0].textContent = 'Services'
bottomContentHeading[1].textContent = 'Product'
bottomContentHeading[2].textContent = 'Vision'

const bottomContent = document.querySelectorAll('.bottom-content p');
bottomContent[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
bottomContent[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
bottomContent[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'


// CONTACT
const contactHeading = document.querySelector('.contact > h4');
contactHeading.textContent = 'Contact';

const contactContent = document.querySelectorAll('.contact p')
contactContent[0].textContent = '123 Way 456 Street Somewhere, USA'
contactContent[1].textContent = '1 (888) 888-8888'
contactContent[2].textContent = 'sales@greatidea.io'

// FOOTER

const copyrice = document.querySelector('footer > p');
copyrice.textContent = 'Copyright Great Idea! 2018';