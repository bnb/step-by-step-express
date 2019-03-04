# What have we done in this step

Now that we understand that the express `req.query` object (where `req` is the name of the request object you've included in your `app.get()` callback), we can start using that to query the API we're hitting – the XKCD website, whcih provides a JSON object for every comic.

We've introduced the [`reuqest`](npm.im/request) module from npm (installed with `npm i request`), whcih allows us to very easily make HTTP requests. We've started using `req.query.id` to insert the comic number into the URI we've passed to `request`, and also defaulting to a simple text response if the required querystring isn't present.

Interestingly, because we're directly sending the response from the XKCD website without any additional modification (via `res.send(body)`), we've actually created an extremely basic reverse proxy – a powerful tool that can be used to seamlessly transition back-ends from one tool, language, or platform to another.