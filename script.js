const documentaries = [
  { title: "Women Rising", year: 2020, director: "Jane Doe", rating: 4.5 },
  { title: "Equal Voices", year: 2015, director: "Sam Lee", rating: 3.8 },
  { title: "Breaking Barriers", year: 2023, director: "Alex Kim", rating: 4.8 }
];

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
  const sorted = [...documentaries].sort((a, b) => b.rating - a.rating);
  renderDocs(sorted);
}

function filterRecent() {
  const recent = documentaries.filter(doc => doc.year >= 2020);
  renderDocs(recent);
}

renderDocs(documentaries); // Initial render