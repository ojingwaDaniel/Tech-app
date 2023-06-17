import { useReducer } from "react";
export function CheckBox(){
    const [checked,setChecked] = useReducer(checked=> !checked,false)
    return(
        <>
        <label htmlFor="checked">
            {checked ? 'checked' : 'not checked'}
        </label>
        <input type="checkbox" name="" id="checked" onChange={setChecked}/>
        </>
    )
}