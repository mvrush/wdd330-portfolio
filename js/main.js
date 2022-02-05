// the menu toggle code
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide"); 
}

//updated date and time.
// const date = new Date(document.lastModified);
// const updatedDate = "Last Updated: " + (date.getMonth() + 1) + date.getDay() + date.getFullYear();
const updatedDate = "Last Updated: " + Date(document.lastModified);
document.getElementById("updatetime").textContent = updatedDate;
