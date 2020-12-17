import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    url: this.props.pokemonData.sprites.front,
  };

  handleClick = () => {
    this.setState({
      url:
        this.state.url === this.props.pokemonData.sprites.front
          ? this.props.pokemonData.sprites.back
          : this.props.pokemonData.sprites.front,
    });
  };

  render() {
    const { name, hp, sprites } = this.props.pokemonData;
    return (
      <Card onClick={() => this.handleClick()}>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.url} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
