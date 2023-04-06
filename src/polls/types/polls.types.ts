export type CreatePollFields = {
  topic: string;
  votesPerVoter: number;
  name: string;
};

export type JoinPollFields = {
  pollID: string;
  name: string;
};

export type RejoinPollFields = {
  pollID: string;
  userID: string;
  name: string;
};

export type CreatePollData = {
  pollID: string;
  topic: string;
  votesPerVoter: number;
  userID: string;
};

export type AddParticipantData = {
  pollID: string;
  userID: string;
  name: string;
};

export type Participants = {
  [participantID: string]: string;
};

export type Nomination = {
  userID: string;
  text: string;
};

type NominationID = string;

export type Nominations = {
  [nominationID: NominationID]: Nomination;
};

export type Rankings = {
  [userID: string]: NominationID[];
};

export type Results = Array<{
  nominationID: NominationID;
  nominationText: string;
  score: number;
  votes: [number, number, number, number, number];
}>;

export type Poll = {
  id: string;
  topic: string;
  votesPerVoter: number;
  participants: Participants;
  adminID: string;
  nominations: Nominations;
  rankings: Rankings;
  showResults: boolean;
  results: Results;
  hasStarted: boolean;
  hasEnded: boolean;
};
export type AddParticipantFields = {
  pollID: string;
  userID: string;
  name: string;
};

export type AddParticipantRankingsData = {
  pollID: string;
  userID: string;
  rankings: string[];
};

export type AddNominationData = {
  pollID: string;
  nominationID: string;
  nomination: Nomination;
};

export type AddNominationFields = {
  pollID: string;
  userID: string;
  text: string;
};

export type SubmitRankingsFields = {
  pollID: string;
  userID: string;
  rankings: string[];
};

export type PollAuthPayload = {
  userID: string;
  pollID: string;
  name: string;
};

export type PollRequestWithAuth = Request & PollAuthPayload;
