import request from 'superagent';
import localforage from 'localforage';
import moment from 'moment';

const expiresDuration = 30;
const expiresUnit = 'minutes';

const wrapApiKey = 'vZpCx0QXD65gAcUD4Q7gAL6y0GQB1pgT';

export const hackernews = (callback) => {

    const baseUrl = 'https://hacker-news.firebaseio.com/v0';

    localforage.getItem('hackernews').then((cache) => {
        if (cache) {
            const notExpired = moment().diff(cache.expires) < 0;
            if (notExpired) {
                callback(cache.data);
                return;
            }
        }

        request
            .get(baseUrl+'/topstories.json')
            .end((error, response) => {
                let stories = response.body.slice(0, 30); // grab 30 items
                let data = [];
                let index = 0;

                for (let storyId of stories) {
                    const apiUrl = baseUrl+'/item/'+storyId+'.json';
                    const cachedIndex = index + 1;

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
                            localforage.setItem('hackernews', {
                                expires: moment().add(expiresDuration, expiresUnit).valueOf(),
                                data
                            });
                            callback(data);
                        }
                    });

                    index++;
                }
            });
    });

};

export const github = (callback) => {

    const baseUrl = 'https://wrapapi.com/use/sunnysingh/github/trending/0.0.3?wrapAPIKey='+wrapApiKey;

    localforage.getItem('github').then((cache) => {
        if (cache) {
            const notExpired = moment().diff(cache.expires) < 0;
            if (notExpired) {
                callback(cache.data);
                return;
            }
        }

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

                localforage.setItem('github', {
                    expires: moment().add(expiresDuration, expiresUnit).valueOf(),
                    data
                });

                callback(data);
            });
    });

};

export const producthunt = (callback) => {

    const baseUrl = 'https://wrapapi.com/use/sunnysingh/producthunt/todaytech/0.0.2?wrapAPIKey='+wrapApiKey;

    localforage.getItem('producthunt').then((cache) => {
        if (cache) {
            const notExpired = moment().diff(cache.expires) < 0;
            if (notExpired) {
                callback(cache.data);
                return;
            }
        }

        request
            .get(baseUrl)
            .end((error, response) => {
                let data = [];
                for (let product of response.body.data.posts) {
                    data.push({
                        id: product.id,
                        name: product.name,
                        tagline: product.tagline,
                        url: 'https://www.producthunt.com'+product.shortened_url,
                        votesCount: product.vote_count,
                        commentsCount: product.comment_count,
                        discussionUrl: 'https://www.producthunt.com'+product.url,
                    });
                }

                localforage.setItem('producthunt', {
                    expires: moment().add(expiresDuration, expiresUnit).valueOf(),
                    data
                });

                callback(data);
            });
    });

};
