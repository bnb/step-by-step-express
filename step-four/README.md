# What have we done in this step

We've started parsing the JSON response we're getting from the URI `request` is reaching out to. With this parsed information, we've introudced a very basic JS templating language – called `hanlebars` – into our application that allows us to seperate application logic from what we're serving to the user.

We've introduced `handlebars` via the `exppress-handlebars` module which provides a easy-to-use view engine API for Express + `handlebars` when compared to alternative solutions to achieving the same goal.

We've gone ahead and created a `views` directory with our first view – `comic.handlebars` – that we then render when someone hits the `/comic` path in our application.