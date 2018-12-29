(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var name in names) {
      var firstLetter = names[name].charAt(0);
      var inLowerCase = firstLetter.toLowerCase();
      if (inLowerCase==="j") {
        byeSpeaker.speak(names[name]); // byeSpeaker.xxxx
        } else {
        helloSpeaker.speak(names[name]);// helloSpeaker.xxxx
        }
      }
}) ();
