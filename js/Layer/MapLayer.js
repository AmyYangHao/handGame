(function(){
	var MapLayer = YYC.Class(Layer,{
		init:function(){
			
		},
		Private:{
			
		},
		Public:{
			setCanvas:function(){
				this.P_canvas = document.getElementById("mapLayer");
				this.P_canvas.width = GameConfig.canvas.mapLayer.width;
				this.P_canvas.height = GameConfig.canvas.mapLayer.height;
			},
			init:function(){
				this.base();
			},
			draw:function(){
				this.P_context.fillStyle = "blue";
				this.P_context.fillRect(0,0,this.P_canvas.width,this.P_canvas.height);
			},
			clear:function(){
				this.base(this.P_context);
			},
			run:function(){
				this.P_render();
			}
		}
	});
	window.MapLayer = MapLayer;
})();