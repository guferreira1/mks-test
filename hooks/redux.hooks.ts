import {
  TypedUseSelectorHook,
  useSelector,
} from "react-redux";
import { RootState } from "../store/store";

const UseAppSelector: TypedUseSelectorHook<RootState> =
  useSelector;
export default UseAppSelector;
