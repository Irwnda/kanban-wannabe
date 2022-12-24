import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { AppContext } from "../AppContext";
import { AppContextType, Task } from "../types";
import Card from "./Card";

export default function Column({ id }: { id: number }) {
  const { tasks, setTasks, columns, setColumns } = React.useContext(
    AppContext
  ) as AppContextType;

  const [inputValue, setInputValue] = React.useState("");
  const [isEditing, setIsEditing] = React.useState(false);
  const [title, setTitle] = React.useState(columns[id].title);
  const [currentTasks, setCurrenttask] = React.useState<Task[]>([]);
  const [disableDrag, setDisableDrag] = React.useState(false);

  const divRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const saveBtnRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    console.log(columns[id].color.bg);
    var taskList = [] as Task[];
    columns[id].tasks.forEach((taskId) => {
      tasks.forEach((task) => {
        if (task.id === taskId) {
          taskList.push(task);
        }
      });
    });

    setCurrenttask(taskList);
  }, [columns, tasks, id]);

  const handleAddTask = () => {
    if (inputValue === "") {
      inputRef.current?.focus();
      return;
    }
    const newTask: Task = {
      id: tasks[tasks.length - 1].id + 1,
      title: inputValue,
      description: "",
      tags: [],
      progress: 0,
    };
    setCurrenttask((prev) => [...prev, newTask]);
    setTasks((prev) => [...prev, newTask]);
    setColumns((prev) =>
      prev.map((col) => {
        if (col.id === id) {
          return {
            ...col,
            tasks: [...col.tasks, newTask.id],
          };
        }
        return col;
      })
    );
    setIsEditing(false);
    setInputValue("");
  };

  return (
    <Droppable droppableId={`${id}`}>
      {(droppableProvided, droppableSnapshot) => (
        <div
          className="p-2"
          ref={droppableProvided.innerRef}
          {...droppableProvided.droppableProps}
        >
          <div
            className="w-72 h-fit shrink-0 rounded-md p-3"
            style={{
              backgroundColor: columns[id].color.bg,
              border: `1px solid ${columns[id].color.border}`,
            }}
          >
            <div
              className="font-normal w-fit rounded text-xs px-2"
              style={{
                color: columns[id].color.border,
                border: `2px solid ${columns[id].color.borderInside}`,
                backgroundColor: columns[id].color.bgInside,
              }}
            >
              {title}
            </div>
            <div className="text-sm font-medium mt-1">
              {columns[id].startPeriod} - {columns[id].endPeriod}
            </div>
            <div className="mt-3">
              {currentTasks.length === 0 ? (
                <Card task={null} setDisableDrag={setDisableDrag} />
              ) : (
                <></>
              )}
              {currentTasks.map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={`${task.id}`}
                  index={index}
                  isDragDisabled={disableDrag}
                >
                  {(draggableProvided, draggableSnapshot) => (
                    <div
                      className={
                        "mb-2 bg-white p-2 rounded-md w-full outline outline-2" +
                        (draggableSnapshot.isDragging
                          ? " outline-gray-300"
                          : " outline-transparent")
                      }
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                    >
                      <Card
                        task={task}
                        key={index}
                        setDisableDrag={setDisableDrag}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
              <div
                tabIndex={-1}
                ref={divRef}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    inputRef.current?.classList.add("hidden");
                    setInputValue("");
                    setIsEditing(false);
                  }
                }}
              >
                <textarea
                  ref={inputRef}
                  className="rounded-sm p-2 w-full hidden"
                  onFocus={() => setIsEditing(true)}
                  placeholder="Enter a title for this card..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                ></textarea>
                <button
                  className={isEditing ? " hidden" : ""}
                  onClick={() => {
                    inputRef.current?.classList.remove("hidden");
                    inputRef.current?.focus();
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} /> New Task
                </button>
                <div className={"flex" + (isEditing ? "" : " hidden")}>
                  <button
                    ref={saveBtnRef}
                    className="bg-blue-500 text-white rounded-md px-2"
                    onClick={() => handleAddTask()}
                  >
                    Save
                  </button>
                  <button
                    className="ml-2 bg-transparent text-gray-300 hover:text-gray-400"
                    onClick={() => {
                      inputRef.current?.classList.add("hidden");
                      setInputValue("");
                      setIsEditing(false);
                    }}
                  >
                    <FontAwesomeIcon icon={faTimes} size="lg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Droppable>
  );
}
