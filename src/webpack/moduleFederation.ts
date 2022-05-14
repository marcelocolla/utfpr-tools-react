import { ModuleFederationConfig, ModuleShared } from './moduleFederation.types'

export function moduleFederationConfig<T = ModuleFederationConfig>(name: string, params?: T): T {
  const config = Object.assign({ filename: 'remoteEntry.js' }, params)

  return {
    ...config,
    name,
  }
}

export function moduleFederationSharedByReact(dependencies?: ModuleShared): ModuleShared {
  const initialValue: ModuleShared = {
    react: {
      singleton: true,
      eager: true,
    },
    'react-dom': {
      singleton: true,
      eager: true,
    },
    'react-router-dom': {
      singleton: true,
      eager: true,
    },
  }

  if (!dependencies) {
    return initialValue
  }

  return {
    ...dependencies,
    ...initialValue,
  }
}
