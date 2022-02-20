import { useMutation, useQuery, gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards(
    $endDate: DateTime
    $startDate: DateTime
    $search: String
    $page: Int
  ) {
    fetchBoards(
      endDate: $endDate
      startDate: $startDate
      search: $search
      page: $page
    ) {
      writer
      title
      contents
      createdAt
      _id
      youtubeUrl
      likeCount
      dislikeCount
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export const BOARD_COUNTS = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;
