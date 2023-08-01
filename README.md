# IRIS Code Test

## Introduction

Congratulations on making it to the code test! Firstly you will want to do a little setup to
get the project up and running. The code contains a javascript script file, testScript.js where
you will be doing most of the work, and a backend api script. Please attempt setup prior to the interview and ensure you have node installed as well as an editor of your choice. We ask that
candidates do not have copilot or any other assistance tool enabled during the interview. These
tools are great but don't let us see how you address the problem.

### Api Setup

To setup the api run the following:

Navigate to api folder: `cd iris-test-api`
Install packages: `npm install`
Run api: `node ./src/index.js`

Check the api is up and running by using:
`curl http://localhost:3000/v1/subdivisions`

### Test Script Setup

To setup the test script run the following:

At the root of the SEICodeTest folder run:
`npm install`

To run the script: `node testScript.js`

## Test

The test is broken down into three parts.

### Part 1

In this part you are expected to write a request to the api to retrieve the subdivision data.
Then write another function to return a list of subdivision names ordered alphabetically with
no duplicates.

### Part 2

Here you will write a function that can filter the data set based on a specified attribute (the subdivision status code)

### Part 3

Finally, you will be asked to write a function that can retrieve the subdivision with the latest
near map image.

## Glossary

subdivision - An area of land containing lots or plots of land for property development
subdivision status code - The status of the subdivision. Can either be:
ACTIVE: This subdivision has ongoing construction
FUTURE: This subdivision will have construction in the near future
BUILT OUT: This subdivisions construction has been completed
NearMap: NearMap is one of the provides used at Zonda satellite for our image data.
