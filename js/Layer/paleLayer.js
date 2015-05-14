	//白线层知道白线精灵，但白线精灵不知道白线层
(function(){
	var paleLayer = YYC.Class(Layer,{
		Init:function(sleep){
			this.sleep = sleep;
		},
		Private:{
			_time:0,
			_pale:[],
			_len:0,
			_iterator:function(target){
				var arg = [].slice.call(arguments,1);
				this._pale.forEach(function(item){
					item[target].apply(item,arg);
				});
			}
		},
		Public:{
			ballSprite:null,
			setCanvas:function(){
				this.P_canvas = document.getElementById("paleLayer");
				this.P_canvas.width = GameConfig.canvas.paleLayer.width;
				this.P_canvas.height = GameConfig.canvas.paleLayer.height;
			},
			init:function(layers){
				this.ballSprite = layers.ballLayer.getChildAt(0);
				this.base();
			},
			clear:function(){
				this.base(this.P_context);
			},
			run:function(){
				this.addPaleByTime();
				this.P_render();
				this.update();
				this.checkRemove();
				this.checkCollide();
			},
			addPaleByTime:function(){
				if(this._time >= GameConfig.T){
					this._time = 0;
					this.addPale();
				}else{
					this._time += this.sleep;
				}
			},
			addPale:function(){
				var pale = new paleSprite();
					pale.init();
				this._pale.push(pale);
				this.setLen();
			},
			setLen:function(){
				this._len = this._pale.length;
			},
			checkRemove:function(){
				for(var i = 0;i<this._len;i++){
					var pale = this._pale[i];
					if(pale.remove){
						this.removePale(pale);
					}
				}
			},
			removePale:function(pale){
				var index = this._pale.indexOf(pale);
				if(index > -1){
					this._pale.splice(index,1);
					this.setLen();
				}
			},
			update:function(){
				this._iterator("update",this.P_canvas.height);
			},
			draw:function(){
				this._iterator("draw",this.P_context);
			},
			checkCollide:function(){
				this._iterator("checkCollide",this.ballSprite.getCollide());
			}
		}
	});
	window.paleLayer = paleLayer;
})();