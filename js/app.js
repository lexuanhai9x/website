
$(document).ready(function()
{
var submit = $("button[type='submit']");
submit.click(function()
{
var data = $('form#test-form').serialize();
$.ajax({
type : 'GET',
url : 'https://script.google.com/macros/s/AKfycbxN8l2Eblkc7r7DgZS7MKvOCPcjdYoO7wXazEnzLZB1lPqT1DmECZBuDeW8P822AiMsYw/exec',
dataType:'json',
crossDomain : true,
data : data,
success : function(data)
{
if(data == 'false')
{
alert('Thêm không thành công, bạn cũng có thể sử dụng để hiển thị Popup hoặc điều hướng');
}else{
    $("#popup").addClass("active")
}
}
});
return false;
});
});