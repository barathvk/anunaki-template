import { defineConfig } from 'astro/config'

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  outDir: './build',
  output: 'static',
  trailingSlash: 'never'
})
