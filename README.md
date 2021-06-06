# La Petite Traveller

This website was created to provide guidance and inspiration for people interested in backpacking; furthermore those specifically interested in visiting Sri Lanka as that is the 'recent trip' currently featured on this website. This website was made for educational purposes only.

This website is made up of the following sections:

1. Introduction
2. Travel Tips 101
3. Guide for the most recent trip the author has taken, in this case, Sri Lanka
4. Form to sign up to La Petite Traveller's newsletter

The business goals for this website are:

1. To advise users on how to backpack and travel around the world on a budget
2. To inspire users to visit countries that have been reviewed
3. Earn commission from links provided (hotels, restaurants, products)
4. Build a database of users to send future information & content to, thus furthering the reach of the author.

The user goals of this website are:
1. To easily find useful information & tips for travelling/backpacking
2. To find inspiration for planning future trips
3. To find a helpful guide on Sri Lanka, with possible routes to take and options available
4. To find recommendations from a trusted source for restaurants and hotels
5. To easily find affiliate pages for the author, with even more inspiration available
6. To be able to sign up to directly receive content via a newsletter

## UX
---
### **Strategy**

Considering the core UX principles I first started to think about the strategy for this website and defined who the target users would be and what features/technologies they would want.

La Petite Traveller's target users are:
* Aged 18-30
* Past/future backpackers
* People interested in travelling on a budget
* Have an interest in visiting Sri Lanka

What these users would be looking for:
* Clear, concise, easy-to-find information
* Beautiful photos that provide inspiration and make the destinations look desirable
* Helpful guidance on routes available
* Recommendations for where to eat/stay

This website will offer all of these things whilst also allowing for intuitive navigation and comfortability of use. An effort was taken to not provide an overwhelming amount of information as this is often the reason people are put off with travel guides.

Due to the age group of the users, it is assumed that most users will be viewing the site on their mobile phones and therefore creating something responsive is integral to the design.

### **Scope**

In order to achieve the desired user & business goals, the following features will be included in this release:

- Header and menu bar, to navigate to various sections of the page
- Information section full of tips for backpacking
- Downloadble Checklist of things to pack
- Ratings of a recent trip to Sri Lanka
- Interactive map of the route taken
- Information, recommendations and advice for travelling Sri Lanka
- Gallery of images from the Sri Lanka trip
- Newsletter sign up form
- Links to affiliate social media pages

### *Structure* 

This website is a single page website to allow for desired flow; the navigation bar at the top allows for users to easily move to whatever section of the site they are interested in or they can simply scroll through the information as it is displayed. I chose the following order for the information 'Home > Travel Tips 101 > My Last Trip > Keep in Touch', as I felt this would allow the information to be digested in the best way. The text blocks are broken up with images to ensure interest is kept and there is no information overload at any point. There is a concise review of Sri Lanka before the more in-detail guide as I wanted users to be able to find these key bits of information quickly. Finally there is a simple sign up form for users to sign up to the La Petite Traveller's newsletter.

### **Skeleton**

[link to wireframes]

### **Surface**
I chose a colour palette based around a blues and greens as these colours remind me of the sea & being amongst nature; I want the users of this website to be transported to their own memories of travelling and believe these colours will help to do this. I paired these with a lighter off-white in order to allow for appropriate contrast. 

## **Features**
This is a fully responsive website that was designed mobile first as this is the most likely way it will be viewed; the page is divided into the four sections listed in the navbar. Where a colour background has been used it has a slightly transparent opacity and the text is an off-white. All of the headings use the font Cookie and the body text is Raleway, this consistency has been used across the website to create a coherent design. 

*Navbar*
The navbar is placed on top of a responsive image which acts as a header, when viewed on smaller screens I opted for the menu to collapse into a hamburger icon as I still wanted to image to be seen. The image I have chosen is representative of the sites theme and incorporates the colour pallete, it immediately encourages the user to think of being on holiday and entices them to read further. 

*About*
This is where I introduce myself and the page and give a brief insight into why it was created, I have used a H2 element for the main heading, followed by a H3 tag line and then a more descriptive paragraph. I wanted to keep this section simple and clean as there is plenty more information to follow.  

