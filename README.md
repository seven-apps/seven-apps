# seven-apps

https://lerna.js.org/

https://medium.com/@vcarl/problems-with-npm-link-and-an-alternative-4dbdd3e66811

https://medium.com/loftbr/creating-a-design-system-with-monorepo-bc18e055fb3c

https://javascript.plainenglish.io/building-a-npm-library-with-web-components-using-lerna-rollup-and-jest-9f76f59348ba


```sh

pack() {
  cd packages/$1
  y build:lib
  rm -rf sevenapps-$1-0.$2.tgz
  rm -rf sevenapps-$1-v0.$2.tgz
  npm pack
  cp sevenapps-$1-0.$2.tgz ~
  cp sevenapps-$1-v0.$2.tgz ~
  cd ..
  cd ..
}

ipack() {
  npm install ~/sevenapps-$1-0.$2.tgz --force
  npm install ~/sevenapps-$1-v0.$2.tgz --force
}

```
