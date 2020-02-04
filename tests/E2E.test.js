const request = require('supertest')
const app = require('../index.js')

describe('Test the root path', () => {
    test('It should be 200 OK + Hello world', (done) => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.text).toBe('Hello world');
            done();
        });
    });
});

describe('Test unknown path', () => {
    test('It should be 200 OK + predefined response', (done) => {
        request(app).get('/randompath').then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.text).toBe("I'm a catch all ! Looking for something randompath?");
            done();
        });
    });
});
