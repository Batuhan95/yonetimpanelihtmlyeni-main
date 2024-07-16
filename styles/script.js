document.addEventListener("DOMContentLoaded", function() {
    var toggles = document.querySelectorAll(".toggle-icon");
    var textToggles = document.querySelectorAll(".toggle-text");

    toggles.forEach(function(toggle) {
        toggle.addEventListener("click", function() {
            var nestedUl = this.parentElement.nextElementSibling;
            if (nestedUl) {
                if (nestedUl.style.display === "none" || nestedUl.style.display === "") {
                    nestedUl.style.display = "block";
                } else {
                    nestedUl.style.display = "none";
                }
            }
        });
    });

    textToggles.forEach(function(textToggle) {
        textToggle.addEventListener("click", function() {
            var table = document.getElementById("data-table");
            if (table.style.display === "none" || table.style.display === "") {
                table.style.display = "block";
            } else {
                table.style.display = "none";
            }
        });
    });
});
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
function newopenModal() {
    document.getElementById("newmyModal").style.display = "block";
}

function newcloseModal() {
    document.getElementById("newmyModal").style.display = "none";
}
function duzenleopenModal() {
    document.getElementById("modalduzenle").style.display = "block";
}

function duzenlecloseModal() {
    document.getElementById("modalduzenle").style.display = "none";
}
function yetkileropenModal() {
    document.getElementById("yenimyModal").style.display = "block";
}

function yetkilercloseModal() {
    document.getElementById("yenimyModal").style.display = "none";
}
function groupopenModal() {
    document.getElementById("groupmyModal").style.display = "block";
}

function groupcloseModal() {
    document.getElementById("groupmyModal").style.display = "none";
}
function tumkullaniciopenModal() {
    document.getElementById("tumkullanici").style.display = "block";
}

function tumkullanicicloseModal() {
    document.getElementById("tumkullanici").style.display = "none";
}
function tumviewopenModal() {
    document.getElementById("tumview").style.display = "block";
}

function tumviewcloseModal() {
    document.getElementById("tumview").style.display = "none";
}
document.getElementById('uploadButton').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function() {
    const preview = document.getElementById('filePreview');
    preview.innerHTML = ''; // Önceki önizlemeleri temizle
    const files = this.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const div = document.createElement('div');
        const fileName = document.createElement('span');
        const button = document.createElement('button');

        fileName.className = 'file-name';
        fileName.textContent = file.name;
        button.textContent = 'X';
        button.onclick = function() {
            div.remove();
        };

        div.appendChild(fileName);
        div.appendChild(button);

        if (file.type.startsWith('image/')) {
            const img = document.createElement('img');
            const reader = new FileReader();

            reader.onload = function(e) {
                img.src = e.target.result;
                div.insertBefore(img, fileName);
            }

            reader.readAsDataURL(file);
        } else {
            fileName.style.marginTop = '20px';
        }

        preview.appendChild(div);
    }
});