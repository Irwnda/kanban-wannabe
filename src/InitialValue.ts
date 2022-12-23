import { ColumnItem, Task } from "./types";

const InitialTasks: Task[] = [
  {
    id: 1,
    description: "Task 1",
    title: "Task 1",
    tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "tag8"],
  },
  {
    id: 2,
    description: "Task 2",
    title: "Task 2",
    tags: ["tag1", "tag2"],
  },
  {
    id: 3,
    description: "Task 3",
    title: "Task 3",
    tags: ["tag1", "tag2"],
  },
  {
    id: 4,
    description: "Task 4",
    title: "Task 4",
    tags: ["tag1", "tag2"],
  },
  {
    id: 5,
    description: "Task 5",
    title: "Task 5",
    tags: ["tag1", "tag2"],
  },
  {
    id: 6,
    description: "Task 6",
    title: "Task 6",
    tags: ["tag1", "tag2"],
  },
];

const InitialColumns: ColumnItem[] = [
  {
    id: 0,
    title: "TO-DO",
    tasks: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 1,
    title: "IN-PROGRESS",
    tasks: [],
  },
  {
    id: 2,
    title: "COMPLETED",
    tasks: [],
  },
];

const InitialColumnOrder = [0, 1, 2];

export { InitialTasks, InitialColumns, InitialColumnOrder };
