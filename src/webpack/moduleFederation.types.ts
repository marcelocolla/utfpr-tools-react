export type ModuleFederationConfig = {
  name?: string
  filename: string
  remotes?: GenericConfig
  shared?: ModuleShared
  exposes?: GenericConfig
}

export type GenericConfig = {
  [key: string]: string
}

export type ModuleShared = {
  [key: string]: string | ModuleSharedItem
}

export type ModuleSharedItem = {
  singleton: boolean
  eager: boolean
}
