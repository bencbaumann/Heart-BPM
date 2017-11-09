var ui = {};
ui.states = [];
ui.states.push('home');
ui.states.push('metrics');
ui.states.push('heartbeat');
ui.states.push('players');
ui.states.push('landing');

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
    ui.state = 'metrics';
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
    window.location = '/Heart-BPM';
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
    window.sessionStorage.setItem('view', 'metrics');
    ui.state = 'metrics';
    $('#metrics').show();
    $('#heartbeat').hide();
    $('#players').hide();        
}

ui.show = view => {
    window.sessionStorage.setItem('view', view);
        ui.states.filter(function(state){
            state === view ? $(`#${view}`).show() : $(`#${view}`).hide();
        });
}