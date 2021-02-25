class bob{
	constructor(x,y,r)
	{
		var options={
		   isStatic:false,
			restitution :1.2,
            friction :0.5,
			density : 0.8
			}
		this.x=x;
		this.y=y;
		this.r=r;
	//	this.image=loadImage("paper.png")
		this.body=Bodies.circle(x, y,r/2, options);
		World.add(world, this.body);
	}

	display()
	{
		var bobPos=this.body.position;	
		push()
		translate(bobPos.x, bobPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		//imageMode(CENTER);
		ellipseMode(CENTER);
		strokeWeight(2);
		stroke("black");
		fill("magenta");
		//image(this.image, 0,0,this.r*2, this.r*2)
		// circle(0,0,this.r)
		ellipse(0,0,this.r,this.r);
		pop();
 }
}