import { ChangeEvent } from "react";

type NewType = ChangeEvent<HTMLInputElement>;

export interface IPresenterBoardProps {
  data;
  btnMoveToList;
  btnMoveToEdit;
  btnClick;
}

export interface IBoardCreateProps {
  isEdit: boolean;
  data?: any;
}

export interface IonBtn {
  onBtn: boolean;
}
