const renderPage3 = () =>{
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
                    <img src="./assets/images/icon-SMP.png" class="img-fluid">
                </div>
            </div>
        </section>
        <section id="video" class="mt-100 pt-150 mg-0 pt-50" style="overflow: hidden;">
            <h1 class="text-center font-dej">Kategori SMP</h1>
            <div id="video-list2"></div>
        </section>
    </div>
    <aside class="pt-100 pb-100">
        <section class="container-fluid pt-50 pb-50">
            <h1 class="text-center font-dej">Mentor</h1>
            <div id="mentor-list2"></div>
        </section>
    </aside>
    `);

    getData3();
}

const getData3 = () => {
    $.getJSON("./assets/js/video.json", (data) => {
        let vsmp = data.videos2;
        let vsmp2 = data.mentor2;

        $.each(vsmp, (i, data) => {
            $("#video-list2").append(`
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
        

        $.each(vsmp2, (i, data) => {
            $("#mentor-list2").append(`
                <div class="row text-center justify-content-center font-dej">
                    <div class="col-md-3"> 
                        <img src="${data.img}" class="rounded-circle img-fluid" width="150">
                        <figcaption><h1>${data.nama}</h1></figcaption>
                    </div>
                </div>
            `);
        });
    });
};

$('#smp').on('click', () =>{
    renderPage3();
})