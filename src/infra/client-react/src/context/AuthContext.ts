import { createContext } from "react";
import { AuthContextValue } from "../types/auth.context.value";

export const AuthContext = createContext<AuthContextValue | null>(null);
