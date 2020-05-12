import Head from 'next/head'

export const Meta = ({ title }) => {
  const defaultTitle = 'GSN (Gas Stations Network)'
  title = title ? `${title} - ${defaultTitle}` : defaultTitle

  const url = `https://gsn-staging.netlify.com`
  const description = 'GSN abstracts away gas to minimize onboarding & UX friction for dapps. With GSN, gasless clients can interact with Ethereum contracts without users needing ETH for transaction fees.'
  const keywords = 'metatx gsn gas station network ethereum smart contract'
  const twitterHandle = '@GSN'

  return (
    <div>
      <Head>
        <title>{title}</title>

        <meta name='viewport' content='width=device-width,initial-scale=1,shrink-to-fit=no' />
        <meta charSet='utf-8' />

        <link rel='icon' type='image/png' href='/favicon.png' />

        <meta name='theme-color' content='#282844' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name='author' content='GSN' />
        <meta name='copyright' content='&copy; 2019' />

        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:site_name' content={title} />
        <meta property='og:url' content={url} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={`${url}/facebook_share_image_1200x630.png`} />
        <meta property='og:rich_attachment' content='true' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        
        <meta property='twitter:title' content={title} />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:site' content={twitterHandle} />
        <meta property='twitter:image:src' content={`${url}/twitter_share_image_800_418.png`} />
        <meta property='twitter:url' content={url} />
        <meta property='twitter:creator' content={twitterHandle} />
      </Head>
      {/* <style jsx global>{`
        body { 

        }
      `}</style> */}
    </div>
  )
}
