'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/index": "1aa212e03f6c4dbe51f45be9a670ec01",
".git/config": "ed4409acc0e03da283aa16da0529b752",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/objects/72/c22b95566f00249c76e2e51f3130d66d391ca0": "55fdce31cc0042a29366f29796de02bc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/2b44e92f0b4713900f94ba33b2b1f52fd21c9c": "d8c40b9667bd61ebfe391977746fd85d",
".git/objects/24/73479b5e5baff7d401b1ed19c749647707656f": "a220698e675fe513142cb121e5c0546e",
".git/objects/81/98a2760af0ad825698924780ac826ef9b0c97b": "948bd1df11e1583882a9ffff560ed08e",
".git/objects/b6/144a498f57477d6f9b26c7f62377f580ddd572": "74acd30fea2d6decb7c2927814f80b6c",
".git/objects/00/d63e090d8cdc8a5f47368595c9ae43d7329140": "c62d43f8871529c83f35529b5fd485aa",
".git/objects/5c/6298d4606823fbbe09c8d7c61a0d15782a043c": "f4dcacd662f5b93902e53b6fd8619081",
".git/objects/eb/4cf64216f31a98638bacfe063b35d5bac91c53": "b93ca3bc78a7a6586b020b3ee98b024d",
".git/objects/90/38ac4d02e855528fafb63d0545fb0abefe1234": "e61a6d729e472bbe11871a7e8970dccc",
".git/objects/d1/1204de0ffe76683014393104c032d202ae68a9": "2a64f372c773e3df8d6df44246205723",
".git/objects/99/bb74864bc4e687e6c8eaec49d1c8e65e523b0e": "17470c3602a67b7630bac064f650e078",
".git/objects/cc/8cc21a92a335ca947c2bde6879d36f8f1641b4": "5654092c4f7a3e82701c6af9f3f69ca3",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/cb/30adf69ca17e0fe0450d2671af334d457053d3": "22369b50ce2bc0962a2c4af832ee309c",
".git/objects/4a/33743b70e280164aa7c82eb1efdae696344ef4": "dd2caae12a373efa828bb035eec236b8",
".git/objects/ca/b55d94d8c7290afce3f686055e1ba85b1382ea": "b699368d9e6a6ef6910f2532753865a5",
".git/objects/44/056fb3ac78ee5a5ff02264c3bc4a4e0a116b52": "998aeb3205caebadb121526d94160336",
".git/objects/17/ba2c9ded5974596f2f93eba49084b7a5dd7c13": "aef9648c27069df173a0e6f06fde5864",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/d4/18d6bf472e42455bc4a1bfab769b304e548493": "f03fb048584f31890cc16318e45120bf",
".git/objects/b2/6c3a3b51947180ef24fa2b75c036bc60e92a0d": "b2e11d6527e995b1e025ea15491e0a70",
".git/objects/b2/4f2f484b990480e65ee10179b83404c7300e09": "55dadd2d396e369cadf6c46af94f095a",
".git/objects/a3/1a6b9fb5c6da30917847266b9a97a418db4db6": "3f93ea36d2f26624b8c49550d1f2f43e",
".git/objects/d5/e9575c6070512c7e01dab91896242357db23b9": "066615a77a0c4f48f11faea0984a84fe",
".git/objects/f8/75e8f6521a85b98d82fec92ad650b63e56f1a3": "e244765e06c0fcd631dae03b42ef8d4d",
".git/objects/f8/d6640e776f85c8333ec95d9d9efd3474223041": "e3f032874c6911d21c2b12ffba5b94c4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/23/e6a445d991bbb2ca650b2f83fca3b580b1580f": "8fa76dc11d7e90740218528aeb3cdd5a",
".git/objects/23/11ebc614d77a8ad85d37821771e25e26f4a6b7": "334dbcdb8c636cb8cf16a1524e9091b5",
".git/objects/52/8b4d7687fb64fe9545ca711d9b6b5bfa183962": "77261fb21dc65039eb5b2e44877dd7bd",
".git/objects/28/4e3bf1528a65d78c47859902245f9b7f7b1592": "e8b66e8d3ea79f94af1125158569db1a",
".git/objects/28/56b182463c7658ecb73a2046f6145e01714d12": "ba1c60043c9d942bb9fe57f4eb641cd4",
".git/objects/9d/45dd77ff941e2b1da680fcf4d25b23a0875f59": "3f0227374e86a0a0c18736255f67de5a",
".git/objects/b9/ac5fc5c85174895225d77a4a2e38f9c56a1696": "3c6a6cd6affe4eb8c6970abe4bdbeb24",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/62/e9350413bf3c50a0769898c9fc9845e6a71afe": "d654ca2046325bc5288e9f16b301dbd5",
".git/objects/0a/a41f68c27b15fa74513c770fb9f93336ed1ef0": "9cfd58b927d44c45f64a00e657d12d3e",
".git/objects/7f/b3ae9e5af5a10e385cc741ec9e364298b4f979": "4656fe81ef55ff78d34a64661442b996",
".git/objects/a5/e0cad666c295db3da58f5b427ab0d21fe64d37": "c8575a681f792ecd5b73d76d37a0ca32",
".git/objects/5b/ec2b109190ea9b2bb0c5b000a38ea7f6a395c1": "9913ea9c1ad43ce43b08d77f9513cdbd",
".git/objects/b1/5c067a2b5d5def3cc73e5193d82625282cb879": "46389541b487a2fabf0668affd4a84ff",
".git/objects/f6/05345df649264efb5d00cb07085598f6ccfe33": "3370b09cd32fb74a04ffc9e77eb9faa6",
".git/objects/77/45284fd51b70056329a5a9d175eb37b5bf576c": "dda11c9ddc51eb393a4394175a9ede59",
".git/objects/ac/4c72dfd8ee436bf1f832d766aba60bd3162845": "5f47230bc154bd003956e35a234cbc9a",
".git/objects/34/b064532b2d66f71fb0b7bad477cebe500e9cbf": "0f124316e7c0ca64a7b003c9f6edc9b7",
".git/objects/32/01c1c501a6177400d10eb79782c6c38c93e053": "783c617f3e306fd14e8a076e417bf00c",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/c8/3f3bbeae021c4421ddd058ca90ae91460a18c2": "8fca9b0d940c4cbfb39327059f12acd0",
".git/objects/5a/721bb2f6c797dc312b108a0724d603b912de5c": "b138432570bf965707d90778a22bb1f7",
".git/objects/9c/0c54b2d1b1a4d2cb4dede4b87e69a89eecce4f": "48821522d3b37c4e678c34fa5c1f29a1",
".git/objects/9c/694ec3069b56396c8c0ff05270ef7e48a7828a": "0992069738b301f460dcbec25a858a76",
".git/objects/58/063ee57cd082ea862d011e065cf8a27a216a10": "738fcbb0d4104cb9d2af8582360040e2",
".git/objects/2a/cc699b3aa3fa410bfa40f784470c0c5d9cf8c2": "1ee7efefa0a2cbaee9ec7f7ea5dcb2c7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/c05fe6f6ef84e82d4599ae95c171ecf861bc19": "fe720d38b91a6bfafcdf8b7f25140a85",
".git/objects/18/8c3177d9139d55fd3778f46d1d9aa3bd942930": "9771cb22ecd1021fa190da6a67f65c3c",
".git/objects/57/58ce5076e7df86bfb924e617ced3932f94608a": "c79deb151c51508db65dd3ebd2d089dc",
".git/objects/6f/3df8e62771c954905ab8b6f40e2e8c6b48f872": "5c12f48cbdcee2a2ee0ff91cb486c40e",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/a9/b86d88be668077eb99cc5c505fcda7886cf904": "b1746b3b5363b11a944e8dbb3343fd98",
".git/objects/a9/a9a7eabb7abe4201313356de2971228af11b28": "71ed224936444ab1cf67ccab45b306ee",
".git/objects/1b/948e0973c10534e45dc06057a3792c4b19fb4c": "a29028310c05ff9b1c3f5c53320d6ac9",
".git/objects/13/25c21fcc097d99eb2b400a7acfc890e3444eb4": "99e8d844d7c3a48e09f62f87370ea77c",
".git/objects/1a/08cb8c6f8a223366f6a2384a4500420634edae": "657c196713370dce314cde9ec1fcd0aa",
".git/objects/2f/9e34ba98de7a8ebabfc9f72d40c4c7ce0c4b5c": "bf49a01f12f57c0c5df7e58e4dc9a88f",
".git/objects/25/9e5b2da2631cf11fc7b39c8349606909f402c6": "c2ec99d184faf0144a612528ef0c290c",
".git/objects/63/b37e2cd01f12076704854e5db42764da48554c": "cd1a14c095f15ce6f66176fe66934ed4",
".git/objects/dd/f9169ae19b50c7290528f2b7272b1f2c06ea6e": "0786b8d234d2bc9b9d0762f9e9444d62",
".git/objects/ae/8dbd586f21647929461e58dccd6057b50ee410": "e25411a2a915bec2d42c21f7f98c54a0",
".git/objects/bc/226cd9b0c564690e8ab2c7e5f71c4dfc8c24f2": "0fe780e835d412e70d7e4976e16208c4",
".git/objects/cf/5f7ffa877004e375422881e2f3519234c93dbe": "65a25255efe38fb444fcdef8ba709e76",
".git/objects/fc/2a2323a1468b27f2d4b2c313a3c2577904924e": "c975ba6b1aea4d8b062ae8b38108acbb",
".git/objects/fc/7bd447fd9d431d9f92f491a635cb4607c0cb43": "ad48be42152b7727088762062cf8c5d8",
".git/objects/e6/e3f368370ccca7131316d3c3d5add4b268e9bd": "7670d97bcec61351b178eb47a6902826",
".git/objects/e6/7683c948568bbb3e5c999596c1d01f0ab3c62f": "6215b18cd188d6c242d65cfe28e73af3",
".git/objects/3a/1afe903eb7d703eee2491f7869b8aeecedc759": "adde101a895ada172bd62da3887cfeb0",
".git/objects/3a/017931237163f16d472c62216fd4ee06b53c11": "31d385c8f38e6444e08375591932c998",
".git/objects/e3/91559c2b9033f73e867c66d69cfb6021d0d152": "e4b6b7d0e04083650ffd9144b908fd90",
".git/objects/5d/410923e9b11d05c271ddbffd3a70f162db4fc0": "ce80f017f2050f145b8d4a5ae2b35ec2",
".git/objects/6e/9cd156efa42f0dd0b62fc77775a25548ec3bba": "336e208c4c2b0a00d44a1f56b10c36de",
".git/objects/e8/57cf901b0ea09027747d32b532a1aaf003783d": "cda04088c344bc9a616842e4669c3301",
".git/objects/66/083c93be4403b7f646fec5208860bbbacbf840": "348aae5bbc9f6b45522fc14879a63076",
".git/objects/3c/c5a2eb2641434e646759c0e0534158dccf1819": "ef3cbe3d15f977fb7f78c18f0a9a5ff2",
".git/objects/64/7f0779144033fa1bb81dce10bbc04692b4b026": "40a40609189a0d030ac1ada06fe7cba9",
".git/objects/af/c4a95b2b12297f7ff9e5e3b1c755fd04131564": "a469cd5f619a2a53bbba55607fb53ab8",
".git/objects/c9/4acee3aeb3a9b337be08df43a055905089a927": "9f7c876ed5722c1fc0e443ac7ed7183a",
".git/objects/96/04088713530a17ac865f56f0a9b751befe8e0c": "4f86a554ce184d4b8e5981acb8f239e1",
".git/objects/b3/22dac9c64ad528c6494a89da4f9d4b8a05b520": "f1b239c3eeae305d3f908b241793b4da",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/COMMIT_EDITMSG": "ee323a427d3452b7df021951cabf38a9",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/refs/remotes/origin/main": "53ed8991ad16cdca9707b17d33c2979a",
".git/refs/heads/main": "53ed8991ad16cdca9707b17d33c2979a",
".git/logs/HEAD": "7d4f871eb412f6ddb935c88a555d0a31",
".git/logs/refs/remotes/origin/main": "22ab012eace443857596db5078fd7b70",
".git/logs/refs/heads/main": "3c363573ebc47dc173d856ee9e784b6c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"main.dart.js": "ffd1c424c0c804a18f4e8eb6418de77b",
"manifest.json": "9824be54732262bd6351afe1f99b65fc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "9e43d6c8154690fa319a77fec3ff798b",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"version.json": "247731112e1687c8bbac12f27f042d54",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "4acc40d5909da71a9569a026dac900e4",
"/": "4acc40d5909da71a9569a026dac900e4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
