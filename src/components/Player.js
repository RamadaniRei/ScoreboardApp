import React, { PureComponent } from "react";
import Icon from "./Icon";
import Counter from "./Counter";

export class Player extends PureComponent {
  render() {
    const { name, id, score, removePlayer, changeScore, isHighScore, index } =
      this.props;
    return (
      <div className="player">
        <div className="player-name">
          <button onClick={() => removePlayer(id)} className="remove-player">
            X
          </button>
          <Icon isHighScore={isHighScore} />
          {name}
        </div>
        <div className="player-score">
          <Counter score={score} index={index} changeScore={changeScore} />
        </div>
      </div>
    );
  }
}

export default Player;
