const home_name = "Angga";
const username = document.getElementById("username");

window.addEventListener("DOMContentLoaded", () => {
    username.textContent = home_name;
});

// Handle Form
document.getElementById("messageForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const tanggal_lahir = document.getElementById("tanggal_lahir").value;
    const pesan = document.getElementById("pesan").value;
    const jenis_kelamin = document.querySelector('input[name="jk"]:checked').value;

    const resultRows = document.querySelectorAll("#result table tr");

    resultRows[0].children[1].textContent = `: ${new Date().toString().slice(0, 24)}`;
    resultRows[1].children[1].textContent = `: ${nama}`;
    resultRows[2].children[1].textContent = `: ${tanggal_lahir}`;
    resultRows[3].children[1].textContent = `: ${jenis_kelamin}`;
    resultRows[4].children[1].textContent = `: ${pesan}`;
});