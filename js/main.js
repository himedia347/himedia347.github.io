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
    $('body').load('single.html');
}
var movies = JSON.parse(data).movies;
for(var i = 0; i < movies.length; i++) {
    var obj = movies[i];
    console.log(obj);
    addRow(obj.id, obj.title, obj.thumb, obj.movie)
}

