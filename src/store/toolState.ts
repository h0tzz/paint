import {makeAutoObservable} from "mobx";

// tools
import Brush from "../tools/Brush";
import Circle from "../tools/Circle";
import Rect from "../tools/Rect";


class ToolState {
    tool: Brush | Rect | Circle

    constructor() {
        makeAutoObservable(this)
    }


    setTool(tool: Brush | Rect | Circle) {
        this.tool = tool
    }
    setLineWidth(width: string): void {
        this.tool.lineWidth = +width
    }
    setStrokeColor(color: string): void  {
        this.tool.strokeColor = color
    }
    setFillColor(color: string): void  {
        this.tool.fillColor = color
    }
}

export default new ToolState()