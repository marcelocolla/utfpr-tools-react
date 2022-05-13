import { ModuleFederationConfigParams, ModuleFederationConfig, ModuleShared } from "./moduleFederation.types";

export function moduleFederationConfig (name: string, params?: ModuleFederationConfigParams): ModuleFederationConfig {
  const data = Object.assign({ filename: 'remoteEntry.js' }, params)
  
  return {
    ...data,
    name,
  }
}

export function moduleFederationSharedByReact (dependencies?: ModuleShared): ModuleShared {
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