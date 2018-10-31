# Steps to run unit test scripts for Violet Samples with Bespoken
1. Open a terminal window and `cd` to the project

2. Install the dependencies for the project:  
`npm install`

3. Install the Bespoken CLI:  
`npm install bespoken-tools -g`

4. Start the Violet server with `node scripts/<SCRIPT_NAME>.js` (within one terminal window)  
For example, to run the finance calculator, run `node scripts/financeCalculator.js`

5. Run `bst test` (within a separate terminal window)  
The output should look like this:
```console
λ bst test

BST: v2.0.17  Node: v8.11.3
 PASS  tests\unit\financeCalculator.test.yml
  en-US
    Launch request, no further interaction.
      √ LaunchRequest
      √ SessionEndedRequest
    Launch intent (getting help)
      √ LaunchRequest
      √ launch
      √ SessionEndedRequest
    Split the bill (node-0_1) intent with a utterance
      √ LaunchRequest
      √ Split 177 among 4 people
      √ SessionEndedRequest
    Giving tip, standard percentage (node-0_2) intent
      √ LaunchRequest
      √ How much is tip on a bill of 271 dollars
      √ Standard tip
      √ SessionEndedRequest
    Giving tip, non standard percentage (node-0_2) intent
      √ LaunchRequest
      √ How much is tip on a bill of 271 dollars
      √ 17% percent tip
      √ SessionEndedRequest
    Mortgage (node-0_3) and closeSession intents
      √ LaunchRequest
      √ How many payments on my mortgage
      √ I owe the bank 375000
      √ 18 percent
      √ I typically pay 800 dollars
      √ closeSession

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        1.989s, estimated 2s
Ran all test suites.
```

6. To run the tests for google, simply enter:  
`bst test --platform google`
