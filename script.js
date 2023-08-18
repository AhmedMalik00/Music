let html = '';
songslist = [{
    name : 'Sohne Lagde',
    image : '1',
    time : '3:39'
},{
    name : 'Dark Love',
    image : '2',
    time : '5:05'
},{
    name : 'Dollar',
    image : '3',
    time : '2:53'
},{
    name : 'Legend',
    image : '4',
    time : '4:42'
},{
    name : 'Tibeyan Da Putt',
    image : '5',
    time : '5:54'
},{
    name : 'Dhakka',
    image : '6',
    time : '5:36'
},{
    name : 'Just Listen',
    image : '7',
    time : '4:47'
}];
songslist.forEach(function (value){
    html += `<div class="songItem">
        <img id = 'songtitle' src="./${value.image}.jpg" alt="">
        <span >${value.name}</span>
        <span class="songlistPlay">
            <span class = 'time'>${value.time}<i onclick = "playmusic('${value.image}' , '${value.name}'); settimer('${value.time}');" class="far fa-play-circle " id = 'songNo${value.image}'  class = ''></i>
            </span>
        </span>
    </div>`
});

 document.querySelector('.songList').innerHTML =('<h2>Best of Nsc -No copyright sounds</h2>' + html);


function settimer(time){
    document.querySelector('#timer1').textContent = time;
}
