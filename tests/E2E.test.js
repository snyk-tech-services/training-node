const request = require('supertest')
const app = require('../index.js')

const redis = require('redis')
const redis_mock = require('redis-mock')

jest.spyOn(redis, 'createClient').mockImplementation(redis_mock.createClient)

describe('Test the root path', () => {
    test('It should be 200 OK + "is the best"', (done) => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.text).toContain('is the best');
            done();
        });
    });
});

describe('Test unknown path', () => {
    test('It should be 200 OK + predefined response', (done) => {
        request(app).get('/randompath').then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.text).toContain("I'm a catch all ! Looking for something randompath?");
            done();
        });
    });
});
