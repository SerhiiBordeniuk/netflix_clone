import { useState, useEffect } from "react";
import axios from "../../services/axios";
import "./FilmRow.scss";
import { base_url } from "../../services/requests";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FilmRow = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([]);
    const [isHovering, setIsHovering] = useState(false);

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

    return (
        <div className="filmrow">
            <h2 className="title">{title}</h2>
            <div className="wrapper">
                <Swiper
                    modules={[Navigation, Pagination]}
                    className="filmrow__posters"
                    navigation
                    allowTouchMove={false}
                    slidesPerGroup={6}
                    spaceBetween={50}
                    slidesPerView={6}
                    loop={true}
                >
                    {movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <div>
                                <img
                                    key={movie.id}
                                    className="filmrow__poster"
                                    width="285px"
                                    height="171px"
                                    src={`${base_url}${movie.backdrop_path}`}
                                    alt={movie.name}
                                    onMouseEnter={handleMouseEnter}
                                />
                                <div className="hidden">test</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default FilmRow;
