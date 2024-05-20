import React from 'react'
import './Carousel.css'
const Carousel = () => {
    return (
        <section id="carousel">
            <div className="carousel__div">
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://preview.colorlib.com/theme/pato/images/slide1-01.jpg.webp" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://preview.colorlib.com/theme/pato/images/master-slides-02.jpg.webp" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://preview.colorlib.com/theme/pato/images/master-slides-01.jpg.webp" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    <div className="carousel__div__title">
                        <span>Welcome to</span>
                        <h2>Rato Place</h2>
                        <button>Look Menu</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Carousel