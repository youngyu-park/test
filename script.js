// Fetch the Markdown file and render it
fetch('README.md')
    .then(response => response.text())
    .then(text => {
        // Convert Markdown to HTML and insert it into the page
        document.getElementById('markdown-content').innerHTML = marked(text);
    })
    .catch(error => console.error('Error fetching the Markdown file:', error));
