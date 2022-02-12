import { ChangeEvent } from "react";

type NewType = ChangeEvent<HTMLInputElement>;

export interface IPresenterBoardProps {
  msg1: boolean;
  msg2: boolean;
  msg3: boolean;
  msg4: boolean;
  word1: string;
  word2: string;
  word3: string;
  word4: string;
  checkWording1: (e: ChangeEvent<HTMLInputElement>) => void;
  checkWording2: (e: ChangeEvent<HTMLInputElement>) => void;
  checkWording3: (e: ChangeEvent<HTMLInputElement>) => void;
  checkWording4: any;
  btnClick: () => void;
  allData: string;
  modaltime: boolean;
  isEdit: boolean;
  btnEdit: () => void;
  data: any;
  onBtn: any;
}

export interface IBoardCreateProps {
  isEdit: boolean;
  data?: any;
}

export interface IonBtn {
  onBtn: boolean;
}
