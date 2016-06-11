import request from 'superagent';
import requestCache from 'superagent-cache';
import moment from 'moment';

// Cache Ajax requests
requestCache(request, {
    storage: 'local', // localStorage
    defaultExpiration: 3600, // 1 hour
});

export const hackernews = (callback) => {

    const baseUrl = 'https://hacker-news.firebaseio.com/v0';

    request
        .get(baseUrl+'/topstories.json')
        .end((error, response) => {
            let stories = response.body.slice(0, 30); // grab 30 items
            let data = [];
            let index = 1;

            for (let storyId of stories) {
                const apiUrl = baseUrl+'/item/'+storyId+'.json';
                const cachedIndex = index;

                request.get(apiUrl).end((error, response) => {
                    data.push({
                        id: response.body.id,
                        title: response.body.title,
                        by: response.body.by,
                        url: response.body.url,
                        points: response.body.score,
                        commentCount: response.body.descendants,
                        ago: moment.unix(response.body.time).fromNow(),
                    });

                    if (cachedIndex === stories.length) {
                        callback(data);
                    }
                });

                index++;
            }
        });
};

export const github = (callback) => {
    const baseUrl = 'https://wrapapi.com/use/sunnysingh/github/trending/0.0.3?wrapAPIKey=vZpCx0QXD65gAcUD4Q7gAL6y0GQB1pgT';

    request
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

export const producthunt = (callback) => {
    const baseUrl = 'https://wrapapi.com/use/sunnysingh/producthunt/todaytech/0.0.2?wrapAPIKey=vZpCx0QXD65gAcUD4Q7gAL6y0GQB1pgT';

    request
        .get(baseUrl)
        .end((error, response) => {
            let data = [];
            for (let product of response.body.data.posts) {
                data.push({
                    id:            product.id,
                    name:          product.name,
                    tagline:       product.tagline,
                    url:           'https://www.producthunt.com'+product.shortened_url,
                    votesCount:    product.vote_count,
                    commentsCount: product.comment_count,
                    discussionUrl: 'https://www.producthunt.com'+product.url,
                });
            }
            callback(data);
        });
};
