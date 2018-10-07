$(function(){
	$(document).ready(function(){
		$('#click-button').bind('click',function(){
			$.ajax({
			    type:'GET',
			    crossDomain:true,
			      url: 'webapi/myresource/returnType',
			      dataType:'text'
			  }).then(function(data) {
			    alert(data);
			  });
		});
	});
});