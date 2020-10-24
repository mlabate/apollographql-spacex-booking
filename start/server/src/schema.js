const { gql } = require('apollo-server');

/*
QUERIES
- The launches query will return an array of all upcoming Launches.
- The launch query will return a single Launch that corresponds to the id argument provided to the query.
- The me query will return details for the User that's currently logged in.

MUTATIONS
- The bookTrips mutation enables a logged-in user to book a trip on one or more Launches (specified by an array of launch IDs).
- The cancelTrip mutation enables a logged-in user to cancel a trip that they previously booked.
- The login mutation enables a user to log in by providing their email address.
*/
const typeDefs = gql`
  type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }

  type Rocket {
    id: ID!
    name: String
    type: String
  }

  type User {
    id: ID!
    email: String!
    trips: [Launch]!
  }

  type Mission {
    name: String
    missionPatch(size: PatchSize): String
  }

  enum PatchSize {
    SMALL
    LARGE
  }

  type Query {
    launches: [Launch]!
    launch(id: ID!): Launch
    me: User
  }

  type Mutation {
    bookTrips(launchIds: [ID]!): TripUpdateResponse!
    cancelTrip(launchId: ID!): TripUpdateResponse!
    login(email: String): String # login token
  }

  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch]
  }
`;

module.exports = typeDefs;