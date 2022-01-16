// the menu toggle code
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide"); 
}

// links for homepage weekly assignments
const links = [
    {
        label: "Week01 notes",
        url: "week01/index.html"
    },
    {
        label: "Week02 notes",
        url: "week02/index.html"
    }
]
for(var i=0; i<links.length; i++) {
document.getElementById("assignmentLinks").innerHTML +=
    '<li>' + '<a href="' + links[i].url + '">' + links[i].label + '</a></li>'
}