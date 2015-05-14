(function(){
	var imgManage = YYC.Class({
		Init:function(data){
			this.img = data.img;
			this.width = data.width;
			this.height = data.height;
			this.img.width = data.width;
			this.img.heigth = data.height;
		},
		Private:{
			img:null,
			width:null,
			height:null
		},
		//提供一些对图片的操作方法
		Public:{
			
		}
	});
	window.imgManage = imgManage;
})();