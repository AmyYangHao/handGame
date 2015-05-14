(function(){
	var Layer = YYC.AClass(Collection,{
		Private:{
			_getContext:function(){
				this.P_context = this.P_canvas.getContext('2d');
			},
		},
		Protected:{
			P_canvas:null,
			P_context:null,
			//根据方法名遍历子类中所有同名方法
			//迭代器模式
			P_iterator:function(target){
				var args = [].slice.call(arguments,1),
					nextElement = null;
				
				while(this.hasNext()){
					nextElement = this.next();
					nextElement[target].apply(nextElement,args);
				}
				this.resetCursor();
			},
			P_render:function(){
				this.clear();
				this.draw();
			}
		},
		Public:{
			remove:function(sprite){
				this.base(function(e,obj){
					if(e.x === obj.x && e.y === obj.y){
						return true;
					}
					return false;
				},sprite);
			},
			//添加一个精灵
			addSprite:function(target){
				this.appendChild(target);
			},
			//添加多个精灵
			addSprites:function(target){
				this.appendChilds(target);
			},
			Virtual:{
				init:function(){
					this._getContext();
				},
				clear:function(context){
					context.clearRect(0,0,this.P_canvas.width,this.P_canvas.height);
				}
			}
		},
		Abstarct:{
			setCanvas:function(){
				
			},
			draw:function(){
				
			},
			run:function(){}
		}
	});
	
	window.Layer = Layer;
})();