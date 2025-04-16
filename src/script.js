import data from './data/films.js';
const documentaryList = data.films;

function renderDocs(docs) {
  console.log(docs)
  document.getElementById("doc-grid").innerHTML = docs
    .map(doc => `
      <div class="card">
        <h3>${doc.title}</h3>
        <p>Year: ${doc.year}</p>
        <p>Director: ${doc.director}</p>
        <p>Rating: ${doc.rating}/5</p>
      </div>
    `)
    .join("");
}

function sortByRating() {
  const sorted = [...documentaryList].sort((a, b) => b.rating - a.rating);
  renderDocs(sorted);
}

function filterRecent() {
  const recent = documentaryList.filter(doc => doc.year >= 2020);
  renderDocs(recent);
}

renderDocs(documentaryList); // Initial render