import BoardCreate from "../../../../src/components/units/board/create/BoardCreate.container";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      youtubeUrl
    }
  }
`;

export default function NoticeBoardEdit() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.aaa,
    },
  });
  return <BoardCreate isEdit={true} data={data} />;
}
