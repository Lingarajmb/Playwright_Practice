const { test, expect } = require('@playwright/test');


test.beforeAll(async () => {

    console.log('this is BeforeALL Hook...')
});
test.afterAll(async () => {

    console.log('this is AfterALL Hook...')
});

test.beforeEach(async () => {

    console.log('this is BeforeEach Hook...')
});
test.afterEach(async () => {

    console.log('this is AfterEach Hook...')
});




test.describe('Group 1', async () => {

    test('Test 1', async () => {

        console.log('This is Test 1');
    });

    test('Test 2', async () => {

        console.log('This is Test 2');
    });

})

test.describe('Group 2', async () => {

    test('Test 3', async () => {

        console.log('This is Test 3');
    });

    test('Test 4', async () => {

        console.log('This is Test 4');
    });

})




