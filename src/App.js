import React, {Component} from 'react';
import Hotels from './components/hotels';
import FilterResults from 'react-filter-search';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
      value: ''
    };
  }

  componentWillMount() {
    fetch('https://alejocode-hotels-rest-api.herokuapp.com/hotels/list')
      .then(response => response.json())
      .then(json => this.setState({ data: json.docs }));
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

  render () {
    var { data, value = [] } = this.state;

      return (
        <div>
          <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <a class="navbar-brand" href="/">Hotels ForntEnd React App</a>

          </nav>

          <div className="container mt-5 mb-5">

            <div className="row">

              <div className="col-md-6 mt-5 mb-3"> 
              <center><h1>Hotels</h1></center>
              </div>
              <div className="col-md-6 mt-5 mb-3 pl-3"> 
              <center>
                <input class="form-control" type="text" value={value} onChange={this.handleChange} placeholder="Search" aria-label="Search"/>

              </center>
              </div>
            <div className="col-12">
              <FilterResults
                value={value}
                data={data}
                renderResults={results => (
                  <div>
                    {results.map(hotel => (
                      <div class="card mt-4">
                      <div class="card-body text-center">
                        <h5 class="card-title mb-4">{hotel.name}</h5>
                        <h6 class="card-subtitle mb-3 text-muted">{hotel.city}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">{hotel.address}</h6>
                        <p class="card-text">{hotel.stars} &#9734;</p>
                      </div>
                    </div>
                    ))}
                </div>
                )}
                />
            </div>

          </div>
        </div>
        </div>
      );
    }
}

export default App;

