# What have we done in this step

We've gone ahead and added some additional error handling into the application. There are a few options for automatically scaffolding out Express applications (like [`express-generator`](http://npm.im/express-generator)) that will build out more effective error handling, but for this example I wanted to be sure to show you could build your own with minimal effort.

Additionally, we've added the ability to consume the `PORT` environment variable as the port we _should_ run the application on. If `PORT` isn't defined, we fall back to port `8080`. This is the only change required to deploy our app up to Azure AppService \o/

Here's a general checklist of what you'll need to do to make sure your app will work with the least amount of effort when you deploy to AppService:

- Run your app on the port defined via the `PORT` environment variable
- The value of the `main` property in your `package.json` is the same as the main file of your app
- Your dependencies are all defined in `package.json`

We can now right-click on the directory in VS Code and select "Deploy to Web App" and ship it to prod!

Also, we added a `favicon.ico`.