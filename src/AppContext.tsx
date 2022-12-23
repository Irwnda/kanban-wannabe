import { createContext } from "react";
import { AppContextType, ColumnItem, Task } from "./types";

export const AppContext = createContext<AppContextType | null>(null);
