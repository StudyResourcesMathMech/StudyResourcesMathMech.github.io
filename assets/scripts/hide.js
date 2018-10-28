function toggleFunc(el_name) {
    var x = document.getElementById(el_name);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}