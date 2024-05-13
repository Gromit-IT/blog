function displayText() {
  let singer = document.getElementById("singer").value;
  let music = document.getElementById("music").value;
  let link = document.getElementById("link").value;

  let outputText = "가수: " + singer + "<br>";
  outputText += "노래제목: " + music + "<br>";
  outputText += 'URL: <a href="' + link + '">' + link + "</a><hr>";

  let output1 = document.getElementById("output").innerHTML;
  document.getElementById("output").innerHTML = output1 + outputText;
}
