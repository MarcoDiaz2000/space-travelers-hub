import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  return response.data.map(({ mission_id: missionId, mission_name: missionName, description }) => ({
    missionId,
    missionName,
    description,
    reserved: false,
  }));
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    joinMission: (state, action) => {
      const mission = state.find((mission) => mission.missionId === action.payload);
      if (mission) {
        mission.reserved = true;
      }
    },
    leaveMission: (state, action) => {
      const mission = state.find((mission) => mission.missionId === action.payload);
      if (mission) {
        mission.reserved = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => action.payload);
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
