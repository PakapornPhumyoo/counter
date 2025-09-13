import { useState } from "react";
import { useCourseStore } from "../../store/courseStore";

export default function CourseForm() {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [form, setForm] = useState({
    code: "",
    nameTh: "",
    nameEn: "",
    credit: 3,
    teacher: "",
    grade: "A",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCourse(form);
    setForm({ code: "", nameTh: "", nameEn: "", credit: 3, teacher: "", grade: "A" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input name="code" placeholder="รหัสวิชา" value={form.code} onChange={handleChange} />
      <input name="nameTh" placeholder="ชื่อวิชา (ไทย)" value={form.nameTh} onChange={handleChange} />
      <input name="nameEn" placeholder="ชื่อวิชา (อังกฤษ)" value={form.nameEn} onChange={handleChange} />
      <input type="number" name="credit" placeholder="หน่วยกิต" value={form.credit} onChange={handleChange} />
      <input name="teacher" placeholder="อาจารย์ผู้สอน" value={form.teacher} onChange={handleChange} />
      <select name="grade" value={form.grade} onChange={handleChange}>
        <option value="A">A</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="C+">C+</option>
        <option value="C">C</option>
        <option value="D+">D+</option>
        <option value="D">D</option>
        <option value="F">F</option>
      </select>
      <button type="submit">เพิ่มรายวิชา</button>
    </form>
  );
}
