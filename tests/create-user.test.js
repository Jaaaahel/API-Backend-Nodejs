const request = require('supertest');
const app = require('@/app');
const { getDBInstance } = require('@/database');

const sequelize = getDBInstance();

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe('Test the create user', () => {
  test('It should successfully create a user', async () => request(app)
    .post('/users')
    .send({
      firstName: 'John',
      lastName: 'Doe',
      address: 'QC',
      postcode: '1234',
      contactPhoneNumber: '0999999999',
      email: 'test@gmail.com',
      username: 'jdoe',
      password: '123123',
    })
    .then((response) => {
      expect(response.statusCode).toBe(200);

      expect(response.body).toMatchObject({
        firstName: 'John',
        lastName: 'Doe',
        address: 'QC',
        postcode: '1234',
        contactPhoneNumber: '0999999999',
        email: 'test@gmail.com',
        username: 'jdoe',
        password: '123123',
      });
    }));
});
