import { Task } from "../types";

function Item({ task }: { task: Task }) {
  return (
    <div className="mb-2 last:mb-0 bg-white p-2 rounded-md w-full">
      <div className="flex gap-1 w-full flex-wrap">
        {task.tags.map((tag) => (
          <div className="text-sm bg-blue-500 px-1 rounded-sm text-white w-fit">
            {tag}
          </div>
        ))}
      </div>
      {task.description}
    </div>
  );
}

export default Item;
