'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "9d070e927a029d59049666fc5b336ab6",
"/": "9d070e927a029d59049666fc5b336ab6",
"main.dart.js": "9230cfbc7a122e29edbe9fbe997bc757",
"favicon.png": "a1a0fd6ee216ec88a80ddf06300041ac",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "590cac45d4c38259f9cdca40a2e68b34",
".git/config": "a33bb7e05f06cb20527739da9ff5881f",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/6f/f8dbdeb93509efa77c4dea1712bdaf7f27a171": "6d7a90c3fb9591cd0edd94152fc46330",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/d0/5a95b710535fb1ec00ce367fda331fdd03bf44": "76cb2caf0f939c13e696c921dadb12f7",
".git/objects/fc/485b5a05f5bb2d44bbf881cf3438e0a03288d9": "122451bff09917e95cfb6a3f94bdf51a",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/9a34c8ecc24d3614e01ffead7b1da2d78d720b": "5f55b98204f8d991d6e9e7e2dd3573c4",
".git/objects/17/9c9dbd31ca7dc6c9ae1160efd8c46c2c79353f": "6c8923a107855ed9a6d770f5ab492a76",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/2870cac6800c83dd1dbf04a323af9879812371": "33f2ee2458c115c96a1f04c13a59d9dd",
".git/objects/4c/598c16c03f24f4470c7d08b3c58184567308aa": "d32d63a396997a6746fe52891169562b",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/0be9e8f43f46b805b1d1895c693f1fa2402570": "e937f5399baaecc5e94290fc3d63a5e9",
".git/objects/96/77ed91afbf406a9bb54f4e46f81a543cd0694e": "5c959e71bf4080dd25e8084060c206ca",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/40bd24570ddbfbdd6c46a5153c5fda276f0009": "2c47960910f8c4f91f9e9eecb7b268da",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/76/a31d8938808a08a595c1346eedd51a2a75d400": "a346c490d960b06fd7117c76036196cf",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4af9ff19fabfd07b8e1bcdd5e9bbcc47",
".git/logs/refs/heads/master": "4af9ff19fabfd07b8e1bcdd5e9bbcc47",
".git/logs/refs/remotes/origin/master": "a7c1dbce7ef9b41466f94c3424e4fb01",
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
".git/refs/heads/master": "dba1095cc8b309d99957993333d43512",
".git/refs/remotes/origin/master": "dba1095cc8b309d99957993333d43512",
".git/index": "ae6931ec312e16573a4ea2f4b10c00a3",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/LICENSE": "18d6228c37583d28bcac699588ecf915",
"assets/AssetManifest.json": "691aa22b31533e82d79deedcded5eec9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/title.png": "ece067fa8708816f434e3dc7f8a17aa0",
"assets/assets/logo.png": "9de8ad7cd97927ee50e3be1bb5be77ca",
"assets/assets/back.png": "ab2767eccdbd05bb60262d32d0b0f4eb"
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
