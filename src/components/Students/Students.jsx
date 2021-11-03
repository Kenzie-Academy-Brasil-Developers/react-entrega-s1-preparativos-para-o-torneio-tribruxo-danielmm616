import StudentCard from "../StudentCard/StudentCard";

function Students({ list }) {
  return (
    <div className="DivCards">
      {list.map((student, index) => (
        <StudentCard wizard={student} key={index} />
      ))}
    </div>
  );
}

export default Students;
