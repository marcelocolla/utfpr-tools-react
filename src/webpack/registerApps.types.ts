export interface ModuleAppConfig {
  enabled: boolean
  localName: string
  remoteName: string
  url: string
}

export interface ModuleRegisterApps {
  [key: string]: ModuleAppConfig
}

export interface ModuleRemotes {
  [key: string]: string
}
