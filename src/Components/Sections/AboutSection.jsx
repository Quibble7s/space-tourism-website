//Components
import Heading from '../Typography/Heading';
import Text from '../Typography/Text';

const AboutSection = () => {
  return (
    <section className='mx-[24px] mt-[48px]'>
      <Heading type={5} className='uppercase text-center'>
        So, you want to travel to
      </Heading>
      <Heading className='mt-4 text-center'>SPACE</Heading>
      <Text className='mt-4 text-center text-light-purple'>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </Text>
    </section>
  );
};

export default AboutSection;
