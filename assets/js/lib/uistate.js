var ui = {};
ui.states = [];
ui.states.push('metrics');
ui.states.push('heartbeat');
ui.states.push('players');
ui.states.push('landing');

ui.hide = () => {
    ui.states.map((state)=>{
        $(`${state}`).hide();
    });
}
ui.hide();

ui.view = sessionStorage.getItem('view') || 'metrics';

window.onbeforeunload = ()=>{
    sessionStorage.setItem("origin", window.location.href);
}
window.onload = ()=>{
    if(window.location.href == sessionStorage.getItem("origin")){
        sessionStorage.clear();
        ui.show('landing');
    }
}

ui.show = view => {
    ui.view = view;
    window.sessionStorage.setItem('view', ui.view);
    console.log(`Updating the view to ${ui.view}`);
    ui.states.filter(function(state){
        console.log('state: ' + state + ' view: ' + ui.view);
        state === ui.view ? $(`#${state}`).show() : $(`#${state}`).hide();
    });
}

if(window.location.href.includes('access_denied')){
    window.sessionStorage.setItem('view', 'landing');
    window.location = '/Heart-BPM';
}

if(window.location.href.includes('token')){
    window.sessionStorage.setItem('ben', 'is awesome');
    window.sessionStorage.setItem('view', 'heartbeat');
    let token = window.location.hash.split('&')[0].split('=')[1];
    window.sessionStorage.setItem('token', token);
    ui.show('heartbeat');
    window.location = '/Heart-BPM';
}

if(ui.view==='landing'){
    console.log('show the default view');
    ui.show('landing');
}


if(ui.view==='heartbeat'){
    console.log('show the default view');
    ui.show('heartbeat');
}