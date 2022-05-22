import React from 'react';
import { useParams, useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParams] = useSearchParams()
  console.log(searchParams.get('detail'))
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>
    </div>
  );
};

export default About;