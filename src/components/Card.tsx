import { Task } from "../types";

function Item({ task }: { task: Task }) {
  return (
    <div className="gap-2 flex flex-col">
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
      {task.description}
    </div>
  );
}

export default Item;
