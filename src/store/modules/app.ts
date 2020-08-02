import {
  SET_THEME,
  FETCH_START,
  FETCH_ERROR,
  FETCH_COMPLETE,
  SET_OBSERVATION,
  SET_FORECAST,
} from '@/store/mutations/app'
import { IObservation, IForecast, ITheme, IMetric } from '@/types'
import api from '@/api'

const state = {
  fetching: false,
  fetched: false,
  errors: false,
  observation: {},
  forecast: {},
  theme: {},
}

const getters = {
  observation (state: any): IObservation { return state.observation },
  forecast (state: any): IForecast { return state.forecast },
  fetched (state: any): boolean { return state.fetched },
  metric (state: any): IMetric { return state.observation.metric },
  errors (state: any): boolean { return state.errors },
  theme (state: any): ITheme { return state.theme },
}

const mutations = {
  [SET_OBSERVATION] (state: any, payload: IObservation): void { 
    state.observation = payload
  },

  [SET_FORECAST] (state: any, payload: IForecast): void { 
    state.forecast = payload
  },

  [SET_THEME] (state: any, payload: ITheme): void { 
    state.theme = payload
  },

  [FETCH_START] (state: any): void { 
    state.fetching = true
  },

  [FETCH_COMPLETE] (state: any): void { 
    state.fetching = false
    state.fetched = true
  },

  [FETCH_ERROR] (state: any): void { 
    state.fetching = false
    state.fetched = false
    state.errors = true
  }
}

const actions = {
  setTheme ({ commit }: any, { background, secondary, text }: ITheme): void {
    commit(SET_THEME, {
      background: `#${background}`,
      secondary: `#${secondary}`,
      text: `#${text}`,
    }) 
  },

  async fetch ({ commit }: any): Promise<void> {
    try {
      commit(FETCH_START)
      const { data: { observations } } = await api.current.fetch()
      const { data } = await api.forecast.fetch(observations[0])
      commit(SET_OBSERVATION, observations[0])
      commit(SET_FORECAST, data)
      commit(FETCH_COMPLETE)
    } catch (error) {
      commit(FETCH_ERROR)
    }
  }
}

export default {
  namespaced: true,
  mutations,
  getters,
  actions,
  state,
}