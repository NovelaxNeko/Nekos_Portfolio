function UpdateAge() {
    // Format YYYY-MM-DD
    var bd = new Date("2000-01-29");
    var cd = new Date();
    var a = cd.getFullYear() - bd.getFullYear();
    var m = cd.getMonth() - bd.getMonth();
    if (m < 0 || m === 0 && cd.getDate() < bd.getDate()) {
        a--;
    }

    document.getElementById('age').textContent = a;
}