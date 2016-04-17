const ProductHuntData = {};

ProductHuntData.request = null;

ProductHuntData.config = (config) => {
    ProductHuntData.request = config.request;
};

ProductHuntData.getItems = (callback) => {
    const baseUrl = 'https://api.producthunt.com/v1';

    ProductHuntData.request
        .get(baseUrl+'/posts')
        .set('Authorization', 'Bearer bbb38245895a24cf4a2546fa2a96a20fa8bec59badc1a327acd3b5afe449b73f')
        .end((error, response) => {
            let data = [];
            for (let product of response.body.posts) {
                data.push({
                    id:            product.id,
                    name:          product.name,
                    tagline:       product.tagline,
                    url:           product.redirect_url,
                    votesCount:    product.votes_count,
                    commentsCount: product.comments_count,
                    discussionUrl: product.discussion_url,
                });
            }
            callback(data);
        });
};

export default ProductHuntData;
