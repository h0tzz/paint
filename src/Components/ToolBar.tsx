import React from "react";
import '../styles/toolbar.scss'

// state
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";

// tools
import Brush from "../tools/Brush";
import Rect from "../tools/Rect";

const ToolBar:React.FC = () => {
    return  (
        <div className={"toolbar"}>
            <button className={"toolbar__btn brush"} onClick={() => toolState.setTool(new Brush(canvasState.canvas))} />
            <button className={"toolbar__btn rect"} onClick={() => toolState.setTool(new Rect(canvasState.canvas))} />
            <button className={"toolbar__btn circle"} />
            <button className={"toolbar__btn eraser"} />
            <button className={"toolbar__btn line"} />
            <input type={"color"} className={"toolbar__btn color"} />
            <button className={"toolbar__btn undo"} />
            <button className={"toolbar__btn redo"} />
            <button className={"toolbar__btn save"} />
        </div>
    )
}

export default ToolBar