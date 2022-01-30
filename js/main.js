// the menu toggle code
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide"); 
}

//updated date and time
var updatedDate = "Last Updated: " + Date(document.lastModified);
document.getElementById("updatetime").textContent = updatedDate;

// links for homepage weekly assignments
const links = [
    {
        label: "Week01 notes",
        url: "week01/index.html"
    },
    {
        label: "Week02 notes",
        url: "week02/index.html"
    },
    {
        label: "Week03 notes",
        url: "week03/index.html"
    },
    {
        label: "Week04 notes",
        url: "week04/index.html"
    }
]
for(var i=0; i<links.length; i++) {
document.getElementById("assignmentLinks").innerHTML +=
    '<li>' + '<a href="' + links[i].url + '">' + links[i].label + '</a></li>'
}