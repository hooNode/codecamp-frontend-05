import { IQuery } from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export interface IBoardList {
  data: any;
  onClickDelete: (e: MouseEvent<HTMLInputElement>) => void;
  handleAllCheck: (a: boolean) => void;
  checkItems: string[];
  handleSingleCheck: (a: boolean, b?: string) => void;
  onClickDeleteAll: (ids: string[]) => void;
  pushClick(id: string): () => void;
  createClick: () => void;
}
