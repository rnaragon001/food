import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer umRWePwKdgPXrZeVZbI_kG2ByXr79uzNjeyA0sr34i5HBYiiUUwu-ggVjo-bkiY5RxuLqSr_2stXzDeWJr3AGQgtKuQyV_XhcNgKzuUbPbIn0MGK6k9vcjCrsLjUXXYx',
    }
})