export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numberItems = items.length;
  const numberPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numberPacked / numberItems) * 100);
  return (
    <footer className="stats ">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numberItems} items on your list, and you already packed
        ${numberPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
