import Tool from "./Tool";


export default class Rect extends Tool {
    static staticDraw(ctx: CanvasRenderingContext2D, x: any, y: any, width: any, height: any, color: any) {
        throw new Error("Method not implemented.");
    }
    mouseDown: boolean = false;
    startX: number;
    startY: number;
    saved: string;

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
        this.mouseDown = true
        this.ctx.beginPath()
        this.startX = e.pageX - e.target.offsetLeft
        this.startY = e.pageY - e.target.offsetTop
        this.saved = this.canvas.toDataURL()

    }
    mouseMoveHandler(e:any):void {
        let currentX = e.pageX - e.target.offsetLeft
        let currentY = e.pageY - e.target.offsetTop
        let width = currentX - this.startX
        let heigth = currentY - this.startY
        if(this.mouseDown) {
            this.draw(this.startX,this.startY, width, heigth)
        }
    }

    draw(x:number,y:number,w:number,h:number) {
        const img = new Image()
        img.src = this.saved
        img.onload = async () => {
            this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            this.ctx.rect(x,y,w,h)
            this.ctx.fill()
            this.ctx.stroke()
        }

    }
}