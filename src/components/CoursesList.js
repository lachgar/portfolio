import React from "react";
import CourseCard from "./CourseCard"; // Composant de carte de cours
import CourseData from "./CourseData"; // Données des cours
import { motion } from "framer-motion"; // Bibliothèque pour l'animation 3D

const CoursesList = () => {
  // Animation 3D pour les cartes de cours
  const courseCardsAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="courses-container"
      variants={courseCardsAnimation}
      initial="hidden"
      animate="visible"
    >
      {CourseData.map((course, index) => (
        <CourseCard
          key={index}
          courseName={course.courseName}
          courseObjectives={course.courseObjectives}
        />
      ))}
    </motion.div>
  );
};

export default CoursesList;
