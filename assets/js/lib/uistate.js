var ui = {};

window.onbeforeunload = function(){
    sessionStorage.setItem("origin", window.location.href);
}
window.onload = function(){
    if(window.location.href == sessionStorage.getItem("origin")){
        sessionStorage.clear();
        ui.showHome();
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

ui.showHeartbeat = () => {
    window.sessionStorage.setItem('view', 'heartbeat');
    window.location = '\';
    ui.state = 'heartbeat';
    $('#metrics').hide();
    $('#players').hide();
    $('#heartbeat').show();    
}

ui.showPlayers = () => {
    window.sessionStorage.setItem('view', 'players');
    ui.state = 'players';
    $('#metrics').hide();
    $('#heartbeat').hide();
    $('#players').show();        
}

ui.showHome = () => {
    window.sessionStorage.setItem('view', 'home');
    ui.state = 'home';
    $('#metrics').show();
    $('#heartbeat').hide();
    $('#players').hide();        
}