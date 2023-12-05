// main.js
document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const searchTerm = document.getElementById('searchInput').value;

    if (searchTerm.trim() !== '') {
        performSearch(searchTerm);
    }
});

function performSearch(searchTerm) {
    // Buat objek XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Atur metode dan URL untuk permintaan AJAX
    xhr.open('GET', `search.php?q=${searchTerm}`, true);

    // Atur callback untuk menangani respons dari server
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Ubah hasil JSON menjadi objek JavaScript
            const results = JSON.parse(xhr.responseText);

            // Tampilkan hasil pencarian
            displayResults(results);
        } else {
            console.error('Error:', xhr.status);
        }
    };

    // Kirim permintaan ke server
    xhr.send();
}

function displayResults(results) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    if (results.length > 0) {
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.textContent = result;
            searchResults.appendChild(resultItem);
        });
    } else {
        const noResults = document.createElement('p');
        noResults.textContent = 'No results found.';
        searchResults.appendChild(noResults);
    }
}