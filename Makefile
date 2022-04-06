.SILENT:
.PHONY: build

include ./.make/text.mk
include ./.make/help.mk

###########
# Install #
###########

## Install dependencies
install:
	symfony composer install
	npm install

###############
# Development #
###############

## Dev - Start the whole application for development purposes
serve:
	# https://www.npmjs.com/package/concurrently
	npx concurrently "make serve.php" "make serve.assets" --names="Symfony,Webpack" --prefix=name --kill-others --kill-others-on-fail

## Dev - Start Symfony server
serve.php:
	symfony server:start --no-tls

## Dev - Start Webpack dev server with HMR (hot reload)
serve.assets:
	npx encore dev-server

## Dev - Clear build directory
clear.build:
	rm -rf build public/build

## Dev - Clear resized images cache
clear.images:
	rm -rf public/resized

#########
# Build #
#########

## Build - Build assets
build.assets: export NODE_ENV = production
build.assets:
	npx encore production

## Build - Build static site
build.content: export APP_ENV = prod
build.content:
	symfony console cache:clear
	symfony console stenope:build

## Build static site without resizing images, for moar speed
build.content-without-images: export APP_ENV = prod
build.content-without-images: export GLIDE_PRE_GENERATE_CACHE = 0
build.content-without-images: export BLUR_HASH = 0
build.content-without-images: export AMBIANT_LIGHT = 0
build.content-without-images:
	symfony console cache:clear
	ulimit -S -n 2048 && symfony console stenope:build

## Build - Build static site with assets
build.static: build.assets build.content

## Serve - Serve the static version
serve.static:
	open http://localhost:8000
	symfony php -S localhost:8000 -t build

## Build - Simulates GH Pages deploy into a subdir / with base url
build.subdir: export APP_ENV = prod
build.subdir: export WEBPACK_PUBLIC_PATH = /shiningame/build
build.subdir: export ROUTER_DEFAULT_URI = http://localhost:8001/shiningame
build.subdir: clear.build build.assets
	symfony console cache:clear
	symfony console stenope:build build/shiningame

## Serve - Serve the static version of the site from a subdir / with base url
serve.static-subdir:
	open http://localhost:8001/shiningame
	symfony php -S localhost:8001 -t build

########
# Lint #
########

## Lint - Lint
lint: lint.php-cs-fixer lint.phpstan lint.twig@integration lint.yaml@integration lint.eslint lint.container lint.composer

lint.composer:
	symfony composer validate --no-check-publish

lint.composer@integration:
	symfony composer validate --no-check-publish --ansi --no-interaction

lint.container:
	symfony console lint:container

lint.container@integration:
	symfony console lint:container --ansi --no-interaction

lint.php-cs-fixer:
	symfony php vendor/bin/php-cs-fixer fix

lint.php-cs-fixer@integration:
	symfony php vendor/bin/php-cs-fixer fix --dry-run --diff

lint.twig@integration:
	symfony console lint:twig templates --show-deprecations --ansi --no-interaction

lint.yaml@integration:
	symfony console lint:yaml config translations content --parse-tags --ansi --no-interaction

lint.phpstan: export APP_ENV = test
lint.phpstan:
	symfony console cache:clear --ansi
	symfony console cache:warmup --ansi
	symfony php vendor/bin/phpstan analyse --memory-limit=-1

lint.phpstan@integration: export APP_ENV = test
lint.phpstan@integration:
	symfony php vendor/bin/phpstan --no-progress --no-interaction analyse

lint.eslint:
	npx eslint assets/js --ext .js,.json --fix

lint.eslint@integration:
	npx eslint assets/js --ext .js,.json

############
# Security #
############

security.symfony@integration:
	symfony check:security

security.npm@integration:
	npm audit ; RC=$${?} ; [ $${RC} -gt 2 ] && exit $${RC} || exit 0

########
# Test #
########

## Test - Most basic test: check the build command, without images
test: build.content-without-images
test:
	$(call message_success, Most basic tests succeeded. You can ensure a \`make build.content\` is successful for more complete tests.)
