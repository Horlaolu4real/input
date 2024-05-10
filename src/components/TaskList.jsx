import Todo from "./Todo";

export default function TaskList({ array, setArray }) {
  return (
    <div>
      {array.map((item) => (
        <Todo key={item.id} item={item} array={array} setArray={setArray} />
      ))}
    </div>
  );
}
