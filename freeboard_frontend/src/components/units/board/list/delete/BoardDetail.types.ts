import { IQuery } from "../../../../commons/types/generated/types";

export interface IPresenterBoardProps {
  data: any;
  btnMoveToList: () => void;
  btnMoveToEdit: () => void;
}

export interface IBoardCreateProps {
  isEdit: boolean;
  data?: any;
}

export interface IonBtn {
  onBtn: boolean;
}
