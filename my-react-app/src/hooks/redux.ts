import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store"; // предполагается, что файл находится в той же директории, что и ваш store

// Правильно типизированный хук useAppSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
