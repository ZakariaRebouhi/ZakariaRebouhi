'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ed44f8b5e13c2bb6568b23dcf51dce57",
"assets/assets/fonts/WorkSans-Black.ttf": "fef7be3906339b40b3032ad291d7e9f1",
"assets/assets/fonts/WorkSans-BlackItalic.ttf": "70ea5b57f55661ae92c68739c08d9c78",
"assets/assets/fonts/WorkSans-Bold.ttf": "c3c52b1b8ae0ad984a5fa87f99689b44",
"assets/assets/fonts/WorkSans-BoldItalic.ttf": "8d9dba8cc813949a5d0734401001e0bf",
"assets/assets/fonts/WorkSans-ExtraBold.ttf": "d07d1e39f8cafab2f569cce24aecc324",
"assets/assets/fonts/WorkSans-ExtraBoldItalic.ttf": "cb1ef12df057dda2f4ad32cef7a8878d",
"assets/assets/fonts/WorkSans-ExtraLight.ttf": "1ef30e8a0dbce2e2371a968f0a0fca02",
"assets/assets/fonts/WorkSans-ExtraLightItalic.ttf": "1648b37c519e4e9e5fa080b89da128e7",
"assets/assets/fonts/WorkSans-Italic.ttf": "8ce07eb6cb78e3b42bd76d2267122412",
"assets/assets/fonts/WorkSans-LightItalic.ttf": "874c49c2a1e43f7a1d75ed99067d4b86",
"assets/assets/fonts/WorkSans-Medium.ttf": "afdad9a25d460b4d08f68cab6a4174d0",
"assets/assets/fonts/WorkSans-MediumItalic.ttf": "29a08b961a1ecbe663361e787783a1b0",
"assets/assets/fonts/WorkSans-Regular.ttf": "755318e35560b555cc25ac01888be02a",
"assets/assets/fonts/WorkSans-SemiBold.ttf": "46250df8f22a63083a8f7db59efdb2cd",
"assets/assets/fonts/WorkSans-SemiBoldItalic.ttf": "58c2bce6b7d719953f99538b711f4d53",
"assets/assets/fonts/WorkSans-Thin.ttf": "c12d4a79ab6c501a396a11cb87d12878",
"assets/assets/fonts/WorkSans-ThinItalic.ttf": "6b35a3b7bfe29968d4c14fc8f1bad728",
"assets/assets/images/logo.png": "4dcebc5137778a31d926f5648fddad67",
"assets/assets/images/projects/1000%2520prject%2520idea/android%2520images%2520list/0.jpg": "5397b9fa4605c90bb2cca3e8890f6d8f",
"assets/assets/images/projects/1000%2520prject%2520idea/android%2520images%2520list/1.jpg": "b0ad39b99149ac4e0d842cd6cae1bcf7",
"assets/assets/images/projects/1000%2520prject%2520idea/android%2520images%2520list/10.jpg": "f6efed2be85a66243f5bbf9ea066f79b",
"assets/assets/images/projects/1000%2520prject%2520idea/android%2520images%2520list/11.jpg": "4e81b8e10757effb9d4085c8bd53f479",
"assets/assets/images/projects/1000%2520prject%2520idea/android%2520images%2520list/12.jpg": "2200569e371bee368a6b66838daba0f9",
"assets/assets/images/projects/1000%2520prject%2520idea/android%2520images%2520list/13.jpg": "a1c6863ba3de17271aa94af55a51e3f4",
"assets/assets/images/projects/1000%2520prject%2520idea/android%2520images%2520list/14.jpg": "7a2500fed1026aaf5868e1de0f74e034",
"assets/assets/images/projects/1000%2520prject%2520idea/android%2520images%2520list/15.jpg": "fadb6528b3bb5be5f4b2fb309e0b192b",
"assets/assets/images/projects/1000%2520prject%2520idea/android%2520images%2520list/16.jpg": "8585c15c094314f001c73c30b6809d47",
"assets/assets/images/projects/1000%2520prject%2520idea/android%2520images%2520list/2.jpg": "db4eb3a87ea9d059a61a9b0326480bc8",
"assets/assets/images/projects/1000%2520prject%2520idea/android%2520images%2520list/3.jpg": "486c6437aee642675fbcbcfe223e25c2",
"assets/assets/images/projects/1000%2520prject%2520idea/android%2520images%2520list/4.jpg": "eef34849812d495b54f05f10859f0958",
"assets/assets/images/projects/1000%2520prject%2520idea/android%2520images%2520list/5.jpg": "9319b42a561d63bbe466f57f121c89f5",
"assets/assets/images/projects/1000%2520prject%2520idea/android%2520images%2520list/6.jpg": "8e8bd5b80fb0aac305f2432660df275b",
"assets/assets/images/projects/1000%2520prject%2520idea/android%2520images%2520list/7.jpg": "12db0ecf6f6af4e74ffe5895444dedf8",
"assets/assets/images/projects/1000%2520prject%2520idea/android%2520images%2520list/8.jpg": "0abe90f58234b203030f5c2b19b0bf34",
"assets/assets/images/projects/1000%2520prject%2520idea/android%2520images%2520list/9.jpg": "4c4b3ff7cb1cda5446358d8a54b68b4a",
"assets/assets/images/projects/1000%2520prject%2520idea/cover.png": "8f74b3945b4d0ae66bbf4c37e1909674",
"assets/assets/images/projects/laboratoire%2520beslimane/android%2520images%2520list/0.jpg": "068045c9fd4439aaf90f51c5e57b542e",
"assets/assets/images/projects/laboratoire%2520beslimane/android%2520images%2520list/1.jpg": "17441d501a073721fd4d7903faf367a9",
"assets/assets/images/projects/laboratoire%2520beslimane/android%2520images%2520list/10.jpg": "17441d501a073721fd4d7903faf367a9",
"assets/assets/images/projects/laboratoire%2520beslimane/android%2520images%2520list/11.jpg": "e6f652a56ac1d842a74305ea27427870",
"assets/assets/images/projects/laboratoire%2520beslimane/android%2520images%2520list/12.jpg": "24e9cfafb7b55e16fdfd2e1bfd012f91",
"assets/assets/images/projects/laboratoire%2520beslimane/android%2520images%2520list/13.jpg": "0b62fdf4a45c08dadd5cf6a03e434e5c",
"assets/assets/images/projects/laboratoire%2520beslimane/android%2520images%2520list/14.jpg": "c9155c7f1ac6576e1373af299afc2ed9",
"assets/assets/images/projects/laboratoire%2520beslimane/android%2520images%2520list/15.jpg": "2a782813f9fdcecd7835a3b31fefa80e",
"assets/assets/images/projects/laboratoire%2520beslimane/android%2520images%2520list/16.jpg": "90c848f20191cc54ee2f93ec176343f2",
"assets/assets/images/projects/laboratoire%2520beslimane/android%2520images%2520list/2.jpg": "b714b9cd49254c5f3a3cb35b98ac1ede",
"assets/assets/images/projects/laboratoire%2520beslimane/android%2520images%2520list/3.jpg": "f9ca4fa3286d430542db7fc06ae96dad",
"assets/assets/images/projects/laboratoire%2520beslimane/android%2520images%2520list/4.jpg": "72d56819bb61ac78d838a8ad119fabd9",
"assets/assets/images/projects/laboratoire%2520beslimane/android%2520images%2520list/5.jpg": "d0c92cf32a7c837e9f2f2a65c6d1a928",
"assets/assets/images/projects/laboratoire%2520beslimane/android%2520images%2520list/6.jpg": "bc01c5cc0f5ef343995fcb042ed1e150",
"assets/assets/images/projects/laboratoire%2520beslimane/android%2520images%2520list/7.jpg": "17441d501a073721fd4d7903faf367a9",
"assets/assets/images/projects/laboratoire%2520beslimane/android%2520images%2520list/8.jpg": "a4a0e80d04fe9870714ea6f0f424cc03",
"assets/assets/images/projects/laboratoire%2520beslimane/android%2520images%2520list/9.jpg": "27a251dc68b5135621ec394aa24e4174",
"assets/assets/images/projects/laboratoire%2520beslimane/cover.png": "a5af7fe4e39ff0e95eff4b702a6d659f",
"assets/assets/images/projects/laboratoire%2520beslimane/windows%2520images%2520list/0.png": "697ed809f067f247406279bdbfd18861",
"assets/assets/images/projects/laboratoire%2520beslimane/windows%2520images%2520list/1.png": "c7d932136bc4e0ca41134a13fb464241",
"assets/assets/images/projects/laboratoire%2520beslimane/windows%2520images%2520list/10.png": "27852452a55415f03ddca7fb5fbd12a2",
"assets/assets/images/projects/laboratoire%2520beslimane/windows%2520images%2520list/11.png": "e894d20d5e4077478ca786cb0de45d33",
"assets/assets/images/projects/laboratoire%2520beslimane/windows%2520images%2520list/12.png": "3b2b022f5f8a3a4b2bee000b79844cfe",
"assets/assets/images/projects/laboratoire%2520beslimane/windows%2520images%2520list/13.png": "c8c324e67aa0865c3f28bb6d3875b3ba",
"assets/assets/images/projects/laboratoire%2520beslimane/windows%2520images%2520list/14.png": "bd9c88ab9d986fe978f876db6194de0f",
"assets/assets/images/projects/laboratoire%2520beslimane/windows%2520images%2520list/15.png": "ef1aec9310586a990e083c456864aa13",
"assets/assets/images/projects/laboratoire%2520beslimane/windows%2520images%2520list/2.png": "1ce416d3659c41316068aaa2d2101ec3",
"assets/assets/images/projects/laboratoire%2520beslimane/windows%2520images%2520list/3.png": "83ae0f67c1409d8841ad6c03f13b4f38",
"assets/assets/images/projects/laboratoire%2520beslimane/windows%2520images%2520list/4.png": "6a619abc47222e3a37faa01f547b39f9",
"assets/assets/images/projects/laboratoire%2520beslimane/windows%2520images%2520list/5.png": "58b0b32afb075fdeb3e2d0827dff00c6",
"assets/assets/images/projects/laboratoire%2520beslimane/windows%2520images%2520list/6.png": "4ec7510fe58eec6746f4a33721b949a6",
"assets/assets/images/projects/laboratoire%2520beslimane/windows%2520images%2520list/7.png": "85b5cea6aa5ded5951be58d4d502b154",
"assets/assets/images/projects/laboratoire%2520beslimane/windows%2520images%2520list/8.png": "1d53fce1eaa89d19f8b39cac7543b25c",
"assets/assets/images/projects/laboratoire%2520beslimane/windows%2520images%2520list/9.png": "897ebaff06e968973a179852a03d6b8e",
"assets/assets/images/projects/qiro%2520scan%2520and%2520generate/android%2520images%2520list/0.jpg": "ff01fc28d067f82429a2fbc5b58b9788",
"assets/assets/images/projects/qiro%2520scan%2520and%2520generate/android%2520images%2520list/1.jpg": "4bd5ef4896ac051d14fceba96f4b9a38",
"assets/assets/images/projects/qiro%2520scan%2520and%2520generate/android%2520images%2520list/10.jpg": "75f0fa7620ec82c2bbe883da3aa3c585",
"assets/assets/images/projects/qiro%2520scan%2520and%2520generate/android%2520images%2520list/11.jpg": "943da8a8944e8a86a053d527f684bb4e",
"assets/assets/images/projects/qiro%2520scan%2520and%2520generate/android%2520images%2520list/12.jpg": "0e683dc09ec1bb6672c729b6907ad837",
"assets/assets/images/projects/qiro%2520scan%2520and%2520generate/android%2520images%2520list/13.jpg": "a12b8f78fd885e39e297c5fd5df9fbda",
"assets/assets/images/projects/qiro%2520scan%2520and%2520generate/android%2520images%2520list/14.jpg": "584944003e0d154af4a51c71b3a6aecd",
"assets/assets/images/projects/qiro%2520scan%2520and%2520generate/android%2520images%2520list/15.jpg": "ff01fc28d067f82429a2fbc5b58b9788",
"assets/assets/images/projects/qiro%2520scan%2520and%2520generate/android%2520images%2520list/16.jpg": "df7f7bfe6d45ac0763dd812073e0aae8",
"assets/assets/images/projects/qiro%2520scan%2520and%2520generate/android%2520images%2520list/17.jpg": "f25eac4e5a2b217f0c63fdddeb5d1cee",
"assets/assets/images/projects/qiro%2520scan%2520and%2520generate/android%2520images%2520list/18.jpg": "cb78bf4ac43f7392a7acd1ae668ca100",
"assets/assets/images/projects/qiro%2520scan%2520and%2520generate/android%2520images%2520list/2.jpg": "e90290fa7b1d1bd8b694be0bd3fd9ae6",
"assets/assets/images/projects/qiro%2520scan%2520and%2520generate/android%2520images%2520list/299288569_1080399342848271_7384565671595915567_n.jpg": "50b36927e46cbaea2d92a78570a809cb",
"assets/assets/images/projects/qiro%2520scan%2520and%2520generate/android%2520images%2520list/3.jpg": "623ed4a0c04fa970ea4bc96a6558d2bd",
"assets/assets/images/projects/qiro%2520scan%2520and%2520generate/android%2520images%2520list/4.jpg": "0978870e7990ee7b1c9b3eeb5297963b",
"assets/assets/images/projects/qiro%2520scan%2520and%2520generate/android%2520images%2520list/5.jpg": "ff01fc28d067f82429a2fbc5b58b9788",
"assets/assets/images/projects/qiro%2520scan%2520and%2520generate/android%2520images%2520list/6.jpg": "3b1a3a8a08753d5c68fb2400968b10b1",
"assets/assets/images/projects/qiro%2520scan%2520and%2520generate/android%2520images%2520list/7.jpg": "3942aae1919f9fdf1a7deccc87fedf46",
"assets/assets/images/projects/qiro%2520scan%2520and%2520generate/android%2520images%2520list/8.jpg": "681348d951ce7e6ba5b5be5ba766a5ed",
"assets/assets/images/projects/qiro%2520scan%2520and%2520generate/android%2520images%2520list/9.jpg": "1d0fdd486b8849beb70b6b8d1d83cd4c",
"assets/assets/images/projects/qiro%2520scan%2520and%2520generate/cover.png": "62091483a31bd32e5c254d4365d35ff1",
"assets/assets/images/projects/raki%2520taha/android%2520images%2520list/0.jpg": "a71dd5366726fa279c985547a256bec4",
"assets/assets/images/projects/raki%2520taha/android%2520images%2520list/1.jpg": "d07dc2ac17438bf58f8c3663209380af",
"assets/assets/images/projects/raki%2520taha/android%2520images%2520list/2.jpg": "3539ecdcfd869bd550647361972ab516",
"assets/assets/images/projects/raki%2520taha/android%2520images%2520list/3.jpg": "e1b7e4061a9b285062a3037398d37656",
"assets/assets/images/projects/raki%2520taha/android%2520images%2520list/4.jpg": "a93960a52d93c68d43b8e34c7acc5e05",
"assets/assets/images/projects/raki%2520taha/android%2520images%2520list/5.jpg": "122b6d26ea7c8090d1f42b3730f5b581",
"assets/assets/images/projects/raki%2520taha/android%2520images%2520list/6.jpg": "0d8604b73d0d371d3575f5f827c9193a",
"assets/assets/images/projects/raki%2520taha/android%2520images%2520list/7.jpg": "c0c015199f05bed74a71ae15c0d0c8dd",
"assets/assets/images/projects/raki%2520taha/android%2520images%2520list/8.jpg": "15b9b0ea433b18b05fcbf57a1da1e0be",
"assets/assets/images/projects/raki%2520taha/android%2520images%2520list/9.jpg": "844e797cc349c7f156470ac3eefefda2",
"assets/assets/images/projects/raki%2520taha/cover.png": "1f79b32eb247d2ce8da0113b89a14d88",
"assets/assets/images/projects/smile%2520ditection/android%2520images%2520list/0.jpg": "79e76f2660cfdf6dc197f4349fc661be",
"assets/assets/images/projects/smile%2520ditection/android%2520images%2520list/1.jpg": "8f48d243fa44fcd59e91e72e44370138",
"assets/assets/images/projects/smile%2520ditection/android%2520images%2520list/10.jpg": "ec26cc4f970a387195825fe815265818",
"assets/assets/images/projects/smile%2520ditection/android%2520images%2520list/11.jpg": "2aa417161a91df73b5272a1ce8ca851e",
"assets/assets/images/projects/smile%2520ditection/android%2520images%2520list/2.jpg": "750fc8e57e2b26235c608ef7747df691",
"assets/assets/images/projects/smile%2520ditection/android%2520images%2520list/3.jpg": "76467a7b68233d7fd2c33fc9ba9b730c",
"assets/assets/images/projects/smile%2520ditection/android%2520images%2520list/4.jpg": "f5385d44cad6e6edf0047ea2c7f8f84d",
"assets/assets/images/projects/smile%2520ditection/android%2520images%2520list/5.jpg": "f6deddf6539429236ebe2b877b25d394",
"assets/assets/images/projects/smile%2520ditection/android%2520images%2520list/6.jpg": "d24133acfa4b380dd2d88ece73aacbc0",
"assets/assets/images/projects/smile%2520ditection/android%2520images%2520list/7.jpg": "cf66ed4338e54795c149ab020758db32",
"assets/assets/images/projects/smile%2520ditection/android%2520images%2520list/8.jpg": "353cbb21c53fdaa75de9be14c1523f53",
"assets/assets/images/projects/smile%2520ditection/android%2520images%2520list/9.jpg": "3c02399eadb3b9497dfe7cb51ffca8da",
"assets/assets/images/projects/smile%2520ditection/cover.png": "5ce93a519e313a0c99d9822c5d4faeac",
"assets/FontManifest.json": "c264be4d4adb9257db802b50ed1cafb0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "3a5f22273350a0a078038594f199e5f1",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/im_animations/assets/avatars/man.png": "6cb616c880ca291582ab569d443f9cc6",
"assets/packages/im_animations/assets/stamp.jpeg": "2e8629bcc63453ad8097a1e3a5226df0",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7821a4998c9270378baab537b5609043",
"/": "7821a4998c9270378baab537b5609043",
"main.dart.js": "826ac9a3dc23856922b3b4440618514e",
"manifest.json": "e59529082919720cd098c8eab9f81c07",
"version.json": "25ad4d006ea88e617352a180b6c2095b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
