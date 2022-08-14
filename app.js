function addContent(params) {
    let container = document.getElementById("container");
<<<<<<< HEAD
    if (params == "contact") {
        container.innerHTML = `        
        <form action="">
            EMAIL : <input type="text" /> <br />s
            NAMA : <input type="text" /><br />
            PESAN : <textarea name="" id="" cols="30" rows="10"></textarea>
        </form>`;
    } else if (params == "profile") {
=======
    if (params == "History") {
        container.innerHTML = `        
        <div class="right">
            <h1>SEJARAH</h1>
            <br />
            <h2 style="color: #4ec5c1">
                Kenapa Isi Navbar Menjadi History <br />
                Bukan Profil/Contact?
            </h2>
            <br />
            <p>
                Awalnya bagian navbar ini buat contact & profile tapi ngga jadi karena
                saya nggak bisa makai iframe jadilah pakai innerHTML. pas sudah saya
                bingung desainnya kaya gimana, jadilah saya di kebawahin sedangkan
                navbar jadi bagian history & about yang isinya cuma tulisan aja
            </p>
        </div>
        <div class="left">
            <img src="assets/arkeolog.webp" alt="" width="500px" height="375px" />
        </div>`;
    } else if (params == "about") {
>>>>>>> 6e8dd41 (update js, navbar)
        container.innerHTML = `
            <h1>INI PROFILE</h1>
        `;
    } else if (params == "home") {
        container.innerHTML = `
        <div class="right">
<<<<<<< HEAD
                <h1>KELOMPOK 1 COYY</h1>
                <br />
                <h2 style="color:#4ec5c1;">
                    Dikerjakan Oleh Orang-Orang <br />
                    Yang Tidak Bisa Desain
                </h2>
                <br />
                <p >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummys text ever since the 1500s, when an unknown
                    printer took a galley of types and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages,
                </p>
            </div>

            <div class="left">
                <img src="assets/image.png" alt="" width="500px" height="375px" />
            </div>
=======
            <h1>KELOMPOK 1 COYY</h1>
            <br />
            <h2 style="color: #4ec5c1">
                Dikerjakan Oleh Orang-Orang <br />
                Yang Tidak Bisa Desain
            </h2>
            <br />
            <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the
                industry's standard dummys text ever since the 1500s,
                when an unknown printer took a galley of types and
                scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages,
            </p>
        </div>

        <div class="left">
            <img
                src="assets/image.png"
                alt=""
                width="500px"
                height="375px"
            />
        </div>
>>>>>>> 6e8dd41 (update js, navbar)
        `;
    }
}

// navbar animation
let cont = document.getElementById("divCont");
let allAnch = cont.getElementsByClassName("nav-link");
for (let i = 0; i < allAnch.length; i++) {
    allAnch[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    });
}

let marker = document.querySelector("#marker");
let item = document.querySelectorAll("nav a");
function indicator(e) {
    marker.style.left = e.offsetLeft + "px";
    marker.style.top = e.offsetTop + 30 + "px";
    marker.style.width = e.offsetWidth + "px";
}
item.forEach((link) => {
    link.addEventListener("click", (e) => {
        indicator(e.target);
        addContent(e.target.name);
    });
});
// --------------------------------------------------------------------------

// NYARI WIDTH HEIGHT
// let box = document.querySelector("#container");
// let style = getComputedStyle(box);

// let borderTopWidth = parseInt(style.borderTopWidth) || 0;
// let borderLeftWidth = parseInt(style.borderLeftWidth) || 0;
// let borderBottomWidth = parseInt(style.borderBottomWidth) || 0;
// let borderRightWidth = parseInt(style.borderRightWidth) || 0;

// let width =
//     window.innerWidth ||
//     document.documentElement.clientWidth ||
//     document.body.clientWidth;

// let height =
//     window.innerHeight ||
//     document.documentElement.clientHeight ||
//     document.body.clientHeight;

// console.log(`width:${width}, height:${height} `); //1462 494
// ------------------------------------------------------------------------
