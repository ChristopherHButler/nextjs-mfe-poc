# Micro frontends POC with Next.js

## About 

A micro frontends POC app using `Next.js` for the container app and 2 remotes:

 - `products` is a vanilla js app
 - `reactified` is a react app.

> Note: The versions of react and dependencies of reactified are old. The config is taken from [Stephen Grider's Udemy course: Microfrontends with React: A Complete Developer's Guide](https://www.udemy.com/course/microfrontend-course)

 - There is no SSR with this setup. You will probably (definitely?) need the [Module Federation next.js plugin](https://github.com/module-federation/nextjs-mf) but as of today [Zack](https://github.com/ScriptedAlchemy) is still working on adding SSR support to nextjs-mf.

 - remote projects can run stand-alone or in the container using the `mount` function pattern. See also my repo [mfe-ecomm](https://github.com/ChristopherHButler/mfe-ecomm) for a more in-depth explanation on how this setup works. Again this is also based off Stephen Grider's course work (All hail the king!)


## Getting started

1. run `npm i` on all projects

2. navigate into each project and start them up. for `products` and `reactified` run `npm start` and for the container (start this last) run `npm run dev`.

3. navigate to `localhost:3000` in the browser for the container project or 8081 for products stand alone, and / or 8082 for reactified.


## Next Steps

 - tnc will be built using this architecture.



