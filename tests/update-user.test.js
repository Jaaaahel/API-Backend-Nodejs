const request = require('supertest');
const app = require('@/app');
const { getDBInstance } = require('@/database');
const User = require('@/models/user');

const sequelize = getDBInstance();

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe('Test the update user', () => {
  test('It should successfully update a user', async () => {
    const user = await User.create({
      firstName: 'John',
      lastName: 'Doe',
      address: 'QC',
      postcode: '1234',
      contactPhoneNumber: '0999999999',
      email: 'test@gmail.com',
      username: 'jdoe',
      password: '123123',
    });

    return request(app)
      .patch(`/users/${user.id}`)
      .send({
        firstName: 'Jane',
        lastName: 'Does',
        address: 'Manila',
        postcode: '5678',
        contactPhoneNumber: '0999999991',
        email: 'test@outlook.com',
        username: 'jdoes',
        password: '456456',
      })
      .then((response) => {
        expect(response.statusCode).toBe(200);

        expect(response.body).toMatchObject({
          firstName: 'Jane',
          lastName: 'Does',
          address: 'Manila',
          postcode: '5678',
          contactPhoneNumber: '0999999991',
          email: 'test@outlook.com',
          username: 'jdoes',
          password: '456456',
        });
      });
  });
});
