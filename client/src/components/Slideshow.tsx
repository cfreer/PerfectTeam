/**
 * This file contains the function Slideshow that returns the render for a
 * slideshow component. It currently displays different images.
 */

import { Carousel } from "react-bootstrap";

function Slideshow() {
  return (
    <div>
      <Carousel id='slides' interval={3000}>
        <Carousel.Item>
          {/* First slide */}
          {/* Image Source & Citation: "NBA Collectible Figures" by ye-wa is licensed under CC BY-NC-SA 2.0. */}
          <img
            className='slide-img'
            data-testid='slide-1'
            src={process.env.PUBLIC_URL + 'imgs/slide-1.jpg'}
            alt="First slide - player figurines"
          />
          <Carousel.Caption>
            <p className="attribution">"<a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/46694135@N06/6959317352">NBA Collectible Figures</a>" by <a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/46694135@N06">ye-wa</a> is licensed under <a target="_blank" rel="noopener noreferrer" href="https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=openverse">CC BY-NC-SA 2.0</a>. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* Second slide */}
          {/* Image Source & Citation: "NBA Playoffs Dallas Mavericks vs. San Antonio Spurs" by Katie Haugland Bowen is licensed under CC BY 2.0. To view a copy of this license, visit https://creativecommons.org/licenses/by/2.0/?ref=openverse. */}
          <img
            className='slide-img'
            data-testid='slide-2'
            src={process.env.PUBLIC_URL + 'imgs/slide-2.jpg'}
            alt="Second slide - basketball game stadium 1"
          />
          <Carousel.Caption>
            <p className="attribution">"<a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/76771463@N02/14002064575">NBA Playoffs Dallas Mavericks vs. San Antonio Spurs</a>" by <a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/76771463@N02">Katie Haugland Bowen</a> is licensed under <a target="_blank" rel="noopener noreferrer" href="https://creativecommons.org/licenses/by/2.0/?ref=openverse">CC BY 2.0</a>. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* Third slide */}
          {/* Image Source & Citation: "Los Angeles Lakers vs. San Antonio Spurs" by Katie Haugland Bowen is licensed under CC BY 2.0. To view a copy of this license, visit https://creativecommons.org/licenses/by/2.0/?ref=openverse. */}
          <img
            className='slide-img'
            data-testid='slide-3'
            src={process.env.PUBLIC_URL + 'imgs/slide-3.jpg'}
            alt="Third slide - basketball game stadium 2"
          />
          <Carousel.Caption>
            <p className="attribution">"<a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/76771463@N02/6962742298">Los Angeles Lakers vs. San Antonio Spurs</a>" by <a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/76771463@N02">Katie Haugland Bowen</a> is licensed under <a target="_blank" rel="noopener noreferrer" href="https://creativecommons.org/licenses/by/2.0/?ref=openverse">CC BY 2.0</a>. </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slideshow;
