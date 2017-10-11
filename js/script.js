var count = document.getElementById("number");
count.innerHTML = 0;

$('#cat-img').click(function(){
    var i = 0;
	function increment(){
	    i = i + 1;
	};
    count.value = i;
});