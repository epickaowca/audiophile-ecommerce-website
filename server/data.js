const SERVER_URL = process.env.BACKEND_SERVER_URL || "http://localhost:3002";

export const categories = {
  headphones: [
    {
      name: "XX99 Mark II",
      tag: "XX99-Mark-2",
      category: "headphones",
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      isNew: true,
      _id: 1,
      imgPreviewLarge: {
        desktop: `${SERVER_URL}/images/headphones/XX99-Mark-2/desktop/image-preview-desktop.jpg`,
        tablet: `${SERVER_URL}/images/headphones/XX99-Mark-2/tablet/image-preview-tablet.jpg`,
        mobile: `${SERVER_URL}/images/headphones/XX99-Mark-2/mobile/image-preview-mobile.jpg`,
      },
      imgPreviewMicro: {
        desktop: `${SERVER_URL}/images/headphones/XX99-Mark-2/desktop/image-preview-desktop-micro.jpg`,
        tablet: `${SERVER_URL}/images/headphones/XX99-Mark-2/tablet/image-preview-tablet-micro.jpg`,
        mobile: `${SERVER_URL}/images/headphones/XX99-Mark-2/mobile/image-preview-mobile-micro.jpg`,
      },
    },
    {
      name: "XX99 Mark I",
      tag: "XX99-Mark-1",
      category: "headphones",
      description:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      isNew: false,
      _id: 2,
      imgPreviewLarge: {
        desktop: `${SERVER_URL}/images/headphones/XX99-Mark-1/desktop/image-preview-desktop.jpg`,
        tablet: `${SERVER_URL}/images/headphones/XX99-Mark-1/tablet/image-preview-tablet.jpg`,
        mobile: `${SERVER_URL}/images/headphones/XX99-Mark-1/mobile/image-preview-mobile.jpg`,
      },
      imgPreviewMicro: {
        desktop: `${SERVER_URL}/images/headphones/XX99-Mark-1/desktop/image-preview-desktop-micro.jpg`,
        tablet: `${SERVER_URL}/images/headphones/XX99-Mark-1/tablet/image-preview-tablet-micro.jpg`,
        mobile: `${SERVER_URL}/images/headphones/XX99-Mark-1/mobile/image-preview-mobile-micro.jpg`,
      },
    },
    {
      name: "XX59",
      tag: "XX59",
      category: "headphones",
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      isNew: false,
      _id: 3,
      imgPreviewLarge: {
        desktop: `${SERVER_URL}/images/headphones/XX59/desktop/image-preview-desktop.jpg`,
        tablet: `${SERVER_URL}/images/headphones/XX59/tablet/image-preview-tablet.jpg`,
        mobile: `${SERVER_URL}/images/headphones/XX59/mobile/image-preview-mobile.jpg`,
      },
      imgPreviewMicro: {
        desktop: `${SERVER_URL}/images/headphones/XX59/desktop/image-preview-desktop-micro.jpg`,
        tablet: `${SERVER_URL}/images/headphones/XX59/tablet/image-preview-tablet-micro.jpg`,
        mobile: `${SERVER_URL}/images/headphones/XX59/mobile/image-preview-mobile-micro.jpg`,
      },
    },
  ],
  speakers: [
    {
      name: "ZX9",
      tag: "ZX9",
      category: "speaker",
      description:
        "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      isNew: true,
      _id: 4,
      imgPreviewLarge: {
        desktop: `${SERVER_URL}/images/speakers/ZX9/desktop/image-preview-desktop.jpg`,
        tablet: `${SERVER_URL}/images/speakers/ZX9/tablet/image-preview-tablet.jpg`,
        mobile: `${SERVER_URL}/images/speakers/ZX9/mobile/image-preview-mobile.jpg`,
      },
      imgPreviewMicro: {
        desktop: `${SERVER_URL}/images/speakers/ZX9/desktop/image-preview-desktop-micro.jpg`,
        tablet: `${SERVER_URL}/images/speakers/ZX9/tablet/image-preview-tablet-micro.jpg`,
        mobile: `${SERVER_URL}/images/speakers/ZX9/mobile/image-preview-mobile-micro.jpg`,
      },
    },
    {
      name: "ZX7",
      tag: "ZX7",
      category: "speaker",
      description:
        "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      isNew: false,
      _id: 5,
      imgPreviewLarge: {
        desktop: `${SERVER_URL}/images/speakers/ZX7/desktop/image-preview-desktop.jpg`,
        tablet: `${SERVER_URL}/images/speakers/ZX7/tablet/image-preview-tablet.jpg`,
        mobile: `${SERVER_URL}/images/speakers/ZX7/mobile/image-preview-mobile.jpg`,
      },
      imgPreviewMicro: {
        desktop: `${SERVER_URL}/images/speakers/ZX7/desktop/image-preview-desktop-micro.jpg`,
        tablet: `${SERVER_URL}/images/speakers/ZX7/tablet/image-preview-tablet-micro.jpg`,
        mobile: `${SERVER_URL}/images/speakers/ZX7/mobile/image-preview-mobile-micro.jpg`,
      },
    },
  ],
  earphones: [
    {
      name: "YX1 WIRELESS",
      tag: "YX1",
      category: "earphones",
      description:
        "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      isNew: true,
      _id: 6,
      imgPreviewLarge: {
        desktop: `${SERVER_URL}/images/earphones/YX1/desktop/image-preview-desktop.jpg`,
        tablet: `${SERVER_URL}/images/earphones/YX1/tablet/image-preview-tablet.jpg`,
        mobile: `${SERVER_URL}/images/earphones/YX1/mobile/image-preview-mobile.jpg`,
      },
      imgPreviewMicro: {
        desktop: `${SERVER_URL}/images/earphones/YX1/desktop/image-preview-desktop-micro.jpg`,
        tablet: `${SERVER_URL}/images/earphones/YX1/tablet/image-preview-tablet-micro.jpg`,
        mobile: `${SERVER_URL}/images/earphones/YX1/mobile/image-preview-mobile-micro.jpg`,
      },
    },
  ],
};

