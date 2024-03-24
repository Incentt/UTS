var rows = document.querySelectorAll('.row');
var totalRowsToSee = 11;
var currentPage = 0; // Initialize currentPage to 0
var maxcurrentPage = Math.ceil(rows.length / totalRowsToSee); // Corrected calculation for maxcurrentPage

console.log(maxcurrentPage);

function showNext() {
    currentPage++;
    if (currentPage >= maxcurrentPage) {
        currentPage = maxcurrentPage - 1;
    }

    var startIndex = currentPage * totalRowsToSee;
    var endIndex = Math.min((currentPage + 1) * totalRowsToSee, rows.length);

    hideAllRows();

    for (var i = startIndex; i < endIndex; i++) {
        rows[i].style.display = 'flex';
    }

    console.log("Current: " + currentPage);
    buttonChange();
}

function showPrevious() {
    currentPage--;
    if (currentPage < 0) {
        currentPage = 0;
    }

    var startIndex = currentPage * totalRowsToSee;
    var endIndex = Math.min((currentPage + 1) * totalRowsToSee, rows.length);

    hideAllRows();

    for (var i = startIndex; i < endIndex; i++) {
        rows[i].style.display = 'flex';
    }

    console.log("Current: " + currentPage);
    buttonChange();
}

function hideAllRows() {
    for (var i = 0; i < rows.length; i++) { // Start from index 0 to include the header row
        rows[i].style.display = 'none';
    }
    rows[0].style.display = 'flex';
}

function buttonChange() {
    rows = document.querySelectorAll('.row');
    maxcurrentPage = Math.ceil(rows.length / totalRowsToSee);
    var prevButton = document.getElementById("prevButton");
    var nextButton = document.getElementById("nextButton");

    if (currentPage <= 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'flex';
    }

    if (currentPage >= maxcurrentPage - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'flex';
    }
}

// Initialize the page to show the first set of rows
hideAllRows();
showNext();
showPrevious();
buttonChange(); // Make 

///Munculin tombol sesuai page


var whatRow;
function ubahData(button) {
    var row = button.parentNode.parentNode.parentNode; // Get the parent div of the button, which is the div with class "row"
    var columns = row.querySelectorAll('.col-md-2 h6, .col-md-3 h6, .col-md-4 h6');


    // Extract data from columns
    var nim = columns[0].innerText;
    var name = columns[1].innerText;
    var alamat = columns[2].innerText;

    // Populate the modal fields
    document.getElementById('NIM').value = nim;
    document.getElementById('name').value = name;
    document.getElementById('alamat').value = alamat;
    whatRow = row.id;

    // Show the modal
    $('#gantiDataModal').modal('show');
}

function saveChanges() {
    // Retrieve data from modal input fields
    var nim = document.getElementById('NIM').value;
    var name = document.getElementById('name').value;
    var alamat = document.getElementById('alamat').value;

    var rows = document.getElementById(whatRow);

    // Update data in the row
    var columns = rows.querySelectorAll('.col-md-2 h6, .col-md-3 h6, .col-md-4 h6');


    // Validasi input
    if (!name || !alamat) {
        // Jika nama lengkap atau alamat kosong, tampilkan alert gagal
        Swal.fire({
            title: 'Gagal mengedit data!',
            text: 'Nama lengkap dan alamat harus diisi.',
            icon: 'error',
            showClass: {
                popup: 'animate_animated animate_fadeInDown'
            },
            hideClass: {
                popup: 'animate_animated animate_fadeOutUp'
            }
        });
    } else {
        // Jika validasi berhasil, simulasikan logika pengeditan data
        console.log("Edited Name: " + name);
        console.log("Edited Address: " + alamat);

        // Tampilkan alert sukses
        Swal.fire({
            title: 'Data berhasil diedit!',
            text: 'Nama: ' + name + ', Alamat: ' + alamat,
            icon: 'success',
            showClass: {
                popup: 'animate_animated animate_fadeInDown'
            },
            hideClass: {
                popup: 'animate_animated animate_fadeOutUp'
            }

        });
        $('#gantiDataModal').modal('hide');
        columns[0].innerText = nim;
        columns[1].innerText = name;
        columns[2].innerText = alamat;
    }


}



