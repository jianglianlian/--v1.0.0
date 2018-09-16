var newId = document.getElementById('newId');
var phoneId = document.getElementById('phoneId');
var scrollTop = 0;
var li1 = document.getElementById('li1');
var li2 = document.getElementById('li2');
// console.log(scroll().Top);
// 1、滚动条事件
var num = 0;
	window.onscroll = function(){
			// console.log(scroll().Top);
		

		if(num%2 == 0){
				newId.style.display = 'block';
			 	phoneId.style.display = 'none';
			 	li1.style.borderLeftWidth = '0.05rem';
			li1.style.borderLeftStyle = 'solid';
			li1.style.borderLeftColor = 'orange';
			li1.style.color= 'orange';
			li2.style.borderLeft = 'none';
			li2.style.color= '#8B8878';
			 	if(scroll().Top>=240){
			 		num++;
			 	}
			 	// console.log(num);
			 	
		}else{
			newId.style.display = 'none';
			phoneId.style.display = 'block';
			li2.style.borderLeftWidth = '0.05rem';
			li2.style.borderLeftStyle = 'solid';
			li2.style.borderLeftColor = 'orange';
			li2.style.color= 'orange';
			li1.style.borderLeft = 'none';
			li1.style.color= '#8B8878';
			console.log(scroll().Top);
			if(scroll().Top<=2){
				num++;
			}
			
		}
	}
	//2、选项卡事件
	li1.onclick = function(){
		newId.style.display = 'block';
			 	phoneId.style.display = 'none';
			 	li1.style.borderLeftWidth = '0.05rem';
			li1.style.borderLeftStyle = 'solid';
			li1.style.borderLeftColor = 'orange';
			li1.style.color= 'orange';
			li2.style.borderLeft = 'none';
			li2.style.color= '#8B8878';
		newId.style.display = 'block';
		phoneId.style.display = 'none';
	}
	li2.onclick = function(){
		newId.style.display = 'none';
		phoneId.style.display = 'block';
		li2.style.borderLeftWidth = '0.05rem';
			li2.style.borderLeftStyle = 'solid';
			li2.style.borderLeftColor = 'orange';
			li2.style.color= 'orange';
			li1.style.borderLeft = 'none';
			li1.style.color= '#8B8878';
	}
	
		

