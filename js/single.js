var movies = JSON.parse(data).movies;
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function loadVid(){
    var id = getUrlParameter('id');
    var movie = movies[id-1];
        var video = document.createElement('div');
    video.poster=movie.thumb;
    video.innerHTML = ' <video id="video" poster="portfolio/thumbs/'+movie.thumb+'" id="vid" width="100%"controls playsinline controlsList="nodownload">\n'+
        '<source src="portfolio/vid/'+movie.movie+'" type="video/mp4">\n'+
        '</video>\n';
    document.getElementById('vid').appendChild(video);
    $("#title").text(movie.title);
    $("#desc").html(movie.desc);
}

$( document ).ready(loadVid());
var video = document.getElementById('video');
video.addEventListener('click',function(){
    this.paused?this.play():this.pause();;
},false);
