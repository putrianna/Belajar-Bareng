$('#sd').on('click', () =>{
    renderPage2();
})

const renderPage2 = () =>{
    $('main').html('');

    $('main').append(`
    <div class="jumbotron jumbotron-fluid pt-6 bg-img-1 min-jumbotron">
        <div class="container">

            <div class="row align-items-center">
                <div class="col-md-6 text-center">

                    <h4 class=" font-cam">BELAJAR BERSAMA KAMI LEBIH MUDAH</h4>
                    <h1 class="display-6 font-nir">Karena Kami Hadir Membawa Solusi
                    </h1>
                </div>
                <div class="col-md-6 text-center">
                    <img src="./assets/images/icon-SD.png" alt="..." class="img-fluid">
                </div>
            </div>
        </div>
    </div>

    <div class="bg-grad-1 pb-5">
        <div class="container pt-5" id="belajar">
            <h3 class="text-center mb-3 font-dej">Kategori SD</h3>
            <div id="video-list"></div>
        </div>

    </div>

    <div class="bg-img-2 pb-5">
        <div class="container pt-5" id="belajar">
            <h3 class="text-center mb-3 font-dej">Mentor</h3>
            <div class="row justify-content-center" id="mentor-list"></div>
        </div>

    </div>

    `);

    getData2();
}

const getData2 = () => {
    $.getJSON("./assets/js/video.json", (data) => {
        let okoc = data.videos;
        let okoc2 = data.mentor;

        $.each(okoc, (i, data) => {
            $("#video-list").append(`
            <div class="row justify-content-center pt-5 pb-5 font-cal" id="kelas${data.kelas}">
                <div class="col-10 col-md-8 col-lg-6 shadow card p-3">
                    <figure class="text-center">
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" src="${data.video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <figcaption><h3>Materi SD Kelas ${data.kelas}</h3></figcaption>
                    </figure>
                <div>
            </div>
            `);
        });

        $.each(okoc2, (i, data) => {
            $("#mentor-list").append(`
            <div class="col-lg-2 text-center">
                <figure>
                    <img src="${data.img}" class="shadow rounded-circle img-fluid">
                    <figcaption class="pt-2">${data.nama}</figcaption>
                </figure>
            </div>
            `);
        });
    });
};