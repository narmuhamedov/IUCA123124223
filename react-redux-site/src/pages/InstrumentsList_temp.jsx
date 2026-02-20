import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInstruments, createInstrument, deleteInstrument } 
from "../features/instruments/instrumentsSlice";
import { useNavigate } from "react-router-dom";

const InstrumentsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items, status, error } = useSelector(state => state.instruments);

  const [form, setForm] = useState({
    name: "",
    type: "",
    description: "",
    price: ""
  });

  useEffect(() => {
    dispatch(fetchInstruments());
  }, [dispatch]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createInstrument({
      id: Date.now(),
      name: form.name,
      type: form.type,
      description: form.description,
      price: Number(form.price)
    }));

    setForm({
      name: "",
      type: "",
      description: "",
      price: ""
    });
  };

  if (status === "loading") return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className="container">
      <h2>Музыкальные инструменты</h2>

      <h3>Добавить инструмент</h3>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Название"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="type"
          placeholder="Тип"
          value={form.type}
          onChange={handleChange}
        />

        <input
          name="description"
          placeholder="Описание"
          value={form.description}
          onChange={handleChange}
        />

        <input
          name="price"
          placeholder="Цена"
          value={form.price}
          onChange={handleChange}
        />

        <button type="submit">Добавить</button>
      </form>

      <ul>
        {items.map(inst => (
          <li key={inst.id}>
            <button onClick={() => navigate(`/instruments/${inst.id}`)}>
              {inst.name}
            </button>

            <button onClick={() => dispatch(deleteInstrument(inst.id))}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstrumentsList;