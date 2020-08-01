import {
  SET_THEME,
  FETCH_START,
  FETCH_COMPLETE,
  SET_OBSERVATION,
} from '@/store/mutations/app'
import { ITheme, IObservation } from '@/types'
import api from '@/api'

const state = {
  fetching: false,
  observation: {},
  theme: {},
}

const getters = {
  observation (state: any): IObservation { return state.observation },
  fetching (state: any): boolean { return state.fetching },
  theme (state: any): ITheme { return state.theme },
}

const mutations = {
  [SET_OBSERVATION] (state: any, payload: IObservation): void { 
    state.observation = payload
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
    commit(SET_OBSERVATION, observations[0])
    commit(FETCH_COMPLETE)
    //const { data } = await api.forecast.fetch(observations[0])
    //console.log(data)
  }
}

export default {
  namespaced: true,
  mutations,
  getters,
  actions,
  state,
}