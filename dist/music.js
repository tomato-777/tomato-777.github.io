const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	{
        name: "can we kiss forever",
        artist: 'kina',
        url: 'https://m10.music.126.net/20220315211112/a0e31f9a5cd88a94828de3d5bfd1dc04/yyaac/obj/wonDkMOGw6XDiTHCmMOi/3059586968/b386/c908/f98c/ddc39cf2ed82abb245e8996a1469bdff.m4a',
        cover: 'https://p1.music.126.net/BgsCl01scHEbWJG0ijOS4A==/109951165687403090.jpg?param=130y130',	
    },
    {
        name: "8 Letters",
        artist: 'why dontt me',
        url: 'https://m10.music.126.net/20220315211224/42b54dc580e6b68692a157628f8e40b5/ymusic/717a/1e06/d2ce/7ad00cb9a154be7a6ed69b758cf84e84.mp3',
        cover: 'https://p2.music.126.net/BzLlU3k05AgoRshJb8D18g==/109951163797823866.jpg?param=130y130',	
    },
    {
        name: "为你写的歌",
        artist: '方大同',
        url: 'https://m804.music.126.net/20220315211317/e5bc06131dfc5667f71b2cdabb3c3a5f/jdyyaac/050f/000f/565f/2e6b34a7807ecb151946a58902ae2342.m4a?authSecret=0000017f8d9f3ce508490aaba0540721',
        cover: 'https://p2.music.126.net/1U1iWW1z8gypkPFbPe_H-g==/72567767445970.jpg?param=130y130',	
    },
    {
        name: "只想对你说",
        artist: '掌嘴/lil-7/刘飞雪',
        url: 'https://m704.music.126.net/20220315211412/aab1b14e587635db7b3ffd083428b12c/jdyyaac/0e0e/025e/0253/9dc34a7d6d544624693f598f4f8c7fdd.m4a?authSecret=0000017f8da01260172b0aaba51c57ef',
        cover: 'https://p1.music.126.net/itPBBkJROpAcsKlcTUlbAg==/109951163398371353.jpg?param=130y130',	
    },
    {
        name: "予你",
        artist: '队长',
        url: 'https://m704.music.126.net/20220315211506/c56b7d9d1d51c410367b3a73779a4aeb/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/11679155749/cd4e/66cc/7d55/c0ee5d6f563fb362f81f41f30451cd31.m4a?authSecret=0000017f8da0e5ed0cf80aaba37754df',
        cover: 'https://p1.music.126.net/yxVm_vRFOode6yP67NmMcA==/109951166625738075.jpg?param=34y34',	
    },
    {
        name: "我们俩",
        artist: '郭顶',
        url: 'https://m804.music.126.net/20220315204836/0f4408041e80364f98d75900ee516051/jdyyaac/550e/010c/550c/bdbc6c936a6f09c01410bf817c54eda2.m4a?authSecret=0000017f8d88a34a16230aaba1291b80',
        cover: 'https://p1.music.126.net/BgsCl01scHEbWJG0ijOS4A==/109951165687403090.jpg?param=200y200',	
    },
    {
        name: "就是爱你",
        artist: '陶喆',
        url: 'https://m704.music.126.net/20220315204943/3bc30fdf1f391f4ae9d80ea5e9ec62ee/jdyyaac/535b/0059/560e/d1c1f4a4e1733c50fc89ad770d64dd7d.m4a?authSecret=0000017f8d89a82500980aaba3700f05',
        cover: 'https://p1.music.126.net/ZR6QuByWgej9-aRhZjLqHw==/109951163803188844.jpg?param=130y130',	
    },
    {
        name: "特别的人",
        artist: '方大同',
        url: 'https://m10.music.126.net/20220315205040/38255553bb53d17888a8f43c496745e9/yyaac/obj/wonDkMOGw6XDiTHCmMOi/3035930151/91e9/4dc3/3019/4d7bd12b9a355e8cb427a03fb6c1fc61.m4a',
        cover: 'https://p1.music.126.net/RTB72JJJapo01l4XfVDAWQ==/109951166349819975.jpg?param=34y34',	
    },
    {
        name: "最好的都给你",
        artist: '余佳运',
        url: 'https://m804.music.126.net/20220315205133/74cd6443821e37f30b157888fd54acfe/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/8999688538/7cb0/ef3f/fa00/d0b54fffe3528d3f5fd0356b1209b4eb.m4a?authSecret=0000017f8d8b571d00d60aaba14c7f93',
        cover: 'https://p1.music.126.net/BgsCl01scHEbWJG0ijOS4A==/109951165687403090.jpg?param=200y200',	
    },
    {
        name: "Love song",
        artist: '方大同',
        url: 'https://m704.music.126.net/20220315205231/4ab1764b8a07aa202791e3c91a5dc78f/jdyyaac/0e5e/0008/525c/944d0837cd7b20dd1de4e6dc7cca4579.m4a?authSecret=0000017f8d8c3965128a0aaba3a25634',
        cover: 'https://p2.music.126.net/a4dDxipx9Uk6W-RJx8secg==/50577534878460.jpg?param=34y34',	
    },
    {
        name: "That's us",
        artist: 'Anson seabra',
        url: 'https://m804.music.126.net/20220315205320/f3e1ce458d1e6f61a9db5d9e59936f92/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/4588146658/1bb0/de13/c29d/fc4e08f16e5a0ee0e1ccf23ab3efe45e.m4a?authSecret=0000017f8d8cf91a1cc40aaba2360732',
        cover: 'https://p2.music.126.net/bFGMqmgrGl_mM4WDptHX0g==/109951165438644315.jpg?param=130y130',	
    },
    {
        name: "你永远是我的宝贝，宝贝",
        artist: '康姆士',
        url: 'https://m704.music.126.net/20220315205410/8214df56da9e3228304664e93472844c/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/9467486403/3ce7/4e73/a303/6ebdb716fa9f4c14bef45a729934551f.m4a?authSecret=0000017f8d8dbaad170a0aaba08e1226',
        cover: 'https://p2.music.126.net/H9g5VjEOIZE_akV-JsH_6Q==/109951166095764702.jpg?param=130y130',	
    },
    {
        name: "情话",
        artist: '余佳运',
        url: 'https://m704.music.126.net/20220315205504/70f057122015b3085a680bf4a555c54c/jdyyaac/0608/065a/0e5f/1b67761375104027947d95131bd44609.m4a?authSecret=0000017f8d8e8d9c00760aaba0270b88',
        cover: 'https://p2.music.126.net/wq4kovh0U10fM6k7pkKA9w==/109951162978948565.jpg?param=34y34',	
    },
    {
        name: "能不能",
        artist: '温岚/JZN',
        url: 'https://m804.music.126.net/20220315205553/f191b86c7c97919d45d467cf7cc718b4/jdyyaac/0e0e/050c/5308/9d4cbbf3622fb322bf19dbd0d7a33cca.m4a?authSecret=0000017f8d8f4de912760aaba0b483b9',
        cover: 'https://p2.music.126.net/qFBonOr2QqUYzWY8IlCuDA==/109951165774753337.jpg?param=130y130',	
    },
    {
        name: "Double的快乐",
        artist: '永彬Ryan.B',
        url: 'https://m804.music.126.net/20220315205711/a43583e51e300634299e079e2bed3185/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/11146605572/03c6/7b5c/a054/b913897eb90c992b6577c643724d1c60.m4a?authSecret=0000017f8d907f5702b20aa4635716e1',
        cover: 'https://p1.music.126.net/fZeeHASwgIQwz3RndjfP5w==/109951166497938635.jpg?param=34y34',	
    },
    {
        name: "哪里都是你",
        artist: '队长',
        url: 'https://m704.music.126.net/20220315205811/ff55c0aae8985b7b24bb6a913c4199db/jdyyaac/015a/5259/025a/603087e667e391674ac550a240ab60c5.m4a?authSecret=0000017f8d9169b01be50aa4635c236a',
        cover: 'https://p1.music.126.net/BgsCl01scHEbWJG0ijOS4A==/109951165687403090.jpg?param=200y200',	
    },
    {
        name: "不得不爱",
        artist: 'Lambert',
        url: 'https://m10.music.126.net/20220315210009/16b5d0424ac4b6c24eac316369ff81eb/yyaac/015f/0752/035f/656f4d4f6808e336c2e2459602aa697d.m4a',
        cover: 'https://p1.music.126.net/94ofbrM9sC9cQzKf2rO2GQ==/109951164297796644.jpg?param=34y34',	
    },
    {
        name: "全部都是你",
        artist: 'DP龙猪/宝楽CNBALLER',
        url: 'https://m804.music.126.net/20220315210102/d901dbc012d47fe20b1ef172831b0d22/jdyyaac/025a/0358/065e/502d26df3742edd3cb9d14591dc1bf74.m4a?authSecret=0000017f8d9405b915770aaba36b0748',
        cover: 'https://p2.music.126.net/g0OOHCJyDFzso-SEaa_O-w==/109951165309098267.jpg?param=34y34',	
      },
	]
});
