require('dotenv').config();

async function getImages(query) {
    try {
        const endpoint = 'https://api.giphy.com/v1/gifs/search?api_key=flbje1DmzNYe4KXlnomw9nIIzYgQweYj&q=dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips';

        const response = await fetch(endpoint);
        const data = await response.json();

        const gif = data.data[0];
        console.log(gif);
        return gif;
    }
    catch(err) {
        console.error(err)
    }
}

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)