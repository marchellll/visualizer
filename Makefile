PHONY: build

build:
	npm run build
	rm -rf ./doc
	mv ./dist doc