(function(){
	var Game = YYC.Class({
		
		Private:{
			_action:false,
			_ballImg:null,
			_createlayerManager:function(){
				this.layerManager = new LayerManager();
				this.layerManager.addLayer("mapLayer",layerFactory.createMapLayer());
				this.layerManager.addLayer("ballLayer",layerFactory.createBallLayer(this._ballImg));
				this.layerManager.addLayer("paleLayer",layerFactory.createPaleLayer(this.sleep));
			},
			_initLayer:function(){
				this.layerManager.initLayer();
			},
			_addElement:function(){
				var ballLayerElement = this._createBallLayerElement();
				
				this.layerManager.addSprites("ballLayer",ballLayerElement);
			},
			_createKeyEvent:function(){
				var me = this;
				document.addEventListener("touchstart",function(event){
					event.preventDefault();
					me.action = true;
				},false);
				document.addEventListener("touchend",function(event){
					event.preventDefault();
					me.action = false;
				},false);
				document.addEventListener("touchmove",function(event){
					event.preventDefault();
					me.moveOnMobile(event);
				},false);
				
				keyEvent.addMouseDown(function(){
					me._action = true;
				});
				keyEvent.addMouseUp(function(){
					me._action = false;
				});
				keyEvent.addMouseMove(function(e){
					me.layerManager.getLayer("ballLayer").move(e,me._action);
				});
			},
			_createBallLayerElement:function(){
				var element = [],
					ball = spriteFactory.createBallSprite(this._ballImg);
				ball.init();
				element.push(ball);
				return element;
			},
			_getImg:function(target){
				this._ballImg = imgFactory.createFactory(imgs[target],30,30);
			}
		},
		Public:{
			mainLoop:null,
			sleep:null,
			x:0,
			y:0,
			layerManager:null,
			init:function(){
				this.sleep = 1000/GameConfig.FPS | 0;
				this._createKeyEvent();
				this._getImg("arc");
				window.success = true;
				this._createlayerManager();
				this._addElement();
				this._initLayer();
			},
			start:function(){
				var me = this;
				requestAnimationFrame(function(){
					me.run();
				});
			},
			run:function(){
				this.layerManager.run();
				if(window.success){
					var me = this;
					requestAnimationFrame(function(){
						me.run();
					});
				}
			}
		}
		
	});
	window.Game = Game;
})();