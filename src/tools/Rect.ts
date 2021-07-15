import Tool from "./Tool";
import React from 'react';


export default class Rect extends Tool {
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
        let x:number = e.pageX - e.target.offsetLeft
        let y:number = e.pageY - e.target.offsetTop
        if(this.mouseDown) {
            this.draw(this.startX,this.startY, width, heigth)
        }
    }

    draw(x:number,y:number,w:number,h:number) {
        const img = new Image()
        img.src = this.saved
        img.onload = () => {
            this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            this.ctx.rect(x,y,w,h)
            this.ctx.fill()
            this.ctx.stroke()
        }

    }
}