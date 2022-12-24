import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Task } from "../types";
import Modal from "./Modal";

function Item({
  task,
  setDisableDrag,
}: {
  task: Task | null;
  setDisableDrag: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const isComplete = task?.progress === 100;

  React.useEffect(() => {
    setDisableDrag(isModalOpen);
  }, [isModalOpen, setDisableDrag]);

  if (task !== null)
    return (
      <>
        <div
          className="flex flex-col p-4 text-sm font-medium gap-8 hover:cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          {task?.title}
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <div className="bg-[#F5F5F5] h-2 w-24 rounded-full">
                <div
                  className={
                    "rounded-full h-full" +
                    (isComplete ? " bg-[#52C41A]" : " bg-[#1890FF]")
                  }
                  style={{ width: task.progress }}
                ></div>
              </div>
              {isComplete ? (
                <FontAwesomeIcon icon={faCircleCheck} color="#52C41A" />
              ) : (
                `${task.progress}%`
              )}
            </div>
            <button className="bg-[#F2F2F2] flex gap-1 justify-center items-center h-6 w-6 rounded">
              <FontAwesomeIcon
                icon={faCircle}
                className="text-[4px]"
                color="#828282"
              />
              <FontAwesomeIcon
                icon={faCircle}
                className="text-[4px]"
                color="#828282"
              />
              <FontAwesomeIcon
                icon={faCircle}
                className="text-[4px]"
                color="#828282"
              />
            </button>
          </div>
        </div>
        <Modal
          id={`${task?.id}`}
          openModal={isModalOpen}
          setOpenModal={setIsModalOpen}
        />
      </>
    );
  else
    return (
      <div className="flex flex-col px-4 py-3 bg-white text-[#B7BDC9] mb-2 text-sm font-medium">
        No Task Available
      </div>
    );
}

export default Item;
