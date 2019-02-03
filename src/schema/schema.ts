import graphql from "graphql";
import _ from "lodash";
import Team from "../models/team";

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const TeamType = new GraphQLObjectType({
  fields: () => ({
    emoji: { type: GraphQLString },
    fifaCode: { type: GraphQLString },
    flag: { type: GraphQLString },
    id: { type: GraphQLID },
    iso2: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
  name: "Team",
});
