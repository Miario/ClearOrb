//Resume Toggle Button
const toggleResume = () => {
    var x = document.getElementById("resume");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

export default toggleResume;