const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
        something: '',
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
        something: '',
    },
    fetchActionMovies: {
        title: 'Action Movies',
        url: `/trending/all/week?api_key=${API_KEY}&with_genres=28`,
        something: '',
    },
    fetchComdeyMovies: {
        title: 'Comedy Movies',
        url: `/trending/all/week?api_key=${API_KEY}&with_genres=35`,
        something: '',
    },
    fetchHorrorMovies: {
        title: 'Horror Movies',
        url: `/trending/all/week?api_key=${API_KEY}&with_genres=27`,
        something: '',
    },
    fetchRomanceMovies: {
        title: 'Romance Movies',
        url: `/trending/all/week?api_key=${API_KEY}&with_genres=10749`,
        something: '',
    },
    fetchMisteryMovies: {
        title: 'Mistery Movies',
        url: `/trending/all/week?api_key=${API_KEY}&with_genres=9648`,
        something: '',
    },
    fetchSciFi: {
        title: 'Sci-Fi',
        url: `/trending/all/week?api_key=${API_KEY}&with_genres=878`,
        something: '',
    },
    fetchGangsterMovies: {
        title: 'Gangster Movies',
        url: `/trending/all/week?api_key=${API_KEY}&with_genres=37`,
        something: '',
    },
    fetchAnimationMovies: {
        title: 'Animated Movies',
        url: `/trending/all/week?api_key=${API_KEY}&with_genres=16`,
        something: '',
    },
}