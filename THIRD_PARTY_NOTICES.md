# Third-party notices

This document identifies third-party work distributed with or used to build voxel-webmcp.
`LICENCE` covers the project software and its modifications except where another licence is
stated. It does not relicense third-party assets, fonts, or dependencies.

## VoxelSrv

This project contains modified code from
[VoxelSrv](https://github.com/VoxelSrv/voxelsrv), originally created by Patbox.

- Copyright: 2020 Patbox
- Licence: MIT
- Licence text: `LICENCE`

The original copyright and permission notice is retained as required by the MIT License. This
fork is independently maintained and is not endorsed by the upstream authors.

## Pixel Perfection Community Edition

VoxelSrv attributes its graphics collection to
[Pixel Perfection Community Edition](https://github.com/Athemis/PixelPerfectionCE), originally
created by XSSheep and maintained by community contributors. Corresponding graphics in this
fork are distributed primarily under `public/textures/`.

- Licence: [Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/legalcode)
- Source: [Athemis/PixelPerfectionCE](https://github.com/Athemis/PixelPerfectionCE)
- Attribution: XSSheep, StonePendant, freejusticehere, Stingraych, Nova_Wostra, lazerl0rd, and
  other Pixel Perfection CE contributors
- Changes: selected assets are reorganized and repackaged for use by a browser voxel game;
  filenames, directory layout, and presentation may differ from the original resource pack

The asset files and adaptations remain available under CC BY-SA 4.0. No endorsement by the
creators is implied.

## Fonts

- Silkscreen by Jason Kottke is distributed under the SIL Open Font License. Its attribution
  and licence link are in `public/fonts/silkscreen.txt`.
- Lato is copyright 2010-2014 tyPoland Lukasz Dziedzic and is distributed under the SIL Open
  Font License 1.1. Its full notice is in `public/fonts/Lato/lato.txt`.
- Pixel Operator is distributed under CC0 1.0. Its full terms are in
  `public/fonts/PixelOperator/LICENSE.txt`.

## Software dependencies

The exact dependency versions are recorded in `package-lock.json`. Every dependency remains
under its own licence. Core bundled components include:

| Component | Licence | Source |
| --- | --- | --- |
| noa-engine | MIT | [VoxelSrv/noa-engine](https://github.com/VoxelSrv/noa-engine) |
| voxelsrv-server | MIT | [VoxelSrv/voxelsrv-server](https://github.com/VoxelSrv/voxelsrv-server) |
| voxelsrv-protocol | CC0 1.0 | [VoxelSrv/protocol](https://github.com/VoxelSrv/protocol) |
| Babylon.js packages | Apache 2.0 | [BabylonJS/Babylon.js](https://github.com/BabylonJS/Babylon.js) |
| Dexie.js | Apache 2.0 | [dexie/Dexie.js](https://github.com/dexie/Dexie.js) |
| math.js | Apache 2.0 | [josdejong/mathjs](https://github.com/josdejong/mathjs) |
| memfs 3.2.0 and fs-monkey 1.0.1 | Unlicense | [streamich/memfs](https://github.com/streamich/memfs) |

The installed npm packages contain their applicable licence texts and notices. The remaining
runtime packages declare permissive MIT, ISC, BSD, Zlib, Apache 2.0, CC0, 0BSD, or Unlicense
terms in their package metadata or source repositories. `package-lock.json` is authoritative
for the versions included by a build.

## Player model provenance requiring resolution

The inherited files `public/models/player.json` and `public/models/player_small.json` are
attributed by the upstream VoxelSrv project to
[Template CEM by ewanhowell5195](https://www.curseforge.com/minecraft/texture-packs/template-cem).
That source currently states "All Rights Reserved" and does not publish a redistribution grant.

This attribution is not permission to redistribute those files. Before a public release, the
maintainers must either obtain and record permission from the author or replace the files with
models whose licence permits redistribution.

## Trademarks

Minecraft is a trademark of Microsoft Corporation. This project is an unofficial voxel game
and is not affiliated with or endorsed by Mojang Studios or Microsoft.
