const GitHubData = {};

GitHubData.request = null;

GitHubData.config = (config) => {
    GitHubData.request = config.request;
};

GitHubData.getItems = (callback) => {
    const baseUrl = 'https://wrapapi.com/use/sunnysingh/github/trending/0.0.3?wrapAPIKey=vZpCx0QXD65gAcUD4Q7gAL6y0GQB1pgT';

    GitHubData.request
        .get(baseUrl)
        .end((error, response) => {
            let data = [];
            for (let repo of response.body.data.repositories) {
                data.push({
                    url: 'https://github.com'+repo.url,
                    user: repo.url.split('/')[1],
                    name: repo.url.split('/')[2],
                    description: repo.description ? repo.description.trim() : null,
                    stars: parseInt(repo.stars),
                    language: repo.language ? repo.language.trim() : null,
                });
            }
            callback(data);
        });
};

export default GitHubData;
