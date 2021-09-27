import { createTypedHooks } from "easy-peasy";
import { globalStoreInterface } from "./store/centralStore";

const typedHooks = createTypedHooks<globalStoreInterface>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
