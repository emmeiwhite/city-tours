import React, { Component } from 'react';
import Tour from './../Tour/Tour';
import { tourData } from './../../tourData';
import './tourlist.scss';

export default class TourList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tourData: tourData
    }
  }

  handleCloseBtnClick = (id) => {
    const updatedTours = this.state.tourData.filter(tour => tour.id !== id);
    this.setState({
      tourData: updatedTours
    });
  }

  render() {
    console.log(this.state.tourData);
    return (
      <section className="tourlist-wrapper">
        {
          this.state.tourData.map(item => (
            <Tour tourItem={item} key={item.id} handleCloseBtnClick={this.handleCloseBtnClick} />
          ))
        }
      </section>
    )
  }
}
