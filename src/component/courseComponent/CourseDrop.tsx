import { useCourseStore } from "../../store/courseStore";

export default function CourseDrop() {
  const droppedCourses = useCourseStore((state) => state.droppedCourses);

  return (
    <div>
      <h2>รายวิชาที่ถอนแล้ว</h2>
      <ul>
        {droppedCourses.map((course) => (
          <li key={course.id}>
            {course.code} - {course.nameTh} ({course.credit} หน่วยกิต) - เกรด: {course.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}
