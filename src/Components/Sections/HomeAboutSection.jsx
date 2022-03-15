//Components
import Heading from '../Typography/Heading';
import Text from '../Typography/Text';

const AboutSection = () => {
  return (
    <section className='mx-[24px] mt-[48px] md:mt-[106px] lg:m-0 lg:mt-[251px]'>
      <Heading
        type={5}
        className='uppercase text-center leading-[19.2px] md:tracking-[3.38px] md:leading-[24px] lg:tracking-[4.72px] lg:leading-[33.6px] lg:text-left'>
        So, you want to travel to
      </Heading>
      <Heading className='mt-[16px] text-center leading-[100px] md:leading-[150px] lg:mt-[34px] lg:leading-[171.9px] lg:text-left'>
        SPACE
      </Heading>
      <Text className='mt-[16px] text-center text-light-purple md:min-auto md:align-top md:max-w-[444px] md:mx-auto lg:text-left lg:mt-[24px] lg:mx-0'>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </Text>
    </section>
  );
};

export default AboutSection;
