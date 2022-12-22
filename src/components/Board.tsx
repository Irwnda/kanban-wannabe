function Board({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-2 overflow-x-scroll">{children}</div>;
}

export default Board;
