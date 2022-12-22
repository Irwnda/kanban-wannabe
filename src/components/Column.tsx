import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { ColumnProps } from "../types";
import Card from "./Card";

export default function Column({ title, tasks, id }: ColumnProps) {
  return (
    <Droppable droppableId={`${id}`}>
      {(droppableProvided, droppableSnapshot) => (
        <div
          className="p-2"
          ref={droppableProvided.innerRef}
          {...droppableProvided.droppableProps}
        >
          <div className="w-72 h-fit shrink-0 rounded-md bg-gray-100 ">
            <div className="font-bold rounded-t-md p-2">{title}</div>
            <div className="p-2">
              {tasks.map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={`${task.id}`}
                  index={index}
                >
                  {(draggableProvided, draggableSnapshot) => (
                    <div
                      className={
                        "mb-2 last:mb-0 bg-white p-2 rounded-md w-full outline outline-2" +
                        (draggableSnapshot.isDragging
                          ? " outline-gray-300"
                          : " outline-transparent")
                      }
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                    >
                      <Card task={task} key={index} />
                    </div>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
              <div className="text-gray-500">
                <FontAwesomeIcon icon={faPlus} /> Add a card
              </div>
            </div>
          </div>
        </div>
      )}
    </Droppable>
  );
}
