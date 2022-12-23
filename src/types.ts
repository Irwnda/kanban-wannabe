export type Task = {
  id: number;
  title: string;
  description: string;
  tags: string[];
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
};

export type AppContextType = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  columns: ColumnItem[];
  setColumns: React.Dispatch<React.SetStateAction<ColumnItem[]>>;
  columnOrder: number[];
  setColumnOrder: React.Dispatch<React.SetStateAction<number[]>>;
};
