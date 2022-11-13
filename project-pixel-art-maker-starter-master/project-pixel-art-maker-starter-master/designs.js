// Select color input
const colorPicker = document.getElementById("colorPicker")
// Select size input
const sizePicker = document.getElementById('#sizePicker')
// Submit button
$('#sizePicker').submit(function(event) {
	event.preventDefault();
	requestedHeight = $('#inputHeight').val();
	requestedWidth = $('#inputWidth').val();
	makeGrid(requestedHeight, requestedWidth);
})

function makeGrid(x, y) {
	$('tr').remove(); //to clear previous submission
	for (var i = 1; i <= x; i++) {
		$('#pixelCanvas').append('<tr id= row' + i + '></tr>'); // adding new sq to rows
		for (var a = 1; a <= y; a++) {
			$('#row' + i).append('<td></td>'); //adding columns to row
		}
	}
	// adding/removing color via clicking the box
	$('td').on('click', function coloringBoxes() {
		colorPicked = $('#colorPicker').val();
		if ($(this).attr('style')) {
			$(this).removeAttr('style')
		} else {
			$(this).attr('style', 'background-color:' + colorPicked);
		}
	})
}