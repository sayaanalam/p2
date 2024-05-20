import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

import { Container } from '../components/Container';
import { PageTitle } from '../components/PageTitle';
import { Photos } from '../components/Photos';
import { Resume } from '../components/Resume';
import { SocialLink } from '../components/SocialLink';
import { About, Name, SocialMedia } from '../data/lifeApi';

const seoTitle = 'Bartosz Jarocki';
const seoDescription =
  'A passionate software engineer with an eye for details based in Wrocław, Poland.';

export default function Home() {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${process.env.NEXT_PUBLIC_URL}`}
        openGraph={{
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/api/og?title=${seoTitle}&description=${seoDescription}`,
            },
          ],
        }}
      />
      <Container className="mt-9">
        <div className="max-w-2xl">
          <PageTitle>{Name}</PageTitle>
          <p className="mt-6 max-w-2xl text-base text-balance">{About}</p>
          <div className="mt-6 flex gap-6">
            {SocialMedia.map((socialProfile) => (
              <SocialLink
                key={socialProfile.name}
                aria-label={`Follow on ${socialProfile.name}`}
                href={socialProfile.link}
                icon={socialProfile.icon}
              />
            ))}
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-12">
        <div className="lg:ml-auto space-y-10 lg:pl-16 xl:pl-24">
          <Resume />
        </div>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 10,
  };
};
