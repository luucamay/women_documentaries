const events = ["1893: Women vote in New Zealand.", "1945: WWII women change work.", "1995: Beijing women’s conference."]; // TO DO: create a two value list
document.getElementById("documentaries").innerHTML = events.map(e => `<li>${e}</li>`).join("");