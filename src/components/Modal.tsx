import React from "react";
import { AppContext } from "../AppContext";
import { AppContextType } from "../types";

export default function Modal({
  id,
  openModal,
  setOpenModal,
}: {
  id: string;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { tasks, setTasks } = React.useContext(AppContext) as AppContextType;
  const modalRef = React.useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [newTitle, setNewTitle] = React.useState("");
  const [newDescription, setNewDescription] = React.useState("");

  React.useEffect(() => {
    tasks.forEach((task, index) => {
      if (task.id === parseInt(id)) {
        setCurrentIndex(index);
        setNewTitle(task.title);
        setNewDescription(task.description);
      }
    });
  }, [tasks, id]);

  const handleChanges = () => {
    setTasks((prev) =>
      prev.map((task, index) => {
        if (index === currentIndex) {
          return {
            ...task,
            title: newTitle,
            description: newDescription,
          };
        }
        return task;
      })
    );
    setOpenModal(false);
  };

  const handleDelete = () => {
    setTasks((prev) => prev.filter((_, index) => index !== currentIndex));
    setOpenModal(false);
  };

  return (
    <div
      ref={modalRef}
      id={id}
      tabIndex={-1}
      aria-hidden="true"
      className={
        "fixed top-0 left-0 right-0 z-50 w-full bg-gray-400 bg-opacity-50 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full" +
        (openModal ? " block" : " hidden")
      }
    >
      <div className="flex w-full h-full justify-center items-center">
        <div className="relative w-full h-full max-w-2xl md:h-auto">
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex items-start justify-between p-4 border-b rounded-t">
              <input
                type="text"
                className="w-full p-2 rounded-md text-xl font-semibold text-gray-900"
                placeholder="Enter a title for this card..."
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                onClick={() => setOpenModal(false)}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="px-6 py-4 space-y-2">
              <h4 className="font-semibold text-gray-900">Description</h4>
              <textarea
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                rows={3}
                className="w-full"
              ></textarea>
            </div>
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
              <button
                onClick={() => handleChanges()}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Confirm
              </button>
              <button
                onClick={() => handleDelete()}
                type="button"
                className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
