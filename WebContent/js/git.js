$(document).ready(function() {
	
	$.ajax({
	
		url: "https://api.github.com/users"
		
	}).then(function(data) {
		
		var table = $("#usersTable");
		var contents = "";
		$.each(data, function(idx) {
			
			contents +=  "<tr>";
			contents += "<td>" + data[idx].id + "</td>";
			contents += "<td>" + data[idx].login + "</td>";
			contents += "<td id='follow_url"+idx+"' onclick='getUserCount("+idx+");'>" + data[idx].followers_url + "</td>";
			contents += "<td id='follow_count"+idx+"'> 0 </td>";
			contents += "<td> <img src='" + data[idx].avatar_url + "' width=50 height=50 /></td>";
			contents += "</tr>";
		})
		
		table.append(contents);
		
	});
	
});

function getUserCount(idx) {
	console.log(idx);
	var fol_url = document.getElementById("follow_url"+idx).innerText;
//	console.log(fol_url);
	$.ajax({
		
		url: fol_url,
		
	}).then(function(data){
		
		var count = data.length;
		$("#follow_count"+idx).empty();
		$("#follow_count"+idx).html(count);
		
	})
}