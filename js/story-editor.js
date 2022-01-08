function loadStory(){
    var storyName = document.getElementById("name_input").value // for an input or textarea, use the keyword 'value'
    var storyHTML = localStorage.getItem(storyName)
    document.getElementById("story_editor").value = storyHTML
}
function saveStory() {
    var storyName = document.getElementById("name_input").value
    var storyHTML = document.getElementById("story_editor").value
    localStorage.setItem(storyName, storyHTML) // local storage uses 'key-value pairs'. The keys are 'storyName' and 'storyHTML' and they have the values stored in them they got from the document
}
function displayStory() {
    var storyHTML = document.getElementById("story_editor").value
    document.getElementById("story_display").innerHTML = storyHTML // to show something to the user you use a section and the special word 'innerHTML'.
}