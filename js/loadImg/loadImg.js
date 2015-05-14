function loadImg(imgCount,callback){
	var img = {},
		total = imgCount.length,
		loadCount = 0;
	for(var i = 0;i < total;i++){
		var imgs = img[imgCount[i].id] = new Image();
			imgs.src = imgCount[i].src;
			imgs.onload = function(){
				loadCount++;
			};
	};
	
	if(typeof callback == "function"){
		function check(){
			if(loadCount >= total){
				callback.call(arguments);
			}else{
				setTimeout(arguments.callee,50);
			}
		}
		check();
	}
	return img;
};