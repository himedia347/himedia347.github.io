var movies = JSON.parse(data).movies;
function addRow(id, title, thumb) {
    var div = document.createElement('div');

    div.className = 'col-sm-3 my-4';

    div.innerHTML = '<div class="card">\n' +
        '    <a href="single.html?id='+id+'" title="'+title+'"><img class="card-img-top" src="portfolio/thumbs/'+thumb+'" alt="'+title+'"></a>\n' +
        '    </div>\n';

    document.getElementById('portfolio').appendChild(div);
}
for(var i = 0; i < movies.length; i++) {
    var obj = movies[i];
    addRow(obj.id, obj.title, obj.thumb)
}

