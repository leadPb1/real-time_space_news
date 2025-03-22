document.getElementById('refresh-btn').addEventListener('click', fetchSpaceNews);

function fetchSpaceNews() {
  const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const image = data.url;
      const title = data.title;
      const explanation = data.explanation;

      document.getElementById('image').src = image;
      document.getElementById('title').innerText = title;
      document.getElementById('explanation').innerText = explanation;
    })
    .catch(error => console.error('Error fetching space news:', error));
}

// 처음 로딩될 때 한 번 데이터를 가져옴
fetchSpaceNews();