function describeMovieQuality(rating) {
    if (rating > 8) {
        return 'The movie is fantastic!';
    } else if (rating > 5) {
        return 'The movie is decent.';
    } else {
        return 'The movie could be better.';
    }
}

const sampleRating = 7;
const description = describeMovieQuality(sampleRating);
console.log(`For a rating of ${sampleRating}, ${description}`);
