# Nucamp portfolio project using Bootstrap

## By: Kurt Reynolds

### November 10 - 21, 2021

<br><br>

---

#### **Notes**

Site created with Bootstrap 4, custom SCSS, and custom vanilla JavaScript.

Created build with Gulp.

- Know(Nostalgia) was created for a portfolio project for Nucamp coding bootcamp.
- The site has multiple pages which are responsive, as well as featuring buttons which, when pressed, display trivia about the given item.
- The initial design of the page was made with Figma. The page had a simple layout of Bootstrap cards on the index page with images, some information, and a button to display trivia. From there it was just a matter of placing the appropriate amount of rows and columns using Bootstrap 4.
- No major modifications were made between the design and build. The only difficulty in the design came from first figuring out how to get the buttons on the index page to stay at the bottom of the card and preventing the cards from being squashed at medium display. The first problem was solved by adding .d-flex and .flex-column to the .card-body then adding .mt-auto to .btn in the .card-body. The second problem was solved by removing the width of 18rem (which was initially in the Bootstrap code for the button) from the card and let the card width take up 100% of their respective columns.
- The Bootstrap components used include jumbotron-fluid, navbar, cards, and footer.
