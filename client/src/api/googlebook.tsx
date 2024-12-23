import Auth from '../utils/auth'; 
console.log('Auth.getToken():', Auth.getToken());

// This function fetches data from your API and returns the Google Books data
const searchGoogleBooks = async (subject: string) => {
  try {
    const response = await fetch(`/api/googlebooks?subject=${encodeURIComponent(subject)}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Auth.getToken()}`, 
      },
    });

    const data = await response.json();

    
    if (!response.ok) {
      throw new Error('Invalid API response, check the network tab!');
    }

    return data; // Return the response data
  } catch (err) {
    console.error('Error fetching Google Books data: ', err);
    return []; // Return an empty array if there’s an error
  }
};

export { searchGoogleBooks };