$('#sma').on('click', () =>{
    renderPage4();
})

const renderPage4 = () =>{
    $('main').html('');

    $('main').append(`
    <div class="content">
        <section id="about" class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-md-6 text-center pt-175 pt-50">
                    <h2 class="font-cam">BELAJAR BERSAMA KAMI LEBIH MUDAH</h2>
                    <h3 class="font-nir">karena kami hadir membawa solusi</h3>
                </div>
                <div class="col-md-6 text-center">
                    <img src="./assets/images/icon-SMA.png" class="img-fluid">
                </div>
            </div>
        </section>
        <section id="video" class="mt-100 pt-150 pt-50 mt-0" style="overflow: hidden;">
            <h1 class="text-center font-dej">Kategori SMA</h1>
            <div id="video-list3"></div>
        </section>
    </div>
    <aside class="pt-100 pb-100">
        <section>
            <h1 class="text-center font-dej">Mentor</h1>
            <div id="mentor-list3" class="row justify-content-center"></div>
        </section>
    </aside>
    `);

    getData();
}


const getData = () => {
    $.getJSON("./assets/js/video.json", (data) => {
        let vsma = data.videos3;
        let vsma2 = data.mentor3;
        
        $.each(vsma, (i, data) => {
            $("#video-list3").append(`
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

        $.each(vsma2, (i, data) => {
            $("#mentor-list3").append(`
            <div class="col-lg-2 text-center">
                <figure>
                    <img src="${data.img}" class="shadow rounded-circle img-fluid" width="150">
                    <figcaption><h3>${data.nama}</h3></figcaption>
                </figure>
            </div>
            `);
        });
    });
};
