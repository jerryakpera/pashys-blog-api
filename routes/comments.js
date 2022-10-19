const { gql, GraphQLClient } = require('graphql-request');

const express = require('express');
const { endpoint, token } = require('../config');

const router = express.Router();

/* POST Comment. */
router.post('/', async (req, res, next) => {
  const graphqlClient = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  try {
    const result = await graphqlClient.request(query, req.body);

    return res.json({
      ...result,
    });
  } catch (err) {
    throw err;
  }
});

module.exports = router;
