import { test, expect } from '@playwright/test';

const loginTests = [
    {
        testName: 'Valid Login',
        username: 'validUser',
        password: 'Valid@123',
        expectedResult: 'Success'
    },
    {
        testName: 'Invalid Username',
        username: 'wrongUser',
        password: 'Valid@123',
        expectedResult: 'Failure'
    },
    {
        testName: 'Invalid Password',
        username: 'validUser',
        password: 'Wrong@123',
        expectedResult: 'Failure'
    },
    {
        testName: 'Empty Credentials',
        username: '',
        password: '',
        expectedResult: 'Validation Error'
    }
];

test('Login Test Data Validation', async () => {
    expect(loginTests.length).toBe(4);

    for (const loginTest of loginTests) {
        console.log(`Test: ${loginTest.testName}`);
        console.log(`Username: ${loginTest.username}`);
        console.log(`Expected Result: ${loginTest.expectedResult}`);
    }
});