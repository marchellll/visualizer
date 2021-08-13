PHONY: build deploy

build:
	npm run build

deploy: build
	cd dist && \
	git init && \
	git add -A && \
	git commit -m 'deploy' && \
	git push -f git@github.com:marchellll/visualizerku.git master && \
	cd -