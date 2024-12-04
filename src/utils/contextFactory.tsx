/* eslint-disable */
import { createContext, useContext, useMemo, useState } from 'react'
import { IPropsChild } from '@/types'

type StoreItem = Record<string, any>

interface IStore {
  key: string
  store: StoreItem
  setStore: (payload: StoreItem) => void
}

function getCxtProvider(
  key: string,
  defaultValue: StoreItem,
  AppContext: React.Context<IStore>,
) {
  return ({ children }: IPropsChild) => {
    const [store, setStore] = useState(defaultValue)
    const value = useMemo(
      () => ({
        key,
        store,
        setStore,
      }),
      [store],
    )
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
  }
}

const cxtCache = new Map<string, Cxt>()

class Cxt {
  defaultStore: IStore
  AppContext: React.Context<IStore>
  Provider: ({ children }: IPropsChild) => JSX.Element
  constructor(key: string, defaultValue: StoreItem) {
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

export function useStore(key: string) {
  let cxt = cxtCache.get(key)!
  const app = useContext(cxt.AppContext)
  return {
    store: app.store,
    setStore: app.setStore,
  }
}

export function connectFactory(key: string, defaultValue: StoreItem) {
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
