import graphql, { GraphQLBoolean } from "graphql";
import _ from "lodash";
// import Team from "../models/team";
import { groups, teams, matches } from "../mock/data";

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;

const GroupType = new GraphQLObjectType({
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    winnerId: { type: GraphQLID },
    runnerUpId: { type: GraphQLID }
  }),
  name: "Group"
});

const TeamType = new GraphQLObjectType({
  fields: () => ({
    emoji: { type: GraphQLString },
    fifaCode: { type: GraphQLString },
    flag: { type: GraphQLString },
    id: { type: GraphQLID },
    iso2: { type: GraphQLString },
    name: { type: GraphQLString },
    group: {
      type: GroupType,
      resolve(parent, args) {
        return _.find(groups, { id: parent.groupId });
      }
    }
  }),
  name: "Team"
});

const MatchType = new GraphQLObjectType({
  fields: () => ({
    type: { type: GraphQLString },
    homeTeam: {
      type: TeamType,
      resolve(parent, args) {
        return _.find(teams, { id: parent.homeTeamId });
      }
    },
    awayTeam: {
      type: TeamType,
      resolve(parent, args) {
        return _.find(teams, { id: parent.awayTeamId });
      }
    },
    awayTeamResult: { type: GraphQLInt },
    homeTeamResult: { type: GraphQLInt },
    date: { type: GraphQLString },
    finished: { type: GraphQLBoolean }
  }),
  name: "Match"
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    team: {
      type: TeamType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(teams, { id: args.id });
      }
    },
    match: {
      type: MatchType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(matches, { id: args.id });
      }
    },
    group: {
      type: GroupType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(matches, { id: args.id });
      }
    },
    teams: {
      type: new GraphQLList(TeamType),
      resolve(parent, args) {
        return teams;
      }
    },
    matches: {
      type: new GraphQLList(MatchType),
      resolve(parent, args) {
        return matches;
      }
    },
    groups: {
      type: new GraphQLList(GroupType),
      resolve(parent, args) {
        return groups;
      }
    }
  }
});

export const graphQLSchema = new GraphQLSchema({
  query: RootQuery
});
