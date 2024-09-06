let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #6C3483;">Estudiante de M.C.I.MC, Ingeniera Industrial y docente.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
