import React from 'react';

const data_about = [
  {
    id: 1,
    title: '1、成熟较为懂事',
    text:
      '因为它们都是曾被抛弃的狗狗，所以会更加珍惜领养它们的主人，变得更忠心、成熟懂事、懂得知恩图报，也比一般狗狗来的听话，这些都是为了感谢主人收留它的恩情。'
  },
  {
    id: 2,
    title: '2、健康更有保障',
    text:
      '狗狗在进入领养程序之前，都会经过体检、免疫、驱虫等重要环节，因此，领养来的狗狗都是十分健康的，因为救助机构并不是以牟利为目的，所以会更加重视这些问题。'
  },
  {
    id: 3,
    title: '3、节省各种费用',
    text:
      '救助机构的狗狗通常都是免费领养，主人不需多付一笔钱去购买，而且供领养的狗狗都会完成基础的免疫，若是已成年都会做好结扎，除狗狗基本生活所需，其余多数资金都可省下。'
  },
  {
    id: 4,
    title: '4、制造更多救援',
    text:
      '因为救助机构有限，相对能收养的狗狗也就受到一定的限制，若能多收养狗狗，救助机构便有更多资金和空间，去收养更多无家可归的它们，给予更多狗狗生存的机会。'
  }
];

const About = (props) => {
  const text = data_about.map((data) => {
    return (
      <p>
        {data.title}
        <ul>
          <li>{data.text}</li>
        </ul>
      </p>
    );
  });

  return (
    <div className='about-header'>
      <div className='about-text'>
        <strong className='about-title'>
          收养流浪朋友的好处 领养不只是拯救生命！
        </strong>
        {text}
      </div>
    </div>
  );
};

export default About;
