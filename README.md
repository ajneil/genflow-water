# Genflow tech test

https://genflow-test.herokuapp.com/

Thanks for the invitation to take this test.
I'm looking forward to your feedback.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
React Frontend <---> AWS API Gateway <---> AWS Lambda <---> AWS DynamoDB

## Information

As of 19/07/2021 there are no tests, no redux and no prop-types (& no linter!!!).
Which is a shame.  There's Also a little bug with the hand-rolled water selector on Safari; Simple fix / relace with npm package. 

I currently don't have the time to add them - or to refactor the code into something cleaner.

## Instructions 

### To run:
- run `npm run test`
- If a new tab isn't opened, head on over to [localhost:3000](http://localhost:3000)

### To switch AWS Gateway
- open `./genflow/src/constants.js`.
- replace API_KEY, API_REGION, API_PATH.

### Note: 
The Lambda function is returning an object with the following keys:
```{
  id
  amount,
  target,
}
```

## AC

1. This React web app should work on all viewports, on D​ esktop​ and ​Mobile​..
2. The graphic of the human should fill with the solid blue background based on the percentage of water consumed, out of their daily total.
3. You should be able to scroll left and right to select the different water values (100ml, 250ml, 350ml).
4. Clicking the plus icon at the bottom adds the selected amount of water to your total and updates the graphic, the minus button removes the selected amount of water and also updates the graphic.
5. Clicking the pencil icon in the target dotted line launches a modal on the same screen.
6. In the modal, inputting a new value in the text field should update your water total and the graphic, save this to D​ ynamoDB​ via a ​Lambda​ sitting behind an ​API Gateway​ and load this value again (​GET HTTP Request from API Gateway)​ on launch, so that the total matches the saved value upon reload.

