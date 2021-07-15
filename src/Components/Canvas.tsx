import React, {useEffect, useRef} from "react";
import '../styles/canvas.scss'
import {observer} from "mobx-react-lite";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";


const Canvas:React.FC = observer(() => {

    const canvasRef = useRef() as React.MutableRefObject<HTMLCanvasElement>;

    useEffect(() => {
        canvasState.setCanvas(canvasRef.current)
        toolState.setTool(new Brush(canvasRef.current))
    }, [])

    return  (
        <div className={"canvas"}>
            <canvas ref={canvasRef} width={600} height={400} />
        </div>
    )
})



export default Canvas