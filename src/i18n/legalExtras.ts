export const legalExtras: Record<string, {
  privacy: { heading: string; content: string }[];
  terms: { heading: string; content: string }[];
  cookies: { heading: string; content: string }[];
}> = {
  zh: {
    privacy: [
      { heading: '数据保存与安全', content: '本站不设置访客账户，也不自行收集游客评论。网站运行所需的服务器日志及分析数据可能由托管服务和 Google 依其政策处理。我们不会出售访客个人信息。' },
      { heading: '外部链接与地图', content: '点击 Google Maps 或柬埔寨旅游信息网站等外部链接后，相关服务可能按照其自身政策处理访问数据。本站无法控制第三方网站的 Cookie。' },
      { heading: '联系与更新', content: '如需查询、更正或提出隐私问题，请联系 laupetter72@gmail.com。若数据处理方式发生变化，我们将更新本政策及日期。' },
    ],
    terms: [
      { heading: '地图、评分与旅游资料', content: '地图链接与公众评分来自第三方平台；营业时间、交通及摊位信息可能变动。请在出行前现场核实。本站不代售门票、不提供预订，也不代表夜市管理单位。' },
      { heading: '图片与资料来源', content: '站内照片的产权与版权归各自摄影者所有。城市与旅游信息参考金边市及柬埔寨旅游公开资料；官方国家旅游资料可访问 tourismcambodia.com。' },
      { heading: '反馈与修订', content: '如发现内容错误、链接失效或其他问题，可发送邮件至 laupetter72@gmail.com。我们可能根据新资料修订页面与条款。' },
    ],
    cookies: [
      { heading: '设置如何生效', content: '必要的技术功能无法关闭。分析 Cookie 只有在您允许后才可用于 Google Analytics；拒绝后将保持关闭。您的选择储存在当前浏览器中，可随时返回此页修改。' },
      { heading: '浏览器与第三方服务', content: '您也可以通过浏览器设置清除 Cookie 或本地存储。点击 Google Maps 等外部服务时，其 Cookie 由第三方自行管理。本站不提供个性化广告 Cookie。' },
    ],
  },
  en: {
    privacy: [
      { heading: 'Retention and security', content: 'We do not create visitor accounts or collect first-party reviews. Hosting providers and Google may process server logs or analytics data under their own policies. We do not sell personal data.' },
      { heading: 'External maps and links', content: 'Following links to Google Maps or Cambodian tourism resources may allow those services to process your visit under their own privacy policies. We do not control third-party cookies.' },
      { heading: 'Contact and updates', content: 'For privacy questions or correction requests, contact laupetter72@gmail.com. We will revise this policy and its date if our data practices change.' },
    ],
    terms: [
      { heading: 'Maps, ratings and visitor information', content: 'Map links and public ratings come from third parties. Hours, transport and stall availability may change; verify essential details on site. We do not sell tickets, take bookings or represent market management.' },
      { heading: 'Photographs and sources', content: 'All photographs remain the property and copyright of their respective photographers. Public city and tourism materials inform the guide; national tourism information is available at tourismcambodia.com.' },
      { heading: 'Corrections and updates', content: 'Report inaccurate information or broken links to laupetter72@gmail.com. We may update content and these terms when new information becomes available.' },
    ],
    cookies: [
      { heading: 'How preferences work', content: 'Essential technical functions remain available. Google Analytics storage is permitted only when you opt in, and remains denied when you reject it. Your choice is stored in this browser and can be changed here.' },
      { heading: 'Browser controls and third parties', content: 'You can also clear cookies and local storage in your browser. External services such as Google Maps manage their own cookies. This website does not use personalised advertising cookies.' },
    ],
  },
  km: {
    privacy: [
      { heading: 'ការរក្សាទុក និងសុវត្ថិភាពទិន្នន័យ', content: 'គេហទំព័រនេះមិនបង្កើតគណនីអ្នកទស្សនា ឬប្រមូលមតិវាយតម្លៃផ្ទាល់ខ្លួនទេ។ អ្នកផ្តល់សេវាបង្ហោះ និង Google អាចដំណើរការកំណត់ហេតុម៉ាស៊ីនមេ ឬទិន្នន័យវិភាគតាមគោលការណ៍របស់ពួកគេ។ យើងមិនលក់ទិន្នន័យផ្ទាល់ខ្លួនទេ។' },
      { heading: 'ផែនទី និងតំណភ្ជាប់ខាងក្រៅ', content: 'ការចូលទៅ Google Maps ឬគេហទំព័រទេសចរណ៍ផ្សេងៗអាចធ្វើឱ្យសេវាទាំងនោះប្រមូលទិន្នន័យតាមគោលការណ៍របស់ខ្លួន។ យើងមិនគ្រប់គ្រង Cookie របស់ភាគីទីបីទេ។' },
      { heading: 'ទំនាក់ទំនង និងបច្ចុប្បន្នភាព', content: 'សម្រាប់សំណួរឯកជនភាព ឬសំណើកែតម្រូវ សូមទាក់ទង laupetter72@gmail.com។ ប្រសិនបើការប្រើប្រាស់ទិន្នន័យផ្លាស់ប្តូរ យើងនឹងកែប្រែគោលការណ៍ និងកាលបរិច្ឆេទ។' },
    ],
    terms: [
      { heading: 'ផែនទី ការវាយតម្លៃ និងព័ត៌មានទេសចរណ៍', content: 'តំណផែនទី និងពិន្ទុវាយតម្លៃមកពីភាគីទីបី។ ម៉ោងបើក ផ្លូវធ្វើដំណើរ និងតូបលក់អាចផ្លាស់ប្តូរ សូមពិនិត្យនៅទីតាំងមុនពេលទៅ។ យើងមិនលក់សំបុត្រ មិនទទួលការកក់ និងមិនតំណាងឱ្យអ្នកគ្រប់គ្រងផ្សារទេ។' },
      { heading: 'រូបថត និងប្រភពព័ត៌មាន', content: 'សិទ្ធិកម្មសិទ្ធិ និងរក្សាសិទ្ធិលើរូបថតជារបស់អ្នកថតរៀងៗខ្លួន។ ព័ត៌មានក្នុងមគ្គុទេសក៍យោងតាមប្រភពសាធារណៈអំពីទីក្រុង និងទេសចរណ៍។ ព័ត៌មានទេសចរណ៍ជាតិមាននៅ tourismcambodia.com។' },
      { heading: 'ការកែតម្រូវ និងធ្វើបច្ចុប្បន្នភាព', content: 'សូមរាយការណ៍ព័ត៌មានខុស ឬតំណមិនដំណើរការទៅ laupetter72@gmail.com។ យើងអាចកែប្រែអត្ថបទ និងលក្ខខណ្ឌនៅពេលមានព័ត៌មានថ្មី។' },
    ],
    cookies: [
      { heading: 'របៀបដំណើរការជម្រើស', content: 'មុខងារបច្ចេកទេសចាំបាច់នៅតែដំណើរការ។ Google Analytics អាចរក្សាទុកទិន្នន័យវិភាគតែពេលអ្នកអនុញ្ញាតប៉ុណ្ណោះ។ ជម្រើសត្រូវបានរក្សាទុកក្នុងកម្មវិធីរុករកនេះ ហើយអាចកែប្រែនៅទីនេះបាន។' },
      { heading: 'កម្មវិធីរុករក និងភាគីទីបី', content: 'អ្នកអាចលុប Cookie និងទិន្នន័យក្នុងកម្មវិធីរុករកបាន។ សេវាខាងក្រៅដូចជា Google Maps គ្រប់គ្រង Cookie របស់ខ្លួន។ គេហទំព័រនេះមិនប្រើ Cookie សម្រាប់ផ្សាយពាណិជ្ជកម្មផ្ទាល់ខ្លួនទេ។' },
    ],
  },
};
