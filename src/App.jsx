import { useEffect, useRef, useState } from 'react';

import MainContents from './components/MainContents';
import ReadMe from './components/ReadMe';
import Repositories from './components/Repositories';
import ContactMe from './components/ContactMe';
import pjs01 from './assets/images/pjs01.svg';
import pjs02 from './assets/images/pjs02.svg';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [btnAllState, setBtnAllState] = useState(false);

  const containerRef = useRef(null);
  const headerRef = useRef(null);
  // const logoRef = useRef(null);
  const logoRef2 = useRef(null);
  const gnbRef = useRef(null);
  const btnAllRef = useRef(null);
  const depth01Ref = useRef([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const btnAll = btnAllRef.current;
    const header = headerRef.current;
    const depth01 = depth01Ref.current;

    btnAll.addEventListener('click', () => {
      header.classList.toggle('open');
    });

    depth01.forEach((item) => {
      item.addEventListener('click', () => {
        header.classList.remove('open');
        return false;
      });
    });

    const handleResize = () => {
      const w = window.outerWidth;
      if (w <= 1200) {
        header.classList.add('mobile');
      } else {
        header.classList.remove('mobile', 'open');
      }
    };

    window.addEventListener('resize', handleResize);

    // ✅ 환경마다 다른 wheel 이벤트를 "한 번에 한 섹션"으로 통일
    const state = {
      locked: false,
      acc: 0,
      lockTimer: null,
    };

    const LOCK_MS = 850; // 숫자 ↑ : 더 안정(덜 튐), 숫자 ↓ : 더 빠릿
    const THRESHOLD_PX = 120; // 숫자 ↑ : 더 세게 굴려야 넘어감, 숫자 ↓ : 민감

    const normalizeDeltaY = (event, container) => {
      const { deltaY, deltaMode } = event;

      // deltaMode: 0=pixel, 1=line, 2=page
      if (deltaMode === 1) return deltaY * 16; // line → px (대략값)
      if (deltaMode === 2) return deltaY * container.clientHeight; // page → px
      return deltaY; // pixel
    };

    const scrollToIndex = (index) => {
      const container = containerRef.current;
      if (!container) return;
      container.scrollTo({
        top: index * container.clientHeight,
        behavior: 'smooth',
      });
    };

    const handleWheel = (event) => {
      // Ctrl + wheel (브라우저 확대/축소) 방지로 꼬이는 것 방지
      if (event.ctrlKey) return;

      event.preventDefault();

      const container = containerRef.current;
      if (!container) return;

      if (state.locked) return;

      const deltaPx = normalizeDeltaY(event, container);
      state.acc += deltaPx;

      if (Math.abs(state.acc) < THRESHOLD_PX) return;

      const direction = state.acc > 0 ? 1 : -1;

      const totalSections = sectionRefs.current.filter(Boolean).length;
      const maxIndex = Math.max(0, totalSections - 1);

      const currentIndex = Math.round(container.scrollTop / container.clientHeight);
      const nextIndex = Math.min(maxIndex, Math.max(0, currentIndex + direction));

      state.acc = 0;
      state.locked = true;

      scrollToIndex(nextIndex);

      if (state.lockTimer) window.clearTimeout(state.lockTimer);
      state.lockTimer = window.setTimeout(() => {
        state.locked = false;
      }, LOCK_MS);
    };

    const container = containerRef.current;
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', handleResize);
      if (state.lockTimer) window.clearTimeout(state.lockTimer);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id === 'contactMe') {
          setIsOpen(true);
          setBtnAllState(true);
        } else if (!entry.isIntersecting && entry.target.id === 'contactMe') {
          setIsOpen(false);
          setBtnAllState(false);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleItemClick = index => {
    sectionRefs.current[index].scrollIntoView({ behavior: 'smooth' });
    setIsOpen(!isOpen);
  };
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
          <div>
            <header id="header" ref={headerRef}>
              <h1 className="mainLogo" ref={logoRef2}>
                <a href="/">
                  <img src={isOpen ? pjs02 : pjs01} alt="pjs" />
                </a>
              </h1>
              <nav id="gnb" ref={gnbRef}>
                <ul className="mainList">
                  {['about.js', 'readMe', 'repositories', 'contactMe'].map((item, index) => (
                          <li key={index} ref={el => (depth01Ref.current[index] = el)} onClick={() => handleItemClick(index)}>
                            <a href={`#${item.toLowerCase()}`} className="depth01">
                              {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                          </li>
                  ))}
                </ul>
              </nav>
              <button className={`btnAll ${btnAllState ? 'invert' : ''}`} ref={btnAllRef} onClick={toggleOpen}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </header>

            <main id="main" className="black">
              <div className="scroll-container" ref={containerRef}>
                <section className="section" id="mainTitle" ref={el => (sectionRefs.current[0] = el)}>
                  <MainContents />
                </section>
                <section className="section" id="readMe" ref={el => (sectionRefs.current[1] = el)}>
                  <ReadMe />
                </section>
                <section className="section" id="repositories" ref={el => (sectionRefs.current[2] = el)}>
                  <Repositories />
                </section>
                <section className="section" id="contactMe" ref={el => (sectionRefs.current[3] = el)}>
                  <ContactMe />
                </section>
              </div>
            </main>
          </div>
  );
};

export default App;