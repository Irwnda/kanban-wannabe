type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export type Task = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  progress: IntRange<0, 101>;
};

export const ITEM_TYPE = {
  BOX: "box",
  TASK: "task",
};

export type ColumnProps = {
  title: string;
  tasks: Task[];
  id: number;
};

export type ItemType = {
  id: number;
};

export type ColumnItem = {
  id: number;
  title: string;
  tasks: number[];
  color: ColumnColor;
  startPeriod: string;
  endPeriod: string;
};

export type AppContextType = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  columns: ColumnItem[];
  setColumns: React.Dispatch<React.SetStateAction<ColumnItem[]>>;
  columnOrder: number[];
  setColumnOrder: React.Dispatch<React.SetStateAction<number[]>>;
};

export type ColumnColor = {
  border: string;
  borderInside: string;
  bg: string;
  bgInside: string;
};
