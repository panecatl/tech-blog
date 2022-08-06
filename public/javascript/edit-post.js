async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').ariaValueMax.trim();
    const id = window.location.toString().split('/')[
        window.localStorage.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('edit-post-form').addEventListener('submit', editFormHandler);