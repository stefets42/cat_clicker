// Left cat

var i = 0;

var leftCatCount = document.getElementById("left-cat-count");
leftCatCount.innerHTML = i;

$('#left-cat-img').click(function(){
	i += 1;
	leftCatCount.innerHTML = i;
});



var leftCatName = document.getElementById("left-cat-name");
leftCatName.innerHTML = "Maurice";




// Right cat

var j = 0;

var rightCatCount = document.getElementById("right-cat-count");
rightCatCount.innerHTML = j;

$('#right-cat-img').click(function(){
	j += 1;
	rightCatCount.innerHTML = j;
});



var rightCatName = document.getElementById("right-cat-name");
rightCatName.innerHTML = "Roger";