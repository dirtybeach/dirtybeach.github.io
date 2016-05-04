<?php

echo date("l jS \of F Y h:i:s A");

?>
<!DOCTYPE html>
<html>
	<head>
	<meta charset="UTF-8">
	<script src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
	<script type="text/javascript">
		$(document).ready(function(){
			$("#17on").click(function(){
				var a = new XMLHttpRequest();
				a.open("GET","17on.php");
				a.onreadystatechange=function(){
					if(a.readyState==4){
						if(a.status == 200){
						}
						else alert("HTTP ERROR");
					}
				}
				a.send();
			});

			$("#17off").click(function(){
                                var a = new XMLHttpRequest();
                                a.open("GET","17off.php");
                                a.onreadystatechange=function(){
                                        if(a.readyState==4){
                                                if(a.status == 200){
                                                }
                                                else alert("HTTP ERROR");
                                        }
                                }
                                a.send();
                        });

			$("#18on").click(function(){
                                var a = new XMLHttpRequest();
                                a.open("GET","18on.php");
                                a.onreadystatechange=function(){
                                        if(a.readyState==4){
                                                if(a.status == 200){
                                                }
                                                else alert("HTTP ERROR");
                                        }
                                }
                                a.send();
                        });
                        $("#18off").click(function(){
                                var a = new XMLHttpRequest();
                                a.open("GET","18off.php");
                                a.onreadystatechange=function(){
                                        if(a.readyState==4){
                                                if(a.status == 200){
                                                }
                                                else alert("HTTP ERROR");
                                        }
                                }
                                a.send();
                        });


		});


	</script>
	<title>RPi Cam Preview</title>
    	<script src="script_min.js"></script>
	<script>var mjpeg_img;
		function reload_img () {
  mjpeg_img.src = "cam_pic.php?time=" + new Date().getTime();
}
function error_img () {
  setTimeout("mjpeg_img.src = 'cam_pic.php?time=' + new Date().getTime();", 100);
}
function init() {
  mjpeg_img = document.getElementById("mjpeg_dest");
  mjpeg_img.onload = reload_img;
  mjpeg_img.onerror = error_img;
  reload_img();
}</script>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	</head>
	<body onload="setTimeout('init();', 100);">
		<center>
			<div><img id="mjpeg_dest" /></div>
			<button type="button" id="17on">Green on</button><br>
			<button type="button" id="17off">Green off</button><br>
			<button type="button" id="18on">Red on</button><br>
			<button type="button" id="18off">Red off</button><br>
		</center>
	</body>
</html>

