import { test, expect } from '@playwright/test';

function calculateTestCases(manualTests, automationTests) {
    return manualTests + automationTests;
}

test('JavaScript Functions - Test Case Calculation', async () => {
    const manualTests = 50;
    const automationTests = 30;

    const totalTests = calculateTestCases(
        manualTests,
        automationTests
    );

    console.log(`Manual Tests: ${manualTests}`);
    console.log(`Automation Tests: ${automationTests}`);
    console.log(`Total Tests: ${totalTests}`);

    expect(totalTests).toBe(80);
});