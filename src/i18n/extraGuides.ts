// Additional search-intent guides. Keep all three languages in one keyed source
// so the routes cannot accidentally fall back to another locale.
type Guide = {
  nav: string; cardDesc: string; intro: string;
  meta: { title: string; description: string };
  sections: { heading: string; paragraphs: string[]; items?: string[] }[];
  faq: { title: string; items: { q: string; a: string }[] };
};

export const extraGuideSlugs = ['riverside', 'shopping', 'evening-itinerary'] as const;

export const extraGuides: Record<string, Record<string, Guide>> = {
  en: {
    riverside: {
      nav: 'Riverside & Nearby', cardDesc: 'Locate the riverfront market and explore nearby stops.',
      meta: { title: 'Phnom Penh Riverside Night Market – Location & Nearby Walk', description: 'Find Phnom Penh Riverside Night Market on Sisowath Quay, plan a riverfront walk and learn what to check before setting out.' },
      intro: 'Phnom Penh Night Market, also called Phsar Reatrey, sits on Preah Sisowath Quay by the Tonle Sap river. The riverside location makes it easy to pair the market with an evening promenade.',
      sections: [
        { heading: 'Where exactly is the market?', paragraphs: ['Use the dedicated Phnom Penh Night Market listing on Google Maps rather than a generic search for “night market”. The entrance is on the riverside side of central Phnom Penh, near the promenade.', 'Address: Preah Sisowath Quay, Phnom Penh 12200, Cambodia. The map pin is the best final reference for a tuk-tuk or ride-hailing drop-off.'] },
        { heading: 'A simple riverside walk', paragraphs: ['Begin with the public promenade while there is still daylight. Watch the river and city activity, then enter the market when vendors are ready for the evening.', 'Browse the stalls first and leave time for the food seating area. The walk itself is free; purchases at stalls are optional.'] },
        { heading: 'Nearby places to consider', paragraphs: ['Wat Phnom is a historic hilltop temple in the northern central city; it is a separate stop, not part of the market.', 'The Royal Palace riverfront area lies farther south along the central promenade. Its visiting hours and ticket arrangements are separate from the night market.'] },
        { heading: 'Transport and orientation', paragraphs: ['Ask to be dropped at “Phnom Penh Night Market, Sisowath Quay”. Traffic and pedestrian congestion can increase on weekend evenings.', 'If walking after dark, use well-lit stretches, keep valuables secure and check your return transport before leaving the market.'] },
      ],
      faq: { title: 'Riverside FAQ', items: [
        { q: 'Is the Riverside Night Market the same place as Phnom Penh Night Market?', a: 'Yes. Visitors commonly use both names for the night market on Preah Sisowath Quay.' },
        { q: 'Is the river promenade open when the market is closed?', a: 'The public riverfront is separate from the weekend market; stalls are generally scheduled for Friday through Sunday evenings.' },
        { q: 'Can I walk to other sights?', a: 'You can explore the central riverfront on foot, but check each attraction’s location and opening hours separately.' },
      ] },
    },
    shopping: {
      nav: 'Shopping Guide', cardDesc: 'Browse souvenirs, clothing and crafts with practical buying tips.',
      meta: { title: 'Phnom Penh Night Market Shopping – Souvenirs & Practical Tips', description: 'What to shop for at Phnom Penh Night Market, how to compare prices, pay vendors and plan a relaxed weekend market visit.' },
      intro: 'The market is as much about an evening stroll as it is about purchases. Expect casual browsing across clothing, small gifts and souvenir stalls, with stock varying by vendor and date.',
      sections: [
        { heading: 'What you may find', paragraphs: ['Common categories include T-shirts, casual clothing, accessories, bags, small crafts and souvenirs. Items and availability are not guaranteed on every visit.', 'Check quality, sizing and construction in person. Handmade and mass-produced goods can appear side by side.'] },
        { heading: 'Prices and payment', paragraphs: ['There is no single fixed price list for independent stalls. Compare similar items at more than one stand before deciding.', 'Carry smaller-denomination Cambodian riel or US dollars; ask about the accepted payment method and exchange rate before paying. Do not assume every stall accepts cards.'] },
        { heading: 'A comfortable shopping route', paragraphs: ['Arrive early in the evening, browse the clothing and gift aisles first, then pause for food. This avoids carrying drinks while examining merchandise.', 'Keep bags close in crowded areas, be considerate when photographing sellers, and request permission for close-up portraits.'] },
        { heading: 'Shopping versus other markets', paragraphs: ['This riverside night market is a weekend-evening experience. Central Market and Russian Market have different locations, hours and styles; do not substitute their map pins or schedules for this site.', 'If your goal is specialty antiques or detailed handicraft shopping, research the other markets separately before deciding where to go.'] },
      ],
      faq: { title: 'Shopping FAQ', items: [
        { q: 'Is there an entrance fee to browse?', a: 'Browsing the public night market is generally free; you pay for anything you choose to buy.' },
        { q: 'Can visitors bargain?', a: 'Some independent vendors may negotiate, but be polite and respect a clearly stated fixed price.' },
        { q: 'Can I pay by card?', a: 'Payment methods differ by stall. Cash in small denominations is a useful backup.' },
      ] },
    },
    'evening-itinerary': {
      nav: 'Evening Itinerary', cardDesc: 'An adaptable 90-minute to 2-hour riverside visit.',
      meta: { title: 'Phnom Penh Night Market Evening Itinerary – 2-Hour Plan', description: 'Plan a relaxed two-hour visit to Phnom Penh Night Market with a riverfront stroll, shopping, street food and return transport tips.' },
      intro: 'This is a flexible plan for a Friday, Saturday or Sunday evening, not a timed tour. Allow extra time for traffic, rain or family breaks.',
      sections: [
        { heading: 'Stop 1 · Arrive by the river (about 20 minutes)', paragraphs: ['Use the named market listing for navigation to Sisowath Quay. Enjoy the riverside atmosphere and locate the market entrances.', 'On an ordinary weekend the published market window is approximately 17:00–23:00, but stalls may open gradually.'] },
        { heading: 'Stop 2 · Browse stalls (about 30 minutes)', paragraphs: ['Walk the main shopping aisles without rushing. Compare souvenirs or clothing and keep any purchases easy to carry.', 'If travelling with children, agree on a meeting point before entering the busier sections.'] },
        { heading: 'Stop 3 · Eat and rest (about 40 minutes)', paragraphs: ['Choose from the available street-food counters and check prices before ordering. Food stalls and menus change, so treat specific dishes as possibilities rather than promises.', 'Bring hand sanitiser and drinking water; choose food prepared and served hot.'] },
        { heading: 'Stop 4 · Return along the promenade (about 20 minutes)', paragraphs: ['Spend your final minutes watching the riverfront lights. Arrange a licensed ride or a clearly agreed tuk-tuk fare for the return journey.', 'If there is heavy rain or the market is unexpectedly closed, substitute a short promenade visit and confirm an alternative dinner venue separately.'] },
      ],
      faq: { title: 'Itinerary FAQ', items: [
        { q: 'How long do I need?', a: 'Roughly 90 minutes to two hours covers browsing, dinner and a short riverfront walk.' },
        { q: 'Does this plan work on weekdays?', a: 'Not for the market stalls: the regular market schedule is Friday through Sunday evenings.' },
        { q: 'Is it suitable for families?', a: 'Yes, with breaks and attention to crowding, traffic and weather. The route is flexible.' },
      ] },
    },
  },
  zh: {
    riverside: {
      nav: '河滨位置与周边', cardDesc: '找到夜市位置，规划河畔散步与周边游览。',
      meta: { title: '金边河滨夜市位置与周边景点｜Sisowath Quay 指南', description: '金边夜市位于洞里萨河畔的西索瓦码头大道。了解地图定位、河滨散步路线、周边景点及交通建议。' },
      intro: '金边夜市（Phsar Reatrey）位于洞里萨河畔的 Preah Sisowath Quay。游客可以将周末夜市与河滨散步安排在同一个晚上。',
      sections: [
        { heading: '夜市具体在哪里？', paragraphs: ['地址：Preah Sisowath Quay, Phnom Penh 12200, Cambodia。导航请使用“Phnom Penh Night Market”的专属谷歌地图地点，避免误选其他市场。', '夜市靠近金边市中心河滨步道；乘坐嘟嘟车或网约车时，建议向司机出示地图地点。'] },
        { heading: '河滨散步建议', paragraphs: ['傍晚先沿公共河滨步道散步，欣赏水岸与城市活动；摊贩开始营业后再进入夜市。', '先逛购物区，再到美食区域休息。河滨散步无需购买门票，摊位消费自行决定。'] },
        { heading: '可搭配的周边地点', paragraphs: ['塔山寺（Wat Phnom）是市中心北侧的独立历史景点，不属于夜市范围。', '王宫附近的河滨区域位于更南侧；若计划参观王宫，须另外核对门票与开放时间。'] },
        { heading: '交通与夜间安全', paragraphs: ['周末晚间人流与车流可能增加，最好提前确认回程接送位置。', '夜间尽量走照明良好的道路，保管好手机、钱包及随身物品。'] },
      ],
      faq: { title: '河滨位置常见问题', items: [
        { q: '河滨夜市与金边夜市是同一个地方吗？', a: '一般是的，这两个名称通常指西索瓦码头大道旁的 Phnom Penh Night Market。' },
        { q: '夜市不营业时还能去河滨吗？', a: '公共河滨步道与周末夜市不同；常规摊位营业日为周五至周日晚上。' },
        { q: '附近景点可以步行游览吗？', a: '市中心部分河滨区域适合步行，但各景点距离、入场规则与开放时间需要单独核对。' },
      ] },
    },
    shopping: {
      nav: '夜市购物指南', cardDesc: '纪念品、服饰、付款方式和购物建议。',
      meta: { title: '金边夜市购物指南｜纪念品、服饰及付款建议', description: '了解金边夜市常见商品、选购纪念品的技巧、柬埔寨瑞尔与美元付款及周末购物路线。' },
      intro: '金边夜市既是购物地点，也是体验当地夜间生活的公共空间。服装、配饰、工艺小物及纪念品因摊位和日期而有所不同。',
      sections: [
        { heading: '常见商品', paragraphs: ['摊位可能售卖 T 恤、休闲服饰、包袋、小饰品、工艺品及旅游纪念品，具体库存以现场为准。', '建议当面检查尺码、材质和做工；手工制品与批量生产商品可能同时出现。'] },
        { heading: '价格与付款方式', paragraphs: ['独立摊位没有统一价格表。购买前可比较几家相似商品，先询价再付款。', '备好小面额柬埔寨瑞尔或美元，付款前问清找零方式；并非每个摊位都接受银行卡。'] },
        { heading: '轻松逛街路线', paragraphs: ['傍晚先逛服饰与纪念品摊位，之后再吃晚餐，避免手持饮料选购商品。', '人多时将背包放在身前，拍摄摊主近照前先征得同意。'] },
        { heading: '与其他市场的区别', paragraphs: ['金边河滨夜市以周末夜间游览为特色；中央市场和俄罗斯市场的地点、开放时间及商品类型均不同。', '如果主要想选购特定手工艺品，建议先单独研究其他市场，勿把不同市场的地图链接混用。'] },
      ],
      faq: { title: '购物常见问题', items: [
        { q: '进去逛夜市要买门票吗？', a: '一般可免费进入和浏览，只有购买商品或餐饮才需付款。' },
        { q: '可以买东西时议价吗？', a: '部分摊主可能接受礼貌议价；若明示固定售价，应尊重对方。' },
        { q: '可以刷卡吗？', a: '各摊位付款方式不同，准备小额现金更稳妥。' },
      ] },
    },
    'evening-itinerary': {
      nav: '两小时夜游路线', cardDesc: '河滨、购物、美食与返程的轻松安排。',
      meta: { title: '金边夜市两小时游览路线｜周末晚上怎么玩', description: '规划金边夜市约两小时行程：河滨散步、纪念品摊位、当地街头美食及安全返程提示。' },
      intro: '这是一条适用于周五、周六或周日晚上的弹性路线，并非固定时间的导览团。下雨、交通拥堵或亲子同行时可延长停留。',
      sections: [
        { heading: '第 1 站｜抵达河滨（约 20 分钟）', paragraphs: ['使用夜市专属地点导航至 Sisowath Quay，先辨认入口、欣赏河滨风景。', '常规营业时间约为周五至周日 17:00–23:00，摊位可能陆续开放。'] },
        { heading: '第 2 站｜逛摊位（约 30 分钟）', paragraphs: ['缓慢浏览服装、配饰及纪念品摊位，先比价再购买。', '亲子同行可先约定走散时的集合地点。'] },
        { heading: '第 3 站｜街头美食（约 40 分钟）', paragraphs: ['观察当天实际营业的食摊，点餐前先确认价格；具体菜色会随摊位变化。', '携带饮用水和洗手用品，优先选择现做且充分加热的食品。'] },
        { heading: '第 4 站｜河滨夜景与返程（约 20 分钟）', paragraphs: ['最后沿河滨步道欣赏夜景，提前安排网约车或与嘟嘟车司机确认车费。', '如遇大雨或夜市临时休息，可缩短河滨散步并另行确认晚餐地点。'] },
      ],
      faq: { title: '路线常见问题', items: [
        { q: '需要停留多久？', a: '约 90 分钟至两小时通常足够逛摊位、吃晚餐并短暂散步。' },
        { q: '工作日也适用吗？', a: '不适用于夜市摊位；常规营业日为周五至周日晚上。' },
        { q: '适合带孩子吗？', a: '可以根据人潮、天气和休息需求调整路线，并留意周围交通。' },
      ] },
    },
  },
  km: {
    riverside: {
      nav: 'មាត់ទន្លេ និងក្បែរៗ', cardDesc: 'ទីតាំងផ្សាររាត្រី និងដំណើរកម្សាន្តតាមមាត់ទន្លេ។',
      meta: { title: 'ផ្សាររាត្រីភ្នំពេញមាត់ទន្លេ – ទីតាំង និងកន្លែងក្បែរៗ', description: 'ស្វែងរកផ្សាររាត្រីភ្នំពេញនៅមហាវិថីព្រះស៊ីសុវត្ថិ និងរៀបចំដំណើរកម្សាន្តតាមមាត់ទន្លេ។' },
      intro: 'ផ្សាររាត្រីភ្នំពេញស្ថិតនៅមហាវិថីព្រះស៊ីសុវត្ថិ ក្បែរមាត់ទន្លេសាប។ អ្នកអាចដើរលេងតាមមាត់ទន្លេមុនចូលទស្សនាផ្សារនាពេលល្ងាចចុងសប្តាហ៍។',
      sections: [
        { heading: 'ទីតាំងជាក់លាក់', paragraphs: ['អាសយដ្ឋាន៖ Preah Sisowath Quay, Phnom Penh 12200, Cambodia។ សូមប្រើទីតាំង Phnom Penh Night Market ក្នុង Google Maps ដើម្បីជៀសវាងច្រឡំជាមួយផ្សារផ្សេង។', 'សម្រាប់តុកតុក ឬរថយន្តតាមកម្មវិធី សូមបង្ហាញទីតាំងផ្ទាល់ទៅអ្នកបើកបរ។'] },
        { heading: 'ដើរលេងតាមមាត់ទន្លេ', paragraphs: ['មកមុនពេលងងឹត ដើម្បីមើលទេសភាពទន្លេ និងសកម្មភាពនៅមាត់ទន្លេ បន្ទាប់មកចូលផ្សារពេលតូបចាប់ផ្តើមបើក។', 'អាចដើរមើលទំនិញសិន រួចសម្រាកញ៉ាំអាហារ។ ការដើរលេងតាមមាត់ទន្លេមិនគិតថ្លៃទេ។'] },
        { heading: 'កន្លែងក្បែរៗ', paragraphs: ['វត្តភ្នំជារមណីយដ្ឋានប្រវត្តិសាស្ត្រមួយនៅផ្នែកខាងជើងនៃកណ្តាលក្រុង ហើយមិនមែនជាផ្នែកនៃផ្សារទេ។', 'តំបន់មាត់ទន្លេក្បែរព្រះបរមរាជវាំងស្ថិតនៅខាងត្បូង។ សូមពិនិត្យម៉ោង និងសំបុត្រចូលទស្សនាដាច់ដោយឡែក។'] },
        { heading: 'ការធ្វើដំណើរ និងសុវត្ថិភាព', paragraphs: ['ចុងសប្តាហ៍អាចមានចរាចរណ៍ច្រើន។ គួរកំណត់កន្លែងជួបរថយន្តត្រឡប់ជាមុន។', 'ពេលយប់ សូមដើរតាមផ្លូវមានភ្លើង និងថែរក្សាទូរស័ព្ទ កាបូប និងទ្រព្យសម្បត្តិ។'] },
      ],
      faq: { title: 'សំណួរអំពីមាត់ទន្លេ', items: [
        { q: 'ផ្សាររាត្រីមាត់ទន្លេ និងផ្សាររាត្រីភ្នំពេញដូចគ្នាឬ?', a: 'ជាទូទៅឈ្មោះទាំងពីរសំដៅលើផ្សាររាត្រីនៅមហាវិថីព្រះស៊ីសុវត្ថិ។' },
        { q: 'អាចដើរមាត់ទន្លេនៅថ្ងៃផ្សារបិទទេ?', a: 'ផ្លូវដើរមាត់ទន្លេជាទីសាធារណៈដាច់ពីផ្សារ។ តូបផ្សារធម្មតាបើកល្ងាចថ្ងៃសុក្រ ដល់អាទិត្យ។' },
        { q: 'អាចដើរទៅកន្លែងទេសចរណ៍ផ្សេងទេ?', a: 'អាចដើរតាមតំបន់មាត់ទន្លេបាន ប៉ុន្តែត្រូវពិនិត្យចម្ងាយ និងម៉ោងបើករបស់ទីតាំងនីមួយៗ។' },
      ] },
    },
    shopping: {
      nav: 'មគ្គុទ្ទេសក៍ទិញទំនិញ', cardDesc: 'វត្ថុអនុស្សាវរីយ៍ សម្លៀកបំពាក់ និងវិធីបង់ប្រាក់។',
      meta: { title: 'ទិញទំនិញនៅផ្សាររាត្រីភ្នំពេញ – គន្លឹះ និងវត្ថុអនុស្សាវរីយ៍', description: 'អានអំពីទំនិញដែលអាចរកបាន វិធីប្រៀបធៀបតម្លៃ និងការបង់ប្រាក់នៅផ្សាររាត្រីភ្នំពេញ។' },
      intro: 'ផ្សាររាត្រីជាកន្លែងដើរលេង និងទិញទំនិញពេលល្ងាច។ ប្រភេទសម្លៀកបំពាក់ គ្រឿងលម្អ និងវត្ថុអនុស្សាវរីយ៍អាចប្រែប្រួលតាមតូប។',
      sections: [
        { heading: 'ទំនិញដែលអាចរកបាន', paragraphs: ['អាចមានអាវយឺត សម្លៀកបំពាក់ធម្មតា កាបូប គ្រឿងលម្អ សិប្បកម្មតូចៗ និងវត្ថុអនុស្សាវរីយ៍។', 'សូមពិនិត្យទំហំ សម្ភារៈ និងគុណភាពដោយផ្ទាល់ ព្រោះមិនមែនទំនិញទាំងអស់សុទ្ធតែផលិតដោយដៃទេ។'] },
        { heading: 'តម្លៃ និងការបង់ប្រាក់', paragraphs: ['តូបឯករាជ្យមិនមានតារាងតម្លៃរួមទេ។ គួរប្រៀបធៀបទំនិញស្រដៀងគ្នាមុនសម្រេចចិត្តទិញ។', 'យកប្រាក់រៀល ឬដុល្លារក្រដាសតូចៗ និងសួរអំពីវិធីបង់ប្រាក់ជាមុន។ កុំសន្មតថាគ្រប់តូបទទួលកាត។'] },
        { heading: 'របៀបដើរទិញឱ្យងាយស្រួល', paragraphs: ['ចាប់ផ្តើមមើលតូបសម្លៀកបំពាក់ និងអំណោយមុន រួចទៅញ៉ាំអាហារបន្ទាប់។', 'រក្សាកាបូបឱ្យជិតខ្លួន និងសុំការអនុញ្ញាតមុនថតរូបអ្នកលក់ជិតៗ។'] },
        { heading: 'ភាពខុសគ្នាពីផ្សារផ្សេង', paragraphs: ['ផ្សាររាត្រីមាត់ទន្លេផ្តោតលើល្ងាចចុងសប្តាហ៍។ ផ្សារធំថ្មី និងផ្សារទួលទំពូងមានទីតាំង និងម៉ោងដំណើរការផ្សេងៗ។', 'កុំប្រើទីតាំងផែនទី ឬម៉ោងបើករបស់ផ្សារផ្សេងជំនួសផ្សាររាត្រីនេះ។'] },
      ],
      faq: { title: 'សំណួរអំពីការទិញទំនិញ', items: [
        { q: 'ត្រូវទិញសំបុត្រចូលផ្សារទេ?', a: 'ជាទូទៅការដើរមើលផ្សារមិនគិតថ្លៃទេ។ បង់ប្រាក់តែពេលទិញទំនិញ ឬម្ហូប។' },
        { q: 'អាចចរចាតម្លៃបានទេ?', a: 'អ្នកលក់ខ្លះអាចទទួលការចរចាដោយគួរសម ប៉ុន្តែគួរគោរពតម្លៃថេរ។' },
        { q: 'អាចបង់ដោយកាតបានទេ?', a: 'វិធីបង់ប្រាក់ខុសគ្នាតាមតូប។ គួរត្រៀមសាច់ប្រាក់តូចៗ។' },
      ] },
    },
    'evening-itinerary': {
      nav: 'ផែនការដើរលេងពេលល្ងាច', cardDesc: 'ផែនការប្រហែលពីរម៉ោងសម្រាប់មាត់ទន្លេ អាហារ និងផ្សារ។',
      meta: { title: 'ផែនការដើរលេងផ្សាររាត្រីភ្នំពេញ ២ ម៉ោង', description: 'រៀបចំដំណើរប្រហែលពីរម៉ោងនៅផ្សាររាត្រីភ្នំពេញ ដោយដើរមាត់ទន្លេ ទិញទំនិញ និងញ៉ាំអាហារ។' },
      intro: 'នេះជាផែនការបត់បែនបានសម្រាប់ល្ងាចថ្ងៃសុក្រ សៅរ៍ ឬអាទិត្យ មិនមែនជាកម្មវិធីទស្សនាម៉ោងថេរទេ។',
      sections: [
        { heading: 'ជំហានទី ១៖ មកដល់មាត់ទន្លេ (២០ នាទី)', paragraphs: ['ប្រើទីតាំងផ្សាររាត្រីផ្ទាល់ ដើម្បីមកដល់មហាវិថីព្រះស៊ីសុវត្ថិ និងមើលទេសភាពមាត់ទន្លេ។', 'ម៉ោងផ្សារធម្មតាប្រហែល ១៧:០០–២៣:០០ ថ្ងៃសុក្រ ដល់អាទិត្យ ប៉ុន្តែតូបអាចបើកបន្តបន្ទាប់។'] },
        { heading: 'ជំហានទី ២៖ មើលតូប (៣០ នាទី)', paragraphs: ['ដើរមើលសម្លៀកបំពាក់ គ្រឿងលម្អ និងវត្ថុអនុស្សាវរីយ៍ដោយមិនប្រញាប់។', 'បើមកជាមួយកុមារ គួរកំណត់កន្លែងជួបគ្នាបើបែកពីក្រុម។'] },
        { heading: 'ជំហានទី ៣៖ ញ៉ាំអាហារ (៤០ នាទី)', paragraphs: ['ជ្រើសរើសតូបដែលកំពុងលក់ ហើយសួរតម្លៃមុនកម្មង់។ ប្រភេទម្ហូបអាចប្រែប្រួល។', 'យកទឹកផឹក និងទឹកលាងដៃ ហើយជ្រើសម្ហូបដែលចម្អិនក្តៅល្អ។'] },
        { heading: 'ជំហានទី ៤៖ ទេសភាពយប់ និងត្រឡប់ (២០ នាទី)', paragraphs: ['មើលពន្លឺតាមមាត់ទន្លេ បន្ទាប់មករៀបចំរថយន្តត្រឡប់ ឬព្រមព្រៀងថ្លៃតុកតុកជាមុន។', 'បើភ្លៀងខ្លាំង ឬផ្សារបិទ សូមកែសម្រួលផែនការ និងពិនិត្យកន្លែងញ៉ាំអាហារផ្សេង។'] },
      ],
      faq: { title: 'សំណួរអំពីផែនការ', items: [
        { q: 'ត្រូវការពេលប៉ុន្មាន?', a: 'ប្រហែល ៩០ នាទីដល់ពីរម៉ោង សម្រាប់មើលតូប ញ៉ាំអាហារ និងដើរមាត់ទន្លេ។' },
        { q: 'អាចទៅថ្ងៃធ្វើការបានទេ?', a: 'តូបផ្សារធម្មតាបើកនៅល្ងាចថ្ងៃសុក្រ សៅរ៍ និងអាទិត្យប៉ុណ្ណោះ។' },
        { q: 'សមស្របសម្រាប់គ្រួសារទេ?', a: 'អាចកែសម្រួលផែនការតាមអាកាសធាតុ មនុស្សច្រើន និងការសម្រាករបស់កុមារ។' },
      ] },
    },
  },
};
