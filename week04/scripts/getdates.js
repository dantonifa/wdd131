function getDates() {
  var date = new Date();
  let year = date.getFullYear();
  document.getElementById("year").innerHTML = year;
  document.getElementById("lastModified").innerHTML = date;
}
getDates();
