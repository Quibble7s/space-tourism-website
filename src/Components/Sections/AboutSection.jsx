//Components
import Heading from '../Typography/Heading';
import Text from '../Typography/Text';

const AboutSection = () => {
  return (
    <section className='mx-[24px] mt-[48px]'>
      <Heading
        type={5}
        className='uppercase text-center leading-[19.2px] md:leading-[24px]'>
        So, you want to travel to
      </Heading>
      <Heading className='mt-[16px] text-center leading-[100px] md:leading-[150px]'>
        SPACE
      </Heading>
      <Text className='mt-[16px] min-h-[125px] text-center text-light-purple leading-[25px] md:min-h-[112px] md:leading-[28px] md:max-w-[444px] md:mx-auto'>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </Text>
    </section>
  );
};

export default AboutSection;
