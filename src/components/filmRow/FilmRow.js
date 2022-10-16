import { useState, useEffect } from "react";
import axios from "../../services/axios";
import "./FilmRow.scss";
import { base_url } from "../../services/requests";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FilmRow = ({ title, fetchUrl, updateModal }) => {
    const [movies, setMovies] = useState([]);
    const [isHovering, setIsHovering] = useState(false);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        };

        fetchData();
    }, [fetchUrl]);

    const handleMouseEnter = (e) => {
        setIsHovering(true);
    };

    console.log();

    return (
        <div className="filmrow">
            <h2 className="title">{title}</h2>
            <div className="wrapper">
                <Swiper
                    breakpoints={{
                        0: {
                            width: 0,
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            spaceBetween: 10,
                        },
                        480: {
                            width: 480,
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            width: 640,
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 10,
                        },
                        // when window width is >= 768px
                        768: {
                            width: 768,
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                            spaceBetween: 10,
                        },
                        992: {
                            width: 992,
                            slidesPerView: 5,
                            slidesPerGroup: 5,
                            spaceBetween: 10,
                        },
                        1200: {
                            width: 1200,
                            slidesPerView: 6,
                            slidesPerGroup: 6,
                            spaceBetween: 10,
                        },
                        1400: {
                            width: 1400,
                            slidesPerView: 6,
                            slidesPerGroup: 6,
                            spaceBetween: 10,
                        },
                    }}
                    modules={[Navigation, Pagination]}
                    className="filmrow__posters"
                    navigation
                    allowTouchMove={false}
                    // slidesPerGroup={6}
                    // spaceBetween={50}
                    // slidesPerView={6}
                    loop={true}
                >
                    {movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <img
                                onClick={() => {
                                    updateModal(true, movie);
                                }}
                                key={movie.id}
                                className="filmrow__poster"
                                src={`${base_url}${movie.backdrop_path}`}
                                alt={movie.name}
                                onMouseEnter={handleMouseEnter}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default FilmRow;
