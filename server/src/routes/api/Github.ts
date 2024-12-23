// This file contains the routes for the Github  API. we will pass a username from the DB and fetch the user's data from the Github API.
import { Request, Response } from 'express';


export const githubuserapi = async (req: Request, res: Response) => {
  const { username } = req.params;
  console.log('username:', username);
  if (!username) {
    return res.status(400).json({ message: 'username is required' });
  }
  try {
    console.log('GitHUb API Key:', process.env.GIT_HUB_API_KEY);
    console.log('username:', username);
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${process.env.GIT_HUB_API_KEY}`,
      },
    });
    console.log('response:', response);
    const data = await response.json();
    if (!response.ok) {
      console.error('GIT API Error:', await response.text());
      throw new Error("Invalid API response, check the network tab");
    }
    return res.json(data); // Send the fetched data as the response
  } catch (err) {
    console.error("Error fetching Google Books data:", err);
    console.log('subject:', username);
    return {};
  }
};


