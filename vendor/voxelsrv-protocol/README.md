For client, see [VoxelSrv/voxelsrv](https://github.com/VoxelSrv/voxelsrv)
For server, see [VoxelSrv/voxelsrv-server](https://github.com/VoxelSrv/voxelsrv-server)

VoxelSrv is using Protocol Buffers with additional byte (ID) at the beginning - [id byte, ...serialized protocol buffer output].
ID is based on position of message in definition file (so for client, LoginResponse = 0. Ping = 1...).
IDmap can be also found in idmap folder as a JSON array. Data itself is send via WebSocket (`ws://` for unencrypted and `wss://` for encrypted).

If you need files for other languages than provided, you can copy `proto` folder and use any protocol buffer 3 implementation.

Server.\* and client.\* files are most likely ones you need. Proxy-* is only used for connecting to non-websocket based servers with main (or any other) proxy. Mostly used for mc0.30c/etc support

If you want to use it, you should check:
- [Protocol buffer definition files](https://github.com/VoxelSrv/protocol/tree/v3/proto)
- General documentation [Protocol Buffers](https://developers.google.com/protocol-buffers)
- Example VoxelSrv server (Typescript): [voxelsrv-server](https://github.com/VoxelSrv/voxelsrv-server/)
- [Javascript implementation of Protocol Buffers](https://www.npmjs.com/package/protobufjs)
- [About java-lite files](https://github.com/protocolbuffers/protobuf/blob/master/java/lite.md)
