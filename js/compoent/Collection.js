(function(){
	var Collection = YYC.AClass({
		Private:{
			_childs:[],
			_cursor:0
		},
		Public:{
			appendChild:function(target){
				this._childs.push(target);
				return this;
			},
			appendChilds:function(target){
				var me = this;
				target.forEach(function(item){
					me._childs.push(item);
				});
			},
			removeAll:function(){
				this._childs = [];
			},
			getChild:function(){
				return this._childs;
			},
			getChildAt:function(index){
				return this._childs[index];
			},
			hasNext:function(){
				if(this._cursor === this._childs.length){
					return false;
				}else{
					return true;
				}
			},
			next:function(){
				var result = null;
				if(this.hasNext()){
					result = this._childs[this._cursor];
					this._cursor += 1;
				}else{
					result = null;
				}
				return result;
			},
			resetCursor:function(){
				this._cursor = 0;
			},
			Virtual:{
				remove:function(fun,child){
					this._childs.remove(fun,child);
				}
			}
		},
		Abstract:{
			
		}
	});
	window.Collection = Collection;
})();