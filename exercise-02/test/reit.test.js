import test from 'ava';
import supertest from 'supertest';
import server from '../src/api/graphql';

let request = null;

test.before(() => {
  request = supertest(server.start(Math.floor(Math.random() * 1000)));
});

test('Query single reit', async (t) => {
  const { body } = await request
    .post('/graphql')
    .send({
      query: `
                query($reitId: ID) {
                    reit(reitId: $reitId) {
                        name
                    }
                }
            `,
      variables: { reitId: '1' },
    });

  t.is(typeof body.data.reit.name, 'string');
});
