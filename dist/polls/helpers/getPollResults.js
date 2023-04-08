"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (rankings, nominations, votesPerVoter) => {
    const scores = {};
    const votesArray = {};
    Object.keys(nominations).forEach((nomination) => {
        votesArray[nomination] = [0, 0, 0, 0, 0];
        scores[nomination] = 0;
    });
    Object.values(rankings).forEach((userRankings) => {
        userRankings.forEach((nominationID, n) => {
            const voteValue = Math.pow((votesPerVoter - 0.5 * n) / votesPerVoter, n + 1);
            votesArray[nominationID][n] = votesArray[nominationID][n] + 1;
            scores[nominationID] = scores[nominationID] + voteValue;
        });
    });
    const results = Object.entries(scores).map(([nominationID, score]) => ({
        nominationID,
        nominationText: nominations[nominationID].text,
        score,
        votes: votesArray[nominationID],
    }));
    results.sort((res1, res2) => res2.score - res1.score);
    return results;
};
//# sourceMappingURL=getPollResults.js.map