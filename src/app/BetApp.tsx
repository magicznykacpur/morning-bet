import React from 'react';
import {ADD_BET, Bet, BetActionTypes, BetState, REMOVE_BET, SET_WINNER} from '../store/types';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

class BetApp extends React.Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = (state: BetState) => ({
    winner: state.winner,
    bets: state.bets
});

const mapDispatchToProps = (dispatch: Dispatch<BetActionTypes>) => {
    return {
        addBet: (newBet: Bet) => dispatch({type: ADD_BET, payload: newBet}),
        removeBet: (betId: string) => dispatch({type: REMOVE_BET, betId: betId}),
        setWinner: (winner: string) => dispatch({type: SET_WINNER, winner: winner})
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BetApp)