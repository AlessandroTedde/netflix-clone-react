import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
  state = {
    movies: [],
    settings: {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 10,
      slidesToScroll: 1,
    },
  };

  componentDidMount = () => {
    this.fetchMovies();
  };

  fetchMovies = async () => {
    try {
      let resp = await fetch("http://www.omdbapi.com/?apikey=c349cfd&s=" + this.props.queryParam);
      if (resp.ok) {
        let movies = await resp.json();
        // salvare nello state il nostro array data

        this.setState({ movies });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { movies, settings } = this.state;
    return (
      <div>
        <h2 className="text-light mt-5 mb-3 ms-3 text-start">{this.props.title}</h2>
        <Slider {...settings}>
          {movies.Search &&
            movies.Search.map((movie) => (
              <img className="object-fit-cover w-100" src={movie.Poster} key={movie.imdbID} height={350} alt="cover" />
            ))}
        </Slider>
      </div>
    );
  }
}
