$('#frontPageSearchIcon').click(function() { 
    $( this ).css("opacity", 0);
    $('#frontPageSearch').css("opacity", 1);
}

$('#frontPageSearch').click(function() { 
    $( this ).css("opacity", 0);
    $('#frontPageSearchIcon').css("opacity", 1);
}
