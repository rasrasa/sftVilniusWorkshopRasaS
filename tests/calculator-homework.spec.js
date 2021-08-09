const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const name = await page.innerText('.navbar__title');
  expect(name).toBe('Playwright');
});

  // Testing all the builds to see which one has a bug
  const buildOptions =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operationOptions = ['0', '1', '2', '3', '4'];
  const selector = ['div.intro-heading', '#selectBuild', '#number1Field', '#number2Field', '#selectOperationDropdown',
                      '#calculateButton', '#numberAnswerField', '#integerSelect', '#clearButton'];
  const buildSelector = selector[1];
  const integerSelector = selector[7];
  const operationSelector = selector[4];


  test.only(`Checks if one element exist`, async ({page}) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');

    const elementVisible = await page.isVisible('#number1Field');
    expect(elementVisible).toBe(true);
});


test(`Checks if all calculation elements in build ptototype are visible`, async ({page}) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');

  await page.selectOption('#selectBuild', '9');
  for(let i = 0; i < selector.length; i++) {

  }
});


// Test number 1
  buildOptions.forEach(option => {
    test.only(`Checks if all calculation elements in build ${option} are visible`, async ({page}) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption(buildSelector, option);

      for(let index = 0; index < selector.length; index++){
        const elementVisible = await page.isVisible(selector[index]);
        expect(elementVisible).toBe(true);
      }

    });
  });


// Test number 2
buildOptions.forEach(option => {
  test.only(`Checks build ${option} if 2 plus 5 sum is calculated as 7`, async ({page}) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.selectOption(buildSelector, option);
    await page.selectOption(operationSelector, operationOptions[0]);

    let number1 = 2;
    let number2 = 5;
    await page.fill('#number1Field', number1.toString());
    await page.fill('#number2Field', number2.toString());
    await page.click('#calculateButton');

    const answerField = await page.inputValue('#numberAnswerField');
    const expectedValue = (number1 + number2).toString();

    expect(answerField).toBe(expectedValue);

  });
});


// Test number 3
buildOptions.forEach(option => {
  test.only(`Checks if in build ${option} clear button is not disabled`, async ({page}) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.selectOption(buildSelector, option);

    const isDisabled = await page.isDisabled('#clearButton');

    expect(isDisabled).toBe(false);

  });
});


 // Test number 4
 buildOptions.forEach(option => {
  test.only(`Checks if Multiply calculation works correctly in build ${option}`, async ({page}) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.selectOption(buildSelector, option);
    await page.selectOption(operationSelector, operationOptions[2]);

    let number1 = Math.floor(Math.random() * 20) + 1;
    let number2 = Math.floor(Math.random() * 20) + 1;
    await page.fill('#number1Field', number1.toString());
    await page.fill('#number2Field', number2.toString());
    await page.click('#calculateButton');

    const answerField = await page.inputValue('#numberAnswerField');
    const expectedValue = (number1 * number2).toString();

    expect(answerField).toBe(expectedValue);

  });
});


// Test number 5
buildOptions.forEach(option => {
  test.only(`Checks build ${option} if first number 0 than the sum of the multiplied numbers is 0`, async ({page}) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.selectOption(buildSelector, option);
    await page.selectOption(operationSelector, operationOptions[2]);

    let number1 = 0;
    let number2 = Math.floor(Math.random() * 20) + 1;
    await page.fill('#number1Field', number1.toString());
    await page.fill('#number2Field', number2.toString());
    await page.click('#calculateButton');

    const answerField = await page.inputValue('#numberAnswerField');
    const expectedValue = (number1 * number2).toString();

    expect(answerField).toBe(expectedValue);

  });
});