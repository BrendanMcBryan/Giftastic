# Toon GIFs for you Toon GIFs for me Toon GIFs for Everyone!

#### HOMEWORK

##### 06 Ajax Giphy API

### HW Overview

In this assignment, you'll use the GIPHY API to make a dynamic web page that populates with GIFs of your choice. To finish this task, you must call the GIPHY API and use JavaScript and jQuery to change the HTML of your site.

## Site Overview

I have chosen a Cartoon theme for my ajax/api exercise. On this site I demonstarte the following…

- User is presented with pre-chosen buttons of cartoons.
- User is given the ability to add to the list of buttons with thier own text input.
- When a button is pressed the site contacts the giphy API and gets 10 GIFs related to the data in that button.
- The site then takes that JSON, grabs various keys needed to create containers of the GIF, the Rating, and the still image.
- Those containers are then rendered on the page.
- The user can click the GIF image to "pause" it.
- The user can continue adding button or clicking buttons to append mor of thier favorite gifs to the page.
- Rememeber, only cartoons! 🙂

## Further

I have run out of time, but I had planned on adding some "Save to Favorites" functionality to the site. However, the pseudo code is something aloing these lines…

1. Render "favorite" button to each GIF div
2. That button should then send the data about the GIF to a new Array of Records.
3. add a button to see one's favorites (when they exist)
4. Have that button render the Gifs, not from the the API, but from the stored array.
