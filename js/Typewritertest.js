var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Larry Daniels')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Developer')
    .pauseFor(2500)
    .deleteChars(9)
    .typeString('Designer')
    .pauseFor(2500)
    .start();