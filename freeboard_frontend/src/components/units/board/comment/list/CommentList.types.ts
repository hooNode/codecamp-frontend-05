import { IQuery } from "../../../../commons/types/generated/types";
import {
  ChangeEvent,
  ChangeEventHandler,
  MouseEvent,
  TextareaHTMLAttributes,
} from "react";

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
