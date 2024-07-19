import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllJobs, getJobById, getJobs } from "../api/jobsApi";

const getErrorMessage = (error) => {
  return error.response && error.response.data && error.response.data.message
    ? error.response.data.message
    : error.message;
};

export const fetchJobById = createAsyncThunk(
  "jobs/fetchJobById",
  async (id, { rejectWithValue }) => {
    try {
      const data = await getJobById(id);
      return data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async ({ page, pageSize }, { rejectWithValue }) => {
    try {
      const { jobs, totalJobs } = await getJobs(page, pageSize);
      return { jobs, totalJobs };
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

export const fetchAllJobs = createAsyncThunk(
  "jobs/fetchAllJobs",
  async (_, { rejectWithValue }) => {
    try {
      const { jobs, totalJobs } = await getAllJobs();
      return { jobs, totalJobs };
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    allJobs: [],
    job: null,
    status: "idle",
    error: null,
    totalJobs: 0,
    currentPage: 1,
    pageSize: 12, // Set pageSize to 12
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.jobs = action.payload.jobs;
        state.totalJobs = action.payload.totalJobs;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchJobById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJobById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.job = action.payload;
      })
      .addCase(fetchJobById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchAllJobs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllJobs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allJobs = action.payload.jobs;
      })
      .addCase(fetchAllJobs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setPage } = jobsSlice.actions;

export default jobsSlice.reducer;

export const selectJobById = (state) => state.jobs.job;
export const selectJobs = (state) => state.jobs.jobs;
export const selectAllJobs = (state) => state.jobs.allJobs;
export const selectTotalJobs = (state) => state.jobs.totalJobs;
export const selectCurrentPage = (state) => state.jobs.currentPage;
export const selectPageSize = (state) => state.jobs.pageSize;
export const selectStatus = (state) => state.jobs.status;
