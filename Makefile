#
# Vars
#

BIN = ./node_modules/.bin

#
# Tasks
#

node_modules: package.json
	@npm install

test: node_modules
	@${BIN}/tape test/*

validate: node_modules
	@standard

init:
	@git init
	@git add .
	@git commit -am "FIRST"
	@hub create micro-js/load-image -d "Load an image in the browser to ensure it is available to be rendered immediately"
	@travis enable
	@git push -u origin master

.PHONY: test validate init
