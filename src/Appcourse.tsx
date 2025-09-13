import CourseForm from "./component/courseComponent/CourseForm";
import CourseList from "./component/courseComponent/CourseList";
import CourseDrop from "./component/courseComponent/CourseDrop";
import { useCourseStore } from "./store/courseStore";

function App() {
  const gpa = useCourseStore((state) => state.calculateGPA());

  return (
    <div style={{ padding: "20px" }}>
      <h1>ระบบการถอนรายวิชา</h1>
      <CourseForm />
      <CourseList />
      <CourseDrop />
      <h2>🎓 GPA รวม: {gpa.toFixed(2)}</h2>
    </div>
  );
}

export default App;
