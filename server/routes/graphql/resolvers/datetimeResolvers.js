const { GraphQLScalarType, Kind } = require('graphql');

const datetimeResolvers = {
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description:
      'A date-time representation. If a number is provided, the unix timestamp in seconds or milliseconds will be returned. If a DateTime or String is provided, the ISO 8601 standard will be returned.',
    // converts server value to consumable json
    serialize(value) {
      if (value === null || value === undefined) {
        return null;
      }

      if (typeof value === 'number' || value instanceof Date) {
        return value;
      }

      if (typeof value === 'string') {
        return new Date(value);
      }

      throw new TypeError(
        `DateTime cannot be serialized from non string, non numeric, or non Date type ${value}`
      );
    },
    // converts JSON value back to server representation
    parseValue(value) {
      if (value === null || value === undefined) {
        return null;
      }

      if (value === 'number' || value instanceof Date) {
        return value;
      }

      if (typeof value === 'string') {
        return new Date(value);
      }

      throw new TypeError(
        `DateTime cannot be serialized from non string, non numeric, or non Date type ${value}`
      );
    },
    // transforms input data to expected JSON value
    parseLiteral(ast) {
      if (Kind.NULL) {
        return null;
      }

      if (ast.kind === Kind.INT) {
        return ast.value;
      }

      if ([Kind.STRING, Kind.DateTime].includes(ast.kind)) {
        return new Date(ast.value);
      }

      throw new TypeError(
        `DateTime cannot be serialized from non string, non numeric, or non Date type ${ast.value}`
      );
    },
  }),
};


module.exports = datetimeResolvers;
