import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ColumnProps } from "../types";
import Item from "./Card";

export default function Column({ title, tasks, id }: ColumnProps) {
  return (
    <div className="w-72 h-fit shrink-0 rounded-md bg-gray-100 ">
      <div className="font-bold rounded-t-md p-2">{title}</div>
      <div className="p-2">
        {tasks.map((task, index) => (
          <Item task={task} key={index} />
        ))}
        <div className="text-gray-500">
          <FontAwesomeIcon icon={faPlus} /> Add a card
        </div>
      </div>
    </div>
  );
}
