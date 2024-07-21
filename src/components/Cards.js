import React, { useState } from 'react';
import Card from './Card';

const Cards = ({ courses, category }) => {
  const [liked, setLiked] = useState([]);

  const getCourses = () => {
    let allCourses = [];
    if (category === "All") {
      if (courses) {
        Object.values(courses).forEach((courseCategory) => {
          courseCategory.forEach((course) => {
            allCourses.push(course);
          });
        });
      }
      return allCourses;
    } else {
      return courses[category] || [];
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card 
          key={course.id} 
          course={course}
          liked={liked} 
          setLiked={setLiked}
        />
      ))}
    </div>
  );
};

export default Cards;
