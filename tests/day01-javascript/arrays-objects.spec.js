import { test, expect } from '@playwright/test';

test('JavaScript Arrays and Objects - Test Data', async () => {
    const testingTools = [
        'JIRA',
        'Postman',
        'Playwright',
        'SQL',
        'Git'
    ];

    const tester = {
        name: 'Your Name',
        role: 'QA Automation Tester',
        experience: 3,
        automation: true
    };

    console.log(`First Tool: ${testingTools[0]}`);
    console.log(`Third Tool: ${testingTools[2]}`);

    console.log(`Tester: ${tester.name}`);
    console.log(`Role: ${tester.role}`);
    console.log(`Experience: ${tester.experience}`);
    console.log(`Automation: ${tester.automation}`);

    expect(testingTools.length).toBe(5);
    expect(tester.automation).toBe(true);
});