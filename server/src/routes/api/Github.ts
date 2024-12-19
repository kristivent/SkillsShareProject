//import fetch from 'node-fetch';

const fetchGithubData = async (username: string) => {
    try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);

        if (!userResponse.ok || !reposResponse.ok) {
            throw new Error("Invalid API response, check the network tab");
        }

        const userData = await userResponse.json();
        const reposData = await reposResponse.json();

        const result = {
            username: userData.login,
            profilePic: userData.avatar_url,
            repos: reposData.map((repo: any) => repo.name)
        };

        return result;
    } catch (error) {
        console.error("Error fetching data from GitHub:", error);
        return {};
    }
};

export { fetchGithubData };