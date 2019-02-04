"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql = __importStar(require("graphql"));
const lodash_1 = __importDefault(require("lodash"));
// import Team from "../models/team";
const data_1 = require("../mock/data");
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLBoolean, } = graphql;
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
                return lodash_1.default.find(data_1.groups, { id: parent.groupId });
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
                return lodash_1.default.find(data_1.teams, { id: parent.awayTeamId });
            },
        },
        awayTeamResult: { type: GraphQLInt },
        date: { type: GraphQLString },
        finished: { type: GraphQLBoolean },
        homeTeam: {
            type: TeamType,
            resolve(parent, args) {
                return lodash_1.default.find(data_1.teams, { id: parent.homeTeamId });
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
                return lodash_1.default.find(data_1.matches, { id: args.id });
            },
        },
        groups: {
            type: new GraphQLList(GroupType),
            resolve(parent, args) {
                return data_1.groups;
            },
        },
        match: {
            args: { id: { type: GraphQLInt } },
            type: MatchType,
            resolve(parent, args) {
                return lodash_1.default.find(data_1.matches, { id: args.id });
            },
        },
        matches: {
            type: new GraphQLList(MatchType),
            resolve(parent, args) {
                return data_1.matches;
            },
        },
        matches_team: {
            args: { team: { type: GraphQLInt }, type: { type: GraphQLString } },
            type: GraphQLList(MatchType),
            resolve(parent, args) {
                return lodash_1.default.find(data_1.matches, (object) => {
                    if (args.team && args.type) {
                        return ((args.team === object.homeTeamId ||
                            args.team === object.awayTeamId) &&
                            args.type === object.type);
                    }
                    if (args.type) {
                        return args.type === object.type;
                    }
                    if (args.team) {
                        return (args.team === object.homeTeamId || args.team === object.awayTeamId);
                    }
                });
            },
        },
        team: {
            args: { id: { type: GraphQLInt } },
            type: TeamType,
            resolve(parent, args) {
                return lodash_1.default.find(data_1.teams, { id: args.id });
            },
        },
        teams: {
            type: new GraphQLList(TeamType),
            resolve(parent, args) {
                return data_1.teams;
            },
        },
    },
    name: "RootQueryType",
});
exports.graphQLSchema = new GraphQLSchema({
    query: RootQuery,
});
//# sourceMappingURL=schema.js.map