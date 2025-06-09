import { ReactNode } from "react";

export type MenuItem = {
  key: string;
  icon: ReactNode;
  label: string;
};

export type ColumnTable = {
  title: string;
  dataIndex?: string;
  key: string;
  render?: unknown;
};

export type TypeNewResponse = {
  id: number
  code: string,
  name: string,
  created_at: string,
  updated_at: string
}
export type DataBanner = {
  id: number
  src: string,
  type: boolean,
  bgImage:string,
  classNameLink: string,
  positionChild: string
}
export type DataImage = {
  id: number,
  src: string
}
export type RankButton = {
  id: number, 
  name: string
}