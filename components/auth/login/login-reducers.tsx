export interface InputState {
    value: string;
    isValid: boolean;
    isTouched:boolean;
}

export type ActionType =
    | { type: "USER_INPUT"; val: string }
    | { type: "INPUT_BLUR" }
    | { type: "RESET" };

export const loginUsernameReducer = (
    prevState: InputState,
    action: ActionType
): InputState => {
    if (action.type === "USER_INPUT") {
        const error = action.val.length==0;
        return {
            value: action.val,
            isValid: !error,
            isTouched: true
        };
    } else if (action.type === "INPUT_BLUR") {
        const error = prevState.value.length==0;
        return {
            value: prevState.value,
            isValid: !error,
            isTouched: true
        };
    } else {
        return { value: "", isValid: false, isTouched: false };
    }
};

export const loginPasswordReducer = (
    prevState: InputState,
    action: ActionType
): InputState => {
    if (action.type === "USER_INPUT") {
        const error = action.val.length<8;
        return {
            value: action.val,
            isValid: !error,
            isTouched: true
        };
    } else if (action.type === "INPUT_BLUR") {
        const error = prevState.value.length<8;
        return {
            value: prevState.value,
            isValid: !error,
            isTouched: true
        };
    } else {
        return { value: "", isValid: false, isTouched: true };
    }
};

