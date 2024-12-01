document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts-container');

    fetch('/posts')
        .then(response => response.json())
        .then(posts => {
            postsContainer.innerHTML = '';
            posts.forEach((post, index) => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.description}</p>
                    <p><strong>Автор:</strong> ${post.author}</p>
                    <form action="/delete-post" method="POST">
                        <input type="hidden" name="index" value="${index}">
                        <button type="submit">Видалити</button>
                    </form>
                `;
                postsContainer.appendChild(postElement);
            });
        });
});
