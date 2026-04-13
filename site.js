document.addEventListener("DOMContentLoaded", function (){
  fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  });
  fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });
});
function toggleTheme(){
  document.body.classList.toggle("light");

  const theme = document.body.classList.contains("light") ? "light" : "dark";
  localStorage.setItem("theme", theme);
}

window.addEventListener("load", function(){
  const savedTheme = localStorage.getItem("theme");

  if(savedTheme === "light"){
    document.body.classList.add("light");
  }
});

function openModal(imageSrc){

document.getElementById("modalImage").src=imageSrc;

var modal = new bootstrap.Modal(document.getElementById('degreeModal'));

modal.show();

}

function closeModal(){

var modalEl = document.getElementById('degreeModal');

var modal = bootstrap.Modal.getInstance(modalEl);

modal.hide();

}