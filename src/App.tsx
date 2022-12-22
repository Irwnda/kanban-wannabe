import React from "react";
import "./App.css";
import { ColumnItem, Task } from "./types";
import { Board, Column } from "./components";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

function App() {
  const [tasks, setTasks] = React.useState<Task[]>([
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
  ]);

  const [columns, setColumns] = React.useState<ColumnItem[]>([
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
  ]);

  const [columnOrder, setColumnOrder] = React.useState([0, 1, 2]);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const sourceCol = columns.find(
      (col) => col.id.toString() === source.droppableId
    ) as ColumnItem;
    const destCol = columns.find(
      (col) => `${col.id}` === destination.droppableId
    ) as ColumnItem;

    if (sourceCol === destCol) {
      const newTaskIds = Array.from(sourceCol.tasks);
      const [removed] = newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, removed);

      const newCol = {
        ...sourceCol,
        tasks: newTaskIds,
      };
      setColumns((prev) =>
        prev.map((col) => (col.id === sourceCol.id ? newCol : col))
      );
      return;
    }

    const sourceTaskIds = Array.from(sourceCol.tasks);
    const [removed] = sourceTaskIds.splice(source.index, 1);
    const newSourceColumn = {
      ...sourceCol,
      tasks: sourceTaskIds,
    };

    const destTaskIds = Array.from(destCol.tasks);
    destTaskIds.splice(destination.index, 0, removed);
    const newDestColumn = {
      ...destCol,
      tasks: destTaskIds,
    };

    setColumns((prev) =>
      prev.map((col) => (col.id === newSourceColumn.id ? newSourceColumn : col))
    );
    setColumns((prev) =>
      prev.map((col) => (col.id === newDestColumn.id ? newDestColumn : col))
    );
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="container mx-auto bg-white">
        <div className="font-bold text-center text-xl p-2">Your Board</div>
        <Board>
          {columnOrder.map((columnId) => {
            var taskList = [] as Task[];
            columns[columnId].tasks.forEach((taskId) => {
              tasks.forEach((task) => {
                if (task.id === taskId) {
                  taskList.push(task);
                }
              });
            });

            return (
              <Column
                key={columnId}
                id={columnId}
                title={columns[columnId].title}
                tasks={taskList}
              />
            );
          })}
        </Board>
      </div>
    </DragDropContext>
  );
}

export default App;
