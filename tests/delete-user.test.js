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
      .delete(`/users/${user.id}`)
      .then((response) => {
        expect(response.statusCode).toBe(200);

        expect(response.body).toMatchObject({
          message: 'User successfully deleted!',
        });
      });
  });
});
