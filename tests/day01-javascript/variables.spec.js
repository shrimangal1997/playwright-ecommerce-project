import { test, expect } from '@playwright/test';

test('JavaScript Variables - QA Test Data', async () => {
    const testerName = 'Joe';
    const role = 'QA Automation Tester';
    const experience = 3;

    let testCount = 0;

    testCount = testCount + 1;
    testCount = testCount + 1;
    testCount = testCount + 1;

    console.log(`Tester Name: ${testerName}`);
    console.log(`Role: ${role}`);
    console.log(`Experience: ${experience} years`);
    console.log(`Tests Executed: ${testCount}`);

    expect(testCount).toBe(3);
});