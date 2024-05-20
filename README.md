# TypeScript

tut: https://www.youtube.com/watch?v=30LWjhZzg50

⌨️ startNext @ `3:19:34 - Why Interface is important`
 
`npx tsc basics.ts` (compile .js)
`npx ts-node basics.ts` (run .ts)
`npx ts-node src/index.ts` (run .ts)

### Setting up TypeScript for Production/Project
`npx tsc --init` > creates `tsconfig.ts`
`npm init -y` > creates `package.json`
src where we code, dist contains production files
set `"outDir":"./" to "./dist"` to generate js in that dir.
`npx ts -w` (watchmode) > autoupdates .js in the `outDir`

