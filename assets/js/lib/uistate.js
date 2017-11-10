var ui = {};
ui.states = [];
ui.states.push('metrics');
ui.states.push('heartbeat');
ui.states.push('players');
ui.states.push('landing');

ui.hide = view => {
    ui.states.map((state)=>{
        $(`${state}`).hide();
    });
}

ui.view = sessionStorage.getItem('view') || 'metrics';

window.onbeforeunload = function(){
    sessionStorage.setItem("origin", window.location.href);
}
window.onload = function(){
    if(window.location.href == sessionStorage.getItem("origin")){
        sessionStorage.clear();
        ui.show('metrics');
    }
}

ui.show = view => {
    ui.view = view;
    window.sessionStorage.setItem('view', ui.view);
    console.log(`Updating the view to ${ui.view}`);
    if(window.location.href.includes('spotifycallback')){
        window.location = '/Heart-BPM';
        ui.view = 'heartbeat';
        ui.states.filter(function(state){
            console.log('state: ' + state + ' view: ' + ui.view);
            state === ui.view ? $(`#${state}`).show() : $(`#${state}`).hide();
        });
    }
    else{
        ui.states.filter(function(state){
            console.log('state: ' + state + ' view: ' + ui.view);
            state === ui.view ? $(`#${state}`).show() : $(`#${state}`).hide();
        });
    }
}

if(window.location.href.includes('access_denied')){
    window.sessionStorage.setItem('view', 'metrics');
    window.location = '/Heart-BPM';
}

if(ui.view==='metrics'){
    console.log('show the default view');
    ui.show('metrics');
}