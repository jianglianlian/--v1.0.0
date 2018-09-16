
		function scroll(){
			//兼容性处理
		
			if(window.pageYOffset){
				// return Top = window.pageYOffset;
				return {
					Top: window.pageYOffset,
					Left : window.pageXOffset,
				} 
			}else if(document.compatMode === 'CSSICompat'){
				// return Top = document.document.body.scrollTop;
				return {
					Top : document.document.body.scrollTop,
					Left : document.document.body.scrollLeft,
				}
				 
			}else{
				// return Top = document.body.scrollTop;
				return {
					Top : document.body.scrollTop,
					Left : document.body.scrollLeft,
				}
				 
			}
		
		}