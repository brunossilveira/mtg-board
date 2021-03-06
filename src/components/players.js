import React from 'react';
import Player from './player';

let Players = React.createClass({
  getInitialState: function() {
    return { players: [] }
  },
  componentDidMount: function() {
    var that = this;
		this.socket = io();
    this.socket.on('update_players', function(payload){
      that.setState({ players: payload });
    });
    this.socket.on('life_updated', function(payload){
      that.setState({ players: payload });
    });
    this.setState({ players: this.props.players });
  },
  render: function() {
    var players = this.state.players.map(function(player, k) {
      return (
        <Player key={k} color={player.color} life={player.life} name={player.name} />
      );
    });
    return (
      <div className={'row small-up-2 large-up-6'}>{players}</div>
    );
  }
});

module.exports = Players;
