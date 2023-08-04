document.getElementById('findButton').addEventListener('click', function() {
  const url = document.getElementById('urlInput').value;
  if (!url) {
    alert('Please enter a valid URL.');
    return;
  }

  fetch(url)
    .then(response => response.text())
    .then(data => {
      const sourceCodeDisplay = document.getElementById('sourceCodeDisplay');
      sourceCodeDisplay.textContent = data;
      sourceCodeDisplay.classList.remove('hidden');
      document.querySelector('.code-viewer-container').classList.remove('hidden');
      document.getElementById('copyButton').classList.remove('hidden');
    })
    .catch(error => {
      alert('An error occurred while fetching the source code.');
      console.error(error);
    });
});

document.getElementById('copyButton').addEventListener('click', function() {
  const sourceCodeDisplay = document.getElementById('sourceCodeDisplay');
  const codeToCopy = sourceCodeDisplay.textContent;

  const textarea = document.createElement('textarea');
  textarea.value = codeToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  alert('Code copied to clipboard!');
});
