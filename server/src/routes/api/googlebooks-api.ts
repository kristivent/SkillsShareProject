// This file contains the routes for the Google Books API.
import { Request, Response } from 'express';


export const searchGoogleBooksapi = async (req: Request, res: Response) => {
  const { subject } = req.query; // Retrieve the subject from the query string

  if (!subject) {
    return res.status(400).json({ message: 'Subject is required' });
  } 
  try {
    console.log('Google Books API Key:', process.env.GOOGLE_BOOKS_API_KEY);
    console.log('subject:', subject);
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${subject}&key=${process.env.GOOGLE_BOOKS_API_KEY}`
      );
      const url = `https://www.googleapis.com/books/v1/volumes?q=${subject}&key=${process.env.GOOGLE_BOOKS_API_KEY}`
console.log('Google Books API URL:', url);
     // console.log('response:', response);
      const data = await response.json();
      if (!response.ok) {
        console.error('Google Books API Error:', await response.text());
        throw new Error("Invalid API response, check the network tab");
      }
      return res.json(data); // Send the fetched data as the response
    } catch (err) {
      console.error("Error fetching Google Books data:", err);
      console.log('subject:', subject);
      console.log('Google Books API Key:', process.env.GOOGLE_BOOKS_API_KEY);
      console.log('.......................');
      return {};
    }
  };
  

    