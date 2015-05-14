(function(){
	var paleSprite = YYC.Class(Sprite,{
		Private:{
			_x1:0,
			_x2:0,
			_accY:6,
		},
		Public:{
			styleRect:false,
			remove:false,
			init:function(){
				var style = Math.random()*3 | 0;
				switch(style){
					case 0 : this.one();break;
					case 1 : this.two();break;
					case 2 : this.three();break;
				}
			},
			one:function(){
				this._x = 0;
				this._y = 0;
				this._width = 280;
				this._height = 5;
				this.styleRect = false;
			},
			two:function(){
				this._x = 120;
				this._y = 0;
				this._width = 280;
				this._height = 5;
				this.styleRect = false;
			},
			three:function(){
				this._x1 = 0;
				this._x2 = 250;
				this._y = 0;
				this._width = 150;
				this._height = 5;
				this.styleRect = true;
			},
			update:function(height){
				this._y += this._accY;
				if(this._y >= height){
					this.remove = true;
				}
			},
			getCollide:function(){
				if(!this.styleRect){
					return {
						x1:this._x,
						y1:this._y,
						x2:this._x + this._width,
						y2:this._y + this._height
					};
				}else{
					return {
						rect1 : {
							x1:this._x1,
							y1:this._y,
							x2:this._x1 + this._width,
							y2:this._y + this._height
						},
						rect2 : {
							x1:this._x2,
							y1:this._y,
							x2:this._x2 + this._width,
							y2:this._y + this._height
						}
					}
				}
			},
			collide:function(ball){
				if(!this.styleRect){
					var rect = this.getCollide();
					return rect && ball && !(rect.x1 > ball.x2 || rect.x2 < ball.x1 || rect.y1 > ball.y2 || rect.y2 < ball.y1);
				}else{
					var rect = this.getCollide();
					var col1 = rect.rect1 && ball && !(rect.rect1.x1 > ball.x2 || rect.rect1.x2 < ball.x1 || rect.rect1.y1 > ball.y2 || rect.rect1.y2 < ball.y1 );
					var col2 = rect.rect2 && ball && !(rect.rect2.x1 > ball.x2 || rect.rect2.x2 < ball.x1 || rect.rect2.y1 > ball.y2 || rect.rect2.y2 < ball.y1 );
					if(col1 || col2){
						return true;
					}else{
						return false;
					}
				}
			},
			checkCollide:function(ball){
				var col = this.collide(ball);
				if(col){
					window.success = false;
				}
			},
			draw:function(context){
				if(!this.styleRect){
					context.fillStyle = "white";
					context.fillRect(this._x,this._y,this._width,this._height);
				}else{
					context.fillStyle = "white";
					context.fillRect(this._x1,this._y,this._width,this._height);
					context.fillRect(this._x2,this._y,this._width,this._height);
				}
			}
		}
	});
	window.paleSprite = paleSprite;
})();