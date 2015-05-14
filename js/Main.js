(function(){
	var Main = (function(){
		var getImg = function(){
			var url = [];
			var player = [
			    {id:"arc",src:"1.png"}
			];
			var map = [
			    {id:"map",src:'1.png'}
			];
			addImg(url,player,map);
			return url;
		};
		var addImg = function(url){
			var args = [].slice.call(arguments,1);
			for(var i = 0,len = args.length;i<len;i++){
				for(var j = 0,length = args[i].length;j<length;j++){
					url.push({id:args[i][j].id,src:GameConfig.img.path+args[i][j].src});
				}
			}
			return url;
		};
		return {
			init:function(){
				window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
				window.imgs = loadImg(getImg(),this.start);
			},
			start:function(){
				var game = new Game();
				game.init();
				game.start();
			}
		};
	})();
	window.Main = Main;
})();