import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [value, setValue] = useState(1);

  const handleChange = (delta) => {
    setValue((prev) => {
      const next = prev + delta;
      if (next < 1) return 1;
      if (next > stock) return stock;
      return next;
    });
  };

  const handleBuy = () => onAdd(value);

  if (stock === 0) {
    return (
      <div className="alert alert-warning mt-3">
        No hay unidades disponibles por el momento.
      </div>
    );
  }

  return (
    <div className="p-3 border rounded d-inline-flex flex-column gap-3 bg-light">
      <div className="d-flex align-items-center justify-content-center gap-3">
        <button
          className="btn btn-outline-secondary"
          onClick={() => handleChange(-1)}
        >
          —
        </button>

        <div
          className="px-3 py-1 border rounded bg-white"
          style={{ minWidth: "45px", textAlign: "center" }}
        >
          {value}
        </div>

        <button
          className="btn btn-outline-secondary"
          onClick={() => handleChange(1)}
        >
          +
        </button>
      </div>

      <button
        className="btn btn-success"
        onClick={handleBuy}
        disabled={value === 0}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
