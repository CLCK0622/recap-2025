import Image from "next/image";
import InfiniteMenu from "@/app/InfiniteMenu";

const items = [
    {
        image: '/0108.jpg',
        link: '',
        title: '0108',
        description: '和2512的经典寿喜烧聚餐'
    },
    {
        image: '/0112.jpg',
        link: '',
        title: '0112',
        description: '去昆山办点事情于是和zyqi一起跑去玩一圈'
    },
    {
        image: '/0115.jpg',
        link: '',
        title: '0115',
        description: '尼康佬第一次拍飞机！'
    },
    {
        image: '/0117.jpg',
        link: '',
        title: '0117',
        description: '回老家别人送的鸡'
    },
    {
        image: '/0119.jpg',
        link: '',
        title: '0119',
        description: '小小的老子'
    },
    {
        image: '/0128.jpg',
        link: '',
        title: '0128',
        description: '新年快乐！'
    },
    {
        image: '/0201.jpg',
        link: '',
        title: '0201',
        description: '寒假逛一下坡子街😋'
    },
    {
        image: '/0202.jpg',
        link: '',
        title: '0202',
        description: '虽然议论很多 但不得不说电影还是很精彩的'
    },
    {
        image: '/0204-1.jpg',
        link: '',
        title: '0204',
        description: '寒假的小旅行 在长沙吃饭'
    },
    {
        image: '/0204-2.jpg',
        link: '',
        title: '0204',
        description: '和好友一起逛橘子洲头'
    },
    {
        image: '/0204-3.jpg',
        link: '',
        title: '0204',
        description: 'zyqi点的两杯鸡尾酒'
    },
    {
        image: '/0205.jpg',
        link: '',
        title: '0205',
        description: '到lzc亲戚的饭店吃烧烤 真香'
    },
    {
        image: '/0206.jpg',
        link: '',
        title: '0206',
        description: '感觉是玩过的最帅的一家密室'
    },
    {
        image: '/0207.jpg',
        link: '',
        title: '0207',
        description: '逛三峡！'
    },
    {
        image: '/0208.jpg',
        link: '',
        title: '0208',
        description: '和zyq的摄影小作'
    },
    {
        image: '/0209-2.jpg',
        link: '',
        title: '0209',
        description: '苏州虎丘的梅花'
    },
    {
        image: '/0209.jpg',
        link: '',
        title: '0209',
        description: '第一次逛苏州园林'
    },
    {
        image: '/0214.jpg',
        link: '',
        title: '0214',
        description: '情人节和jcr吃云海肴'
    },
    {
        image: '/0215.jpg',
        link: '',
        title: '0215',
        description: '不记得哪里吃的了 但真的香'
    },
    {
        image: '/0216-2.jpg',
        link: '',
        title: '0216',
        description: '和三个帅哥一起吃西堤牛排'
    },
    {
        image: '/0216.jpg',
        link: '',
        title: '0216',
        description: 'chilis的薯条 当时觉得好贵 来美国之后发现是白菜价'
    },
    {
        image: '/0219.JPG',
        link: '',
        title: '0219',
        description: '回归6353'
    },
    {
        image: '/0221.jpg',
        link: '',
        title: '0221',
        description: '和朋友去吃的那时新疆 这个真好吃'
    },
    {
        image: '/0222-2.JPG',
        link: '',
        title: '0222',
        description: '吕少生日逛北外滩'
    },
    {
        image: '/0222.jpg',
        link: '',
        title: '0222',
        description: '第一次做牛排意面'
    },
    {
        image: '/0224.jpg',
        link: '',
        title: '0224',
        description: '科创大楼的日落'
    },
    {
        image: '/0302.jpg',
        link: '',
        title: '0302',
        description: '第一次旋焦就成功！'
    },
    {
        image: '/0313.jpg',
        link: '',
        title: '0313',
        description: '出征！'
    },
    {
        image: '/0314.jpg',
        link: '',
        title: '0314',
        description: '在赛场比赛 终于是表现得还行了'
    },
    {
        image: '/0316.jpg',
        link: '',
        title: '0316',
        description: '出华师大看到的美丽日落'
    },
    {
        image: '/0323.jpg',
        link: '',
        title: '0323',
        description: '尼康佬世纪公园打鸟'
    },
    {
        image: '/0325.png',
        link: 'https://www.clckkkkk.site/blog/journey-to-the-west',
        title: '0325',
        description: '宇宙探索编辑部 很喜欢的一部电影 前面博客写了影评'
    },
    {
        image: '/0330.jpg',
        link: '',
        title: '0330',
        description: '为数不多去学校的几次都在撸猫'
    },
    {
        image: '/0331.jpg',
        link: '',
        title: '0331',
        description: '猫条真好吃～'
    },
    {
        image: '/0402.jpg',
        link: '',
        title: '0402',
        description: '不想上学了 直接润新加坡去玩了'
    },
    {
        image: '/0405.jpg',
        link: '',
        title: '0405',
        description: '第一次 kayaking'
    },
    {
        image: '/0411.jpg',
        link: '',
        title: '0411',
        description: '第一次去环球影城'
    },
    {
        image: '/0413.jpg',
        link: '',
        title: '0413',
        description: '如镜的麦里芝水库'
    },
    {
        image: '/0417.jpg',
        link: '',
        title: '0417',
        description: '边吹海风边吃烧烤'
    },
    {
        image: '/0418.jpg',
        link: '',
        title: '0418',
        description: '在巴淡岛看到的童话般的灯塔'
    },
    {
        image: '/0419.jpg',
        link: '',
        title: '0419',
        description: '新航的飞机餐真好吃 TmT'
    },
    {
        image: '/0428.jpg',
        link: '',
        title: '0428',
        description: '苏少带我们吃海鲜自助'
    },
    {
        image: '/0502.jpg',
        link: '',
        title: '0502',
        description: '2025 熠曲丰碑！'
    },
    {
        image: '/0508.PNG',
        link: '',
        title: '0508',
        description: '拍毕业照咯'
    },
    {
        image: '/0513.jpg',
        link: '',
        title: '0513',
        description: '语文毕业微电影 可惜花絮一直没剪'
    },
    {
        image: '/0514.jpg',
        link: '',
        title: '0514',
        description: '挟持李哥 抢走他的a93！'
    },
    {
        image: '/0515.jpg',
        link: '',
        title: '0515',
        description: '青海湖边 与世隔绝的感受真好'
    },
    {
        image: '/0517.jpg',
        link: '',
        title: '0517',
        description: '大西北的七彩丹霞'
    },
    {
        image: '/0520.jpg',
        link: '',
        title: '0520',
        description: '成功会师 五彩池'
    },
    {
        image: '/0521.jpg',
        link: '',
        title: '0521',
        description: '下暴雨了也继续走'
    },
    {
        image: '/0523.jpg',
        link: '',
        title: '0523',
        description: '趁最后一天再玩一下青城山'
    },
    {
        image: '/0525.JPG',
        link: '',
        title: '0525',
        description: 'MAYDAY #5525 LIVE'
    },
    {
        image: '/0526.jpg',
        link: '',
        title: '0526',
        description: '去打卡西湖的卜卜'
    },
    {
        image: '/0605.jpg',
        link: '',
        title: '0605',
        description: '去迪士尼玩'
    },
    {
        image: '/0606.JPG',
        link: '',
        title: '0606',
        description: '做正经西餐'
    },
    {
        image: '/0607.JPG',
        link: '',
        title: '0607',
        description: '烤青花鱼吃'
    },
    {
        image: '/0609.jpg',
        link: '',
        title: '0609',
        description: '碟中谍8 传奇阿汤哥'
    },
    {
        image: '/0614.jpg',
        link: '',
        title: '0614',
        description: '第一次体验 Vision Pro'
    },
    {
        image: '/0617.jpg',
        link: '',
        title: '0617',
        description: '毕业咯！'
    },
    {
        image: '/0618.jpg',
        link: '',
        title: '0618',
        description: 'Builderup 先导活动'
    },
    {
        image: '/0623.jpg',
        link: '',
        title: '0623',
        description: '18岁生日！请大家吃醉辉煌'
    },
    {
        image: '/0708.jpg',
        link: '',
        title: '0708',
        description: '又回长沙'
    },
    {
        image: '/0713.jpg',
        link: '',
        title: '0713',
        description: '打卡ifc小熊'
    },
    {
        image: '/0717.jpg',
        link: '',
        title: '0717',
        description: '动手煲海鲜粥喝'
    },
    {
        image: '/0721-2.jpg',
        link: '',
        title: '0721',
        description: '出发去AdvX咯'
    },
    {
        image: '/0721.jpg',
        link: '',
        title: '0721',
        description: '临走前和同学吃个饭'
    },
    {
        image: '/0724.JPG',
        link: '',
        title: '0724',
        description: '干活干累了 和朋友去酒吧聊聊天'
    },
    {
        image: '/0725.jpg',
        link: '',
        title: '0725',
        description: '现场看到的马斯克机器人'
    },
    {
        image: '/0726.jpg',
        link: '',
        title: '0726',
        description: '我们的 Muse Deck'
    },
    {
        image: '/0727.JPG',
        link: '',
        title: '0727',
        description: '结束！路演完成'
    },
    {
        image: '/0728.jpg',
        link: '',
        title: '0728',
        description: '7.5 小组团聚 但淋成落汤鸡了'
    },
    {
        image: '/0731.jpg',
        link: '',
        title: '0731',
        description: '23天速通驾照'
    },
    {
        image: '/0809.JPG',
        link: '',
        title: '0809',
        description: '去新加坡国庆日咯'
    },
    {
        image: '/0810.jpg',
        link: '',
        title: '0810',
        description: '马来双子塔'
    },
    {
        image: '/0816.jpg',
        link: '',
        title: '0816',
        description: '香港一兰拉面 真的太好吃了'
    },
    {
        image: '/0817.jpg',
        link: '',
        title: '0817',
        description: '我是骄傲的USC新生.jpg'
    },
    {
        image: '/0818.jpg',
        link: '',
        title: '0818',
        description: '特斯拉机器人餐厅'
    },
    {
        image: '/0823.jpg',
        link: '',
        title: '0823',
        description: '烤三文鱼咖喱意面真好吃'
    },
    {
        image: '/0829.jpg',
        link: '',
        title: '0829',
        description: '第一次看橄榄球'
    },
    {
        image: '/0830.jpg',
        link: '',
        title: '0830',
        description: 'diy战斧牛排'
    },
    {
        image: '/0902.jpg',
        link: '',
        title: '0902',
        description: '远在美国观看中国阅兵'
    },
    {
        image: '/0908.jpg',
        link: '',
        title: '0908',
        description: '214物理实验'
    },
    {
        image: '/0914.jpg',
        link: '',
        title: '0914',
        description: '异国他乡给李哥过生日'
    },
    {
        image: '/0922.jpg',
        link: '',
        title: '0922',
        description: '再做牛排'
    },
    {
        image: '/0928.jpg',
        link: '',
        title: '0928',
        description: 'Founders 54 活动 SyncUP'
    },
    {
        image: '/1001.jpg',
        link: '',
        title: '1001',
        description: 'SocialFuse'
    },
    {
        image: '/1005.jpg',
        link: '',
        title: '1005',
        description: '街头碰到efz校友'
    },
    {
        image: '/1011.jpg',
        link: '',
        title: '1011',
        description: 'Foosball大战'
    },
    {
        image: '/1017.jpg',
        link: '',
        title: '1017',
        description: '214学习小组'
    },
    {
        image: '/1023.jpg',
        link: '',
        title: '1023',
        description: '刘少请我吃面馆'
    },
    {
        image: '/1024-2.jpg',
        link: '',
        title: '1024',
        description: 'CalHacks 12.0开幕'
    },
    {
        image: '/1024.jpg',
        link: '',
        title: '1024',
        description: '忙里偷闲逛斯坦福'
    },
    {
        image: '/1026.jpg',
        link: '',
        title: '1026',
        description: 'Pier39手机也能打鸟'
    },
    {
        image: '/1030.jpg',
        link: '',
        title: '1030',
        description: '：）'
    },
    {
        image: '/1031.jpg',
        link: '',
        title: '1031',
        description: '万圣节party！'
    },
    {
        image: '/1104.jpg',
        link: '',
        title: '1104',
        description: '做饭吃'
    },
    {
        image: '/1107.jpg',
        link: '',
        title: '1107',
        description: '绿街偶遇万仁杰 很好的法国老爷爷'
    },
    {
        image: '/1110.jpg',
        link: '',
        title: '1110',
        description: 'it台球桌巅峰对决'
    },
    {
        image: '/1111.jpg',
        link: '',
        title: '1111',
        description: 'it小疯子分队看极光'
    },
    {
        image: '/1115.jpg',
        link: '',
        title: '1115',
        description: '和lzl单挑保龄球'
    },
    {
        image: '/1118.jpg',
        link: '',
        title: '1118',
        description: '初试延边烧烤'
    },
    {
        image: '/1121.jpg',
        link: '',
        title: '1121',
        description: 'Northwestern！'
    },
    {
        image: '/1122.jpg',
        link: '',
        title: '1122',
        description: '打卡金门大桥🌁'
    },
    {
        image: '/1123.jpg',
        link: '',
        title: '1123',
        description: '又和刘少碰面'
    },
    {
        image: '/1124.jpg',
        link: '',
        title: '1124',
        description: '自驾一号公路'
    },
    {
        image: '/1129.jpg',
        link: '',
        title: '1129',
        description: '雪夜芝加哥'
    },
    {
        image: '/1130-2.jpg',
        link: '',
        title: '1130',
        description: '芝加哥360大厦'
    },
    {
        image: '/1130.jpg',
        link: '',
        title: '1130',
        description: 'Zootopia 2'
    },
    {
        image: '/1206.jpg',
        link: '',
        title: '1206',
        description: '第一次玩枪'
    },
    {
        image: '/1215.jpg',
        link: '',
        title: '1215',
        description: 'SFO每次转机必吃 太香了'
    },
    {
        image: '/1219.jpg',
        link: '',
        title: '1219',
        description: 'YEAH BBQ！'
    },
    {
        image: '/1225.jpg',
        link: '',
        title: '1225',
        description: '圣诞节洪涝预警 出门开船四百公里'
    },
    {
        image: '/1226.jpg',
        link: '',
        title: '1226',
        description: '尔湾天气真好'
    },
];

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <InfiniteMenu items={items} scale={0.9} />
    </div>
  );
}
