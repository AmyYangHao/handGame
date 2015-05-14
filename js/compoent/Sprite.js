(function(){
	var Sprite = YYC.AClass({
		Private:{
			_x:0,
			_y:0,
			_width:0,
			_height:0
		},
		Public:{
			
		},
		Abstract:{
			init:function(){},
			draw:function(){},
			
		}
	});
	window.Sprite = Sprite;
})();