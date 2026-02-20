import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { 
  fetchInstrumentById, 
  clearSelectedInstrument, 
  updateInstrument 
} from "../features/instruments/instrumentsSlice";

const InstrumentDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { selectedInstrument, status } = useSelector(
    state => state.instruments
  );

  const [editForm, setEditForm] = useState(null);

  useEffect(() => {
    dispatch(fetchInstrumentById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (selectedInstrument) {
      setEditForm(selectedInstrument);
    }
  }, [selectedInstrument]);

  const handleChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = () => {
    dispatch(updateInstrument({
      ...editForm,
      price: Number(editForm.price)
    }));
  };

  if (status === "loading") return <p>Загрузка инструмента...</p>;
  if (!selectedInstrument) return null;

  return (
    <div className="container">
      <button
        onClick={() => {
          dispatch(clearSelectedInstrument());
          navigate("/");
        }}
      >
        ← Назад
      </button>

      {editForm && (
        <>
          <input
            name="name"
            value={editForm.name}
            onChange={handleChange}
          />

          <input
            name="type"
            value={editForm.type}
            onChange={handleChange}
          />

          <input
            name="description"
            value={editForm.description}
            onChange={handleChange}
          />

          <input
            name="price"
            value={editForm.price}
            onChange={handleChange}
          />

          <button onClick={handleUpdate}>
            Сохранить изменения
          </button>
        </>
      )}
    </div>
  );
};

export default InstrumentDetail;