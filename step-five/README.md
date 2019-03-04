# What have we done in this step

We've started to serve some baisc static CSS from our project, since our previous unstyled display was a bit... lacking.

We're using Express's `static` method to serve from the `/static` directory. This will serve all static assets called from the `/static` directory – inhcluding assets like local images, stylesheets, and even the `favicon.ico` that browsers will automatically request.