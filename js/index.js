
function dodaj()
{

const element = document.getElementById("godina").value;
const element2 = document.getElementById("ects").value;
const element3 = document.getElementById("predmet").value;
	console.log(element);
var sRedak= '<tr>';
sRedak += '<td>'+ element +'</td>';
sRedak += '<td>'+element2+'</td>';
sRedak += '<td>'+element3+'</td>';
sRedak += '<td> <button type="button" onClick="deleteRow(this)" class="btn btn-danger">Obrisi</button></td>';
$('#tablica-postovi tbody').prepend(sRedak);
}
function deleteRow(r)
{
var i=r.parentNode.parentNode.rowIndex;
document.getElementById('tablica-postovi').deleteRow(i);
}
