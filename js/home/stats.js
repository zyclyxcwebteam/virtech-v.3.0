var projects = document.getElementById("projects");
var process = document.getElementById("process");
var clients = document.getElementById("clients");
var number = {projects:0,process:0,clients:0};
var duration = 2.5;

function count() {
  TweenLite.to(number, duration, {projects:"+=40", roundProps:"projects", onUpdate:update, onComplete:complete, ease:Linear.easeNone});
  TweenLite.to(number, duration, {process:"+=100", roundProps:"process", onUpdate:update, onComplete:complete, ease:Linear.easeNone});
  TweenLite.to(number, duration, {clients:"+=20", roundProps:"clients", onUpdate:update, onComplete:complete, ease:Linear.easeNone});
}
		
function update() {
  projects.innerHTML = number.projects;
  process.innerHTML = number.process;
  clients.innerHTML = number.clients;
}

function complete() {
  //alert("Complete");   
}

// count();
let controller = new ScrollMagic.Controller({container:'#scrollContainer'});
new ScrollMagic.Scene({
    triggerElement: "#statsCounter",
    triggerHook: 0.8
  }) 
    .on('start',function(){
        count()
    })
    .reverse(false)   
    .addIndicators({ name: "counter" })     
    .addTo(controller);

