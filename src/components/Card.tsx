import React from "react";
import { Task } from "../types";
import Modal from "./Modal";

function Item({
  task,
  setDisableDrag,
}: {
  task: Task;
  setDisableDrag: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  React.useEffect(() => {
    setDisableDrag(isModalOpen);
  }, [isModalOpen, setDisableDrag]);

  return (
    <>
      <div className={"flex flex-col"} onClick={() => setIsModalOpen(true)}>
        {/* <div className="flex gap-1 w-full flex-wrap">
          {task.tags.map((tag, index) => (
            <div
              key={index}
              className="text-sm bg-blue-500 px-1 rounded-sm text-white w-fit"
            >
              {tag}
            </div>
          ))}
        </div> */}
        {task.title}
      </div>
      <Modal
        id={`${task.id}`}
        openModal={isModalOpen}
        setOpenModal={setIsModalOpen}
      />
    </>
  );
}

export default Item;
