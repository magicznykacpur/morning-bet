export interface Bet {
    id: string
    owner: string
    time: Date
}

export interface BetState {
    winner: string
    bets: Bet[]
}

export const ADD_BET = 'ADD_BET';
export const REMOVE_BET = 'REMOVE_BET';
export const SET_WINNER = 'SET_WINNER';

interface AddBetAction {
    type: typeof ADD_BET
    payload: Bet
}

interface RemoveBetAction {
    type: typeof REMOVE_BET
    betId: string
}

interface SetWinnerAction {
    type: typeof SET_WINNER
    winner: string
}

export type BetActionTypes = AddBetAction | RemoveBetAction | SetWinnerAction