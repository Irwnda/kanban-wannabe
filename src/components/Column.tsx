import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { ColumnProps } from "../types";
import Card from "./Card";

export default function Column({ title, tasks, id }: ColumnProps) {
  const [inputValue, setInputValue] = React.useState("");
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const [isEditing, setIsEditing] = React.useState(false);

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
              <textarea
                ref={inputRef}
                className="rounded-sm p-2 w-full hidden"
                onBlur={() => {
                  inputRef.current?.classList.add("hidden");
                  setInputValue("");
                  setIsEditing(false);
                }}
                onFocus={() => setIsEditing(true)}
                placeholder="Enter a title for this card..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              ></textarea>
              <button
                className={"text-gray-500" + (isEditing ? " hidden" : "")}
                onClick={() => {
                  inputRef.current?.classList.remove("hidden");
                  inputRef.current?.focus();
                }}
              >
                <FontAwesomeIcon icon={faPlus} /> Add a card
              </button>
              <div className={"flex" + (isEditing ? "" : " hidden")}>
                <button className="bg-blue-500 text-white rounded-md px-2">
                  Save
                </button>
                <button className="ml-2 bg-transparent text-gray-300 hover:text-gray-400">
                  <FontAwesomeIcon icon={faTimes} size="lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Droppable>
  );
}
