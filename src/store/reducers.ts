import {Bet, BetActionTypes, BetState} from './types';

const initialState: BetState = {
    winner: '',
    bets: []
};

export function betReducer(state = initialState, action: BetActionTypes) {
    switch (action.type) {
        case 'ADD_BET':
            return {
                winner: '',
                bets: [...addBet(action.payload, state.bets)]
            };
        case 'REMOVE_BET':
            return {
                winner: '',
                bets: state.bets.filter(
                    bet => bet.id !== action.betId
                )
            };
        case 'SET_WINNER':
            return {
                winner: action.winner,
                bets: []
            };
        default:
            return state
    }
}

function addBet(newBet: Bet, bets: Array<Bet>): Array<Bet> {
    bets.push(newBet);
    return bets;
}
