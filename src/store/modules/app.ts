import {
  SET_THEME,
  FETCH_START,
  FETCH_COMPLETE,
  SET_OBSERVATION,
  SET_FORECAST,
} from '@/store/mutations/app'
import { IObservation, IForecast, ITheme } from '@/types'
import api from '@/api'

const state = {
  fetching: false,
  observation: {},
  forecast: {},
  theme: {},
}

const getters = {
  observation (state: any): IObservation { return state.observation },
  forecast (state: any): IForecast { return state.forecast },
  fetching (state: any): boolean { return state.fetching },
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
    commit(FETCH_START)
    const { data: { observations } } = await api.current.fetch()
    const { data } = await api.forecast.fetch(observations[0])
    commit(SET_OBSERVATION, observations[0])
    commit(SET_FORECAST, data)
    commit(FETCH_COMPLETE)
  }
}

export default {
  namespaced: true,
  mutations,
  getters,
  actions,
  state,
}