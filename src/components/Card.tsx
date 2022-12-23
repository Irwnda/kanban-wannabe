import { Task } from "../types";

function Item({ task }: { task: Task }) {
  return (
    <div className={"flex flex-col" + (task.tags.length > 0 ? " gap-2" : "")}>
      <div className="flex gap-1 w-full flex-wrap">
        {task.tags.map((tag, index) => (
          <div
            key={index}
            className="text-sm bg-blue-500 px-1 rounded-sm text-white w-fit"
          >
            {tag}
          </div>
        ))}
      </div>
      {task.title}
    </div>
  );
}

export default Item;
