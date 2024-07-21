function addComment() {
    var commentText = document.getElementById('new-comment').value;
    if (commentText) {
        var commentSection = document.getElementById('comments-section');
        var newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = '<p><strong>Nuevo Usuario:</strong> ' + commentText + '</p>';
        commentSection.appendChild(newComment);
        document.getElementById('new-comment').value = '';
    }
}