export const details = {
  "XX99-Mark-2": {
    name: "XX99 Mark II",
    tag: "XX99-Mark-2",
    category: "headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    isNew: true,
    _id: 1,
    imgProductLarge: {
      desktop: `${SERVER_URL}/images/headphones/XX99-Mark-2/desktop/image-product-desktop.jpg`,
      tablet: `${SERVER_URL}/images/headphones/XX99-Mark-2/tablet/image-product-tablet.jpg`,
      mobile: `${SERVER_URL}/images/headphones/XX99-Mark-2/mobile/image-product-mobile.jpg`,
    },
    imgProductMicro: {
      desktop: `${SERVER_URL}/images/headphones/XX99-Mark-2/desktop/image-product-desktop-micro.jpg`,
      tablet: `${SERVER_URL}/images/headphones/XX99-Mark-2/tablet/image-product-tablet-micro.jpg`,
      mobile: `${SERVER_URL}/images/headphones/XX99-Mark-2/mobile/image-product-mobile-micro.jpg`,
    },
    imgCart: `${SERVER_URL}/cartImages/image-xx99-mark-two.jpg`,
    price: 2999,
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    includes: [
      {
        quantity: 1,
        item: "Headphone unit",
      },
      {
        quantity: 2,
        item: "Replacement earcups",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "3.5mm 5m audio cable",
      },
      {
        quantity: 1,
        item: "Travel bag",
      },
    ],
  },
  "XX99-Mark-1": {
    name: "XX99 Mark I",
    tag: "XX99-Mark-1",
    category: "headphones",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    isNew: false,
    _id: 2,
    imgProductLarge: {
      desktop: `${SERVER_URL}/images/headphones/XX99-Mark-1/desktop/image-product-desktop.jpg`,
      tablet: `${SERVER_URL}/images/headphones/XX99-Mark-1/tablet/image-product-tablet.jpg`,
      mobile: `${SERVER_URL}/images/headphones/XX99-Mark-1/mobile/image-product-mobile.jpg`,
    },
    imgProductMicro: {
      desktop: `${SERVER_URL}/images/headphones/XX99-Mark-1/desktop/image-product-desktop-micro.jpg`,
      tablet: `${SERVER_URL}/images/headphones/XX99-Mark-1/tablet/image-product-tablet-micro.jpg`,
      mobile: `${SERVER_URL}/images/headphones/XX99-Mark-1/mobile/image-product-mobile-micro.jpg`,
    },
    imgCart: `${SERVER_URL}/cartImages/image-xx99-mark-one.jpg`,
    price: 1750,
    features:
      "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.",
    includes: [
      {
        quantity: 1,
        item: "Headphone unit",
      },
      {
        quantity: 2,
        item: "Replacement earcups",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "3.5mm 5m audio cable",
      },
    ],
  },
  XX59: {
    name: "XX59",
    tag: "XX59",
    category: "headphones",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    isNew: false,
    _id: 3,
    imgProductLarge: {
      desktop: `${SERVER_URL}/images/headphones/XX59/desktop/image-product-desktop.jpg`,
      tablet: `${SERVER_URL}/images/headphones/XX59/tablet/image-product-tablet.jpg`,
      mobile: `${SERVER_URL}/images/headphones/XX59/mobile/image-product-mobile.jpg`,
    },
    imgProductMicro: {
      desktop: `${SERVER_URL}/images/headphones/XX59/desktop/image-product-desktop-micro.jpg`,
      tablet: `${SERVER_URL}/images/headphones/XX59/tablet/image-product-tablet-micro.jpg`,
      mobile: `${SERVER_URL}/images/headphones/XX59/mobile/image-product-mobile-micro.jpg`,
    },
    imgCart: `${SERVER_URL}/cartImages/image-xx59.jpg`,
    price: 899,
    features:
      "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
    includes: [
      {
        quantity: 1,
        item: "Headphone unit",
      },
      {
        quantity: 2,
        item: "Replacement earcups",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "3.5mm 5m audio cable",
      },
    ],
  },
  ZX9: {
    name: "ZX9",
    tag: "ZX9",
    category: "speaker",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    isNew: true,
    _id: 4,
    imgProductLarge: {
      desktop: `${SERVER_URL}/images/speakers/ZX9/desktop/image-product-desktop.jpg`,
      tablet: `${SERVER_URL}/images/speakers/ZX9/tablet/image-product-tablet.jpg`,
      mobile: `${SERVER_URL}/images/speakers/ZX9/mobile/image-product-mobile.jpg`,
    },
    imgProductMicro: {
      desktop: `${SERVER_URL}/images/speakers/ZX9/desktop/image-product-desktop-micro.jpg`,
      tablet: `${SERVER_URL}/images/speakers/ZX9/tablet/image-product-tablet-micro.jpg`,
      mobile: `${SERVER_URL}/images/speakers/ZX9/mobile/image-product-mobile-micro.jpg`,
    },
    imgCart: `${SERVER_URL}/cartImages/image-zx9.jpg`,
    price: 4500,
    features:
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
    includes: [
      {
        quantity: 2,
        item: "Speaker unit",
      },
      {
        quantity: 2,
        item: "Speaker cloth panel",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "3.5mm 10m audio cable",
      },
      {
        quantity: 1,
        item: "10m optical cable",
      },
    ],
  },
  ZX7: {
    name: "ZX7",
    tag: "ZX7",
    category: "speaker",
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    isNew: false,
    _id: 5,
    imgProductLarge: {
      desktop: `${SERVER_URL}/images/speakers/ZX7/desktop/image-product-desktop.jpg`,
      tablet: `${SERVER_URL}/images/speakers/ZX7/tablet/image-product-tablet.jpg`,
      mobile: `${SERVER_URL}/images/speakers/ZX7/mobile/image-product-mobile.jpg`,
    },
    imgProductMicro: {
      desktop: `${SERVER_URL}/images/speakers/ZX7/desktop/image-product-desktop-micro.jpg`,
      tablet: `${SERVER_URL}/images/speakers/ZX7/tablet/image-product-tablet-micro.jpg`,
      mobile: `${SERVER_URL}/images/speakers/ZX7/mobile/image-product-mobile-micro.jpg`,
    },
    imgCart: `${SERVER_URL}/cartImages/image-zx7.jpg`,
    price: 3500,
    features:
      "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.\n\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
    includes: [
      {
        quantity: 2,
        item: "Speaker unit",
      },
      {
        quantity: 2,
        item: "Speaker cloth panel",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "3.5mm 7.5m audio cable",
      },
      {
        quantity: 1,
        item: "7.5m optical cable",
      },
    ],
  },
  YX1: {
    name: "YX1 WIRELESS",
    tag: "YX1",
    category: "earphones",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    isNew: true,
    _id: 6,
    imgProductLarge: {
      desktop: `${SERVER_URL}/images/earphones/YX1/desktop/image-product-desktop.jpg`,
      tablet: `${SERVER_URL}/images/earphones/YX1/tablet/image-product-tablet.jpg`,
      mobile: `${SERVER_URL}/images/earphones/YX1/mobile/image-product-mobile.jpg`,
    },
    imgProductMicro: {
      desktop: `${SERVER_URL}/images/earphones/YX1/desktop/image-product-desktop-micro.jpg`,
      tablet: `${SERVER_URL}/images/earphones/YX1/tablet/image-product-tablet-micro.jpg`,
      mobile: `${SERVER_URL}/images/earphones/YX1/mobile/image-product-mobile-micro.jpg`,
    },
    imgCart: `${SERVER_URL}/cartImages/image-yx1.jpg`,
    price: 599,
    features:
      "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
    includes: [
      {
        quantity: 2,
        item: "Earphone unit",
      },
      {
        quantity: 6,
        item: "Multi-size earplugs",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "USB-C charging cable",
      },
      {
        quantity: 1,
        item: "Travel pouch",
      },
    ],
  },
};

