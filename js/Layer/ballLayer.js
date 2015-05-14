(function(){
	var ballLayer = YYC.Class(Layer,{
		Init:function(){
		},
		Public:{
			setCanvas:function(){
				this.P_canvas = document.getElementById("ballLayer");
				this.P_canvas.width = GameConfig.canvas.ballLayer.width;
				this.P_canvas.height = GameConfig.canvas.ballLayer.height;
			},
			init:function(){
				this.base();
			},
			move:function(e,action){
				this.P_iterator("move",this.P_canvas,e,action);
			},
			clear:function(){
				this.base(this.P_context);
			},
			draw:function(){
				this.P_iterator("draw",this.P_context);
			},
			run:function(){
				this.P_render();
			},
		}
	});
	window.ballLayer = ballLayer;
})();