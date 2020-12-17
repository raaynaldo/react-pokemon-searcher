import React from "react";
import { Form } from "semantic-ui-react";

class PokemonForm extends React.Component {
  constructor() {
    super();

    this.state = this.getInitialState();
  }

  getInitialState = () => ({ name: "", hp: "", frontUrl: "", backUrl: "" });

  inputChangeHandler = (e, { name, value }) =>
    this.setState({
      [name]: value,
    });

  submitChangeHandler = async (event) => {
    event.preventDefault();
    const { name, hp, backUrl, frontUrl } = this.state;

    const url = "http://localhost:3000/pokemon";
    const data = {
      name: name,
      hp: hp,
      sprites: {
        front: frontUrl,
        back: backUrl,
      },
    };
    const reqObj = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch(url, reqObj)
      .then((res) => res.json())
      .then((pokemon) => this.props.addPokemon(pokemon))
      .catch((error) => console.error(error));

    this.setState(this.getInitialState());
  };

  render() {
    const { name, hp, backUrl, frontUrl } = this.state;
    const { inputChangeHandler, submitChangeHandler } = this;

    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form
          onSubmit={(event) => submitChangeHandler(event)}
        >
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name"
              placeholder="Name"
              name="name"
              value={name}
              onChange={inputChangeHandler}
            />
            <Form.Input
              fluid
              label="hp"
              placeholder="hp"
              name="hp"
              value={hp}
              onChange={inputChangeHandler}
            />
            <Form.Input
              fluid
              label="Front Image URL"
              placeholder="url"
              name="frontUrl"
              value={frontUrl}
              onChange={inputChangeHandler}
            />
            <Form.Input
              fluid
              label="Back Image URL"
              placeholder="url"
              name="backUrl"
              value={backUrl}
              onChange={inputChangeHandler}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default PokemonForm;
