fetch('books.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('book-collection');
        
        data.forEach(book => {
            const card = document.createElement('div');
            card.classList.add('card');
            
            card.innerHTML = `
                <img src="images/${book.cover}" alt="${book.title}">
                <h2>${book.title}</h2>
                <h3>by ${book.author}</h3>
                <p>${book.description}</p>
                <p class="price">$${book.price.toFixed(2)}</p>
            `;
            
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading JSON data:', error));
