import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import ApolloClient from "apollo-boost";

// Replace the previous LambdaDemo with the code below:
// const client = new ApolloClient({
//   uri: "/.netlify/functions/graphql",
// });
const client = new ApolloClient({
  uri: "http://localhost:3000/.netlify/functions/graphql",
});

const APOLLO_QUERY = gql`
  {
    hello
  }
`;
const LambdaDemo = () => (
  <ApolloProvider client={client}>
    <Query query={APOLLO_QUERY}>
      {({ data, loading, error }) => {
        if (loading) return <span>Loading...</span>;
        if (error) return <p>Error: {error.message}</p>;
        return <div>A greeting from the server: {data.hello}</div>;
      }}
    </Query>
  </ApolloProvider>
);

// class LambdaDemo extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { loading: false, msg: null }
//   }

//   handleClick = api => e => {
//     e.preventDefault()

//     this.setState({ loading: true })
//     fetch("/.netlify/functions/" + api)
//       .then(response => response.json())
//       .then(json => this.setState({ loading: false, msg: json.msg }))
//   }

//   render() {
//     const { loading, msg } = this.state

//     return (
//       <p>
//         <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
//         <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
//         <br />
//         <span>{msg}</span>
//       </p>
//     )
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          4
          <LambdaDemo />
        </header>
      </div>
    );
  }
}

export default App;
