const Total = ({ total }) => {

  const totalValue = total.reduce((sum, current) => sum + current, 0);

  return (
    <div className="total">
      <h2>Total: <span>{totalValue}</span></h2>
    </div>
  );
}

export default Total;
