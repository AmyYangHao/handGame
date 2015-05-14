(function(){
	var imgFactory = {
		createFactory:function(img,width,height){
			if(arguments.length == 1){
				return new imgManage({
					img:img,
					width:img.width,
					height:img.height
				});
			}else if(arguments.length == 3){
				return new imgManage({
					img:img,
					width:width,
					height:height
				});
			}
		}
	};
	window.imgFactory = imgFactory;
})();