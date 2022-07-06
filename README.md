# API Goals

Initial purpose of this API is to support data upload. We've modelled the API around Product and Ticket entities, with the Product resource representing information about the Product including manufacturer data, general purpose product features and benefits, barcode information etc. that can be reused across a range of different tickets.

We also then support a Ticket endpoint that provides specific content and information focussed on ticket specific data including price information, store level stock data and promotional messaging. The idea is that this API will be used frequently, and the product API less often.

# M3 OpenAPI 

This repo will build the M3 Open API from a set of individually manageable files based on [OpenAPI Boilerplate](https://github.com/dgarcia360/openapi-boilerplate)

Will need to have node.js, npm etc. installed - it doesn't really use these, but does the package manager npm to orchestrate the building.

For WSL: https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl

For Windows in general: https://stackoverflow.com/questions/16000173/install-npm-node-js-package-manager-on-windows-w-o-using-node-js-msi#16003163

Then, to use the npm run commands outlined below you will need:
```
npm install -g @stoplight/spectral-cli redoc-cli swagger-cli typescript ts-node-dev
```

build uses npm with the following options:

1. npm run build - bundle the various yaml files in the api subdirectory into a single consolidated openapi.yaml file in the _build directory.
2. npm run test - as above then run the spectral linter on the resulting yaml to check for common errors and warnings
3. npm run preview - create a web server serving the Swagger API documentation
4. npm run start - run a mock API server using the generated yaml:

```
GET http://localhost:9000/products
200
49 ms
GET /products HTTP/1.1
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: 5c6fc64a-daab-40a8-86fe-392c5fc22e3a
Host: localhost:9000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
 
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 598
ETag: W/"256-jxLuVVeyB6Lk04OEUzaKIIv65QM"
Date: Tue, 05 Jul 2022 18:36:18 GMT
Connection: keep-alive
Keep-Alive: timeout=5
 
[{"id":"123","chain":"CHS-UK","model":"string","brand":"DNN","qrcode":{"url":"string","id":"string"},"categories":[{"name":"812","description":"Mini Hi-Fi Systems"}],"barcodes":[{"value":"4549292021684","form":"EAN"}],"rating":{"value":"string","url":"string","agent":"string"},"descriptives":[{"text":"string","altText":"string"}],"indicators":[{"name":"string","value":"string","grouping":"string"}],"features":[{"featureValue":["Works with both White and Bread Slices","Doubles as a Coffee Warmer"],"featureRole":{"featureGroupCode":"4009","description":"Med Benefits"}}],"children":["string"]}]
```

Checkout https://www.npmjs.com/package/openapi-backend for more info

Rest of this Readme file is from the original repo...

## Features

* 📝 Write OpenAPI definitions in different files.
* 🔀 Combine all files with [APIDevTools/swagger-cli](https://github.com/APIDevTools/swagger-cli).
* ✅ Validate and lint the OpenAPI document with [stoplight/spectral](https://github.com/stoplight/spectral).
* ✨ Publish reference docs with [redocly/redoc](https://github.com/Redocly/redoc) & GitHub Pages.

## Why?

When I used to document APIs following the OpenAPI spec, I always ended up with documents of thousands of lines, which were a nightmare to maintain.

For this reason, I explored how to split OpenAPI documents. Jump over to my [blog](https://davidgarcia.dev/posts/how-to-split-open-api-spec-into-multiple-files/) to learn more about the process. Based on my research, I created this opinionated template to define, test, and publish modular OpenAPI projects.

Properly organizing your project comes with great advantages. By splitting a large OpenAPI spec into multiple files, it will not only be much easier to handle. Documenting it will be much more enjoyable, too. I also regularly get the feedback that other developers are more willing to contribute and propose changes to the document with this structure.

## Getting started

### Requirements

* Node.js 16 (current)

### Installation

1. Clone the repository.

    ```
    git clone https://github.com/dgarcia360/openapi-boilerplate.git
    ```

2. Install the project dependencies.

    ```
    npm install
    ```

3. Edit `openapi.yaml` to fit your API definition. If you’re not familiar with the OpenAPI Specification, read [Getting started with OAS](https://swagger.io/solutions/getting-started-with-oas/) first.

## Useful commands

The project will build, lint, and preview the OpenAPI document from the terminal, with the following commands:

### Build

The command bundles the spec as one `.yaml` file.

```
npm run build
```

The minified document is stored in `_build/openapi.yaml`.

### Test

The command checks if the document follows the OpenAPI 3.0 Specification.

```
npm run test
```

### Preview

The command builds a docs site so that you can view the rendering on your local browser.

```
npm run preview
```

The server starts on http://127.0.0.1:8080.

The site is generated with [ReDoc](https://github.com/Redocly/redoc).
Here's a preview of a site generated with this command: [Swagger Petstore Reference Documentation](https://dgarcia360.github.io/openapi-boilerplate/).

## Ready-to-use workflows

The project uses [GitHub Actions](https://github.com/features/actions) for Continuous Integration (CI).

On every new pull request, the OpenAPI document is linted with [spectral](https://github.com/stoplightio/spectral). If there are changes that introduce errors, the bot will highlight them replying to the pull request.

When the default branch (e.g. `master`) receives an update, a workflow automatically publishes the API reference documentation site to GitHub Pages.

See `.github/workflows` to customize the available workflows. If you don't plan to use GitHub to host your spec or prefer to keep docs private, delete the `.github` folder.

## Contributing

Contributions are welcome and appreciated! 
If you want to enhance the boilerplate, please read [CONTRIBUTING.md](CONTRIBUTING.md) file first.

## License

Copyright (c) 2019-present David Garcia ([@dgarcia360](https://davidgarcia.dev)). Licensed under the [MIT License](LICENSE.md).

The PetStore example used is derived from [OAI/OpenAPI-Specification](https://github.com/OAI/OpenAPI-Specification/blob/master/examples/v3.0/petstore.yaml), Copyright The Linux Foundation, Licensed under the [Apache License, Version 2.0](https://github.com/OAI/OpenAPI-Specification/blob/master/LICENSE).