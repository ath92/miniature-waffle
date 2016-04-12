$(document).ready(function(){
	console.log('hello world!');



	$.ajax({
	    type: "GET" ,
	    url: "xml/test.xml" ,
	    dataType: "xml" ,
	    success: function(xml) {
		    var xmlDoc = $.parseXML( xml );

			$(xmlDoc).find('finnish').clone().appendTo('#content');

			console.log($(xmlDoc).find('finnish').clone().html());
		}
    });

});