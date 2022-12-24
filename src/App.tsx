import React from "react";
import "./App.css";
import { ColumnItem, Task } from "./types";
import { Board, Column, Modal } from "./components";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { AppContext } from "./AppContext";
import {
  InitialColumnOrder,
  InitialColumns,
  InitialTasks,
} from "./InitialValue";

function App() {
  const [tasks, setTasks] = React.useState<Task[]>(InitialTasks);
  const [columns, setColumns] = React.useState<ColumnItem[]>(InitialColumns);
  const [columnOrder, setColumnOrder] = React.useState(InitialColumnOrder);

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
        <div className="font-bold text-3xl p-2">Product Roadmap</div>
        <AppContext.Provider
          value={{
            tasks,
            setTasks,
            columns,
            setColumns,
            columnOrder,
            setColumnOrder,
          }}
        >
          <Board>
            {columnOrder.map((columnId) => (
              <Column key={columnId} id={columnId} />
            ))}
          </Board>
        </AppContext.Provider>
      </div>
    </DragDropContext>
  );
}

export default App;
