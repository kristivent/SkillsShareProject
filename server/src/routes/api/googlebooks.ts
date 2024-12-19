// This file contains the routes for the Google Books API.



const searchGoogleBooks = async (subject: string) => {
    try {
     
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${subject}&key=${process.env.GOOGLE_BOOK_API_KEY}`
      );
  
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Invalid API response, check the network tab");
      }
      return data;
    } catch (err) {
      console.error("Error fetching Google Books data:", err);
      return {};
    }
  };
  
  export { searchGoogleBooks };
    