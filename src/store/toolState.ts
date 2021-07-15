import {makeAutoObservable} from "mobx";

// tools
import Brush from "../tools/Brush";
import Rect from "../tools/Rect";


class ToolState {
    tool: Brush | Rect

    constructor() {
        makeAutoObservable(this)
    }

    setTool(tool: Brush | Rect) {
        this.tool = tool
    }
}

export default new ToolState()