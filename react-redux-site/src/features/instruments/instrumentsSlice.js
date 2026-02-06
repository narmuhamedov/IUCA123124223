import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchInstrumentsApi, fetchInstrumentByIdApi } from "../../api/instrumentsApi";

// 📃 Загрузка списка
export const fetchInstruments = createAsyncThunk(
    "instruments/fetchAll",
    async () => {
        return await fetchInstrumentsApi();
    }
);

// 🔍 Загрузка одного инструмента
export const fetchInstrumentById = createAsyncThunk(
    "instruments/fetchById",
    async (id) => {
        return await fetchInstrumentByIdApi(id);
    }
);

const instrumentsSlice = createSlice({
    name: "instruments",
    initialState: {
        items: [],
        selectedInstrument: null,
        status: "idle",
        error: null
    },
    reducers: {
        clearSelectedInstrument(state) {
            state.selectedInstrument = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // список
            .addCase(fetchInstruments.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchInstruments.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchInstruments.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })

            // один инструмент
            .addCase(fetchInstrumentById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchInstrumentById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.selectedInstrument = action.payload;
            })
            .addCase(fetchInstrumentById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export const { clearSelectedInstrument } = instrumentsSlice.actions;
export default instrumentsSlice.reducer;
