import * as graphql from "graphql";
import _ from "lodash";
// import Team from "../models/team";
import { groups, matches, teams } from "../mock/data";

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLBoolean,
} = graphql;

const GroupType = new GraphQLObjectType({
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    runnerUpId: { type: GraphQLID },
    winnerId: { type: GraphQLID },
  }),
  name: "Group",
});

const TeamType = new GraphQLObjectType({
  fields: () => ({
    emoji: { type: GraphQLString },
    fifaCode: { type: GraphQLString },
    flag: { type: GraphQLString },
    group: {
      type: GroupType,
      resolve(parent, args) {
        return _.find(groups, { id: parent.groupId });
      },
    },
    id: { type: GraphQLID },
    iso2: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
  name: "Team",
});

const MatchType = new GraphQLObjectType({
  fields: () => ({
    awayTeam: {
      type: TeamType,
      resolve(parent, args) {
        return _.find(teams, { id: parent.awayTeamId });
      },
    },
    awayTeamResult: { type: GraphQLInt },
    date: { type: GraphQLString },
    finished: { type: GraphQLBoolean },
    homeTeam: {
      type: TeamType,
      resolve(parent, args) {
        return _.find(teams, { id: parent.homeTeamId });
      },
    },
    homeTeamResult: { type: GraphQLInt },
    type: { type: GraphQLString },
  }),
  name: "Match",
});

const RootQuery = new GraphQLObjectType({
  fields: {
    group: {
      args: { id: { type: GraphQLInt } },
      type: GroupType,
      resolve(parent, args) {
        return _.find(matches, { id: args.id });
      },
    },
    groups: {
      type: new GraphQLList(GroupType),
      resolve(parent, args) {
        return groups;
      },
    },
    match: {
      args: { id: { type: GraphQLInt } },
      type: MatchType,
      resolve(parent, args) {
        return _.find(matches, { id: args.id });
      },
    },
    matches: {
      type: new GraphQLList(MatchType),
      resolve(parent, args) {
        return matches;
      },
    },
    matches_team: {
      args: { team!: { type: GraphQLInt }, type: { type!: GraphQLString } },
      type: MatchType,
      resolve(parent, args) {
        return _.find(matches, (object) => {
          if (args.team && args.type) {
            return (
              (args.team === object.homeTeamId ||
                args.team === object.awayTeamId) &&
              args.type === object.type
            );
          }
          if (args.type) {
            return args.type === object.type;
          }
          if (args.team) {
            return (
              args.team === object.homeTeamId || args.team === object.awayTeamId
            );
          }
        });
      },
    },
    team: {
      args: { id: { type: GraphQLInt } },
      type: TeamType,
      resolve(parent, args) {
        return _.find(teams, { id: args.id });
      },
    },
    teams: {
      type: new GraphQLList(TeamType),
      resolve(parent, args) {
        return teams;
      },
    },
  },
  name: "RootQueryType",
});

export const graphQLSchema = new GraphQLSchema({
  query: RootQuery,
});
