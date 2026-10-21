
const { test, expect } = require('@playwright/test');

//Single file upload 

// test.skip('Single file Uplaod', async ({ page }) => {

//     //  await page.goto('https://testautomationpractice.blogspot.com/');
//     // await page.locator("//input[@id='singleFileInput']").setInputFiles('tests/uploadFiles/Lingaraj_Belagali_Resume.pdf')

//     // pass cmd like this : npx playwright test "tests/UploadFiles.spec.js" --headed
//     //  await page.waitForTimeout(10000);

// });



//Multiple files upload 


test('Multiple Files upload', async ({ page }) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator('//input[@id="filesToUpload"]')
        .setInputFiles([
            'tests/uploadFiles/Lingaraj_Belagali_QA_Resume_Manual_Automation_API.docx',
            'tests/uploadFiles/Lingaraj_Belagali_Resume.pdf']);


    await page.waitForTimeout(3000);

    //npx playwright test "tests/UploadFiles.spec.js" --headed

    expect(await page.locator('//ul[@id="fileList"]/li[1]')).toHaveText('Lingaraj_Belagali_QA_Resume_Manual_Automation_API.docx');
    expect(await page.locator('//ul[@id="fileList"]/li[2]')).toHaveText('Lingaraj_Belagali_Resume.pdf');

    await page.waitForTimeout(3000);


    //removing files
    await page.locator('//input[@id="filesToUpload"]').setInputFiles([]); // passing empty array 
    await page.waitForTimeout(3000);
    expect(await page.locator('//ul[@id="fileList"]/li[1]')).toHaveText('No Files Selected');


});