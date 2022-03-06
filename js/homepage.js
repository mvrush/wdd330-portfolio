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
    },
    {
        label: "Week05 notes",
        url: "week05/index.html"
    },
    {
        label: "Week06 notes",
        url: "week06/index.html"
    },
    {
        label: "Week07 notes",
        url: "week07/index.html"
    },
    {
        label: "Week08 notes",
        url: "week08/index.html"
    },
    {
        label: "Week09 notes",
        url: "week09/index.html"
    }
]
for(var i=0; i<links.length; i++) {
document.getElementById("assignmentLinks").innerHTML +=
    '<li>' + '<a href="' + links[i].url + '">' + links[i].label + '</a></li>'
}