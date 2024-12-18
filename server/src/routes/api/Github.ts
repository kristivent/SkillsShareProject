import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/github/:username', async (req, res) => {
    const { username } = req.params;

    try {
        const userResponse = await axios.get(`https://api.github.com/users/${username}`);
        const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);

        const userData = userResponse.data;
        const reposData = reposResponse.data;

        const result = {
            username: userData.login,
            profilePic: userData.avatar_url,
            repos: reposData.map((repo: any) => repo.name)
        };

        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data from GitHub' });
    }
});

export default router;