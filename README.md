# Shapla Web — শাপলা

A **Bangladesh-themed Telegram web client**: an independent, open-source fork of
[Telegram Web K (tweb)](https://github.com/morethanwords/tweb), painted with the two colours of the
national flag.

| Colour | Hex | RGB | Used for |
|---|---|---|---|
| Bottle green | `#006A4E` | `0, 106, 78` | Accent: buttons, links, badges, selection tint |
| Red | `#F42A41` | `244, 42, 65` | Outgoing message bubbles |

The palette is built into the client rather than layered on top of it: the factory theme of every
base (Day, Night, Dark, Light) is Shapla, the wallpapers are mint/dark bottle-green gradients with a
red hint, and a **Shapla** swatch is the first accent preset in *Settings → General settings → Themes*.
Switch back to the stock look at any time by picking any other swatch.

Everything tweb does is here, unchanged: MTProto in the browser, private chats, groups, channels,
forums/topics, folders, stories, voice and video calls, the media editor, gifts and Stars, premium,
mini apps, PWA/offline caching, and the optional accessibility layer. The status of every feature is
tracked in [TELEGRAM_FEATURES.md](TELEGRAM_FEATURES.md).

- **Modifications vs upstream:** [FORK.md](FORK.md)
- **License:** GPL-3.0, the same as upstream. This fork is not affiliated with or endorsed by Telegram.
- **Upstream:** https://github.com/morethanwords/tweb

## Build and run

Requirements: Node.js 24+, pnpm 11.

```bash
pnpm install
pnpm start        # dev server on http://localhost:8080
pnpm test --run   # unit tests
pnpm run typecheck
pnpm exec vite build   # production bundle -> dist/
```

Serve `dist/` over HTTPS (or localhost) and open it in a browser. The bundle talks to Telegram
directly; to use your own API credentials, put them in `.env.local` (`VITE_API_ID`, `VITE_API_HASH`)
instead of the credentials that ship in `.env`.

Prebuilt bundles are attached to every release on the
[releases page](https://github.com/sheikhminds/shapla-tweb/releases).

## Support

Star the repo, share it with someone who wants a green Telegram, and open an issue when something
breaks. Pull requests that keep the GPL and credit upstream are welcome.

---

## Upstream README

## Telegram Web K
Based on Webogram, patched and improved. Available for everyone here: https://web.telegram.org/k/



### Developing
Install dependencies with:
```lang=bash
pnpm install
```
This will install all the needed dependencies.


#### Running web-server
Just run `pnpm start` to start the web server and the livereload task.
Open http://localhost:8080/ in your browser.


#### Running in production

Run `node build` to build the minimized production version of the app. Copy `public` folder contents to your web server.

### Running in docker

#### Developing: 
* Install dependencies `docker-compose up tweb.dependencies`.
* Run develop container `docker-compose up tweb.develop `.
* Open http://localhost:8080/ in your browser. 

#### Production:
* Run `docker-compose up tweb.production -d` nginx image and container to serve the build
* Open http://localhost:80/ in your browser.

You can use `docker build -f ./.docker/Dockerfile_production -t {dockerhub-username}/{imageName}:{latest} .` to build your production ready image.

### Dependencies
* [BigInteger.js](https://github.com/peterolson/BigInteger.js) ([Unlicense](https://github.com/peterolson/BigInteger.js/blob/master/LICENSE))
* [fflate](https://github.com/101arrowz/fflate) ([MIT License](https://github.com/101arrowz/fflate/blob/master/LICENSE))
* [cryptography](https://github.com/spalt08/cryptography) ([Apache License 2.0](https://github.com/spalt08/cryptography/blob/master/LICENSE))
* [emoji-data](https://github.com/iamcal/emoji-data) ([MIT License](https://github.com/iamcal/emoji-data/blob/master/LICENSE))
* [emoji-test-regex-pattern](https://github.com/mathiasbynens/emoji-test-regex-pattern) ([MIT License](https://github.com/mathiasbynens/emoji-test-regex-pattern/blob/main/LICENSE))
* [tlottie](https://github.com/dkaraush/tlottie) (MIT License)
* [fast-png](https://github.com/image-js/fast-png) ([MIT License](https://github.com/image-js/fast-png/blob/master/LICENSE))
* [opus-recorder](https://github.com/chris-rudmin/opus-recorder) ([BSD License](https://github.com/chris-rudmin/opus-recorder/blob/master/LICENSE.md))
* [Prism](https://github.com/PrismJS/prism) ([MIT License](https://github.com/PrismJS/prism/blob/master/LICENSE))
* [Solid](https://github.com/solidjs/solid) ([MIT License](https://github.com/solidjs/solid/blob/main/LICENSE))
* [TinyLD](https://github.com/komodojp/tinyld) ([MIT License](https://github.com/komodojp/tinyld/blob/develop/license))
* [libwebp.js](https://libwebpjs.appspot.com/)
* fastBlur
* [Mediabunny](https://github.com/Vanilagy/mediabunny) ([Mozilla Public License 2.0](https://github.com/Vanilagy/mediabunny/blob/main/LICENSE))
* [Temml](https://github.com/ronkok/Temml) ([MIT License](https://github.com/ronkok/Temml/blob/main/LICENSE))

### Debugging
You are welcome in helping to minimize the impact of bugs. There are classes, binded to global context. Look through the code for certain one and just get it by its name in developer tools.
Source maps are included in production build for your convenience.

#### Additional query parameters
* **test=1**: to use test DCs
* **debug=1**: to enable additional logging
* **noSharedWorker=1**: to disable Shared Worker, can be useful for debugging
* **http=1**: to force the use of HTTPS transport when connecting to Telegram servers

Should be applied like that: http://localhost:8080/?test=1

#### Taking local storage snapshots
You can also take and load snapshots of the local storage and indexed DB using the `./snapshot-server` [mini-app](/snapshot-server/README.md). Check the `README.md` under this folder for more details.

#### Preview all icons
You can see all the available svg icons by calling the `showIconLibrary()` global function in the browser's console.

### Troubleshooting & Suggesting

If you find an issue with this app or wish something to be added, let Telegram know using the [Suggestions Platform](https://bugs.telegram.org/c/4002).

### Licensing

The source code is licensed under GPL v3. License is available [here](/LICENSE).
