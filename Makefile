PHONY: build deploy

build:
	pnpm run build

deploy:
	rm -rf ./dist
	pnpm run build
	docker compose up -d