.SILENT:
.PHONY: build

###########
# Install #
###########

## Install dependencies
install:
	composer install
	npm install

###############
# Development #
###############

## Start dev server
start:
	symfony server:start --no-tls

## Watch assets
watch:
	npm run watch

## Start webpack dev server
dev:
	npm run dev-server

clear:
	rm -rf build public/build

#########
# Build #
#########

## Build assets
build:
	npm run build

## Build static site
build-content: export APP_ENV = prod
build-content:
	rm -rf public/resized
	bin/console cache:clear
	bin/console stenope:build

## Build static site with assets
build-static: build build-content

## Serve the static version
serve-static:
	open http://localhost:8000
	php -S localhost:8000 -t build

## Simulates GH Pages deploy into a subdir / with base url
build-subdir: export APP_ENV = prod
build-subdir: export WEBPACK_PUBLIC_PATH = /shiningame/build
build-subdir: export ROUTER_DEFAULT_URI = http://localhost:8001/shiningame
build-subdir: clear build
	rm -rf public/resized
	bin/console cache:clear
	bin/console stenope:build build/shiningame

## Serve the static version of the site from a subdir / with base url
serve-static-subdir:
	open http://localhost:8001/shiningame
	php -S localhost:8001 -t build

########
# Lint #
########

lint: lint.php-cs-fixer lint.phpstan lint.twig@integration lint.yaml@integration lint.eslint lint.container lint.composer

lint.composer:
	composer validate --no-check-publish

lint.composer@integration:
	composer validate --no-check-publish --ansi --no-interaction

lint.container:
	bin/console lint:container

lint.container@integration:
	bin/console lint:container --ansi --no-interaction

lint.php-cs-fixer:
	vendor/bin/php-cs-fixer fix

lint.php-cs-fixer@integration:
	vendor/bin/php-cs-fixer fix --dry-run --diff

lint.twig@integration:
	bin/console lint:twig templates --show-deprecations --ansi --no-interaction

lint.yaml@integration:
	bin/console lint:yaml config translations content --parse-tags --ansi --no-interaction

lint.phpstan: export APP_ENV = test
lint.phpstan:
	bin/console cache:clear --ansi
	bin/console cache:warmup --ansi
	vendor/bin/phpstan analyse --memory-limit=-1

lint.phpstan@integration: export APP_ENV = test
lint.phpstan@integration:
	vendor/bin/phpstan --no-progress --no-interaction analyse

lint.eslint:
	npm run fix

lint.eslint@integration:
	npm run lint

############
# Security #
############

security.symfony@integration:
	symfony check:security

security.npm@integration:
	npm audit ; RC=$${?} ; [ $${RC} -gt 2 ] && exit $${RC} || exit 0
