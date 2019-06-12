const request = require('supertest');
const app = require('./app.js');

describe('Test the root path', () => {
  test('It should response the GET method', (done) => {
    request(app)
      .get('/api/v1/rides')
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res).toBeDefined();
        done();
      });
  });
});

describe('Test the root path', () => {
  test('It should be defined', (done) => {
    request(app)
      .get('/api/v1/rides')
      .then((res) => {
        expect(res).toBeDefined();
        done();
      });
  });
});

describe('Test the root path', () => {
  test('It should response the POST method', (done) => {
    request(app)
      .post('/api/v1/rides')
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res).toBeDefined();
        done();
      });
  });
});
