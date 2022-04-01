// display and format moment() in jumbotron

$(document).ready(function() {
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
    // figure out the time to display different colors
    function currentTime() {
        var currentHour = moment().hour();
        // grab each block by its id digit
        $('.time-block').each(function() {
            var hour = parseInt($(this).attr('id'));
            // if statements for what color each block should be. 
            if (hour < currentHour) {
                $(this).addClass('past');
                $(this).removeClass('present');
            } else if (hour === currentHour) {
                $(this).addClass('present');
                $(this).removeClass('future');
            } else {
                $(this).addClass('future');
            }            
        })
    }
    // call the function
    currentTime();

    // event listener and set storage items
    $('.saveBtn').on('click', function() {
        // event.preventDefault();
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr('id');
        localStorage.setItem(time, text);
    })

    // get storage items from each block of time
    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));
})