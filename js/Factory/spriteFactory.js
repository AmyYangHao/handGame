(function(){
	var spriteFactory = {
		createBallSprite:function(ballImg){
			return new ballSprite(ballImg);
		},
		createPaleSprite:function(){
			return new paleSprite();
		}
	};
	window.spriteFactory = spriteFactory;
})();