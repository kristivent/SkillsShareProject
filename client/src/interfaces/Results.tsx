interface Results {
    name: string;
    profilePic: string;
    githubUsername: string;
    githubRepos: string[];
    expertiseLevel: string;
    referenceBooks: string[];
    contactInfo: {
        email: string;
        phone?: string;
    };
}

export default Results;