function hapusData(button) {

    Swal.fire({
        icon: 'warning',
        title: 'Anda Yakin?',
        text: 'Anda akan menghapus akun Anda. Tindakan ini tidak bisa dibatalkan',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Ya, hapus'
    }).then((result) => {
        if (result.isConfirmed) {
            var parentDiv = button.parentNode.parentNode.parentNode;
            parentDiv.remove();
            Swal.fire({
                icon: 'success',
                title: 'Account Terhapus!',
                text: 'Akun Anda sudah dihapus.',
                showConfirmButton: false,
                timer: 3000
            });
        }
    });
}

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

///EDITEDIT///////////////////////////////////





$(document).ready(function () {
    $("#editForm").submit(function (e) {
        e.preventDefault();
        var name = $("#name").val();
        var alamat = $("#alamat").val();

        // Validasi input
        if (!name || !alamat) {
            // Jika nama lengkap atau alamat kosong, tampilkan alert gagal
            Swal.fire({
                title: 'Gagal mengedit data!',
                text: 'Nama lengkap dan alamat harus diisi.',
                icon: 'error',
                showClass: {
                    popup: 'animate_animated animate_fadeInDown'
                },
                hideClass: {
                    popup: 'animate_animated animate_fadeOutUp'
                }
            });
        } else {
            // Jika validasi berhasil, simulasikan logika pengeditan data
            console.log("Edited Name: " + name);
            console.log("Edited Address: " + alamat);

            // Tampilkan alert sukses
            Swal.fire({
                title: 'Data berhasil diedit!',
                text: 'Nama: ' + name + ', Alamat: ' + alamat,
                icon: 'success',
                showClass: {
                    popup: 'animate_animated animate_fadeInDown'
                },
                hideClass: {
                    popup: 'animate_animated animate_fadeOutUp'
                }
            });
        }
    });
});


function addData() {
    $('#tambahkanData').modal('show');
}

function addMahasiswa() {
    var con = document.querySelector('.container-fluid-text-left');
    var nimAdd = document.getElementById("NIMAdd");
    var nameAdd = document.getElementById("nameAdd");;
    var alamatAdd = document.getElementById("alamatAdd");


    if (!nameAdd.value || !alamatAdd.value || !nimAdd.value) {
        // Jika nama lengkap atau alamat kosong, tampilkan alert gagal
        Swal.fire({
            title: 'Gagal menambah data!',
            text: 'Nama lengkap, alamat, dan NIM harus diisi.',
            icon: 'error',
            showClass: {
                popup: 'animate_animated animate_fadeInDown'
            },
            hideClass: {
                popup: 'animate_animated animate_fadeOutUp'
            }
        });
    } else {
        // Tampilkan alert sukses
        $('#tambahkanData').modal('hide');
        Swal.fire({
            icon: 'success',
            title: 'Akun berhasil dibuat!',
            showConfirmButton: false,
            timer: 3000
        });
        con.innerHTML += ` <div class="row" id="row-${rows}" style="margin-bottom: 10px;">
        <div class="col-md-2 col-2">
            <h6>${nimAdd.value}</h6>
        </div>
        <div class="col-md-3 col-3">
            <h6>${nameAdd.value}</h6>
        </div>
        <div class="col-md-4 col-3">
            <h6>${alamatAdd.value}</h6>
        </div>
        <div class="col-md-3 col-3">
            <div class="d-flex justify-content-between">
                <button type="button" class="btn btn-sm btn-primary flex-fill mr-2" onclick="ubahData(this)">
                    <i class="fa-solid fa-pen-to-square"></i>
                    Ubah
                </button>

                <button type="button" onclick="hapusData(this)" class="btn btn-sm btn-danger flex-fill"><i
                        class="fa-solid fa-eraser"></i>
                    Hapus</button>

            </div>

        </div>
    </div>

`

        //update jumlah mahasiswa
        var rows = document.querySelectorAll('.row');
        document.getElementById("NIMAdd").value = '';
        document.getElementById("nameAdd").value = '';
        document.getElementById("alamatAdd").value = '';
     
            buttonChange();
            
        
    }
   

}