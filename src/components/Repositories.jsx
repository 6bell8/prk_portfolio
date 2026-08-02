import React, { useEffect, useState, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

//
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import img_banner5 from '../assets/images/img_banner5.jpg';
import img_banner6 from '../assets/images/img_banner6.jpg';
import img_banner7 from '../assets/images/img_banner7.jpg';
import img_banner8 from '../assets/images/img_banner8.jpg';
import aiccShareImage from '../assets/images/aicc-share-image.png';

const Repositories = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = container => {};

  const options = useMemo(
    () => ({
      particles: {
        number: {
          value: 40,
          density: {
            enable: true,
            value_area: 3000,
          },
        },
        color: {
          value: '#42e16d',
        },
        shape: {
          type: 'square',
          stroke: {
            width: 2,
            color: '#40c463',
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: 'favicon.svg',
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.3,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 20,
          random: true,
          anim: {
            enable: false,
            speed: 10,
            size_min: 4.87246327380807,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 500,
          color: '#ffffff',
          opacity: 0.4,
          width: 2,
        },
        move: {
          enable: true,
          speed: 4,
          direction: 'bottom',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: false,
            mode: 'bubble',
          },
          onclick: {
            enable: false,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 0.5,
            },
          },
          bubble: {
            distance: 11.988011988011989,
            size: 1,
            duration: 0.005,
            opacity: 0.7227487189481971,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    }),
    [],
  );

  return (
    <div className="inner">
      <div className="contents">
        <div className="repositoriesBox">
          <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} slidesPerView={1}>
            <SwiperSlide className="repository">
              <li className="projectDesc">
                <p className="repoTitle">Repositories</p>
                <div className="projectNameRow">
                  <p className="projectName">AICC Management Console</p>
                  <span className="liveBadge"><span aria-hidden="true"></span>STG · 테스트 환경</span>
                </div>
                <div className="descBox">
                  <p className="descTitle">Desc</p>
                  <p className="repoDesc">
                    사내망에서 실제 업무에 사용 중인 AICC 통합 관리 콘솔입니다. 기존 내부 업무 흐름을 분석하고 불편한 프로세스를 개선해 현업에 적용했으며, 현재 공개된 STG 환경은 사내망 밖에서도 테스트할 수 있도록 기능과 운영 범위를 지속적으로 확장하고 있습니다.
                  </p>
                </div>
                <div className="skillBox">
                  <p className="skillTitle">Skill used in project</p>
                  <div className="frontend">
                    <p className="frontSkillTitle">Frontend</p>
                    <p className="repoDesc">Next.js, React</p>
                  </div>
                  <div className="backend">
                    <p className="backSkillTitle">Backend · Database</p>
                    <p className="repoDesc">MySQL, Railway API</p>
                  </div>
                </div>
              </li>
              <li className="project aiccProject">
                <a href="https://aicc-management-console.vercel.app/login?next=%2F" target="_blank" rel="noopener noreferrer">
                  <img className="aiccShareImage" src={aiccShareImage} alt="AICC works" />
                  <div className="projectTitle">
                    <div className="pTitle">
                      <p>AICC Console</p>
                      <p><span className="material-symbols-outlined">link</span></p>
                    </div>
                    <p className="psub"><strong>사내망 실사용</strong> · 내부 프로세스를 개선해 적용했으며, 외부 STG 테스트 환경으로 확장 중입니다.</p>
                  </div>
                </a>
              </li>
            </SwiperSlide>
            <SwiperSlide className="repository">
              <li className="projectDesc">
                <p className="repoTitle">Repositories</p>
                <p className="projectName">prk-plant-shop</p>
                <div className="descBox">
                  <p className="descTitle">Desc</p>
                  <p className="repoDesc">
                    React와 nextjs를 활용하여 만든 웹입니다. 기존에 있는 이커머스 몰을 벤치마킹하였고, swiper를 사용하여 식물을 커스텀을 통해 보다 소비자입장에서 한차원 더 접근하도록 노력하였습니다.,
                    마찬가지로 서버, 클라이언트를 병합 시켜 배포한 반응형 웹입니다.
                  </p>
                </div>
                <div className="skillBox">
                  <p className="skillTitle">Skill used in project</p>
                  <div className="frontend">
                    <p className="frontSkillTitle">Frontend</p>
                    <p className="repoDesc">Next.js</p>
                  </div>
                  <div className="backend">
                    <p className="backSkillTitle">Plugin </p>
                    <p className="repoDesc">sanity</p>
                  </div>
                </div>
              </li>
              <li className="project">
                <a href="https://plantshop-git-master-6bell8.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img src={img_banner8} alt="img_banner8" />
                  <div className="projectTitle">
                    <div className="pTitle">
                      <p>prk-ecommerce</p>
                      <p>
                        <span className="material-symbols-outlined">link</span>
                      </p>
                    </div>
                    <p className="psub">*React와 next Js를 활용해서 만든 plant-ecommerce입니다. </p>
                  </div>
                </a>
              </li>
            </SwiperSlide>
            <SwiperSlide className="repository">
              <li className="projectDesc">
                <p className="repoTitle">Repositories</p>
                <p className="projectName">prk-ecommerce</p>
                <div className="descBox">
                  <p className="descTitle">Desc</p>
                  <p className="repoDesc">
                    nextjs로 만든 쇼핑몰 웹입니다. 상세정보를 통해 주문하기, 장바구니 담기 등을 활용 할 수 있고, stripe 결제시스템을 도입하였습니다. 서버, 클라이언트를 병합 시켜 배포한 반응형
                    웹입니다.
                  </p>
                </div>
                <div className="skillBox">
                  <p className="skillTitle">Skill used in project</p>
                  <div className="frontend">
                    <p className="frontSkillTitle">Frontend</p>
                    <p className="repoDesc">React, nextjs</p>
                  </div>
                  <div className="backend">
                    <p className="backSkillTitle">Plugin </p>
                    <p className="repoDesc">sanity</p>
                  </div>
                </div>
              </li>
              <li className="project">
                <a href="https://ecommerce-6bell8.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img src={img_banner7} alt="img_banner7" />
                  <div className="projectTitle">
                    <div className="pTitle">
                      <p>prk-ecommerce</p>
                      <p>
                        <span className="material-symbols-outlined">link</span>
                      </p>
                    </div>
                    <p className="psub">*React와 next Js를 활용해서 만든 음향기기 이커머스 웹입니다.</p>
                  </div>
                </a>
              </li>
            </SwiperSlide>
            <SwiperSlide className="repository">
              <li className="projectDesc">
                <p className="repoTitle">Repositories</p>
                <p className="projectName">prk-shop</p>
                <div className="descBox">
                  <p className="descTitle">Desc</p>
                  <p className="repoDesc">
                    React와 nodejs를 활용하여 만든 쇼핑몰 웹입니다. 상세정보를 통해 문의사항 및 주문, 신발의 디테일까지 확인 할 수 있습니다. 현재 fly.io로 배포하였고 지속적으로 버전 업데이트 중에
                    있습니다.
                  </p>
                </div>
                <div className="skillBox">
                  <p className="skillTitle">Skill used in project</p>
                  <div className="frontend">
                    <p className="frontSkillTitle">Frontend</p>
                    <p className="repoDesc">Html, React, Rudux, SCSS</p>
                  </div>
                  <div className="backend">
                    <p className="backSkillTitle">Backend</p>
                    <p className="repoDesc">nodejs</p>
                  </div>
                </div>
              </li>
              <li className="project">
                <a href="https://restless-wind-2135.fly.dev/" target="_blank" rel="noopener noreferrer">
                  <img src={img_banner6} alt="img_banner6" />
                  <div className="projectTitle">
                    <div className="pTitle">
                      <p>prk-shop</p>
                      <p>
                        <span className="material-symbols-outlined">link</span>
                      </p>
                    </div>
                    <p className="psub">*React와 nodejs를 활용해서 만든 신발 쇼핑몰 앱입니다.</p>
                  </div>
                </a>
              </li>
            </SwiperSlide>
            <SwiperSlide className="repository">
              <li className="projectDesc">
                <p className="repoTitle">Repositories</p>
                <p className="projectName">Movie infomation app</p>
                <div className="descBox">
                  <p className="descTitle">Desc</p>
                  <p className="repoDesc">
                    TMDB에서 가져온 API를 활용하여, 등장인물 프로필과 줄거리를 요약해서 나열한 app입니다. 영화를 클릭 후 상세정보를 확인 할 수 있습니다. 또한 netilfy.toml 파일을 추가하여 netilfy로
                    배포하였습니다.
                  </p>
                </div>
                <div className="skillBox">
                  <p className="skillTitle">Skill used in project</p>
                  <div className="frontend">
                    <p className="frontSkillTitle">Frontend</p>
                    <p className="repoDesc"> Html, React, SCSS</p>
                  </div>
                  <div className="backend">
                    <p className="backSkillTitle">Database</p>
                    <p className="repoDesc">TMDB </p>
                  </div>
                </div>
              </li>
              <li className="project">
                <a href="https://restless-wind-2135.fly.dev/" target="_blank" rel="noopener noreferrer">
                  <img src={img_banner5} alt="img_banner5" />
                  <div className="projectTitle">
                    <div className="pTitle">
                      <p>prk-shop</p>
                      <p>
                        <span className="material-symbols-outlined">link</span>
                      </p>
                    </div>
                    <p className="psub">*TMDB API를 활용해서 만든 영화 앱입니다.</p>
                  </div>
                </a>
              </li>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
    </div>
  );
};

export default Repositories;
