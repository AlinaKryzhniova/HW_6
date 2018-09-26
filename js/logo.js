function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

$('.logo').css("background-color", getRandomColor); 

$('.logo').hover(function() {
    $(this).css("background-color", getRandomColor); 
});