export type ModuleFederationConfigParams = {
  filename?: string
  remotes?: ModuleRemotes,
  shared?: ModuleShared,
}

export type ModuleFederationConfig = ModuleFederationConfigParams & {
  name: string
  filename: string
}

export type ModuleRemotes = {
  [key: string]: string
}

export type ModuleShared = {
  [key: string]: string | ModuleSharedItem
}

export type ModuleSharedItem = {
  singleton: boolean
  eager: boolean
}