import React from "react";
import PageLoading from "./components/PageLoading";
import PageError from "./components/PageError";
import UserList from "./components/UserList";

class App extends React.Component {
  state = {
    loading: true,
    error: null,
    data: null,
  };

  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      await fetch("https://0q27loouph.execute-api.us-east-1.amazonaws.com/")
        .then((res) => res.json())
        .then((res) => {
          if (this.state.data == null) {
            this.setState({ loading: false, data: [res] });
          } else {
            this.setState({ loading: false, data: [res] });
          }
        });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <div className="container">
        {" "}
        <ul>
          <UserList user={this.state.data} />
        </ul>
        <button onClick={this.fetchData}>Actualizar</button>
      </div>
    );
  }
}

export default App;
