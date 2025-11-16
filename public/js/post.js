function viewPost(itemId) {
    window.location.href = '/view-post/' + itemId;
}

function newPost() {
    window.location.href = '/new-post';
}

function editPost(itemId) {
    window.location.href = '/edit-post/' + itemId;
}

async function updatePost(itemId) {
    const post = jsonPost();

    if (post) {
        try {
            const response = await fetch("/update/" + itemId, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(post)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            await response.json();
            alert("Successfully updated post!");
            window.location.href = "/";
        } catch (error) {
            console.error('Error during POST request:', error);
            alert("Failed to save the post, try again.");
        }
    }
}

async function addPost() {
    const post = jsonPost();

    if (post) {
        try {
            const response = await fetch("/add", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(post)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            await response.json();
            alert("Successfully created post!");
            window.location.href = "/";
        } catch (error) {
            console.error('Error during POST request:', error);
            alert("Failed to save the post, try again.");
        }
    }
}

async function deletePost(itemId) {
    try {
        const response = await fetch("/delete/" + itemId, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        await response.json();
        alert("Successfully delete post!");
        window.location.href = "/";
    } catch (error) {
        console.error('Error during DELETE request:', error);
        alert("Failed to delete the post, try again.");
    }
}

function jsonPost() {
    const titleInput = document.querySelector('[name="title"]').value;
    const contentInput = document.querySelector('[name="content"]').value;
    const thumbnailInput = document.querySelector('[name="thumbnail"]').value;
    const summaryInput = document.querySelector('[name="summary"]').value;
    let message = '';

    if (!titleInput) {
        message = getMessage("Title", message);
    }

    if (!contentInput) {
        message = getMessage("Content", message);
    }

    if (!thumbnailInput) {
        message = getMessage("Thumbnail", message);
    }

    if (!summaryInput) {
        message = getMessage("Summary", message);
    }

    if (message.length > 0) {
        alert(message);
        return;
    }

    return {
        "title": titleInput,
        "content": contentInput,
        "summary": summaryInput,
        "thumbnail": thumbnailInput,
        "date": new Date().toISOString(),
    };
}

function getMessage(field, message) {
    if (message.length < 1) {
        message += "The following fields is missing or empty:";
    }
    message += `\n ${field}`;
    return message;
}