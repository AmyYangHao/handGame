(function(){
	
	var layerFactory = {
		createMapLayer:function(){
			return new MapLayer();
		},
		createBallLayer:function(ballImg){
			return new ballLayer(ballImg);
		},
		createPaleLayer:function(sleep){
			return new paleLayer(sleep);
		}
	};
	window.layerFactory = layerFactory;
})();