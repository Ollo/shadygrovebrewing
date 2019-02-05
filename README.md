## Shady Grove Brewing Company

This is the static site / blog for tracking all of the details for my home brewery and all grain recipes.

---

#### Development

[![Netlify Status](https://api.netlify.com/api/v1/badges/c791eac3-037c-4dd3-af73-601fb7968260/deploy-status)](https://app.netlify.com/sites/shadygrove/deploys)

I've built a custom theme with some minimal templates written in Nunjucks and Sass that are built with Eleventy and Gulp and hosted on Netlify. Cha Cha Cha :tada:

Download and clone repo

```
npm install
```

To develop locally run:
```
npm run dev
```

This will run gulp watch and trigger a reload for sass changes as well as 
the Eleventy server that will live reload any template or markdown changes.

**Deployment:**

The CD is managed via Github and Netlify. When changes are pushed to master Netlify 
will run:
```
npm run build
```

Which builds the css and static html site and uploads it to the CDN. :boom:
