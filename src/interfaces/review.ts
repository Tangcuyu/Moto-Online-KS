import { RatingOptionVote } from './RatingOptionVote';

export class Review {
  id: string;
  description: string;
  locale: string;
  title: string;
  name: string;
  ratingOptionVote: RatingOptionVote;
  updatedAt: string;
}
