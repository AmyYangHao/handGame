(function(){
	var ballSprite = YYC.Class(Sprite,{
		Init:function(ballImg){
			this.ballImg = ballImg;
		},
		Private:{
			
		},
		Public:{
			ballImg:null,
			init:function(){
				this._x = 200;
				this._y = 570;
			},
			move:function(canvas,e,action){
				var box = canvas.getBoundingClientRect();
				if(action){
					this._x = e.clientX - box.x - 15;
					this._y = e.clientY - box.y - 15;
				}
				if(this._x <= 0){
					this._x = 0;
				}else if(this._x >= canvas.width - 30){
					this._x = canvas.width - 30;
				}
				if(this._y <= 0){
					this._y = 0;
				}else if(this._y >= canvas.height - 30){
					this._y = canvas.height - 30;
				}
			},
			draw:function(context){
				context.drawImage(this.ballImg.img,this._x,this._y,this.ballImg.width,this.ballImg.height);
			},
			getCollide:function(){
				return {
					x1:this._x,
					y1:this._y,
					x2:this._x + 30,
					y2:this._y + 30
				};
			},
		}
	});
	window.ballSprite = ballSprite;
})();