import { Socket } from 'socket.io';
import { PollAuthPayload } from '../polls/types/polls.types';
export type SocketWithAuth = Socket & PollAuthPayload;
