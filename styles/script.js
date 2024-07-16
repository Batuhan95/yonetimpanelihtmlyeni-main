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
function yoneticiopenModal() {
    document.getElementById("modaltable").style.display = "block";
}

function yoneticicloseModal() {
    document.getElementById("modaltable").style.display = "none";
}

document.querySelectorAll('.expandable').forEach(row => {
    row.addEventListener('click', () => {
        const nextRow = row.nextElementSibling;
        if (nextRow && nextRow.classList.contains('hidden-row')) {
            nextRow.remove();
        } else {
            const newRow = document.createElement('tr');
            newRow.classList.add('hidden-row');
            newRow.innerHTML = `
                <td colspan="8">
                    <table>
                        <thead>
                            <tr>
                                <th>Lisans Id</th>
                                <th>Lisans Anahtarı</th>
                                <th>KullanıcıId</th>
                                <th>Açıklaması</th>
                                <th>Yetki Ekle/Düzenle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>17</td>
                                <td>JQEMDx8X37nVndmZqNCyw==</td>
                                <td>1</td>
                                <td>Yazılım Şube Müdürlüğü - Bildirim servisi için kullanılmaktadır. Proje seviyesinde yetkilidir.</td>
                                <td><button onclick="yoneticiopenModal()">Yetki Düzenle</button></td>
                            </tr>
                            <!-- Add more rows as needed -->
                        </tbody>
                    </table>
                </td>
            `;
            row.parentNode.insertBefore(newRow, row.nextSibling);
        }
    });
});
document.querySelectorAll('.nested-list-item').forEach(item => {
    item.addEventListener('click', (event) => {
        if (!item.querySelector('.nested-list')) {
            const nestedList = document.createElement('ul');
            nestedList.classList.add('nested-list');
            nestedList.innerHTML = `
                <li><input type="checkbox"> GetContactListGroups</li>
                <li><input type="checkbox"> SmsCreate</li>
            `;
            item.appendChild(nestedList);
        } else {
            item.querySelector('.nested-list').remove();
        }
        event.stopPropagation();
    });
});