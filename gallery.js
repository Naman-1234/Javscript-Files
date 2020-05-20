/*Name this external file gallery.js*/

function upDate(previewPic){
 var x=document.getElementById("image");
  x.innerHTML=previewPic.alt;
  x.style.backgroundImage="url(" + previewPic.src + ")";
  
 
	}

	function unDo(){
    var x=document.getElementById("image");
    x.style.backgroundImage=null;
    x.innerHTML="	Hover over an image below to display here.";
		
	}