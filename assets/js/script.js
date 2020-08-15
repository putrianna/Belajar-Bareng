const getData = () => {
    $.getJSON("./assets/js/video.json", (data) => {
        let okoc = data.videos;
        let okoc2 = data.mentor;
        let vsmp = data.videos2;
        let vsmp2 = data.mentor2;
        let vsma = data.videos3;
        let vsma2 = data.mentor3;
        
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

getData();
