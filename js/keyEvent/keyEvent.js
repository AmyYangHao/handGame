(function(){
	var keyEvent = YYC.Class({
		Private:{
			_mouseDown:function(){},
			_mouseUp:function(){},
			_mouseMove:function(){}
		},
		Public:{
			addMouseDown:function(fn){
				this._mosueDown = fn;
				document.addEventListener("mousedown",this._mosueDown,false);
			},
			addMouseUp:function(fn){
				this._mosueUp = fn;
				document.addEventListener("mouseup",this._mosueUp,false);
			},
			addMouseMove:function(fn){
				this._mosueMove = fn;
				document.addEventListener("mousemove",this._mosueMove,false);
			},
			
			removeMouseDown:function(){
				document.removeEventListener("mousedown",this._mosueDown,false);
			},
			removeMouseUp:function(){
				document.removeEventListener("mouseup",this._mosueUp,false);
			},
			removeMouseMove:function(){
				document.removeEventListener("mousemove",this._mosueMove,false);
			},
		}
	});
	
	window.keyEvent = new keyEvent;
})();