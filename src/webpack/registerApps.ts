import { ModuleRegisterApps, ModuleRemotes } from './registerApps.types'

export function registerApps(
  apps: ModuleRegisterApps,
): ModuleRemotes {
  const configApps = Object.keys(apps)

  const remotes: ModuleRemotes = {}

  configApps.forEach((appname) => {
    const mfe = apps[appname]

    if (mfe?.enabled) {
      remotes[mfe.localName] = `${mfe.remoteName}@${mfe.url}`
    }
  })

  return remotes
}
