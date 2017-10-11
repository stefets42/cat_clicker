

var i = 0;

var count = document.getElementById("number");
count.innerHTML = i;

$('#cat-img').click(function(){
	i += 1;
	count.innerHTML = i;
});

