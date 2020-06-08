import React from 'react';
import './tour.scss';


export default class Tour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false
    }
  }

  handleShowInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    })
  }

  render() {
    const { img, id, name, city, info } = this.props.tourItem;
    const { handleCloseBtnClick } = this.props;
    return (
      <section className="tour-details-section">
        <div className="tour-main-image">
          <img src={img} alt="destination image" />
          <span>
            <i className="fas fa-window-close" onClick={() => handleCloseBtnClick(id)}></i>
          </span>
        </div>


        <div className="tour-info">
          <h3>{name}</h3>
          <h4>{city}</h4>

          <h5>{"info"} <i className="fas fa-caret-square-down" onClick={this.handleShowInfo}></i></h5>

          {
            this.state.showInfo && <div className="info">{info}</div>
          }
        </div>
      </section>
    )
  }
}
