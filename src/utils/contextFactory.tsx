/* eslint-disable */
import { createContext, useContext, useMemo, useState } from 'react'
import { IPropsChild } from '@/types'

interface IStore<T> {
  key: string
  store: T
  setStore: (payload: Partial<T>) => void
}

function getCxtProvider<T>(
  key: string,
  defaultValue: T,
  AppContext: React.Context<IStore<T>>,
) {
  return ({ children }: IPropsChild) => {
    const [store, setStore] = useState(defaultValue)
    const value = useMemo(
      () => ({
        key,
        store,
        // 增量更新,
        setStore: (payload = {}) => {
          setStore({
            ...store,
            ...payload,
          })
        },
      }),
      [store],
    )
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
  }
}

const cxtCache = new Map<string, Cxt>()

class Cxt<T = any> {
  defaultStore: IStore<T>
  AppContext: React.Context<IStore<T>>
  Provider: ({ children }: IPropsChild) => JSX.Element
  constructor(key: string, defaultValue: T) {
    this.defaultStore = {
      key,
      store: defaultValue,
      setStore: () => {},
    }
    this.AppContext = createContext(this.defaultStore)
    this.Provider = getCxtProvider(key, defaultValue, this.AppContext)
    cxtCache.set(key, this)
  }
}

export function useStore<T>(key: string) {
  let cxt = cxtCache.get(key) as Cxt<T>
  const app = useContext(cxt.AppContext)
  return {
    store: app.store,
    setStore: app.setStore,
  }
}

export function connectFactory<T>(key: string, defaultValue: T) {
  const cxt = cxtCache.get(key)
  let CurCxt: Cxt
  if (cxt) {
    CurCxt = cxt
  } else {
    CurCxt = new Cxt(key, defaultValue)
  }
  return (Child: React.FC<any>) => {
    return (props: any) => {
      return (
        <CurCxt.Provider>
          <Child {...props} />
        </CurCxt.Provider>
      )
    }
  }
}
