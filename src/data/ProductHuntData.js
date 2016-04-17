const ProductHuntData = {};

ProductHuntData.request = null;

ProductHuntData.config = (config) => {
    ProductHuntData.request = config.request;
};

ProductHuntData.getItems = (callback) => {
    const baseUrl = 'https://wrapapi.com/use/sunnysingh/producthunt/todaytech/0.0.2?wrapAPIKey=vZpCx0QXD65gAcUD4Q7gAL6y0GQB1pgT';

    ProductHuntData.request
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

// Directly using Product Hunt API. Issues on Safari.
//
// ProductHuntData.getItems = (callback) => {
//     const baseUrl = 'https://api.producthunt.com/v1';
//
//     ProductHuntData.request
//         .get(baseUrl+'/posts')
//         .set('Authorization', 'Bearer bbb38245895a24cf4a2546fa2a96a20fa8bec59badc1a327acd3b5afe449b73f')
//         .end((error, response) => {
//             let data = [];
//             for (let product of response.body.posts) {
//                 data.push({
//                     id:            product.id,
//                     name:          product.name,
//                     tagline:       product.tagline,
//                     url:           product.redirect_url,
//                     votesCount:    product.votes_count,
//                     commentsCount: product.comments_count,
//                     discussionUrl: product.discussion_url,
//                 });
//             }
//             callback(data);
//         });
// };

export default ProductHuntData;
