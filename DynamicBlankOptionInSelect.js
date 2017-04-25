var a=$("<select id='fruits'><option value='oranges'>Oranges</option><option value='apples'>Apples</option></select>");
$("body").append(a);
$("#fruits").prepend("<option value=''></option>");
$("#fruits")[0].selectedIndex=0;
