import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    search: "",
    // filterPokemon: [],
  };

  async componentDidMount() {
    const res = await fetch("http://localhost:3000/pokemon");
    const pokemons = await res.json();

    this.setState({ pokemons, filterPokemon: pokemons });
  }

  searchPokemon = (pokemonName) => {
    this.setState({
      search: pokemonName,
    });
  };

  addPokemon = (pokemon) => {
    this.setState({
      pokemons: [...this.state.pokemons, pokemon],
    });
  };

  render() {
    const renderPokemon = this.state.pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(this.state.search.toLowerCase())
    );
    
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search searchPokemon={this.searchPokemon} />
        <br />
        <PokemonCollection pokemons={renderPokemon} />
      </Container>
    );
  }
}

export default PokemonPage;

//PokemonPage
//PokemonForm
//Search
//PokemonCollection
//PokemonCard
