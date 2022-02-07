import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import { Board } from "./Board.postgres";

const typeDefs = gql`
  type Board {
    number: Int
    writer: String
    title: String
    age: Int
  }
  input CreateBoardInput {
    number: Int
    writer: String
    title: String
    age: Int
  }

  type Query {
    fetchBoards: [Board]
  }

  type Query {
    fetchBoardsCount: Int
  }

  type Mutation {
    createBoard(writer: String!, title: String!, age: Int!): String
    deleteBoard(number: Int!): String
  }
`;

const resolvers = {
  Query: {
    fetchBoards: async () => {
      const result = await Board.find({
        where: { writer: "철수", deleteAt: null },
      });
      console.log(result);
      return result;
    },

    fetchBoardsCount: async () => {
      const result = await (
        await Board.find({ where: { writer: "철수" } })
      ).length;
      return result;
    },
  },
  Mutation: {
    createBoard: async (_: any, args: any) => {
      await Board.insert({
        writer: args.createBoardInput.writer,
        title: args.createBoardInput.title,
        age: args.createBoardInput.age,
      });
      return "createBoard를 요청하셨습니다.";
    },

    deleteBoard: async (_: any, args: any) => {
      // args.boardID;
      await Board.update({ number: args.number }, { deleteAt: new Date() });

      return "삭제가 완료되었습니다.";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

console.log("hello server");

createConnection({
  type: "postgres",
  database: "postgres",
  username: "postgres",
  password: "postgres2021",
  port: 5020,
  host: "34.64.187.209",
  entities: ["./*.postgres.ts"],
  logging: true,
  synchronize: true,
})
  .then(() => {
    console.log("실행 완료");
    server.listen({ port: 4000 });
  })
  .catch((error) => {
    console.log(error);
  });
