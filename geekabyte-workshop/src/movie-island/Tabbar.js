import React, {Component} from "react"

class Tabbar extends Component {
  constructor(props) {
    super(props)

    // Initial state
    this.state = { selectedType: "now_showing" }
  }

  onTabChange = (event) => {
    var selectedType = event.target.getAttribute("data-type")
    this.setState({selectedType})
  }

    render() {
      console.log(this.state)
        const { selectedType } = this.state,
  			isNowShowingSelected = selectedType === "now_showing",
        isTopRatedSelected = selectedType === "top_rated"

        return(
          <div>
            <span className="tab" data-type="now_showing" onClick={this.onTabChange} className={`tab ${isNowShowingSelected ? "selected" : ""}`}>Now Showing</span>
            <span className="tab" data-type="top_rated" onClick={this.onTabChange} className={`tab ${isTopRatedSelected ? "selected" : ""}`}>Top Rated</span>
          </div>
        )
    }
}

export default Tabbar
