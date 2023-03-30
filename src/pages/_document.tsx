import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
	return (
		<Html className="">
			<Head>
				<title>Fernando Julian - Tech Enthusiast</title>
				<link rel="icon" type="image/png" href="https://anahoward.me/images/eyesemoji.png" />
				<meta name="title" content="Ana Howard - Colourful Haired Human" />
				{/* facebook  / open graph */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="http://fjulian.my.id"></meta>
				<meta property="og:title" content="Ana Howard - Colourful Haired Human" />
				<meta property="og:description" content="" />
				<meta property="og:image" content="https://anahoward.me/images/preview.png"></meta>

				{/* twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://twitter.com/nandocoeg" />
				<meta property="twitter:title" content="Ana Howard - Colourful Haired Human" />
				<meta property="twitter:description" content="" />
				<meta property="twitter:image" content="https://anahoward.me/images/preview.png"></meta>

				{/* <!-- Google tag (gtag.js) --> */}
				<Script
       				 src="https://www.googletagmanager.com/gtag/js?id=G-HERRG7L4LP"
        				strategy="afterInteractive"
      			/>
      			<Script id="google-analytics" strategy="afterInteractive">
				{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){window.dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', 'G-HERRG7L4LP');
				`}
			</Script>
			</Head>
			<body className="bg-[#f7f2f2] dark:bg-gray-800">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
