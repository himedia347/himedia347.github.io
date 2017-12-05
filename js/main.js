var movies = JSON.parse(data).movies;
function addRow(id, title, thumb, movie) {
    var div = document.createElement('div');

    div.className = 'col-sm-3 my-4';

    div.innerHTML = '<div class="card">\n' +
        '    <a onclick="loadVid('+id+');"><img class="card-img-top" src="portfolio/thumbs/'+thumb+'" alt="'+title+'"></a>\n' +
        '    </div>';

    document.getElementById('portfolio').appendChild(div);
}
function loadVid(id){
    console.log(id);
    var movie = movies[id-1];
    $('body').load('https://himedia347.github.io/single.html');
    var video = document.createElement('div');
    video.poster=movie.thumb;
    video.innerHTML = ' <video poster="portfolio/thumbs/'+movie.thumb+'" id="vid" playsinline>\n'+
    '<source src="portfolio/vid/'+movie.movie+'" type="video/mp4">\n'+
    '</video>\n';
    document.getElementById('vid').appendChild(video)
}
for(var i = 0; i < movies.length; i++) {
    var obj = movies[i];
    console.log(obj);
    addRow(obj.id, obj.title, obj.thumb, obj.movie)
}

