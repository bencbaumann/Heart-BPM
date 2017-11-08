var ui = {};

window.onbeforeunload = function(){
    sessionStorage.setItem("origin", window.location.href);
}
window.onload = function(){
    if(window.location.href == sessionStorage.getItem("origin")){
        sessionStorage.clear();
    }
}

if(!window.sessionStorage.getItem('view')){
    ui.state = 'home';
    $('#heartbeat').hide();
    $('#players').hide();
    $('#metrics').show();
}
if(window.sessionStorage.getItem('view')==='heartbeat'){
    ui.state = 'heartbeat';
    $('#metrics').hide();
    $('#players').hide();
    $('#heartbeat').show();
}
if(window.sessionStorage.getItem('view')==='players'){
    ui.state = 'players';
    $('#metrics').hide();
    $('#heartbeat').hide();
    $('#players').show();
}
