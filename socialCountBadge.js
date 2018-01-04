


function get(badge) {
    var result = null;
    var url = badge.url;
    var callback = badge.callback;
    $.get(url, callback);
}

function parseHN(data) {
    console.log(data);
    badges.hn.count = data.score;
    dataToBadge(badges.hn);
}
function parseReddit(data) {
    console.log(data);
    badges.reddit.count = data[0].data.children[0].data.ups;
    dataToBadge(badges.reddit);
}
function dataToBadge(badge) {
    console.log(badge);
    var html = "";
    html += "<a target='_blank' href='" + badge.link + "'>";
    html += "<img src='" + badge.img + "' style='width:30px;' />";
    html += "<span class='scc_badge'>" + badge.count + "</span>";
    html += "</a> ";
    document.getElementById("socialCountBadge").innerHTML += html;
}

function socialCountBadge_init() {
    //create htmk badges



    //get badges data
    get(badges.hn)
    get(badges.reddit)

}

var html = "";
