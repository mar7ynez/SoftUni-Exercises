function solution(command) {
    let result = [];

    switch (command) {
        case 'upvote': this.upvotes++; break;
        case 'downvote': this.downvotes++; break;
        case 'score': result = getScore.call(this); break;
    }
    function getScore() {
        let positive = this.upvotes;
        let negative = this.downvotes;
        let totalScore = positive + negative;
        let score = positive - negative;
        
        if (totalScore > 50) {
            let greaterValueRoundUp = Math.ceil(Math.max(positive, negative) * 0.25);
            positive += greaterValueRoundUp;
            negative += greaterValueRoundUp;
        }

        let rating = 'new';

        if (totalScore < 10) {
            rating = 'new';
        } else if (this.upvotes > totalScore * 0.66) {
            rating = 'hot';
        } else if (score >= 0 && totalScore > 100) {
            rating = 'controversial';
        } else if (score < 0) {
            rating = 'unpopular';
        }
        return [positive, negative, score, rating];
    }
    return result;
}
let post = {
    id: '2',
    author: 'gosho',
    content: 'whats up?',
    upvotes: 120,
    downvotes: 30
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
solution.call(post, 'downvote');         // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']