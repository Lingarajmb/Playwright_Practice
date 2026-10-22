



const { test, expect } = require('@playwright/test');
/*
//this old way 
test('test1@sanity', async ({ page }) => {
    console.log('This is my test1..')
});


test('test2@reg', async ({ page }) => {
    console.log('This is my test2..')
});


test('test3@sanity', async ({ page }) => {
    console.log('This is my test3..')
});


test('test4@reg', async ({ page }) => {
    console.log('This is my test4..')
});


test('test5@sanity@reg', async ({ page }) => {
    console.log('This is my test5..')
});


test('test6@sanity@reg@slow', async ({ page }) => {
    console.log('This is my test6..')
});
*/


//CLI commands
/*
# only @reg tests
npx playwright test "tests/Tags.spec.js" --grep "@reg"

# tests that have @sanity OR @reg
npx playwright test "tests/Tags.spec.js" --grep "@sanity|@reg"

# tests that have BOTH @sanity and @reg (regex lookahead)
npx playwright test "tests/Tags.spec.js" --grep "(?=.*@sanity)(?=.*@reg)"

# everything except @slow
npx playwright test "tests/Tags.spec.js" --grep-invert "@slow"

# @sanity but not @reg
npx playwright test "tests/Tags.spec.js" --grep "@sanity" --grep-invert "@reg"

*/


test('test1', { tag: '@sanity' }, async ({ page }) => {
    console.log('This is my test1..')
});
test('test2', { tag: '@sanity' }, async ({ page }) => {
    console.log('This is my test2..')
});

test('test3', { tag: '@reg' }, async ({ page }) => {
    console.log('This is my test3..')
});

test('test4', { tag: '@reg' }, async ({ page }) => {
    console.log('This is my test4..')
});
test('test5', { tag: ['@sanity', '@reg'] }, async ({ page }) => {
    console.log('This is my test5..')
});

//CLI Commands
/*
npx playwright test "tests/Tags.spec.js" --grep "@sanity"
npx playwright test "tests/Tags.spec.js" --grep "@reg"
npx playwright test "tests/Tags.spec.js" --grep "@sanity|@reg"
npx playwright test "tests/Tags.spec.js" --grep "(?=.*@sanity)(?=.*@reg)"
npx playwright test "tests/Tags.spec.js" --grep "@sanity" --grep-invert "@reg"
*/