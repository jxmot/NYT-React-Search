# NYT React Search

A React-based rendition of the New York Times Article Search application Created as an exercise for week 19 homework.

* [Overview](#overview)
* [Usage](#usage)
  * [Running from Heroku](#running-from-heroku)
    * [URLs](#urls)

# Overview

A "scraper" application that requests a page from a predetermined "news" site and then extracts (*scrapes*) desired content. The extracted content is saved in a MongoDB using Mongoose. This application can also list previously extracted "issues", display them, and allow the user to create or delete comments for a specific "item".

# Usage

This application has been deployed to Heroku as per the assignment, but it can also be ran locally.

## Running from Heroku

At the time when this assignment was submitted the application has been deployed to Heroku. Its URL is - 

    Heroku link is provided in the homework submission
    
*NOTE: The `:3000` port selection is not necessary, there is a `PORT` environment variable that contains the port number to be used.*

### URLs

The following URLs are recognized by the server and will serve pages - 

* `https://deployed-server/` - displays the *index* page
* `https://deployed-server/index` - displays the *index* page

No other paths are intended for direct access via the browser.






