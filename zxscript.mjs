#!/usr/bin/env zx
$.verbose = true

let repos = await $`git remote show`
let reposArray = repos.stdout.split(/\r?\n/).filter(element => element)
for (const repo of reposArray) {
  await $`git push ${repo}`
}

