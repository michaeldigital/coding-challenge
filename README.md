# 9Spokes Coding Challenge

## Overview

This small web application is used to calculate various finance values of an external json file: 
https://raw.githubusercontent.com/9spokes/coding-challenge/master/data.json

The code has been deployed to 
https://account-calculator.vercel.app/

When the user visits the page, the page will trigger an api call (useEffect) to fetch data (axios get api call), and does calculation, and saves data to state (useState).

Once the user clicks button "Print values", a table will be rendered with all values calculated.

## TachStack

This application is build with Next.js (React SSR), Typescript, Styled Component (styling), Jest.

To run the code: use script "npm run dev"

## Testing

This application is using Jest, React testing library for unit testing. 
Every page, component, function has a testing file.

To test the code: use "npm run test".

## Formatting

This application is using prettier for for matting. 

To format the code: use "npm run format".