export const gallery = {
  "XX99-Mark-2": {
    img1: {
      desktop: `${SERVER_URL}/gallery/xx99-mark-two/desktop/image-gallery-1.jpg`,
      tablet: `${SERVER_URL}/gallery/xx99-mark-two/tablet/image-gallery-1.jpg`,
      mobile: `${SERVER_URL}/gallery/xx99-mark-two/mobile/image-gallery-1.jpg`,
    },
    img2: {
      desktop: `${SERVER_URL}/gallery/xx99-mark-two/desktop/image-gallery-2.jpg`,
      tablet: `${SERVER_URL}/gallery/xx99-mark-two/tablet/image-gallery-2.jpg`,
      mobile: `${SERVER_URL}/gallery/xx99-mark-two/mobile/image-gallery-2.jpg`,
    },
    img3: {
      large: {
        desktop: `${SERVER_URL}/gallery/xx99-mark-two/desktop/image-gallery-3.jpg`,
        tablet: `${SERVER_URL}/gallery/xx99-mark-two/tablet/image-gallery-3.jpg`,
        mobile: `${SERVER_URL}/gallery/xx99-mark-two/mobile/image-gallery-3.jpg`,
      },
      micro: {
        desktop: `${SERVER_URL}/gallery/xx99-mark-two/desktop/image-gallery-3-micro.jpg`,
        tablet: `${SERVER_URL}/gallery/xx99-mark-two/tablet/image-gallery-3-micro.jpg`,
        mobile: `${SERVER_URL}/gallery/xx99-mark-two/mobile/image-gallery-3-micro.jpg`,
      },
    },
  },
  "XX99-Mark-1": {
    img1: {
      desktop: `${SERVER_URL}/gallery/xx99-mark-one/desktop/image-gallery-1.jpg`,
      tablet: `${SERVER_URL}/gallery/xx99-mark-one/tablet/image-gallery-1.jpg`,
      mobile: `${SERVER_URL}/gallery/xx99-mark-one/mobile/image-gallery-1.jpg`,
    },
    img2: {
      desktop: `${SERVER_URL}/gallery/xx99-mark-one/desktop/image-gallery-2.jpg`,
      tablet: `${SERVER_URL}/gallery/xx99-mark-one/tablet/image-gallery-2.jpg`,
      mobile: `${SERVER_URL}/gallery/xx99-mark-one/mobile/image-gallery-2.jpg`,
    },
    img3: {
      large: {
        desktop: `${SERVER_URL}/gallery/xx99-mark-one/desktop/image-gallery-3.jpg`,
        tablet: `${SERVER_URL}/gallery/xx99-mark-one/tablet/image-gallery-3.jpg`,
        mobile: `${SERVER_URL}/gallery/xx99-mark-one/mobile/image-gallery-3.jpg`,
      },
      micro: {
        desktop: `${SERVER_URL}/gallery/xx99-mark-one/desktop/image-gallery-3-micro.jpg`,
        tablet: `${SERVER_URL}/gallery/xx99-mark-one/tablet/image-gallery-3-micro.jpg`,
        mobile: `${SERVER_URL}/gallery/xx99-mark-one/mobile/image-gallery-3-micro.jpg`,
      },
    },
  },
  XX59: {
    img1: {
      desktop: `${SERVER_URL}/gallery/xx59/desktop/image-gallery-1.jpg`,
      tablet: `${SERVER_URL}/gallery/xx59/tablet/image-gallery-1.jpg`,
      mobile: `${SERVER_URL}/gallery/xx59/mobile/image-gallery-1.jpg`,
    },
    img2: {
      desktop: `${SERVER_URL}/gallery/xx59/desktop/image-gallery-2.jpg`,
      tablet: `${SERVER_URL}/gallery/xx59/tablet/image-gallery-2.jpg`,
      mobile: `${SERVER_URL}/gallery/xx59/mobile/image-gallery-2.jpg`,
    },
    img3: {
      large: {
        desktop: `${SERVER_URL}/gallery/xx59/desktop/image-gallery-3.jpg`,
        tablet: `${SERVER_URL}/gallery/xx59/tablet/image-gallery-3.jpg`,
        mobile: `${SERVER_URL}/gallery/xx59/mobile/image-gallery-3.jpg`,
      },
      micro: {
        desktop: `${SERVER_URL}/gallery/xx59/desktop/image-gallery-3-micro.jpg`,
        tablet: `${SERVER_URL}/gallery/xx59/tablet/image-gallery-3-micro.jpg`,
        mobile: `${SERVER_URL}/gallery/xx59/mobile/image-gallery-3-micro.jpg`,
      },
    },
  },
  ZX9: {
    img1: {
      desktop: `${SERVER_URL}/gallery/zx9/desktop/image-gallery-1.jpg`,
      tablet: `${SERVER_URL}/gallery/zx9/tablet/image-gallery-1.jpg`,
      mobile: `${SERVER_URL}/gallery/zx9/mobile/image-gallery-1.jpg`,
    },
    img2: {
      desktop: `${SERVER_URL}/gallery/zx9/desktop/image-gallery-2.jpg`,
      tablet: `${SERVER_URL}/gallery/zx9/tablet/image-gallery-2.jpg`,
      mobile: `${SERVER_URL}/gallery/zx9/mobile/image-gallery-2.jpg`,
    },
    img3: {
      large: {
        desktop: `${SERVER_URL}/gallery/zx9/desktop/image-gallery-3.jpg`,
        tablet: `${SERVER_URL}/gallery/zx9/tablet/image-gallery-3.jpg`,
        mobile: `${SERVER_URL}/gallery/zx9/mobile/image-gallery-3.jpg`,
      },
      micro: {
        desktop: `${SERVER_URL}/gallery/zx9/desktop/image-gallery-3-micro.jpg`,
        tablet: `${SERVER_URL}/gallery/zx9/tablet/image-gallery-3-micro.jpg`,
        mobile: `${SERVER_URL}/gallery/zx9/mobile/image-gallery-3-micro.jpg`,
      },
    },
  },
  ZX7: {
    img1: {
      desktop: `${SERVER_URL}/gallery/zx7/desktop/image-gallery-1.jpg`,
      tablet: `${SERVER_URL}/gallery/zx7/tablet/image-gallery-1.jpg`,
      mobile: `${SERVER_URL}/gallery/zx7/mobile/image-gallery-1.jpg`,
    },
    img2: {
      desktop: `${SERVER_URL}/gallery/zx7/desktop/image-gallery-2.jpg`,
      tablet: `${SERVER_URL}/gallery/zx7/tablet/image-gallery-2.jpg`,
      mobile: `${SERVER_URL}/gallery/zx7/mobile/image-gallery-2.jpg`,
    },
    img3: {
      large: {
        desktop: `${SERVER_URL}/gallery/zx7/desktop/image-gallery-3.jpg`,
        tablet: `${SERVER_URL}/gallery/zx7/tablet/image-gallery-3.jpg`,
        mobile: `${SERVER_URL}/gallery/zx7/mobile/image-gallery-3.jpg`,
      },
      micro: {
        desktop: `${SERVER_URL}/gallery/zx7/desktop/image-gallery-3-micro.jpg`,
        tablet: `${SERVER_URL}/gallery/zx7/tablet/image-gallery-3-micro.jpg`,
        mobile: `${SERVER_URL}/gallery/zx7/mobile/image-gallery-3-micro.jpg`,
      },
    },
  },
  YX1: {
    img1: {
      desktop: `${SERVER_URL}/gallery/yx1/desktop/image-gallery-1.jpg`,
      tablet: `${SERVER_URL}/gallery/yx1/tablet/image-gallery-1.jpg`,
      mobile: `${SERVER_URL}/gallery/yx1/mobile/image-gallery-1.jpg`,
    },
    img2: {
      desktop: `${SERVER_URL}/gallery/yx1/desktop/image-gallery-2.jpg`,
      tablet: `${SERVER_URL}/gallery/yx1/tablet/image-gallery-2.jpg`,
      mobile: `${SERVER_URL}/gallery/yx1/mobile/image-gallery-2.jpg`,
    },
    img3: {
      large: {
        desktop: `${SERVER_URL}/gallery/yx1/desktop/image-gallery-3.jpg`,
        tablet: `${SERVER_URL}/gallery/yx1/tablet/image-gallery-3.jpg`,
        mobile: `${SERVER_URL}/gallery/yx1/mobile/image-gallery-3.jpg`,
      },
      micro: {
        desktop: `${SERVER_URL}/gallery/yx1/desktop/image-gallery-3-micro.jpg`,
        tablet: `${SERVER_URL}/gallery/yx1/tablet/image-gallery-3-micro.jpg`,
        mobile: `${SERVER_URL}/gallery/yx1/mobile/image-gallery-3-micro.jpg`,
      },
    },
  },
};
