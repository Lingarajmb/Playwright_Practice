

const { test, expect } = require('@playwright/test');





//Anmotations
//1. test.only
// test.only('test1', async ({ page }) => {

//     console.log('this test1')
// });

// test.only('test2', async ({ page }) => {

//     console.log('this test2')
// });


//2. test.skip -- without conditions

// test.skip('test3', async ({ page }) => {

//     console.log('this test3')
// });

//3. test.skip -- with conditions
/*
//in this case broswer config is chromium only firefox not enabled // output :  test skiped
test('test4', async ({ page, browserName }) => {

    console.log('this test4')
    if (browserName === 'chromium') {
        test.skip();
    }
});

//in this case broswer config is "chromium: enabled" and "firefox : disabled" // output :  test passed
test('test3', async ({ page, browserName }) => {

    console.log('this test3')
    if (browserName === 'firefox') {
        test.skip();
    }
});
*/

//4. Fixme
/*
test('test4', async ({ page }) => {
    test.fixme()
    console.log('this test4')

}); // this is in debbaging mood, when we found a bug on that time we will use this mood
*/

//5.fail

//output : Expected to fail, but passed.
// test('test5', async ({ page }) => {
//     test.fail() //expected
//     console.log('this test5')
//     expect(1).toBe(1);// actul // if both exp and actual is passed then test will be "output : Expected to fail, but passed."
// });


// test('test5', async ({ page }) => {
//     test.fail() //expected
//     console.log('this test5')
//     expect(1).toBe(2);  // actul // if both exp and actual is failed then test pass
// });

test('test6', async ({ page, browserName }) => {
    console.log('this test6')
    if (browsername === 'chromium') {
        test.fail() //expected
    }
});



