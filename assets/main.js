const API = 'https://youtube-v3-alternative.p.rapidapi.com/channel?id=UCzMGZKJr1cM4f8B6f0-CRUw';

    const content = null || document.getElementById('content');
     
  const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "96a11516ddmshf51e0dd779919b0p1e5534jsnd5e44f4d9c4c",
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
  },
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    
    let view = `
            ${videos.data.map(
              (video) => `
            
            <div class="group relative">
            <div
              class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
              <img src="${video.thumbnail[0].url}" alt="${video.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
              <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.title}
              </h3>
            </div>
          </div>
            `).slice(0,4).join('')}
            `;
            content.innerHTML = view;
  } catch (error) {
    throw new Error('Error al cargar la data')
  }
})();


// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
