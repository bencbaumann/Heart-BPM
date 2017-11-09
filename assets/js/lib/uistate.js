var ui = {};
ui.states = [];
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
        ui.show('metrics');
    }
}

ui.show = view => {
    console.log(`Updating the view to ${view}`);
    if(window.location.href.includes('spotifycallback')){
        window.location = '/Heart-BPM';
    };
    
    window.sessionStorage.setItem('view', view);
        ui.states.filter(function(state){
            console.log('state: ' + state + ' view: ' + view);
            state === view ? $(`#${state}`).show() : $(`#${state}`).hide();
        });
}