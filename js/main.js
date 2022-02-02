// the menu toggle code
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide"); 
}

//updated date and time
var updatedDate = "Last Updated: " + Date(document.lastModified);
document.getElementById("updatetime").textContent = updatedDate;
