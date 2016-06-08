import moment from 'moment';

const HackerNewsData = {};

HackerNewsData.request = null;

HackerNewsData.config = (config) => {
    HackerNewsData.request = config.request;
    return HackerNewsData;
};

HackerNewsData.get = (callback) => {

    const baseUrl = 'https://hacker-news.firebaseio.com/v0';

    HackerNewsData.request
        .get(baseUrl+'/topstories.json')
        .end((error, response) => {
            let stories = response.body.slice(0, 30); // grab 30 items
            let data = [];
            let index = 1;

            for (let storyId of stories) {
                const apiUrl = baseUrl+'/item/'+storyId+'.json';
                const cachedIndex = index;

                HackerNewsData.request.get(apiUrl).end((error, response) => {
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

export default HackerNewsData;
