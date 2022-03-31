const tableEl = document.querySelector("table");
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
sRedak += '<td> <input type="checkbox" class="promjeniBoju" id="exampleCheck1"></td>';
$('#tablica-postovi tbody').prepend(sRedak);
}
function deleteRow(r)
{
var i=r.parentNode.parentNode.rowIndex;
document.getElementById('tablica-postovi').deleteRow(i);
}
function onChangeRow(e) {
  if (!e.target.classList.contains("promjeniBoju")) {
    return;
  }

  const btn = e.target;
  btn.closest("tr").style.color = "red";
}
tableEl.addEventListener("click", onChangeRow);
function myFunction() {
                // Declare variables
                var input, filter, table, tr, td, i, txtValue;
                input = document.getElementById("myInput");
                filter = input.value.toUpperCase();
                table = document.getElementById("tablica-postovi");
                tr = table.getElementsByTagName("tr");
              
                // Loop through all table rows, and hide those who don't match the search query
                for (i = 0; i < tr.length; i++) {
                  td = tr[i].getElementsByTagName("td")[0];
                  if (td) {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                      tr[i].style.display = "";
                    } else {
                      tr[i].style.display = "none";
                    }
                  }
                }
              }