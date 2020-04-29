'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "b60afb5e60165865a62af0f1518224d8",
"/": "b60afb5e60165865a62af0f1518224d8",
"main.dart.js": "8ef78a8aa872b739503e7c13e6c5f1c1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "590cac45d4c38259f9cdca40a2e68b34",
".git/config": "5b40c498fed22a8e78760f648138779f",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/345cc084c2e1407e028d784ef6e1c2c1debc2f": "148f30c5d08406630187df9f756ec4f0",
".git/objects/34/5fdd2cfbc769b26eaff897ffe68409323e8744": "3b1efc87df8fe338af3bfcc0ca3f5121",
".git/objects/fc/485b5a05f5bb2d44bbf881cf3438e0a03288d9": "122451bff09917e95cfb6a3f94bdf51a",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/29/bf88aae4fb715e2bceb9da058d6074bcb934a2": "027334bdbbd1841c948daaca4d479ac2",
".git/objects/89/5159bd71dbf65cd341c7946359a7fec12ba1d4": "1c25e3361156c0b47d54538d328d22bb",
".git/objects/17/9c9dbd31ca7dc6c9ae1160efd8c46c2c79353f": "6c8923a107855ed9a6d770f5ab492a76",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/0be9e8f43f46b805b1d1895c693f1fa2402570": "e937f5399baaecc5e94290fc3d63a5e9",
".git/objects/96/77ed91afbf406a9bb54f4e46f81a543cd0694e": "5c959e71bf4080dd25e8084060c206ca",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/dd/8500f98aad7ed808112e6231ac2cd37fde2e28": "277ef001c59533e4e00e441c0d5a523e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/40bd24570ddbfbdd6c46a5153c5fda276f0009": "2c47960910f8c4f91f9e9eecb7b268da",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/76/a31d8938808a08a595c1346eedd51a2a75d400": "a346c490d960b06fd7117c76036196cf",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "80491540597fa2df60a2e06f2ccdeaa0",
".git/logs/refs/heads/master": "80491540597fa2df60a2e06f2ccdeaa0",
".git/logs/refs/remotes/origin/master": "8828d48c464e4fee494861f2e8db321a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/refs/heads/master": "9f00d3b49ae63f9e225fc9fd69c1e547",
".git/refs/remotes/origin/master": "9f00d3b49ae63f9e225fc9fd69c1e547",
".git/index": "1b00c2d56e9a448879d362d3cd44b556",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/LICENSE": "18d6228c37583d28bcac699588ecf915",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
