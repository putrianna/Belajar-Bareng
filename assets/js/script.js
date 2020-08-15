$.getJSON('video.json', (data) =>{
    let okoc = data.videos;
    $.each(okoc, (i, data)=>{
        $('#video-list').append(`
        <div class="row justify-content-center pt-5 pb-5 font-cal" id="kelas${data.kelas}">
            <figure class="text-center">
                <iframe width="560" height="315" src="${data.video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <figcaption><h3>Materi SD Kelas ${data.kelas}</h3></figcaption>
            </figure>
        </div>
        `)
    })
})