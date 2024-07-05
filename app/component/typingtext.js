'use client'

import { useEffect, useRef } from 'react';
import {Typed} from 'react-typed';

const TypingEffect = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['안녕하세요 :)', '주니어 FrontEnd 개발자', ' 서동현 입니다!'],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    });

    return () => {

      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className='TypingText'>
        <span ref={typedRef}  />
      </div>
      
    </>
  );
};

export default TypingEffect;