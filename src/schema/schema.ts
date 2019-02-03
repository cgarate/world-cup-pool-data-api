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
  GraphQLNonNull
} = graphql;

const teams = [
  {
    emoji: "flag-mx",
    fifaCode: "MEX",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/800px-Flag_of_Mexico.png",
    id: 22,
    iso2: "mx",
    name: "Mexico",
  },
  {
    emoji: "flag-ar",
    fifaCode: "ARG",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/800px-Flag_of_Argentina.png",
    id: 13,
    iso2: "ar",
    name: "Argentina",
  },
];

const TeamType = new GraphQLObjectType({
  fields: () => ({
    emoji: { type: GraphQLString },
    fifaCode: { type: GraphQLString },
    flag: { type: GraphQLString },
    id: { type: GraphQLID },
    iso2: { type: GraphQLString },
    name: { type: GraphQLString }
  }),
  name: "Team"
});