*Travel Tips 101*
This section starts with a H2 heading and is the followed by a series of H4 and P elements, this structure is used to provide clarity of the items within this section and make it easy to understand at a glance. This also allows the users to direct their attention to a particular section they a more interested in. Within the p elements there are a number of clickable links for products mentioned, this enables the user to easily navigate their way to recommended products creating a trusting relationship between the author and user.
There is also an Essentials list of items to pack when travelling, on smaller screens this list appears under the Travel Tips and on larger screens (1440px+) it is alongside it. This list is also available as a downloadable document so that users can print this list to use for their own packing. 

*My Last Trip*
This section includes the most information on the page and so I wanted to include imagery alongside text. The title is a H2 element that is set underneath a responsive hero image, this is followed by a concise review of Sri Lanka. The review is built using H4 and p elements with icons from FontAwesome. 
There is then a seperate div that contains a far more detailed review of Sri Lanka, this features a map embedded using GoogleMaps and also a read more/read less button. I want users to read this information only if they want to and it not be an overwhelming amount of text on their screen. 
I have then included an interactive photo gallery of images of my trip to Sri Lanka, this uses HTML, CSS and some JavaScript.

*Keep in touch*
This is a sign up form that will allow the user to sign up for La Petite Traveller's newsletter. There is a H2 & H3 providing information regarding the form and an animated arrow guiding the user's attention to the form below. The form uses 3 elements, 2 text inputs and an email input. They are all required therefore all information is necessary to submit the form. The colour pallet used is the same as across the site.

---
## Technologies Used ##
I have used a number of technlogies that have enabled this design to work:

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
    - Used as the basic building block for the project and to structure the content.
- [CSS](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
    - Used to style all the web content across the project. 
- [JavaScript](https://www.javascript.com/)
    - Used for the responsive navbar, form, scroll down arrow and read more/read less button.
- [Google Fonts](https://fonts.google.com/)
    - Used to obtain the fonts linked in the header, fonts used were Playfair and Cookie
- [Font Awesome](https://fontawesome.com/)
    - Used to obtain the social media icons used in the footer and the icons in La Petite Review.
- [Google Developer Tools](https://developers.google.com/web/tools/chrome-devtools)
    - Used as a primary method of fixing spacing issues, finding bugs, and testing responsiveness across the project.
- [Github](https://github.com/)
    - Used to store code for the project after being pushed.
- [Git](https://git-scm.com/)
    - Used for version control by utilising the Gitpod terminal to commit to Git and Push to GitHub.
- [Gitpod](https://www.gitpod.io/)
    - Used as the development enviroment.
- [Balsamiq](https://balsamiq.com/)
    - Used to create the wireframes for the project.
- [AutoPrefixer](https://autoprefixer.github.io/)
    - Used to parse my CSS and ass vendor prefixes.
- [Grammarly](https://www.grammarly.com/)
    - Used to fix the thousands of grammar errors across the project.
- [Unicorn Revealer](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB)
    - Used to detect overflow of elements, which allowed to me to quickly debug any issues.
- [Coloors] (https://coolors.co/)
    - Used to create a colour palette for the design.
- [Fancybox](https://fancyapps.com/fancybox/3/)
    - Used to format my Sri Lanka photo gallery.
- [Favicon.io] (https://favicon.io/)
    - Used to create favicon's for my website
- [Tiny.png] (https://tinypng.com/)
    - Allowed me to compress my images so that the page would load faster.
- [Color Contrast Accessibility Validator](https://color.a11y.com/)
    - Allowed my to test the colour contrast of my webpage.
- [W3C Markup Validation Service](https://validator.w3.org/) 
    - Used to validate all HTML code written and used in this webpage.
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_input)
    - Used to validate all CSS code written and used in this webpage.
- [Freeformatter CSS Beautify](https://www.freeformatter.com/css-beautifier.html)
    - Used to accurately format my CSS code.
- [Freeformatter HTML Formatter](https://www.freeformatter.com/html-formatter.html)
    - Used to accurately format my HTML code.

---
## Testing
---
## Deployment
I deployed this website by using GitPages and following the below steps:
1. Log in to Github
2. Select project repository
3. Select settings
4. Select pages on the left-hand menu
5. In the source section, select branch 'Master' and save
6. The page is then given a site URL 
(add photos of various stages)
---
## Credits
---
## Acknowledgements
---
