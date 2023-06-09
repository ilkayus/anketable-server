import { Nominations, Rankings, Results } from '../types/polls.types';

export default (
  rankings: Rankings,
  nominations: Nominations,
  votesPerVoter: number,
): Results => {
  // 1. Each value of `rankings` key values is an array of a participants'
  // vote. Points for each array element corresponds to following formula:
  // r_n = ((votesPerVoter - 0.5*n) / votesPerVoter)^(n+1), where n corresponds
  // to array index of rankings.
  // Accumulate score per nominationID
  const scores: { [nominationID: string]: number } = {};
  const votesArray: {
    [nominationID: string]: [number, number, number, number, number];
  } = {};
  Object.keys(nominations).forEach((nomination) => {
    votesArray[nomination] = [0, 0, 0, 0, 0];
    scores[nomination] = 0;
  });
  Object.values(rankings).forEach((userRankings) => {
    userRankings.forEach((nominationID, n) => {
      const voteValue = Math.pow(
        (votesPerVoter - 0.5 * n) / votesPerVoter,
        n + 1,
      );
      votesArray[nominationID][n] = votesArray[nominationID][n] + 1;
      scores[nominationID] = scores[nominationID] + voteValue;
    });
  });

  // 2. Take nominationID to score mapping, and merge in nominationText
  // and nominationID into value
  const results = Object.entries(scores).map(([nominationID, score]) => ({
    nominationID,
    nominationText: nominations[nominationID].text,
    score,
    votes: votesArray[nominationID],
  }));

  // 3. Sort values by score in descending order
  results.sort((res1, res2) => res2.score - res1.score);
  return results;
};
