import { create } from "zustand";

export interface Course {
  id: number;
  code: string;
  nameTh: string;
  nameEn: string;
  credit: number;
  teacher: string;
  grade: string; // A, B+, C, W (ถอนได้)
}

interface CourseState {
  courses: Course[];
  droppedCourses: Course[];
  addCourse: (course: Omit<Course, "id">) => void;
  dropCourse: (id: number) => void;
  calculateGPA: () => number;
}

const gradeToPoint: Record<string, number> = {
  A: 4,
  "B+": 3.5,
  B: 3,
  "C+": 2.5,
  C: 2,
  "D+": 1.5,
  D: 1,
  F: 0,
};

export const useCourseStore = create<CourseState>((set, get) => ({
  courses: [],
  droppedCourses: [],

  addCourse: (course) =>
    set((state) => ({
      courses: [...state.courses, { id: Date.now(), ...course }],
    })),

  dropCourse: (id) =>
    set((state) => {
      const course = state.courses.find((c) => c.id === id);
      if (!course) return state;
      return {
        courses: state.courses.filter((c) => c.id !== id),
        droppedCourses: [...state.droppedCourses, { ...course, grade: "W" }],
      };
    }),

  calculateGPA: () => {
    const { courses } = get();
    let totalCredits = 0;
    let totalPoints = 0;
    courses.forEach((course) => {
      if (course.grade !== "W" && gradeToPoint[course.grade] !== undefined) {
        totalCredits += course.credit;
        totalPoints += course.credit * gradeToPoint[course.grade];
      }
    });
    return totalCredits === 0 ? 0 : totalPoints / totalCredits;
  },
}));
