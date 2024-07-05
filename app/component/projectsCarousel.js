'use client'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProjectsCarousel = () => {
    return(
        <>
                <div className="Projects_Wrapper">
                    <p>NextJS Todo App</p>
                    <div className='Carousel_Wrapper'>
                        
                        <Carousel>
                            <div className="Projects_Images">
                                <img src='/todo/todo1.png'/>
                            </div>
                        </Carousel>
                    </div>
                    <div className="Projects_Details">
                            <p>React와 Java등으로 개발한 경험이 있는 간단한 프로젝트 이지만, </p>
                            <p>NextJS 14버전의 학습을 위해 다시 만들어 보았습니다.</p>
                            <p>개발과정에서 SSR의 장점을 이해하는 것에 중점을 두었습니다.</p>
                    </div>       
                </div>
                <div className="Projects_Wrapper">
                    <p>OpenWeather Api 활용 날씨 앱</p>
                     <div className='Carousel_Wrapper'>
                        <Carousel>
                            <div className="Projects_Images">
                                <img src='/weather/weather1.png'/>
                            </div>
                            <div className="Projects_Images">
                                <img src='/weather/weather2.png'/>
                            </div>
                        </Carousel>
                    </div>
                    <div className="Projects_Details">
                        <p>간단한 프로젝트를 통해 API 활용법의 감을 잡기 위해</p>
                        <p>개발한 WeatherApp입니다.</p>
                    </div>    
                </div>
                <div className="Projects_Wrapper">
                    <p>News API 활용 해외 스포츠 뉴스 검색</p>
                    <div className='Carousel_Wrapper'>
                        <Carousel>
                            <div className="Projects_Images">
                                <img src='/news/news1.png'/>
                            </div>
                            <div className="Projects_Images">
                                <img src='/news/news2.png'/>
                            </div>
                        </Carousel>
                    </div>
                    <div className="Projects_Details">
                      <p>REST API에 보다 익숙해지기 위해 News API를 활용한 프로젝트입니다.</p>
                      <p>원하는 키워드의 뉴스기사를 호출하는 NewsApp입니다.</p>
                    </div>  
                </div>
                <div className="Projects_Wrapper">
                    <p>쇼핑몰 사이트 Kream 클론</p>
                    <div className='Carousel_Wrapper'>
                        <Carousel>
                            <div className="Projects_Images">
                                <img src='/kream/kream1.png'/>
                            </div>
                            <div className="Projects_Images">
                                <img src='/kream/kream2.png'/>
                            </div>
                            <div className="Projects_Images">
                                <img src='/kream/kream3.png'/>
                            </div>
                            <div className="Projects_Images">
                                <img src='/kream/kream4.png'/>
                            </div>
                            <div className="Projects_Images">
                                <img src='/kream/kream5.png'/>
                            </div>
                        </Carousel>
                    </div>
                    <div className="Projects_Details">
                      <p>NextJS 14버전을 사용하여 쇼핑몰 사이트인 Kream의 클론코딩한 프로젝트 입니다.</p>

                    </div>    
                </div>
                <div className="Projects_Wrapper">
                    <p>Spotify Api 활용 음악 재생 웹사이트</p>   
                    <div className='Carousel_Wrapper'>
                        <Carousel>
                            <div className="Projects_Images">
                                <img src='/music/music1.png'/>
                            </div>
                            <div className="Projects_Images">
                                <img src='/music/music2.png'/>
                            </div>
                            <div className="Projects_Images">
                                <img src='/music/music3.png'/>
                            </div>
                            <div className="Projects_Images">
                                <img src='/music/music4.png'/>
                            </div>
                            <div className="Projects_Images">
                                <img src='/music/music5.png'/>
                            </div>
                            <div className="Projects_Images">
                                <img src='/music/music6.png'/>
                            </div>
                            <div className="Projects_Images">
                                <img src='/music/music7.png'/>
                            </div>
                            <div className="Projects_Images">
                                <img src='/music/music8.png'/>
                            </div>
                            <div className="Projects_Images">
                                <img src='/music/music9.png'/>
                            </div>
                            <div className="Projects_Images">
                                <img src='/music/music10.png'/>
                            </div>
                        </Carousel>
                    </div>
                    <div className="Projects_Details">
                        <p>NextJS와 REST API의 숙련화를 위해 개발한 프로젝트입니다.</p>
                        <p>Spotify API를 활용하여 음악순위, 최신발매 앨범, 인기 아티스트등의 자세한 정보를 보여주고</p>
                        <p>원하는 앨범을 검색하여 MusicPlayer를 통해 음악을 재생하는 기능등을 구현하였습니다.</p>
                    </div>  
                </div>
            </>
    )    
}

export default ProjectsCarousel;