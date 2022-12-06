import axios from 'axios';

const gamesApi =axios.create({
    baaseURL:'https://lonely-gold-bell-bottoms.cyclic.app'
});

export const getReviews = () => {
    return gamesApi.get('https://lonely-gold-bell-bottoms.cyclic.app/api/reviews').then(({data: {reviews}}) => {
        return reviews
    })
}