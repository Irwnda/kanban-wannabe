import { ColumnColor, ColumnItem, Task } from "./types";

const InitialTasks: Task[] = [
  {
    id: 1,
    description: "Re-designed the zero-g doggie bags. No more spills!",
    title: "Re-designed the zero-g doggie bags. No more spills!",
    tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "tag8"],
    progress: 100,
  },
  {
    id: 2,
    description: "Bundle interplanetary analytics for improved transmission",
    title: "Bundle interplanetary analytics for improved transmission",
    tags: ["tag1", "tag2"],
    progress: 80,
  },
  {
    id: 3,
    description: "Bundle interplanetary analytics for improved transmission",
    title: "Bundle interplanetary analytics for improved transmission",
    tags: ["tag1", "tag2"],
    progress: 60,
  },
  {
    id: 4,
    description: "Data Migration: Performance & Culture End Game",
    title: "Data Migration: Performance & Culture End Game",
    tags: ["tag1", "tag2"],
    progress: 40,
  },
];

const colorList = {
  pink: {
    border: "#EB2F96",
    borderInside: "#FFADD2",
    bg: "#FFF9FB",
    bgInside: "#FFF0F6",
  } as ColumnColor,
  purple: {
    border: "#7B61FF",
    borderInside: "#D3ADF7",
    bg: "#FCFAFD",
    bgInside: "#F9F0FF",
  } as ColumnColor,
  blue: {
    border: "#2F54EB",
    borderInside: "#ADC6FF",
    bg: "#F7FAFF",
    bgInside: "#F0F5FF",
  } as ColumnColor,
  green: {
    border: "#52C41A",
    borderInside: "#B7EB8F",
    bg: "#F8FEF1",
    bgInside: "#F6FFED",
  } as ColumnColor,
};

const InitialColumns: ColumnItem[] = [
  {
    id: 0,
    title: "Group Task 1",
    tasks: [1, 2],
    color: colorList.pink,
    startPeriod: "January",
    endPeriod: "March",
  },
  {
    id: 1,
    title: "Group Task 2",
    tasks: [],
    color: colorList.purple,
    startPeriod: "April",
    endPeriod: "June",
  },
  {
    id: 2,
    title: "Group Task 3",
    tasks: [3],
    color: colorList.blue,
    startPeriod: "July",
    endPeriod: "September",
  },
  {
    id: 3,
    title: "Group Task 4",
    tasks: [4],
    color: colorList.green,
    startPeriod: "October",
    endPeriod: "December",
  },
];

const InitialColumnOrder = [0, 1, 2, 3];

export { InitialTasks, InitialColumns, InitialColumnOrder };
