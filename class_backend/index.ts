import { createConnection } from "typeorm";

console.log("gkdlgkdl");

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
  })
  .catch((error) => {
    console.log(error);
  });
