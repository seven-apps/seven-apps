//@ts-nocheck
import { useEffect } from 'react'

let subscribers = []
export let act: any = {}

const subscribe = (filter: string, callback) => {
  if (filter === undefined || filter === null) return undefined
  if (callback === undefined || callback === null) return undefined

  subscribers = [...subscribers, [filter, callback]]
  return () => {
    subscribers = subscribers.filter((subscriber) => subscriber[1] !== callback)
  }
}

const subscribeActions = (actions) => {
  Object.keys(actions).forEach((type) => {
    act = {
      ...act,
      [type]: type,
    }
    subscribe(type, actions[type])
  })
}

export const dispatch = (event, ...props) => {
  const args = [...(props ? props : [])]

  subscribers.forEach(([filter, callback]) => {
    if (typeof filter === 'string' && filter !== event) return
    if (Array.isArray(filter) && !filter.includes(event)) return
    if (filter instanceof RegExp && !filter.test(event)) return
    if (typeof filter === 'function' && !filter(...args)) return

    callback(...args)
  })
}

export const useActions = (actions, deps = []) => {
  useEffect(() => {
    return subscribeActions(actions)
  }, deps)

  return dispatch
}

export const useAction = (type, action, deps = []) => {
  useEffect(() => {
    return subscribe(type, action)
  }, deps)

  return dispatch
}
