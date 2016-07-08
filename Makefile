BIN   := ./node_modules/.bin
PATH  := $(BIN):$(PATH)

lint:
	@echo [lint]
	@$(BIN)/eslint javascript test -f stylish --color

tests:
	@echo [tests]
	$(BIN)/istanbul cover --include-all-sources jasmine-node test

watch: all
	@echo [watch]
	@$(BIN)/chokidar 'javascript/**/*.js' 'test/**/*.js' -c 'make all'

all: tests
