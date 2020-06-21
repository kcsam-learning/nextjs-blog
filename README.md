# Next.js

## Pre-rendering
- Static Generation is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.
    - You should ask yourself: "Can I pre-render this page ahead of a user's request?" If the answer is yes, then you should choose Static Generation.
- Server-side Rendering is the pre-rendering method that generates the HTML on each request.
    -  Slower, but the pre-rendered page will always be up-to-date.

## getStaticProps
-  `getStaticProps` allows you to tell Next.js: “Hey, this page has some data dependencies — so when you pre-render this page at build time, make sure to resolve them first!”

## getServerSideProps
- If you need to fetch data at request time instead of at build time

## API Routes
### Do Not Fetch an API Route from getStaticProps or getStaticPaths
- You should not fetch an API Route from getStaticProps or getStaticPaths.
- Instead, write your server-side code directly in getStaticProps or getStaticPaths (or call a helper function).

## Deployment
- DPS Workflow: Develop, Preview, and Ship.
