import MovePageBtn from "../../src/components/units/14-boards/14-boards-pagination/movePageBtn";
import PageList from "../../src/components/units/14-boards/14-boards-pagination/PageList";
import { gql, useQuery, refetch } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      title
      writer
    }
  }
`;

export default function PaginationPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });
  return (
    <>
      <PageList data={data} />
      <MovePageBtn refetch={refetch} />
    </>
  );
}
