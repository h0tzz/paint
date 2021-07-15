import Tool from "./Tool";



export default class Brush extends Tool {

    mouseDown: boolean = false;

    constructor(canvas:HTMLCanvasElement) {
        super(canvas);
        this.listen()
    }

    listen() {
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)

    }

    mouseUpHandler(e: MouseEvent):void {
        this.mouseDown = false

    }
    mouseDownHandler(e: any):void {
        let x:number = e.pageX - e.target.offsetLeft
        let y:number = e.pageY - e.target.offsetTop
        this.mouseDown = true
        this.ctx.beginPath()
        this.ctx.moveTo(x, y)

    }
    mouseMoveHandler(e:any):void {
        let x:number = e.pageX - e.target.offsetLeft
        let y:number = e.pageY - e.target.offsetTop
        if(this.mouseDown) {
            this.draw(x, y)
        }
    }

    draw(x:number,y:number) {
        this.ctx.lineTo(x,y)
        this.ctx.stroke()
    }
}