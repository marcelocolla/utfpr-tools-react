export interface WebpackConfigDev {
  mode: 'development'
  devtool: 'hidden-source-map',
  devServer: {
    historyApiFallback: boolean
    open: boolean
    port: number
  },
  output: {
    publicPath: string,
    clean: boolean
  }
}

export function webpackConfigDev (port: number, open = true): WebpackConfigDev {
  return {
    mode: 'development',
    devtool: 'hidden-source-map',
    devServer: {
      historyApiFallback: true,
      open,
      port,
    },
    output: {
      publicPath: `http://localhost:${port}/`,
      clean: true,
    },
  }
}